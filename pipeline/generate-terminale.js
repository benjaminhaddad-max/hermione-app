#!/usr/bin/env node
/**
 * Pipeline Hermione — Terminale
 * Lit les PDFs dans les sous-dossiers "Fiches de cours" depuis Google Drive,
 * génère fiches + flashcards + QCM pour chaque cours via Claude,
 * et ajoute les matières Terminale au content.js en préservant le PASS/LAS.
 *
 * Usage : node pipeline/generate-terminale.js [--concurrency=4]
 *
 * Plusieurs PDFs sont traités en parallèle (défaut : 3) pour aller plus vite.
 */

const fs   = require("fs");
const path = require("path");
const { parseMatieresFromContentFile } = require("./extractMatieresFromContent");
const { google }    = require("googleapis");
const Anthropic     = require("@anthropic-ai/sdk");
const pdfParse      = require("pdf-parse");

// ── Config ───────────────────────────────────────────────────────────────────
const envPath = path.join(__dirname, ".env");
if (fs.existsSync(envPath)) {
  for (const line of fs.readFileSync(envPath, "utf8").split("\n")) {
    const match = line.match(/^([^#=]+)=(.*)$/);
    if (match) process.env[match[1].trim()] = match[2].trim();
  }
}

const CREDENTIALS_PATH = path.join(__dirname, "../credentials.json");
const TOKEN_PATH       = path.join(__dirname, "token.json");
const OUTPUT_PATH      = path.join(__dirname, "../src/data/content.js");
const SCOPES           = ["https://www.googleapis.com/auth/drive.readonly"];

// Folder ID du dossier Terminale partagé
const TERMINALE_FOLDER_ID = "1K2aorrFOUZlGAMqYhknFnd7GjrvQfrom";

const anthropic = new Anthropic({ apiKey: process.env.ANTHROPIC_API_KEY });

// ── Mapping matières Terminale ────────────────────────────────────────────────
const MATIERE_MAP = {
  "svt":            { nom: "SVT",           emoji: "🌿", color: "#1B5E20" },
  "biologie":       { nom: "SVT",           emoji: "🌿", color: "#1B5E20" },
  "mathematiques":  { nom: "Mathématiques", emoji: "📐", color: "#1A237E" },
  "maths":          { nom: "Mathématiques", emoji: "📐", color: "#1A237E" },
  "math":           { nom: "Mathématiques", emoji: "📐", color: "#1A237E" },
  "physique":       { nom: "Physique-Chimie", emoji: "⚡", color: "#4A1010" },
  "chimie":         { nom: "Chimie",        emoji: "⚗️", color: "#2C5F2E" },
};

function resolveMatiere(nom) {
  const key = nom.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").trim();
  for (const [pattern, info] of Object.entries(MATIERE_MAP)) {
    if (key.includes(pattern)) return info;
  }
  return { nom, emoji: "📚", color: "#3A3A5C" };
}

const CHAPITRE_EMOJIS = ["📐","🔢","📊","📉","🔬","🌱","🧫","⚗️","⚡","🔭","🧲","🌊","🌡️","💧","🔩"];

// ── OAuth ────────────────────────────────────────────────────────────────────
async function getAuthClient() {
  const credentials = JSON.parse(fs.readFileSync(CREDENTIALS_PATH));
  const { client_id, client_secret, redirect_uris } = credentials.installed;
  const oAuth2 = new google.auth.OAuth2(client_id, client_secret, redirect_uris[0]);

  if (fs.existsSync(TOKEN_PATH)) {
    oAuth2.setCredentials(JSON.parse(fs.readFileSync(TOKEN_PATH)));
    return oAuth2;
  }

  const authUrl = oAuth2.generateAuthUrl({ access_type: "offline", scope: SCOPES });
  console.log("\n🔐 Ouvre ce lien dans ton navigateur :\n");
  console.log(authUrl);
  console.log("\nAprès autorisation, copie le code affiché et colle-le ici :");

  const code = await new Promise((resolve) => {
    process.stdout.write("Code : ");
    process.stdin.setEncoding("utf8");
    process.stdin.once("data", (d) => resolve(d.trim()));
  });

  const { tokens } = await oAuth2.getToken(code);
  oAuth2.setCredentials(tokens);
  fs.writeFileSync(TOKEN_PATH, JSON.stringify(tokens));
  console.log("✅ Token sauvegardé.\n");
  return oAuth2;
}

// ── Lister uniquement les PDFs dans un dossier "Fiches de cours" ─────────────
async function listerFichesDeCoursFolder(drive, parentId) {
  // Chercher le sous-dossier "Fiches de cours" dans parentId
  const res = await drive.files.list({
    q: `'${parentId}' in parents and mimeType='application/vnd.google-apps.folder' and trashed=false`,
    fields: "files(id, name)",
    pageSize: 20,
    supportsAllDrives: true,
    includeItemsFromAllDrives: true,
  });

  const fichesFolder = res.data.files.find(f =>
    f.name.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").includes("fiches de cours") ||
    f.name.toLowerCase().includes("fiche") ||
    f.name.toLowerCase().includes("cours")
  );

  if (!fichesFolder) {
    console.log(`  ⚠️  Pas de dossier "Fiches de cours" trouvé dans ce dossier.`);
    return [];
  }

  console.log(`  📂 Dossier trouvé : "${fichesFolder.name}"`);

  // Récupérer tous les PDFs dedans (et sous-dossiers)
  return await listerPDFsRecursif(drive, fichesFolder.id);
}

async function listerPDFsRecursif(drive, folderId) {
  const pdfs = [];

  const resPdfs = await drive.files.list({
    q: `'${folderId}' in parents and mimeType='application/pdf' and trashed=false`,
    fields: "files(id, name)",
    pageSize: 100,
    supportsAllDrives: true,
    includeItemsFromAllDrives: true,
  });
  pdfs.push(...resPdfs.data.files);

  const resDirs = await drive.files.list({
    q: `'${folderId}' in parents and mimeType='application/vnd.google-apps.folder' and trashed=false`,
    fields: "files(id, name)",
    pageSize: 20,
    supportsAllDrives: true,
    includeItemsFromAllDrives: true,
  });
  for (const sub of resDirs.data.files) {
    const subPdfs = await listerPDFsRecursif(drive, sub.id);
    pdfs.push(...subPdfs);
  }

  return pdfs;
}

// ── Télécharger un PDF ────────────────────────────────────────────────────────
async function telechargerPDF(drive, fileId) {
  const res = await drive.files.get(
    { fileId, alt: "media", supportsAllDrives: true },
    { responseType: "arraybuffer" }
  );
  return Buffer.from(res.data);
}

// ── Extraire le texte d'un PDF ────────────────────────────────────────────────
async function extraireTexte(buffer) {
  const data = await pdfParse(buffer);
  return data.text;
}

// ── Slugifier ─────────────────────────────────────────────────────────────────
function slugify(str) {
  return str.toLowerCase()
    .normalize("NFD").replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");
}

/** Évite les doublons (ex. 2× « Géométrie dans l'espace ») → 1 seul appel Claude. */
function dedupePdfs(pdfs) {
  const seen = new Set();
  const out = [];
  for (const p of pdfs) {
    const key = p.name.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/\s+/g, " ").trim();
    if (seen.has(key)) {
      console.log(`  ⏭️  Doublon ignoré : "${p.name}"`);
      continue;
    }
    seen.add(key);
    out.push(p);
  }
  return out;
}

function parseConcurrency() {
  const arg = process.argv.find((a) => /^--concurrency=\d+/.test(a));
  if (arg) return Math.min(8, Math.max(1, parseInt(arg.split("=")[1], 10)));
  const env = parseInt(process.env.TERMINALE_CONCURRENCY || "", 10);
  if (!Number.isNaN(env) && env > 0) return Math.min(8, env);
  return 3;
}

// ── Générer le contenu avec Claude ───────────────────────────────────────────
async function genererContenu(texte, titrePdf, matiere) {
  const prompt = `Tu es un assistant pédagogique expert pour les lycéens en Terminale (niveau Bac).

À partir du cours suivant, génère un contenu pédagogique structuré au format JSON strict.

MATIÈRE : ${matiere}
COURS : "${titrePdf}"

CONTENU DU COURS :
${texte.slice(0, 14000)}

INSTRUCTIONS :
1. "titrePropre" = titre court et clair du cours (ex: "Les suites numériques", "La membrane plasmique")
2. Flashcards : 10-14 cartes couvrant les points essentiels
3. Concepts : 6-10 définitions précises de termes clés
4. QCM : 8 questions de difficulté variée
5. Résumé : les 5-6 points les plus importants
6. Mnémo : un moyen mnémotechnique mémorable

Génère exactement ce JSON (sans markdown, juste le JSON brut) :
{
  "titrePropre": "titre court et clair",
  "emoji": "emoji pertinent",
  "flashcardsData": [
    { "q": "question courte et précise", "r": "réponse concise mais complète" }
  ],
  "fiche": {
    "page1_intro": {
      "titre": "Introduction",
      "texte": "paragraphe d'introduction clair (5-8 lignes)",
      "points_cles": ["point clé 1", "point clé 2", "point clé 3", "point clé 4"]
    },
    "page2_concepts": {
      "titre": "Concepts clés",
      "concepts": [
        { "terme": "terme clé", "definition": "définition claire et précise" }
      ]
    },
    "page3_schemas": {
      "titre": "Schémas & Méthodes",
      "schemas": []
    },
    "page4_formules": {
      "titre": "Formules & Données clés",
      "formules": [
        { "label": "nom", "formule": "expression", "unite": "unité ou null" }
      ],
      "donnees": [
        { "label": "paramètre", "valeur": "valeur" }
      ]
    },
    "page5_resume": {
      "titre": "À retenir",
      "points": ["essentiel 1", "essentiel 2", "essentiel 3", "essentiel 4", "essentiel 5"],
      "mnemo": "moyen mnémotechnique mémorable"
    }
  },
  "qcm": [
    {
      "question": "question précise",
      "options": ["A", "B", "C", "D"],
      "correct": 0,
      "difficulte": "facile|moyen|difficile",
      "explication": "explication de la bonne réponse"
    }
  ]
}`;

  const message = await anthropic.messages.create({
    model: "claude-sonnet-4-20250514",
    max_tokens: 8192,
    messages: [{ role: "user", content: prompt }],
  });

  const raw = message.content[0].text.trim();
  const cleaned = raw.replace(/^```json\n?/, "").replace(/\n?```$/, "").trim();
  return JSON.parse(cleaned);
}

/** Un PDF → un chapitre (appelé en parallèle par paquets). */
async function traiterUnPdf(drive, pdf, idx, total, matiereId, nomMatiere) {
  console.log(`\n  📖 [${idx}/${total}] "${pdf.name}"`);
  try {
    const buffer = await telechargerPDF(drive, pdf.id);
    const texte = await extraireTexte(buffer);
    console.log(`     📝 ${texte.length} caractères`);
    if (texte.trim().length < 100) {
      console.log(`     ⚠️  PDF vide ou illisible, ignoré.`);
      return null;
    }
    console.log(`     🤖 Claude…`);
    const contenu = await genererContenu(texte, pdf.name.replace(/\.pdf$/i, ""), nomMatiere);
    console.log(`     ✅ "${contenu.titrePropre}" — ${contenu.flashcardsData?.length || 0} flashcards, ${contenu.qcm?.length || 0} QCM`);
    return {
      id: `${matiereId}-ch${idx}`,
      titre: contenu.titrePropre || pdf.name.replace(/\.pdf$/i, ""),
      emoji: contenu.emoji || CHAPITRE_EMOJIS[idx % CHAPITRE_EMOJIS.length],
      nouveau: false,
      flashcardsData: contenu.flashcardsData || [],
      fiche: contenu.fiche || {},
      qcm: contenu.qcm || [],
    };
  } catch (err) {
    console.error(`  ❌ Erreur sur "${pdf.name}":`, err.message);
    return null;
  }
}

// ── Charger les matières PASS/LAS existantes (extraction JSON robuste) ───────
function chargerMatieresPassLas() {
  const matieres = parseMatieresFromContentFile(OUTPUT_PATH);
  return matieres.filter((m) => m.categorie !== "terminale");
}

/** Écrit content.js tout de suite pour ne pas tout perdre si le script est interrompu. */
function ecrireContentJs(matieresPassLas, matieresTerminale, { final = false } = {}) {
  const toutesLesMatieres = [...matieresPassLas, ...matieresTerminale];
  const note = final
    ? ""
    : "\n// ⚠️ Sauvegarde intermédiaire — laisse tourner jusqu’à la fin pour Physique-Chimie + Chimie.";
  const output = `// Généré par le pipeline Hermione — ${new Date().toLocaleDateString("fr-FR")}
// PASS/LAS : préservées | Terminale : générées depuis Google Drive${note}

export const MATIERES = ${JSON.stringify(toutesLesMatieres, null, 2)};
`;
  fs.writeFileSync(OUTPUT_PATH, output);
  console.log(`💾 content.js sauvegardé — PASS/LAS + ${matieresTerminale.length} matière(s) Terminale\n`);
}

// ── MAIN ──────────────────────────────────────────────────────────────────────
async function main() {
  const CONCURRENCY = parseConcurrency();
  console.log("🚀 Pipeline Terminale — Hermione\n");
  console.log(
    `⚡ Jusqu'à ${CONCURRENCY} fiches en parallèle (×${CONCURRENCY} plus vite qu’un PDF à la fois). ` +
      `Plus : --concurrency=4\n`
  );

  if (!process.env.ANTHROPIC_API_KEY) {
    console.log("❌ ANTHROPIC_API_KEY manquant dans .env"); process.exit(1);
  }

  const auth = await getAuthClient();
  const drive = google.drive({ version: "v3", auth });

  // Charger les matières PASS/LAS existantes pour les préserver
  const matieresPassLas = chargerMatieresPassLas();
  console.log(`📚 ${matieresPassLas.length} matière(s) PASS/LAS préservée(s)\n`);

  const MIN_PASS_LAS = 4;
  const force = process.argv.includes("--force");
  if (matieresPassLas.length < MIN_PASS_LAS && !force) {
    console.log(
      `❌ Sécurité : lecture de ${matieresPassLas.length} matière(s) PASS/LAS (attendu ≥ ${MIN_PASS_LAS}).`
    );
    console.log(
      `   Le fichier content.js est peut‑être corrompu ou le parsing a échoué.`
    );
    console.log(`   Restaure d’abord un content.js valide (git checkout), puis relance.`);
    console.log(`   Pour ignorer : node pipeline/generate-terminale.js --force\n`);
    process.exit(1);
  }

  // Lister les dossiers de matières dans le dossier Terminale
  console.log("📁 Récupération des matières Terminale...");
  const res = await drive.files.list({
    q: `'${TERMINALE_FOLDER_ID}' in parents and mimeType='application/vnd.google-apps.folder' and trashed=false`,
    fields: "files(id, name)",
    pageSize: 20,
    supportsAllDrives: true,
    includeItemsFromAllDrives: true,
  });
  const dossiers = res.data.files;

  if (dossiers.length === 0) {
    console.log("❌ Aucun dossier trouvé."); process.exit(1);
  }

  console.log(`✅ ${dossiers.length} matière(s) trouvée(s) :`);
  dossiers.forEach((d, i) => console.log(`  ${i + 1}. ${d.name}`));

  const matieresTerminale = [];

  for (const dossier of dossiers) {
    const matiereInfo = resolveMatiere(dossier.name);
    console.log(`\n📂 Traitement : "${matiereInfo.nom}" (dossier: "${dossier.name}")`);

    const pdfs = await listerFichesDeCoursFolder(drive, dossier.id);

    if (pdfs.length === 0) {
      console.log(`  ⚠️  Aucune fiche de cours trouvée, ignoré.`);
      continue;
    }

    // Trier par nom (FC1, FC2... ou 1-Les suites, 2-Dérivation...)
    pdfs.sort((a, b) => a.name.localeCompare(b.name, "fr", { numeric: true }));
    pdfs = dedupePdfs(pdfs);
    console.log(`  📄 ${pdfs.length} fiche(s) — ⚡ ${CONCURRENCY} PDF en parallèle max`);
    console.log(`     ${pdfs.map((p) => p.name.replace(/\.pdf$/i, "")).join(" | ")}`);

    const matiereId = "term-" + slugify(matiereInfo.nom);
    const matiereCours = [];

    for (let i = 0; i < pdfs.length; i += CONCURRENCY) {
      const slice = pdfs.slice(i, i + CONCURRENCY);
      const batch = await Promise.all(
        slice.map((pdf, j) =>
          traiterUnPdf(drive, pdf, i + j + 1, pdfs.length, matiereId, matiereInfo.nom)
        )
      );
      for (const cours of batch) {
        if (cours) matiereCours.push(cours);
      }
    }

    if (matiereCours.length > 0) {
      matieresTerminale.push({
        id: matiereId,
        emoji: matiereInfo.emoji,
        nom: matiereInfo.nom,
        categorie: "terminale",
        niveau: "Terminale",
        color: matiereInfo.color,
        cours: matiereCours,
      });
      console.log(`\n  ✅ ${matiereInfo.nom} : ${matiereCours.length} cours générés`);
      ecrireContentJs(matieresPassLas, matieresTerminale, { final: false });
    }
  }

  // Fusionner PASS/LAS (préservées) + Terminale (nouvelles)
  const toutesLesMatieres = [...matieresPassLas, ...matieresTerminale];

  console.log(`\n═══════════════════════════════════════`);
  console.log(`📊 Résultat final :`);
  console.log(`   ${matieresPassLas.length} matière(s) PASS/LAS préservées`);
  console.log(`   ${matieresTerminale.length} matière(s) Terminale générées`);
  matieresTerminale.forEach(m => console.log(`     • ${m.nom} : ${m.cours.length} cours`));
  console.log(`═══════════════════════════════════════\n`);

  ecrireContentJs(matieresPassLas, matieresTerminale, { final: true });
  console.log(`🎉 Fichier écrit : src/data/content.js`);
  console.log(`📦 Lance maintenant : npm run build\n`);
  process.exit(0);
}

main().catch((err) => {
  console.error("❌ Erreur fatale :", err.message);
  process.exit(1);
});
