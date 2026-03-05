export const MATIERES = [
  {
    id: "bio-cell", emoji: "🦠", nom: "Biologie cellulaire", niveau: "PASS/LAS", color: "#3D357A",
    cours: [
      { id: "bc1", titre: "Organisation de la cellule", emoji: "🔬", flashcards: 69, nouveau: false,
        contenu: "La cellule est la plus petite unité fonctionnelle du vivant.\n\nElle contient l'information génétique sous forme d'ADN dans le noyau.\n\nElle est entourée d'une MEC (matrice extra-cellulaire) qui permet adhérence, nutrition et soutien structural.",
        flashcardsData: [
          { q: "Qu'est-ce que la cellule ?", r: "La plus petite unité fonctionnelle du vivant, capable d'autonomie et de reproduction." },
          { q: "Où est stockée l'info génétique dans une cellule eucaryote ?", r: "Dans le noyau, sous forme d'ADN." },
          { q: "Rôle de la MEC ?", r: "Adhérence, nutrition et soutien structural de la cellule." },
        ]},
      { id: "bc2", titre: "Mitochondries et peroxysomes", emoji: "💥", flashcards: 45, nouveau: true,
        contenu: "Les mitochondries sont les centrales énergétiques de la cellule.\n\nElles produisent l'ATP via la phosphorylation oxydative.\n\nLes peroxysomes dégradent les acides gras et détoxifient via la catalase.",
        flashcardsData: [
          { q: "Rôle principal des mitochondries ?", r: "Production d'ATP par phosphorylation oxydative." },
          { q: "Enzyme clé des peroxysomes ?", r: "La catalase, qui dégrade H₂O₂." },
        ]},
      { id: "bc3", titre: "L'apoptose", emoji: "💀", flashcards: 38, nouveau: true,
        contenu: "L'apoptose est la mort cellulaire programmée.\n\nElle implique condensation de la chromatine et formation de corps apoptotiques.\n\nVoies : intrinsèque (mitochondriale) et extrinsèque (récepteurs de mort).",
        flashcardsData: [
          { q: "Définir l'apoptose", r: "Mort cellulaire programmée, physiologique et non inflammatoire." },
          { q: "2 voies de l'apoptose ?", r: "Voie intrinsèque (mitochondriale) et voie extrinsèque (récepteurs de mort)." },
        ]},
    ]
  },
  {
    id: "biochimie", emoji: "🧪", nom: "Biochimie", niveau: "PASS/LAS", color: "#3D357A",
    cours: [
      { id: "bch1", titre: "Les acides aminés", emoji: "⚗️", flashcards: 52, nouveau: false,
        contenu: "Il existe 20 acides aminés protéinogènes.\n\nStructure commune : groupement amine (-NH2), carboxyle (-COOH), chaîne latérale R.\n\n8 acides aminés essentiels chez l'adulte.",
        flashcardsData: [
          { q: "Combien d'acides aminés protéinogènes ?", r: "20 acides aminés." },
          { q: "Combien sont essentiels chez l'adulte ?", r: "8 acides aminés essentiels." },
        ]},
      { id: "bch2", titre: "Les enzymes", emoji: "🔑", flashcards: 61, nouveau: true,
        contenu: "Les enzymes sont des biocatalyseurs protéiques.\n\nElles abaissent l'énergie d'activation sans être consommées.\n\nCinétique de Michaelis-Menten : V = Vmax[S]/(Km+[S])",
        flashcardsData: [
          { q: "Rôle d'une enzyme ?", r: "Biocatalyseur qui abaisse l'énergie d'activation d'une réaction." },
          { q: "Que représente le Km ?", r: "La concentration en substrat pour laquelle V = Vmax/2." },
        ]},
    ]
  },
  {
    id: "physio", emoji: "💗", nom: "La physiologie", niveau: "PASS/LAS", color: "#3D357A",
    cours: [
      { id: "phy1", titre: "Le système cardiovasculaire", emoji: "❤️", flashcards: 78, nouveau: false,
        contenu: "Le cœur est une pompe musculaire à 4 cavités.\n\nCirculation systémique = sang oxygéné.\nCirculation pulmonaire = oxygénation.\n\nDébit cardiaque = FC × VES.",
        flashcardsData: [
          { q: "Formule du débit cardiaque ?", r: "DC = FC × VES (Fréquence cardiaque × Volume d'éjection systolique)." },
          { q: "Combien de cavités a le cœur ?", r: "4 cavités : 2 oreillettes et 2 ventricules." },
        ]},
    ]
  },
  {
    id: "histologie", emoji: "🔭", nom: "Histologie", niveau: "PASS/LAS", color: "#3D357A",
    cours: [
      { id: "histo1", titre: "Les tissus épithéliaux", emoji: "🧬", flashcards: 44, nouveau: true,
        contenu: "Les épithéliums sont des tissus de revêtement et de sécrétion.\n\nIls reposent sur une membrane basale.\n\nClassification : simple, stratifié, pseudostratifié.",
        flashcardsData: [
          { q: "Sur quoi reposent les épithéliums ?", r: "Sur une membrane basale." },
          { q: "3 types d'épithéliums ?", r: "Simple, stratifié, pseudostratifié." },
        ]},
    ]
  },
  {
    id: "anatomie", emoji: "🦴", nom: "Anatomie", niveau: "PASS/LAS", color: "#3D357A",
    cours: [
      { id: "ana1", titre: "Le squelette axial", emoji: "🦷", flashcards: 55, nouveau: true,
        contenu: "Le squelette axial comprend crâne, colonne vertébrale, sternum et côtes.\n\nColonne : 7 cervicales, 12 dorsales, 5 lombaires, sacrum, coccyx.",
        flashcardsData: [
          { q: "Combien de vertèbres cervicales ?", r: "7 vertèbres cervicales." },
          { q: "Éléments du squelette axial ?", r: "Crâne, colonne vertébrale, sternum et côtes." },
        ]},
    ]
  },
  {
    id: "sante-pub", emoji: "👩‍⚕️", nom: "Santé publique", niveau: "PASS/LAS", color: "#3D357A",
    cours: [
      { id: "sp1", titre: "Épidémiologie descriptive", emoji: "📊", flashcards: 33, nouveau: true,
        contenu: "L'épidémiologie étudie la distribution des maladies dans les populations.\n\nIncidence = nouveaux cas / population à risque.\nPrévalence = tous les cas existants à un instant T.",
        flashcardsData: [
          { q: "Différence incidence vs prévalence ?", r: "Incidence = nouveaux cas sur une période. Prévalence = tous les cas à un instant T." },
        ]},
    ]
  },
  {
    id: "lycee-svt", emoji: "🌿", nom: "#lycée : SVT", niveau: "Lycée", color: "#1E7A9E",
    cours: [
      { id: "svt1", titre: "La génétique moléculaire", emoji: "🧬", flashcards: 41, nouveau: true,
        contenu: "L'ADN est une double hélice antiparallèle.\n\nLa réplication est semi-conservative.\nTranscription → ARNm. Traduction → protéines.",
        flashcardsData: [
          { q: "Comment est la réplication de l'ADN ?", r: "Semi-conservative : chaque molécule contient un brin parental et un brin néosynthétisé." },
          { q: "Produit de la transcription ?", r: "L'ARNm (ARN messager)." },
        ]},
      { id: "svt2", titre: "La mitose", emoji: "🔄", flashcards: 29, nouveau: true,
        contenu: "La mitose est la division cellulaire conforme.\n\nPhases : Prophase → Métaphase → Anaphase → Télophase.\n\nRésultat : 2 cellules filles génétiquement identiques.",
        flashcardsData: [
          { q: "Phases de la mitose ?", r: "Prophase, Métaphase, Anaphase, Télophase." },
          { q: "Résultat de la mitose ?", r: "2 cellules filles génétiquement identiques." },
        ]},
    ]
  },
  {
    id: "lycee-pc", emoji: "⚡", nom: "#lycée : Physique-Chimie", niveau: "Lycée", color: "#1E7A9E",
    cours: [
      { id: "pc1", titre: "Méthodes physiques d'analyse", emoji: "🔬", flashcards: 36, nouveau: true,
        contenu: "A = log(1/T) — Absorbance\n\nLoi de Beer-Lambert : A = ε × l × c\n\nLoi des gaz parfaits : PV = nRT",
        flashcardsData: [
          { q: "Formule de Beer-Lambert ?", r: "A = ε × l × c" },
          { q: "Loi des gaz parfaits ?", r: "PV = nRT" },
        ]},
      { id: "pc2", titre: "Acides-Bases et pH", emoji: "🧪", flashcards: 48, nouveau: true,
        contenu: "pH = -log[H3O+]\n\npKa : pH où [AH] = [A-]\n\nHenderson-Hasselbalch : pH = pKa + log([A-]/[AH])",
        flashcardsData: [
          { q: "Formule du pH ?", r: "pH = -log[H₃O⁺]" },
          { q: "Henderson-Hasselbalch ?", r: "pH = pKa + log([A⁻]/[AH])" },
        ]},
    ]
  },
  {
    id: "methode", emoji: "🏆", nom: "Méthode Hermione", niveau: "Méthode", color: "#8B6914",
    cours: [
      { id: "meth1", titre: "La méthode des J", emoji: "📅", flashcards: 25, nouveau: false,
        contenu: "La méthode des J = répétition espacée.\n\nJ+1 : 20 min\nJ+3 : 15 min\nJ+7 : 10 min\nJ+21 : 5 min\n\nObjectif : ancrer en mémoire long terme.",
        flashcardsData: [
          { q: "À quoi sert la méthode des J ?", r: "Ancrer les connaissances en mémoire long terme via la répétition espacée." },
          { q: "Quand faire la 1ère révision ?", r: "J+1 : le lendemain du cours, 20 minutes." },
        ]},
      { id: "meth2", titre: "Organiser ses révisions", emoji: "📋", flashcards: 18, nouveau: true,
        contenu: "9 principes Hermione :\n\n1. Planning hebdomadaire fixe\n2. Sessions 45min + pause\n3. Activer la récupération\n4. Se tester quotidiennement\n5. Éviter le multitâche\n6. Dormir 7-8h\n7. Réviser avant de dormir\n8. QCM dès J+3\n9. Communauté et entraide",
        flashcardsData: [
          { q: "Durée max d'une session efficace ?", r: "45 minutes maximum, suivies d'une pause." },
          { q: "Pourquoi ne pas juste relire ?", r: "La relecture passive ne crée pas de traces mnésiques. Il faut s'auto-tester." },
        ]},
    ]
  },
];

export const QUIZ_RESSOURCES = [
  { id: "q1", titre: "PASS ou LAS ?", emoji: "🤔", nouveau: true, type: "quiz",
    questions: [
      { q: "Quel aspect des études t'attire le plus ?", options: ["Une discipline principale autre que la santé", "L'approfondissement des sciences et la santé", "Un équilibre entre sciences et autre discipline", "Une discipline spécifique avec complément santé"] },
      { q: "Comment te décris-tu ?", options: ["Très organisé(e)", "Flexible, je m'adapte", "J'ai du mal à me structurer", "Organisé(e) avec de l'aide"] },
      { q: "Ta spécialité préférée au lycée ?", options: ["SVT", "Maths", "Physique-Chimie", "Autre"] },
    ]
  },
  { id: "q2", titre: "Guide des mineures 2026", emoji: "📚", nouveau: true, type: "guide" },
  { id: "q3", titre: "Prompt lettre de motivation", emoji: "✍️", nouveau: true, type: "guide" },
  { id: "q4", titre: "Exemples de fiches de cours", emoji: "📝", nouveau: true, type: "guide" },
];

export const TEMOIGNAGES = [
  { id: "t1", nom: "Elise", resultat: "100e sur 1400 en PASS", emoji: "🏆", nouveau: true, texte: "Grâce à la méthode des J et aux flashcards Hermione, j'ai réussi à mémoriser l'intégralité du programme. La clé c'est la régularité !" },
  { id: "t2", nom: "Nicolas", resultat: "MAJOR en PASS", emoji: "🏆", nouveau: true, texte: "J'ai suivi les 9 principes Hermione à la lettre. Le coaching personnalisé m'a permis d'identifier mes points faibles dès le début." },
  { id: "t3", nom: "Vincent", resultat: "MAJOR en PASS à Bordeaux", emoji: "🥇", nouveau: true, texte: "La pré-rentrée Hermione m'a donné 3 semaines d'avance sur tout le monde. Un avantage considérable sur toute l'année." },
  { id: "t4", nom: "Soline", resultat: "3e en PASS à la Sorbonne", emoji: "🥉", nouveau: true, texte: "Les QCMs d'entraînement et les corrections immédiates sont vraiment ce qui m'a le plus aidée." },
  { id: "t5", nom: "Lucie", resultat: "MAJOR en PASS à Angers", emoji: "🥇", nouveau: true, texte: "Hermione c'est pas juste du contenu, c'est une vraie communauté. Avoir des étudiants qui ont réussi disponibles 24/7, ça change tout." },
];
