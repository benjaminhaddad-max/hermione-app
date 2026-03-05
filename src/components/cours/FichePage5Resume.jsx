export default function FichePage5Resume({ data }) {
  return (
    <div className="fiche-page">
      <h2 className="fiche-page-titre">{data.titre}</h2>
      <div className="resume-points">
        {data.points.map((p, i) => (
          <div key={i} className="resume-point">
            <span className="resume-num">{i + 1}</span>
            <span>{p}</span>
          </div>
        ))}
      </div>
      {data.mnemo && (
        <div className="mnemo-card">
          <span className="mnemo-icon">💡</span>
          <p className="mnemo-texte">{data.mnemo}</p>
        </div>
      )}
    </div>
  );
}
