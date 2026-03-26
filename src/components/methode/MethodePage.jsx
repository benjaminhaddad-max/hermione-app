import { useState } from "react";
import { METHODE_CHAPITRES } from "../../data/methodeVideos";

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

function VideoCard({ video, active, onClick }) {
  return (
    <button className={`meth-video-card ${active ? "active" : ""}`} onClick={onClick}>
      <span className="meth-video-emoji">{video.emoji}</span>
      <span className="meth-video-titre">{video.titre}</span>
      <span className="meth-video-play">{active ? "▶" : "›"}</span>
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
    <div className="page">
      <div className="page-header">
        <div>
          <h1 className="page-title">Méthode</h1>
          <p className="page-sub">Trouve ta méthode de travail</p>
        </div>
      </div>

      <div className="meth-intro">
        <p className="meth-intro-text">
          Le programme <strong>Trouve Ta Méthode</strong> t'accompagne pour construire une méthode de travail solide. 
          Des vidéos concrètes pour <strong>organiser tes révisions</strong>, <strong>rester motivé(e)</strong> et <strong>mémoriser efficacement</strong>.
        </p>
      </div>

      {METHODE_CHAPITRES.map(chap => (
        <div key={chap.id} className="meth-chapitre">
          <button
            className={`meth-chap-header ${openChap === chap.id ? "open" : ""}`}
            onClick={() => setOpenChap(openChap === chap.id ? null : chap.id)}
          >
            <span className="meth-chap-num">CH. {chap.numero}</span>
            <span className="meth-chap-titre">{chap.emoji} {chap.titre}</span>
            <span className="meth-chap-count">{chap.videos.length} vidéos</span>
            <span className="meth-chap-chevron">{openChap === chap.id ? "▾" : "›"}</span>
          </button>

          {openChap === chap.id && (
            <div className="meth-chap-videos">
              {chap.videos.map(v => (
                <VideoCard
                  key={v.id}
                  video={v}
                  active={false}
                  onClick={() => setActiveVideo(v)}
                />
              ))}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
