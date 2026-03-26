import { useState } from "react";
import { METHODE_CHAPITRES } from "../../data/methodeVideos";

const TOTAL_VIDEOS = METHODE_CHAPITRES.reduce((s, c) => s + c.videos.length, 0);

const PILIERS = [
  { icon: "⏰", label: "Routine", desc: "Construis une journée type efficace" },
  { icon: "🧠", label: "Mental", desc: "Développe la niaque et la résilience" },
  { icon: "🎯", label: "Focus", desc: "Élimine la procrastination" },
  { icon: "📋", label: "Organisation", desc: "Planifie et priorise tes révisions" },
  { icon: "🧬", label: "Mémorisation", desc: "Retiens tes cours sur le long terme" },
];

const CHAP_DESCRIPTIONS = {
  "methode-ch1": "Mets en place les fondations : une routine solide, de bonnes habitudes et un système de progression.",
  "methode-ch2": "Construis le mindset des étudiants qui réussissent : gestion du stress, motivation et résilience.",
  "methode-ch3": "Apprends à rester concentré(e) des heures, éliminer la procrastination et gérer ton énergie.",
};

function VimeoPlayer({ vimeoId, vimeoHash }) {
  return (
    <div className="meth-player-wrap">
      <iframe
        src={`https://player.vimeo.com/video/${vimeoId}?h=${vimeoHash}&title=0&byline=0&portrait=0&dnt=1`}
        className="meth-player"
        allow="autoplay; fullscreen; picture-in-picture"
        allowFullScreen
        title="Vidéo méthode"
      />
    </div>
  );
}

function RecapSection({ recap }) {
  if (!recap?.length) return null;
  return (
    <div className="meth-recap">
      <div className="meth-recap-header">
        <span className="meth-recap-icon">📋</span>
        <span className="meth-recap-label">Fiche Récap</span>
      </div>
      {recap.map((sec, i) => (
        <div key={i} className="meth-recap-block">
          <h4 className="meth-recap-titre">{sec.titre}</h4>
          <div className="meth-recap-contenu">
            {sec.contenu.split("\n").map((line, j) => {
              const trimmed = line.trim();
              if (!trimmed) return null;
              if (trimmed.startsWith("•")) {
                return (
                  <div key={j} className="meth-recap-bullet">
                    <span className="meth-recap-dot" />
                    <span>{trimmed.replace(/^•\s*/, "")}</span>
                  </div>
                );
              }
              return <p key={j} className="meth-recap-text">{trimmed}</p>;
            })}
          </div>
        </div>
      ))}
    </div>
  );
}

function VideoCard({ video, index, onClick }) {
  return (
    <button className="meth-video-card" onClick={onClick}>
      <span className="meth-vc-index">{index}</span>
      <div className="meth-vc-info">
        <span className="meth-vc-titre">{video.emoji} {video.titre}</span>
        {video.description && <span className="meth-vc-desc">{video.description}</span>}
      </div>
      <span className="meth-vc-play">▶</span>
    </button>
  );
}

export default function MethodePage() {
  const [openChap, setOpenChap] = useState(METHODE_CHAPITRES[0]?.id || null);
  const [activeVideo, setActiveVideo] = useState(null);

  if (activeVideo) {
    return (
      <div className="meth-page">
        <div className="meth-header">
          <button className="back-btn" onClick={() => setActiveVideo(null)}>←</button>
          <span className="meth-header-title">{activeVideo.emoji} {activeVideo.titre}</span>
        </div>
        <VimeoPlayer vimeoId={activeVideo.vimeoId} vimeoHash={activeVideo.vimeoHash} />
        <div className="meth-video-desc">
          <h3 className="meth-desc-titre">{activeVideo.titre}</h3>
          {activeVideo.description && <p className="meth-desc-sub">{activeVideo.description}</p>}
        </div>
        <RecapSection recap={activeVideo.recap} />
      </div>
    );
  }

  return (
    <div className="page meth-landing">
      {/* Hero */}
      <div className="meth-hero">
        <div className="meth-hero-badge">PROGRAMME EXCLUSIF</div>
        <h1 className="meth-hero-title">Trouve Ta<br /><span className="meth-hero-accent">Méthode</span></h1>
        <p className="meth-hero-sub">
          Le programme complet pour construire une méthode de travail qui te mène au succès en PASS/LAS.
        </p>
        <div className="meth-hero-stats">
          <div className="meth-stat">
            <span className="meth-stat-num">{METHODE_CHAPITRES.length}</span>
            <span className="meth-stat-label">chapitres</span>
          </div>
          <div className="meth-stat-sep" />
          <div className="meth-stat">
            <span className="meth-stat-num">{TOTAL_VIDEOS}</span>
            <span className="meth-stat-label">vidéos</span>
          </div>
          <div className="meth-stat-sep" />
          <div className="meth-stat">
            <span className="meth-stat-num">∞</span>
            <span className="meth-stat-label">récaps</span>
          </div>
        </div>
      </div>

      {/* Piliers */}
      <div className="meth-section">
        <h2 className="meth-section-title">Les 5 piliers de la réussite</h2>
        <p className="meth-section-sub">Chaque vidéo t'apprend une compétence concrète que les meilleurs étudiants maîtrisent.</p>
        <div className="meth-piliers">
          {PILIERS.map((p, i) => (
            <div key={i} className="meth-pilier">
              <span className="meth-pilier-icon">{p.icon}</span>
              <span className="meth-pilier-label">{p.label}</span>
              <span className="meth-pilier-desc">{p.desc}</span>
            </div>
          ))}
        </div>
      </div>

      {/* CTA */}
      <div className="meth-cta-box">
        <span className="meth-cta-emoji">🚀</span>
        <p className="meth-cta-text">
          Ces vidéos ont aidé <strong>+2 000 étudiants</strong> à trouver leur méthode.<br />
          Chaque vidéo dure <strong>5 à 15 min</strong> et contient une <strong>fiche récap</strong> intégrée.
        </p>
      </div>

      {/* Chapitres */}
      <div className="meth-section">
        <h2 className="meth-section-title">Le programme</h2>
        <p className="meth-section-sub">Avance à ton rythme, chapitre par chapitre.</p>
      </div>

      {METHODE_CHAPITRES.map((chap, ci) => (
        <div key={chap.id} className="meth-chapitre">
          <button
            className={`meth-chap-header ${openChap === chap.id ? "open" : ""}`}
            onClick={() => setOpenChap(openChap === chap.id ? null : chap.id)}
          >
            <div className="meth-chap-left">
              <span className="meth-chap-num">CH. {chap.numero}</span>
              <div className="meth-chap-info">
                <span className="meth-chap-titre">{chap.emoji} {chap.titre}</span>
                <span className="meth-chap-desc">{CHAP_DESCRIPTIONS[chap.id] || ""}</span>
              </div>
            </div>
            <div className="meth-chap-right">
              <span className="meth-chap-count">{chap.videos.length} vidéos</span>
              <span className="meth-chap-chevron">{openChap === chap.id ? "▾" : "›"}</span>
            </div>
          </button>

          {openChap === chap.id && (
            <div className="meth-chap-videos">
              {chap.videos.map((v, vi) => (
                <VideoCard
                  key={v.id}
                  video={v}
                  index={vi + 1}
                  onClick={() => setActiveVideo(v)}
                />
              ))}
            </div>
          )}
        </div>
      ))}

      {/* Footer motivationnel */}
      <div className="meth-footer-box">
        <p className="meth-footer-quote">
          « Les étudiants qui réussissent ne sont pas les plus intelligents.<br />
          Ce sont ceux qui ont la meilleure méthode. »
        </p>
        <span className="meth-footer-author">— L'équipe Hermione</span>
      </div>
    </div>
  );
}
