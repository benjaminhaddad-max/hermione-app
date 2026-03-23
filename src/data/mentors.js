export const MENTORS = [
  {
    id: "top100",
    rank: "Préfet(e)",
    name: "Neville Londubat",
    emoji: "🌿",
    bio: "Ancien élève timide devenu courageux, Neville connaît les difficultés et sait comment les surmonter. Il t'aide à comprendre la biochimie et la biologie cellulaire avec patience et bienveillance.",
    specialty: "Biochimie & Bio Cell",
    worldsRequired: 2,
  },
  {
    id: "top50",
    rank: "Capitaine de Quidditch",
    name: "Ginny Weasley",
    emoji: "⚡",
    bio: "Brillante et déterminée, Ginny excelle dans les matières scientifiques. Elle te donne ses meilleures astuces pour réussir les QCM pièges en physique et chimie.",
    specialty: "Physique & Chimie",
    worldsRequired: 4,
  },
  {
    id: "top10",
    rank: "Préfète-en-Chef",
    name: "Hermione Granger",
    emoji: "📚",
    bio: "La sorcière la plus brillante de sa génération. Sa méthode : comprendre plutôt qu'apprendre par cœur. Elle t'aide à développer ton raisonnement et ta rigueur.",
    specialty: "Toutes matières & Méthode",
    worldsRequired: 6,
  },
  {
    id: "major",
    rank: "Directeur de Poudlard",
    name: "Albus Dumbledore",
    emoji: "🧙",
    bio: "Le plus grand sorcier de tous les temps partage sa sagesse avec toi. Objectif : te faire atteindre le sommet grâce à une vision globale et une stratégie imparable.",
    specialty: "Maître de toutes les matières",
    worldsRequired: 8,
  },
];

export function getMentorByRank(rank) {
  return MENTORS.find(m => m.id === rank) || null;
}
