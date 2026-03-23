export default function WorldCompleteModal({ world, unlockedMentor, onDiscover, onClose }) {
  return (
    <div className="level-modal-backdrop" onClick={onClose}>
      <div className="world-complete-modal" onClick={e => e.stopPropagation()}>
        <div className="confetti-container">
          {Array.from({ length: 20 }).map((_, i) => (
            <div key={i} className="confetti-piece" style={{
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 2}s`,
              backgroundColor: ["#C9A84C","#740001","#2ecc71","#0E1A40","#946B2D","#222F5B"][i % 6],
            }} />
          ))}
        </div>

        <div className="world-complete-icon">🏆</div>
        <h2 className="world-complete-titre">
          Matière terminée !
        </h2>
        <p className="world-complete-world">
          {world.emoji} {world.nom}
        </p>
        <p className="world-complete-stats">
          {world.totalLevels} chapitres complétés &middot;{" "}
          {world.levels.reduce((s, l) => s + l.starCount, 0)}/{world.totalLevels * 3} étoiles
        </p>

        {unlockedMentor && (
          <div className="world-complete-mentor">
            <div className="mentor-unlock-badge">🔓 NOUVEAU MENTOR</div>
            <div className="mentor-unlock-card">
              <span className="mentor-unlock-emoji">{unlockedMentor.emoji}</span>
              <div>
                <strong>{unlockedMentor.name}</strong>
                <span className="mentor-unlock-rank">{unlockedMentor.rank}</span>
              </div>
            </div>
            <p className="mentor-unlock-bio">{unlockedMentor.bio}</p>
            <button className="mentor-discover-btn" onClick={onDiscover}>
              💬 Parler à {unlockedMentor.name}
            </button>
          </div>
        )}

        <button className="level-modal-close" onClick={onClose}>Continuer</button>
      </div>
    </div>
  );
}
