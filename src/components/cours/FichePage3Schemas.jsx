import SCHEMAS from "../../schemas/index";

const PRESET_RULES = [
  { id: "jonctions-cellulaires", re: /(jonction|occludine|cadh[eé]rine|desmosome|connexon|int[eé]grine)/i },
  { id: "membrane-plasmique", re: /(membrane|bicouche|phospholipid|hydrophile|hydrophobe|transport membranaire)/i },
  { id: "cellule-eucaryote", re: /(cellule|eucaryote|organite|noyau|mitochondrie|golgi)/i },
  { id: "coeur-cavites", re: /(coeur|oreillette|ventricule|aorte|valvule|circulation)/i },
];

function getPresetSchemaIds({ chapterTitle, introText, concepts }) {
  const text = [
    chapterTitle || "",
    introText || "",
    ...(Array.isArray(concepts) ? concepts.map((c) => `${c?.terme || ""} ${c?.definition || ""}`) : []),
  ]
    .join(" ")
    .toLowerCase();

  const ids = [];
  PRESET_RULES.forEach((rule) => {
    if (rule.re.test(text)) ids.push(rule.id);
  });
  return Array.from(new Set(ids));
}

function buildContextNodes(concepts) {
  const arr = Array.isArray(concepts) ? concepts : [];
  return arr
    .slice(0, 5)
    .map((c) => (c?.terme || "").trim())
    .filter(Boolean);
}

function ContextChapterSchema({ chapterTitle, concepts }) {
  const nodes = buildContextNodes(concepts);
  if (nodes.length === 0) return null;
  const title = (chapterTitle || "Chapitre").slice(0, 40);
  const pos = [
    { x: 24, y: 30 },
    { x: 238, y: 30 },
    { x: 24, y: 154 },
    { x: 238, y: 154 },
    { x: 131, y: 190 },
  ];
  return (
    <div className="real-schema-card">
      <div className="real-schema-title">Schema contextuel du chapitre</div>
      <svg viewBox="0 0 360 230" className="real-schema-svg">
        <rect x="122" y="92" width="116" height="46" rx="10" fill="#5B4FD9" />
        <text x="180" y="111" textAnchor="middle" fill="#fff" fontSize="9" fontWeight="700">
          {title.length > 20 ? `${title.slice(0, 20)}…` : title}
        </text>
        <text x="180" y="124" textAnchor="middle" fill="rgba(255,255,255,0.85)" fontSize="8">
          notions clés
        </text>
        {nodes.map((n, i) => {
          const p = pos[i];
          const c = ["#3498db", "#C9A84C", "#2ecc71", "#e74c3c", "#9b59b6"][i % 5];
          return (
            <g key={`${n}-${i}`}>
              <rect x={p.x} y={p.y} width="98" height="34" rx="9" fill={c} opacity="0.92" />
              <text x={p.x + 49} y={p.y + 21} textAnchor="middle" fill="#fff" fontSize="9" fontWeight="700">
                {n.length > 16 ? `${n.slice(0, 16)}…` : n}
              </text>
              <path
                d={`M ${p.x + 49} ${p.y + 34} L 180 92`}
                stroke={c}
                strokeWidth="1.8"
                opacity="0.45"
              />
            </g>
          );
        })}
      </svg>
    </div>
  );
}

export default function FichePage3Schemas({ data, concepts, chapterTitle = "", introText = "" }) {
  const schemas = Array.isArray(data?.schemas) ? data.schemas : [];
  const titrePage = data?.titre || "Schémas";
  const presetIds = getPresetSchemaIds({
    chapterTitle,
    introText,
    concepts,
  });

  const existingIds = schemas
    .map((s) => (typeof s === "object" ? s?.id : null))
    .filter(Boolean);

  const schemaIds = Array.from(new Set([...presetIds, ...existingIds]));
  const hasPresetSchema = schemaIds.length > 0;

  return (
    <div className="fiche-page fiche-page-modern">
      <h2 className="fiche-titre-modern">
        <span className="fiche-souligne-vert">{titrePage}</span>
      </h2>

      <p className="fiche-schema-intro">
        Illustrations schema basees sur le chapitre Diploma Sante : cellule, membrane, jonctions et structures fonctionnelles.
      </p>

      {hasPresetSchema && (
        <>
          {schemaIds.map((id, i) => {
            const SchemaComp = SCHEMAS[id];
            if (!SchemaComp) return null;
            const label = id.replace(/-/g, " ");
            return (
              <div key={`${id}-${i}`} className="fiche-schema-block">
                <div className="real-schema-title">Schema {i + 1} - {label}</div>
                <div className="fiche-schema-wrap">
                  <SchemaComp />
                </div>
              </div>
            );
          })}
        </>
      )}

      {!hasPresetSchema && (
        <ContextChapterSchema chapterTitle={chapterTitle} concepts={concepts} />
      )}

      {!hasPresetSchema && !Array.isArray(concepts) && schemas.length === 0 && (
        <div className="fiche-schema-empty">
          <span className="fiche-schema-empty-icon" aria-hidden>📐</span>
          <p className="fiche-schema-empty-titre">Schémas indisponibles pour ce chapitre.</p>
          <p className="fiche-schema-empty-txt">
            Aucun schema exploitable n'a ete detecte.
          </p>
        </div>
      )}
    </div>
  );
}
