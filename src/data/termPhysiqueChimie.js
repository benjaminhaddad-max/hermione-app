// Terminale Physique-Chimie — Hermione App
// 10 chapitres basés sur les PDFs du programme officiel

export const TERM_PHYSIQUE_CHIMIE_COURS = [

  // ═══════════════════════════════════════════════════════════════
  // CHAPITRE 1 — Mouvement et Lois de Newton
  // ═══════════════════════════════════════════════════════════════
  {
    id: "term-physique-chimie-ch1",
    titre: "Mouvement et Lois de Newton",
    emoji: "🚀",
    nouveau: false,
    flashcardsData: [
      {
        q: "Quels sont les trois référentiels classiques ?",
        r: "Terrestre (lié au sol), géocentrique (centre de la Terre) et héliocentrique (centre du Soleil)."
      },
      {
        q: "Comment calcule-t-on le vecteur vitesse ?",
        r: "v⃗ = dOM⃗/dt. C'est la dérivée du vecteur position par rapport au temps."
      },
      {
        q: "Que dit la première loi de Newton (inertie) ?",
        r: "Un corps isolé ou pseudo-isolé reste en mouvement rectiligne uniforme ou au repos dans un référentiel galiléen."
      },
      {
        q: "Comment s'écrit la deuxième loi de Newton ?",
        r: "ΣF⃗ = m·a⃗. La somme des forces égale la masse fois l'accélération."
      },
      {
        q: "Que dit la troisième loi de Newton ?",
        r: "F⃗(A/B) = −F⃗(B/A). Toute action entraîne une réaction égale et opposée."
      },
      {
        q: "Quelle est la formule de la quantité de mouvement ?",
        r: "p⃗ = m·v⃗. Elle s'exprime en kg·m/s."
      },
      {
        q: "Dans quel cas la quantité de mouvement se conserve ?",
        r: "Quand le système est isolé (aucune force extérieure). En gros : pas de force dehors = p⃗ constant."
      },
      {
        q: "Qu'est-ce qu'un mouvement rectiligne uniforme ?",
        r: "Le mobile avance en ligne droite à vitesse constante. L'accélération est nulle."
      },
      {
        q: "Comment se définit l'accélération centripète ?",
        r: "a = v²/R, dirigée vers le centre du cercle. Elle maintient l'objet sur sa trajectoire circulaire."
      },
      {
        q: "À quoi sert le repère de Frenet ?",
        r: "C'est un repère mobile (t⃗, n⃗) lié au mobile. t⃗ est tangent à la trajectoire, n⃗ pointe vers le centre de courbure."
      }
    ],
    qcm: [
      {
        question: "Un objet soumis à aucune force dans un référentiel galiléen est en mouvement :",
        options: ["Rectiligne uniforme", "Circulaire uniforme", "Rectiligne accéléré", "Parabolique"],
        correct: 0,
        explication: "Première loi de Newton : sans force, le mouvement est rectiligne uniforme (ou repos)."
      },
      {
        question: "La deuxième loi de Newton s'écrit :",
        options: ["ΣF⃗ = m·a⃗", "ΣF⃗ = m·v⃗", "ΣF⃗ = p⃗/t", "ΣF⃗ = m·g⃗"],
        correct: 0,
        explication: "La somme des forces appliquées égale le produit masse × accélération."
      },
      {
        question: "L'unité de la quantité de mouvement est :",
        options: ["kg·m/s", "N·m", "kg·m/s²", "J"],
        correct: 0,
        explication: "p = m·v donc [kg] × [m/s] = kg·m/s."
      },
      {
        question: "Le vecteur accélération est la dérivée de :",
        options: ["La vitesse par rapport au temps", "La position par rapport au temps", "La force par rapport au temps", "L'énergie par rapport au temps"],
        correct: 0,
        explication: "a⃗ = dv⃗/dt. L'accélération mesure la variation de vitesse par unité de temps."
      },
      {
        question: "Pour un mouvement circulaire uniforme, l'accélération est :",
        options: ["Centripète (vers le centre)", "Tangente à la trajectoire", "Nulle", "Centrifuge (vers l'extérieur)"],
        correct: 0,
        explication: "L'accélération centripète a = v²/R est dirigée vers le centre du cercle."
      },
      {
        question: "La troisième loi de Newton implique que :",
        options: ["Les forces d'interaction sont égales et opposées", "La somme des forces est nulle", "L'accélération est constante", "La vitesse est constante"],
        correct: 0,
        explication: "Principe des actions réciproques : F⃗(A/B) = −F⃗(B/A), même intensité, direction opposée."
      },
      {
        question: "Un référentiel galiléen est un référentiel dans lequel :",
        options: ["Le principe d'inertie est vérifié", "La vitesse est toujours nulle", "L'accélération est constante", "Les forces sont toujours équilibrées"],
        correct: 0,
        explication: "Un référentiel galiléen est un référentiel où un corps isolé garde un mouvement rectiligne uniforme."
      }
    ],
    fiche: {
      page1_intro: {
        titre: "Introduction",
        texte: "La mécanique newtonienne décrit le mouvement des objets et les forces qui les causent. Imagine un ballon lancé : sa trajectoire, sa vitesse, son accélération, tout s'explique par les lois de Newton. Ces lois sont la base de toute la physique classique. En gros : Newton nous dit pourquoi les objets bougent (ou ne bougent pas). Pour décrire un mouvement, il faut choisir un référentiel, c'est-à-dire un point de vue fixe depuis lequel on observe.",
        points_cles: [
          "Un référentiel est indispensable pour décrire un mouvement",
          "La vitesse est la dérivée de la position, l'accélération est la dérivée de la vitesse",
          "Les trois lois de Newton forment le socle de la mécanique",
          "La quantité de mouvement se conserve pour un système isolé",
          "Le repère de Frenet simplifie l'étude des mouvements courbes",
          "Un référentiel galiléen est celui où le principe d'inertie fonctionne",
          "Le mouvement dépend toujours du référentiel choisi",
          "L'accélération centripète maintient un objet sur un cercle"
        ]
      },
      page2_concepts: {
        titre: "Concepts clés",
        concepts: [
          {
            terme: "Référentiel",
            definition: "Solide de référence + horloge pour décrire un mouvement. Terrestre (sol), géocentrique (Terre), héliocentrique (Soleil)."
          },
          {
            terme: "Vecteur vitesse",
            definition: "v⃗ = dOM⃗/dt. Il est tangent à la trajectoire et indique la direction du mouvement à chaque instant."
          },
          {
            terme: "Vecteur accélération",
            definition: "a⃗ = dv⃗/dt. Il traduit la variation de vitesse. Si a⃗ = 0⃗, le mouvement est uniforme."
          },
          {
            terme: "Quantité de mouvement",
            definition: "p⃗ = m·v⃗. Grandeur vectorielle conservée si le système est isolé (pas de force extérieure)."
          },
          {
            terme: "Repère de Frenet",
            definition: "Repère mobile (t⃗, n⃗) attaché au mobile. t⃗ tangent à la trajectoire, n⃗ dirigé vers le centre de courbure."
          },
          {
            terme: "Référentiel galiléen",
            definition: "Référentiel où un corps isolé reste en MRU ou au repos. Le référentiel terrestre est approximativement galiléen."
          },
          {
            terme: "Principe d'inertie",
            definition: "Première loi de Newton : sans force, un corps conserve son état de mouvement."
          },
          {
            terme: "Actions réciproques",
            definition: "Troisième loi : si A exerce F⃗ sur B, alors B exerce −F⃗ sur A. Même droite d'action, sens opposé."
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
            nom: "Deuxième loi de Newton",
            formule: "ΣF⃗ = m·a⃗",
            explication: "La résultante des forces égale masse × accélération. C'est LA loi fondamentale de la mécanique."
          },
          {
            nom: "Quantité de mouvement",
            formule: "p⃗ = m·v⃗",
            explication: "Produit de la masse par la vitesse. Se conserve si le système est isolé."
          },
          {
            nom: "Accélération centripète",
            formule: "a = v²/R",
            explication: "Pour un mouvement circulaire, l'accélération pointe vers le centre et vaut v²/R."
          },
          {
            nom: "Vitesse instantanée",
            formule: "v⃗ = dOM⃗/dt",
            explication: "Dérivée du vecteur position par rapport au temps. Tangente à la trajectoire."
          },
          {
            nom: "Accélération instantanée",
            formule: "a⃗ = dv⃗/dt",
            explication: "Dérivée du vecteur vitesse par rapport au temps. Indique comment la vitesse change."
          },
          {
            nom: "Théorème du centre d'inertie",
            formule: "ΣF⃗(ext) = m·a⃗(G)",
            explication: "Le centre d'inertie G d'un système se comporte comme un point matériel soumis aux forces extérieures."
          }
        ]
      },
      page5_resume: {
        titre: "Résumé",
        resume: "La mécanique newtonienne repose sur trois lois. La 1ʳᵉ (inertie) : sans force, mouvement rectiligne uniforme. La 2ᵉ : ΣF⃗ = m·a⃗, la force provoque l'accélération. La 3ᵉ : action = réaction. La quantité de mouvement p⃗ = m·v⃗ se conserve pour un système isolé. Le repère de Frenet décompose l'accélération en composante tangentielle et centripète.",
        points_importants: [
          "Toujours préciser le référentiel d'étude",
          "ΣF⃗ = m·a⃗ est valable uniquement dans un référentiel galiléen",
          "La conservation de p⃗ s'applique quand ΣF⃗(ext) = 0⃗",
          "L'accélération centripète pointe vers le centre du cercle"
        ],
        pieges_courants: [
          "Oublier de préciser le référentiel d'étude",
          "Confondre vitesse et accélération (v⃗ tangent, a⃗ pas forcément)",
          "Appliquer Newton hors d'un référentiel galiléen",
          "Oublier que p⃗ est un vecteur (direction + sens comptent)"
        ]
      }
    }
  },

  // ═══════════════════════════════════════════════════════════════
  // CHAPITRE 2 — Mouvement dans un champ uniforme
  // ═══════════════════════════════════════════════════════════════
  {
    id: "term-physique-chimie-ch2",
    titre: "Mouvement dans un champ uniforme",
    emoji: "🎯",
    nouveau: false,
    flashcardsData: [
      {
        q: "Qu'est-ce qu'un champ uniforme ?",
        r: "Un champ (de pesanteur ou électrique) qui a la même valeur, même direction et même sens en tout point de l'espace considéré."
      },
      {
        q: "Quelle est l'accélération en chute libre ?",
        r: "a⃗ = g⃗. L'objet subit uniquement la gravité : a = g ≈ 9,81 m/s²."
      },
      {
        q: "Comment s'écrit l'équation horaire de la vitesse en chute libre (axe vertical vers le bas) ?",
        r: "v(t) = g·t + v₀. La vitesse augmente linéairement avec le temps."
      },
      {
        q: "Quelle est la trajectoire d'un projectile lancé obliquement ?",
        r: "Une parabole. En gros : l'objet monte, ralentit, puis redescend en dessinant un arc."
      },
      {
        q: "Comment définit-on la portée d'un tir ?",
        r: "La distance horizontale parcourue quand le projectile revient à la même altitude de départ."
      },
      {
        q: "Comment définit-on la flèche d'un tir ?",
        r: "La hauteur maximale atteinte par le projectile au sommet de sa trajectoire."
      },
      {
        q: "Qu'est-ce qu'un condensateur plan ?",
        r: "Deux plaques conductrices parallèles séparées par un isolant. Il crée un champ électrique uniforme entre les plaques."
      },
      {
        q: "Quelle force s'exerce sur une charge q dans un champ E⃗ ?",
        r: "F⃗ = q·E⃗. Si q > 0, la force est dans le sens de E⃗. Si q < 0, sens opposé."
      },
      {
        q: "Pourquoi le mouvement horizontal est-il uniforme lors d'une chute libre avec vitesse initiale horizontale ?",
        r: "Aucune force ne s'exerce horizontalement (on néglige les frottements). Donc vₓ = constante."
      },
      {
        q: "Comment obtient-on l'équation de la trajectoire y(x) ?",
        r: "On élimine le temps t entre les équations x(t) et y(t). On obtient y = f(x), une parabole."
      }
    ],
    qcm: [
      {
        question: "En chute libre, l'accélération d'un objet est :",
        options: ["g⃗ (vers le bas)", "Nulle", "Proportionnelle à la masse", "Variable avec l'altitude"],
        correct: 0,
        explication: "En chute libre, seule la pesanteur agit : a⃗ = g⃗, indépendamment de la masse."
      },
      {
        question: "La trajectoire d'un projectile dans un champ de pesanteur uniforme est :",
        options: ["Parabolique", "Rectiligne", "Circulaire", "Elliptique"],
        correct: 0,
        explication: "Avec une vitesse initiale oblique dans un champ uniforme, la trajectoire est une parabole."
      },
      {
        question: "Dans un condensateur plan, le champ électrique est :",
        options: ["Uniforme entre les plaques", "Nul entre les plaques", "Radial", "Variable en 1/r²"],
        correct: 0,
        explication: "Entre les plaques d'un condensateur plan, E⃗ est uniforme : même direction, sens et norme partout."
      },
      {
        question: "La composante horizontale de la vitesse d'un projectile en chute libre :",
        options: ["Reste constante", "Augmente", "Diminue", "S'annule au sommet"],
        correct: 0,
        explication: "Aucune force horizontale (frottements négligés) donc vₓ = v₀·cos(α) = constante."
      },
      {
        question: "L'angle de tir qui donne la portée maximale (sol horizontal) est :",
        options: ["45°", "30°", "60°", "90°"],
        correct: 0,
        explication: "La portée est maximale pour α = 45° car sin(2α) est maximal quand 2α = 90°."
      },
      {
        question: "Une particule chargée positivement dans un champ E⃗ est déviée :",
        options: ["Dans le sens de E⃗", "Dans le sens opposé à E⃗", "Perpendiculairement à E⃗", "Elle n'est pas déviée"],
        correct: 0,
        explication: "F⃗ = q·E⃗. Si q > 0, la force est dans le même sens que E⃗."
      },
      {
        question: "Au sommet de la trajectoire d'un projectile :",
        options: ["La composante verticale de la vitesse est nulle", "La vitesse est nulle", "L'accélération est nulle", "La composante horizontale est nulle"],
        correct: 0,
        explication: "Au sommet, vy = 0 mais vx ≠ 0. La vitesse n'est pas nulle, seule sa composante verticale l'est."
      }
    ],
    fiche: {
      page1_intro: {
        titre: "Introduction",
        texte: "Ce chapitre étudie le mouvement d'un objet dans un champ uniforme : pesanteur ou électrique. Imagine un ballon de basket lancé : il suit une parabole à cause de la gravité constante. De même, un électron entre deux plaques chargées est dévié par le champ électrique uniforme. En gros : un champ uniforme = une force constante = une accélération constante = des équations simples à résoudre.",
        points_cles: [
          "Un champ uniforme produit une accélération constante",
          "En chute libre : seule la pesanteur agit, a⃗ = g⃗",
          "Le mouvement se décompose en horizontal (uniforme) et vertical (accéléré)",
          "La trajectoire d'un projectile est une parabole",
          "La portée dépend de l'angle et de la vitesse initiale",
          "Un condensateur plan crée un champ électrique uniforme",
          "Une charge q dans un champ E⃗ subit F⃗ = q·E⃗",
          "Les équations sont analogues : pesanteur et champ électrique se traitent pareil"
        ]
      },
      page2_concepts: {
        titre: "Concepts clés",
        concepts: [
          {
            terme: "Champ de pesanteur uniforme",
            definition: "Champ g⃗ constant en tout point. Valable près de la surface terrestre quand l'altitude varie peu."
          },
          {
            terme: "Chute libre",
            definition: "Mouvement soumis uniquement à la pesanteur (frottements négligés). L'accélération vaut g ≈ 9,81 m/s²."
          },
          {
            terme: "Équations horaires",
            definition: "Expressions de x(t) et y(t) donnant la position en fonction du temps. Obtenues par double intégration de a⃗."
          },
          {
            terme: "Trajectoire parabolique",
            definition: "Courbe y(x) en forme de parabole obtenue en éliminant t entre x(t) et y(t)."
          },
          {
            terme: "Portée",
            definition: "Distance horizontale totale parcourue par le projectile. Maximale pour un angle de 45°."
          },
          {
            terme: "Flèche",
            definition: "Hauteur maximale atteinte par le projectile. Atteinte quand vy = 0."
          },
          {
            terme: "Condensateur plan",
            definition: "Deux plaques parallèles créant un champ E⃗ uniforme entre elles. E = U/d avec U la tension et d la distance."
          },
          {
            terme: "Déviation d'une particule chargée",
            definition: "Dans un champ E⃗, une charge q subit F⃗ = q·E⃗. La trajectoire est parabolique, analogue à la chute libre."
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
            nom: "Équations horaires (chute libre, v₀ oblique)",
            formule: "x(t) = v₀·cos(α)·t ; y(t) = −½g·t² + v₀·sin(α)·t + y₀",
            explication: "Horizontalement : mouvement uniforme. Verticalement : mouvement uniformément accéléré."
          },
          {
            nom: "Portée du tir",
            formule: "P = v₀²·sin(2α) / g",
            explication: "Distance horizontale quand le projectile revient au sol. Maximale pour α = 45°."
          },
          {
            nom: "Flèche du tir",
            formule: "H = v₀²·sin²(α) / (2g)",
            explication: "Hauteur maximale atteinte. On la trouve en posant vy(t) = 0."
          },
          {
            nom: "Champ électrique dans un condensateur",
            formule: "E = U/d",
            explication: "U est la tension entre les plaques, d la distance. E en V/m."
          },
          {
            nom: "Force électrique sur une charge",
            formule: "F⃗ = q·E⃗",
            explication: "Force subie par une charge q dans un champ E⃗. Sens de E⃗ si q > 0, opposé si q < 0."
          },
          {
            nom: "Accélération d'une particule chargée",
            formule: "a = q·E/m",
            explication: "D'après Newton : F = m·a et F = q·E donc a = q·E/m."
          }
        ]
      },
      page5_resume: {
        titre: "Résumé",
        resume: "Dans un champ uniforme, l'accélération est constante. En chute libre : a⃗ = g⃗, la trajectoire est parabolique si la vitesse initiale est oblique. La portée est maximale à 45°. Dans un condensateur plan, E = U/d et la force F⃗ = q·E⃗ dévie les particules chargées comme la pesanteur dévie un projectile. Les deux situations se traitent de manière analogue.",
        points_importants: [
          "Toujours décomposer le mouvement selon deux axes perpendiculaires",
          "L'axe horizontal : mouvement uniforme (pas de force)",
          "L'axe vertical (ou selon E⃗) : mouvement uniformément accéléré",
          "La trajectoire s'obtient en éliminant t entre x(t) et y(t)"
        ],
        pieges_courants: [
          "Oublier de décomposer v₀ en v₀ₓ et v₀ᵧ avec cos et sin",
          "Confondre portée et flèche",
          "Oublier le signe de q pour la force électrique",
          "Ne pas vérifier les conditions initiales (position et vitesse à t=0)"
        ]
      }
    }
  },

  // ═══════════════════════════════════════════════════════════════
  // CHAPITRE 3 — Mouvement dans un champ de gravitation
  // ═══════════════════════════════════════════════════════════════
  {
    id: "term-physique-chimie-ch3",
    titre: "Mouvement dans un champ de gravitation",
    emoji: "🌍",
    nouveau: false,
    flashcardsData: [
      {
        q: "Que dit la première loi de Kepler ?",
        r: "Les planètes décrivent des ellipses dont le Soleil occupe un foyer. En gros : les orbites ne sont pas des cercles parfaits."
      },
      {
        q: "Que dit la deuxième loi de Kepler (loi des aires) ?",
        r: "Le segment Soleil-planète balaie des aires égales en des temps égaux. La planète va plus vite quand elle est proche du Soleil."
      },
      {
        q: "Que dit la troisième loi de Kepler ?",
        r: "T²/a³ = constante pour toutes les planètes autour du même astre. T = période, a = demi-grand axe."
      },
      {
        q: "Quelle est la formule de la force gravitationnelle ?",
        r: "F = G·M·m/r². G = 6,67 × 10⁻¹¹ N·m²/kg². La force diminue avec le carré de la distance."
      },
      {
        q: "Qu'est-ce qu'un mouvement circulaire uniforme en orbite ?",
        r: "Le satellite se déplace à vitesse constante sur un cercle. La force gravitationnelle joue le rôle de force centripète."
      },
      {
        q: "Comment calcule-t-on la vitesse orbitale ?",
        r: "v = √(G·M/r). Plus l'orbite est haute (r grand), plus la vitesse est faible."
      },
      {
        q: "Qu'est-ce qu'un satellite géostationnaire ?",
        r: "Un satellite dont la période est 24 h, dans le plan équatorial. Il semble immobile vu de la Terre."
      },
      {
        q: "Comment relier période et rayon d'orbite circulaire ?",
        r: "T² = (4π²/G·M)·r³. C'est la 3ᵉ loi de Kepler appliquée aux orbites circulaires."
      },
      {
        q: "Que vaut l'accélération centripète sur une orbite circulaire ?",
        r: "a = v²/r = G·M/r². Elle est dirigée vers le centre de l'astre attracteur."
      },
      {
        q: "Pourquoi les astronautes semblent-ils en apesanteur dans l'ISS ?",
        r: "Ils sont en chute libre permanente autour de la Terre. La gravité existe mais ils « tombent » en même temps que la station."
      }
    ],
    qcm: [
      {
        question: "Selon la 1ʳᵉ loi de Kepler, la trajectoire d'une planète est :",
        options: ["Une ellipse avec le Soleil à un foyer", "Un cercle centré sur le Soleil", "Une parabole", "Une hyperbole"],
        correct: 0,
        explication: "Kepler 1 : les orbites sont des ellipses, le Soleil est à l'un des foyers."
      },
      {
        question: "La 3ᵉ loi de Kepler s'écrit :",
        options: ["T²/a³ = constante", "T/a² = constante", "T²/a² = constante", "T³/a² = constante"],
        correct: 0,
        explication: "T² est proportionnel à a³. Le rapport T²/a³ est le même pour tous les satellites d'un même astre."
      },
      {
        question: "La vitesse orbitale d'un satellite en orbite circulaire est :",
        options: ["v = √(GM/r)", "v = GM/r", "v = √(GM·r)", "v = GM/r²"],
        correct: 0,
        explication: "On égalise force gravitationnelle et force centripète : GMm/r² = mv²/r, d'où v = √(GM/r)."
      },
      {
        question: "Un satellite géostationnaire a une période de :",
        options: ["24 heures", "12 heures", "1 heure", "1 an"],
        correct: 0,
        explication: "Sa période est exactement celle de la rotation terrestre : 24 h (≈ 86 400 s). Il reste fixe vu du sol."
      },
      {
        question: "Quand on double le rayon d'orbite, la vitesse orbitale :",
        options: ["Diminue (divisée par √2)", "Double", "Reste identique", "Est divisée par 4"],
        correct: 0,
        explication: "v = √(GM/r). Si r double, v est divisée par √2 ≈ 1,41."
      },
      {
        question: "La force gravitationnelle entre deux corps est :",
        options: ["Toujours attractive", "Toujours répulsive", "Attractive ou répulsive", "Nulle dans l'espace"],
        correct: 0,
        explication: "La gravitation est toujours attractive. Elle attire les masses l'une vers l'autre."
      },
      {
        question: "L'accélération gravitationnelle à la distance r du centre de la Terre vaut :",
        options: ["g = GM/r²", "g = GM/r", "g = GM·r²", "g = GM·r"],
        correct: 0,
        explication: "De F = GMm/r² et F = mg, on tire g = GM/r². Elle diminue en 1/r²."
      }
    ],
    fiche: {
      page1_intro: {
        titre: "Introduction",
        texte: "Ce chapitre explique le mouvement des planètes et des satellites grâce à la gravitation. Kepler a observé les orbites, Newton a expliqué pourquoi grâce à la force gravitationnelle en 1/r². En gros : les planètes tournent autour du Soleil car la gravité les « tire » en permanence. Un satellite en orbite est en chute libre perpétuelle autour de la Terre.",
        points_cles: [
          "Les trois lois de Kepler décrivent les orbites des planètes",
          "La force gravitationnelle F = GMm/r² explique les lois de Kepler",
          "Pour une orbite circulaire : la gravité = force centripète",
          "La vitesse orbitale diminue quand le rayon augmente",
          "Un satellite géostationnaire a T = 24 h dans le plan équatorial",
          "T² = (4π²/GM)·r³ relie période et rayon",
          "L'accélération centripète vaut v²/r = GM/r²",
          "L'apesanteur en orbite est une chute libre permanente"
        ]
      },
      page2_concepts: {
        titre: "Concepts clés",
        concepts: [
          {
            terme: "Force gravitationnelle",
            definition: "F = G·M·m/r². Force attractive entre deux masses, proportionnelle aux masses et inversement proportionnelle au carré de la distance."
          },
          {
            terme: "Loi des orbites (Kepler 1)",
            definition: "Les planètes décrivent des ellipses dont le Soleil est un foyer. Le cercle est un cas particulier d'ellipse."
          },
          {
            terme: "Loi des aires (Kepler 2)",
            definition: "Le rayon vecteur balaie des aires égales en temps égaux. La planète accélère au périhélie (point le plus proche)."
          },
          {
            terme: "Loi des périodes (Kepler 3)",
            definition: "T²/a³ = constante = 4π²/(GM). Relie la période orbitale au demi-grand axe de l'orbite."
          },
          {
            terme: "Vitesse orbitale",
            definition: "v = √(GM/r). Vitesse d'un satellite en orbite circulaire de rayon r autour d'un astre de masse M."
          },
          {
            terme: "Satellite géostationnaire",
            definition: "Satellite en orbite équatoriale circulaire avec T = 24 h. Il paraît immobile depuis le sol terrestre."
          },
          {
            terme: "Accélération centripète",
            definition: "a = v²/r, dirigée vers le centre de l'astre. Elle courbe la trajectoire du satellite."
          },
          {
            terme: "Constante gravitationnelle G",
            definition: "G = 6,674 × 10⁻¹¹ N·m²·kg⁻². Constante universelle mesurant l'intensité de la gravitation."
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
            nom: "Force gravitationnelle",
            formule: "F = G·M·m / r²",
            explication: "Force attractive entre deux masses M et m séparées de r. G ≈ 6,67 × 10⁻¹¹."
          },
          {
            nom: "Vitesse orbitale",
            formule: "v = √(G·M / r)",
            explication: "Vitesse d'un satellite en orbite circulaire de rayon r. Plus r est grand, plus v est petit."
          },
          {
            nom: "Troisième loi de Kepler",
            formule: "T² = (4π² / G·M) · r³",
            explication: "Relie période T et rayon r pour une orbite circulaire autour d'un astre de masse M."
          },
          {
            nom: "Accélération gravitationnelle",
            formule: "g = G·M / r²",
            explication: "Accélération due à la gravité à la distance r du centre de l'astre de masse M."
          },
          {
            nom: "Périmètre orbital",
            formule: "v = 2πr / T",
            explication: "Relation cinématique pour un mouvement circulaire uniforme. Permet de relier v, r et T."
          },
          {
            nom: "Accélération centripète",
            formule: "a = v² / r = ω²·r",
            explication: "Accélération dirigée vers le centre. ω = 2π/T est la vitesse angulaire."
          }
        ]
      },
      page5_resume: {
        titre: "Résumé",
        resume: "Les lois de Kepler décrivent les orbites : ellipses (K1), aires égales (K2), T²/a³ = cte (K3). La force gravitationnelle F = GMm/r² explique ces lois. En orbite circulaire, v = √(GM/r) et T² = (4π²/GM)·r³. Un satellite géostationnaire (T = 24 h) reste fixe dans le ciel. L'apesanteur en orbite n'est pas l'absence de gravité mais une chute libre permanente.",
        points_importants: [
          "F = GMm/r² : la gravité diminue en 1/r²",
          "v = √(GM/r) : plus l'orbite est haute, plus le satellite est lent",
          "T² ∝ r³ : période et rayon liés par la 3ᵉ loi de Kepler",
          "Géostationnaire : T = 24 h, plan équatorial, altitude ≈ 36 000 km"
        ],
        pieges_courants: [
          "Confondre r (distance au centre) et h (altitude depuis la surface) : r = R_Terre + h",
          "Oublier que G est très petit (10⁻¹¹), la gravité est faible entre petits objets",
          "Croire que l'apesanteur signifie absence de gravité",
          "Confondre demi-grand axe a et rayon r (identiques seulement pour un cercle)"
        ]
      }
    }
  },

  // ═══════════════════════════════════════════════════════════════
  // CHAPITRE 4 — Modélisation de l'écoulement d'un fluide
  // ═══════════════════════════════════════════════════════════════
  {
    id: "term-physique-chimie-ch4",
    titre: "Modélisation de l'écoulement d'un fluide",
    emoji: "💧",
    nouveau: false,
    flashcardsData: [
      {
        q: "Qu'est-ce que la pression dans un fluide au repos ?",
        r: "P = F/S. C'est la force par unité de surface exercée par le fluide. Unité : Pascal (Pa)."
      },
      {
        q: "Comment varie la pression avec la profondeur (fluide incompressible) ?",
        r: "P = P₀ + ρ·g·h. La pression augmente linéairement avec la profondeur h."
      },
      {
        q: "Qu'est-ce que la poussée d'Archimède ?",
        r: "Force verticale vers le haut : Π = ρ_fluide · g · V_immergé. Un objet plongé dans un fluide subit une poussée égale au poids du fluide déplacé."
      },
      {
        q: "Quand un objet flotte-t-il ?",
        r: "Quand sa masse volumique est inférieure à celle du fluide. En gros : léger = ça flotte, lourd = ça coule."
      },
      {
        q: "Qu'est-ce qu'une ligne de courant ?",
        r: "Courbe tangente au vecteur vitesse du fluide en tout point. En régime permanent, c'est la trajectoire des particules."
      },
      {
        q: "Comment s'exprime le débit volumique ?",
        r: "D = S·v (section × vitesse). En m³/s. Le débit est constant dans un tube de courant (conservation de la masse)."
      },
      {
        q: "Que dit le théorème de Bernoulli ?",
        r: "P + ½ρv² + ρgh = constante le long d'une ligne de courant pour un fluide parfait incompressible en régime permanent."
      },
      {
        q: "Qu'est-ce que le tube de Torricelli ?",
        r: "Un réservoir percé d'un trou : la vitesse de sortie est v = √(2gh). Plus le niveau est haut, plus le jet est rapide."
      },
      {
        q: "Qu'est-ce que l'effet Venturi ?",
        r: "Quand la section d'un tube diminue, la vitesse augmente et la pression diminue. C'est Bernoulli en action."
      },
      {
        q: "Qu'est-ce qu'un fluide parfait incompressible ?",
        r: "Un fluide sans viscosité (pas de frottements internes) et de masse volumique constante (ne se comprime pas)."
      }
    ],
    qcm: [
      {
        question: "La pression dans un fluide au repos augmente avec :",
        options: ["La profondeur", "La température", "La surface du récipient", "La vitesse du fluide"],
        correct: 0,
        explication: "P = P₀ + ρgh. Plus on descend (h augmente), plus la pression est grande."
      },
      {
        question: "La poussée d'Archimède dépend de :",
        options: ["La masse volumique du fluide et du volume immergé", "La masse de l'objet", "La forme de l'objet", "La profondeur de l'objet"],
        correct: 0,
        explication: "Π = ρ_fluide · g · V_immergé. Elle ne dépend pas de la masse ni de la forme de l'objet."
      },
      {
        question: "Le débit volumique D s'exprime par :",
        options: ["D = S × v", "D = S / v", "D = m × v", "D = P × S"],
        correct: 0,
        explication: "Débit volumique = section × vitesse. Conservation de la masse : D₁ = D₂ dans un tube."
      },
      {
        question: "Dans l'effet Venturi, quand la section diminue :",
        options: ["La vitesse augmente et la pression diminue", "La vitesse et la pression augmentent", "La vitesse diminue et la pression augmente", "Rien ne change"],
        correct: 0,
        explication: "Conservation du débit : S↓ donc v↑. Par Bernoulli : v↑ donc P↓."
      },
      {
        question: "Le théorème de Bernoulli s'applique à :",
        options: ["Un fluide parfait, incompressible, en régime permanent", "Tout fluide", "Un fluide visqueux uniquement", "Un fluide compressible"],
        correct: 0,
        explication: "Bernoulli nécessite : fluide parfait (pas de viscosité), incompressible (ρ constante), régime permanent."
      },
      {
        question: "La vitesse de sortie dans le tube de Torricelli vaut :",
        options: ["v = √(2gh)", "v = 2gh", "v = √(gh)", "v = gh"],
        correct: 0,
        explication: "Application de Bernoulli entre la surface et le trou : v = √(2gh) avec h la hauteur d'eau."
      },
      {
        question: "Un objet flotte si :",
        options: ["Sa masse volumique est inférieure à celle du fluide", "Sa masse est faible", "Sa surface est grande", "Il est creux"],
        correct: 0,
        explication: "Flottaison : ρ_objet < ρ_fluide. La poussée d'Archimède compense le poids."
      }
    ],
    fiche: {
      page1_intro: {
        titre: "Introduction",
        texte: "Ce chapitre modélise l'écoulement des fluides (liquides et gaz). Pourquoi un bateau flotte ? Pourquoi l'eau sort plus vite d'un tuyau étroit ? La poussée d'Archimède explique la flottaison, Bernoulli explique les variations de pression dans un fluide en mouvement. En gros : quand un fluide accélère, sa pression baisse. C'est le principe de l'aile d'avion et du parfumiseur.",
        points_cles: [
          "La pression augmente avec la profondeur : P = P₀ + ρgh",
          "Poussée d'Archimède : Π = ρ·g·V immergé, vers le haut",
          "Conservation du débit : S₁v₁ = S₂v₂",
          "Bernoulli : P + ½ρv² + ρgh = constante",
          "Effet Venturi : section ↓ → vitesse ↑ → pression ↓",
          "Torricelli : v = √(2gh) pour un écoulement par un orifice",
          "Un fluide parfait n'a pas de viscosité",
          "Le régime permanent signifie que les grandeurs ne varient pas dans le temps"
        ]
      },
      page2_concepts: {
        titre: "Concepts clés",
        concepts: [
          {
            terme: "Pression hydrostatique",
            definition: "P = P₀ + ρgh. Pression dans un fluide au repos. Elle augmente avec la profondeur h."
          },
          {
            terme: "Poussée d'Archimède",
            definition: "Π = ρ_fluide · g · V_immergé. Force verticale ascendante subie par tout corps immergé dans un fluide."
          },
          {
            terme: "Ligne de courant",
            definition: "Courbe tangente au vecteur vitesse en chaque point. En régime permanent, les particules suivent les lignes de courant."
          },
          {
            terme: "Débit volumique",
            definition: "D = S·v en m³/s. Volume de fluide traversant une section S par unité de temps."
          },
          {
            terme: "Théorème de Bernoulli",
            definition: "P + ½ρv² + ρgh = cte le long d'une ligne de courant. Conservation de l'énergie pour un fluide parfait."
          },
          {
            terme: "Effet Venturi",
            definition: "Baisse de pression dans un rétrécissement de tube. La vitesse augmente et la pression diminue."
          },
          {
            terme: "Tube de Torricelli",
            definition: "Écoulement d'un réservoir par un trou. Vitesse de sortie v = √(2gh) déduite de Bernoulli."
          },
          {
            terme: "Fluide parfait incompressible",
            definition: "Modèle idéal : pas de viscosité (frottements nuls) et masse volumique constante (pas de compression)."
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
            nom: "Pression hydrostatique",
            formule: "P = P₀ + ρ·g·h",
            explication: "P₀ pression en surface, ρ masse volumique, h profondeur. En Pa."
          },
          {
            nom: "Poussée d'Archimède",
            formule: "Π = ρ_fluide · g · V_immergé",
            explication: "Force vers le haut sur un corps immergé. Égale au poids du fluide déplacé."
          },
          {
            nom: "Conservation du débit",
            formule: "S₁ · v₁ = S₂ · v₂",
            explication: "Le débit est constant dans un tube de courant. Si S diminue, v augmente."
          },
          {
            nom: "Théorème de Bernoulli",
            formule: "P + ½ρv² + ρgh = constante",
            explication: "Conservation de l'énergie par unité de volume le long d'une ligne de courant."
          },
          {
            nom: "Vitesse de Torricelli",
            formule: "v = √(2gh)",
            explication: "Vitesse d'écoulement par un orifice situé à une profondeur h sous la surface."
          },
          {
            nom: "Pression dynamique",
            formule: "P_dyn = ½ρv²",
            explication: "Terme de pression lié à la vitesse dans l'équation de Bernoulli."
          }
        ]
      },
      page5_resume: {
        titre: "Résumé",
        resume: "La statique des fluides repose sur P = P₀ + ρgh et la poussée d'Archimède Π = ρgV. En dynamique, on utilise la conservation du débit (S₁v₁ = S₂v₂) et le théorème de Bernoulli (P + ½ρv² + ρgh = cte). L'effet Venturi montre qu'un rétrécissement accélère le fluide et diminue la pression. Le tube de Torricelli donne v = √(2gh).",
        points_importants: [
          "Bernoulli n'est valable que pour un fluide parfait incompressible en régime permanent",
          "Conservation du débit : si la section diminue, la vitesse augmente",
          "La poussée d'Archimède ne dépend pas de la masse de l'objet",
          "Toujours définir les points 1 et 2 sur la même ligne de courant"
        ],
        pieges_courants: [
          "Oublier la pression atmosphérique P₀ dans le calcul de la pression totale",
          "Confondre la masse volumique du fluide et celle de l'objet pour Archimède",
          "Appliquer Bernoulli hors des conditions de validité (viscosité, compressibilité)",
          "Oublier le terme ρgh dans Bernoulli quand les altitudes diffèrent"
        ]
      }
    }
  },

  // ═══════════════════════════════════════════════════════════════
  // CHAPITRE 5 — Énergie interne et 1er principe de thermodynamique
  // ═══════════════════════════════════════════════════════════════
  {
    id: "term-physique-chimie-ch5",
    titre: "Énergie interne et 1er principe de thermodynamique",
    emoji: "🔥",
    nouveau: false,
    flashcardsData: [
      {
        q: "Qu'est-ce que le modèle du gaz parfait ?",
        r: "Un gaz dont les molécules n'interagissent pas entre elles (pas de forces intermoléculaires) et qui obéit à PV = nRT."
      },
      {
        q: "Comment s'écrit la loi des gaz parfaits ?",
        r: "PV = nRT. P en Pa, V en m³, n en mol, R = 8,314 J/(mol·K), T en Kelvin."
      },
      {
        q: "Qu'est-ce que l'énergie interne U ?",
        r: "L'énergie totale des molécules (agitation thermique). Pour un gaz parfait monoatomique : U = 3/2 · nRT."
      },
      {
        q: "Que représente le travail W en thermodynamique ?",
        r: "L'énergie échangée par des forces de pression. W = −P_ext · ΔV pour une transformation à pression extérieure constante."
      },
      {
        q: "Que représente la chaleur Q ?",
        r: "L'énergie échangée par transfert thermique (différence de température). Q > 0 si le système reçoit de la chaleur."
      },
      {
        q: "Comment s'énonce le 1er principe de la thermodynamique ?",
        r: "ΔU = W + Q. La variation d'énergie interne égale le travail plus la chaleur reçus par le système."
      },
      {
        q: "Qu'est-ce que la capacité thermique C ?",
        r: "Q = C · ΔT. C traduit la capacité du corps à stocker de la chaleur. Plus C est grand, plus il faut d'énergie pour le chauffer."
      },
      {
        q: "Qu'est-ce qu'une transformation isotherme ?",
        r: "Transformation à température constante (ΔT = 0). Pour un gaz parfait : ΔU = 0 donc W = −Q."
      },
      {
        q: "Qu'est-ce qu'une transformation isochore ?",
        r: "Transformation à volume constant (ΔV = 0). Donc W = 0 et ΔU = Q."
      },
      {
        q: "Qu'est-ce qu'une transformation adiabatique ?",
        r: "Transformation sans échange de chaleur (Q = 0). Donc ΔU = W."
      }
    ],
    qcm: [
      {
        question: "La loi des gaz parfaits s'écrit :",
        options: ["PV = nRT", "PV = mRT", "PT = nRV", "P = nRT/m"],
        correct: 0,
        explication: "PV = nRT avec P en Pa, V en m³, n en mol, R = 8,314 J/(mol·K), T en K."
      },
      {
        question: "Le 1er principe de la thermodynamique s'écrit :",
        options: ["ΔU = W + Q", "ΔU = W − Q", "ΔU = Q/W", "ΔU = W × Q"],
        correct: 0,
        explication: "L'énergie interne varie de la somme du travail et de la chaleur reçus."
      },
      {
        question: "Pour une transformation isochore (volume constant) :",
        options: ["W = 0 et ΔU = Q", "Q = 0 et ΔU = W", "ΔU = 0 et W = −Q", "W = Q"],
        correct: 0,
        explication: "Volume constant → pas de travail des forces de pression (W = 0), donc ΔU = Q."
      },
      {
        question: "L'énergie interne d'un gaz parfait monoatomique vaut :",
        options: ["U = 3/2 nRT", "U = nRT", "U = 5/2 nRT", "U = PV"],
        correct: 0,
        explication: "Pour un gaz parfait monoatomique, U = 3/2 nRT. Elle ne dépend que de T."
      },
      {
        question: "La constante R des gaz parfaits vaut environ :",
        options: ["8,314 J/(mol·K)", "1,38 × 10⁻²³ J/K", "6,022 × 10²³ mol⁻¹", "6,67 × 10⁻¹¹ N·m²/kg²"],
        correct: 0,
        explication: "R = 8,314 J/(mol·K) est la constante universelle des gaz parfaits."
      },
      {
        question: "Pour une transformation adiabatique :",
        options: ["Q = 0 et ΔU = W", "W = 0 et ΔU = Q", "ΔU = 0", "Q = W"],
        correct: 0,
        explication: "Adiabatique = pas d'échange de chaleur (Q = 0). Toute l'énergie vient du travail."
      },
      {
        question: "Lors d'une compression à pression extérieure constante, le travail W reçu par le gaz est :",
        options: ["Positif (le gaz reçoit de l'énergie)", "Négatif", "Nul", "Dépend de la température"],
        correct: 0,
        explication: "W = −P_ext · ΔV. En compression ΔV < 0, donc W > 0 : le gaz reçoit de l'énergie."
      }
    ],
    fiche: {
      page1_intro: {
        titre: "Introduction",
        texte: "La thermodynamique étudie les échanges d'énergie entre un système et son environnement. Imagine une pompe à vélo : en comprimant l'air, tu fournis du travail et l'air chauffe. Le 1er principe dit que l'énergie ne se crée ni ne se détruit, elle se transforme. En gros : ΔU = W + Q, l'énergie interne change grâce au travail et à la chaleur.",
        points_cles: [
          "Le gaz parfait obéit à PV = nRT",
          "L'énergie interne U dépend uniquement de la température pour un gaz parfait",
          "Le 1er principe : ΔU = W + Q (conservation de l'énergie)",
          "W = −P_ext · ΔV pour une transformation à pression extérieure constante",
          "Q = C · ΔT pour un transfert de chaleur simple",
          "Transformation isotherme : T constante, ΔU = 0",
          "Transformation isochore : V constant, W = 0",
          "Transformation adiabatique : Q = 0, ΔU = W"
        ]
      },
      page2_concepts: {
        titre: "Concepts clés",
        concepts: [
          {
            terme: "Gaz parfait",
            definition: "Modèle idéal de gaz : molécules ponctuelles sans interaction. Obéit à PV = nRT."
          },
          {
            terme: "Énergie interne U",
            definition: "Somme des énergies cinétiques microscopiques (agitation thermique). Pour un gaz parfait monoatomique : U = 3/2 nRT."
          },
          {
            terme: "Travail W",
            definition: "Énergie échangée par des forces de pression. W = −P_ext · ΔV. Positif si le gaz est comprimé."
          },
          {
            terme: "Chaleur Q",
            definition: "Énergie échangée par transfert thermique. Q > 0 si le système reçoit de la chaleur."
          },
          {
            terme: "1er principe",
            definition: "ΔU = W + Q. Conservation de l'énergie : toute énergie reçue (travail ou chaleur) augmente U."
          },
          {
            terme: "Capacité thermique",
            definition: "C = Q/ΔT. Énergie nécessaire pour élever la température de 1 K. En J/K."
          },
          {
            terme: "Transformation isobare",
            definition: "Transformation à pression constante (P = cte). Le travail vaut W = −P · ΔV."
          },
          {
            terme: "Transformation isotherme",
            definition: "Transformation à température constante (T = cte). Pour un gaz parfait : ΔU = 0."
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
            nom: "Loi des gaz parfaits",
            formule: "PV = nRT",
            explication: "Relie pression, volume, quantité de matière et température. R = 8,314 J/(mol·K)."
          },
          {
            nom: "1er principe de la thermodynamique",
            formule: "ΔU = W + Q",
            explication: "La variation d'énergie interne = travail + chaleur reçus par le système."
          },
          {
            nom: "Travail des forces de pression",
            formule: "W = −P_ext · ΔV",
            explication: "À pression extérieure constante. W > 0 en compression (ΔV < 0)."
          },
          {
            nom: "Énergie interne (gaz parfait monoatomique)",
            formule: "U = 3/2 · nRT",
            explication: "Ne dépend que de T. Augmente si T augmente."
          },
          {
            nom: "Chaleur échangée",
            formule: "Q = C · ΔT",
            explication: "C est la capacité thermique du système. Q en Joules, ΔT en Kelvin."
          },
          {
            nom: "Capacité thermique massique",
            formule: "Q = m · c · ΔT",
            explication: "c est la capacité thermique massique (J/(kg·K)). Pour l'eau : c ≈ 4180 J/(kg·K)."
          }
        ]
      },
      page5_resume: {
        titre: "Résumé",
        resume: "Le 1er principe ΔU = W + Q est la conservation de l'énergie en thermodynamique. Le gaz parfait obéit à PV = nRT et son énergie interne ne dépend que de T. Le travail W = −P_ext·ΔV traduit l'échange via les forces de pression. La chaleur Q = C·ΔT traduit l'échange thermique. Les transformations particulières (isotherme, isochore, adiabatique, isobare) simplifient les calculs.",
        points_importants: [
          "PV = nRT : T en Kelvin obligatoirement",
          "ΔU = W + Q : convention de signe = « reçu par le système »",
          "Pour un gaz parfait, U ne dépend que de T",
          "Identifier le type de transformation pour simplifier le calcul"
        ],
        pieges_courants: [
          "Oublier de convertir T en Kelvin (K = °C + 273)",
          "Confondre les conventions de signe pour W et Q",
          "Oublier que ΔU = 0 pour un gaz parfait isotherme (pas pour tout système !)",
          "Confondre capacité thermique C (en J/K) et capacité thermique massique c (en J/(kg·K))"
        ]
      }
    }
  },

  // ═══════════════════════════════════════════════════════════════
  // CHAPITRE 6 — Transferts thermiques
  // ═══════════════════════════════════════════════════════════════
  {
    id: "term-physique-chimie-ch6",
    titre: "Transferts thermiques",
    emoji: "🌡️",
    nouveau: false,
    flashcardsData: [
      {
        q: "Quels sont les trois modes de transfert thermique ?",
        r: "Conduction (contact), convection (mouvement du fluide) et rayonnement (ondes électromagnétiques)."
      },
      {
        q: "Qu'est-ce que la conduction thermique ?",
        r: "Transfert de chaleur de proche en proche dans un matériau sans déplacement de matière. Comme la chaleur qui traverse un mur."
      },
      {
        q: "Qu'est-ce que la convection ?",
        r: "Transfert de chaleur par mouvement du fluide (air chaud qui monte par exemple). Le fluide transporte l'énergie."
      },
      {
        q: "Qu'est-ce que le rayonnement thermique ?",
        r: "Transfert de chaleur par émission d'ondes électromagnétiques (infrarouges). Pas besoin de matière (fonctionne dans le vide)."
      },
      {
        q: "Comment s'exprime le flux thermique ?",
        r: "Φ = ΔT / R_th. C'est la puissance thermique (en Watts) traversant une paroi. ΔT = différence de température, R_th = résistance thermique."
      },
      {
        q: "Qu'est-ce que la résistance thermique ?",
        r: "R_th = e / (λ·S). Elle mesure la capacité d'une paroi à s'opposer au flux de chaleur. Plus R_th est grand, meilleur est l'isolant."
      },
      {
        q: "Qu'est-ce que la conductivité thermique λ ?",
        r: "Capacité d'un matériau à conduire la chaleur. En W/(m·K). Grand λ = bon conducteur (métal). Petit λ = bon isolant (laine)."
      },
      {
        q: "Comment s'écrit la loi de Stefan-Boltzmann ?",
        r: "P = σ · S · T⁴. La puissance rayonnée dépend de T à la puissance 4. σ ≈ 5,67 × 10⁻⁸ W/(m²·K⁴)."
      },
      {
        q: "Qu'est-ce que la loi de Newton pour le refroidissement ?",
        r: "Φ = h · S · (T_paroi − T_fluide). h est le coefficient de transfert conducto-convectif. Le flux est proportionnel à l'écart de température."
      },
      {
        q: "Que modélise le transfert conducto-convectif ?",
        r: "Le transfert thermique entre une paroi solide et un fluide en mouvement. Combine conduction à la surface et convection dans le fluide."
      }
    ],
    qcm: [
      {
        question: "Quel mode de transfert thermique fonctionne dans le vide ?",
        options: ["Le rayonnement", "La conduction", "La convection", "Aucun des trois"],
        correct: 0,
        explication: "Le rayonnement utilise des ondes électromagnétiques : pas besoin de matière. C'est ainsi que le Soleil nous chauffe."
      },
      {
        question: "La résistance thermique d'une paroi plane vaut :",
        options: ["R_th = e / (λ·S)", "R_th = λ·S / e", "R_th = e·S / λ", "R_th = λ / (e·S)"],
        correct: 0,
        explication: "R_th = e/(λS) avec e l'épaisseur, λ la conductivité et S la surface."
      },
      {
        question: "La loi de Stefan-Boltzmann dit que la puissance rayonnée est proportionnelle à :",
        options: ["T⁴", "T²", "T", "T³"],
        correct: 0,
        explication: "P = σ·S·T⁴. La puissance rayonnée croît très vite avec la température."
      },
      {
        question: "La conduction thermique se fait :",
        options: ["De proche en proche sans déplacement de matière", "Par mouvement du fluide", "Par ondes électromagnétiques", "Uniquement dans les gaz"],
        correct: 0,
        explication: "La conduction est un transfert par agitation moléculaire de proche en proche, sans mouvement macroscopique."
      },
      {
        question: "Un bon isolant thermique a :",
        options: ["Une grande résistance thermique (petit λ)", "Une petite résistance thermique (grand λ)", "Une grande conductivité", "Une faible épaisseur"],
        correct: 0,
        explication: "Isolant = petit λ = grand R_th. La chaleur passe difficilement."
      },
      {
        question: "Le flux thermique Φ s'exprime en :",
        options: ["Watts (W)", "Joules (J)", "Kelvin (K)", "m²·K/W"],
        correct: 0,
        explication: "Φ est une puissance thermique (énergie par unité de temps), donc en Watts."
      },
      {
        question: "La convection est :",
        options: ["Naturelle (gravité) ou forcée (ventilateur)", "Uniquement naturelle", "Uniquement dans les solides", "Indépendante de la gravité"],
        correct: 0,
        explication: "Convection naturelle : l'air chaud monte. Convection forcée : ventilateur, pompe. Les deux existent."
      }
    ],
    fiche: {
      page1_intro: {
        titre: "Introduction",
        texte: "Les transferts thermiques expliquent comment la chaleur se propage. Trois modes existent : conduction (chaleur dans un mur), convection (air chaud qui monte) et rayonnement (chaleur du Soleil dans le vide). En gros : la chaleur va toujours du chaud vers le froid, et on peut quantifier ce flux. L'isolation thermique d'une maison repose sur ces principes.",
        points_cles: [
          "Trois modes : conduction, convection, rayonnement",
          "Le flux thermique Φ = ΔT / R_th (analogie électrique)",
          "Résistance thermique : R_th = e/(λ·S)",
          "Conductivité thermique λ : petit = isolant, grand = conducteur",
          "Stefan-Boltzmann : P = σ·S·T⁴ pour le rayonnement",
          "Loi de Newton : Φ = h·S·(T_paroi − T_fluide)",
          "La chaleur va toujours du chaud vers le froid",
          "Les résistances thermiques s'additionnent en série"
        ]
      },
      page2_concepts: {
        titre: "Concepts clés",
        concepts: [
          {
            terme: "Conduction thermique",
            definition: "Transfert de chaleur par contact, sans mouvement de matière. Décrit par la loi de Fourier : Φ = λ·S·ΔT/e."
          },
          {
            terme: "Convection",
            definition: "Transfert par mouvement du fluide. Naturelle (différence de densité) ou forcée (ventilateur, pompe)."
          },
          {
            terme: "Rayonnement thermique",
            definition: "Émission d'ondes électromagnétiques (IR). Seul mode fonctionnant dans le vide. P = σ·S·T⁴."
          },
          {
            terme: "Flux thermique Φ",
            definition: "Puissance thermique en Watts. Φ = ΔT/R_th, analogue au courant I = U/R en électricité."
          },
          {
            terme: "Résistance thermique R_th",
            definition: "R_th = e/(λ·S) en K/W. Plus elle est grande, meilleur est l'isolant. S'additionne en série."
          },
          {
            terme: "Conductivité thermique λ",
            definition: "En W/(m·K). Cuivre ≈ 400 (conducteur), laine de verre ≈ 0,04 (isolant)."
          },
          {
            terme: "Coefficient conducto-convectif h",
            definition: "En W/(m²·K). Caractérise l'échange thermique entre une paroi et un fluide en mouvement."
          },
          {
            terme: "Constante de Stefan-Boltzmann σ",
            definition: "σ = 5,67 × 10⁻⁸ W/(m²·K⁴). Constante fondamentale du rayonnement thermique."
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
            nom: "Flux thermique par conduction",
            formule: "Φ = λ · S · ΔT / e = ΔT / R_th",
            explication: "λ conductivité, S surface, e épaisseur, ΔT écart de température."
          },
          {
            nom: "Résistance thermique",
            formule: "R_th = e / (λ · S)",
            explication: "En K/W. Analogue à une résistance électrique. Plusieurs couches : R_total = R₁ + R₂ + ..."
          },
          {
            nom: "Loi de Stefan-Boltzmann",
            formule: "P = σ · S · T⁴",
            explication: "Puissance rayonnée par un corps noir. σ ≈ 5,67 × 10⁻⁸. T en Kelvin."
          },
          {
            nom: "Loi de Newton (conducto-convectif)",
            formule: "Φ = h · S · (T_paroi − T_fluide)",
            explication: "h coefficient de transfert, S surface d'échange. Proportionnel à l'écart de température."
          },
          {
            nom: "Résistance thermique conducto-convective",
            formule: "R_th = 1 / (h · S)",
            explication: "Résistance thermique associée à l'échange paroi-fluide."
          },
          {
            nom: "Énergie thermique échangée",
            formule: "Q = Φ · Δt",
            explication: "Énergie = puissance × durée. Q en Joules, Φ en Watts, Δt en secondes."
          }
        ]
      },
      page5_resume: {
        titre: "Résumé",
        resume: "Trois modes de transfert : conduction (solides, contact), convection (fluides en mouvement), rayonnement (ondes EM, vide possible). Le flux Φ = ΔT/R_th avec R_th = e/(λS). La loi de Stefan donne P = σST⁴ pour le rayonnement. La loi de Newton donne Φ = hS(T_paroi − T_fluide) pour la convection. L'analogie avec l'électricité (Φ↔I, ΔT↔U, R_th↔R) simplifie les calculs.",
        points_importants: [
          "Conduction : de proche en proche, sans mouvement de matière",
          "Convection : le fluide transporte la chaleur",
          "Rayonnement : seul mode dans le vide, P ∝ T⁴",
          "Les résistances thermiques en série s'additionnent"
        ],
        pieges_courants: [
          "Oublier de convertir T en Kelvin pour Stefan-Boltzmann",
          "Confondre flux (puissance en W) et énergie (Q en J)",
          "Confondre conduction et convection dans les fluides",
          "Oublier d'additionner les résistances thermiques des différentes couches"
        ]
      }
    }
  },

  // ═══════════════════════════════════════════════════════════════
  // CHAPITRE 7 — Le son et l'effet Doppler
  // ═══════════════════════════════════════════════════════════════
  {
    id: "term-physique-chimie-ch7",
    titre: "Le son et l'effet Doppler",
    emoji: "🔊",
    nouveau: false,
    flashcardsData: [
      {
        q: "Qu'est-ce qu'une onde sonore ?",
        r: "Une onde mécanique longitudinale de compression-dilatation du milieu. Elle a besoin d'un milieu matériel pour se propager (pas dans le vide)."
      },
      {
        q: "Comment calcule-t-on l'intensité sonore ?",
        r: "I = P / S en W/m². P est la puissance acoustique, S la surface sur laquelle elle se répartit."
      },
      {
        q: "Comment calcule-t-on le niveau sonore en décibels ?",
        r: "L = 10 · log(I/I₀) en dB. I₀ = 10⁻¹² W/m² est le seuil d'audibilité."
      },
      {
        q: "Quelle est la différence entre hauteur et timbre d'un son ?",
        r: "La hauteur est liée à la fréquence (aigu ou grave). Le timbre dépend des harmoniques (distingue une guitare d'un piano à même note)."
      },
      {
        q: "Qu'est-ce que l'atténuation d'un son ?",
        r: "La diminution de l'intensité sonore avec la distance. L'énergie se répartit sur une surface croissante (sphère : I ∝ 1/r²)."
      },
      {
        q: "Qu'est-ce que l'effet Doppler ?",
        r: "Le changement de fréquence perçue quand la source ou l'observateur se déplacent. En gros : ambulance qui approche = son aigu, qui s'éloigne = son grave."
      },
      {
        q: "Comment s'écrit la formule de l'effet Doppler (source se rapprochant) ?",
        r: "f_perçue = f_émise · v / (v − v_source). La fréquence perçue est plus élevée quand la source approche."
      },
      {
        q: "L'effet Doppler fonctionne-t-il aussi avec la lumière ?",
        r: "Oui ! Décalage vers le bleu (blueshift) si la source approche, vers le rouge (redshift) si elle s'éloigne. Utilisé en astrophysique."
      },
      {
        q: "Quelle est l'application médicale de l'effet Doppler ?",
        r: "L'échographie Doppler mesure la vitesse du sang dans les vaisseaux grâce au décalage de fréquence des ultrasons réfléchis."
      },
      {
        q: "Quel est l'ordre de grandeur de la vitesse du son dans l'air ?",
        r: "v ≈ 340 m/s à 20 °C. Elle augmente avec la température et dépend du milieu (plus rapide dans l'eau et les solides)."
      }
    ],
    qcm: [
      {
        question: "Le niveau sonore en dB se calcule par :",
        options: ["L = 10·log(I/I₀)", "L = 20·log(I/I₀)", "L = ln(I/I₀)", "L = I/I₀"],
        correct: 0,
        explication: "L = 10·log(I/I₀) avec I₀ = 10⁻¹² W/m² (seuil d'audibilité). En décibels."
      },
      {
        question: "L'effet Doppler provoque :",
        options: ["Un changement de fréquence perçue", "Un changement d'amplitude", "Un changement de vitesse du son", "Un écho"],
        correct: 0,
        explication: "L'effet Doppler modifie la fréquence perçue, pas l'amplitude ni la vitesse de propagation."
      },
      {
        question: "Quand une source sonore s'approche, la fréquence perçue est :",
        options: ["Plus élevée que la fréquence émise", "Plus basse", "Identique", "Variable"],
        correct: 0,
        explication: "Source qui approche : les fronts d'onde se rapprochent, la fréquence perçue augmente."
      },
      {
        question: "La vitesse du son dans l'air à 20 °C vaut environ :",
        options: ["340 m/s", "300 000 km/s", "1500 m/s", "1000 m/s"],
        correct: 0,
        explication: "v ≈ 340 m/s dans l'air à 20 °C. 1500 m/s dans l'eau, 300 000 km/s c'est la lumière !"
      },
      {
        question: "Le seuil d'audibilité I₀ vaut :",
        options: ["10⁻¹² W/m²", "10⁻⁶ W/m²", "1 W/m²", "10⁻³ W/m²"],
        correct: 0,
        explication: "I₀ = 10⁻¹² W/m² est la plus petite intensité perceptible par l'oreille humaine à 1 kHz."
      },
      {
        question: "La hauteur d'un son est déterminée par :",
        options: ["Sa fréquence", "Son amplitude", "Sa vitesse", "Son timbre"],
        correct: 0,
        explication: "Haute fréquence = son aigu. Basse fréquence = son grave. La hauteur = la fréquence."
      },
      {
        question: "En astrophysique, un décalage vers le rouge (redshift) signifie :",
        options: ["La source s'éloigne", "La source se rapproche", "La source est immobile", "La source est très chaude"],
        correct: 0,
        explication: "Redshift = fréquence perçue diminue = longueur d'onde augmente. La source s'éloigne de l'observateur."
      }
    ],
    fiche: {
      page1_intro: {
        titre: "Introduction",
        texte: "Le son est une onde mécanique qui a besoin d'un milieu pour se propager. L'intensité sonore diminue avec la distance. Le niveau sonore se mesure en décibels (échelle logarithmique). L'effet Doppler explique pourquoi une sirène d'ambulance semble plus aiguë quand elle approche et plus grave quand elle s'éloigne. En gros : si la source bouge, la fréquence perçue change.",
        points_cles: [
          "Le son est une onde mécanique longitudinale",
          "v_son ≈ 340 m/s dans l'air (ne se propage pas dans le vide)",
          "L = 10·log(I/I₀) en dB, échelle logarithmique",
          "Hauteur = fréquence, timbre = harmoniques",
          "Atténuation : I diminue en 1/r² (source ponctuelle)",
          "Effet Doppler : fréquence perçue ≠ fréquence émise si mouvement",
          "Applications : échographie, radar de vitesse, astrophysique",
          "Redshift (éloignement) et blueshift (rapprochement) en astronomie"
        ]
      },
      page2_concepts: {
        titre: "Concepts clés",
        concepts: [
          {
            terme: "Onde sonore",
            definition: "Onde mécanique longitudinale de compression-dilatation. Se propage dans les milieux matériels (air, eau, solide)."
          },
          {
            terme: "Intensité sonore I",
            definition: "Puissance par unité de surface en W/m². I = P/S. Diminue avec le carré de la distance."
          },
          {
            terme: "Niveau sonore L",
            definition: "L = 10·log(I/I₀) en dB. Échelle logarithmique. 0 dB = seuil d'audibilité, 120 dB = seuil de douleur."
          },
          {
            terme: "Hauteur d'un son",
            definition: "Liée à la fréquence fondamentale. Aigu = haute fréquence, grave = basse fréquence."
          },
          {
            terme: "Timbre",
            definition: "Caractère d'un son lié à la présence d'harmoniques. Permet de distinguer deux instruments jouant la même note."
          },
          {
            terme: "Effet Doppler",
            definition: "Modification de la fréquence perçue due au mouvement relatif source-observateur."
          },
          {
            terme: "Redshift / Blueshift",
            definition: "Décalage spectral vers le rouge (éloignement) ou le bleu (rapprochement). Utilisé en astrophysique."
          },
          {
            terme: "Échographie Doppler",
            definition: "Technique médicale utilisant le décalage Doppler des ultrasons pour mesurer la vitesse du sang."
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
            nom: "Niveau sonore",
            formule: "L = 10 · log(I / I₀)",
            explication: "En dB. I₀ = 10⁻¹² W/m². +10 dB = intensité ×10, +3 dB = intensité ×2."
          },
          {
            nom: "Intensité sonore",
            formule: "I = P / (4πr²)",
            explication: "Pour une source ponctuelle isotrope. L'énergie se répartit sur une sphère de rayon r."
          },
          {
            nom: "Effet Doppler (source mobile, observateur fixe)",
            formule: "f_perçue = f_émise · v / (v ∓ v_source)",
            explication: "− si la source approche (f↑), + si elle s'éloigne (f↓). v = vitesse du son."
          },
          {
            nom: "Effet Doppler (observateur mobile, source fixe)",
            formule: "f_perçue = f_émise · (v ± v_obs) / v",
            explication: "+ si l'observateur approche, − s'il s'éloigne."
          },
          {
            nom: "Relation fréquence-longueur d'onde",
            formule: "v = λ · f",
            explication: "v vitesse de propagation, λ longueur d'onde, f fréquence."
          },
          {
            nom: "Décalage Doppler relatif",
            formule: "Δf/f = v_source / v",
            explication: "Approximation pour v_source << v. Permet de calculer la vitesse de la source."
          }
        ]
      },
      page5_resume: {
        titre: "Résumé",
        resume: "Le son est une onde mécanique longitudinale (v ≈ 340 m/s dans l'air). L'intensité I = P/S diminue en 1/r². Le niveau L = 10·log(I/I₀) en dB est logarithmique. L'effet Doppler modifie la fréquence perçue quand source ou observateur bougent : f↑ si rapprochement, f↓ si éloignement. Applications : radar, échographie, mesure de vitesses stellaires (redshift).",
        points_importants: [
          "Le son ne se propage pas dans le vide",
          "+10 dB = intensité multipliée par 10",
          "Effet Doppler : la fréquence change, pas la vitesse du son",
          "Redshift = source qui s'éloigne, blueshift = source qui approche"
        ],
        pieges_courants: [
          "Confondre le signe dans la formule Doppler (approche vs éloignement)",
          "Oublier que L est logarithmique (doubler I n'ajoute que 3 dB)",
          "Confondre hauteur (fréquence) et intensité (amplitude/volume)",
          "Oublier I₀ = 10⁻¹² W/m² dans le calcul du niveau sonore"
        ]
      }
    }
  },

  // ═══════════════════════════════════════════════════════════════
  // CHAPITRE 8 — Diffraction et interférences
  // ═══════════════════════════════════════════════════════════════
  {
    id: "term-physique-chimie-ch8",
    titre: "Diffraction et interférences",
    emoji: "🌈",
    nouveau: false,
    flashcardsData: [
      {
        q: "Qu'est-ce que la diffraction ?",
        r: "L'étalement d'une onde lorsqu'elle rencontre un obstacle ou une ouverture de taille comparable à sa longueur d'onde."
      },
      {
        q: "Quelle est la condition pour observer la diffraction ?",
        r: "La taille de l'ouverture a doit être du même ordre de grandeur que la longueur d'onde λ (a ≈ λ)."
      },
      {
        q: "Comment calcule-t-on l'écart angulaire de diffraction ?",
        r: "θ = λ / a (en radians). Plus l'ouverture est petite, plus la diffraction est importante."
      },
      {
        q: "Qu'est-ce que des interférences constructives ?",
        r: "Quand deux ondes arrivent en phase : leurs amplitudes s'ajoutent. On observe un maximum d'intensité (frange brillante)."
      },
      {
        q: "Qu'est-ce que des interférences destructives ?",
        r: "Quand deux ondes arrivent en opposition de phase : leurs amplitudes s'annulent. On observe un minimum d'intensité (frange sombre)."
      },
      {
        q: "Qu'est-ce que l'expérience des trous de Young ?",
        r: "Deux fentes éclairées par une source cohérente produisent une figure d'interférences (franges alternées brillantes et sombres)."
      },
      {
        q: "Comment calcule-t-on l'interfrange i ?",
        r: "i = λ·D / a. λ = longueur d'onde, D = distance fentes-écran, a = distance entre les deux fentes."
      },
      {
        q: "Que signifie « cohérence » des sources ?",
        r: "Deux sources sont cohérentes si elles ont la même fréquence et un déphasage constant. Condition nécessaire pour des interférences stables."
      },
      {
        q: "Qu'est-ce que la différence de marche δ ?",
        r: "δ = d₂ − d₁, différence de chemin parcouru par les deux ondes. Interférence constructive si δ = k·λ (k entier)."
      },
      {
        q: "La diffraction modifie-t-elle la fréquence de l'onde ?",
        r: "Non. La diffraction change la direction de propagation mais pas la fréquence ni la longueur d'onde."
      }
    ],
    qcm: [
      {
        question: "La diffraction est maximale quand :",
        options: ["L'ouverture a est de l'ordre de λ", "L'ouverture est très grande devant λ", "L'ouverture est nulle", "La fréquence est très basse"],
        correct: 0,
        explication: "La diffraction est significative quand a ≈ λ. Si a >> λ, l'onde passe sans déformation."
      },
      {
        question: "L'écart angulaire de diffraction par une fente vaut :",
        options: ["θ = λ/a", "θ = a/λ", "θ = λ·a", "θ = a²/λ"],
        correct: 0,
        explication: "θ = λ/a en radians. Plus a est petit (ou λ grand), plus θ est grand."
      },
      {
        question: "L'interfrange dans l'expérience de Young vaut :",
        options: ["i = λD/a", "i = λa/D", "i = aD/λ", "i = λ/(aD)"],
        correct: 0,
        explication: "i = λD/a avec D la distance fentes-écran et a l'écart entre les fentes."
      },
      {
        question: "Des interférences constructives se produisent quand :",
        options: ["La différence de marche δ = k·λ (k entier)", "δ = (k+½)·λ", "δ = 0 uniquement", "Les amplitudes sont différentes"],
        correct: 0,
        explication: "Constructives : δ = k·λ, les ondes sont en phase. Destructives : δ = (k+½)·λ."
      },
      {
        question: "Pour observer des interférences stables, les deux sources doivent être :",
        options: ["Cohérentes (même fréquence, déphasage constant)", "De couleurs différentes", "De grandes amplitudes", "Très éloignées"],
        correct: 0,
        explication: "La cohérence (même fréquence, déphasage constant) est indispensable pour des franges stables."
      },
      {
        question: "Si on utilise une lumière de longueur d'onde plus grande, l'interfrange :",
        options: ["Augmente", "Diminue", "Reste identique", "Disparaît"],
        correct: 0,
        explication: "i = λD/a. Si λ augmente, i augmente proportionnellement."
      },
      {
        question: "La lumière blanche donne en diffraction :",
        options: ["Un spectre coloré (chaque λ diffracte différemment)", "Une tache blanche", "Uniquement du rouge", "Rien de visible"],
        correct: 0,
        explication: "Chaque longueur d'onde diffracte d'un angle θ = λ/a différent, ce qui décompose la lumière blanche."
      }
    ],
    fiche: {
      page1_intro: {
        titre: "Introduction",
        texte: "La diffraction et les interférences sont des phénomènes ondulatoires. Quand une onde passe par une petite ouverture, elle s'étale : c'est la diffraction. Quand deux ondes se superposent, elles peuvent se renforcer (constructives) ou s'annuler (destructives) : ce sont les interférences. En gros : la lumière se comporte comme une onde, pas seulement comme un rayon droit.",
        points_cles: [
          "La diffraction prouve le caractère ondulatoire de la lumière",
          "Condition : a ≈ λ pour observer la diffraction",
          "Écart angulaire : θ = λ/a",
          "Interférences constructives : δ = kλ (maximum)",
          "Interférences destructives : δ = (k+½)λ (minimum)",
          "Trous de Young : figure de franges alternées",
          "Interfrange : i = λD/a",
          "La cohérence des sources est nécessaire pour des interférences stables"
        ]
      },
      page2_concepts: {
        titre: "Concepts clés",
        concepts: [
          {
            terme: "Diffraction",
            definition: "Étalement d'une onde passant par une ouverture ou contournant un obstacle. Significative si a ≈ λ."
          },
          {
            terme: "Écart angulaire θ",
            definition: "θ = λ/a (en rad). Demi-angle du cône central de diffraction. Plus a est petit, plus l'étalement est grand."
          },
          {
            terme: "Interférences",
            definition: "Superposition de deux ondes cohérentes. Constructives (en phase) ou destructives (en opposition de phase)."
          },
          {
            terme: "Différence de marche δ",
            definition: "δ = d₂ − d₁. Différence de chemin optique entre les deux ondes. Détermine constructif ou destructif."
          },
          {
            terme: "Trous de Young",
            definition: "Deux fentes fines éclairées par une source cohérente. Produisent des franges d'interférences sur un écran."
          },
          {
            terme: "Interfrange i",
            definition: "i = λD/a. Distance entre deux franges brillantes consécutives. λ longueur d'onde, D distance à l'écran, a écart entre fentes."
          },
          {
            terme: "Cohérence",
            definition: "Deux sources cohérentes ont même fréquence et un déphasage constant. Condition nécessaire pour des interférences."
          },
          {
            terme: "Frange centrale",
            definition: "Frange brillante au centre (δ = 0). Toujours présente quelle que soit la longueur d'onde."
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
            nom: "Écart angulaire de diffraction",
            formule: "θ = λ / a",
            explication: "En radians. a = largeur de la fente, λ = longueur d'onde."
          },
          {
            nom: "Largeur de la tache centrale",
            formule: "L = 2λD / a",
            explication: "Largeur de la frange centrale sur un écran à distance D de la fente."
          },
          {
            nom: "Interfrange (Young)",
            formule: "i = λ · D / a",
            explication: "a = distance entre les deux fentes, D = distance fentes-écran."
          },
          {
            nom: "Condition d'interférences constructives",
            formule: "δ = k · λ (k entier)",
            explication: "Les ondes arrivent en phase : amplitude maximale."
          },
          {
            nom: "Condition d'interférences destructives",
            formule: "δ = (k + ½) · λ",
            explication: "Les ondes arrivent en opposition de phase : amplitude nulle."
          },
          {
            nom: "Différence de marche",
            formule: "δ = a · x / D",
            explication: "Approximation pour les trous de Young. x = position sur l'écran depuis le centre."
          }
        ]
      },
      page5_resume: {
        titre: "Résumé",
        resume: "La diffraction (θ = λ/a) étale une onde passant par une ouverture. Les interférences superposent deux ondes : constructives si δ = kλ, destructives si δ = (k+½)λ. L'expérience de Young (deux fentes) crée des franges d'interfrange i = λD/a. Ces phénomènes prouvent la nature ondulatoire de la lumière et permettent de mesurer λ avec précision.",
        points_importants: [
          "θ = λ/a : plus la fente est petite, plus la diffraction est grande",
          "Interférences constructives : δ = kλ, destructives : δ = (k+½)λ",
          "i = λD/a : l'interfrange augmente avec λ et D, diminue avec a",
          "La cohérence est indispensable pour des interférences stables"
        ],
        pieges_courants: [
          "Confondre a (largeur de fente) et a (distance entre fentes de Young)",
          "Oublier que θ est en radians (pas en degrés)",
          "Confondre interférences constructives (max) et destructives (min)",
          "Oublier que la diffraction ne change pas la fréquence de l'onde"
        ]
      }
    }
  },

  // ═══════════════════════════════════════════════════════════════
  // CHAPITRE 9 — La lumière : Images et photons
  // ═══════════════════════════════════════════════════════════════
  {
    id: "term-physique-chimie-ch9",
    titre: "La lumière : Images et photons",
    emoji: "💡",
    nouveau: false,
    flashcardsData: [
      {
        q: "Qu'est-ce qu'une lunette astronomique ?",
        r: "Un instrument d'optique formé de deux lentilles convergentes (objectif + oculaire) qui grossit les objets lointains."
      },
      {
        q: "Qu'est-ce qu'un système afocal ?",
        r: "Un système optique où le foyer image de l'objectif coïncide avec le foyer objet de l'oculaire. Les rayons entrent et sortent parallèles."
      },
      {
        q: "Comment calcule-t-on le grossissement d'une lunette ?",
        r: "G = f'_objectif / f'_oculaire. Plus l'objectif a une grande focale et l'oculaire une petite, plus le grossissement est fort."
      },
      {
        q: "Qu'est-ce qu'un photon ?",
        r: "Le quantum (grain) de lumière. C'est une particule sans masse d'énergie E = h·ν. h = 6,63 × 10⁻³⁴ J·s (constante de Planck)."
      },
      {
        q: "Comment calcule-t-on l'énergie d'un photon ?",
        r: "E = h·ν = h·c/λ. Plus la fréquence est haute (ou λ petite), plus le photon est énergétique."
      },
      {
        q: "Qu'est-ce que les niveaux d'énergie d'un atome ?",
        r: "Les énergies quantifiées (discrètes) que peut avoir un électron dans un atome. Il ne peut occuper que certaines valeurs, pas d'entre-deux."
      },
      {
        q: "Comment un atome émet-il un photon ?",
        r: "Par transition d'un niveau d'énergie haut (E₂) vers un niveau bas (E₁). Le photon emporte E = E₂ − E₁ = h·ν."
      },
      {
        q: "Qu'est-ce que l'effet photoélectrique ?",
        r: "L'éjection d'électrons d'un métal quand il est éclairé par de la lumière suffisamment énergétique (fréquence ≥ seuil)."
      },
      {
        q: "Qu'est-ce que le travail d'extraction W₀ ?",
        r: "L'énergie minimale pour arracher un électron du métal. Si h·ν < W₀, pas d'effet photoélectrique."
      },
      {
        q: "Quelle est la relation entre énergie cinétique et effet photoélectrique ?",
        r: "Ec = h·ν − W₀. L'énergie du photon se répartit entre le travail d'extraction et l'énergie cinétique de l'électron."
      }
    ],
    qcm: [
      {
        question: "L'énergie d'un photon est donnée par :",
        options: ["E = h·ν", "E = m·c²", "E = ½mv²", "E = q·U"],
        correct: 0,
        explication: "E = hν avec h = 6,63 × 10⁻³⁴ J·s (Planck) et ν la fréquence de la lumière."
      },
      {
        question: "Le grossissement d'une lunette astronomique afocale vaut :",
        options: ["G = f'_objectif / f'_oculaire", "G = f'_oculaire / f'_objectif", "G = f'_objectif × f'_oculaire", "G = f'_objectif − f'_oculaire"],
        correct: 0,
        explication: "G = f'₁/f'₂. Grand objectif + petit oculaire = grand grossissement."
      },
      {
        question: "L'effet photoélectrique se produit si :",
        options: ["L'énergie du photon ≥ travail d'extraction", "La lumière est très intense", "La lumière est rouge", "Le métal est chaud"],
        correct: 0,
        explication: "Il faut hν ≥ W₀. C'est la fréquence (énergie par photon) qui compte, pas l'intensité."
      },
      {
        question: "Les niveaux d'énergie d'un atome sont :",
        options: ["Quantifiés (valeurs discrètes)", "Continus", "Identiques pour tous les atomes", "Nuls"],
        correct: 0,
        explication: "Les électrons ne peuvent occuper que certains niveaux d'énergie : c'est la quantification."
      },
      {
        question: "La constante de Planck h vaut environ :",
        options: ["6,63 × 10⁻³⁴ J·s", "6,63 × 10⁻²⁴ J·s", "1,6 × 10⁻¹⁹ C", "3 × 10⁸ m/s"],
        correct: 0,
        explication: "h = 6,626 × 10⁻³⁴ J·s. C'est la constante fondamentale de la mécanique quantique."
      },
      {
        question: "Un système afocal est un système où :",
        options: ["Le foyer image du 1er élément coïncide avec le foyer objet du 2ᵉ", "Il n'y a pas de foyer", "Les lentilles sont identiques", "L'image est à l'infini de l'objet"],
        correct: 0,
        explication: "Afocal : F'₁ = F₂. Un objet à l'infini donne une image à l'infini."
      },
      {
        question: "L'énergie cinétique d'un électron extrait par effet photoélectrique est :",
        options: ["Ec = hν − W₀", "Ec = hν + W₀", "Ec = W₀ − hν", "Ec = hν × W₀"],
        correct: 0,
        explication: "L'énergie du photon se partage : W₀ pour extraire + Ec pour mettre en mouvement."
      }
    ],
    fiche: {
      page1_intro: {
        titre: "Introduction",
        texte: "Ce chapitre explore la lumière sous deux aspects : ondulatoire (images, optique) et corpusculaire (photons). Une lunette astronomique utilise des lentilles pour grossir les étoiles. Mais la lumière est aussi faite de photons, des grains d'énergie E = hν. L'effet photoélectrique, où la lumière éjecte des électrons d'un métal, prouve cette nature corpusculaire. En gros : la lumière est à la fois onde et particule (dualité onde-corpuscule).",
        points_cles: [
          "La lunette astronomique est un système afocal (objectif + oculaire)",
          "Grossissement G = f'_objectif / f'_oculaire",
          "Le photon est le quantum de lumière : E = hν = hc/λ",
          "Les niveaux d'énergie atomiques sont quantifiés",
          "Émission de photon : E = E₂ − E₁ lors d'une transition",
          "Effet photoélectrique : hν ≥ W₀ pour éjecter un électron",
          "Ec = hν − W₀ : bilan énergétique de l'effet photoélectrique",
          "La dualité onde-corpuscule est fondamentale en physique moderne"
        ]
      },
      page2_concepts: {
        titre: "Concepts clés",
        concepts: [
          {
            terme: "Lunette astronomique",
            definition: "Instrument afocal : objectif convergent (grande focale) + oculaire convergent (petite focale). Grossit les objets lointains."
          },
          {
            terme: "Système afocal",
            definition: "Système optique où F'₁ coïncide avec F₂. Un objet à l'infini donne une image à l'infini."
          },
          {
            terme: "Grossissement",
            definition: "G = α'/α = f'₁/f'₂. Rapport de l'angle sous lequel on voit l'image à celui sous lequel on voit l'objet à l'œil nu."
          },
          {
            terme: "Photon",
            definition: "Particule de lumière sans masse. Énergie E = hν. Se déplace à la vitesse c = 3 × 10⁸ m/s."
          },
          {
            terme: "Niveaux d'énergie",
            definition: "Valeurs discrètes d'énergie autorisées pour un électron dans un atome. Transition = changement de niveau."
          },
          {
            terme: "Effet photoélectrique",
            definition: "Éjection d'électrons d'un métal par absorption de photons. Condition : hν ≥ W₀."
          },
          {
            terme: "Travail d'extraction W₀",
            definition: "Énergie minimale pour arracher un électron du métal. Dépend du matériau."
          },
          {
            terme: "Dualité onde-corpuscule",
            definition: "La lumière se comporte comme une onde (diffraction, interférences) ET comme des particules (photons, effet photoélectrique)."
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
            nom: "Énergie d'un photon",
            formule: "E = h·ν = h·c / λ",
            explication: "h = 6,63 × 10⁻³⁴ J·s. Plus la fréquence est haute, plus le photon est énergétique."
          },
          {
            nom: "Grossissement de la lunette",
            formule: "G = f'_objectif / f'_oculaire",
            explication: "Rapport des distances focales. Grand objectif + petit oculaire = fort grossissement."
          },
          {
            nom: "Bilan photoélectrique",
            formule: "Ec = h·ν − W₀",
            explication: "L'énergie cinétique de l'électron éjecté = énergie du photon − travail d'extraction."
          },
          {
            nom: "Énergie de transition",
            formule: "E_photon = |E₂ − E₁|",
            explication: "Le photon émis ou absorbé a une énergie égale à la différence entre deux niveaux."
          },
          {
            nom: "Fréquence seuil",
            formule: "ν_seuil = W₀ / h",
            explication: "Fréquence minimale pour l'effet photoélectrique. Si ν < ν_seuil, pas d'éjection."
          },
          {
            nom: "Encombrement de la lunette",
            formule: "L = f'_objectif + f'_oculaire",
            explication: "Distance entre les deux lentilles en configuration afocale."
          }
        ]
      },
      page5_resume: {
        titre: "Résumé",
        resume: "La lunette astronomique (système afocal) grossit d'un facteur G = f'₁/f'₂. Le photon, quantum de lumière, porte E = hν. Les atomes ont des niveaux d'énergie quantifiés : les transitions émettent ou absorbent des photons. L'effet photoélectrique (hν ≥ W₀) prouve la nature corpusculaire de la lumière. Le bilan Ec = hν − W₀ relie énergie du photon et énergie cinétique de l'électron.",
        points_importants: [
          "E = hν = hc/λ : plus λ est petit, plus le photon est énergétique",
          "Effet photoélectrique : c'est la fréquence qui compte, pas l'intensité",
          "Niveaux d'énergie quantifiés : pas de valeur intermédiaire possible",
          "G = f'₁/f'₂ : grossissement de la lunette afocale"
        ],
        pieges_courants: [
          "Confondre fréquence seuil et longueur d'onde seuil",
          "Oublier que W₀ dépend du matériau (chaque métal a son seuil)",
          "Croire qu'augmenter l'intensité lumineuse peut compenser une fréquence trop basse",
          "Confondre grossissement (lunette) et grandissement (lentille simple)"
        ]
      }
    }
  },

  // ═══════════════════════════════════════════════════════════════
  // CHAPITRE 10 — Dynamique d'un système électrique
  // ═══════════════════════════════════════════════════════════════
  {
    id: "term-physique-chimie-ch10",
    titre: "Dynamique d'un système électrique",
    emoji: "⚡",
    nouveau: false,
    flashcardsData: [
      {
        q: "Qu'est-ce qu'un condensateur ?",
        r: "Composant qui stocke de l'énergie sous forme de charges électriques. Formé de deux armatures séparées par un isolant."
      },
      {
        q: "Quelle est la relation charge-tension d'un condensateur ?",
        r: "q = C·u. La charge q (en Coulombs) est proportionnelle à la tension u (en Volts). C est la capacité en Farads."
      },
      {
        q: "Quelle est l'unité de la capacité C ?",
        r: "Le Farad (F). En pratique : μF (10⁻⁶ F), nF (10⁻⁹ F), pF (10⁻¹² F)."
      },
      {
        q: "Comment s'écrit l'intensité du courant dans un condensateur ?",
        r: "i = C · du/dt. Le courant est proportionnel à la vitesse de variation de la tension."
      },
      {
        q: "Qu'est-ce qu'un circuit RC ?",
        r: "Un circuit composé d'une résistance R et d'un condensateur C. Il modélise la charge et la décharge du condensateur."
      },
      {
        q: "Comment s'écrit l'équation différentielle de la charge d'un RC ?",
        r: "R·C · du/dt + u = E. La solution est u(t) = E·(1 − e^(−t/τ)) avec τ = RC."
      },
      {
        q: "Qu'est-ce que la constante de temps τ ?",
        r: "τ = R·C. C'est le temps caractéristique du circuit. Après 5τ, le condensateur est chargé à 99 %."
      },
      {
        q: "Comment évolue la tension lors de la décharge d'un RC ?",
        r: "u(t) = E · e^(−t/τ). La tension décroît exponentiellement. Après 5τ, le condensateur est quasiment déchargé."
      },
      {
        q: "Comment déterminer graphiquement τ ?",
        r: "C'est l'abscisse du point où la tangente à l'origine coupe l'asymptote horizontale. Ou quand u atteint 63 % de E (charge) ou 37 % (décharge)."
      },
      {
        q: "Quelle est l'énergie stockée dans un condensateur ?",
        r: "E = ½·C·u². L'énergie augmente avec C et avec le carré de la tension."
      }
    ],
    qcm: [
      {
        question: "La relation charge-tension d'un condensateur est :",
        options: ["q = C·u", "q = u/C", "q = C/u", "q = C²·u"],
        correct: 0,
        explication: "q = Cu. La charge est proportionnelle à la tension. C (capacité) en Farads."
      },
      {
        question: "La constante de temps d'un circuit RC vaut :",
        options: ["τ = R·C", "τ = R/C", "τ = C/R", "τ = R + C"],
        correct: 0,
        explication: "τ = RC en secondes. Produit de la résistance (Ω) par la capacité (F)."
      },
      {
        question: "Lors de la charge d'un condensateur dans un circuit RC, u(t) = :",
        options: ["E·(1 − e^(−t/τ))", "E·e^(−t/τ)", "E·t/τ", "E·(1 + e^(−t/τ))"],
        correct: 0,
        explication: "La tension croît exponentiellement vers E. u(t) = E(1 − e^(−t/RC))."
      },
      {
        question: "Après une durée de 5τ, le condensateur est chargé à environ :",
        options: ["99 %", "63 %", "50 %", "37 %"],
        correct: 0,
        explication: "1 − e⁻⁵ ≈ 0,993 ≈ 99 %. On considère la charge terminée après 5τ."
      },
      {
        question: "L'énergie stockée dans un condensateur est :",
        options: ["E = ½Cu²", "E = Cu", "E = Cu²", "E = ½C²u"],
        correct: 0,
        explication: "E = ½Cu² en Joules. L'énergie dépend du carré de la tension."
      },
      {
        question: "L'intensité dans un condensateur s'écrit :",
        options: ["i = C·du/dt", "i = u/C", "i = C·u", "i = C/u"],
        correct: 0,
        explication: "Le courant est proportionnel à la dérivée de la tension : i = C·du/dt."
      },
      {
        question: "Lors de la décharge d'un RC, la tension suit :",
        options: ["Une décroissance exponentielle", "Une croissance linéaire", "Une croissance exponentielle", "Une oscillation"],
        correct: 0,
        explication: "u(t) = E·e^(−t/τ). La tension diminue exponentiellement vers 0."
      }
    ],
    fiche: {
      page1_intro: {
        titre: "Introduction",
        texte: "Ce chapitre étudie le condensateur et le circuit RC. Un condensateur est comme un mini-réservoir d'énergie électrique : il se charge et se décharge. Le circuit RC (résistance + condensateur) est régi par une équation différentielle du 1er ordre. La constante de temps τ = RC contrôle la vitesse de charge/décharge. En gros : petit τ = charge rapide, grand τ = charge lente.",
        points_cles: [
          "Le condensateur stocke des charges : q = Cu",
          "L'intensité dans un condensateur : i = C·du/dt",
          "Circuit RC : équation différentielle du 1er ordre",
          "Charge : u(t) = E·(1 − e^(−t/τ))",
          "Décharge : u(t) = E·e^(−t/τ)",
          "Constante de temps : τ = RC",
          "Après 5τ, le régime permanent est atteint (99 %)",
          "Énergie stockée : E = ½Cu²"
        ]
      },
      page2_concepts: {
        titre: "Concepts clés",
        concepts: [
          {
            terme: "Condensateur",
            definition: "Composant à deux armatures séparant un isolant (diélectrique). Stocke de l'énergie électrique sous forme de charges."
          },
          {
            terme: "Capacité C",
            definition: "En Farads (F). C = q/u. Plus C est grand, plus le condensateur stocke de charges pour une même tension."
          },
          {
            terme: "Circuit RC",
            definition: "Circuit série avec une résistance R et un condensateur C. La tension aux bornes du condensateur suit une exponentielle."
          },
          {
            terme: "Constante de temps τ",
            definition: "τ = RC en secondes. Temps caractéristique de charge/décharge. Après τ : 63 % (charge) ou 37 % (décharge)."
          },
          {
            terme: "Équation différentielle du RC",
            definition: "RC·du/dt + u = E (charge) ou RC·du/dt + u = 0 (décharge). Équation du 1er ordre à coefficients constants."
          },
          {
            terme: "Régime transitoire",
            definition: "Phase pendant laquelle la tension évolue (de 0 à E en charge). Dure environ 5τ."
          },
          {
            terme: "Régime permanent",
            definition: "Atteint après 5τ. La tension est stable : u = E (charge complète) ou u = 0 (décharge complète)."
          },
          {
            terme: "Énergie du condensateur",
            definition: "E = ½Cu². L'énergie stockée est proportionnelle au carré de la tension et à la capacité."
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
            nom: "Relation charge-tension",
            formule: "q = C · u",
            explication: "q en Coulombs, C en Farads, u en Volts."
          },
          {
            nom: "Intensité dans un condensateur",
            formule: "i = C · du/dt",
            explication: "Le courant est proportionnel à la variation de tension. Si u est constant, i = 0."
          },
          {
            nom: "Charge du condensateur",
            formule: "u(t) = E · (1 − e^(−t/τ))",
            explication: "La tension croît de 0 vers E. τ = RC. Atteint 63 % de E après τ."
          },
          {
            nom: "Décharge du condensateur",
            formule: "u(t) = E · e^(−t/τ)",
            explication: "La tension décroît de E vers 0. Atteint 37 % de E après τ."
          },
          {
            nom: "Constante de temps",
            formule: "τ = R · C",
            explication: "En secondes. R en Ohms, C en Farads. Temps caractéristique du circuit."
          },
          {
            nom: "Énergie stockée",
            formule: "E_c = ½ · C · u²",
            explication: "Énergie en Joules. Proportionnelle à C et au carré de u."
          }
        ]
      },
      page5_resume: {
        titre: "Résumé",
        resume: "Le condensateur (q = Cu) stocke de l'énergie E = ½Cu². Le circuit RC suit une équation différentielle : charge u(t) = E(1 − e^(−t/τ)), décharge u(t) = E·e^(−t/τ), avec τ = RC. Après τ : 63 % (charge) ou 37 % (décharge). Après 5τ : régime permanent. Graphiquement, τ se lit à l'intersection de la tangente à l'origine avec l'asymptote.",
        points_importants: [
          "q = Cu et i = C·du/dt : les deux relations fondamentales du condensateur",
          "τ = RC détermine la rapidité de la charge/décharge",
          "5τ = fin du régime transitoire (99 %)",
          "E = ½Cu² : l'énergie dépend du carré de u"
        ],
        pieges_courants: [
          "Confondre charge (croissance) et décharge (décroissance)",
          "Oublier que τ a la dimension d'un temps (vérifier : Ω × F = s)",
          "Confondre 63 % (à t = τ en charge) et 37 % (à t = τ en décharge)",
          "Ne pas vérifier les conditions initiales (u(0) = 0 en charge, u(0) = E en décharge)"
        ]
      }
    }
  }

];
