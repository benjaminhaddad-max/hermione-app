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
  const vectorRects = [];
  st.walk({
    onImageBlock: (bbox) => {
      if (rectArea(bbox) > pageArea * 0.02) imageRects.push(bbox);
    },
    onVector: (bbox) => {
      if (rectArea(bbox) > pageArea * 0.002) vectorRects.push(bbox);
    },
  });

  const candidates = [];
  for (const r of imageRects) candidates.push(r);
  if (vectorRects.length >= 10) {
    const u = unionRects(vectorRects);
    if (u) candidates.push(u);
  }

  if (!candidates.length) return { hasSchemaKeyword, rect: null, pageRect };

  let best = null;
  let bestScore = -9999;
  for (const r of candidates) {
    const e = expandRect(r, pageRect, 0.04);
    const s = scoreCandidate(e, pageRect, hasSchemaKeyword);
    if (s > bestScore) {
      bestScore = s;
      best = e;
    }
  }
  return { hasSchemaKeyword, rect: best, pageRect };
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

async function extractSchemasFromPdfBuffer(pdfBuffer, options = {}) {
  const scale = options.scale || 2;
  const maxPages = options.maxPages || 0;
  const startedAt = Date.now();
  const maxPdfMs = (options.maxPdfSeconds || 90) * 1000;
  const detectWithAI = options.detectWithAI || null;
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

      let crop = null;
      if (det.rect) {
        crop = toPixelRect(det.rect, det.pageRect, scale, pixW, pixH);
      } else if (det.hasSchemaKeyword && detectWithAI) {
        const aiRect = await detectWithAI(pngBytes);
        if (aiRect) {
          crop = {
            left: Math.max(0, Math.floor(aiRect.x * pixW)),
            top: Math.max(0, Math.floor(aiRect.y * pixH)),
            width: Math.max(1, Math.floor(aiRect.w * pixW)),
            height: Math.max(1, Math.floor(aiRect.h * pixH)),
          };
        }
      }

      if (!crop) continue;
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

      const schemaOnly = await sharp(pngBytes)
        .extract(crop)
        .trim({ threshold: 8 })
        .resize({ width: 1400, withoutEnlargement: true })
        .webp({ quality: 92 })
        .toBuffer();

      const outMeta = await sharp(schemaOnly).metadata();
      if ((outMeta.width || 0) < 180 || (outMeta.height || 0) < 120) continue;

      results.push({
        page: pageIndex + 1,
        image: schemaOnly,
        cropPdfRect: det.rect,
      });
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
  const apiKey = process.env.ANTHROPIC_API_KEY;
  if (!apiKey) return null;
  const anthropic = new Anthropic({ apiKey });
  const model = process.env.ANTHROPIC_MODEL || "claude-sonnet-4-20250514";

  return async function detectSchemaRectWithClaude(pngBuffer) {
    const b64 = Buffer.from(pngBuffer).toString("base64");
    const prompt =
      "Detect the main educational diagram zone only. " +
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
  const matieres = await listFolders(drive, folder);
  const manifest = [];

  console.log(`Scanning ${matieres.length} subject folders...`);
  for (const mat of matieres) {
    const matSlug = slugify(mat.name);
    const matOut = path.join(OUTPUT_DIR, matSlug);
    ensureDir(matOut);

    const pdfs = await listPdfsRecursively(drive, mat.id, [mat.name]);
    console.log(`- ${mat.name}: ${pdfs.length} pdf`);

    for (const pdf of pdfs) {
      try {
        console.log(`  > ${pdf.name}`);
        const pdfSlug = slugify(pdf.name.replace(/\.pdf$/i, ""));
        const buffer = await downloadPdfBuffer(drive, pdf.id);
        const schemas = await extractSchemasFromPdfBuffer(buffer, {
          maxPages,
          maxPdfSeconds,
          detectWithAI,
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
            page: s.page,
            image: `/schema-library/${matSlug}/${fileName}`,
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

