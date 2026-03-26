import { getCurated, getImageBase } from "../../data/ficheCuratedAll";

function renderContent(text) {
  const lines = text.split("\n").map(l => l.trim()).filter(Boolean);

  return lines.map((line, i) => {
    if (/^[•→]/.test(line)) {
      return (
        <div key={i} className="fc-bullet-row">
          <span className="fc-bullet-dot">›</span>
          <span>{line.replace(/^[•→]\s*/, "")}</span>
        </div>
      );
    }
    return <p key={i} className="fc-text">{line}</p>;
  });
}

function ImageBlock({ img, titre, imageBase }) {
  if (!img) return null;
  return (
    <div className="fc-illus">
      <img src={imageBase + img.file} alt={titre} loading="lazy" />
      {img.caption && <div className="fc-illus-caption">{img.caption}</div>}
    </div>
  );
}

export default function FichePage1Intro({ fiche, courseTitle }) {
  const titre = courseTitle || fiche?.page1_intro?.titre || "Introduction";
  const curated = getCurated(titre);
  const imageBase = getImageBase(titre);

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

  const sections = curated.sections || [];
  const images = curated.images || [];

  return (
    <div className="fiche-page fiche-page-modern fc-rich">
      <div className="fc-hero">
        <span className="fc-kicker">Fiche de cours</span>
        <h2 className="fc-titre"><span className="fiche-souligne-rose">{titre}</span></h2>
      </div>

      <div className="fc-section fc-section-intro">
        {renderContent(curated.intro)}
      </div>

      {sections.map((sec, i) => (
        <div key={i}>
          {images[i] && <ImageBlock img={images[i]} titre={titre} imageBase={imageBase} />}
          <div className="fc-section">
            <h3 className="fc-section-title">{sec.title || sec.titre}</h3>
            {renderContent(sec.content || sec.contenu)}
          </div>
        </div>
      ))}

      {images[sections.length] && <ImageBlock img={images[sections.length]} titre={titre} imageBase={imageBase} />}

      <div className="fc-footer">
        <p>Fiche rédigée pour Hermione Médecine</p>
      </div>
    </div>
  );
}
