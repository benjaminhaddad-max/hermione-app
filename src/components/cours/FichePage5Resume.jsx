export default function FichePage5Resume({ data }) {
  const colors = ["jaune", "rose", "vert", "bleu", "violet"];
  return (
    <div className="fiche-page fiche-manuscrite">
      <h2 className="fiche-titre-manuscrit">
        <span className="fiche-souligne-rose">{data.titre}</span>
      </h2>
      <div className="fiche-resume-list">
        {data.points.map((p, i) => (
          <div key={i} className="fiche-resume-point">
            <span className={`fiche-resume-num fiche-surligne-${colors[i % colors.length]}`}>{i + 1}</span>
            <span className="fiche-resume-texte">{p}</span>
          </div>
        ))}
      </div>
      {data.mnemo && (
        <div className="fiche-mnemo-manuscrit">
          <span className="fiche-mnemo-icon">💡</span>
          <div>
            <div className="fiche-mnemo-label">Astuce memo :</div>
            <p className="fiche-mnemo-texte">{data.mnemo}</p>
          </div>
        </div>
      )}
    </div>
  );
}
