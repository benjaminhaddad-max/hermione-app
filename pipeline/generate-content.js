#!/usr/bin/env node
/**
 * Pipeline Hermione — Drive → Claude → content.js
 * 
 * Lit les PDFs (Tomes) depuis Google Drive, détecte les chapitres
 * dans chaque Tome via leurs pages de garde, envoie chaque chapitre
 * individuellement à Claude, et génère un content.js propre.
 * 
 * Les matières Terminale déjà présentes dans content.js sont préservées.
 * 
 * Usage : node pipeline/generate-content.js
 */

const fs = require("fs");
const path = require("path");
const { google } = require("googleapis");
const Anthropic = require("@anthropic-ai/sdk");
const pdfParse = require("pdf-parse");

// ── Config ───────────────────────────────────────────────────────────────────
const envPath = path.join(__dirname, ".env");
if (fs.existsSync(envPath)) {
  for (const line of fs.readFileSync(envPath, "utf8").split("\n")) {
    const match = line.match(/^([^#=]+)=(.*)$/);
    if (match) process.env[match[1].trim()] = match[2].trim();
  }
}

const CREDENTIALS_PATH = path.join(__dirname, "../credentials.json");
const TOKEN_PATH = path.join(__dirname, "token.json");
const OUTPUT_PATH = path.join(__dirname, "../src/data/content.js");
const SCOPES = ["https://www.googleapis.com/auth/drive.readonly"];

const anthropic = new Anthropic({ apiKey: process.env.ANTHROPIC_API_KEY });

// ── Mapping des noms de dossiers Drive → noms propres ────────────────────────
const MATIERE_MAP = {
  "biochimie":            { nom: "Biochimie",            emoji: "🧪", color: "#1A3A5C" },
  "biologie cellulaire":  { nom: "Biologie Cellulaire",  emoji: "🦠", color: "#3D2C7A" },
  "bio cell":             { nom: "Biologie Cellulaire",  emoji: "🦠", color: "#3D2C7A" },
  "bio cellulaire":       { nom: "Biologie Cellulaire",  emoji: "🦠", color: "#3D2C7A" },
  "chimie":               { nom: "Chimie",               emoji: "⚗️", color: "#2C5F2E" },
  "physique":             { nom: "Physique",              emoji: "⚡", color: "#6B2D2D" },
};

function resolveMatiere(dossierName) {
  const key = dossierName.toLowerCase().trim();
  for (const [pattern, info] of Object.entries(MATIERE_MAP)) {
    if (key.includes(pattern)) return info;
  }
  return { nom: dossierName, emoji: "📚", color: "#4A3728" };
}

// ── Emojis pour les chapitres selon le contenu ───────────────────────────────
const CHAPITRE_EMOJIS = ["🔬", "🧫", "🧬", "⚡", "🔗", "💥", "🧪", "🔭", "🫀", "🦴", "📊", "🔑", "💊", "🧠", "❤️", "🛡️"];

// ── OAuth Google Drive ────────────────────────────────────────────────────────
async function getAuthClient() {
  const credentials = JSON.parse(fs.readFileSync(CREDENTIALS_PATH));
  const { client_id, client_secret, redirect_uris } = credentials.installed;
  const oAuth2Client = new google.auth.OAuth2(client_id, client_secret, redirect_uris[0]);

  if (fs.existsSync(TOKEN_PATH)) {
    oAuth2Client.setCredentials(JSON.parse(fs.readFileSync(TOKEN_PATH)));
    return oAuth2Client;
  }

  const authUrl = oAuth2Client.generateAuthUrl({ access_type: "offline", scope: SCOPES });
  console.log("\n🔐 Ouvre ce lien dans ton navigateur :\n");
  console.log(authUrl);
  console.log("\nAprès autorisation, copie le code affiché et colle-le ici :");

  const code = await new Promise((resolve) => {
    process.stdout.write("Code : ");
    process.stdin.setEncoding("utf8");
    process.stdin.once("data", (d) => resolve(d.trim()));
  });

  const { tokens } = await oAuth2Client.getToken(code);
  oAuth2Client.setCredentials(tokens);
  fs.writeFileSync(TOKEN_PATH, JSON.stringify(tokens));
  console.log("✅ Token sauvegardé.\n");
  return oAuth2Client;
}

// ── Lister les PDFs récursivement ────────────────────────────────────────────
async function listerPDFs(drive, folderId) {
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
    pageSize: 50,
    supportsAllDrives: true,
    includeItemsFromAllDrives: true,
  });
  for (const sub of resDirs.data.files) {
    const subPdfs = await listerPDFs(drive, sub.id);
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

// ── Extraire le texte COMPLET d'un PDF (pas de troncature) ───────────────────
async function extraireTexte(buffer) {
  const data = await pdfParse(buffer);
  return data.text;
}

// ══════════════════════════════════════════════════════════════════════════════
// DÉCOUPAGE DES CHAPITRES DANS UN TOME
// ══════════════════════════════════════════════════════════════════════════════

function decoupeChapitres(texteComplet, pdfName) {
  const chapitres = [];

  // Patterns de détection des pages de garde de chapitres
  // "Fiche de cours N°1", "Fiche de cours n°2", "FICHE DE COURS N°3"
  // "Fiche N°1", "Fiche n°4", "Chapitre 1", etc.
  const patterns = [
    /Fiche\s+de\s+cours\s+[Nn][°o˚º]?\s*(\d+)\s*[:\-–—]?\s*(.+?)(?:\n|$)/gi,
    /Fiche\s+[Nn][°o˚º]?\s*(\d+)\s*[:\-–—]?\s*(.+?)(?:\n|$)/gi,
    /FICHE\s+(?:DE\s+COURS\s+)?[Nn]?[°o˚º]?\s*(\d+)\s*[:\-–—]?\s*(.+?)(?:\n|$)/gi,
    /Chapitre\s+(\d+)\s*[:\-–—]?\s*(.+?)(?:\n|$)/gi,
  ];

  let matches = [];

  for (const pattern of patterns) {
    let m;
    while ((m = pattern.exec(texteComplet)) !== null) {
      const numero = parseInt(m[1]);
      let titre = m[2].trim()
        .replace(/\s+/g, " ")
        .replace(/^[:\-–—\s]+/, "")
        .replace(/[:\-–—\s]+$/, "");

      // Ignorer les titres vides ou trop courts
      if (titre.length < 3) titre = `Chapitre ${numero}`;

      matches.push({
        numero,
        titre,
        index: m.index,
      });
    }
    if (matches.length > 0) break;
  }

  // Dédupliquer par numéro (garder la première occurrence)
  const seen = new Set();
  matches = matches.filter(m => {
    if (seen.has(m.numero)) return false;
    seen.add(m.numero);
    return true;
  });

  matches.sort((a, b) => a.index - b.index);

  if (matches.length === 0) {
    // Fallback : pas de pattern détecté → traiter le PDF entier comme un seul chapitre
    const titreFallback = pdfName
      .replace(/\.pdf$/i, "")
      .replace(/[-_]+/g, " ")
      .replace(/\b(tome|global|pagenumber|terminale|sante|fiches?|synthetiques?|de|cours)\b/gi, "")
      .replace(/\s+/g, " ")
      .trim();

    return [{
      numero: 1,
      titre: titreFallback || "Cours",
      texte: texteComplet.slice(0, 15000),
    }];
  }

  // Découper le texte entre chaque match
  for (let i = 0; i < matches.length; i++) {
    const start = matches[i].index;
    const end = i + 1 < matches.length ? matches[i + 1].index : texteComplet.length;
    const texte = texteComplet.slice(start, end);

    chapitres.push({
      numero: matches[i].numero,
      titre: matches[i].titre,
      texte: texte.slice(0, 15000),
    });
  }

  return chapitres;
}

// ── Slugifier ────────────────────────────────────────────────────────────────
function slugify(str) {
  return str
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
}

// ── Générer le contenu d'UN chapitre avec Claude ─────────────────────────────
async function genererContenuChapitre(texte, titreChapitre, matiere) {
  const prompt = `Tu es un assistant pédagogique expert pour les étudiants en médecine (PASS/LAS).

À partir du cours suivant, génère un contenu pédagogique structuré au format JSON strict.

MATIÈRE : ${matiere}
CHAPITRE : "${titreChapitre}"

CONTENU DU COURS :
${texte}

INSTRUCTIONS IMPORTANTES :
1. Le "titrePropre" doit être un titre court et clair pour ce chapitre (ex: "La membrane plasmique", "Les acides aminés", "Oxydoréduction")
2. Les flashcards doivent couvrir les points essentiels du chapitre (8-12 cartes)
3. Les concepts doivent être des définitions précises de termes médicaux/scientifiques (6-10 concepts)
4. Les QCM doivent être de difficulté variée et tester la compréhension (6-8 QCM)
5. Le résumé doit synthétiser les 5 points les plus importants
6. Le mnémo doit être un moyen mnémotechnique mémorable et utile

Génère exactement ce JSON (sans markdown, juste le JSON brut) :
{
  "titrePropre": "titre court et clair du chapitre",
  "emoji": "un emoji pertinent pour ce chapitre",
  "flashcardsData": [
    { "q": "question courte et précise", "r": "réponse concise mais complète" }
  ],
  "fiche": {
    "page1_intro": {
      "titre": "Introduction",
      "texte": "paragraphe d'introduction clair et pédagogique (5-8 lignes)",
      "points_cles": ["point clé 1", "point clé 2", "point clé 3", "point clé 4"]
    },
    "page2_concepts": {
      "titre": "Concepts clés",
      "concepts": [
        { "terme": "terme médical/scientifique", "definition": "définition claire, précise et pédagogique" }
      ]
    },
    "page3_schemas": {
      "titre": "Schémas",
      "schemas": []
    },
    "page4_formules": {
      "titre": "Données clés",
      "formules": [
        { "label": "nom de la formule", "formule": "formule mathématique", "unite": "unité" }
      ],
      "donnees": [
        { "label": "paramètre", "valeur": "valeur numérique avec unité" }
      ]
    },
    "page5_resume": {
      "titre": "Résumé",
      "points": ["point essentiel 1", "point essentiel 2", "point essentiel 3", "point essentiel 4", "point essentiel 5"],
      "mnemo": "moyen mnémotechnique mémorable pour retenir l'essentiel du chapitre"
    }
  },
  "qcm": [
    {
      "question": "question précise testant la compréhension",
      "options": ["option A", "option B", "option C", "option D"],
      "correct": 0,
      "difficulte": "facile|moyen|difficile",
      "explication": "explication détaillée de la bonne réponse"
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

// ── Charger les matières Terminale existantes ─────────────────────────────────
function chargerMatieresTerminale() {
  if (!fs.existsSync(OUTPUT_PATH)) return [];

  try {
    const content = fs.readFileSync(OUTPUT_PATH, "utf8");
    const match = content.match(/export const MATIERES = (\[[\s\S]*\]);/);
    if (!match) return [];

    const matieres = JSON.parse(match[1]);
    return matieres.filter(m => m.categorie === "terminale");
  } catch {
    return [];
  }
}

// ── MAIN ──────────────────────────────────────────────────────────────────────
async function main() {
  console.log("🚀 Démarrage du pipeline Hermione...\n");

  const auth = await getAuthClient();
  const drive = google.drive({ version: "v3", auth });

  const ROOT_FOLDER_ID = process.env.DRIVE_FOLDER_ID;
  if (!ROOT_FOLDER_ID) {
    console.log("❌ DRIVE_FOLDER_ID manquant dans .env");
    process.exit(1);
  }

  if (!process.env.ANTHROPIC_API_KEY) {
    console.log("❌ ANTHROPIC_API_KEY manquant dans .env");
    process.exit(1);
  }

  // Charger les matières Terminale existantes avant d'écraser
  const matieresTerminale = chargerMatieresTerminale();
  console.log(`📚 ${matieresTerminale.length} matière(s) Terminale préservée(s)\n`);

  console.log("📁 Récupération des sous-dossiers (matières)...");
  const res = await drive.files.list({
    q: `'${ROOT_FOLDER_ID}' in parents and mimeType='application/vnd.google-apps.folder' and trashed=false`,
    fields: "files(id, name)",
    pageSize: 50,
    supportsAllDrives: true,
    includeItemsFromAllDrives: true,
  });
  const dossiers = res.data.files;

  if (dossiers.length === 0) {
    console.log("❌ Aucun sous-dossier trouvé. Vérifie la structure Drive.");
    process.exit(1);
  }

  console.log(`✅ ${dossiers.length} dossier(s) trouvé(s) :`);
  dossiers.forEach((d, i) => console.log(`  ${i + 1}. ${d.name}`));

  const matieresPassLas = [];

  for (const dossier of dossiers) {
    const matiereInfo = resolveMatiere(dossier.name);
    console.log(`\n📂 ${matiereInfo.nom} (dossier: "${dossier.name}")...`);

    const pdfs = await listerPDFs(drive, dossier.id);
    if (pdfs.length === 0) {
      console.log(`  ⚠️  Aucun PDF, ignoré.`);
      continue;
    }

    // Filtrer : garder uniquement les fiches de cours (FC), pas les covers, QCM, etc.
    const pdfsFiltres = pdfs.filter(p => {
      const n = p.name.toLowerCase();
      if (n.includes("cover")) return false;
      if (n.match(/qcm/i) && !n.match(/fc/i)) return false;
      if (n.match(/^ilovepdf/i)) return false;
      return true;
    });

    // Trier par nom (FC1, FC2... ou Tome 1, Tome 2...)
    pdfsFiltres.sort((a, b) => a.name.localeCompare(b.name, "fr", { numeric: true }));
    console.log(`  📄 ${pdfsFiltres.length} fiche(s) de cours (sur ${pdfs.length} PDFs) : ${pdfsFiltres.map(p => p.name).join(", ")}`);

    const matiereCours = [];
    const matiereId = slugify(matiereInfo.nom);
    let chapitreGlobalIndex = 0;

    for (const pdf of pdfsFiltres) {
      console.log(`\n  📖 Traitement de "${pdf.name}"...`);

      try {
        const buffer = await telechargerPDF(drive, pdf.id);
        const texteComplet = await extraireTexte(buffer);
        console.log(`     📝 ${texteComplet.length} caractères extraits`);

        const chapitres = decoupeChapitres(texteComplet, pdf.name);
        console.log(`     📑 ${chapitres.length} chapitre(s) détecté(s) :`);
        chapitres.forEach(c => console.log(`        - N°${c.numero}: ${c.titre}`));

        for (const chap of chapitres) {
          chapitreGlobalIndex++;
          console.log(`\n     🤖 Génération chapitre ${chap.numero}: "${chap.titre}"...`);

          try {
            const contenu = await genererContenuChapitre(chap.texte, chap.titre, matiereInfo.nom);

            const titreFinal = contenu.titrePropre || chap.titre;
            const emojiFinal = contenu.emoji || CHAPITRE_EMOJIS[chapitreGlobalIndex % CHAPITRE_EMOJIS.length];

            matiereCours.push({
              id: `${matiereId}-ch${chapitreGlobalIndex}`,
              titre: titreFinal,
              emoji: emojiFinal,
              nouveau: chapitreGlobalIndex > 1,
              flashcardsData: contenu.flashcardsData || [],
              fiche: contenu.fiche || {},
              qcm: contenu.qcm || [],
            });

            const nbFC = contenu.flashcardsData?.length || 0;
            const nbQCM = contenu.qcm?.length || 0;
            console.log(`     ✅ "${titreFinal}" — ${nbFC} flashcards, ${nbQCM} QCM`);
          } catch (err) {
            console.error(`     ❌ Erreur Claude sur chapitre "${chap.titre}":`, err.message);
          }
        }
      } catch (err) {
        console.error(`  ❌ Erreur PDF "${pdf.name}":`, err.message);
      }
    }

    if (matiereCours.length > 0) {
      matieresPassLas.push({
        id: matiereId,
        emoji: matiereInfo.emoji,
        nom: matiereInfo.nom,
        categorie: "anticipation",
        niveau: "PASS/LAS",
        color: matiereInfo.color,
        cours: matiereCours,
      });
    }
  }

  // Fusionner : PASS/LAS (générées) + Terminale (préservées)
  const toutesLesmatieres = [...matieresPassLas, ...matieresTerminale];

  const totalChapitres = matieresPassLas.reduce((a, m) => a + m.cours.length, 0);
  console.log(`\n═══════════════════════════════════════`);
  console.log(`📊 Résultat :`);
  console.log(`   ${matieresPassLas.length} matière(s) PASS/LAS avec ${totalChapitres} chapitres`);
  console.log(`   ${matieresTerminale.length} matière(s) Terminale préservées`);
  console.log(`═══════════════════════════════════════\n`);

  const output = `// Généré par le pipeline Hermione — ${new Date().toLocaleDateString("fr-FR")}
// Matières PASS/LAS : régénérées depuis Google Drive
// Matières Terminale : préservées (éditées manuellement)

export const MATIERES = ${JSON.stringify(toutesLesmatieres, null, 2)};
`;

  fs.writeFileSync(OUTPUT_PATH, output);
  console.log(`🎉 Fichier écrit : src/data/content.js`);
  console.log(`📦 Lance 'npm run build' puis déploie sur Vercel.\n`);
  process.exit(0);
}

main().catch((err) => {
  console.error("❌ Erreur fatale :", err);
  process.exit(1);
});
