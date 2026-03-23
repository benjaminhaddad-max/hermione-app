export const MENTORS = [
  {
    id: "top100",
    rank: "Top 100 PASS",
    name: "Sarah",
    emoji: "👩‍⚕️",
    bio: "Classée dans le Top 100 en PASS à Paris. Spécialisée en biochimie et biologie cellulaire. Je suis là pour t'aider à comprendre les notions complexes !",
    specialty: "Biochimie & Bio Cell",
    worldsRequired: 2,
  },
  {
    id: "top50",
    rank: "Top 50 PASS",
    name: "Lucas",
    emoji: "👨‍⚕️",
    bio: "Top 50 en PASS à Montpellier. Expert en physique et chimie. Je te donne mes meilleures astuces pour réussir les QCM pièges !",
    specialty: "Physique & Chimie",
    worldsRequired: 4,
  },
  {
    id: "top10",
    rank: "Top 10 PASS",
    name: "Inès",
    emoji: "🧑‍⚕️",
    bio: "Top 10 en PASS à Lyon. Ma méthode : comprendre plutôt qu'apprendre par cœur. Je t'aide à développer ton raisonnement médical.",
    specialty: "SHS & Méthode",
    worldsRequired: 6,
  },
  {
    id: "major",
    rank: "Major de promo",
    name: "Raphaël",
    emoji: "🏆",
    bio: "Major de promotion PASS à Bordeaux. J'ai tout donné pendant un an et je veux transmettre mon expérience. Objectif : te faire atteindre le top !",
    specialty: "Toutes matières",
    worldsRequired: 8,
  },
];

export function getMentorByRank(rank) {
  return MENTORS.find(m => m.id === rank) || null;
}
