import SCHEMAS from "../../schemas/index";

const MIND_COLORS = [
  "#5B4FD9", "#C9A84C", "#2ecc71", "#e74c3c",
  "#3498db", "#9b59b6", "#e67e22", "#1abc9c",
];

function shortLabel(text, max = 22) {
  const s = (text || "").trim();
  return s.length > max ? `${s.slice(0, max - 1)}…` : s;
}

function cleanConcepts(concepts) {
  return (Array.isArray(concepts) ? concepts : [])
    .filter((c) => c?.terme && c?.definition)
    .slice(0, 6)
    .map((c) => ({ terme: c.terme.trim(), definition: c.definition.trim() }));
}

function extractAction(definition) {
  const s = (definition || "").replace(/\s+/g, " ").trim();
  if (!s) return "interagit";
  const first = s.split(/[,.]/)[0];
  return first.length > 34 ? `${first.slice(0, 33)}…` : first;
}

function FlowSchema({ concepts }) {
  const items = concepts.slice(0, 4);
  if (items.length < 2) return null;
  return (
    <div className="real-schema-card">
      <h3 className="real-schema-title">Schema 1 - Chaine de mecanismes</h3>
      <svg viewBox="0 0 360 130" className="real-schema-svg">
        {items.map((c, i) => {
          const x = 20 + i * 85;
          const color = MIND_COLORS[i % MIND_COLORS.length];
          return (
            <g key={i}>
              <rect x={x} y="34" width="74" height="52" rx="10" fill={color} opacity="0.9" />
              <text x={x + 37} y="61" textAnchor="middle" fill="#fff" fontSize="10" fontWeight="700">
                {shortLabel(c.terme, 12)}
              </text>
              {i < items.length - 1 && (
                <path d={`M ${x + 76} 60 L ${x + 84} 60`} stroke="#9aa3b1" strokeWidth="2.2" markerEnd="url(#arrFlow)" />
              )}
            </g>
          );
        })}
        <defs>
          <marker id="arrFlow" markerWidth="8" markerHeight="8" refX="7" refY="4" orient="auto">
            <path d="M0,0 L8,4 L0,8 z" fill="#9aa3b1" />
          </marker>
        </defs>
      </svg>
    </div>
  );
}

function InteractionSchema({ concepts, title }) {
  if (concepts.length < 3) return null;
  const center = shortLabel(title || "Chapitre", 16);
  const nodes = concepts.slice(0, 5);
  return (
    <div className="real-schema-card">
      <h3 className="real-schema-title">Schema 2 - Carte d'interactions</h3>
      <svg viewBox="0 0 360 220" className="real-schema-svg">
        <rect x="126" y="88" width="108" height="44" rx="10" fill="#5B4FD9" />
        <text x="180" y="114" textAnchor="middle" fill="#fff" fontSize="11" fontWeight="700">
          {center}
        </text>
        {nodes.map((n, i) => {
          const pos = [
            { x: 28, y: 20 },
            { x: 258, y: 20 },
            { x: 12, y: 156 },
            { x: 268, y: 156 },
            { x: 126, y: 170 },
          ][i];
          const color = MIND_COLORS[i % MIND_COLORS.length];
          return (
            <g key={i}>
              <rect x={pos.x} y={pos.y} width="96" height="34" rx="9" fill={color} opacity="0.92" />
              <text x={pos.x + 48} y={pos.y + 21} textAnchor="middle" fill="#fff" fontSize="9.5" fontWeight="700">
                {shortLabel(n.terme, 14)}
              </text>
              <path d={`M ${pos.x + 48} ${pos.y + 34} L 180 88`} stroke={color} strokeWidth="1.8" opacity="0.42" />
            </g>
          );
        })}
      </svg>
    </div>
  );
}

function StructureFunctionSchema({ concepts }) {
  const items = concepts.slice(0, 4);
  if (items.length < 2) return null;
  return (
    <div className="real-schema-card">
      <h3 className="real-schema-title">Schema 3 - Structure vers fonction</h3>
      <svg viewBox="0 0 360 190" className="real-schema-svg">
        <line x1="176" y1="18" x2="176" y2="168" stroke="#d6d9e2" strokeWidth="2" />
        <text x="88" y="18" textAnchor="middle" fill="#7a8192" fontSize="10" fontWeight="700">Structure</text>
        <text x="270" y="18" textAnchor="middle" fill="#7a8192" fontSize="10" fontWeight="700">Fonction</text>
        {items.map((c, i) => {
          const y = 30 + i * 38;
          const color = MIND_COLORS[i % MIND_COLORS.length];
          return (
            <g key={i}>
              <rect x="16" y={y} width="130" height="28" rx="8" fill={color} opacity="0.9" />
              <text x="81" y={y + 18} textAnchor="middle" fill="#fff" fontSize="9.5" fontWeight="700">
                {shortLabel(c.terme, 18)}
              </text>
              <path d={`M 148 ${y + 14} C 180 ${y + 14}, 190 ${y + 14}, 214 ${y + 14}`} stroke={color} strokeWidth="1.8" markerEnd="url(#arrStr)" />
              <rect x="216" y={y} width="132" height="28" rx="8" fill="#ffffff" stroke={color} strokeWidth="1.4" />
              <text x="282" y={y + 18} textAnchor="middle" fill="#2d3340" fontSize="9">
                {shortLabel(extractAction(c.definition), 22)}
              </text>
            </g>
          );
        })}
        <defs>
          <marker id="arrStr" markerWidth="8" markerHeight="8" refX="7" refY="4" orient="auto">
            <path d="M0,0 L8,4 L0,8 z" fill="#96a0b5" />
          </marker>
        </defs>
      </svg>
    </div>
  );
}

export default function FichePage3Schemas({ data, concepts }) {
  const schemas = Array.isArray(data?.schemas) ? data.schemas : [];
  const generatedConcepts = cleanConcepts(concepts);
  const titrePage = data?.titre || "Schémas";
  const chapterTitle = data?.titreChapitre || titrePage;
  const hasGenerated = generatedConcepts.length >= 2;

  return (
    <div className="fiche-page fiche-page-modern">
      <h2 className="fiche-titre-modern">
        <span className="fiche-souligne-vert">{titrePage}</span>
      </h2>

      <p className="fiche-schema-intro">
        Schemas auto-construits depuis la fiche du chapitre : flux, interactions et liens structure-fonction.
      </p>

      {hasGenerated && (
        <>
          <FlowSchema concepts={generatedConcepts} />
          <InteractionSchema concepts={generatedConcepts} title={chapterTitle} />
          <StructureFunctionSchema concepts={generatedConcepts} />
        </>
      )}

      {schemas.length > 0 && (
        <>
          {schemas.map((s, i) => {
            const id = s?.id;
            const legende = s?.legende || s?.titre || "";
            const SvgComp = id ? SCHEMAS[id] : null;
            if (!SvgComp) return null;
            return (
              <div key={i} className="fiche-schema-block">
                <div className="fiche-schema-wrap"><SvgComp /></div>
                {legende && <p className="fiche-schema-legende-modern">↳ {legende}</p>}
              </div>
            );
          })}
        </>
      )}

      {!hasGenerated && schemas.length === 0 && (
        <div className="fiche-schema-empty">
          <span className="fiche-schema-empty-icon" aria-hidden>📐</span>
          <p className="fiche-schema-empty-titre">Schémas indisponibles pour ce chapitre</p>
          <p className="fiche-schema-empty-txt">
            Le contenu source n'a pas assez de notions pour generer un schema lisible.
          </p>
        </div>
      )}
    </div>
  );
}
