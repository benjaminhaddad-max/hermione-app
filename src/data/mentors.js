export const MENTORS = [
  {
    id: "top100",
    rank: "Top 100 PASS",
    name: "Sarah",
    emoji: "👩‍⚕️",
    bio: "Classee dans le Top 100 en PASS a Paris. Specialisee en biochimie et biologie cellulaire. Je suis la pour t'aider a comprendre les notions complexes !",
    specialty: "Biochimie & Bio Cell",
    worldsRequired: 2,
  },
  {
    id: "top50",
    rank: "Top 50 PASS",
    name: "Lucas",
    emoji: "👨‍⚕️",
    bio: "Top 50 en PASS a Montpellier. Expert en physique et chimie. Je te donne mes meilleures astuces pour reussir les QCM pieges !",
    specialty: "Physique & Chimie",
    worldsRequired: 4,
  },
  {
    id: "top10",
    rank: "Top 10 PASS",
    name: "Ines",
    emoji: "🧑‍⚕️",
    bio: "Top 10 en PASS a Lyon. Ma methode : comprendre plutot qu'apprendre par coeur. Je t'aide a developper ton raisonnement medical.",
    specialty: "SHS & Methode",
    worldsRequired: 6,
  },
  {
    id: "major",
    rank: "Major de promo",
    name: "Raphael",
    emoji: "🏆",
    bio: "Major de promotion PASS a Bordeaux. J'ai tout donne pendant un an et je veux transmettre mon experience. Objectif : te faire atteindre le top !",
    specialty: "Toutes matieres",
    worldsRequired: 8,
  },
];

export function getMentorByRank(rank) {
  return MENTORS.find(m => m.id === rank) || null;
}
