/**
 * Translate English labels on biochimie schema images to French.
 * Uses Puppeteer to render positioned HTML overlays on original images.
 */
import puppeteer from "puppeteer";
import sharp from "sharp";
import { readFileSync } from "fs";
import path from "path";

const BASE = "public/schema-library/biochimie";

const IMAGES = [
  // ════════════════════════════════════════
  // Chromatin compaction levels  800 x 904
  // ════════════════════════════════════════
  {
    file: "acides-nucleiques-et-structure-des-genomes-illus-30.webp",
    width: 800, height: 904,
    patches: [
      // Step 1 text (top right)
      { x: 110, y: 18, w: 280, h: 65, bg: "#555", text: "Au niveau le plus simple,\nla chromatine est une double\nhélice d'ADN.", fontSize: 12, color: "#eee" },
      { x: 510, y: 18, w: 260, h: 22, bg: "#555", text: "Double hélice d'ADN", fontSize: 13, color: "#fff", bold: true },

      // Step 2 text
      { x: 50, y: 225, w: 260, h: 38, bg: "#555", text: "L'ADN s'associe aux histones\npour former des nucléosomes.", fontSize: 12, color: "#eee" },

      // Step 3 text (right)
      { x: 420, y: 130, w: 280, h: 55, bg: "#555", text: "Chaque nucléosome est composé\nde 8 protéines histones autour\ndesquelles l'ADN s'enroule 1,65 fois.", fontSize: 11, color: "#eee" },
      { x: 345, y: 218, w: 260, h: 22, bg: "#555", text: "Cœur du nucléosome\n(8 molécules d'histones)", fontSize: 10, color: "#ddd" },
      { x: 418, y: 247, w: 110, h: 18, bg: "#555", text: "Histone H1", fontSize: 11, color: "#eee" },

      // Step 4 text (right)
      { x: 530, y: 267, w: 240, h: 45, bg: "#555", text: "Un chromatosome = un\nnucléosome + l'histone H1.", fontSize: 11, color: "#eee" },
      { x: 465, y: 315, w: 160, h: 18, bg: "#555", text: "Chromatosome", fontSize: 12, color: "#fff", bold: true },

      // Step 5 text (right)
      { x: 540, y: 345, w: 240, h: 45, bg: "#555", text: "Les chromatosomes se replient\npour former une fibre de 30 nm.", fontSize: 11, color: "#eee" },

      // Step 6 text (left)
      { x: 20, y: 410, w: 250, h: 38, bg: "#555", text: "…qui forme des boucles\nde ~300 nm de longueur.", fontSize: 11, color: "#eee" },

      // Step 7 text (left bottom)
      { x: 20, y: 570, w: 300, h: 52, bg: "#555", text: "Les fibres de 300 nm sont\ncompressées et repliées pour\nformer une fibre de 250 nm.", fontSize: 11, color: "#eee" },
      { x: 70, y: 530, w: 200, h: 18, bg: "#555", text: "Fibre de 250 nm", fontSize: 11, color: "#ddd" },

      // Step 8 text (right bottom)
      { x: 430, y: 600, w: 320, h: 52, bg: "#555", text: "L'enroulement serré de la fibre\nde 250 nm produit la chromatide\ndu chromosome.", fontSize: 11, color: "#eee" },
    ],
  },

  // ════════════════════════════════════════
  // DNA vs RNA comparison  800 x 1208
  // ════════════════════════════════════════
  {
    file: "acides-nucleiques-et-structure-des-genomes-illus-21.webp",
    width: 800, height: 1208,
    patches: [
      { x: 290, y: 25, w: 210, h: 42, bg: "#fff", text: "Bases\nazotées", fontSize: 18, color: "#222", bold: true },
      { x: 235, y: 170, w: 120, h: 42, bg: "#fff", text: "Paires\nde bases", fontSize: 17, color: "#222", bold: true },
      { x: 200, y: 310, w: 330, h: 45, bg: "#fff", text: "Hélice de\nsucre-phosphate", fontSize: 18, color: "#222", bold: true },
      { x: 255, y: 720, w: 160, h: 22, bg: "#fff", text: "adénine", fontSize: 16, color: "#222" },
      { x: 255, y: 758, w: 160, h: 22, bg: "#fff", text: "thymine", fontSize: 16, color: "#222" },
      { x: 255, y: 795, w: 160, h: 22, bg: "#fff", text: "guanine", fontSize: 16, color: "#222" },
      { x: 255, y: 832, w: 160, h: 22, bg: "#fff", text: "cytosine", fontSize: 16, color: "#222" },
      { x: 255, y: 870, w: 160, h: 22, bg: "#fff", text: "uracile", fontSize: 16, color: "#222" },
      { x: 48, y: 935, w: 120, h: 32, bg: "#fff", text: "ADN", fontSize: 26, color: "#222", bold: true },
      { x: 560, y: 935, w: 120, h: 32, bg: "#fff", text: "ARN", fontSize: 26, color: "#222", bold: true },
    ],
  },

  // ════════════════════════════════════════
  // Chromosome to DNA helix  800 x 1055
  // ════════════════════════════════════════
  {
    file: "acides-nucleiques-et-structure-des-genomes-illus-23.webp",
    width: 800, height: 1055,
    patches: [
      { x: 18, y: 10, w: 180, h: 30, bg: "#fff", text: "Chromosome", fontSize: 18, color: "#222", bold: true },
      { x: 18, y: 48, w: 250, h: 22, bg: "#fff", text: "Chromatide  Chromatide", fontSize: 13, color: "#444" },
      { x: 10, y: 120, w: 110, h: 22, bg: "#fff", text: "Télomère", fontSize: 13, color: "#444" },
      { x: 10, y: 235, w: 120, h: 22, bg: "#fff", text: "Centromère", fontSize: 13, color: "#444" },
      { x: 10, y: 400, w: 110, h: 22, bg: "#fff", text: "Télomère", fontSize: 13, color: "#444" },
      { x: 400, y: 95, w: 100, h: 22, bg: "#fff", text: "Noyau", fontSize: 14, color: "#444" },
      { x: 480, y: 375, w: 80, h: 22, bg: "#fff", text: "Cellule", fontSize: 14, color: "#444" },
      { x: 370, y: 560, w: 120, h: 22, bg: "#efefef", text: "Histones", fontSize: 14, color: "#444" },
      { x: 520, y: 770, w: 180, h: 22, bg: "#fff", text: "Paires de bases", fontSize: 13, color: "#444" },
      { x: 340, y: 810, w: 210, h: 22, bg: "#fff", text: "ADN (double hélice)", fontSize: 13, color: "#444" },
    ],
  },

  // ════════════════════════════════════════
  // Protein structure levels  940 x 726
  // ════════════════════════════════════════
  {
    file: "structures-secondaires-illus-03.webp",
    width: 940, height: 726,
    patches: [
      { x: 150, y: 22, w: 120, h: 22, bg: "#fff", text: "Primaire", fontSize: 16, color: "#222", bold: true },
      { x: 120, y: 345, w: 150, h: 22, bg: "#fff", text: "Secondaire", fontSize: 16, color: "#222", bold: true },
      { x: 145, y: 430, w: 120, h: 22, bg: "#fff", text: "Hélices alpha", fontSize: 12, color: "#555" },
      { x: 310, y: 430, w: 120, h: 22, bg: "#fff", text: "Feuillets bêta", fontSize: 12, color: "#555" },
      { x: 620, y: 22, w: 120, h: 22, bg: "#fff", text: "Tertiaire", fontSize: 16, color: "#222", bold: true },
      { x: 605, y: 345, w: 150, h: 22, bg: "#fff", text: "Quaternaire", fontSize: 16, color: "#222", bold: true },
    ],
  },
];

function buildHtml(imgPath, width, height, patches) {
  const imgData = readFileSync(imgPath);
  const b64 = imgData.toString("base64");

  const divs = patches.map(p => {
    const base = `position:absolute;left:${p.x}px;top:${p.y}px;width:${p.w}px;height:${p.h}px;background:${p.bg||'#fff'};box-sizing:border-box;`;
    if (!p.text) return `<div style="${base}"></div>`;
    return `<div style="${base}display:flex;align-items:center;padding:0 4px;
      font-family:Helvetica,Arial,sans-serif;font-size:${p.fontSize||14}px;
      font-weight:${p.bold?'700':'500'};color:${p.color||'#333'};line-height:1.25;
      white-space:pre-line;">${esc(p.text)}</div>`;
  }).join("\n");

  return `<!DOCTYPE html><html><head><style>
*{margin:0;padding:0}body{width:${width}px;height:${height}px;overflow:hidden}
.c{position:relative;width:${width}px;height:${height}px}.c img{width:100%;height:100%;display:block}
</style></head><body><div class="c"><img src="data:image/webp;base64,${b64}"/>${divs}</div></body></html>`;
}

function esc(s) { return s.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;"); }

async function main() {
  const browser = await puppeteer.launch({ headless: true });
  for (const spec of IMAGES) {
    if (!spec.patches.length) { console.log(`⏭  ${spec.file}`); continue; }
    const imgPath = path.join(BASE, spec.file);
    const outPath = path.join(BASE, spec.file.replace(".webp", "-fr.webp"));
    console.log(`🔄 ${spec.file}...`);
    const page = await browser.newPage();
    await page.setViewport({ width: spec.width, height: spec.height, deviceScaleFactor: 2 });
    await page.setContent(buildHtml(imgPath, spec.width, spec.height, spec.patches), { waitUntil: "networkidle0" });
    const png = await page.screenshot({ type: "png", clip: { x: 0, y: 0, width: spec.width, height: spec.height } });
    await page.close();
    await sharp(png).webp({ quality: 93 }).toFile(outPath);
    console.log(`  ✅ ${outPath}`);
  }
  await browser.close();
  console.log("\n🎉 Done!");
}

main().catch(console.error);
