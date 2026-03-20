const CONCEPT_COLORS = [
  "rgba(40,130,255,0.65)",
  "rgba(255,80,120,0.65)",
  "rgba(50,180,80,0.65)",
  "rgba(255,160,0,0.65)",
  "rgba(150,50,200,0.65)",
  "rgba(0,180,180,0.65)",
];

const SURLIGNES = ["jaune","rose","vert","bleu","violet","jaune"];

export default function FichePage2Concepts({ data }) {
  return (
    <div className="fiche-page fiche-page-modern">
      <h2 className="fiche-titre-modern">
        <span className="fiche-souligne-bleu">{data.titre}</span>
      </h2>

      {data.concepts.map((c, i) => (
        <div
          key={i}
          className="fiche-concept-manuscrit"
          style={{ "--concept-color": CONCEPT_COLORS[i % CONCEPT_COLORS.length] }}
        >
          <div className={`fiche-concept-terme fiche-surligne-${SURLIGNES[i % SURLIGNES.length]}`}>
            {c.terme}
          </div>
          <div className="fiche-concept-def">{c.definition}</div>
        </div>
      ))}
    </div>
  );
}
