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
        texte: "• Les réactions acido-basiques sont partout dans la vie courante. • Ton estomac produit de l'acide chlorhydrique (HCl) pour digérer. • Le savon est basique : il capte les graisses grâce à ses ions HO⁻. • Ton sang est tamponné (maintenu stable) à pH 7,4. • C'est comme une balance : l'acide penche d'un côté, la base de l'autre. • Ce chapitre pose les bases du modèle de Brønsted. • Un acide est un donneur de proton (H⁺, un noyau d'hydrogène). • Une base est un accepteur de proton H⁺. • En gros : l'acide « lance » le H⁺, la base « l'attrape ». • C'est comme se passer un ballon : un joueur lance, l'autre réceptionne. • On apprend aussi à mesurer l'acidité avec le pH. • Le pH va de 0 (très acide) à 14 (très basique). • Un pH de 7 signifie que la solution est neutre (ni acide, ni basique).",
        points_cles: [
          "Acide de Brønsted = donneur de H⁺ (proton)",
          "Base de Brønsted = accepteur de H⁺ (proton)",
          "Un couple acide-base s'écrit AH/A⁻ (acide/base conjuguée)",
          "L'eau est amphotère (= elle peut être acide OU base)",
          "pH = −log([H₃O⁺]), échelle de 0 à 14 à 25 °C",
          "Liaison polarisée O–H → favorise le caractère acide",
          "Doublet non-liant (paire d'électrons libres) → favorise le caractère basique",
          "Autoprotolyse de l'eau : 2 H₂O ⇌ H₃O⁺ + HO⁻ (existe toujours)"
        ]
      },
      page2_concepts: {
        titre: "Concepts clés",
        concepts: [
          {
            terme: "Acide de Brønsted",
            definition: "Espèce chimique capable de céder (donner) un proton H⁺ à une autre espèce. Exemple : HCl → H⁺ + Cl⁻. En gros : l'acide « lâche » son H⁺ comme on lâche un ballon. C'est comme quelqu'un qui donne un bonbon : il s'en sépare."
          },
          {
            terme: "Base de Brønsted",
            definition: "Espèce chimique capable de capter (recevoir) un proton H⁺. Exemple : NH₃ + H⁺ → NH₄⁺. En gros : la base « attrape » le H⁺ lancé par l'acide. C'est comme un receveur au baseball qui attrape la balle."
          },
          {
            terme: "Couple acide-base",
            definition: "Paire AH/A⁻ reliée par un transfert de H⁺. La demi-équation est : AH ⇌ A⁻ + H⁺. En gros : l'acide et sa base conjuguée forment un duo inséparable. C'est comme un couple : l'un donne, l'autre reçoit."
          },
          {
            terme: "Espèce amphotère",
            definition: "Espèce pouvant jouer le rôle d'acide ET de base selon la situation. L'eau en est le meilleur exemple : elle donne H⁺ (couple H₂O/HO⁻) ou elle capte H⁺ (couple H₃O⁺/H₂O). En gros : c'est un joueur ambidextre qui joue des deux mains."
          },
          {
            terme: "Autoprotolyse de l'eau",
            definition: "Réaction de l'eau avec elle-même : 2 H₂O ⇌ H₃O⁺ + HO⁻. Une molécule d'eau donne son H⁺ à une autre. C'est un équilibre qui existe toujours, même dans l'eau pure. En gros : l'eau se « parle à elle-même » en s'échangeant des protons."
          },
          {
            terme: "Liaison polarisée",
            definition: "Liaison où les électrons sont attirés vers l'atome le plus électronégatif (celui qui attire le plus). Dans O–H, l'oxygène attire les électrons. Le H devient δ+ (légèrement positif) et peut partir facilement sous forme de H⁺. En gros : c'est comme un aimant qui tire la couverture de son côté."
          },
          {
            terme: "Doublet non-liant",
            definition: "Paire d'électrons libres sur un atome. Elle n'est pas engagée dans une liaison. Elle peut capter un H⁺ pour former une nouvelle liaison. En gros : c'est une main libre prête à attraper quelque chose. C'est ce qui rend une espèce basique."
          },
          {
            terme: "pH (potentiel hydrogène)",
            definition: "Grandeur sans unité qui mesure l'acidité d'une solution. pH = −log([H₃O⁺]). pH < 7 → solution acide. pH > 7 → solution basique. pH = 7 → solution neutre. En gros : c'est un thermomètre, mais pour l'acidité."
          },
          {
            terme: "Proton H⁺",
            definition: "C'est un noyau d'hydrogène qui a perdu son électron. Il est très petit et très réactif. En solution aqueuse, il s'accroche à l'eau pour former H₃O⁺ (ion hydronium). En gros : H⁺ n'existe jamais seul dans l'eau, il se colle toujours à une molécule."
          },
          {
            terme: "Ion hydronium H₃O⁺",
            definition: "C'est le proton H⁺ accroché à une molécule d'eau : H⁺ + H₂O → H₃O⁺. C'est lui qu'on mesure quand on parle de concentration en acide. En gros : H₃O⁺ est la forme « habillée » de H⁺ dans l'eau."
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
            explication: "[H₃O⁺] en mol/L. Plus la concentration en H₃O⁺ est grande, plus le pH est petit (= plus acide). En gros : beaucoup de H₃O⁺ = pH bas = acide."
          },
          {
            nom: "Concentration en H₃O⁺",
            formule: "[H₃O⁺] = 10^(−pH)",
            explication: "Formule inverse. Si pH = 2, alors [H₃O⁺] = 10⁻² = 0,01 mol/L. C'est comme « remonter » du pH à la concentration."
          },
          {
            nom: "Demi-équation acide-base",
            formule: "AH ⇌ A⁻ + H⁺",
            explication: "L'acide AH perd un H⁺ et se transforme en sa base conjuguée A⁻. C'est la « carte d'identité » du couple acide-base."
          },
          {
            nom: "Réaction acido-basique complète",
            formule: "AH₁ + A₂⁻ → A₁⁻ + AH₂",
            explication: "L'acide d'un couple réagit avec la base d'un autre couple. Un H⁺ est transféré de l'acide vers la base. C'est comme un relais : le H⁺ passe d'une équipe à l'autre."
          },
          {
            nom: "Autoprotolyse de l'eau",
            formule: "2 H₂O ⇌ H₃O⁺ + HO⁻",
            explication: "L'eau joue les deux rôles : une molécule donne H⁺ (acide), l'autre le capte (base). Cet équilibre existe toujours dans l'eau."
          },
          {
            nom: "Produit ionique de l'eau (aperçu)",
            formule: "Ke = [H₃O⁺] × [HO⁻] = 10⁻¹⁴ (à 25 °C)",
            explication: "Cette constante relie H₃O⁺ et HO⁻ dans toute solution aqueuse. Si on connaît l'un, on déduit l'autre. En gros : H₃O⁺ et HO⁻ sont toujours liés comme une balançoire."
          },
          {
            nom: "Relation pH et pOH",
            formule: "pH + pOH = 14 (à 25 °C)",
            explication: "pOH = −log([HO⁻]). Si le pH monte, le pOH descend. Leur somme vaut toujours 14 à 25 °C."
          },
          {
            nom: "Lien pH et neutralité",
            formule: "Solution neutre : pH = 7 (à 25 °C)",
            explication: "Neutre signifie [H₃O⁺] = [HO⁻] = 10⁻⁷ mol/L. Attention : cette valeur change avec la température."
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
        texte: "• Le chapitre 1 posait les bases : acide, base, pH. • Ici, on va beaucoup plus loin. • On apprend à mesurer la force d'un acide avec Ka (constante d'acidité). • Ka est un nombre : plus il est grand, plus l'acide est fort. • On utilise aussi pKa = −log(Ka), plus pratique à manipuler. • C'est comme une note sur 20 : plus le pKa est bas, plus l'acide est « costaud ». • On découvre le produit ionique de l'eau Ke = 10⁻¹⁴ (à 25 °C). • En gros : Ke est une constante universelle de l'eau à 25 °C. • On apprend la relation de Henderson-Hasselbalch. • Elle prédit quelle forme (acide AH ou base A⁻) domine à un pH donné. • Le diagramme de prédominance résume tout visuellement. • À gauche du pKa → l'acide domine. • À droite du pKa → la base domine. • En gros : ce chapitre te donne les outils pour prévoir le comportement de tout acide ou base.",
        points_cles: [
          "Ka mesure la force d'un acide : Ka = [A⁻][H₃O⁺] / [AH]",
          "pKa = −log(Ka) — plus pKa est petit, plus l'acide est fort",
          "Ke = [H₃O⁺]×[HO⁻] = 10⁻¹⁴ à 25 °C (produit ionique de l'eau)",
          "pH = pKa + log([A⁻]/[AH]) → relation de Henderson-Hasselbalch",
          "pH < pKa → forme acide AH domine (milieu acide)",
          "pH > pKa → forme basique A⁻ domine (milieu basique)",
          "Acide fort : réaction totale (→) avec l'eau | Acide faible : équilibre (⇌)",
          "Diagramme de prédominance : axe pH, séparation au point pKa"
        ]
      },
      page2_concepts: {
        titre: "Concepts clés",
        concepts: [
          {
            terme: "Constante d'acidité Ka",
            definition: "Ka = [A⁻][H₃O⁺] / [AH]. Elle quantifie la force d'un acide en solution. Plus Ka est grand, plus l'acide libère facilement son H⁺. En gros : Ka est la « puissance de frappe » de l'acide. C'est comme la force d'un lanceur de baseball."
          },
          {
            terme: "pKa",
            definition: "pKa = −log(Ka). C'est une échelle logarithmique plus pratique. Plus pKa est petit, plus l'acide est fort. En gros : pKa = 2 est bien plus fort que pKa = 10. C'est comme un classement inversé."
          },
          {
            terme: "Produit ionique de l'eau (Ke)",
            definition: "Ke = [H₃O⁺] × [HO⁻]. À 25 °C, Ke = 10⁻¹⁴. Cette relation est TOUJOURS vraie dans l'eau. En gros : H₃O⁺ et HO⁻ sont liés comme une balançoire. Si l'un monte, l'autre descend."
          },
          {
            terme: "Relation de Henderson-Hasselbalch",
            definition: "pH = pKa + log([A⁻]/[AH]). Elle relie le pH au rapport des formes acide et basique. Si [A⁻] = [AH], alors pH = pKa (le log vaut 0). En gros : c'est le GPS qui te dit quelle forme domine."
          },
          {
            terme: "Diagramme de prédominance",
            definition: "Axe horizontal = pH. À gauche de pKa : la forme acide AH domine. À droite : la base A⁻ domine. Au point pKa : 50 % de chaque. En gros : c'est une carte qui montre « qui est le chef » selon le pH."
          },
          {
            terme: "Diagramme de distribution",
            definition: "Graphe montrant les pourcentages de AH et A⁻ en fonction du pH. Les deux courbes se croisent à pH = pKa. En gros : c'est comme deux courbes de popularité qui se croisent au milieu."
          },
          {
            terme: "Acide fort",
            definition: "Acide dont la réaction avec l'eau est totale (flèche → simple). Tout l'acide se transforme en H₃O⁺. Exemples : HCl, HNO₃, H₂SO₄. En gros : il donne TOUT son H⁺, sans hésiter."
          },
          {
            terme: "Acide faible",
            definition: "Acide dont la réaction avec l'eau est un équilibre (⇌). Seule une partie se dissocie (donne son H⁺). Exemple : CH₃COOH (vinaigre). En gros : il hésite, il ne donne qu'une petite partie de ses H⁺."
          },
          {
            terme: "Base forte",
            definition: "Base dont la réaction avec l'eau est totale. Elle capte H⁺ complètement. Exemple : NaOH (soude). C'est comme un aspirateur qui prend tout le H⁺ disponible."
          },
          {
            terme: "Base conjuguée indifférente",
            definition: "Base conjuguée d'un acide fort. Elle est tellement faible qu'elle ne réagit pas avec l'eau. Exemple : Cl⁻ (base conjuguée de HCl). En gros : elle est « inerte », elle ne fait rien."
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
            explication: "Les concentrations sont celles à l'équilibre, en mol/L. L'eau n'apparaît pas car c'est le solvant (sa concentration ne change pas). En gros : Ka mesure combien l'acide se dissocie."
          },
          {
            nom: "pKa",
            formule: "pKa = −log(Ka)",
            explication: "Échelle logarithmique. Un acide avec pKa = 2 est beaucoup plus fort qu'un acide avec pKa = 5. En gros : petit pKa = acide costaud."
          },
          {
            nom: "Produit ionique de l'eau",
            formule: "Ke = [H₃O⁺] × [HO⁻] = 10⁻¹⁴ (à 25 °C)",
            explication: "Toujours vrai dans l'eau, même si on ajoute un acide ou une base. Si [H₃O⁺] augmente, [HO⁻] diminue automatiquement."
          },
          {
            nom: "Henderson-Hasselbalch",
            formule: "pH = pKa + log([A⁻] / [AH])",
            explication: "Relie le pH au rapport des concentrations acide/base. Si [A⁻] = [AH], le log vaut 0 et pH = pKa. C'est le point de demi-équivalence."
          },
          {
            nom: "Lien pH et Ke",
            formule: "pH + pOH = 14 (à 25 °C)",
            explication: "pOH = −log([HO⁻]). Conséquence directe de Ke = 10⁻¹⁴. C'est comme deux vases communicants qui totalisent toujours 14."
          },
          {
            nom: "Ka et pKa réciproques",
            formule: "Ka = 10^(−pKa)",
            explication: "Formule inverse pour retrouver Ka à partir du pKa. Si pKa = 4,8 alors Ka = 10⁻⁴·⁸ ≈ 1,6 × 10⁻⁵."
          },
          {
            nom: "Condition de prédominance (acide)",
            formule: "pH < pKa ⟹ [AH] > [A⁻]",
            explication: "Quand le milieu est plus acide que le pKa, la forme acide AH est majoritaire. En gros : environnement acide = l'acide gagne."
          },
          {
            nom: "Condition de prédominance (base)",
            formule: "pH > pKa ⟹ [A⁻] > [AH]",
            explication: "Quand le milieu est plus basique que le pKa, la forme basique A⁻ est majoritaire. En gros : environnement basique = la base gagne."
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
        texte: "• Pour étudier un système chimique, on utilise des techniques physiques. • On ne transforme pas la matière : on la « sonde » avec du courant ou de la lumière. • C'est comme aller chez le médecin : on mesure sans opérer. • La conductimétrie (mesure du courant) sert à analyser les solutions ioniques. • La spectroscopie UV-visible envoie de la lumière à travers la solution. • Plus la solution est concentrée, plus elle absorbe de lumière. • C'est comme des lunettes de soleil : plus elles sont teintées, moins la lumière passe. • La spectroscopie IR (infrarouge) identifie les groupes chimiques d'une molécule. • Chaque liaison chimique absorbe à une fréquence précise. • C'est comme une empreinte digitale : chaque molécule a son spectre unique. • Le dosage par étalonnage compare la solution inconnue à des solutions connues. • En gros : on prépare des « témoins » et on regarde à quel témoin notre solution ressemble. • Ces méthodes sont non-destructives : on garde l'échantillon intact.",
        points_cles: [
          "Conductimétrie : G = 1/R, σ = Σ λᵢ[Xᵢ] (loi de Kohlrausch)",
          "UV-visible : A = ε·l·[X] (loi de Beer-Lambert, solutions diluées)",
          "IR : transmittance T, identification des groupes caractéristiques",
          "Dosage par étalonnage : gamme de solutions connues + lecture graphique",
          "Ces techniques sont non-destructives (on ne modifie pas l'échantillon)",
          "λᵢ (conductivité molaire ionique) dépend de la nature de l'ion",
          "H₃O⁺ et HO⁻ ont des λ très élevés (mécanisme de Grotthuss)",
          "Beer-Lambert valable uniquement en solution diluée et lumière monochromatique"
        ]
      },
      page2_concepts: {
        titre: "Concepts clés",
        concepts: [
          {
            terme: "Conductance (G)",
            definition: "G = 1/R, en siemens (S). Elle mesure la facilité d'un milieu à conduire le courant. En gros : si la résistance est faible, le courant passe bien, donc G est grand. C'est comme un tuyau : plus il est large, plus l'eau coule facilement."
          },
          {
            terme: "Conductivité (σ)",
            definition: "σ = G × (l/S). C'est une grandeur intrinsèque du milieu (ne dépend pas de la taille des électrodes). Unité : S·m⁻¹. En gros : c'est la « qualité de conducteur » de la solution, indépendamment du montage."
          },
          {
            terme: "Conductivité molaire ionique (λᵢ)",
            definition: "Contribution d'un ion à la conductivité, en S·m²·mol⁻¹. Chaque ion a son propre λ donné dans les tables. En gros : c'est la capacité individuelle de chaque ion à faire passer le courant. C'est comme la vitesse de nage de chaque nageur."
          },
          {
            terme: "Loi de Kohlrausch",
            definition: "σ = Σ λᵢ × [Xᵢ]. La conductivité totale est la somme des contributions de chaque ion. En gros : chaque ion « participe » au courant et on additionne toutes les participations."
          },
          {
            terme: "Absorbance (A)",
            definition: "A = −log(I/I₀). Elle mesure combien une solution absorbe la lumière. C'est sans unité (rapport d'intensités). Plus A est grand, plus la solution est « opaque ». En gros : A = 0 → transparent, A = 1 → 90 % de la lumière absorbée."
          },
          {
            terme: "Coefficient d'extinction molaire (ε)",
            definition: "Caractéristique propre à une espèce chimique à une longueur d'onde donnée. Unité : L·mol⁻¹·cm⁻¹. Plus ε est grand, plus l'espèce absorbe fortement la lumière. En gros : c'est la « gourmandise » de la molécule pour la lumière."
          },
          {
            terme: "Loi de Beer-Lambert",
            definition: "A = ε × l × [X]. L'absorbance est proportionnelle à la concentration et à l'épaisseur de la cuve. Valable uniquement en solution diluée et lumière monochromatique. En gros : plus c'est concentré ou plus la cuve est épaisse, plus ça absorbe."
          },
          {
            terme: "Transmittance (T)",
            definition: "T = I/I₀. Fraction de lumière qui traverse l'échantillon. Utilisée en IR. T = 100 % → aucune absorption. T = 10 % → forte absorption. En gros : T est le contraire de l'absorbance."
          },
          {
            terme: "Spectroscopie IR",
            definition: "Technique qui identifie les groupes caractéristiques (O-H, C=O, N-H…) grâce à leurs bandes d'absorption à des nombres d'onde précis. En gros : chaque liaison vibre à sa propre fréquence, comme une corde de guitare."
          },
          {
            terme: "Dosage par étalonnage",
            definition: "On prépare plusieurs solutions de concentrations connues (gamme étalon). On mesure A ou σ pour chacune et on trace la droite. Puis on lit la concentration inconnue sur la droite. En gros : on compare l'inconnu aux témoins, comme chercher la bonne taille de chaussure."
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
            explication: "G en siemens (S), R en ohms (Ω). C'est l'inverse de la résistance. En gros : grande résistance = faible conductance."
          },
          {
            nom: "Conductivité",
            formule: "σ = G × (l / S)",
            explication: "l = distance entre électrodes (m), S = surface des électrodes (m²). σ en S·m⁻¹. Le rapport l/S est la constante de cellule."
          },
          {
            nom: "Loi de Kohlrausch",
            formule: "σ = Σ λᵢ × [Xᵢ]",
            explication: "La conductivité est la somme des contributions de chaque ion. λᵢ en S·m²·mol⁻¹, [Xᵢ] en mol·m⁻³. Attention aux unités : convertir mol/L en mol/m³ (× 1000)."
          },
          {
            nom: "Loi de Beer-Lambert",
            formule: "A = ε × l × [X]",
            explication: "ε en L·mol⁻¹·cm⁻¹, l en cm (épaisseur de la cuve), [X] en mol·L⁻¹. Valable en solution diluée uniquement. En gros : A est proportionnelle à la concentration."
          },
          {
            nom: "Absorbance et transmittance",
            formule: "A = −log(T) = −log(I/I₀)",
            explication: "A = 0 → la solution est transparente (T = 100 %). A = 1 → 90 % de la lumière est absorbée (T = 10 %). A = 2 → 99 % absorbée."
          },
          {
            nom: "Constante de cellule",
            formule: "k_cell = l / S",
            explication: "Caractéristique de la cellule de mesure. σ = G × k_cell. On la détermine avec une solution étalon de conductivité connue."
          },
          {
            nom: "Beer-Lambert (plusieurs espèces)",
            formule: "A = Σ εᵢ × l × [Xᵢ]",
            explication: "Si plusieurs espèces absorbent à la même longueur d'onde, on additionne leurs contributions. C'est l'additivité des absorbances."
          },
          {
            nom: "Longueur d'onde maximale (λ_max)",
            formule: "λ_max = longueur d'onde où A est maximal",
            explication: "On mesure l'absorbance à λ_max pour avoir la meilleure sensibilité. En gros : on choisit la « couleur » de lumière que la solution absorbe le plus."
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
