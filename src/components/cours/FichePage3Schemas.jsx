import { getCurated, getImageBase } from "../../data/ficheCuratedAll";

export default function FichePage3Schemas({ data, concepts, chapterTitle = "" }) {
  const curated = getCurated(chapterTitle);
  const IMAGE_BASE = getImageBase(chapterTitle);

  if (!curated || !curated.images?.length) {
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
        {curated.images.length} illustration{curated.images.length > 1 ? "s" : ""} clé{curated.images.length > 1 ? "s" : ""} du cours
      </p>

      <div className="fc-schemas-list">
        {curated.images.map((img, i) => (
          <div key={i} className="fc-schema-item">
            <img
              src={IMAGE_BASE + img.file}
              alt={img.caption || chapterTitle}
              loading="lazy"
              className="fc-schema-img"
            />
            {img.caption && (
              <div className="fc-schema-caption">{img.caption}</div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
