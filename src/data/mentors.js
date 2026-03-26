export const MENTORS = [
  {
    id: "top100",
    rank: "Top 100 PASS",
    rankShort: "Top 100",
    name: "Sarah",
    emoji: "👩‍⚕️",
    bio: "Classée dans le Top 100 en PASS à Paris. Spécialisée en biochimie et biologie cellulaire. Elle te rappelle pour répondre à toutes tes questions !",
    specialty: "Biochimie & Bio Cell",
    worldsRequired: 2,
  },
  {
    id: "top50",
    rank: "Top 50 PASS",
    rankShort: "Top 50",
    name: "Lucas",
    emoji: "👨‍⚕️",
    bio: "Top 50 en PASS à Montpellier. Expert en physique et chimie. Il te rappelle pour te donner ses meilleures astuces sur les QCM pièges !",
    specialty: "Physique & Chimie",
    worldsRequired: 4,
  },
  {
    id: "top10",
    rank: "Top 10 PASS",
    rankShort: "Top 10",
    name: "Inès",
    emoji: "🧑‍⚕️",
    bio: "Top 10 en PASS à Lyon. Sa méthode : comprendre plutôt qu'apprendre par cœur. Elle te rappelle pour t'aider à développer ton raisonnement médical.",
    specialty: "SHS & Méthode",
    worldsRequired: 6,
  },
  {
    id: "major",
    rank: "Major de promo",
    rankShort: "Major",
    name: "Raphaël",
    emoji: "🏆",
    bio: "Major de promotion PASS à Bordeaux. Il a tout donné pendant un an et veut transmettre son expérience. Il te rappelle pour te coacher !",
    specialty: "Toutes matières",
    worldsRequired: 8,
  },
];

export function getMentorByRank(rank) {
  return MENTORS.find(m => m.id === rank) || null;
}
