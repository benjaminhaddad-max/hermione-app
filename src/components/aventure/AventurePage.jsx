import { useState, useMemo } from "react";
import { buildAventureMap, getCurrentLevel, getUnlockedMentors, getAventureStats, getCoursById, shuffleQcm, QCM_PASS_THRESHOLD } from "../../data/aventure";
import WorldMap from "./WorldMap";
import LevelDetailModal from "./LevelDetailModal";
import LevelFailModal from "./LevelFailModal";
import WorldCompleteModal from "./WorldCompleteModal";
import FicheCoursViewer from "../cours/FicheCoursViewer";
import QCMChapitreSession from "../qcm/QCMChapitreSession";
import FlashcardSession from "../flashcards/FlashcardSession";
import ChatListPage from "../chat/ChatListPage";

export default function AventurePage({ storage, addXP, saveFicheLue, saveQCMScore, saveFCProgress, XP_REWARDS }) {
  const [selectedWorldIdx, setSelectedWorldIdx] = useState(null);
  const [selectedLevel, setSelectedLevel] = useState(null);
  const [view, setView] = useState("map"); // map | fiche | qcm | flashcards | chat
  const [showIntro, setShowIntro] = useState(() => !localStorage.getItem("aventure_intro_seen"));
  const [activeCours, setActiveCours] = useState(null);
  const [failData, setFailData] = useState(null);
  const [worldComplete, setWorldComplete] = useState(null);
  const [subTab, setSubTab] = useState("carte"); // carte | mentors

  const worlds = useMemo(() => buildAventureMap(storage), [storage]);
  const { worldIdx: currentWorldIdx, levelIdx: currentLevelIdx } = useMemo(() => getCurrentLevel(worlds), [worlds]);
  const unlockedMentors = useMemo(() => getUnlockedMentors(worlds), [worlds]);
  const stats = useMemo(() => getAventureStats(worlds), [worlds]);

  const activeWorldIdx = selectedWorldIdx ?? currentWorldIdx;
  const activeWorld = worlds[activeWorldIdx];

  // ── Handlers ───────────────────────────────────────────────────────────────
  function handleLevelTap(level) {
    setSelectedLevel(level);
  }

  function handleFiche() {
    const cours = getCoursById(selectedLevel.coursId);
    if (cours) {
      setActiveCours(cours);
      setView("fiche");
      setSelectedLevel(null);
    }
  }

  function handleQcm() {
    const cours = getCoursById(selectedLevel.coursId);
    if (cours) {
      // Melanger les questions pour chaque tentative
      const shuffled = { ...cours, qcm: shuffleQcm(cours.qcm || []) };
      setActiveCours(shuffled);
      setView("qcm");
      setSelectedLevel(null);
    }
  }

  function handleFlashcards() {
    const cours = getCoursById(selectedLevel.coursId);
    if (cours) {
      setActiveCours(cours);
      setView("flashcards");
      setSelectedLevel(null);
    }
  }

  function handleQcmComplete(coursId, score, total, duree) {
    saveQCMScore(coursId, score, total, duree);
    const pct = score / total;

    if (pct >= QCM_PASS_THRESHOLD) {
      // Passe !
      addXP(XP_REWARDS.LEVEL_COMPLETE);

      // Verifier si le monde est maintenant complet
      const updatedWorlds = buildAventureMap(storage);
      const world = updatedWorlds[activeWorldIdx];
      if (world && world.isComplete) {
        const newMentors = getUnlockedMentors(updatedWorlds);
        const justUnlocked = newMentors.find(m =>
          !unlockedMentors.some(um => um.id === m.id)
        );
        addXP(XP_REWARDS.WORLD_COMPLETE);
        if (justUnlocked) addXP(XP_REWARDS.MENTOR_UNLOCKED);
        setWorldComplete({ world, mentor: justUnlocked || null });
      }

      // Verifier 3 etoiles
      const level = world?.levels.find(l => l.coursId === coursId);
      if (level && level.starCount === 3) {
        addXP(XP_REWARDS.PERFECT_LEVEL);
      }

      setView("map");
    } else {
      // Echec
      setFailData({ score, total, coursId });
      setView("map");
    }
  }

  function handleRetry() {
    const cours = getCoursById(failData.coursId);
    if (cours) {
      const shuffled = { ...cours, qcm: shuffleQcm(cours.qcm || []) };
      setActiveCours(shuffled);
      setFailData(null);
      setView("qcm");
    }
  }

  function handleReread() {
    const cours = getCoursById(failData.coursId);
    if (cours) {
      setActiveCours(cours);
      setFailData(null);
      setView("fiche");
    }
  }

  function handleBack() {
    setView("map");
    setActiveCours(null);
  }

  // ── Rendu des sous-vues ────────────────────────────────────────────────────
  if (view === "fiche" && activeCours) {
    return (
      <FicheCoursViewer
        cours={activeCours}
        onBack={handleBack}
        onSaveProgress={() => saveFicheLue(activeCours.id)}
      />
    );
  }

  if (view === "qcm" && activeCours) {
    return (
      <QCMChapitreSession
        cours={activeCours}
        onBack={handleBack}
        onSaveScore={handleQcmComplete}
      />
    );
  }

  if (view === "flashcards" && activeCours) {
    return (
      <FlashcardSession
        cours={activeCours}
        onBack={handleBack}
        onSaveProgress={saveFCProgress}
      />
    );
  }

  if (view === "chat") {
    return <ChatListPage mentors={unlockedMentors} storage={storage} onBack={() => setView("map")} />;
  }

  function dismissIntro() {
    localStorage.setItem("aventure_intro_seen", "1");
    setShowIntro(false);
  }

  // ── Vue carte principale ───────────────────────────────────────────────────
  return (
    <div className="page aventure-page">

      {/* ── Hero Intro (première visite) ── */}
      {showIntro && (
        <div className="aventure-intro">
          <div className="aventure-intro-glow" />
          <img src="/logo-hermione.webp" alt="Hermione" className="aventure-intro-logo" />
          <h2 className="aventure-intro-title">Mode Aventure</h2>
          <p className="aventure-intro-tagline">Anticipe ta 1re annee de medecine<br/>en passant des niveaux !</p>

          <div className="aventure-intro-steps">
            <div className="aventure-intro-step">
              <span className="aventure-intro-step-icon">📖</span>
              <div>
                <strong>Lis la fiche de cours</strong>
                <p>Decouvre les notions essentielles de chaque chapitre PASS/LAS</p>
              </div>
            </div>
            <div className="aventure-intro-step">
              <span className="aventure-intro-step-icon">✅</span>
              <div>
                <strong>Reussis le QCM (&ge; 70%)</strong>
                <p>Prouve que tu maitrises le chapitre pour passer au niveau suivant</p>
              </div>
            </div>
            <div className="aventure-intro-step">
              <span className="aventure-intro-step-icon">🃏</span>
              <div>
                <strong>Domine les Flashcards</strong>
                <p>Memorise durablement en maitrisant 80% des cartes</p>
              </div>
            </div>
            <div className="aventure-intro-step">
              <span className="aventure-intro-step-icon">💬</span>
              <div>
                <strong>Debloque des mentors PASS</strong>
                <p>Progresse pour chatter avec des Top 100, Top 50, Top 10 et le Major !</p>
              </div>
            </div>
          </div>

          <div className="aventure-intro-rewards">
            <span>⭐ 3 etoiles par niveau</span>
            <span>·</span>
            <span>🏰 8 mondes a explorer</span>
            <span>·</span>
            <span>🏆 {stats.maxStars} etoiles au total</span>
          </div>

          <button className="aventure-intro-btn" onClick={dismissIntro}>
            COMMENCER L'AVENTURE →
          </button>
        </div>
      )}

      {/* ── Header avec stats ── */}
      {!showIntro && (
        <>
          <div className="aventure-header">
            <div className="aventure-header-top">
              <div>
                <h2 className="aventure-header-title">🗺️ Aventure</h2>
                <p className="aventure-header-sub">Anticipe PASS/LAS en passant des niveaux</p>
              </div>
              <div className="aventure-stats-mini">
                <span>⭐ {stats.totalStars}/{stats.maxStars}</span>
                <span>🏰 {stats.completedWorlds}/{stats.totalWorlds}</span>
              </div>
            </div>

            {/* Progress global */}
            <div className="aventure-global-prog">
              <div className="aventure-global-prog-bar">
                <div className="aventure-global-prog-fill" style={{ width: `${stats.progressPct}%` }} />
              </div>
              <span className="aventure-global-prog-txt">{stats.progressPct}% complete</span>
            </div>

            {/* Sub-navigation */}
            {unlockedMentors.length > 0 && (
              <div className="aventure-sub-nav">
                <button
                  className={`aventure-sub-btn ${subTab === "carte" ? "active" : ""}`}
                  onClick={() => setSubTab("carte")}
                >
                  🗺️ Carte
                </button>
                <button
                  className={`aventure-sub-btn ${subTab === "mentors" ? "active" : ""}`}
                  onClick={() => { setSubTab("mentors"); setView("chat"); }}
                >
                  💬 Mentors ({unlockedMentors.length})
                </button>
              </div>
            )}
          </div>

          {/* World selector */}
          <div className="aventure-worlds-scroll">
        {worlds.map((w, i) => (
          <button
            key={w.id}
            className={`aventure-world-chip ${i === activeWorldIdx ? "active" : ""}`}
            onClick={() => setSelectedWorldIdx(i)}
            style={{ borderColor: i === activeWorldIdx ? w.color : "transparent" }}
          >
            <span>{w.emoji}</span>
            <span className="aventure-world-chip-name">{w.nom.length > 10 ? w.nom.slice(0, 10) + "..." : w.nom}</span>
            {w.isComplete && <span className="aventure-world-check">✓</span>}
          </button>
        ))}
      </div>

      {/* Map */}
      <div className="scroll-area">
        {activeWorld && (
          <WorldMap
            world={activeWorld}
            worldIdx={activeWorldIdx}
            totalWorlds={worlds.length}
            completedWorlds={stats.completedWorlds}
            currentLevelIdx={activeWorldIdx === currentWorldIdx ? currentLevelIdx : -1}
            onLevelTap={handleLevelTap}
          />
        )}
      </div>

      {/* Modals */}
      {selectedLevel && (
        <LevelDetailModal
          level={selectedLevel}
          onClose={() => setSelectedLevel(null)}
          onFiche={handleFiche}
          onQcm={handleQcm}
          onFlashcards={handleFlashcards}
        />
      )}

      {failData && (
        <LevelFailModal
          score={failData.score}
          total={failData.total}
          onReread={handleReread}
          onRetry={handleRetry}
          onClose={() => setFailData(null)}
        />
      )}

      {worldComplete && (
        <WorldCompleteModal
          world={worldComplete.world}
          unlockedMentor={worldComplete.mentor}
          onDiscover={() => { setWorldComplete(null); setView("chat"); }}
          onClose={() => setWorldComplete(null)}
        />
      )}
        </>
      )}
    </div>
  );
}
