/**
 * Extrait la chaîne JSON du tableau MATIERES depuis src/data/content.js
 * sans regex fragile (gestion des crochets dans les chaînes JSON).
 */
function extractMatieresArrayJson(content) {
  const marker = "export const MATIERES = ";
  const startIdx = content.indexOf(marker);
  if (startIdx === -1) return null;

  let i = startIdx + marker.length;
  while (i < content.length && /\s/.test(content[i])) i++;
  if (content[i] !== "[") return null;

  let depth = 0;
  let inStr = false;
  let esc = false;
  const strStart = i;

  for (; i < content.length; i++) {
    const ch = content[i];
    if (inStr) {
      if (esc) {
        esc = false;
        continue;
      }
      if (ch === "\\") {
        esc = true;
        continue;
      }
      if (ch === '"') inStr = false;
      continue;
    }
    if (ch === '"') {
      inStr = true;
      continue;
    }
    if (ch === "[") depth++;
    else if (ch === "]") {
      depth--;
      if (depth === 0) return content.slice(strStart, i + 1);
    }
  }
  return null;
}

function parseMatieresFromContentFile(filePath) {
  const fs = require("fs");
  if (!fs.existsSync(filePath)) return [];
  const content = fs.readFileSync(filePath, "utf8");
  const jsonStr = extractMatieresArrayJson(content);
  if (!jsonStr) return [];
  try {
    return JSON.parse(jsonStr);
  } catch {
    return [];
  }
}

module.exports = {
  extractMatieresArrayJson,
  parseMatieresFromContentFile,
};
