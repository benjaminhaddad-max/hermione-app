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
        texte: "La mécanique newtonienne décrit le mouvement des objets et les forces qui les font bouger. C'est le socle de toute la physique classique, du ballon lancé en l'air au satellite en orbite.",
        sections: [
          {
            titre: "Les référentiels : choisir son point de vue",
            contenu: `Pour décrire un mouvement, il faut un point de vue fixe.\nC'est ce qu'on appelle un référentiel.\n\nC'est comme filmer une scène : le résultat change selon l'endroit où tu places la caméra.\n\nIl existe trois référentiels classiques :\n\n• Référentiel terrestre : lié au sol.\nOn l'utilise pour un objet au quotidien.\n\n• Référentiel géocentrique : lié au centre de la Terre.\nIdéal pour un satellite autour de la Terre.\n\n• Référentiel héliocentrique : lié au centre du Soleil.\nOn l'utilise pour étudier les planètes.\n\nEn gros : un mouvement n'existe pas « tout seul ».\nIl dépend toujours de qui regarde.`
          },
          {
            titre: "Vecteur position et vecteur vitesse",
            contenu: `Le vecteur position OM⃗ repère un objet M par rapport à une origine O.\nIl donne la position à chaque instant.\n\nLe vecteur vitesse est la dérivée de la position :\n\nv⃗ = dOM⃗/dt\n\nTraduction : la vitesse mesure comment la position change à chaque instant.\n\nLe vecteur vitesse est toujours tangent à la trajectoire.\nC'est comme la direction dans laquelle tu roules à vélo : toujours le long de la route.\n\nSon module (sa « longueur ») donne la valeur de la vitesse.\nUne vitesse de 5 m/s signifie 5 mètres parcourus chaque seconde.\n\nEn gros : la position dit « où tu es », la vitesse dit « où tu vas et à quelle allure ».`
          },
          {
            titre: "Vecteur accélération et repère de Frenet",
            contenu: `L'accélération est la dérivée de la vitesse :\n\na⃗ = dv⃗/dt\n\nTraduction : l'accélération mesure comment la vitesse change.\nSi la voiture accélère, a⃗ pointe vers l'avant.\nSi elle freine, a⃗ pointe vers l'arrière.\n\nLe repère de Frenet est un repère mobile lié au mobile.\nIl possède deux vecteurs :\n\n• t⃗ : tangent à la trajectoire (direction du mouvement).\n• n⃗ : normal, pointant vers le centre de courbure.\n\nC'est comme une boussole accrochée à un train dans un virage.\nt⃗ montre « tout droit », n⃗ montre « vers l'intérieur du virage ».\n\nEn gros : Frenet décompose l'accélération en « j'accélère » et « je tourne ».`
          },
          {
            titre: "Les types de mouvement",
            contenu: `Il y a trois mouvements fondamentaux à connaître :\n\n1. Rectiligne uniforme : ligne droite, vitesse constante.\nL'accélération est nulle.\nC'est un train lancé sur un rail droit, sans accélérer ni freiner.\n\n2. Rectiligne uniformément accéléré : ligne droite, vitesse qui augmente régulièrement.\nL'accélération est constante et non nulle.\nC'est une bille qui roule sur un plan incliné.\n\n3. Circulaire uniforme : cercle, vitesse constante en norme.\nMais la direction change en permanence.\nL'accélération est centripète : a = v²/R, dirigée vers le centre.\n\nC'est comme une balle attachée à un fil qu'on fait tourner.\nLa vitesse est constante, mais la balle tourne sans cesse.\n\nEn gros : uniforme = vitesse constante, accéléré = vitesse change.`
          },
          {
            titre: "Quantité de mouvement",
            contenu: `La quantité de mouvement mesure « l'élan » d'un objet :\n\np⃗ = m · v⃗\n\nTraduction : plus un objet est lourd et rapide, plus son élan est grand.\nUn camion à 50 km/h a bien plus d'élan qu'un vélo à 50 km/h.\n\nL'unité est le kg·m/s.\n\nLoi importante : quand un système est isolé (pas de force extérieure), la quantité de mouvement totale se conserve.\n\nC'est comme deux patineurs qui se poussent.\nL'élan total avant = l'élan total après.\nPersonne ne crée ni ne perd d'élan.\n\nEn gros : pas de force dehors = p⃗ total reste constant.`
          },
          {
            titre: "Les trois lois de Newton",
            contenu: `Ces trois lois sont le cœur de la mécanique.\n\n1. Première loi (inertie) : un corps isolé ou pseudo-isolé reste immobile ou en mouvement rectiligne uniforme.\nEn gros : pas de force = pas de changement.\nUn palet de hockey sur glace glisse indéfiniment sans frottement.\n\n2. Deuxième loi (PFD) : ΣF⃗ = m · a⃗.\nTraduction : la somme des forces = masse × accélération.\nPlus la force est grande, plus l'accélération est forte.\nPlus la masse est grande, plus il faut de force pour accélérer.\nC'est comme pousser un caddie : vide il part vite, plein il résiste.\n\n3. Troisième loi (action-réaction) : F⃗(A/B) = −F⃗(B/A).\nToute action entraîne une réaction égale et opposée.\nTu pousses le mur, le mur te pousse avec la même force.\n\nEn gros : pas de force = repos, force = accélération, action = réaction.`
          }
        ]
      },
      page2_concepts: {
        titre: "Concepts clés",
        concepts: [
          {
            terme: "Référentiel",
            definition: "Un référentiel est un solide de référence + une horloge pour mesurer le temps. C'est comme choisir un point de vue pour filmer. En gros : sans référentiel, impossible de dire si un objet bouge ou non. Les trois classiques : terrestre (sol), géocentrique (centre de la Terre), héliocentrique (centre du Soleil)."
          },
          {
            terme: "Référentiel galiléen",
            definition: "Un référentiel galiléen est un référentiel où le principe d'inertie (1ère loi de Newton) fonctionne. En gros : c'est un référentiel qui ne tourne pas et qui ne freine pas. Le référentiel terrestre est approximativement galiléen pour des expériences courtes."
          },
          {
            terme: "Vecteur vitesse",
            definition: "v⃗ = dOM⃗/dt. C'est la dérivée de la position par rapport au temps. Il est toujours tangent à la trajectoire. En gros : il indique dans quelle direction et à quelle vitesse le mobile se déplace à chaque instant. C'est comme la flèche sur le GPS de ta voiture."
          },
          {
            terme: "Vecteur accélération",
            definition: "a⃗ = dv⃗/dt. C'est la dérivée de la vitesse par rapport au temps. Il traduit la variation de vitesse. Si a⃗ = 0⃗, le mouvement est uniforme (vitesse constante). En gros : l'accélération dit si tu accélères, freines ou tournes."
          },
          {
            terme: "Quantité de mouvement",
            definition: "p⃗ = m·v⃗. C'est le produit de la masse par la vitesse. C'est une grandeur vectorielle (elle a une direction et un sens). Elle se conserve si le système est isolé (aucune force extérieure). En gros : un camion à 10 km/h a plus de quantité de mouvement qu'une balle de tennis à 100 km/h."
          },
          {
            terme: "Principe d'inertie (1ère loi)",
            definition: "Sans force (ou si les forces se compensent), un corps reste au repos ou en mouvement rectiligne uniforme. C'est comme une bille sur une table parfaitement lisse : elle roule indéfiniment. En gros : pas de force = pas de changement de mouvement."
          },
          {
            terme: "Deuxième loi de Newton",
            definition: "ΣF⃗ = m·a⃗. La somme de toutes les forces appliquées à un objet est égale à sa masse multipliée par son accélération. En gros : plus tu pousses fort (F), plus ça accélère (a). Plus c'est lourd (m), moins ça accélère."
          },
          {
            terme: "Actions réciproques (3ème loi)",
            definition: "Si A exerce une force F⃗ sur B, alors B exerce une force −F⃗ sur A. Même intensité, même direction, sens opposé. C'est comme quand tu pousses un mur : le mur te pousse aussi fort en retour. En gros : les forces vont toujours par paires."
          },
          {
            terme: "Repère de Frenet",
            definition: "Repère mobile (t⃗, n⃗) attaché au mobile. t⃗ est tangent à la trajectoire (dans le sens du mouvement). n⃗ pointe vers le centre de courbure. En gros : c'est un repère qui « suit » le mobile dans les virages. Très utile pour les mouvements circulaires."
          },
          {
            terme: "Accélération centripète",
            definition: "Accélération dirigée vers le centre de la trajectoire circulaire. Elle vaut a = v²/R. C'est elle qui « force » l'objet à tourner au lieu d'aller tout droit. C'est comme la force que tu ressens dans un virage en voiture."
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
            explication: "La résultante des forces égale masse × accélération. C'est LA loi fondamentale de la mécanique. En gros : force = masse × accélération."
          },
          {
            nom: "Quantité de mouvement",
            formule: "p⃗ = m·v⃗",
            explication: "Produit de la masse par la vitesse. Se conserve si le système est isolé (pas de force extérieure). Unité : kg·m/s."
          },
          {
            nom: "Accélération centripète",
            formule: "a = v²/R",
            explication: "Pour un mouvement circulaire, l'accélération pointe vers le centre et vaut v²/R. Plus le rayon R est petit, plus l'accélération est forte."
          },
          {
            nom: "Vitesse instantanée",
            formule: "v⃗ = dOM⃗/dt",
            explication: "Dérivée du vecteur position par rapport au temps. Toujours tangente à la trajectoire. Unité : m/s."
          },
          {
            nom: "Accélération instantanée",
            formule: "a⃗ = dv⃗/dt",
            explication: "Dérivée du vecteur vitesse par rapport au temps. Indique comment la vitesse varie (en norme et en direction). Unité : m/s²."
          },
          {
            nom: "Théorème du centre d'inertie",
            formule: "ΣF⃗(ext) = m·a⃗(G)",
            explication: "Le centre d'inertie G d'un système se comporte comme un point soumis aux forces extérieures. En gros : on peut résumer tout un système par un seul point."
          },
          {
            nom: "Deuxième loi (forme impulsionnelle)",
            formule: "ΣF⃗ = dp⃗/dt",
            explication: "La somme des forces est la dérivée de la quantité de mouvement. C'est la forme la plus générale de la 2ème loi de Newton."
          },
          {
            nom: "Vitesse angulaire",
            formule: "ω = 2π/T = v/R",
            explication: "ω (oméga) est la vitesse de rotation en rad/s. T est la période (durée d'un tour). Relie vitesse linéaire v et rayon R."
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
        texte: "Ce chapitre étudie le mouvement d'un objet soumis à un champ uniforme : pesanteur ou champ électrique. Un champ uniforme produit une force constante, donc une accélération constante et des équations simples.",
        sections: [
          {
            titre: "Qu'est-ce qu'un champ uniforme ?",
            contenu: `Un champ uniforme a la même valeur partout dans la zone étudiée.\nLa force qu'il exerce est donc constante : même direction, même sens, même intensité.\n\nC'est comme une pluie parfaitement verticale : chaque goutte tombe pareil, partout.\n\nDeux exemples importants :\n\n• Le champ de pesanteur g⃗ ≈ 9,81 m/s² vers le bas.\nIl agit sur tout objet ayant une masse.\n\n• Le champ électrique E⃗ = U/d entre deux plaques d'un condensateur plan.\nIl agit sur toute particule chargée.\n\nEn gros : champ uniforme = force constante = accélération constante.\nC'est ce qui rend les calculs faisables.`
          },
          {
            titre: "La chute libre et les équations horaires",
            contenu: `En chute libre, seule la pesanteur agit.\nOn néglige les frottements de l'air.\n\nOn décompose le mouvement sur deux axes :\n\n• Axe horizontal (x) : aucune force.\nLe mouvement est rectiligne uniforme.\nvx = v₀·cos(α) et x(t) = v₀·cos(α)·t.\n\n• Axe vertical (y) : la pesanteur tire vers le bas.\nLe mouvement est uniformément accéléré.\nvy = v₀·sin(α) − g·t.\ny(t) = v₀·sin(α)·t − ½g·t².\n\nTraduction : à l'horizontale, l'objet avance à vitesse constante.\nÀ la verticale, il ralentit en montant, puis accélère en tombant.\n\nC'est comme un ballon de basket lancé vers le panier.\nIl avance ET monte, puis il avance ET descend.\n\nEn gros : horizontal = facile (pas de force), vertical = accéléré (gravité).`
          },
          {
            titre: "Trajectoire parabolique, portée et flèche",
            contenu: `En combinant x(t) et y(t), on élimine le temps.\nOn obtient y en fonction de x : c'est l'équation de la trajectoire.\n\nLa courbe obtenue est une parabole (forme d'arche).\nC'est le chemin suivi par tout projectile lancé en l'air.\n\nDeux grandeurs importantes :\n\n• La portée xP : distance horizontale totale avant le retour au sol.\nElle dépend de la vitesse initiale et de l'angle de tir.\nPortée maximale pour un angle de 45°.\n\n• La flèche S : hauteur maximale atteinte.\nElle correspond au moment où vy = 0.\nL'objet a fini de monter et commence à descendre.\n\nC'est comme un jet d'eau de fontaine.\nLa portée, c'est où l'eau retombe.\nLa flèche, c'est le point le plus haut du jet.\n\nEn gros : parabole = forme du chemin, portée = distance, flèche = hauteur max.`
          },
          {
            titre: "Le condensateur plan et le champ électrique",
            contenu: `Un condensateur plan est formé de deux plaques métalliques parallèles.\nEntre les plaques, un champ électrique uniforme règne.\n\nSa valeur est :\n\nE = U / d\n\nTraduction : la tension U entre les plaques, divisée par la distance d.\nPlus la tension est grande, plus le champ est intense.\nPlus les plaques sont proches, plus le champ est fort.\n\nC'est comme un vent constant entre deux murs.\nPlus le vent souffle fort (U grand), plus il pousse.\nPlus le couloir est étroit (d petit), plus le vent est concentré.\n\nLe champ va de la plaque positive vers la plaque négative.\nIl est perpendiculaire aux plaques.\n\nEn gros : condensateur plan = deux plaques = champ uniforme entre elles.`
          },
          {
            titre: "Mouvement d'une particule chargée",
            contenu: `Une particule de charge q dans un champ E⃗ subit la force :\n\nF⃗ = q · E⃗\n\nTraduction : la force est proportionnelle à la charge et au champ.\n\nSi q > 0 (proton), la force va dans le sens de E⃗.\nSi q < 0 (électron), la force va dans le sens opposé.\n\nOn applique le PFD : m · a⃗ = q · E⃗.\nDonc a⃗ = (q/m) · E⃗ = constante.\n\nLa situation est analogue à la chute libre :\n\n• Axe parallèle aux plaques : mouvement uniforme.\n• Axe perpendiculaire aux plaques : mouvement accéléré.\n\nLa trajectoire est encore une parabole.\nC'est comme un jet d'eau, mais la « gravité » est le champ électrique.\n\nEn gros : une charge dans un condensateur se comporte comme un projectile.\nLe champ électrique joue le rôle de la pesanteur.`
          }
        ]
      },
      page2_concepts: {
        titre: "Concepts clés",
        concepts: [
          {
            terme: "Champ de pesanteur uniforme",
            definition: "Le champ g⃗ est constant en tout point de la zone d'étude. C'est valable près de la surface terrestre quand l'altitude varie peu. En gros : la gravité est la même partout dans ta salle de classe. C'est comme si tu avais un vent constant qui souffle toujours dans la même direction."
          },
          {
            terme: "Chute libre",
            definition: "Mouvement d'un objet soumis uniquement à la pesanteur (on néglige les frottements de l'air). L'accélération vaut toujours g ≈ 9,81 m/s² vers le bas. En gros : on fait comme si l'air n'existait pas. Un stylo et une balle tombent pareil."
          },
          {
            terme: "Équations horaires",
            definition: "Expressions de x(t) et y(t) qui donnent la position en fonction du temps. On les obtient par double intégration de l'accélération a⃗. En gros : on intègre deux fois pour passer de l'accélération à la position. C'est comme remonter du compteur de vitesse au GPS."
          },
          {
            terme: "Trajectoire parabolique",
            definition: "Courbe y(x) en forme de parabole (arche). On l'obtient en éliminant le temps t entre x(t) et y(t). En gros : on supprime le temps pour voir directement la forme du chemin. C'est l'arc que dessine un jet d'eau de fontaine."
          },
          {
            terme: "Portée du tir",
            definition: "Distance horizontale totale parcourue par le projectile quand il revient au sol. Elle est maximale pour un angle de tir de 45°. En gros : c'est « jusqu'où » le ballon va. Un angle de 45° donne la meilleure distance."
          },
          {
            terme: "Flèche du tir",
            definition: "Hauteur maximale atteinte par le projectile au sommet de sa trajectoire. Atteinte quand la vitesse verticale vy = 0. En gros : c'est « jusqu'à quelle hauteur » le ballon monte. Au sommet, il ne monte plus et ne descend pas encore."
          },
          {
            terme: "Condensateur plan",
            definition: "Deux plaques conductrices parallèles séparées par un isolant (diélectrique). Le champ électrique E⃗ entre elles est uniforme. E = U/d avec U la tension (en Volts) et d la distance entre les plaques (en mètres). C'est comme deux étagères chargées qui créent un « vent électrique » constant entre elles."
          },
          {
            terme: "Déviation d'une particule chargée",
            definition: "Dans un champ E⃗, une charge q subit la force F⃗ = q·E⃗. Sa trajectoire est parabolique, exactement comme un projectile en chute libre. En gros : remplace la gravité par la force électrique et tu as les mêmes équations."
          },
          {
            terme: "Décomposition du mouvement",
            definition: "On sépare le mouvement en deux axes perpendiculaires. Axe horizontal : mouvement uniforme (pas de force). Axe vertical : mouvement uniformément accéléré. C'est comme décomposer un trajet en « aller tout droit » et « monter/descendre »."
          },
          {
            terme: "Angle de tir α",
            definition: "Angle entre la direction de lancement et l'horizontale. Il détermine la décomposition de v₀ : v₀ₓ = v₀·cos(α) et v₀ᵧ = v₀·sin(α). En gros : l'angle décide si le tir est plutôt « rasant » (petit α) ou « en cloche » (grand α)."
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
            explication: "Horizontalement : mouvement uniforme (vitesse constante). Verticalement : mouvement uniformément accéléré par la gravité."
          },
          {
            nom: "Portée du tir",
            formule: "P = v₀²·sin(2α) / g",
            explication: "Distance horizontale quand le projectile revient au sol. Maximale pour α = 45° car sin(90°) = 1."
          },
          {
            nom: "Flèche du tir",
            formule: "H = v₀²·sin²(α) / (2g)",
            explication: "Hauteur maximale atteinte. On la trouve en posant vy(t) = 0 puis en calculant y à cet instant."
          },
          {
            nom: "Champ électrique dans un condensateur",
            formule: "E = U/d",
            explication: "U est la tension entre les plaques (en Volts). d est la distance entre les plaques (en mètres). E s'exprime en V/m."
          },
          {
            nom: "Force électrique sur une charge",
            formule: "F⃗ = q·E⃗",
            explication: "Force subie par une charge q dans un champ E⃗. Dans le sens de E⃗ si q > 0, sens opposé si q < 0."
          },
          {
            nom: "Accélération d'une particule chargée",
            formule: "a = q·E/m",
            explication: "D'après Newton : F = m·a et F = q·E, donc a = q·E/m. Plus la particule est légère, plus elle accélère."
          },
          {
            nom: "Temps de vol",
            formule: "t_vol = 2·v₀·sin(α) / g",
            explication: "Durée totale du vol du projectile. C'est le temps pour monter plus le temps pour redescendre."
          },
          {
            nom: "Équation de la trajectoire",
            formule: "y(x) = −g·x² / (2·v₀²·cos²(α)) + x·tan(α) + y₀",
            explication: "Forme parabolique y = f(x). On élimine t des équations horaires pour obtenir le chemin directement."
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
        texte: "Ce chapitre explique le mouvement des planètes et des satellites grâce à la gravitation. Kepler a décrit les orbites, Newton a expliqué pourquoi avec sa loi de la gravitation universelle.",
        sections: [
          {
            titre: "Les trois lois de Kepler",
            contenu: `Kepler a observé le mouvement des planètes pendant des années.\nIl en a tiré trois lois empiriques (issues de l'observation).\n\n1. Première loi (loi des orbites) : chaque planète suit une ellipse.\nLe Soleil est à l'un des foyers de cette ellipse.\nUne ellipse, c'est un ovale aplati.\n\n2. Deuxième loi (loi des aires) : le segment Soleil-planète balaie des aires égales en des temps égaux.\nTraduction : la planète va plus vite quand elle est proche du Soleil.\nElle ralentit quand elle s'en éloigne.\n\n3. Troisième loi : T²/a³ = constante pour toutes les planètes d'un même système.\nT est la période de révolution (durée d'un tour complet).\na est le demi-grand axe de l'ellipse.\n\nC'est comme des chevaux sur un manège.\nCeux qui sont loin du centre mettent plus de temps à faire un tour.\n\nEn gros : les planètes suivent des ovales, vont plus vite près du Soleil, et T² ∝ a³.`
          },
          {
            titre: "La force gravitationnelle",
            contenu: `Newton a expliqué les lois de Kepler par une seule force :\n\nF = G · M · m / r²\n\nTraduction : deux masses M et m s'attirent mutuellement.\nLa force diminue avec le carré de la distance r.\n\nG = 6,67 × 10⁻¹¹ N·m²/kg² est la constante de gravitation universelle.\nElle est très petite : la gravité entre deux personnes est négligeable.\nMais entre la Terre et toi, la masse de la Terre compense.\n\nC'est comme un aimant : plus tu t'éloignes, moins il attire.\nMais ici, la force baisse en 1/r² (très vite avec la distance).\n\nCette force est toujours attractive.\nElle s'exerce le long de la droite qui relie les deux masses.\n\nEn gros : toute masse attire toute masse, et ça faiblit vite avec la distance.`
          },
          {
            titre: "Mouvement circulaire uniforme en orbite",
            contenu: `Pour simplifier, on étudie souvent des orbites circulaires.\nLa planète (ou le satellite) tourne en cercle autour du corps central.\n\nLa gravité joue le rôle de force centripète.\nElle « tire » le satellite vers le centre en permanence.\n\nOn applique le PFD : G·M·m/r² = m·v²/r.\nOn simplifie par m et on obtient :\n\nv = √(G·M / r)\n\nTraduction : la vitesse orbitale ne dépend que de M (masse du corps central) et r (rayon de l'orbite).\nPlus on est loin, plus on va lentement.\n\nC'est comme une balle au bout d'une ficelle.\nLa gravité remplace la ficelle.\nSi la ficelle est longue, la balle tourne moins vite.\n\nEn gros : v = √(GM/r), plus l'orbite est haute, plus c'est lent.`
          },
          {
            titre: "Période de révolution et 3ème loi",
            contenu: `La période T est le temps pour faire un tour complet.\nPour une orbite circulaire de rayon r :\n\nT = 2π·r / v = 2π·r / √(GM/r)\n\nEn simplifiant, on obtient :\n\nT² = (4π² / GM) · r³\n\nTraduction : T² est proportionnel à r³.\nC'est la troisième loi de Kepler retrouvée par Newton.\n\nPlus l'orbite est grande, plus la période est longue.\nUn satellite proche tourne vite.\nUn satellite lointain tourne lentement.\n\nLa Lune met 27 jours pour un tour.\nL'ISS, beaucoup plus proche, met seulement 90 minutes.\n\nEn gros : T² / r³ = constante.\nGrand rayon = longue période.`
          },
          {
            titre: "Satellites géostationnaires et apesanteur",
            contenu: `Un satellite géostationnaire a une période T = 24 h.\nIl tourne à la même vitesse que la Terre.\nVu du sol, il semble immobile dans le ciel.\n\nConditions :\n• Orbite circulaire dans le plan de l'équateur.\n• Altitude d'environ 36 000 km.\n• Période exactement égale à 24 h.\n\nC'est utilisé pour les télécoms et la météo.\nL'antenne au sol reste fixe, pointée vers le satellite.\n\nL'apesanteur en orbite n'est pas l'absence de gravité.\nLe satellite ET les astronautes tombent ensemble.\nC'est une chute libre permanente.\n\nC'est comme un ascenseur en chute libre.\nTu flottes à l'intérieur, mais la gravité est toujours là.\n\nEn gros : géostationnaire = immobile vu du sol.\nApesanteur = chute libre, pas absence de gravité.`
          }
        ]
      },
      page2_concepts: {
        titre: "Concepts clés",
        concepts: [
          {
            terme: "Force gravitationnelle",
            definition: "F = G·M·m/r². C'est la force d'attraction entre deux masses M et m séparées de r. Elle est toujours attractive et diminue avec le carré de la distance. En gros : double la distance, la force est divisée par 4. C'est comme un aimant qui attire moins quand on s'éloigne."
          },
          {
            terme: "Constante gravitationnelle G",
            definition: "G = 6,674 × 10⁻¹¹ N·m²·kg⁻². C'est une constante universelle qui mesure l'intensité de la gravitation. Elle est très petite, ce qui explique que la gravité entre petits objets est imperceptible. En gros : deux personnes s'attirent, mais la force est infime."
          },
          {
            terme: "Loi des orbites (Kepler 1)",
            definition: "Les planètes décrivent des ellipses dont le Soleil occupe un foyer. Le cercle est un cas particulier d'ellipse (quand les deux foyers sont confondus). En gros : les orbites ne sont pas des cercles parfaits, elles sont légèrement ovales."
          },
          {
            terme: "Loi des aires (Kepler 2)",
            definition: "Le segment Soleil-planète balaie des aires égales en temps égaux. La planète accélère quand elle est proche du Soleil (périhélie) et ralentit quand elle est loin (aphélie). C'est comme un patineur qui tourne plus vite quand il ramène ses bras."
          },
          {
            terme: "Loi des périodes (Kepler 3)",
            definition: "T²/a³ = constante = 4π²/(GM). Le rapport est le même pour tous les satellites d'un même astre. En gros : plus une planète est loin du Soleil, plus son année est longue. Mars est plus loin que la Terre, donc son année dure plus longtemps."
          },
          {
            terme: "Vitesse orbitale",
            definition: "v = √(GM/r). C'est la vitesse d'un satellite en orbite circulaire de rayon r. Plus l'orbite est haute (r grand), plus le satellite est lent. En gros : les satellites proches de la Terre vont vite, les lointains vont lentement."
          },
          {
            terme: "Satellite géostationnaire",
            definition: "Satellite en orbite équatoriale circulaire avec T = 24 h. Il paraît immobile vu depuis le sol terrestre. Son altitude est d'environ 36 000 km. En gros : c'est le satellite des antennes TV, toujours au même endroit dans le ciel."
          },
          {
            terme: "Accélération centripète",
            definition: "a = v²/r = GM/r², dirigée vers le centre de l'astre. C'est elle qui courbe la trajectoire du satellite pour le maintenir sur son orbite. En gros : sans cette accélération, le satellite partirait tout droit dans l'espace."
          },
          {
            terme: "Apesanteur",
            definition: "État d'un objet en chute libre. Les astronautes « flottent » car ils tombent en même temps que leur station. La gravité existe toujours (elle maintient l'ISS en orbite) mais on ne la ressent pas. C'est comme être dans un ascenseur en chute libre."
          },
          {
            terme: "Périhélie et aphélie",
            definition: "Périhélie : point de l'orbite le plus proche du Soleil (vitesse maximale). Aphélie : point le plus éloigné (vitesse minimale). En gros : proche = rapide, loin = lent. C'est la conséquence de la loi des aires de Kepler."
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
            explication: "Force attractive entre deux masses M et m séparées de r. G ≈ 6,67 × 10⁻¹¹ N·m²·kg⁻². Toujours attractive."
          },
          {
            nom: "Vitesse orbitale",
            formule: "v = √(G·M / r)",
            explication: "Vitesse d'un satellite en orbite circulaire de rayon r. Plus r est grand, plus v est petit."
          },
          {
            nom: "Troisième loi de Kepler",
            formule: "T² = (4π² / G·M) · r³",
            explication: "Relie période T et rayon r pour une orbite circulaire. Le rapport T²/r³ est le même pour tous les satellites d'un astre."
          },
          {
            nom: "Accélération gravitationnelle",
            formule: "g = G·M / r²",
            explication: "Accélération due à la gravité à la distance r du centre d'un astre de masse M. Diminue en 1/r²."
          },
          {
            nom: "Périmètre orbital",
            formule: "v = 2πr / T",
            explication: "Relation cinématique pour un mouvement circulaire uniforme. Le satellite parcourt le périmètre 2πr en une période T."
          },
          {
            nom: "Accélération centripète",
            formule: "a = v² / r = ω²·r",
            explication: "Accélération dirigée vers le centre. ω = 2π/T est la vitesse angulaire (en rad/s)."
          },
          {
            nom: "Altitude d'un satellite géostationnaire",
            formule: "r = ∛(G·M·T² / 4π²)",
            explication: "On isole r de la 3ème loi de Kepler. Avec T = 24 h et M = masse de la Terre, on trouve r ≈ 42 200 km (altitude ≈ 36 000 km)."
          },
          {
            nom: "Énergie potentielle gravitationnelle",
            formule: "Ep = −G·M·m / r",
            explication: "Énergie liée à la position dans le champ gravitationnel. Négative car il faut fournir de l'énergie pour s'éloigner."
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
        texte: "Ce chapitre modélise l'écoulement des fluides (liquides et gaz) au repos et en mouvement. On y découvre pourquoi un bateau flotte, pourquoi l'eau accélère dans un tuyau étroit et comment vole un avion.",
        sections: [
          {
            titre: "Statique des fluides : pression et profondeur",
            contenu: `Dans un fluide au repos, la pression augmente avec la profondeur.\nLa formule fondamentale est :\n\nΔP = ρ · g · Δz\n\nTraduction : la différence de pression entre deux points dépend de la masse volumique ρ, de g et de la différence de hauteur Δz.\n\nC'est pour ça qu'un plongeur ressent la pression sur ses oreilles en descendant.\nPlus il descend, plus la colonne d'eau au-dessus est lourde.\n\nÀ 10 m de profondeur, la pression augmente d'environ 1 bar (1 atm).\n\nLa pression en un point donné s'écrit :\n\nP = P₀ + ρ · g · h\n\nP₀ est la pression atmosphérique en surface.\n\nEn gros : plus c'est profond, plus la pression est forte.\nC'est comme empiler des briques : en bas, le poids est maximal.`
          },
          {
            titre: "La poussée d'Archimède",
            contenu: `Tout corps plongé dans un fluide reçoit une poussée vers le haut.\nC'est la poussée d'Archimède :\n\nΠ = ρ_fluide · g · V_immergé\n\nTraduction : la poussée est égale au poids du fluide déplacé.\nPlus le volume immergé est grand, plus la poussée est forte.\n\nSi Π > Poids : l'objet flotte.\nSi Π < Poids : l'objet coule.\nSi Π = Poids : l'objet est en équilibre.\n\nC'est comme quand tu pousses un ballon sous l'eau.\nL'eau « refuse » de se laisser comprimer et repousse le ballon vers le haut.\n\nUn bateau flotte car sa coque creuse déplace beaucoup d'eau.\nLa poussée compense le poids total du bateau.\n\nEn gros : un objet flotte s'il déplace assez de fluide pour compenser son poids.`
          },
          {
            titre: "Lignes de courant et débit volumique",
            contenu: `Quand un fluide s'écoule, chaque particule suit un chemin : c'est une ligne de courant.\nEn régime permanent, ces lignes ne changent pas au cours du temps.\n\nLe débit volumique DV mesure le volume de fluide qui passe par seconde :\n\nDV = S · v\n\nTraduction : section du tuyau S (en m²) fois la vitesse du fluide v (en m/s).\nL'unité est le m³/s.\n\nConservation du débit : dans un tuyau, le débit est constant.\nSi le tuyau se rétrécit (S diminue), la vitesse augmente.\n\nS₁ · v₁ = S₂ · v₂\n\nC'est comme mettre le pouce sur un tuyau d'arrosage.\nLa section diminue, l'eau accélère et le jet va plus loin.\n\nEn gros : tuyau étroit = vitesse élevée, tuyau large = vitesse faible.`
          },
          {
            titre: "Théorème de Bernoulli",
            contenu: `Le théorème de Bernoulli s'applique le long d'une ligne de courant.\nIl relie pression, vitesse et altitude :\n\nP + ½ρv² + ρgz = constante\n\nTraduction : si un fluide accélère, sa pression baisse.\nSi un fluide monte, sa pression baisse aussi.\n\nConditions d'application :\n• Fluide parfait (pas de frottements internes).\n• Fluide incompressible (volume constant).\n• Régime permanent (les grandeurs ne changent pas en un point).\n\nC'est le principe de l'aile d'avion.\nL'air va plus vite au-dessus de l'aile.\nDonc la pression y est plus faible.\nL'aile est « aspirée » vers le haut.\n\nEn gros : vitesse augmente = pression diminue, et inversement.`
          },
          {
            titre: "Torricelli et effet Venturi",
            contenu: `Le théorème de Torricelli est un cas particulier de Bernoulli.\nOn considère un réservoir percé d'un petit trou en bas.\n\nLa vitesse de sortie de l'eau est :\n\nv = √(2 · g · h)\n\nTraduction : h est la hauteur d'eau au-dessus du trou.\nPlus le réservoir est rempli, plus l'eau sort vite.\n\nC'est comme un château d'eau : l'eau jaillit fort car la hauteur est grande.\n\nL'effet Venturi est une autre conséquence de Bernoulli.\nDans un tuyau qui se rétrécit :\n\n• La section diminue.\n• La vitesse augmente (conservation du débit).\n• La pression baisse (Bernoulli).\n\nC'est utilisé dans les carburateurs, les vaporisateurs et les trompes à eau.\n\nEn gros : Torricelli = vitesse à la sortie d'un trou.\nVenturi = rétrécissement = vitesse ↑ et pression ↓.`
          }
        ]
      },
      page2_concepts: {
        titre: "Concepts clés",
        concepts: [
          {
            terme: "Pression hydrostatique",
            definition: "P = P₀ + ρgh. C'est la pression dans un fluide au repos. Elle augmente avec la profondeur h. En gros : plus tu descends, plus l'eau au-dessus « appuie » sur toi. C'est comme empiler des briques : plus il y en a, plus c'est lourd en bas."
          },
          {
            terme: "Poussée d'Archimède",
            definition: "Π = ρ_fluide · g · V_immergé. Force verticale ascendante (vers le haut) subie par tout corps plongé dans un fluide. Elle est égale au poids du fluide déplacé. En gros : le fluide « pousse » l'objet vers le haut. C'est pour ça que tu te sens plus léger dans une piscine."
          },
          {
            terme: "Condition de flottaison",
            definition: "Un objet flotte si sa masse volumique (densité) est inférieure à celle du fluide. Dans ce cas, la poussée d'Archimède compense le poids. En gros : léger = ça flotte, lourd = ça coule. Le bois flotte sur l'eau, le plomb coule."
          },
          {
            terme: "Ligne de courant",
            definition: "Courbe tangente au vecteur vitesse en chaque point du fluide. En régime permanent (rien ne change dans le temps), les particules suivent les lignes de courant. C'est comme les traces de fumée dans un tunnel aérodynamique."
          },
          {
            terme: "Débit volumique",
            definition: "D = S·v en m³/s. C'est le volume de fluide qui traverse une section S par unité de temps. En gros : c'est « combien d'eau passe par seconde ». Le débit est constant dans un tube fermé."
          },
          {
            terme: "Théorème de Bernoulli",
            definition: "P + ½ρv² + ρgh = constante le long d'une ligne de courant. C'est la conservation de l'énergie pour un fluide parfait incompressible en régime permanent. En gros : si la vitesse augmente, la pression baisse (et inversement)."
          },
          {
            terme: "Effet Venturi",
            definition: "Quand la section d'un tube diminue, la vitesse du fluide augmente et la pression diminue. C'est une conséquence directe de Bernoulli + conservation du débit. En gros : tuyau plus étroit = fluide plus rapide = pression plus basse. C'est le principe du vaporisateur de parfum."
          },
          {
            terme: "Tube de Torricelli",
            definition: "Un réservoir percé d'un trou en bas laisse sortir le fluide à la vitesse v = √(2gh). Plus le niveau d'eau h est haut, plus le jet est rapide. C'est une application directe de Bernoulli entre la surface et le trou."
          },
          {
            terme: "Fluide parfait incompressible",
            definition: "Modèle idéal de fluide. Parfait = pas de viscosité (pas de frottements internes entre les couches de fluide). Incompressible = la masse volumique ρ reste constante (le fluide ne se comprime pas). En gros : c'est un fluide idéalisé, sans perte d'énergie."
          },
          {
            terme: "Pression dynamique et statique",
            definition: "Pression statique P : pression du fluide au repos. Pression dynamique ½ρv² : pression liée au mouvement. Bernoulli dit que leur somme (plus ρgh) est constante. C'est comme un budget : si tu dépenses plus en vitesse, il te reste moins en pression."
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
            explication: "P₀ pression en surface (souvent la pression atmosphérique). ρ masse volumique du fluide. h profondeur. Résultat en Pa."
          },
          {
            nom: "Poussée d'Archimède",
            formule: "Π = ρ_fluide · g · V_immergé",
            explication: "Force vers le haut sur un corps immergé. Égale au poids du fluide déplacé. Attention : c'est ρ du fluide, pas de l'objet."
          },
          {
            nom: "Conservation du débit",
            formule: "S₁ · v₁ = S₂ · v₂",
            explication: "Le débit est constant dans un tube de courant. Si la section S diminue, la vitesse v augmente proportionnellement."
          },
          {
            nom: "Théorème de Bernoulli",
            formule: "P + ½ρv² + ρgh = constante",
            explication: "Conservation de l'énergie par unité de volume le long d'une ligne de courant. Valable pour un fluide parfait incompressible."
          },
          {
            nom: "Vitesse de Torricelli",
            formule: "v = √(2gh)",
            explication: "Vitesse d'écoulement par un orifice à une profondeur h sous la surface libre. Déduite de Bernoulli."
          },
          {
            nom: "Pression dynamique",
            formule: "P_dyn = ½ρv²",
            explication: "Terme de pression lié à la vitesse du fluide dans l'équation de Bernoulli. En Pa."
          },
          {
            nom: "Pression totale (tube de Pitot)",
            formule: "P_totale = P_statique + ½ρv²",
            explication: "La pression totale est la somme de la pression statique et de la pression dynamique. Utilisée pour mesurer la vitesse d'un avion."
          },
          {
            nom: "Condition de flottaison",
            formule: "ρ_objet < ρ_fluide",
            explication: "L'objet flotte si sa masse volumique est inférieure à celle du fluide. Sinon il coule."
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
        texte: "La thermodynamique étudie les échanges d'énergie entre un système et son environnement. Le 1er principe dit que l'énergie ne se crée ni ne se détruit : elle se transforme.",
        sections: [
          {
            titre: "Le modèle du gaz parfait",
            contenu: `Un gaz parfait est un modèle simplifié.\nLes molécules n'interagissent pas entre elles.\nElles rebondissent comme des billes sans se coller.\n\nLa loi fondamentale est :\n\nPV = nRT\n\nTraduction :\n• P = pression en Pascals (Pa).\n• V = volume en m³.\n• n = nombre de moles de gaz.\n• R = 8,314 J/(mol·K) (constante des gaz parfaits).\n• T = température en Kelvin (K = °C + 273).\n\nAttention : on utilise toujours les Kelvin, jamais les °C.\n\nSi la pression augmente à volume constant, la température monte.\nC'est comme une cocotte-minute : en chauffant, la pression grimpe.\n\nEn gros : PV = nRT relie pression, volume et température d'un gaz.`
          },
          {
            titre: "L'énergie interne U",
            contenu: `L'énergie interne est l'énergie « cachée » dans un système.\nElle vient de l'agitation désordonnée des molécules.\n\nPlus les molécules bougent vite, plus U est grand.\nPlus la température est élevée, plus U est grand.\n\nPour un gaz parfait, U dépend uniquement de la température.\nSi T ne change pas, U ne change pas non plus.\n\nU ne dépend ni de la pression ni du volume.\n\nC'est comme une salle de bal.\nL'énergie interne, c'est l'agitation des danseurs.\nPlus ils dansent vite, plus il fait chaud.\n\nOn ne mesure pas U directement.\nOn mesure sa variation : ΔU.\n\nEn gros : U = énergie microscopique liée à la température.`
          },
          {
            titre: "Travail W et chaleur Q",
            contenu: `Un système peut échanger de l'énergie de deux manières :\n\n1. Le travail W : énergie mécanique échangée.\nPar exemple, comprimer un gaz avec un piston.\n\nW = −P_ext · ΔV\n\nTraduction : si le gaz est comprimé (ΔV < 0), W > 0.\nLe système reçoit de l'énergie.\nSi le gaz se détend (ΔV > 0), W < 0.\nLe système perd de l'énergie.\n\n2. La chaleur Q : énergie thermique échangée.\nPar exemple, chauffer un gaz avec une flamme.\n\nQ = m · c · ΔT (pour un solide ou un liquide)\nQ = C · ΔT (capacité thermique totale)\n\nSi Q > 0, le système reçoit de la chaleur.\nSi Q < 0, le système cède de la chaleur.\n\nC'est comme une pompe à vélo.\nTu fournis du travail (compression) et l'air chauffe (chaleur dégagée).\n\nEn gros : W = énergie mécanique, Q = énergie thermique.`
          },
          {
            titre: "Le premier principe de la thermodynamique",
            contenu: `Le premier principe est la conservation de l'énergie :\n\nΔU = W + Q\n\nTraduction : la variation d'énergie interne du système est la somme du travail et de la chaleur reçus.\n\nL'énergie ne se crée pas.\nL'énergie ne se détruit pas.\nElle se transforme d'une forme à une autre.\n\nC'est comme un compte en banque.\nΔU = ce que tu reçois (W + Q) moins ce que tu dépenses.\nLe solde change, mais l'argent total est conservé.\n\nCe principe s'applique à tout système fermé.\nPas de matière qui entre ou sort.\n\nEn gros : ΔU = W + Q.\nTout ce qui rentre dans le système augmente U.\nTout ce qui sort diminue U.`
          },
          {
            titre: "Les transformations remarquables",
            contenu: `Quatre types de transformations sont à connaître :\n\n1. Isotherme (T = constante) :\nPour un gaz parfait, ΔU = 0 (car U ne dépend que de T).\nDonc W = −Q : tout le travail part en chaleur.\n\n2. Isochore (V = constant) :\nΔV = 0, donc W = 0.\nΔU = Q : toute la chaleur va dans U.\nC'est chauffer un gaz dans un récipient fermé.\n\n3. Isobare (P = constante) :\nLe gaz se dilate ou se comprime à pression constante.\nW = −P·ΔV.\nΔU = W + Q.\n\n4. Adiabatique (Q = 0, pas d'échange thermique) :\nΔU = W.\nSi on comprime, le gaz chauffe.\nSi on détend, le gaz refroidit.\n\nC'est comme un moteur diesel : la compression adiabatique chauffe l'air assez pour enflammer le gasoil.\n\nEn gros : iso = constant.\nIsotherme = T fixe, isochore = V fixe, isobare = P fixe, adiabatique = Q = 0.`
          }
        ]
      },
      page2_concepts: {
        titre: "Concepts clés",
        concepts: [
          {
            terme: "Gaz parfait",
            definition: "Modèle idéal de gaz : les molécules sont des points qui n'interagissent pas entre elles. Il obéit à PV = nRT. En gros : c'est un gaz « simplifié » où on ignore les forces entre molécules. C'est comme des billes qui rebondissent sans jamais se coller."
          },
          {
            terme: "Énergie interne U",
            definition: "C'est la somme des énergies cinétiques microscopiques (l'agitation thermique des molécules). Pour un gaz parfait monoatomique : U = 3/2 nRT. En gros : c'est l'énergie « cachée » à l'intérieur du gaz. Plus T augmente, plus les molécules bougent, plus U est grand."
          },
          {
            terme: "Travail W",
            definition: "Énergie échangée par des forces de pression (compression ou détente). W = −P_ext · ΔV. Si on comprime le gaz (ΔV < 0), W > 0 : le gaz reçoit de l'énergie. C'est comme écraser un ressort : tu lui donnes de l'énergie."
          },
          {
            terme: "Chaleur Q",
            definition: "Énergie échangée par transfert thermique (quand il y a une différence de température). Q > 0 si le système reçoit de la chaleur. En gros : la chaleur c'est de l'énergie qui passe du chaud vers le froid. C'est comme l'eau qui coule du haut vers le bas."
          },
          {
            terme: "1er principe de la thermodynamique",
            definition: "ΔU = W + Q. La variation d'énergie interne est la somme du travail et de la chaleur reçus. C'est la conservation de l'énergie appliquée à la thermodynamique. En gros : tout ce que le système reçoit (travail ou chaleur) augmente son énergie interne."
          },
          {
            terme: "Capacité thermique C",
            definition: "C = Q/ΔT en J/K. C'est l'énergie nécessaire pour élever la température de 1 Kelvin. Plus C est grand, plus il faut d'énergie pour chauffer l'objet. En gros : l'eau a une grande capacité thermique, c'est pour ça que la mer met du temps à se réchauffer."
          },
          {
            terme: "Transformation isobare",
            definition: "Transformation à pression constante (P = cte). Le travail vaut W = −P · ΔV. C'est comme chauffer de l'eau dans une casserole ouverte : la pression atmosphérique reste constante."
          },
          {
            terme: "Transformation isotherme",
            definition: "Transformation à température constante (T = cte). Pour un gaz parfait : ΔU = 0, donc W = −Q. En gros : tout le travail fourni est évacué sous forme de chaleur (et inversement)."
          },
          {
            terme: "Transformation isochore",
            definition: "Transformation à volume constant (ΔV = 0). Donc W = 0 et ΔU = Q. En gros : pas de compression ni de détente, toute la chaleur reçue augmente la température. C'est comme chauffer un gaz dans une boîte fermée et rigide."
          },
          {
            terme: "Transformation adiabatique",
            definition: "Transformation sans échange de chaleur avec l'extérieur (Q = 0). Donc ΔU = W. En gros : le système est parfaitement isolé thermiquement. C'est comme comprimer de l'air très vite dans une pompe : pas le temps d'échanger de la chaleur."
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
            explication: "Relie pression (Pa), volume (m³), quantité de matière (mol) et température (Kelvin). R = 8,314 J/(mol·K)."
          },
          {
            nom: "1er principe de la thermodynamique",
            formule: "ΔU = W + Q",
            explication: "La variation d'énergie interne = travail + chaleur reçus par le système. C'est la conservation de l'énergie."
          },
          {
            nom: "Travail des forces de pression",
            formule: "W = −P_ext · ΔV",
            explication: "À pression extérieure constante. W > 0 en compression (ΔV < 0), W < 0 en détente (ΔV > 0)."
          },
          {
            nom: "Énergie interne (gaz parfait monoatomique)",
            formule: "U = 3/2 · nRT",
            explication: "Ne dépend que de T pour un gaz parfait. Augmente si T augmente. n en mol, T en Kelvin."
          },
          {
            nom: "Chaleur échangée",
            formule: "Q = C · ΔT",
            explication: "C est la capacité thermique du système (en J/K). Q en Joules. ΔT = T_finale − T_initiale en Kelvin."
          },
          {
            nom: "Capacité thermique massique",
            formule: "Q = m · c · ΔT",
            explication: "c est la capacité thermique massique en J/(kg·K). Pour l'eau : c ≈ 4180 J/(kg·K). m est la masse en kg."
          },
          {
            nom: "Relation pression-température (isochore, gaz parfait)",
            formule: "P/T = constante (à V et n constants)",
            explication: "Si le volume est fixe, la pression est proportionnelle à la température. Chauffer un gaz à volume constant augmente la pression."
          },
          {
            nom: "Relation pression-volume (isotherme, gaz parfait)",
            formule: "P·V = constante (à T et n constants)",
            explication: "Loi de Boyle-Mariotte : si T est fixe, P et V sont inversement proportionnels. Comprime = pression monte."
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
        texte: "Les transferts thermiques expliquent comment la chaleur se propage d'un endroit à un autre. La chaleur va toujours du chaud vers le froid, jamais l'inverse spontanément.",
        sections: [
          {
            titre: "Les trois modes de transfert thermique",
            contenu: `La chaleur peut se déplacer de trois façons différentes :\n\n1. La conduction : transfert par contact direct.\nLa chaleur passe de proche en proche à travers la matière.\nC'est une cuillère en métal qui chauffe dans du café.\nLes atomes vibrent et transmettent l'énergie à leurs voisins.\n\n2. La convection : transfert par mouvement du fluide.\nL'air chaud monte, l'air froid descend.\nC'est le courant d'air au-dessus d'un radiateur.\nLe fluide transporte la chaleur en se déplaçant.\n\n3. Le rayonnement : transfert par ondes électromagnétiques.\nAucun support matériel n'est nécessaire.\nC'est la chaleur du Soleil à travers le vide spatial.\nTout corps chaud émet du rayonnement infrarouge.\n\nEn gros : conduction = contact, convection = mouvement, rayonnement = ondes.\nUne maison bien isolée bloque les trois.`
          },
          {
            titre: "Résistance thermique et flux thermique",
            contenu: `Le flux thermique Φ mesure la quantité de chaleur transférée par seconde.\nIl s'exprime en Watts (W).\n\nL'analogie avec l'électricité est très utile :\n\n• Flux thermique Φ ↔ courant électrique I.\n• Différence de température ΔT ↔ tension U.\n• Résistance thermique Rth ↔ résistance électrique R.\n\nLa loi s'écrit :\n\nΦ = ΔT / Rth\n\nTraduction : plus l'écart de température est grand, plus le flux est fort.\nPlus la résistance thermique est grande, moins la chaleur passe.\n\nC'est comme l'eau dans un tuyau.\nΔT est la pression, Rth est l'étroitesse du tuyau.\nGrande pression + tuyau large = beaucoup d'eau qui passe.\n\nEn gros : Φ = ΔT / Rth, analogue à I = U/R en électricité.`
          },
          {
            titre: "La conduction : résistance et conductivité",
            contenu: `Pour la conduction à travers une paroi :\n\nRth = e / (λ · S)\n\nTraduction :\n• e = épaisseur de la paroi (en m).\n• λ = conductivité thermique du matériau (en W/(m·K)).\n• S = surface de la paroi (en m²).\n\nλ petit = bon isolant.\nLa laine de verre a λ ≈ 0,04 W/(m·K).\n\nλ grand = bon conducteur thermique.\nLe cuivre a λ ≈ 390 W/(m·K).\n\nC'est pour ça que les casseroles sont en cuivre.\nEt que les murs sont isolés avec de la laine de verre.\n\nPlusieurs parois en série :\nRth_total = Rth₁ + Rth₂ + Rth₃ + ...\n\nC'est comme des résistances électriques en série : on les additionne.\n\nEn gros : paroi épaisse et isolante = grande Rth = peu de chaleur passe.`
          },
          {
            titre: "Le rayonnement : loi de Stefan-Boltzmann",
            contenu: `Tout corps émet un rayonnement qui dépend de sa température.\nPlus il est chaud, plus il rayonne.\n\nLa puissance rayonnée suit la loi de Stefan-Boltzmann :\n\nΦ = σ · S · T⁴\n\nTraduction :\n• σ = 5,67 × 10⁻⁸ W/(m²·K⁴) (constante de Stefan).\n• S = surface du corps (en m²).\n• T = température en Kelvin (pas en °C !).\n\nAttention : T est à la puissance 4.\nSi la température double, la puissance rayonnée est multipliée par 16.\n\nC'est comme un fer chauffé au rouge.\nÀ 500°C il rougit. À 1 500°C il devient blanc.\nLa puissance émise explose avec la température.\n\nLe Soleil (T ≈ 5 800 K) rayonne énormément.\nLa Terre (T ≈ 288 K) rayonne bien moins.\n\nEn gros : Φ = σST⁴, la puissance rayonnée croît très vite avec T.`
          },
          {
            titre: "La convection : loi de Newton thermique",
            contenu: `Le transfert conducto-convectif se produit entre une paroi et un fluide en mouvement.\nLa loi de Newton thermique s'écrit :\n\nΦ = h · S · (T_paroi − T_fluide)\n\nTraduction :\n• h = coefficient de transfert convectif (en W/(m²·K)).\n• S = surface d'échange (en m²).\n• (T_paroi − T_fluide) = écart de température.\n\nh dépend du fluide et de la vitesse de l'écoulement.\nUn ventilateur augmente h : l'air bouge plus vite, la chaleur part plus vite.\n\nC'est comme souffler sur de la soupe chaude.\nLe souffle (convection forcée) emporte la chaleur plus vite.\nSans souffle, la soupe refroidit lentement (convection naturelle).\n\nConvection naturelle : le fluide bouge seul (air chaud qui monte).\nConvection forcée : on force le mouvement (ventilateur, pompe).\n\nEn gros : Φ = hS(Tparoi − Tfluide).\nPlus le fluide bouge vite, plus h est grand, plus ça refroidit vite.`
          }
        ]
      },
      page2_concepts: {
        titre: "Concepts clés",
        concepts: [
          {
            terme: "Conduction thermique",
            definition: "Transfert de chaleur par contact direct, sans mouvement de matière. La chaleur passe de molécule en molécule, de proche en proche. Décrit par la loi de Fourier : Φ = λ·S·ΔT/e. C'est comme une chaîne humaine qui se passe un seau : personne ne bouge, mais le seau avance."
          },
          {
            terme: "Convection",
            definition: "Transfert de chaleur par mouvement du fluide (liquide ou gaz). Le fluide chaud monte, le fluide froid descend. Naturelle (différence de densité, comme l'air chaud qui monte) ou forcée (ventilateur, pompe). C'est comme remuer une soupe : le mouvement distribue la chaleur."
          },
          {
            terme: "Rayonnement thermique",
            definition: "Émission d'ondes électromagnétiques (surtout infrarouges). C'est le seul mode qui fonctionne dans le vide. P = σ·S·T⁴ (loi de Stefan-Boltzmann). En gros : tout corps chaud émet de la lumière invisible (infrarouge). C'est comme ça que le Soleil nous réchauffe à 150 millions de km."
          },
          {
            terme: "Flux thermique Φ",
            definition: "Puissance thermique en Watts (énergie par seconde). Φ = ΔT/R_th. C'est l'analogue du courant électrique I = U/R. En gros : plus l'écart de température est grand et plus la résistance thermique est faible, plus la chaleur passe vite."
          },
          {
            terme: "Résistance thermique R_th",
            definition: "R_th = e/(λ·S) en K/W. Elle mesure la capacité d'une paroi à s'opposer au passage de la chaleur. Plus R_th est grand, meilleur est l'isolant. Les résistances en série s'additionnent. C'est comme des barrages successifs sur une rivière."
          },
          {
            terme: "Conductivité thermique λ",
            definition: "En W/(m·K). Elle mesure la capacité d'un matériau à conduire la chaleur. Cuivre ≈ 400 (excellent conducteur), laine de verre ≈ 0,04 (excellent isolant). En gros : petit λ = bon isolant, grand λ = bon conducteur."
          },
          {
            terme: "Coefficient conducto-convectif h",
            definition: "En W/(m²·K). Il caractérise l'échange thermique entre une paroi solide et un fluide en mouvement. Grand h = échange rapide (vent fort). Petit h = échange lent (air calme). C'est pourquoi le vent te fait sentir plus froid."
          },
          {
            terme: "Constante de Stefan-Boltzmann σ",
            definition: "σ = 5,67 × 10⁻⁸ W/(m²·K⁴). Constante fondamentale du rayonnement thermique. La puissance rayonnée croît en T⁴ : doubler la température multiplie la puissance par 16 !"
          },
          {
            terme: "Analogie thermique-électrique",
            definition: "On peut traiter les transferts thermiques comme des circuits électriques. Φ (flux) ↔ I (courant), ΔT (écart de température) ↔ U (tension), R_th ↔ R (résistance). En gros : les mêmes méthodes de calcul fonctionnent pour les deux domaines."
          },
          {
            terme: "Régime permanent thermique",
            definition: "État où les températures ne varient plus dans le temps. Le flux thermique est constant à travers la paroi. En gros : le système a atteint son équilibre, les températures sont stables. C'est comme une rivière à débit constant."
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
            explication: "λ conductivité (W/(m·K)), S surface (m²), e épaisseur (m), ΔT écart de température (K). Φ en Watts."
          },
          {
            nom: "Résistance thermique (conduction)",
            formule: "R_th = e / (λ · S)",
            explication: "En K/W. Analogue à une résistance électrique. Pour plusieurs couches en série : R_total = R₁ + R₂ + ..."
          },
          {
            nom: "Loi de Stefan-Boltzmann",
            formule: "P = σ · S · T⁴",
            explication: "Puissance rayonnée par un corps noir. σ ≈ 5,67 × 10⁻⁸ W/(m²·K⁴). T obligatoirement en Kelvin."
          },
          {
            nom: "Loi de Newton (conducto-convectif)",
            formule: "Φ = h · S · (T_paroi − T_fluide)",
            explication: "h coefficient de transfert (W/(m²·K)), S surface d'échange. Le flux est proportionnel à l'écart de température."
          },
          {
            nom: "Résistance thermique conducto-convective",
            formule: "R_th = 1 / (h · S)",
            explication: "Résistance thermique associée à l'échange entre une paroi et un fluide en mouvement. En K/W."
          },
          {
            nom: "Énergie thermique échangée",
            formule: "Q = Φ · Δt",
            explication: "Énergie = puissance × durée. Q en Joules, Φ en Watts, Δt en secondes. C'est comme distance = vitesse × temps."
          },
          {
            nom: "Loi de Fourier (forme locale)",
            formule: "φ = −λ · dT/dx",
            explication: "φ est la densité de flux (W/m²). Le signe − indique que la chaleur va du chaud vers le froid (T décroissant)."
          },
          {
            nom: "Bilan thermique d'une paroi multicouche",
            formule: "Φ = ΔT_total / (R₁ + R₂ + ... + Rₙ)",
            explication: "On additionne les résistances thermiques de toutes les couches. Le flux est le même à travers chaque couche."
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
        texte: "Le son est une onde mécanique qui a besoin de matière pour se propager. Ce chapitre étudie ses caractéristiques (intensité, hauteur, timbre) et l'effet Doppler.",
        sections: [
          {
            titre: "Le son : une onde mécanique",
            contenu: `Le son est une vibration de la matière.\nLes molécules d'air se compriment et se dilatent successivement.\nC'est une onde longitudinale : la vibration se fait dans le sens de propagation.\n\nLe son a besoin d'un milieu matériel pour se propager.\nDans le vide, pas de molécules = pas de son.\nC'est pour ça qu'il n'y a aucun bruit dans l'espace.\n\nDans l'air à 20°C, le son voyage à environ 340 m/s.\nDans l'eau, il va à 1 500 m/s (4 fois plus vite).\nDans l'acier, environ 5 000 m/s.\n\nC'est beaucoup plus lent que la lumière (300 000 km/s).\nC'est pourquoi tu vois l'éclair avant d'entendre le tonnerre.\n\nEn gros : le son = vibration de la matière.\nPas de matière = pas de son.`
          },
          {
            titre: "Intensité sonore et niveau sonore",
            contenu: `L'intensité sonore I mesure la puissance transportée par unité de surface :\n\nI = P / S\n\nTraduction : P est la puissance acoustique (en W), S est la surface (en m²).\nL'unité est le W/m².\n\nL'intensité diminue avec la distance.\nPour une source ponctuelle : I ∝ 1/r².\nSi tu doubles la distance, l'intensité est divisée par 4.\n\nC'est comme une lampe : plus tu t'éloignes, moins tu reçois de lumière.\n\nLe niveau sonore L se mesure en décibels (dB) :\n\nL = 10 · log(I / I₀)\n\nI₀ = 10⁻¹² W/m² est le seuil d'audibilité humaine.\n\nL'échelle est logarithmique :\n• +10 dB = intensité × 10.\n• +20 dB = intensité × 100.\n• +3 dB = intensité × 2.\n\nEn gros : les dB ne s'ajoutent pas comme des nombres normaux.\n+10 dB, c'est 10 fois plus puissant, pas « un peu plus fort ».`
          },
          {
            titre: "Hauteur, timbre et spectre",
            contenu: `Le son a trois caractéristiques perceptibles :\n\n1. La hauteur : c'est la fréquence fondamentale.\nAigu = haute fréquence (ex : sifflet, 4 000 Hz).\nGrave = basse fréquence (ex : contrebasse, 40 Hz).\nL'oreille humaine entend de 20 Hz à 20 000 Hz.\n\n2. Le timbre : c'est ce qui distingue deux instruments jouant la même note.\nUn piano et une guitare à même fréquence sonnent différemment.\nLe timbre dépend des harmoniques (multiples de la fondamentale).\n\n3. L'intensité : c'est le « volume » (fort ou faible).\n\nLe spectre en fréquences montre les harmoniques d'un son.\nC'est comme une « empreinte digitale » sonore.\nChaque instrument a son propre spectre.\n\nUn son pur n'a qu'une seule fréquence (un diapason).\nUn son complexe est la somme de plusieurs harmoniques.\n\nEn gros : hauteur = fréquence, timbre = harmoniques, intensité = volume.`
          },
          {
            titre: "Atténuation du son",
            contenu: `Le son s'atténue quand il se propage.\nDeux causes principales :\n\n1. Atténuation géométrique : l'onde se répartit sur une surface de plus en plus grande.\nPour une source ponctuelle : I ∝ 1/r².\nÀ double distance, l'intensité est divisée par 4.\nCela correspond à −6 dB quand on double la distance.\n\n2. Absorption par le milieu : l'air, les murs, les matériaux absorbent le son.\nLes matériaux poreux (mousse, moquette) absorbent bien.\nLes matériaux lisses et durs (carrelage, béton) réfléchissent.\n\nC'est comme crier dans une forêt vs crier dans une cathédrale.\nLa forêt absorbe le son (arbres, feuilles).\nLa cathédrale le réfléchit (murs en pierre) : c'est l'écho.\n\nEn gros : le son faiblit avec la distance.\nÉloignement = atténuation géométrique.\nMatériaux = absorption.`
          },
          {
            titre: "L'effet Doppler",
            contenu: `L'effet Doppler change la fréquence perçue quand la source ou l'observateur bouge.\n\nLa formule générale est :\n\nfr = fe · (c − Vr) / (c − Ve)\n\nTraduction :\n• fr = fréquence reçue par l'observateur.\n• fe = fréquence émise par la source.\n• c = vitesse du son dans le milieu.\n• Vr = vitesse du récepteur (positif s'il s'éloigne de la source).\n• Ve = vitesse de l'émetteur (positif s'il se rapproche du récepteur).\n\nSi la source se rapproche : les ondes sont comprimées.\nLa fréquence augmente. Le son est plus aigu.\n\nSi la source s'éloigne : les ondes sont étirées.\nLa fréquence diminue. Le son est plus grave.\n\nC'est comme les vagues d'un bateau.\nSi le bateau avance vers toi, les vagues arrivent plus rapprochées.\n\nApplications :\n• Échographie Doppler : mesure la vitesse du sang.\n• Radar routier : mesure la vitesse des voitures.\n• Astronomie : redshift (éloignement) et blueshift (rapprochement) des étoiles.\n\nEn gros : source qui approche = son aigu, source qui s'éloigne = son grave.`
          }
        ]
      },
      page2_concepts: {
        titre: "Concepts clés",
        concepts: [
          {
            terme: "Onde sonore",
            definition: "Onde mécanique longitudinale (la vibration se fait dans la direction de propagation). Elle crée des zones de compression et de dilatation de l'air. Elle a besoin d'un milieu matériel : air, eau, solide. En gros : le son fait vibrer l'air comme une vague fait bouger l'eau."
          },
          {
            terme: "Intensité sonore I",
            definition: "Puissance par unité de surface en W/m². I = P/S. Pour une source ponctuelle : I = P/(4πr²). Elle diminue avec le carré de la distance. En gros : si tu doubles la distance, le son est 4 fois moins fort."
          },
          {
            terme: "Niveau sonore L",
            definition: "L = 10·log(I/I₀) en dB. C'est une échelle logarithmique (non linéaire). I₀ = 10⁻¹² W/m² est le seuil d'audibilité. 0 dB = à peine audible, 60 dB = conversation, 120 dB = seuil de douleur. En gros : +10 dB = 10 fois plus d'intensité, +3 dB = 2 fois plus."
          },
          {
            terme: "Hauteur d'un son",
            definition: "La hauteur est liée à la fréquence fondamentale du son. Haute fréquence = son aigu (sifflement). Basse fréquence = son grave (grondement). L'oreille humaine entend de 20 Hz à 20 000 Hz. C'est comme les notes de musique : do grave vs do aigu."
          },
          {
            terme: "Timbre d'un son",
            definition: "Le timbre dépend des harmoniques (fréquences multiples de la fondamentale) présentes dans le son. C'est ce qui permet de distinguer un piano d'une guitare jouant la même note. En gros : c'est la « couleur » du son, sa signature unique."
          },
          {
            terme: "Effet Doppler",
            definition: "Modification de la fréquence perçue quand la source ou l'observateur se déplacent. Source qui approche = son plus aigu (fréquence augmente). Source qui s'éloigne = son plus grave (fréquence diminue). C'est comme les vagues d'un bateau : plus rapprochées devant, plus espacées derrière."
          },
          {
            terme: "Redshift / Blueshift",
            definition: "L'effet Doppler s'applique aussi à la lumière. Redshift (décalage vers le rouge) = la source s'éloigne. Blueshift (décalage vers le bleu) = la source se rapproche. En astronomie, le redshift prouve que l'univers est en expansion. En gros : étoile qui fuit = lumière rougie."
          },
          {
            terme: "Échographie Doppler",
            definition: "Technique médicale qui utilise le décalage Doppler des ultrasons (sons de haute fréquence) réfléchis par le sang pour mesurer sa vitesse dans les vaisseaux. En gros : on « écoute » la vitesse du sang grâce au changement de fréquence."
          },
          {
            terme: "Atténuation",
            definition: "Diminution de l'intensité sonore avec la distance. Pour une source ponctuelle dans toutes les directions : I ∝ 1/r² car l'énergie se répartit sur une sphère de plus en plus grande. En gros : plus tu t'éloignes, moins tu entends."
          },
          {
            terme: "Fréquence et longueur d'onde",
            definition: "Liées par v = λ·f. v est la vitesse du son, λ la longueur d'onde (distance entre deux compressions), f la fréquence (nombre de vibrations par seconde). En gros : un son aigu (f grand) a une petite longueur d'onde, un son grave (f petit) a une grande longueur d'onde."
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
            explication: "En dB. I₀ = 10⁻¹² W/m² (seuil d'audibilité). +10 dB = intensité ×10. +3 dB = intensité ×2."
          },
          {
            nom: "Intensité sonore (source ponctuelle)",
            formule: "I = P / (4πr²)",
            explication: "Pour une source qui émet dans toutes les directions. L'énergie se répartit sur une sphère de rayon r. I en W/m²."
          },
          {
            nom: "Effet Doppler (source mobile, observateur fixe)",
            formule: "f_perçue = f_émise · v / (v ∓ v_source)",
            explication: "Signe − si la source approche (f↑), signe + si elle s'éloigne (f↓). v = vitesse du son dans le milieu."
          },
          {
            nom: "Effet Doppler (observateur mobile, source fixe)",
            formule: "f_perçue = f_émise · (v ± v_obs) / v",
            explication: "Signe + si l'observateur approche la source, signe − s'il s'en éloigne."
          },
          {
            nom: "Relation fréquence-longueur d'onde",
            formule: "v = λ · f",
            explication: "v vitesse de propagation (m/s), λ longueur d'onde (m), f fréquence (Hz). Valable pour toute onde."
          },
          {
            nom: "Décalage Doppler relatif",
            formule: "Δf/f ≈ v_source / v",
            explication: "Approximation pour v_source ≪ v. Permet de calculer la vitesse de la source à partir du décalage de fréquence."
          },
          {
            nom: "Atténuation géométrique",
            formule: "L₂ = L₁ − 20·log(r₂/r₁)",
            explication: "Le niveau sonore diminue de 6 dB quand la distance double. Valable pour une source ponctuelle en champ libre."
          },
          {
            nom: "Période et fréquence",
            formule: "T = 1/f",
            explication: "T est la période (durée d'un cycle) en secondes. f est la fréquence (nombre de cycles par seconde) en Hz."
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
        texte: "La diffraction et les interférences prouvent que la lumière est une onde. Ces phénomènes apparaissent quand une onde rencontre un obstacle ou quand deux ondes se superposent.",
        sections: [
          {
            titre: "La diffraction : l'étalement d'une onde",
            contenu: `Quand une onde passe par une petite ouverture, elle s'étale.\nC'est la diffraction.\n\nC'est comme une vague qui entre dans un port par une passe étroite.\nDe l'autre côté, la vague s'étale dans toutes les directions.\n\nLa condition pour observer la diffraction :\nl'ouverture a doit être comparable à la longueur d'onde λ.\n\nSi a >> λ : pas de diffraction visible.\nLa lumière passe « tout droit ».\n\nSi a ≈ λ : diffraction marquée.\nL'onde s'étale fortement.\n\nPour la lumière visible : λ ≈ 400 à 800 nm.\nDonc il faut des fentes très fines (quelques micromètres).\n\nLa diffraction prouve le caractère ondulatoire de la lumière.\nUn simple rayon ne pourrait pas s'étaler.\n\nEn gros : petite ouverture + onde = étalement.\nC'est la signature d'un comportement ondulatoire.`
          },
          {
            titre: "Diffraction par une fente fine",
            contenu: `Quand un faisceau laser traverse une fente de largeur a, on observe une tache centrale brillante sur un écran.\nDe part et d'autre, des taches secondaires plus faibles.\n\nL'écart angulaire du premier minimum est :\n\nθ = λ / a\n\nTraduction : θ est le demi-angle de la tache centrale (en radians).\nPlus a est petit, plus θ est grand (plus la tache est large).\nPlus λ est grand, plus θ est grand.\n\nSur l'écran, la largeur de la tache centrale vaut :\n\nL = 2 · λ · D / a\n\nD est la distance fente-écran.\n\nC'est contre-intuitif : plus la fente est étroite, plus la tache est large.\nC'est comme serrer un tuyau d'arrosage : le jet s'élargit.\n\nEn gros : θ = λ/a.\nPetite fente = grande diffraction.\nGrande fente = faible diffraction.`
          },
          {
            titre: "Interférences : quand deux ondes se rencontrent",
            contenu: `Quand deux ondes se superposent, elles peuvent se renforcer ou s'annuler.\nC'est le phénomène d'interférences.\n\nTout dépend de la différence de marche δ :\nδ = d₂ − d₁ (différence de chemin parcouru par les deux ondes).\n\n• Interférences constructives : δ = k · λ (k entier).\nLes crêtes coïncident. Les ondes s'ajoutent.\nRésultat : maximum de lumière (frange brillante).\n\n• Interférences destructives : δ = (k + ½) · λ.\nUne crête rencontre un creux. Les ondes s'annulent.\nRésultat : obscurité (frange sombre).\n\nC'est comme deux vagues sur un lac.\nSi les crêtes arrivent ensemble : grosse vague.\nSi crête rencontre creux : l'eau est plate.\n\nCondition indispensable : les sources doivent être cohérentes.\nMême fréquence et déphasage constant.\n\nEn gros : constructif = lumière, destructif = obscurité.\nTout dépend du retard δ entre les deux ondes.`
          },
          {
            titre: "L'expérience des trous de Young",
            contenu: `C'est l'une des expériences les plus célèbres de la physique.\nDeux fentes fines et parallèles, éclairées par une source cohérente.\n\nChaque fente se comporte comme une source secondaire.\nLes deux ondes se superposent sur un écran placé à distance D.\n\nOn observe des franges alternées : brillantes et sombres.\nC'est la preuve directe que la lumière est une onde.\n\nLa différence de marche en un point M de l'écran vaut :\n\nδ = b · x / D\n\nTraduction :\n• b = distance entre les deux fentes.\n• x = position du point M sur l'écran.\n• D = distance fentes-écran.\n\nFrange brillante si δ = kλ, soit x = k · λD/b.\nFrange sombre si δ = (k+½)λ.\n\nEn gros : deux fentes + lumière cohérente = franges claires et sombres alternées.`
          },
          {
            titre: "Interfrange et applications",
            contenu: `L'interfrange i est la distance entre deux franges brillantes consécutives :\n\ni = λ · D / b\n\nTraduction :\n• λ = longueur d'onde de la lumière.\n• D = distance fentes-écran.\n• b = écart entre les deux fentes.\n\nPlus les fentes sont rapprochées (b petit), plus les franges sont espacées.\nPlus l'écran est loin (D grand), plus les franges sont espacées.\nPlus la longueur d'onde est grande (rouge > bleu), plus les franges sont espacées.\n\nEn lumière blanche, chaque couleur a son propre interfrange.\nLes franges sont irisées (arc-en-ciel) sauf la frange centrale qui est blanche.\nAu centre, δ = 0 pour toutes les couleurs : elles s'ajoutent toutes.\n\nApplications :\n• Mesurer λ avec précision.\n• Antireflets sur les lunettes (interférences destructives).\n• Interférométrie en astronomie et en industrie.\n\nEn gros : i = λD/b.\nL'interfrange permet de mesurer des longueurs d'onde.`
          }
        ]
      },
      page2_concepts: {
        titre: "Concepts clés",
        concepts: [
          {
            terme: "Diffraction",
            definition: "Étalement d'une onde quand elle passe par une ouverture ou contourne un obstacle. Elle est significative quand la taille de l'ouverture a est comparable à la longueur d'onde λ. En gros : petite ouverture = grande diffraction. C'est comme une vague qui entre dans un port par une petite passe et s'étale dans tout le bassin."
          },
          {
            terme: "Écart angulaire θ",
            definition: "θ = λ/a (en radians). C'est le demi-angle du cône central de diffraction. Plus l'ouverture a est petite, plus l'étalement est grand. Plus la longueur d'onde λ est grande, plus la diffraction est marquée. En gros : petite fente = grande tache de diffraction."
          },
          {
            terme: "Interférences",
            definition: "Phénomène de superposition de deux ondes cohérentes. Si les crêtes coïncident (en phase), elles s'ajoutent : interférences constructives (lumière maximale). Si crête rencontre creux (opposition de phase), elles s'annulent : interférences destructives (obscurité). C'est comme deux vagues qui se croisent."
          },
          {
            terme: "Différence de marche δ",
            definition: "δ = d₂ − d₁. C'est la différence de chemin parcouru par les deux ondes depuis leurs sources respectives. Si δ = kλ (k entier) : constructif. Si δ = (k+½)λ : destructif. En gros : c'est le « retard » d'une onde par rapport à l'autre."
          },
          {
            terme: "Trous de Young",
            definition: "Expérience historique : deux fentes fines et parallèles éclairées par une source cohérente (même fréquence). Elles produisent des franges d'interférences (bandes claires et sombres alternées) sur un écran. C'est la preuve que la lumière est une onde."
          },
          {
            terme: "Interfrange i",
            definition: "i = λD/a. Distance entre deux franges brillantes (ou sombres) consécutives. λ longueur d'onde, D distance fentes-écran, a écart entre les deux fentes. En gros : plus les fentes sont rapprochées (petit a), plus les franges sont espacées."
          },
          {
            terme: "Cohérence",
            definition: "Deux sources sont cohérentes si elles ont la même fréquence et un déphasage constant dans le temps. C'est la condition indispensable pour observer des interférences stables. En gros : si les deux sources ne vibrent pas « ensemble », les franges bougent trop vite pour être vues."
          },
          {
            terme: "Frange centrale",
            definition: "Frange brillante située au centre de l'écran (là où δ = 0). Elle est toujours constructive quelle que soit la longueur d'onde. C'est pour ça que la frange centrale est blanche en lumière blanche."
          },
          {
            terme: "Tache d'Airy",
            definition: "Figure de diffraction produite par une ouverture circulaire (comme un objectif d'appareil photo). C'est un disque central brillant entouré d'anneaux alternativement sombres et brillants. En gros : c'est la version « ronde » de la diffraction par une fente."
          },
          {
            terme: "Lumière monochromatique vs polychromatique",
            definition: "Monochromatique = une seule longueur d'onde (une seule couleur, ex : laser). Polychromatique = plusieurs longueurs d'onde (lumière blanche). En gros : le laser donne des franges nettes, la lumière blanche donne des franges colorées car chaque couleur a un interfrange différent."
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
            explication: "En radians. a = largeur de la fente. λ = longueur d'onde. Plus a est petit, plus θ est grand (plus de diffraction)."
          },
          {
            nom: "Largeur de la tache centrale",
            formule: "L = 2λD / a",
            explication: "Largeur de la frange centrale sur un écran à la distance D de la fente. L = 2·θ·D."
          },
          {
            nom: "Interfrange (Young)",
            formule: "i = λ · D / a",
            explication: "a = distance entre les deux fentes. D = distance fentes-écran. i augmente si λ ou D augmentent, ou si a diminue."
          },
          {
            nom: "Condition d'interférences constructives",
            formule: "δ = k · λ (k entier)",
            explication: "Les ondes arrivent en phase : les amplitudes s'ajoutent. Maximum de lumière (frange brillante)."
          },
          {
            nom: "Condition d'interférences destructives",
            formule: "δ = (k + ½) · λ",
            explication: "Les ondes arrivent en opposition de phase : les amplitudes s'annulent. Minimum de lumière (frange sombre)."
          },
          {
            nom: "Différence de marche (Young)",
            formule: "δ = a · x / D",
            explication: "Approximation valable quand D ≫ a. x = position sur l'écran par rapport au centre de la figure."
          },
          {
            nom: "Position des franges brillantes",
            formule: "x_k = k · λ · D / a",
            explication: "Position de la k-ième frange brillante sur l'écran. k = 0 est la frange centrale."
          },
          {
            nom: "Position des franges sombres",
            formule: "x_k = (k + ½) · λ · D / a",
            explication: "Position de la k-ième frange sombre sur l'écran. Les franges sombres sont à mi-chemin entre les brillantes."
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
        texte: "Ce chapitre explore la lumière sous deux aspects : onde (optique, lentilles, images) et particule (photons, niveaux d'énergie, effet photoélectrique). C'est la dualité onde-corpuscule.",
        sections: [
          {
            titre: "La lunette astronomique",
            contenu: `Une lunette astronomique est un instrument d'optique pour observer les objets lointains.\nElle est composée de deux lentilles convergentes :\n\n• L'objectif (L₁) : grande distance focale f'₁.\nIl capte la lumière de l'objet lointain.\nIl forme une image intermédiaire petite mais nette.\n\n• L'oculaire (L₂) : petite distance focale f'₂.\nIl grossit l'image intermédiaire.\nIl joue le rôle d'une loupe.\n\nLa lunette est un système afocal.\nTraduction : le foyer image de L₁ coïncide avec le foyer objet de L₂.\nF'₁ = F₂.\n\nLes rayons entrent parallèles et sortent parallèles.\nL'œil observe sans fatiguer (accommodation au repos).\n\nC'est comme un relais : L₁ capte l'image, L₂ la grossit.\n\nEn gros : objectif = capteur, oculaire = loupe.\nLes deux travaillent ensemble pour grossir les étoiles.`
          },
          {
            titre: "Le grossissement",
            contenu: `Le grossissement G mesure combien la lunette agrandit l'image.\n\nG = α' / α = f'₁ / f'₂\n\nTraduction :\n• α = angle sous lequel l'œil voit l'objet sans lunette.\n• α' = angle sous lequel l'œil voit l'image avec la lunette.\n• f'₁ = focale de l'objectif.\n• f'₂ = focale de l'oculaire.\n\nG = 10 signifie que l'objet paraît 10 fois plus gros.\n\nPour un grand grossissement :\n• f'₁ doit être grande (objectif à longue focale).\n• f'₂ doit être petite (oculaire à courte focale).\n\nC'est comme une fraction : grand numérateur et petit dénominateur.\n\nMais attention : un grossissement trop fort rend l'image floue.\nLa qualité dépend aussi du diamètre de l'objectif.\n\nEn gros : G = f'₁ / f'₂.\nGrand objectif + petit oculaire = fort grossissement.`
          },
          {
            titre: "Le photon : grain de lumière",
            contenu: `La lumière est aussi faite de particules : les photons.\nChaque photon transporte un quantum (une portion) d'énergie :\n\nE = h · ν = h · c / λ\n\nTraduction :\n• h = 6,63 × 10⁻³⁴ J·s (constante de Planck).\n• ν = fréquence de la lumière (en Hz).\n• c = 3 × 10⁸ m/s (vitesse de la lumière).\n• λ = longueur d'onde.\n\nPlus la fréquence est élevée, plus le photon est énergétique.\nUn photon UV est plus énergétique qu'un photon rouge.\nUn photon X est encore plus énergétique.\n\nC'est comme des billes de tailles différentes.\nChaque bille transporte une énergie fixe.\nOn ne peut pas avoir « une demi-bille ».\n\nLe photon n'a pas de masse.\nIl se déplace toujours à la vitesse c.\n\nEn gros : E = hν.\nLumière = paquets d'énergie. Haute fréquence = beaucoup d'énergie.`
          },
          {
            titre: "Niveaux d'énergie et spectres de raies",
            contenu: `Les électrons dans un atome occupent des niveaux d'énergie quantifiés.\nIls ne peuvent avoir que certaines valeurs précises.\n\nC'est comme un escalier : tu ne peux être que sur une marche.\nJamais entre deux marches.\n\nQuand un électron passe d'un niveau haut E₂ à un niveau bas E₁ :\nil émet un photon d'énergie :\n\nE_photon = E₂ − E₁ = h · ν\n\nTraduction : l'énergie du photon est exactement la différence entre les deux niveaux.\n\nQuand un photon est absorbé, c'est l'inverse.\nL'électron monte d'un niveau bas à un niveau haut.\nMais le photon doit avoir exactement la bonne énergie.\n\nChaque atome a ses propres niveaux.\nDonc chaque atome a ses propres raies spectrales.\nC'est une « empreinte digitale » lumineuse unique.\n\nEn gros : transition = saut entre marches.\nSaut vers le bas = émission de photon.\nSaut vers le haut = absorption de photon.`
          },
          {
            titre: "L'effet photoélectrique",
            contenu: `L'effet photoélectrique est l'éjection d'électrons d'un métal par la lumière.\n\nCondition : le photon doit avoir assez d'énergie.\n\nh · ν ≥ W₀\n\nW₀ est le travail d'extraction du métal.\nC'est l'énergie minimale pour arracher un électron.\nChaque métal a son propre W₀.\n\nSi hν < W₀ : rien ne se passe.\nMême en augmentant l'intensité lumineuse.\nC'est la fréquence qui compte, pas le nombre de photons.\n\nSi hν ≥ W₀ : l'électron est éjecté.\nSon énergie cinétique est :\n\nEc = h · ν − W₀\n\nTraduction : l'énergie du photon se partage.\nW₀ pour extraire l'électron.\nLe reste devient de l'énergie cinétique.\n\nC'est comme lancer des billes sur une cible.\nSi la bille n'est pas assez rapide, la cible ne bouge pas.\nPeu importe combien de billes faibles tu lances.\n\nEn gros : Ec = hν − W₀.\nPhoton assez énergétique = électron éjecté.`
          },
          {
            titre: "La dualité onde-corpuscule",
            contenu: `La lumière se comporte parfois comme une onde, parfois comme des particules.\n\nAspect ondulatoire :\n• Diffraction (chapitre précédent).\n• Interférences.\n• Propagation, réfraction.\n\nAspect corpusculaire :\n• Effet photoélectrique.\n• Absorption et émission par les atomes.\n• Comptage de photons individuels.\n\nC'est la dualité onde-corpuscule.\nLa lumière n'est ni 100 % onde ni 100 % particule.\nElle est les deux, selon l'expérience.\n\nC'est comme une pièce de monnaie.\nCôté pile = onde. Côté face = particule.\nTu ne vois qu'un côté à la fois, mais la pièce a les deux.\n\nCette idée est au cœur de la physique quantique.\nElle s'applique aussi aux électrons et à toute la matière.\n\nEn gros : la lumière est onde ET particule.\nCela dépend de comment on la regarde.`
          }
        ]
      },
      page2_concepts: {
        titre: "Concepts clés",
        concepts: [
          {
            terme: "Lunette astronomique",
            definition: "Instrument d'optique formé de deux lentilles convergentes : l'objectif (grande focale, capte la lumière) et l'oculaire (petite focale, grossit l'image). En gros : l'objectif fait une petite image, l'oculaire la grossit comme une loupe. C'est comme un télescope simplifié."
          },
          {
            terme: "Système afocal",
            definition: "Système optique où le foyer image de l'objectif (F'₁) coïncide avec le foyer objet de l'oculaire (F₂). Les rayons entrent parallèles et sortent parallèles. En gros : un objet à l'infini donne une image à l'infini. L'œil peut observer sans fatiguer."
          },
          {
            terme: "Grossissement",
            definition: "G = α'/α = f'₁/f'₂. C'est le rapport entre l'angle sous lequel on voit l'image à travers la lunette et l'angle à l'œil nu. En gros : G = 10 signifie que l'objet paraît 10 fois plus gros. Plus l'objectif a une grande focale et l'oculaire une petite, plus on grossit."
          },
          {
            terme: "Photon",
            definition: "Particule de lumière sans masse. Son énergie est E = hν (h = constante de Planck, ν = fréquence). Il se déplace toujours à la vitesse c = 3 × 10⁸ m/s. En gros : la lumière est faite de « grains » d'énergie. Plus la fréquence est haute (UV, X), plus le grain est énergétique."
          },
          {
            terme: "Niveaux d'énergie",
            definition: "Les électrons dans un atome ne peuvent avoir que certaines valeurs d'énergie précises (quantifiées). C'est comme un escalier : tu ne peux être que sur une marche, pas entre deux. En gros : pas de valeur intermédiaire possible. C'est la base de la physique quantique."
          },
          {
            terme: "Transition et spectre de raies",
            definition: "Quand un électron passe d'un niveau haut E₂ à un niveau bas E₁, il émet un photon d'énergie E = E₂ − E₁ = hν. Chaque atome a ses propres niveaux, donc ses propres raies. En gros : chaque élément a une « empreinte digitale » lumineuse unique."
          },
          {
            terme: "Effet photoélectrique",
            definition: "Éjection d'électrons d'un métal quand il est éclairé par de la lumière suffisamment énergétique. Condition : hν ≥ W₀ (travail d'extraction). En gros : si le photon n'a pas assez d'énergie, rien ne se passe, même avec beaucoup de lumière. C'est la fréquence qui compte, pas l'intensité."
          },
          {
            terme: "Travail d'extraction W₀",
            definition: "Énergie minimale nécessaire pour arracher un électron du métal. Chaque métal a son propre W₀. Si hν < W₀, pas d'effet photoélectrique. En gros : c'est le « ticket d'entrée » que le photon doit payer pour libérer l'électron."
          },
          {
            terme: "Dualité onde-corpuscule",
            definition: "La lumière se comporte comme une onde dans certaines expériences (diffraction, interférences) et comme des particules (photons) dans d'autres (effet photoélectrique). En gros : la lumière n'est ni 100 % onde ni 100 % particule. Elle est les deux selon comment on la regarde."
          },
          {
            terme: "Constante de Planck h",
            definition: "h = 6,63 × 10⁻³⁴ J·s. Constante fondamentale de la physique quantique. Elle relie l'énergie d'un photon à sa fréquence : E = hν. Plus h est petit, plus les effets quantiques sont invisibles à notre échelle. C'est pourquoi on ne voit pas les photons individuels dans la vie courante."
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
            explication: "h = 6,63 × 10⁻³⁴ J·s (Planck). Plus la fréquence ν est haute (ou λ petite), plus le photon est énergétique."
          },
          {
            nom: "Grossissement de la lunette",
            formule: "G = f'_objectif / f'_oculaire",
            explication: "Rapport des focales. Grand objectif (grande focale) + petit oculaire (petite focale) = fort grossissement."
          },
          {
            nom: "Bilan photoélectrique",
            formule: "Ec = h·ν − W₀",
            explication: "Énergie cinétique de l'électron éjecté = énergie du photon − travail d'extraction. Si hν < W₀, pas d'éjection."
          },
          {
            nom: "Énergie de transition",
            formule: "E_photon = |E₂ − E₁|",
            explication: "Le photon émis ou absorbé a une énergie égale à la différence entre les deux niveaux. Toujours positif (valeur absolue)."
          },
          {
            nom: "Fréquence seuil",
            formule: "ν_seuil = W₀ / h",
            explication: "Fréquence minimale pour arracher un électron. Si ν < ν_seuil, pas d'effet photoélectrique, quelle que soit l'intensité."
          },
          {
            nom: "Encombrement de la lunette",
            formule: "L = f'_objectif + f'_oculaire",
            explication: "Distance entre les deux lentilles en configuration afocale. C'est la longueur physique de la lunette."
          },
          {
            nom: "Longueur d'onde seuil",
            formule: "λ_seuil = h·c / W₀",
            explication: "Longueur d'onde maximale pour l'effet photoélectrique. Si λ > λ_seuil, le photon n'a pas assez d'énergie."
          },
          {
            nom: "Conversion eV ↔ Joules",
            formule: "1 eV = 1,6 × 10⁻¹⁹ J",
            explication: "L'électronvolt (eV) est l'unité d'énergie en physique atomique. Plus pratique que le Joule pour les petites énergies."
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
        texte: "Ce chapitre étudie le condensateur et le circuit RC. Le condensateur stocke de l'énergie électrique, et le circuit RC obéit à une équation différentielle du premier ordre.",
        sections: [
          {
            titre: "Le condensateur : un réservoir de charges",
            contenu: `Un condensateur est un composant formé de deux armatures métalliques.\nEntre elles, un isolant (diélectrique).\n\nQuand on le branche à un générateur, des charges s'accumulent sur les armatures.\nUne armature se charge positivement, l'autre négativement.\n\nLa charge stockée est proportionnelle à la tension :\n\nq = C · u\n\nTraduction :\n• q = charge en Coulombs (C).\n• C = capacité en Farads (F).\n• u = tension aux bornes du condensateur (V).\n\nPlus C est grand, plus le condensateur stocke de charges pour une même tension.\n\nC'est comme un réservoir d'eau.\nC (capacité) = taille du réservoir.\nu (tension) = hauteur d'eau.\nq (charge) = volume d'eau stocké.\n\nEn gros : q = Cu.\nLe condensateur est un réservoir d'énergie électrique.`
          },
          {
            titre: "Intensité et énergie du condensateur",
            contenu: `L'intensité du courant dans un condensateur est :\n\ni = C · du/dt\n\nTraduction : le courant est proportionnel à la vitesse de variation de la tension.\nSi la tension change vite, le courant est fort.\nSi la tension est stable, le courant est nul.\n\nC'est comme remplir un verre d'eau.\nLe débit (courant) dépend de la vitesse à laquelle le niveau (tension) monte.\n\nL'énergie stockée dans le condensateur est :\n\nE = ½ · C · u²\n\nTraduction : l'énergie dépend du carré de la tension.\nSi la tension double, l'énergie est multipliée par 4.\n\nCette énergie est stockée dans le champ électrique entre les armatures.\nElle est restituée quand le condensateur se décharge.\n\nEn gros : i = C·du/dt (courant = C × variation de tension).\nE = ½Cu² (énergie stockée).`
          },
          {
            titre: "Le circuit RC : charge du condensateur",
            contenu: `Un circuit RC est composé d'une résistance R et d'un condensateur C en série.\nOn branche un générateur de tension E.\n\nLa loi des mailles donne l'équation différentielle :\n\nRC · du/dt + u = E\n\nC'est une équation différentielle du premier ordre à coefficients constants.\n\nLa solution pour la charge (condensateur initialement vide) est :\n\nu(t) = E · (1 − e^(−t/τ))\n\nAvec τ = R · C (constante de temps en secondes).\n\nAu début (t = 0) : u = 0, le condensateur est vide.\nÀ t = τ : u ≈ 0,63 · E (63 % de la valeur finale).\nÀ t = 5τ : u ≈ 0,99 · E (99 %, quasi complètement chargé).\n\nC'est comme remplir une baignoire.\nAu début, l'eau coule vite.\nPlus la baignoire se remplit, plus le débit ralentit.\nÀ la fin, le niveau se stabilise.\n\nEn gros : u = E(1 − e^(−t/τ)).\nLa tension monte vers E en suivant une exponentielle croissante.`
          },
          {
            titre: "Le circuit RC : décharge du condensateur",
            contenu: `Quand on retire le générateur, le condensateur se décharge à travers R.\n\nL'équation différentielle devient :\n\nRC · du/dt + u = 0\n\nLa solution est :\n\nu(t) = E · e^(−t/τ)\n\nAvec τ = RC (même constante de temps).\n\nAu début (t = 0) : u = E, le condensateur est plein.\nÀ t = τ : u ≈ 0,37 · E (il reste 37 %).\nÀ t = 5τ : u ≈ 0,01 · E (quasi vide, 1 %).\n\nC'est comme vider une baignoire.\nAu début, l'eau coule vite (beaucoup de pression).\nPlus le niveau baisse, plus l'écoulement ralentit.\n\nLa courbe est une exponentielle décroissante.\nElle ne touche jamais exactement zéro.\nMais après 5τ, on considère que c'est fini.\n\nEn gros : u = E · e^(−t/τ).\nLa tension descend vers 0 en exponentielle décroissante.`
          },
          {
            titre: "La constante de temps τ = RC",
            contenu: `La constante de temps τ contrôle la vitesse de charge et de décharge.\n\nτ = R · C\n\nTraduction :\n• R en Ohms (Ω).\n• C en Farads (F).\n• τ en secondes (s).\n\nGrand τ = charge et décharge lentes.\nPetit τ = charge et décharge rapides.\n\nPour augmenter τ : augmenter R ou C.\nPour diminuer τ : diminuer R ou C.\n\nC'est comme le diamètre d'un tuyau (R) et la taille du réservoir (C).\nPetit tuyau + gros réservoir = remplissage très lent.\nGros tuyau + petit réservoir = remplissage très rapide.\n\nRepères importants :\n• À t = τ : 63 % (charge) ou 37 % (décharge).\n• À t = 2τ : 86 % (charge) ou 14 % (décharge).\n• À t = 3τ : 95 % (charge) ou 5 % (décharge).\n• À t = 5τ : 99 % → régime permanent atteint.\n\nEn gros : τ = RC.\nC'est le « chronomètre » du circuit.\nAprès 5τ, tout est fini.`
          }
        ]
      },
      page2_concepts: {
        titre: "Concepts clés",
        concepts: [
          {
            terme: "Condensateur",
            definition: "Composant électrique formé de deux armatures conductrices (plaques) séparées par un isolant (diélectrique). Il stocke de l'énergie sous forme de charges électriques. C'est comme un réservoir d'eau : on le remplit (charge) et il se vide (décharge). On en trouve partout : téléphones, ordinateurs, flash d'appareil photo."
          },
          {
            terme: "Capacité C",
            definition: "En Farads (F). C = q/u : c'est le rapport entre la charge stockée et la tension. Plus C est grand, plus le condensateur peut stocker de charges pour une même tension. En gros : c'est la « taille du réservoir ». En pratique : μF (10⁻⁶ F), nF (10⁻⁹ F), pF (10⁻¹² F)."
          },
          {
            terme: "Circuit RC",
            definition: "Circuit série avec une résistance R et un condensateur C. Quand on branche une pile, le condensateur se charge exponentiellement. La résistance R « freine » la charge. En gros : R contrôle la vitesse de remplissage, C contrôle la taille du réservoir."
          },
          {
            terme: "Constante de temps τ",
            definition: "τ = R·C en secondes. C'est le temps caractéristique du circuit. Après 1τ : 63 % de la charge finale. Après 5τ : 99 % (régime permanent). En gros : τ dit « à quelle vitesse le condensateur se charge ». C'est comme le temps pour remplir une baignoire."
          },
          {
            terme: "Équation différentielle du RC",
            definition: "En charge : R·C·du/dt + u = E. En décharge : R·C·du/dt + u = 0. C'est une équation du 1er ordre à coefficients constants. La solution est toujours une exponentielle. En gros : c'est la « recette mathématique » qui donne u(t)."
          },
          {
            terme: "Régime transitoire",
            definition: "Phase pendant laquelle la tension évolue (augmente en charge, diminue en décharge). Elle dure environ 5τ. C'est la période de « transition » entre l'état initial et l'état final. En gros : c'est le temps que met le réservoir à se remplir ou à se vider."
          },
          {
            terme: "Régime permanent",
            definition: "État atteint après 5τ. La tension est stable : u = E (condensateur plein) ou u = 0 (condensateur vide). Le courant est alors nul (i = 0). En gros : le réservoir est plein (ou vide), plus rien ne bouge."
          },
          {
            terme: "Énergie du condensateur",
            definition: "E = ½·C·u². L'énergie stockée est proportionnelle à la capacité C et au carré de la tension u. En gros : double la tension, tu multiplies l'énergie par 4. C'est comme l'énergie potentielle d'un ressort comprimé."
          },
          {
            terme: "Détermination graphique de τ",
            definition: "Sur le graphe u(t), on trace la tangente à la courbe à t = 0. Cette tangente coupe l'asymptote horizontale (u = E) à t = τ. Alternativement, τ est le temps pour atteindre 63 % de E (en charge) ou 37 % de E (en décharge). C'est la méthode la plus courante au bac."
          },
          {
            terme: "Courant de charge/décharge",
            definition: "En charge : i(t) = (E/R)·e^(−t/τ). Le courant est maximal au début puis décroît vers 0. En décharge : i(t) = −(E/R)·e^(−t/τ). Le courant part en sens inverse. En gros : au début ça coule fort, puis ça ralentit progressivement."
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
            explication: "q en Coulombs, C en Farads, u en Volts. C'est la définition de la capacité : plus C est grand, plus on stocke de charges."
          },
          {
            nom: "Intensité dans un condensateur",
            formule: "i = C · du/dt",
            explication: "Le courant est proportionnel à la vitesse de variation de la tension. Si u est constant (régime permanent), i = 0."
          },
          {
            nom: "Charge du condensateur (circuit RC)",
            formule: "u(t) = E · (1 − e^(−t/τ))",
            explication: "La tension croît exponentiellement de 0 vers E. τ = RC. Atteint 63 % de E après 1τ, 99 % après 5τ."
          },
          {
            nom: "Décharge du condensateur (circuit RC)",
            formule: "u(t) = E · e^(−t/τ)",
            explication: "La tension décroît exponentiellement de E vers 0. Atteint 37 % de E après 1τ, 1 % après 5τ."
          },
          {
            nom: "Constante de temps",
            formule: "τ = R · C",
            explication: "En secondes. R en Ohms (Ω), C en Farads (F). Vérification dimensionnelle : Ω × F = s."
          },
          {
            nom: "Énergie stockée",
            formule: "E_c = ½ · C · u²",
            explication: "Énergie en Joules. Proportionnelle à C et au carré de u. Double u = quadruple l'énergie."
          },
          {
            nom: "Courant de charge",
            formule: "i(t) = (E/R) · e^(−t/τ)",
            explication: "Le courant est maximal à t = 0 (vaut E/R) puis décroît exponentiellement vers 0."
          },
          {
            nom: "Équation différentielle (charge)",
            formule: "R·C · du/dt + u = E",
            explication: "Équation du 1er ordre. La solution est u(t) = E·(1 − e^(−t/RC)). C'est l'équation fondamentale du circuit RC en charge."
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
