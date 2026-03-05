export default function FichePage2Concepts({ data }) {
  return (
    <div className="fiche-page">
      <h2 className="fiche-page-titre">{data.titre}</h2>
      {data.concepts.map((c, i) => (
        <div key={i} className="concept-card">
          <div className="concept-terme">{c.terme}</div>
          <div className="concept-def">{c.definition}</div>
        </div>
      ))}
    </div>
  );
}
