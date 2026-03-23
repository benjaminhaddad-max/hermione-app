import { MATIERES } from "./content";
import { MENTORS } from "./mentors";

// ── Seuils de passage ────────────────────────────────────────────────────────
export const QCM_PASS_THRESHOLD = 0.7;       // 70% pour passer
export const FC_MASTERY_THRESHOLD = 0.8;      // 80% pour etoile flashcards

// ── Gates mentors ────────────────────────────────────────────────────────────
export const MENTOR_GATES = MENTORS.map(m => ({
  mentorId: m.id,
  worldsRequired: m.worldsRequired,
}));

// ── Construction de la carte ─────────────────────────────────────────────────
export function buildAventureMap(storage) {
  const aventure = storage?.aventure || { levels: {} };

  const worlds = MATIERES.map((mat, worldIdx) => {
    const levels = mat.cours.map((cours, levelIdx) => {
      const saved = aventure.levels?.[cours.id] || {};
      const ficheLue = !!storage?.fiches_lues?.[cours.id]?.lue;

      // Best QCM score
      const qcmScores = storage?.qcm_scores?.[cours.id] || [];
      const bestQcmPct = qcmScores.length > 0
        ? Math.max(...qcmScores.map(s => s.score / s.total))
        : 0;
      const qcmPassed = bestQcmPct >= QCM_PASS_THRESHOLD;

      // Flashcard mastery
      const fcProg = storage?.flashcards_progress?.[cours.id];
      const totalCards = cours.flashcardsData?.length || 1;
      const masteredCards = fcProg?.mastered_count || 0;
      const fcMastered = (masteredCards / totalCards) >= FC_MASTERY_THRESHOLD;

      const stars = [ficheLue, qcmPassed, fcMastered];
      const passed = qcmPassed; // QCM is the gate

      return {
        coursId: cours.id,
        titre: cours.titre,
        emoji: cours.emoji,
        stars,
        starCount: stars.filter(Boolean).length,
        passed,
        bestQcmPct: Math.round(bestQcmPct * 100),
        attempts: qcmScores.length,
        totalQcm: cours.qcm?.length || 0,
        totalFlashcards: cours.flashcardsData?.length || 0,
        hasQcm: (cours.qcm?.length || 0) > 0,
        hasFlashcards: (cours.flashcardsData?.length || 0) > 0,
      };
    });

    // Un niveau est debloque si : c'est le premier OU le precedent est passe
    const levelsWithLock = levels.map((lev, i) => ({
      ...lev,
      locked: i === 0 ? false : !levels[i - 1].passed,
      isFirst: i === 0,
      isLast: i === levels.length - 1,
    }));

    const completedCount = levels.filter(l => l.passed).length;
    const isWorldComplete = completedCount === levels.length && levels.length > 0;

    return {
      id: mat.id,
      nom: mat.nom,
      emoji: mat.emoji,
      color: mat.color,
      categorie: mat.categorie,
      levels: levelsWithLock,
      completedCount,
      totalLevels: levels.length,
      isComplete: isWorldComplete,
      progressPct: levels.length > 0 ? Math.round((completedCount / levels.length) * 100) : 0,
    };
  });

  return worlds;
}

// ── Trouver le niveau actuel (premier non-passe non-verrouille) ──────────────
export function getCurrentLevel(worlds) {
  for (let wi = 0; wi < worlds.length; wi++) {
    const world = worlds[wi];
    for (let li = 0; li < world.levels.length; li++) {
      const level = world.levels[li];
      if (!level.locked && !level.passed) {
        return { worldIdx: wi, levelIdx: li, level, world };
      }
    }
  }
  // Tout est fini
  return { worldIdx: worlds.length - 1, levelIdx: 0, level: null, world: worlds[worlds.length - 1] };
}

// ── Mentors debloques ────────────────────────────────────────────────────────
export function getUnlockedMentors(worlds) {
  const completedWorlds = worlds.filter(w => w.isComplete).length;
  return MENTORS.filter(m => completedWorlds >= m.worldsRequired);
}

// ── Stats globales ───────────────────────────────────────────────────────────
export function getAventureStats(worlds) {
  const totalLevels = worlds.reduce((s, w) => s + w.totalLevels, 0);
  const completedLevels = worlds.reduce((s, w) => s + w.completedCount, 0);
  const totalStars = worlds.reduce((s, w) =>
    s + w.levels.reduce((ss, l) => ss + l.starCount, 0), 0);
  const maxStars = totalLevels * 3;
  const completedWorlds = worlds.filter(w => w.isComplete).length;

  return {
    totalLevels,
    completedLevels,
    totalStars,
    maxStars,
    completedWorlds,
    totalWorlds: worlds.length,
    progressPct: totalLevels > 0 ? Math.round((completedLevels / totalLevels) * 100) : 0,
  };
}

// ── Obtenir un cours par ID ──────────────────────────────────────────────────
export function getCoursById(coursId) {
  for (const mat of MATIERES) {
    const found = mat.cours.find(c => c.id === coursId);
    if (found) return found;
  }
  return null;
}

// ── Melanger les questions QCM (pour retry) ──────────────────────────────────
export function shuffleQcm(qcm) {
  const shuffled = [...qcm];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
}
