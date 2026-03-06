export const MATIERES = [
  {
    id: "bio-cell", emoji: "🦠", nom: "Biologie cellulaire", niveau: "PASS/LAS", color: "#3D2C7A",
    cours: [
      {
        id: "bc1", titre: "Organisation générale de la cellule", emoji: "🔬", nouveau: false,
        flashcardsData: [
          { q: "Qu'est-ce que la cellule ?", r: "La plus petite unité fonctionnelle du vivant, capable d'autonomie et de reproduction." },
          { q: "Où est stockée l'info génétique dans une cellule eucaryote ?", r: "Dans le noyau, sous forme d'ADN organisé en chromatine." },
          { q: "Rôle de la MEC ?", r: "Adhérence, nutrition et soutien structural de la cellule." },
          { q: "Différence cellule procaryote / eucaryote ?", r: "Procaryote : pas de noyau membranaire. Eucaryote : noyau délimité par une enveloppe nucléaire." },
          { q: "Quels sont les organites membranaires ?", r: "Noyau, mitochondries, RE rugueux/lisse, appareil de Golgi, lysosomes, peroxysomes." },
          { q: "Qu'est-ce que le cytosquelette ?", r: "Réseau de filaments protéiques (microfilaments, filaments intermédiaires, microtubules) qui donne la forme à la cellule et participe aux mouvements intracellulaires." },
          { q: "Taille d'une cellule animale typique ?", r: "10 à 30 µm de diamètre." },
        ],
        fiche: {
          page1_intro: {
            titre: "Introduction",
            texte: "La cellule est l'unité structurale et fonctionnelle de tout être vivant. Toutes les fonctions biologiques (respiration, reproduction, synthèse de protéines) se déroulent au niveau cellulaire. Il existe deux grands types : les cellules procaryotes (bactéries) et eucaryotes (animales, végétales, fongiques).",
            points_cles: [
              "Unité de base du vivant",
              "Eucaryote = noyau délimité par une membrane",
              "Procaryote = pas de noyau membranaire (bactéries)",
              "Toute cellule provient d'une cellule (loi de Virchow)",
            ]
          },
          page2_concepts: {
            titre: "Concepts clés",
            concepts: [
              { terme: "Membrane plasmique", definition: "Bicouche lipidique (phospholipides + cholestérol) qui délimite la cellule. Contient des protéines membranaires (intégrales et périphériques)." },
              { terme: "Cytoplasme", definition: "Milieu aqueux (cytosol) contenant les organites et le cytosquelette. C'est le lieu de nombreuses réactions métaboliques." },
              { terme: "Noyau", definition: "Organite délimité par une double membrane (enveloppe nucléaire) percée de pores. Contient l'ADN et le nucléole." },
              { terme: "Mitochondrie", definition: "Organite à double membrane, siège de la respiration cellulaire (production d'ATP). Possède son propre ADN circulaire." },
              { terme: "Réticulum endoplasmique", definition: "RE rugueux (ribosomes → synthèse protéique) et RE lisse (synthèse des lipides, détoxification)." },
            ]
          },
          page3_schemas: {
            titre: "Schémas",
            schemas: [
              { id: "cellule-eucaryote", legende: "Schéma d'une cellule eucaryote animale avec ses principaux organites" },
            ]
          },
          page4_formules: {
            titre: "Données clés",
            formules: [
              { label: "Rapport Nucléo-Cytoplasmique", formule: "R = Vn / Vc", unite: "sans unité" },
            ],
            donnees: [
              { label: "Taille cellule eucaryote", valeur: "10-30 µm" },
              { label: "Taille cellule procaryote", valeur: "1-5 µm" },
              { label: "Épaisseur membrane", valeur: "7-8 nm" },
              { label: "Diamètre ribosome", valeur: "20-25 nm" },
            ]
          },
          page5_resume: {
            titre: "Résumé",
            points: [
              "La cellule eucaryote possède un noyau et des organites membranaires",
              "La membrane plasmique régule les échanges avec le milieu extérieur",
              "Le cytosquelette assure forme, mouvement et transport intracellulaire",
              "La mitochondrie est la centrale énergétique (ATP via la chaîne respiratoire)",
              "Le RE et le Golgi assurent la synthèse et le tri des protéines",
            ],
            mnemo: "\"MiNi REGol\" → Mitochondrie, Noyau, RE, Golgi : les 4 organites essentiels à retenir en priorité !"
          }
        },
        qcm: [
          {
            question: "Quel organite est responsable de la production d'ATP ?",
            options: ["Appareil de Golgi", "Mitochondrie", "Lysosome", "Réticulum endoplasmique lisse"],
            correct: 1,
            difficulte: "facile",
            explication: "La mitochondrie est le siège de la phosphorylation oxydative et produit la majorité de l'ATP cellulaire via la chaîne respiratoire."
          },
          {
            question: "Quelle est la composition principale de la membrane plasmique ?",
            options: ["Glucides et protéines", "Phospholipides et cholestérol", "ADN et ARN", "Acides aminés"],
            correct: 1,
            difficulte: "facile",
            explication: "La membrane est une bicouche de phospholipides contenant du cholestérol, des protéines et des glycolipides."
          },
          {
            question: "La loi de Virchow stipule que :",
            options: ["Toute cellule provient d'une cellule préexistante", "L'ADN est toujours double brin", "La membrane est imperméable", "Le noyau contient le cytosol"],
            correct: 0,
            difficulte: "moyen",
            explication: "\"Omnis cellula e cellula\" — toute cellule naît d'une division cellulaire d'une cellule mère."
          },
          {
            question: "Quel organite possède son propre ADN ?",
            options: ["Lysosome", "Appareil de Golgi", "Mitochondrie", "Peroxysome"],
            correct: 2,
            difficulte: "moyen",
            explication: "La mitochondrie possède un ADN circulaire propre (héritage maternel), vestige de son origine endosymbiotique."
          },
          {
            question: "Le RE rugueux se distingue du RE lisse par :",
            options: ["Sa taille plus grande", "La présence de ribosomes sur sa surface", "Son absence de membrane", "Sa localisation dans le noyau"],
            correct: 1,
            difficulte: "facile",
            explication: "Le RE rugueux (granuleux) est recouvert de ribosomes qui assurent la traduction des ARNm en protéines."
          },
        ]
      },
      {
        id: "bc2", titre: "La membrane plasmique", emoji: "🧫", nouveau: true,
        flashcardsData: [
          { q: "Quel modèle décrit la membrane plasmique ?", r: "Le modèle de la mosaïque fluide de Singer et Nicolson (1972)." },
          { q: "Rôle du cholestérol dans la membrane ?", r: "Il régule la fluidité membranaire : il la diminue à haute température et empêche la rigidification à basse température." },
          { q: "Qu'est-ce qu'un transport actif ?", r: "Transport de molécules contre leur gradient de concentration, nécessitant de l'énergie (ATP)." },
          { q: "Différence diffusion simple / facilitée ?", r: "Simple : passage direct à travers la bicouche. Facilitée : via une protéine canal ou transporteur." },
          { q: "Qu'est-ce que l'endocytose ?", r: "Entrée de macromolécules dans la cellule par invagination de la membrane, formant une vésicule." },
          { q: "Exemples de transport actif ?", r: "Pompe Na+/K+ ATPase, pompe à protons, transporteurs ABC." },
        ],
        fiche: {
          page1_intro: {
            titre: "Introduction",
            texte: "La membrane plasmique est une barrière sélective qui sépare le milieu intracellulaire du milieu extracellulaire. Elle contrôle les échanges de substances, la communication cellulaire et la reconnaissance intercellulaire. Son modèle structural est la mosaïque fluide.",
            points_cles: [
              "Bicouche de phospholipides (tête hydrophile, queues hydrophobes)",
              "Modèle de la mosaïque fluide (Singer & Nicolson, 1972)",
              "Asymétrie entre feuillet interne et externe",
              "Perméabilité sélective",
            ]
          },
          page2_concepts: {
            titre: "Concepts clés",
            concepts: [
              { terme: "Mosaïque fluide", definition: "Les lipides et protéines se déplacent latéralement dans la membrane, créant un ensemble dynamique." },
              { terme: "Transport passif", definition: "Passage de molécules dans le sens du gradient de concentration, sans énergie (diffusion simple, facilitée, osmose)." },
              { terme: "Transport actif", definition: "Passage contre le gradient, nécessitant de l'ATP. Ex: pompe Na+/K+ ATPase." },
              { terme: "Endocytose / Exocytose", definition: "Endocytose = entrée de grosses molécules par vésicules. Exocytose = sortie (sécrétion)." },
            ]
          },
          page3_schemas: {
            titre: "Schémas",
            schemas: [
              { id: "membrane-plasmique", legende: "Structure de la membrane plasmique en mosaïque fluide" },
            ]
          },
          page4_formules: {
            titre: "Données clés",
            formules: [
              { label: "Pression osmotique", formule: "π = nRT/V = CRT", unite: "Pa ou atm" },
            ],
            donnees: [
              { label: "Épaisseur membrane", valeur: "7-8 nm" },
              { label: "% lipides", valeur: "~50% en masse" },
              { label: "% protéines", valeur: "~50% en masse" },
              { label: "Na+ extracellulaire", valeur: "145 mM" },
              { label: "K+ intracellulaire", valeur: "140 mM" },
            ]
          },
          page5_resume: {
            titre: "Résumé",
            points: [
              "La membrane plasmique est une bicouche lipidique fluide et asymétrique",
              "Le cholestérol régule la fluidité membranaire",
              "Transport passif = dans le sens du gradient (sans énergie)",
              "Transport actif = contre le gradient (avec ATP)",
              "Endocytose/Exocytose pour les macromolécules",
            ],
            mnemo: "\"PASC\" → Passif = Avec le gradient, Sans Consommation d'énergie. Actif = contre !"
          }
        },
        qcm: [
          {
            question: "Le modèle de la mosaïque fluide a été proposé par :",
            options: ["Watson et Crick", "Singer et Nicolson", "Mendel", "Virchow"],
            correct: 1,
            difficulte: "facile",
            explication: "Singer et Nicolson ont proposé en 1972 le modèle de la mosaïque fluide pour décrire la structure dynamique de la membrane."
          },
          {
            question: "La pompe Na+/K+ ATPase est un exemple de :",
            options: ["Diffusion simple", "Transport passif", "Transport actif primaire", "Osmose"],
            correct: 2,
            difficulte: "moyen",
            explication: "Cette pompe utilise directement l'ATP pour transporter 3 Na+ hors de la cellule et 2 K+ à l'intérieur, contre leurs gradients."
          },
          {
            question: "L'osmose correspond au passage de :",
            options: ["Solutés à travers la membrane", "Eau du milieu hypotonique vers le milieu hypertonique", "Protéines par exocytose", "Ions par des canaux"],
            correct: 1,
            difficulte: "moyen",
            explication: "L'osmose est le mouvement d'eau à travers une membrane semi-perméable, du milieu le moins concentré vers le plus concentré."
          },
          {
            question: "Le cholestérol membranaire a pour rôle principal de :",
            options: ["Produire de l'ATP", "Réguler la fluidité de la membrane", "Synthétiser des protéines", "Transporter le glucose"],
            correct: 1,
            difficulte: "facile",
            explication: "Le cholestérol s'intercale entre les phospholipides et module la fluidité selon la température."
          },
          {
            question: "Quelle molécule NE traverse PAS la membrane par diffusion simple ?",
            options: ["O₂", "CO₂", "Glucose", "Éthanol"],
            correct: 2,
            difficulte: "moyen",
            explication: "Le glucose est une molécule polaire trop grosse pour traverser par diffusion simple. Il utilise des transporteurs (GLUT) par diffusion facilitée."
          },
        ]
      },
    ]
  },
  {
    id: "anatomie", emoji: "🫀", nom: "Anatomie", niveau: "PASS/LAS", color: "#7A2C2C",
    cours: [
      {
        id: "ana1", titre: "Ostéologie — Le squelette", emoji: "🦴", nouveau: false,
        flashcardsData: [
          { q: "Combien d'os dans le squelette adulte ?", r: "206 os." },
          { q: "Les 3 types d'os selon leur forme ?", r: "Os longs (fémur), os courts (carpe), os plats (omoplate)." },
          { q: "Qu'est-ce que la diaphyse ?", r: "La partie centrale (corps) d'un os long, constituée d'os compact." },
          { q: "Qu'est-ce que l'épiphyse ?", r: "Les extrémités d'un os long, constituées d'os spongieux recouvert de cartilage articulaire." },
          { q: "Rôle de la moelle osseuse rouge ?", r: "Hématopoïèse : production des cellules sanguines (globules rouges, blancs, plaquettes)." },
          { q: "Qu'est-ce que le périoste ?", r: "Membrane conjonctive qui entoure l'os, vascularisée, rôle dans la croissance en épaisseur et la réparation." },
        ],
        fiche: {
          page1_intro: {
            titre: "Introduction",
            texte: "Le squelette humain est la charpente du corps. Il assure le soutien, la protection des organes vitaux, la locomotion (avec les muscles), le stockage des minéraux (calcium, phosphore) et l'hématopoïèse (production des cellules sanguines dans la moelle rouge).",
            points_cles: [
              "206 os chez l'adulte",
              "Squelette axial (crâne, colonne, thorax) + appendiculaire (membres)",
              "Os longs, courts, plats et irréguliers",
              "Fonctions : soutien, protection, mouvement, stockage, hématopoïèse",
            ]
          },
          page2_concepts: {
            titre: "Concepts clés",
            concepts: [
              { terme: "Os compact (cortical)", definition: "Tissu osseux dense formant la paroi externe des os. Organisé en systèmes de Havers (ostéons)." },
              { terme: "Os spongieux (trabéculaire)", definition: "Tissu osseux poreux situé à l'intérieur des os (épiphyses, os plats). Contient la moelle osseuse." },
              { terme: "Ostéoblastes", definition: "Cellules qui synthétisent la matrice osseuse (formation de l'os)." },
              { terme: "Ostéoclastes", definition: "Cellules qui résorbent la matrice osseuse (destruction / remodelage)." },
              { terme: "Cartilage de conjugaison", definition: "Zone de croissance en longueur des os longs, située entre épiphyse et diaphyse (disparaît à l'âge adulte)." },
            ]
          },
          page3_schemas: {
            titre: "Schémas",
            schemas: [
              { id: "os-long", legende: "Structure d'un os long : diaphyse, épiphyses, métaphyses, périoste" },
            ]
          },
          page4_formules: {
            titre: "Données clés",
            formules: [],
            donnees: [
              { label: "Nombre d'os adulte", valeur: "206" },
              { label: "Os le plus long", valeur: "Fémur" },
              { label: "Os le plus petit", valeur: "Étrier (oreille)" },
              { label: "Vertèbres cervicales", valeur: "7 (C1-C7)" },
              { label: "Vertèbres thoraciques", valeur: "12 (T1-T12)" },
              { label: "Vertèbres lombaires", valeur: "5 (L1-L5)" },
              { label: "Côtes vraies", valeur: "7 paires (1-7)" },
              { label: "Côtes flottantes", valeur: "2 paires (11-12)" },
            ]
          },
          page5_resume: {
            titre: "Résumé",
            points: [
              "Le squelette se divise en squelette axial (80 os) et appendiculaire (126 os)",
              "Os compact en périphérie, os spongieux à l'intérieur",
              "Ostéoblastes forment l'os, ostéoclastes le résorbent → remodelage permanent",
              "La colonne vertébrale compte 7C + 12T + 5L + sacrum + coccyx",
              "La moelle osseuse rouge assure l'hématopoïèse",
            ],
            mnemo: "\"BlaFo ClaRé\" → OstéoBlastes = Formation, OstéoClastes = Résorption. Inversez jamais !"
          }
        },
        qcm: [
          {
            question: "Combien d'os compte le squelette humain adulte ?",
            options: ["186", "206", "226", "256"],
            correct: 1,
            difficulte: "facile",
            explication: "Le squelette adulte est composé de 206 os répartis entre le squelette axial et appendiculaire."
          },
          {
            question: "Quel est le rôle des ostéoclastes ?",
            options: ["Former la matrice osseuse", "Résorber la matrice osseuse", "Produire du cartilage", "Synthétiser le collagène"],
            correct: 1,
            difficulte: "moyen",
            explication: "Les ostéoclastes sont des cellules géantes multinucléées qui dégradent la matrice osseuse par acidification et enzymes (remodelage osseux)."
          },
          {
            question: "Où se situe le cartilage de conjugaison ?",
            options: ["Au centre de la diaphyse", "Entre l'épiphyse et la diaphyse", "Sur le périoste", "Dans la moelle osseuse"],
            correct: 1,
            difficulte: "moyen",
            explication: "Le cartilage de conjugaison (ou plaque de croissance) se situe dans la métaphyse, entre diaphyse et épiphyse. Il permet la croissance en longueur."
          },
          {
            question: "Combien de vertèbres cervicales possède l'homme ?",
            options: ["5", "7", "12", "4"],
            correct: 1,
            difficulte: "facile",
            explication: "L'homme possède 7 vertèbres cervicales (C1 à C7), comme tous les mammifères."
          },
          {
            question: "L'hématopoïèse se déroule dans :",
            options: ["Le périoste", "La moelle osseuse rouge", "Le cartilage articulaire", "L'os compact"],
            correct: 1,
            difficulte: "facile",
            explication: "La moelle osseuse rouge, présente dans l'os spongieux, est le siège de l'hématopoïèse (production de toutes les cellules sanguines)."
          },
        ]
      },
      {
        id: "ana2", titre: "Le cœur et la circulation", emoji: "❤️", nouveau: true,
        flashcardsData: [
          { q: "Combien de cavités possède le cœur ?", r: "4 cavités : 2 oreillettes (atria) et 2 ventricules." },
          { q: "Quel ventricule envoie le sang dans la circulation systémique ?", r: "Le ventricule gauche, via l'aorte." },
          { q: "Qu'est-ce que la petite circulation ?", r: "Circulation pulmonaire : VD → artères pulmonaires → poumons → veines pulmonaires → OG." },
          { q: "Fréquence cardiaque normale au repos ?", r: "60-100 bpm (battements par minute)." },
          { q: "Quelles sont les valves auriculo-ventriculaires ?", r: "Valve mitrale (gauche, bicuspide) et valve tricuspide (droite)." },
          { q: "Quel est le tissu nodal ?", r: "Tissu de conduction cardiaque : nœud sinusal → nœud AV → faisceau de His → réseau de Purkinje." },
        ],
        fiche: {
          page1_intro: {
            titre: "Introduction",
            texte: "Le cœur est un organe musculaire creux situé dans le médiastin. Il fonctionne comme une pompe double : le cœur droit envoie le sang vers les poumons (petite circulation) et le cœur gauche l'envoie vers le reste du corps (grande circulation). Le myocarde est le muscle cardiaque strié à contraction involontaire.",
            points_cles: [
              "4 cavités : 2 oreillettes + 2 ventricules",
              "Cœur droit = sang désoxygéné → poumons",
              "Cœur gauche = sang oxygéné → corps",
              "Automatisme cardiaque par le tissu nodal",
            ]
          },
          page2_concepts: {
            titre: "Concepts clés",
            concepts: [
              { terme: "Systole", definition: "Phase de contraction du myocarde. Systole auriculaire puis ventriculaire, éjectant le sang dans les artères." },
              { terme: "Diastole", definition: "Phase de relâchement et de remplissage des cavités cardiaques." },
              { terme: "Débit cardiaque", definition: "Volume de sang éjecté par un ventricule par minute. Qc = FC × VES (Volume d'Éjection Systolique)." },
              { terme: "Nœud sinusal (Keith & Flack)", definition: "Pacemaker naturel du cœur, situé dans l'oreillette droite. Génère l'impulsion électrique." },
            ]
          },
          page3_schemas: {
            titre: "Schémas",
            schemas: [
              { id: "coeur-cavites", legende: "Le cœur et ses 4 cavités, valves et gros vaisseaux" },
            ]
          },
          page4_formules: {
            titre: "Données clés",
            formules: [
              { label: "Débit cardiaque", formule: "Qc = FC × VES", unite: "L/min" },
              { label: "Résistance vasculaire", formule: "R = ΔP / Q", unite: "mmHg·min/L" },
            ],
            donnees: [
              { label: "FC repos", valeur: "60-100 bpm" },
              { label: "VES repos", valeur: "~70 mL" },
              { label: "Qc repos", valeur: "~5 L/min" },
              { label: "PA systolique normale", valeur: "120 mmHg" },
              { label: "PA diastolique normale", valeur: "80 mmHg" },
            ]
          },
          page5_resume: {
            titre: "Résumé",
            points: [
              "Le cœur est une pompe double (droit/gauche) à 4 cavités",
              "La révolution cardiaque comprend systole (contraction) et diastole (relâchement)",
              "Le débit cardiaque au repos ≈ 5 L/min",
              "L'automatisme est assuré par le nœud sinusal (pacemaker naturel)",
              "Petite circulation = poumons, Grande circulation = reste du corps",
            ],
            mnemo: "\"Le Droit va aux Poumons, le Gauche va au Corps\" — DPC / GC, comme les initiales !"
          }
        },
        qcm: [
          {
            question: "Quelle valve sépare l'oreillette gauche du ventricule gauche ?",
            options: ["Valve tricuspide", "Valve mitrale", "Valve aortique", "Valve pulmonaire"],
            correct: 1,
            difficulte: "facile",
            explication: "La valve mitrale (bicuspide) est la valve auriculo-ventriculaire gauche. La tricuspide est à droite."
          },
          {
            question: "Le nœud sinusal est situé dans :",
            options: ["Le ventricule gauche", "L'oreillette droite", "Le septum interventriculaire", "L'aorte"],
            correct: 1,
            difficulte: "moyen",
            explication: "Le nœud sinusal (nœud de Keith & Flack) est le pacemaker naturel, situé dans la paroi de l'oreillette droite."
          },
          {
            question: "La formule du débit cardiaque est :",
            options: ["Qc = PA × R", "Qc = FC × VES", "Qc = VES / FC", "Qc = FC / PA"],
            correct: 1,
            difficulte: "facile",
            explication: "Le débit cardiaque (Qc) est le produit de la fréquence cardiaque par le volume d'éjection systolique."
          },
          {
            question: "La petite circulation (pulmonaire) part du :",
            options: ["Ventricule gauche", "Ventricule droit", "Oreillette gauche", "Oreillette droite"],
            correct: 1,
            difficulte: "moyen",
            explication: "Le ventricule droit éjecte le sang désoxygéné vers les poumons via le tronc pulmonaire."
          },
          {
            question: "Pendant la diastole ventriculaire :",
            options: ["Les ventricules se contractent", "Les ventricules se relâchent et se remplissent", "Les valves sigmoïdes s'ouvrent", "Le sang quitte le cœur"],
            correct: 1,
            difficulte: "moyen",
            explication: "La diastole est la phase de relâchement musculaire pendant laquelle les ventricules se remplissent de sang provenant des oreillettes."
          },
        ]
      },
    ]
  },
  {
    id: "biochimie", emoji: "🧪", nom: "Biochimie", niveau: "PASS/LAS", color: "#2C5A7A",
    cours: [
      {
        id: "bch1", titre: "Les acides aminés", emoji: "🔗", nouveau: false,
        flashcardsData: [
          { q: "Combien d'acides aminés protéinogènes ?", r: "20 acides aminés standards codés par le code génétique." },
          { q: "Quelle est la structure générale d'un AA ?", r: "Un carbone α central lié à un groupement amine (-NH₂), un carboxyle (-COOH), un H et une chaîne latérale R." },
          { q: "Qu'est-ce que le point isoélectrique (pI) ?", r: "Le pH auquel l'acide aminé a une charge nette nulle (forme zwitterion)." },
          { q: "Quels sont les AA essentiels ?", r: "Ceux non synthétisables par l'organisme : Val, Leu, Ile, Met, Phe, Trp, Thr, Lys (+ His chez l'enfant)." },
          { q: "Quelle liaison unit les AA dans une protéine ?", r: "La liaison peptidique, entre le -COOH d'un AA et le -NH₂ de l'AA suivant (libération d'H₂O)." },
          { q: "Quel AA contient du soufre ?", r: "La méthionine (Met) et la cystéine (Cys) contiennent un atome de soufre dans leur chaîne latérale." },
        ],
        fiche: {
          page1_intro: {
            titre: "Introduction",
            texte: "Les acides aminés (AA) sont les monomères des protéines. Il en existe 20 protéinogènes, codés par le code génétique. Chaque AA possède un carbone α portant 4 groupements : amine (NH₂), carboxyle (COOH), hydrogène et chaîne latérale R (qui définit les propriétés de chaque AA).",
            points_cles: [
              "20 AA protéinogènes, tous en configuration L (sauf glycine = achirale)",
              "Carbone α asymétrique → pouvoir rotatoire",
              "Classification : apolaires, polaires non chargés, acides, basiques",
              "8 AA essentiels (non synthétisés par l'organisme)",
            ]
          },
          page2_concepts: {
            titre: "Concepts clés",
            concepts: [
              { terme: "Zwitterion", definition: "Forme dipolaire d'un AA au pH physiologique : le groupement amine est protoné (NH₃⁺) et le carboxyle est déprotoné (COO⁻)." },
              { terme: "Liaison peptidique", definition: "Liaison covalente plane et rigide entre le C=O d'un AA et le NH d'un autre. Formation par condensation (perte d'H₂O)." },
              { terme: "pKa", definition: "pH auquel la moitié des groupements est protonée et l'autre déprotonée. Chaque AA a au moins 2 pKa (α-COOH et α-NH₂)." },
              { terme: "Point isoélectrique (pI)", definition: "pH auquel la charge nette est nulle. Pour un AA sans chaîne R ionisable : pI = (pKa₁ + pKa₂) / 2." },
            ]
          },
          page3_schemas: {
            titre: "Schémas",
            schemas: [
              { id: "acide-amine", legende: "Structure générale d'un acide aminé et formation de la liaison peptidique" },
            ]
          },
          page4_formules: {
            titre: "Données clés",
            formules: [
              { label: "Point isoélectrique (AA simple)", formule: "pI = (pKa₁ + pKa₂) / 2", unite: "sans unité" },
              { label: "Henderson-Hasselbalch", formule: "pH = pKa + log([A⁻]/[AH])", unite: "sans unité" },
            ],
            donnees: [
              { label: "pKa α-COOH (moyen)", valeur: "~2,0" },
              { label: "pKa α-NH₂ (moyen)", valeur: "~9,5" },
              { label: "Nombre d'AA essentiels", valeur: "8 (adulte)" },
              { label: "AA le plus petit", valeur: "Glycine (Gly, G)" },
            ]
          },
          page5_resume: {
            titre: "Résumé",
            points: [
              "20 AA protéinogènes, classés par les propriétés de leur chaîne latérale R",
              "Au pH physiologique, les AA sont sous forme zwitterionique",
              "La liaison peptidique est plane, rigide et de nature partiellement double",
              "Le pI est le pH de charge nette nulle (important en électrophorèse)",
              "8 AA sont essentiels et doivent être apportés par l'alimentation",
            ],
            mnemo: "\"Très Lyrique, Le Vieux Méchant Phoque Traîne Isolé\" → Thr, Lys, Leu, Val, Met, Phe, Trp, Ile : les 8 AA essentiels !"
          }
        },
        qcm: [
          {
            question: "Combien d'acides aminés protéinogènes existe-t-il ?",
            options: ["10", "20", "22", "64"],
            correct: 1,
            difficulte: "facile",
            explication: "Il existe 20 acides aminés standards codés par le code génétique pour la synthèse des protéines."
          },
          {
            question: "Le point isoélectrique d'un AA correspond au pH où :",
            options: ["L'AA est totalement protoné", "L'AA a une charge nette nulle", "L'AA est dénaturé", "L'AA est sous forme anionique"],
            correct: 1,
            difficulte: "moyen",
            explication: "Au pI, les charges positives et négatives s'annulent. L'AA ne migre pas dans un champ électrique (électrophorèse)."
          },
          {
            question: "La liaison peptidique est :",
            options: ["Libre de rotation", "Plane et rigide", "Non covalente", "Ionique"],
            correct: 1,
            difficulte: "moyen",
            explication: "La liaison peptidique a un caractère partiellement double (résonance), ce qui la rend plane et rigide."
          },
          {
            question: "Quel AA est achiral (n'a pas de carbone α asymétrique) ?",
            options: ["Alanine", "Valine", "Glycine", "Leucine"],
            correct: 2,
            difficulte: "moyen",
            explication: "La glycine a un H comme chaîne latérale, rendant le Cα symétrique (4 substituants non tous différents)."
          },
          {
            question: "Lequel n'est PAS un acide aminé essentiel ?",
            options: ["Leucine", "Tryptophane", "Alanine", "Méthionine"],
            correct: 2,
            difficulte: "facile",
            explication: "L'alanine est un acide aminé non essentiel : elle est synthétisée par l'organisme par transamination du pyruvate."
          },
        ]
      },
      {
        id: "bch2", titre: "Les enzymes", emoji: "⚡", nouveau: true,
        flashcardsData: [
          { q: "Qu'est-ce qu'une enzyme ?", r: "Un catalyseur biologique protéique qui accélère les réactions chimiques sans être consommé." },
          { q: "Qu'est-ce que le site actif ?", r: "La région de l'enzyme qui fixe le substrat et catalyse la réaction. Il comprend le site de fixation et le site catalytique." },
          { q: "Que dit l'équation de Michaelis-Menten ?", r: "V = Vmax × [S] / (Km + [S]). Décrit la cinétique enzymatique en fonction de la concentration en substrat." },
          { q: "Que représente Km ?", r: "La constante de Michaelis : concentration en substrat pour laquelle V = Vmax/2. Reflète l'affinité enzyme-substrat (Km bas = forte affinité)." },
          { q: "Différence inhibiteur compétitif / non compétitif ?", r: "Compétitif : se fixe au site actif, augmente Km apparent, Vmax inchangé. Non compétitif : se fixe ailleurs, Vmax diminue, Km inchangé." },
        ],
        fiche: {
          page1_intro: {
            titre: "Introduction",
            texte: "Les enzymes sont des catalyseurs biologiques de nature protéique (sauf les ribozymes). Elles accélèrent les réactions biochimiques en abaissant l'énergie d'activation, sans modifier l'équilibre thermodynamique de la réaction. Elles sont spécifiques de substrat et de réaction.",
            points_cles: [
              "Catalyseurs protéiques (spécificité de substrat et de réaction)",
              "Abaissent l'énergie d'activation (Ea)",
              "Ne modifient pas l'équilibre thermodynamique",
              "Nomenclature : 6 classes (oxydoréductases, transférases, hydrolases, lyases, isomérases, ligases)",
            ]
          },
          page2_concepts: {
            titre: "Concepts clés",
            concepts: [
              { terme: "Modèle clé-serrure", definition: "Le substrat s'emboîte exactement dans le site actif de l'enzyme (modèle de Fischer). Rigide." },
              { terme: "Modèle de l'ajustement induit", definition: "Le site actif se déforme pour s'adapter au substrat (modèle de Koshland). Plus réaliste." },
              { terme: "Cinétique de Michaelis-Menten", definition: "Modèle décrivant la vitesse de réaction en fonction de [S] : courbe hyperbolique avec saturation." },
              { terme: "Allostérie", definition: "Régulation enzymatique par fixation d'un effecteur sur un site distinct du site actif. Cinétique sigmoïdale." },
            ]
          },
          page3_schemas: {
            titre: "Schémas",
            schemas: [
              { id: "michaelis-menten", legende: "Courbe de Michaelis-Menten : V en fonction de [S]" },
            ]
          },
          page4_formules: {
            titre: "Données clés",
            formules: [
              { label: "Équation de Michaelis-Menten", formule: "V = Vmax·[S] / (Km + [S])", unite: "mol/L/s" },
              { label: "Linéarisation de Lineweaver-Burk", formule: "1/V = (Km/Vmax)·(1/[S]) + 1/Vmax", unite: "" },
            ],
            donnees: [
              { label: "Quand [S] = Km", valeur: "V = Vmax / 2" },
              { label: "Quand [S] >> Km", valeur: "V ≈ Vmax" },
              { label: "Km bas", valeur: "Forte affinité" },
              { label: "Km élevé", valeur: "Faible affinité" },
            ]
          },
          page5_resume: {
            titre: "Résumé",
            points: [
              "Les enzymes sont des catalyseurs protéiques spécifiques",
              "Elles abaissent l'Ea sans changer l'équilibre thermodynamique",
              "La cinétique de Michaelis-Menten donne une courbe hyperbolique",
              "Km reflète l'affinité enzyme-substrat (Km bas = forte affinité)",
              "Inhibition compétitive (↑ Km app.) vs non-compétitive (↓ Vmax)",
            ],
            mnemo: "\"Km = Kapacité Moyenne\" → c'est la [S] pour atteindre la moitié de la Vmax !"
          }
        },
        qcm: [
          {
            question: "Les enzymes agissent en :",
            options: ["Augmentant l'énergie d'activation", "Abaissant l'énergie d'activation", "Modifiant l'équilibre de la réaction", "Augmentant la température"],
            correct: 1,
            difficulte: "facile",
            explication: "Les enzymes catalysent les réactions en abaissant l'énergie d'activation, sans modifier l'équilibre thermodynamique."
          },
          {
            question: "Quand [S] = Km, la vitesse de réaction vaut :",
            options: ["Vmax", "Vmax / 2", "2 × Vmax", "0"],
            correct: 1,
            difficulte: "moyen",
            explication: "Par définition, Km est la concentration en substrat pour laquelle la vitesse est égale à la moitié de Vmax."
          },
          {
            question: "Un inhibiteur compétitif :",
            options: ["Diminue Vmax", "Augmente Km apparent", "Se fixe sur un site allostérique", "Dénature l'enzyme"],
            correct: 1,
            difficulte: "moyen",
            explication: "L'inhibiteur compétitif entre en compétition avec le substrat pour le site actif. Il augmente le Km apparent mais n'affecte pas Vmax (réversible par excès de substrat)."
          },
          {
            question: "Le modèle de l'ajustement induit a été proposé par :",
            options: ["Michaelis", "Fischer", "Koshland", "Lineweaver"],
            correct: 2,
            difficulte: "moyen",
            explication: "Koshland a proposé le modèle de l'ajustement induit en 1958, où le site actif se déforme pour s'adapter au substrat."
          },
          {
            question: "La représentation de Lineweaver-Burk transforme la courbe de Michaelis-Menten en :",
            options: ["Courbe sigmoïdale", "Droite (1/V en fonction de 1/[S])", "Courbe exponentielle", "Histogramme"],
            correct: 1,
            difficulte: "difficile",
            explication: "La double inverse de Lineweaver-Burk (1/V vs 1/[S]) linéarise l'équation de Michaelis-Menten, permettant de déterminer graphiquement Km et Vmax."
          },
        ]
      },
    ]
  },
];
