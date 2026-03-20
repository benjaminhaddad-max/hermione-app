/**
 * Transforme une description textuelle de schéma (issue du pipeline)
 * en carte visuelle structurée + mini infographie SVG.
 */
function parseSchemaText(raw) {
  if (!raw || typeof raw !== "string") {
    return { titre: "Schéma", bullets: [] };
  }
  const t = raw.trim();
  const colon = t.indexOf(":");
  let titre = "Schéma";
  let body = t;
  if (colon > 2 && colon < 120) {
    titre = t.slice(0, colon).trim();
    body = t.slice(colon + 1).trim();
  }
  // Étapes séparées par flèches ou barres (piles, flux…)
  let steps = body
    .split(/\s*(?:→|\u2192|➜|⇒)\s*/g)
    .map((s) => s.trim())
    .filter(Boolean);
  if (steps.length <= 1) {
    steps = body
      .split(/\s*\|\s*/)
      .map((s) => s.trim())
      .filter(Boolean);
  }
  if (steps.length <= 1) {
    steps = body
      .split(/[,;]/)
      .map((s) => s.trim())
      .filter(Boolean);
  }
  if (steps.length === 0) steps = [body];
  return { titre, bullets: steps.slice(0, 8) };
}

function MiniFlowSvg({ n }) {
  const count =
    n <= 1 ? 1 : Math.min(Math.max(n, 2), 6);
  const w = 280;
  const h = 72;
  const pad = 16;
  const usable = w - pad * 2;
  const step = count > 1 ? usable / (count - 1) : 0;
  const nodes = [];
  for (let i = 0; i < count; i++) {
    const x = count === 1 ? w / 2 : pad + i * step;
    nodes.push({ x, y: h / 2 });
  }
  return (
    <svg
      className="fiche-schema-svg"
      viewBox={`0 0 ${w} ${h}`}
      aria-hidden
    >
      <defs>
        <linearGradient id="schemaLine" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="rgba(201,168,76,0.9)" />
          <stop offset="100%" stopColor="rgba(100,80,200,0.75)" />
        </linearGradient>
        <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
          <feGaussianBlur stdDeviation="1.2" result="b" />
          <feMerge>
            <feMergeNode in="b" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>
      {nodes.slice(0, -1).map((_, i) => {
        const a = nodes[i];
        const b = nodes[i + 1];
        return (
          <path
            key={`l-${i}`}
            d={`M ${a.x} ${a.y} L ${b.x} ${b.y}`}
            stroke="url(#schemaLine)"
            strokeWidth="2.5"
            strokeLinecap="round"
            fill="none"
            opacity={0.85}
          />
        );
      })}
      {nodes.map((p, i) => (
        <g key={`n-${i}`} filter="url(#glow)">
          <circle
            cx={p.x}
            cy={p.y}
            r={i === 0 ? 9 : i === nodes.length - 1 ? 9 : 7}
            fill={i === 0 ? "#2ecc71" : i === nodes.length - 1 ? "#e74c3c" : "#5B4FD9"}
            stroke="rgba(255,255,255,0.9)"
            strokeWidth="2"
          />
          <text
            x={p.x}
            y={p.y + 4}
            textAnchor="middle"
            fill="#fff"
            fontSize="11"
            fontFamily="Montserrat, sans-serif"
            fontWeight="800"
          >
            {i + 1}
          </text>
        </g>
      ))}
    </svg>
  );
}

export default function SchemaVisualCard({ texte, index }) {
  const { titre, bullets } = parseSchemaText(texte);
  return (
    <div className="fiche-schema-visual-card" style={{ animationDelay: `${index * 0.06}s` }}>
      <div className="fiche-schema-visual-glow" />
      <div className="fiche-schema-visual-top">
        <span className="fiche-schema-pill">Schéma {index + 1}</span>
        <h3 className="fiche-schema-visual-titre">{titre}</h3>
      </div>
      <div className="fiche-schema-visual-diagram">
        <MiniFlowSvg n={bullets.length} />
      </div>
      <ul className="fiche-schema-bullet-list">
        {bullets.map((b, i) => (
          <li key={i} className="fiche-schema-bullet-item">
            <span className="fiche-schema-bullet-num">{i + 1}</span>
            <span className="fiche-schema-bullet-txt">{b}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
