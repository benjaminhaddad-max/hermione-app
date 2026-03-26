// Généré par le pipeline Hermione — Terminale SVT
// 5 chapitres complets avec flashcards, QCM et fiches

export const TERM_SVT_COURS = [
  {
    id: "term-svt-ch1",
    titre: "Le temps et les roches",
    emoji: "🪨",
    nouveau: false,
    flashcardsData: [
      {
        q: "Quel est le principe de superposition ?",
        r: "Dans une série sédimentaire non déformée, la couche du dessous est la plus ancienne."
      },
      {
        q: "Que dit le principe de recoupement ?",
        r: "Un événement géologique (faille, intrusion) qui recoupe une structure est plus récent qu'elle."
      },
      {
        q: "Que dit le principe d'inclusion ?",
        r: "Un fragment de roche inclus dans une autre est plus ancien que la roche qui le contient."
      },
      {
        q: "Qu'est-ce qu'un fossile stratigraphique ?",
        r: "Un fossile d'espèce à courte durée de vie et large répartition géographique, utile pour dater les couches."
      },
      {
        q: "Que signifie 'identité paléontologique' ?",
        r: "Deux couches contenant les mêmes fossiles stratigraphiques ont le même âge, même si elles sont éloignées."
      },
      {
        q: "Quelles sont les grandes ères géologiques dans l'ordre ?",
        r: "Précambrien → Paléozoïque → Mésozoïque → Cénozoïque (de la plus ancienne à la plus récente)."
      },
      {
        q: "Qu'est-ce que la désintégration radioactive ?",
        r: "Transformation spontanée d'un isotope père instable en isotope fils stable, à vitesse constante."
      },
      {
        q: "Que signifie la demi-vie (t½) d'un isotope ?",
        r: "Le temps nécessaire pour que la moitié des atomes pères se transforme en atomes fils."
      },
      {
        q: "Cite trois chronomètres radioactifs utilisés en géologie.",
        r: "Rubidium/Strontium (Rb/Sr), Potassium/Argon (K/Ar) et Uranium/Plomb (U/Pb)."
      },
      {
        q: "Que signifie la 'fermeture du système' en datation absolue ?",
        r: "Le moment où la roche se referme aux échanges : les isotopes restent piégés et le chronomètre démarre."
      }
    ],
    qcm: [
      {
        question: "Dans une série sédimentaire non déformée, quelle couche est la plus ancienne ?",
        options: [
          "La couche du dessous",
          "La couche du dessus",
          "La couche la plus épaisse",
          "La couche la plus colorée"
        ],
        correct: 0,
        explication: "Principe de superposition : la couche la plus basse s'est déposée en premier, donc elle est la plus ancienne."
      },
      {
        question: "Un filon de granite traverse des couches de calcaire. Que peut-on dire ?",
        options: [
          "Le calcaire est plus récent que le granite",
          "Le granite est plus récent que le calcaire",
          "Ils ont le même âge",
          "On ne peut rien dire"
        ],
        correct: 1,
        explication: "Principe de recoupement : le filon qui traverse (recoupe) les couches est plus récent qu'elles."
      },
      {
        question: "Un fossile stratigraphique doit avoir :",
        options: [
          "Une longue durée de vie et une répartition locale",
          "Une courte durée de vie et une large répartition",
          "Une longue durée de vie et une large répartition",
          "Une courte durée de vie et une répartition locale"
        ],
        correct: 1,
        explication: "Pour dater précisément, il faut une espèce ayant vécu peu de temps (précision) mais partout (comparaison entre sites éloignés)."
      },
      {
        question: "Le principe d'identité paléontologique permet de :",
        options: [
          "Mesurer l'âge absolu d'une roche",
          "Corréler des couches éloignées ayant les mêmes fossiles",
          "Identifier les minéraux d'une roche",
          "Calculer la demi-vie d'un isotope"
        ],
        correct: 1,
        explication: "Si deux couches éloignées contiennent les mêmes fossiles stratigraphiques, elles datent de la même époque."
      },
      {
        question: "Que mesure la demi-vie (t½) d'un isotope radioactif ?",
        options: [
          "Le temps pour que tous les atomes pères disparaissent",
          "Le temps pour que la moitié des atomes pères se désintègre",
          "Le temps pour que la roche se solidifie",
          "Le temps pour que l'isotope fils devienne stable"
        ],
        correct: 1,
        explication: "La demi-vie est le temps au bout duquel la moitié des atomes radioactifs pères s'est transformée en atomes fils."
      },
      {
        question: "Le couple Rubidium/Strontium (Rb/Sr) sert surtout à dater :",
        options: [
          "Des fossiles de moins de 50 000 ans",
          "Des roches magmatiques très anciennes (milliards d'années)",
          "Des sédiments marins récents",
          "Des glaces polaires"
        ],
        correct: 1,
        explication: "Le Rb/Sr a une demi-vie très longue (~49 milliards d'années), idéal pour dater des roches très anciennes."
      },
      {
        question: "La 'fermeture du système' en datation absolue correspond au moment où :",
        options: [
          "Les fossiles apparaissent dans la roche",
          "La roche se refroidit et piège les isotopes",
          "La roche est érodée en surface",
          "Les couches sédimentaires se superposent"
        ],
        correct: 1,
        explication: "Quand la roche se referme (refroidissement, cristallisation), les isotopes ne peuvent plus s'échapper : le chronomètre radioactif démarre."
      }
    ],
    fiche: {
      page1_intro: {
        titre: "Introduction",
        texte: "Les géologues cherchent à reconstituer l'histoire de la Terre en datant les roches. Ils utilisent deux grandes méthodes complémentaires : la chronologie relative et la chronologie absolue.",
        sections: [
          {
            titre: "Chronologie relative : l'ordre des événements",
            contenu: `La chronologie relative permet de classer les événements géologiques dans l'ordre. Elle dit « A s'est passé avant B », mais ne donne aucun âge en années.\n\nC'est comme ranger des photos dans un album par ordre chronologique, sans connaître la date exacte de chaque photo.\n\nElle repose sur trois principes simples :\n\n• Principe de superposition. Dans un empilement de couches sédimentaires (couches de terre) non déformé, la couche du bas est la plus ancienne. C'est comme une pile de crêpes : la première posée est en dessous.\n\n• Principe de recoupement. Si une faille ou un filon de roche traverse une couche, il est plus récent qu'elle. C'est comme un trait de stylo tracé par-dessus un dessin : le trait est venu après.\n\n• Principe d'inclusion. Un fragment de roche enfermé dans une autre est plus ancien que celle qui l'entoure. C'est comme un caillou pris dans du béton : le caillou existait avant.\n\nEn gros : on observe les roches et on déduit l'ordre des événements grâce à leur position et leurs relations.`
          },
          {
            titre: "Les fossiles stratigraphiques",
            contenu: `Un fossile stratigraphique est le reste d'une espèce qui a vécu peu de temps mais qui vivait partout sur Terre. C'est un marqueur temporel très fiable.\n\nPour être utile, le fossile doit remplir deux conditions :\n\n• Courte durée de vie de l'espèce. Plus l'espèce a vécu brièvement, plus la datation est précise.\n\n• Large répartition géographique. On doit le retrouver sur plusieurs continents pour pouvoir comparer des couches éloignées.\n\nC'est comme un tube musical qui passe à la radio un seul été : si tu entends cette chanson, tu sais exactement de quel été il s'agit, et tout le monde l'a entendue.\n\nLe principe d'identité paléontologique dit ceci : si deux couches de roche éloignées de milliers de km contiennent les mêmes fossiles stratigraphiques, elles ont le même âge.\n\nEn gros : les fossiles stratigraphiques sont les tampons-dateurs de la géologie.`
          },
          {
            titre: "L'échelle stratigraphique",
            contenu: `Grâce à la chronologie relative et aux fossiles, les géologues ont construit l'échelle stratigraphique. C'est le calendrier officiel de la Terre.\n\nElle découpe le temps en grandes unités, du plus large au plus fin :\n\n1. Les éons (les plus grandes divisions).\n2. Les ères : Précambrien, Paléozoïque, Mésozoïque, Cénozoïque.\n3. Les périodes (ex : Jurassique, Crétacé).\n4. Les époques et les étages (encore plus précis).\n\nC'est comme un calendrier avec les années, les mois, les semaines et les jours. Le Précambrien à lui seul couvre 88 % de l'histoire de la Terre.\n\nLes grandes coupures entre ères correspondent souvent à des crises biologiques majeures. Par exemple, la crise Crétacé-Paléogène (il y a 66 Ma) sépare le Mésozoïque du Cénozoïque.\n\nEn gros : l'échelle stratigraphique est le planning de la Terre, construit grâce aux fossiles et aux principes de la chronologie relative.`
          },
          {
            titre: "Chronologie absolue : un âge en années",
            contenu: `La chronologie absolue donne un âge chiffré en années. Elle utilise la désintégration radioactive.\n\nUn atome « père » instable (radioactif) se transforme spontanément en atome « fils » stable. Cette transformation se fait à vitesse constante.\n\nC'est comme un sablier dont le sable s'écoule toujours au même rythme. On mesure la quantité de sable passée de l'autre côté pour savoir combien de temps s'est écoulé.\n\nLa demi-vie (notée t½) est le temps nécessaire pour que la moitié des atomes pères se transforme en atomes fils. Chaque couple d'isotopes a sa propre demi-vie :\n\n• Rb/Sr : t½ ≈ 49 milliards d'années → pour les roches très anciennes.\n• K/Ar : t½ ≈ 1,25 milliard d'années → pour les roches volcaniques.\n• U/Pb : t½ ≈ 4,5 milliards d'années → méthode qui a daté la Terre.\n\nEn gros : on mesure le rapport père/fils dans une roche et on calcule son âge grâce à la demi-vie.`
          },
          {
            titre: "La fermeture du système",
            contenu: `Pour que le chronomètre radioactif fonctionne, il faut un « top départ ». C'est la fermeture du système.\n\nLa fermeture du système est le moment où la roche se referme aux échanges chimiques. Concrètement, cela arrive quand la roche refroidit et cristallise.\n\nÀ partir de cet instant, les isotopes père et fils restent piégés à l'intérieur. Plus aucun atome n'entre ni ne sort. Le chronomètre démarre.\n\nC'est comme retourner un sablier et le sceller : à partir de ce moment, on peut compter le temps qui passe.\n\nAttention, piège fréquent : la fermeture du système n'est pas toujours le moment de formation de la roche. C'est le moment où les échanges s'arrêtent. Si la roche est réchauffée plus tard, le système peut se « rouvrir » et le chronomètre se remet à zéro.\n\nOn utilise aussi la méthode de l'isochrone (droite tracée sur un graphique des rapports isotopiques) pour calculer l'âge avec plus de précision.\n\nEn gros : pas de fermeture du système, pas de datation fiable. C'est le point de départ de toute mesure d'âge absolu.`
          }
        ]
      },
      page2_concepts: {
        titre: "Concepts clés",
        concepts: [
          {
            terme: "Principe de superposition",
            definition: "Dans un empilement de couches sédimentaires (couches de terre déposées au fil du temps) non déformé, la couche du bas est la plus ancienne. C'est comme une pile de crêpes : la première posée est en dessous. En gros : ce qui est en dessous est arrivé en premier."
          },
          {
            terme: "Principe de recoupement",
            definition: "Toute structure géologique (faille, filon de roche) qui en coupe une autre est plus récente qu'elle. C'est comme un trait de stylo tracé par-dessus un dessin : le trait est venu après. En gros : ce qui coupe est venu après."
          },
          {
            terme: "Principe d'inclusion",
            definition: "Un fragment de roche enfermé dans une autre roche est plus ancien que celle qui l'entoure. C'est comme un caillou pris dans du béton : le caillou existait avant le béton. En gros : ce qui est inclus est plus vieux."
          },
          {
            terme: "Fossile stratigraphique",
            definition: "Fossile d'une espèce qui a vécu peu de temps mais vivait partout sur Terre. C'est un marqueur temporel fiable. En gros : il a existé brièvement mais partout, donc il date précisément une couche."
          },
          {
            terme: "Identité paléontologique",
            definition: "Deux couches de roche situées à des milliers de km l'une de l'autre ont le même âge si elles contiennent les mêmes fossiles stratigraphiques. C'est comme trouver le même timbre rare dans deux albums différents : ils datent de la même époque."
          },
          {
            terme: "Désintégration radioactive",
            definition: "Un atome 'père' instable (radioactif) se transforme spontanément en atome 'fils' stable. La vitesse de cette transformation est toujours constante. C'est comme un sablier qui s'écoule toujours à la même vitesse. En gros : l'atome père disparaît et l'atome fils apparaît de façon régulière."
          },
          {
            terme: "Demi-vie (t½)",
            definition: "Temps nécessaire pour que la moitié des atomes pères se transforme en atomes fils. Chaque couple d'isotopes a sa propre demi-vie. C'est comme dire qu'il faut 30 minutes pour que la moitié du sable passe de l'autre côté."
          },
          {
            terme: "Fermeture du système",
            definition: "Moment où la roche se referme aux échanges chimiques (cristallisation, refroidissement). Les isotopes restent piégés à l'intérieur. Le 'chronomètre' radioactif démarre à cet instant. En gros : c'est le 'top départ' de la mesure du temps."
          },
          {
            terme: "Isochrone",
            definition: "Droite tracée sur un graphique qui relie les rapports isotopiques de plusieurs minéraux d'une même roche. La pente de cette droite permet de calculer l'âge de la roche. En gros : plus la droite est inclinée, plus la roche est vieille."
          },
          {
            terme: "Échelle stratigraphique",
            definition: "Découpage du temps géologique en grandes unités : éons, ères, périodes, époques et étages. C'est le calendrier de la Terre. On y place les événements géologiques grâce à la chronologie relative et absolue."
          }
        ]
      },
      page3_schemas: {
        titre: "Schémas clés",
        schemas: []
      },
      page4_formules: {
        titre: "Chiffres clés et chronomètres",
        formules: [
          {
            nom: "Couple Rb/Sr (Rubidium/Strontium)",
            formule: "t½ ≈ 49 milliards d'années",
            explication: "Sert à dater des roches très anciennes comme les granites et les gneiss. On mesure le rapport ⁸⁷Sr/⁸⁶Sr. En gros : un chronomètre ultra-lent pour les très vieilles roches."
          },
          {
            nom: "Couple K/Ar (Potassium/Argon)",
            formule: "t½ ≈ 1,25 milliard d'années",
            explication: "Utilisé pour dater les roches volcaniques. L'argon (un gaz) est piégé dans la roche quand elle refroidit. En gros : idéal pour les laves et les basaltes."
          },
          {
            nom: "Couple U/Pb (Uranium/Plomb)",
            formule: "t½ ≈ 4,5 milliards d'années (²³⁸U → ²⁰⁶Pb)",
            explication: "Méthode très fiable. Utilisée sur les zircons (minéraux ultra-résistants). C'est grâce à elle qu'on a daté la Terre."
          },
          {
            nom: "Couple ¹⁴C (Carbone 14)",
            formule: "t½ ≈ 5 730 ans",
            explication: "Réservé aux matières organiques récentes (< 50 000 ans). Ne sert pas pour les roches anciennes. En gros : le chronomètre pour l'archéologie, pas pour la géologie ancienne."
          },
          {
            nom: "Âge de la Terre",
            formule: "≈ 4,57 milliards d'années",
            explication: "Déterminé grâce à la datation U/Pb sur des météorites et des zircons terrestres parmi les plus vieux du monde."
          },
          {
            nom: "Les 4 grandes ères géologiques",
            formule: "Précambrien → Paléozoïque → Mésozoïque → Cénozoïque",
            explication: "Du plus ancien au plus récent. Le Précambrien couvre 88 % de l'histoire de la Terre. Le Cénozoïque est l'ère actuelle."
          },
          {
            nom: "Crise Crétacé-Paléogène",
            formule: "Il y a ≈ 66 millions d'années",
            explication: "Extinction massive (dont les dinosaures). Sert de repère clé pour séparer le Mésozoïque du Cénozoïque."
          },
          {
            nom: "Début de la vie sur Terre",
            formule: "≈ 3,8 milliards d'années",
            explication: "Les plus anciennes traces de vie datent de cette époque. Datées par la méthode U/Pb sur les roches qui les contiennent."
          }
        ]
      },
      page5_resume: {
        titre: "Résumé",
        resume: "On date les roches par deux méthodes complémentaires. La chronologie relative utilise trois principes (superposition, recoupement, inclusion) et les fossiles stratigraphiques pour classer les événements. La chronologie absolue exploite la désintégration radioactive d'isotopes (Rb/Sr, K/Ar, U/Pb, ¹⁴C) pour donner un âge chiffré. La fermeture du système déclenche le chronomètre. En gros : la relative ordonne, l'absolue date.",
        points_importants: [
          "Superposition : couche du bas = la plus ancienne",
          "Recoupement : ce qui coupe est plus récent",
          "Fossile stratigraphique : courte durée de vie + large répartition",
          "Désintégration radioactive : père instable → fils stable",
          "Fermeture du système = démarrage du chronomètre",
          "Rb/Sr, K/Ar, U/Pb pour les roches anciennes ; ¹⁴C pour le récent"
        ],
        pieges_courants: [
          "Ne pas confondre chronologie relative (ordre) et absolue (âge chiffré)",
          "La superposition ne marche que si les couches ne sont pas retournées",
          "Un fossile stratigraphique doit être à la fois éphémère ET répandu",
          "La fermeture du système ≠ la formation de la roche, c'est le moment où les échanges s'arrêtent",
          "Le ¹⁴C ne date que du matériel organique récent (< 50 000 ans)"
        ]
      }
    }
  },
  {
    id: "term-svt-ch2",
    titre: "L'organisation fonctionnelle des plantes à fleurs",
    emoji: "🌺",
    nouveau: false,
    flashcardsData: [
      {
        q: "Quel est le rôle principal de la feuille ?",
        r: "Capter la lumière pour la photosynthèse et réaliser les échanges gazeux (CO₂ entre, O₂ sort) via les stomates."
      },
      {
        q: "Qu'est-ce qu'un stomate ?",
        r: "Petit pore (ouverture) sous la feuille, bordé de deux cellules de garde, qui contrôle les échanges de gaz et d'eau."
      },
      {
        q: "Quel est le rôle des poils absorbants ?",
        r: "Ce sont des extensions des cellules racinaires qui augmentent la surface d'absorption de l'eau et des sels minéraux."
      },
      {
        q: "Qu'est-ce qu'une mycorhize ?",
        r: "Association mutualiste (bénéfique pour les deux) entre un champignon et les racines d'une plante."
      },
      {
        q: "Que transporte le xylème ?",
        r: "La sève brute (eau + sels minéraux), des racines vers les feuilles."
      },
      {
        q: "Que transporte le phloème ?",
        r: "La sève élaborée (eau + sucres fabriqués par photosynthèse), des feuilles vers toute la plante."
      },
      {
        q: "Qu'est-ce qu'un méristème ?",
        r: "Zone de cellules indifférenciées qui se divisent activement. C'est le moteur de la croissance de la plante."
      },
      {
        q: "Où se trouvent les méristèmes apicaux ?",
        r: "Au sommet des tiges et au bout des racines. Ils assurent la croissance en longueur."
      },
      {
        q: "Qu'est-ce qu'un phytomère ?",
        r: "Unité répétitive de la tige composée d'un entre-nœud, d'un nœud, d'une feuille et d'un bourgeon axillaire."
      },
      {
        q: "Quel est le rôle de l'auxine ?",
        r: "Hormone végétale qui favorise l'élongation cellulaire et contrôle la dominance apicale (le bourgeon terminal inhibe les latéraux)."
      }
    ],
    qcm: [
      {
        question: "Les échanges gazeux de la feuille se font principalement par :",
        options: [
          "Les stomates",
          "Les nervures",
          "La cuticule",
          "Les poils absorbants"
        ],
        correct: 0,
        explication: "Les stomates sont des pores situés surtout sur la face inférieure de la feuille. Ils laissent entrer le CO₂ et sortir l'O₂ et la vapeur d'eau."
      },
      {
        question: "Les poils absorbants des racines servent à :",
        options: [
          "Absorber l'eau et les sels minéraux du sol",
          "Fixer la plante au sol uniquement",
          "Stocker les réserves de sucre",
          "Produire de l'auxine"
        ],
        correct: 0,
        explication: "Les poils absorbants multiplient la surface de contact entre la racine et le sol, ce qui augmente l'absorption d'eau et de minéraux."
      },
      {
        question: "Dans une mycorhize, le champignon fournit à la plante :",
        options: [
          "Du glucose",
          "De l'oxygène",
          "De l'eau et des sels minéraux",
          "Du CO₂"
        ],
        correct: 2,
        explication: "Le champignon étend ses filaments dans le sol et capte eau + minéraux pour la plante. En échange, la plante lui donne des sucres."
      },
      {
        question: "La sève brute circule dans :",
        options: [
          "Le phloème",
          "Le xylème",
          "Les stomates",
          "Le méristème"
        ],
        correct: 1,
        explication: "Le xylème transporte la sève brute (eau + sels minéraux) des racines vers les feuilles par des vaisseaux de bois."
      },
      {
        question: "Un méristème est une zone de :",
        options: [
          "Cellules mortes qui protègent la plante",
          "Cellules spécialisées dans la photosynthèse",
          "Cellules indifférenciées en division active",
          "Cellules qui stockent l'amidon"
        ],
        correct: 2,
        explication: "Les méristèmes contiennent des cellules souches végétales qui se divisent pour permettre la croissance en longueur et en épaisseur."
      },
      {
        question: "Le phytomère est composé de :",
        options: [
          "Un entre-nœud, un nœud, une feuille et un bourgeon axillaire",
          "Une racine, une tige et une feuille",
          "Un xylème et un phloème",
          "Un stomate et deux cellules de garde"
        ],
        correct: 0,
        explication: "Le phytomère est l'unité de base qui se répète le long de la tige. Chaque module contient ces quatre éléments."
      },
      {
        question: "L'auxine est une hormone qui :",
        options: [
          "Ferme les stomates la nuit",
          "Favorise l'élongation cellulaire et la dominance apicale",
          "Provoque la chute des feuilles en automne",
          "Colore les pétales des fleurs"
        ],
        correct: 1,
        explication: "L'auxine, produite au sommet de la tige, stimule l'allongement des cellules et inhibe le développement des bourgeons latéraux (dominance apicale)."
      }
    ],
    fiche: {
      page1_intro: {
        titre: "Introduction",
        texte: "Les plantes à fleurs sont fixées au sol toute leur vie. Pour compenser cette immobilité, chaque organe est ultra-spécialisé : capter la lumière, absorber l'eau, transporter les nutriments et grandir.",
        sections: [
          {
            titre: "La feuille : capteur solaire et échangeur de gaz",
            contenu: `La feuille est l'organe principal de la photosynthèse. Elle capte la lumière du soleil pour fabriquer des sucres. Mais elle doit aussi échanger des gaz avec l'air.\n\nLes échanges se font par les stomates (petits pores sous la feuille). Chaque stomate est bordé de deux cellules de garde qui contrôlent son ouverture.\n\nC'est comme une porte automatique qui gère les entrées et sorties de gaz.\n\nQuand les stomates s'ouvrent :\n\n• Le CO₂ entre dans la feuille. Il est utilisé pour la photosynthèse.\n• L'O₂ sort de la feuille. C'est un déchet de la photosynthèse.\n• La vapeur d'eau sort aussi. C'est la transpiration foliaire.\n\nProblème : quand les stomates sont ouverts, la plante perd de l'eau. En cas de sécheresse, elle ferme ses stomates pour économiser l'eau, mais elle ne peut plus capter de CO₂.\n\nC'est un compromis permanent entre capter du CO₂ et ne pas se dessécher. Il y a entre 100 et 300 stomates par mm² de feuille.\n\nEn gros : la feuille est un panneau solaire qui respire par des milliers de pores microscopiques.`
          },
          {
            titre: "Les racines : absorption et symbioses",
            contenu: `Les racines ont deux missions : ancrer la plante au sol et absorber l'eau + les sels minéraux.\n\nL'absorption se fait surtout grâce aux poils absorbants. Ce sont des extensions très fines des cellules de la racine. Ils multiplient la surface de contact avec le sol par 100.\n\nC'est comme des milliers de petites pailles qui aspirent l'eau du sol.\n\nUn plant de blé peut avoir jusqu'à 600 km de racines (poils absorbants compris). C'est énorme pour une seule plante.\n\nMais les racines ne travaillent pas seules. Environ 90 % des plantes vivent en association avec des champignons : les mycorhizes.\n\n• Le champignon étend ses filaments dans le sol. Il capte eau et minéraux sur une zone bien plus grande que les racines seules.\n• En échange, la plante lui fournit des sucres fabriqués par photosynthèse.\n\nC'est un deal gagnant-gagnant. On appelle ça une association mutualiste (bénéfique pour les deux).\n\nEn gros : les racines absorbent l'eau grâce aux poils absorbants, et les mycorhizes élargissent encore leur zone de captage.`
          },
          {
            titre: "Les tiges : deux circuits de transport",
            contenu: `La tige relie les racines aux feuilles. Elle contient deux réseaux de transport, comme un système de tuyauterie à double sens.\n\n• Le xylème (bois) transporte la sève brute. C'est de l'eau + des sels minéraux, qui monte des racines vers les feuilles. Les vaisseaux du xylème sont des cellules mortes, creuses, empilées en tubes rigides. La sève brute monte à une vitesse de 1 à 100 m/h.\n\n• Le phloème (liber) transporte la sève élaborée. C'est de l'eau + des sucres fabriqués par la photosynthèse, qui descend des feuilles vers toute la plante. Les vaisseaux du phloème sont des cellules vivantes, reliées par des cribles (petits trous). La sève élaborée circule à 0,5 à 1 m/h.\n\nC'est comme un immeuble avec deux systèmes de plomberie : un pour l'eau potable qui monte et un pour les nutriments qui descendent.\n\nLe moteur de la montée de la sève brute, c'est la transpiration foliaire. L'eau qui s'évapore par les stomates crée une aspiration qui tire la sève depuis les racines. Un chêne adulte perd 200 à 400 litres d'eau par jour par ses feuilles.\n\nEn gros : xylème = eau + minéraux vers le haut ; phloème = sucres vers toute la plante.`
          },
          {
            titre: "Méristèmes et phytomères : la croissance modulaire",
            contenu: `Contrairement aux animaux, les plantes grandissent toute leur vie. Le moteur de cette croissance, ce sont les méristèmes.\n\nUn méristème est une zone de cellules indifférenciées (non spécialisées) qui se divisent activement. C'est comme une réserve de cellules souches.\n\nIl en existe deux types :\n\n• Les méristèmes apicaux, situés au sommet des tiges et au bout des racines. Ils assurent la croissance en longueur. La plante pousse vers le haut et vers le bas.\n\n• Les méristèmes latéraux (cambium), situés en périphérie de la tige. Ils assurent la croissance en épaisseur. C'est eux qui produisent les anneaux de croissance dans le tronc des arbres.\n\nLa tige grandit en ajoutant des modules répétitifs appelés phytomères. Chaque phytomère contient :\n\n1. Un entre-nœud (segment de tige).\n2. Un nœud (point d'attache).\n3. Une feuille.\n4. Un bourgeon axillaire.\n\nC'est comme des Lego empilés les uns sur les autres. La plante ajoute un phytomère à chaque étape de croissance.\n\nEn gros : les méristèmes sont les usines à cellules, et les phytomères sont les briques qui s'empilent.`
          },
          {
            titre: "L'auxine : l'hormone chef d'orchestre",
            contenu: `Les plantes n'ont pas de système nerveux. Pour coordonner leur croissance, elles utilisent des hormones végétales. La plus importante est l'auxine.\n\nL'auxine est fabriquée au sommet de la tige, dans le bourgeon apical. Elle descend ensuite vers le bas de la plante.\n\nElle a deux effets principaux :\n\n• Elle stimule l'élongation cellulaire. Les cellules s'allongent davantage là où il y a de l'auxine. C'est ce qui permet à la tige de grandir en longueur.\n\n• Elle contrôle la dominance apicale. Le bourgeon du sommet (apical) produit de l'auxine qui empêche les bourgeons latéraux de se développer. Si on coupe le sommet, les latéraux se réveillent et la plante se ramifie.\n\nC'est comme un chef d'équipe qui dit aux autres « attendez, c'est moi qui grandis d'abord ». Si le chef part, tout le monde se met à pousser.\n\nL'auxine explique aussi pourquoi les plantes poussent vers la lumière (phototropisme). Le côté à l'ombre reçoit plus d'auxine, ses cellules s'allongent davantage, et la tige se courbe vers la lumière.\n\nEn gros : l'auxine coordonne la croissance, oriente la plante vers la lumière et gère la hiérarchie entre les bourgeons.`
          }
        ]
      },
      page2_concepts: {
        titre: "Concepts clés",
        concepts: [
          {
            terme: "Stomate",
            definition: "Petit pore (ouverture) situé surtout sur la face inférieure de la feuille. Il est délimité par deux cellules de garde qui contrôlent son ouverture. Il s'ouvre le jour pour laisser entrer le CO₂ et se ferme la nuit ou en cas de sécheresse. C'est comme une porte automatique qui gère les entrées et sorties de gaz."
          },
          {
            terme: "Poils absorbants",
            definition: "Extensions très fines des cellules de la racine. Ils multiplient la surface de contact avec le sol par 100. En gros : plus de surface = plus d'eau captée. C'est comme des milliers de petites pailles qui aspirent l'eau du sol."
          },
          {
            terme: "Mycorhize",
            definition: "Association mutualiste (bénéfique pour les deux) entre un champignon et une racine. Le champignon fournit eau et minéraux grâce à son réseau de filaments. En échange, la plante lui donne des sucres. En gros : c'est un deal gagnant-gagnant entre la plante et le champignon."
          },
          {
            terme: "Xylème (bois)",
            definition: "Tissu conducteur qui transporte la sève brute (eau + sels minéraux) des racines vers les feuilles. Il est constitué de cellules mortes, creuses, empilées en tubes rigides. C'est comme une tuyauterie rigide qui monte l'eau vers le haut."
          },
          {
            terme: "Phloème (liber)",
            definition: "Tissu conducteur qui transporte la sève élaborée (eau + sucres fabriqués par photosynthèse) des feuilles vers toute la plante. Ce sont des cellules vivantes reliées par des cribles (petits trous). C'est comme un réseau de distribution de nourriture."
          },
          {
            terme: "Méristème apical",
            definition: "Zone de cellules indifférenciées (non spécialisées) située au sommet de la tige ou au bout de la racine. Ces cellules se divisent activement pour assurer la croissance en longueur. En gros : c'est le moteur de croissance de la plante vers le haut et vers le bas."
          },
          {
            terme: "Méristème latéral (cambium)",
            definition: "Zone de cellules indifférenciées située en périphérie de la tige. Il assure la croissance en épaisseur en produisant du bois (xylème) vers l'intérieur et du liber (phloème) vers l'extérieur. C'est comme un anneau de croissance qui épaissit le tronc chaque année."
          },
          {
            terme: "Phytomère",
            definition: "Unité de base qui se répète le long de la tige. Il comprend un entre-nœud (segment de tige), un nœud (point d'attache), une feuille et un bourgeon axillaire. La plante grandit en ajoutant des phytomères. C'est comme des Lego empilés les uns sur les autres."
          },
          {
            terme: "Auxine",
            definition: "Hormone végétale produite au sommet de la tige (bourgeon apical). Elle stimule l'élongation des cellules et contrôle la dominance apicale (le bourgeon du haut empêche les bourgeons latéraux de pousser). En gros : c'est le chef d'orchestre de la croissance."
          },
          {
            terme: "Transpiration foliaire",
            definition: "Évaporation de l'eau par les stomates des feuilles. C'est le moteur principal de la montée de la sève brute dans le xylème. C'est comme une aspiration par le haut qui tire l'eau depuis les racines."
          }
        ]
      },
      page3_schemas: {
        titre: "Schémas clés",
        schemas: []
      },
      page4_formules: {
        titre: "Chiffres clés",
        formules: [
          {
            nom: "Surface d'échange des poils absorbants",
            formule: "Jusqu'à ×100 la surface racinaire",
            explication: "Les poils absorbants démultiplient la surface de contact avec le sol. Sans eux, la plante absorberait très peu d'eau. C'est énorme."
          },
          {
            nom: "Transpiration foliaire d'un chêne adulte",
            formule: "200 à 400 litres d'eau perdus par jour",
            explication: "L'eau s'évapore par les stomates. Cette transpiration crée l'aspiration qui fait monter la sève brute."
          },
          {
            nom: "Vitesse de la sève brute (xylème)",
            formule: "1 à 100 m/h",
            explication: "La sève brute monte grâce au mécanisme de tension-cohésion. La transpiration crée une aspiration vers le haut."
          },
          {
            nom: "Vitesse de la sève élaborée (phloème)",
            formule: "0,5 à 1 m/h",
            explication: "Plus lente que la sève brute. Elle circule grâce à la pression osmotique (pression créée par les sucres dissous)."
          },
          {
            nom: "Nombre de stomates par mm²",
            formule: "100 à 300 stomates/mm² de feuille",
            explication: "Ils sont surtout situés sur la face inférieure de la feuille, ce qui limite la perte d'eau par évaporation directe au soleil."
          },
          {
            nom: "Pourcentage de plantes avec mycorhizes",
            formule: "≈ 90 % des plantes terrestres",
            explication: "Presque toutes les plantes vivent en association avec des champignons. C'est une stratégie quasi universelle."
          },
          {
            nom: "Longueur totale des racines d'un plant de blé",
            formule: "≈ 600 km (avec les poils absorbants)",
            explication: "C'est colossal pour une seule plante. Cela montre l'importance de la surface d'absorption racinaire."
          },
          {
            nom: "Hauteur record d'un arbre (séquoia)",
            formule: "≈ 115 mètres",
            explication: "La sève brute doit monter sur toute cette hauteur uniquement grâce à la transpiration. Pas de pompe mécanique."
          }
        ]
      },
      page5_resume: {
        titre: "Résumé",
        resume: "La plante à fleurs compense sa fixité par des organes spécialisés. Les feuilles captent la lumière et échangent les gaz via les stomates. Les racines, avec leurs poils absorbants et les mycorhizes, absorbent eau et minéraux. Le xylème transporte la sève brute vers le haut, le phloème distribue la sève élaborée. Les méristèmes (zones de division cellulaire) assurent la croissance. L'auxine coordonne le développement. En gros : tout est organisé pour capter, transporter et grandir malgré l'immobilité.",
        points_importants: [
          "Stomates = portes d'entrée du CO₂ et de sortie de l'eau",
          "Poils absorbants = augmentent la surface d'absorption racinaire",
          "Mycorhize = champignon + racine = symbiose",
          "Xylème = sève brute (eau + minéraux) vers le haut",
          "Phloème = sève élaborée (eau + sucres) vers toute la plante",
          "Méristèmes apicaux = croissance en longueur",
          "Auxine = hormone clé de l'élongation"
        ],
        pieges_courants: [
          "Ne pas confondre xylème (sève brute, cellules mortes) et phloème (sève élaborée, cellules vivantes)",
          "Les stomates ne sont pas que sur la face supérieure : ils sont surtout en dessous",
          "L'auxine favorise l'élongation, pas la division cellulaire",
          "Mycorhize ≠ parasitisme : les deux partenaires y gagnent",
          "La sève brute monte grâce à la transpiration, pas à une pompe"
        ]
      }
    }
  },
  {
    id: "term-svt-ch3",
    titre: "La plante productrice de matière organique",
    emoji: "🌱",
    nouveau: false,
    flashcardsData: [
      {
        q: "Où se déroule la photosynthèse dans la cellule ?",
        r: "Dans les chloroplastes, organites contenant les pigments chlorophylliens (chlorophylle a, b et caroténoïdes)."
      },
      {
        q: "Quelle est l'équation simplifiée de la photosynthèse ?",
        r: "6 CO₂ + 6 H₂O → C₆H₁₂O₆ (glucose) + 6 O₂, grâce à la lumière."
      },
      {
        q: "Qu'est-ce que la photolyse de l'eau ?",
        r: "La décomposition de l'eau (H₂O) par la lumière, qui libère de l'O₂, des protons (H⁺) et des électrons."
      },
      {
        q: "Que sont les pigments chlorophylliens ?",
        r: "Molécules qui absorbent la lumière rouge et bleue et réfléchissent le vert. Chlorophylle a, b et caroténoïdes."
      },
      {
        q: "Qu'est-ce que la cellulose ?",
        r: "Polymère de glucose formant la paroi rigide des cellules végétales. C'est le composé organique le plus abondant sur Terre."
      },
      {
        q: "Qu'est-ce que la lignine ?",
        r: "Molécule rigide qui imprègne les parois du xylème (bois). Elle rend les vaisseaux solides et imperméables."
      },
      {
        q: "Sous quelles formes la plante stocke-t-elle ses réserves ?",
        r: "Saccharose (transport), amidon (stockage dans les plastes), lipides (graines) et protéines (graines)."
      },
      {
        q: "Que sont les anthocyanes ?",
        r: "Pigments colorés (rouge, bleu, violet) dans les pétales et fruits qui attirent les pollinisateurs et disperseurs."
      },
      {
        q: "Que sont les tanins ?",
        r: "Molécules au goût amer produites par la plante pour se défendre contre les herbivores (interaction compétitive)."
      },
      {
        q: "Quelle est la différence entre autotrophe et hétérotrophe ?",
        r: "Autotrophe = fabrique sa matière organique (plante). Hétérotrophe = doit consommer de la matière organique (animal)."
      }
    ],
    qcm: [
      {
        question: "La photosynthèse a lieu dans :",
        options: [
          "Les chloroplastes",
          "Les mitochondries",
          "Le noyau",
          "Les vacuoles"
        ],
        correct: 0,
        explication: "Les chloroplastes contiennent les pigments chlorophylliens qui captent la lumière et les enzymes de la photosynthèse."
      },
      {
        question: "Lors de la photolyse de l'eau, que se passe-t-il ?",
        options: [
          "L'eau est décomposée en O₂, H⁺ et électrons grâce à la lumière",
          "L'eau est absorbée par les racines",
          "L'eau se transforme en vapeur dans les stomates",
          "L'eau est stockée dans la vacuole"
        ],
        correct: 0,
        explication: "La lumière fournit l'énergie pour casser la molécule d'eau (H₂O → ½ O₂ + 2 H⁺ + 2 e⁻). L'O₂ est rejeté."
      },
      {
        question: "Le glucose produit par la photosynthèse peut être transformé en :",
        options: [
          "Cellulose, amidon, lipides et protéines",
          "Sels minéraux uniquement",
          "CO₂ et eau uniquement",
          "Chlorophylle uniquement"
        ],
        correct: 0,
        explication: "Le glucose est la brique de base. La plante le convertit en cellulose (paroi), amidon (réserve), lipides et protéines selon ses besoins."
      },
      {
        question: "La cellulose forme :",
        options: [
          "La paroi des cellules végétales",
          "La membrane des chloroplastes",
          "Le noyau de la cellule",
          "Les pigments des fleurs"
        ],
        correct: 0,
        explication: "La cellulose est un assemblage de glucose en longues chaînes. Elle donne rigidité et forme à la cellule végétale."
      },
      {
        question: "Les anthocyanes servent à :",
        options: [
          "Protéger la plante du froid",
          "Attirer les pollinisateurs grâce à leurs couleurs vives",
          "Transporter la sève brute",
          "Décomposer le CO₂"
        ],
        correct: 1,
        explication: "Les anthocyanes colorent les pétales et fruits en rouge, bleu ou violet. Cela attire insectes et oiseaux pour la pollinisation ou la dispersion."
      },
      {
        question: "Les tanins sont des molécules de :",
        options: [
          "Défense contre les herbivores (goût amer)",
          "Stockage des sucres",
          "Transport de l'eau",
          "Absorption de la lumière"
        ],
        correct: 0,
        explication: "Les tanins ont un goût amer et astringent. Ils découragent les herbivores de manger la plante. C'est une défense chimique."
      },
      {
        question: "Un organisme autotrophe est un organisme qui :",
        options: [
          "Fabrique sa propre matière organique à partir de matière minérale",
          "Se nourrit d'autres organismes vivants",
          "Vit en symbiose avec un champignon",
          "Ne réalise pas la photosynthèse"
        ],
        correct: 0,
        explication: "Auto = soi-même, trophe = nourrir. Les plantes fabriquent leur matière organique grâce à la photosynthèse (CO₂ + H₂O + lumière → glucose)."
      }
    ],
    fiche: {
      page1_intro: {
        titre: "Introduction",
        texte: "Les plantes sont autotrophes : elles fabriquent leur propre nourriture à partir de lumière, d'eau et de CO₂. Le glucose produit sert ensuite de brique de base pour construire toute la matière organique de la plante.",
        sections: [
          {
            titre: "La photosynthèse : l'usine solaire de la plante",
            contenu: `Les plantes n'ont pas besoin de manger d'autres êtres vivants. Elles fabriquent leur nourriture elles-mêmes grâce à la photosynthèse.\n\nLa photosynthèse transforme le CO₂ de l'air et l'eau du sol en glucose (un sucre), en utilisant l'énergie de la lumière. L'oxygène (O₂) est rejeté comme déchet.\n\nL'équation bilan : 6 CO₂ + 6 H₂O + lumière → C₆H₁₂O₆ (glucose) + 6 O₂.\n\nTraduction : six molécules de gaz carbonique + six molécules d'eau + de la lumière donnent un sucre et six molécules d'oxygène.\n\nC'est comme un panneau solaire, sauf qu'au lieu de produire de l'électricité, il produit de la nourriture.\n\nLa photosynthèse a lieu dans les chloroplastes. Ce sont des organites (petits compartiments) présents dans les cellules des feuilles. Ils contiennent des pigments chlorophylliens (chlorophylle a, chlorophylle b, caroténoïdes) qui captent la lumière.\n\nCes pigments absorbent le bleu et le rouge, mais réfléchissent le vert. C'est pour ça que les feuilles sont vertes.\n\nEn gros : la plante est une usine solaire qui transforme lumière + CO₂ + eau en sucre + oxygène.`
          },
          {
            titre: "Les deux phases de la photosynthèse",
            contenu: `La photosynthèse se déroule en deux étapes, dans deux endroits différents du chloroplaste.\n\n1. La phase photochimique (phase claire). Elle a lieu dans les thylakoïdes (disques empilés à l'intérieur du chloroplaste). La lumière fournit l'énergie pour casser l'eau : c'est la photolyse de l'eau.\n\nH₂O → ½ O₂ + 2 H⁺ + 2 e⁻.\n\nTraduction : l'eau est décomposée en oxygène, en protons et en électrons.\n\nL'O₂ est rejeté dans l'air. Les protons et électrons servent à fabriquer de l'ATP (énergie) et du NADPH (pouvoir réducteur). Ce sont les « carburants » de l'étape suivante.\n\n2. La phase chimique (cycle de Calvin). Elle a lieu dans le stroma (liquide du chloroplaste). Le CO₂ est fixé sur une molécule organique, puis réduit en glucose grâce à l'ATP et au NADPH.\n\nAttention, piège : la phase « sombre » n'a pas besoin d'obscurité. Elle a juste besoin d'ATP et de NADPH produits par la phase claire.\n\nC'est comme une usine à deux étages : l'étage du haut (phase claire) fabrique l'énergie, l'étage du bas (phase sombre) fabrique le sucre.\n\nEn gros : la phase claire capte l'énergie lumineuse, la phase sombre utilise cette énergie pour transformer le CO₂ en glucose.`
          },
          {
            titre: "Du glucose à la matière organique",
            contenu: `Le glucose fabriqué par la photosynthèse est la brique de base. La plante le transforme en plusieurs types de molécules selon ses besoins.\n\n• Cellulose. Longues chaînes de glucose assemblées en fibres rigides. Elles forment la paroi des cellules végétales. C'est le composé organique le plus abondant sur Terre (100 milliards de tonnes par an). C'est comme l'armature en béton d'un bâtiment.\n\n• Lignine. Grosse molécule complexe qui imprègne les parois du xylème (bois). Elle rend les vaisseaux rigides, imperméables et résistants. C'est elle qui fait que le tronc d'un arbre est dur.\n\n• Amidon. Polymère de glucose stocké dans les amyloplastes (petits sacs de réserve). On le trouve dans la pomme de terre, le riz, le blé. C'est le stock d'énergie de la plante pour plus tard.\n\n• Saccharose. C'est le sucre de transport. Il circule dans le phloème (sève élaborée) depuis les feuilles vers le reste de la plante.\n\n• Lipides et protéines. Stockés dans les graines. Ils servent de réserve d'énergie et de matériaux de construction pour le futur embryon.\n\nEn gros : le glucose est le point de départ de toute la chimie de la plante. Il est transformé en structures, en réserves ou en énergie.`
          },
          {
            titre: "Les interactions mutualistes : attirer ses partenaires",
            contenu: `Les plantes ne sont pas isolées. Elles interagissent avec les autres êtres vivants. Certaines interactions sont bénéfiques pour les deux parties : ce sont les interactions mutualistes.\n\nLe principal outil d'attraction, ce sont les anthocyanes. Ce sont des pigments colorés (rouge, bleu, violet) présents dans les pétales et les fruits.\n\n• Dans les pétales, les anthocyanes attirent les insectes pollinisateurs (abeilles, papillons). La couleur vive dit « viens ici, il y a du nectar ».\n\n• Dans les fruits, les anthocyanes attirent les animaux disperseurs de graines (oiseaux, mammifères). La couleur vive dit « mange-moi et transporte mes graines ».\n\nC'est comme une publicité colorée que la plante affiche pour attirer ses partenaires.\n\nLes mycorhizes (association champignon-racine) sont aussi un exemple de mutualisme : le champignon fournit eau et minéraux, la plante fournit des sucres.\n\nEn gros : la plante fabrique des molécules colorées et sucrées pour attirer les animaux dont elle a besoin.`
          },
          {
            titre: "Les interactions compétitives : se défendre",
            contenu: `D'autres interactions sont négatives. Les plantes doivent se défendre contre les herbivores qui veulent les manger.\n\nLeur arme principale, ce sont les tanins. Ce sont des molécules au goût amer et astringent (qui assèche la bouche). Elles sont présentes dans les feuilles, l'écorce et parfois les fruits non mûrs.\n\nQuand un herbivore mange une feuille riche en tanins, il trouve le goût désagréable et va chercher ailleurs. C'est une défense chimique passive.\n\nC'est comme un système d'alarme chimique : la plante rend ses tissus immangeables.\n\nD'autres mécanismes de défense existent :\n\n• Les épines et les poils urticants (défense physique).\n• Les alcaloïdes (molécules toxiques comme la nicotine ou la caféine).\n• Les résines et les latex (substances collantes qui piègent les insectes).\n\nCertaines plantes émettent même des signaux chimiques dans l'air quand elles sont attaquées. Les plantes voisines captent ces signaux et renforcent leurs propres défenses.\n\nEn gros : les tanins et autres molécules de défense sont les armes chimiques de la plante pour décourager les herbivores.`
          }
        ]
      },
      page2_concepts: {
        titre: "Concepts clés",
        concepts: [
          {
            terme: "Chloroplaste",
            definition: "Organite (petit compartiment dans la cellule) à double membrane. Il contient des thylakoïdes (disques empilés en piles appelées grana) et un liquide appelé stroma. C'est là que la lumière est captée et que le glucose est fabriqué. En gros : c'est l'usine de photosynthèse de la cellule."
          },
          {
            terme: "Pigments chlorophylliens",
            definition: "Molécules qui captent la lumière dans les thylakoïdes. Chlorophylle a (vert bleuté), chlorophylle b (vert jaunâtre) et caroténoïdes (orange/jaune). Ils absorbent le bleu et le rouge mais réfléchissent le vert. C'est pour ça que les feuilles sont vertes."
          },
          {
            terme: "Phase photochimique (phase claire)",
            definition: "Première étape de la photosynthèse, dans les thylakoïdes. La lumière casse l'eau (photolyse : H₂O → O₂ + H⁺ + électrons). On obtient de l'ATP (énergie) et du NADPH (pouvoir réducteur). En gros : la lumière donne l'énergie et l'eau fournit les électrons."
          },
          {
            terme: "Phase chimique (cycle de Calvin)",
            definition: "Deuxième étape, dans le stroma du chloroplaste. Le CO₂ est fixé sur une molécule organique puis réduit en glucose grâce à l'ATP et au NADPH. Attention : la phase 'sombre' n'a pas besoin d'obscurité. En gros : le CO₂ est transformé en sucre grâce à l'énergie de la phase claire."
          },
          {
            terme: "Photolyse de l'eau",
            definition: "Décomposition de l'eau (H₂O) par la lumière. Elle libère de l'O₂ (rejeté dans l'air), des protons (H⁺) et des électrons (e⁻). C'est la source de l'oxygène que nous respirons. En gros : l'O₂ vient de l'eau, pas du CO₂."
          },
          {
            terme: "Cellulose",
            definition: "Longues chaînes de glucose liées entre elles. Elle forme les microfibrilles rigides de la paroi cellulaire végétale. C'est le composé organique le plus abondant sur Terre. C'est comme l'armature en béton d'un bâtiment."
          },
          {
            terme: "Lignine",
            definition: "Polymère (grosse molécule) complexe qui imprègne les parois du xylème (bois). Elle rend les vaisseaux rigides, imperméables et résistants à la décomposition. C'est ce qui fait qu'un tronc d'arbre est dur et solide."
          },
          {
            terme: "Amidon",
            definition: "Polymère de glucose utilisé comme réserve d'énergie. Il est stocké dans des amyloplastes (petits sacs de stockage dans la cellule). On le trouve dans la pomme de terre, le riz, le blé. En gros : c'est le stock de sucre de la plante pour plus tard."
          },
          {
            terme: "Anthocyanes",
            definition: "Pigments colorés (rouge, bleu, violet) présents dans les pétales et les fruits. Ils attirent les insectes pollinisateurs et les animaux disperseurs de graines. En gros : c'est la publicité colorée de la plante pour attirer ses partenaires."
          },
          {
            terme: "Tanins",
            definition: "Molécules au goût amer et astringent produites par la plante. Elles dissuadent les herbivores de manger les feuilles ou l'écorce. C'est comme un système d'alarme chimique. En gros : c'est l'arme défensive de la plante."
          }
        ]
      },
      page3_schemas: {
        titre: "Schémas clés",
        schemas: []
      },
      page4_formules: {
        titre: "Chiffres clés",
        formules: [
          {
            nom: "Équation bilan de la photosynthèse",
            formule: "6 CO₂ + 6 H₂O + lumière → C₆H₁₂O₆ + 6 O₂",
            explication: "Le CO₂ de l'air et l'eau du sol donnent du glucose (sucre) et de l'oxygène (déchet utile pour nous)."
          },
          {
            nom: "Longueurs d'onde absorbées par les pigments",
            formule: "Bleu ≈ 430-450 nm, Rouge ≈ 640-680 nm",
            explication: "Les pigments absorbent surtout le bleu et le rouge. Le vert est réfléchi, d'où la couleur verte des feuilles."
          },
          {
            nom: "Production mondiale de cellulose",
            formule: "≈ 100 milliards de tonnes par an",
            explication: "La cellulose est le polymère le plus fabriqué par les êtres vivants. Le papier et le coton en sont faits."
          },
          {
            nom: "Rendement photosynthétique",
            formule: "≈ 1 à 5 % de l'énergie lumineuse reçue",
            explication: "Seule une petite fraction de la lumière est convertie en glucose. Le reste est perdu en chaleur ou réfléchi."
          },
          {
            nom: "Localisation des deux phases",
            formule: "Phase claire = thylakoïdes ; Phase sombre = stroma",
            explication: "La phase claire fabrique ATP + NADPH grâce à la lumière. La phase sombre utilise ces molécules pour fixer le CO₂."
          },
          {
            nom: "Production d'O₂ par un arbre adulte",
            formule: "≈ 100 kg d'O₂ par an",
            explication: "Un arbre adulte produit assez d'oxygène pour faire respirer 2 à 3 personnes pendant un an."
          },
          {
            nom: "Proportion de glucose converti en cellulose",
            formule: "Jusqu'à 50 % chez certaines plantes",
            explication: "La cellulose est le principal investissement de la plante. Elle constitue la charpente de chaque cellule."
          },
          {
            nom: "Température optimale de la photosynthèse",
            formule: "≈ 25 à 35 °C (variable selon l'espèce)",
            explication: "Trop froid ou trop chaud, les enzymes (protéines qui accélèrent les réactions) fonctionnent moins bien."
          }
        ]
      },
      page5_resume: {
        titre: "Résumé",
        resume: "La plante est autotrophe : elle fabrique sa matière organique par photosynthèse dans les chloroplastes. La phase claire (thylakoïdes) capte la lumière et casse l'eau. La phase sombre (cycle de Calvin, stroma) fixe le CO₂ en glucose. Ce glucose est ensuite converti en cellulose (paroi), amidon (réserve), lipides ou protéines. La plante produit aussi des anthocyanes (couleurs attractives) et des tanins (défense). En gros : la plante est une usine solaire qui transforme lumière + CO₂ + eau en toute sa matière.",
        points_importants: [
          "Photosynthèse = phase claire (thylakoïdes) + phase sombre (stroma)",
          "Photolyse de l'eau → O₂ + H⁺ + e⁻",
          "Cycle de Calvin fixe le CO₂ → glucose",
          "Glucose → cellulose, amidon, lipides, protéines",
          "Anthocyanes = attraction (mutualisme)",
          "Tanins = défense (compétition)"
        ],
        pieges_courants: [
          "La phase 'sombre' n'a pas besoin d'obscurité, elle a juste besoin d'ATP et NADPH",
          "L'O₂ vient de l'eau (photolyse), pas du CO₂",
          "Les caroténoïdes sont aussi des pigments photosynthétiques, pas juste décoratifs",
          "Autotrophe ≠ pas de respiration : la plante respire aussi !",
          "L'amidon est une réserve, la cellulose est une structure (les deux sont du glucose)"
        ]
      }
    }
  },
  {
    id: "term-svt-ch4",
    titre: "Reproduction de la plante",
    emoji: "🌸",
    nouveau: false,
    flashcardsData: [
      {
        q: "Qu'est-ce que la totipotence ?",
        r: "Capacité d'une cellule végétale à régénérer un organisme entier. C'est la base du bouturage et du clonage."
      },
      {
        q: "Qu'est-ce que le bouturage ?",
        r: "Reproduction asexuée : on coupe un fragment de plante (tige, feuille) qui régénère un individu complet, génétiquement identique."
      },
      {
        q: "Qu'est-ce que le marcottage ?",
        r: "Reproduction asexuée : une tige encore reliée à la plante mère touche le sol, forme des racines, puis un nouvel individu."
      },
      {
        q: "Quels sont les organes reproducteurs de la fleur ?",
        r: "Le pistil (organe femelle, contient les ovules) et les étamines (organe mâle, produisent le pollen)."
      },
      {
        q: "Quelle est la différence entre autofécondation et fécondation croisée ?",
        r: "Autofécondation = le pollen féconde l'ovule de la même fleur. Fécondation croisée = le pollen vient d'une autre fleur (plus de diversité)."
      },
      {
        q: "Qu'est-ce que la pollinisation ?",
        r: "Le transport du pollen des étamines vers le pistil, par le vent (anémogame) ou par un animal (zoogame : insecte, oiseau)."
      },
      {
        q: "Qu'est-ce que la co-évolution plante-pollinisateur ?",
        r: "Évolution parallèle : la forme de la fleur s'adapte au pollinisateur, et réciproquement (ex : trompe du papillon et fleur tubulaire)."
      },
      {
        q: "Comment se forme une graine ?",
        r: "Après fécondation, l'ovule se transforme en graine (embryon + réserves + tégument protecteur)."
      },
      {
        q: "Comment se forme un fruit ?",
        r: "Après fécondation, la paroi de l'ovaire du pistil se transforme en fruit, qui protège et disperse les graines."
      },
      {
        q: "Quels sont les modes de dispersion des graines ?",
        r: "Par le vent (anémochorie : graines légères), par les animaux (zoochorie : fruits charnus, crochets), par l'eau (hydrochorie)."
      }
    ],
    qcm: [
      {
        question: "La totipotence d'une cellule végétale signifie qu'elle peut :",
        options: [
          "Régénérer un organisme entier",
          "Se déplacer dans le sol",
          "Résister à toutes les maladies",
          "Absorber plus de CO₂"
        ],
        correct: 0,
        explication: "Totipotence = toti (tout) + potence (pouvoir). Une cellule végétale peut, dans les bonnes conditions, redonner un individu complet."
      },
      {
        question: "Le bouturage est un exemple de reproduction :",
        options: [
          "Sexuée avec diversité génétique",
          "Asexuée donnant un clone",
          "Par fécondation croisée",
          "Par dissémination par le vent"
        ],
        correct: 1,
        explication: "Le bouturage n'implique aucune fécondation. Le nouvel individu est génétiquement identique à la plante mère (clone)."
      },
      {
        question: "Les étamines produisent :",
        options: [
          "Le pollen (gamètes mâles)",
          "Les ovules (gamètes femelles)",
          "Le nectar",
          "Les graines"
        ],
        correct: 0,
        explication: "Les étamines sont l'organe mâle de la fleur. Elles portent les anthères qui fabriquent les grains de pollen."
      },
      {
        question: "La fécondation croisée est favorisée par rapport à l'autofécondation car elle :",
        options: [
          "Est plus rapide",
          "Augmente la diversité génétique",
          "Ne nécessite pas de pollinisateur",
          "Produit plus de graines"
        ],
        correct: 1,
        explication: "Quand le pollen vient d'une autre plante, les gènes se mélangent. Cela donne des descendants plus variés et potentiellement mieux adaptés."
      },
      {
        question: "Un fruit se forme à partir de :",
        options: [
          "La paroi de l'ovaire du pistil après fécondation",
          "La tige après pollinisation",
          "Les étamines après fécondation",
          "Les pétales après pollinisation"
        ],
        correct: 0,
        explication: "Après fécondation, l'ovaire (base du pistil) se transforme en fruit. Les ovules deviennent des graines à l'intérieur."
      },
      {
        question: "La co-évolution plante-pollinisateur se traduit par :",
        options: [
          "Des adaptations morphologiques réciproques (forme de la fleur ↔ forme du pollinisateur)",
          "Une compétition entre plante et animal",
          "La disparition progressive du pollinisateur",
          "Un parasitisme de la plante par l'animal"
        ],
        correct: 0,
        explication: "Plante et pollinisateur évoluent ensemble. La fleur s'adapte à l'animal (couleur, forme, odeur) et l'animal à la fleur (trompe, bec)."
      },
      {
        question: "L'anémochorie est la dispersion des graines par :",
        options: [
          "Les animaux",
          "L'eau",
          "Le vent",
          "L'homme"
        ],
        correct: 2,
        explication: "Anémo = vent. Les graines anémochores sont légères, souvent ailées ou munies de poils (pissenlit, érable)."
      }
    ],
    fiche: {
      page1_intro: {
        titre: "Introduction",
        texte: "Les plantes à fleurs disposent de deux stratégies de reproduction : la voie asexuée (clonage) et la voie sexuée (via la fleur). L'une copie, l'autre mélange les gènes pour créer de la diversité.",
        sections: [
          {
            titre: "La reproduction asexuée : copier-coller du vivant",
            contenu: `La reproduction asexuée ne fait intervenir aucune fécondation. Elle produit des clones, c'est-à-dire des individus génétiquement identiques à la plante mère.\n\nElle repose sur une propriété extraordinaire des cellules végétales : la totipotence. Chaque cellule conserve le génome complet de la plante et peut, dans les bonnes conditions, redonner un organisme entier.\n\nC'est comme si chaque pixel d'une photo pouvait recréer la photo entière.\n\nDeux techniques courantes :\n\n• Le bouturage. On coupe un fragment de plante (tige, feuille, racine) et on le plante dans le sol. Grâce à la totipotence, il régénère les parties manquantes. Le résultat est un clone parfait.\n\n• Le marcottage. Une tige encore reliée à la plante mère touche le sol et y forme des racines. Un nouvel individu pousse naturellement, sans intervention humaine.\n\nC'est comme faire un copier-coller d'un fichier informatique : le contenu est identique à l'original.\n\nAvantage : c'est rapide et efficace. Inconvénient : aucune diversité génétique. Si une maladie attaque un clone, tous les autres sont vulnérables.\n\nEn gros : la reproduction asexuée produit des copies conformes grâce à la totipotence des cellules végétales.`
          },
          {
            titre: "La fleur : organe de la reproduction sexuée",
            contenu: `La reproduction sexuée passe obligatoirement par la fleur. La fleur contient les organes reproducteurs de la plante.\n\nLes deux organes clés :\n\n• Les étamines (organe mâle). Composées du filet (petite tige) et de l'anthère (sac qui fabrique les grains de pollen). Le pollen contient les cellules reproductrices mâles. C'est comme un distributeur de gamètes mâles.\n\n• Le pistil ou carpelle (organe femelle). Composé de trois parties : le stigmate (surface collante qui reçoit le pollen), le style (tube qui descend) et l'ovaire (contient les ovules). C'est l'appareil reproducteur femelle.\n\nLa fleur contient aussi des pièces stériles :\n\n• Les pétales. Ils attirent les pollinisateurs avec leurs couleurs vives.\n• Les sépales. Ils protègent le bouton floral avant l'ouverture.\n\nIl existe deux types de fécondation :\n\n• L'autofécondation. Le pollen féconde l'ovule de la même fleur. Pas de mélange génétique. Pratique quand il n'y a pas de voisin.\n• La fécondation croisée. Le pollen vient d'une autre plante. Les gènes se mélangent. Plus de diversité = meilleure adaptation.\n\nEn gros : la fleur est le lieu de rencontre entre gamètes mâles (pollen) et femelles (ovules).`
          },
          {
            titre: "La pollinisation et la co-évolution",
            contenu: `La pollinisation est le transport du pollen depuis l'anthère (étamine) jusqu'au stigmate (pistil). C'est une étape indispensable avant la fécondation.\n\nDeux grands modes de transport :\n\n• L'anémogamie (pollinisation par le vent). Le pollen est léger, produit en masse et lancé au hasard dans l'air. C'est la stratégie du nombre. Inconvénient : beaucoup de gaspillage. Exemples : graminées, arbres comme le chêne ou le bouleau.\n\n• La zoogamie (pollinisation par les animaux). Le pollen est transporté par des insectes (abeilles, papillons), des oiseaux (colibris) ou des chauves-souris. La fleur attire le pollinisateur avec du nectar, des couleurs vives et des odeurs.\n\n80 à 90 % des plantes à fleurs dépendent d'animaux pollinisateurs. C'est une stratégie ultra-efficace mais risquée si le pollinisateur disparaît.\n\nLa co-évolution est l'adaptation mutuelle entre la plante et son pollinisateur au fil du temps. La forme de la fleur s'adapte à l'animal, et l'animal s'adapte à la fleur.\n\nC'est comme une clé et une serrure qui évoluent ensemble. Exemple : la trompe du papillon s'allonge pour atteindre le nectar d'une fleur tubulaire.\n\nEn gros : la pollinisation est la « livraison » du pollen, et la co-évolution a créé des duos plante-animal parfaitement ajustés.`
          },
          {
            titre: "De la fécondation à la graine et au fruit",
            contenu: `Après la pollinisation, le grain de pollen germe sur le stigmate. Un tube pollinique pousse à travers le style jusqu'à l'ovule. La fécondation a lieu : les gamètes mâle et femelle fusionnent.\n\nAttention, piège : pollinisation ≠ fécondation. La pollinisation est le transport du pollen. La fécondation est la fusion des gamètes.\n\nAprès la fécondation, deux transformations se produisent :\n\n• L'ovule se transforme en graine. La graine contient un embryon (la future plante), des réserves nutritives (amidon, lipides, protéines) et un tégument (enveloppe protectrice). C'est comme un paquet cadeau contenant une mini-plante avec son repas.\n\n• L'ovaire du pistil se transforme en fruit. Le fruit protège les graines et aide à leur dispersion. Attention : un fruit n'est pas toujours charnu. Une gousse de haricot, un akène de pissenlit et une capsule de pavot sont aussi des fruits.\n\nUne orchidée peut produire jusqu'à 2 millions de graines minuscules par fruit. Une cerise investit tout dans une seule grosse graine bien nourrie. Chaque espèce a sa stratégie.\n\nEn gros : la fécondation transforme l'ovule en graine et l'ovaire en fruit.`
          },
          {
            titre: "La dispersion des graines",
            contenu: `Pour coloniser de nouveaux territoires, les graines doivent s'éloigner de la plante mère. C'est la dispersion (ou dissémination).\n\nTrois grands modes de dispersion :\n\n• L'anémochorie (par le vent). Les graines sont légères, ailées ou munies de poils plumeux. Exemples : pissenlit (aigrettes), érable (samares ailées). Elles peuvent voyager sur des centaines de km.\n\n• La zoochorie (par les animaux). Deux variantes. Les fruits charnus (cerise, framboise) sont mangés par les animaux ; les graines passent dans le tube digestif et sont déposées plus loin. Les fruits à crochets (bardane) s'accrochent à la fourrure ou aux vêtements.\n\n• L'hydrochorie (par l'eau). Les graines flottent et sont transportées par les rivières ou la mer. Exemple : la noix de coco.\n\nC'est comme un système de livraison gratuit : le vent, les animaux et l'eau font le travail de transport.\n\nLa dispersion est essentielle pour éviter la compétition entre la plante mère et ses descendants. Plus les graines vont loin, plus elles ont de chances de trouver un environnement favorable.\n\nEn gros : la plante produit graines et fruits adaptés au mode de transport disponible dans son environnement.`
          }
        ]
      },
      page2_concepts: {
        titre: "Concepts clés",
        concepts: [
          {
            terme: "Totipotence",
            definition: "Capacité d'une cellule végétale à régénérer un organisme entier. C'est possible car chaque cellule conserve le génome complet de la plante. C'est comme si chaque pixel d'une photo pouvait recréer la photo entière. En gros : une seule cellule = potentiellement une plante complète."
          },
          {
            terme: "Bouturage",
            definition: "On coupe un fragment de plante (tige, feuille, racine) et on le plante. Grâce à la totipotence, il régénère les parties manquantes. Le résultat est un clone (copie génétique). C'est comme couper un bras d'étoile de mer qui repousse un corps entier."
          },
          {
            terme: "Marcottage",
            definition: "Une tige encore reliée à la plante mère touche le sol et y forme des racines. Un nouvel individu pousse à cet endroit. Il reste d'abord relié à la mère, puis peut devenir indépendant. En gros : la plante se clone naturellement sans intervention humaine."
          },
          {
            terme: "Pistil (carpelle)",
            definition: "Organe femelle de la fleur. Il est composé de trois parties : le stigmate (surface collante qui reçoit le pollen), le style (tube qui relie le stigmate à l'ovaire) et l'ovaire (contient les ovules). En gros : c'est l'appareil reproducteur femelle de la plante."
          },
          {
            terme: "Étamine",
            definition: "Organe mâle de la fleur. Composée du filet (petite tige) et de l'anthère (sac qui fabrique les grains de pollen). Le pollen contient les cellules reproductrices mâles. C'est comme un distributeur de gamètes mâles."
          },
          {
            terme: "Pollinisation",
            definition: "Transport du pollen depuis l'anthère (étamine) jusqu'au stigmate (pistil). Par le vent on parle d'anémogamie (pollen léger, produit en masse). Par un animal on parle de zoogamie (insecte, oiseau, chauve-souris). En gros : c'est la livraison du pollen."
          },
          {
            terme: "Autofécondation vs fécondation croisée",
            definition: "Autofécondation : le pollen féconde l'ovule de la même fleur (pas de mélange génétique). Fécondation croisée : le pollen vient d'une autre plante (diversité génétique accrue). En gros : l'auto fait des quasi-clones, la croisée fait des individus variés."
          },
          {
            terme: "Co-évolution plante-pollinisateur",
            definition: "Évolution parallèle où la plante et son pollinisateur s'adaptent l'un à l'autre au fil du temps. Exemple : la trompe du papillon s'allonge pour atteindre le nectar d'une fleur tubulaire. C'est comme une clé et une serrure qui évoluent ensemble."
          },
          {
            terme: "Graine",
            definition: "Résultat de la transformation de l'ovule après fécondation. Elle contient un embryon (future plante), des réserves nutritives et un tégument (enveloppe protectrice). C'est comme un paquet cadeau contenant une mini-plante avec son repas."
          },
          {
            terme: "Fruit",
            definition: "Résultat de la transformation de l'ovaire du pistil après fécondation. Il protège les graines et aide à leur dispersion. Attention : un fruit n'est pas toujours charnu. Une gousse, un akène ou une capsule sont aussi des fruits."
          }
        ]
      },
      page3_schemas: {
        titre: "Schémas clés",
        schemas: []
      },
      page4_formules: {
        titre: "Chiffres clés",
        formules: [
          {
            nom: "Nombre d'espèces de plantes à fleurs",
            formule: "≈ 300 000 espèces d'Angiospermes",
            explication: "Les plantes à fleurs dominent les milieux terrestres depuis le Crétacé (il y a environ 100 millions d'années)."
          },
          {
            nom: "Grains de pollen par étamine",
            formule: "De quelques centaines à plusieurs millions",
            explication: "Les plantes pollinisées par le vent en produisent énormément car le transport est aléatoire. C'est la stratégie du nombre."
          },
          {
            nom: "Nombre d'espèces d'abeilles dans le monde",
            formule: "≈ 20 000 espèces",
            explication: "Les abeilles sont les pollinisateurs les plus efficaces. Leur déclin menace la reproduction de nombreuses plantes cultivées."
          },
          {
            nom: "Plantes pollinisées par des animaux",
            formule: "≈ 80 à 90 % des plantes à fleurs",
            explication: "La grande majorité des plantes dépend des animaux (insectes surtout) pour le transport du pollen."
          },
          {
            nom: "Durée de vie d'un grain de pollen",
            formule: "De quelques heures à quelques jours",
            explication: "Le pollen est fragile et sèche vite. Il doit atteindre le stigmate rapidement pour que la fécondation ait lieu."
          },
          {
            nom: "Nombre de graines par fruit (exemples)",
            formule: "1 (cerise) à 2 000 000 (orchidée)",
            explication: "Les orchidées produisent des millions de graines minuscules. Les cerises investissent tout dans une seule graine bien nourrie."
          },
          {
            nom: "Distance de dispersion par le vent",
            formule: "Jusqu'à plusieurs centaines de km (pissenlit, érable)",
            explication: "Les graines ailées ou plumeuses peuvent voyager très loin grâce au vent. C'est l'anémochorie."
          },
          {
            nom: "Apparition des premières fleurs",
            formule: "≈ 130-140 millions d'années (début du Crétacé)",
            explication: "Les plantes à fleurs sont apparues au Mésozoïque et ont rapidement dominé les milieux terrestres."
          }
        ]
      },
      page5_resume: {
        titre: "Résumé",
        resume: "Les plantes se reproduisent de façon asexuée (clones par totipotence : bouturage, marcottage) ou sexuée (via la fleur). La fleur contient les étamines (pollen, mâle) et le pistil (ovules, femelle). La pollinisation transporte le pollen vers le pistil, par le vent ou par des animaux. Après fécondation, l'ovule devient graine et l'ovaire devient fruit. La co-évolution a façonné des correspondances étroites entre fleurs et pollinisateurs. En gros : la reproduction asexuée copie, la reproduction sexuée mélange.",
        points_importants: [
          "Totipotence = une cellule peut redonner un individu entier",
          "Bouturage et marcottage = reproduction asexuée (clones)",
          "Étamines = mâle (pollen), pistil = femelle (ovules)",
          "Pollinisation par vent (anémogamie) ou animaux (zoogamie)",
          "Fécondation croisée → plus de diversité génétique",
          "Ovule → graine, ovaire → fruit",
          "Dispersion : anémochorie (vent), zoochorie (animaux), hydrochorie (eau)"
        ],
        pieges_courants: [
          "Ne pas confondre pollinisation (transport du pollen) et fécondation (fusion des gamètes)",
          "Le fruit n'est pas toujours charnu : une gousse, une capsule, un akène sont aussi des fruits",
          "Autofécondation ≠ reproduction asexuée : il y a quand même des gamètes et une fécondation",
          "Le bouturage donne des clones → pas de diversité génétique",
          "Co-évolution ≠ adaptation unilatérale : les deux partenaires s'adaptent"
        ]
      }
    }
  },
  {
    id: "term-svt-ch5",
    titre: "Les climats de la Terre",
    emoji: "🌍",
    nouveau: false,
    flashcardsData: [
      {
        q: "Quel est le réchauffement moyen au Quaternaire récent ?",
        r: "Environ +1 °C en 150 ans (depuis la révolution industrielle), un rythme inédit dans l'histoire géologique."
      },
      {
        q: "Quand a eu lieu la dernière glaciation ?",
        r: "Entre -120 000 et -11 000 ans environ. Les calottes glaciaires recouvraient une grande partie de l'hémisphère Nord."
      },
      {
        q: "Qu'est-ce qu'un cycle de Milankovitch ?",
        r: "Variations cycliques de l'orbite terrestre (excentricité, obliquité, précession) qui modifient l'ensoleillement et déclenchent les glaciations."
      },
      {
        q: "Que sont les alternances glaciaires/interglaciaires ?",
        r: "Depuis 800 000 ans, la Terre alterne entre périodes froides (glaciaires) et chaudes (interglaciaires) selon les cycles de Milankovitch."
      },
      {
        q: "Qu'est-ce que l'albédo ?",
        r: "Proportion de lumière solaire réfléchie par une surface. La glace a un fort albédo (réfléchit beaucoup), l'océan un faible albédo."
      },
      {
        q: "Quel lien entre température et solubilité du CO₂ ?",
        r: "Plus l'eau est froide, plus elle dissout de CO₂. Un réchauffement libère du CO₂ dans l'atmosphère (effet amplificateur)."
      },
      {
        q: "Que s'est-il passé au Cénozoïque (depuis 30 Ma) ?",
        r: "La température globale a baissé progressivement, liée en partie à l'altération des silicates continentaux qui consomme du CO₂."
      },
      {
        q: "Qu'est-ce que l'altération continentale ?",
        r: "Réaction chimique entre les roches silicatées et le CO₂ atmosphérique dissous dans l'eau de pluie. Cela consomme du CO₂ → refroidissement."
      },
      {
        q: "Pourquoi le Mésozoïque était-il plus chaud ?",
        r: "L'activité des dorsales océaniques libérait beaucoup de CO₂. Plus de CO₂ → plus d'effet de serre → climat chaud."
      },
      {
        q: "Quand a eu lieu la glaciation Carbonifère-Permien ?",
        r: "Au Paléozoïque, entre -360 et -260 Ma environ. Liée à l'enfouissement massif de matière organique (forêts carbonifères)."
      }
    ],
    qcm: [
      {
        question: "Le réchauffement climatique actuel est d'environ :",
        options: [
          "+1 °C en 150 ans",
          "+5 °C en 50 ans",
          "+0,1 °C en 1 000 ans",
          "+10 °C en 200 ans"
        ],
        correct: 0,
        explication: "La température moyenne a augmenté d'environ +1 °C depuis le début de l'ère industrielle (~1850). Ce rythme est très rapide à l'échelle géologique."
      },
      {
        question: "Les cycles de Milankovitch sont liés à :",
        options: [
          "Les variations de l'orbite terrestre (excentricité, obliquité, précession)",
          "Les éruptions volcaniques",
          "Les courants océaniques uniquement",
          "La composition chimique de l'atmosphère"
        ],
        correct: 0,
        explication: "Milankovitch a montré que les variations orbitales modifient la quantité et la répartition de l'énergie solaire reçue par la Terre."
      },
      {
        question: "Un fort albédo signifie que la surface :",
        options: [
          "Réfléchit beaucoup de lumière (ex : glace, neige)",
          "Absorbe beaucoup de lumière (ex : océan sombre)",
          "Émet beaucoup de CO₂",
          "Est recouverte de végétation"
        ],
        correct: 0,
        explication: "Albédo élevé = surface claire qui renvoie la lumière. La glace réfléchit jusqu'à 90 % de la lumière, l'océan seulement 10 %."
      },
      {
        question: "Quand l'eau de l'océan se réchauffe, elle :",
        options: [
          "Libère du CO₂ dans l'atmosphère",
          "Absorbe plus de CO₂",
          "Gèle plus facilement",
          "Diminue le niveau de la mer"
        ],
        correct: 0,
        explication: "L'eau chaude dissout moins de gaz. Quand l'océan se réchauffe, il relâche du CO₂, ce qui amplifie le réchauffement (boucle de rétroaction positive)."
      },
      {
        question: "Au Cénozoïque, la baisse de température depuis 30 Ma est liée à :",
        options: [
          "L'altération des silicates continentaux qui consomme du CO₂",
          "Une augmentation de l'activité des dorsales",
          "La disparition de tous les océans",
          "Une augmentation de l'activité solaire"
        ],
        correct: 0,
        explication: "La formation de montagnes (Himalaya, Alpes) expose des roches silicatées. Leur altération chimique par l'eau de pluie capte du CO₂ → moins d'effet de serre → refroidissement."
      },
      {
        question: "Le climat chaud du Mésozoïque s'explique par :",
        options: [
          "Une forte activité des dorsales libérant beaucoup de CO₂",
          "L'absence de soleil pendant cette période",
          "La présence de calottes glaciaires géantes",
          "Une Terre plus éloignée du Soleil"
        ],
        correct: 0,
        explication: "Au Mésozoïque, les dorsales océaniques très actives dégazaient beaucoup de CO₂. Cela renforçait l'effet de serre → climat chaud, pas de calottes glaciaires."
      },
      {
        question: "La glaciation du Carbonifère-Permien est liée à :",
        options: [
          "L'enfouissement massif de matière organique (forêts) qui retire du CO₂",
          "Un excès de CO₂ dans l'atmosphère",
          "L'apparition des premiers animaux marins",
          "La collision de la Terre avec un astéroïde"
        ],
        correct: 0,
        explication: "Les immenses forêts du Carbonifère ont été enfouies avant de se décomposer. Le carbone piégé = moins de CO₂ = moins d'effet de serre = glaciation."
      }
    ],
    fiche: {
      page1_intro: {
        titre: "Introduction",
        texte: "Le climat de la Terre a énormément varié au cours de milliards d'années. À court terme, l'orbite terrestre contrôle les glaciations. À long terme, c'est le CO₂ atmosphérique qui fait la pluie et le beau temps.",
        sections: [
          {
            titre: "Le Quaternaire : alternance glaciaires/interglaciaires",
            contenu: `Depuis 800 000 ans, la Terre oscille entre des périodes glaciaires (très froides, immenses calottes de glace) et des périodes interglaciaires (plus chaudes, calottes réduites).\n\nNous vivons actuellement dans un interglaciaire, depuis environ 11 000 ans. La dernière glaciation s'est étendue de -120 000 à -11 000 ans. Le niveau de la mer était 120 m plus bas qu'aujourd'hui. On pouvait aller à pied de France en Angleterre.\n\nCes alternances suivent un cycle d'environ 100 000 ans. Elles sont déclenchées par les cycles de Milankovitch.\n\nMilankovitch a montré que trois paramètres de l'orbite terrestre varient lentement :\n\n• L'excentricité (forme de l'orbite, cycle de ~100 000 ans). L'orbite passe d'un cercle presque parfait à une ellipse plus allongée.\n• L'obliquité (inclinaison de l'axe, cycle de ~41 000 ans). L'axe de la Terre penche plus ou moins.\n• La précession (oscillation de l'axe, cycle de ~26 000 ans). L'axe tourne lentement comme une toupie.\n\nC'est comme si la Terre tanguait doucement dans l'espace. Ces variations modifient la quantité et la répartition de la lumière solaire reçue.\n\nEn gros : les cycles de Milankovitch déclenchent les glaciations en changeant la façon dont la Terre reçoit la lumière du Soleil.`
          },
          {
            titre: "Les boucles d'amplification : albédo et CO₂",
            contenu: `Les cycles de Milankovitch déclenchent les changements, mais ne suffisent pas à eux seuls à expliquer l'ampleur des glaciations. Des boucles de rétroaction positive amplifient le signal.\n\nPremière boucle : l'albédo.\n\nL'albédo est la proportion de lumière solaire réfléchie par une surface. La glace et la neige ont un albédo élevé (elles renvoient 80 à 90 % de la lumière). L'océan sombre a un albédo faible (il absorbe 90 % de la lumière).\n\n• Il fait plus froid → plus de glace → l'albédo augmente → plus de lumière réfléchie → encore plus froid.\n• Inversement : il fait plus chaud → la glace fond → l'albédo diminue → plus de lumière absorbée → encore plus chaud.\n\nC'est comme un effet boule de neige qui amplifie le changement initial.\n\nDeuxième boucle : la solubilité du CO₂.\n\nL'eau froide dissout beaucoup de CO₂ (comme une boisson gazeuse froide qui garde ses bulles). L'eau chaude en dissout moins (les bulles s'échappent).\n\n• L'océan se réchauffe → il libère du CO₂ dans l'atmosphère → plus d'effet de serre → encore plus chaud.\n• L'océan se refroidit → il absorbe du CO₂ → moins d'effet de serre → encore plus froid.\n\nAttention, piège fréquent : l'eau froide dissout PLUS de CO₂, pas moins.\n\nEn gros : l'albédo et la solubilité du CO₂ sont des amplificateurs qui transforment un petit changement orbital en une glaciation massive.`
          },
          {
            titre: "Le Cénozoïque : le lent refroidissement (depuis 30 Ma)",
            contenu: `À l'échelle de dizaines de millions d'années, c'est le taux de CO₂ atmosphérique qui contrôle le climat. Plus de CO₂ = plus d'effet de serre = plus chaud. Moins de CO₂ = plus froid.\n\nDepuis environ 30 millions d'années, la température globale baisse progressivement. Pourquoi ? À cause de l'altération des silicates continentaux.\n\nComment ça marche :\n\n1. Des chaînes de montagnes se forment (Himalaya, Alpes).\n2. Les roches silicatées (riches en silicium) sont exposées à l'air.\n3. L'eau de pluie, chargée en CO₂ dissous, attaque chimiquement ces roches.\n4. Cette réaction consomme du CO₂ atmosphérique.\n5. Moins de CO₂ dans l'air → moins d'effet de serre → refroidissement.\n\nC'est comme un climatiseur géologique ultra-lent. La formation de l'Himalaya a aspiré tellement de CO₂ que la Terre s'est progressivement refroidie.\n\nCe refroidissement a conduit à l'apparition des calottes glaciaires permanentes en Antarctique (il y a ~34 Ma) puis en Arctique (il y a ~3 Ma).\n\nEn gros : les montagnes consomment du CO₂ en s'érodant, ce qui refroidit la planète sur des millions d'années.`
          },
          {
            titre: "Le Mésozoïque : un monde sans glace",
            contenu: `Le Mésozoïque (de -252 à -66 Ma) était une époque bien plus chaude qu'aujourd'hui. Il n'y avait aucune calotte glaciaire, même aux pôles. Les dinosaures vivaient dans un monde tropical.\n\nLa cause principale : une très forte activité des dorsales océaniques.\n\nLes dorsales sont des chaînes de montagnes sous-marines où le magma remonte. Quand le magma sort, il libère du CO₂ en grande quantité.\n\n• Dorsales très actives → beaucoup de CO₂ dégazé → effet de serre puissant → climat très chaud.\n\nLe niveau de la mer était aussi beaucoup plus haut qu'aujourd'hui (jusqu'à 200 m de plus). Les dorsales très actives prenaient plus de place au fond des océans et repoussaient l'eau vers les continents.\n\nC'est comme un radiateur géologique géant au fond des océans qui réchauffe toute la planète.\n\nLe Mésozoïque montre que le CO₂ est le thermostat principal du climat terrestre à long terme.\n\nEn gros : les dorsales très actives du Mésozoïque ont libéré tellement de CO₂ que la Terre était un four sans glace.`
          },
          {
            titre: "Le Paléozoïque : la glaciation du Carbonifère-Permien",
            contenu: `Au Paléozoïque, entre -360 et -260 millions d'années, une glaciation massive a frappé la Terre. C'est la glaciation Carbonifère-Permien.\n\nSa cause est originale : l'enfouissement massif de matière organique.\n\nAu Carbonifère, d'immenses forêts tropicales recouvraient les continents. Ces arbres géants (jusqu'à 40 m de haut) absorbaient du CO₂ par photosynthèse.\n\nMais quand ils mouraient, ils n'étaient pas décomposés. Les champignons capables de digérer la lignine (le bois) n'existaient pas encore. Les troncs s'entassaient et étaient enfouis dans les sédiments.\n\nRésultat :\n\n• Du carbone piégé dans le sol → c'est ce carbone qui est devenu le charbon que nous brûlons aujourd'hui.\n• Moins de CO₂ dans l'atmosphère → moins d'effet de serre → refroidissement massif → glaciation.\n\nEn parallèle, la formation de la chaîne hercynienne (une immense chaîne de montagnes, ancêtre des Appalaches et du Massif Central) a aussi consommé du CO₂ par altération des silicates.\n\nC'est comme si les forêts avaient aspiré tellement de CO₂ que la Terre est tombée dans un congélateur.\n\nEn gros : l'enfouissement des forêts carbonifères a retiré du CO₂ de l'atmosphère et provoqué une glaciation de 100 millions d'années.`
          },
          {
            titre: "Le réchauffement actuel : un cas à part",
            contenu: `Le réchauffement climatique actuel est d'environ +1 °C en 150 ans (depuis la révolution industrielle, vers 1850). Ce rythme est inédit dans l'histoire géologique.\n\nPourquoi est-ce si rapide ? Parce que les humains brûlent des combustibles fossiles (pétrole, gaz, charbon). Ce charbon et ce pétrole sont justement le carbone enfoui depuis le Carbonifère. En les brûlant, on libère en quelques décennies du CO₂ qui avait mis des millions d'années à être piégé.\n\nC'est comme vider un sablier géant en une seconde alors qu'il avait mis des millénaires à se remplir.\n\nImportant : les cycles de Milankovitch ne sont PAS responsables du réchauffement actuel. Ils agissent sur des milliers d'années, pas sur des décennies.\n\nSans l'effet de serre naturel, la Terre serait à -18 °C au lieu de +15 °C. L'effet de serre naturel est vital. Le problème, c'est l'effet de serre additionnel causé par les activités humaines.\n\nLes forages glaciaires (carottes de glace de l'Antarctique, jusqu'à 3 270 m de profondeur) permettent de reconstituer 800 000 ans de climat. Les bulles d'air piégées dans la glace montrent que le taux de CO₂ actuel est le plus élevé depuis 800 000 ans.\n\nEn gros : le réchauffement actuel est causé par l'homme, pas par les cycles naturels. Il est beaucoup trop rapide pour être naturel.`
          }
        ]
      },
      page2_concepts: {
        titre: "Concepts clés",
        concepts: [
          {
            terme: "Cycle de Milankovitch",
            definition: "Trois paramètres de l'orbite terrestre varient lentement. L'excentricité (forme de l'orbite, ~100 000 ans), l'obliquité (inclinaison de l'axe, ~41 000 ans) et la précession (oscillation de l'axe, ~26 000 ans). Ils modifient la quantité de lumière reçue et déclenchent glaciations ou réchauffements. C'est comme si la Terre tanguait doucement dans l'espace."
          },
          {
            terme: "Glaciaire / Interglaciaire",
            definition: "Période glaciaire = très froid, calottes de glace immenses, niveau de la mer très bas. Interglaciaire = plus chaud, calottes réduites, niveau de la mer élevé. Nous vivons en interglaciaire depuis environ 11 000 ans. En gros : la Terre oscille entre des périodes froides et chaudes."
          },
          {
            terme: "Albédo",
            definition: "Proportion de lumière solaire réfléchie par une surface. La glace et la neige ont un albédo élevé (elles renvoient jusqu'à 90 % de la lumière). L'océan sombre a un albédo faible (il absorbe 90 % de la lumière). En gros : surface blanche = renvoie la lumière ; surface sombre = absorbe la chaleur."
          },
          {
            terme: "Rétroaction positive (albédo)",
            definition: "Plus il fait froid → plus de glace → albédo augmente → encore plus de lumière réfléchie → encore plus froid. Et ça marche aussi dans l'autre sens : plus il fait chaud → moins de glace → plus d'absorption → encore plus chaud. C'est comme un effet boule de neige qui amplifie le changement initial."
          },
          {
            terme: "Solubilité du CO₂ dans l'océan",
            definition: "L'eau froide dissout beaucoup de CO₂ (comme une boisson gazeuse froide qui garde ses bulles). L'eau chaude en dissout moins (les bulles s'échappent). Quand l'océan se réchauffe, il libère du CO₂ dans l'atmosphère, ce qui amplifie le réchauffement. En gros : c'est une deuxième boucle d'amplification."
          },
          {
            terme: "Altération des silicates continentaux",
            definition: "Réaction chimique entre les roches silicatées (contenant du silicium) exposées par les montagnes et le CO₂ dissous dans l'eau de pluie. Cette réaction consomme du CO₂ atmosphérique. Résultat : moins de CO₂ → moins d'effet de serre → refroidissement. C'est comme un climatiseur géologique très lent."
          },
          {
            terme: "Activité des dorsales océaniques",
            definition: "Les dorsales (chaînes de montagnes sous-marines) émettent du CO₂ quand le magma remonte. Quand elles sont très actives (beaucoup de volcans), elles libèrent énormément de CO₂. Plus de CO₂ = plus d'effet de serre = climat chaud. C'est ce qui explique la chaleur du Mésozoïque."
          },
          {
            terme: "Enfouissement de matière organique",
            definition: "Quand des plantes ou des animaux morts sont enterrés avant d'être décomposés, leur carbone est piégé dans le sol. Ce carbone ne retourne pas dans l'air sous forme de CO₂. Moins de CO₂ atmosphérique → refroidissement. C'est ce qui a causé la glaciation du Carbonifère."
          },
          {
            terme: "Effet de serre",
            definition: "Certains gaz (CO₂, méthane CH₄, vapeur d'eau H₂O) piègent la chaleur renvoyée par la surface de la Terre. Sans eux, la Terre serait gelée à -18 °C. Mais trop de gaz à effet de serre provoque une surchauffe. C'est comme une couverture : une c'est bien, dix c'est trop chaud."
          },
          {
            terme: "Forages glaciaires",
            definition: "On fore dans les calottes glaciaires (Antarctique, Groenland) pour extraire des carottes de glace très anciennes. Les bulles d'air piégées dans la glace permettent de connaître la composition de l'atmosphère passée. En gros : la glace est un livre d'histoire du climat."
          }
        ]
      },
      page3_schemas: {
        titre: "Schémas clés",
        schemas: []
      },
      page4_formules: {
        titre: "Chiffres clés",
        formules: [
          {
            nom: "Réchauffement climatique actuel",
            formule: "+1 °C en ~150 ans (depuis 1850)",
            explication: "Rythme inédit dans l'histoire géologique. Causé principalement par les émissions humaines de CO₂ (combustion de pétrole, gaz, charbon)."
          },
          {
            nom: "Dernière glaciation",
            formule: "De -120 000 à -11 000 ans",
            explication: "Le niveau de la mer était ~120 m plus bas qu'aujourd'hui. On pouvait aller à pied de France en Angleterre."
          },
          {
            nom: "Cycle des glaciations récentes",
            formule: "≈ 100 000 ans (dominé par l'excentricité orbitale)",
            explication: "Depuis 800 000 ans, les alternances froid/chaud suivent un cycle de ~100 000 ans lié à l'orbite terrestre."
          },
          {
            nom: "Refroidissement cénozoïque",
            formule: "Baisse progressive de la température depuis ~30 Ma",
            explication: "L'altération des montagnes (Himalaya, Alpes) consomme du CO₂. Moins de CO₂ → refroidissement global."
          },
          {
            nom: "Température terrestre sans effet de serre",
            formule: "-18 °C au lieu de +15 °C en moyenne",
            explication: "L'effet de serre naturel réchauffe la Terre de 33 °C. Sans lui, aucune vie complexe ne serait possible."
          },
          {
            nom: "Albédo de la glace vs océan",
            formule: "Glace ≈ 80-90 % réfléchi ; Océan ≈ 6-10 % réfléchi",
            explication: "C'est pourquoi la fonte des glaces accélère le réchauffement : la surface sombre qui remplace absorbe plus de chaleur."
          },
          {
            nom: "Glaciation Carbonifère-Permien",
            formule: "De -360 à -260 millions d'années",
            explication: "Causée par l'enfouissement massif des forêts tropicales (qui sont devenues le charbon). Le CO₂ a chuté."
          },
          {
            nom: "Profondeur des forages glaciaires (record)",
            formule: "≈ 3 270 m (Dôme C, Antarctique) → 800 000 ans d'histoire",
            explication: "Les bulles d'air piégées dans la glace permettent de reconstituer l'atmosphère passée sur 800 000 ans."
          }
        ]
      },
      page5_resume: {
        titre: "Résumé",
        resume: "Le climat terrestre est contrôlé par deux facteurs principaux. À court terme (Quaternaire), les cycles de Milankovitch (variations orbitales) déclenchent les alternances glaciaires/interglaciaires, amplifiées par les rétroactions albédo et solubilité du CO₂. À long terme (centaines de Ma), le taux de CO₂ atmosphérique est le facteur clé : dorsales actives → plus de CO₂ → chaud (Mésozoïque), altération continentale ou enfouissement organique → moins de CO₂ → froid (Cénozoïque, Carbonifère). En gros : le climat dépend de l'orbite (court terme) et du CO₂ (long terme), avec des boucles d'amplification.",
        points_importants: [
          "Milankovitch : excentricité (~100 000 ans), obliquité (~41 000 ans), précession (~26 000 ans)",
          "Albédo = fraction de lumière réfléchie (glace = fort, océan = faible)",
          "Eau chaude dissout moins de CO₂ → amplifie le réchauffement",
          "Altération continentale = consomme du CO₂ → refroidit",
          "Dorsales actives = dégazent du CO₂ → réchauffe",
          "Enfouissement organique = piège le carbone → refroidit"
        ],
        pieges_courants: [
          "Milankovitch ne crée pas le réchauffement actuel : celui-ci est trop rapide et lié au CO₂ humain",
          "L'albédo est une rétroaction positive : elle amplifie dans les deux sens (froid ou chaud)",
          "L'eau froide dissout PLUS de CO₂, pas moins (piège fréquent)",
          "L'altération des silicates refroidit en consommant du CO₂, pas en produisant de la chaleur",
          "Ne pas confondre effet de serre naturel (vital) et effet de serre additionnel (réchauffement actuel)"
        ]
      }
    }
  }
];
