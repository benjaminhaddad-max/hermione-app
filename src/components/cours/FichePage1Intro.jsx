const PAGE_TITLES = [
  "Fondements du chapitre",
  "Organisation et architecture",
  "Dynamiques et mécanismes",
  "Applications et enjeux",
  "Synthèse opérationnelle",
];

function splitSentences(text) {
  return (text || "")
    .replace(/\s+/g, " ")
    .trim()
    .split(/(?<=[.!?])\s+/)
    .map((s) => s.trim())
    .filter((s) => s.length > 20);
}

function expandWithPoints(points) {
  return (Array.isArray(points) ? points : [])
    .map((p) => p?.trim())
    .filter(Boolean)
    .map((p) => `Point clé du cours : ${p}.`);
}

function buildFiveCoursePages(introText, points) {
  const base = [...splitSentences(introText), ...expandWithPoints(points)];
  const source = base.length ? base : ["Le contenu détaillé sera enrichi prochainement."];

  const pages = Array.from({ length: 5 }, () => []);
  source.forEach((sentence, i) => {
    pages[i % 5].push(sentence);
  });

  return pages.map((chunk, idx) => {
    if (chunk.length === 0) {
      return {
        title: PAGE_TITLES[idx],
        text:
          "Cette partie de la fiche de cours est en cours d'enrichissement depuis la base Diploma Sante.",
      };
    }
    return {
      title: PAGE_TITLES[idx],
      text: chunk.join(" "),
    };
  });
}

export default function FichePage1Intro({ fiche }) {
  const intro = fiche?.page1_intro || {};
  const pages = buildFiveCoursePages(intro?.texte, intro?.points_cles);

  return (
    <div className="fiche-page fiche-page-modern">
      <div className="fc-hero">
        <span className="fc-kicker">Fiche de cours Diploma Sante</span>
        <h2 className="fc-titre">
          <span className="fiche-souligne-rose">{intro?.titre || "Introduction"}</span>
        </h2>
        <p className="fc-pure-note">
          Resume redige uniquement a partir de la fiche de cours source (sans reprise des onglets Notions, Chiffres ou Resume).
        </p>
      </div>

      <div className="fc-pure-pages">
        {pages.map((pg, i) => (
          <article key={i} className="fc-pure-page">
            <div className="fc-pure-head">
              <span className="fc-pure-badge">Page {i + 1}/5</span>
              <h3 className="fc-pure-title">{pg.title}</h3>
            </div>
            <p className="fc-pure-text">{pg.text}</p>
          </article>
        ))}
      </div>
    </div>
  );
}
