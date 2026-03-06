export default function FichePage2Concepts({ data }) {
  const colors = ["jaune", "rose", "vert", "bleu", "violet"];
  return (
    <div className="fiche-page fiche-manuscrite">
      <h2 className="fiche-titre-manuscrit">
        <span className="fiche-souligne-bleu">{data.titre}</span>
      </h2>
      {data.concepts.map((c, i) => (
        <div key={i} className="fiche-concept-manuscrit">
          <div className={`fiche-concept-terme fiche-surligne-${colors[i % colors.length]}`}>
            {c.terme}
          </div>
          <div className="fiche-concept-def">{c.definition}</div>
        </div>
      ))}
    </div>
  );
}
