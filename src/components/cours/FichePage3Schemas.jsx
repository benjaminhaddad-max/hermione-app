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

  return (
    <div className="fiche-page fiche-page-modern">
      <h2 className="fiche-titre-modern">
        <span className="fiche-souligne-vert">Schémas du chapitre</span>
      </h2>
      <p className="fc-schemas-count">
        {curated.images.length} illustration{curated.images.length > 1 ? "s" : ""} clé{curated.images.length > 1 ? "s" : ""} du cours
      </p>

      <div className="fc-schemas-list">
        {curated.images.map((img, i) => {
          const translations = img.translations ? Object.entries(img.translations) : [];
          return (
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
              {translations.length > 0 && (
                <div className="fc-illus-trad">
                  <div className="fc-trad-title">🇫🇷 Traduction :</div>
                  <div className="fc-trad-grid">
                    {translations.map(([en, fr], j) => (
                      <div key={j} className="fc-trad-row">
                        <span className="fc-trad-en">{en}</span>
                        <span className="fc-trad-arrow">→</span>
                        <span className="fc-trad-fr">{fr}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
