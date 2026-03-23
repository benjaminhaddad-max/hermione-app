import FICHE_CURATED from "../../data/ficheCurated";

const IMAGE_BASE = "/schema-library/biochimie/";

export default function FichePage3Schemas({ data, concepts, chapterTitle = "" }) {
  const curated = FICHE_CURATED[chapterTitle];

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

  const imgs = curated.images.map(img => ({
    src: IMAGE_BASE + (typeof img === "string" ? img : img.file),
    caption: typeof img === "string" ? "" : img.caption || "",
  }));

  return (
    <div className="fiche-page fiche-page-modern">
      <h2 className="fiche-titre-modern">
        <span className="fiche-souligne-vert">Schémas du chapitre</span>
      </h2>
      <p className="fc-schemas-count">
        {imgs.length} illustration{imgs.length > 1 ? "s" : ""} clé{imgs.length > 1 ? "s" : ""} du cours
      </p>

      <div className="fc-schemas-list">
        {imgs.map((img, i) => (
          <div key={i} className="fc-schema-item">
            <img
              src={img.src}
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
