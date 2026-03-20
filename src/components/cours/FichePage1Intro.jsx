function splitIntroText(texte) {
  if (!texte || typeof texte !== "string") return [];
  const t = texte.replace(/\s+/g, " ").trim();
  const rough = t.split(/\.\s+/).filter(Boolean);
  if (rough.length >= 2) {
    return rough.map((c, i) =>
      i < rough.length - 1 ? `${c.trim()}.` : c.trim()
    );
  }
  return [t];
}

export default function FichePage1Intro({ data }) {
  const paragraphes = splitIntroText(data?.texte);
  const points = Array.isArray(data?.points_cles) ? data.points_cles : [];

  return (
    <div className="fiche-page fiche-page-modern fiche-intro-wow">
      <div className="fiche-intro-hero">
        <span className="fiche-intro-kicker">Fiche de cours</span>
        <h2 className="fiche-titre-modern">
          <span className="fiche-souligne-rose">{data?.titre || "Introduction"}</span>
        </h2>
      </div>

      <div className="fiche-intro-body">
        <ul className="fiche-intro-bullets">
          {paragraphes.map((p, i) => (
            <li key={i} className="fiche-intro-bullet">
              <span className="fiche-intro-bullet-mark" aria-hidden>
                ✦
              </span>
              <span>{p}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className="fiche-encadre-wow">
        <p className="fiche-encadre-wow-label">⭐ À retenir</p>
        <ul className="fiche-encadre-wow-list">
          {points.map((p, i) => (
            <li key={i} className="fiche-encadre-wow-item">
              <span className="fiche-check">✓</span>
              <span>{p}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
