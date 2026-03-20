const PRENOMS = [
  "Emma","Lucas","Léa","Hugo","Chloé","Nathan","Manon","Louis","Camille","Théo",
  "Sarah","Raphaël","Inès","Arthur","Jade","Tom","Louise","Ethan","Alice","Noah",
  "Lina","Gabriel","Clara","Adam","Zoé","Jules","Ambre","Léo","Eva","Mathis",
  "Margot","Enzo","Romane","Axel","Juliette","Maxime","Anna","Sacha","Lola","Paul",
  "Marie","Nolan","Lucie","Valentin","Elise","Romain","Pauline","Antoine","Océane","Clément",
  "Anaïs","Bastien","Charlotte","Dylan","Sofia","Kylian","Agathe","Alexis","Mélissa","Baptiste",
  "Nina","Victor","Maëlys","Quentin","Laura","Tristan","Mathilde","Corentin","Yasmine","Florian",
  "Célia","Dorian","Emilie","Killian","Noémie","Thibault","Salomé","Adrien","Mila","Gabin",
  "Lilou","Erwan","Capucine","Loïc","Héloïse","Maxence","Constance","Aurélien","Apolline","Kévin",
  "Solène","Matthieu","Victoire","Jérémy","Alix","Damien","Margaux","Fabien","Iris","Sébastien",
];

const SUFFIXES = ["","_med","_pass","_las",".study","_2026","_fac","_prepa","",""];

function seededRandom(seed) {
  let s = seed;
  return () => {
    s = (s * 16807 + 0) % 2147483647;
    return (s - 1) / 2147483646;
  };
}

function generateFakeUsers(count = 200) {
  const rng = seededRandom(42);
  const users = [];

  for (let i = 0; i < count; i++) {
    const prenom = PRENOMS[Math.floor(rng() * PRENOMS.length)];
    const suffix = SUFFIXES[Math.floor(rng() * SUFFIXES.length)];
    const num = Math.floor(rng() * 99);
    const pseudo = prenom.toLowerCase() + (num > 50 ? num : "") + suffix;

    const tier = rng();
    let xp;
    if (tier < 0.02) xp = Math.floor(40000 + rng() * 25000);
    else if (tier < 0.08) xp = Math.floor(25000 + rng() * 15000);
    else if (tier < 0.25) xp = Math.floor(12000 + rng() * 13000);
    else if (tier < 0.55) xp = Math.floor(4000 + rng() * 8000);
    else xp = Math.floor(200 + rng() * 3800);

    users.push({ pseudo, xp, fake: true });
  }

  return users.sort((a, b) => b.xp - a.xp);
}

export const FAKE_USERS = generateFakeUsers(200);

export const TOTAL_USERS_DISPLAY = "32 494";

export const LEVELS = [
  { name: "Novice", minXP: 0, emoji: "🌱" },
  { name: "Apprenti", minXP: 500, emoji: "📗" },
  { name: "Étudiant", minXP: 1500, emoji: "📘" },
  { name: "Assidu", minXP: 3500, emoji: "⭐" },
  { name: "Expert", minXP: 7000, emoji: "🔥" },
  { name: "Major", minXP: 15000, emoji: "🏆" },
  { name: "Légende", minXP: 30000, emoji: "👑" },
];

export function getLevel(xp) {
  let current = LEVELS[0];
  let nextLevel = LEVELS[1];
  for (let i = LEVELS.length - 1; i >= 0; i--) {
    if (xp >= LEVELS[i].minXP) {
      current = LEVELS[i];
      nextLevel = LEVELS[i + 1] || null;
      break;
    }
  }
  return { current, nextLevel };
}

export function getRank(userXP) {
  const above = FAKE_USERS.filter(u => u.xp > userXP).length;
  return above + 1;
}

export const XP_REWARDS = {
  FICHE_LUE: 25,
  QCM_COMPLETE: 40,
  QCM_PERFECT: 100,
  FLASHCARD_SESSION: 30,
  FLASHCARD_MASTERED: 10,
  STREAK_BONUS: 50,
};
