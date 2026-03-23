#!/usr/bin/env node
/**
 * Extract illustrations from Biochimie polycopiés on Google Drive.
 * 
 * 1. Downloads "Polycopié_*.pdf" from each Biochimie chapter folder
 * 2. Extracts native images with pymupdf (Python)
 * 3. Filters with Claude (keeps only real visual schemas)
 * 4. Adds contextual caption banner
 * 5. Saves to public/schema-library/biochimie/
 */

import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { execSync, execFileSync } from "node:child_process";
import { google } from "googleapis";
import sharp from "sharp";
import Anthropic from "@anthropic-ai/sdk";

const ROOT = path.join(path.dirname(fileURLToPath(import.meta.url)), "..");
const PIPELINE_DIR = path.join(ROOT, "pipeline");
const CREDENTIALS_PATH = path.join(ROOT, "credentials.json");
const TOKEN_PATH = path.join(PIPELINE_DIR, "token.json");
const ENV_PATH = path.join(PIPELINE_DIR, ".env");
const OUTPUT_DIR = path.join(ROOT, "public", "schema-library", "biochimie");
const TMP_DIR = path.join(PIPELINE_DIR, "tmp-biochimie");

const BIOCHIMIE_FOLDER = "1Ypo3UWQuK40b8_a3vBT4kWd78BguUUWb";
const MIN_IMAGE_SIZE = 15000; // 15KB min
const MIN_WIDTH = 200;
const MIN_HEIGHT = 200;

function loadEnv() {
  if (!fs.existsSync(ENV_PATH)) return;
  for (const line of fs.readFileSync(ENV_PATH, "utf8").split("\n")) {
    const m = line.match(/^([^#=]+)=(.*)$/);
    if (m) process.env[m[1].trim()] = m[2].trim();
  }
}

function slugify(s) {
  return String(s || "").toLowerCase().normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "").replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");
}

async function getAuthClient() {
  const creds = JSON.parse(fs.readFileSync(CREDENTIALS_PATH, "utf8"));
  const { client_id, client_secret, redirect_uris } = creds.installed;
  const client = new google.auth.OAuth2(client_id, client_secret, redirect_uris[0]);
  client.setCredentials(JSON.parse(fs.readFileSync(TOKEN_PATH, "utf8")));
  return client;
}

async function downloadPdf(drive, fileId, destPath) {
  const res = await drive.files.get(
    { fileId, alt: "media", supportsAllDrives: true },
    { responseType: "arraybuffer" }
  );
  fs.writeFileSync(destPath, Buffer.from(res.data));
}

function extractNativeImages(pdfPath, outDir) {
  fs.mkdirSync(outDir, { recursive: true });
  const script = `
import fitz, sys, os
doc = fitz.open(sys.argv[1])
out = sys.argv[2]
idx = 0
for page_num in range(len(doc)):
    page = doc[page_num]
    images = page.get_images(full=True)
    for img_info in images:
        xref = img_info[0]
        try:
            pix = fitz.Pixmap(doc, xref)
            if pix.width < 200 or pix.height < 200:
                continue
            if pix.n > 4:
                pix = fitz.Pixmap(fitz.csRGB, pix)
            fname = f"img-p{page_num:03d}-{idx:03d}.png"
            pix.save(os.path.join(out, fname))
            idx += 1
        except Exception:
            continue
print(f"Extracted {idx} images")
`;
  const tmpScript = path.join(outDir, "_extract.py");
  fs.writeFileSync(tmpScript, script);
  try {
    const result = execFileSync("python3", [tmpScript, pdfPath, outDir], {
      encoding: "utf8", timeout: 120000,
    });
    console.log("  " + result.trim());
  } catch (e) {
    console.log("  pymupdf error:", e.message?.slice(0, 200));
  }
  if (fs.existsSync(tmpScript)) fs.unlinkSync(tmpScript);
}

function detectMediaType(buf) {
  if (buf[0] === 0x89 && buf[1] === 0x50) return "image/png";
  if (buf[0] === 0xff && buf[1] === 0xd8) return "image/jpeg";
  if (buf[0] === 0x52 && buf[1] === 0x49 && buf[8] === 0x57 && buf[9] === 0x45) return "image/webp";
  return "image/png";
}

async function isRealIllustration(anthropic, imagePath, chapitre) {
  const buf = fs.readFileSync(imagePath);
  if (buf.length < MIN_IMAGE_SIZE) return { keep: false, reason: "too small" };

  const meta = await sharp(buf).metadata();
  if (meta.width < MIN_WIDTH || meta.height < MIN_HEIGHT) return { keep: false, reason: "too small dims" };

  const mediaType = detectMediaType(buf);
  
  // Resize for API
  const preview = await sharp(buf).resize(800, 800, { fit: "inside" }).png().toBuffer();

  try {
    const msg = await anthropic.messages.create({
      model: "claude-sonnet-4-20250514",
      max_tokens: 150,
      messages: [{
        role: "user",
        content: [
          {
            type: "text",
            text: `This image was extracted from a medical/biochemistry PDF about "${chapitre}".
Classify it as ONE of:
- ILLUSTRATION: real visual schema, molecular structure, 3D model, colored diagram, graph, curve, biological pathway, cell diagram
- REJECT: text page, math formula, data table, page header/footer, mostly text with tiny figure, decorative element

Reply with ONLY "ILLUSTRATION" or "REJECT" on the first line.
If ILLUSTRATION, on the second line give a short French title (max 10 words).
On the third line, give 3 bullet points in French explaining the schema for a student.`
          },
          {
            type: "image",
            source: { type: "base64", media_type: "image/png", data: preview.toString("base64") }
          }
        ]
      }]
    });

    const text = msg.content[0]?.text || "";
    const lines = text.trim().split("\n").map(l => l.trim()).filter(Boolean);
    
    if (lines[0]?.toUpperCase().includes("REJECT")) {
      return { keep: false, reason: "AI rejected" };
    }
    
    const title = lines[1] || chapitre;
    const bullets = lines.slice(2, 5).map(l => l.replace(/^[-•*]\s*/, "")).filter(Boolean);
    
    return { keep: true, title, bullets };
  } catch (e) {
    console.log("    AI error:", e.message?.slice(0, 100));
    return { keep: true, title: chapitre, bullets: [] };
  }
}

async function addCaptionBanner(imagePath, title, bullets, outputPath) {
  const img = sharp(imagePath);
  const meta = await img.metadata();
  const targetWidth = Math.max(800, meta.width);
  
  const bulletText = bullets.map(b => `• ${b}`).join("\n");
  const bannerHeight = 80 + bullets.length * 22;
  
  const svgBanner = `<svg width="${targetWidth}" height="${bannerHeight}">
    <rect width="100%" height="100%" fill="#1a1a2e"/>
    <text x="20" y="30" fill="#E5C97A" font-family="Arial,sans-serif" font-size="16" font-weight="bold">${escapeXml(title)}</text>
    ${bullets.map((b, i) => 
      `<text x="20" y="${58 + i * 22}" fill="#cccccc" font-family="Arial,sans-serif" font-size="13">• ${escapeXml(b)}</text>`
    ).join("\n")}
  </svg>`;

  const resized = await sharp(imagePath)
    .resize(targetWidth, null, { fit: "inside", withoutEnlargement: false })
    .png()
    .toBuffer();

  const resizedMeta = await sharp(resized).metadata();

  const banner = await sharp(Buffer.from(svgBanner)).png().toBuffer();

  await sharp({
    create: {
      width: targetWidth,
      height: resizedMeta.height + bannerHeight,
      channels: 4,
      background: { r: 26, g: 26, b: 46, alpha: 1 }
    }
  })
    .composite([
      { input: resized, top: 0, left: Math.round((targetWidth - resizedMeta.width) / 2) },
      { input: banner, top: resizedMeta.height, left: 0 }
    ])
    .webp({ quality: 90 })
    .toFile(outputPath);
}

function escapeXml(s) {
  return String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&apos;");
}

async function main() {
  loadEnv();
  
  const anthropic = new Anthropic({ apiKey: process.env.ANTHROPIC_API_KEY });
  const authClient = await getAuthClient();
  const drive = google.drive({ version: "v3", auth: authClient });

  fs.mkdirSync(OUTPUT_DIR, { recursive: true });
  fs.mkdirSync(TMP_DIR, { recursive: true });

  // List chapter folders
  const foldersRes = await drive.files.list({
    q: `'${BIOCHIMIE_FOLDER}' in parents and mimeType='application/vnd.google-apps.folder' and trashed=false`,
    fields: "files(id,name)", pageSize: 100,
    supportsAllDrives: true, includeItemsFromAllDrives: true,
  });

  const chapters = (foldersRes.data.files || [])
    .filter(f => !/acides.amin/i.test(f.name))
    .sort((a, b) => a.name.localeCompare(b.name));

  console.log(`\n📚 ${chapters.length} chapitres Biochimie à traiter\n`);

  const allResults = [];
  let totalKept = 0;

  for (const chapter of chapters) {
    console.log(`\n📖 ${chapter.name}`);

    // Find polycopié PDF
    const pdfsRes = await drive.files.list({
      q: `'${chapter.id}' in parents and mimeType='application/pdf' and trashed=false`,
      fields: "files(id,name)", pageSize: 50,
      supportsAllDrives: true, includeItemsFromAllDrives: true,
    });

    const polyPdf = (pdfsRes.data.files || []).find(f => /poly/i.test(f.name));
    if (!polyPdf) {
      console.log("  ⏭️  Pas de polycopié, skip");
      continue;
    }

    console.log(`  📥 ${polyPdf.name}`);

    // Download
    const pdfPath = path.join(TMP_DIR, `${slugify(chapter.name)}.pdf`);
    await downloadPdf(drive, polyPdf.id, pdfPath);

    // Extract native images
    const imgDir = path.join(TMP_DIR, slugify(chapter.name));
    extractNativeImages(pdfPath, imgDir);

    // Get extracted images
    const images = fs.existsSync(imgDir)
      ? fs.readdirSync(imgDir).filter(f => /\.(png|jpg|jpeg)$/i.test(f)).sort()
      : [];

    console.log(`  🖼️  ${images.length} images extraites`);

    let chapterKept = 0;

    for (const imgFile of images) {
      const imgPath = path.join(imgDir, imgFile);

      // Filter with Claude
      const result = await isRealIllustration(anthropic, imgPath, chapter.name);
      
      if (!result.keep) {
        console.log(`    ❌ ${imgFile}: ${result.reason}`);
        continue;
      }

      console.log(`    ✅ ${imgFile}: ${result.title}`);

      // Output filename
      chapterKept++;
      const outName = `${slugify(chapter.name)}-illus-${String(chapterKept).padStart(2, "0")}.webp`;
      const outPath = path.join(OUTPUT_DIR, outName);

      // Add caption banner and save
      await addCaptionBanner(
        imgPath,
        result.title,
        result.bullets || [],
        outPath
      );

      allResults.push({
        file: outName,
        matiere: "biochimie",
        chapitre: chapter.name,
        title: result.title,
        bullets: result.bullets || [],
      });

      totalKept++;
    }

    console.log(`  📊 ${chapterKept} illustrations gardées`);
  }

  // Save manifest
  const manifestPath = path.join(OUTPUT_DIR, "manifest.json");
  fs.writeFileSync(manifestPath, JSON.stringify(allResults, null, 2));

  console.log(`\n✅ Terminé ! ${totalKept} illustrations au total`);
  console.log(`📁 ${OUTPUT_DIR}`);
  console.log(`📋 ${manifestPath}`);

  // Cleanup tmp
  fs.rmSync(TMP_DIR, { recursive: true, force: true });
}

main().catch(e => { console.error("FATAL:", e); process.exit(1); });
