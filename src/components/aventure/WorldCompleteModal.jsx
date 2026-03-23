export default function WorldCompleteModal({ world, unlockedMentor, onDiscover, onClose }) {
  return (
    <div className="level-modal-backdrop" onClick={onClose}>
      <div className="world-complete-modal" onClick={e => e.stopPropagation()}>
        {/* Confetti effect */}
        <div className="confetti-container">
          {Array.from({ length: 20 }).map((_, i) => (
            <div key={i} className="confetti-piece" style={{
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 2}s`,
              backgroundColor: ["#C9A84C","#e05a2b","#2ecc71","#3498db","#9b59b6","#f39c12"][i % 6],
            }} />
          ))}
        </div>

        <div className="world-complete-icon">🎉</div>
        <h2 className="world-complete-titre">
          Monde termine !
        </h2>
        <p className="world-complete-world">
          {world.emoji} {world.nom}
        </p>
        <p className="world-complete-stats">
          {world.totalLevels} niveaux completes &middot;{" "}
          {world.levels.reduce((s, l) => s + l.starCount, 0)}/{world.totalLevels * 3} etoiles
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
              💬 Decouvrir ton mentor
            </button>
          </div>
        )}

        <button className="level-modal-close" onClick={onClose}>Continuer</button>
      </div>
    </div>
  );
}
