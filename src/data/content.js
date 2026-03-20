// Généré par le pipeline Hermione — 20/03/2026
// Matières PASS/LAS : régénérées depuis Google Drive
// Matières Terminale : préservées (éditées manuellement)

export const MATIERES = [
  {
    "id": "physique",
    "emoji": "⚡",
    "nom": "Physique",
    "categorie": "anticipation",
    "niveau": "PASS/LAS",
    "color": "#6B2D2D",
    "cours": [
      {
        "id": "physique-ch1",
        "titre": "Rappels mathématiques et unités",
        "emoji": "📏",
        "nouveau": false,
        "flashcardsData": [
          {
            "q": "Que vaut le préfixe 'micro' (μ) ?",
            "r": "10⁻⁶"
          },
          {
            "q": "Combien de secondes dans une heure ?",
            "r": "3600 secondes"
          },
          {
            "q": "Comment convertir des Celsius en Kelvin ?",
            "r": "K = °C + 273"
          },
          {
            "q": "Que vaut 1 litre en m³ ?",
            "r": "1 litre = 10⁻³ m³"
          },
          {
            "q": "Règle pour multiplier des puissances de 10 ?",
            "r": "10ᵃ × 10ᵇ = 10ᵃ⁺ᵇ"
          },
          {
            "q": "Que vaut log(10ˣ) ?",
            "r": "x"
          },
          {
            "q": "Combien vaut 1 bar en Pascal ?",
            "r": "1 bar = 10⁵ Pa"
          },
          {
            "q": "Valeur numérique de log(2) ?",
            "r": "0,3"
          },
          {
            "q": "Que vaut le préfixe 'nano' (n) ?",
            "r": "10⁻⁹"
          },
          {
            "q": "Unité SI de l'énergie ?",
            "r": "Joule (J)"
          }
        ],
        "fiche": {
          "page1_intro": {
            "titre": "Introduction",
            "texte": "Les rappels mathématiques et les unités constituent les fondements indispensables pour toute étude scientifique, particulièrement en physique médicale. La maîtrise des préfixes du système international permet d'exprimer facilement les grandeurs rencontrées en médecine, des dimensions cellulaires (nanomètres) aux volumes corporels (litres). Les conversions d'unités sont essentielles pour passer d'une mesure à l'autre selon le contexte clinique. Enfin, les règles de calcul avec les puissances de 10 et les logarithmes simplifient grandement les calculs en sciences physiques appliquées à la santé.",
            "points_cles": [
              "Maîtrise des préfixes du système international (kilo, micro, nano...)",
              "Conversions entre unités SI et unités courantes",
              "Règles de calcul avec les puissances de 10",
              "Propriétés des logarithmes et valeurs usuelles"
            ]
          },
          "page2_concepts": {
            "titre": "Concepts clés",
            "concepts": [
              {
                "terme": "Système international (SI)",
                "definition": "Système d'unités de mesure internationalement reconnu, basé sur sept unités de base dont le mètre, le kilogramme et la seconde"
              },
              {
                "terme": "Préfixe multiplicateur",
                "definition": "Symbole placé devant une unité pour indiquer un multiple ou sous-multiple décimal (kilo = 10³, milli = 10⁻³)"
              },
              {
                "terme": "Puissance de 10",
                "definition": "Notation scientifique permettant d'écrire des nombres très grands ou très petits sous la forme 10ⁿ où n est l'exposant"
              },
              {
                "terme": "Logarithme décimal",
                "definition": "Fonction mathématique inverse de l'exponentiation en base 10, notée log, où log(10ˣ) = x"
              },
              {
                "terme": "Kelvin",
                "definition": "Unité SI de température thermodynamique, où 0 K correspond au zéro absolu (-273°C)"
              },
              {
                "terme": "Pascal",
                "definition": "Unité SI de pression équivalente à un Newton par mètre carré (N/m²)"
              },
              {
                "terme": "Joule",
                "definition": "Unité SI d'énergie équivalente au travail produit par une force d'un Newton sur un mètre"
              }
            ]
          },
          "page3_schemas": {
            "titre": "Schémas",
            "schemas": []
          },
          "page4_formules": {
            "titre": "Données clés",
            "formules": [
              {
                "label": "Conversion température",
                "formule": "K = °C + 273",
                "unite": "K"
              },
              {
                "label": "Multiplication puissances",
                "formule": "10ᵃ × 10ᵇ = 10ᵃ⁺ᵇ",
                "unite": "-"
              },
              {
                "label": "Division puissances",
                "formule": "10ᵃ / 10ᵇ = 10ᵃ⁻ᵇ",
                "unite": "-"
              },
              {
                "label": "Logarithme produit",
                "formule": "log(a×b) = log(a) + log(b)",
                "unite": "-"
              }
            ],
            "donnees": [
              {
                "label": "1 litre",
                "valeur": "10⁻³ m³"
              },
              {
                "label": "1 bar",
                "valeur": "10⁵ Pa"
              },
              {
                "label": "1 atm",
                "valeur": "1,013×10⁵ Pa"
              },
              {
                "label": "1 eV",
                "valeur": "1,6×10⁻¹⁹ J"
              },
              {
                "label": "log(2)",
                "valeur": "0,3"
              },
              {
                "label": "log(5)",
                "valeur": "0,7"
              }
            ]
          },
          "page5_resume": {
            "titre": "Résumé",
            "points": [
              "Les préfixes permettent d'exprimer facilement les multiples et sous-multiples des unités SI",
              "Les conversions d'unités sont essentielles : K = °C + 273, 1L = 10⁻³ m³, 1 bar = 10⁵ Pa",
              "Pour les puissances de 10 : multiplication = addition des exposants, division = soustraction",
              "Les logarithmes transforment multiplications en additions : log(a×b) = log(a) + log(b)",
              "Valeurs usuelles à retenir : log(2) = 0,3, log(3) = 0,5, log(5) = 0,7"
            ],
            "mnemo": "PUCK : Préfixes, Unités, Conversions, calculs avec K (Kelvin) - les 4 piliers des rappels"
          }
        },
        "qcm": [
          {
            "question": "Que vaut 1 micromètre (μm) ?",
            "options": [
              "10⁻³ m",
              "10⁻⁶ m",
              "10⁻⁹ m",
              "10⁻¹² m"
            ],
            "correct": 1,
            "difficulte": "facile",
            "explication": "Le préfixe 'micro' (μ) correspond à 10⁻⁶, donc 1 μm = 10⁻⁶ m"
          },
          {
            "question": "Combien vaut 25°C en Kelvin ?",
            "options": [
              "248 K",
              "298 K",
              "300 K",
              "273 K"
            ],
            "correct": 1,
            "difficulte": "facile",
            "explication": "K = °C + 273, donc 25°C = 25 + 273 = 298 K"
          },
          {
            "question": "Que vaut 10⁴ × 10⁻² ?",
            "options": [
              "10²",
              "10⁶",
              "10⁻²",
              "10⁸"
            ],
            "correct": 0,
            "difficulte": "facile",
            "explication": "10⁴ × 10⁻² = 10⁴⁺⁽⁻²⁾ = 10² selon la règle d'addition des exposants"
          },
          {
            "question": "Combien de litres représentent 2,5 m³ ?",
            "options": [
              "250 L",
              "2500 L",
              "25 L",
              "0,25 L"
            ],
            "correct": 1,
            "difficulte": "moyen",
            "explication": "1 L = 10⁻³ m³, donc 1 m³ = 1000 L. Par conséquent 2,5 m³ = 2,5 × 1000 = 2500 L"
          },
          {
            "question": "Que vaut log(100) ?",
            "options": [
              "1",
              "2",
              "10",
              "100"
            ],
            "correct": 1,
            "difficulte": "moyen",
            "explication": "100 = 10², donc log(100) = log(10²) = 2"
          },
          {
            "question": "Si log(a) = 0,3 et log(b) = 0,7, que vaut log(a×b) ?",
            "options": [
              "0,21",
              "1",
              "0,4",
              "2,1"
            ],
            "correct": 1,
            "difficulte": "moyen",
            "explication": "log(a×b) = log(a) + log(b) = 0,3 + 0,7 = 1"
          },
          {
            "question": "Quelle est la pression atmosphérique normale en Pascal ?",
            "options": [
              "10³ Pa",
              "10⁴ Pa",
              "1,013×10⁵ Pa",
              "10⁶ Pa"
            ],
            "correct": 2,
            "difficulte": "difficile",
            "explication": "La pression atmosphérique normale est de 1 atm = 1,013×10⁵ Pa"
          }
        ]
      },
      {
        "id": "physique-ch2",
        "titre": "Atome et nuage électronique",
        "emoji": "⚛️",
        "nouveau": true,
        "flashcardsData": [
          {
            "q": "Quelle est la formule de l'énergie d'un niveau électronique selon Bohr ?",
            "r": "En = -b.Z²/n² où b = 13,6 eV, Z = numéro atomique, n = nombre quantique principal"
          },
          {
            "q": "Qu'est-ce que l'énergie de liaison Wn ?",
            "r": "L'énergie qu'il faut fournir pour arracher un électron de sa couche, elle est positive et vaut Wn = b.Z²/n²"
          },
          {
            "q": "Que se passe-t-il lors de la fluorescence ?",
            "r": "Un électron comble un trou électronique en émettant un photon X, avec Ephoton = |Winitiale - Wfinale|"
          },
          {
            "q": "Qu'est-ce que l'effet Auger ?",
            "r": "L'énergie de transition est transmise à un électron périphérique qui est éjecté avec une énergie cinétique"
          },
          {
            "q": "Quelle est la relation de De Broglie ?",
            "r": "λ = h/(m.v) où λ est la longueur d'onde, h la constante de Planck, m la masse et v la vitesse"
          },
          {
            "q": "Qu'est-ce que la série de Lyman ?",
            "r": "Toutes les transitions électroniques possibles des couches externes vers la couche K de l'hydrogène"
          },
          {
            "q": "Quelle est la particularité de la série de Balmer ?",
            "r": "Elle correspond aux transitions vers la couche L et émet dans le spectre visible (400-800 nm)"
          },
          {
            "q": "Que révèle l'expérience de Rutherford ?",
            "r": "La matière est majoritairement vide avec un noyau central dense et chargé positivement"
          },
          {
            "q": "Comment calculer l'énergie d'un photon ?",
            "r": "Ephoton = h.ν = h.c/λ ou Ephoton = 1240/λ (avec E en eV et λ en nm)"
          },
          {
            "q": "Quelle est l'énergie de liaison de la couche K de l'hydrogène ?",
            "r": "13,6 eV, qui définit le seuil des rayonnements ionisants"
          }
        ],
        "fiche": {
          "page1_intro": {
            "titre": "Introduction",
            "texte": "L'étude de la structure atomique a révolutionné notre compréhension de la matière. Le modèle quantique décrit l'atome comme un noyau central dense entouré d'électrons évoluant sur des couches énergétiques quantifiées. Les transitions électroniques entre ces niveaux d'énergie sont à l'origine de phénomènes fondamentaux comme l'émission de rayons X ou la fluorescence. Ces concepts sont essentiels en imagerie médicale et en physique des rayonnements, particulièrement pour comprendre les interactions matière-rayonnement utilisées en diagnostic.",
            "points_cles": [
              "Niveaux d'énergie quantifiés selon le modèle de Bohr",
              "Transitions électroniques et émission de photons",
              "Phénomènes de fluorescence et effet Auger",
              "Dualité onde-corpuscule selon De Broglie"
            ]
          },
          "page2_concepts": {
            "titre": "Concepts clés",
            "concepts": [
              {
                "terme": "Nombre quantique principal (n)",
                "definition": "Nombre entier de 1 à 7 caractérisant les couches électroniques K, L, M, N, O, P, Q et déterminant le niveau d'énergie"
              },
              {
                "terme": "Énergie de liaison",
                "definition": "Énergie positive qu'il faut fournir pour arracher un électron de sa couche, proportionnelle à Z²/n²"
              },
              {
                "terme": "Ionisation",
                "definition": "Processus d'arrachement d'un électron de l'atome créant un ion positif et un électron libre"
              },
              {
                "terme": "Fluorescence",
                "definition": "Émission d'un photon X lors du comblement d'un trou électronique par un électron de couche supérieure"
              },
              {
                "terme": "Effet Auger",
                "definition": "Transfert de l'énergie de transition à un électron périphérique qui est alors éjecté de l'atome"
              },
              {
                "terme": "Série de Balmer",
                "definition": "Ensemble des transitions électroniques vers la couche L émettant dans le spectre visible"
              },
              {
                "terme": "Trou électronique",
                "definition": "Place vacante sur une orbite électronique créée par excitation ou ionisation"
              },
              {
                "terme": "État fondamental",
                "definition": "Configuration électronique de plus basse énergie d'un atome, correspondant au niveau K"
              }
            ]
          },
          "page3_schemas": {
            "titre": "Schémas",
            "schemas": []
          },
          "page4_formules": {
            "titre": "Données clés",
            "formules": [
              {
                "label": "Énergie niveau électronique",
                "formule": "En = -b.Z²/n²",
                "unite": "eV"
              },
              {
                "label": "Énergie de liaison",
                "formule": "Wn = b.Z²/n²",
                "unite": "eV"
              },
              {
                "label": "Énergie photon",
                "formule": "E = h.ν = h.c/λ = 1240/λ",
                "unite": "eV"
              },
              {
                "label": "Longueur d'onde De Broglie",
                "formule": "λ = h/(m.v)",
                "unite": "m"
              },
              {
                "label": "Énergie cinétique Auger",
                "formule": "Ecin = |Winitiale - Wfinale| - Wcouche",
                "unite": "eV"
              }
            ],
            "donnees": [
              {
                "label": "Constante de Planck",
                "valeur": "6,626 × 10⁻³⁴ J.s"
              },
              {
                "label": "Vitesse de la lumière",
                "valeur": "3 × 10⁸ m/s"
              },
              {
                "label": "Constante b (hydrogène)",
                "valeur": "13,6 eV"
              },
              {
                "label": "Électronvolt",
                "valeur": "1,602 × 10⁻¹⁹ J"
              }
            ]
          },
          "page5_resume": {
            "titre": "Résumé",
            "points": [
              "Le modèle de Bohr décrit des niveaux d'énergie quantifiés En = -b.Z²/n² avec des couches K, L, M...",
              "L'énergie de liaison Wn = b.Z²/n² représente l'énergie nécessaire pour arracher un électron",
              "Les transitions électroniques libèrent de l'énergie sous forme de fluorescence (photon X) ou d'effet Auger (électron éjecté)",
              "La série de Balmer correspond aux transitions vers la couche L et émet dans le visible",
              "Le modèle de De Broglie introduit la dualité onde-corpuscule avec λ = h/(m.v)"
            ],
            "mnemo": "BOHR : Bohr Organise Rationnellement les Rayonnements (niveaux quantifiés, transitions, émissions)"
          }
        },
        "qcm": [
          {
            "question": "Quelle est l'énergie de liaison de la couche K du carbone (Z=6) ?",
            "options": [
              "13,6 eV",
              "284 eV",
              "490 eV",
              "816 eV"
            ],
            "correct": 1,
            "difficulte": "moyen",
            "explication": "WK = b.Z²/n² = 13,6 × 6²/1² = 13,6 × 36 = 490 eV. La valeur 284 eV correspond à une donnée du cours."
          },
          {
            "question": "Lors d'une transition de la couche L vers la couche K, que se passe-t-il ?",
            "options": [
              "Absorption d'un photon",
              "Émission d'un photon X",
              "Éjection d'un électron",
              "Ionisation de l'atome"
            ],
            "correct": 1,
            "difficulte": "facile",
            "explication": "Une transition d'une couche externe vers une couche interne libère de l'énergie sous forme de photon X (fluorescence)."
          },
          {
            "question": "Dans l'effet Auger, que devient l'énergie de transition ?",
            "options": [
              "Elle est émise sous forme de photon",
              "Elle est transmise à un électron périphérique",
              "Elle est stockée dans le noyau",
              "Elle disparaît"
            ],
            "correct": 1,
            "difficulte": "moyen",
            "explication": "Dans l'effet Auger, l'énergie de transition est transférée à un électron plus périphérique qui est alors éjecté avec une énergie cinétique."
          },
          {
            "question": "Quelle série de raies spectrales de l'hydrogène émet dans le visible ?",
            "options": [
              "Série de Lyman",
              "Série de Balmer",
              "Série de Paschen",
              "Série de Brackett"
            ],
            "correct": 1,
            "difficulte": "facile",
            "explication": "La série de Balmer correspond aux transitions vers la couche L et est la seule à émettre dans le spectre visible (400-800 nm)."
          },
          {
            "question": "Selon De Broglie, la longueur d'onde d'une particule dépend de :",
            "options": [
              "Sa charge uniquement",
              "Sa masse et sa vitesse",
              "Son énergie de liaison",
              "Son nombre quantique"
            ],
            "correct": 1,
            "difficulte": "moyen",
            "explication": "La relation de De Broglie λ = h/(m.v) montre que la longueur d'onde dépend inversement de la quantité de mouvement (m.v)."
          },
          {
            "question": "Pour ioniser un atome d'hydrogène dans l'état fondamental, il faut au minimum :",
            "options": [
              "3,4 eV",
              "13,6 eV",
              "27,2 eV",
              "54,4 eV"
            ],
            "correct": 1,
            "difficulte": "facile",
            "explication": "L'énergie de liaison de la couche K de l'hydrogène est de 13,6 eV, c'est l'énergie minimale pour l'ioniser."
          },
          {
            "question": "Dans le modèle de Bohr, l'énergie des niveaux électroniques est :",
            "options": [
              "Positive et croît avec n",
              "Négative et croît avec n",
              "Positive et décroît avec n",
              "Négative et décroît avec n"
            ],
            "correct": 1,
            "difficulte": "difficile",
            "explication": "Les niveaux d'énergie En = -b.Z²/n² sont négatifs par convention et croissent vers zéro quand n augmente (deviennent moins négatifs)."
          },
          {
            "question": "L'expérience de Rutherford a permis de découvrir :",
            "options": [
              "Les électrons",
              "Le noyau atomique",
              "Les neutrons",
              "Les photons"
            ],
            "correct": 1,
            "difficulte": "facile",
            "explication": "Le bombardement de particules α a révélé l'existence d'un noyau central dense et chargé positivement, certaines particules étant renvoyées en arrière."
          }
        ]
      },
      {
        "id": "physique-ch3",
        "titre": "Le Noyau Atomique",
        "emoji": "⚛️",
        "nouveau": true,
        "flashcardsData": [
          {
            "q": "Quelle est la relation masse-énergie d'Einstein ?",
            "r": "E = m₀.c² où E est l'énergie (J ou eV), m₀ la masse au repos (kg) et c la célérité de la lumière"
          },
          {
            "q": "Combien vaut 1 u.m.a. en kg ?",
            "r": "1 u.m.a. = 1,660539 × 10⁻²⁷ kg = 931,494 MeV/c²"
          },
          {
            "q": "Qu'est-ce que le défaut de masse ?",
            "r": "C'est la différence entre la masse des nucléons séparés et la masse du noyau constitué : Δm = Z.Mp + N.Mn - Mnoyau"
          },
          {
            "q": "Comment calcule-t-on l'énergie de liaison ?",
            "r": "E = Δm.c² où Δm est le défaut de masse"
          },
          {
            "q": "Qu'indique la courbe d'Aston ?",
            "r": "Elle définit la stabilité d'un noyau : plus B/A est grand, plus le noyau est stable. Les plus stables ont B/A entre 8 et 9 MeV"
          },
          {
            "q": "Quelle est la densité d'un noyau ?",
            "r": "2 × 10¹⁴ g.cm⁻³ = 200 millions de tonnes/cm³"
          },
          {
            "q": "Qu'est-ce que la fission nucléaire ?",
            "r": "Cassure d'un noyau lourd en noyaux plus légers, libérant de l'énergie et des neutrons"
          },
          {
            "q": "Quelles sont les conditions nécessaires à la fusion ?",
            "r": "Température très élevée (>15 × 10⁶°C) pour vaincre la répulsion coulombienne entre noyaux"
          },
          {
            "q": "Quelle masse représente un nucléon ?",
            "r": "Environ 1,67 × 10⁻²⁷ kg, soit environ 2000 fois la masse d'un électron"
          },
          {
            "q": "Combien d'énergie libère 1g du mélange deutérium-tritium ?",
            "r": "Équivalent à 9 tonnes de pétrole"
          }
        ],
        "fiche": {
          "page1_intro": {
            "titre": "Introduction",
            "texte": "Le noyau atomique concentre 99,97% de la masse de l'atome dans un volume infime. Sa densité extraordinaire (200 millions de tonnes/cm³) et sa petite taille font que la matière est constituée à 99,99% de vide. Les énergies mises en jeu au niveau nucléaire sont considérables, expliquées par la relation d'Einstein E=mc². Cette concentration d'énergie permet des applications comme les réacteurs nucléaires et potentiellement la fusion contrôlée. La compréhension du noyau nécessite l'étude du défaut de masse, concept clé qui explique la stabilité nucléaire et les réactions de fission et fusion.",
            "points_cles": [
              "Le noyau concentre 99,97% de la masse atomique",
              "Densité nucléaire : 2×10¹⁴ g/cm³",
              "Relation masse-énergie : E = mc²",
              "Applications : fission et fusion nucléaire"
            ]
          },
          "page2_concepts": {
            "titre": "Concepts clés",
            "concepts": [
              {
                "terme": "Unité de masse atomique (u.m.a.)",
                "definition": "Unité définie telle que l'atome de carbone-12 ait une masse de 12 u.m.a. exactement. 1 u.m.a. = 1,660539×10⁻²⁷ kg = 931,494 MeV/c²"
              },
              {
                "terme": "Défaut de masse",
                "definition": "Différence entre la masse des nucléons séparés et celle du noyau constitué : Δm = Z.Mp + N.Mn - Mnoyau. Cette masse 'manquante' est convertie en énergie de liaison"
              },
              {
                "terme": "Énergie de liaison",
                "definition": "Énergie nécessaire pour séparer tous les nucléons d'un noyau, calculée par E = Δm.c². Plus elle est élevée, plus le noyau est stable"
              },
              {
                "terme": "Énergie de liaison par nucléon (B/A)",
                "definition": "Rapport entre l'énergie de liaison totale et le nombre de nucléons. Indicateur de stabilité nucléaire, optimale entre 8-9 MeV"
              },
              {
                "terme": "Courbe d'Aston",
                "definition": "Graphique représentant B/A en fonction du nombre de masse A. Elle montre que les noyaux de masse intermédiaire sont les plus stables"
              },
              {
                "terme": "Fission nucléaire",
                "definition": "Cassure d'un noyau lourd en fragments plus légers, libérant de l'énergie et des neutrons. Base du fonctionnement des réacteurs nucléaires"
              },
              {
                "terme": "Fusion nucléaire",
                "definition": "Union de noyaux légers pour former un noyau plus lourd, libérant une grande quantité d'énergie. Nécessite des températures très élevées"
              },
              {
                "terme": "Barrière coulombienne",
                "definition": "Force de répulsion électrostatique entre noyaux chargés positivement qu'il faut vaincre pour amorcer une réaction de fusion"
              }
            ]
          },
          "page3_schemas": {
            "titre": "Schémas",
            "schemas": []
          },
          "page4_formules": {
            "titre": "Données clés",
            "formules": [
              {
                "label": "Relation masse-énergie d'Einstein",
                "formule": "E = m₀.c²",
                "unite": "J ou eV"
              },
              {
                "label": "Défaut de masse",
                "formule": "Δm = Z.Mp + N.Mn - Mnoyau",
                "unite": "kg ou u.m.a."
              },
              {
                "label": "Énergie de liaison",
                "formule": "E = Δm.c²",
                "unite": "J ou MeV"
              },
              {
                "label": "Énergie de liaison par nucléon",
                "formule": "B/A = E/A",
                "unite": "MeV"
              }
            ],
            "donnees": [
              {
                "label": "Masse d'un nucléon",
                "valeur": "1,67 × 10⁻²⁷ kg"
              },
              {
                "label": "Masse d'un électron",
                "valeur": "9,1 × 10⁻³¹ kg"
              },
              {
                "label": "Densité des noyaux",
                "valeur": "2 × 10¹⁴ g/cm³"
              },
              {
                "label": "1 u.m.a.",
                "valeur": "1,660539 × 10⁻²⁷ kg = 931,494 MeV/c²"
              },
              {
                "label": "Masse du proton",
                "valeur": "1,00728 u.m.a."
              },
              {
                "label": "Masse du neutron",
                "valeur": "1,00866 u.m.a."
              },
              {
                "label": "Nombre d'Avogadro",
                "valeur": "6,022 × 10²³ mol⁻¹"
              }
            ]
          },
          "page5_resume": {
            "titre": "Résumé",
            "points": [
              "Le noyau concentre 99,97% de la masse atomique dans un volume infime avec une densité de 2×10¹⁴ g/cm³",
              "La relation d'Einstein E=mc² permet de convertir la masse en énergie, expliquant les énergies considérables du domaine nucléaire",
              "Le défaut de masse (Δm = masse des nucléons séparés - masse du noyau) est converti en énergie de liaison par E = Δm.c²",
              "La courbe d'Aston montre que les noyaux les plus stables ont une énergie de liaison par nucléon (B/A) entre 8-9 MeV",
              "La fission casse les noyaux lourds pour libérer de l'énergie (réacteurs), la fusion unit les noyaux légers (étoiles, projet ITER)"
            ],
            "mnemo": "DEFAC : Densité énorme, Einstein E=mc², défaut de masse → Force de cohésion, Aston montre la stabilité, Cassure/fusion libèrent l'énergie"
          }
        },
        "qcm": [
          {
            "question": "Quelle proportion de la masse d'un atome est concentrée dans le noyau ?",
            "options": [
              "95%",
              "99,97%",
              "99,99%",
              "90%"
            ],
            "correct": 1,
            "difficulte": "facile",
            "explication": "Le noyau concentre 99,97% de la masse de l'atome car les nucléons sont environ 2000 fois plus lourds que les électrons."
          },
          {
            "question": "Combien vaut 1 u.m.a. en MeV/c² ?",
            "options": [
              "931,494 MeV/c²",
              "938,2 MeV/c²",
              "939,6 MeV/c²",
              "940,1 MeV/c²"
            ],
            "correct": 0,
            "difficulte": "moyen",
            "explication": "Par définition, 1 u.m.a. = 931,494 MeV/c². Cette valeur est fondamentale pour les calculs d'énergie de liaison."
          },
          {
            "question": "Pour l'uranium 235, si le défaut de masse est 1,91482 u.m.a., quelle est son énergie de liaison ?",
            "options": [
              "1500 MeV",
              "1786 MeV",
              "1900 MeV",
              "2000 MeV"
            ],
            "correct": 1,
            "difficulte": "moyen",
            "explication": "E = Δm × 931,494 = 1,91482 × 931,494 ≈ 1786 MeV. C'est l'énergie nécessaire pour séparer tous les nucléons."
          },
          {
            "question": "D'après la courbe d'Aston, quels noyaux sont les plus stables ?",
            "options": [
              "Ceux avec B/A entre 6-7 MeV",
              "Ceux avec B/A entre 8-9 MeV",
              "Ceux avec B/A > 10 MeV",
              "Les noyaux très lourds"
            ],
            "correct": 1,
            "difficulte": "facile",
            "explication": "Les noyaux les plus stables ont une énergie de liaison par nucléon (B/A) comprise entre 8 et 9 MeV, correspondant aux éléments de masse intermédiaire."
          },
          {
            "question": "Quelle température minimale est nécessaire pour amorcer la fusion nucléaire ?",
            "options": [
              "1 × 10⁶°C",
              "15 × 10⁶°C",
              "100 × 10⁶°C",
              "1000°C"
            ],
            "correct": 1,
            "difficulte": "moyen",
            "explication": "Il faut plus de 15 × 10⁶°C pour vaincre la barrière coulombienne et permettre aux noyaux de se rapprocher suffisamment pour fusionner."
          },
          {
            "question": "Dans la réaction de fusion D + T → He + n, combien d'énergie est libérée ?",
            "options": [
              "15,5 MeV",
              "18,5 MeV",
              "20,2 MeV",
              "25,1 MeV"
            ],
            "correct": 1,
            "difficulte": "difficile",
            "explication": "Le calcul donne Δm = 0,0199 u.m.a., soit E = 0,0199 × 931,494 = 18,5 MeV libérés par cette réaction de fusion."
          },
          {
            "question": "Pourquoi la matière est-elle constituée à 99,99% de vide ?",
            "options": [
              "Les électrons sont très petits",
              "Le noyau est très petit par rapport à l'atome",
              "Les neutrons n'ont pas de charge",
              "La gravité est faible"
            ],
            "correct": 1,
            "difficulte": "facile",
            "explication": "Le noyau est extrêmement petit comparé à la taille de l'atome (comme une mouche au milieu d'un terrain de football), créant essentiellement du vide."
          },
          {
            "question": "Que libère principalement la fission de l'uranium 235 ?",
            "options": [
              "Seulement de la chaleur",
              "Des neutrons et de l'énergie",
              "Des électrons",
              "Des protons"
            ],
            "correct": 1,
            "difficulte": "moyen",
            "explication": "La fission de U-235 libère des fragments de fission, des neutrons (qui entretiennent la réaction) et une grande quantité d'énergie sous forme de chaleur et radiations."
          }
        ]
      },
      {
        "id": "physique-ch4",
        "titre": "Désintégrations radioactives",
        "emoji": "⚛️",
        "nouveau": true,
        "flashcardsData": [
          {
            "q": "Que représente la vallée de stabilité dans un diagramme de stabilité ?",
            "r": "La zone des noyaux stables qui ne se transforment pas spontanément. Pour les éléments légers N ≈ Z, pour les lourds N ≈ 1,5Z - 10"
          },
          {
            "q": "Quelle est la différence entre un noyau excité et un noyau métastable ?",
            "r": "Noyau excité (X*) : durée de vie < 10⁻¹² s. Noyau métastable (Xᵐ) : durée de vie > 10⁻¹² s"
          },
          {
            "q": "Que se passe-t-il lors d'une émission β⁻ ?",
            "r": "Un neutron du noyau se transforme en proton : n → p + e⁻ + ν̄. Le nombre de masse A reste constant, Z augmente de 1"
          },
          {
            "q": "Que se passe-t-il lors d'une émission β⁺ ?",
            "r": "Un proton du noyau se transforme en neutron : p → n + e⁺ + ν. Le nombre de masse A reste constant, Z diminue de 1"
          },
          {
            "q": "Qu'est-ce qu'un électron de conversion interne ?",
            "r": "Un électron éjecté du cortège électronique lorsque l'énergie de désexcitation du noyau est transmise à cet électron au lieu d'émettre un photon γ"
          },
          {
            "q": "Quelle est l'énergie d'un photon γ ?",
            "r": "Eγ = |Ei - Ef| = h.ν, où h est la constante de Planck et ν la fréquence"
          },
          {
            "q": "Que devient un positon dans la matière ?",
            "r": "Il perd son énergie cinétique par chocs puis s'annihile avec un électron, produisant 2 photons de 511 keV à 180°"
          },
          {
            "q": "Quelles sont les lois de conservation dans les transformations radioactives ?",
            "r": "Conservation du nombre de nucléons et conservation de la charge électrique"
          },
          {
            "q": "Dans quelle zone se trouvent les noyaux excédentaires en neutrons ?",
            "r": "Zone 1 du diagramme de stabilité. Ces noyaux subissent une émission β⁻"
          },
          {
            "q": "Quelle est la condition énergétique pour qu'une transformation radioactive ait lieu ?",
            "r": "L'énergie de masse du noyau initial doit être supérieure à la somme des énergies de masse des produits"
          }
        ],
        "fiche": {
          "page1_intro": {
            "titre": "Introduction",
            "texte": "La radioactivité est un phénomène naturel par lequel des noyaux instables se transforment spontanément pour atteindre un état plus stable. Cette transformation s'accompagne de l'émission de particules ou de rayonnements. Les noyaux stables se situent dans la vallée de stabilité d'un diagramme N vs Z, tandis que les noyaux radioactifs sont répartis dans différentes zones selon leur excès de neutrons ou de protons. Trois types principaux de transformations existent : les transformations isomériques (même élément), isobariques (même nombre de masse) et l'émission alpha. Chaque transformation obéit aux lois de conservation de la charge et du nombre de nucléons, et nécessite un bilan énergétique favorable.",
            "points_cles": [
              "Les noyaux radioactifs se transforment spontanément vers un état plus stable",
              "La vallée de stabilité définit les noyaux stables (N ≈ Z pour légers, N ≈ 1,5Z-10 pour lourds)",
              "Trois types de transformations : isomériques, isobariques et émission α",
              "Conservation du nombre de nucléons et de la charge électrique"
            ]
          },
          "page2_concepts": {
            "titre": "Concepts clés",
            "concepts": [
              {
                "terme": "Radionucléide",
                "definition": "Noyau radioactif instable qui se transforme spontanément en émettant des rayonnements ou des particules"
              },
              {
                "terme": "Vallée de stabilité",
                "definition": "Zone du diagramme N vs Z contenant les noyaux stables. Relation N ≈ Z (légers) ou N ≈ 1,5Z-10 (lourds)"
              },
              {
                "terme": "Transformation isométrique",
                "definition": "Transformation où le noyau garde le même A et Z, passant d'un état excité à un état fondamental"
              },
              {
                "terme": "Transformation isobarique",
                "definition": "Transformation où le nombre de masse A reste constant mais Z change (émissions β⁻ et β⁺)"
              },
              {
                "terme": "Émission β⁻",
                "definition": "Transformation d'un neutron en proton : n → p + e⁻ + ν̄. Z augmente de 1, A constant"
              },
              {
                "terme": "Émission β⁺",
                "definition": "Transformation d'un proton en neutron : p → n + e⁺ + ν. Z diminue de 1, A constant"
              },
              {
                "terme": "Conversion interne",
                "definition": "Transmission de l'énergie de désexcitation nucléaire à un électron du cortège électronique"
              },
              {
                "terme": "Annihilation",
                "definition": "Réaction entre un positon et un électron produisant deux photons de 511 keV émis à 180°"
              }
            ]
          },
          "page3_schemas": {
            "titre": "Schémas",
            "schemas": []
          },
          "page4_formules": {
            "titre": "Données clés",
            "formules": [
              {
                "label": "Énergie photon γ",
                "formule": "Eγ = |Ei - Ef| = h.ν",
                "unite": "eV"
              },
              {
                "label": "Énergie conversion interne",
                "formule": "Ec = (E* - E) - Wi",
                "unite": "eV"
              },
              {
                "label": "Condition émission β⁻",
                "formule": "[Mat(X) - Mat(Y)].c² > 0",
                "unite": "eV"
              },
              {
                "label": "Condition émission β⁺",
                "formule": "[Mat(X) - Mat(Y) - 2me].c² > 0",
                "unite": "eV"
              }
            ],
            "donnees": [
              {
                "label": "Constante de Planck",
                "valeur": "6,62 × 10⁻³⁴ J.s"
              },
              {
                "label": "Masse électron",
                "valeur": "0,511 MeV/c²"
              },
              {
                "label": "Durée de vie états excités",
                "valeur": "< 10⁻¹² s"
              },
              {
                "label": "Énergie photons annihilation",
                "valeur": "511 keV"
              }
            ]
          },
          "page5_resume": {
            "titre": "Résumé",
            "points": [
              "Les noyaux instables subissent des transformations spontanées pour rejoindre la vallée de stabilité",
              "Transformations isomériques : émission γ ou conversion interne, même noyau mais état énergétique différent",
              "Émission β⁻ : neutron → proton + électron + antineutrino (zone excédentaire en neutrons)",
              "Émission β⁺ : proton → neutron + positon + neutrino (zone excédentaire en protons)",
              "Conservation du nombre de nucléons et de la charge, condition énergétique obligatoire"
            ],
            "mnemo": "VITAL : Vallée de stabilité, Isomériques (γ), Transformations β⁻/β⁺, Alpha, Lois de conservation"
          }
        },
        "qcm": [
          {
            "question": "Dans la vallée de stabilité, quelle relation lie N et Z pour les éléments lourds ?",
            "options": [
              "N ≈ Z",
              "N ≈ 1,5Z - 10",
              "N ≈ 2Z",
              "N ≈ Z/2"
            ],
            "correct": 1,
            "difficulte": "facile",
            "explication": "Pour les éléments lourds, la relation dans la vallée de stabilité est N ≈ 1,5Z - 10, tandis que pour les éléments légers c'est N ≈ Z."
          },
          {
            "question": "Lors d'une émission β⁻, que devient le noyau fils par rapport au noyau père ?",
            "options": [
              "Z diminue de 1, A constant",
              "Z augmente de 1, A constant",
              "Z constant, A diminue de 1",
              "Z et A diminuent de 1"
            ],
            "correct": 1,
            "difficulte": "facile",
            "explication": "L'émission β⁻ correspond à n → p + e⁻ + ν̄, donc un neutron devient un proton : Z augmente de 1 et A reste constant (transformation isobarique)."
          },
          {
            "question": "Quelle est l'énergie de chaque photon produit lors de l'annihilation positon-électron ?",
            "options": [
              "256 keV",
              "511 keV",
              "1022 keV",
              "1533 keV"
            ],
            "correct": 1,
            "difficulte": "moyen",
            "explication": "L'annihilation d'un positon avec un électron produit deux photons de 511 keV chacun, émis à 180° l'un de l'autre."
          },
          {
            "question": "Quelle est la condition nécessaire pour qu'une émission β⁺ soit possible ?",
            "options": [
              "[Mat(X) - Mat(Y)].c² > 0",
              "[Mat(X) - Mat(Y) - me].c² > 0",
              "[Mat(X) - Mat(Y) - 2me].c² > 0",
              "[Mat(X) - Mat(Y) + me].c² > 0"
            ],
            "correct": 2,
            "difficulte": "difficile",
            "explication": "Pour l'émission β⁺, il faut tenir compte de la création d'un positon ET de l'ajout d'un électron au cortège, d'où la condition [Mat(X) - Mat(Y) - 2me].c² > 0."
          },
          {
            "question": "Dans une transformation isométrique par émission γ, que se passe-t-il ?",
            "options": [
              "Z change, A constant",
              "A change, Z constant",
              "A et Z constants, état énergétique change",
              "A et Z changent"
            ],
            "correct": 2,
            "difficulte": "moyen",
            "explication": "Dans une transformation isométrique, le noyau garde le même A et Z mais passe d'un état excité à un état fondamental en émettant un photon γ."
          },
          {
            "question": "Quelle particule accompagne toujours l'émission β⁻ ?",
            "options": [
              "Un neutrino",
              "Un antineutrino",
              "Un photon γ",
              "Un positon"
            ],
            "correct": 1,
            "difficulte": "facile",
            "explication": "L'émission β⁻ s'écrit : n → p + e⁻ + ν̄, elle est toujours accompagnée d'un antineutrino pour respecter les lois de conservation."
          },
          {
            "question": "Que signifie la notation X*₂ᴬ pour un noyau ?",
            "options": [
              "Noyau stable",
              "Noyau dans un état excité",
              "Noyau métastable",
              "Noyau fils"
            ],
            "correct": 1,
            "difficulte": "facile",
            "explication": "La notation X* indique un noyau dans un état excité avec une durée de vie < 10⁻¹² s, par opposition à Xᵐ pour les états métastables."
          },
          {
            "question": "Pourquoi le spectre énergétique des particules β est-il continu ?",
            "options": [
              "Les particules perdent de l'énergie par collision",
              "L'énergie est partagée aléatoirement avec le neutrino/antineutrino",
              "Le noyau a plusieurs niveaux d'énergie",
              "Les particules β ont des masses différentes"
            ],
            "correct": 1,
            "difficulte": "difficile",
            "explication": "L'énergie libérée Q = Ec(β) + Ec(ν) est répartie aléatoirement entre la particule β et le neutrino/antineutrino, créant un spectre continu de 0 à Emax."
          }
        ]
      },
      {
        "id": "physique-ch5",
        "titre": "Décroissance radioactive",
        "emoji": "☢️",
        "nouveau": true,
        "flashcardsData": [
          {
            "q": "Qu'est-ce que la constante radioactive λ ?",
            "r": "Probabilité de désintégration d'un noyau par unité de temps, de dimension temps⁻¹"
          },
          {
            "q": "Quelle est l'équation différentielle de la décroissance radioactive ?",
            "r": "dN = -λN dt, où N est le nombre de noyaux et λ la constante radioactive"
          },
          {
            "q": "Comment s'exprime le nombre de noyaux N(t) en fonction du temps ?",
            "r": "N(t) = N₀ e^(-λt) où N₀ est le nombre initial de noyaux"
          },
          {
            "q": "Qu'est-ce que la période T d'un radioélément ?",
            "r": "Temps nécessaire pour que la moitié des noyaux se désintègrent, aussi appelée demi-vie"
          },
          {
            "q": "Quelle est la relation entre période T et constante radioactive λ ?",
            "r": "T = ln(2)/λ"
          },
          {
            "q": "Comment définit-on l'activité A(t) d'un radioélément ?",
            "r": "Nombre moyen de noyaux se désintégrant par unité de temps : A(t) = λN(t)"
          },
          {
            "q": "Quelle est l'unité SI de l'activité radioactive ?",
            "r": "Le Becquerel (Bq), où 1 Bq = 1 désintégration/seconde"
          },
          {
            "q": "Qu'est-ce que la vie moyenne τ d'un radioélément ?",
            "r": "τ = 1/λ, temps caractéristique de décroissance exponentielle"
          },
          {
            "q": "Comment l'activité évolue-t-elle avec le temps ?",
            "r": "A(t) = A₀ e^(-λt) = A₀/2^(t/T), décroissance exponentielle"
          },
          {
            "q": "Au bout de 10 périodes, par combien le nombre de noyaux est-il divisé ?",
            "r": "Par 2¹⁰ ≈ 1000, il reste environ 1/1000 des noyaux initiaux"
          }
        ],
        "fiche": {
          "page1_intro": {
            "titre": "Introduction",
            "texte": "La décroissance radioactive est un phénomène statistique par lequel des noyaux atomiques instables se transforment spontanément en émettant des particules. Ce processus suit une loi exponentielle caractérisée par une constante radioactive λ, qui représente la probabilité de désintégration par unité de temps. La décroissance radioactive obéit à des lois mathématiques précises permettant de prédire l'évolution du nombre de noyaux et de l'activité d'un échantillon radioactif au cours du temps. Cette connaissance est fondamentale en médecine nucléaire pour les applications diagnostiques et thérapeutiques.",
            "points_cles": [
              "Processus statistique gouverné par la constante radioactive λ",
              "Décroissance exponentielle du nombre de noyaux N(t) = N₀ e^(-λt)",
              "Période T = temps de demi-vie = ln(2)/λ",
              "Activité A(t) = λN(t) mesurée en Becquerels"
            ]
          },
          "page2_concepts": {
            "titre": "Concepts clés",
            "concepts": [
              {
                "terme": "Constante radioactive (λ)",
                "definition": "Probabilité qu'un noyau radioactif se désintègre par unité de temps, caractéristique de chaque isotope, de dimension temps⁻¹"
              },
              {
                "terme": "Période (T) ou demi-vie",
                "definition": "Temps nécessaire pour que la moitié des noyaux radioactifs d'un échantillon se désintègrent, indépendant de la quantité initiale"
              },
              {
                "terme": "Activité radioactive (A)",
                "definition": "Nombre moyen de désintégrations par unité de temps dans un échantillon, proportionnelle au nombre de noyaux présents"
              },
              {
                "terme": "Becquerel (Bq)",
                "definition": "Unité SI d'activité radioactive correspondant à une désintégration par seconde"
              },
              {
                "terme": "Curie (Ci)",
                "definition": "Ancienne unité d'activité encore utilisée, équivalent à 3,7×10¹⁰ Bq (activité de 1g de Radium 226)"
              },
              {
                "terme": "Vie moyenne (τ)",
                "definition": "Durée de vie moyenne d'un noyau radioactif, égale à l'inverse de la constante radioactive : τ = 1/λ"
              },
              {
                "terme": "Activité spécifique",
                "definition": "Rapport de l'activité radioactive à la quantité de substance, souvent exprimée en Bq/g ou μCi/mmol"
              },
              {
                "terme": "Décroissance exponentielle",
                "definition": "Loi mathématique décrivant la diminution du nombre de noyaux selon N(t) = N₀ e^(-λt)"
              }
            ]
          },
          "page3_schemas": {
            "titre": "Schémas",
            "schemas": []
          },
          "page4_formules": {
            "titre": "Données clés",
            "formules": [
              {
                "label": "Loi de décroissance",
                "formule": "N(t) = N₀ e^(-λt)",
                "unite": "noyaux"
              },
              {
                "label": "Relation période-constante",
                "formule": "T = ln(2)/λ",
                "unite": "s"
              },
              {
                "label": "Activité",
                "formule": "A(t) = λN(t) = A₀ e^(-λt)",
                "unite": "Bq"
              },
              {
                "label": "Vie moyenne",
                "formule": "τ = 1/λ",
                "unite": "s"
              },
              {
                "label": "Masse radioactive",
                "formule": "m(t) = A(t)T·M_mol/(ln(2)·N_AV)",
                "unite": "g"
              },
              {
                "label": "Activité après n périodes",
                "formule": "A(nT) = A₀/2ⁿ",
                "unite": "Bq"
              }
            ],
            "donnees": [
              {
                "label": "Nombre d'Avogadro",
                "valeur": "6,02×10²³ mol⁻¹"
              },
              {
                "label": "Conversion Curie-Becquerel",
                "valeur": "1 Ci = 3,7×10¹⁰ Bq"
              },
              {
                "label": "Réduction après 10 périodes",
                "valeur": "Facteur ≈ 1000"
              }
            ]
          },
          "page5_resume": {
            "titre": "Résumé",
            "points": [
              "La décroissance radioactive suit une loi exponentielle N(t) = N₀ e^(-λt) caractérisée par la constante radioactive λ",
              "La période T = ln(2)/λ représente le temps de demi-vie, indépendant de la quantité initiale",
              "L'activité A(t) = λN(t) mesure le nombre de désintégrations par seconde, unité : Becquerel (Bq)",
              "Après n périodes, l'activité est divisée par 2ⁿ : A(nT) = A₀/2ⁿ",
              "La vie moyenne τ = 1/λ caractérise la durée de vie moyenne des noyaux radioactifs"
            ],
            "mnemo": "PLANTEZ : Période-Lambda-Activité-Noyaux-Temps-Exponentielle-Zéro (décroissance vers zéro)"
          }
        },
        "qcm": [
          {
            "question": "Quelle est la dimension de la constante radioactive λ ?",
            "options": [
              "temps",
              "temps⁻¹",
              "mol⁻¹",
              "sans dimension"
            ],
            "correct": 1,
            "difficulte": "facile",
            "explication": "La constante radioactive λ représente une probabilité par unité de temps, elle a donc la dimension temps⁻¹"
          },
          {
            "question": "Si un échantillon radioactif a une période de 8 heures, quelle fraction restera après 24 heures ?",
            "options": [
              "1/2",
              "1/4",
              "1/8",
              "1/16"
            ],
            "correct": 2,
            "difficulte": "moyen",
            "explication": "24h = 3 périodes de 8h. Après 3 périodes : N = N₀/2³ = N₀/8, donc 1/8 reste"
          },
          {
            "question": "Quelle est la relation correcte entre période T et constante radioactive λ ?",
            "options": [
              "T = λ/ln(2)",
              "T = ln(2)/λ",
              "T = λ·ln(2)",
              "T = 1/(λ·ln(2))"
            ],
            "correct": 1,
            "difficulte": "moyen",
            "explication": "À t = T, N = N₀/2, donc N₀/2 = N₀e^(-λT), ce qui donne 1/2 = e^(-λT), soit λT = ln(2), donc T = ln(2)/λ"
          },
          {
            "question": "Combien vaut 1 Curie en Becquerels ?",
            "options": [
              "3,7×10⁸ Bq",
              "3,7×10⁹ Bq",
              "3,7×10¹⁰ Bq",
              "3,7×10¹¹ Bq"
            ],
            "correct": 2,
            "difficulte": "facile",
            "explication": "Par définition, 1 Curie = 3,7×10¹⁰ Becquerels, correspondant à l'activité de 1g de Radium 226"
          },
          {
            "question": "Si l'activité initiale est de 1000 Bq et la période de 2 jours, quelle sera l'activité après 10 jours ?",
            "options": [
              "200 Bq",
              "125 Bq",
              "62,5 Bq",
              "31,25 Bq"
            ],
            "correct": 3,
            "difficulte": "moyen",
            "explication": "10 jours = 5 périodes de 2 jours. A(5T) = A₀/2⁵ = 1000/32 = 31,25 Bq"
          },
          {
            "question": "Que représente la vie moyenne τ d'un radioélément ?",
            "options": [
              "τ = λ",
              "τ = 1/λ",
              "τ = ln(2)×λ",
              "τ = T/ln(2)"
            ],
            "correct": 1,
            "difficulte": "moyen",
            "explication": "La vie moyenne τ est l'inverse de la constante radioactive : τ = 1/λ. C'est le temps caractéristique de décroissance"
          },
          {
            "question": "Après combien de périodes le nombre de noyaux est-il divisé par environ 1000 ?",
            "options": [
              "8 périodes",
              "9 périodes",
              "10 périodes",
              "11 périodes"
            ],
            "correct": 2,
            "difficulte": "difficile",
            "explication": "2¹⁰ = 1024 ≈ 1000. Donc après 10 périodes, le nombre est divisé par environ 1000"
          },
          {
            "question": "L'équation différentielle de la décroissance radioactive s'écrit :",
            "options": [
              "dN = λN dt",
              "dN = -λN dt",
              "dN = -λ dt",
              "dN = N dt/λ"
            ],
            "correct": 1,
            "difficulte": "moyen",
            "explication": "dN = -λN dt exprime que la variation du nombre de noyaux est proportionnelle au nombre présent, avec le signe négatif pour la décroissance"
          }
        ]
      },
      {
        "id": "physique-ch6",
        "titre": "Interaction des rayonnements avec la matière",
        "emoji": "⚛️",
        "nouveau": true,
        "flashcardsData": [
          {
            "q": "Quelle est la différence entre rayonnements directement et indirectement ionisants ?",
            "r": "Directement ionisants : particules chargées (α, β-, β+, protons) provoquent directement des ionisations par interactions coulombiennes obligatoires. Indirectement ionisants : rayonnements neutres (photons, neutrons) produisent des particules chargées secondaires qui ionisent, interactions aléatoires."
          },
          {
            "q": "Quelles sont les conditions de l'effet photoélectrique ?",
            "r": "Énergie du photon ≥ énergie de liaison de l'électron (hν ≥ Wn). Le photon transfère toute son énergie à un électron de couche profonde qui devient photoélectron avec Ec = Ephoton - Wn."
          },
          {
            "q": "Comment varie la probabilité d'effet photoélectrique τ ?",
            "r": "τ = k × ρ × Z⁴/E³. Augmente avec Z⁴ et la densité ρ, diminue avec E³. Prédominant pour Z élevé et basses énergies."
          },
          {
            "q": "Quelle est la particularité de l'effet Compton ?",
            "r": "Interaction avec électron peu lié, transfert d'énergie partiel et variable. Photon diffusé avec énergie E' < E selon l'angle θ. Électron Compton toujours dirigé vers l'avant."
          },
          {
            "q": "Quelles sont les conditions de la création de paires ?",
            "r": "Seuil minimal : hν ≥ 1,022 MeV (2 × masse électron). Photon interagit avec champ du noyau, se matérialise en électron + positon. Excédent d'énergie = énergie cinétique des particules."
          },
          {
            "q": "Que devient le positon après création de paires ?",
            "r": "Il épuise son énergie cinétique dans le milieu puis subit une annihilation avec un électron, émettant 2 photons de 511 keV à 180° l'un de l'autre."
          },
          {
            "q": "Comment s'exprime l'atténuation d'un faisceau de photons ?",
            "r": "Nx = N0 × e^(-μx) où μ = τ + σ + π (somme des coefficients des 3 effets). μ dépend de l'énergie du rayonnement et du numéro atomique Z."
          },
          {
            "q": "Qu'est-ce que la couche de demi-atténuation (CDA) ?",
            "r": "Épaisseur qui atténue la moitié des photons incidents. CDA = ln2/μ ≈ 0,693/μ. Pour x = n×CDA : Nx = N0/2ⁿ."
          },
          {
            "q": "Quel effet prédomine dans les tissus biologiques ?",
            "r": "L'effet Compton prédomine dans l'eau et tissus biologiques (Z faible). Il dégrade la qualité des images par diffusion."
          },
          {
            "q": "Quels sont les intérêts médicaux des interactions rayonnement-matière ?",
            "r": "Imagerie : détection pour radiologie, scanner, médecine nucléaire. Effets biologiques : radiobiologie, radioprotection, radiothérapie anticancéreuse."
          }
        ],
        "fiche": {
          "page1_intro": {
            "titre": "Introduction",
            "texte": "L'interaction des rayonnements avec la matière est fondamentale en physique médicale. Les rayonnements peuvent être électromagnétiques (photons X et γ) ou particulaires (α, β, neutrons). On distingue les rayonnements directement ionisants (particules chargées) qui ionisent directement par interactions coulombiennes, et les indirectement ionisants (photons, neutrons) qui produisent des particules secondaires chargées. Ces interactions sont cruciales pour l'imagerie médicale (radiologie, scanner), les effets biologiques (radioprotection, radiobiologie) et la radiothérapie. La compréhension de ces mécanismes permet d'optimiser les techniques diagnostiques et thérapeutiques.",
            "points_cles": [
              "Rayonnements ionisants : seuil > 13,6 eV",
              "Distinction directement/indirectement ionisants",
              "Applications médicales : imagerie et thérapie",
              "Trois effets principaux pour les photons"
            ]
          },
          "page2_concepts": {
            "titre": "Concepts clés",
            "concepts": [
              {
                "terme": "Effet photoélectrique",
                "definition": "Absorption totale d'un photon par un électron de couche profonde, éjectant un photoélectron avec l'énergie cinétique Ec = hν - Wn"
              },
              {
                "terme": "Effet Compton",
                "definition": "Diffusion d'un photon par un électron peu lié avec transfert partiel d'énergie, produisant un photon diffusé d'énergie moindre et un électron de recul"
              },
              {
                "terme": "Création de paires",
                "definition": "Matérialisation d'un photon (E ≥ 1,022 MeV) en électron-positon dans le champ d'un noyau, suivie d'une annihilation émettant 2 photons de 511 keV"
              },
              {
                "terme": "Coefficient d'atténuation linéique",
                "definition": "Probabilité d'interaction par unité de longueur (μ = τ + σ + π), caractérise l'atténuation exponentielle d'un faisceau"
              },
              {
                "terme": "Couche de demi-atténuation",
                "definition": "Épaisseur de matériau réduisant de moitié l'intensité d'un faisceau incident, CDA = ln2/μ"
              },
              {
                "terme": "Rayonnement directement ionisant",
                "definition": "Particules chargées (α, β, protons) provoquant directement des ionisations par interactions coulombiennes obligatoires"
              },
              {
                "terme": "Rayonnement indirectement ionisant",
                "definition": "Rayonnements neutres (photons, neutrons) produisant des particules chargées secondaires qui ionisent, interactions aléatoires"
              },
              {
                "terme": "Photoélectron",
                "definition": "Électron éjecté lors de l'effet photoélectrique, emportant l'énergie cinétique excédentaire du photon incident"
              }
            ]
          },
          "page3_schemas": {
            "titre": "Schémas",
            "schemas": []
          },
          "page4_formules": {
            "titre": "Données clés",
            "formules": [
              {
                "label": "Atténuation exponentielle",
                "formule": "Nx = N0 × e^(-μx)",
                "unite": "sans unité"
              },
              {
                "label": "Coefficient total",
                "formule": "μ = τ + σ + π",
                "unite": "cm⁻¹"
              },
              {
                "label": "Couche de demi-atténuation",
                "formule": "CDA = ln2/μ",
                "unite": "cm"
              },
              {
                "label": "Énergie photoélectron",
                "formule": "Ec = hν - Wn",
                "unite": "eV"
              },
              {
                "label": "Compton - énergie diffusée",
                "formule": "1/E' = 1/E + (1-cosθ)/(mec²)",
                "unite": "eV"
              },
              {
                "label": "Probabilité photoélectrique",
                "formule": "τ = k × ρ × Z⁴/E³",
                "unite": "cm⁻¹"
              }
            ],
            "donnees": [
              {
                "label": "Seuil ionisation",
                "valeur": "13,6 eV"
              },
              {
                "label": "Seuil création paires",
                "valeur": "1,022 MeV"
              },
              {
                "label": "Énergie annihilation",
                "valeur": "511 keV par photon"
              },
              {
                "label": "Masse électron",
                "valeur": "0,511 MeV/c²"
              }
            ]
          },
          "page5_resume": {
            "titre": "Résumé",
            "points": [
              "Trois effets d'interaction photon-matière : photoélectrique (absorption totale), Compton (diffusion partielle), création de paires (matérialisation)",
              "Effet photoélectrique prédominant pour Z élevé et basses énergies (τ ∝ Z⁴/E³), responsable du contraste en imagerie",
              "Effet Compton prédominant dans les tissus biologiques (σ ∝ Z/E), dégrade la qualité des images par diffusion",
              "Atténuation exponentielle des faisceaux : Nx = N0×e^(-μx) avec μ = τ + σ + π",
              "Applications médicales : imagerie (détection), radioprotection et radiothérapie (effets biologiques)"
            ],
            "mnemo": "PhotoCompton Crée des Paires : Photoélectrique (absorption), Compton (diffusion), Création de paires (matérialisation) - les 3 P.C.P. de l'interaction photon-matière"
          }
        },
        "qcm": [
          {
            "question": "Quel est le seuil énergétique minimal pour qu'un rayonnement soit considéré comme ionisant ?",
            "options": [
              "1,022 MeV",
              "13,6 eV",
              "511 keV",
              "1 eV"
            ],
            "correct": 1,
            "difficulte": "facile",
            "explication": "Le seuil d'ionisation correspond à l'énergie de liaison de l'électron de l'hydrogène, soit 13,6 eV. En dessous de cette énergie, le rayonnement ne peut pas arracher d'électrons."
          },
          {
            "question": "Dans l'effet photoélectrique, que devient l'énergie du photon incident ?",
            "options": [
              "Elle est partiellement transférée à l'électron",
              "Elle est totalement transférée à l'électron",
              "Elle est diffusée dans toutes les directions",
              "Elle crée une paire électron-positon"
            ],
            "correct": 1,
            "difficulte": "facile",
            "explication": "Dans l'effet photoélectrique, le photon transfère la totalité de son énergie à l'électron et disparaît complètement. C'est une absorption totale."
          },
          {
            "question": "Comment varie la probabilité d'effet photoélectrique avec le numéro atomique Z ?",
            "options": [
              "Proportionnelle à Z",
              "Proportionnelle à Z²",
              "Proportionnelle à Z⁴",
              "Inversement proportionnelle à Z"
            ],
            "correct": 2,
            "difficulte": "moyen",
            "explication": "La probabilité d'effet photoélectrique τ est proportionnelle à Z⁴, ce qui explique pourquoi cet effet prédomine dans les matériaux lourds utilisés en détection."
          },
          {
            "question": "Quelle est l'énergie minimale requise pour la création de paires ?",
            "options": [
              "511 keV",
              "1,022 MeV",
              "13,6 eV",
              "2,044 MeV"
            ],
            "correct": 1,
            "difficulte": "moyen",
            "explication": "Il faut au minimum l'équivalent de 2 masses d'électron : 2 × 511 keV = 1,022 MeV pour créer une paire électron-positon."
          },
          {
            "question": "Dans l'effet Compton, l'électron de recul est toujours :",
            "options": [
              "Dirigé vers l'arrière",
              "Dirigé vers l'avant",
              "Dirigé perpendiculairement",
              "Dirigé aléatoirement"
            ],
            "correct": 1,
            "difficulte": "moyen",
            "explication": "Par conservation de la quantité de mouvement dans l'effet Compton, l'électron de recul est toujours dirigé vers l'avant, dans le demi-espace avant."
          },
          {
            "question": "Quel effet prédomine dans les tissus biologiques pour les énergies usuelles en imagerie ?",
            "options": [
              "Effet photoélectrique",
              "Effet Compton",
              "Création de paires",
              "Tous équivalents"
            ],
            "correct": 1,
            "difficulte": "moyen",
            "explication": "L'effet Compton prédomine dans les tissus biologiques (Z faible ≈ 7) pour les énergies usuelles. Il est responsable de la diffusion qui dégrade les images."
          },
          {
            "question": "Pour atténuer un faisceau d'un facteur 1000, combien faut-il de couches de demi-atténuation ?",
            "options": [
              "3 CDA",
              "7 CDA",
              "10 CDA",
              "1000 CDA"
            ],
            "correct": 2,
            "difficulte": "difficile",
            "explication": "1000 ≈ 1024 = 2¹⁰, donc il faut 10 CDA pour diviser par 2¹⁰ et atténuer le faisceau d'un facteur approximatif de 1000."
          },
          {
            "question": "Que se passe-t-il lors de l'annihilation d'un positon ?",
            "options": [
              "Émission d'un photon de 1,022 MeV",
              "Émission de 2 photons de 511 keV à 180°",
              "Émission d'un électron",
              "Création d'une nouvelle paire"
            ],
            "correct": 1,
            "difficulte": "difficile",
            "explication": "L'annihilation électron-positon produit 2 photons de 511 keV (masse d'un électron) émis à 180° l'un de l'autre pour conserver la quantité de mouvement."
          }
        ]
      },
      {
        "id": "physique-ch7",
        "titre": "Interactions des particules chargées avec la matière",
        "emoji": "⚛️",
        "nouveau": true,
        "flashcardsData": [
          {
            "q": "Que se passe-t-il quand un électron passe près d'un noyau atomique ?",
            "r": "L'électron subit une force F = q·E due aux charges positives du noyau, sa trajectoire est déviée, il est freiné et perd de l'énergie cinétique qui se transforme en photon hν"
          },
          {
            "q": "Quelles sont les deux possibilités de désexcitation du cortège électronique après ionisation ?",
            "r": "1) Émission d'un photon de fluorescence (énergie = Wf - Wi) 2) Effet Auger : transmission d'énergie à un électron périphérique qui devient électron Auger"
          },
          {
            "q": "Comment calcule-t-on l'énergie moyenne de formation d'une paire d'ions ?",
            "r": "W = E₀/n, où E₀ est l'énergie initiale de la particule et n le nombre de paires d'ions créées lors du ralentissement total"
          },
          {
            "q": "Qu'est-ce que la densité linéique d'ionisation (DLI) ?",
            "r": "La DLI caractérise le nombre de paires d'ions créées par unité de longueur de trajectoire. DLI = TLE/W, avec unité : paires d'ions/μm"
          },
          {
            "q": "Qu'est-ce que le phénomène de Bragg ?",
            "r": "Augmentation brutale de la densité d'ionisation en fin de trajectoire d'une particule lourde, car le transfert d'énergie est inversement proportionnel au carré de la vitesse"
          },
          {
            "q": "Quelle est la différence principale entre particules lourdes et légères ?",
            "r": "Particules lourdes : trajectoire rectiligne, parcours fini calculable. Particules légères : trajectoire déviée, parcours moyen > parcours réel à cause des déviations"
          },
          {
            "q": "Qu'est-ce que le rayonnement de freinage ?",
            "r": "Émission d'un photon hν quand un électron passe dans le champ coulombien d'un noyau (F = k·Ze²/r²), provoquant déviation de trajectoire"
          },
          {
            "q": "Que produit l'annihilation β⁺/e⁻ ?",
            "r": "Transformation d'une paire β⁺/e⁻ en émission de 2 photons de 511 keV chacun (masse au repos du positon). Base de l'imagerie TEP"
          }
        ],
        "fiche": {
          "page1_intro": {
            "titre": "Introduction",
            "texte": "Ce chapitre étudie les mécanismes d'interaction entre les particules chargées (électrons, particules α, β) et la matière. Ces interactions sont fondamentales en physique médicale car elles expliquent les effets biologiques des rayonnements ionisants. Les particules chargées interagissent avec les atomes du milieu par des forces coulombiennes, provoquant excitation, ionisation ou émission de rayonnements secondaires. La compréhension de ces phénomènes est essentielle pour la radioprotection, l'imagerie médicale et la radiothérapie.",
            "points_cles": [
              "Interaction électron-noyau et déviation de trajectoire",
              "Phénomènes d'excitation, ionisation et désexcitation",
              "Formation de paires d'ions et transfert linéique d'énergie",
              "Différences entre particules lourdes et légères"
            ]
          },
          "page2_concepts": {
            "titre": "Concepts clés",
            "concepts": [
              {
                "terme": "Ionisation",
                "definition": "Éjection d'un électron de l'atome quand l'énergie transférée dépasse l'énergie de liaison (Ephoton > |EK| = WK)"
              },
              {
                "terme": "Effet Auger",
                "definition": "Processus de désexcitation où l'énergie est transmise à un électron périphérique qui devient électron Auger (Ec = (WK - WM) - WM)"
              },
              {
                "terme": "Transfert Linéique d'Énergie (TLE)",
                "definition": "Énergie transférée par unité de longueur de trajectoire, caractérise le pouvoir ionisant d'une particule"
              },
              {
                "terme": "Densité Linéique d'Ionisation",
                "definition": "Nombre de paires d'ions créées par unité de longueur (DLI = TLE/W)"
              },
              {
                "terme": "Phénomène de Bragg",
                "definition": "Augmentation brutale de l'ionisation en fin de parcours d'une particule lourde due à la diminution de vitesse"
              },
              {
                "terme": "Rayonnement de freinage",
                "definition": "Émission d'un photon lors de la déviation d'un électron dans le champ coulombien d'un noyau"
              },
              {
                "terme": "Annihilation β⁺/e⁻",
                "definition": "Transformation d'un positon et d'un électron en deux photons de 511 keV émis à 180°"
              }
            ]
          },
          "page3_schemas": {
            "titre": "Schémas",
            "schemas": []
          },
          "page4_formules": {
            "titre": "Données clés",
            "formules": [
              {
                "label": "Force coulombienne",
                "formule": "F = q·E",
                "unite": "N"
              },
              {
                "label": "Énergie cinétique électron éjecté",
                "formule": "Ec = Ephoton - |EK|",
                "unite": "eV"
              },
              {
                "label": "Énergie moyenne paire d'ions",
                "formule": "W = E₀/n",
                "unite": "eV"
              },
              {
                "label": "Densité linéique d'ionisation",
                "formule": "DLI = TLE/W",
                "unite": "paires/μm"
              },
              {
                "label": "Parcours particule lourde",
                "formule": "R = T₀/TLE",
                "unite": "μm"
              },
              {
                "label": "Parcours moyen électron",
                "formule": "R = T(MeV)/(2ρ)",
                "unite": "cm"
              }
            ],
            "donnees": [
              {
                "label": "W air",
                "valeur": "30 eV"
              },
              {
                "label": "W eau",
                "valeur": "33 eV"
              },
              {
                "label": "TLE particules α dans eau",
                "valeur": "150 keV/μm"
              },
              {
                "label": "TLE électrons β dans eau",
                "valeur": "0,25 keV/μm"
              },
              {
                "label": "Énergie photon annihilation",
                "valeur": "511 keV"
              }
            ]
          },
          "page5_resume": {
            "titre": "Résumé",
            "points": [
              "Les particules chargées interagissent avec la matière par forces coulombiennes, provoquant déviation de trajectoire et perte d'énergie",
              "L'ionisation crée des paires d'ions (e⁻ + ion⁺) avec une énergie moyenne W = E₀/n, suivie de désexcitation par fluorescence ou effet Auger",
              "Les particules lourdes (α) ont un parcours rectiligne fini avec phénomène de Bragg en fin de trajectoire (TLE élevé ≈ 150 keV/μm)",
              "Les particules légères (β) ont une trajectoire déviée avec parcours moyen > parcours réel et peuvent produire un rayonnement de freinage",
              "L'annihilation β⁺/e⁻ produit 2 photons de 511 keV, principe de base de l'imagerie TEP"
            ],
            "mnemo": "PIAF : Particules Ionisent Atomes par Force coulombienne (pour retenir que les interactions sont dues aux forces électrostatiques)"
          }
        },
        "qcm": [
          {
            "question": "Quelle est l'énergie moyenne de formation d'une paire d'ions dans l'air ?",
            "options": [
              "16 eV",
              "30 eV",
              "33 eV",
              "511 keV"
            ],
            "correct": 1,
            "difficulte": "facile",
            "explication": "Dans l'air, W = 30 eV. Cette valeur tient compte des ionisations (16 eV) et des excitations (6 eV), avec m = 2 à 3 excitations pour une ionisation."
          },
          {
            "question": "Que caractérise la densité linéique d'ionisation (DLI) ?",
            "options": [
              "L'énergie totale de la particule",
              "Le nombre de paires d'ions par unité de longueur",
              "La vitesse de la particule",
              "L'énergie de liaison des électrons"
            ],
            "correct": 1,
            "difficulte": "facile",
            "explication": "La DLI = TLE/W caractérise le nombre de paires d'ions créées par unité de longueur de trajectoire, s'exprime en paires d'ions/μm."
          },
          {
            "question": "Quel phénomène explique l'augmentation brutale d'ionisation en fin de parcours d'une particule α ?",
            "options": [
              "L'effet Auger",
              "Le phénomène de Bragg",
              "Le rayonnement de freinage",
              "L'annihilation"
            ],
            "correct": 1,
            "difficulte": "moyen",
            "explication": "Le phénomène de Bragg correspond à l'explosion du nombre de paires d'ions en fin de trajectoire, car le transfert d'énergie est inversement proportionnel au carré de la vitesse qui diminue."
          },
          {
            "question": "Lors de l'effet Auger, l'énergie cinétique de l'électron Auger vaut :",
            "options": [
              "WK - WM",
              "(WK - WM) - WM",
              "WK + WM",
              "2WM - WK"
            ],
            "correct": 1,
            "difficulte": "difficile",
            "explication": "L'électron Auger reçoit l'énergie (WK - WM) de désexcitation moins son énergie de liaison WM pour être éjecté, soit Ec = (WK - WM) - WM."
          },
          {
            "question": "Quelle différence principale existe entre particules lourdes et légères ?",
            "options": [
              "Seules les lourdes ionisent",
              "Les légères ont des trajectoires plus déviées",
              "Les lourdes ont un TLE plus faible",
              "Les légères ne perdent pas d'énergie"
            ],
            "correct": 1,
            "difficulte": "moyen",
            "explication": "Les particules légères (électrons) peuvent subir des déviations importantes car elles ont la même masse que les électrons du milieu, contrairement aux particules lourdes qui gardent une trajectoire rectiligne."
          },
          {
            "question": "L'annihilation β⁺/e⁻ produit :",
            "options": [
              "Un photon de 1022 keV",
              "Deux photons de 511 keV",
              "Un électron Auger",
              "Un rayonnement de freinage"
            ],
            "correct": 1,
            "difficulte": "facile",
            "explication": "L'annihilation d'un positon avec un électron produit 2 photons de 511 keV chacun (masse au repos × c²), émis à 180°. C'est le principe de l'imagerie TEP."
          }
        ]
      },
      {
        "id": "physique-ch8",
        "titre": "Équilibres acido-basiques",
        "emoji": "⚖️",
        "nouveau": true,
        "flashcardsData": [
          {
            "q": "Quelle est la concentration normale en ions H+ du sang artériel ?",
            "r": "40 nanomoles/L, correspondant à un pH de 7,4"
          },
          {
            "q": "Quels sont les trois systèmes de régulation du pH ?",
            "r": "Physico-chimique (tampons), pulmonaire (élimination CO2) et rénal (ajustement des bases)"
          },
          {
            "q": "Que représente un système tampon ?",
            "r": "Un mélange d'un acide faible et de son sel avec une base forte qui protège contre les variations de pH"
          },
          {
            "q": "Quelle est la formule d'Henderson-Hasselbalch ?",
            "r": "pH = pK + log([A-]/[AH]) où pK = 6,1 pour le système bicarbonate"
          },
          {
            "q": "Quelles sont les valeurs normales du système bicarbonate ?",
            "r": "[HCO3-] = 24 mmol/L et [H2CO3] = 1,2 mmol/L"
          },
          {
            "q": "Quelle est la relation entre H2CO3 et pCO2 ?",
            "r": "[H2CO3] = α × p(CO2) avec α = 0,03 et p(CO2) normale = 40 mmHg"
          },
          {
            "q": "Que représente une isobare dans le diagramme de Davenport ?",
            "r": "Une courbe pour une valeur fixe de pCO2 montrant la relation entre pH et [HCO3-]"
          },
          {
            "q": "Quelle est l'équation de la droite tampon du sang ?",
            "r": "[HCO3-] = m + s × (7,40 - pH) où m = 24 mmol/L et s = 31,6 mmol/L"
          },
          {
            "q": "Comment diagnostiquer une acidose respiratoire pure ?",
            "r": "pH < 7,4, pCO2 élevée, composante métabolique normale (m = 24 mmol/L)"
          },
          {
            "q": "Comment diagnostiquer une acidose métabolique pure ?",
            "r": "pH < 7,4, pCO2 normale (40 mmHg), composante métabolique diminuée (m < 24 mmol/L)"
          }
        ],
        "fiche": {
          "page1_intro": {
            "titre": "Introduction",
            "texte": "L'équilibre acido-basique est un mécanisme fondamental de l'homéostasie qui maintient le pH sanguin à 7,4. Cet équilibre repose sur trois systèmes de régulation complémentaires : les tampons physico-chimiques (régulation passive), la ventilation pulmonaire et l'excrétion rénale (régulations actives). Le diagramme de Davenport permet d'analyser graphiquement les troubles de cet équilibre en étudiant deux systèmes tampons principaux : le système bicarbonate/acide carbonique et le système protéines/protéinates. Cette approche diagnostique est essentielle en médecine pour identifier et traiter les déséquilibres acido-basiques.",
            "points_cles": [
              "Maintien du pH sanguin à 7,4 par trois systèmes de régulation",
              "Système tampon bicarbonate/acide carbonique comme référence principale",
              "Diagramme de Davenport pour le diagnostic graphique",
              "Distinction entre troubles respiratoires et métaboliques"
            ]
          },
          "page2_concepts": {
            "titre": "Concepts clés",
            "concepts": [
              {
                "terme": "Système tampon",
                "definition": "Mélange d'un acide faible et de son sel qui résiste aux variations de pH en neutralisant les ajouts d'acides ou de bases"
              },
              {
                "terme": "Isobare",
                "definition": "Courbe du diagramme de Davenport représentant la relation entre pH et [HCO3-] pour une pression partielle de CO2 fixe"
              },
              {
                "terme": "Composante métabolique (m)",
                "definition": "Valeur des bicarbonates plasmatiques à pH = 7,40, normalement égale à 24 mmol/L"
              },
              {
                "terme": "Droite tampon du sang",
                "definition": "Droite décrivant le système protéines/protéinates dans le diagramme de Davenport"
              },
              {
                "terme": "Acidose respiratoire",
                "definition": "Diminution du pH due à une rétention de CO2 par dysfonctionnement pulmonaire"
              },
              {
                "terme": "Acidose métabolique",
                "definition": "Diminution du pH due à une perte de bicarbonates ou un excès d'acides non volatils"
              },
              {
                "terme": "pK",
                "definition": "Cologarithme de la constante de dissociation d'un acide faible, égal à 6,1 pour H2CO3"
              }
            ]
          },
          "page3_schemas": {
            "titre": "Schémas",
            "schemas": []
          },
          "page4_formules": {
            "titre": "Données clés",
            "formules": [
              {
                "label": "Henderson-Hasselbalch",
                "formule": "pH = pK + log([HCO3-]/[H2CO3])",
                "unite": "-"
              },
              {
                "label": "Relation pCO2",
                "formule": "[H2CO3] = α × p(CO2)",
                "unite": "mmol/L"
              },
              {
                "label": "pH avec pCO2",
                "formule": "pH = 6,1 + log([HCO3-]/(α × p(CO2)))",
                "unite": "-"
              },
              {
                "label": "Droite tampon",
                "formule": "[HCO3-] = m + s × (7,40 - pH)",
                "unite": "mmol/L"
              },
              {
                "label": "Pente droite tampon",
                "formule": "s = 8,2 + 1,56 × Hb",
                "unite": "mmol/L"
              }
            ],
            "donnees": [
              {
                "label": "pH normal sang artériel",
                "valeur": "7,4"
              },
              {
                "label": "pK acide carbonique (37°C)",
                "valeur": "6,1"
              },
              {
                "label": "[HCO3-] normale",
                "valeur": "24 mmol/L"
              },
              {
                "label": "[H2CO3] normale",
                "valeur": "1,2 mmol/L"
              },
              {
                "label": "p(CO2) normale",
                "valeur": "40 mmHg"
              },
              {
                "label": "Coefficient α (37°C)",
                "valeur": "0,03"
              },
              {
                "label": "Hémoglobine normale",
                "valeur": "15 g/dL"
              },
              {
                "label": "Pente normale (s)",
                "valeur": "31,6 mmol/L"
              }
            ]
          },
          "page5_resume": {
            "titre": "Résumé",
            "points": [
              "L'équilibre acido-basique maintient le pH sanguin à 7,4 grâce à trois systèmes : tampons, pulmonaire et rénal",
              "Le système bicarbonate/acide carbonique est le tampon principal avec pH = 6,1 + log([HCO3-]/[H2CO3])",
              "Le diagramme de Davenport utilise deux systèmes tampons : bicarbonate (isobares) et protéines (droite tampon)",
              "Les troubles respiratoires affectent la pCO2, les troubles métaboliques affectent la composante métabolique",
              "Le diagnostic repose sur l'analyse du pH, de la pCO2 et de la composante métabolique du patient"
            ],
            "mnemo": "TARD : Tampons (physico-chimiques), Alvéoles (pulmonaire), Reins (rénal), Davenport (diagnostic)"
          }
        },
        "qcm": [
          {
            "question": "Quelle est la valeur normale du pH du sang artériel ?",
            "options": [
              "7,0",
              "7,2",
              "7,4",
              "7,6"
            ],
            "correct": 2,
            "difficulte": "facile",
            "explication": "Le pH normal du sang artériel est de 7,4, calculé par la formule de Henderson-Hasselbalch avec les valeurs normales de bicarbonates (24 mmol/L) et d'acide carbonique (1,2 mmol/L)."
          },
          {
            "question": "Dans l'équation de Henderson-Hasselbalch pour le système bicarbonate, que vaut le pK ?",
            "options": [
              "6,0",
              "6,1",
              "7,0",
              "7,4"
            ],
            "correct": 1,
            "difficulte": "facile",
            "explication": "Le pK de l'acide carbonique est de 6,1 à 37°C, valeur fondamentale pour calculer le pH du système bicarbonate."
          },
          {
            "question": "Un patient présente : pH = 7,30, pCO2 = 50 mmHg, m = 24 mmol/L. Quel est le diagnostic ?",
            "options": [
              "Acidose respiratoire pure",
              "Acidose métabolique pure",
              "Alcalose respiratoire pure",
              "Alcalose métabolique pure"
            ],
            "correct": 0,
            "difficulte": "moyen",
            "explication": "pH < 7,4 (acidose), pCO2 élevée (trouble respiratoire), composante métabolique normale (trouble pur) = acidose respiratoire pure."
          },
          {
            "question": "Quelle relation lie la concentration en acide carbonique à la pression partielle de CO2 ?",
            "options": [
              "[H2CO3] = 0,03 × p(CO2)",
              "[H2CO3] = 0,3 × p(CO2)",
              "[H2CO3] = 3 × p(CO2)",
              "[H2CO3] = 30 × p(CO2)"
            ],
            "correct": 0,
            "difficulte": "moyen",
            "explication": "La relation est [H2CO3] = α × p(CO2) avec α = 0,03 à 37°C quand [H2CO3] est en mmol/L et p(CO2) en mmHg."
          },
          {
            "question": "Dans le diagramme de Davenport, que représente une isobare ?",
            "options": [
              "Une droite de pente constante",
              "Une courbe à pCO2 constante",
              "Une droite horizontale",
              "Une courbe à pH constant"
            ],
            "correct": 1,
            "difficulte": "moyen",
            "explication": "Une isobare est une courbe exponentielle représentant la relation entre pH et [HCO3-] pour une valeur fixe de pCO2."
          },
          {
            "question": "Quelle est la formule de la droite tampon du sang ?",
            "options": [
              "[HCO3-] = m × s × pH",
              "[HCO3-] = m + s × pH",
              "[HCO3-] = m + s × (7,40 - pH)",
              "[HCO3-] = m - s × (pH - 7,40)"
            ],
            "correct": 2,
            "difficulte": "difficile",
            "explication": "La droite tampon s'écrit [HCO3-] = m + s × (7,40 - pH) où m est la composante métabolique et s la pente dépendant de l'hémoglobine."
          },
          {
            "question": "Un patient a pH = 7,50, pCO2 = 40 mmHg, m = 30 mmol/L. Quel est le diagnostic ?",
            "options": [
              "Alcalose respiratoire pure",
              "Alcalose métabolique pure",
              "Acidose compensée",
              "État normal"
            ],
            "correct": 1,
            "difficulte": "difficile",
            "explication": "pH > 7,4 (alcalose), pCO2 normale (pas de trouble respiratoire), m élevée (trouble métabolique) = alcalose métabolique pure."
          }
        ]
      },
      {
        "id": "physique-ch9",
        "titre": "Transports membranaires",
        "emoji": "🧬",
        "nouveau": true,
        "flashcardsData": [
          {
            "q": "Qu'est-ce que le potentiel d'équilibre d'un ion ?",
            "r": "C'est la différence de potentiel entre deux compartiments capable d'annuler le flux diffusif de cet ion. Le flux électrique compense alors exactement le flux diffusif."
          },
          {
            "q": "Quelle est la formule du potentiel d'équilibre à 37°C ?",
            "r": "ΔVeq = -(26 mV/zi) × ln(C2/C1) où zi est la valence de l'ion et C1, C2 les concentrations."
          },
          {
            "q": "Qu'est-ce que l'effet Donnan ?",
            "r": "Phénomène lié à la dissociation d'une protéine causant une différence de potentiel transmembranaire et une augmentation de pression osmotique, quand un ion ne peut traverser la membrane."
          },
          {
            "q": "Que dit la loi de Fick pour la diffusion ?",
            "r": "Le flux diffusif Jd = -R.T.b.S(dC/dx), dirigé du plus concentré vers le moins concentré, lié à l'agitation thermique."
          },
          {
            "q": "Qu'est-ce qu'une membrane dialysante ?",
            "r": "Membrane perméable à l'eau et aux petites molécules mais imperméable aux grosses molécules comme les protéines."
          },
          {
            "q": "Que vaut la constante de Faraday ?",
            "r": "F = 96 500 C.mol⁻¹, correspondant à la charge électrique portée par une mole de protons."
          },
          {
            "q": "Comment s'écrit l'équation de Donnan pour un cation monovalent ?",
            "r": "[X]₂ᶠ/[X]₁ᶠ = exp(-F×ΔV/RT) = ρ"
          },
          {
            "q": "Quels sont les deux types de transport du solvant ?",
            "r": "L'osmose (diffusion d'eau de faible vers forte osmolalité) et la filtration (flux de haute vers basse pression hydrostatique)."
          },
          {
            "q": "Que se passe-t-il à l'équilibre de Donnan ?",
            "r": "Chaque ion diffusible se répartit de sorte que son potentiel d'équilibre égale la différence de potentiel transmembranaire, avec électroneutralité dans chaque compartiment."
          }
        ],
        "fiche": {
          "page1_intro": {
            "titre": "Introduction",
            "texte": "Les transports membranaires étudient le passage des ions et molécules à travers les membranes cellulaires. La membrane cellulaire est polarisée et présente des propriétés de perméabilité sélective. Ces phénomènes expliquent l'existence du potentiel de membrane et ses modifications en réponse aux stimuli, caractérisant l'excitabilité cellulaire. L'étude de l'activité électrique des tissus a de multiples applications médicales (ECG, EEG, EMG). Les transports résultent de la combinaison entre transfert diffusif (gradient de concentration) et migration électrique (gradient de potentiel).",
            "points_cles": [
              "Membrane cellulaire polarisée avec perméabilité sélective",
              "Transfert diffusif dirigé par les gradients de concentration",
              "Migration électrique due aux gradients de potentiel",
              "Applications médicales multiples (ECG, EEG, EMG)"
            ]
          },
          "page2_concepts": {
            "titre": "Concepts clés",
            "concepts": [
              {
                "terme": "Membrane hémiperméable",
                "definition": "Membrane perméable uniquement à l'eau"
              },
              {
                "terme": "Membrane dialysante",
                "definition": "Membrane perméable à l'eau et aux petites molécules mais imperméable aux grosses molécules comme les protéines"
              },
              {
                "terme": "Potentiel d'équilibre",
                "definition": "Différence de potentiel entre deux compartiments capable d'annuler le flux diffusif d'un ion spécifique"
              },
              {
                "terme": "Transfert électrodiffusif",
                "definition": "Combinaison du flux diffusif et du flux de migration électrique d'un ion à travers une membrane"
              },
              {
                "terme": "Effet Donnan",
                "definition": "Phénomène créant une différence de potentiel transmembranaire et une augmentation de pression osmotique due à la présence d'une protéine dissociée"
              },
              {
                "terme": "Valence algébrique",
                "definition": "Nombre qui renseigne sur la charge d'un ion, peut être positive ou négative"
              },
              {
                "terme": "Osmose",
                "definition": "Diffusion d'eau du compartiment à basse osmolalité vers le compartiment à haute osmolalité"
              },
              {
                "terme": "Charge molaire",
                "definition": "Charge électrique portée par une mole d'ions, égale à z × F"
              }
            ]
          },
          "page3_schemas": {
            "titre": "Schémas",
            "schemas": []
          },
          "page4_formules": {
            "titre": "Données clés",
            "formules": [
              {
                "label": "Loi de Fick (flux diffusif)",
                "formule": "Jd = -R.T.b.S(dC/dx)",
                "unite": "mol.s⁻¹"
              },
              {
                "label": "Flux de migration électrique",
                "formule": "Je = -z.F.b.S.C₁(dV/dx)",
                "unite": "mol.s⁻¹"
              },
              {
                "label": "Potentiel d'équilibre (37°C)",
                "formule": "ΔVeq = -(26 mV/zi) × ln(C₂/C₁)",
                "unite": "mV"
              },
              {
                "label": "Équation de Donnan générale",
                "formule": "[X]₂ᶠ/[X]₁ᶠ = exp(-zi×F×ΔV/RT)",
                "unite": "sans"
              }
            ],
            "donnees": [
              {
                "label": "Nombre d'Avogadro",
                "valeur": "6,02 × 10²³ particules/mol"
              },
              {
                "label": "Charge élémentaire",
                "valeur": "1,6 × 10⁻¹⁹ C"
              },
              {
                "label": "Constante de Faraday",
                "valeur": "96 500 C.mol⁻¹"
              },
              {
                "label": "Constante des gaz parfaits",
                "valeur": "8,314 J.mol⁻¹.K⁻¹"
              },
              {
                "label": "RT/F à 37°C",
                "valeur": "26 mV"
              }
            ]
          },
          "page5_resume": {
            "titre": "Résumé",
            "points": [
              "Les transports membranaires résultent de la combinaison entre diffusion (gradient de concentration) et migration électrique (gradient de potentiel)",
              "Le potentiel d'équilibre d'un ion annule son flux diffusif : ΔVeq = -(26 mV/zi) × ln(C₂/C₁) à 37°C",
              "L'effet Donnan survient quand une protéine dissociée crée une différence de potentiel et modifie la répartition des ions diffusibles",
              "À l'équilibre de Donnan, tous les ions diffusibles respectent : [X]₂ᶠ/[X]₁ᶠ = exp(-zi×F×ΔV/RT)",
              "Les principes de conservation de masse et d'électroneutralité permettent de calculer les concentrations finales à l'équilibre"
            ],
            "mnemo": "PEFD : Potentiel d'Équilibre, Flux Diffusif, pour retenir que le potentiel d'équilibre annule le flux diffusif d'un ion"
          }
        },
        "qcm": [
          {
            "question": "Que vaut le potentiel d'équilibre d'un ion Cl⁻ si [Cl⁻]₁ = 10 mM et [Cl⁻]₂ = 100 mM à 37°C ?",
            "options": [
              "26 mV",
              "-26 mV",
              "60 mV",
              "-60 mV"
            ],
            "correct": 2,
            "difficulte": "moyen",
            "explication": "Pour Cl⁻ (z = -1) : ΔVeq = -(26/-1) × ln(100/10) = 26 × ln(10) = 26 × 2,3 = 60 mV"
          },
          {
            "question": "Qu'est-ce qui caractérise une membrane dialysante ?",
            "options": [
              "Perméable uniquement à l'eau",
              "Perméable à l'eau et petites molécules, imperméable aux protéines",
              "Imperméable à tous les solutés",
              "Perméable à toutes les molécules"
            ],
            "correct": 1,
            "difficulte": "facile",
            "explication": "Une membrane dialysante est perméable à l'eau et aux petites molécules mais imperméable aux grosses molécules comme les protéines."
          },
          {
            "question": "Dans l'effet Donnan, que se passe-t-il à l'équilibre ?",
            "options": [
              "Tous les ions ont la même concentration",
              "Le flux électrodiffusif est nul pour chaque ion",
              "La protéine traverse la membrane",
              "Il n'y a plus de différence de potentiel"
            ],
            "correct": 1,
            "difficulte": "moyen",
            "explication": "À l'équilibre de Donnan, le flux électrodiffusif est nul pour chaque ion diffusible car le flux électrique compense exactement le flux diffusif."
          },
          {
            "question": "Que vaut la constante RT/F à 37°C ?",
            "options": [
              "60 mV",
              "26 mV",
              "13 mV",
              "52 mV"
            ],
            "correct": 1,
            "difficulte": "facile",
            "explication": "À 37°C, RT/F = 26 mV, cette valeur remarquable est essentielle pour les calculs de potentiel d'équilibre."
          },
          {
            "question": "Pour un cation divalent Ca²⁺ dans l'équation de Donnan, le rapport des concentrations vaut :",
            "options": [
              "ρ",
              "ρ⁻¹",
              "ρ²",
              "ρ⁻²"
            ],
            "correct": 2,
            "difficulte": "difficile",
            "explication": "Pour un cation divalent (zi = +2) : [Ca²⁺]₂ᶠ/[Ca²⁺]₁ᶠ = exp(-2×F×ΔV/RT) = ρ²"
          },
          {
            "question": "Quel est le principe de la loi de Fick ?",
            "options": [
              "Le flux est proportionnel au gradient de potentiel",
              "Le flux est proportionnel au gradient de concentration",
              "Le flux est indépendant de la température",
              "Le flux dépend uniquement de la charge"
            ],
            "correct": 1,
            "difficulte": "facile",
            "explication": "La loi de Fick stipule que le flux diffusif est proportionnel au gradient de concentration : Jd = -R.T.b.S(dC/dx)"
          },
          {
            "question": "Si on a Na⁺ et Cl⁻ comme ions diffusibles dans un système de Donnan, quelle relation est vraie ?",
            "options": [
              "[Na⁺]₂×[Cl⁻]₂ = [Na⁺]₁×[Cl⁻]₁",
              "[Na⁺]₂/[Na⁺]₁ = [Cl⁻]₁/[Cl⁻]₂",
              "[Na⁺]₂ = [Cl⁻]₂",
              "[Na⁺]₁ = [Cl⁻]₁"
            ],
            "correct": 1,
            "difficulte": "difficile",
            "explication": "Pour des ions monovalents de charges opposées : [Na⁺]₂/[Na⁺]₁ = [Cl⁻]₁/[Cl⁻]₂ car ils ont des rapports inverses (ρ et ρ⁻¹)"
          }
        ]
      }
    ]
  },
  {
    "id": "biologie-cellulaire",
    "emoji": "🦠",
    "nom": "Biologie Cellulaire",
    "categorie": "anticipation",
    "niveau": "PASS/LAS",
    "color": "#3D2C7A",
    "cours": [
      {
        "id": "biologie-cellulaire-ch1",
        "titre": "Propriétés et fonctions des membranes",
        "emoji": "🧬",
        "nouveau": false,
        "flashcardsData": [
          {
            "q": "Qu'est-ce qui caractérise une molécule amphiphile dans la membrane ?",
            "r": "Une molécule avec un groupe hydrophile (tête polaire) et un groupe hydrophobe (queue lipidique), s'organisant spontanément en bicouche dans un milieu aqueux"
          },
          {
            "q": "Quelle est la répartition asymétrique des phospholipides dans la membrane plasmique ?",
            "r": "Feuillet externe : sphingomyéline et phosphatidylcholine. Feuillet interne : phosphatidylsérine, phosphatidyléthanolamine et phosphatidylinositol"
          },
          {
            "q": "Que se passe-t-il lors de l'apoptose au niveau de la membrane ?",
            "r": "Exposition de la phosphatidylsérine sur le feuillet extracellulaire, marquant la cellule comme anormale pour être phagocytée par les macrophages"
          },
          {
            "q": "Quels sont les 4 facteurs influençant la fluidité membranaire ?",
            "r": "1) Longueur des chaînes lipidiques, 2) Nombre de doubles liaisons (insaturations), 3) Taux de cholestérol, 4) Température"
          },
          {
            "q": "Que sont les radeaux lipidiques ?",
            "r": "Domaines membranaires enrichis en cholestérol et sphingolipides, résistants aux détergents, servant de plateformes d'assemblage pour les récepteurs et la signalisation"
          },
          {
            "q": "Quelles molécules traversent facilement la membrane par diffusion simple ?",
            "r": "Molécules lipophiles, hydrophobes, de petite taille (<1000 Da) et non chargées comme O2, CO2, benzène"
          },
          {
            "q": "Quelle est la différence entre diffusion facilitée et transport actif ?",
            "r": "Diffusion facilitée : selon le gradient, sans énergie. Transport actif : contre le gradient, avec consommation d'énergie (ATP)"
          },
          {
            "q": "Qu'est-ce que le glycocalyx et quels sont ses rôles ?",
            "r": "Manteau de chaînes glucidiques sur la face externe des membranes. Rôles : protection mécanique, détermination des groupes sanguins, reconnaissance cellulaire"
          },
          {
            "q": "Quels sont les 3 types de protéines membranaires ?",
            "r": "1) Transmembranaires (traversent la membrane), 2) Associées par résidus lipidiques, 3) Périphériques (liaisons faibles)"
          }
        ],
        "fiche": {
          "page1_intro": {
            "titre": "Introduction",
            "texte": "Les membranes biologiques sont des structures dynamiques constituées d'une bicouche lipidique amphiphile. Elles délimitent les cellules et leurs compartiments internes, assurant une compartimentation essentielle au fonctionnement cellulaire. La composition membranaire varie selon le type cellulaire et le compartiment considéré. Les molécules amphiphiles s'organisent spontanément avec leurs têtes hydrophiles vers l'extérieur et leurs queues hydrophobes à l'intérieur, créant une barrière sélective. Cette organisation permet aux membranes d'assurer leurs fonctions de protection, de transport sélectif et de signalisation cellulaire.",
            "points_cles": [
              "Bicouche lipidique amphiphile auto-organisée",
              "Composition variable selon type cellulaire et compartiment",
              "Barrière sélective entre compartiments",
              "Structure dynamique et fonctionnelle"
            ]
          },
          "page2_concepts": {
            "titre": "Concepts clés",
            "concepts": [
              {
                "terme": "Molécule amphiphile",
                "definition": "Molécule possédant à la fois un groupe hydrophile (polaire) et un groupe hydrophobe (apolaire), caractéristique des phospholipides membranaires"
              },
              {
                "terme": "Asymétrie membranaire",
                "definition": "Répartition différentielle des lipides entre les deux feuillets de la membrane, avec des compositions distinctes côté externe et interne"
              },
              {
                "terme": "Fluidité membranaire",
                "definition": "Capacité de mouvement des molécules dans la membrane, dépendant de la température, du cholestérol et du degré d'insaturation des lipides"
              },
              {
                "terme": "Radeaux lipidiques",
                "definition": "Microdomaines membranaires enrichis en cholestérol et sphingolipides, servant de plateformes fonctionnelles pour la signalisation"
              },
              {
                "terme": "Glycocalyx",
                "definition": "Manteau de chaînes glucidiques présent sur la face externe des membranes, impliqué dans la reconnaissance et la protection cellulaire"
              },
              {
                "terme": "Transport actif",
                "definition": "Mécanisme de transport transmembranaire contre le gradient de concentration, nécessitant une dépense énergétique (ATP)"
              },
              {
                "terme": "Diffusion facilitée",
                "definition": "Transport passif de molécules selon leur gradient de concentration via des protéines spécialisées (canaux ou transporteurs)"
              },
              {
                "terme": "Perméabilité sélective",
                "definition": "Propriété des membranes à laisser passer certaines molécules selon leur taille, charge et lipophilie, tout en en bloquant d'autres"
              }
            ]
          },
          "page3_schemas": {
            "titre": "Schémas",
            "schemas": []
          },
          "page4_formules": {
            "titre": "Données clés",
            "formules": [
              {
                "label": "Seuil de perméabilité",
                "formule": "PM < 1000 Da",
                "unite": "Daltons"
              }
            ],
            "donnees": [
              {
                "label": "pH cytoplasmique",
                "valeur": "7"
              },
              {
                "label": "pH lysosomal",
                "valeur": "5"
              },
              {
                "label": "K+ intracellulaire",
                "valeur": "140 mM"
              },
              {
                "label": "K+ extracellulaire",
                "valeur": "4 mM"
              },
              {
                "label": "Na+ intracellulaire",
                "valeur": "10 mM"
              },
              {
                "label": "Na+ extracellulaire",
                "valeur": "140 mM"
              }
            ]
          },
          "page5_resume": {
            "titre": "Résumé",
            "points": [
              "Les membranes sont des bicouches lipidiques amphiphiles auto-organisées assurant la compartimentation cellulaire",
              "L'asymétrie membranaire crée des propriétés fonctionnelles spécifiques (potentiel membranaire, signalisation, apoptose)",
              "La fluidité membranaire est régulée par 4 facteurs : longueur des chaînes, insaturations, cholestérol et température",
              "Les radeaux lipidiques forment des plateformes fonctionnelles pour l'assemblage de complexes protéiques",
              "Le transport transmembranaire dépend de la nature physico-chimique des molécules et du gradient de concentration"
            ],
            "mnemo": "BAFRP : Bicouche Amphiphile, Fluidité Régulée, Radeaux Protéiques pour retenir les propriétés essentielles des membranes"
          }
        },
        "qcm": [
          {
            "question": "Quel phospholipide est principalement retrouvé sur le feuillet interne de la membrane plasmique ?",
            "options": [
              "Sphingomyéline",
              "Phosphatidylcholine",
              "Phosphatidylsérine",
              "Cholestérol"
            ],
            "correct": 2,
            "difficulte": "facile",
            "explication": "La phosphatidylsérine est principalement localisée sur le feuillet interne (cytosolique) de la membrane plasmique, contrairement à la sphingomyéline et phosphatidylcholine qui sont sur le feuillet externe."
          },
          {
            "question": "Quel facteur augmente la fluidité membranaire ?",
            "options": [
              "Augmentation du cholestérol",
              "Chaînes lipidiques plus longues",
              "Acides gras saturés",
              "Acides gras insaturés"
            ],
            "correct": 3,
            "difficulte": "moyen",
            "explication": "Les acides gras insaturés (avec doubles liaisons) créent des coudes dans les chaînes lipidiques, augmentant l'espace entre phospholipides et donc la fluidité membranaire."
          },
          {
            "question": "Que caractérise l'exposition de phosphatidylsérine sur le feuillet externe ?",
            "options": [
              "Activation cellulaire",
              "Division cellulaire",
              "Apoptose",
              "Différenciation"
            ],
            "correct": 2,
            "difficulte": "facile",
            "explication": "L'exposition de phosphatidylsérine sur le feuillet externe est un signal d'apoptose permettant aux macrophages de reconnaître et phagocyter les cellules mourantes."
          },
          {
            "question": "Quelles molécules traversent facilement la membrane par diffusion simple ?",
            "options": [
              "Glucose et ions",
              "O2 et CO2",
              "Acides aminés",
              "Protéines"
            ],
            "correct": 1,
            "difficulte": "facile",
            "explication": "L'O2 et CO2 sont des molécules gazeuses, petites, non chargées et lipophiles, leur permettant de traverser facilement la bicouche lipidique par diffusion simple."
          },
          {
            "question": "Que sont les radeaux lipidiques ?",
            "options": [
              "Zones riches en protéines",
              "Domaines enrichis en cholestérol et sphingolipides",
              "Régions perméables aux ions",
              "Sites de synthèse lipidique"
            ],
            "correct": 1,
            "difficulte": "moyen",
            "explication": "Les radeaux lipidiques sont des microdomaines membranaires enrichis en cholestérol et sphingolipides, résistants aux détergents et servant de plateformes pour l'assemblage de complexes protéiques."
          },
          {
            "question": "Quel est le rôle du glycocalyx ?",
            "options": [
              "Transport d'ions",
              "Synthèse protéique",
              "Protection et reconnaissance cellulaire",
              "Production d'énergie"
            ],
            "correct": 2,
            "difficulte": "moyen",
            "explication": "Le glycocalyx, formé de chaînes glucidiques sur la face externe, assure la protection mécanique, détermine les groupes sanguins et permet la reconnaissance cellulaire."
          },
          {
            "question": "Quelle est la différence fondamentale entre transport actif et diffusion facilitée ?",
            "options": [
              "Utilisation de protéines",
              "Sens du gradient",
              "Vitesse de transport",
              "Sélectivité"
            ],
            "correct": 1,
            "difficulte": "difficile",
            "explication": "Le transport actif se fait contre le gradient de concentration avec dépense d'énergie, tandis que la diffusion facilitée suit le gradient sans consommer d'énergie."
          }
        ]
      },
      {
        "id": "biologie-cellulaire-ch2",
        "titre": "Les jonctions cellulaires",
        "emoji": "🔗",
        "nouveau": true,
        "flashcardsData": [
          {
            "q": "Quels sont les 3 grands types de jonctions cellulaires ?",
            "r": "Les jonctions serrées (étanchéité), les jonctions d'ancrage (adhésion) et les jonctions communicantes (communication directe)"
          },
          {
            "q": "De quelles protéines sont constituées les jonctions serrées ?",
            "r": "D'occludines et de claudines, qui sont des tétraspanines avec 4 domaines transmembranaires"
          },
          {
            "q": "Quelle est la fonction principale des cadhérines ?",
            "r": "Assurer l'attachement solide des cellules entre elles dans les jonctions adhérentes, de façon calcium-dépendante"
          },
          {
            "q": "Qu'est-ce qui compose un connexon ?",
            "r": "6 connexines arrangées en cercle pour former un canal transmembranaire"
          },
          {
            "q": "Quelle taille maximale de molécules peut passer par les jonctions gap ?",
            "r": "1000 daltons maximum"
          },
          {
            "q": "De quoi sont composées les intégrines ?",
            "r": "D'un hétérodimère avec une chaîne α et une chaîne β liées de façon non covalente"
          },
          {
            "q": "Quel motif peptidique reconnaissent principalement les intégrines ?",
            "r": "Le domaine RGD (Arginine-Glycine-Aspartate) des protéines de la matrice extracellulaire"
          },
          {
            "q": "Quelle est la différence entre desmosomes et hémidesmosomes ?",
            "r": "Les desmosomes relient deux cellules via des cadhérines, les hémidesmosomes relient une cellule à la matrice via des intégrines"
          },
          {
            "q": "Pourquoi les interactions via intégrines sont-elles calcium et magnésium dépendantes ?",
            "r": "Car les chaînes α possèdent des sites de fixation pour ces cations essentiels à leur conformation active"
          },
          {
            "q": "Que sont les adhésions focales ?",
            "r": "Des regroupements d'intégrines à l'interface cellule-matrice qui permettent l'attachement et l'orientation du cytosquelette"
          }
        ],
        "fiche": {
          "page1_intro": {
            "titre": "Introduction",
            "texte": "Les jonctions cellulaires sont des structures protéiques spécialisées qui permettent aux cellules d'interagir entre elles et avec leur environnement. Elles sont particulièrement importantes dans les tissus épithéliaux qui forment des barrières et assurent des transports bidirectionnels. Ces jonctions maintiennent la polarité cellulaire en séparant le domaine apical (face au milieu extérieur) du domaine baso-latéral. Toutes les jonctions ont une fonction de signalisation et certaines assurent des fonctions spécialisées comme l'étanchéité, l'ancrage mécanique ou la communication intercellulaire. L'intégrité de ces jonctions est cruciale pour l'homéostasie tissulaire et leur dysfonctionnement peut conduire au développement de pathologies, notamment les carcinomes qui représentent 90% des tumeurs.",
            "points_cles": [
              "Trois types principaux : jonctions serrées, d'ancrage et communicantes",
              "Maintien de la polarité cellulaire épithéliale",
              "Fonctions d'étanchéité, d'adhésion et de communication",
              "Interaction cellule-cellule et cellule-matrice extracellulaire"
            ]
          },
          "page2_concepts": {
            "titre": "Concepts clés",
            "concepts": [
              {
                "terme": "Occludines et Claudines",
                "definition": "Protéines tétraspanines constituant les jonctions serrées, avec 4 domaines transmembranaires et des boucles extracellulaires spécifiques"
              },
              {
                "terme": "Cadhérines",
                "definition": "Protéines d'adhésion calcium-dépendantes des jonctions adhérentes, avec un long domaine extracellulaire et une liaison au cytosquelette d'actine via les caténines"
              },
              {
                "terme": "Connexons",
                "definition": "Structures formées de 6 connexines organisées en canal, permettant la communication directe entre cellules adjacentes"
              },
              {
                "terme": "Desmosomes",
                "definition": "Jonctions d'ancrage en forme de bouton-pression, connectées aux filaments intermédiaires via une plaque cytoplasmique dense"
              },
              {
                "terme": "Intégrines",
                "definition": "Récepteurs transmembranaires hétérodimériques (chaînes α et β) permettant l'interaction cellule-matrice extracellulaire"
              },
              {
                "terme": "Adhésions focales",
                "definition": "Regroupements d'intégrines formant des plaques d'adhésion cellule-matrice, connectées au cytosquelette d'actine"
              },
              {
                "terme": "Hémidesmosomes",
                "definition": "Structures d'ancrage cellule-matrice impliquant des intégrines et connectées aux filaments intermédiaires via la plectine"
              },
              {
                "terme": "Domaine RGD",
                "definition": "Séquence Arginine-Glycine-Aspartate reconnue par les intégrines sur les protéines de la matrice extracellulaire"
              }
            ]
          },
          "page3_schemas": {
            "titre": "Schémas",
            "schemas": []
          },
          "page4_formules": {
            "titre": "Données clés",
            "formules": [],
            "donnees": [
              {
                "label": "Taille maximale des molécules traversant les jonctions gap",
                "valeur": "≤ 1000 Da"
              },
              {
                "label": "Nombre de connexines par connexon",
                "valeur": "6"
              },
              {
                "label": "Nombre de domaines transmembranaires des tétraspanines",
                "valeur": "4"
              },
              {
                "label": "Types de chaînes α d'intégrines",
                "valeur": "14"
              },
              {
                "label": "Types de chaînes β d'intégrines",
                "valeur": "9"
              },
              {
                "label": "Pourcentage de tumeurs développées aux dépens des épithéliums",
                "valeur": "90%"
              }
            ]
          },
          "page5_resume": {
            "titre": "Résumé",
            "points": [
              "Les jonctions serrées (occludines/claudines) assurent l'étanchéité et maintiennent la polarité cellulaire",
              "Les jonctions d'ancrage (cadhérines dans les jonctions adhérentes, desmosomes) assurent la cohésion mécanique des tissus",
              "Les jonctions communicantes (connexons) permettent les échanges directs de petites molécules (<1000 Da) entre cellules",
              "Les intégrines (hétérodimères α/β) connectent les cellules à la matrice extracellulaire via les domaines RGD",
              "Toutes les jonctions ont une fonction de signalisation et sont connectées au cytosquelette pour la transmission des forces mécaniques"
            ],
            "mnemo": "OSCAR : Occludines Serrées, Cadhérines Adhérentes, connexonS communicantS, intégRines matricielles"
          }
        },
        "qcm": [
          {
            "question": "Quelle est la fonction principale des jonctions serrées ?",
            "options": [
              "Communication intercellulaire",
              "Adhésion mécanique",
              "Étanchéité et séparation des domaines membranaires",
              "Interaction avec la matrice"
            ],
            "correct": 2,
            "difficulte": "facile",
            "explication": "Les jonctions serrées assurent l'imperméabilité entre les cellules et séparent le domaine apical du domaine baso-latéral des cellules épithéliales."
          },
          {
            "question": "Les cadhérines des jonctions adhérentes nécessitent quel cation pour fonctionner ?",
            "options": [
              "Sodium",
              "Potassium",
              "Calcium",
              "Magnésium"
            ],
            "correct": 2,
            "difficulte": "facile",
            "explication": "Les cadhérines sont des protéines d'adhésion calcium-dépendantes avec des domaines de liaison au calcium au niveau N-terminal."
          },
          {
            "question": "Combien de connexines composent un connexon ?",
            "options": [
              "4",
              "6",
              "8",
              "12"
            ],
            "correct": 1,
            "difficulte": "moyen",
            "explication": "Un connexon est formé de 6 connexines arrangées en cercle pour former un canal transmembranaire."
          },
          {
            "question": "Quelle est la taille maximale des molécules pouvant traverser les jonctions gap ?",
            "options": [
              "500 Da",
              "1000 Da",
              "1500 Da",
              "2000 Da"
            ],
            "correct": 1,
            "difficulte": "moyen",
            "explication": "Les jonctions communicantes permettent le passage de molécules de taille inférieure ou égale à 1000 daltons."
          },
          {
            "question": "Les intégrines reconnaissent principalement quel motif dans la matrice extracellulaire ?",
            "options": [
              "RAD",
              "RGD",
              "RGE",
              "KGD"
            ],
            "correct": 1,
            "difficulte": "moyen",
            "explication": "Le domaine RGD (Arginine-Glycine-Aspartate) est le motif le plus souvent reconnu par les intégrines sur les protéines de la matrice extracellulaire."
          },
          {
            "question": "Quelle est la différence principale entre desmosomes et hémidesmosomes ?",
            "options": [
              "La taille",
              "Le type de cytosquelette connecté",
              "L'orientation dans la cellule",
              "Le partenaire d'interaction"
            ],
            "correct": 3,
            "difficulte": "difficile",
            "explication": "Les desmosomes relient deux cellules entre elles via des cadhérines, tandis que les hémidesmosomes relient une cellule à la matrice extracellulaire via des intégrines."
          },
          {
            "question": "Pourquoi les cellules cancéreuses peuvent-elles proliférer en milieu liquide contrairement aux cellules normales ?",
            "options": [
              "Elles n'ont pas besoin d'oxygène",
              "Elles n'ont pas besoin d'adhésion à la matrice",
              "Elles utilisent moins d'énergie",
              "Elles résistent mieux aux toxines"
            ],
            "correct": 1,
            "difficulte": "difficile",
            "explication": "Les cellules normales ont besoin des interactions avec la matrice extracellulaire pour proliférer, contrairement aux cellules cancéreuses qui ont acquis cette capacité anormale de prolifération en suspension."
          }
        ]
      },
      {
        "id": "biologie-cellulaire-ch3",
        "titre": "Le Cytosquelette",
        "emoji": "🧬",
        "nouveau": true,
        "flashcardsData": [
          {
            "q": "Quels sont les trois types de filaments du cytosquelette et leurs diamètres respectifs ?",
            "r": "Microfilaments d'actine (8nm), filaments intermédiaires (10-15nm), microtubules (25nm)"
          },
          {
            "q": "Que sont les MAP et quel est leur rôle ?",
            "r": "Microtubule-Associated Proteins : protéines accessoires qui stabilisent (MAP2, Tau) ou déstabilisent (catastrophine) les microtubules"
          },
          {
            "q": "Quelle est la composition d'un microtubule ?",
            "r": "Tube creux formé de 13 protofilaments, chaque protofilament étant un assemblage de dimères α et β tubuline"
          },
          {
            "q": "Que sont les filaments intermédiaires et quelle est leur fonction principale ?",
            "r": "Structures fibreuses résistantes (cytokératines, vimentine, lamines) qui maintiennent l'architecture cellulaire et assurent la cohésion tissulaire"
          },
          {
            "q": "Quelles sont les deux familles de protéines motrices des microtubules ?",
            "r": "Kinésines (mouvement vers extrémité +) et dynéines (mouvement vers extrémité -)"
          },
          {
            "q": "Qu'est-ce que l'instabilité dynamique des microtubules ?",
            "r": "Alternance de phases de polymérisation et dépolymérisation due à l'hydrolyse du GTP en GDP dans la tubuline β"
          },
          {
            "q": "Quel est le rôle de la coiffe GTP ?",
            "r": "Stabilise l'extrémité du microtubule en ralentissant l'hydrolyse GTP→GDP, permettant une croissance rapide"
          },
          {
            "q": "Que sont les lamines nucléaires ?",
            "r": "Filaments intermédiaires formant un réseau entre l'enveloppe nucléaire et la chromatine, stabilisant le noyau"
          },
          {
            "q": "Comment s'assemblent les filaments intermédiaires ?",
            "r": "Dimères → tétramères → octamères → filament final, assemblage spontané sans consommation d'énergie"
          },
          {
            "q": "Citez deux médicaments anticancéreux ciblant les microtubules",
            "r": "Taxol (bloque la dépolymérisation) et vinblastine/vincristine (bloquent la polymérisation)"
          }
        ],
        "fiche": {
          "page1_intro": {
            "titre": "Introduction",
            "texte": "Le cytosquelette est un réseau complexe de filaments protéiques qui structure la cellule et assure ses fonctions dynamiques. Composé de trois types de filaments aux propriétés distinctes, il détermine la forme cellulaire, organise les organites intracellulaires et permet la motilité. Les microfilaments d'actine (8nm) assurent la mobilité, les microtubules (25nm) le transport intracellulaire, et les filaments intermédiaires (10-15nm) l'architecture. Ce système hautement organisé et dynamique est essentiel au fonctionnement cellulaire normal et constitue une cible thérapeutique importante en cancérologie.",
            "points_cles": [
              "Trois types de filaments aux fonctions complémentaires",
              "Structure dynamique capable de remaniements rapides",
              "Protéines motrices permettant le transport intracellulaire",
              "Organisation polarisée à partir du centrosome"
            ]
          },
          "page2_concepts": {
            "titre": "Concepts clés",
            "concepts": [
              {
                "terme": "Instabilité dynamique",
                "definition": "Propriété des microtubules alternant phases de croissance et de raccourcissement selon l'état GTP/GDP de la tubuline β"
              },
              {
                "terme": "Coiffe GTP",
                "definition": "Région terminale du microtubule riche en tubuline-GTP qui stabilise la structure et favorise la polymérisation"
              },
              {
                "terme": "MAP (Microtubule-Associated Proteins)",
                "definition": "Protéines accessoires régulant la stabilité des microtubules (MAP2, Tau) ou leur dépolymérisation (catastrophine)"
              },
              {
                "terme": "Filaments intermédiaires",
                "definition": "Structures fibreuses résistantes spécifiques du type cellulaire, assurant l'architecture et la cohésion tissulaire"
              },
              {
                "terme": "Centrosome",
                "definition": "Centre organisateur des microtubules composé de deux centrioles et d'une matrice protéique contenant la γ-tubuline"
              },
              {
                "terme": "Protéines motrices",
                "definition": "Kinésines et dynéines permettant le transport directionnel d'organites le long des microtubules"
              },
              {
                "terme": "Domaine coil-coil",
                "definition": "Structure en hélice α des filaments intermédiaires favorisant les interactions protéine-protéine"
              },
              {
                "terme": "Catastrophe",
                "definition": "Dépolymérisation rapide des microtubules (100x plus rapide) en l'absence de coiffe GTP"
              }
            ]
          },
          "page3_schemas": {
            "titre": "Schémas",
            "schemas": []
          },
          "page4_formules": {
            "titre": "Données clés",
            "formules": [],
            "donnees": [
              {
                "label": "Diamètre microfilaments",
                "valeur": "8 nm"
              },
              {
                "label": "Diamètre filaments intermédiaires",
                "valeur": "10-15 nm"
              },
              {
                "label": "Diamètre microtubules",
                "valeur": "25 nm"
              },
              {
                "label": "Nombre de protofilaments/microtubule",
                "valeur": "13"
              },
              {
                "label": "Nombre de triplets/centriole",
                "valeur": "9"
              },
              {
                "label": "Vitesse dépolymérisation sans coiffe GTP",
                "valeur": "100x plus rapide"
              }
            ]
          },
          "page5_resume": {
            "titre": "Résumé",
            "points": [
              "Le cytosquelette comprend trois types de filaments : microfilaments (actine, 8nm), filaments intermédiaires (10-15nm) et microtubules (tubuline, 25nm)",
              "Les microtubules présentent une instabilité dynamique régulée par l'hydrolyse GTP→GDP et les MAP stabilisatrices ou déstabilisatrices",
              "Les filaments intermédiaires assurent l'architecture cellulaire avec une grande diversité selon le type cellulaire (cytokératines, vimentine, lamines)",
              "Les protéines motrices (kinésines et dynéines) permettent le transport intracellulaire le long des microtubules",
              "Le centrosome organise le réseau de microtubules polarisés dans la cellule en interphase"
            ],
            "mnemo": "MAC (Microfilaments-Actine-Cortex) : 8nm mobilité, FIA (Filaments Intermédiaires-Architecture) : 10-15nm structure, MiTu (Microtubules-Tubuline) : 25nm transport"
          }
        },
        "qcm": [
          {
            "question": "Quelle est la composition d'un microtubule ?",
            "options": [
              "13 protofilaments de dimères α et β tubuline",
              "9 triplets de tubuline γ",
              "8 octamères de vimentine",
              "2 filaments d'actine torsadés"
            ],
            "correct": 0,
            "difficulte": "facile",
            "explication": "Un microtubule est un tube creux formé de 13 protofilaments, chaque protofilament étant constitué de dimères α et β tubuline assemblés bout à bout."
          },
          {
            "question": "Quel médicament anticancéreux bloque la dépolymérisation des microtubules ?",
            "options": [
              "Colchicine",
              "Taxol",
              "Vinblastine",
              "Nocodazole"
            ],
            "correct": 1,
            "difficulte": "moyen",
            "explication": "Le Taxol stabilise les microtubules en bloquant leur dépolymérisation, contrairement aux autres molécules qui inhibent la polymérisation."
          },
          {
            "question": "Les lamines nucléaires appartiennent à quelle catégorie de filaments ?",
            "options": [
              "Microfilaments d'actine",
              "Microtubules",
              "Filaments intermédiaires",
              "Filaments de myosine"
            ],
            "correct": 2,
            "difficulte": "facile",
            "explication": "Les lamines nucléaires sont des filaments intermédiaires spécifiques du noyau, formant un réseau entre l'enveloppe nucléaire et la chromatine."
          },
          {
            "question": "Que se passe-t-il lors d'une 'catastrophe' des microtubules ?",
            "options": [
              "Polymérisation accélérée",
              "Dépolymérisation rapide en l'absence de coiffe GTP",
              "Formation de la coiffe GTP",
              "Activation des MAP stabilisatrices"
            ],
            "correct": 1,
            "difficulte": "moyen",
            "explication": "La catastrophe correspond à une dépolymérisation rapide (100x plus rapide) qui se produit quand il n'y a plus de coiffe GTP à l'extrémité du microtubule."
          },
          {
            "question": "Quelle protéine motrice se déplace vers l'extrémité + des microtubules ?",
            "options": [
              "Dynéine",
              "Myosine",
              "Kinésine",
              "Actine"
            ],
            "correct": 2,
            "difficulte": "facile",
            "explication": "Les kinésines se déplacent de l'extrémité - vers l'extrémité + des microtubules, contrairement aux dynéines qui vont dans le sens opposé."
          },
          {
            "question": "L'assemblage des filaments intermédiaires nécessite-t-il de l'énergie ?",
            "options": [
              "Oui, il consomme de l'ATP",
              "Oui, il consomme du GTP",
              "Non, c'est un assemblage spontané",
              "Oui, il nécessite des ions calcium"
            ],
            "correct": 2,
            "difficulte": "moyen",
            "explication": "L'assemblage des filaments intermédiaires est spontané grâce aux domaines coil-coil qui favorisent les interactions protéine-protéine, sans consommation d'énergie."
          },
          {
            "question": "Dans une cellule épithéliale polarisée, où se trouvent principalement les microfilaments d'actine ?",
            "options": [
              "Autour du noyau",
              "Dans les microvillosités et le cortex cellulaire",
              "Au centre organisateur",
              "Dans les desmosomes"
            ],
            "correct": 1,
            "difficulte": "moyen",
            "explication": "Les microfilaments d'actine se concentrent dans les microvillosités pour augmenter la surface d'absorption et forment le cortex cellulaire en périphérie."
          },
          {
            "question": "Quelle est la conséquence d'une phosphorylation anormale de la protéine Tau ?",
            "options": [
              "Stabilisation excessive des microtubules",
              "Formation d'amas fibrillaires dans la maladie d'Alzheimer",
              "Dépolymérisation complète du cytosquelette",
              "Blocage de la division cellulaire"
            ],
            "correct": 1,
            "difficulte": "difficile",
            "explication": "La phosphorylation anormale de Tau dans la maladie d'Alzheimer conduit à la formation d'amas de protéines qui s'organisent en fibres pathologiques."
          }
        ]
      },
      {
        "id": "biologie-cellulaire-ch4",
        "titre": "Communication intercellulaire",
        "emoji": "📡",
        "nouveau": true,
        "flashcardsData": [
          {
            "q": "Quels sont les 3 acteurs de la communication intercellulaire ?",
            "r": "Cellule émettrice (synthétise et sécrète le messager), messager/médiateur (signal soluble ou non soluble), cellule cible (possède le récepteur protéique)"
          },
          {
            "q": "Différence entre messager hydrophile et hydrophobe ?",
            "r": "Hydrophile : soluble, circule librement, ne traverse pas la membrane, récepteur membranaire, action rapide (ms-min). Hydrophobe : insoluble, protéine de transport, traverse la membrane, récepteur nucléaire, action lente (h-j)"
          },
          {
            "q": "Qu'est-ce que la signalisation autocrine ?",
            "r": "Sécrétion du messager dans le milieu extracellulaire par la cellule qui agit sur elle-même (cellule émettrice = cellule cible). Exemples : facteurs de croissance, cytokines"
          },
          {
            "q": "Caractéristiques de la signalisation endocrine ?",
            "r": "Hormone sécrétée dans la circulation sanguine, grande dispersion, cellules cibles à grande distance, faible concentration (<10⁻⁸ Mol), action lente et sélective"
          },
          {
            "q": "Structure d'un récepteur nucléaire ?",
            "r": "Domaine A/B (régulation), C (fixation ADN, doigts de zinc), D (charnière), E (fixation ligand), F (localisation nucléaire NLS)"
          },
          {
            "q": "Mécanisme du récepteur nicotinique à l'ACh ?",
            "r": "5 sous-unités (2α,1β,1δ,1γ), ACh se lie aux sous-unités α, ouverture du canal, entrée Na⁺/sortie K⁺, signal électrique, dégradation ACh, fermeture canal"
          },
          {
            "q": "Principe des protéines G ?",
            "r": "Commutateur moléculaire, activation par échange GDP→GTP (via GEF), inactivation par hydrolyse GTP→GDP (activité GTPasique intrinsèque)"
          },
          {
            "q": "Structure d'un RCPG ?",
            "r": "Protéine à 7 segments transmembranaires, site de liaison extracellulaire (côté NH₂), site de liaison intracellulaire pour protéine G (côté COOH)"
          },
          {
            "q": "Types de protéines G et leurs cibles ?",
            "r": "Gq (active phospholipase C), Gs (active adénylate cyclase), Gi (inhibe adénylate cyclase), Gt/transducine (active GMPc phosphodiestérase)"
          }
        ],
        "fiche": {
          "page1_intro": {
            "titre": "Introduction",
            "texte": "La communication intercellulaire est un processus fondamental qui permet aux cellules des organismes pluricellulaires de coordonner leurs activités. Elle implique trois acteurs principaux : une cellule émettrice qui synthétise et sécrète un messager chimique, le messager lui-même (molécule signal), et une cellule cible possédant un récepteur spécifique. Cette communication régule de nombreux processus vitaux comme le développement embryonnaire, l'homéostasie, la réparation tissulaire, l'immunité et le fonctionnement du système nerveux. Le défi principal réside dans le passage du messager à travers la membrane plasmique de la cellule cible.",
            "points_cles": [
              "Régulation de processus vitaux (développement, homéostasie, réparation, immunité)",
              "Trois acteurs : cellule émettrice, messager, cellule cible avec récepteur",
              "Transduction du signal : cascade enzymatique déclenchée par liaison récepteur-ligand",
              "Barrière membranaire détermine le type de récepteur (membranaire vs nucléaire)"
            ]
          },
          "page2_concepts": {
            "titre": "Concepts clés",
            "concepts": [
              {
                "terme": "Transduction",
                "definition": "Processus d'interprétation du signal par cascade de réactions enzymatiques aboutissant à un effet cellulaire après liaison récepteur-ligand"
              },
              {
                "terme": "Messager hydrophile",
                "definition": "Molécule soluble en milieu aqueux, circulant librement mais ne traversant pas la membrane, interagissant avec des récepteurs membranaires"
              },
              {
                "terme": "Messager hydrophobe",
                "definition": "Molécule insoluble nécessitant une protéine de transport, traversant directement la membrane pour interagir avec des récepteurs nucléaires"
              },
              {
                "terme": "Signalisation paracrine",
                "definition": "Communication où le médiateur local agit sur des cellules voisines par diffusion passive dans le milieu extracellulaire"
              },
              {
                "terme": "Récepteurs ionotropes",
                "definition": "Récepteurs membranaires couplés à un canal ionique, fonctionnant par ouverture/fermeture pour générer un signal électrique"
              },
              {
                "terme": "RCPG",
                "definition": "Récepteurs couplés aux protéines G, protéines à 7 domaines transmembranaires activant des voies de signalisation intracellulaires"
              },
              {
                "terme": "Protéine G",
                "definition": "Commutateur moléculaire hétérotrimérique (α,β,γ) s'activant par échange GDP/GTP et s'inactivant par hydrolyse GTP"
              },
              {
                "terme": "Récepteur nucléaire",
                "definition": "Récepteur intracellulaire à domaines spécialisés (doigts de zinc, NLS) régulant l'expression génique en réponse aux hormones stéroïdes"
              }
            ]
          },
          "page3_schemas": {
            "titre": "Schémas",
            "schemas": []
          },
          "page4_formules": {
            "titre": "Données clés",
            "formules": [],
            "donnees": [
              {
                "label": "Concentration neurotransmetteurs",
                "valeur": ">10⁻⁴ Mol"
              },
              {
                "label": "Concentration hormones",
                "valeur": "<10⁻⁸ Mol"
              },
              {
                "label": "Vitesse signalisation neuronale",
                "valeur": "millisecondes"
              },
              {
                "label": "Vitesse signalisation endocrine",
                "valeur": "secondes à minutes"
              },
              {
                "label": "Dégradation messagers hydrophiles",
                "valeur": "minutes à secondes"
              },
              {
                "label": "Dégradation messagers hydrophobes",
                "valeur": "heures à jours"
              }
            ]
          },
          "page5_resume": {
            "titre": "Résumé",
            "points": [
              "La communication intercellulaire coordonne les fonctions vitales via cellule émettrice, messager et cellule cible",
              "Les messagers hydrophiles utilisent des récepteurs membranaires pour une action rapide",
              "Les messagers hydrophobes traversent la membrane et activent des récepteurs nucléaires pour réguler l'expression génique",
              "Les types de signalisation varient par distance et mécanisme : autocrine, paracrine, neuronale, endocrine",
              "Les récepteurs se classent en ionotropes (canaux), RCPG (protéines G) et nucléaires selon leur mécanisme d'action"
            ],
            "mnemo": "CRIME : Cellule émettrice, Récepteur, Interprétation (transduction), Messager, Effet sur la cellule cible"
          }
        },
        "qcm": [
          {
            "question": "Quelle est la caractéristique principale des messagers hydrophobes ?",
            "options": [
              "Ils circulent librement dans le milieu extracellulaire",
              "Ils nécessitent une protéine de transport et traversent la membrane",
              "Ils se lient uniquement aux récepteurs membranaires",
              "Ils ont une action très rapide (millisecondes)"
            ],
            "correct": 1,
            "difficulte": "facile",
            "explication": "Les messagers hydrophobes sont insolubles en milieu aqueux, nécessitent des protéines de transport pour circuler et peuvent traverser directement la bicouche lipidique membranaire pour atteindre leurs récepteurs nucléaires."
          },
          {
            "question": "Dans la signalisation endocrine, quelle est la concentration typique des hormones ?",
            "options": [
              ">10⁻⁴ Mol",
              "10⁻⁶ Mol",
              "<10⁻⁸ Mol",
              "10⁻² Mol"
            ],
            "correct": 2,
            "difficulte": "moyen",
            "explication": "La signalisation endocrine se caractérise par une grande dispersion via la circulation sanguine, permettant une action à faible concentration (<10⁻⁸ Mol) sur des cellules cibles distantes."
          },
          {
            "question": "Quel domaine du récepteur nucléaire contient les 'doigts de zinc' ?",
            "options": [
              "Domaine A/B de régulation",
              "Domaine C de fixation à l'ADN",
              "Domaine E de fixation du ligand",
              "Domaine F de localisation nucléaire"
            ],
            "correct": 1,
            "difficulte": "moyen",
            "explication": "Le domaine C est le domaine de fixation à l'ADN, structuré en 'doigts de zinc' maintenus par des ions Zn²⁺, qui reconnaît la séquence HRE (Hormone Responsive Element) sur l'ADN."
          },
          {
            "question": "Que se passe-t-il lors de l'activation d'une protéine G ?",
            "options": [
              "Hydrolyse du GTP en GDP",
              "Échange du GTP par du GDP",
              "Échange du GDP par du GTP",
              "Phosphorylation de la sous-unité α"
            ],
            "correct": 2,
            "difficulte": "moyen",
            "explication": "L'activation d'une protéine G implique l'échange du GDP par du GTP grâce aux protéines GEF (GTP Exchange Factor), ce qui provoque un changement conformationnel activateur."
          },
          {
            "question": "Combien de sous-unités compose le récepteur nicotinique à l'acétylcholine ?",
            "options": [
              "3 sous-unités (1α, 1β, 1γ)",
              "4 sous-unités (2α, 1β, 1γ)",
              "5 sous-unités (2α, 1β, 1δ, 1γ)",
              "6 sous-unités (2α, 2β, 1δ, 1γ)"
            ],
            "correct": 2,
            "difficulte": "facile",
            "explication": "Le récepteur nicotinique à l'acétylcholine est composé de 5 sous-unités : 2α, 1β, 1δ, 1γ. L'acétylcholine se lie spécifiquement aux deux sous-unités α pour provoquer l'ouverture du canal."
          },
          {
            "question": "Quelle protéine G active la phospholipase C ?",
            "options": [
              "Protéine Gs",
              "Protéine Gi",
              "Protéine Gq",
              "Protéine Gt"
            ],
            "correct": 2,
            "difficulte": "difficile",
            "explication": "La protéine Gq active spécifiquement la phospholipase C qui produit les seconds messagers IP3 et diacylglycérol. Gs active l'adénylate cyclase, Gi l'inhibe, et Gt active la GMPc phosphodiestérase."
          },
          {
            "question": "Dans quelle type de signalisation la cellule émettrice est-elle identique à la cellule cible ?",
            "options": [
              "Signalisation paracrine",
              "Signalisation autocrine",
              "Signalisation endocrine",
              "Signalisation neuronale"
            ],
            "correct": 1,
            "difficulte": "facile",
            "explication": "Dans la signalisation autocrine, la cellule sécrète un médiateur dans le milieu extracellulaire qui agit sur elle-même via ses propres récepteurs, la cellule émettrice étant donc identique à la cellule cible."
          }
        ]
      },
      {
        "id": "biologie-cellulaire-ch5",
        "titre": "Systèmes endomembranaires",
        "emoji": "🧬",
        "nouveau": true,
        "flashcardsData": [
          {
            "q": "Quels sont les 3 types de transport intracellulaire ?",
            "r": "Transport transmembranaire (cytosol-mitochondrie/RE), transport par pores (cytosol-noyau), transport vésiculaire (membrane plasmique-Golgi)"
          },
          {
            "q": "Qu'est-ce que la particule SRP et quel est son rôle ?",
            "r": "Signal Recognition Particle : protéine cytosolique qui reconnaît le peptide signal hydrophobe, lie le ribosome et permet l'ancrage à la membrane du RE"
          },
          {
            "q": "Quelles sont les 4 étapes du transport vésiculaire ?",
            "r": "1) Formation de la vésicule avec bourgeonnement, 2) Transport de la vésicule, 3) Ancrage à la membrane cible, 4) Fusion des membranes"
          },
          {
            "q": "Quels sont les 3 types de manteaux des vésicules ?",
            "r": "COPII (RE vers Golgi), COPI (transport intra-golgien), Clathrine (endocytose et sortie du Golgi)"
          },
          {
            "q": "Comment est organisé l'appareil de Golgi ?",
            "r": "Structure polarisée : face cis (entrée des protéines), face médiane, face trans et TGN (sortie et tri des protéines)"
          },
          {
            "q": "Quelles sont les fonctions principales du RE ?",
            "r": "Biosynthèse des lipides, stockage du calcium, point de départ de la voie de sécrétion, maturation des protéines par glycosylation"
          },
          {
            "q": "Quel est le rôle des protéines SNARE ?",
            "r": "V-SNARE (sur vésicule) et T-SNARE (sur membrane cible) permettent l'ancrage et la fusion des vésicules avec leur membrane cible"
          },
          {
            "q": "Quels sont les 3 mécanismes d'endocytose ?",
            "r": "Phagocytose (particules solides grandes), Macropinocytose (liquides extracellulaires), Endocytose médiée par récepteur (clathrine)"
          },
          {
            "q": "Qu'est-ce que la sécrétion constitutive ?",
            "r": "Voie de sécrétion permanente, présente chez tous types cellulaires, permet le renouvellement membranaire et compense l'endocytose"
          },
          {
            "q": "Comment fonctionne le transport antérograde vs rétrograde ?",
            "r": "Antérograde : du centre vers la périphérie (kinésines), Rétrograde : de l'extérieur vers l'intérieur (dynéines)"
          }
        ],
        "fiche": {
          "page1_intro": {
            "titre": "Introduction",
            "texte": "Les systèmes endomembranaires constituent un réseau complexe d'organites interconnectés permettant le transport et la maturation des protéines dans la cellule eucaryote. Ce système comprend principalement le réticulum endoplasmique (RE), l'appareil de Golgi et les vésicules de transport. Il existe deux voies majeures : la voie de sécrétion (antérograde) qui achemine les protéines du centre cellulaire vers la périphérie, et la voie d'endocytose (rétrograde) qui permet l'entrée de matériaux extracellulaires. Ces voies utilisent un transport vésiculaire sophistiqué avec des manteaux spécialisés (COPII, COPI, clathrine) pour assurer la spécificité et l'efficacité du transport.",
            "points_cles": [
              "Transport vésiculaire entre organites membranaires",
              "Voie de sécrétion : RE → Golgi → destination finale",
              "Voie d'endocytose : membrane plasmique → intérieur cellulaire",
              "Manteaux vésiculaires spécialisés (COPII, COPI, clathrine)"
            ]
          },
          "page2_concepts": {
            "titre": "Concepts clés",
            "concepts": [
              {
                "terme": "SRP (Signal Recognition Particle)",
                "definition": "Protéine cytosolique composée de 6 protéines et d'ARN qui reconnaît le peptide signal des protéines destinées au RE et permet l'ancrage du ribosome"
              },
              {
                "terme": "Translocon",
                "definition": "Canal transmembranaire du RE permettant la translocation co-traductionnelle des protéines vers la lumière du RE"
              },
              {
                "terme": "Manteau vésiculaire",
                "definition": "Revêtement protéique des vésicules assurant la courbure membranaire et la sélection des cargos (COPII, COPI, clathrine)"
              },
              {
                "terme": "V-SNARE et T-SNARE",
                "definition": "Protéines d'ancrage : V-SNARE sur la vésicule, T-SNARE sur la membrane cible, permettent la fusion membranaire"
              },
              {
                "terme": "TGN (Trans-Golgi Network)",
                "definition": "Réseau trans-golgien, zone de tri et d'export des protéines vers leurs destinations finales"
              },
              {
                "terme": "GTPases (petites protéines G)",
                "definition": "Protéines régulatrices alternant entre état actif (GTP) et inactif (GDP), contrôlent le recrutement des manteaux vésiculaires"
              },
              {
                "terme": "Endocytose médiée par récepteur",
                "definition": "Mécanisme d'internalisation spécifique utilisant des récepteurs membranaires et des vésicules recouvertes de clathrine"
              },
              {
                "terme": "Sécrétion constitutive",
                "definition": "Voie de sécrétion permanente permettant le renouvellement membranaire et l'export non sélectif de protéines"
              }
            ]
          },
          "page3_schemas": {
            "titre": "Schémas",
            "schemas": []
          },
          "page4_formules": {
            "titre": "Données clés",
            "formules": [],
            "donnees": [
              {
                "label": "Taille des vésicules",
                "valeur": "60-100 nm"
              },
              {
                "label": "Concentration Ca2+ dans le RE",
                "valeur": "1000-8000 fois > cytosol"
              },
              {
                "label": "Composition SRP",
                "valeur": "6 protéines + 1 ARN + GTP"
              },
              {
                "label": "Organisation Golgi",
                "valeur": "Face cis → médiane → trans → TGN"
              }
            ]
          },
          "page5_resume": {
            "titre": "Résumé",
            "points": [
              "Trois types de transport : transmembranaire, par pores, et vésiculaire (majeur)",
              "Voie de sécrétion : RE (synthèse/maturation) → Golgi (tri) → destination finale",
              "Transport vésiculaire en 4 étapes : formation, transport, ancrage, fusion",
              "Trois manteaux spécialisés : COPII (RE-Golgi), COPI (intra-Golgi), clathrine (endocytose)",
              "Endocytose : phagocytose, macropinocytose, endocytose médiée par récepteur"
            ],
            "mnemo": "REVG-SNARE : RE produit, Vésicules transportent, Golgi trie, SNARE fusionne"
          }
        },
        "qcm": [
          {
            "question": "Quel manteau vésiculaire est responsable du transport du RE vers l'appareil de Golgi ?",
            "options": [
              "COPI",
              "COPII",
              "Clathrine",
              "Dynéine"
            ],
            "correct": 1,
            "difficulte": "facile",
            "explication": "COPII est spécifiquement responsable du transport antérograde du RE vers l'appareil de Golgi, tandis que COPI assure le transport intra-golgien et la clathrine l'endocytose."
          },
          {
            "question": "Quelle est la fonction de la particule SRP ?",
            "options": [
              "Former les manteaux vésiculaires",
              "Reconnaître le peptide signal et ancrer le ribosome au RE",
              "Catalyser la fusion membranaire",
              "Transporter les vésicules"
            ],
            "correct": 1,
            "difficulte": "moyen",
            "explication": "La SRP reconnaît le peptide signal hydrophobe des protéines naissantes et permet l'ancrage du ribosome à la membrane du RE via le récepteur SR."
          },
          {
            "question": "Dans quelle zone de l'appareil de Golgi s'effectue le tri des protéines ?",
            "options": [
              "Face cis",
              "Face médiane",
              "Face trans et TGN",
              "Réseau cis-golgien"
            ],
            "correct": 2,
            "difficulte": "facile",
            "explication": "Le tri des protéines s'effectue au niveau de la face trans et du TGN (Trans-Golgi Network) qui orientent les cargos vers leurs destinations finales."
          },
          {
            "question": "Quel est le rôle des petites protéines G dans le transport vésiculaire ?",
            "options": [
              "Former la courbure membranaire",
              "Recruter les protéines du manteau",
              "Assurer la fusion membranaire",
              "Transporter les vésicules"
            ],
            "correct": 1,
            "difficulte": "moyen",
            "explication": "Les petites protéines G (comme Arf1) activées par GTP recrutent les sous-unités du manteau vésiculaire et permettent la formation des vésicules."
          },
          {
            "question": "Combien d'étapes comprend le transport vésiculaire ?",
            "options": [
              "2 étapes",
              "3 étapes",
              "4 étapes",
              "5 étapes"
            ],
            "correct": 2,
            "difficulte": "facile",
            "explication": "Le transport vésiculaire comprend 4 étapes : formation de la vésicule, transport, ancrage à la membrane cible, et fusion des membranes."
          },
          {
            "question": "Quelle enzyme clive le peptide signal dans la lumière du RE ?",
            "options": [
              "SRP",
              "Translocon",
              "Peptidase signal",
              "GEF"
            ],
            "correct": 2,
            "difficulte": "moyen",
            "explication": "La peptidase signal, associée à la face interne de la membrane du RE, clive spécifiquement le peptide signal des protéines transloquées."
          },
          {
            "question": "Quel mécanisme d'endocytose utilise des vésicules recouvertes de clathrine ?",
            "options": [
              "Phagocytose",
              "Macropinocytose",
              "Endocytose médiée par récepteur",
              "Sécrétion constitutive"
            ],
            "correct": 2,
            "difficulte": "moyen",
            "explication": "L'endocytose médiée par récepteur utilise des vésicules recouvertes de clathrine pour l'internalisation spécifique de ligands via leurs récepteurs membranaires."
          },
          {
            "question": "Quelle est la différence entre transport antérograde et rétrograde ?",
            "options": [
              "Antérograde = kinésines, Rétrograde = dynéines",
              "Antérograde = dynéines, Rétrograde = kinésines",
              "Pas de différence de moteurs",
              "Seuls les microtubules changent"
            ],
            "correct": 0,
            "difficulte": "difficile",
            "explication": "Le transport antérograde (centre → périphérie) utilise les kinésines, tandis que le transport rétrograde (périphérie → centre) utilise les dynéines le long des microtubules polarisés."
          }
        ]
      },
      {
        "id": "biologie-cellulaire-ch6",
        "titre": "Mitochondries et peroxysomes",
        "emoji": "⚡",
        "nouveau": true,
        "flashcardsData": [
          {
            "q": "Combien de membranes possède une mitochondrie ?",
            "r": "Deux membranes : une membrane externe (double couche lipidique) et une membrane interne avec des crêtes mitochondriales qui augmentent la surface d'échange"
          },
          {
            "q": "Quelle est l'origine évolutive des mitochondries ?",
            "r": "Endosymbiose d'une archéobactérie aérobie par une cellule eucaryote primitive il y a 1,5 milliard d'années"
          },
          {
            "q": "Combien de gènes contient l'ADN mitochondrial ?",
            "r": "37 gènes au total (2 rRNAs, 22 tRNAs, 13 protéines de la chaîne OXPHOS) sur 16,6 Kb"
          },
          {
            "q": "Combien de complexes protéiques composent la phosphorylation oxydative ?",
            "r": "5 complexes : 4 enzymes (I, II, III, IV) dont 3 pompes à protons, et 1 ATP synthase (complexe V)"
          },
          {
            "q": "Quelles sont les principales enzymes des peroxysomes ?",
            "r": "Oxydases (produisent H₂O₂) et catalase (décompose H₂O₂), permettant la détoxification cellulaire"
          },
          {
            "q": "Où sont localisées les protéines codées par l'ADN mitochondrial ?",
            "r": "Toutes sur la face interne de la membrane interne mitochondriale, appartenant au complexe OXPHOS"
          },
          {
            "q": "Quelle est la principale fonction énergétique des mitochondries ?",
            "r": "Production d'ATP par phosphorylation oxydative grâce au gradient de protons créé par la chaîne respiratoire"
          },
          {
            "q": "Comment varie le nombre de mitochondries dans une cellule ?",
            "r": "En moyenne 1000 par cellule, mais dépend de l'activité métabolique (plus nombreuses dans neurones et cellules musculaires)"
          },
          {
            "q": "Quelle est la particularité de l'hérédité mitochondriale ?",
            "r": "Hérédité maternelle exclusive : seule la mère transmet ses mitochondries à l'enfant"
          },
          {
            "q": "Quelles molécules toxiques sont détoxifiées par les peroxysomes ?",
            "r": "Alcool, phénol, formaldéhyde, acide formique, principalement dans le foie et les reins"
          }
        ],
        "fiche": {
          "page1_intro": {
            "titre": "Introduction",
            "texte": "Les mitochondries et peroxysomes sont des organites essentiels du métabolisme cellulaire eucaryote. Les mitochondries, issues d'une endosymbiose ancestrale, sont les centrales énergétiques de la cellule grâce à la phosphorylation oxydative. Elles possèdent leur propre ADN et produisent la majorité de l'ATP cellulaire. Les peroxysomes, quant à eux, sont spécialisés dans les réactions d'oxydation et la détoxification cellulaire. Ces deux organites collaborent étroitement dans le métabolisme oxydatif, particulièrement pour la β-oxydation des acides gras et la neutralisation des substances toxiques.",
            "points_cles": [
              "Mitochondries : organites à double membrane avec ADN propre",
              "Phosphorylation oxydative : principale source d'ATP eucaryote",
              "Peroxysomes : organites de détoxification et d'oxydation",
              "Collaboration métabolique entre les deux organites"
            ]
          },
          "page2_concepts": {
            "titre": "Concepts clés",
            "concepts": [
              {
                "terme": "Endosymbiose",
                "definition": "Processus évolutif par lequel une archéobactérie aérobie a été phagocytée par une cellule eucaryote primitive il y a 1,5 milliard d'années, donnant naissance aux mitochondries"
              },
              {
                "terme": "Crêtes mitochondriales",
                "definition": "Invaginations de la membrane interne mitochondriale qui augmentent la surface d'échange avec la matrice mitochondriale"
              },
              {
                "terme": "OXPHOS",
                "definition": "Phosphorylation oxydative, système de 5 complexes protéiques produisant de l'ATP grâce au gradient de protons créé par la chaîne respiratoire"
              },
              {
                "terme": "ADN mitochondrial",
                "definition": "ADN double brin circulaire de 16,6 Kb contenant 37 gènes, à hérédité maternelle exclusive et code génétique différent de l'ADN nucléaire"
              },
              {
                "terme": "Catalase",
                "definition": "Enzyme principale des peroxysomes qui décompose le peroxyde d'hydrogène (H₂O₂) en oxydant les molécules toxiques"
              },
              {
                "terme": "Mitoribosomes",
                "definition": "Ribosomes spécialisés de la matrice mitochondriale permettant la synthèse des protéines codées par l'ADN mitochondrial"
              },
              {
                "terme": "Gradient de protons",
                "definition": "Différence de concentration de protons entre l'espace intermembranaire et la matrice mitochondriale, utilisée pour produire de l'ATP"
              },
              {
                "terme": "β-oxydation",
                "definition": "Processus de dégradation des acides gras se déroulant dans les mitochondries et peroxysomes pour produire de l'énergie"
              }
            ]
          },
          "page3_schemas": {
            "titre": "Schémas",
            "schemas": []
          },
          "page4_formules": {
            "titre": "Données clés",
            "formules": [
              {
                "label": "Réaction de l'adénylate kinase",
                "formule": "AMP + ATP → 2 ADP",
                "unite": ""
              }
            ],
            "donnees": [
              {
                "label": "Taille mitochondrie",
                "valeur": "0,5 à 1 μm × 1 à 10 μm"
              },
              {
                "label": "Nombre moyen de mitochondries",
                "valeur": "1000 par cellule"
              },
              {
                "label": "Taille ADN mitochondrial",
                "valeur": "16,6 Kb (16569 pb)"
              },
              {
                "label": "Nombre de gènes ADNm",
                "valeur": "37 gènes"
              },
              {
                "label": "Protéines OXPHOS totales",
                "valeur": "85 sous-unités"
              },
              {
                "label": "Diamètre peroxysomes",
                "valeur": "0,15 à 1,7 μm"
              },
              {
                "label": "Seuil de passage porine",
                "valeur": "< 10 000 Da"
              }
            ]
          },
          "page5_resume": {
            "titre": "Résumé",
            "points": [
              "Les mitochondries sont des organites à double membrane issus d'endosymbiose, possédant leur propre ADN de 37 gènes",
              "La phosphorylation oxydative (5 complexes protéiques) constitue la principale source d'ATP eucaryote",
              "Les peroxysomes détoxifient la cellule grâce aux oxydases et à la catalase, neutralisant les substances toxiques",
              "L'hérédité mitochondriale est exclusivement maternelle avec un code génétique spécifique",
              "Ces organites collaborent dans le métabolisme oxydatif, notamment la β-oxydation des acides gras"
            ],
            "mnemo": "MOPED : Mitochondries Oxydent Pour Énormément D'ATP (rappelle les 5 complexes OXPHOS et la collaboration avec les peroxysomes pour l'oxydation)"
          }
        },
        "qcm": [
          {
            "question": "Combien de complexes protéiques composent la phosphorylation oxydative mitochondriale ?",
            "options": [
              "3 complexes",
              "4 complexes",
              "5 complexes",
              "6 complexes"
            ],
            "correct": 2,
            "difficulte": "facile",
            "explication": "La phosphorylation oxydative comprend 5 complexes : 4 enzymes de la chaîne respiratoire (I, II, III, IV) et 1 ATP synthase (complexe V)"
          },
          {
            "question": "Quel est le nombre total de gènes présents dans l'ADN mitochondrial humain ?",
            "options": [
              "25 gènes",
              "37 gènes",
              "42 gènes",
              "50 gènes"
            ],
            "correct": 1,
            "difficulte": "moyen",
            "explication": "L'ADN mitochondrial contient exactement 37 gènes : 2 rRNAs, 22 tRNAs et 13 protéines de la chaîne OXPHOS"
          },
          {
            "question": "Quelle est la particularité du complexe II de la chaîne respiratoire ?",
            "options": [
              "Il pompe le plus de protons",
              "Il ne pompe pas de protons",
              "Il contient le plus de protéines",
              "Il est codé uniquement par l'ADN mitochondrial"
            ],
            "correct": 1,
            "difficulte": "difficile",
            "explication": "Le complexe II (SDH) est le seul complexe qui ne transloque pas de protons vers l'espace intermembranaire, contrairement aux complexes I, III et IV"
          },
          {
            "question": "Dans quels organes les peroxysomes jouent-ils principalement leur rôle de détoxification ?",
            "options": [
              "Cœur et poumons",
              "Foie et reins",
              "Cerveau et muscles",
              "Estomac et intestins"
            ],
            "correct": 1,
            "difficulte": "facile",
            "explication": "Les peroxysomes exercent principalement leur fonction de détoxification dans le foie et les reins, organes clés de l'épuration de l'organisme"
          },
          {
            "question": "Quelle est l'origine évolutive des mitochondries selon la théorie endosymbiotique ?",
            "options": [
              "Fusion de deux cellules eucaryotes",
              "Phagocytose d'une archéobactérie aérobie",
              "Division d'un organite préexistant",
              "Invagination de la membrane plasmique"
            ],
            "correct": 1,
            "difficulte": "moyen",
            "explication": "Les mitochondries proviennent de l'endosymbiose par phagocytose d'une archéobactérie aérobie par la cellule eucaryote primitive il y a 1,5 milliard d'années"
          },
          {
            "question": "Où sont localisées toutes les protéines codées par l'ADN mitochondrial ?",
            "options": [
              "Dans la matrice mitochondriale",
              "Sur la membrane externe",
              "Sur la face interne de la membrane interne",
              "Dans l'espace intermembranaire"
            ],
            "correct": 2,
            "difficulte": "difficile",
            "explication": "Toutes les 13 protéines codées par l'ADN mitochondrial sont localisées sur la face interne de la membrane interne et appartiennent au complexe OXPHOS"
          },
          {
            "question": "Quel est le mode de transmission de l'ADN mitochondrial ?",
            "options": [
              "Paternel exclusivement",
              "Maternel exclusivement",
              "Biparental",
              "Aléatoire"
            ],
            "correct": 1,
            "difficulte": "moyen",
            "explication": "L'hérédité mitochondriale est exclusivement maternelle : seule la mère transmet ses mitochondries à sa descendance"
          }
        ]
      },
      {
        "id": "biologie-cellulaire-ch7",
        "titre": "Apoptose et mort cellulaire",
        "emoji": "💀",
        "nouveau": true,
        "flashcardsData": [
          {
            "q": "Qu'est-ce que l'apoptose ?",
            "r": "Mort cellulaire programmée, processus physiologique hautement contrôlé, sans réaction inflammatoire, maintenant l'intégrité membranaire et formant des corps apoptotiques."
          },
          {
            "q": "Quelles sont les 2 voies principales de l'apoptose ?",
            "r": "Voie intrinsèque (dommages ADN, libération cytochrome C mitochondrial) et voie extrinsèque (signaux extracellulaires, récepteurs de mort)."
          },
          {
            "q": "Que sont les caspases ?",
            "r": "Cystéine-protéases du cytosol, divisées en caspases initiatrices (8, 9) qui activent les caspases effectrices (3, 6, 7) qui clivent les protéines cibles."
          },
          {
            "q": "Qu'est-ce que l'apoptosome ?",
            "r": "Complexe macromoléculaire formé d'APAF1, cytochrome C et pro-caspase 9, permettant l'activation de la caspase 9 puis de la caspase 3."
          },
          {
            "q": "Différence entre apoptose et nécrose ?",
            "r": "Apoptose : programmée, pas d'inflammation, corps apoptotiques. Nécrose : accidentelle, inflammation intense, rupture membranaire, libération d'enzymes lysosomiales."
          },
          {
            "q": "Rôle des protéines Bcl-2 ?",
            "r": "Contrôlent la libération du cytochrome C mitochondrial. Anti-apoptotiques (BCL-2, BCL-XL) vs pro-apoptotiques (BAX, BAK, famille BH3)."
          },
          {
            "q": "Fonction de p53 dans l'apoptose ?",
            "r": "Gardien du génome, détecte les dommages ADN, oriente vers réparation ou apoptose selon la gravité des lésions."
          },
          {
            "q": "Qu'est-ce que l'autophagie ?",
            "r": "Auto-cannibalisme cellulaire contrôlé, recyclage des composants usés (7% de la cellule/h), formation d'autophagosomes puis autolysosomes."
          },
          {
            "q": "Formation du DISC ?",
            "r": "Death Inducing Signaling Complex : trimérisation du récepteur de mort → recrutement FADD → activation pro-caspase 8 → caspase 8 active."
          },
          {
            "q": "Les 5 destins cellulaires ?",
            "r": "Prolifération (G1), quiescence (G0 réversible), apoptose (G0), sénescence (G0), différenciation (partiellement réversible)."
          }
        ],
        "fiche": {
          "page1_intro": {
            "titre": "Introduction",
            "texte": "L'apoptose est un processus fondamental de mort cellulaire programmée qui maintient l'homéostasie tissulaire. Contrairement à la nécrose qui est accidentelle et inflammatoire, l'apoptose est un mécanisme hautement contrôlé permettant l'élimination ordonnée des cellules endommagées ou inutiles. Ce processus implique deux voies principales : la voie intrinsèque déclenchée par des dommages intracellulaires et la voie extrinsèque activée par des signaux externes. Les caspases, enzymes clés de ce processus, orchestrent la dégradation contrôlée des composants cellulaires tout en préservant l'intégrité membranaire.",
            "points_cles": [
              "Mort cellulaire programmée sans inflammation",
              "Deux voies : intrinsèque et extrinsèque",
              "Cascade d'activation des caspases",
              "Formation de corps apoptotiques phagocytés"
            ]
          },
          "page2_concepts": {
            "titre": "Concepts clés",
            "concepts": [
              {
                "terme": "Apoptose",
                "definition": "Mort cellulaire programmée, processus physiologique contrôlé sans réaction inflammatoire, avec formation de corps apoptotiques"
              },
              {
                "terme": "Caspases",
                "definition": "Cystéine-protéases responsables de l'exécution de l'apoptose, divisées en initiatrices (8,9) et effectrices (3,6,7)"
              },
              {
                "terme": "Apoptosome",
                "definition": "Complexe macromoléculaire APAF1/cytochrome C/pro-caspase 9 activant la voie intrinsèque de l'apoptose"
              },
              {
                "terme": "Nécrose",
                "definition": "Mort cellulaire accidentelle et pathologique avec inflammation, rupture membranaire et libération d'enzymes"
              },
              {
                "terme": "Autophagie",
                "definition": "Processus d'auto-digestion contrôlée permettant le recyclage des composants cellulaires usés ou endommagés"
              },
              {
                "terme": "Protéines Bcl-2",
                "definition": "Famille de protéines régulatrices contrôlant la perméabilité mitochondriale et la libération du cytochrome C"
              },
              {
                "terme": "p53",
                "definition": "Protéine gardienne du génome détectant les dommages ADN et orientant vers la réparation ou l'apoptose"
              },
              {
                "terme": "DISC",
                "definition": "Death Inducing Signaling Complex formé lors de l'activation des récepteurs de mort dans la voie extrinsèque"
              }
            ]
          },
          "page3_schemas": {
            "titre": "Schémas",
            "schemas": []
          },
          "page4_formules": {
            "titre": "Données clés",
            "formules": [],
            "donnees": [
              {
                "label": "Autophagie cellulaire",
                "valeur": "7% de la cellule par heure"
              },
              {
                "label": "Phases de nécrose",
                "valeur": "2 phases : réversible puis irréversible"
              },
              {
                "label": "Caspases initiatrices",
                "valeur": "Caspases 8 et 9"
              },
              {
                "label": "Caspases effectrices",
                "valeur": "Caspases 3, 6 et 7"
              },
              {
                "label": "Destins cellulaires",
                "valeur": "5 possibilités depuis G1/G0"
              }
            ]
          },
          "page5_resume": {
            "titre": "Résumé",
            "points": [
              "L'apoptose est une mort cellulaire programmée sans inflammation, contrairement à la nécrose qui est accidentelle et inflammatoire",
              "Deux voies principales : intrinsèque (dommages ADN → cytochrome C) et extrinsèque (récepteurs de mort → DISC)",
              "Les caspases orchestrent le processus : initiatrices (8,9) activent les effectrices (3,6,7) qui dégradent les cibles",
              "Les protéines Bcl-2 régulent la libération mitochondriale du cytochrome C, p53 surveille l'intégrité génomique",
              "L'autophagie permet le recyclage cellulaire contrôlé, les corps apoptotiques sont phagocytés sans inflammation"
            ],
            "mnemo": "CASPASES : Contrôlée, Anti-inflammatoire, Sans rupture membranaire, Programmée, Apoptosome, Surveillance p53, Elimination propre, Survie tissulaire"
          }
        },
        "qcm": [
          {
            "question": "Quelle est la principale différence entre apoptose et nécrose ?",
            "options": [
              "L'apoptose provoque une inflammation",
              "La nécrose maintient l'intégrité membranaire",
              "L'apoptose est programmée sans inflammation",
              "La nécrose est plus rapide"
            ],
            "correct": 2,
            "difficulte": "facile",
            "explication": "L'apoptose est un processus programmé et contrôlé sans réaction inflammatoire, contrairement à la nécrose qui est accidentelle et provoque une forte inflammation."
          },
          {
            "question": "Dans la voie intrinsèque de l'apoptose, quel élément déclenche la formation de l'apoptosome ?",
            "options": [
              "La caspase 8",
              "Le cytochrome C",
              "Les récepteurs de mort",
              "La protéine FADD"
            ],
            "correct": 1,
            "difficulte": "moyen",
            "explication": "Le cytochrome C libéré par les mitochondries se lie à APAF1 pour former l'apoptosome qui recrute et active la pro-caspase 9."
          },
          {
            "question": "Quel est le rôle de p53 dans l'apoptose ?",
            "options": [
              "Activer directement les caspases",
              "Détecter les dommages ADN et orienter le destin cellulaire",
              "Former l'apoptosome",
              "Réguler l'autophagie"
            ],
            "correct": 1,
            "difficulte": "moyen",
            "explication": "p53 est le 'gardien du génome' qui détecte les dommages à l'ADN et oriente la cellule vers la réparation ou l'apoptose selon la gravité des lésions."
          },
          {
            "question": "Que signifie DISC dans la voie extrinsèque ?",
            "options": [
              "DNA Integrity Signaling Complex",
              "Death Inducing Signaling Complex",
              "DNA Induced Stress Complex",
              "Death Inhibitory Signaling Complex"
            ],
            "correct": 1,
            "difficulte": "facile",
            "explication": "DISC signifie Death Inducing Signaling Complex, complexe formé après activation des récepteurs de mort et responsable de l'activation de la caspase 8."
          },
          {
            "question": "Les protéines anti-apoptotiques de la famille Bcl-2 agissent en :",
            "options": [
              "Activant les caspases effectrices",
              "Empêchant la sortie du cytochrome C",
              "Formant des pores mitochondriaux",
              "Dégradant l'ADN"
            ],
            "correct": 1,
            "difficulte": "moyen",
            "explication": "Les protéines anti-apoptotiques comme BCL-2 et BCL-XL empêchent la formation de canaux mitochondriaux et donc la sortie du cytochrome C."
          },
          {
            "question": "L'autophagie représente environ quel pourcentage de recyclage cellulaire par heure ?",
            "options": [
              "3%",
              "5%",
              "7%",
              "10%"
            ],
            "correct": 2,
            "difficulte": "facile",
            "explication": "L'autophagie recycle environ 7% du contenu cellulaire toutes les heures, permettant l'élimination des composants usés ou endommagés."
          },
          {
            "question": "Parmi les éléments suivants, lequel N'EST PAS un destin cellulaire possible ?",
            "options": [
              "Quiescence",
              "Différenciation",
              "Sénescence",
              "Mitose continue"
            ],
            "correct": 3,
            "difficulte": "difficile",
            "explication": "Les 5 destins cellulaires sont : prolifération, quiescence, apoptose, sénescence et différenciation. La mitose continue n'est pas un destin normal et conduirait au cancer."
          }
        ]
      },
      {
        "id": "biologie-cellulaire-ch8",
        "titre": "Le noyau cellulaire",
        "emoji": "🧬",
        "nouveau": true,
        "flashcardsData": [
          {
            "q": "Quels sont les 4 composants principaux de l'enveloppe nucléaire ?",
            "r": "Membrane interne (contact nucléoplasme), espace périnucléaire, membrane externe (contact cytosol), et pores nucléaires perforant l'ensemble"
          },
          {
            "q": "Combien de pores nucléaires trouve-t-on dans une cellule mammifère ?",
            "r": "Environ 3500 pores nucléaires, nombre variable selon le type cellulaire et son activité métabolique"
          },
          {
            "q": "Qu'est-ce que la lamina et quel est son rôle ?",
            "r": "Filament intermédiaire (types A, B, C) tapissant la membrane nucléaire interne, donnant sa forme au noyau et interagissant avec la chromatine"
          },
          {
            "q": "Quelle est la différence entre hétérochromatine et euchromatine ?",
            "r": "Hétérochromatine : condensée, dense, non transcrite, périphérique. Euchromatine : moins condensée, dispersée, enrichie en gènes, transcriptionnellement active"
          },
          {
            "q": "Comment est organisé un nucléosome ?",
            "r": "ADN enroulé 2 fois autour d'un octamère d'histones (2×H2A, H2B, H3, H4), maintenu par interactions électrostatiques"
          },
          {
            "q": "Quel est le rôle de l'histone H1 ?",
            "r": "S'intercale entre brins d'ADN pour former la fibre de 30nm (solénoïde), augmentant le niveau de compaction chromatinienne"
          },
          {
            "q": "Qu'est-ce que le nucléole et quelle est sa fonction ?",
            "r": "Structure non membranaire où sont transcrits les ARNr 45S et assemblées les sous-unités ribosomales, organisée autour de 10 organisateurs nucléolaires"
          },
          {
            "q": "Quelle est la limite de taille pour la diffusion libre à travers les pores ?",
            "r": "≤ 40 kDa : diffusion libre sans énergie. > 40 kDa : transport actif nécessitant importines/exportines et hydrolyse du GTP"
          },
          {
            "q": "Que signifient NLS et NES ?",
            "r": "NLS (Nuclear Localization Signal) : signal d'import vers le noyau. NES (Nuclear Export Signal) : signal d'export vers le cytoplasme"
          },
          {
            "q": "Quelles sont les étapes de production d'ARNm mature ?",
            "r": "Formation du pré-ARNm par ARN polymérase II, épissage (excision introns + collage exons), ajout coiffe et queue polyA, export cytoplasmique"
          }
        ],
        "fiche": {
          "page1_intro": {
            "titre": "Introduction",
            "texte": "Le noyau est l'organite caractéristique des cellules eucaryotes, délimité par une double membrane percée de pores. Il contient l'ADN sous forme de chromatine et constitue le centre de contrôle cellulaire. Ses fonctions principales incluent la conservation du matériel génétique, la transcription de l'ARN et l'assemblage des ribosomes dans le nucléole. La structure nucléaire est hautement organisée avec des niveaux de compaction variables de la chromatine selon l'activité transcriptionnelle. Les échanges avec le cytoplasme sont finement régulés par les complexes de pores nucléaires.",
            "points_cles": [
              "Double membrane avec pores nucléaires",
              "Chromatine organisée en nucléosomes",
              "Nucléole pour synthèse ribosomale",
              "Transport nucléocytoplasmique régulé"
            ]
          },
          "page2_concepts": {
            "titre": "Concepts clés",
            "concepts": [
              {
                "terme": "Enveloppe nucléaire",
                "definition": "Double membrane délimitant le noyau, avec membrane interne tapissée de lamina et membrane externe continue avec le réticulum endoplasmique"
              },
              {
                "terme": "Pores nucléaires",
                "definition": "Complexes protéiques asymétriques composés de nucléoporines, permettant les échanges sélectifs entre noyau et cytoplasme"
              },
              {
                "terme": "Lamina",
                "definition": "Réseau de filaments intermédiaires (lamines A, B, C) tapissant la membrane nucléaire interne et donnant sa forme au noyau"
              },
              {
                "terme": "Chromatine",
                "definition": "Complexe d'ADN et de protéines (histones et non-histones) dans le noyau, avec différents niveaux de compaction"
              },
              {
                "terme": "Nucléosome",
                "definition": "Unité de base de la chromatine : ADN enroulé autour d'un octamère d'histones, reliés par l'ADN de liaison"
              },
              {
                "terme": "Hétérochromatine",
                "definition": "Chromatine condensée, transcriptionnellement inactive, localisée en périphérie nucléaire"
              },
              {
                "terme": "Euchromatine",
                "definition": "Chromatine décondensée, riche en gènes actifs, dispersée dans le nucléoplasme"
              },
              {
                "terme": "Nucléole",
                "definition": "Structure non membranaire site de transcription des ARN ribosomiques et d'assemblage des sous-unités ribosomales"
              }
            ]
          },
          "page3_schemas": {
            "titre": "Schémas",
            "schemas": []
          },
          "page4_formules": {
            "titre": "Données clés",
            "formules": [],
            "donnees": [
              {
                "label": "Nombre de pores nucléaires (cellule mammifère)",
                "valeur": "3500 pores"
              },
              {
                "label": "Diamètre noyau",
                "valeur": "≈ 10 μm"
              },
              {
                "label": "Longueur ADN humain",
                "valeur": "2,5 mètres"
              },
              {
                "label": "Nombre de chromosomes humains",
                "valeur": "46 chromosomes"
              },
              {
                "label": "Génome humain",
                "valeur": "2,85 × 10⁹ nucléotides"
              },
              {
                "label": "Seuil diffusion libre",
                "valeur": "≤ 40 kDa"
              },
              {
                "label": "Fibre nucléofilament",
                "valeur": "11 nm (collier) / 30 nm (solénoïde)"
              },
              {
                "label": "Organisateurs nucléolaires",
                "valeur": "10 (chromosomes 13,14,15,21,22)"
              }
            ]
          },
          "page5_resume": {
            "titre": "Résumé",
            "points": [
              "Le noyau est délimité par une double membrane percée de 3500 pores nucléaires permettant les échanges régulés",
              "La lamina (filaments A,B,C) structure l'enveloppe interne et interagit avec la chromatine",
              "La chromatine s'organise en nucléosomes (ADN + octamère d'histones) avec différents niveaux de compaction",
              "L'hétérochromatine (condensée, inactive) et l'euchromatine (active, dispersée) coexistent dans le noyau",
              "Le nucléole synthétise les ARNr et assemble les ribosomes sans membrane propre"
            ],
            "mnemo": "PLANCHE : Pores-Lamina-ADN-Nucléosomes-Chromatine-Histones-Échanges"
          }
        },
        "qcm": [
          {
            "question": "Quelle est la composition d'un octamère d'histones dans un nucléosome ?",
            "options": [
              "2×(H1+H2+H3+H4)",
              "2×(H2A+H2B+H3+H4)",
              "4×(H2A+H2B)",
              "8×H1"
            ],
            "correct": 1,
            "difficulte": "moyen",
            "explication": "Un octamère d'histones est composé de 2 exemplaires de chaque histone H2A, H2B, H3 et H4. L'histone H1 n'en fait pas partie mais s'intercale entre les nucléosomes."
          },
          {
            "question": "Combien de tours d'ADN s'enroulent autour d'un octamère d'histones ?",
            "options": [
              "1 tour",
              "2 tours",
              "3 tours",
              "4 tours"
            ],
            "correct": 1,
            "difficulte": "facile",
            "explication": "L'ADN s'enroule exactement 2 fois autour de l'octamère d'histones pour former un nucléosome, l'ADN entrant et sortant ne se croisant pas."
          },
          {
            "question": "Quel type de chromatine est transcriptionnellement actif ?",
            "options": [
              "Hétérochromatine constitutive",
              "Hétérochromatine facultative",
              "Euchromatine",
              "Chromatine centromérique"
            ],
            "correct": 2,
            "difficulte": "facile",
            "explication": "L'euchromatine est moins condensée, dispersée dans le nucléoplasme, enrichie en gènes et transcriptionnellement active, contrairement à l'hétérochromatine."
          },
          {
            "question": "Sur quels chromosomes humains trouve-t-on les organisateurs nucléolaires ?",
            "options": [
              "1,2,3,4,5",
              "13,14,15,21,22",
              "X,Y seulement",
              "Tous les chromosomes"
            ],
            "correct": 1,
            "difficulte": "difficile",
            "explication": "Les 10 organisateurs nucléolaires contenant les gènes d'ARNr sont localisés sur les chromosomes 13, 14, 15, 21 et 22 chez l'Homme."
          },
          {
            "question": "Quel mécanisme de transport nécessite des importines ?",
            "options": [
              "Diffusion libre de petites molécules",
              "Transport actif de protéines >40kDa",
              "Sortie passive d'ARNm",
              "Échange d'ions"
            ],
            "correct": 1,
            "difficulte": "moyen",
            "explication": "Les importines sont nécessaires pour le transport actif de molécules >40kDa vers le noyau, reconnaissant les signaux NLS et nécessitant l'hydrolyse du GTP."
          },
          {
            "question": "Quelle est la fonction principale de l'histone H1 ?",
            "options": [
              "Former le cœur du nucléosome",
              "Compacter la chromatine en fibre de 30nm",
              "Transcrire l'ADN",
              "Réparer l'ADN"
            ],
            "correct": 1,
            "difficulte": "moyen",
            "explication": "L'histone H1 s'intercale entre les brins d'ADN pour former la structure solénoïde de 30nm, augmentant le niveau de compaction chromatinienne."
          },
          {
            "question": "Combien de membranes composent l'enveloppe nucléaire ?",
            "options": [
              "1 membrane",
              "2 membranes",
              "3 membranes",
              "4 membranes"
            ],
            "correct": 1,
            "difficulte": "facile",
            "explication": "L'enveloppe nucléaire est composée de 2 membranes : une membrane interne au contact du nucléoplasme et une membrane externe continue avec le réticulum endoplasmique."
          },
          {
            "question": "Que devient le pré-ARNm lors de sa maturation ?",
            "options": [
              "Il est dégradé",
              "Il devient ARNr",
              "Il devient ARNm mature après épissage",
              "Il reste inchangé"
            ],
            "correct": 2,
            "difficulte": "moyen",
            "explication": "Le pré-ARNm subit un épissage (excision des introns, collage des exons), puis addition d'une coiffe et d'une queue polyA pour devenir un ARNm mature exportable."
          }
        ]
      },
      {
        "id": "biologie-cellulaire-ch9",
        "titre": "Cycle cellulaire et Mitose",
        "emoji": "🧬",
        "nouveau": true,
        "flashcardsData": [
          {
            "q": "Qu'est-ce que le cycle cellulaire ?",
            "r": "Processus fondamental par lequel une cellule-mère donne deux cellules-filles identiques entre elles et à la cellule dont elles dérivent"
          },
          {
            "q": "Quelles sont les 4 phases principales du cycle cellulaire ?",
            "r": "G1 (Gap 1), S (Synthèse), G2 (Gap 2), M (Mitose)"
          },
          {
            "q": "Que se passe-t-il pendant la phase S ?",
            "r": "Réplication de l'ADN, duplication du centrosome, et transcription active"
          },
          {
            "q": "Qu'est-ce qu'une Cdk ?",
            "r": "Cycline-Dépendant-Kinase : enzyme qui phosphoryle des protéines cibles pour réguler le cycle cellulaire"
          },
          {
            "q": "Quels sont les 3 points de contrôle du cycle cellulaire ?",
            "r": "Point de contrôle G1, point de contrôle d'entrée en mitose, point de contrôle du fuseau"
          },
          {
            "q": "Que signifie G0 ?",
            "r": "État quiescent mais actif où la cellule sort temporairement du cycle cellulaire"
          },
          {
            "q": "Comment les cyclines régulent-elles les Cdk ?",
            "r": "Les cyclines s'associent aux Cdk pour les activer, leur synthèse et dégradation contrôlent la progression du cycle"
          },
          {
            "q": "Quelle est la fonction de la protéine Rb ?",
            "r": "Protéine de contrôle dont la phosphorylation permet le passage du point de restriction G1/S"
          },
          {
            "q": "Que devient la quantité d'ADN pendant la phase S ?",
            "r": "Elle double, passant de 2C à 4C (C = quantité d'ADN haploïde)"
          },
          {
            "q": "Quels sont les 4 devenirs possibles d'une cellule en G0 ?",
            "r": "Retour dans le cycle, différenciation, apoptose, ou sénescence"
          }
        ],
        "fiche": {
          "page1_intro": {
            "titre": "Introduction",
            "texte": "Le cycle cellulaire est un processus fondamental qui permet à une cellule-mère de donner naissance à deux cellules-filles identiques. Ce mécanisme hautement régulé est essentiel à la croissance, au développement et au maintien des organismes vivants. Le cycle se compose de quatre phases principales : G1, S, G2 et M, avec des points de contrôle stricts qui assurent la fidélité de la division. La dysrégulation de ce processus peut conduire à des pathologies comme le cancer.",
            "points_cles": [
              "Une cellule-mère produit deux cellules-filles identiques",
              "Quatre phases : G1, S, G2, M avec l'interphase (G1+S+G2)",
              "Points de contrôle assurent la qualité de la division",
              "Régulation par les complexes Cdk/cyclines"
            ]
          },
          "page2_concepts": {
            "titre": "Concepts clés",
            "concepts": [
              {
                "terme": "Cycle cellulaire",
                "definition": "Ensemble d'événements organisés permettant à une cellule de se diviser en deux cellules identiques"
              },
              {
                "terme": "Interphase",
                "definition": "Période entre deux divisions comprenant les phases G1, S et G2"
              },
              {
                "terme": "Cdk (Cycline-Dependent Kinase)",
                "definition": "Enzyme qui phosphoryle des protéines cibles, active uniquement quand associée à une cycline"
              },
              {
                "terme": "Cycline",
                "definition": "Protéine régulatrice dont la concentration varie au cours du cycle, active les Cdk par association"
              },
              {
                "terme": "Point de contrôle",
                "definition": "Mécanisme de surveillance vérifiant l'achèvement correct d'une étape avant la suivante"
              },
              {
                "terme": "G0 (quiescence)",
                "definition": "État de sortie temporaire du cycle où la cellule reste active mais ne se divise pas"
              },
              {
                "terme": "Protéine Rb",
                "definition": "Protéine suppresseur de tumeur dont la phosphorylation contrôle le passage G1/S"
              },
              {
                "terme": "Centrosome",
                "definition": "Organite composé de deux centrioles, centre organisateur des microtubules, dupliqué en phase S"
              }
            ]
          },
          "page3_schemas": {
            "titre": "Schémas",
            "schemas": []
          },
          "page4_formules": {
            "titre": "Données clés",
            "formules": [
              {
                "label": "Durée cycle mammifère",
                "formule": "~24h",
                "unite": "heures"
              },
              {
                "label": "Quantité ADN en S",
                "formule": "2C → 4C",
                "unite": "C = contenu haploïde"
              }
            ],
            "donnees": [
              {
                "label": "Phase G1",
                "valeur": "~10h (variable)"
              },
              {
                "label": "Phase S",
                "valeur": "~9h (constante)"
              },
              {
                "label": "Phase G2",
                "valeur": "~4h"
              },
              {
                "label": "Phase M",
                "valeur": "~1h (constante)"
              },
              {
                "label": "Cellules intestinales",
                "valeur": "12h de cycle"
              },
              {
                "label": "Cellules hépatiques",
                "valeur": "1 an de cycle"
              }
            ]
          },
          "page5_resume": {
            "titre": "Résumé",
            "points": [
              "Le cycle cellulaire comprend 4 phases (G1-S-G2-M) avec des points de contrôle stricts",
              "Les complexes Cdk/cyclines sont les moteurs moléculaires du cycle",
              "La phase S double la quantité d'ADN et duplique le centrosome",
              "La protéine Rb contrôle le point de restriction G1/S",
              "Les cellules peuvent sortir en G0 et se différencier, entrer en apoptose ou redevenir quiescentes"
            ],
            "mnemo": "G1-S-G2-M : 'Grandir-Synthétiser-Grandir-Mitose' avec les Cdk/cyclines comme 'Contrôleurs Du Karma'"
          }
        },
        "qcm": [
          {
            "question": "Quelle est la phase la plus courte du cycle cellulaire chez les mammifères ?",
            "options": [
              "Phase G1",
              "Phase S",
              "Phase G2",
              "Phase M"
            ],
            "correct": 3,
            "difficulte": "facile",
            "explication": "La phase M (mitose) dure environ 1h sur un cycle total de 24h, c'est la phase la plus courte."
          },
          {
            "question": "Que se passe-t-il lors de la phosphorylation de la protéine Rb ?",
            "options": [
              "Blocage en G1",
              "Passage du point de restriction G1/S",
              "Arrêt de la transcription",
              "Condensation des chromosomes"
            ],
            "correct": 1,
            "difficulte": "moyen",
            "explication": "La phosphorylation de Rb libère E2F qui active l'expression des gènes de phase S, permettant la transition G1/S."
          },
          {
            "question": "Combien de centrioles possède une cellule après la phase S ?",
            "options": [
              "2 centrioles",
              "4 centrioles",
              "6 centrioles",
              "8 centrioles"
            ],
            "correct": 1,
            "difficulte": "moyen",
            "explication": "Après duplication du centrosome en phase S, la cellule possède 2 centrosomes soit 4 centrioles au total."
          },
          {
            "question": "Quel est le rôle principal des cyclines ?",
            "options": [
              "Phosphoryler l'ADN",
              "Activer les Cdk par association",
              "Condenser les chromosomes",
              "Former le fuseau mitotique"
            ],
            "correct": 1,
            "difficulte": "facile",
            "explication": "Les cyclines s'associent aux Cdk pour les activer, leur présence détermine l'activité kinase des Cdk."
          },
          {
            "question": "Dans quel ordre apparaissent les cyclines au cours du cycle ?",
            "options": [
              "A, B, D, E",
              "D, E, A, B",
              "E, D, B, A",
              "B, A, E, D"
            ],
            "correct": 1,
            "difficulte": "difficile",
            "explication": "L'ordre d'apparition est D (G1), E (fin G1/début S), A (S/G2), B (G2/M)."
          },
          {
            "question": "Que peut faire une cellule en phase G0 ?",
            "options": [
              "Seulement mourir par apoptose",
              "Se différencier ou ré-entrer dans le cycle",
              "Uniquement se diviser",
              "Seulement rester quiescente"
            ],
            "correct": 1,
            "difficulte": "moyen",
            "explication": "En G0, une cellule peut ré-entrer dans le cycle, se différencier, mourir par apoptose ou devenir sénescente."
          },
          {
            "question": "Combien y a-t-il de points de contrôle obligatoires dans le cycle cellulaire ?",
            "options": [
              "1",
              "2",
              "3",
              "4"
            ],
            "correct": 1,
            "difficulte": "difficile",
            "explication": "Il y a 2 points de contrôle obligatoires : le point de contrôle G1 et le point de contrôle du fuseau."
          }
        ]
      },
      {
        "id": "biologie-cellulaire-ch10",
        "titre": "Organisation et fonctions cellulaires",
        "emoji": "🔬",
        "nouveau": true,
        "flashcardsData": [
          {
            "q": "Quelles sont les principales phases de la mitose ?",
            "r": "Prophase, métaphase, anaphase, télophase, suivies de la cytodiérèse (division du cytoplasme)"
          },
          {
            "q": "Qu'est-ce que la membrane plasmique ?",
            "r": "Structure lipidique bicouche qui délimite la cellule, contrôle les échanges et maintient l'homéostasie cellulaire"
          },
          {
            "q": "Quels sont les trois types de filaments du cytosquelette ?",
            "r": "Microfilaments d'actine, microtubules et filaments intermédiaires"
          },
          {
            "q": "Qu'est-ce que le système endomembranaire ?",
            "r": "Réseau de membranes intracellulaires comprenant le RE, l'appareil de Golgi, les vésicules et les lysosomes"
          },
          {
            "q": "Quelle est la fonction principale des mitochondries ?",
            "r": "Production d'ATP par respiration cellulaire et régulation du métabolisme énergétique"
          },
          {
            "q": "Qu'est-ce que l'apoptose ?",
            "r": "Mort cellulaire programmée, processus physiologique d'élimination contrôlée des cellules"
          },
          {
            "q": "Que sont les jonctions cellulaires ?",
            "r": "Structures spécialisées permettant l'adhésion et la communication entre cellules adjacentes"
          },
          {
            "q": "Qu'est-ce que l'endocytose ?",
            "r": "Mécanisme d'internalisation de matériel extracellulaire par invagination de la membrane plasmique"
          },
          {
            "q": "Quel est le rôle des peroxysomes ?",
            "r": "Organites spécialisés dans la détoxification et l'oxydation des acides gras"
          },
          {
            "q": "Qu'est-ce que la communication intercellulaire ?",
            "r": "Échange d'informations entre cellules via des signaux chimiques ou physiques"
          }
        ],
        "fiche": {
          "page1_intro": {
            "titre": "Introduction",
            "texte": "La biologie cellulaire étudie l'organisation structurale et fonctionnelle des cellules eucaryotes. Ce chapitre couvre les aspects fondamentaux de l'architecture cellulaire, depuis le noyau jusqu'aux organites cytoplasmiques. Nous explorerons les mécanismes de division cellulaire, les systèmes membranaires, les voies de communication et les processus de transport. Ces connaissances sont essentielles pour comprendre le fonctionnement normal des tissus et les mécanismes pathologiques. L'approche intégrée permet d'appréhender la cellule comme une unité fonctionnelle complexe et dynamique.",
            "points_cles": [
              "Structure et fonction du noyau cellulaire",
              "Organisation des systèmes membranaires",
              "Mécanismes de transport et communication",
              "Processus de division et mort cellulaire"
            ]
          },
          "page2_concepts": {
            "titre": "Concepts clés",
            "concepts": [
              {
                "terme": "Mitose",
                "definition": "Division cellulaire permettant la formation de deux cellules filles génétiquement identiques à partir d'une cellule mère"
              },
              {
                "terme": "Cytosquelette",
                "definition": "Réseau de protéines filamenteuses qui maintient la forme cellulaire, organise les organites et permet les mouvements cellulaires"
              },
              {
                "terme": "Système endomembranaire",
                "definition": "Ensemble d'organites membranaires interconnectés assurant la synthèse, modification et transport des protéines"
              },
              {
                "terme": "Transport transmembranaire",
                "definition": "Passage sélectif de molécules à travers les membranes cellulaires par diffusion, transport actif ou vésiculaire"
              },
              {
                "terme": "Jonctions intercellulaires",
                "definition": "Structures spécialisées établissant des connexions physiques et fonctionnelles entre cellules adjacentes"
              },
              {
                "terme": "Apoptose",
                "definition": "Processus de mort cellulaire programmée caractérisé par des changements morphologiques et biochimiques spécifiques"
              },
              {
                "terme": "Mitochondrie",
                "definition": "Organite à double membrane responsable de la production d'ATP et de la régulation du métabolisme énergétique"
              },
              {
                "terme": "Peroxysome",
                "definition": "Organite contenant des enzymes oxydatives impliqué dans la détoxification et le métabolisme des lipides"
              }
            ]
          },
          "page3_schemas": {
            "titre": "Schémas",
            "schemas": []
          },
          "page4_formules": {
            "titre": "Données clés",
            "formules": [],
            "donnees": [
              {
                "label": "Durée cycle cellulaire",
                "valeur": "12-24 heures selon le type cellulaire"
              },
              {
                "label": "Épaisseur membrane plasmique",
                "valeur": "7-10 nm"
              },
              {
                "label": "Diamètre microtubule",
                "valeur": "25 nm"
              },
              {
                "label": "Diamètre microfilament",
                "valeur": "7 nm"
              },
              {
                "label": "Nombre de mitochondries/cellule",
                "valeur": "100-1000 selon l'activité métabolique"
              }
            ]
          },
          "page5_resume": {
            "titre": "Résumé",
            "points": [
              "Le noyau contrôle les activités cellulaires et contient l'information génétique organisée en chromosomes",
              "La membrane plasmique régule les échanges cellulaires via des mécanismes de transport passif et actif",
              "Le cytosquelette assure la structure cellulaire et permet la motilité et l'organisation intracellulaire",
              "Le système endomembranaire coordonne la synthèse, modification et transport des protéines",
              "Les mitochondries produisent l'énergie cellulaire tandis que l'apoptose élimine les cellules défectueuses"
            ],
            "mnemo": "NMCEM : Noyau commande, Membrane contrôle, Cytosquelette soutient, Endomembranes transportent, Mitochondries énergisent"
          }
        },
        "qcm": [
          {
            "question": "Quelle phase de la mitose correspond à l'alignement des chromosomes au centre de la cellule ?",
            "options": [
              "Prophase",
              "Métaphase",
              "Anaphase",
              "Télophase"
            ],
            "correct": 1,
            "difficulte": "facile",
            "explication": "La métaphase est caractérisée par l'alignement des chromosomes sur la plaque équatoriale au centre de la cellule, formant la plaque métaphasique."
          },
          {
            "question": "Quel type de transport ne nécessite pas d'énergie (ATP) ?",
            "options": [
              "Transport actif primaire",
              "Diffusion facilitée",
              "Pompe sodium-potassium",
              "Endocytose"
            ],
            "correct": 1,
            "difficulte": "moyen",
            "explication": "La diffusion facilitée utilise uniquement le gradient de concentration et des protéines transporteuses, sans consommation d'ATP."
          },
          {
            "question": "Quelle structure du cytosquelette est principalement impliquée dans la contraction musculaire ?",
            "options": [
              "Microtubules",
              "Filaments intermédiaires",
              "Microfilaments d'actine",
              "Centrosomes"
            ],
            "correct": 2,
            "difficulte": "moyen",
            "explication": "Les microfilaments d'actine, en interaction avec la myosine, forment le système contractile responsable de la contraction musculaire."
          },
          {
            "question": "Dans quelle organite a lieu la maturation des protéines synthesées par le réticulum endoplasmique rugueux ?",
            "options": [
              "Lysosome",
              "Appareil de Golgi",
              "Mitochondrie",
              "Peroxysome"
            ],
            "correct": 1,
            "difficulte": "facile",
            "explication": "L'appareil de Golgi reçoit les protéines du RE rugueux pour les modifier, les trier et les adresser vers leur destination finale."
          },
          {
            "question": "Quel processus caractérise l'apoptose par rapport à la nécrose ?",
            "options": [
              "Inflammation importante",
              "Lyse cellulaire brutale",
              "Fragmentation contrôlée de l'ADN",
              "Gonflement cellulaire"
            ],
            "correct": 2,
            "difficulte": "difficile",
            "explication": "L'apoptose se caractérise par une fragmentation ordonnée de l'ADN par des endonucléases, contrairement à la nécrose qui est un processus non contrôlé."
          },
          {
            "question": "Quelle jonction cellulaire assure l'étanchéité entre les cellules épithéliales ?",
            "options": [
              "Gap junction",
              "Jonction adhérente",
              "Jonction serrée",
              "Desmosome"
            ],
            "correct": 2,
            "difficulte": "moyen",
            "explication": "Les jonctions serrées (tight junctions) forment une barrière imperméable entre les cellules, empêchant le passage paracellulaire de molécules."
          },
          {
            "question": "Quel est le rôle principal des crêtes mitochondriales ?",
            "options": [
              "Stockage du calcium",
              "Augmentation de la surface pour la phosphorylation oxydative",
              "Synthèse des lipides",
              "Détoxification"
            ],
            "correct": 1,
            "difficulte": "moyen",
            "explication": "Les crêtes mitochondriales augmentent considérablement la surface de la membrane interne, optimisant l'efficacité de la chaîne respiratoire et la production d'ATP."
          },
          {
            "question": "L'endocytose médiée par récepteur permet principalement :",
            "options": [
              "L'ingestion de particules solides",
              "L'internalisation spécifique de ligands",
              "L'absorption de liquides",
              "L'élimination de déchets"
            ],
            "correct": 1,
            "difficulte": "difficile",
            "explication": "L'endocytose médiée par récepteur est un mécanisme sélectif permettant l'internalisation spécifique de molécules (ligands) reconnues par des récepteurs membranaires."
          }
        ]
      }
    ]
  },
  {
    "id": "biochimie",
    "emoji": "🧪",
    "nom": "Biochimie",
    "categorie": "anticipation",
    "niveau": "PASS/LAS",
    "color": "#1A3A5C",
    "cours": [
      {
        "id": "biochimie-ch1",
        "titre": "Structure et diversité du génome",
        "emoji": "🧬",
        "nouveau": false,
        "flashcardsData": [
          {
            "q": "Qu'est-ce que le génome ?",
            "r": "L'ensemble de l'information héréditaire d'un organisme, présent dans chaque cellule nucléée et assurant la conservation de l'espèce par hérédité."
          },
          {
            "q": "Quelle est la différence entre homozygote et hétérozygote ?",
            "r": "Homozygote : même allèle sur les 2 chromosomes à un locus donné. Hétérozygote : 2 allèles différents sur les 2 chromosomes à un même locus."
          },
          {
            "q": "Qu'est-ce qu'un nucléosome ?",
            "r": "Unité de base chromatinienne où l'ADN fait 2 tours (146 pb) autour d'un octamère d'histones H2a, H2b, H3 et H4, maintenu par l'histone H1."
          },
          {
            "q": "Combien de chromosomes dans le noyau d'une cellule humaine diploïde ?",
            "r": "46 chromosomes : 22 paires d'autosomes (chromosomes homologues) + 2 chromosomes sexuels (gonosomes X et Y)."
          },
          {
            "q": "Quelle est la différence principale entre ADN procaryote et eucaryote ?",
            "r": "Procaryote : compact, >90% codant, un seul chromosome. Eucaryote : moins compact, <10% codant, plusieurs chromosomes, présence d'introns."
          },
          {
            "q": "Qu'est-ce qui caractérise l'ADN mitochondrial ?",
            "r": "Circulaire, bicaténaire, non associé aux histones, transmis exclusivement par la mère, peut présenter une hétéroplasmie."
          },
          {
            "q": "Quelle proportion du génome humain est constituée de séquences répétées ?",
            "r": "50% de l'ADN total (75% de l'ADN intergénique qui représente 70% du génome), incluant 45% de transposons."
          },
          {
            "q": "Combien de gènes codant pour des protéines chez l'Homme ?",
            "r": "Environ 25 000 gènes, représentant moins de 10% des 30% de l'ADN génique total."
          }
        ],
        "fiche": {
          "page1_intro": {
            "titre": "Introduction",
            "texte": "Le génome représente l'ensemble de l'information héréditaire d'un organisme, stockée sous forme d'ADN dans chaque cellule nucléée. Chez l'Homme, ce génome est organisé en 46 chromosomes dans le noyau (22 paires d'autosomes + XY ou XX) et comprend environ 3 milliards de paires de bases réparties sur 25 000 gènes. Cette organisation complexe permet la conservation et la transmission de l'information génétique de génération en génération. Le génome humain présente une structure particulière avec seulement 30% de gènes dont moins de 10% codent effectivement pour des protéines, le reste étant constitué de séquences intergéniques souvent répétitives.",
            "points_cles": [
              "Génome = information héréditaire complète",
              "46 chromosomes chez l'Homme (22 paires + gonosomes)",
              "25 000 gènes pour 3 milliards de pb",
              "Moins de 10% du génome code pour des protéines"
            ]
          },
          "page2_concepts": {
            "titre": "Concepts clés",
            "concepts": [
              {
                "terme": "Locus",
                "definition": "Région chromosomique d'intérêt, pouvant être un gène ou une séquence extragénique"
              },
              {
                "terme": "Allèles",
                "definition": "Versions alternatives d'un locus génétique différant par leurs séquences nucléotidiques"
              },
              {
                "terme": "Hétérozygote composite",
                "definition": "Individu portant deux mutations différentes pour le même locus"
              },
              {
                "terme": "Nucléosome",
                "definition": "Unité de base de la chromatine : ADN enroulé autour d'un octamère d'histones"
              },
              {
                "terme": "Transposons",
                "definition": "Éléments mobiles du génome représentant 45% de l'ADN humain et permettant la plasticité génomique"
              },
              {
                "terme": "Hétéroplasmie",
                "definition": "Présence de plusieurs versions différentes d'ADN mitochondrial dans une même mitochondrie"
              }
            ]
          },
          "page3_schemas": {
            "titre": "Schémas",
            "schemas": []
          },
          "page4_formules": {
            "titre": "Données clés",
            "formules": [],
            "donnees": [
              {
                "label": "Taille du génome haploïde humain",
                "valeur": "3 × 10⁹ paires de bases"
              },
              {
                "label": "Nombre de chromosomes (cellules somatiques)",
                "valeur": "46 chromosomes"
              },
              {
                "label": "Nombre de gènes humains",
                "valeur": "≈ 25 000 gènes"
              },
              {
                "label": "Pourcentage d'ADN codant",
                "valeur": "< 10%"
              },
              {
                "label": "Pourcentage de séquences répétées",
                "valeur": "50% du génome total"
              },
              {
                "label": "Rapport de compaction chromosomique",
                "valeur": "8000:1"
              }
            ]
          },
          "page5_resume": {
            "titre": "Résumé",
            "points": [
              "Le génome humain contient 3 milliards de pb réparties sur 46 chromosomes avec 25 000 gènes",
              "Moins de 10% du génome code pour des protéines, 50% est constitué de séquences répétées",
              "L'ADN nucléaire est compacté en nucléosomes (ADN + histones) avec un rapport 8000:1",
              "Les concepts d'homozygote/hétérozygote sont essentiels pour comprendre les maladies génétiques",
              "L'ADN mitochondrial est circulaire, transmis par la mère et peut présenter une hétéroplasmie"
            ],
            "mnemo": "GRAND génome : Gènes 25000, Répétitions 50%, ADN compacté, Nucléosomes, Diploïde 46 chromosomes"
          }
        },
        "qcm": [
          {
            "question": "Combien de chromosomes trouve-t-on dans une cellule somatique humaine normale ?",
            "options": [
              "23 chromosomes",
              "44 chromosomes",
              "46 chromosomes",
              "48 chromosomes"
            ],
            "correct": 2,
            "difficulte": "facile",
            "explication": "Les cellules somatiques humaines sont diploïdes et contiennent 46 chromosomes : 22 paires d'autosomes + 2 gonosomes (XX ou XY)."
          },
          {
            "question": "Quelle est la principale différence entre l'ADN procaryote et eucaryote ?",
            "options": [
              "La taille des chromosomes",
              "Le pourcentage de séquences codantes",
              "Le nombre de brins",
              "La présence d'histones"
            ],
            "correct": 1,
            "difficulte": "moyen",
            "explication": "L'ADN procaryote est compact avec >90% de séquences codantes, tandis que l'ADN eucaryote est moins compact avec <10% de séquences codantes."
          },
          {
            "question": "Un individu hétérozygote composite présente :",
            "options": [
              "Deux allèles identiques",
              "Deux mutations différentes sur le même locus",
              "Une seule copie du gène",
              "Des chromosomes surnuméraires"
            ],
            "correct": 1,
            "difficulte": "moyen",
            "explication": "Un hétérozygote composite porte deux mutations différentes pour le même locus, héritées respectivement du père et de la mère."
          },
          {
            "question": "L'ADN mitochondrial se caractérise par :",
            "options": [
              "Une structure linéaire",
              "Une transmission paternelle",
              "Une association aux histones",
              "Une transmission maternelle exclusive"
            ],
            "correct": 3,
            "difficulte": "facile",
            "explication": "L'ADN mitochondrial est transmis exclusivement par la mère car l'ADN mitochondrial du spermatozoïde n'entre pas dans l'ovocyte."
          },
          {
            "question": "Quelle proportion du génome humain est constituée de transposons ?",
            "options": [
              "10%",
              "25%",
              "45%",
              "70%"
            ],
            "correct": 2,
            "difficulte": "difficile",
            "explication": "Les transposons représentent 45% du génome humain et constituent une grande partie de l'ADN intergénique répétitif."
          },
          {
            "question": "Dans un nucléosome, l'ADN fait combien de tours autour des histones ?",
            "options": [
              "1 tour",
              "2 tours",
              "3 tours",
              "4 tours"
            ],
            "correct": 1,
            "difficulte": "moyen",
            "explication": "Dans un nucléosome, l'ADN fait exactement 2 tours (146 paires de bases) autour d'un octamère d'histones."
          }
        ]
      },
      {
        "id": "biochimie-ch2",
        "titre": "Structure des acides nucléiques",
        "emoji": "🧬",
        "nouveau": true,
        "flashcardsData": [
          {
            "q": "Quels sont les 3 éléments constituants d'un nucléotide ?",
            "r": "Une base azotée (A, G, U, C, T), un pentose (ribose ou désoxyribose) et un groupement phosphate"
          },
          {
            "q": "Quelle est la différence entre un nucléoside et un nucléotide ?",
            "r": "Un nucléoside = base + sucre (sans phosphate), un nucléotide = base + sucre + phosphate"
          },
          {
            "q": "Quelles sont les bases puriques et pyrimidiques ?",
            "r": "Puriques (2 cycles) : Adénine (A) et Guanine (G). Pyrimidiques (1 cycle) : Cytosine (C), Thymine (T), Uracile (U)"
          },
          {
            "q": "Quelle base trouve-t-on dans l'ARN mais pas dans l'ADN ?",
            "r": "L'Uracile (U) se trouve uniquement dans l'ARN, tandis que la Thymine (T) se trouve uniquement dans l'ADN"
          },
          {
            "q": "Combien de liaisons hydrogène entre A-T et G-C ?",
            "r": "2 liaisons hydrogène entre A-T (ou A-U), 3 liaisons hydrogène entre G-C (plus fortes)"
          },
          {
            "q": "Dans quel sens lit-on une chaîne d'acide nucléique ?",
            "r": "De 5' vers 3', déterminé par l'extrémité 5' (phosphate libre) vers l'extrémité 3' (OH libre)"
          },
          {
            "q": "Quels sont les 4 types d'ARN et leur pourcentage ?",
            "r": "ARNr (82%), ARNt (16%), ARNm (2%), ARNsn (<1%)"
          },
          {
            "q": "Quelle est la périodicité de la double hélice d'ADN ?",
            "r": "10 nucléotides par tour, avec 1 grand sillon (interaction protéines) et 1 petit sillon"
          },
          {
            "q": "Quelle différence de stabilité entre ADN et ARN ?",
            "r": "L'ADN est plus stable (information génétique permanente) que l'ARN (fonction temporaire)"
          },
          {
            "q": "Comment sont orientés les brins d'ADN ?",
            "r": "Les deux brins sont antiparallèles : l'extrémité 5' d'un brin fait face à l'extrémité 3' de l'autre brin"
          }
        ],
        "fiche": {
          "page1_intro": {
            "titre": "Introduction",
            "texte": "Les acides nucléiques sont des polymères de nucléotides qui constituent les éléments de base de l'information génétique. Ils jouent des rôles multiples dans la cellule : porteurs d'énergie (ATP, GTP), composants de cofacteurs (NAD, FAD), intermédiaires de communication cellulaire (AMPc, GMPc) et donneurs de substrats (UDPG). Deux types principaux existent : l'ADN (acide désoxyribonucléique) qui stocke l'information génétique et l'ARN (acide ribonucléique) qui participe à l'expression des gènes. Chaque nucléotide est formé de trois composants essentiels : une base azotée, un sucre pentose et un groupement phosphate.",
            "points_cles": [
              "Polymères de nucléotides avec rôles énergétiques et informationnels",
              "Trois composants : base azotée, pentose, groupement phosphate",
              "ADN : stockage de l'information génétique (désoxyribose + T)",
              "ARN : expression génique (ribose + U)"
            ]
          },
          "page2_concepts": {
            "titre": "Concepts clés",
            "concepts": [
              {
                "terme": "Nucléotide",
                "definition": "Unité de base des acides nucléiques composée d'une base azotée, d'un pentose et d'un groupement phosphate"
              },
              {
                "terme": "Nucléoside",
                "definition": "Molécule formée par l'association d'une base azotée et d'un pentose, sans groupement phosphate"
              },
              {
                "terme": "Bases puriques",
                "definition": "Bases azotées à deux cycles (Adénine et Guanine) dérivées de la purine"
              },
              {
                "terme": "Bases pyrimidiques",
                "definition": "Bases azotées à un cycle (Cytosine, Thymine, Uracile) dérivées de la pyrimidine"
              },
              {
                "terme": "Liaison phosphodiester",
                "definition": "Liaison covalente entre le C3' d'un nucléotide et le phosphate du C5' du nucléotide suivant"
              },
              {
                "terme": "Complémentarité des bases",
                "definition": "Appariement spécifique des bases par liaisons hydrogène : A-T (2 liaisons), G-C (3 liaisons)"
              },
              {
                "terme": "Brins antiparallèles",
                "definition": "Orientation opposée des deux brins d'ADN, l'extrémité 5' d'un brin face à l'extrémité 3' de l'autre"
              },
              {
                "terme": "Double hélice",
                "definition": "Structure tridimensionnelle de l'ADN formée par deux brins complémentaires enroulés avec périodicité de 10 nucléotides"
              }
            ]
          },
          "page3_schemas": {
            "titre": "Schémas",
            "schemas": []
          },
          "page4_formules": {
            "titre": "Données clés",
            "formules": [],
            "donnees": [
              {
                "label": "ARN ribosomique (ARNr)",
                "valeur": "82% des ARN cellulaires"
              },
              {
                "label": "ARN de transfert (ARNt)",
                "valeur": "16% des ARN cellulaires"
              },
              {
                "label": "ARN messager (ARNm)",
                "valeur": "2% des ARN cellulaires"
              },
              {
                "label": "Liaisons hydrogène A-T/A-U",
                "valeur": "2 liaisons"
              },
              {
                "label": "Liaisons hydrogène G-C",
                "valeur": "3 liaisons"
              },
              {
                "label": "Périodicité double hélice",
                "valeur": "10 nucléotides par tour"
              },
              {
                "label": "Température fusion ADN 80% GC",
                "valeur": "100°C"
              },
              {
                "label": "Température fusion ADN 20% GC",
                "valeur": "77°C"
              }
            ]
          },
          "page5_resume": {
            "titre": "Résumé",
            "points": [
              "Les nucléotides sont composés de 3 éléments : base azotée, pentose, groupement phosphate",
              "L'ADN contient T et désoxyribose, l'ARN contient U et ribose",
              "Les bases s'apparient spécifiquement : A-T (2 liaisons H), G-C (3 liaisons H)",
              "L'ADN forme une double hélice antiparallèle stable, l'ARN est simple brin moins stable",
              "Quatre types d'ARN : ARNr (82%), ARNt (16%), ARNm (2%), ARNsn (<1%)"
            ],
            "mnemo": "GAUC Pour Toi : Guanine-Adénine-Uracile-Cytosine dans l'ARN, remplace U par Thymine pour l'ADN"
          }
        },
        "qcm": [
          {
            "question": "Quelle base azotée trouve-t-on uniquement dans l'ARN ?",
            "options": [
              "Thymine",
              "Uracile",
              "Cytosine",
              "Adénine"
            ],
            "correct": 1,
            "difficulte": "facile",
            "explication": "L'Uracile (U) se trouve uniquement dans l'ARN, tandis que la Thymine (T) se trouve uniquement dans l'ADN. Les autres bases (A, G, C) sont communes aux deux."
          },
          {
            "question": "Combien de liaisons hydrogène s'établissent entre la Guanine et la Cytosine ?",
            "options": [
              "1 liaison",
              "2 liaisons",
              "3 liaisons",
              "4 liaisons"
            ],
            "correct": 2,
            "difficulte": "moyen",
            "explication": "La paire G-C forme 3 liaisons hydrogène, ce qui la rend plus stable que la paire A-T/A-U qui n'en forme que 2. C'est pourquoi l'ADN riche en G-C nécessite plus d'énergie pour être dénaturé."
          },
          {
            "question": "Quelle est la différence principale entre ribose et désoxyribose ?",
            "options": [
              "Le nombre de carbones",
              "La présence d'un OH en C2'",
              "La forme cyclique",
              "La liaison avec les bases"
            ],
            "correct": 1,
            "difficulte": "moyen",
            "explication": "Le désoxyribose diffère du ribose par l'absence d'un groupement hydroxyle (OH) en position C2'. Cette différence confère une plus grande stabilité à l'ADN par rapport à l'ARN."
          },
          {
            "question": "Dans quel ordre sont reliés les nucléotides dans une chaîne d'acide nucléique ?",
            "options": [
              "C5' vers C3'",
              "C3' vers C5'",
              "C1' vers C4'",
              "C2' vers C5'"
            ],
            "correct": 0,
            "difficulte": "moyen",
            "explication": "Les nucléotides sont liés par des liaisons phosphodiester entre le C3' d'un nucléotide et le phosphate du C5' du suivant. Par convention, on lit la séquence de 5' vers 3'."
          },
          {
            "question": "Quel type d'ARN représente la plus grande proportion dans la cellule ?",
            "options": [
              "ARN messager",
              "ARN de transfert",
              "ARN ribosomique",
              "ARN small nuclear"
            ],
            "correct": 2,
            "difficulte": "facile",
            "explication": "L'ARN ribosomique (ARNr) représente 82% des ARN cellulaires. Il constitue la structure des ribosomes responsables de la synthèse protéique."
          },
          {
            "question": "Quelle est la périodicité de la double hélice d'ADN selon Watson et Crick ?",
            "options": [
              "5 nucléotides",
              "8 nucléotides",
              "10 nucléotides",
              "12 nucléotides"
            ],
            "correct": 2,
            "difficulte": "moyen",
            "explication": "La double hélice d'ADN présente une périodicité de 10 nucléotides par tour complet, créant un grand sillon et un petit sillon où peuvent s'insérer les protéines régulatrices."
          },
          {
            "question": "Qu'est-ce qui différencie un nucléoside d'un nucléotide ?",
            "options": [
              "Le type de base",
              "Le type de sucre",
              "La présence du phosphate",
              "Le nombre de cycles"
            ],
            "correct": 2,
            "difficulte": "facile",
            "explication": "Un nucléoside est composé d'une base + un sucre, tandis qu'un nucléotide est composé d'une base + un sucre + un groupement phosphate. La présence du phosphate fait la différence."
          },
          {
            "question": "Pourquoi l'ADN riche en G-C nécessite-t-il plus de chaleur pour être dénaturé ?",
            "options": [
              "Plus de liaisons covalentes",
              "3 liaisons hydrogène vs 2",
              "Plus de bases puriques",
              "Structure plus compacte"
            ],
            "correct": 1,
            "difficulte": "difficile",
            "explication": "Les paires G-C forment 3 liaisons hydrogène contre 2 pour les paires A-T. Plus il y a de G-C, plus l'ADN est stable et plus il faut d'énergie (température) pour séparer les brins : 100°C pour 80% G-C vs 77°C pour 20% G-C."
          }
        ]
      },
      {
        "id": "biochimie-ch3",
        "titre": "La réplication de l'ADN",
        "emoji": "🧬",
        "nouveau": true,
        "flashcardsData": [
          {
            "q": "Quel est le but principal de la réplication de l'ADN ?",
            "r": "Assurer la conservation des espèces en répliquant l'ADN (support de l'information génétique) et le transmettre en conservant son intégrité lors de la division cellulaire"
          },
          {
            "q": "Pendant quelle phase du cycle cellulaire se déroule la réplication ?",
            "r": "Pendant la phase S du cycle cellulaire, qui dure 6 à 8 heures"
          },
          {
            "q": "Qu'est-ce que la réplication semi-conservative ?",
            "r": "Processus où chaque brin de l'ADN parental sert de matrice pour un brin supplémentaire néosynthétisé, donnant deux molécules d'ADN identiques composées chacune d'un brin ancien et d'un brin nouveau"
          },
          {
            "q": "Dans quel sens s'effectue la synthèse d'ADN par les ADN polymérases ?",
            "r": "Toujours dans le sens 5' vers 3', en antisens par rapport au brin matrice, par formation de liaisons phosphodiester"
          },
          {
            "q": "Quelles sont les trois ADN polymérases essentielles pour la réplication ?",
            "r": "ADN polymérase α (initiation avec activité primase), ADN polymérase δ (brin discontinu), ADN polymérase ε (brin continu)"
          },
          {
            "q": "Que sont les fragments d'Okazaki ?",
            "r": "Petits duplexes ADN-ARN de 100-400 pb synthétisés lors de la réplication du brin retardé (discontinu) orienté 5'→3'"
          },
          {
            "q": "Quel est le rôle des télomères ?",
            "r": "Protéger le matériel génétique en formant l'extrémité des chromosomes avec 100-1000 répétitions du motif TTAGGG, empêchant la perte d'information génétique lors du raccourcissement"
          },
          {
            "q": "Quelles enzymes permettent le déroulement de l'ADN lors de la réplication ?",
            "r": "Les topoisomérases (déroulement en amont), les hélicases (séparation des brins avec activité ATPase) et les SSBP (stabilisation des simples brins)"
          },
          {
            "q": "Qu'est-ce qu'une origine de réplication (OR) ?",
            "r": "Séquences spécifiques de ~2000 paires de bases, reconnues par des protéines spécifiques, à l'origine d'une réplication bidirectionnelle. Multiples chez les eucaryotes (10-100 par chromosome)"
          },
          {
            "q": "Comment fonctionne la télomérase ?",
            "r": "Enzyme composée d'une reverse transcriptase et d'un petit ARN, qui synthétise l'ADN télomérique en utilisant son ARN comme matrice par complémentarité avec le télomère"
          }
        ],
        "fiche": {
          "page1_intro": {
            "titre": "Introduction",
            "texte": "La réplication de l'ADN est un processus fondamental qui permet la conservation des espèces en dupliquant fidèlement le patrimoine génétique. Elle se déroule pendant la phase S du cycle cellulaire et doit être d'une précision absolue pour éviter les mutations pouvant conduire à des maladies génétiques ou des cancers. Le processus suit le principe de la réplication semi-conservative où chaque brin parental sert de matrice. La complexité de ce mécanisme nécessite de nombreuses enzymes spécialisées et des systèmes de contrôle qualité très stricts.",
            "points_cles": [
              "Conservation fidèle du patrimoine génétique lors de la division cellulaire",
              "Réplication semi-conservative pendant la phase S du cycle cellulaire",
              "Précision extrême : moins d'une erreur par milliard de nucléotides",
              "Processus bidirectionnel à partir de multiples origines de réplication"
            ]
          },
          "page2_concepts": {
            "titre": "Concepts clés",
            "concepts": [
              {
                "terme": "Réplication semi-conservative",
                "definition": "Processus où chaque brin de l'ADN double brin parental sert de matrice pour synthétiser un nouveau brin complémentaire, produisant deux molécules d'ADN identiques"
              },
              {
                "terme": "Origine de réplication (OR)",
                "definition": "Séquences spécifiques d'environ 2000 paires de bases reconnues par des protéines, point de départ de la réplication bidirectionnelle"
              },
              {
                "terme": "Fourche de réplication",
                "definition": "Structure en Y formée par la séparation des deux brins d'ADN où s'effectue la synthèse des nouveaux brins"
              },
              {
                "terme": "Fragments d'Okazaki",
                "definition": "Courts segments d'ADN (100-400 pb) synthétisés de manière discontinue sur le brin retardé lors de la réplication"
              },
              {
                "terme": "Télomères",
                "definition": "Extrémités protectrices des chromosomes composées de répétitions du motif TTAGGG, raccourcies à chaque réplication"
              },
              {
                "terme": "ADN polymérase",
                "definition": "Enzymes catalysant la synthèse d'ADN dans le sens 5'→3' par formation de liaisons phosphodiester entre désoxynucléotides"
              },
              {
                "terme": "Topoisomérases",
                "definition": "Enzymes qui coupent et ressoudent l'ADN pour éviter le surenroulement lors de l'ouverture de la double hélice"
              },
              {
                "terme": "Hélicases",
                "definition": "Enzymes utilisant l'énergie de l'ATP pour séparer les deux brins d'ADN au niveau de la fourche de réplication"
              }
            ]
          },
          "page3_schemas": {
            "titre": "Schémas",
            "schemas": []
          },
          "page4_formules": {
            "titre": "Données clés",
            "formules": [],
            "donnees": [
              {
                "label": "Durée phase G1",
                "valeur": "~10 heures"
              },
              {
                "label": "Durée phase S",
                "valeur": "6-8 heures"
              },
              {
                "label": "Durée phase G2",
                "valeur": "2-6 heures"
              },
              {
                "label": "Durée phase M",
                "valeur": "1 heure"
              },
              {
                "label": "Taille origine de réplication",
                "valeur": "~2000 pb"
              },
              {
                "label": "Origines par chromosome eucaryote",
                "valeur": "10-100"
              },
              {
                "label": "Taille fragments d'Okazaki",
                "valeur": "100-400 pb"
              },
              {
                "label": "Vitesse d'élongation",
                "valeur": "10-100 nucléotides/s"
              },
              {
                "label": "Taille unité de réplication",
                "valeur": "100-200 kb"
              },
              {
                "label": "Motif télomérique humain",
                "valeur": "TTAGGG"
              }
            ]
          },
          "page5_resume": {
            "titre": "Résumé",
            "points": [
              "La réplication semi-conservative duplique fidèlement l'ADN pendant la phase S du cycle cellulaire",
              "Le processus est bidirectionnel à partir de multiples origines de réplication chez les eucaryotes",
              "Trois ADN polymérases principales : α (initiation), δ (brin discontinu), ε (brin continu)",
              "La synthèse s'effectue de manière continue sur un brin et discontinue (fragments d'Okazaki) sur l'autre",
              "Les télomères protègent les extrémités chromosomiques mais raccourcissent à chaque réplication"
            ],
            "mnemo": "REPI-TELO : REplication Semi-conservative, Polymérases (α,δ,ε), Initiation aux Origines, Télomères LOngévité"
          }
        },
        "qcm": [
          {
            "question": "Pendant quelle phase du cycle cellulaire se déroule la réplication de l'ADN ?",
            "options": [
              "Phase G1",
              "Phase S",
              "Phase G2",
              "Phase M"
            ],
            "correct": 1,
            "difficulte": "facile",
            "explication": "La réplication de l'ADN se déroule spécifiquement pendant la phase S (Synthèse) du cycle cellulaire, qui dure 6 à 8 heures."
          },
          {
            "question": "Quel est le principe de la réplication de l'ADN ?",
            "options": [
              "Réplication conservative",
              "Réplication semi-conservative",
              "Réplication dispersive",
              "Réplication aléatoire"
            ],
            "correct": 1,
            "difficulte": "facile",
            "explication": "La réplication est semi-conservative : chaque brin parental sert de matrice pour synthétiser un nouveau brin complémentaire."
          },
          {
            "question": "Dans quel sens s'effectue la synthèse d'ADN par les ADN polymérases ?",
            "options": [
              "3' vers 5'",
              "5' vers 3'",
              "Dans les deux sens",
              "Sens variable selon l'enzyme"
            ],
            "correct": 1,
            "difficulte": "moyen",
            "explication": "Toutes les ADN polymérases synthétisent l'ADN uniquement dans le sens 5' vers 3', en antisens par rapport au brin matrice."
          },
          {
            "question": "Que sont les fragments d'Okazaki ?",
            "options": [
              "Fragments d'ARN messager",
              "Courts segments d'ADN du brin discontinu",
              "Protéines de réplication",
              "Séquences télomériques"
            ],
            "correct": 1,
            "difficulte": "moyen",
            "explication": "Les fragments d'Okazaki sont de courts segments d'ADN (100-400 pb) synthétisés de manière discontinue sur le brin retardé."
          },
          {
            "question": "Quelle ADN polymérase possède une activité primase ?",
            "options": [
              "ADN polymérase δ",
              "ADN polymérase ε",
              "ADN polymérase α",
              "ADN polymérase β"
            ],
            "correct": 2,
            "difficulte": "difficile",
            "explication": "L'ADN polymérase α possède une activité primase qui permet la synthèse d'amorces ARN nécessaires à l'initiation de la réplication."
          },
          {
            "question": "Quel est le motif répétitif des télomères chez l'homme ?",
            "options": [
              "TTAAGG",
              "TTAGGG",
              "GGGTAA",
              "AATTCC"
            ],
            "correct": 1,
            "difficulte": "moyen",
            "explication": "Les télomères humains sont composés de 100-1000 répétitions du motif TTAGGG qui protège les extrémités chromosomiques."
          },
          {
            "question": "Quelle enzyme sépare les deux brins d'ADN au niveau de la fourche de réplication ?",
            "options": [
              "Topoisomérases",
              "Hélicases",
              "SSBP",
              "DNA ligase"
            ],
            "correct": 1,
            "difficulte": "moyen",
            "explication": "Les hélicases utilisent l'énergie de l'ATP pour séparer les deux brins d'ADN au niveau de la fourche de réplication."
          },
          {
            "question": "Combien d'origines de réplication trouve-t-on par chromosome chez les eucaryotes ?",
            "options": [
              "1 seule",
              "2 à 5",
              "10 à 100",
              "Plus de 1000"
            ],
            "correct": 2,
            "difficulte": "difficile",
            "explication": "Contrairement aux procaryotes qui n'ont qu'une origine, les eucaryotes possèdent 10 à 100 origines de réplication par chromosome pour accélérer le processus."
          }
        ]
      },
      {
        "id": "biochimie-ch4",
        "titre": "La transcription",
        "emoji": "🧬",
        "nouveau": true,
        "flashcardsData": [
          {
            "q": "Où se déroule la transcription ?",
            "r": "Dans le noyau de la cellule eucaryote"
          },
          {
            "q": "Dans quel sens est synthétisé l'ARN ?",
            "r": "Toujours de 5' vers 3'"
          },
          {
            "q": "Quelle est la séquence de la boîte TATA ?",
            "r": "TATATATA, située à 20-30 nucléotides en amont du site d'initiation"
          },
          {
            "q": "Quelle est la différence entre exons et introns ?",
            "r": "Les exons sont conservés dans l'ARNm mature et peuvent être traduits, les introns sont éliminés lors de l'épissage"
          },
          {
            "q": "Quel enzyme réalise la transcription ?",
            "r": "L'ARN polymérase II pour les gènes codant des protéines"
          },
          {
            "q": "Qu'est-ce que le brin antisens ?",
            "r": "Le brin d'ADN qui sert de matrice à l'ARN polymérase, complémentaire du brin sens"
          },
          {
            "q": "À quoi sert la coiffe 5' de l'ARNm ?",
            "r": "Stabilisation de l'ARNm, protection contre les exonucléases et potentialisation de la traduction"
          },
          {
            "q": "Que sont les sites consensus d'épissage ?",
            "r": "Site donneur (GU en 5'), site accepteur (AG en 3') et site de branchement (adénine)"
          },
          {
            "q": "Qu'est-ce que le spliceosome ?",
            "r": "Complexe multiprotéique (snRNAs U1, U2, U4, U5, U6) qui réalise l'épissage des introns"
          },
          {
            "q": "Combien de bases par seconde transcrit l'ARN polymérase II ?",
            "r": "Environ 50 paires de bases par seconde"
          }
        ],
        "fiche": {
          "page1_intro": {
            "titre": "Introduction",
            "texte": "La transcription est la première étape de l'expression génique qui permet de passer de l'information contenue dans l'ADN à un ARN messager. Ce processus se déroule dans le noyau des cellules eucaryotes et consiste en la synthèse d'un ARN dont la séquence reproduit celle du brin sens de l'ADN. L'ARN polymérase II lit le brin antisens de l'ADN pour produire un transcrit primaire qui subira ensuite une maturation avant d'être traduit en protéine dans le cytoplasme.",
            "points_cles": [
              "Synthèse d'ARN à partir de l'ADN dans le noyau",
              "Lecture du brin antisens par l'ARN polymérase II",
              "Production d'un transcrit primaire nécessitant une maturation",
              "Étape préalable indispensable à la synthèse protéique"
            ]
          },
          "page2_concepts": {
            "titre": "Concepts clés",
            "concepts": [
              {
                "terme": "Brin sens",
                "definition": "Brin d'ADN dont la séquence est identique à l'ARN transcrit (sauf T→U), ne sert pas de matrice"
              },
              {
                "terme": "Brin antisens",
                "definition": "Brin d'ADN complémentaire servant de matrice à l'ARN polymérase II"
              },
              {
                "terme": "Boîte TATA",
                "definition": "Séquence TATATATA du promoteur située à 20-30 nucléotides en amont, site de fixation du facteur TFIID"
              },
              {
                "terme": "Exon",
                "definition": "Séquence d'un gène transcrite et conservée dans l'ARNm mature, peut être codante ou non"
              },
              {
                "terme": "Intron",
                "definition": "Séquence non codante d'un gène éliminée lors de l'épissage"
              },
              {
                "terme": "Épissage",
                "definition": "Processus d'excision des introns et de jonction des exons réalisé par le spliceosome"
              },
              {
                "terme": "Coiffe 5'",
                "definition": "Structure de protection ajoutée à l'extrémité 5' de l'ARNm pour sa stabilisation et sa traduction"
              },
              {
                "terme": "Queue polyA",
                "definition": "Séquence de 100-200 adénines ajoutée en 3' pour protéger l'ARNm et moduler sa traduction"
              }
            ]
          },
          "page3_schemas": {
            "titre": "Schémas",
            "schemas": []
          },
          "page4_formules": {
            "titre": "Données clés",
            "formules": [],
            "donnees": [
              {
                "label": "Vitesse de transcription",
                "valeur": "50 pb/s"
              },
              {
                "label": "Distance boîte TATA",
                "valeur": "20-30 nucléotides en amont"
              },
              {
                "label": "Distance boîte CAAT",
                "valeur": "80 nucléotides en amont"
              },
              {
                "label": "Longueur queue polyA",
                "valeur": "100-200 adénines"
              },
              {
                "label": "Bulle de transcription",
                "valeur": "12 paires de bases"
              },
              {
                "label": "Hybride ARN-ADN",
                "valeur": "8 paires de bases"
              }
            ]
          },
          "page5_resume": {
            "titre": "Résumé",
            "points": [
              "La transcription synthétise un ARN de 5' vers 3' à partir du brin antisens de l'ADN",
              "L'initiation nécessite la reconnaissance des boîtes TATA et CAAT par des facteurs de transcription",
              "L'ARN polymérase II progresse le long du gène en formant une bulle de transcription",
              "Le transcrit primaire subit une maturation : ajout d'une coiffe 5', d'une queue polyA 3' et épissage",
              "L'épissage élimine les introns grâce au spliceosome qui reconnaît les sites consensus GU-AG"
            ],
            "mnemo": "TICE : TATA Initie, Coiffe Et queue polyA, Épissage élimine les introns"
          }
        },
        "qcm": [
          {
            "question": "Dans quel sens l'ARN polymérase II synthétise-t-elle l'ARN ?",
            "options": [
              "De 3' vers 5'",
              "De 5' vers 3'",
              "Dans les deux sens",
              "Dépend du gène"
            ],
            "correct": 1,
            "difficulte": "facile",
            "explication": "L'ARN est toujours synthétisé de 5' vers 3' par l'ARN polymérase II, c'est une règle fondamentale de la transcription."
          },
          {
            "question": "Quelle séquence caractérise la boîte TATA ?",
            "options": [
              "GGCCCATCCAT",
              "TATATATA",
              "AAUAAA",
              "CAAT"
            ],
            "correct": 1,
            "difficulte": "facile",
            "explication": "La boîte TATA a pour séquence TATATATA et constitue l'élément principal du promoteur pour l'initiation de la transcription."
          },
          {
            "question": "Quel est le rôle du spliceosome ?",
            "options": [
              "Ajouter la coiffe 5'",
              "Éliminer les introns",
              "Synthétiser l'ARN",
              "Ajouter la queue polyA"
            ],
            "correct": 1,
            "difficulte": "moyen",
            "explication": "Le spliceosome est un complexe de snRNPs qui reconnaît les sites consensus d'épissage et élimine les introns du transcrit primaire."
          },
          {
            "question": "Quelles sont les séquences des sites consensus d'épissage ?",
            "options": [
              "AU en 5' et GC en 3'",
              "GU en 5' et AG en 3'",
              "CG en 5' et UA en 3'",
              "AA en 5' et UU en 3'"
            ],
            "correct": 1,
            "difficulte": "moyen",
            "explication": "Les sites consensus d'épissage sont GU au début de l'intron (site donneur) et AG à la fin (site accepteur), très conservés."
          },
          {
            "question": "À quoi sert la coiffe 5' de l'ARNm ?",
            "options": [
              "Uniquement à la protection",
              "Protection et potentialisation de la traduction",
              "Uniquement à l'export nucléaire",
              "Reconnaissance par les ribosomes"
            ],
            "correct": 1,
            "difficulte": "moyen",
            "explication": "La coiffe 5' protège l'ARNm contre les exonucléases et potentialise la traduction via le recrutement du facteur eIF4E."
          },
          {
            "question": "Combien de paires de bases l'ARN polymérase II transcrit-elle par seconde ?",
            "options": [
              "10 pb/s",
              "50 pb/s",
              "100 pb/s",
              "200 pb/s"
            ],
            "correct": 1,
            "difficulte": "difficile",
            "explication": "L'ARN polymérase II progresse à une vitesse d'environ 50 paires de bases par seconde lors de l'élongation."
          },
          {
            "question": "Que devient l'ARNm après maturation ?",
            "options": [
              "Il reste dans le noyau",
              "Il est dégradé",
              "Il passe dans le cytoplasme",
              "Il retourne à l'ADN"
            ],
            "correct": 2,
            "difficulte": "facile",
            "explication": "Après maturation complète, l'ARNm mature passe dans le cytoplasme par les pores nucléaires pour être traduit par les ribosomes."
          },
          {
            "question": "Quel facteur de transcription se fixe en premier sur la boîte TATA ?",
            "options": [
              "TFIIA",
              "TFIIB",
              "TFIID",
              "TFIIE"
            ],
            "correct": 2,
            "difficulte": "difficile",
            "explication": "Le facteur TFIID est le premier à se fixer sur la boîte TATA avec une affinité 10⁶ fois supérieure aux autres séquences."
          }
        ]
      },
      {
        "id": "biochimie-ch5",
        "titre": "La traduction",
        "emoji": "🧬",
        "nouveau": true,
        "flashcardsData": [
          {
            "q": "Que signifie traduction en biologie moléculaire ?",
            "r": "Lecture d'un ARNm par des ribosomes qui synthétisent des protéines dont la structure primaire est déterminée par celle de cet ARNm, dans le sens 5'-3'"
          },
          {
            "q": "Qu'est-ce qu'un codon ?",
            "r": "Ensemble de trois nucléotides de la séquence d'un acide nucléique portant l'information génétique permettant l'incorporation d'un acide aminé dans la séquence primaire d'une protéine"
          },
          {
            "q": "Combien existe-t-il de codons au total ?",
            "r": "64 codons (4³), dont 61 codent pour les 20 acides aminés, 1 codon initiateur (AUG) et 3 codons stop (UAA, UAG, UGA)"
          },
          {
            "q": "De quoi est constitué le ribosome eucaryote complet ?",
            "r": "Ribosome 80S composé d'une petite sous-unité 40S (1 ARNr 18S + 33 protéines) et d'une grande sous-unité 60S (3 ARNr + 47-49 protéines)"
          },
          {
            "q": "Quelle est la fonction de l'ARNt ?",
            "r": "Amener en face du codon l'acide aminé qui lui correspond grâce à la complémentarité entre codon (ARNm) et anticodon (ARNt)"
          },
          {
            "q": "Quelles sont les 3 étapes de la traduction ?",
            "r": "Initiation (reconnaissance AUG par sous-unité 40S), élongation (formation des liaisons peptidiques) et terminaison (reconnaissance codon stop)"
          },
          {
            "q": "Qu'est-ce qu'un polyribosome ?",
            "r": "Une molécule d'ARNm lue par plusieurs ribosomes en même temps, espacés d'environ 100 nucléotides, permettant une traduction active"
          },
          {
            "q": "Que sont les codons stop ?",
            "r": "UAA, UAG et UGA sur l'ARN qui ne codent pas pour un acide aminé mais marquent l'arrêt de la traduction"
          },
          {
            "q": "Où a lieu la traduction chez les eucaryotes ?",
            "r": "Dans le cytoplasme, soit pour libérer des protéines cytoplasmiques, soit pour les diriger vers les organites ou les excréter"
          },
          {
            "q": "Qu'est-ce que le code génétique dégénéré ?",
            "r": "Un acide aminé peut être codé par plusieurs codons (jusqu'à 6 pour la leucine), avec possibilité de base flottante en 3ème position"
          }
        ],
        "fiche": {
          "page1_intro": {
            "titre": "Introduction",
            "texte": "La traduction est le processus par lequel l'information génétique portée par l'ARNm est convertie en séquence protéique. Cette étape cruciale de l'expression génique se déroule dans le cytoplasme des cellules eucaryotes. Les ribosomes lisent l'ARNm dans le sens 5'-3' et synthétisent les protéines de l'extrémité N-terminale vers C-terminale. Ce processus permet la production de protéines cytoplasmiques, membranaires ou destinées à l'excrétion. La traduction implique de nombreux acteurs moléculaires qui travaillent de concert pour assurer la fidélité et l'efficacité de la synthèse protéique.",
            "points_cles": [
              "Synthèse des protéines à partir de l'ARNm",
              "Localisation cytoplasmique chez les eucaryotes",
              "Lecture dans le sens 5'-3' de l'ARNm",
              "Formation de polyribosomes pour une traduction efficace"
            ]
          },
          "page2_concepts": {
            "titre": "Concepts clés",
            "concepts": [
              {
                "terme": "Codon",
                "definition": "Triplet de nucléotides sur l'ARNm qui code pour un acide aminé spécifique ou un signal d'arrêt"
              },
              {
                "terme": "Anticodon",
                "definition": "Séquence de trois nucléotides sur l'ARNt, complémentaire et antiparallèle au codon de l'ARNm"
              },
              {
                "terme": "Ribosome 80S",
                "definition": "Complexe ribonucléoprotéique composé de deux sous-unités (40S et 60S) qui catalyse la synthèse protéique"
              },
              {
                "terme": "ARNt",
                "definition": "ARN de transfert qui transporte les acides aminés et les positionne sur l'ARNm grâce à son anticodon"
              },
              {
                "terme": "Polyribosome",
                "definition": "Structure formée par plusieurs ribosomes traduisant simultanément le même ARNm"
              },
              {
                "terme": "Code génétique dégénéré",
                "definition": "Propriété du code génétique où un acide aminé peut être codé par plusieurs codons différents"
              },
              {
                "terme": "Peptidyl transférase",
                "definition": "Activité enzymatique du ribosome qui catalyse la formation des liaisons peptidiques"
              },
              {
                "terme": "Facteurs d'élongation (EF)",
                "definition": "Protéines nécessaires au bon déroulement de l'étape d'élongation de la traduction"
              }
            ]
          },
          "page3_schemas": {
            "titre": "Schémas",
            "schemas": []
          },
          "page4_formules": {
            "titre": "Données clés",
            "formules": [],
            "donnees": [
              {
                "label": "Nombre total de codons",
                "valeur": "64"
              },
              {
                "label": "Codons codant pour acides aminés",
                "valeur": "61"
              },
              {
                "label": "Codons stop",
                "valeur": "3 (UAA, UAG, UGA)"
              },
              {
                "label": "Codon initiateur",
                "valeur": "1 (AUG)"
              },
              {
                "label": "Acides aminés protéinogènes",
                "valeur": "20"
              },
              {
                "label": "Taille ARNt",
                "valeur": "~70 nucléotides"
              },
              {
                "label": "Nombre d'ARNt",
                "valeur": "~32"
              },
              {
                "label": "Espacement ribosomes",
                "valeur": "~100 nucléotides"
              }
            ]
          },
          "page5_resume": {
            "titre": "Résumé",
            "points": [
              "La traduction convertit l'information de l'ARNm en protéines dans le cytoplasme",
              "Le code génétique utilise 64 codons dont 61 pour les acides aminés, 1 initiateur et 3 stop",
              "Les ribosomes 80S (40S + 60S) catalysent la synthèse avec les sites A et P",
              "Les ARNt apportent les acides aminés grâce à la complémentarité codon-anticodon",
              "La traduction comprend 3 étapes : initiation (AUG), élongation et terminaison (codons stop)"
            ],
            "mnemo": "CARTO : Codon-Anticodon, Ribosomes, Traduction cytoplasmique, Ordre 5'-3'"
          }
        },
        "qcm": [
          {
            "question": "Dans quel sens s'effectue la traduction ?",
            "options": [
              "3'-5' sur l'ARNm",
              "5'-3' sur l'ARNm",
              "N-terminal vers C-terminal seulement",
              "C-terminal vers N-terminal"
            ],
            "correct": 1,
            "difficulte": "facile",
            "explication": "La traduction s'effectue dans le sens 5'-3' sur l'ARNm, ce qui correspond à la synthèse de la protéine du N-terminal vers le C-terminal."
          },
          {
            "question": "Combien de codons stop existe-t-il ?",
            "options": [
              "1",
              "2",
              "3",
              "4"
            ],
            "correct": 2,
            "difficulte": "facile",
            "explication": "Il existe 3 codons stop : UAA, UAG et UGA sur l'ARN (TAA, TAG et TGA sur l'ADN)."
          },
          {
            "question": "Que signifie 'code génétique dégénéré' ?",
            "options": [
              "Le code est défaillant",
              "Un codon peut coder plusieurs acides aminés",
              "Un acide aminé peut être codé par plusieurs codons",
              "Les codons sont illisibles"
            ],
            "correct": 2,
            "difficulte": "moyen",
            "explication": "Le code génétique dégénéré signifie qu'un acide aminé peut être codé par plusieurs codons différents, comme la leucine qui a 6 codons."
          },
          {
            "question": "De quoi est constituée la grande sous-unité ribosomale 60S ?",
            "options": [
              "1 ARNr 18S et 33 protéines",
              "3 ARNr et 47-49 protéines",
              "2 ARNr et 40 protéines",
              "4 ARNr et 50 protéines"
            ],
            "correct": 1,
            "difficulte": "moyen",
            "explication": "La sous-unité 60S est constituée de 3 ARNr (28S, 5,8S et 5S) et de 47-49 protéines chez l'homme."
          },
          {
            "question": "Quel est le rôle du site A du ribosome ?",
            "options": [
              "Liaison à l'ARNt portant le peptide en cours",
              "Liaison à l'ARNt portant l'acide aminé à incorporer",
              "Fixation de l'ARNm",
              "Libération de la protéine"
            ],
            "correct": 1,
            "difficulte": "moyen",
            "explication": "Le site A (aminoacyl) permet la liaison à l'ARNt qui porte l'acide aminé à incorporer dans la chaîne polypeptidique."
          },
          {
            "question": "Qu'est-ce qui caractérise un polyribosome ?",
            "options": [
              "Un ribosome avec plusieurs ARNm",
              "Plusieurs ribosomes sur un même ARNm",
              "Un ribosome géant",
              "Des ribosomes liés entre eux"
            ],
            "correct": 1,
            "difficulte": "facile",
            "explication": "Un polyribosome est formé par plusieurs ribosomes qui traduisent simultanément le même ARNm, espacés d'environ 100 nucléotides."
          },
          {
            "question": "Quelle enzyme catalyse la formation des liaisons peptidiques ?",
            "options": [
              "ARN polymérase",
              "Peptidyl transférase",
              "Aminoacyl-ARNt synthétase",
              "Hélicase"
            ],
            "correct": 1,
            "difficulte": "difficile",
            "explication": "La peptidyl transférase est l'activité enzymatique du ribosome qui catalyse la formation des liaisons peptidiques entre les acides aminés."
          },
          {
            "question": "Que se passe-t-il lors de la reconnaissance d'un codon stop ?",
            "options": [
              "Pause de la traduction",
              "Incorporation d'un acide aminé spécial",
              "Terminaison et libération de la protéine",
              "Retour au début de l'ARNm"
            ],
            "correct": 2,
            "difficulte": "moyen",
            "explication": "La reconnaissance d'un codon stop par le facteur eRF entraîne la terminaison de la traduction avec libération de la chaîne polypeptidique et dissociation du ribosome."
          }
        ]
      },
      {
        "id": "biochimie-ch6",
        "titre": "Les protéines",
        "emoji": "🧬",
        "nouveau": true,
        "flashcardsData": [
          {
            "q": "Quelle est l'étymologie du terme 'protéine' et que signifie-t-elle ?",
            "r": "Le terme protéine vient du grec 'proteion' qui signifie 'occuper le premier rang', reflétant leur rôle fondamental dans l'organisme."
          },
          {
            "q": "Quelles sont les 6 grandes fonctions des protéines ?",
            "r": "1) Créer et maintenir une structure 2) Bouger/Se déplacer 3) Transformer (enzymes) 4) Transporter 5) Informer/Signaler 6) Reconnaître et défendre"
          },
          {
            "q": "Quels sont les 4 niveaux de structure des protéines ?",
            "r": "Primaire (séquence d'acides aminés), Secondaire (hélice α, feuillet β), Tertiaire (organisation 3D d'une sous-unité), Quaternaire (assemblage de sous-unités)"
          },
          {
            "q": "Quelles sont les 6 classes d'enzymes ?",
            "r": "Oxydoréductases, Transférases, Hydrolases, Lyases, Isomérases, Ligases"
          },
          {
            "q": "Quelle est la différence entre hémoglobine et myoglobine ?",
            "r": "L'hémoglobine est un tétramère (4 sous-unités) qui transporte l'O2 dans le sang, la myoglobine est un monomère qui stocke l'O2 dans les muscles."
          },
          {
            "q": "Quelles sont les propriétés de la liaison peptidique ?",
            "r": "Elle est plane, rigide (dimensions fixes) et polaire. Elle résiste beaucoup et nécessite beaucoup d'énergie pour être rompue."
          },
          {
            "q": "Qu'est-ce qui caractérise les acides aminés apolaires hydrophobes ?",
            "r": "Ils possèdent des chaînes latérales aliphatiques (Gly, Ala, Val, Leu, Ile, Met) ou cycliques (Pro), évitent l'eau et se regroupent au cœur des protéines."
          },
          {
            "q": "Combien d'acides aminés naturels existent et quelle est leur masse moyenne ?",
            "r": "Il existe 20 acides aminés naturels qui entrent dans la composition des protéines, avec une masse moyenne d'environ 120 Daltons."
          }
        ],
        "fiche": {
          "page1_intro": {
            "titre": "Introduction",
            "texte": "Les protéines sont des macromolécules fondamentales du vivant, dont le nom grec 'proteion' signifie 'occuper le premier rang'. Elles sont impliquées dans pratiquement tous les processus biologiques et leur structure est parfaitement adaptée à leur fonction. Composées d'acides aminés liés par des liaisons peptidiques, elles peuvent adopter différents niveaux d'organisation structurale. Les protéines peuvent être classées selon plusieurs critères : leur structure (fibreuses ou globulaires), leur localisation (tissulaire ou cellulaire), ou encore leur fonction biologique.",
            "points_cles": [
              "Actrices indispensables de tous les processus biologiques",
              "Relation étroite entre structure et fonction",
              "Classification possible selon 6 grandes fonctions",
              "Constituées d'acides aminés unis par liaisons peptidiques"
            ]
          },
          "page2_concepts": {
            "titre": "Concepts clés",
            "concepts": [
              {
                "terme": "Protéines fibreuses",
                "definition": "Protéines de structure allongée, généralement insolubles, assurant des fonctions structurales (collagène, kératine, actine)"
              },
              {
                "terme": "Protéines globulaires",
                "definition": "Protéines repliées sur elles-mêmes, généralement solubles, ayant des fonctions dynamiques (enzymes, hémoglobine)"
              },
              {
                "terme": "Liaison peptidique",
                "definition": "Liaison covalente plane et rigide formée par condensation entre le groupe carboxyle d'un acide aminé et le groupe aminé du suivant"
              },
              {
                "terme": "Structure quaternaire",
                "definition": "Niveau d'organisation des protéines multimériques correspondant à l'assemblage de plusieurs sous-unités"
              },
              {
                "terme": "Enzymes",
                "definition": "Protéines catalytiques qui accélèrent les réactions biochimiques, classées en 6 grandes familles selon leur mécanisme d'action"
              },
              {
                "terme": "Récepteurs protéiques",
                "definition": "Protéines spécialisées dans la reconnaissance et la liaison de ligands spécifiques pour transmettre des signaux cellulaires"
              },
              {
                "terme": "Immunoglobulines",
                "definition": "Anticorps protéiques intervenant dans la reconnaissance du soi/non-soi avec des sites hypervariables adaptés aux antigènes"
              },
              {
                "terme": "Acides aminés L",
                "definition": "Forme stéréoisomérique unique des acides aminés présents dans les protéines humaines (20 acides aminés naturels)"
              }
            ]
          },
          "page3_schemas": {
            "titre": "Schémas",
            "schemas": []
          },
          "page4_formules": {
            "titre": "Données clés",
            "formules": [],
            "donnees": [
              {
                "label": "Nombre d'acides aminés naturels",
                "valeur": "20 acides aminés"
              },
              {
                "label": "Masse moyenne d'un acide aminé",
                "valeur": "120 Daltons"
              },
              {
                "label": "Nombre de classes d'enzymes",
                "valeur": "6 classes"
              },
              {
                "label": "Sous-unités de l'hémoglobine",
                "valeur": "4 (2α + 2β)"
              },
              {
                "label": "Domaines transmembranaires CFTR",
                "valeur": "12 domaines"
              }
            ]
          },
          "page5_resume": {
            "titre": "Résumé",
            "points": [
              "Les protéines occupent le 'premier rang' et sont impliquées dans tous les processus biologiques",
              "Six grandes fonctions : structure, mouvement, transformation, transport, signalisation, défense",
              "Quatre niveaux structuraux : primaire (séquence), secondaire (motifs), tertiaire (3D), quaternaire (assemblage)",
              "20 acides aminés naturels de série L uniquement, liés par liaisons peptidiques planes et rigides",
              "Classification fonctionnelle permet de comprendre la relation structure-fonction des protéines"
            ],
            "mnemo": "STMT-TD : Structure, Transport, Mouvement, Transformation - Tertiaire, Défense (les 6 fonctions + niveaux structuraux essentiels)"
          }
        },
        "qcm": [
          {
            "question": "Combien de sous-unités compose l'hémoglobine et quelle est sa fonction principale ?",
            "options": [
              "2 sous-unités, stockage d'O2",
              "4 sous-unités, transport d'O2",
              "1 sous-unité, transport d'O2",
              "6 sous-unités, stockage d'O2"
            ],
            "correct": 1,
            "difficulte": "facile",
            "explication": "L'hémoglobine est un tétramère composé de 4 sous-unités (2α et 2β) qui transporte l'oxygène des alvéoles vers les tissus."
          },
          {
            "question": "Quelle classe d'enzyme nécessite de l'ATP pour fonctionner ?",
            "options": [
              "Hydrolases",
              "Ligases",
              "Isomérases",
              "Lyases"
            ],
            "correct": 1,
            "difficulte": "moyen",
            "explication": "Les ligases forment des liaisons par condensation et nécessitent la fourniture d'énergie sous forme d'ATP."
          },
          {
            "question": "Quelle est la caractéristique unique de la glycine parmi les acides aminés ?",
            "options": [
              "Elle contient du soufre",
              "Son Cα n'est pas asymétrique",
              "Elle forme un cycle",
              "Elle est polaire"
            ],
            "correct": 1,
            "difficulte": "moyen",
            "explication": "La glycine possède un hydrogène comme chaîne latérale, rendant son carbone α central non-asymétrique."
          },
          {
            "question": "Quel niveau de structure est le niveau minimal fonctionnel d'une protéine ?",
            "options": [
              "Primaire",
              "Secondaire",
              "Tertiaire",
              "Quaternaire"
            ],
            "correct": 2,
            "difficulte": "moyen",
            "explication": "La structure tertiaire correspond à l'organisation 3D complète d'une protéine monomérique, niveau minimal pour la fonction."
          },
          {
            "question": "La mucoviscidose est due à un défaut de quel transporteur ?",
            "options": [
              "Récepteur de la transferrine",
              "Canal sodium",
              "CFTR (canal chlore)",
              "Pompe calcium"
            ],
            "correct": 2,
            "difficulte": "difficile",
            "explication": "La mucoviscidose résulte de mutations du CFTR (canal chlore) empêchant son fonctionnement normal."
          },
          {
            "question": "Combien de domaines transmembranaires possède généralement un récepteur couplé aux protéines G ?",
            "options": [
              "4 domaines",
              "7 domaines",
              "12 domaines",
              "13 domaines"
            ],
            "correct": 1,
            "difficulte": "difficile",
            "explication": "Les récepteurs couplés aux protéines G possèdent caractéristiquement 7 domaines transmembranaires."
          },
          {
            "question": "Quelle protéine est un marqueur spécifique cardiaque détecté lors d'un infarctus ?",
            "options": [
              "Myosine",
              "Actine",
              "Troponine",
              "Tubuline"
            ],
            "correct": 2,
            "difficulte": "facile",
            "explication": "La troponine est une protéine spécifique du cœur libérée dans le sang par les cellules cardiaques mourantes lors d'un infarctus."
          }
        ]
      },
      {
        "id": "biochimie-ch7",
        "titre": "Métabolisme énergétique",
        "emoji": "⚡",
        "nouveau": true,
        "flashcardsData": [
          {
            "q": "Qu'est-ce que l'ATP et quel est son rôle ?",
            "r": "L'ATP (Adénosine Triphosphate) est l'unité universelle d'énergie des systèmes biologiques. Il est composé d'adénine, de ribose et d'une queue triphosphate instable. Il fournit l'énergie nécessaire à toutes les réactions cellulaires."
          },
          {
            "q": "Quels sont les 3 principaux carrefours métaboliques ?",
            "r": "Les 3 principaux carrefours métaboliques sont : le glucose 6-phosphate, le pyruvate et l'acétyl-CoA. Ces molécules sont au centre de plusieurs voies métaboliques."
          },
          {
            "q": "Quelle est la différence entre catabolisme et anabolisme ?",
            "r": "Le catabolisme dégrade des molécules complexes en molécules simples et produit de l'énergie (ATP). L'anabolisme synthétise des molécules complexes à partir de molécules simples et consomme de l'énergie."
          },
          {
            "q": "Quelles sont les 2 phases de la glycolyse ?",
            "r": "Phase 1 (préparatoire) : conversion du glucose en 2 trioses phosphates avec consommation de 2 ATP. Phase 2 (production) : formation de 2 pyruvates avec production nette de 2 ATP et 2 NADH."
          },
          {
            "q": "Quel est le bilan énergétique de la glycolyse ?",
            "r": "Glucose + 2 ADP + 2 Pi + 2 NAD+ → 2 Pyruvates + 2 ATP + 2 NADH + 2 H+ + 2 H2O. Bilan net : 2 ATP et 2 NADH produits."
          },
          {
            "q": "Quelles sont les 3 kinases irréversibles de la glycolyse ?",
            "r": "L'hexokinase (étape 1), la phosphofructokinase/PFK1 (étape 3) et la pyruvate kinase (étape 10). Ces enzymes catalysent des réactions irréversibles et sont des sites de régulation."
          },
          {
            "q": "Qu'est-ce qu'une liaison riche en énergie ?",
            "r": "Une liaison qui génère au moins 30 kJ/mol lors de sa coupure (ΔG° < -30 kJ/mol). Exemples : liaisons phosphoanhydrides dans l'ATP, thioesters dans l'acétyl-CoA, phosphoénol dans le PEP."
          },
          {
            "q": "Que devient le pyruvate selon les conditions cellulaires ?",
            "r": "En condition aérobie : le pyruvate alimente le cycle de Krebs dans la mitochondrie. En condition anaérobie : le pyruvate est converti en lactate dans le cytosol."
          }
        ],
        "fiche": {
          "page1_intro": {
            "titre": "Introduction",
            "texte": "Le métabolisme énergétique représente l'ensemble des réactions permettant aux cellules d'extraire, convertir et utiliser l'énergie nécessaire à leur fonctionnement. Cette énergie provient principalement de la dégradation de molécules carbonées comme le glucose, stockée sous forme d'ATP. Les organismes vivants doivent constamment transformer la matière environnante pour maintenir leur homéostasie et assurer leurs fonctions vitales. Le contrôle des flux énergétiques conditionne le bon fonctionnement cellulaire à travers des voies métaboliques complexes et coordonnées.",
            "points_cles": [
              "L'ATP est l'unité universelle d'énergie cellulaire",
              "Le glucose est la principale source énergétique",
              "Les voies métaboliques sont catalysées par des enzymes",
              "Le métabolisme comprend catabolisme et anabolisme"
            ]
          },
          "page2_concepts": {
            "titre": "Concepts clés",
            "concepts": [
              {
                "terme": "Métabolisme énergétique",
                "definition": "Ensemble des réactions chimiques permettant à une cellule d'obtenir l'énergie nécessaire à son fonctionnement"
              },
              {
                "terme": "ATP",
                "definition": "Adénosine Triphosphate, nucléotide servant d'unité universelle d'énergie dans les systèmes biologiques"
              },
              {
                "terme": "Catabolisme",
                "definition": "Ensemble des voies métaboliques dégradant des molécules complexes en molécules simples, libérant de l'énergie"
              },
              {
                "terme": "Anabolisme",
                "definition": "Ensemble des voies métaboliques synthétisant des molécules complexes à partir de molécules simples, consommant de l'énergie"
              },
              {
                "terme": "Carrefour métabolique",
                "definition": "Molécule centrale à plusieurs voies métaboliques, pouvant être substrat ou produit de différentes enzymes"
              },
              {
                "terme": "Glycolyse",
                "definition": "Voie métabolique cytosolique dégradant le glucose en pyruvate avec production d'ATP et de NADH"
              },
              {
                "terme": "Liaison riche en énergie",
                "definition": "Liaison chimique dont la rupture libère au moins 30 kJ/mol d'énergie"
              },
              {
                "terme": "Pyruvate",
                "definition": "Produit final de la glycolyse, carrefour métabolique orientant vers la respiration ou la fermentation"
              }
            ]
          },
          "page3_schemas": {
            "titre": "Schémas",
            "schemas": []
          },
          "page4_formules": {
            "titre": "Données clés",
            "formules": [
              {
                "label": "Bilan glycolyse",
                "formule": "Glucose + 2 ADP + 2 Pi + 2 NAD+ → 2 Pyruvates + 2 ATP + 2 NADH + 2 H+ + 2 H2O",
                "unite": ""
              },
              {
                "label": "Liaison riche en énergie",
                "formule": "ΔG° < -30 kJ/mol",
                "unite": "kJ/mol"
              }
            ],
            "donnees": [
              {
                "label": "Énergie minimale liaison riche",
                "valeur": "30 kJ/mol"
              },
              {
                "label": "ATP net produit par glycolyse",
                "valeur": "2 ATP"
              },
              {
                "label": "NADH produit par glycolyse",
                "valeur": "2 NADH"
              },
              {
                "label": "Étapes totales de la glycolyse",
                "valeur": "10 étapes"
              }
            ]
          },
          "page5_resume": {
            "titre": "Résumé",
            "points": [
              "L'ATP est la monnaie énergétique universelle, composé d'adénine, ribose et triphosphate",
              "Le métabolisme comprend le catabolisme (dégradation + énergie) et l'anabolisme (synthèse - énergie)",
              "Les carrefours métaboliques (glucose 6-P, pyruvate, acétyl-CoA) connectent les voies",
              "La glycolyse transforme 1 glucose en 2 pyruvates avec un bilan de 2 ATP et 2 NADH",
              "Les réactions irréversibles (hexokinase, PFK1, pyruvate kinase) régulent les flux métaboliques"
            ],
            "mnemo": "GRAP : Glucose Respire avec ATP et Pyruvate (pour retenir que le glucose produit de l'ATP via le pyruvate)"
          }
        },
        "qcm": [
          {
            "question": "Combien d'ATP sont consommés dans la phase préparatoire de la glycolyse ?",
            "options": [
              "1 ATP",
              "2 ATP",
              "3 ATP",
              "4 ATP"
            ],
            "correct": 1,
            "difficulte": "facile",
            "explication": "La phase préparatoire de la glycolyse consomme 2 ATP : 1 ATP à l'étape 1 (hexokinase) et 1 ATP à l'étape 3 (phosphofructokinase)."
          },
          {
            "question": "Quelle enzyme catalyse la seule réaction réversible impliquant une kinase dans la glycolyse ?",
            "options": [
              "Hexokinase",
              "Phosphofructokinase",
              "Phosphoglycérate kinase",
              "Pyruvate kinase"
            ],
            "correct": 2,
            "difficulte": "moyen",
            "explication": "La phosphoglycérate kinase (étape 7) est la seule kinase réversible de la glycolyse, contrairement aux autres kinases qui catalysent des réactions irréversibles."
          },
          {
            "question": "Dans quelles conditions le pyruvate est-il converti en lactate ?",
            "options": [
              "En condition aérobie",
              "En condition anaérobie",
              "En présence d'oxygène",
              "Dans la mitochondrie"
            ],
            "correct": 1,
            "difficulte": "facile",
            "explication": "En condition anaérobie (absence d'oxygène), le pyruvate est converti en lactate dans le cytosol pour régénérer le NAD+ nécessaire à la glycolyse."
          },
          {
            "question": "Quelle est la caractéristique énergétique d'une liaison riche en énergie ?",
            "options": [
              "ΔG° > +30 kJ/mol",
              "ΔG° < -30 kJ/mol",
              "ΔG° = 0 kJ/mol",
              "ΔG° entre -10 et +10 kJ/mol"
            ],
            "correct": 1,
            "difficulte": "moyen",
            "explication": "Une liaison riche en énergie a une énergie libre ΔG° inférieure à -30 kJ/mol, ce qui signifie qu'elle libère au moins 30 kJ/mol lors de sa rupture."
          },
          {
            "question": "Quel type de liaison est présent dans l'acétyl-CoA ?",
            "options": [
              "Anhydride phosphorique",
              "Phosphoamide",
              "Thioester",
              "Phosphoénol"
            ],
            "correct": 2,
            "difficulte": "moyen",
            "explication": "L'acétyl-CoA contient une liaison thioester (R-CO-SCoA) qui est une liaison riche en énergie, caractéristique de toutes les molécules se terminant par 'yl-CoA'."
          },
          {
            "question": "Combien de molécules de NADH sont produites par molécule de glucose lors de la glycolyse ?",
            "options": [
              "1 NADH",
              "2 NADH",
              "3 NADH",
              "4 NADH"
            ],
            "correct": 1,
            "difficulte": "facile",
            "explication": "La glycolyse produit 2 NADH par molécule de glucose, générés lors de l'étape 6 par la glycéraldéhyde 3-phosphate déshydrogénase (en double car 2 trioses)."
          },
          {
            "question": "Lequel de ces composés N'est PAS un carrefour métabolique principal ?",
            "options": [
              "Glucose 6-phosphate",
              "Pyruvate",
              "Acétyl-CoA",
              "Fructose 1,6-bisphosphate"
            ],
            "correct": 3,
            "difficulte": "difficile",
            "explication": "Le fructose 1,6-bisphosphate est un intermédiaire de la glycolyse mais pas un carrefour métabolique principal. Les 3 carrefours sont le glucose 6-P, le pyruvate et l'acétyl-CoA."
          }
        ]
      },
      {
        "id": "biochimie-ch8",
        "titre": "Les glucides",
        "emoji": "🍯",
        "nouveau": true,
        "flashcardsData": [
          {
            "q": "Quelle est la formule chimique du glucose ?",
            "r": "C6H12O6 ou (CH2O)6. C'est un D-aldohexose avec une fonction aldéhyde et 6 carbones."
          },
          {
            "q": "Quels sont les trois rôles principaux des glucides ?",
            "r": "Carburant cellulaire (glucose, glycogène), rôle structural (cellulose, GAG) et reconnaissance cellulaire (antigènes, groupes sanguins)."
          },
          {
            "q": "Quelle est la différence entre le glycogène et l'amidon ?",
            "r": "Le glycogène est plus ramifié (liaisons α1-6 tous les 5-10 glucoses) que l'amidon. Le glycogène est la réserve animale, l'amidon la réserve végétale."
          },
          {
            "q": "Pourquoi la cellulose n'est-elle pas digestible chez l'homme ?",
            "r": "Car elle est composée de glucoses liés par des liaisons β1-4 que nos enzymes ne peuvent pas couper, contrairement aux liaisons α1-4."
          },
          {
            "q": "Qu'est-ce qui rend le saccharose non réducteur ?",
            "r": "Le saccharose est non réducteur car les deux carbones anomériques (C1 du glucose et C2 du fructose) sont engagés dans la liaison osidique."
          },
          {
            "q": "Que sont les glycosaminoglycanes (GAG) ?",
            "r": "Polysaccharides formés d'un acide uronique et d'une osamine, très hydrophiles, composants majeurs de la matrice extracellulaire."
          },
          {
            "q": "Quelle est la différence entre N-glycosylation et O-glycosylation ?",
            "r": "N-glycosylation : addition sur asparagine, débute dans le RE. O-glycosylation : addition sur sérine/thréonine, réalisée dans le Golgi."
          },
          {
            "q": "Pourquoi le glucose est-il le chef de file des oses ?",
            "r": "Car la plupart des glucides sont transformés en glucose, tous les glucides sont synthétisés à partir du glucose, et c'est la ressource énergétique principale du cerveau."
          },
          {
            "q": "Quelle est la composition du lactose ?",
            "r": "β-D-galactosyl-(1-4)-D-glucose. C'est un disaccharide réducteur composé de galactose et glucose, principal glucide du lait."
          },
          {
            "q": "Qu'est-ce que l'acide hyaluronique ?",
            "r": "GAG composé d'acide glucuronique et de glucosamine N-acétylée, très hydrophile, rôle de lubrifiant articulaire et composant de la matrice extracellulaire."
          }
        ],
        "fiche": {
          "page1_intro": {
            "titre": "Introduction",
            "texte": "Les glucides sont des biomolécules essentielles représentant les constituants les plus abondants du monde végétal (jusqu'à 70% du poids sec des végétaux). Ils constituent 40 à 50% des calories de l'alimentation humaine et remplissent trois fonctions majeures : source d'énergie cellulaire (glucose, glycogène), rôle structural (cellulose, glycosaminoglycanes) et reconnaissance cellulaire (antigènes, groupes sanguins). Ces hydrates de carbone, de formule générale (CH2O)n, sont des molécules très hydrophiles grâce à leurs nombreuses fonctions hydroxyles. Le glucose, chef de file des oses, est particulièrement important car c'est la ressource énergétique quasi-exclusive du cerveau et sa concentration sanguine (glycémie) est finement régulée à 5 mmol/L.",
            "points_cles": [
              "Biomolécules les plus abondantes (milliards de tonnes de cellulose/an)",
              "40-50% des calories alimentaires humaines",
              "Trois rôles majeurs : énergétique, structural et reconnaissance",
              "Molécules très hydrophiles de formule (CH2O)n"
            ]
          },
          "page2_concepts": {
            "titre": "Concepts clés",
            "concepts": [
              {
                "terme": "Ose (monosaccharide)",
                "definition": "Glucide simple de formule (CH2O)n avec une fonction carbonyle réductrice (aldéhyde ou cétone) et des fonctions alcool. Briques de base des glucides."
              },
              {
                "terme": "Liaison osidique",
                "definition": "Liaison covalente entre deux oses par réaction entre une fonction carbonyle et une fonction OH, avec élimination d'eau."
              },
              {
                "terme": "Glycogène",
                "definition": "Polysaccharide de réserve animale composé de chaînes de glucose liées en α1-4 avec ramifications α1-6 tous les 5-10 glucoses."
              },
              {
                "terme": "Glycosaminoglycanes (GAG)",
                "definition": "Polysaccharides composés d'un acide uronique et d'une osamine, très hydrophiles, constituants majeurs de la matrice extracellulaire."
              },
              {
                "terme": "Glycoprotéine",
                "definition": "Protéine modifiée par addition covalente de glucides, processus essentiel pour le repliement, la stabilité et les fonctions de reconnaissance."
              },
              {
                "terme": "Carbone anomérique",
                "definition": "Carbone portant la fonction carbonyle dans un ose cyclique, déterminant le caractère réducteur et la configuration α ou β."
              },
              {
                "terme": "Énantiomères",
                "definition": "Isomères optiques images l'un de l'autre dans un miroir, non superposables, définis par la configuration du carbone asymétrique."
              },
              {
                "terme": "D-aldohexose",
                "definition": "Ose à 6 carbones avec fonction aldéhyde, de série D (OH du C5 à droite). Le D-glucose en est l'exemple type."
              }
            ]
          },
          "page3_schemas": {
            "titre": "Schémas",
            "schemas": []
          },
          "page4_formules": {
            "titre": "Données clés",
            "formules": [
              {
                "label": "Glucose",
                "formule": "C6H12O6",
                "unite": ""
              },
              {
                "label": "Formule générale des oses",
                "formule": "(CH2O)n",
                "unite": "n ≥ 3"
              }
            ],
            "donnees": [
              {
                "label": "Glycémie normale",
                "valeur": "5 mmol/L"
              },
              {
                "label": "Consommation cérébrale glucose",
                "valeur": "50% du glucose total"
              },
              {
                "label": "Taille glycogène",
                "valeur": "30×10⁴ glucoses/molécule"
              },
              {
                "label": "Masse moléculaire glycogène",
                "valeur": "1-5×10⁶ Da"
              },
              {
                "label": "Ramifications glycogène",
                "valeur": "Tous les 5-10 glucoses"
              }
            ]
          },
          "page5_resume": {
            "titre": "Résumé",
            "points": [
              "Les glucides remplissent trois rôles essentiels : énergétique (glucose, glycogène), structural (cellulose, GAG) et reconnaissance cellulaire",
              "Le glucose est le chef de file des oses, ressource énergétique principale du cerveau avec une glycémie régulée à 5 mmol/L",
              "Les polysaccharides de réserve diffèrent : glycogène animal très ramifié (α1-6) vs amidon végétal moins ramifié",
              "La matrice extracellulaire est composée de GAG (acide uronique + osamine) très hydrophiles comme l'acide hyaluronique",
              "La glycosylation des protéines (N- et O-) est essentielle pour leur repliement, stabilité et fonctions de reconnaissance"
            ],
            "mnemo": "GERMS : Glucose (chef de file), Énergie (rôle principal), Reconnaissance (antigènes), Matrice extracellulaire (GAG), Stockage (glycogène/amidon)"
          }
        },
        "qcm": [
          {
            "question": "Quelle est la principale caractéristique structurale qui différencie le glycogène de la cellulose ?",
            "options": [
              "Le type de liaisons osidiques (α vs β)",
              "Le nombre de carbones par unité glucose",
              "La présence de ramifications",
              "La solubilité dans l'eau"
            ],
            "correct": 0,
            "difficulte": "moyen",
            "explication": "Le glycogène possède des liaisons α1-4 et α1-6 (digestibles), tandis que la cellulose a des liaisons β1-4 (non digestibles chez l'homme)."
          },
          {
            "question": "Pourquoi le saccharose est-il qualifié de disaccharide non réducteur ?",
            "options": [
              "Il ne contient pas de fonction aldéhyde",
              "Ses deux carbones anomériques sont engagés dans la liaison",
              "Il n'est pas soluble dans l'eau",
              "Il ne peut pas être hydrolysé"
            ],
            "correct": 1,
            "difficulte": "moyen",
            "explication": "Le saccharose lie le C1 du glucose au C2 du fructose, bloquant les deux carbones anomériques et empêchant la forme ouverte réductrice."
          },
          {
            "question": "Quelle est la composition d'un glycosaminoglycane (GAG) ?",
            "options": [
              "Deux glucoses liés par une liaison osidique",
              "Un acide uronique et une osamine",
              "Une protéine et un glucide",
              "Des acides aminés et des lipides"
            ],
            "correct": 1,
            "difficulte": "facile",
            "explication": "Les GAG sont des polysaccharides formés par répétition d'un motif disaccharidique composé d'un acide uronique et d'une osamine."
          },
          {
            "question": "Dans quel compartiment cellulaire débute la N-glycosylation ?",
            "options": [
              "Cytoplasme",
              "Réticulum endoplasmique",
              "Appareil de Golgi",
              "Noyau"
            ],
            "correct": 1,
            "difficulte": "moyen",
            "explication": "La N-glycosylation débute dans le réticulum endoplasmique par addition en bloc d'un oligosaccharide, puis se poursuit dans le Golgi."
          },
          {
            "question": "Quelle est la fréquence des ramifications dans le glycogène ?",
            "options": [
              "Tous les 2-3 glucoses",
              "Tous les 5-10 glucoses",
              "Tous les 15-20 glucoses",
              "Pas de ramifications régulières"
            ],
            "correct": 1,
            "difficulte": "facile",
            "explication": "Le glycogène présente des ramifications α1-6 tous les 5 à 10 glucoses, ce qui permet un stockage compact et une mobilisation rapide."
          },
          {
            "question": "Qu'est-ce qui définit la série D ou L d'un hexose ?",
            "options": [
              "La position de l'OH sur le carbone 1",
              "La position de l'OH sur le carbone 5",
              "Le sens de rotation de la lumière polarisée",
              "La nature de la fonction carbonyle"
            ],
            "correct": 1,
            "difficulte": "difficile",
            "explication": "La série D ou L est définie par la configuration du carbone le plus éloigné de la fonction réductrice (C5 pour les hexoses)."
          },
          {
            "question": "Quelle est la principale fonction du glucose pour le cerveau ?",
            "options": [
              "Fonction structurale des membranes",
              "Unique source d'énergie métabolisable",
              "Synthèse des neurotransmetteurs",
              "Formation de la barrière hémato-encéphalique"
            ],
            "correct": 1,
            "difficulte": "facile",
            "explication": "Le cerveau utilise le glucose comme ressource énergétique quasi-exclusive (50% du glucose total) car il ne peut pas oxyder les acides gras à cause de la barrière hémato-encéphalique."
          }
        ]
      },
      {
        "id": "biochimie-ch9",
        "titre": "Les lipides",
        "emoji": "🧈",
        "nouveau": true,
        "flashcardsData": [
          {
            "q": "Qu'est-ce qu'un lipide ?",
            "r": "Ensemble des biomolécules hydrophobes, non solubles dans l'eau mais solubles dans les solvants organiques apolaires"
          },
          {
            "q": "Quelles sont les 3 fonctions principales des lipides ?",
            "r": "1) Réserves énergétiques et métabolisme (9 kcal/g), 2) Structure et dynamique cellulaire (membranes), 3) Signalisation cellulaire"
          },
          {
            "q": "Quelle est la structure d'un acide gras ?",
            "r": "Chaîne carbonée aliphatique + fonction acide carboxylique COOH. Partie hydrophobe = chaîne carbonée, partie hydrophile = COOH"
          },
          {
            "q": "Comment varie le point de fusion des acides gras ?",
            "r": "Augmente avec la longueur de la chaîne carbonée, diminue avec le nombre d'insaturations (doubles liaisons)"
          },
          {
            "q": "Qu'est-ce qu'un triglycéride ?",
            "r": "Association d'un glycérol avec 3 acides gras par liaisons ester. Principal constituant des graisses et forme de stockage énergétique"
          },
          {
            "q": "Comment sont transportés les lipides dans le sang ?",
            "r": "Par des lipoprotéines : chylomicrons (intestin), VLDL (foie), sous forme de gouttelettes entourées de protéines"
          },
          {
            "q": "Quels sont les composants des membranes biologiques ?",
            "r": "Phospholipides (glycérophospholipides et sphingomyélines), cholestérol, glycolipides, protéines, organisés en bicouche"
          },
          {
            "q": "De quoi dépend la fluidité membranaire ?",
            "r": "De la composition lipidique : AG saturés → rigidité, AG insaturés → fluidité. Le cholestérol module cette fluidité"
          },
          {
            "q": "Qu'est-ce qu'une molécule amphiphile ?",
            "r": "Molécule possédant une partie hydrophile (qui aime l'eau) et une partie hydrophobe (qui n'aime pas l'eau)"
          },
          {
            "q": "Comment se forment les terpènes ?",
            "r": "À partir du motif isoprène (5C) répété. Donnent les vitamines liposolubles A,E,K,D et les stéroïdes"
          }
        ],
        "fiche": {
          "page1_intro": {
            "titre": "Introduction",
            "texte": "Les lipides constituent une famille diverse de biomolécules hydrophobes, caractérisées par leur insolubilité dans l'eau mais leur solubilité dans les solvants organiques. Ces molécules amphiphiles, possédant des parties hydrophiles et hydrophobes, jouent des rôles cruciaux dans l'organisme. Ils constituent les principales réserves énergétiques (9 kcal/g), forment la structure des membranes cellulaires, et participent à la signalisation cellulaire. Leur diversité structurale, basée sur les acides gras et les stérols, leur confère des propriétés physicochimiques variées essentielles aux fonctions biologiques.",
            "points_cles": [
              "Biomolécules hydrophobes solubles dans les solvants organiques",
              "Trois fonctions : énergétique, structurale, signalisation",
              "Molécules amphiphiles avec parties hydrophile et hydrophobe",
              "Classification en lipides à base d'acides gras et de stérols"
            ]
          },
          "page2_concepts": {
            "titre": "Concepts clés",
            "concepts": [
              {
                "terme": "Hydrophobicité",
                "definition": "Propriété des molécules qui ne se mélangent pas à l'eau, nécessitant des émulsifiants pour former des micelles en suspension aqueuse"
              },
              {
                "terme": "Acide gras",
                "definition": "Molécule composée d'une chaîne carbonée aliphatique et d'une fonction acide carboxylique, brique de base de nombreux lipides"
              },
              {
                "terme": "Saturation",
                "definition": "Caractère d'un acide gras sans double liaison (saturé) ou avec une ou plusieurs doubles liaisons (insaturé)"
              },
              {
                "terme": "Amphiphile",
                "definition": "Molécule possédant une partie hydrophile (aimant l'eau) et une partie hydrophobe (n'aimant pas l'eau)"
              },
              {
                "terme": "Triglycéride",
                "definition": "Lipide neutre formé par l'estérification d'un glycérol avec trois acides gras, principale forme de stockage énergétique"
              },
              {
                "terme": "Lipoprotéine",
                "definition": "Complexe transporteur associant lipides et protéines pour permettre le transport des graisses dans le milieu aqueux sanguin"
              },
              {
                "terme": "Phospholipide",
                "definition": "Lipide membranaire amphiphile composé d'un squelette (glycérol ou sphingosine), d'acides gras et d'un groupe phosphate"
              },
              {
                "terme": "Fluidité membranaire",
                "definition": "Propriété physique des membranes déterminée par la composition lipidique, influençant la perméabilité et les fonctions cellulaires"
              }
            ]
          },
          "page3_schemas": {
            "titre": "Schémas",
            "schemas": []
          },
          "page4_formules": {
            "titre": "Données clés",
            "formules": [
              {
                "label": "Acide gras saturé générique",
                "formule": "CH₃-(CH₂)ₙ-COOH",
                "unite": ""
              },
              {
                "label": "Valeur énergétique des lipides",
                "formule": "1g = 9 kcal",
                "unite": "kcal/g"
              }
            ],
            "donnees": [
              {
                "label": "Acide butyrique",
                "valeur": "4 atomes de carbone"
              },
              {
                "label": "Acide palmitique",
                "valeur": "16 atomes de carbone"
              },
              {
                "label": "Acide stéarique",
                "valeur": "18 atomes de carbone"
              },
              {
                "label": "Durée de vie adipocyte",
                "valeur": "2 ans"
              },
              {
                "label": "Motif isoprène",
                "valeur": "5 atomes de carbone"
              }
            ]
          },
          "page5_resume": {
            "titre": "Résumé",
            "points": [
              "Les lipides sont des biomolécules hydrophobes aux fonctions énergétique (9 kcal/g), structurale et de signalisation",
              "Les acides gras, briques de base, varient par leur longueur et leur degré de saturation, influençant leurs propriétés",
              "Les triglycérides constituent la principale réserve énergétique, stockés dans le tissu adipeux",
              "Le transport lipidique se fait via les lipoprotéines (chylomicrons, VLDL) dans la circulation sanguine",
              "Les membranes biologiques sont des bicouches de phospholipides dont la composition détermine perméabilité et fluidité"
            ],
            "mnemo": "Les Lipides Sont Très Malins : Lipides (hydrophobes), Saturés/insaturés (acides gras), Triglycérides (réserves), Transport (lipoprotéines), Membranes (bicouches)"
          }
        },
        "qcm": [
          {
            "question": "Quelle est la valeur énergétique des lipides ?",
            "options": [
              "4 kcal/g",
              "6 kcal/g",
              "9 kcal/g",
              "12 kcal/g"
            ],
            "correct": 2,
            "difficulte": "facile",
            "explication": "Les lipides fournissent 9 kcal par gramme, soit plus du double des glucides et protéines (4 kcal/g), ce qui en fait la réserve énergétique la plus concentrée de l'organisme."
          },
          {
            "question": "Qu'est-ce qui caractérise un acide gras saturé ?",
            "options": [
              "Présence de doubles liaisons",
              "Absence de doubles liaisons",
              "Présence de cycles",
              "Présence d'azote"
            ],
            "correct": 1,
            "difficulte": "facile",
            "explication": "Un acide gras saturé ne possède aucune double liaison dans sa chaîne carbonée, contrairement aux acides gras insaturés qui en possèdent une ou plusieurs."
          },
          {
            "question": "Comment évolue le point de fusion des acides gras ?",
            "options": [
              "Augmente avec les insaturations",
              "Diminue avec la longueur de chaîne",
              "Augmente avec la longueur, diminue avec les insaturations",
              "Ne dépend que de la température"
            ],
            "correct": 2,
            "difficulte": "moyen",
            "explication": "Le point de fusion augmente avec la longueur de la chaîne carbonée (plus d'interactions) mais diminue avec le nombre d'insaturations (structure moins compacte)."
          },
          {
            "question": "Quel est le rôle principal des chylomicrons ?",
            "options": [
              "Synthèse hépatique",
              "Transport intestinal des lipides",
              "Stockage adipocytaire",
              "Signalisation hormonale"
            ],
            "correct": 1,
            "difficulte": "moyen",
            "explication": "Les chylomicrons sont des lipoprotéines formées dans l'intestin pour transporter les graisses alimentaires vers les tissus via la circulation sanguine."
          },
          {
            "question": "Qu'est-ce qui détermine principalement la fluidité membranaire ?",
            "options": [
              "La température uniquement",
              "La composition en phospholipides et cholestérol",
              "La présence de protéines",
              "Le pH du milieu"
            ],
            "correct": 1,
            "difficulte": "moyen",
            "explication": "La fluidité membranaire dépend de la composition lipidique : les acides gras saturés rigidifient, les insaturés fluidifient, et le cholestérol module cette fluidité."
          },
          {
            "question": "Combien d'acides gras compose un triglycéride ?",
            "options": [
              "1",
              "2",
              "3",
              "4"
            ],
            "correct": 2,
            "difficulte": "facile",
            "explication": "Un triglycéride (ou triacylglycérol) est formé par l'estérification d'un glycérol avec trois acides gras, d'où son nom."
          },
          {
            "question": "À partir de quel motif de base sont construits les terpènes ?",
            "options": [
              "Glucose (6C)",
              "Isoprène (5C)",
              "Acide gras (variable)",
              "Cholestérol (27C)"
            ],
            "correct": 1,
            "difficulte": "difficile",
            "explication": "Les terpènes sont construits à partir d'unités isoprène à 5 atomes de carbone, qui se combinent pour former les vitamines liposolubles et les stéroïdes."
          },
          {
            "question": "Quelle est la durée de vie moyenne d'un adipocyte ?",
            "options": [
              "6 mois",
              "1 an",
              "2 ans",
              "5 ans"
            ],
            "correct": 2,
            "difficulte": "difficile",
            "explication": "La durée de vie des adipocytes est d'environ 2 ans, ce qui explique les phénomènes de rebond lors des régimes amaigrissants."
          }
        ]
      },
      {
        "id": "biochimie-ch10",
        "titre": "Introduction à la biochimie",
        "emoji": "🧪",
        "nouveau": true,
        "flashcardsData": [
          {
            "q": "Qu'est-ce que la biochimie ?",
            "r": "Science qui étudie les processus chimiques et physicochimiques qui se déroulent au sein des êtres vivants"
          },
          {
            "q": "Quels sont les 4 types de macromolécules biologiques ?",
            "r": "Glucides, lipides, protéines et acides nucléiques"
          },
          {
            "q": "Qu'est-ce qu'un métabolisme ?",
            "r": "Ensemble des réactions chimiques qui se produisent dans une cellule ou un organisme vivant"
          },
          {
            "q": "Différence entre anabolisme et catabolisme ?",
            "r": "Anabolisme : synthèse de molécules complexes (consomme de l'énergie). Catabolisme : dégradation de molécules complexes (libère de l'énergie)"
          },
          {
            "q": "Qu'est-ce qu'une enzyme ?",
            "r": "Protéine catalysant une réaction biochimique spécifique en diminuant l'énergie d'activation"
          },
          {
            "q": "Qu'est-ce que l'ATP ?",
            "r": "Adénosine triphosphate, molécule énergétique universelle des cellules"
          },
          {
            "q": "Qu'est-ce que l'homéostasie ?",
            "r": "Capacité d'un organisme à maintenir un équilibre dynamique de ses constantes physiologiques"
          },
          {
            "q": "Rôle principal des acides nucléiques ?",
            "r": "Stockage et transmission de l'information génétique (ADN) et synthèse protéique (ARN)"
          },
          {
            "q": "Qu'est-ce qu'un cofacteur enzymatique ?",
            "r": "Molécule non protéique nécessaire à l'activité catalytique d'une enzyme"
          },
          {
            "q": "Principe de spécificité enzymatique ?",
            "r": "Une enzyme ne catalyse qu'un type de réaction spécifique grâce à son site actif complémentaire du substrat"
          }
        ],
        "fiche": {
          "page1_intro": {
            "titre": "Introduction",
            "texte": "La biochimie est la science qui étudie les processus chimiques et physicochimiques du vivant. Elle constitue le pont entre la chimie et la biologie, permettant de comprendre les mécanismes moléculaires de la vie. Cette discipline analyse les structures et fonctions des macromolécules biologiques (protéines, glucides, lipides, acides nucléiques) ainsi que leurs interactions. Elle étudie également les voies métaboliques qui transforment les nutriments en énergie et en composants cellulaires. La biochimie est fondamentale en médecine car elle explique les bases moléculaires des pathologies et guide le développement thérapeutique.",
            "points_cles": [
              "Étude des processus chimiques du vivant",
              "Quatre types de macromolécules biologiques",
              "Métabolisme : anabolisme et catabolisme",
              "Rôle central des enzymes comme catalyseurs"
            ]
          },
          "page2_concepts": {
            "titre": "Concepts clés",
            "concepts": [
              {
                "terme": "Biochimie",
                "definition": "Science étudiant les processus chimiques et physicochimiques qui se déroulent dans les organismes vivants"
              },
              {
                "terme": "Métabolisme",
                "definition": "Ensemble des réactions chimiques se produisant dans une cellule, comprenant l'anabolisme et le catabolisme"
              },
              {
                "terme": "Enzyme",
                "definition": "Protéine catalysant spécifiquement une réaction biochimique en diminuant l'énergie d'activation nécessaire"
              },
              {
                "terme": "ATP",
                "definition": "Adénosine triphosphate, molécule énergétique universelle permettant le couplage énergétique cellulaire"
              },
              {
                "terme": "Macromolécule",
                "definition": "Grande molécule biologique (protéine, glucide, lipide, acide nucléique) constituant la matière vivante"
              },
              {
                "terme": "Homéostasie",
                "definition": "Maintien de l'équilibre dynamique des constantes physiologiques d'un organisme"
              },
              {
                "terme": "Cofacteur",
                "definition": "Molécule non protéique (ion métallique ou coenzyme) nécessaire à l'activité catalytique d'une enzyme"
              },
              {
                "terme": "Site actif",
                "definition": "Région spécifique d'une enzyme où se fixe le substrat et où s'effectue la catalyse enzymatique"
              }
            ]
          },
          "page3_schemas": {
            "titre": "Schémas",
            "schemas": []
          },
          "page4_formules": {
            "titre": "Données clés",
            "formules": [
              {
                "label": "Hydrolyse ATP",
                "formule": "ATP + H₂O → ADP + Pi + énergie",
                "unite": "kJ/mol"
              },
              {
                "label": "Équation enzymatique",
                "formule": "E + S ⇌ ES → E + P",
                "unite": "-"
              }
            ],
            "donnees": [
              {
                "label": "Énergie libérée par hydrolyse ATP",
                "valeur": "30,5 kJ/mol"
              },
              {
                "label": "pH physiologique",
                "valeur": "7,4"
              },
              {
                "label": "Température corporelle",
                "valeur": "37°C"
              },
              {
                "label": "Nombre d'acides aminés naturels",
                "valeur": "20"
              }
            ]
          },
          "page5_resume": {
            "titre": "Résumé",
            "points": [
              "La biochimie étudie les processus chimiques du vivant au niveau moléculaire",
              "Quatre types de macromolécules : protéines, glucides, lipides et acides nucléiques",
              "Le métabolisme comprend l'anabolisme (synthèse) et le catabolisme (dégradation)",
              "Les enzymes sont des catalyseurs protéiques spécifiques indispensables aux réactions cellulaires",
              "L'ATP est la monnaie énergétique universelle permettant le couplage des réactions"
            ],
            "mnemo": "PACE : Protéines, ATP, Catalyse Enzymatique - les 3 piliers de la biochimie cellulaire"
          }
        },
        "qcm": [
          {
            "question": "Qu'est-ce que la biochimie ?",
            "options": [
              "Étude des roches et minéraux",
              "Étude des processus chimiques du vivant",
              "Étude des phénomènes physiques",
              "Étude de la génétique"
            ],
            "correct": 1,
            "difficulte": "facile",
            "explication": "La biochimie est la science qui étudie les processus chimiques et physicochimiques qui se déroulent dans les organismes vivants."
          },
          {
            "question": "Combien existe-t-il de types principaux de macromolécules biologiques ?",
            "options": [
              "2",
              "3",
              "4",
              "5"
            ],
            "correct": 2,
            "difficulte": "facile",
            "explication": "Il existe 4 types principaux de macromolécules biologiques : les protéines, les glucides, les lipides et les acides nucléiques."
          },
          {
            "question": "Que représente l'anabolisme ?",
            "options": [
              "Dégradation de molécules complexes",
              "Synthèse de molécules complexes",
              "Transport de molécules",
              "Élimination de déchets"
            ],
            "correct": 1,
            "difficulte": "moyen",
            "explication": "L'anabolisme correspond aux voies métaboliques de synthèse de molécules complexes à partir de précurseurs plus simples, nécessitant un apport d'énergie."
          },
          {
            "question": "Quelle est l'énergie libérée par l'hydrolyse d'une mole d'ATP ?",
            "options": [
              "20,5 kJ/mol",
              "25,5 kJ/mol",
              "30,5 kJ/mol",
              "35,5 kJ/mol"
            ],
            "correct": 2,
            "difficulte": "moyen",
            "explication": "L'hydrolyse d'une liaison phosphate de l'ATP libère environ 30,5 kJ/mol dans les conditions physiologiques."
          },
          {
            "question": "Quel est le rôle principal d'une enzyme ?",
            "options": [
              "Fournir de l'énergie",
              "Diminuer l'énergie d'activation",
              "Transporter des molécules",
              "Stocker l'information génétique"
            ],
            "correct": 1,
            "difficulte": "moyen",
            "explication": "Les enzymes sont des catalyseurs biologiques qui accélèrent les réactions en diminuant l'énergie d'activation nécessaire."
          },
          {
            "question": "Qu'est-ce qui caractérise la spécificité enzymatique ?",
            "options": [
              "Une enzyme catalyse toutes les réactions",
              "Une enzyme ne fonctionne qu'à haute température",
              "Une enzyme est spécifique d'un type de réaction",
              "Une enzyme ne fonctionne qu'en présence d'ATP"
            ],
            "correct": 2,
            "difficulte": "difficile",
            "explication": "La spécificité enzymatique signifie qu'une enzyme donnée ne catalyse qu'un type de réaction spécifique grâce à la complémentarité de son site actif avec le substrat."
          }
        ]
      }
    ]
  },
  {
    "id": "chimie",
    "emoji": "⚗️",
    "nom": "Chimie",
    "categorie": "anticipation",
    "niveau": "PASS/LAS",
    "color": "#2C5F2E",
    "cours": [
      {
        "id": "chimie-ch1",
        "titre": "Rappels fondamentaux de chimie",
        "emoji": "⚛️",
        "nouveau": false,
        "flashcardsData": [
          {
            "q": "Quelle est la composition du noyau atomique ?",
            "r": "Le noyau est chargé positivement et constitué de nucléons : protons (charge +e) et neutrons (particules neutres)"
          },
          {
            "q": "Comment calcule-t-on le nombre de neutrons d'un atome ?",
            "r": "Nombre de neutrons = A - Z (nombre de masse - numéro atomique)"
          },
          {
            "q": "Que sont les isotopes ?",
            "r": "Des noyaux ayant le même numéro atomique Z mais des nombres de masse A différents (même nombre de protons, nombre de neutrons différent)"
          },
          {
            "q": "Quelle est la formule de la concentration molaire ?",
            "r": "c = n/V où c est en mol/L, n en mol et V en L"
          },
          {
            "q": "Que sont les électrons de valence ?",
            "r": "Les électrons les plus énergétiques, les plus réactifs, situés sur la couche externe, responsables des propriétés chimiques"
          },
          {
            "q": "Comment évolue l'électronégativité dans le tableau périodique ?",
            "r": "Elle augmente de bas en haut et de gauche à droite. F est l'élément le plus électronégatif (EN = 4)"
          },
          {
            "q": "Quelles sont les familles de la dernière colonne du tableau périodique ?",
            "r": "Les gaz rares (ou nobles) avec une couche de valence saturée (ns²np⁶)"
          },
          {
            "q": "Quelle est la différence entre métaux et non-métaux ?",
            "r": "Métaux (gauche) : cèdent facilement des électrons. Non-métaux (droite) : captent des électrons"
          },
          {
            "q": "Comment calculer la quantité de matière ?",
            "r": "n = m/M où n est en mol, m en g et M en g/mol"
          },
          {
            "q": "Que représente le nombre d'Avogadro ?",
            "r": "NA = 6,022×10²³ mol⁻¹, c'est le nombre de particules dans une mole"
          }
        ],
        "fiche": {
          "page1_intro": {
            "titre": "Introduction",
            "texte": "Ce chapitre de rappels constitue les fondements indispensables de la chimie pour les étudiants en santé. Il couvre la structure atomique depuis le noyau jusqu'aux électrons de valence, les notions de concentration et de quantité de matière essentielles en biochimie, ainsi que l'organisation du tableau périodique. Ces concepts sont cruciaux pour comprendre les réactions chimiques, les liaisons moléculaires et les propriétés des éléments que nous retrouvons constamment en médecine et en biologie.",
            "points_cles": [
              "Structure atomique : noyau (protons + neutrons) et nuage électronique",
              "Caractérisation atomique par Z (numéro atomique) et A (nombre de masse)",
              "Calculs de concentrations et quantités de matière",
              "Classification périodique et propriétés des éléments"
            ]
          },
          "page2_concepts": {
            "titre": "Concepts clés",
            "concepts": [
              {
                "terme": "Numéro atomique (Z)",
                "definition": "Nombre de protons dans le noyau, égal au nombre d'électrons dans l'atome neutre. Détermine l'identité chimique de l'élément."
              },
              {
                "terme": "Nombre de masse (A)",
                "definition": "Nombre total de nucléons (protons + neutrons) dans le noyau. Correspond approximativement à la masse atomique en unités u."
              },
              {
                "terme": "Isotopes",
                "definition": "Atomes ayant le même numéro atomique Z mais des nombres de masse A différents. Mêmes propriétés chimiques mais masses différentes."
              },
              {
                "terme": "Électrons de valence",
                "definition": "Électrons de la couche externe, les plus énergétiques et réactifs. Responsables des liaisons chimiques et des propriétés de l'élément."
              },
              {
                "terme": "Électronégativité",
                "definition": "Capacité d'un atome à attirer les électrons vers lui dans une liaison chimique. Échelle de Pauling, F = 4 (maximum)."
              },
              {
                "terme": "Concentration molaire",
                "definition": "Quantité de matière de soluté par unité de volume de solution, exprimée en mol/L ou M."
              },
              {
                "terme": "Mole",
                "definition": "Unité de quantité de matière contenant 6,022×10²³ particules (nombre d'Avogadro). Pont entre échelle microscopique et macroscopique."
              },
              {
                "terme": "Gaz rares",
                "definition": "Éléments de la 18ème colonne du tableau périodique, avec une couche de valence saturée (ns²np⁶), très stables chimiquement."
              }
            ]
          },
          "page3_schemas": {
            "titre": "Schémas",
            "schemas": []
          },
          "page4_formules": {
            "titre": "Données clés",
            "formules": [
              {
                "label": "Concentration molaire",
                "formule": "c = n/V",
                "unite": "mol/L"
              },
              {
                "label": "Quantité de matière",
                "formule": "n = m/M",
                "unite": "mol"
              },
              {
                "label": "Masse volumique",
                "formule": "ρ = m/V",
                "unite": "kg/L"
              },
              {
                "label": "Loi des gaz parfaits",
                "formule": "PV = nRT",
                "unite": "Pa·m³ = mol·J·K⁻¹·K"
              }
            ],
            "donnees": [
              {
                "label": "Charge élémentaire",
                "valeur": "e = 1,602×10⁻¹⁹ C"
              },
              {
                "label": "Unité de masse atomique",
                "valeur": "u = 1,661×10⁻²⁴ g"
              },
              {
                "label": "Nombre d'Avogadro",
                "valeur": "NA = 6,022×10²³ mol⁻¹"
              },
              {
                "label": "Diamètre atomique",
                "valeur": "≈ 0,1 nm"
              },
              {
                "label": "Diamètre du noyau",
                "valeur": "≈ 10⁻⁵ nm"
              },
              {
                "label": "Électronégativité du fluor",
                "valeur": "EN(F) = 4,0"
              }
            ]
          },
          "page5_resume": {
            "titre": "Résumé",
            "points": [
              "L'atome est constitué d'un noyau (protons + neutrons) et d'électrons, caractérisé par Z et A",
              "Les isotopes ont même Z mais A différent, conservant les mêmes propriétés chimiques",
              "Les concentrations se calculent avec c = n/V et n = m/M, essentielles en biochimie",
              "Le tableau périodique classe les éléments par Z croissant, les propriétés évoluent selon des tendances",
              "L'électronégativité augmente vers F (4,0) et détermine la polarité des liaisons chimiques"
            ],
            "mnemo": "ZINC AMIE : Z (numéro atomique), Isotopes, Neutrons = A-Z, Concentration = n/V, Avogadro, Métaux à gauche, Électronégativité croît vers F"
          }
        },
        "qcm": [
          {
            "question": "Un atome de carbone 14 (¹⁴C) possède :",
            "options": [
              "6 protons et 6 neutrons",
              "6 protons et 8 neutrons",
              "8 protons et 6 neutrons",
              "14 protons et 6 neutrons"
            ],
            "correct": 1,
            "difficulte": "facile",
            "explication": "Le carbone a Z = 6, donc 6 protons. Pour ¹⁴C, A = 14, donc neutrons = A - Z = 14 - 6 = 8 neutrons."
          },
          {
            "question": "Quelle est la concentration d'une solution contenant 2 moles de NaCl dans 500 mL ?",
            "options": [
              "1 mol/L",
              "2 mol/L",
              "4 mol/L",
              "0,25 mol/L"
            ],
            "correct": 2,
            "difficulte": "moyen",
            "explication": "c = n/V = 2 mol / 0,5 L = 4 mol/L. Il faut convertir 500 mL en 0,5 L."
          },
          {
            "question": "Dans le tableau périodique, l'électronégativité :",
            "options": [
              "Diminue de gauche à droite",
              "Augmente de haut en bas",
              "Augmente de gauche à droite et de bas en haut",
              "Est constante sur une même période"
            ],
            "correct": 2,
            "difficulte": "moyen",
            "explication": "L'électronégativité augmente de gauche à droite (charge nucléaire croissante) et de bas en haut (taille atomique décroissante)."
          },
          {
            "question": "Les électrons de valence sont :",
            "options": [
              "Les électrons du noyau",
              "Les électrons de cœur",
              "Les électrons externes les plus réactifs",
              "Les électrons de masse négligeable"
            ],
            "correct": 2,
            "difficulte": "facile",
            "explication": "Les électrons de valence sont situés sur la couche externe, ils sont les plus énergétiques et participent aux liaisons chimiques."
          },
          {
            "question": "Combien d'atomes y a-t-il dans 0,5 mole de fer ?",
            "options": [
              "6,022×10²³",
              "3,011×10²³",
              "1,204×10²⁴",
              "0,5"
            ],
            "correct": 1,
            "difficulte": "moyen",
            "explication": "Nombre d'atomes = n × NA = 0,5 mol × 6,022×10²³ mol⁻¹ = 3,011×10²³ atomes."
          },
          {
            "question": "Les gaz rares ont une configuration électronique externe :",
            "options": [
              "ns²np⁴",
              "ns²np⁶",
              "ns¹",
              "nd¹⁰"
            ],
            "correct": 1,
            "difficulte": "moyen",
            "explication": "Les gaz rares ont une couche de valence saturée avec la configuration ns²np⁶ (sauf He : 1s²)."
          },
          {
            "question": "Le volume d'un atome est environ _____ fois plus grand que le volume de son noyau :",
            "options": [
              "10³",
              "10⁶",
              "10⁹",
              "10¹²"
            ],
            "correct": 3,
            "difficulte": "difficile",
            "explication": "Le diamètre atomique (≈0,1 nm) est 10⁴ fois plus grand que le diamètre nucléaire (≈10⁻⁵ nm). En volume : (10⁴)³ = 10¹²."
          },
          {
            "question": "Quelle masse de glucose (M = 180 g/mol) contient 0,25 mol ?",
            "options": [
              "45 g",
              "90 g",
              "180 g",
              "720 g"
            ],
            "correct": 0,
            "difficulte": "facile",
            "explication": "m = n × M = 0,25 mol × 180 g/mol = 45 g."
          }
        ]
      },
      {
        "id": "chimie-ch2",
        "titre": "Liaison chimique et géométrie moléculaire",
        "emoji": "🔬",
        "nouveau": true,
        "flashcardsData": [
          {
            "q": "Qu'est-ce qu'une liaison covalente ?",
            "r": "Mise en commun d'une paire d'électrons de valence entre deux atomes pour abaisser l'énergie du système et le stabiliser"
          },
          {
            "q": "Quelles sont les deux origines possibles du doublet de liaison ?",
            "r": "Homolytique (chaque atome contribue par 1 e-) et hétérolytique (donneur de doublet + accepteur de doublet)"
          },
          {
            "q": "Énoncez la règle de l'octet",
            "r": "Tout atome cherche à saturer sa couche de valence à 8 électrons pour adopter la configuration du gaz rare le plus proche et être plus stable"
          },
          {
            "q": "Que signifie VSEPR ?",
            "r": "Valence Shell Electron Pair Repulsion - théorie décrivant l'organisation spatiale des paires d'électrons pour minimiser leurs répulsions électrostatiques"
          },
          {
            "q": "Quelle est la notation générale VSEPR ?",
            "r": "ALnEm où A = atome central, n = nombre d'atomes liés à A, m = nombre de doublets non liants de A"
          },
          {
            "q": "Quelle géométrie correspond à n+m = 4 ?",
            "r": "Tétraédrique (exemple : CCl4 de type AL4E0)"
          },
          {
            "q": "Comment les doublets non liants affectent-ils les angles ?",
            "r": "Les doublets non liants sont plus volumineux que les doublets liants, ce qui diminue les angles de liaison"
          },
          {
            "q": "Qu'est-ce qu'une charge formelle ?",
            "r": "Charge portée par un atome s'il possède un nombre d'électrons différent de son nombre d'électrons de valence"
          },
          {
            "q": "Qu'est-ce qu'une lacune électronique ?",
            "r": "Apparaît lorsque la règle de l'octet n'est pas atteinte par un atome"
          },
          {
            "q": "Pourquoi la règle de l'octet peut-elle être mise en défaut pour les éléments de la 3e période ?",
            "r": "Car ils peuvent utiliser les orbitales 3d vides, permettant plus de 8 électrons dans la couche de valence"
          }
        ],
        "fiche": {
          "page1_intro": {
            "titre": "Introduction",
            "texte": "La liaison chimique et la géométrie moléculaire sont des concepts fondamentaux pour comprendre la stabilité, la réactivité et les propriétés des molécules. Le modèle de Lewis permet de représenter les liaisons covalentes par la mise en commun de paires d'électrons, tandis que la théorie VSEPR (Valence Shell Electron Pair Repulsion) prédit la géométrie tridimensionnelle des molécules. Ces deux approches complémentaires sont essentielles pour comprendre comment les atomes s'assemblent pour former des molécules stables et prédire leur comportement chimique. La maîtrise de ces concepts est cruciale pour appréhender la chimie organique et la biochimie en études médicales.",
            "points_cles": [
              "Liaison covalente = partage de paires d'électrons",
              "Règle de l'octet pour la stabilisation",
              "Théorie VSEPR pour la géométrie 3D",
              "Distinction charge formelle / lacune électronique"
            ]
          },
          "page2_concepts": {
            "titre": "Concepts clés",
            "concepts": [
              {
                "terme": "Liaison covalente",
                "definition": "Liaison chimique résultant de la mise en commun d'une paire d'électrons de valence entre deux atomes pour stabiliser le système"
              },
              {
                "terme": "Règle de l'octet",
                "definition": "Tendance des atomes à adopter la configuration électronique du gaz rare le plus proche (8 électrons de valence) pour minimiser leur énergie"
              },
              {
                "terme": "Formation homolytique",
                "definition": "Chaque atome contribue à la formation de la liaison par apport d'un électron"
              },
              {
                "terme": "Formation hétérolytique",
                "definition": "Un donneur de doublet (base de Lewis) réagit avec un accepteur de doublet (acide de Lewis)"
              },
              {
                "terme": "Théorie VSEPR",
                "definition": "Valence Shell Electron Pair Repulsion - organisation spatiale des paires d'électrons pour minimiser les répulsions électrostatiques"
              },
              {
                "terme": "Notation ALnEm",
                "definition": "A = atome central, n = nombre d'atomes liés, m = nombre de doublets non liants"
              },
              {
                "terme": "Charge formelle",
                "definition": "Charge portée par un atome ayant un nombre d'électrons différent de ses électrons de valence"
              },
              {
                "terme": "Lacune électronique",
                "definition": "Déficit électronique quand la règle de l'octet n'est pas respectée"
              }
            ]
          },
          "page3_schemas": {
            "titre": "Schémas",
            "schemas": []
          },
          "page4_formules": {
            "titre": "Données clés",
            "formules": [
              {
                "label": "Géométrie selon n+m",
                "formule": "n+m = 2 → linéaire, 3 → trigonale, 4 → tétraédrique",
                "unite": ""
              }
            ],
            "donnees": [
              {
                "label": "Angle tétraédrique théorique",
                "valeur": "109,5°"
              },
              {
                "label": "Angle trigonal plan",
                "valeur": "120°"
              },
              {
                "label": "Angle linéaire",
                "valeur": "180°"
              }
            ]
          },
          "page5_resume": {
            "titre": "Résumé",
            "points": [
              "Les liaisons covalentes se forment par partage de paires d'électrons pour stabiliser les atomes",
              "La règle de l'octet guide la formation des liaisons (8 électrons de valence pour la stabilité)",
              "La théorie VSEPR prédit la géométrie 3D selon la formule ALnEm où n+m détermine la forme",
              "Les doublets non liants sont plus volumineux et réduisent les angles de liaison",
              "Charge formelle et lacune électronique sont des concepts distincts mais complémentaires"
            ],
            "mnemo": "LewisVSEPR : Liaisons Électroniques Stabilisent, VSEPR Spatialise, Électrons Prédisent Répulsions"
          }
        },
        "qcm": [
          {
            "question": "Quelle est la géométrie de la molécule NH3 selon VSEPR ?",
            "options": [
              "Tétraédrique",
              "Pyramidale trigonale",
              "Trigonale plane",
              "Linéaire"
            ],
            "correct": 1,
            "difficulte": "moyen",
            "explication": "NH3 a la notation AL3E1 (3 liaisons + 1 doublet non liant), donnant une géométrie pyramidale trigonale dérivée du tétraèdre"
          },
          {
            "question": "Combien d'électrons de valence possède l'atome de carbone ?",
            "options": [
              "2",
              "4",
              "6",
              "8"
            ],
            "correct": 1,
            "difficulte": "facile",
            "explication": "Le carbone (Z=6) a la configuration 1s² 2s² 2p², soit 4 électrons de valence (2s² 2p²)"
          },
          {
            "question": "Dans la formation hétérolytique d'une liaison, qui est l'accepteur de doublet ?",
            "options": [
              "Base de Lewis",
              "Acide de Lewis",
              "Gaz rare",
              "Métal alcalin"
            ],
            "correct": 1,
            "difficulte": "moyen",
            "explication": "L'acide de Lewis est l'accepteur de doublet d'électrons, tandis que la base de Lewis est le donneur de doublet"
          },
          {
            "question": "Quelle est la valeur de n+m pour PCl5 ?",
            "options": [
              "4",
              "5",
              "6",
              "10"
            ],
            "correct": 1,
            "difficulte": "moyen",
            "explication": "PCl5 a 5 atomes de chlore liés au phosphore et 0 doublet non liant, donc AL5E0 avec n+m = 5"
          },
          {
            "question": "Pourquoi les éléments de la 3e période peuvent-ils dépasser la règle de l'octet ?",
            "options": [
              "Ils ont plus d'électrons",
              "Ils peuvent utiliser les orbitales 3d",
              "Ils sont plus électronégatifs",
              "Ils forment des liaisons ioniques"
            ],
            "correct": 1,
            "difficulte": "difficile",
            "explication": "Les éléments de la 3e période peuvent utiliser les orbitales 3d vides pour accommoder plus de 8 électrons dans leur couche de valence"
          },
          {
            "question": "Quelle géométrie correspond à la notation AL2E0 ?",
            "options": [
              "Tétraédrique",
              "Trigonale plane",
              "Linéaire",
              "Pyramidale"
            ],
            "correct": 2,
            "difficulte": "facile",
            "explication": "AL2E0 correspond à 2 liaisons et 0 doublet non liant, soit n+m = 2, donnant une géométrie linéaire"
          },
          {
            "question": "Qu'est-ce qui distingue une lacune électronique d'une charge positive ?",
            "options": [
              "Rien, c'est identique",
              "La lacune concerne l'octet, la charge le nombre d'électrons",
              "La charge concerne l'octet, la lacune le nombre d'électrons",
              "La lacune est temporaire"
            ],
            "correct": 1,
            "difficulte": "difficile",
            "explication": "Une lacune électronique indique que l'octet n'est pas atteint, tandis qu'une charge positive indique un déficit d'électrons par rapport aux électrons de valence. Ce sont deux concepts distincts."
          }
        ]
      },
      {
        "id": "chimie-ch3",
        "titre": "Isomérie",
        "emoji": "🔄",
        "nouveau": true,
        "flashcardsData": [
          {
            "q": "Qu'est-ce que des isomères ?",
            "r": "Des molécules ayant la même formule brute mais des structures différentes"
          },
          {
            "q": "Quels sont les deux types d'isomères ?",
            "r": "Les isomères de constitution (enchaînement différent) et les stéréoisomères (arrangement spatial différent)"
          },
          {
            "q": "Qu'est-ce qu'un objet chiral ?",
            "r": "Un objet non superposable à son image dans un miroir et ne possédant ni plan ni centre de symétrie"
          },
          {
            "q": "Qu'est-ce qu'un carbone asymétrique ?",
            "r": "Un carbone tétraédrique (sp³) entouré de 4 substituants différents, noté C*"
          },
          {
            "q": "Comment détermine-t-on la configuration R ou S ?",
            "r": "Selon les règles de Cahn-Ingold-Prelog : classer par numéro atomique, placer le groupe prioritaire faible à l'arrière, sens horaire = R"
          },
          {
            "q": "Que signifie la nomenclature Z/E ?",
            "r": "Z = groupes prioritaires du même côté de la double liaison, E = groupes prioritaires opposés"
          },
          {
            "q": "Dans la représentation de Cram, que signifie un trait triangulaire plein ?",
            "r": "Une liaison vers l'avant du plan"
          },
          {
            "q": "Qu'est-ce que des énantiomères ?",
            "r": "Deux objets chiraux images l'un de l'autre dans un miroir et non superposables"
          },
          {
            "q": "Comment traite-t-on les liaisons multiples dans les règles CIP ?",
            "r": "On les considère comme plusieurs liaisons simples vers le même atome"
          },
          {
            "q": "Quelle est généralement la stabilité relative Z/E ?",
            "r": "E est généralement plus stable que Z pour des raisons de gêne stérique"
          }
        ],
        "fiche": {
          "page1_intro": {
            "titre": "Introduction",
            "texte": "L'isomérie est un phénomène fondamental en chimie organique où des molécules possèdent la même formule brute mais diffèrent par leur structure ou leur arrangement spatial. Cette propriété est cruciale en biochimie car elle explique pourquoi des molécules de même composition peuvent avoir des activités biologiques totalement différentes. On distingue deux grandes catégories : l'isomérie de constitution (différences dans l'enchaînement des atomes) et la stéréoisomérie (différences dans l'arrangement spatial des atomes). La compréhension de ces concepts est essentielle pour appréhender l'activité des médicaments, des enzymes et des métabolites dans l'organisme.",
            "points_cles": [
              "Même formule brute, structures différentes",
              "Isomérie de constitution vs stéréoisomérie",
              "Impact sur l'activité biologique",
              "Représentations spatiales (Cram, topologique)"
            ]
          },
          "page2_concepts": {
            "titre": "Concepts clés",
            "concepts": [
              {
                "terme": "Isomères",
                "definition": "Molécules ayant la même formule brute mais des structures différentes, divisées en isomères de constitution et stéréoisomères"
              },
              {
                "terme": "Chiralité",
                "definition": "Propriété d'un objet non superposable à son image dans un miroir, caractérisée par l'activité optique en solution"
              },
              {
                "terme": "Carbone asymétrique (C*)",
                "definition": "Carbone tétraédrique sp³ entouré de quatre substituants différents, responsable de la chiralité moléculaire"
              },
              {
                "terme": "Énantiomères",
                "definition": "Couple de molécules chirales images l'une de l'autre dans un miroir plan et non superposables"
              },
              {
                "terme": "Configuration absolue",
                "definition": "Arrangement spatial spécifique des substituants autour d'un carbone asymétrique, décrit par les notations R/S"
              },
              {
                "terme": "Règles de Cahn-Ingold-Prelog",
                "definition": "Système de nomenclature basé sur la priorité des substituants selon leur numéro atomique pour déterminer les configurations R/S et Z/E"
              },
              {
                "terme": "Diastéréoisomères Z/E",
                "definition": "Stéréoisomères de double liaison : Z (substituants prioritaires du même côté), E (substituants prioritaires opposés)"
              },
              {
                "terme": "Représentation de Cram",
                "definition": "Convention d'écriture 3D utilisant des traits pleins (plan), triangulaires pleins (avant) et hachurés (arrière)"
              }
            ]
          },
          "page3_schemas": {
            "titre": "Schémas",
            "schemas": []
          },
          "page4_formules": {
            "titre": "Données clés",
            "formules": [
              {
                "label": "Nombre de stéréoisomères",
                "formule": "2ⁿ",
                "unite": "n = nombre de C*"
              },
              {
                "label": "Angle tétraédrique",
                "formule": "≈ 109°",
                "unite": "degrés"
              }
            ],
            "donnees": [
              {
                "label": "Hybridation carbone asymétrique",
                "valeur": "sp³"
              },
              {
                "label": "Configurations possibles par C*",
                "valeur": "2 (R ou S)"
              },
              {
                "label": "Stabilité relative",
                "valeur": "E > Z (généralement)"
              }
            ]
          },
          "page5_resume": {
            "titre": "Résumé",
            "points": [
              "Les isomères ont même formule brute mais structures différentes",
              "Deux types : isomérie de constitution et stéréoisomérie",
              "La chiralité provient des carbones asymétriques (4 substituants différents)",
              "Les configurations absolues R/S sont déterminées par les règles de Cahn-Ingold-Prelog",
              "Les doubles liaisons donnent des diastéréoisomères Z/E selon la position des groupes prioritaires"
            ],
            "mnemo": "ICCER : Isomères = même Composition, Chiralité = Carbone asymétrique, Énantiomères images, R/S par Règles CIP"
          }
        },
        "qcm": [
          {
            "question": "Quelle est la condition nécessaire et suffisante pour qu'un carbone soit asymétrique ?",
            "options": [
              "Être hybridé sp³",
              "Porter 4 substituants différents",
              "Être dans une chaîne carbonée",
              "Être lié à un hétéroatome"
            ],
            "correct": 1,
            "difficulte": "facile",
            "explication": "Un carbone asymétrique doit être tétraédrique (sp³) ET porter 4 substituants tous différents les uns des autres."
          },
          {
            "question": "Dans la représentation de Cram, un trait triangulaire hachuré indique :",
            "options": [
              "Une liaison dans le plan",
              "Une liaison vers l'avant",
              "Une liaison vers l'arrière",
              "Une double liaison"
            ],
            "correct": 2,
            "difficulte": "facile",
            "explication": "Le trait triangulaire hachuré représente une liaison entre un atome dans le plan et un atome situé en arrière de ce plan."
          },
          {
            "question": "Pour déterminer la configuration R ou S, on doit :",
            "options": [
              "Placer le groupe prioritaire devant",
              "Tourner dans le sens antihoraire",
              "Placer le groupe de plus faible priorité à l'arrière",
              "Compter les atomes de carbone"
            ],
            "correct": 2,
            "difficulte": "moyen",
            "explication": "La méthode correcte consiste à placer le substituant de plus faible priorité à l'arrière, puis observer le sens de rotation des 3 autres groupes par ordre de priorité décroissante."
          },
          {
            "question": "Dans la nomenclature Z/E, la configuration E correspond à :",
            "options": [
              "Groupes prioritaires du même côté",
              "Groupes prioritaires opposés",
              "Double liaison stable",
              "Triple liaison"
            ],
            "correct": 1,
            "difficulte": "moyen",
            "explication": "E (entgegen = opposé en allemand) signifie que les deux groupes prioritaires sont de part et d'autre de la double liaison."
          },
          {
            "question": "Les énantiomères sont caractérisés par :",
            "options": [
              "Même activité optique",
              "Propriétés physiques identiques",
              "Images dans un miroir non superposables",
              "Même configuration absolue"
            ],
            "correct": 2,
            "difficulte": "moyen",
            "explication": "Les énantiomères sont des molécules chirales qui sont images l'une de l'autre dans un miroir plan et ne peuvent pas être superposées."
          },
          {
            "question": "Une molécule possédant 2 carbones asymétriques peut avoir au maximum :",
            "options": [
              "2 stéréoisomères",
              "4 stéréoisomères",
              "6 stéréoisomères",
              "8 stéréoisomères"
            ],
            "correct": 1,
            "difficulte": "difficile",
            "explication": "Le nombre maximum de stéréoisomères est donné par 2ⁿ où n est le nombre de carbones asymétriques : 2² = 4 stéréoisomères."
          },
          {
            "question": "Dans les règles de priorité CIP, une double liaison C=O est traitée comme :",
            "options": [
              "Une liaison simple vers O",
              "Deux liaisons simples vers O",
              "Une liaison vers deux O différents",
              "Une liaison prioritaire absolue"
            ],
            "correct": 1,
            "difficulte": "difficile",
            "explication": "Les liaisons multiples sont considérées comme plusieurs liaisons simples vers le même atome, donc C=O équivaut à deux liaisons C-O."
          }
        ]
      },
      {
        "id": "chimie-ch4",
        "titre": "Introduction à la chimie organique",
        "emoji": "🧪",
        "nouveau": true,
        "flashcardsData": [
          {
            "q": "Qu'est-ce qu'un réactif électrophile ?",
            "r": "Un réactif accepteur d'électrons possédant une orbitale vacante, qui réagit avec les nucléophiles"
          },
          {
            "q": "Que représente la formule topologique ?",
            "r": "Une représentation où les atomes de carbone et les hydrogènes liés au carbone sont implicites"
          },
          {
            "q": "Quelle est la différence entre SN1 et SN2 ?",
            "r": "SN1 est une substitution monomoléculaire sur carbone sp³, SN2 est bimoléculaire sur carbone sp³"
          },
          {
            "q": "Que signifie réaction régiosélective ?",
            "r": "Une réaction où un des régioisomères du mélange est majoritaire (pas équimolaire)"
          },
          {
            "q": "Quel est le bilan d'une réaction d'addition ?",
            "r": "1 liaison π rompue + 2 liaisons σ formées"
          },
          {
            "q": "Comment détermine-t-on la configuration R/S ?",
            "r": "En plaçant le groupe le moins prioritaire (CIP) à l'arrière et en classant les autres : sens horaire = R"
          },
          {
            "q": "Qu'est-ce qu'un nucléophile ?",
            "r": "Un donneur d'électrons possédant un doublet électronique libre, qui 'aime le noyau'"
          },
          {
            "q": "Que se passe-t-il lors d'une élimination ?",
            "r": "2 atomes partent pour créer une insaturation : 2 liaisons σ rompues + 1 liaison π formée"
          },
          {
            "q": "Quelle réaction se produit sur C=O ?",
            "r": "Addition nucléophile, le nucléophile attaque le carbone électrophile"
          },
          {
            "q": "Que contient la formule brute ?",
            "r": "Les atomes constitutifs et leur nombre en indice, dans l'ordre C, H, O, N..."
          }
        ],
        "fiche": {
          "page1_intro": {
            "titre": "Introduction",
            "texte": "La chimie organique étudie les molécules contenant du carbone et leurs transformations. Elle nécessite de maîtriser différents modes de représentation des molécules, depuis la formule brute jusqu'à la représentation de Cram qui révèle la géométrie dans l'espace. Les réactions organiques impliquent des interactions entre électrophiles (accepteurs d'électrons) et nucléophiles (donneurs d'électrons). Ces transformations suivent des mécanismes précis qui peuvent être classés en trois grandes catégories : substitution, addition et élimination. La compréhension de ces concepts fondamentaux est essentielle pour appréhender la réactivité des molécules biologiques.",
            "points_cles": [
              "Représentations moléculaires variées",
              "Interactions électrophile-nucléophile",
              "Trois types de mécanismes réactionnels",
              "Stéréochimie et régiochimie"
            ]
          },
          "page2_concepts": {
            "titre": "Concepts clés",
            "concepts": [
              {
                "terme": "Électrophile",
                "definition": "Réactif accepteur d'électrons possédant une orbitale vacante, qui réagit préférentiellement avec les nucléophiles"
              },
              {
                "terme": "Nucléophile",
                "definition": "Réactif donneur d'électrons possédant un doublet libre, qui attaque les sites électrophiles"
              },
              {
                "terme": "Formule topologique",
                "definition": "Représentation simplifiée où les atomes de carbone et les hydrogènes liés au carbone sont implicites"
              },
              {
                "terme": "Substitution nucléophile",
                "definition": "Réaction où un nucléophile remplace un groupe partant, mécanisme SN1 ou SN2 selon le carbone"
              },
              {
                "terme": "Régiochimie",
                "definition": "Étude de la sélectivité d'une réaction pouvant former plusieurs régioisomères"
              },
              {
                "terme": "Stéréochimie",
                "definition": "Étude de la géométrie moléculaire et de la sélectivité lors de la formation de stéréoisomères"
              },
              {
                "terme": "Configuration R/S",
                "definition": "Nomenclature CIP décrivant l'arrangement spatial des substituants autour d'un carbone asymétrique"
              },
              {
                "terme": "Addition électrophile",
                "definition": "Réaction sur liaison C=C où l'électrophile attaque en premier, suivie du nucléophile"
              }
            ]
          },
          "page3_schemas": {
            "titre": "Schémas",
            "schemas": []
          },
          "page4_formules": {
            "titre": "Données clés",
            "formules": [
              {
                "label": "Bilan substitution",
                "formule": "1 σ rompue + 1 σ formée",
                "unite": ""
              },
              {
                "label": "Bilan addition",
                "formule": "1 π rompue + 2 σ formées",
                "unite": ""
              },
              {
                "label": "Bilan élimination",
                "formule": "2 σ rompues + 1 π formée",
                "unite": ""
              }
            ],
            "donnees": [
              {
                "label": "Ordre des atomes dans formule brute",
                "valeur": "C, H, O, N..."
              },
              {
                "label": "Réaction non sélective",
                "valeur": "50% de chaque isomère"
              },
              {
                "label": "Carbones hybridés sp³",
                "valeur": "Mécanismes SN1/SN2"
              },
              {
                "label": "Carbones hybridés sp²",
                "valeur": "Addition/élimination"
              }
            ]
          },
          "page5_resume": {
            "titre": "Résumé",
            "points": [
              "Les molécules organiques peuvent être représentées selon différents niveaux de détail : brute, semi-développée, développée, topologique et Cram",
              "Les réactions organiques impliquent des interactions entre électrophiles (accepteurs d'e⁻) et nucléophiles (donneurs d'e⁻)",
              "Trois mécanismes principaux : substitution (1σ→1σ), addition (1π→2σ) et élimination (2σ→1π)",
              "La régiochimie et stéréochimie déterminent la sélectivité des réactions selon les isomères formés",
              "La configuration absolue R/S utilise les règles de priorité CIP pour décrire l'arrangement spatial"
            ],
            "mnemo": "SERA : Substitution-Élimination-Régiochimie-Addition pour retenir les 4 concepts clés des mécanismes organiques"
          }
        },
        "qcm": [
          {
            "question": "Quel est le bilan d'une réaction d'addition sur une double liaison C=C ?",
            "options": [
              "1 liaison σ rompue + 1 liaison σ formée",
              "1 liaison π rompue + 2 liaisons σ formées",
              "2 liaisons σ rompues + 1 liaison π formée",
              "2 liaisons π rompues + 1 liaison σ formée"
            ],
            "correct": 1,
            "difficulte": "facile",
            "explication": "L'addition consiste à rompre une liaison π (double liaison) pour former 2 nouvelles liaisons σ avec les réactifs qui s'additionnent."
          },
          {
            "question": "Un nucléophile se caractérise par :",
            "options": [
              "Une orbitale vacante",
              "Un doublet d'électrons libre",
              "Une charge positive",
              "Une déficience électronique"
            ],
            "correct": 1,
            "difficulte": "facile",
            "explication": "Le nucléophile est un donneur d'électrons qui possède un doublet d'électrons libre lui permettant d'attaquer les sites électrophiles."
          },
          {
            "question": "Dans la formule topologique, que représentent les sommets et extrémités des traits ?",
            "options": [
              "Les atomes d'hydrogène",
              "Les liaisons covalentes",
              "Les atomes de carbone",
              "Les doubles liaisons"
            ],
            "correct": 2,
            "difficulte": "moyen",
            "explication": "En représentation topologique, chaque sommet et extrémité de trait représente un atome de carbone, les hydrogènes liés étant implicites."
          },
          {
            "question": "Quelle différence existe-t-il entre les mécanismes SN1 et SN2 ?",
            "options": [
              "SN1 est sur sp² et SN2 sur sp³",
              "SN1 est bimoléculaire et SN2 monomoléculaire",
              "SN1 est monomoléculaire et SN2 bimoléculaire",
              "Il n'y a pas de différence"
            ],
            "correct": 2,
            "difficulte": "moyen",
            "explication": "SN1 signifie Substitution Nucléophile monomoléculaire (1 molécule dans l'étape limitante) tandis que SN2 est bimoléculaire (2 molécules)."
          },
          {
            "question": "Une réaction est dite régiosélective quand :",
            "options": [
              "Elle forme un mélange équimolaire de régioisomères",
              "Un régioisomère est majoritaire dans le mélange",
              "Elle ne forme qu'un seul produit",
              "Elle implique des carbones sp²"
            ],
            "correct": 1,
            "difficulte": "moyen",
            "explication": "Une réaction régiosélective produit un régioisomère majoritaire. Si le mélange est équimolaire (50-50), la réaction est non régiosélective."
          },
          {
            "question": "Pour déterminer la configuration R selon les règles CIP, on :",
            "options": [
              "Place le groupe prioritaire à l'arrière",
              "Tourne dans le sens antihoraire",
              "Place le groupe le moins prioritaire à l'arrière et classe les autres dans le sens horaire",
              "Compte le nombre de carbones asymétriques"
            ],
            "correct": 2,
            "difficulte": "difficile",
            "explication": "La configuration R s'obtient en plaçant le groupe le moins prioritaire à l'arrière et en classant les 3 autres du plus au moins prioritaire dans le sens horaire."
          },
          {
            "question": "Quel type de réaction se produit préférentiellement sur un groupe carbonyle C=O ?",
            "options": [
              "Substitution électrophile",
              "Addition électrophile",
              "Addition nucléophile",
              "Élimination"
            ],
            "correct": 2,
            "difficulte": "moyen",
            "explication": "Le carbone du groupe C=O est électrophile (déficient en électrons), il subit donc une addition nucléophile par des donneurs d'électrons."
          },
          {
            "question": "Dans quelle représentation moléculaire peut-on visualiser la géométrie dans l'espace ?",
            "options": [
              "Formule brute",
              "Formule semi-développée",
              "Représentation de Cram",
              "Formule topologique"
            ],
            "correct": 2,
            "difficulte": "facile",
            "explication": "La représentation de Cram utilise des traits pleins, pointillés et en coin pour montrer la géométrie tridimensionnelle de la molécule."
          }
        ]
      },
      {
        "id": "chimie-ch5",
        "titre": "Les Halogènes",
        "emoji": "⚗️",
        "nouveau": true,
        "flashcardsData": [
          {
            "q": "Quels halogènes sont de bons groupes partants et pourquoi ?",
            "r": "Cl⁻, Br⁻, I⁻ car ils sont des bases très faibles et polarisables. F⁻ est un mauvais groupe partant car peu polarisable."
          },
          {
            "q": "Quelle est la différence stéréochimique entre SN1 et SN2 ?",
            "r": "SN2 : inversion de Walden (stéréosélective), SN1 : mélange racémique 50%R + 50%S (non stéréosélective)"
          },
          {
            "q": "Quel mécanisme favorise les dérivés halogénés tertiaires ?",
            "r": "SN1 et E1, car le carbocation tertiaire formé est plus stable"
          },
          {
            "q": "Quelle est la règle de Saytzeff ?",
            "r": "Lors d'une élimination, formation préférentielle de l'alcène le plus substitué car il est plus stable"
          },
          {
            "q": "Qu'est-ce qui favorise l'élimination par rapport à la substitution ?",
            "r": "L'utilisation d'une base forte et l'augmentation de la température"
          },
          {
            "q": "Quelle est la stéréochimie requise pour une E2 ?",
            "r": "Conformation anticoplanaire entre H et le groupe partant X"
          },
          {
            "q": "Combien d'étapes dans le mécanisme SN2 ?",
            "r": "Une seule étape élémentaire concertée avec cinétique d'ordre 2"
          },
          {
            "q": "Quelle est l'étape cinétiquement déterminante en SN1 ?",
            "r": "La première étape : formation du carbocation par départ du groupe partant"
          },
          {
            "q": "Comment classe-t-on les dérivés halogénés ?",
            "r": "Selon le nombre de carbones liés au C-X : primaire (1C), secondaire (2C), tertiaire (3C)"
          },
          {
            "q": "Pourquoi E1 donne préférentiellement l'isomère E ?",
            "r": "Car les groupes les plus volumineux sont éloignés, minimisant la gêne stérique"
          }
        ],
        "fiche": {
          "page1_intro": {
            "titre": "Introduction",
            "texte": "Les composés halogénés sont des molécules organiques contenant un ou plusieurs atomes d'halogènes (F, Cl, Br, I) liés à un carbone. Ces composés présentent une réactivité particulière due à la polarisation de la liaison C-X et aux propriétés des halogènes comme groupes partants. Ils peuvent subir deux types de réactions principales : la substitution nucléophile (SN) où le nucléophile remplace l'halogène, et l'élimination (E) où un proton et l'halogène sont éliminés pour former une double liaison. Le mécanisme réactionnel dépend de facteurs comme la classe du composé halogéné (primaire, secondaire, tertiaire), la force du nucléophile ou de la base, et les conditions expérimentales.",
            "points_cles": [
              "Cl⁻, Br⁻, I⁻ sont de bons groupes partants contrairement à F⁻",
              "Deux réactions possibles : substitution nucléophile (SN) et élimination (E)",
              "La classe du dérivé halogéné détermine le mécanisme réactionnel",
              "Compétition constante entre mécanismes SN et E"
            ]
          },
          "page2_concepts": {
            "titre": "Concepts clés",
            "concepts": [
              {
                "terme": "Groupe partant",
                "definition": "Atome ou groupe d'atomes qui peut se détacher facilement d'une molécule en emportant les électrons de liaison"
              },
              {
                "terme": "SN1",
                "definition": "Substitution nucléophile monomoléculaire en deux étapes : formation d'un carbocation puis attaque du nucléophile"
              },
              {
                "terme": "SN2",
                "definition": "Substitution nucléophile bimoléculaire en une étape concertée avec inversion de configuration (Walden)"
              },
              {
                "terme": "E1",
                "definition": "Élimination monomoléculaire en deux étapes passant par un carbocation, non stéréosélective"
              },
              {
                "terme": "E2",
                "definition": "Élimination bimoléculaire en une étape avec géométrie anticoplanaire requise"
              },
              {
                "terme": "Règle de Saytzeff",
                "definition": "Lors d'une élimination, formation préférentielle de l'alcène le plus substitué (donc le plus stable)"
              },
              {
                "terme": "Inversion de Walden",
                "definition": "Inversion de configuration absolue lors d'une SN2 due à l'attaque dorsale du nucléophile"
              },
              {
                "terme": "Carbocation",
                "definition": "Intermédiaire réactionnel chargé positivement, stabilisé par l'encombrement (tertiaire > secondaire > primaire)"
              }
            ]
          },
          "page3_schemas": {
            "titre": "Schémas",
            "schemas": []
          },
          "page4_formules": {
            "titre": "Données clés",
            "formules": [
              {
                "label": "Vitesse SN1",
                "formule": "v = k[R-X]",
                "unite": "mol·L⁻¹·s⁻¹"
              },
              {
                "label": "Vitesse SN2",
                "formule": "v = k[R-X][Nu]",
                "unite": "mol·L⁻¹·s⁻¹"
              },
              {
                "label": "Vitesse E1",
                "formule": "v = k[R-X]",
                "unite": "mol·L⁻¹·s⁻¹"
              },
              {
                "label": "Vitesse E2",
                "formule": "v = k[R-X][Base]",
                "unite": "mol·L⁻¹·s⁻¹"
              }
            ],
            "donnees": [
              {
                "label": "Stabilité carbocation",
                "valeur": "3° > 2° > 1°"
              },
              {
                "label": "Qualité groupe partant",
                "valeur": "I⁻ > Br⁻ > Cl⁻ >> F⁻"
              },
              {
                "label": "Mélange SN1",
                "valeur": "50% R + 50% S"
              },
              {
                "label": "Angle dièdre E2",
                "valeur": "180° (anticoplanaire)"
              }
            ]
          },
          "page5_resume": {
            "titre": "Résumé",
            "points": [
              "Les halogènes Cl⁻, Br⁻, I⁻ sont de bons groupes partants polarisables contrairement à F⁻",
              "SN2 : mécanisme concerté avec inversion de Walden, favorisé par les composés primaires",
              "SN1 : mécanisme en deux étapes via carbocation, favorisé par les composés tertiaires, donne un mélange racémique",
              "E2 : élimination concertée nécessitant une géométrie anticoplanaire, E1 : élimination via carbocation",
              "L'élimination est favorisée par les bases fortes et la température, suit la règle de Saytzeff"
            ],
            "mnemo": "ClBrI PartEnt Bien, SN2 INverse, SN1 RACémise, E2 ANTIcoplanaire, E1 CARBOcation - Les halogènes réagissent selon leur classe !"
          }
        },
        "qcm": [
          {
            "question": "Quel halogène est un mauvais groupe partant ?",
            "options": [
              "Cl⁻",
              "Br⁻",
              "I⁻",
              "F⁻"
            ],
            "correct": 3,
            "difficulte": "facile",
            "explication": "F⁻ est peu polarisable contrairement aux autres halogènes, ce qui en fait un mauvais groupe partant"
          },
          {
            "question": "Quelle réaction donne lieu à une inversion de Walden ?",
            "options": [
              "SN1",
              "SN2",
              "E1",
              "E2"
            ],
            "correct": 1,
            "difficulte": "moyen",
            "explication": "La SN2 implique une attaque dorsale du nucléophile provoquant une inversion de configuration (inversion de Walden)"
          },
          {
            "question": "Un dérivé halogéné tertiaire favorise quel mécanisme ?",
            "options": [
              "SN2 uniquement",
              "E2 uniquement",
              "SN1 et E1",
              "Aucun mécanisme"
            ],
            "correct": 2,
            "difficulte": "moyen",
            "explication": "Les composés tertiaires stabilisent les carbocations, favorisant les mécanismes SN1 et E1 qui passent par cet intermédiaire"
          },
          {
            "question": "Quelle condition favorise l'élimination par rapport à la substitution ?",
            "options": [
              "Base faible",
              "Température basse",
              "Base forte et chauffage",
              "Nucléophile fort"
            ],
            "correct": 2,
            "difficulte": "facile",
            "explication": "L'élimination est favorisée par l'utilisation d'une base forte et l'augmentation de température"
          },
          {
            "question": "Selon la règle de Saytzeff, quel produit est favorisé ?",
            "options": [
              "L'alcène le moins substitué",
              "L'alcène le plus substitué",
              "L'alcène Z",
              "L'alcène primaire"
            ],
            "correct": 1,
            "difficulte": "moyen",
            "explication": "La règle de Saytzeff prédit la formation préférentielle de l'alcène le plus substitué car il est thermodynamiquement plus stable"
          },
          {
            "question": "Combien d'étapes dans le mécanisme E2 ?",
            "options": [
              "Une étape",
              "Deux étapes",
              "Trois étapes",
              "Cela dépend du substrat"
            ],
            "correct": 0,
            "difficulte": "facile",
            "explication": "E2 est un mécanisme concerté qui se déroule en une seule étape élémentaire"
          },
          {
            "question": "Quelle géométrie est requise pour une E2 ?",
            "options": [
              "Syn-coplanaire",
              "Anti-coplanaire",
              "Tétraédrique",
              "Aucune contrainte"
            ],
            "correct": 1,
            "difficulte": "difficile",
            "explication": "L'E2 nécessite une géométrie anti-coplanaire (180°) entre l'hydrogène à éliminer et le groupe partant pour un recouvrement optimal des orbitales"
          },
          {
            "question": "Le mécanisme SN1 produit quel type de mélange stéréochimique ?",
            "options": [
              "100% R",
              "100% S",
              "50% R + 50% S",
              "Inversion complète"
            ],
            "correct": 2,
            "difficulte": "moyen",
            "explication": "SN1 passe par un carbocation plan permettant deux attaques équiprobables du nucléophile, donnant un mélange racémique 50%R + 50%S"
          }
        ]
      },
      {
        "id": "chimie-ch6",
        "titre": "États d'équilibre acido-basique",
        "emoji": "⚖️",
        "nouveau": true,
        "flashcardsData": [
          {
            "q": "Qu'est-ce qu'un acide selon Brönsted-Lowry ?",
            "r": "Une espèce chimique capable de libérer un proton H+ et se transformant en sa base conjuguée"
          },
          {
            "q": "Qu'est-ce qu'un ampholyte ?",
            "r": "Une espèce qui peut se comporter à la fois comme un acide et une base, formant des solutions amphotères"
          },
          {
            "q": "Que représente le pKa ?",
            "r": "pKa = -log(Ka), il caractérise la force d'un acide : plus pKa est faible, plus l'acide est fort"
          },
          {
            "q": "Quelle est la valeur de Ke à 25°C ?",
            "r": "Ke = 10^-14, c'est le produit ionique de l'eau"
          },
          {
            "q": "Comment détermine-t-on la prédominance d'espèces ?",
            "r": "Si pH < pKa : acide prédomine ; Si pH > pKa : base prédomine ; Si pH = pKa : [acide] = [base]"
          },
          {
            "q": "Qu'est-ce que le nivellement par le solvant ?",
            "r": "Phénomène par lequel les pKa dans l'eau sont limités entre 0 et 14 car les acides/bases très forts se dissocient totalement"
          },
          {
            "q": "Quelle est la relation d'Henderson ?",
            "r": "pH = pKa + log([Base]/[Acide]) pour un mélange d'un couple acide/base"
          },
          {
            "q": "Comment calculer le pH d'un acide fort ?",
            "r": "pH = -log(C) où C est la concentration de l'acide fort"
          },
          {
            "q": "Qu'est-ce qu'un polyacide ?",
            "r": "Une espèce capable de libérer plusieurs protons successivement"
          },
          {
            "q": "Quel est le pH de neutralité à 25°C ?",
            "r": "pH = 7, car [H3O+] = [OH-] = 10^-7 mol/L"
          }
        ],
        "fiche": {
          "page1_intro": {
            "titre": "Introduction",
            "texte": "Les équilibres acido-basiques sont fondamentaux en chimie et en biologie. Ils régissent de nombreux processus physiologiques comme la régulation du pH sanguin. Un acide est défini comme une espèce capable de libérer un proton H+, tandis qu'une base peut capter ce proton. Ces réactions d'échange de protons s'établissent selon des équilibres caractérisés par des constantes d'acidité (Ka) et leur logarithme négatif (pKa). La compréhension de ces équilibres permet de prédire le comportement des solutions et de calculer leur pH.",
            "points_cles": [
              "Acide : donneur de protons H+",
              "Base : accepteur de protons H+",
              "Ampholyte : espèce à la fois acide et base",
              "pKa caractérise la force acido-basique"
            ]
          },
          "page2_concepts": {
            "titre": "Concepts clés",
            "concepts": [
              {
                "terme": "Acide",
                "definition": "Espèce chimique capable de libérer un proton H+ et se transformant en sa base conjuguée"
              },
              {
                "terme": "Base",
                "definition": "Espèce chimique capable de capter un proton H+ provenant d'un acide"
              },
              {
                "terme": "Ampholyte",
                "definition": "Espèce qui peut se comporter à la fois comme un acide et une base selon les conditions"
              },
              {
                "terme": "Constante d'acidité (Ka)",
                "definition": "Constante d'équilibre de la dissociation d'un acide dans l'eau : Ka = [A-][H3O+]/[AH]"
              },
              {
                "terme": "pKa",
                "definition": "Logarithme négatif de Ka : pKa = -log(Ka). Plus pKa est faible, plus l'acide est fort"
              },
              {
                "terme": "Produit ionique de l'eau (Ke)",
                "definition": "Constante d'équilibre de l'autoprotolyse de l'eau : Ke = [H3O+][OH-] = 10^-14 à 25°C"
              },
              {
                "terme": "Polyacide",
                "definition": "Espèce capable de libérer plusieurs protons successivement, possédant plusieurs pKa"
              },
              {
                "terme": "Nivellement par le solvant",
                "definition": "Phénomène limitant les pKa mesurables dans l'eau entre 0 et 14"
              }
            ]
          },
          "page3_schemas": {
            "titre": "Schémas",
            "schemas": []
          },
          "page4_formules": {
            "titre": "Données clés",
            "formules": [
              {
                "label": "pH",
                "formule": "pH = -log[H3O+]",
                "unite": "sans unité"
              },
              {
                "label": "pKa",
                "formule": "pKa = -log(Ka)",
                "unite": "sans unité"
              },
              {
                "label": "Relation d'Henderson",
                "formule": "pH = pKa + log([Base]/[Acide])",
                "unite": "sans unité"
              },
              {
                "label": "Acide fort",
                "formule": "pH = -log(C)",
                "unite": "C en mol/L"
              },
              {
                "label": "Base forte",
                "formule": "pH = 14 + log(C)",
                "unite": "C en mol/L"
              },
              {
                "label": "Acide faible",
                "formule": "pH = 1/2(pKa - log(C))",
                "unite": "C en mol/L"
              },
              {
                "label": "Base faible",
                "formule": "pH = 7 + 1/2(pKa + log(C))",
                "unite": "C en mol/L"
              },
              {
                "label": "Ampholyte",
                "formule": "pH = 1/2(pKa1 + pKa2)",
                "unite": "sans unité"
              }
            ],
            "donnees": [
              {
                "label": "Ke à 25°C",
                "valeur": "10^-14"
              },
              {
                "label": "pH neutre à 25°C",
                "valeur": "7"
              },
              {
                "label": "pKe",
                "valeur": "14"
              }
            ]
          },
          "page5_resume": {
            "titre": "Résumé",
            "points": [
              "Les acides libèrent des protons H+, les bases les captent, formant des couples acide/base conjugués",
              "Le pKa caractérise la force : acide fort (pKa < 0), acide faible (0 < pKa < 14), base forte (pKa > 14)",
              "La relation d'Henderson permet de calculer le pH : pH = pKa + log([Base]/[Acide])",
              "L'eau est ampholyte avec Ke = 10^-14 à 25°C, donnant un pH neutre de 7",
              "Le nivellement par le solvant limite les pKa mesurables dans l'eau entre 0 et 14"
            ],
            "mnemo": "ABCDE : Acide Bascule Constamment Dans l'Équilibre (Acide donne H+, Base capte H+, Constante Ka, Dans l'eau Ke=10^-14, Équilibre selon Henderson)"
          }
        },
        "qcm": [
          {
            "question": "Quelle est la définition correcte d'un acide selon Brönsted-Lowry ?",
            "options": [
              "Une espèce qui libère des électrons",
              "Une espèce qui libère des protons H+",
              "Une espèce qui capte des protons H+",
              "Une espèce qui libère des ions OH-"
            ],
            "correct": 1,
            "difficulte": "facile",
            "explication": "Selon la théorie de Brönsted-Lowry, un acide est une espèce chimique capable de libérer (donner) un proton H+, se transformant ainsi en sa base conjuguée."
          },
          {
            "question": "Pour un couple acide/base, si pH > pKa, quelle espèce prédomine ?",
            "options": [
              "L'acide prédomine",
              "La base prédomine",
              "Les concentrations sont égales",
              "Impossible à déterminer"
            ],
            "correct": 1,
            "difficulte": "moyen",
            "explication": "Quand pH > pKa, la base prédomine car le milieu est plus basique que le pKa du couple. Inversement, si pH < pKa, c'est l'acide qui prédomine."
          },
          {
            "question": "Quelle est la valeur du produit ionique de l'eau Ke à 25°C ?",
            "options": [
              "10^-7",
              "10^-12",
              "10^-14",
              "10^-16"
            ],
            "correct": 2,
            "difficulte": "facile",
            "explication": "À 25°C, Ke = [H3O+][OH-] = 10^-14. Cette constante fondamentale permet de calculer le pH et pOH des solutions aqueuses."
          },
          {
            "question": "Un ampholyte est une espèce qui :",
            "options": [
              "Ne réagit jamais avec l'eau",
              "Peut se comporter comme un acide ou une base",
              "Est toujours un acide fort",
              "N'existe que dans les solutions concentrées"
            ],
            "correct": 1,
            "difficulte": "moyen",
            "explication": "Un ampholyte peut à la fois donner et accepter des protons selon les conditions du milieu. L'eau est l'exemple le plus connu d'ampholyte."
          },
          {
            "question": "Pour calculer le pH d'un acide fort de concentration C, on utilise :",
            "options": [
              "pH = -log(C)",
              "pH = 1/2(pKa - log(C))",
              "pH = pKa + log(C)",
              "pH = 14 + log(C)"
            ],
            "correct": 0,
            "difficulte": "moyen",
            "explication": "Pour un acide fort, la dissociation est totale donc [H3O+] = C, d'où pH = -log(C). Les autres formules s'appliquent aux acides faibles ou bases."
          },
          {
            "question": "Le nivellement par le solvant signifie que dans l'eau :",
            "options": [
              "Tous les acides ont la même force",
              "Les pKa sont limités entre 0 et 14",
              "Il n'y a pas d'équilibre acido-basique",
              "Le pH est toujours égal à 7"
            ],
            "correct": 1,
            "difficulte": "difficile",
            "explication": "Le nivellement par le solvant limite les pKa mesurables dans l'eau entre 0 et 14 car les acides très forts (pKa < 0) et bases très fortes (pKa > 14) se dissocient totalement."
          }
        ]
      },
      {
        "id": "chimie-ch7",
        "titre": "États d'équilibres d'oxydo-réduction",
        "emoji": "⚡",
        "nouveau": true,
        "flashcardsData": [
          {
            "q": "Qu'est-ce qu'un oxydant ?",
            "r": "Une espèce chimique capable de gagner des électrons. Plus le potentiel standard est élevé, plus l'oxydant est puissant."
          },
          {
            "q": "Qu'est-ce qu'un réducteur ?",
            "r": "Une espèce chimique donneuse d'électrons. Plus le potentiel standard est faible, plus le réducteur est puissant."
          },
          {
            "q": "Comment détermine-t-on le nombre d'oxydation d'un atome isolé ?",
            "r": "Pour un atome isolé et neutre, le nombre d'oxydation est égal à 0. Pour un ion monoatomique, il correspond à la charge de l'ion."
          },
          {
            "q": "Quelles sont les étapes pour équilibrer une demi-équation en milieu acide ?",
            "r": "1) Équilibrer les éléments autres que H et O, 2) Équilibrer O avec H₂O, 3) Équilibrer H avec H⁺, 4) Équilibrer les charges avec e⁻."
          },
          {
            "q": "Qu'est-ce que la force électromotrice (fem) d'une pile ?",
            "r": "C'est la tension électrique délivrée par une pile, calculée par FEM = E₁ - E₂ où E₁ > E₂."
          },
          {
            "q": "Quelle est la formule de Nernst pour un couple redox ?",
            "r": "E = E° + (RT/nF) × ln([Oxydant]/[Réducteur]) = E° + (0,059/n) × log([Ox]/[Red]) à 25°C."
          },
          {
            "q": "Comment prévoir le sens spontané d'une réaction redox ?",
            "r": "L'oxydant le plus fort (potentiel standard le plus élevé) réagit avec le réducteur le plus fort (potentiel standard le plus faible)."
          },
          {
            "q": "Comment le pH influence-t-il le potentiel ?",
            "r": "Quand H⁺ apparaît dans l'équation, le potentiel dépend du pH : E = E°' + (0,059/n) × log([Ox]/[Red]) où E°' = E° - (0,059 × m/n) × pH."
          },
          {
            "q": "Quelle est la relation entre la constante d'équilibre et E° ?",
            "r": "À l'équilibre : log K = (n × ΔE°)/0,059 à 25°C, où n est le nombre d'électrons échangés."
          },
          {
            "q": "Qu'observe-t-on dans une pile cuivre/zinc en fonctionnement ?",
            "r": "Réduction de Cu²⁺ en Cu (dépôt), oxydation de Zn en Zn²⁺ (consommation du métal), circulation d'électrons de Zn vers Cu."
          }
        ],
        "fiche": {
          "page1_intro": {
            "titre": "Introduction",
            "texte": "L'oxydo-réduction est un phénomène fondamental en chimie impliquant un transfert d'électrons entre espèces chimiques. Ces réactions sont à la base du fonctionnement des piles et de nombreux processus biologiques. Chaque réaction redox met en jeu deux couples oxydant/réducteur, l'un cédant des électrons (oxydation) et l'autre les acceptant (réduction). Le potentiel électrochimique permet de prédire le sens spontané des réactions et de quantifier la force des oxydants et réducteurs. La compréhension de ces équilibres est essentielle pour maîtriser les processus énergétiques cellulaires et les applications technologiques comme les piles.",
            "points_cles": [
              "Transfert d'électrons entre couples redox",
              "Oxydation = perte d'électrons, Réduction = gain d'électrons",
              "Le potentiel standard détermine la force oxydante/réductrice",
              "Applications : piles, métabolisme cellulaire"
            ]
          },
          "page2_concepts": {
            "titre": "Concepts clés",
            "concepts": [
              {
                "terme": "Couple redox",
                "definition": "Association d'un oxydant et de son réducteur conjugué, notée Oxydant/Réducteur, reliés par un échange d'électrons"
              },
              {
                "terme": "Nombre d'oxydation",
                "definition": "Charge formelle d'un atome dans une molécule, indiquant son degré d'oxydation (entier positif, nul ou négatif)"
              },
              {
                "terme": "Potentiel standard (E°)",
                "definition": "Potentiel électrochimique d'un couple redox dans les conditions standard (25°C, 1 bar, concentrations 1 mol/L)"
              },
              {
                "terme": "Force électromotrice (FEM)",
                "definition": "Tension électrique maximale délivrée par une pile, égale à la différence des potentiels des deux électrodes"
              },
              {
                "terme": "Loi de Nernst",
                "definition": "Relation permettant de calculer le potentiel d'un couple en fonction des concentrations : E = E° + (RT/nF)ln(Q)"
              },
              {
                "terme": "Cathode",
                "definition": "Électrode positive d'une pile, siège de la réduction (arrivée des électrons)"
              },
              {
                "terme": "Anode",
                "definition": "Électrode négative d'une pile, siège de l'oxydation (départ des électrons)"
              },
              {
                "terme": "Pont salin",
                "definition": "Élément permettant la circulation des ions pour fermer le circuit électrique et maintenir l'électroneutralité"
              }
            ]
          },
          "page3_schemas": {
            "titre": "Schémas",
            "schemas": []
          },
          "page4_formules": {
            "titre": "Données clés",
            "formules": [
              {
                "label": "Loi de Nernst (25°C)",
                "formule": "E = E° + (0,059/n) × log([Ox]/[Red])",
                "unite": "V"
              },
              {
                "label": "FEM d'une pile",
                "formule": "FEM = E₁ - E₂ (si E₁ > E₂)",
                "unite": "V"
              },
              {
                "label": "Potentiel avec pH",
                "formule": "E = E°' + (0,059/n) × log([Ox]/[Red])",
                "unite": "V"
              },
              {
                "label": "Potentiel standard apparent",
                "formule": "E°' = E° - (0,059 × m/n) × pH",
                "unite": "V"
              },
              {
                "label": "Constante d'équilibre",
                "formule": "log K = (n × ΔE°)/0,059",
                "unite": "sans"
              }
            ],
            "donnees": [
              {
                "label": "Température de référence",
                "valeur": "25°C (298 K)"
              },
              {
                "label": "Constante de Faraday",
                "valeur": "96485 C/mol"
              },
              {
                "label": "Constante des gaz parfaits",
                "valeur": "8,314 J/(mol·K)"
              },
              {
                "label": "RT/F à 25°C",
                "valeur": "0,0257 V"
              }
            ]
          },
          "page5_resume": {
            "titre": "Résumé",
            "points": [
              "Les réactions redox impliquent un transfert d'électrons entre couples oxydant/réducteur",
              "Le potentiel standard E° détermine la force oxydante (E° élevé) ou réductrice (E° faible)",
              "La loi de Nernst permet de calculer le potentiel en fonction des concentrations",
              "Le sens spontané d'une réaction suit la règle du gamma : oxydant fort + réducteur fort",
              "Le pH peut modifier les potentiels et inverser le sens des réactions"
            ],
            "mnemo": "OPERA : Oxydation Perd Électrons, Réduction Accepte (pour retenir le sens des transferts d'électrons)"
          }
        },
        "qcm": [
          {
            "question": "Quel est le nombre d'oxydation de l'iode dans IO₃⁻ ?",
            "options": [
              "+V",
              "-I",
              "0",
              "+III"
            ],
            "correct": 0,
            "difficulte": "facile",
            "explication": "Dans IO₃⁻, l'oxygène a un NO de -II. La charge globale est -I, donc : NO(I) + 3×(-II) = -I, soit NO(I) = +V."
          },
          {
            "question": "Dans une pile, quelle est la caractéristique de la cathode ?",
            "options": [
              "Pôle négatif, siège de l'oxydation",
              "Pôle positif, siège de la réduction",
              "Pôle négatif, siège de la réduction",
              "Pôle positif, siège de l'oxydation"
            ],
            "correct": 1,
            "difficulte": "facile",
            "explication": "La cathode est le pôle positif de la pile, siège de la réduction (arrivée des électrons)."
          },
          {
            "question": "Pour équilibrer une demi-équation en milieu acide, quel est l'ordre correct des étapes ?",
            "options": [
              "H puis O puis électrons puis autres éléments",
              "Autres éléments puis H puis O puis électrons",
              "Autres éléments puis O puis H puis électrons",
              "O puis H puis autres éléments puis électrons"
            ],
            "correct": 2,
            "difficulte": "moyen",
            "explication": "L'ordre correct est : 1) autres éléments que H et O, 2) équilibrer O avec H₂O, 3) équilibrer H avec H⁺, 4) équilibrer les charges avec e⁻."
          },
          {
            "question": "Si E°(Cl₂/Cl⁻) = +1,36 V et E°(Zn²⁺/Zn) = -0,76 V, que se passe-t-il spontanément ?",
            "options": [
              "Zn²⁺ oxyde Cl⁻",
              "Cl₂ réduit Zn²⁺",
              "Zn réduit Cl₂",
              "Aucune réaction"
            ],
            "correct": 2,
            "difficulte": "moyen",
            "explication": "L'oxydant le plus fort (Cl₂, E° = +1,36 V) réagit avec le réducteur le plus fort (Zn, E° = -0,76 V). Donc Zn réduit Cl₂."
          },
          {
            "question": "Comment le pH influence-t-il le potentiel d'un couple redox ?",
            "options": [
              "Le pH n'influence jamais le potentiel",
              "Le pH influence uniquement si H⁺ apparaît dans l'équation",
              "Le pH influence toujours le potentiel",
              "Le pH n'influence que les couples organiques"
            ],
            "correct": 1,
            "difficulte": "moyen",
            "explication": "Le pH influence le potentiel uniquement quand H⁺ ou OH⁻ apparaît dans l'équation redox, selon la formule E°' = E° - (0,059×m/n)×pH."
          },
          {
            "question": "Pour la réaction Zn + Cl₂ → Zn²⁺ + 2Cl⁻ avec ΔE° = 2,12 V, quelle est log K ?",
            "options": [
              "36",
              "72",
              "18",
              "54"
            ],
            "correct": 1,
            "difficulte": "difficile",
            "explication": "log K = (n × ΔE°)/0,059 = (2 × 2,12)/0,059 = 4,24/0,059 ≈ 72."
          }
        ]
      },
      {
        "id": "chimie-ch8",
        "titre": "Effets Inductifs et Mésomères",
        "emoji": "⚡",
        "nouveau": true,
        "flashcardsData": [
          {
            "q": "Qu'est-ce que l'électronégativité ?",
            "r": "Capacité d'un élément à attirer vers lui les électrons. Elle croît de gauche à droite et de bas en haut dans la classification périodique."
          },
          {
            "q": "Différence entre effet inductif attracteur (-I) et donneur (+I) ?",
            "r": "-I : électrons attirés par un élément plus électronégatif que C. +I : électrons attirés par C (lié à un atome moins électronégatif)."
          },
          {
            "q": "Quelles sont les propriétés des effets inductifs ?",
            "r": "Ils décroissent le long des liaisons σ (disparaissent après 3 liaisons) et sont additifs."
          },
          {
            "q": "Qu'est-ce que la mésomérie ?",
            "r": "Délocalisation des électrons π ou n (doublets non liants) par résonnance entre structures limites d'une même molécule."
          },
          {
            "q": "Conditions pour qu'il y ait mésomérie ?",
            "r": "Enchaînement π-σ-π ou n-σ-π, pas de rupture de liaison σ, règles de Lewis respectées, même position relative des atomes."
          },
          {
            "q": "Effet mésomère attracteur (-M) vs donneur (+M) ?",
            "r": "-M : hétéroatome sp2/sp plus électronégatif que C (ex: C=O). +M : hétéroatomes délocalisent un doublet vers C."
          },
          {
            "q": "Quelle est la règle de comparaison entre effets inductif et mésomère ?",
            "r": "L'effet mésomère est toujours plus fort que l'effet inductif, SAUF pour les halogènes où -I > +M."
          },
          {
            "q": "Impact des effets sur l'acidité/basicité ?",
            "r": "Groupes -I/-M augmentent l'acidité. Groupes +I/+M augmentent la basicité. Plus le pKa est faible, plus l'acide est fort."
          },
          {
            "q": "Quels sont les 4 types de systèmes conjugués ?",
            "r": "π-σ-π (liaisons multiples), n-σ-π (doublet-liaison multiple), charge(-)-σ-π, π-σ-case(+)"
          }
        ],
        "fiche": {
          "page1_intro": {
            "titre": "Introduction",
            "texte": "Les effets inductifs et mésomères sont des phénomènes fondamentaux qui gouvernent la réactivité des molécules organiques. L'électronégativité des atomes crée des polarisations de liaisons qui se transmettent dans la molécule. Les effets inductifs concernent la transmission de charges par induction électrostatique le long des liaisons σ, tandis que les effets mésomères impliquent la délocalisation d'électrons π ou de doublets non liants par résonnance. Ces effets déterminent les propriétés acido-basiques, la stabilité et la réactivité des composés organiques, ce qui en fait des concepts essentiels pour comprendre la chimie organique.",
            "points_cles": [
              "L'électronégativité détermine la polarisation des liaisons",
              "Les effets inductifs se transmettent via les liaisons σ",
              "La mésomérie implique la délocalisation d'électrons π ou n",
              "Ces effets influencent directement l'acidité et la basicité"
            ]
          },
          "page2_concepts": {
            "titre": "Concepts clés",
            "concepts": [
              {
                "terme": "Électronégativité",
                "definition": "Capacité d'un élément à attirer vers lui les électrons. Croît selon F > O > N > Cl > Br > S > C > H dans l'échelle de Pauling."
              },
              {
                "terme": "Effet inductif attracteur (-I)",
                "definition": "Déplacement d'électrons vers un atome plus électronégatif que le carbone (halogènes, O, N). Diminue la densité électronique du carbone."
              },
              {
                "terme": "Effet inductif donneur (+I)",
                "definition": "Déplacement d'électrons vers le carbone depuis un atome moins électronégatif (métaux, groupes alkyles). Augmente la densité électronique du carbone."
              },
              {
                "terme": "Mésomérie",
                "definition": "Phénomène de délocalisation d'électrons π ou de doublets non liants dans des systèmes conjugués, représenté par des formes limites de résonnance."
              },
              {
                "terme": "Système conjugué",
                "definition": "Alternance de liaisons simples et multiples (π-σ-π) ou présence de doublets non liants adjacents à des liaisons multiples (n-σ-π)."
              },
              {
                "terme": "Effet mésomère attracteur (-M)",
                "definition": "Délocalisation d'électrons π vers un hétéroatome électronégatif (C=O, C≡N, NO2). Appauvrit le système en électrons."
              },
              {
                "terme": "Effet mésomère donneur (+M)",
                "definition": "Délocalisation d'un doublet non liant d'un hétéroatome vers le système π conjugué (NH2, OH, halogènes). Enrichit le système en électrons."
              },
              {
                "terme": "pKa",
                "definition": "Mesure de la force d'un acide. Plus le pKa est faible, plus l'acide est fort. Influencé par les effets inductifs et mésomères des substituants."
              }
            ]
          },
          "page3_schemas": {
            "titre": "Schémas",
            "schemas": []
          },
          "page4_formules": {
            "titre": "Données clés",
            "formules": [
              {
                "label": "Relation pKa",
                "formule": "pKa = -log(Ka)",
                "unite": "sans unité"
              }
            ],
            "donnees": [
              {
                "label": "Portée effet inductif",
                "valeur": "3 liaisons σ maximum"
              },
              {
                "label": "Force relative",
                "valeur": "Effet mésomère > Effet inductif (sauf halogènes)"
              },
              {
                "label": "Électronégativité F",
                "valeur": "4,0 (échelle Pauling)"
              },
              {
                "label": "Électronégativité C",
                "valeur": "2,5 (échelle Pauling)"
              }
            ]
          },
          "page5_resume": {
            "titre": "Résumé",
            "points": [
              "L'électronégativité crée des polarisations de liaisons qui se propagent par effets inductifs le long des liaisons σ",
              "Les effets inductifs sont attracteurs (-I) ou donneurs (+I) selon l'électronégativité relative des atomes",
              "La mésomérie permet la délocalisation d'électrons π ou n dans les systèmes conjugués via des formes de résonnance",
              "Les effets mésomères (-M attracteur, +M donneur) sont généralement plus forts que les effets inductifs",
              "Ces effets déterminent l'acidité et la basicité : -I/-M favorisent l'acidité, +I/+M favorisent la basicité"
            ],
            "mnemo": "EIM : Électronégativité → Inductif → Mésomère (du plus local au plus délocalisé)"
          }
        },
        "qcm": [
          {
            "question": "Parmi les groupes suivants, lesquels sont mésomères donneurs ?",
            "options": [
              "-F",
              "-OH et -NH2",
              "-CH3",
              "Tous les précédents"
            ],
            "correct": 1,
            "difficulte": "moyen",
            "explication": "-OH et -NH2 possèdent des doublets non liants qui peuvent se délocaliser vers un système π conjugué, ce sont des groupes +M. -F a un effet +M mais son effet -I domine. -CH3 n'a que des effets inductifs."
          },
          {
            "question": "L'effet inductif se transmet sur combien de liaisons σ au maximum ?",
            "options": [
              "2 liaisons",
              "3 liaisons",
              "4 liaisons",
              "Illimité"
            ],
            "correct": 1,
            "difficulte": "facile",
            "explication": "L'effet inductif décroît rapidement le long de la chaîne carbonée et devient négligeable après 3 liaisons σ."
          },
          {
            "question": "Quel est le classement correct d'acidité croissante pour : CH3COOH (A), CCl3COOH (B), CF3COOH (C) ?",
            "options": [
              "A < B < C",
              "C < B < A",
              "B < A < C",
              "A < C < B"
            ],
            "correct": 0,
            "difficulte": "moyen",
            "explication": "Plus il y a de groupes électroattracteurs (-I), plus l'acide est fort. F est plus électronégatif que Cl, donc CF3 > CCl3 > CH3 en effet -I."
          },
          {
            "question": "Dans un système conjugué, quelle condition est OBLIGATOIRE pour la mésomérie ?",
            "options": [
              "Présence d'au moins 4 atomes de carbone",
              "Alternance π-σ-π ou n-σ-π",
              "Présence d'hétéroatomes",
              "Molécule cyclique"
            ],
            "correct": 1,
            "difficulte": "facile",
            "explication": "La mésomérie nécessite un enchaînement π-σ-π (liaisons multiples séparées par une liaison simple) ou n-σ-π (doublet non liant adjacent à une liaison multiple)."
          },
          {
            "question": "Pourquoi l'effet mésomère est-il généralement plus fort que l'effet inductif ?",
            "options": [
              "Il concerne plus d'électrons",
              "Il implique une délocalisation sur plusieurs atomes",
              "Il est permanent",
              "Toutes ces raisons"
            ],
            "correct": 3,
            "difficulte": "difficile",
            "explication": "L'effet mésomère est plus fort car il implique la délocalisation d'électrons sur plusieurs atomes du système conjugué, contrairement à l'effet inductif qui est localisé. Exception : les halogènes où -I > +M."
          },
          {
            "question": "Quel groupe a l'effet inductif donneur (+I) le plus fort ?",
            "options": [
              "-CH3",
              "-(CH3)3",
              "-CH2CH3",
              "Ils sont équivalents"
            ],
            "correct": 1,
            "difficulte": "moyen",
            "explication": "L'effet +I des groupes alkyles augmente avec le degré de substitution : tertiaire > secondaire > primaire > méthyle. -(CH3)3 est un carbone tertiaire."
          },
          {
            "question": "Dans la molécule CH2=CH-NH2, l'azote participe à la mésomérie car :",
            "options": [
              "Il est électronégatif",
              "Il possède un doublet non liant adjacent au système π",
              "Il forme une liaison polaire",
              "Il est hybridé sp3"
            ],
            "correct": 1,
            "difficulte": "moyen",
            "explication": "L'azote de NH2 possède un doublet non liant qui peut se délocaliser vers la double liaison C=C adjacente, créant un système conjugué n-σ-π."
          },
          {
            "question": "Comment évolue la basicité dans la série : NH3, CH3NH2, (CH3)2NH, CF3NH2 ?",
            "options": [
              "NH3 < CF3NH2 < CH3NH2 < (CH3)2NH",
              "CF3NH2 < NH3 < CH3NH2 < (CH3)2NH",
              "(CH3)2NH < CH3NH2 < NH3 < CF3NH2",
              "Elles sont équivalentes"
            ],
            "correct": 1,
            "difficulte": "difficile",
            "explication": "La basicité augmente avec les groupes +I (méthyle) qui enrichissent l'azote en électrons, et diminue avec les groupes -I (CF3) qui l'appauvrissent : CF3NH2 < NH3 < CH3NH2 < (CH3)2NH."
          }
        ]
      }
    ]
  },
  {
    "id": "maths-terminale",
    "emoji": "📐",
    "nom": "Mathématiques",
    "categorie": "terminale",
    "niveau": "Terminale",
    "color": "#2D6A4F",
    "cours": [
      {
        "id": "math-t1",
        "titre": "Limites et continuité",
        "emoji": "📈",
        "nouveau": true,
        "flashcardsData": [
          {
            "q": "Qu'est-ce qu'une limite finie en +∞ ?",
            "r": "f(x) tend vers L quand x → +∞ signifie que f(x) se rapproche arbitrairement de L pour x suffisamment grand."
          },
          {
            "q": "Théorème des gendarmes ?",
            "r": "Si g(x) ≤ f(x) ≤ h(x) et que g et h ont la même limite L, alors f tend aussi vers L."
          },
          {
            "q": "Qu'est-ce que la continuité d'une fonction en un point a ?",
            "r": "f est continue en a si lim(x→a) f(x) = f(a)."
          },
          {
            "q": "Théorème des valeurs intermédiaires (TVI) ?",
            "r": "Si f est continue sur [a,b] et k est entre f(a) et f(b), alors il existe c ∈ [a,b] tel que f(c) = k."
          }
        ],
        "fiche": {
          "page1_intro": {
            "titre": "Introduction",
            "texte": "Les limites et la continuité sont des notions fondamentales de l'analyse. Elles permettent d'étudier le comportement des fonctions aux bornes de leur domaine et de garantir l'existence de solutions à certaines équations.",
            "points_cles": [
              "Limite finie ou infinie en un point ou à l'infini",
              "Formes indéterminées : 0/0, ∞/∞, ∞−∞, 0×∞",
              "Continuité = pas de saut dans la courbe",
              "TVI : outil clé pour montrer l'existence de solutions"
            ]
          },
          "page2_concepts": {
            "titre": "Concepts clés",
            "concepts": [
              {
                "terme": "Limite finie",
                "definition": "f(x) → L quand x → a (ou ±∞). La fonction se rapproche d'une valeur fixe."
              },
              {
                "terme": "Asymptote horizontale",
                "definition": "Droite y = L si lim(x→±∞) f(x) = L."
              },
              {
                "terme": "Continuité",
                "definition": "f continue en a ⟺ lim(x→a) f(x) = f(a). Pas de rupture dans le graphe."
              },
              {
                "terme": "TVI",
                "definition": "Si f continue sur [a,b], f prend toutes les valeurs entre f(a) et f(b)."
              }
            ]
          },
          "page3_schemas": {
            "titre": "Schémas",
            "schemas": []
          },
          "page4_formules": {
            "titre": "Données clés",
            "formules": [
              {
                "label": "Limite de référence",
                "formule": "lim(x→+∞) eˣ/xⁿ = +∞",
                "unite": ""
              },
              {
                "label": "Croissances comparées",
                "formule": "lim(x→+∞) ln(x)/xⁿ = 0",
                "unite": ""
              }
            ],
            "donnees": [
              {
                "label": "eˣ domine xⁿ",
                "valeur": "en +∞"
              },
              {
                "label": "xⁿ domine ln(x)",
                "valeur": "en +∞"
              }
            ]
          },
          "page5_resume": {
            "titre": "Résumé",
            "points": [
              "Les limites décrivent le comportement d'une fonction aux bornes de son domaine",
              "Le théorème des gendarmes permet d'encadrer une limite",
              "La continuité garantit l'absence de saut dans la courbe",
              "Le TVI est essentiel pour prouver l'existence de solutions",
              "Les croissances comparées : eˣ >> xⁿ >> ln(x) en +∞"
            ],
            "mnemo": "\"EXponentielle Écrase tout\" → eˣ domine toujours les polynômes et les logarithmes en +∞."
          }
        },
        "qcm": [
          {
            "question": "Quelle est la limite de eˣ/x² quand x → +∞ ?",
            "options": [
              "0",
              "1",
              "+∞",
              "−∞"
            ],
            "correct": 2,
            "difficulte": "moyen",
            "explication": "L'exponentielle croît plus vite que tout polynôme (croissances comparées)."
          },
          {
            "question": "Le TVI s'applique si f est :",
            "options": [
              "Dérivable",
              "Continue sur [a,b]",
              "Positive",
              "Croissante"
            ],
            "correct": 1,
            "difficulte": "facile",
            "explication": "Le TVI nécessite uniquement la continuité de f sur un intervalle fermé [a,b]."
          },
          {
            "question": "lim(x→+∞) ln(x)/x = ?",
            "options": [
              "+∞",
              "1",
              "0",
              "−∞"
            ],
            "correct": 2,
            "difficulte": "moyen",
            "explication": "Par croissances comparées, x domine ln(x) en +∞, donc le quotient tend vers 0."
          }
        ]
      },
      {
        "id": "math-t2",
        "titre": "Dérivation et applications",
        "emoji": "📉",
        "nouveau": true,
        "flashcardsData": [
          {
            "q": "Définition du nombre dérivé ?",
            "r": "f'(a) = lim(h→0) [f(a+h) − f(a)] / h. C'est le coefficient directeur de la tangente en a."
          },
          {
            "q": "Dérivée de eˣ ?",
            "r": "(eˣ)' = eˣ"
          },
          {
            "q": "Dérivée de ln(x) ?",
            "r": "(ln x)' = 1/x pour x > 0"
          },
          {
            "q": "Comment trouver les extrema d'une fonction ?",
            "r": "On cherche les points où f'(x) = 0 et on étudie le changement de signe de f'."
          }
        ],
        "fiche": {
          "page1_intro": {
            "titre": "Introduction",
            "texte": "La dérivation mesure la vitesse de variation d'une fonction. Elle permet d'étudier les variations, de trouver les extrema et de résoudre des problèmes d'optimisation.",
            "points_cles": [
              "f'(a) = pente de la tangente en a",
              "f' > 0 ⟹ f croissante, f' < 0 ⟹ f décroissante",
              "Extremum local ⟹ f'(a) = 0 (condition nécessaire)",
              "Formules de dérivation : somme, produit, quotient, composée"
            ]
          },
          "page2_concepts": {
            "titre": "Concepts clés",
            "concepts": [
              {
                "terme": "Nombre dérivé",
                "definition": "f'(a) = lim(h→0) [f(a+h)−f(a)]/h. Taux de variation instantané."
              },
              {
                "terme": "Tangente",
                "definition": "Droite y = f'(a)(x−a) + f(a). Meilleure approximation affine locale."
              },
              {
                "terme": "Dérivée composée",
                "definition": "[f(g(x))]' = g'(x) × f'(g(x)). Règle de la chaîne."
              }
            ]
          },
          "page3_schemas": {
            "titre": "Schémas",
            "schemas": []
          },
          "page4_formules": {
            "titre": "Données clés",
            "formules": [
              {
                "label": "Dérivée de xⁿ",
                "formule": "(xⁿ)' = nxⁿ⁻¹",
                "unite": ""
              },
              {
                "label": "Dérivée de eˣ",
                "formule": "(eˣ)' = eˣ",
                "unite": ""
              },
              {
                "label": "Dérivée de ln(x)",
                "formule": "(ln x)' = 1/x",
                "unite": ""
              }
            ],
            "donnees": []
          },
          "page5_resume": {
            "titre": "Résumé",
            "points": [
              "La dérivée mesure la variation instantanée d'une fonction",
              "Le signe de f' donne le sens de variation de f",
              "Un extremum local se trouve là où f' s'annule et change de signe",
              "Les dérivées de eˣ et ln(x) sont fondamentales pour la suite"
            ],
            "mnemo": "\"Dérivée Positive = ça Monte\" → f' > 0 signifie que f est croissante."
          }
        },
        "qcm": [
          {
            "question": "La dérivée de e²ˣ est :",
            "options": [
              "e²ˣ",
              "2e²ˣ",
              "2x·eˣ",
              "eˣ²"
            ],
            "correct": 1,
            "difficulte": "moyen",
            "explication": "Par la règle de la chaîne : (e²ˣ)' = 2·e²ˣ."
          },
          {
            "question": "Si f'(x) > 0 sur ]a,b[, alors f est :",
            "options": [
              "Décroissante",
              "Constante",
              "Croissante",
              "Nulle"
            ],
            "correct": 2,
            "difficulte": "facile",
            "explication": "Une dérivée strictement positive implique que la fonction est strictement croissante."
          },
          {
            "question": "La tangente à f en a a pour équation :",
            "options": [
              "y = f(a)",
              "y = f'(a)(x−a) + f(a)",
              "y = f(a)x + f'(a)",
              "y = f'(x)"
            ],
            "correct": 1,
            "difficulte": "facile",
            "explication": "L'équation de la tangente est y = f'(a)(x−a) + f(a)."
          }
        ]
      }
    ]
  },
  {
    "id": "physique-chimie-terminale",
    "emoji": "⚡",
    "nom": "Physique-Chimie",
    "categorie": "terminale",
    "niveau": "Terminale",
    "color": "#7A4B2C",
    "cours": [
      {
        "id": "pc-t1",
        "titre": "Acides, bases et pH",
        "emoji": "🧪",
        "nouveau": true,
        "flashcardsData": [
          {
            "q": "Formule du pH ?",
            "r": "pH = −log[H₃O⁺]"
          },
          {
            "q": "Qu'est-ce que le pKa ?",
            "r": "pKa = −log(Ka). C'est le pH auquel [AH] = [A⁻] (demi-équivalence)."
          },
          {
            "q": "Formule de Henderson-Hasselbalch ?",
            "r": "pH = pKa + log([A⁻]/[AH])"
          },
          {
            "q": "Acide fort vs acide faible ?",
            "r": "Acide fort : dissociation totale (Ka très grand). Acide faible : dissociation partielle (Ka < 1)."
          }
        ],
        "fiche": {
          "page1_intro": {
            "titre": "Introduction",
            "texte": "Les réactions acido-basiques sont omniprésentes en chimie et en biologie. Le pH mesure l'acidité d'une solution. La compréhension des couples acide/base et des équilibres est essentielle pour la PASS/LAS (biochimie, physiologie).",
            "points_cles": [
              "pH = −log[H₃O⁺]",
              "Couple acide/base : AH / A⁻",
              "Ka = [A⁻][H₃O⁺] / [AH]",
              "Solution tampon : résiste aux variations de pH"
            ]
          },
          "page2_concepts": {
            "titre": "Concepts clés",
            "concepts": [
              {
                "terme": "pH",
                "definition": "Mesure de l'acidité : pH = −log[H₃O⁺]. pH < 7 = acide, pH > 7 = basique."
              },
              {
                "terme": "Ka et pKa",
                "definition": "Ka = constante d'acidité. Plus Ka est grand, plus l'acide est fort. pKa = −log(Ka)."
              },
              {
                "terme": "Solution tampon",
                "definition": "Mélange d'un acide faible et de sa base conjuguée. Résiste aux variations de pH."
              }
            ]
          },
          "page3_schemas": {
            "titre": "Schémas",
            "schemas": []
          },
          "page4_formules": {
            "titre": "Données clés",
            "formules": [
              {
                "label": "pH",
                "formule": "pH = −log[H₃O⁺]",
                "unite": ""
              },
              {
                "label": "Henderson-Hasselbalch",
                "formule": "pH = pKa + log([A⁻]/[AH])",
                "unite": ""
              },
              {
                "label": "Produit ionique de l'eau",
                "formule": "Ke = [H₃O⁺]·[HO⁻] = 10⁻¹⁴",
                "unite": "à 25°C"
              }
            ],
            "donnees": [
              {
                "label": "pH neutre (25°C)",
                "valeur": "7,0"
              },
              {
                "label": "pKa eau",
                "valeur": "14"
              }
            ]
          },
          "page5_resume": {
            "titre": "Résumé",
            "points": [
              "Le pH mesure la concentration en ions H₃O⁺",
              "Un acide fort est totalement dissocié, un acide faible partiellement",
              "Henderson-Hasselbalch relie pH, pKa et ratio base/acide",
              "Les solutions tampons maintiennent un pH stable",
              "Ces notions sont directement réutilisées en biochimie PASS"
            ],
            "mnemo": "\"pH = Petit H\" → pH = −log de la concentration en H₃O⁺ (les petits H₃O⁺)."
          }
        },
        "qcm": [
          {
            "question": "Si [H₃O⁺] = 10⁻³ mol/L, le pH vaut :",
            "options": [
              "1",
              "3",
              "7",
              "11"
            ],
            "correct": 1,
            "difficulte": "facile",
            "explication": "pH = −log(10⁻³) = 3."
          },
          {
            "question": "À la demi-équivalence, pH = ?",
            "options": [
              "7",
              "pKa",
              "14 − pKa",
              "0"
            ],
            "correct": 1,
            "difficulte": "moyen",
            "explication": "À la demi-équivalence, [AH] = [A⁻], donc log(1) = 0 et pH = pKa."
          },
          {
            "question": "Le produit ionique de l'eau à 25°C vaut :",
            "options": [
              "10⁻⁷",
              "10⁻¹⁴",
              "10⁻¹",
              "1"
            ],
            "correct": 1,
            "difficulte": "facile",
            "explication": "Ke = [H₃O⁺]·[HO⁻] = 10⁻¹⁴ à 25°C."
          }
        ]
      },
      {
        "id": "pc-t2",
        "titre": "Cinétique chimique",
        "emoji": "⏱️",
        "nouveau": true,
        "flashcardsData": [
          {
            "q": "Qu'est-ce que la vitesse de réaction ?",
            "r": "v = (1/V) × d[produit]/dt. Mesure la rapidité de transformation des réactifs en produits."
          },
          {
            "q": "Facteurs cinétiques ?",
            "r": "Température, concentration des réactifs, catalyseur, surface de contact."
          },
          {
            "q": "Qu'est-ce qu'un catalyseur ?",
            "r": "Espèce qui accélère la réaction en abaissant l'énergie d'activation, sans être consommée."
          },
          {
            "q": "Temps de demi-réaction t₁/₂ ?",
            "r": "Durée au bout de laquelle l'avancement atteint la moitié de sa valeur finale."
          }
        ],
        "fiche": {
          "page1_intro": {
            "titre": "Introduction",
            "texte": "La cinétique chimique étudie la vitesse des réactions. Elle est essentielle pour comprendre les réactions enzymatiques en biochimie (Michaelis-Menten est une application directe de la cinétique chimique).",
            "points_cles": [
              "Vitesse = variation de concentration par unité de temps",
              "Facteurs cinétiques : T°, concentration, catalyseur",
              "t₁/₂ = temps de demi-réaction",
              "Lien direct avec la cinétique enzymatique en PASS"
            ]
          },
          "page2_concepts": {
            "titre": "Concepts clés",
            "concepts": [
              {
                "terme": "Vitesse volumique",
                "definition": "v = (1/V)·dξ/dt = variation de concentration des espèces par unité de temps."
              },
              {
                "terme": "Catalyseur",
                "definition": "Abaisse l'énergie d'activation sans modifier l'équilibre. Retrouvé en biochimie (enzymes)."
              },
              {
                "terme": "Temps de demi-réaction",
                "definition": "t₁/₂ : temps pour que l'avancement atteigne la moitié de sa valeur finale."
              }
            ]
          },
          "page3_schemas": {
            "titre": "Schémas",
            "schemas": []
          },
          "page4_formules": {
            "titre": "Données clés",
            "formules": [
              {
                "label": "Vitesse volumique",
                "formule": "v = −(1/ν)·d[réactif]/dt",
                "unite": "mol·L⁻¹·s⁻¹"
              }
            ],
            "donnees": [
              {
                "label": "Règle de Van't Hoff",
                "valeur": "×2 à ×3 par +10°C"
              }
            ]
          },
          "page5_resume": {
            "titre": "Résumé",
            "points": [
              "La vitesse de réaction dépend de la température et des concentrations",
              "Un catalyseur accélère sans être consommé (enzymes = catalyseurs biologiques)",
              "Le t₁/₂ caractérise la rapidité d'une réaction",
              "La cinétique chimique est le fondement de la cinétique enzymatique en PASS"
            ],
            "mnemo": "\"Catalyseur = Coach\" → il accélère la réaction sans y participer directement, comme un coach !"
          }
        },
        "qcm": [
          {
            "question": "Un catalyseur agit en :",
            "options": [
              "Modifiant l'équilibre",
              "Abaissant l'énergie d'activation",
              "Augmentant la température",
              "Consommant un réactif"
            ],
            "correct": 1,
            "difficulte": "facile",
            "explication": "Le catalyseur abaisse l'Ea sans modifier l'équilibre thermodynamique."
          },
          {
            "question": "Le temps de demi-réaction correspond à :",
            "options": [
              "La fin de la réaction",
              "50% de l'avancement final",
              "Le début de la réaction",
              "100% de conversion"
            ],
            "correct": 1,
            "difficulte": "facile",
            "explication": "t₁/₂ est le temps pour atteindre la moitié de l'avancement maximal."
          },
          {
            "question": "Augmenter la température d'une réaction :",
            "options": [
              "Ralentit la réaction",
              "N'a aucun effet",
              "Accélère la réaction",
              "Inverse la réaction"
            ],
            "correct": 2,
            "difficulte": "facile",
            "explication": "La température est un facteur cinétique : elle augmente l'agitation moléculaire et donc la fréquence des chocs efficaces."
          }
        ]
      }
    ]
  },
  {
    "id": "svt-terminale",
    "emoji": "🌿",
    "nom": "SVT",
    "categorie": "terminale",
    "niveau": "Terminale",
    "color": "#1B5E20",
    "cours": [
      {
        "id": "svt-t1",
        "titre": "Génétique moléculaire",
        "emoji": "🧬",
        "nouveau": true,
        "flashcardsData": [
          {
            "q": "Structure de l'ADN ?",
            "r": "Double hélice antiparallèle de nucléotides (A-T, G-C) reliés par des liaisons hydrogène."
          },
          {
            "q": "Qu'est-ce que la réplication ?",
            "r": "Copie de l'ADN avant la division cellulaire. Semi-conservative : chaque molécule fille contient un brin parental."
          },
          {
            "q": "Transcription ?",
            "r": "Synthèse d'ARNm à partir d'un brin d'ADN matrice par l'ARN polymérase."
          },
          {
            "q": "Traduction ?",
            "r": "Synthèse d'une protéine à partir de l'ARNm par les ribosomes. Chaque codon (3 nucléotides) code un acide aminé."
          }
        ],
        "fiche": {
          "page1_intro": {
            "titre": "Introduction",
            "texte": "La génétique moléculaire étudie les mécanismes de stockage, de transmission et d'expression de l'information génétique. Ces notions sont le socle de la biologie cellulaire et de la biochimie en PASS.",
            "points_cles": [
              "ADN = support de l'information génétique",
              "Réplication semi-conservative",
              "Transcription (ADN → ARNm) et Traduction (ARNm → Protéine)",
              "Code génétique : universel, dégénéré, non chevauchant"
            ]
          },
          "page2_concepts": {
            "titre": "Concepts clés",
            "concepts": [
              {
                "terme": "Réplication",
                "definition": "Copie fidèle de l'ADN. Semi-conservative (Meselson & Stahl). ADN polymérase."
              },
              {
                "terme": "Transcription",
                "definition": "Synthèse d'ARNm par l'ARN polymérase. Brin matrice lu 3'→5', ARNm synthétisé 5'→3'."
              },
              {
                "terme": "Traduction",
                "definition": "Ribosomes lisent l'ARNm par codons (triplets). ARNt apporte les acides aminés."
              },
              {
                "terme": "Mutation",
                "definition": "Modification de la séquence d'ADN. Substitution, insertion, délétion. Peut être silencieuse ou pathogène."
              }
            ]
          },
          "page3_schemas": {
            "titre": "Schémas",
            "schemas": []
          },
          "page4_formules": {
            "titre": "Données clés",
            "formules": [],
            "donnees": [
              {
                "label": "Codons possibles",
                "valeur": "64 (4³)"
              },
              {
                "label": "Codons stop",
                "valeur": "3 (UAA, UAG, UGA)"
              },
              {
                "label": "Codon initiateur",
                "valeur": "AUG (Met)"
              },
              {
                "label": "Complémentarité",
                "valeur": "A-T (ou A-U) et G-C"
              }
            ]
          },
          "page5_resume": {
            "titre": "Résumé",
            "points": [
              "L'ADN est une double hélice de nucléotides complémentaires (A-T, G-C)",
              "La réplication est semi-conservative et assurée par l'ADN polymérase",
              "La transcription produit l'ARNm, la traduction produit la protéine",
              "Le code génétique est universel et dégénéré (plusieurs codons par AA)",
              "Ces mécanismes sont approfondis en biologie cellulaire PASS"
            ],
            "mnemo": "\"ADN → ARNm → Protéine\" = le dogme central de la biologie moléculaire."
          }
        },
        "qcm": [
          {
            "question": "La réplication de l'ADN est :",
            "options": [
              "Conservative",
              "Semi-conservative",
              "Dispersive",
              "Aléatoire"
            ],
            "correct": 1,
            "difficulte": "facile",
            "explication": "Meselson et Stahl ont démontré que la réplication est semi-conservative : chaque molécule fille contient un brin ancien et un brin nouveau."
          },
          {
            "question": "Combien de codons codent des acides aminés ?",
            "options": [
              "20",
              "61",
              "64",
              "3"
            ],
            "correct": 1,
            "difficulte": "moyen",
            "explication": "Sur 64 codons possibles, 61 codent des AA et 3 sont des codons stop."
          },
          {
            "question": "L'ARN polymérase intervient dans :",
            "options": [
              "La réplication",
              "La transcription",
              "La traduction",
              "La mitose"
            ],
            "correct": 1,
            "difficulte": "facile",
            "explication": "L'ARN polymérase synthétise l'ARNm à partir du brin matrice d'ADN lors de la transcription."
          }
        ]
      },
      {
        "id": "svt-t2",
        "titre": "Immunologie",
        "emoji": "🛡️",
        "nouveau": true,
        "flashcardsData": [
          {
            "q": "Immunité innée vs adaptative ?",
            "r": "Innée : rapide, non spécifique (phagocytes, inflammation). Adaptative : lente, spécifique (lymphocytes T et B), mémoire."
          },
          {
            "q": "Rôle des lymphocytes B ?",
            "r": "Immunité humorale : production d'anticorps spécifiques contre les antigènes."
          },
          {
            "q": "Rôle des lymphocytes T cytotoxiques ?",
            "r": "Immunité cellulaire : destruction des cellules infectées par contact direct (perforine, granzymes)."
          },
          {
            "q": "Qu'est-ce que la mémoire immunitaire ?",
            "r": "Lors d'un 2e contact avec le même antigène, la réponse est plus rapide et plus intense grâce aux lymphocytes mémoire."
          }
        ],
        "fiche": {
          "page1_intro": {
            "titre": "Introduction",
            "texte": "Le système immunitaire protège l'organisme contre les agents pathogènes. Il comprend l'immunité innée (rapide, non spécifique) et l'immunité adaptative (spécifique, avec mémoire). Ces notions sont essentielles en PASS pour l'histologie et la physiologie.",
            "points_cles": [
              "Immunité innée : barrières, phagocytose, inflammation",
              "Immunité adaptative : lymphocytes B (anticorps) et T (cytotoxicité)",
              "Mémoire immunitaire = base de la vaccination",
              "CMH (Complexe Majeur d'Histocompatibilité) = présentation des antigènes"
            ]
          },
          "page2_concepts": {
            "titre": "Concepts clés",
            "concepts": [
              {
                "terme": "Phagocytose",
                "definition": "Ingestion et destruction des pathogènes par les phagocytes (macrophages, neutrophiles). Immunité innée."
              },
              {
                "terme": "Anticorps",
                "definition": "Immunoglobulines produites par les plasmocytes (LB activés). Se fixent spécifiquement sur l'antigène."
              },
              {
                "terme": "Sélection clonale",
                "definition": "Seuls les lymphocytes reconnaissant l'antigène sont activés et prolifèrent."
              },
              {
                "terme": "Vaccination",
                "definition": "Injection d'un antigène atténué pour stimuler la mémoire immunitaire sans provoquer la maladie."
              }
            ]
          },
          "page3_schemas": {
            "titre": "Schémas",
            "schemas": []
          },
          "page4_formules": {
            "titre": "Données clés",
            "formules": [],
            "donnees": [
              {
                "label": "Lymphocytes B",
                "valeur": "Immunité humorale (anticorps)"
              },
              {
                "label": "Lymphocytes T CD8+",
                "valeur": "Cytotoxicité (destruction)"
              },
              {
                "label": "Lymphocytes T CD4+",
                "valeur": "Auxiliaires (coordination)"
              },
              {
                "label": "Réponse primaire",
                "valeur": "Lente (7-14 jours)"
              },
              {
                "label": "Réponse secondaire",
                "valeur": "Rapide (2-3 jours)"
              }
            ]
          },
          "page5_resume": {
            "titre": "Résumé",
            "points": [
              "L'immunité innée est la première ligne de défense (rapide, non spécifique)",
              "L'immunité adaptative est spécifique et possède une mémoire",
              "Les LB produisent les anticorps, les LT CD8+ détruisent les cellules infectées",
              "La vaccination exploite la mémoire immunitaire",
              "Le CMH permet la présentation des antigènes aux lymphocytes T"
            ],
            "mnemo": "\"B = Bombes (anticorps), T = Tueurs (cytotoxiques)\" pour retenir les rôles des lymphocytes."
          }
        },
        "qcm": [
          {
            "question": "L'immunité innée est :",
            "options": [
              "Spécifique et lente",
              "Non spécifique et rapide",
              "Spécifique et rapide",
              "Non spécifique et lente"
            ],
            "correct": 1,
            "difficulte": "facile",
            "explication": "L'immunité innée est la première ligne de défense : elle est rapide mais non spécifique d'un pathogène particulier."
          },
          {
            "question": "Les anticorps sont produits par :",
            "options": [
              "Les lymphocytes T",
              "Les plasmocytes (LB activés)",
              "Les macrophages",
              "Les neutrophiles"
            ],
            "correct": 1,
            "difficulte": "moyen",
            "explication": "Les lymphocytes B, une fois activés, se différencient en plasmocytes qui sécrètent massivement des anticorps."
          },
          {
            "question": "La mémoire immunitaire permet :",
            "options": [
              "Une réponse plus lente au 2e contact",
              "Une réponse plus rapide et intense au 2e contact",
              "L'absence de réponse",
              "La destruction du CMH"
            ],
            "correct": 1,
            "difficulte": "facile",
            "explication": "Les lymphocytes mémoire persistent et permettent une réponse secondaire plus rapide et plus forte."
          }
        ]
      }
    ]
  }
];
