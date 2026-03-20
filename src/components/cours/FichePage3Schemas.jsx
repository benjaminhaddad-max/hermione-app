import SCHEMAS from "../../schemas/index";
import SchemaVisualCard from "./SchemaVisualCard";

function titrePage(data) {
  const t = data?.titre?.trim() || "";
  if (!t || /^à\s*retenir$/i.test(t)) return "Schémas visuels";
  return t;
}

export default function FichePage3Schemas({ data }) {
  const raw = data?.schemas;
  const schemas = Array.isArray(raw) ? raw : [];

  return (
    <div className="fiche-page fiche-page-modern">
      <h2 className="fiche-titre-modern">
        <span className="fiche-souligne-vert">{titrePage(data)}</span>
      </h2>
      <p className="fiche-schema-intro">
        Chaque schéma décompose le raisonnement en étapes lisibles — comme sur une
        vraie fiche de prépa, mais version premium ✨
      </p>

      {schemas.length === 0 && (
        <div className="fiche-schema-empty">
          <span className="fiche-schema-empty-icon" aria-hidden>📐</span>
          <p className="fiche-schema-empty-titre">Schémas en cours d’illustration</p>
          <p className="fiche-schema-empty-txt">
            Les notions et le résumé de ce chapitre restent disponibles dans les autres
            onglets. Reviens bientôt : on enrichit les visuels au fil des mises à jour.
          </p>
        </div>
      )}

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
              <div className="fiche-schema-wrap">
                <SvgComp />
              </div>
            ) : (
              <SchemaVisualCard texte={legende || String(id || "")} index={i} />
            )}
            {legende && SvgComp && (
              <p className="fiche-schema-legende-modern">↳ {legende}</p>
            )}
          </div>
        );
      })}
    </div>
  );
}
