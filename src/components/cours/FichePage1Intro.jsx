export default function FichePage1Intro({ data }) {
  return (
    <div className="fiche-page fiche-manuscrite">
      {/* Titre */}
      <h2 className="fiche-titre-manuscrit">
        <span className="fiche-souligne-rose">{data.titre}</span>
      </h2>

      {/* Texte intro */}
      <p className="fiche-texte-manuscrit">{data.texte}</p>

      {/* Encadré "À retenir" */}
      <div className="fiche-encadre-jaune">
        <p className="fiche-encadre-label">⭐ À retenir !</p>
        {data.points_cles.map((p, i) => (
          <div key={i} className="fiche-point-manuscrit">
            <span className="fiche-fleche">→</span>
            <span className="fiche-surligne-jaune">{p}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
