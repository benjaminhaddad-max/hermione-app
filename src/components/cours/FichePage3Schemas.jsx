import { findImagesForCourse } from "../../utils/schemaMatch";

export default function FichePage3Schemas({ data, concepts, chapterTitle = "", introText = "" }) {
  const images = findImagesForCourse(chapterTitle);

  if (images.length === 0) {
    return (
      <div className="fiche-page fiche-page-modern">
        <h2 className="fiche-titre-modern">
          <span className="fiche-souligne-vert">Schémas</span>
        </h2>
        <div className="fiche-schema-empty">
          <span className="fiche-schema-empty-icon">📐</span>
          <p className="fiche-schema-empty-titre">Schémas en cours d'ajout</p>
          <p className="fiche-schema-empty-txt">
            Les illustrations de ce chapitre seront bientôt disponibles.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="fiche-page fiche-page-modern">
      <h2 className="fiche-titre-modern">
        <span className="fiche-souligne-vert">Schémas du chapitre</span>
      </h2>
      <p className="fc-schemas-count">
        {images.length} illustration{images.length > 1 ? "s" : ""} extraite{images.length > 1 ? "s" : ""} du polycopié
      </p>

      <div className="fc-schemas-list">
        {images.map((img, i) => (
          <div key={i} className="fc-schema-item">
            <img
              src={img.image}
              alt={img.legende || img.chapter}
              loading="lazy"
              className="fc-schema-img"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
