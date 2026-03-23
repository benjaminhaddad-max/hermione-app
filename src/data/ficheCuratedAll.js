import FICHE_CURATED from "./ficheCurated";
import FICHE_CURATED_BIOCELL from "./ficheCuratedBioCellulaire";

const IMAGE_BASES = {
  biochimie: "/schema-library/biochimie/",
  "biologie-cellulaire": "/schema-library/biologie-cellulaire/",
};

const MATIERE_MAP = {};

Object.keys(FICHE_CURATED).forEach((titre) => {
  MATIERE_MAP[titre] = "biochimie";
});
Object.keys(FICHE_CURATED_BIOCELL).forEach((titre) => {
  MATIERE_MAP[titre] = "biologie-cellulaire";
});

export function getCurated(chapterTitle) {
  const data =
    FICHE_CURATED[chapterTitle] || FICHE_CURATED_BIOCELL[chapterTitle] || null;
  return data;
}

export function getImageBase(chapterTitle) {
  const matiere = MATIERE_MAP[chapterTitle];
  return matiere ? IMAGE_BASES[matiere] : "/schema-library/biochimie/";
}
