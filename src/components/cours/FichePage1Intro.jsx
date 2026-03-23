import FICHE_CURATED from "../../data/ficheCurated";

const IMAGE_BASE = "/schema-library/biochimie/";

function renderParagraphs(text) {
  return text
    .split("\n")
    .map(line => line.trim())
    .filter(Boolean)
    .map((line, i) => {
      if (line.startsWith("•") || line.startsWith("→")) {
        return <li key={i} className="fc-bullet">{line.replace(/^[•→]\s*/, "")}</li>;
      }
      if (/^\d+\./.test(line)) {
        return <li key={i} className="fc-bullet fc-bullet-num">{line}</li>;
      }
      return <p key={i} className="fc-text">{line}</p>;
    });
}

function wrapBullets(elements) {
  const result = [];
  let currentList = [];

  elements.forEach((el, i) => {
    if (el.type === "li") {
      currentList.push(el);
    } else {
      if (currentList.length > 0) {
        result.push(<ul key={`ul-${i}`} className="fc-bullet-list">{currentList}</ul>);
        currentList = [];
      }
      result.push(el);
    }
  });
  if (currentList.length > 0) {
    result.push(<ul key="ul-last" className="fc-bullet-list">{currentList}</ul>);
  }
  return result;
}

export default function FichePage1Intro({ fiche, courseTitle }) {
  const titre = courseTitle || fiche?.page1_intro?.titre || "Introduction";
  const curated = FICHE_CURATED[titre];

  if (!curated) {
    const intro = fiche?.page1_intro || {};
    return (
      <div className="fiche-page fiche-page-modern fc-rich">
        <div className="fc-hero">
          <span className="fc-kicker">Fiche de cours</span>
          <h2 className="fc-titre"><span className="fiche-souligne-rose">{titre}</span></h2>
        </div>
        <div className="fc-section">
          <p className="fc-text">{intro.texte || "Contenu en cours de rédaction."}</p>
        </div>
        {intro.points_cles?.length > 0 && (
          <div className="fc-section">
            <h3 className="fc-section-title">🎯 Points clés</h3>
            <ul className="fc-bullet-list">
              {intro.points_cles.map((p, i) => <li key={i} className="fc-bullet">{p}</li>)}
            </ul>
          </div>
        )}
      </div>
    );
  }

  const images = curated.images.map(f => IMAGE_BASE + f);

  return (
    <div className="fiche-page fiche-page-modern fc-rich">
      <div className="fc-hero">
        <span className="fc-kicker">Fiche de cours</span>
        <h2 className="fc-titre"><span className="fiche-souligne-rose">{titre}</span></h2>
      </div>

      {/* Intro narrative */}
      <div className="fc-section fc-section-intro">
        {wrapBullets(renderParagraphs(curated.intro))}
      </div>

      {/* Image 1 */}
      {images[0] && (
        <div className="fc-illus">
          <img src={images[0]} alt={titre} loading="lazy" />
        </div>
      )}

      {/* Section 1 */}
      {curated.sections[0] && (
        <div className="fc-section">
          <h3 className="fc-section-title">{curated.sections[0].title}</h3>
          {wrapBullets(renderParagraphs(curated.sections[0].content))}
        </div>
      )}

      {/* Image 2 */}
      {images[1] && (
        <div className="fc-illus">
          <img src={images[1]} alt={titre} loading="lazy" />
        </div>
      )}

      {/* Section 2 */}
      {curated.sections[1] && (
        <div className="fc-section">
          <h3 className="fc-section-title">{curated.sections[1].title}</h3>
          {wrapBullets(renderParagraphs(curated.sections[1].content))}
        </div>
      )}

      {/* Image 3 */}
      {images[2] && (
        <div className="fc-illus">
          <img src={images[2]} alt={titre} loading="lazy" />
        </div>
      )}

      {/* Section 3 */}
      {curated.sections[2] && (
        <div className="fc-section">
          <h3 className="fc-section-title">{curated.sections[2].title}</h3>
          {wrapBullets(renderParagraphs(curated.sections[2].content))}
        </div>
      )}

      <div className="fc-footer">
        <p>Fiche rédigée pour Hermione Médecine · Source : Diploma Santé</p>
      </div>
    </div>
  );
}
