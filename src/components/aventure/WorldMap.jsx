import { useRef, useEffect } from "react";
import LevelNode from "./LevelNode";
import HermioneCharacter from "./HermioneCharacter";
import { MENTORS } from "../../data/mentors";

function getNextMentor(completedWorlds) {
  for (const m of MENTORS) {
    if (completedWorlds < m.worldsRequired) {
      return { mentor: m, worldsNeeded: m.worldsRequired - completedWorlds };
    }
  }
  return null;
}

export default function WorldMap({ world, worldIdx, totalWorlds, completedWorlds, currentLevelIdx, onLevelTap }) {
  const mapRef = useRef(null);
  const currentRef = useRef(null);

  useEffect(() => {
    if (currentRef.current && mapRef.current) {
      setTimeout(() => {
        currentRef.current?.scrollIntoView({ behavior: "smooth", block: "center" });
      }, 300);
    }
  }, [currentLevelIdx, world.id]);

  const levels = world.levels;
  const nextMentor = getNextMentor(completedWorlds);
  const isFirstLevel = currentLevelIdx === 0 && !levels[0]?.passed;

  return (
    <div className="world-map" ref={mapRef}>

      {/* ── Explication contextuelle pour les nouveaux ── */}
      {isFirstLevel && (
        <div className="map-onboard-tip">
          <div className="map-onboard-tip-arrow">👇</div>
          <div className="map-onboard-tip-content">
            <strong>Comment ça marche ?</strong>
            <p>Chaque bulle = un chapitre de <strong>{world.nom}</strong>. Tape dessus pour commencer !</p>
            <div className="map-onboard-steps">
              <span>📖 Lis la fiche</span>
              <span className="map-onboard-arrow">→</span>
              <span>✅ Réussis le QCM</span>
              <span className="map-onboard-arrow">→</span>
              <span>🔓 Niveau suivant</span>
            </div>
          </div>
        </div>
      )}

      {/* ── Header matiere ── */}
      <div className="world-map-header" style={{ borderColor: world.color }}>
        <span className="world-map-emoji">{world.emoji}</span>
        <div style={{ flex: 1 }}>
          <h3 className="world-map-nom">{world.nom}</h3>
          <p className="world-map-desc">{world.levels.length} chapitres à maîtriser</p>
          <div className="world-map-prog">
            <div className="world-map-prog-bar">
              <div className="world-map-prog-fill" style={{ width: `${world.progressPct}%`, background: world.color }} />
            </div>
            <span className="world-map-prog-txt">{world.completedCount}/{world.totalLevels} maîtrisés</span>
          </div>
        </div>
      </div>

      {/* ── Recompense a debloquer ── */}
      {nextMentor && (
        <div className="map-reward-teaser">
          <div className="map-reward-left">
            <div className="map-reward-avatar">{nextMentor.mentor.emoji}</div>
          </div>
          <div className="map-reward-right">
            <div className="map-reward-badge">📞 Appel à débloquer</div>
            <strong className="map-reward-title">{nextMentor.mentor.name} — {nextMentor.mentor.rank}</strong>
            <p className="map-reward-desc">{nextMentor.mentor.specialty}</p>
            <p className="map-reward-how">
              {nextMentor.worldsNeeded === 1
                ? "✨ Termine cette matière pour débloquer un appel avec ce mentor !"
                : `📚 Termine ${nextMentor.worldsNeeded} matières pour être rappelé(e) par ce mentor`}
            </p>
            <div className="map-reward-progress">
              {MENTORS.map((m) => (
                <div key={m.id} className={`map-reward-step ${completedWorlds >= m.worldsRequired ? "done" : ""} ${m.id === nextMentor.mentor.id ? "current" : ""}`}>
                  <span className="map-reward-step-icon">{completedWorlds >= m.worldsRequired ? "✅" : m.id === nextMentor.mentor.id ? "⏳" : "🔒"}</span>
                  <span className="map-reward-step-label">{m.rankShort || m.rank}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
      {!nextMentor && (
        <div className="map-reward-teaser map-reward-complete">
          <span style={{ fontSize: 32 }}>🏆</span>
          <div className="map-reward-right">
            <strong className="map-reward-title">Tous les mentors debloques !</strong>
            <p className="map-reward-desc">Bravo ! Continue pour obtenir 3 etoiles partout.</p>
          </div>
        </div>
      )}

      {/* ── Chemin des niveaux ── */}
      <div className="world-map-path">
        {levels.map((level, i) => {
          const isLeft = i % 2 === 0;
          const isCurrent = i === currentLevelIdx;

          return (
            <div key={level.coursId} className={`map-row ${isLeft ? "left" : "right"}`} ref={isCurrent ? currentRef : null}>
              {i > 0 && (
                <div className={`map-connector ${levels[i - 1].passed ? "active" : ""}`}>
                  <svg viewBox="0 0 100 60" className="map-connector-svg">
                    <path
                      d={isLeft ? "M 80 0 Q 50 30, 20 60" : "M 20 0 Q 50 30, 80 60"}
                      stroke={levels[i - 1].passed ? world.color : "rgba(255,255,255,0.1)"}
                      strokeWidth="3" fill="none"
                      strokeDasharray={levels[i - 1].passed ? "none" : "6 4"}
                    />
                  </svg>
                </div>
              )}

              <div className="map-node-wrapper">
                {isCurrent && <HermioneCharacter />}
                <LevelNode level={level} index={i} isCurrent={isCurrent} onClick={onLevelTap} />
              </div>
            </div>
          );
        })}

        {/* Gate fin de matiere */}
        {world.isComplete ? (
          <div className="map-gate unlocked">
            <span className="map-gate-icon">🏆</span>
            <span className="map-gate-label">Matière terminée ! Bravo !</span>
          </div>
        ) : (
          <div className="map-gate locked">
            <span className="map-gate-icon">🔮</span>
            <span className="map-gate-label">
              Encore {world.totalLevels - world.completedCount} chapitre{world.totalLevels - world.completedCount > 1 ? "s" : ""} à terminer !
            </span>
          </div>
        )}
      </div>
    </div>
  );
}
