import SCHEMAS from "../../schemas/index";
import SchemaVisualCard from "./SchemaVisualCard";

/* ── Palette ── */
const MIND_COLORS = [
  "#5B4FD9","#C9A84C","#2ecc71","#e74c3c",
  "#3498db","#9b59b6","#e67e22","#1abc9c",
];

/* ── Texte SVG sur 2 lignes max ── */
function SvgLabel({ x, y, text, maxChars = 11 }) {
  const t = text || "";
  if (t.length <= maxChars) {
    return (
      <text x={x} textAnchor="middle" fill="#fff" fontSize="7.5" fontWeight="700">
        <tspan x={x} y={y + 1}>{t}</tspan>
      </text>
    );
  }
  const cut = t.lastIndexOf(" ", maxChars) > 2 ? t.lastIndexOf(" ", maxChars) : maxChars;
  const l1 = t.slice(0, cut).trim();
  const l2 = t.slice(cut).trim().slice(0, maxChars + 2);
  return (
    <text x={x} textAnchor="middle" fill="#fff" fontSize="7" fontWeight="700">
      <tspan x={x} y={y - 4}>{l1}</tspan>
      <tspan x={x} y={y + 6}>{l2}</tspan>
    </text>
  );
}

/* ── Mind map principal ── */
function MindMapSvg({ titre, concepts }) {
  const items = (concepts || []).slice(0, 8);
  const n = items.length;
  if (n < 2) return null;

  const cx = 160, cy = 135;
  const r = n <= 4 ? 82 : n <= 6 ? 96 : 108;

  const nodes = items.map((c, i) => {
    const angle = (i / n) * 2 * Math.PI - Math.PI / 2;
    return {
      x: cx + r * Math.cos(angle),
      y: cy + r * Math.sin(angle),
      label: c.terme,
      color: MIND_COLORS[i % MIND_COLORS.length],
    };
  });

  const centralLabel = (titre || "Cours")
    .replace(/^Chapitre\s+\d+\s*[:\-–]\s*/i, "")
    .replace(/^Fiche\s+de\s+cours\s+N°\d+\s*[:\-–]?\s*/i, "")
    .slice(0, 22);

  return (
    <div className="sfv-mindmap-wrap">
      <svg viewBox="0 0 320 270" className="sfv-mindmap-svg">
        {/* Fond radial subtil */}
        <defs>
          <radialGradient id="mgbg" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="rgba(91,79,217,0.06)" />
            <stop offset="100%" stopColor="rgba(91,79,217,0)" />
          </radialGradient>
        </defs>
        <ellipse cx={cx} cy={cy} rx={r + 28} ry={r + 20} fill="url(#mgbg)" />

        {/* Lignes de connexion */}
        {nodes.map((nd, i) => (
          <line
            key={i}
            x1={cx} y1={cy}
            x2={nd.x} y2={nd.y}
            stroke={nd.color}
            strokeWidth="1.8"
            opacity="0.4"
            strokeDasharray="4 3"
          />
        ))}

        {/* Nœuds concept */}
        {nodes.map((nd, i) => (
          <g key={i}>
            <circle cx={nd.x} cy={nd.y} r="23" fill={nd.color} opacity="0.88"
              style={{ filter: "drop-shadow(0 2px 4px rgba(0,0,0,0.2))" }} />
            <SvgLabel x={nd.x} y={nd.y} text={nd.label} />
          </g>
        ))}

        {/* Nœud central */}
        <circle cx={cx} cy={cy} r="34" fill="#5B4FD9"
          style={{ filter: "drop-shadow(0 3px 8px rgba(91,79,217,0.45))" }} />
        <circle cx={cx} cy={cy} r="30" fill="none" stroke="rgba(255,255,255,0.25)" strokeWidth="1.5" />
        <SvgLabel x={cx} y={cy} text={centralLabel} maxChars={13} />
      </svg>
      <p className="sfv-mindmap-caption">Carte mentale du chapitre</p>
    </div>
  );
}

/* ── Carte concept visuelle (fallback) ── */
function ConceptSchemaCard({ concept, index }) {
  const color = MIND_COLORS[index % MIND_COLORS.length];
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
  const titrePage = data?.titre || "Schémas";

  return (
    <div className="fiche-page fiche-page-modern">
      <h2 className="fiche-titre-modern">
        <span className="fiche-souligne-vert">{titrePage}</span>
      </h2>

      {/* ── Mind map automatique depuis les concepts ── */}
      {fallbackConcepts.length >= 2 && (
        <MindMapSvg
          titre={data?.titreChapitre || titrePage}
          concepts={fallbackConcepts}
        />
      )}

      {/* ── Schémas texte (flow diagram / liste) ── */}
      {schemas.length > 0 && (
        <>
          <p className="fiche-schema-intro">
            Décomposition visuelle des mécanismes du chapitre ✨
          </p>
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
        </>
      )}

      {/* ── Cartes notions (toujours affichées en dessous) ── */}
      {fallbackConcepts.length > 0 && (
        <>
          <p className="fiche-schema-intro" style={{ marginTop: schemas.length > 0 ? 20 : 0 }}>
            {schemas.length > 0 ? "Rappel des notions clés" : "Notions clés du chapitre"}
          </p>
          {fallbackConcepts.map((c, i) => (
            <ConceptSchemaCard key={i} concept={c} index={i} />
          ))}
        </>
      )}

      {/* ── Aucun contenu ── */}
      {schemas.length === 0 && fallbackConcepts.length === 0 && (
        <div className="fiche-schema-empty">
          <span className="fiche-schema-empty-icon" aria-hidden>📐</span>
          <p className="fiche-schema-empty-titre">Schémas à venir</p>
          <p className="fiche-schema-empty-txt">Reviens bientôt.</p>
        </div>
      )}
    </div>
  );
}
