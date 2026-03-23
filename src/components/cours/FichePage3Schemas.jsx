import FICHE_CURATED from "../../data/ficheCurated";
import schemaManifest from "../../data/schemaLibrary.generated.json";

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

  const selectedImages = curated.images.map(filename => {
    const entry = schemaManifest.find(e =>
      e.image?.endsWith(filename)
    );
    return {
      src: IMAGE_BASE + filename,
      legende: entry?.legende || "",
    };
  });

  return (
    <div className="fiche-page fiche-page-modern">
      <h2 className="fiche-titre-modern">
        <span className="fiche-souligne-vert">Schémas du chapitre</span>
      </h2>
      <p className="fc-schemas-count">
        {selectedImages.length} illustration{selectedImages.length > 1 ? "s" : ""} clé{selectedImages.length > 1 ? "s" : ""} du cours
      </p>

      <div className="fc-schemas-list">
        {selectedImages.map((img, i) => (
          <div key={i} className="fc-schema-item">
            <img
              src={img.src}
              alt={img.legende || chapterTitle}
              loading="lazy"
              className="fc-schema-img"
            />
            {img.legende && (
              <div className="fc-schema-caption">{img.legende}</div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
