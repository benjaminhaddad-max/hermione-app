/**
 * Renders HTML template files to WebP images using Puppeteer.
 * Each HTML file is a faithful French recreation of an original schema.
 */
import puppeteer from "puppeteer";
import sharp from "sharp";
import { readFileSync } from "fs";
import path from "path";

const OUT = "public/schema-library/biochimie";

const PAGES = [
  {
    html: "pipeline/gen-genome-chart-fr.html",
    out: "acides-nucleiques-et-structure-des-genomes-illus-29-fr.webp",
    width: 1551,
    height: 603,
  },
];

async function main() {
  const browser = await puppeteer.launch({ headless: true });

  for (const p of PAGES) {
    console.log(`🔄 Rendering ${p.html}...`);
    const page = await browser.newPage();
    await page.setViewport({ width: p.width, height: p.height, deviceScaleFactor: 2 });

    const htmlContent = readFileSync(p.html, "utf-8");
    await page.setContent(htmlContent, { waitUntil: "networkidle0" });

    const pngBuf = await page.screenshot({
      type: "png",
      clip: { x: 0, y: 0, width: p.width, height: p.height },
    });
    await page.close();

    const outPath = path.join(OUT, p.out);
    await sharp(pngBuf).webp({ quality: 93 }).toFile(outPath);
    console.log(`  ✅ ${outPath}`);
  }

  await browser.close();
  console.log("\n🎉 Done!");
}

main().catch(console.error);
