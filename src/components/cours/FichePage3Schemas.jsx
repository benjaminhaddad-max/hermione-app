import SCHEMAS from "../../schemas/index";
import SchemaVisualCard from "./SchemaVisualCard";

const CONCEPT_COLORS = [
  "#5B4FD9", "#C9A84C", "#2ecc71", "#e74c3c", "#3498db", "#9b59b6", "#e67e22", "#1abc9c",
];

function ConceptSchemaCard({ concept, index }) {
  const color = CONCEPT_COLORS[index % CONCEPT_COLORS.length];
  return (
    <div className="sfv-card sfv-concept-card" style={{ "--c": color, "--idx": index }}>
      <div className="sfv-card-head">
        <span className="sfv-badge sfv-badge-concept">Notion {index + 1}</span>
        <h3 className="sfv-card-title" style={{ color }}>{concept.terme}</h3>
      </div>
      <p className="sfv-text">{concept.definition}</p>
    </div>
  );
}

export default function FichePage3Schemas({ data, concepts }) {
  const schemas = Array.isArray(data?.schemas) ? data.schemas : [];
  const fallbackConcepts = Array.isArray(concepts) && concepts.length > 0 ? concepts : [];
  const hasContent = schemas.length > 0 || fallbackConcepts.length > 0;

  return (
    <div className="fiche-page fiche-page-modern">
      <h2 className="fiche-titre-modern">
        <span className="fiche-souligne-vert">{data?.titre || "Schémas"}</span>
      </h2>

      {!hasContent && (
        <div className="fiche-schema-empty">
          <span className="fiche-schema-empty-icon" aria-hidden>📐</span>
          <p className="fiche-schema-empty-titre">Schémas à venir</p>
          <p className="fiche-schema-empty-txt">
            Reviens bientôt — les visuels sont en cours d'enrichissement.
          </p>
        </div>
      )}

      {/* ── Schémas texte / SVG ── */}
      {schemas.map((s, i) => {
        if (typeof s === "string") {
          return <SchemaVisualCard key={i} texte={s} index={i} />;
        }
        const id = s?.id;
        const legende = s?.legende || s?.titre || "";
        const SvgComp = id ? SCHEMAS[id] : null;
        return (
          <div key={i} className="fiche-schema-block">
            {SvgComp ? (
              <div className="fiche-schema-wrap"><SvgComp /></div>
            ) : (
              <SchemaVisualCard texte={legende || String(id || "")} index={i} />
            )}
            {legende && SvgComp && (
              <p className="fiche-schema-legende-modern">↳ {legende}</p>
            )}
          </div>
        );
      })}

      {/* ── Fallback : notions visuelles quand schemas vide ── */}
      {schemas.length === 0 && fallbackConcepts.length > 0 && (
        <>
          <p className="fiche-schema-intro">
            Les notions clés de ce chapitre, visualisées pour une mémorisation rapide ⚡
          </p>
          {fallbackConcepts.map((c, i) => (
            <ConceptSchemaCard key={i} concept={c} index={i} />
          ))}
        </>
      )}
    </div>
  );
}
