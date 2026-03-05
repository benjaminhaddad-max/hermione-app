export default function FichePage1Intro({ data }) {
  return (
    <div className="fiche-page">
      <h2 className="fiche-page-titre">{data.titre}</h2>
      <p className="fiche-intro-texte">{data.texte}</p>
      <div className="fiche-points-cles">
        <p className="fiche-section-label">Points clés</p>
        {data.points_cles.map((p, i) => (
          <div key={i} className="fiche-point-item">
            <span className="fiche-point-bullet">◆</span>
            <span>{p}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
