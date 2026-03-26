// Terminale — Chimie (programme officiel)
// 5 chapitres · 10 flashcards + 7 QCM + fiche complète par chapitre

export const TERM_CHIMIE_COURS = [

  // ═══════════════════════════════════════════
  // CH1 — Modélisation des transformations acido-basiques
  // ═══════════════════════════════════════════
  {
    id: "term-chimie-ch1",
    titre: "Modélisation des transformations acido-basiques",
    emoji: "⚗️",
    nouveau: false,

    flashcardsData: [
      {
        q: "Qu'est-ce qu'un acide selon Brønsted ?",
        r: "C'est une espèce capable de céder un proton H⁺."
      },
      {
        q: "Qu'est-ce qu'une base selon Brønsted ?",
        r: "C'est une espèce capable de capter un proton H⁺."
      },
      {
        q: "Qu'est-ce qu'un couple acide-base ?",
        r: "C'est une paire AH/A⁻ liée par la demi-équation : AH ⇌ A⁻ + H⁺."
      },
      {
        q: "Pourquoi une liaison polarisée O–H rend-elle une molécule acide ?",
        r: "O attire les électrons, H devient δ+. Il est facilement libéré sous forme H⁺."
      },
      {
        q: "Pourquoi un doublet non-liant confère-t-il un caractère basique ?",
        r: "Le doublet non-liant peut capter un H⁺ en formant une liaison covalente."
      },
      {
        q: "Qu'est-ce qu'une espèce amphotère ? Donne un exemple.",
        r: "C'est une espèce à la fois acide et base. Exemple : l'eau (couples H₃O⁺/H₂O et H₂O/HO⁻)."
      },
      {
        q: "Écris la réaction d'autoprotolyse de l'eau.",
        r: "2 H₂O ⇌ H₃O⁺ + HO⁻"
      },
      {
        q: "Comment calcule-t-on le pH d'une solution ?",
        r: "pH = −log([H₃O⁺]), avec [H₃O⁺] en mol/L."
      },
      {
        q: "Un pH de 3 correspond à quelle concentration en H₃O⁺ ?",
        r: "[H₃O⁺] = 10⁻³ mol/L, soit 0,001 mol/L."
      },
      {
        q: "Cite deux méthodes pour mesurer le pH.",
        r: "Le papier pH (précision ±1) et le pH-mètre (précision ±0,01)."
      }
    ],

    qcm: [
      {
        question: "Selon Brønsted, un acide est une espèce qui :",
        options: [
          "Cède un proton H⁺",
          "Capte un proton H⁺",
          "Cède un électron",
          "Capte un électron"
        ],
        correct: 0,
        explication: "Un acide de Brønsted est un donneur de proton H⁺. Il perd un H⁺ pour se transformer en sa base conjuguée."
      },
      {
        question: "L'eau est amphotère, cela signifie qu'elle :",
        options: [
          "Ne réagit jamais",
          "N'est ni acide ni base",
          "Peut jouer le rôle d'acide ou de base",
          "Est toujours neutre"
        ],
        correct: 2,
        explication: "L'eau peut céder H⁺ (acide du couple H₂O/HO⁻) ou capter H⁺ (base du couple H₃O⁺/H₂O). C'est ça, amphotère."
      },
      {
        question: "Quelle est la réaction d'autoprotolyse de l'eau ?",
        options: [
          "H₂O → H₂ + O",
          "2 H₂O ⇌ H₃O⁺ + HO⁻",
          "H₂O + HCl → H₃O⁺ + Cl⁻",
          "H₂O → H⁺ + OH⁻"
        ],
        correct: 1,
        explication: "L'autoprotolyse : une molécule d'eau donne son H⁺ à une autre. On obtient H₃O⁺ et HO⁻. C'est un équilibre."
      },
      {
        question: "Si pH = 4, combien vaut [H₃O⁺] ?",
        options: [
          "10⁻² mol/L",
          "10⁻⁴ mol/L",
          "4 mol/L",
          "10⁴ mol/L"
        ],
        correct: 1,
        explication: "pH = −log([H₃O⁺]), donc [H₃O⁺] = 10^(−pH) = 10⁻⁴ mol/L. En gros : plus le pH est petit, plus il y a de H₃O⁺."
      },
      {
        question: "La basicité d'une espèce est liée à :",
        options: [
          "Une liaison polarisée O–H",
          "La présence d'un doublet non-liant",
          "La perte d'un électron",
          "La présence d'un métal"
        ],
        correct: 1,
        explication: "Un doublet non-liant (paire d'électrons libres) permet de capter un H⁺. C'est ce qui rend l'espèce basique."
      },
      {
        question: "Dans le couple NH₄⁺/NH₃, quelle est la base conjuguée ?",
        options: [
          "NH₄⁺",
          "H⁺",
          "NH₃",
          "N₂"
        ],
        correct: 2,
        explication: "NH₄⁺ cède un H⁺ → NH₃. Donc NH₃ est la base conjuguée de l'acide NH₄⁺."
      },
      {
        question: "Un pH de 7 à 25 °C indique une solution :",
        options: [
          "Acide",
          "Basique",
          "Neutre",
          "Impossible à déterminer"
        ],
        correct: 2,
        explication: "À 25 °C, pH = 7 signifie [H₃O⁺] = [HO⁻] = 10⁻⁷ mol/L. La solution est neutre."
      }
    ],

    fiche: {
      page1_intro: {
        titre: "Introduction",
        texte: "Les réactions acido-basiques sont partout. Dans ton estomac (acide), dans le savon (basique), dans le sang (tamponné à pH 7,4). Ce chapitre pose les bases : qu'est-ce qu'un acide, une base, comment ils réagissent ensemble, et comment mesurer le pH. On utilise le modèle de Brønsted. C'est simple : un acide donne un H⁺, une base le prend. Comme un ballon qu'on se passe.",
        points_cles: [
          "Acide de Brønsted = donneur de H⁺",
          "Base de Brønsted = accepteur de H⁺",
          "Un couple acide-base s'écrit AH/A⁻",
          "L'eau est amphotère : elle peut être acide ou base",
          "pH = −log([H₃O⁺]), échelle de 0 à 14 à 25 °C"
        ]
      },
      page2_concepts: {
        titre: "Concepts clés",
        concepts: [
          {
            terme: "Acide de Brønsted",
            definition: "Espèce chimique capable de céder (donner) un proton H⁺ à une autre espèce. Exemple : HCl → H⁺ + Cl⁻."
          },
          {
            terme: "Base de Brønsted",
            definition: "Espèce chimique capable de capter (recevoir) un proton H⁺. Exemple : NH₃ + H⁺ → NH₄⁺."
          },
          {
            terme: "Couple acide-base",
            definition: "Paire AH/A⁻ reliée par un transfert de H⁺. La demi-équation est : AH ⇌ A⁻ + H⁺."
          },
          {
            terme: "Espèce amphotère",
            definition: "Espèce pouvant jouer le rôle d'acide ET de base. L'eau en est l'exemple le plus courant."
          },
          {
            terme: "Autoprotolyse de l'eau",
            definition: "Réaction de l'eau avec elle-même : 2 H₂O ⇌ H₃O⁺ + HO⁻. C'est un équilibre qui existe toujours, même dans l'eau pure."
          },
          {
            terme: "Liaison polarisée",
            definition: "Liaison où les électrons sont attirés vers l'atome le plus électronégatif. Le H devient δ+ et peut partir facilement sous forme de H⁺."
          },
          {
            terme: "pH",
            definition: "Grandeur sans unité qui mesure l'acidité. pH = −log([H₃O⁺]). pH < 7 → acide. pH > 7 → basique. pH = 7 → neutre."
          }
        ]
      },
      page3_schemas: {
        titre: "Schémas clés",
        schemas: []
      },
      page4_formules: {
        titre: "Formules essentielles",
        formules: [
          {
            nom: "Définition du pH",
            formule: "pH = −log([H₃O⁺])",
            explication: "[H₃O⁺] en mol/L. Plus la concentration en H₃O⁺ est grande, plus le pH est petit (=plus acide)."
          },
          {
            nom: "Concentration en H₃O⁺",
            formule: "[H₃O⁺] = 10^(−pH)",
            explication: "Formule inverse. Si pH = 2, alors [H₃O⁺] = 10⁻² = 0,01 mol/L."
          },
          {
            nom: "Demi-équation acide-base",
            formule: "AH ⇌ A⁻ + H⁺",
            explication: "L'acide AH perd un H⁺ et se transforme en sa base conjuguée A⁻."
          },
          {
            nom: "Réaction acido-basique",
            formule: "AH₁ + A₂⁻ → A₁⁻ + AH₂",
            explication: "L'acide d'un couple réagit avec la base d'un autre. Un H⁺ est transféré."
          },
          {
            nom: "Autoprotolyse de l'eau",
            formule: "2 H₂O ⇌ H₃O⁺ + HO⁻",
            explication: "L'eau joue les deux rôles : une molécule donne H⁺, l'autre le capte."
          }
        ]
      },
      page5_resume: {
        titre: "Résumé",
        resume: "Un acide donne un H⁺, une base le capte. Ils forment un couple AH/A⁻. L'eau est amphotère : elle peut faire les deux. L'autoprotolyse de l'eau produit H₃O⁺ et HO⁻. Le pH mesure l'acidité : pH = −log([H₃O⁺]). Échelle de 0 (très acide) à 14 (très basique). Une liaison polarisée favorise l'acidité, un doublet non-liant favorise la basicité.",
        points_importants: [
          "Acide = donneur de H⁺, base = accepteur de H⁺",
          "Couple acide-base : AH ⇌ A⁻ + H⁺",
          "L'eau est amphotère (H₃O⁺/H₂O et H₂O/HO⁻)",
          "pH = −log([H₃O⁺]), pH < 7 = acide, pH > 7 = basique",
          "Mesure : papier pH (approximatif) ou pH-mètre (précis)"
        ],
        pieges_courants: [
          "Ne pas confondre acide/base de Brønsted avec acide/base de Lewis (hors programme ici).",
          "pH = 7 est neutre uniquement à 25 °C. À une autre température, la neutralité change.",
          "L'autoprotolyse existe TOUJOURS, même dans l'eau pure. Ce n'est pas une réaction ajoutée.",
          "Attention au signe : pH = −log, pas +log. Un oubli de signe = réponse fausse."
        ]
      }
    }
  },

  // ═══════════════════════════════════════════
  // CH2 — Équilibres acide-base
  // ═══════════════════════════════════════════
  {
    id: "term-chimie-ch2",
    titre: "Équilibres acide-base",
    emoji: "⚖️",
    nouveau: false,

    flashcardsData: [
      {
        q: "Que représente la constante d'acidité Ka ?",
        r: "Ka mesure la force d'un acide. Ka = [A⁻][H₃O⁺] / [AH]. Plus Ka est grand, plus l'acide est fort."
      },
      {
        q: "Comment calcule-t-on le pKa ?",
        r: "pKa = −log(Ka). Plus pKa est petit, plus l'acide est fort."
      },
      {
        q: "Qu'est-ce que le produit ionique de l'eau Ke ?",
        r: "Ke = [H₃O⁺] × [HO⁻] = 10⁻¹⁴ à 25 °C."
      },
      {
        q: "Quelle relation lie pH et pKa à l'équilibre ?",
        r: "pH = pKa + log([A⁻]/[AH]). C'est la relation de Henderson-Hasselbalch."
      },
      {
        q: "Si pH < pKa, quelle forme domine ?",
        r: "La forme acide AH domine. En gros : milieu acide → l'acide est plus présent."
      },
      {
        q: "Si pH > pKa, quelle forme domine ?",
        r: "La forme basique A⁻ domine. En gros : milieu basique → la base est plus présente."
      },
      {
        q: "Si pH = pKa, que peut-on dire ?",
        r: "[AH] = [A⁻]. Les deux formes sont en quantités égales. C'est le point de demi-équivalence."
      },
      {
        q: "Qu'est-ce qu'un acide fort ? Donne un exemple.",
        r: "Un acide dont la réaction avec l'eau est totale. Exemple : HCl → H₃O⁺ + Cl⁻ (flèche simple →)."
      },
      {
        q: "Qu'est-ce qu'un acide faible ? Donne un exemple.",
        r: "Un acide dont la réaction avec l'eau est un équilibre. Exemple : CH₃COOH ⇌ CH₃COO⁻ + H₃O⁺."
      },
      {
        q: "Comment différencie-t-on un acide fort d'un acide faible avec Ka ?",
        r: "Acide fort : Ka très grand (réaction totale). Acide faible : Ka petit (équilibre, réaction partielle)."
      }
    ],

    qcm: [
      {
        question: "Le pKa du couple CH₃COOH/CH₃COO⁻ vaut 4,8. Si pH = 3, quelle forme domine ?",
        options: [
          "CH₃COO⁻ (la base)",
          "CH₃COOH (l'acide)",
          "Les deux en quantités égales",
          "Impossible à déterminer"
        ],
        correct: 1,
        explication: "pH = 3 < pKa = 4,8. Quand pH < pKa, la forme acide AH domine. Ici, c'est CH₃COOH."
      },
      {
        question: "À 25 °C, le produit ionique de l'eau Ke vaut :",
        options: [
          "10⁻⁷",
          "10⁻¹⁴",
          "10⁻¹²",
          "1"
        ],
        correct: 1,
        explication: "Ke = [H₃O⁺] × [HO⁻] = 10⁻¹⁴ à 25 °C. C'est une constante fondamentale."
      },
      {
        question: "Un acide fort se distingue par :",
        options: [
          "Un pKa élevé",
          "Une réaction totale avec l'eau",
          "Un pH supérieur à 7",
          "Une réaction équilibrée avec l'eau"
        ],
        correct: 1,
        explication: "Acide fort = réaction totale avec l'eau (flèche →). Tout l'acide se transforme en H₃O⁺."
      },
      {
        question: "La relation pH = pKa + log([A⁻]/[AH]) s'appelle :",
        options: [
          "Loi de Beer-Lambert",
          "Loi de Kohlrausch",
          "Relation de Henderson-Hasselbalch",
          "Loi d'Ohm"
        ],
        correct: 2,
        explication: "C'est Henderson-Hasselbalch. Elle relie le pH au pKa et au rapport des concentrations acide/base."
      },
      {
        question: "Quand pH = pKa, on a :",
        options: [
          "[AH] >> [A⁻]",
          "[A⁻] >> [AH]",
          "[AH] = [A⁻]",
          "[H₃O⁺] = [HO⁻]"
        ],
        correct: 2,
        explication: "Si pH = pKa, alors log([A⁻]/[AH]) = 0, donc [A⁻]/[AH] = 1, soit [AH] = [A⁻]."
      },
      {
        question: "Le diagramme de prédominance permet de :",
        options: [
          "Mesurer le pH",
          "Trouver la forme majoritaire selon le pH",
          "Calculer la masse molaire",
          "Trouver la vitesse de réaction"
        ],
        correct: 1,
        explication: "Le diagramme de prédominance montre quelle forme (AH ou A⁻) est majoritaire en fonction du pH."
      },
      {
        question: "HCl est un acide fort. Quelle est sa base conjuguée ?",
        options: [
          "H₂O",
          "HO⁻",
          "Cl⁻",
          "H₃O⁺"
        ],
        correct: 2,
        explication: "HCl → H⁺ + Cl⁻. L'ion chlorure Cl⁻ est la base conjuguée de HCl. Mais c'est une base indifférente (trop faible pour réagir)."
      }
    ],

    fiche: {
      page1_intro: {
        titre: "Introduction",
        texte: "Le chapitre 1 posait les bases : acide, base, pH. Ici, on va plus loin. On quantifie la force des acides avec Ka et pKa. On voit le produit ionique de l'eau Ke. On apprend à prédire quelle forme domine (acide ou base) selon le pH, grâce aux diagrammes de prédominance. En gros : ce chapitre te donne les outils pour prévoir le comportement d'un acide ou d'une base dans n'importe quelle situation.",
        points_cles: [
          "Ka mesure la force d'un acide, pKa = −log(Ka)",
          "Ke = [H₃O⁺]×[HO⁻] = 10⁻¹⁴ à 25 °C",
          "pH = pKa + log([A⁻]/[AH]) : Henderson-Hasselbalch",
          "pH < pKa → forme acide domine | pH > pKa → forme basique domine",
          "Acide fort : réaction totale | Acide faible : équilibre"
        ]
      },
      page2_concepts: {
        titre: "Concepts clés",
        concepts: [
          {
            terme: "Constante d'acidité Ka",
            definition: "Ka = [A⁻][H₃O⁺] / [AH]. Elle quantifie la force d'un acide en solution aqueuse. Plus Ka est grand, plus l'acide libère facilement son H⁺."
          },
          {
            terme: "pKa",
            definition: "pKa = −log(Ka). C'est plus pratique à manipuler que Ka. Plus pKa est petit, plus l'acide est fort."
          },
          {
            terme: "Produit ionique de l'eau (Ke)",
            definition: "Ke = [H₃O⁺] × [HO⁻]. À 25 °C, Ke = 10⁻¹⁴. Cette relation est TOUJOURS vérifiée dans l'eau, quoi qu'on ajoute."
          },
          {
            terme: "Diagramme de prédominance",
            definition: "Axe horizontal = pH. À gauche de pKa : la forme acide AH domine. À droite : la base A⁻ domine. Au point pKa : les deux sont à 50/50."
          },
          {
            terme: "Diagramme de distribution",
            definition: "Graphe montrant les pourcentages de AH et A⁻ en fonction du pH. Les deux courbes se croisent à pH = pKa."
          },
          {
            terme: "Acide fort / Base forte",
            definition: "Espèce dont la réaction avec l'eau est totale (→). L'acide est entièrement dissocié. Exemples : HCl, HNO₃, NaOH."
          },
          {
            terme: "Acide faible / Base faible",
            definition: "Espèce dont la réaction avec l'eau est un équilibre (⇌). Seule une partie se dissocie. Exemples : CH₃COOH, NH₃."
          }
        ]
      },
      page3_schemas: {
        titre: "Schémas clés",
        schemas: []
      },
      page4_formules: {
        titre: "Formules essentielles",
        formules: [
          {
            nom: "Constante d'acidité",
            formule: "Ka = [A⁻][H₃O⁺] / [AH]",
            explication: "Les concentrations sont celles à l'équilibre, en mol/L. L'eau n'apparaît pas (solvant)."
          },
          {
            nom: "pKa",
            formule: "pKa = −log(Ka)",
            explication: "Échelle logarithmique. Un acide avec pKa = 2 est plus fort qu'un acide avec pKa = 5."
          },
          {
            nom: "Produit ionique de l'eau",
            formule: "Ke = [H₃O⁺] × [HO⁻] = 10⁻¹⁴ (à 25 °C)",
            explication: "Toujours vrai dans l'eau. Si on connaît [H₃O⁺], on en déduit [HO⁻] et vice versa."
          },
          {
            nom: "Henderson-Hasselbalch",
            formule: "pH = pKa + log([A⁻] / [AH])",
            explication: "Permet de relier le pH au rapport des concentrations. Si [A⁻] = [AH], pH = pKa."
          },
          {
            nom: "Lien pH et Ke",
            formule: "pH + pOH = 14 (à 25 °C)",
            explication: "Avec pOH = −log([HO⁻]). C'est une conséquence directe de Ke = 10⁻¹⁴."
          }
        ]
      },
      page5_resume: {
        titre: "Résumé",
        resume: "La force d'un acide se mesure par Ka (ou pKa). Plus Ka est grand (pKa petit), plus l'acide est fort. Le produit ionique Ke = 10⁻¹⁴ relie [H₃O⁺] et [HO⁻]. La relation de Henderson-Hasselbalch (pH = pKa + log([A⁻]/[AH])) permet de savoir quelle forme domine. Si pH < pKa, l'acide domine. Si pH > pKa, la base domine. Un acide fort réagit totalement avec l'eau. Un acide faible est en équilibre.",
        points_importants: [
          "Ka = [A⁻][H₃O⁺] / [AH] — plus Ka est grand, plus l'acide est fort",
          "pKa = −log(Ka) — plus pKa est petit, plus l'acide est fort",
          "Ke = 10⁻¹⁴ à 25 °C — toujours vérifié dans l'eau",
          "pH < pKa → AH domine | pH > pKa → A⁻ domine",
          "Acide fort → réaction totale | Acide faible → équilibre"
        ],
        pieges_courants: [
          "Ne pas confondre Ka et Ke. Ka dépend du couple, Ke dépend uniquement de la température.",
          "Ke = 10⁻¹⁴ seulement à 25 °C. À 37 °C (corps humain), Ke ≈ 2,4 × 10⁻¹⁴.",
          "Un acide fort n'a pas de Ka pertinent (réaction totale, pas d'équilibre).",
          "Attention : dans Henderson-Hasselbalch, c'est log([base]/[acide]), pas l'inverse."
        ]
      }
    }
  },

  // ═══════════════════════════════════════════
  // CH3 — Analyse physique d'un système chimique
  // ═══════════════════════════════════════════
  {
    id: "term-chimie-ch3",
    titre: "Analyse physique d'un système chimique",
    emoji: "🔬",
    nouveau: false,

    flashcardsData: [
      {
        q: "Que mesure la conductance G ?",
        r: "G = 1/R (en siemens, S). C'est l'inverse de la résistance. Plus G est grand, mieux le courant passe."
      },
      {
        q: "Quelle est la formule de la conductivité σ ?",
        r: "σ = G × (l / S), avec l la distance entre électrodes et S leur surface. Unité : S·m⁻¹."
      },
      {
        q: "Qu'exprime la loi de Kohlrausch ?",
        r: "σ = Σ λᵢ × [Xᵢ]. La conductivité est la somme des contributions de chaque ion."
      },
      {
        q: "Que représente λᵢ dans la loi de Kohlrausch ?",
        r: "La conductivité molaire ionique de l'ion i (en S·m²·mol⁻¹). C'est la capacité d'un ion à conduire le courant."
      },
      {
        q: "Qu'est-ce que l'absorbance A en spectroscopie UV-visible ?",
        r: "A = −log(I/I₀). C'est une grandeur sans unité qui mesure combien la solution absorbe la lumière."
      },
      {
        q: "Énonce la loi de Beer-Lambert.",
        r: "A = Σ εᵢ × l × [Xᵢ]. L'absorbance est proportionnelle à la concentration et à l'épaisseur de la cuve."
      },
      {
        q: "Qu'est-ce que la transmittance T ?",
        r: "T = I/I₀. C'est la fraction de lumière qui traverse l'échantillon. En IR, on utilise T (pas A)."
      },
      {
        q: "En spectroscopie IR, que permet d'identifier un spectre ?",
        r: "Les groupes caractéristiques (O-H, N-H, C=O…) grâce à leurs bandes d'absorption à des nombres d'onde précis."
      },
      {
        q: "Qu'est-ce qu'un dosage par étalonnage ?",
        r: "On mesure une grandeur (A ou σ) pour des solutions de concentration connue, on trace la droite, puis on lit la concentration inconnue."
      },
      {
        q: "Pourquoi la loi de Beer-Lambert est-elle valable seulement pour les solutions diluées ?",
        r: "À forte concentration, les interactions entre molécules faussent la proportionnalité A = f([X]). La droite n'est plus linéaire."
      }
    ],

    qcm: [
      {
        question: "La conductance G est reliée à la résistance R par :",
        options: [
          "G = R",
          "G = R²",
          "G = 1/R",
          "G = R × l"
        ],
        correct: 2,
        explication: "G = 1/R. La conductance est l'inverse de la résistance. Si R est grand, G est petit (mauvais conducteur)."
      },
      {
        question: "Dans la loi de Beer-Lambert A = ε·l·[X], que représente l ?",
        options: [
          "La longueur d'onde",
          "L'épaisseur de la cuve traversée",
          "La conductivité",
          "La masse molaire"
        ],
        correct: 1,
        explication: "l est l'épaisseur de la cuve (en m ou cm). Plus la cuve est épaisse, plus la lumière est absorbée."
      },
      {
        question: "La loi de Kohlrausch s'écrit σ = Σ λᵢ·[Xᵢ]. Que vaut σ si la solution ne contient aucun ion ?",
        options: [
          "σ = 1",
          "σ = 0",
          "σ = λ",
          "σ = ∞"
        ],
        correct: 1,
        explication: "Sans ions, aucune espèce ne conduit le courant. La conductivité vaut 0 S·m⁻¹."
      },
      {
        question: "En spectroscopie IR, on repère les groupes caractéristiques grâce à :",
        options: [
          "L'absorbance",
          "La conductivité",
          "Le nombre d'onde des bandes d'absorption",
          "Le pH de la solution"
        ],
        correct: 2,
        explication: "Chaque liaison (O-H, C=O, N-H…) absorbe à un nombre d'onde précis en IR. C'est une empreinte digitale."
      },
      {
        question: "Pour un dosage par étalonnage, on a besoin de :",
        options: [
          "Une seule solution de référence",
          "Plusieurs solutions de concentrations connues",
          "Un seul point de mesure",
          "Aucune solution de référence"
        ],
        correct: 1,
        explication: "On prépare une gamme étalon (plusieurs solutions de concentrations connues). On mesure A ou σ pour chacune, on trace la droite, puis on lit la valeur inconnue."
      },
      {
        question: "L'absorbance A d'une solution est sans unité car :",
        options: [
          "C'est un rapport de concentrations",
          "C'est un rapport d'intensités lumineuses (−log(I/I₀))",
          "Elle dépend de la température",
          "Elle est toujours égale à 1"
        ],
        correct: 1,
        explication: "A = −log(I/I₀). C'est le log d'un rapport (intensité transmise / intensité incidente). Un rapport n'a pas d'unité."
      },
      {
        question: "La conductivité molaire ionique λ(H₃O⁺) est très élevée car :",
        options: [
          "H₃O⁺ est très gros",
          "H₃O⁺ se déplace par un mécanisme de transfert de proton très rapide",
          "H₃O⁺ ne conduit pas le courant",
          "H₃O⁺ est neutre"
        ],
        correct: 1,
        explication: "H₃O⁺ (et HO⁻) ont des λ très élevés. Le proton « saute » de molécule en molécule (mécanisme de Grotthuss). C'est plus rapide que de se déplacer physiquement."
      }
    ],

    fiche: {
      page1_intro: {
        titre: "Introduction",
        texte: "Pour étudier un système chimique, on peut le regarder, le traverser avec de la lumière ou y faire passer du courant. Ce chapitre présente les techniques physiques d'analyse : conductimétrie (courant), spectroscopie UV-visible (lumière visible), spectroscopie IR (infrarouge). On voit aussi le dosage par étalonnage : comparer une solution inconnue à des solutions connues pour trouver sa concentration.",
        points_cles: [
          "Conductimétrie : G = 1/R, σ = Σ λᵢ[Xᵢ] (loi de Kohlrausch)",
          "UV-visible : A = ε·l·[X] (loi de Beer-Lambert)",
          "IR : transmittance T, identification des groupes caractéristiques",
          "Dosage par étalonnage : gamme de solutions + lecture graphique"
        ]
      },
      page2_concepts: {
        titre: "Concepts clés",
        concepts: [
          {
            terme: "Conductance (G)",
            definition: "G = 1/R, en siemens (S). Mesure la facilité d'un milieu à conduire le courant électrique."
          },
          {
            terme: "Conductivité (σ)",
            definition: "σ = G × (l/S). Grandeur intrinsèque du milieu (ne dépend pas de la taille des électrodes). Unité : S·m⁻¹."
          },
          {
            terme: "Conductivité molaire ionique (λᵢ)",
            definition: "Contribution d'un ion à la conductivité, en S·m²·mol⁻¹. Chaque ion a son propre λ (donné dans les tables)."
          },
          {
            terme: "Absorbance (A)",
            definition: "A = −log(I/I₀). Mesure combien une solution absorbe la lumière. Sans unité. Plus A est grand, plus la solution absorbe."
          },
          {
            terme: "Coefficient d'extinction molaire (ε)",
            definition: "Caractéristique de l'espèce à une longueur d'onde donnée. Unité : L·mol⁻¹·cm⁻¹. Plus ε est grand, plus l'espèce absorbe fortement."
          },
          {
            terme: "Transmittance (T)",
            definition: "T = I/I₀. Fraction de lumière transmise. Utilisée en IR. T = 100 % → pas d'absorption. T faible → forte absorption."
          },
          {
            terme: "Dosage par étalonnage",
            definition: "Méthode pour déterminer une concentration inconnue en la comparant à des solutions de concentrations connues (gamme étalon)."
          }
        ]
      },
      page3_schemas: {
        titre: "Schémas clés",
        schemas: []
      },
      page4_formules: {
        titre: "Formules essentielles",
        formules: [
          {
            nom: "Conductance",
            formule: "G = 1/R",
            explication: "G en siemens (S), R en ohms (Ω). C'est l'inverse de la résistance."
          },
          {
            nom: "Conductivité",
            formule: "σ = G × (l / S)",
            explication: "l = distance entre électrodes (m), S = surface des électrodes (m²). σ en S·m⁻¹."
          },
          {
            nom: "Loi de Kohlrausch",
            formule: "σ = Σ λᵢ × [Xᵢ]",
            explication: "La conductivité est la somme des contributions de chaque ion. λᵢ en S·m²·mol⁻¹, [Xᵢ] en mol·m⁻³."
          },
          {
            nom: "Loi de Beer-Lambert",
            formule: "A = Σ εᵢ × l × [Xᵢ]",
            explication: "Pour une seule espèce : A = ε·l·[X]. ε en L·mol⁻¹·cm⁻¹, l en cm, [X] en mol·L⁻¹. Valable en solution diluée."
          },
          {
            nom: "Absorbance",
            formule: "A = −log(T) = −log(I/I₀)",
            explication: "Relation entre absorbance et transmittance. A = 0 → solution transparente. A = 1 → 90 % de la lumière absorbée."
          }
        ]
      },
      page5_resume: {
        titre: "Résumé",
        resume: "La conductimétrie mesure la conductivité σ d'une solution ionique (loi de Kohlrausch). La spectroscopie UV-visible mesure l'absorbance A (loi de Beer-Lambert). La spectroscopie IR identifie les groupes caractéristiques par leurs bandes d'absorption. Le dosage par étalonnage compare la mesure de la solution inconnue à une gamme de solutions connues pour en déduire la concentration.",
        points_importants: [
          "σ = Σ λᵢ[Xᵢ] — chaque ion contribue à la conductivité",
          "A = ε·l·[X] — proportionnalité absorbance/concentration (solutions diluées)",
          "IR : chaque groupe a un nombre d'onde caractéristique",
          "Dosage par étalonnage : gamme étalon → droite → lecture"
        ],
        pieges_courants: [
          "Unités de Kohlrausch : λ en S·m²·mol⁻¹ et [X] en mol·m⁻³ (pas mol/L !).",
          "Beer-Lambert valable SEULEMENT en solution diluée et lumière monochromatique.",
          "Ne pas confondre absorbance (UV-vis) et transmittance (IR). En UV-vis on lit A, en IR on lit T.",
          "En IR, une bande large vers 3300 cm⁻¹ → O-H (souvent confondue avec N-H)."
        ]
      }
    }
  },

  // ═══════════════════════════════════════════
  // CH4 — Évolution temporelle d'une transformation chimique
  // ═══════════════════════════════════════════
  {
    id: "term-chimie-ch4",
    titre: "Évolution temporelle d'une transformation chimique",
    emoji: "⏱️",
    nouveau: false,

    flashcardsData: [
      {
        q: "Qu'est-ce qu'une transformation lente ?",
        r: "Une transformation dont l'évolution est observable à l'œil nu (minutes, heures). Exemple : la rouille."
      },
      {
        q: "Qu'est-ce qu'une transformation rapide ?",
        r: "Une transformation qui semble instantanée (< 1 s). Exemple : une explosion, un précipité immédiat."
      },
      {
        q: "Cite les deux principaux facteurs cinétiques.",
        r: "La température (↑T → ↑vitesse) et la concentration des réactifs (↑C → ↑vitesse)."
      },
      {
        q: "Qu'est-ce qu'un catalyseur ?",
        r: "Espèce qui accélère une réaction sans être consommée. Il est retrouvé intact à la fin."
      },
      {
        q: "Quelle est la différence entre catalyse homogène et hétérogène ?",
        r: "Homogène : catalyseur dans la même phase que les réactifs. Hétérogène : catalyseur dans une phase différente (ex : solide dans un liquide)."
      },
      {
        q: "Comment définit-on la vitesse volumique de disparition d'un réactif ?",
        r: "v = −(1/V) × d(n)/dt, ou v = −d[R]/dt en solution. C'est la diminution de concentration par unité de temps."
      },
      {
        q: "Qu'est-ce que le temps de demi-réaction t₁/₂ ?",
        r: "Durée au bout de laquelle l'avancement atteint la moitié de sa valeur finale. En gros : la moitié de la réaction est faite."
      },
      {
        q: "Pour une réaction d'ordre 1, quelle est la loi de décroissance ?",
        r: "[A] = [A]₀ × e^(−kt). La concentration décroît de façon exponentielle."
      },
      {
        q: "Comment identifier graphiquement une réaction d'ordre 1 ?",
        r: "On trace ln([A]) en fonction de t. Si c'est une droite de pente −k, c'est bien d'ordre 1."
      },
      {
        q: "Pour une réaction d'ordre 1, quelle relation lie t₁/₂ et k ?",
        r: "t₁/₂ = ln(2) / k ≈ 0,693 / k. Le temps de demi-réaction ne dépend que de k."
      }
    ],

    qcm: [
      {
        question: "Si on augmente la température d'une réaction, la vitesse :",
        options: [
          "Diminue",
          "Reste la même",
          "Augmente",
          "Devient nulle"
        ],
        correct: 2,
        explication: "La température est un facteur cinétique. Quand T augmente, les molécules bougent plus vite et se rencontrent plus souvent. La réaction accélère."
      },
      {
        question: "Un catalyseur :",
        options: [
          "Est consommé pendant la réaction",
          "Modifie l'état d'équilibre final",
          "Accélère la réaction sans être consommé",
          "Ralentit toujours la réaction"
        ],
        correct: 2,
        explication: "Un catalyseur accélère la réaction en abaissant l'énergie d'activation. Il est retrouvé intact à la fin. Il ne modifie pas l'équilibre."
      },
      {
        question: "Le temps de demi-réaction t₁/₂ correspond au moment où :",
        options: [
          "Tous les réactifs ont disparu",
          "L'avancement atteint la moitié de sa valeur finale",
          "La réaction s'arrête",
          "La vitesse est maximale"
        ],
        correct: 1,
        explication: "À t₁/₂, la moitié de la réaction est accomplie. L'avancement x vaut xf/2."
      },
      {
        question: "Pour une réaction d'ordre 1, le tracé de ln([A]) = f(t) donne :",
        options: [
          "Une parabole",
          "Une droite de pente −k",
          "Une exponentielle",
          "Une droite de pente k"
        ],
        correct: 1,
        explication: "[A] = [A]₀·e^(−kt), donc ln([A]) = ln([A]₀) − kt. C'est une droite de pente −k et d'ordonnée à l'origine ln([A]₀)."
      },
      {
        question: "Pour une réaction d'ordre 1, t₁/₂ vaut :",
        options: [
          "k / ln(2)",
          "ln(2) / k",
          "1 / (2k)",
          "2k"
        ],
        correct: 1,
        explication: "À t₁/₂ : [A] = [A]₀/2. On remplace dans [A] = [A]₀·e^(−kt₁/₂). On trouve t₁/₂ = ln(2)/k."
      },
      {
        question: "La catalyse est dite hétérogène quand :",
        options: [
          "Le catalyseur est dans la même phase que les réactifs",
          "Le catalyseur est dans une phase différente des réactifs",
          "Il n'y a pas de catalyseur",
          "La réaction est totale"
        ],
        correct: 1,
        explication: "Hétérogène = phases différentes. Ex : platine solide dans une solution liquide. Homogène = même phase."
      },
      {
        question: "La vitesse volumique de disparition d'un réactif R en solution est :",
        options: [
          "v = d[R]/dt",
          "v = −d[R]/dt",
          "v = [R] × t",
          "v = [R]₀ − [R]"
        ],
        correct: 1,
        explication: "[R] diminue au cours du temps, donc d[R]/dt < 0. Le signe − rend la vitesse positive : v = −d[R]/dt > 0."
      }
    ],

    fiche: {
      page1_intro: {
        titre: "Introduction",
        texte: "Toutes les réactions ne vont pas à la même vitesse. Certaines sont instantanées (une explosion), d'autres prennent des heures (la rouille). Ce chapitre étudie la cinétique chimique : à quelle vitesse une réaction avance, quels facteurs l'influencent (température, concentration, catalyseur), et comment décrire mathématiquement l'évolution des concentrations au cours du temps. On voit en détail les réactions d'ordre 1.",
        points_cles: [
          "Transformation lente (observable) vs rapide (instantanée)",
          "Facteurs cinétiques : température et concentration",
          "Catalyse : accélère sans être consommé (homogène ou hétérogène)",
          "Vitesse volumique v = −d[R]/dt",
          "Ordre 1 : [A] = [A]₀·e^(−kt), t₁/₂ = ln(2)/k"
        ]
      },
      page2_concepts: {
        titre: "Concepts clés",
        concepts: [
          {
            terme: "Transformation lente",
            definition: "Réaction dont l'évolution est observable sur plusieurs secondes, minutes ou heures. On peut suivre son avancement au cours du temps."
          },
          {
            terme: "Transformation rapide",
            definition: "Réaction qui paraît instantanée (< 1 s). On ne peut pas observer d'étape intermédiaire."
          },
          {
            terme: "Facteur cinétique",
            definition: "Paramètre qui modifie la vitesse de réaction. Les deux principaux : température et concentration des réactifs."
          },
          {
            terme: "Catalyseur",
            definition: "Espèce qui accélère une réaction sans être consommée. Il abaisse l'énergie d'activation mais ne change pas l'état final."
          },
          {
            terme: "Vitesse volumique",
            definition: "v = −d[R]/dt pour un réactif, ou v = d[P]/dt pour un produit. Elle représente la variation de concentration par unité de temps."
          },
          {
            terme: "Temps de demi-réaction (t₁/₂)",
            definition: "Durée au bout de laquelle l'avancement a atteint la moitié de sa valeur finale. Pour l'ordre 1 : t₁/₂ = ln(2)/k."
          },
          {
            terme: "Réaction d'ordre 1",
            definition: "Réaction où la vitesse est proportionnelle à [A] : v = k[A]. La concentration décroît exponentiellement : [A] = [A]₀·e^(−kt)."
          }
        ]
      },
      page3_schemas: {
        titre: "Schémas clés",
        schemas: []
      },
      page4_formules: {
        titre: "Formules essentielles",
        formules: [
          {
            nom: "Vitesse volumique de disparition",
            formule: "v = −d[R]/dt",
            explication: "Le − assure que v > 0 (car [R] diminue). En mol·L⁻¹·s⁻¹."
          },
          {
            nom: "Loi de vitesse d'ordre 1",
            formule: "v = k × [A]",
            explication: "k est la constante de vitesse (en s⁻¹). Plus k est grand, plus la réaction est rapide."
          },
          {
            nom: "Loi de décroissance d'ordre 1",
            formule: "[A] = [A]₀ × e^(−kt)",
            explication: "La concentration décroît de façon exponentielle. [A]₀ est la concentration initiale."
          },
          {
            nom: "Linéarisation (ordre 1)",
            formule: "ln([A]) = ln([A]₀) − k·t",
            explication: "Si on trace ln([A]) vs t et qu'on obtient une droite de pente −k, la réaction est d'ordre 1."
          },
          {
            nom: "Temps de demi-réaction (ordre 1)",
            formule: "t₁/₂ = ln(2) / k",
            explication: "Pour l'ordre 1, t₁/₂ ne dépend que de k, pas de la concentration initiale."
          }
        ]
      },
      page5_resume: {
        titre: "Résumé",
        resume: "La cinétique étudie la vitesse des réactions. Une réaction peut être lente ou rapide. La température et la concentration sont des facteurs cinétiques. Un catalyseur accélère sans être consommé. La vitesse se mesure par v = −d[R]/dt. Pour une réaction d'ordre 1 : [A] = [A]₀·e^(−kt) et t₁/₂ = ln(2)/k. On identifie l'ordre 1 en traçant ln([A]) vs t : si c'est une droite, c'est confirmé.",
        points_importants: [
          "Facteurs cinétiques : température (↑ → plus vite) et concentration (↑ → plus vite)",
          "Catalyseur : accélère sans être consommé, ne change pas l'équilibre",
          "Ordre 1 : [A] = [A]₀·e^(−kt), droite ln[A] vs t",
          "t₁/₂ = ln(2)/k — ne dépend pas de [A]₀ pour l'ordre 1",
          "v = −d[R]/dt > 0 (le signe − est crucial)"
        ],
        pieges_courants: [
          "Ne pas oublier le signe − dans v = −d[R]/dt. La vitesse est toujours positive.",
          "Un catalyseur ne modifie PAS l'état d'équilibre. Il accélère juste l'atteinte de l'équilibre.",
          "t₁/₂ indépendant de [A]₀ → uniquement pour l'ordre 1. Pour l'ordre 2, t₁/₂ dépend de [A]₀.",
          "Attention aux unités de k : s⁻¹ pour l'ordre 1, L·mol⁻¹·s⁻¹ pour l'ordre 2."
        ]
      }
    }
  },

  // ═══════════════════════════════════════════
  // CH5 — Méthode de suivi d'un titrage
  // ═══════════════════════════════════════════
  {
    id: "term-chimie-ch5",
    titre: "Méthode de suivi d'un titrage",
    emoji: "🧪",
    nouveau: false,

    flashcardsData: [
      {
        q: "Qu'est-ce que la masse volumique ρ ?",
        r: "ρ = m/V (en g/L ou kg/m³). C'est la masse par unité de volume."
      },
      {
        q: "Comment calcule-t-on la densité d d'un liquide ?",
        r: "d = ρ_liquide / ρ_eau. C'est sans unité. Si d > 1, le liquide coule dans l'eau."
      },
      {
        q: "Qu'est-ce que le titre massique w ?",
        r: "w = m_soluté / m_solution. C'est la fraction de masse du soluté. Souvent en % (ex : 36 % signifie 36 g de soluté pour 100 g de solution)."
      },
      {
        q: "Quel est le principe d'un dosage par titrage ?",
        r: "On verse un réactif titrant de concentration connue dans la solution à doser, jusqu'à l'équivalence où les réactifs sont dans les proportions stœchiométriques."
      },
      {
        q: "Que se passe-t-il à l'équivalence d'un titrage ?",
        r: "Les réactifs ont été introduits dans les proportions stœchiométriques : nA/a = nB/b. Il ne reste ni excès de titrant ni de titré."
      },
      {
        q: "Comment déterminer VE lors d'un titrage conductimétrique ?",
        r: "On trace σ = f(V). On obtient deux droites. VE est à l'intersection (changement de pente)."
      },
      {
        q: "Qu'est-ce que la méthode des tangentes en titrage pH-métrique ?",
        r: "On trace deux tangentes parallèles aux branches de la courbe pH = f(V). Le point d'équivalence E est au milieu du segment vertical qui les relie."
      },
      {
        q: "Qu'est-ce que la méthode de la dérivée en titrage pH-métrique ?",
        r: "On trace dpH/dV en fonction de V. VE correspond au maximum (pic) de cette courbe dérivée."
      },
      {
        q: "Pourquoi la conductivité change-t-elle de pente à l'équivalence ?",
        r: "Avant VE : des ions sont consommés et/ou créés. Après VE : on ajoute un excès de titrant, les ions s'accumulent. La nature des ions en solution change."
      },
      {
        q: "Comment calcule-t-on la concentration de l'espèce titrée à partir de VE ?",
        r: "À l'équivalence : C_A × V_A / a = C_B × V_E / b. On isole C_A = (C_B × V_E × a) / (b × V_A)."
      }
    ],

    qcm: [
      {
        question: "La masse volumique d'une solution est ρ = 1,2 g/mL. 500 mL de cette solution pèsent :",
        options: [
          "500 g",
          "600 g",
          "1200 g",
          "0,6 g"
        ],
        correct: 1,
        explication: "m = ρ × V = 1,2 × 500 = 600 g. On multiplie la masse volumique par le volume."
      },
      {
        question: "À l'équivalence d'un titrage, on a :",
        options: [
          "Un excès de réactif titrant",
          "Un excès de réactif titré",
          "Les réactifs dans les proportions stœchiométriques",
          "Aucune réaction"
        ],
        correct: 2,
        explication: "À l'équivalence : nA/a = nB/b. Les réactifs sont dans les proportions exactes du bilan. Aucun excès."
      },
      {
        question: "Lors d'un titrage conductimétrique, VE est déterminé par :",
        options: [
          "Le maximum de la courbe σ(V)",
          "Le changement de pente (intersection de deux droites)",
          "Le minimum de la courbe σ(V)",
          "La couleur de la solution"
        ],
        correct: 1,
        explication: "On trace σ = f(V). Il y a un changement de pente à VE. On prolonge les deux portions linéaires et VE est à leur intersection."
      },
      {
        question: "La méthode de la dérivée (titrage pH-métrique) consiste à :",
        options: [
          "Tracer pH en fonction de V",
          "Tracer dpH/dV en fonction de V et repérer le maximum",
          "Mesurer la conductivité",
          "Utiliser un indicateur coloré"
        ],
        correct: 1,
        explication: "dpH/dV est maximal à l'équivalence (c'est là que le pH varie le plus brutalement). Le pic de la dérivée donne VE."
      },
      {
        question: "Le titre massique w = 36 % pour HCl signifie :",
        options: [
          "Il y a 36 g de HCl dans 100 g de solution",
          "Il y a 36 g de HCl dans 1 L de solution",
          "Le pH vaut 3,6",
          "La masse molaire vaut 36 g/mol"
        ],
        correct: 0,
        explication: "w = m_soluté / m_solution = 36 %. Donc 36 g de HCl pour 100 g de solution totale."
      },
      {
        question: "La densité d'un liquide vaut d = 0,8. Cela signifie que :",
        options: [
          "Il est plus dense que l'eau",
          "Il flotte sur l'eau",
          "Sa masse volumique est 0,8 kg/m³",
          "Il n'a pas de masse"
        ],
        correct: 1,
        explication: "d = 0,8 < 1. Le liquide est moins dense que l'eau, donc il flotte. Sa masse volumique est 0,8 g/mL (= 800 kg/m³)."
      },
      {
        question: "Pour un titrage acide fort / base forte, à l'équivalence le pH vaut :",
        options: [
          "0",
          "7",
          "14",
          "Cela dépend des concentrations"
        ],
        correct: 1,
        explication: "Acide fort + base forte → sel + eau. À l'équivalence, la solution est neutre : pH = 7 (à 25 °C). Pas de couple acide-base faible résiduel."
      }
    ],

    fiche: {
      page1_intro: {
        titre: "Introduction",
        texte: "Un titrage (ou dosage par titrage) sert à déterminer la concentration d'une espèce en solution. Le principe : on verse un réactif de concentration connue (le titrant) dans la solution à doser (le titré) jusqu'à l'équivalence. Ce chapitre détaille les méthodes de suivi : conductimétrique (on suit σ) et pH-métrique (on suit le pH). On voit aussi les notions de masse volumique, densité et titre massique, indispensables pour préparer les solutions.",
        points_cles: [
          "ρ = m/V (masse volumique), d = ρ/ρ_eau (densité), w = m_soluté/m_solution (titre massique)",
          "Équivalence : nA/a = nB/b — proportions stœchiométriques exactes",
          "Titrage conductimétrique : σ = f(V), changement de pente → VE",
          "Titrage pH-métrique : méthode des tangentes ou de la dérivée → VE"
        ]
      },
      page2_concepts: {
        titre: "Concepts clés",
        concepts: [
          {
            terme: "Masse volumique (ρ)",
            definition: "ρ = m/V. Masse par unité de volume. Unités courantes : g/mL, g/L, ou kg/m³."
          },
          {
            terme: "Densité (d)",
            definition: "d = ρ_liquide / ρ_eau. Rapport sans unité. Si d > 1, le liquide est plus dense que l'eau."
          },
          {
            terme: "Titre massique (w)",
            definition: "w = m_soluté / m_solution. Fraction de la masse totale qui est du soluté. Souvent en pourcentage."
          },
          {
            terme: "Équivalence",
            definition: "Moment du titrage où les réactifs ont été mélangés dans les proportions stœchiométriques exactes : nA/a = nB/b."
          },
          {
            terme: "Titrage conductimétrique",
            definition: "On suit la conductivité σ en fonction du volume V de titrant ajouté. Le changement de pente de σ(V) donne VE."
          },
          {
            terme: "Titrage pH-métrique",
            definition: "On suit le pH en fonction du volume V de titrant ajouté. Le saut de pH permet de repérer VE."
          },
          {
            terme: "Méthode des tangentes",
            definition: "Sur la courbe pH = f(V), on trace deux tangentes parallèles (avant et après le saut). VE est au milieu du segment vertical entre elles."
          }
        ]
      },
      page3_schemas: {
        titre: "Schémas clés",
        schemas: []
      },
      page4_formules: {
        titre: "Formules essentielles",
        formules: [
          {
            nom: "Masse volumique",
            formule: "ρ = m / V",
            explication: "m en g, V en mL → ρ en g/mL. Ou m en kg, V en m³ → ρ en kg/m³."
          },
          {
            nom: "Densité",
            formule: "d = ρ / ρ_eau",
            explication: "ρ_eau = 1,0 g/mL = 1000 kg/m³. La densité est sans unité."
          },
          {
            nom: "Titre massique",
            formule: "w = m_soluté / m_solution",
            explication: "En % : w × 100. Exemple : w = 0,36 → 36 % en masse."
          },
          {
            nom: "Relation à l'équivalence",
            formule: "C_A × V_A / a = C_B × V_E / b",
            explication: "a et b sont les coefficients stœchiométriques. On connaît C_B, V_A, VE → on trouve C_A."
          },
          {
            nom: "Concentration en soluté",
            formule: "C = n / V = (w × ρ × V_solution) / (M × V_solution) = w × ρ / M",
            explication: "Relie le titre massique w, la masse volumique ρ et la masse molaire M à la concentration C."
          }
        ]
      },
      page5_resume: {
        titre: "Résumé",
        resume: "Un titrage détermine une concentration inconnue en utilisant une réaction avec un réactif de concentration connue. À l'équivalence, les réactifs sont dans les proportions stœchiométriques (nA/a = nB/b). Le suivi conductimétrique repère VE par un changement de pente de σ(V). Le suivi pH-métrique repère VE par le saut de pH (méthode des tangentes ou de la dérivée). La masse volumique, la densité et le titre massique permettent de préparer les solutions et de faire les conversions.",
        points_importants: [
          "Équivalence : nA/a = nB/b → C_A = C_B × VE × a / (b × VA)",
          "Conductimétrie : σ change de pente à VE (intersection de deux droites)",
          "pH-métrie : saut de pH à VE → tangentes ou dérivée",
          "ρ = m/V, d = ρ/ρ_eau, w = m_soluté/m_solution",
          "C = w × ρ / M pour passer du titre massique à la concentration"
        ],
        pieges_courants: [
          "Ne pas confondre titrage (mesure de concentration) et étalonnage (comparaison à une gamme).",
          "À l'équivalence, nA/a = nB/b. Attention aux coefficients stœchiométriques a et b.",
          "En conductimétrie, penser à diluer la correction si le volume ajouté est grand (σ corrigé).",
          "La méthode des tangentes nécessite deux tangentes PARALLÈLES, pas juste deux droites quelconques.",
          "Titre massique : 36 % signifie 36 g de soluté pour 100 g de SOLUTION (pas 100 g de solvant)."
        ]
      }
    }
  }

];
