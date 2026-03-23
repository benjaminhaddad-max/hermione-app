#!/usr/bin/env node
/**
 * Extracts diagram-only crops from PDF pages in a Google Drive folder.
 *
 * Output:
 *  - public/schema-library/<matiere>/<pdf>-pXX-sYY.webp
 *  - src/data/schemaLibrary.generated.json
 *
 * Usage:
 *   node pipeline/extract-drive-schemas.mjs --folder=<DRIVE_FOLDER_ID>
 *   node pipeline/extract-drive-schemas.mjs --folder=<ID> --max-pages=0
 */

import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { google } from "googleapis";
import sharp from "sharp";
import mupdf from "mupdf";
import Anthropic from "@anthropic-ai/sdk";

const ROOT = path.join(path.dirname(fileURLToPath(import.meta.url)), "..");
const PIPELINE_DIR = path.join(ROOT, "pipeline");
const CREDENTIALS_PATH = path.join(ROOT, "credentials.json");
const TOKEN_PATH = path.join(PIPELINE_DIR, "token.json");
const ENV_PATH = path.join(PIPELINE_DIR, ".env");
const OUTPUT_DIR = path.join(ROOT, "public", "schema-library");
const MANIFEST_PATH = path.join(ROOT, "src", "data", "schemaLibrary.generated.json");
const SCOPES = ["https://www.googleapis.com/auth/drive.readonly"];

function loadEnv() {
  if (!fs.existsSync(ENV_PATH)) return;
  const lines = fs.readFileSync(ENV_PATH, "utf8").split("\n");
  for (const line of lines) {
    const m = line.match(/^([^#=]+)=(.*)$/);
    if (m) process.env[m[1].trim()] = m[2].trim();
  }
}

function parseArgs() {
  const args = process.argv.slice(2);
  const out = { folder: process.env.DRIVE_FOLDER_ID || "", maxPages: 0, maxPdfSeconds: 90 };
  for (const a of args) {
    if (a.startsWith("--folder=")) out.folder = a.slice("--folder=".length);
    if (a.startsWith("--max-pages=")) {
      const n = Number.parseInt(a.slice("--max-pages=".length), 10);
      if (!Number.isNaN(n) && n >= 0) out.maxPages = n;
    }
    if (a.startsWith("--max-pdf-seconds=")) {
      const n = Number.parseInt(a.slice("--max-pdf-seconds=".length), 10);
      if (!Number.isNaN(n) && n > 0) out.maxPdfSeconds = n;
    }
  }
  return out;
}

function slugify(s) {
  return String(s || "")
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
}

function ensureDir(dir) {
  fs.mkdirSync(dir, { recursive: true });
}

async function getAuthClient() {
  const credentials = JSON.parse(fs.readFileSync(CREDENTIALS_PATH, "utf8"));
  const { client_id, client_secret, redirect_uris } = credentials.installed;
  const client = new google.auth.OAuth2(client_id, client_secret, redirect_uris[0]);
  if (!fs.existsSync(TOKEN_PATH)) {
    throw new Error("token.json missing. Run existing pipeline auth first.");
  }
  client.setCredentials(JSON.parse(fs.readFileSync(TOKEN_PATH, "utf8")));
  return client;
}

async function listFolders(drive, parentId) {
  const res = await drive.files.list({
    q: `'${parentId}' in parents and mimeType='application/vnd.google-apps.folder' and trashed=false`,
    fields: "files(id,name)",
    pageSize: 100,
    supportsAllDrives: true,
    includeItemsFromAllDrives: true,
  });
  return res.data.files || [];
}

async function listPdfsRecursively(drive, folderId, trail = []) {
  const pdfs = [];
  const filesRes = await drive.files.list({
    q: `'${folderId}' in parents and mimeType='application/pdf' and trashed=false`,
    fields: "files(id,name)",
    pageSize: 200,
    supportsAllDrives: true,
    includeItemsFromAllDrives: true,
  });
  for (const f of filesRes.data.files || []) {
    pdfs.push({ ...f, trail });
  }
  const folders = await listFolders(drive, folderId);
  for (const sub of folders) {
    const subPdfs = await listPdfsRecursively(drive, sub.id, [...trail, sub.name]);
    pdfs.push(...subPdfs);
  }
  return pdfs;
}

function isRelevantSchemaPdf(pdfName) {
  const name = String(pdfName || "").toLowerCase();
  if (!name.endsWith(".pdf")) return false;
  if (/^(fcds[_\-\s]|fiche[_\-\s]*de[_\-\s]*cours)/i.test(name)) return true;
  return false;
}

async function downloadPdfBuffer(drive, fileId) {
  const res = await drive.files.get(
    { fileId, alt: "media", supportsAllDrives: true },
    { responseType: "arraybuffer" }
  );
  return Buffer.from(res.data);
}

function rectArea([x0, y0, x1, y1]) {
  return Math.max(0, x1 - x0) * Math.max(0, y1 - y0);
}

function clampRect(rect, pageRect) {
  const [px0, py0, px1, py1] = pageRect;
  const x0 = Math.max(px0, Math.min(px1, rect[0]));
  const y0 = Math.max(py0, Math.min(py1, rect[1]));
  const x1 = Math.max(px0, Math.min(px1, rect[2]));
  const y1 = Math.max(py0, Math.min(py1, rect[3]));
  return [Math.min(x0, x1), Math.min(y0, y1), Math.max(x0, x1), Math.max(y0, y1)];
}

function expandRect(rect, pageRect, pad = 0.03) {
  const [x0, y0, x1, y1] = rect;
  const [px0, py0, px1, py1] = pageRect;
  const w = x1 - x0;
  const h = y1 - y0;
  return clampRect([x0 - w * pad, y0 - h * pad, x1 + w * pad, y1 + h * pad], [px0, py0, px1, py1]);
}

function unionRects(rects) {
  if (!rects.length) return null;
  let x0 = Number.POSITIVE_INFINITY;
  let y0 = Number.POSITIVE_INFINITY;
  let x1 = Number.NEGATIVE_INFINITY;
  let y1 = Number.NEGATIVE_INFINITY;
  for (const r of rects) {
    x0 = Math.min(x0, r[0]);
    y0 = Math.min(y0, r[1]);
    x1 = Math.max(x1, r[2]);
    y1 = Math.max(y1, r[3]);
  }
  return [x0, y0, x1, y1];
}

function intersectsOrNear(a, b, margin = 0.015, pageRect = [0, 0, 1, 1]) {
  const [px0, py0, px1, py1] = pageRect;
  const pageW = Math.max(1e-6, px1 - px0);
  const pageH = Math.max(1e-6, py1 - py0);
  const dx = Math.max(0, Math.max(a[0] - b[2], b[0] - a[2]));
  const dy = Math.max(0, Math.max(a[1] - b[3], b[1] - a[3]));
  const nx = dx / pageW;
  const ny = dy / pageH;
  return nx <= margin && ny <= margin;
}

function mergeNearbyRects(rects, pageRect) {
  const pending = [...rects];
  const merged = [];
  while (pending.length) {
    let current = pending.shift();
    let changed = true;
    while (changed) {
      changed = false;
      for (let i = pending.length - 1; i >= 0; i -= 1) {
        if (intersectsOrNear(current, pending[i], 0.018, pageRect)) {
          current = unionRects([current, pending[i]]);
          pending.splice(i, 1);
          changed = true;
        }
      }
    }
    merged.push(current);
  }
  return merged;
}

function overlapArea(a, b) {
  const x0 = Math.max(a[0], b[0]);
  const y0 = Math.max(a[1], b[1]);
  const x1 = Math.min(a[2], b[2]);
  const y1 = Math.min(a[3], b[3]);
  if (x1 <= x0 || y1 <= y0) return 0;
  return (x1 - x0) * (y1 - y0);
}

function textCoverageRatio(targetRect, textRects) {
  if (!targetRect || !Array.isArray(textRects) || !textRects.length) return 0;
  const area = rectArea(targetRect);
  if (area <= 0) return 0;
  let covered = 0;
  for (const t of textRects) {
    covered += overlapArea(targetRect, t);
  }
  return covered / area;
}

function scoreCandidate(rect, pageRect, keywordBoost) {
  const [px0, py0, px1, py1] = pageRect;
  const pageW = px1 - px0;
  const pageH = py1 - py0;
  const pageA = pageW * pageH;
  const a = rectArea(rect);
  const ratio = a / pageA;
  if (ratio < 0.03 || ratio > 0.92) return -999;

  const cx = (rect[0] + rect[2]) / 2;
  const cy = (rect[1] + rect[3]) / 2;
  const centerX = px0 + pageW / 2;
  const centerY = py0 + pageH / 2;
  const dist = Math.hypot((cx - centerX) / pageW, (cy - centerY) / pageH);
  const centerScore = 1 - Math.min(1, dist * 1.6);

  const ratioScore = ratio > 0.12 && ratio < 0.65 ? 1 : 0.4;
  return centerScore * 3 + ratioScore * 3 + (keywordBoost ? 1.5 : 0);
}

function detectSchemaRects(page) {
  const pageRect = page.getBounds();
  const pageArea = rectArea(pageRect);
  const st = page.toStructuredText();
  const pageText = (st.asText() || "").toLowerCase();
  const hasSchemaKeyword = /(schema|sch[ée]ma|figure|diagramme|illustration|legende|courbe|circuit|mecanisme)/i.test(pageText);

  const imageRects = [];
  const textRects = [];
  let charCount = 0;
  st.walk({
    onImageBlock: (bbox) => {
      const areaRatio = rectArea(bbox) / pageArea;
      // Ultra-strict mode: keep only standalone illustration-like blocks.
      if (areaRatio >= 0.02 && areaRatio <= 0.28) {
        imageRects.push(bbox);
      }
    },
    beginTextBlock: (bbox) => {
      if (rectArea(bbox) > pageArea * 0.001) textRects.push(bbox);
    },
    onChar: () => {
      charCount += 1;
    },
  });

  const candidates = imageRects
    .map((r) => expandRect(r, pageRect, 0.005))
    .map((r) => ({ rect: r, score: scoreCandidate(r, pageRect, hasSchemaKeyword) }))
    .filter((x) => x.score > -100)
    .sort((a, b) => b.score - a.score)
    .slice(0, 5)
    .map((x) => x.rect);

  return { hasSchemaKeyword, rects: candidates, pageRect, textRects, charCount };
}

function toPixelRect(pdfRect, pageRect, scale, pixWidth, pixHeight) {
  const [px0, py0, px1, py1] = pageRect;
  const pageH = py1 - py0;
  const x = Math.max(0, Math.floor((pdfRect[0] - px0) * scale));
  const w = Math.max(1, Math.ceil((pdfRect[2] - pdfRect[0]) * scale));
  const y = Math.max(0, Math.floor((pageH - (pdfRect[3] - py0)) * scale));
  const h = Math.max(1, Math.ceil((pdfRect[3] - pdfRect[1]) * scale));
  return {
    left: Math.min(x, Math.max(0, pixWidth - 1)),
    top: Math.min(y, Math.max(0, pixHeight - 1)),
    width: Math.min(w, Math.max(1, pixWidth - x)),
    height: Math.min(h, Math.max(1, pixHeight - y)),
  };
}

function normalizedToPdfRect(normRect, pageRect) {
  const [px0, py0, px1, py1] = pageRect;
  const pageW = px1 - px0;
  const pageH = py1 - py0;
  const x0 = px0 + normRect.x * pageW;
  const x1 = px0 + (normRect.x + normRect.w) * pageW;
  const y1 = py1 - normRect.y * pageH;
  const y0 = py1 - (normRect.y + normRect.h) * pageH;
  return clampRect([x0, y0, x1, y1], pageRect);
}

async function extractSchemasFromPdfBuffer(pdfBuffer, options = {}) {
  const scale = options.scale || 2;
  const maxPages = options.maxPages || 0;
  const startedAt = Date.now();
  const maxPdfMs = (options.maxPdfSeconds || 90) * 1000;
  const detectWithAI = options.detectWithAI || null;
  const validateCropWithAI = options.validateCropWithAI || null;
  const doc = mupdf.Document.openDocument(new Uint8Array(pdfBuffer), "application/pdf");
  const total = doc.countPages();
  const results = [];

  for (let pageIndex = 0; pageIndex < total; pageIndex += 1) {
    if (Date.now() - startedAt > maxPdfMs) {
      break;
    }
    if (maxPages > 0 && pageIndex >= maxPages) break;
    try {
      const page = doc.loadPage(pageIndex);
      const det = detectSchemaRects(page);
      const pix = page.toPixmap(mupdf.Matrix.scale(scale, scale), mupdf.ColorSpace.DeviceRGB, false);
      const pngBytes = Buffer.from(pix.asPNG());
      const meta = await sharp(pngBytes).metadata();
      const pixW = meta.width || 1;
      const pixH = meta.height || 1;

      const cropCandidates = [];
      if (Array.isArray(det.rects) && det.rects.length) {
        for (const pdfRect of det.rects) {
          const coverage = textCoverageRatio(pdfRect, det.textRects);
          const veryTextHeavyPage = det.charCount > 2600;
          // Ultra-strict filtering: keep only low-text illustration zones.
          if (coverage > 0.08) continue;
          if (veryTextHeavyPage && coverage > 0.05) continue;
          cropCandidates.push({
            crop: toPixelRect(pdfRect, det.pageRect, scale, pixW, pixH),
            cropPdfRect: pdfRect,
            cropSource: "image-block",
            textCoverage: coverage,
          });
        }
      } else if (det.hasSchemaKeyword && detectWithAI) {
        const aiRect = await detectWithAI(pngBytes);
        if (aiRect) {
          const aiPdfRect = normalizedToPdfRect(aiRect, det.pageRect);
          const coverage = textCoverageRatio(aiPdfRect, det.textRects);
          const veryTextHeavyPage = det.charCount > 2600;
          if (coverage > 0.08) continue;
          if (veryTextHeavyPage && coverage > 0.05) continue;
          cropCandidates.push({
            crop: {
              left: Math.max(0, Math.floor(aiRect.x * pixW)),
              top: Math.max(0, Math.floor(aiRect.y * pixH)),
              width: Math.max(1, Math.floor(aiRect.w * pixW)),
              height: Math.max(1, Math.floor(aiRect.h * pixH)),
            },
            cropPdfRect: aiPdfRect,
            cropSource: "ai",
            textCoverage: coverage,
          });
        }
      }

      for (const cand of cropCandidates) {
        const crop = { ...cand.crop };
        if (!Number.isFinite(crop.left) || !Number.isFinite(crop.top) || !Number.isFinite(crop.width) || !Number.isFinite(crop.height)) {
          continue;
        }

        crop.left = Math.max(0, Math.min(pixW - 1, Math.floor(crop.left)));
        crop.top = Math.max(0, Math.min(pixH - 1, Math.floor(crop.top)));
        crop.width = Math.max(1, Math.floor(crop.width));
        crop.height = Math.max(1, Math.floor(crop.height));
        if (crop.left + crop.width > pixW) crop.width = Math.max(1, pixW - crop.left);
        if (crop.top + crop.height > pixH) crop.height = Math.max(1, pixH - crop.top);
        if (crop.width < 2 || crop.height < 2) continue;

        const areaRatio = (crop.width * crop.height) / (pixW * pixH);
        const heightRatio = crop.height / pixH;
        // Strict anti full-page/table safeguard.
        if (areaRatio > 0.32 || heightRatio > 0.75) continue;

        const baseImage = sharp(pngBytes)
          .extract(crop)
          .trim({ threshold: 8 })
          .resize({ width: 1400, withoutEnlargement: true });
        const schemaPreviewPng = await baseImage.png().toBuffer();

        const outMeta = await sharp(schemaPreviewPng).metadata();
        if ((outMeta.width || 0) < 180 || (outMeta.height || 0) < 120) continue;
        if (validateCropWithAI) {
          const keep = await validateCropWithAI(schemaPreviewPng);
          if (!keep) continue;
        }
        const schemaOnly = await sharp(schemaPreviewPng).webp({ quality: 92 }).toBuffer();

        results.push({
          page: pageIndex + 1,
          image: schemaOnly,
          cropPdfRect: cand.cropPdfRect,
          cropSource: cand.cropSource,
          textCoverage: cand.textCoverage,
        });
      }
    } catch (e) {
      console.warn(`    page ${pageIndex + 1} skipped (${e.message})`);
      continue;
    }
  }

  return results;
}

function extractFirstJsonObject(text) {
  const t = String(text || "");
  const start = t.indexOf("{");
  const end = t.lastIndexOf("}");
  if (start === -1 || end === -1 || end <= start) return null;
  try {
    return JSON.parse(t.slice(start, end + 1));
  } catch {
    return null;
  }
}

function createClaudeSchemaDetector() {
  const useAiDetector = process.env.SCHEMA_DETECTOR_AI !== "0";
  if (!useAiDetector) return null;
  const apiKey = process.env.ANTHROPIC_API_KEY;
  if (!apiKey) return null;
  const anthropic = new Anthropic({ apiKey });
  const model = process.env.ANTHROPIC_MODEL || "claude-sonnet-4-20250514";

  return async function detectSchemaRectWithClaude(pngBuffer) {
    const b64 = Buffer.from(pngBuffer).toString("base64");
    const prompt =
      "Detect one main illustration-only zone (photo, biological drawing, anatomy illustration, chart image). " +
      "Exclude long paragraphs, bullet lists, exercise text blocks, page headers/footers and large tables. " +
      "Exclude isolated equations/formulas and text-only snippets. " +
      "Keep only the core visual schema/figure. " +
      "Return strict JSON only: " +
      '{"has_schema":true|false,"bbox":{"x":0..1,"y":0..1,"w":0..1,"h":0..1}} ' +
      "x,y,w,h are normalized image coordinates. " +
      "If no clear diagram, has_schema=false.";

    const msg = await anthropic.messages.create({
      model,
      max_tokens: 220,
      messages: [
        {
          role: "user",
          content: [
            { type: "text", text: prompt },
            {
              type: "image",
              source: {
                type: "base64",
                media_type: "image/png",
                data: b64,
              },
            },
          ],
        },
      ],
    });

    const text = msg.content?.[0]?.text || "";
    const parsed = extractFirstJsonObject(text);
    if (!parsed || !parsed.has_schema || !parsed.bbox) return null;
    const { x, y, w, h } = parsed.bbox;
    if ([x, y, w, h].some((n) => typeof n !== "number")) return null;
    if (w < 0.08 || h < 0.08) return null;
    return {
      x: Math.max(0, Math.min(1, x)),
      y: Math.max(0, Math.min(1, y)),
      w: Math.max(0, Math.min(1, w)),
      h: Math.max(0, Math.min(1, h)),
    };
  };
}

function createClaudeSchemaValidator() {
  const useAiValidator = process.env.SCHEMA_VALIDATOR_AI !== "0";
  if (!useAiValidator) return null;
  const apiKey = process.env.ANTHROPIC_API_KEY;
  if (!apiKey) return null;
  const anthropic = new Anthropic({ apiKey });
  const model = process.env.ANTHROPIC_MODEL || "claude-sonnet-4-20250514";

  return async function validateSchemaCropWithClaude(pngBuffer) {
    const b64 = Buffer.from(pngBuffer).toString("base64");
    const prompt =
      "Decide if this crop is a true standalone illustration/schematic figure. " +
      "Reject text-heavy blocks, formulas/equations, paragraphs, tables, and mixed page snippets. " +
      "Return strict JSON only: {\"keep\":true|false}.";

    const msg = await anthropic.messages.create({
      model,
      max_tokens: 80,
      messages: [
        {
          role: "user",
          content: [
            { type: "text", text: prompt },
            {
              type: "image",
              source: {
                type: "base64",
                media_type: "image/png",
                data: b64,
              },
            },
          ],
        },
      ],
    });
    const text = msg.content?.[0]?.text || "";
    const parsed = extractFirstJsonObject(text);
    if (!parsed || typeof parsed.keep !== "boolean") return false;
    return parsed.keep;
  };
}

async function main() {
  loadEnv();
  const { folder, maxPages, maxPdfSeconds } = parseArgs();
  if (!folder) {
    console.error("Missing --folder=<DRIVE_FOLDER_ID>");
    process.exit(1);
  }

  ensureDir(OUTPUT_DIR);
  const auth = await getAuthClient();
  const drive = google.drive({ version: "v3", auth });
  const detectWithAI = createClaudeSchemaDetector();
  const validateCropWithAI = createClaudeSchemaValidator();
  const matieres = await listFolders(drive, folder);
  const manifest = [];

  function deriveChapterFromPdfName(name) {
    return String(name || "")
      .replace(/\.pdf$/i, "")
      .replace(/^fcds[_\-\s]*/i, "")
      .replace(/^fiche\s*de\s*cours[_\-\s]*/i, "")
      .replace(/[_-]+/g, " ")
      .replace(/\s+/g, " ")
      .trim();
  }

  console.log(`Scanning ${matieres.length} subject folders...`);
  for (const mat of matieres) {
    const matSlug = slugify(mat.name);
    const matOut = path.join(OUTPUT_DIR, matSlug);
    ensureDir(matOut);

    const pdfs = await listPdfsRecursively(drive, mat.id, [mat.name]);
    const relevantPdfs = pdfs.filter((p) => isRelevantSchemaPdf(p.name));
    console.log(`- ${mat.name}: ${relevantPdfs.length}/${pdfs.length} pdf pertinents`);

    for (const pdf of relevantPdfs) {
      try {
        console.log(`  > ${pdf.name}`);
        const pdfSlug = slugify(pdf.name.replace(/\.pdf$/i, ""));
        const buffer = await downloadPdfBuffer(drive, pdf.id);
        const schemas = await extractSchemasFromPdfBuffer(buffer, {
          maxPages,
          maxPdfSeconds,
          detectWithAI,
          validateCropWithAI,
        });
        if (!schemas.length) continue;

        let i = 0;
        for (const s of schemas) {
          i += 1;
          const fileName = `${pdfSlug}-p${String(s.page).padStart(2, "0")}-s${String(i).padStart(2, "0")}.webp`;
          const abs = path.join(matOut, fileName);
          fs.writeFileSync(abs, s.image);
          manifest.push({
            id: `${matSlug}-${pdfSlug}-p${s.page}-s${i}`,
            matiere: mat.name,
            sourcePdf: pdf.name,
            chapter: deriveChapterFromPdfName(pdf.name),
            legende: `Schema ${i} — ${deriveChapterFromPdfName(pdf.name)} (p.${s.page})`,
            page: s.page,
            image: `/schema-library/${matSlug}/${fileName}`,
            cropSource: s.cropSource || "unknown",
            textCoverage: Number.isFinite(s.textCoverage) ? Number(s.textCoverage.toFixed(4)) : null,
          });
        }
        console.log(`    extracted: ${schemas.length}`);
      } catch (e) {
        console.error(`  ! failed ${pdf.name}: ${e.message}`);
      }
    }
  }

  fs.writeFileSync(MANIFEST_PATH, JSON.stringify(manifest, null, 2));
  console.log(`Done. ${manifest.length} schema images exported.`);
  console.log(`Manifest: ${MANIFEST_PATH}`);
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});

