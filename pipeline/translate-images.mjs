/**
 * Translate English text on biochimie schema images to French.
 * Uses sharp to overlay French text (via SVG) on top of original images,
 * covering English text with background-color rectangles first.
 *
 * Each image has manually specified annotation patches.
 */
import sharp from "sharp";
import { readFileSync, mkdirSync, existsSync } from "fs";
import path from "path";

const SRC = "public/schema-library/biochimie";
const OUT = "public/schema-library/biochimie";

/**
 * Each patch: { x, y, w, h, bg, text, fontSize, color, textX, textY }
 *   bg = background rect color (to cover English text)
 *   text = French replacement
 *   fontSize, color, textX, textY = fine-tuning text placement
 */
const IMAGE_PATCHES = {
  "acides-nucleiques-et-structure-des-genomes-illus-29.webp": {
    width: 1551, height: 603,
    patches: [
      // Title
      { x: 670, y: 15, w: 420, h: 28, bg: "#f5f0e0", text: "Composants principaux du génome humain", fontSize: 15, color: "#333", textX: 680, textY: 35 },
      // Pie chart labels
      { x: 1140, y: 100, w: 180, h: 20, bg: "#f5f0e0", text: "SINE 13%", fontSize: 12, color: "#333", textX: 1150, textY: 115 },
      { x: 830, y: 78, w: 200, h: 20, bg: "#f5f0e0", text: "Rétrotransposons LTR 8%", fontSize: 11, color: "#333", textX: 840, textY: 93 },
      { x: 850, y: 105, w: 180, h: 20, bg: "#f5f0e0", text: "Transposons ADN 3%", fontSize: 11, color: "#333", textX: 860, textY: 120 },
      { x: 790, y: 132, w: 220, h: 20, bg: "#f5f0e0", text: "Répétitions simples 3%", fontSize: 11, color: "#333", textX: 800, textY: 147 },
      { x: 830, y: 158, w: 180, h: 24, bg: "#f5f0e0", text: "Duplications segmentaires 5%", fontSize: 11, color: "#333", textX: 840, textY: 175 },
      { x: 770, y: 195, w: 250, h: 24, bg: "#f5f0e0", text: "Hétérochromatine diverse 8%", fontSize: 11, color: "#333", textX: 780, textY: 212 },
      { x: 770, y: 228, w: 250, h: 24, bg: "#f5f0e0", text: "Séquences uniques diverses 12%", fontSize: 11, color: "#333", textX: 780, textY: 245 },
      { x: 1240, y: 180, w: 180, h: 20, bg: "#f5f0e0", text: "LINE 20%", fontSize: 12, color: "#333", textX: 1250, textY: 195 },
      { x: 1240, y: 220, w: 180, h: 30, bg: "#f5f0e0", text: "Gènes codants 1,5%", fontSize: 11, color: "#333", textX: 1250, textY: 240 },
      { x: 1060, y: 320, w: 160, h: 20, bg: "#f5f0e0", text: "Introns 26%", fontSize: 12, color: "#333", textX: 1070, textY: 335 },
      // Axis labels
      { x: 80, y: 398, w: 200, h: 22, bg: "#f5f0e0", text: "Taille du génome (Mb)", fontSize: 12, color: "#333", textX: 90, textY: 415 },
      { x: 400, y: 398, w: 140, h: 22, bg: "#f5f0e0", text: "ADN codant", fontSize: 12, color: "#333", textX: 410, textY: 415 },
      // Vertical text - hard to overlay, skip for now
      { x: 600, y: 60, w: 150, h: 300, bg: "none", text: "", fontSize: 0 },
    ].filter(p => p.text),
  },
};

function buildSvgOverlay(width, height, patches) {
  const rects = patches.map(p => {
    let r = "";
    if (p.bg && p.bg !== "none") {
      r += `<rect x="${p.x}" y="${p.y}" width="${p.w}" height="${p.h}" fill="${p.bg}" />`;
    }
    if (p.text) {
      const tx = p.textX || p.x + 4;
      const ty = p.textY || p.y + p.h - 5;
      const fs = p.fontSize || 14;
      const fc = p.color || "#333";
      r += `<text x="${tx}" y="${ty}" font-family="Helvetica, Arial, sans-serif" font-size="${fs}" fill="${fc}" font-weight="600">${escapeXml(p.text)}</text>`;
    }
    return r;
  }).join("\n");

  return `<svg xmlns="http://www.w3.org/2000/svg" width="${width}" height="${height}">${rects}</svg>`;
}

function escapeXml(s) {
  return s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
}

async function processImage(filename, spec) {
  const inputPath = path.join(SRC, filename);
  const outputPath = path.join(OUT, filename.replace(".webp", "-fr.webp"));

  console.log(`Processing ${filename} (${spec.patches.length} patches)...`);

  const svg = buildSvgOverlay(spec.width, spec.height, spec.patches);
  const svgBuf = Buffer.from(svg);

  await sharp(inputPath)
    .composite([{ input: svgBuf, top: 0, left: 0 }])
    .webp({ quality: 92 })
    .toFile(outputPath);

  console.log(`  ✓ Saved ${outputPath}`);
}

async function main() {
  for (const [filename, spec] of Object.entries(IMAGE_PATCHES)) {
    await processImage(filename, spec);
  }
  console.log("\nDone! All translated images saved.");
}

main().catch(console.error);
