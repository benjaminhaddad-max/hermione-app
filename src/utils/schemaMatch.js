import schemaManifest from "../data/schemaLibrary.generated.json";

const EXPLICIT_MAP = {
  "structure et diversité du génome": [
    "Acides nucléiques et structure des génomes",
    "Variations du génome et réparation ADN",
    "Méthode d'étude des variations du génome",
  ],
  "structure des acides nucléiques": [
    "Acides nucléiques et structure des génomes",
  ],
  "la réplication de l'adn": [
    "Réplication",
  ],
  "la transcription": [
    "Transcription et traduction",
    "Régulation expression des gènes P1",
    "Régulation expression des gènes P2",
  ],
  "la traduction": [
    "Transcription et traduction",
  ],
  "les protéines": [
    "Repliement des protéines",
    "Structures secondaires",
    "Structures tertiaires et quaternaires",
    "Site actif",
  ],
  "métabolisme énergétique": [
    "Base de cinétique enzymatique",
    "Cinétique enzymatique",
  ],
  "les glucides": [
    "Glucides et Lipides",
  ],
  "les lipides": [
    "Glucides et Lipides",
  ],
  "introduction à la biochimie": [
    "Repliement des protéines",
    "Structures secondaires",
    "Base de cinétique enzymatique",
  ],
};

function normalize(s) {
  return String(s || "").toLowerCase().normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "").replace(/[^a-z0-9]+/g, " ").trim();
}

export function findImagesForCourse(courseTitle, maxImages = 999) {
  const key = normalize(courseTitle);

  const explicitChapters = Object.entries(EXPLICIT_MAP)
    .filter(([k]) => normalize(k) === key)
    .flatMap(([, v]) => v);

  if (explicitChapters.length > 0) {
    const results = schemaManifest.filter(img =>
      explicitChapters.includes(img.chapter)
    );
    return results.slice(0, maxImages);
  }

  const words = key.split(/\s+/).filter(w => w.length > 3);
  return schemaManifest
    .filter(img => {
      const chapNorm = normalize(img.chapter);
      return words.some(w => chapNorm.includes(w));
    })
    .slice(0, maxImages);
}
