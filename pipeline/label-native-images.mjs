#!/usr/bin/env node
import fs from "node:fs";
import path from "node:path";
import Anthropic from "@anthropic-ai/sdk";

function parseArgs() {
  const out = {
    manifest: "",
    out: "",
    matiere: "Inconnue",
    chapter: "Chapitre",
    publicRoot: "",
  };
  for (const a of process.argv.slice(2)) {
    if (a.startsWith("--manifest=")) out.manifest = a.slice("--manifest=".length);
    if (a.startsWith("--out=")) out.out = a.slice("--out=".length);
    if (a.startsWith("--matiere=")) out.matiere = a.slice("--matiere=".length);
    if (a.startsWith("--chapter=")) out.chapter = a.slice("--chapter=".length);
    if (a.startsWith("--public-root=")) out.publicRoot = a.slice("--public-root=".length);
  }
  return out;
}

function readPipelineEnv() {
  const envPath = path.join(process.cwd(), ".env");
  if (!fs.existsSync(envPath)) return;
  const lines = fs.readFileSync(envPath, "utf8").split("\n");
  for (const line of lines) {
    const m = line.match(/^([^#=]+)=(.*)$/);
    if (m) process.env[m[1].trim()] = m[2].trim();
  }
}

function extractFirstJsonObject(text) {
  const t = String(text || "");
  const s = t.indexOf("{");
  const e = t.lastIndexOf("}");
  if (s === -1 || e === -1 || e <= s) return null;
  try {
    return JSON.parse(t.slice(s, e + 1));
  } catch {
    return null;
  }
}

async function makeLegend(anthropic, model, imageBytes, { matiere, chapter }) {
  const prompt =
    "Tu es un assistant de pédagogie médicale. " +
    "Donne UNE légende courte en français (8 à 16 mots), précise, neutre, exploitable en fiche de cours. " +
    "Interdit: phrases longues, points, emojis. " +
    "Contexte matière: " +
    matiere +
    ", chapitre: " +
    chapter +
    ". " +
    'Retourne uniquement du JSON: {"legend":"..."}';

  function detectMediaType(buf) {
    if (buf.length >= 12 && buf[0] === 0x89 && buf[1] === 0x50 && buf[2] === 0x4e && buf[3] === 0x47) {
      return "image/png";
    }
    if (buf.length >= 3 && buf[0] === 0xff && buf[1] === 0xd8 && buf[2] === 0xff) {
      return "image/jpeg";
    }
    if (
      buf.length >= 12 &&
      buf[0] === 0x52 &&
      buf[1] === 0x49 &&
      buf[2] === 0x46 &&
      buf[3] === 0x46 &&
      buf[8] === 0x57 &&
      buf[9] === 0x45 &&
      buf[10] === 0x42 &&
      buf[11] === 0x50
    ) {
      return "image/webp";
    }
    return "image/png";
  }
  const mediaType = detectMediaType(imageBytes);

  const msg = await anthropic.messages.create({
    model,
    max_tokens: 90,
    messages: [
      {
        role: "user",
        content: [
          { type: "text", text: prompt },
          {
            type: "image",
            source: {
              type: "base64",
                media_type: mediaType,
              data: Buffer.from(imageBytes).toString("base64"),
            },
          },
        ],
      },
    ],
  });
  const parsed = extractFirstJsonObject(msg.content?.[0]?.text || "");
  if (!parsed || typeof parsed.legend !== "string" || !parsed.legend.trim()) return null;
  return parsed.legend.trim();
}

async function main() {
  readPipelineEnv();
  const { manifest, out, matiere, chapter, publicRoot } = parseArgs();
  if (!manifest || !out || !publicRoot) {
    throw new Error("Usage: --manifest=... --out=... --public-root=... [--matiere=...] [--chapter=...]");
  }
  const rows = JSON.parse(fs.readFileSync(manifest, "utf8"));
  const apiKey = process.env.ANTHROPIC_API_KEY;
  const model = process.env.ANTHROPIC_MODEL || "claude-sonnet-4-20250514";
  if (!apiKey) throw new Error("ANTHROPIC_API_KEY missing in pipeline/.env");
  const anthropic = new Anthropic({ apiKey });

  const normalized = [];
  for (let i = 0; i < rows.length; i += 1) {
    const r = rows[i];
    const abs = path.resolve(String(r.file));
    const img = fs.readFileSync(abs);
    const legend = (await makeLegend(anthropic, model, img, { matiere, chapter })) || `Illustration ${i + 1}`;
    const relFromPublic = "/" + path.relative(publicRoot, abs).replaceAll(path.sep, "/");
    normalized.push({
      id: `${chapter.toLowerCase().replace(/[^a-z0-9]+/g, "-")}-p${String(r.page).padStart(2, "0")}-i${String(i + 1).padStart(3, "0")}`,
      matiere,
      chapter,
      page: r.page,
      image: relFromPublic,
      width: r.width,
      height: r.height,
      legende: legend,
    });
    if ((i + 1) % 8 === 0) {
      fs.writeFileSync(out, JSON.stringify(normalized, null, 2));
      console.log(`labeled ${i + 1}/${rows.length}`);
    }
  }
  fs.writeFileSync(out, JSON.stringify(normalized, null, 2));
  console.log(`done: ${normalized.length} labeled images -> ${out}`);
}

main().catch((e) => {
  console.error(e.message || e);
  process.exit(1);
});

