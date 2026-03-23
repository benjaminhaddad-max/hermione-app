import { findImagesForCourse } from "../../utils/schemaMatch";

function formatTextSections(texte, pointsCles) {
  const sentences = (texte || "").split(/(?<=[.!?])\s+/).filter(s => s.length > 15);
  const points = (pointsCles || []).filter(Boolean);

  const sections = [];
  const chunkSize = Math.max(2, Math.ceil(sentences.length / 4));

  for (let i = 0; i < sentences.length; i += chunkSize) {
    sections.push(sentences.slice(i, i + chunkSize).join(" "));
  }

  if (sections.length === 0 && points.length > 0) {
    sections.push(points.map(p => `• ${p}`).join("\n"));
  }

  return { sections, points };
}

export default function FichePage1Intro({ fiche, courseTitle }) {
  const intro = fiche?.page1_intro || {};
  const concepts = fiche?.page2_concepts?.concepts || [];
  const titre = courseTitle || intro?.titre || "Introduction";
  const images = findImagesForCourse(titre, 6);
  const { sections, points } = formatTextSections(intro?.texte, intro?.points_cles);

  return (
    <div className="fiche-page fiche-page-modern fc-rich">
      <div className="fc-hero">
        <span className="fc-kicker">Fiche de cours</span>
        <h2 className="fc-titre">
          <span className="fiche-souligne-rose">{titre}</span>
        </h2>
      </div>

      {images[0] && (
        <div className="fc-illus">
          <img src={images[0].image} alt={images[0].legende || titre} loading="lazy" />
        </div>
      )}

      <div className="fc-section">
        <h3 className="fc-section-title">📖 Présentation du chapitre</h3>
        {sections[0] && <p className="fc-text">{sections[0]}</p>}
        {sections[1] && <p className="fc-text">{sections[1]}</p>}
      </div>

      {images[1] && (
        <div className="fc-illus">
          <img src={images[1].image} alt={images[1].legende || titre} loading="lazy" />
        </div>
      )}

      {points.length > 0 && (
        <div className="fc-section">
          <h3 className="fc-section-title">🎯 Points clés à retenir</h3>
          <ul className="fc-points">
            {points.map((p, i) => (
              <li key={i} className="fc-point">{p}</li>
            ))}
          </ul>
        </div>
      )}

      {images[2] && (
        <div className="fc-illus">
          <img src={images[2].image} alt={images[2].legende || titre} loading="lazy" />
        </div>
      )}

      {sections.length > 2 && (
        <div className="fc-section">
          <h3 className="fc-section-title">🔬 Approfondissement</h3>
          {sections.slice(2).map((s, i) => (
            <p key={i} className="fc-text">{s}</p>
          ))}
        </div>
      )}

      {images[3] && (
        <div className="fc-illus">
          <img src={images[3].image} alt={images[3].legende || titre} loading="lazy" />
        </div>
      )}

      {concepts.length > 0 && (
        <div className="fc-section">
          <h3 className="fc-section-title">📌 Notions essentielles</h3>
          <div className="fc-concepts-grid">
            {concepts.slice(0, 6).map((c, i) => (
              <div key={i} className="fc-concept-card">
                <div className="fc-concept-term">{c.terme}</div>
                <div className="fc-concept-def">{c.definition}</div>
              </div>
            ))}
          </div>
        </div>
      )}

      {images[4] && (
        <div className="fc-illus">
          <img src={images[4].image} alt={images[4].legende || titre} loading="lazy" />
        </div>
      )}
      {images[5] && (
        <div className="fc-illus">
          <img src={images[5].image} alt={images[5].legende || titre} loading="lazy" />
        </div>
      )}

      <div className="fc-footer">
        <p>Fiche générée à partir des polycopiés Diploma Santé · Swipe pour voir Notions, Schémas, Chiffres et Résumé →</p>
      </div>
    </div>
  );
}
