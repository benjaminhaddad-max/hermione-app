import FICHE_CURATED from "./ficheCurated";
import FICHE_CURATED_BIOCELL from "./ficheCuratedBioCellulaire";
import FICHE_CURATED_PHYSIQUE from "./ficheCuratedPhysique";
import FICHE_CURATED_CHIMIE from "./ficheCuratedChimie";

const IMAGE_BASES = {
  biochimie: "/schema-library/biochimie/",
  "biologie-cellulaire": "/schema-library/biologie-cellulaire/",
  physique: "/schema-library/physique/",
  chimie: "/schema-library/chimie/",
};

const ALL_CURATED = [
  { data: FICHE_CURATED, matiere: "biochimie" },
  { data: FICHE_CURATED_BIOCELL, matiere: "biologie-cellulaire" },
  { data: FICHE_CURATED_PHYSIQUE, matiere: "physique" },
  { data: FICHE_CURATED_CHIMIE, matiere: "chimie" },
];

const MATIERE_MAP = {};
ALL_CURATED.forEach(({ data, matiere }) => {
  Object.keys(data).forEach((titre) => { MATIERE_MAP[titre] = matiere; });
});

export function getCurated(chapterTitle) {
  return FICHE_CURATED[chapterTitle]
    || FICHE_CURATED_BIOCELL[chapterTitle]
    || FICHE_CURATED_PHYSIQUE[chapterTitle]
    || FICHE_CURATED_CHIMIE[chapterTitle]
    || null;
}

export function getImageBase(chapterTitle) {
  const matiere = MATIERE_MAP[chapterTitle];
  return matiere ? IMAGE_BASES[matiere] : "/schema-library/biochimie/";
}
