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

  if (ids.length === 0) {
    ids.push("cellule-eucaryote");
  }
  return Array.from(new Set(ids));
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

  return (
    <div className="fiche-page fiche-page-modern">
      <h2 className="fiche-titre-modern">
        <span className="fiche-souligne-vert">{titrePage}</span>
      </h2>

      <p className="fiche-schema-intro">
        Illustrations schema basees sur le chapitre Diploma Sante : cellule, membrane, jonctions et structures fonctionnelles.
      </p>

      {schemaIds.length > 0 && (
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

      {schemaIds.length === 0 && (
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
