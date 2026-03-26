// Terminale Mathématiques — Hermione App
// 6 chapitres complets avec flashcards, QCM et fiches détaillées

export const TERM_MATHS_COURS = [
  // ═══════════════════════════════════════════════════════════════
  // CHAPITRE 1 — Raisonnement par récurrence et limite de suite
  // ═══════════════════════════════════════════════════════════════
  {
    id: "term-mathematiques-ch1",
    titre: "Raisonnement par récurrence et limite de suite",
    emoji: "🔄",
    nouveau: false,
    flashcardsData: [
      {
        q: "Quelles sont les 3 étapes du raisonnement par récurrence ?",
        r: "1) Initialisation : vérifier P(n₀). 2) Hérédité : supposer P(n), montrer P(n+1). 3) Conclusion : P(n) vraie pour tout n ≥ n₀."
      },
      {
        q: "Pourquoi l'initialisation est-elle indispensable ?",
        r: "Sans initialisation, la récurrence est invalide. En gros : si le premier domino ne tombe pas, aucun ne tombe."
      },
      {
        q: "Que dit le théorème des gendarmes (encadrement) ?",
        r: "Si vₙ ≤ uₙ ≤ wₙ et lim vₙ = lim wₙ = ℓ, alors lim uₙ = ℓ. En gros : coincée entre deux suites, elle a la même limite."
      },
      {
        q: "Énonce l'inégalité de Bernoulli.",
        r: "Pour tout entier n ≥ 1 et tout a > 0 : (1 + a)ⁿ ≥ 1 + na. Se démontre par récurrence."
      },
      {
        q: "Formule de la somme des carrés des n premiers entiers ?",
        r: "∑(k=1 à n) k² = n(n+1)(2n+1) / 6. Se démontre par récurrence."
      },
      {
        q: "Quand une suite croissante converge-t-elle ?",
        r: "Une suite croissante et majorée converge. En gros : elle monte mais ne peut pas dépasser un plafond, donc elle se stabilise."
      },
      {
        q: "Quand une suite décroissante converge-t-elle ?",
        r: "Une suite décroissante et minorée converge. En gros : elle descend mais a un plancher, donc elle se stabilise."
      },
      {
        q: "Comment montrer qu'une suite diverge vers +∞ par comparaison ?",
        r: "Si uₙ ≥ vₙ pour tout n et lim vₙ = +∞, alors lim uₙ = +∞. En gros : plus grand qu'une suite qui explose → elle explose aussi."
      },
      {
        q: "Que vaut lim(n→+∞) qⁿ selon la valeur de q ?",
        r: "Si |q| < 1 : lim = 0. Si q = 1 : lim = 1. Si q > 1 : lim = +∞. Si q ≤ −1 : pas de limite."
      },
      {
        q: "Donne un contre-exemple classique de récurrence ratée.",
        r: "« 6ⁿ + 1 est multiple de 5 ». L'hérédité marche, mais 6¹ + 1 = 7 ≠ multiple de 5. L'initialisation échoue !"
      }
    ],
    qcm: [
      {
        question: "Quelles étapes sont obligatoires dans une récurrence ?",
        options: [
          "Seulement l'hérédité",
          "Seulement l'initialisation",
          "Initialisation ET hérédité",
          "Calcul direct de la limite"
        ],
        correct: 2,
        explication: "Les deux sont indispensables. L'initialisation vérifie P(n₀), l'hérédité assure le passage de P(n) à P(n+1)."
      },
      {
        question: "Si (uₙ) est croissante et majorée, alors :",
        options: [
          "Elle diverge vers +∞",
          "Elle converge vers une limite finie",
          "Elle est constante",
          "On ne peut rien conclure"
        ],
        correct: 1,
        explication: "C'est le théorème de convergence monotone. Une suite croissante majorée converge nécessairement."
      },
      {
        question: "Théorème des gendarmes : si vₙ ≤ uₙ ≤ wₙ et lim vₙ = lim wₙ = 5, que vaut lim uₙ ?",
        options: [
          "0",
          "10",
          "5",
          "On ne sait pas"
        ],
        correct: 2,
        explication: "Encadrée par deux suites de même limite 5, la suite (uₙ) converge aussi vers 5."
      },
      {
        question: "L'inégalité de Bernoulli affirme que :",
        options: [
          "(1+a)ⁿ ≤ 1 + na pour a > 0",
          "(1+a)ⁿ ≥ 1 + na pour a > 0",
          "(1+a)ⁿ = 1 + na toujours",
          "(1+a)ⁿ < na pour a > 0"
        ],
        correct: 1,
        explication: "Pour a > 0 et n entier ≥ 1, on a (1+a)ⁿ ≥ 1 + na. L'égalité n'a lieu que pour n = 1."
      },
      {
        question: "Que vaut la somme 1² + 2² + 3² + … + n² ?",
        options: [
          "n(n+1)/2",
          "n²(n+1)²/4",
          "n(n+1)(2n+1)/6",
          "n(2n+1)/3"
        ],
        correct: 2,
        explication: "La formule classique ∑k² = n(n+1)(2n+1)/6 se démontre par récurrence."
      },
      {
        question: "Si q = 0.99, que vaut lim(n→+∞) qⁿ ?",
        options: [
          "+∞",
          "1",
          "0",
          "−∞"
        ],
        correct: 2,
        explication: "Quand |q| < 1, la suite (qⁿ) converge vers 0. Ici 0.99 < 1 donc lim = 0."
      },
      {
        question: "Pourquoi la propriété « 6ⁿ + 1 est multiple de 5 » est-elle fausse ?",
        options: [
          "L'hérédité est fausse",
          "L'initialisation échoue (6¹+1 = 7)",
          "La formule est mal écrite",
          "Elle est vraie en fait"
        ],
        correct: 1,
        explication: "L'hérédité est correcte, mais 6¹ + 1 = 7 n'est pas divisible par 5. Sans initialisation valide, pas de récurrence."
      }
    ],
    fiche: {
      page1_intro: {
        titre: "Introduction",
        texte: "• Le raisonnement par récurrence (méthode de preuve) sert à démontrer qu'une propriété P(n) est vraie pour tout entier n ≥ n₀.\n• C'est comme une file de dominos alignés.\n• On pousse le premier domino : c'est l'initialisation.\n• On prouve que chaque domino fait tomber le suivant : c'est l'hérédité.\n• Résultat : tous les dominos tombent, donc P(n) est vraie pour tout n.\n• En gros : on vérifie un cas de départ, puis on montre que ça se propage.\n• Ce chapitre couvre aussi les limites de suites (vers quelle valeur une suite se dirige).\n• On apprend à utiliser des théorèmes comme les gendarmes (encadrement) ou la convergence monotone (suite croissante bornée).\n• En gros : on maîtrise deux outils puissants — la preuve par récurrence et le calcul de limites.",
        points_cles: [
          "Récurrence = initialisation + hérédité + conclusion (3 étapes obligatoires)",
          "L'initialisation est indispensable : sans elle, rien ne fonctionne",
          "C'est comme les dominos : le premier doit tomber pour que la chaîne démarre",
          "Théorème de convergence monotone : suite croissante ET majorée → convergente",
          "Théorème des gendarmes : une suite coincée entre deux limites identiques converge vers cette limite",
          "Les opérations sur les limites (+, −, ×, ÷) ont des règles précises",
          "Attention aux formes indéterminées (FI) : +∞ − ∞, 0 × ∞, ∞/∞, 0/0",
          "Les FI nécessitent de transformer l'expression (factoriser, simplifier, encadrer)"
        ]
      },
      page2_concepts: {
        titre: "Concepts clés",
        concepts: [
          {
            terme: "Initialisation",
            definition: "Première étape de la récurrence : on vérifie que P(n₀) est vraie pour le rang initial n₀. C'est comme pousser le premier domino de la file. En gros : sans cette vérification, la preuve est invalide."
          },
          {
            terme: "Hérédité",
            definition: "Deuxième étape : on suppose P(n) vraie (c'est l'hypothèse de récurrence), puis on démontre que P(n+1) est vraie. C'est comme prouver qu'un domino qui tombe fait toujours tomber le suivant. En gros : le passage de n à n+1 est le cœur de la preuve."
          },
          {
            terme: "Conclusion de la récurrence",
            definition: "Troisième étape : on écrit que P(n) est vraie pour tout n ≥ n₀ d'après le principe de récurrence. C'est la phrase finale obligatoire. En gros : on conclut proprement, sinon le correcteur enlève des points."
          },
          {
            terme: "Suite convergente",
            definition: "Suite (uₙ) dont les termes se rapprochent d'un nombre fixe ℓ quand n grandit. On écrit lim(n→+∞) uₙ = ℓ. C'est comme une balle qui rebondit de plus en plus bas et finit par s'arrêter. En gros : la suite se stabilise autour d'une valeur."
          },
          {
            terme: "Suite divergente",
            definition: "Suite qui ne converge pas. Elle peut tendre vers +∞, −∞, ou n'avoir aucune limite (oscillation). C'est comme une fusée qui monte sans s'arrêter. En gros : la suite ne se stabilise jamais."
          },
          {
            terme: "Suite majorée",
            definition: "Suite dont tous les termes sont inférieurs ou égaux à un nombre M (le majorant). C'est comme un plafond que la suite ne peut pas dépasser. En gros : il existe un « mur en haut »."
          },
          {
            terme: "Suite minorée",
            definition: "Suite dont tous les termes sont supérieurs ou égaux à un nombre m (le minorant). C'est comme un plancher sous la suite. En gros : il existe un « sol » en dessous."
          },
          {
            terme: "Suite bornée",
            definition: "Suite à la fois majorée ET minorée. Tous les termes restent dans un intervalle [m ; M]. C'est comme une balle enfermée dans une boîte. En gros : la suite ne s'échappe ni vers le haut ni vers le bas."
          },
          {
            terme: "Théorème des gendarmes (encadrement)",
            definition: "Si vₙ ≤ uₙ ≤ wₙ et que lim vₙ = lim wₙ = ℓ, alors lim uₙ = ℓ. C'est comme être coincé entre deux voitures de police qui vont au même endroit. En gros : la suite du milieu est forcée de suivre."
          },
          {
            terme: "Forme indéterminée (FI)",
            definition: "Expression du type +∞ − ∞, 0 × ∞, ∞/∞ ou 0/0 dont le résultat est imprévisible. Il faut transformer (factoriser, simplifier) pour lever l'indétermination. En gros : le calcul « hésite » et il faut l'aider."
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
            nom: "Somme des entiers",
            formule: "∑(k=1 à n) k = n(n+1)/2",
            explication: "Somme 1 + 2 + … + n. C'est comme additionner les numéros de marches d'un escalier. Se démontre par récurrence."
          },
          {
            nom: "Somme des carrés",
            formule: "∑(k=1 à n) k² = n(n+1)(2n+1)/6",
            explication: "Somme 1² + 2² + … + n². Formule classique au bac. Se démontre aussi par récurrence."
          },
          {
            nom: "Somme des cubes",
            formule: "∑(k=1 à n) k³ = [n(n+1)/2]²",
            explication: "Somme 1³ + 2³ + … + n³. C'est le carré de la somme des entiers. Résultat élégant et utile."
          },
          {
            nom: "Inégalité de Bernoulli",
            formule: "(1+a)ⁿ ≥ 1 + na, pour a > 0 et n ∈ ℕ*",
            explication: "Se démontre par récurrence. L'égalité n'a lieu que pour n = 1. En gros : (1+a)ⁿ grandit plus vite que 1 + na."
          },
          {
            nom: "Suite géométrique (somme)",
            formule: "∑(k=0 à n) qᵏ = (1 − qⁿ⁺¹)/(1 − q), pour q ≠ 1",
            explication: "Somme des termes d'une suite géométrique de raison q. C'est comme calculer le total d'intérêts composés."
          },
          {
            nom: "Limite de qⁿ",
            formule: "|q| < 1 ⇒ lim qⁿ = 0 ; q > 1 ⇒ lim qⁿ = +∞",
            explication: "Résultat fondamental. Si q est entre −1 et 1, la suite s'écrase vers 0. Si q > 1, elle explose."
          },
          {
            nom: "Convergence monotone",
            formule: "Suite croissante ET majorée ⇒ convergente ; suite décroissante ET minorée ⇒ convergente",
            explication: "C'est comme monter un escalier avec un plafond : on finit forcément par se stabiliser."
          },
          {
            nom: "Comparaison de limites",
            formule: "Si uₙ ≥ vₙ et lim vₙ = +∞, alors lim uₙ = +∞",
            explication: "En gros : si une suite plus petite explose, la plus grande explose aussi."
          }
        ]
      },
      page5_resume: {
        titre: "Résumé",
        resume: "La récurrence prouve P(n) pour tout n ≥ n₀ en 3 étapes : initialisation, hérédité, conclusion. Les limites de suites se calculent par opérations, comparaison ou encadrement. Une suite croissante majorée (ou décroissante minorée) converge toujours.",
        points_importants: [
          "TOUJOURS vérifier l'initialisation",
          "Bien écrire l'hypothèse de récurrence",
          "Suite croissante + majorée = convergente",
          "Théorème des gendarmes : même limite si encadrée",
          "Attention aux formes indéterminées (transformer !)"
        ],
        pieges_courants: [
          "Oublier l'initialisation → récurrence invalide",
          "Confondre « P(n) vraie » et « P(n+1) vraie » dans l'hérédité",
          "Oublier la conclusion après l'hérédité",
          "Appliquer les opérations sur les limites en cas de forme indéterminée",
          "Confondre majorée et convergente (majorée ≠ convergente seule)"
        ]
      }
    }
  },

  // ═══════════════════════════════════════════════════════════════
  // CHAPITRE 2 — Dérivation, concavité, convexité
  // ═══════════════════════════════════════════════════════════════
  {
    id: "term-mathematiques-ch2",
    titre: "Dérivation, concavité, convexité",
    emoji: "📈",
    nouveau: false,
    flashcardsData: [
      {
        q: "Quelle est la définition du nombre dérivé en a ?",
        r: "f'(a) = lim(h→0) [f(a+h) − f(a)] / h. En gros : c'est la pente de la tangente au point d'abscisse a."
      },
      {
        q: "Quelle est l'équation de la tangente à Cf en a ?",
        r: "y = f'(a)(x − a) + f(a). En gros : droite qui colle à la courbe en x = a."
      },
      {
        q: "Comment dériver une fonction composée v∘u ?",
        r: "(v∘u)'(x) = u'(x) × v'(u(x)). En gros : on dérive « l'intérieur » × la dérivée de « l'extérieur » évaluée à l'intérieur."
      },
      {
        q: "Quelle est la dérivée de eᵘ ?",
        r: "(eᵘ)' = u' × eᵘ. Exemple : (e²ˣ)' = 2e²ˣ."
      },
      {
        q: "Quelle est la dérivée de ln(u) ?",
        r: "(ln u)' = u'/u. Exemple : (ln(3x+1))' = 3/(3x+1)."
      },
      {
        q: "Comment caractérise-t-on la convexité avec f'' ?",
        r: "f convexe ⟺ f''(x) ≥ 0. La courbe est en dessous de ses sécantes (cordes). En gros : ça « sourit »."
      },
      {
        q: "Comment caractérise-t-on la concavité avec f'' ?",
        r: "f concave ⟺ f''(x) ≤ 0. La courbe est au-dessus de ses sécantes. En gros : ça « fait la tête »."
      },
      {
        q: "Qu'est-ce qu'un point d'inflexion ?",
        r: "Point où la courbe change de convexité (convexe → concave ou inversement). On a f''(a) = 0 et f'' change de signe en a."
      },
      {
        q: "Comment f' varie-t-elle si f est convexe ?",
        r: "Si f est convexe (f'' ≥ 0), alors f' est croissante. En gros : la pente augmente de plus en plus."
      },
      {
        q: "Quelle est la dérivée de uⁿ ?",
        r: "(uⁿ)' = n × u' × uⁿ⁻¹. Exemple : ((2x+1)³)' = 3 × 2 × (2x+1)² = 6(2x+1)²."
      }
    ],
    qcm: [
      {
        question: "Si f'(x) > 0 sur ]a ; b[, alors f est :",
        options: [
          "Constante sur ]a ; b[",
          "Strictement croissante sur ]a ; b[",
          "Strictement décroissante sur ]a ; b[",
          "Convexe sur ]a ; b["
        ],
        correct: 1,
        explication: "Dérivée strictement positive ⇒ fonction strictement croissante. C'est un résultat fondamental."
      },
      {
        question: "La dérivée de ln(3x + 1) est :",
        options: [
          "3/(3x+1)",
          "1/(3x+1)",
          "3 ln(3x+1)",
          "(3x+1)/3"
        ],
        correct: 0,
        explication: "Avec u = 3x+1, u' = 3, on applique (ln u)' = u'/u = 3/(3x+1)."
      },
      {
        question: "f est convexe sur I signifie que :",
        options: [
          "f''(x) ≥ 0 sur I",
          "f''(x) ≤ 0 sur I",
          "f'(x) > 0 sur I",
          "f(x) > 0 sur I"
        ],
        correct: 0,
        explication: "Convexe ⟺ f'' ≥ 0. La courbe est en dessous de ses cordes (sécantes)."
      },
      {
        question: "La dérivée de e^(2x²) est :",
        options: [
          "4x · e^(2x²)",
          "2x · e^(2x²)",
          "e^(2x²)",
          "2 · e^(2x²)"
        ],
        correct: 0,
        explication: "Avec u = 2x², u' = 4x, donc (eᵘ)' = u' · eᵘ = 4x · e^(2x²)."
      },
      {
        question: "Un point d'inflexion est un point où :",
        options: [
          "f'(a) = 0",
          "f(a) = 0",
          "f''(a) = 0 et f'' change de signe",
          "f est maximum"
        ],
        correct: 2,
        explication: "Point d'inflexion : f'' s'annule ET change de signe. La tangente traverse la courbe."
      },
      {
        question: "L'équation de la tangente en a est :",
        options: [
          "y = f(a)(x − a) + f'(a)",
          "y = f'(a)(x − a) + f(a)",
          "y = f'(a) · x + f(a)",
          "y = f(x) − f(a)"
        ],
        correct: 1,
        explication: "T : y = f'(a)(x − a) + f(a). Le coefficient directeur est f'(a), et la tangente passe par (a, f(a))."
      },
      {
        question: "Si f est concave, sa courbe est :",
        options: [
          "En dessous de ses sécantes",
          "Au-dessus de ses sécantes",
          "Confondue avec ses tangentes",
          "Parallèle à l'axe des abscisses"
        ],
        correct: 1,
        explication: "Concave ⟹ courbe au-dessus de ses cordes. En gros : la courbe « fait un chapeau »."
      }
    ],
    fiche: {
      page1_intro: {
        titre: "Introduction",
        texte: "• La dérivation (opération mathématique) mesure la vitesse de variation d'une fonction.\n• Le nombre dérivé f'(a) donne la pente de la tangente (droite qui frôle la courbe) en x = a.\n• C'est comme mesurer la vitesse d'une voiture à un instant précis sur un compteur.\n• Ce chapitre approfondit la dérivation avec les fonctions composées (v∘u), où l'on enchaîne deux fonctions.\n• On y apprend à dériver eᵘ, ln(u), uⁿ et √u grâce à la formule de la dérivée composée.\n• Le chapitre introduit aussi la convexité (courbure vers le haut, comme un bol) et la concavité (courbure vers le bas, comme un chapeau).\n• En gros : on étudie comment une fonction varie ET comment sa courbure se comporte.\n• La dérivée seconde f'' (dérivée de la dérivée) est l'outil clé pour la convexité.\n• En gros : f' dit « ça monte ou ça descend ? », f'' dit « ça courbe vers le haut ou vers le bas ? ».",
        points_cles: [
          "Nombre dérivé f'(a) = pente de la tangente en x = a",
          "C'est comme la vitesse instantanée sur un compteur",
          "Dérivée composée : (v∘u)' = u' × v'∘u (formule essentielle)",
          "f' > 0 ⇒ f croissante, f' < 0 ⇒ f décroissante",
          "f'' > 0 ⇒ convexe (bol, sourire ∪), f'' < 0 ⇒ concave (chapeau, triste ∩)",
          "Point d'inflexion : f'' = 0 ET f'' change de signe",
          "La tangente traverse la courbe au point d'inflexion",
          "Toujours penser à dériver « l'intérieur » dans une composée"
        ]
      },
      page2_concepts: {
        titre: "Concepts clés",
        concepts: [
          {
            terme: "Nombre dérivé",
            definition: "f'(a) = lim(h→0) [f(a+h)−f(a)]/h. C'est la pente de la tangente au point d'abscisse a. C'est comme lire la vitesse sur un compteur à un instant t. En gros : « à quelle vitesse f varie en a »."
          },
          {
            terme: "Tangente",
            definition: "Droite qui « touche » la courbe en un seul point localement. Son équation est y = f'(a)(x−a) + f(a). C'est comme poser une règle sur une balle : elle touche en un point. En gros : la droite qui colle à la courbe en x = a."
          },
          {
            terme: "Fonction composée (v∘u)",
            definition: "v∘u(x) = v(u(x)). On applique d'abord la fonction u, puis la fonction v au résultat. C'est comme une chaîne : d'abord on emballe, puis on décore. En gros : deux fonctions enchaînées."
          },
          {
            terme: "Dérivée composée",
            definition: "(v∘u)'(x) = u'(x) × v'(u(x)). On dérive l'intérieur (u') et on multiplie par la dérivée de l'extérieur évaluée en u(x). En gros : ne jamais oublier de dériver « ce qu'il y a dedans »."
          },
          {
            terme: "Convexité",
            definition: "f est convexe sur I si f''(x) ≥ 0 pour tout x de I. La courbe est en dessous de ses cordes (sécantes). C'est comme un bol ou un sourire (forme ∪). En gros : la courbe « sourit »."
          },
          {
            terme: "Concavité",
            definition: "f est concave sur I si f''(x) ≤ 0 pour tout x de I. La courbe est au-dessus de ses cordes. C'est comme un chapeau retourné ou une mine triste (forme ∩). En gros : la courbe « fait la tête »."
          },
          {
            terme: "Point d'inflexion",
            definition: "Point où la courbe change de courbure : de convexe à concave, ou l'inverse. On a f''(a) = 0 ET f'' change de signe en a. La tangente traverse la courbe en ce point. En gros : c'est le point de bascule de la courbure."
          },
          {
            terme: "Dérivée seconde f''",
            definition: "La dérivée de f' (la dérivée de la dérivée). Elle renseigne sur la courbure de f, pas sur sa croissance. C'est comme l'accélération d'une voiture : elle dit si la vitesse augmente ou diminue. En gros : f'' contrôle la forme de la courbe."
          },
          {
            terme: "Extremum local",
            definition: "Point où f atteint un maximum ou un minimum local. Condition nécessaire : f'(a) = 0. Il faut vérifier le changement de signe de f' autour de a. C'est comme le sommet d'une colline ou le fond d'une vallée."
          },
          {
            terme: "Tableau de variations",
            definition: "Tableau qui résume le signe de f' et les variations de f. On y note les extrema et les limites aux bornes. En gros : c'est la « carte d'identité » du comportement de f."
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
            nom: "Dérivée composée",
            formule: "(v∘u)' = u' × v'∘u",
            explication: "On dérive l'intérieur (u') puis on multiplie par la dérivée de l'extérieur évaluée en u. En gros : ne jamais oublier le u' devant."
          },
          {
            nom: "Tangente en a",
            formule: "y = f'(a)(x − a) + f(a)",
            explication: "Équation de la droite tangente à la courbe de f au point d'abscisse a. Le coefficient directeur est f'(a)."
          },
          {
            nom: "Dérivée de eᵘ",
            formule: "(eᵘ)' = u' × eᵘ",
            explication: "La dérivée de l'exponentielle composée. Exemple : (e²ˣ)' = 2e²ˣ. L'exponentielle se reproduit, multipliée par u'."
          },
          {
            nom: "Dérivée de ln(u)",
            formule: "(ln u)' = u'/u",
            explication: "La dérivée du logarithme composé. Exemple : (ln(3x+1))' = 3/(3x+1). Attention : u doit être > 0."
          },
          {
            nom: "Dérivée de uⁿ",
            formule: "(uⁿ)' = n · u' · uⁿ⁻¹",
            explication: "Formule de la puissance composée. Exemple : ((2x+1)³)' = 3 × 2 × (2x+1)² = 6(2x+1)²."
          },
          {
            nom: "Dérivée de √u",
            formule: "(√u)' = u'/(2√u)",
            explication: "Cas particulier de uⁿ avec n = 1/2. Attention : u doit être > 0 pour que √u existe."
          },
          {
            nom: "Dérivée de 1/u",
            formule: "(1/u)' = −u'/u²",
            explication: "Cas particulier de uⁿ avec n = −1. Exemple : (1/(x+1))' = −1/(x+1)²."
          },
          {
            nom: "Inégalité de convexité",
            formule: "f(ta + (1−t)b) ≤ t·f(a) + (1−t)·f(b), pour t ∈ [0;1]",
            explication: "La courbe d'une fonction convexe est sous ses cordes. C'est la définition « géométrique » de la convexité."
          }
        ]
      },
      page5_resume: {
        titre: "Résumé",
        resume: "La dérivée f'(a) donne la pente de la tangente en a. La dérivée composée (v∘u)' = u' × v'∘u est essentielle pour dériver eᵘ, ln(u), uⁿ. La dérivée seconde f'' renseigne sur la convexité : f'' > 0 → convexe (∪), f'' < 0 → concave (∩). Un point d'inflexion est un changement de courbure.",
        points_importants: [
          "(v∘u)' = u' × v'∘u (formule à connaître par cœur)",
          "f' > 0 → croissante, f' < 0 → décroissante",
          "f'' > 0 → convexe (sourit), f'' < 0 → concave (triste)",
          "Point d'inflexion : f'' = 0 ET f'' change de signe",
          "Tangente : y = f'(a)(x − a) + f(a)"
        ],
        pieges_courants: [
          "Oublier de dériver l'intérieur dans (v∘u)'",
          "Confondre f'(a) = 0 (extremum) et f''(a) = 0 (inflexion)",
          "Oublier que f''(a) = 0 ne suffit pas : il faut un changement de signe",
          "Inverser convexe et concave (retenir ∪ = convexe, ∩ = concave)",
          "Mal appliquer la formule de la tangente (signe de (x−a))"
        ]
      }
    }
  },

  // ═══════════════════════════════════════════════════════════════
  // CHAPITRE 3 — Probabilités
  // ═══════════════════════════════════════════════════════════════
  {
    id: "term-mathematiques-ch3",
    titre: "Probabilités",
    emoji: "🎲",
    nouveau: false,
    flashcardsData: [
      {
        q: "Qu'est-ce qu'une variable aléatoire ?",
        r: "Fonction qui associe un nombre réel à chaque issue d'une expérience aléatoire. En gros : on « numérote » les résultats possibles."
      },
      {
        q: "Comment calcule-t-on l'espérance E(X) ?",
        r: "E(X) = ∑ xᵢ · P(X = xᵢ). En gros : c'est la moyenne pondérée des valeurs par leurs probabilités."
      },
      {
        q: "Formule de la variance V(X) ?",
        r: "V(X) = E(X²) − [E(X)]². Aussi : V(X) = ∑(xᵢ − E(X))² · P(X = xᵢ). En gros : mesure de la dispersion."
      },
      {
        q: "Qu'est-ce que l'écart-type σ(X) ?",
        r: "σ(X) = √V(X). En gros : il mesure « en moyenne » à quel point X s'éloigne de E(X)."
      },
      {
        q: "Formule des probabilités totales ?",
        r: "Si A₁, A₂, …, Aₙ partitionnent Ω : P(B) = ∑ P(Aᵢ) × P_Aᵢ(B). En gros : on découpe en cas et on additionne."
      },
      {
        q: "Qu'est-ce qu'un schéma de Bernoulli ?",
        r: "Répétition de n épreuves indépendantes à 2 issues (succès/échec). X = nombre de succès suit une loi binomiale B(n, p)."
      },
      {
        q: "Formule de P(X = k) pour X ∼ B(n, p) ?",
        r: "P(X = k) = C(n,k) · pᵏ · (1−p)ⁿ⁻ᵏ. C(n,k) = n! / (k!(n−k)!)."
      },
      {
        q: "Espérance et variance de B(n, p) ?",
        r: "E(X) = np et V(X) = np(1−p). En gros : en moyenne np succès sur n épreuves."
      },
      {
        q: "Quand deux événements sont-ils indépendants ?",
        r: "A et B indépendants ⟺ P(A ∩ B) = P(A) × P(B). En gros : savoir que A est réalisé ne change pas la probabilité de B."
      },
      {
        q: "Qu'est-ce qu'un problème de seuil ?",
        r: "On cherche le plus petit n tel qu'une probabilité dépasse (ou reste sous) un seuil donné. Souvent résolu avec ln."
      }
    ],
    qcm: [
      {
        question: "L'espérance E(X) d'une variable aléatoire représente :",
        options: [
          "La valeur la plus probable",
          "La moyenne pondérée par les probabilités",
          "La valeur maximale",
          "L'écart entre les valeurs"
        ],
        correct: 1,
        explication: "E(X) = ∑ xᵢ · P(X = xᵢ). C'est la moyenne des valeurs pondérées par leurs probabilités."
      },
      {
        question: "Pour X ∼ B(10, 0.3), que vaut E(X) ?",
        options: [
          "3",
          "0.3",
          "10",
          "7"
        ],
        correct: 0,
        explication: "E(X) = np = 10 × 0.3 = 3. En moyenne, 3 succès sur 10 épreuves."
      },
      {
        question: "A et B sont indépendants. P(A) = 0.4, P(B) = 0.5. Que vaut P(A ∩ B) ?",
        options: [
          "0.9",
          "0.1",
          "0.2",
          "0.45"
        ],
        correct: 2,
        explication: "Indépendance ⟹ P(A ∩ B) = P(A) × P(B) = 0.4 × 0.5 = 0.2."
      },
      {
        question: "Dans un schéma de Bernoulli, chaque épreuve :",
        options: [
          "A 3 issues possibles",
          "Dépend de la précédente",
          "A 2 issues et est indépendante des autres",
          "A toujours p = 0.5"
        ],
        correct: 2,
        explication: "Schéma de Bernoulli = n épreuves indépendantes à 2 issues (succès/échec) avec même probabilité p."
      },
      {
        question: "La variance V(X) se calcule par :",
        options: [
          "E(X)² − E(X²)",
          "E(X²) − [E(X)]²",
          "E(X) − E(X²)",
          "[E(X)]² + E(X²)"
        ],
        correct: 1,
        explication: "V(X) = E(X²) − [E(X)]². C'est la formule de König-Huygens, très pratique pour calculer."
      },
      {
        question: "P(X = k) pour X ∼ B(n, p) fait intervenir :",
        options: [
          "C(n,k) · pᵏ · (1−p)ⁿ⁻ᵏ",
          "n · pᵏ · (1−p)ᵏ",
          "C(n,k) · pⁿ · (1−p)ᵏ",
          "pᵏ · (1−p)ⁿ"
        ],
        correct: 0,
        explication: "On choisit k succès parmi n (coefficient binomial C(n,k)), avec k succès (pᵏ) et n−k échecs ((1−p)ⁿ⁻ᵏ)."
      },
      {
        question: "La formule des probabilités totales sert à :",
        options: [
          "Calculer P(A ∩ B)",
          "Vérifier l'indépendance",
          "Calculer P(B) en décomposant selon une partition",
          "Trouver l'espérance"
        ],
        correct: 2,
        explication: "On partitionne Ω en A₁, …, Aₙ et on calcule P(B) = ∑ P(Aᵢ) × P_Aᵢ(B). Très utile avec les arbres."
      }
    ],
    fiche: {
      page1_intro: {
        titre: "Introduction",
        texte: "• Les probabilités (branche des maths) servent à modéliser le hasard de manière rigoureuse.\n• On associe un nombre entre 0 et 1 à chaque événement : 0 = impossible, 1 = certain.\n• C'est comme donner une note de « chance » à chaque résultat possible.\n• Ce chapitre introduit les variables aléatoires (on attribue un nombre à chaque résultat).\n• On apprend les probabilités conditionnelles : la chance qu'un événement se produise sachant qu'un autre a eu lieu.\n• C'est comme se demander « quelle est la chance de pluie sachant qu'il y a des nuages ? ».\n• La loi binomiale (loi de probabilité) permet de compter les succès dans des épreuves répétées.\n• En gros : on apprend à calculer des chances, des moyennes et des dispersions.\n• L'espérance (moyenne théorique) et la variance (mesure de la dispersion) sont les outils clés.",
        points_cles: [
          "Variable aléatoire X : fonction qui associe un nombre à chaque résultat",
          "Espérance E(X) = moyenne pondérée par les probabilités",
          "Variance V(X) = mesure de la dispersion autour de la moyenne",
          "Probabilité conditionnelle : P sachant qu'un autre événement s'est produit",
          "Formule des probabilités totales : on découpe en cas et on additionne",
          "Indépendance : savoir A ne change rien pour B → P(A ∩ B) = P(A) × P(B)",
          "Loi binomiale B(n, p) : nombre de succès dans n épreuves indépendantes",
          "Problèmes de seuil : trouver n tel qu'une probabilité dépasse un niveau donné"
        ]
      },
      page2_concepts: {
        titre: "Concepts clés",
        concepts: [
          {
            terme: "Expérience aléatoire",
            definition: "Expérience dont le résultat est incertain. L'ensemble de tous les résultats possibles s'appelle l'univers Ω. C'est comme lancer un dé : on sait que le résultat sera entre 1 et 6, mais on ne sait pas lequel."
          },
          {
            terme: "Événement",
            definition: "Sous-ensemble de l'univers Ω. Un événement est « réalisé » si le résultat de l'expérience en fait partie. C'est comme parier sur « le dé tombe sur un nombre pair » : c'est l'événement {2, 4, 6}."
          },
          {
            terme: "Variable aléatoire X",
            definition: "Fonction qui associe un nombre réel à chaque issue de Ω. C'est comme mettre une étiquette numérique sur chaque résultat. En gros : X « traduit » les résultats en nombres pour pouvoir calculer."
          },
          {
            terme: "Espérance E(X)",
            definition: "Moyenne pondérée des valeurs de X par leurs probabilités : E(X) = ∑ xᵢ · P(X = xᵢ). C'est comme la note moyenne d'une classe pondérée par le nombre d'élèves. En gros : c'est ce qu'on obtient « en moyenne » sur un grand nombre de tirages."
          },
          {
            terme: "Variance V(X)",
            definition: "Mesure de la dispersion de X autour de son espérance. V(X) = E(X²) − [E(X)]². Plus V est grand, plus les résultats sont éparpillés. C'est comme la différence entre des notes groupées (V petit) et des notes très étalées (V grand)."
          },
          {
            terme: "Écart-type σ(X)",
            definition: "Racine carrée de la variance : σ(X) = √V(X). Même unité que X, contrairement à la variance. En gros : il mesure « en moyenne » de combien X s'éloigne de E(X)."
          },
          {
            terme: "Probabilité conditionnelle P_A(B)",
            definition: "P_A(B) = P(A ∩ B)/P(A). C'est la probabilité de B sachant que A s'est réalisé. Se lit sur les arbres pondérés. C'est comme se demander : « sachant qu'il pleut, quelle chance d'avoir froid ? »."
          },
          {
            terme: "Indépendance",
            definition: "A et B sont indépendants si P(A ∩ B) = P(A) × P(B). Connaître A ne change rien pour B. C'est comme tirer deux cartes avec remise : le premier tirage n'influence pas le second."
          },
          {
            terme: "Loi binomiale B(n, p)",
            definition: "Loi du nombre de succès dans n épreuves de Bernoulli indépendantes de paramètre p. E(X) = np, V(X) = np(1−p). C'est comme compter le nombre de « pile » sur n lancers d'une pièce truquée."
          },
          {
            terme: "Coefficient binomial C(n,k)",
            definition: "Nombre de façons de choisir k éléments parmi n. C(n,k) = n! / (k!(n−k)!). Se lit dans le triangle de Pascal. En gros : c'est le nombre de « combinaisons » possibles."
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
            nom: "Espérance",
            formule: "E(X) = ∑ xᵢ · P(X = xᵢ)",
            explication: "Moyenne pondérée des valeurs de X. C'est la valeur « attendue » sur un grand nombre de tirages."
          },
          {
            nom: "Variance (König-Huygens)",
            formule: "V(X) = E(X²) − [E(X)]²",
            explication: "Mesure la dispersion autour de l'espérance. Formule pratique pour calculer rapidement. Plus V est grand, plus X est dispersé."
          },
          {
            nom: "Écart-type",
            formule: "σ(X) = √V(X)",
            explication: "Racine de la variance. Même unité que X. En gros : c'est la « dispersion moyenne »."
          },
          {
            nom: "Probabilité conditionnelle",
            formule: "P_A(B) = P(A ∩ B) / P(A)",
            explication: "Probabilité de B sachant A. Attention : P(A) doit être strictement positif. Se lit directement sur les branches d'un arbre."
          },
          {
            nom: "Probabilités totales",
            formule: "P(B) = ∑ P(Aᵢ) × P_Aᵢ(B)",
            explication: "Les Aᵢ forment une partition (découpage complet) de Ω. On additionne les contributions de chaque cas. C'est comme calculer une note en additionnant les apports de chaque matière."
          },
          {
            nom: "Loi binomiale",
            formule: "P(X = k) = C(n,k) · pᵏ · (1−p)ⁿ⁻ᵏ",
            explication: "X ∼ B(n,p). C(n,k) choisit les places des succès, pᵏ pour les succès, (1−p)ⁿ⁻ᵏ pour les échecs."
          },
          {
            nom: "Espérance et variance de B(n,p)",
            formule: "E(X) = np et V(X) = np(1−p)",
            explication: "Formules directes pour la loi binomiale. En gros : en moyenne np succès, avec une dispersion de np(1−p)."
          },
          {
            nom: "Linéarité de l'espérance",
            formule: "E(aX + b) = a·E(X) + b",
            explication: "L'espérance est linéaire : on peut « sortir » les constantes. Très utile pour simplifier les calculs."
          }
        ]
      },
      page5_resume: {
        titre: "Résumé",
        resume: "Une variable aléatoire associe un nombre à chaque issue. L'espérance est la moyenne pondérée, la variance mesure la dispersion. Les probabilités conditionnelles se lisent sur les arbres. La loi binomiale B(n,p) modélise le nombre de succès dans n épreuves indépendantes. Pour les problèmes de seuil, on utilise souvent les logarithmes.",
        points_importants: [
          "E(X) = ∑ xᵢ P(X = xᵢ) et V(X) = E(X²) − [E(X)]²",
          "P_A(B) = P(A ∩ B)/P(A) (attention à P(A) ≠ 0)",
          "B(n,p) : E = np, V = np(1−p)",
          "Indépendance ⟺ P(A ∩ B) = P(A) × P(B)",
          "Problème de seuil : résoudre avec ln"
        ],
        pieges_courants: [
          "Confondre P(A ∩ B) et P_A(B)",
          "Oublier que P_A(B) n'est définie que si P(A) > 0",
          "Confondre indépendance et incompatibilité",
          "Mal identifier n et p dans la loi binomiale",
          "Oublier le coefficient binomial C(n,k) dans P(X=k)"
        ]
      }
    }
  },

  // ═══════════════════════════════════════════════════════════════
  // CHAPITRE 4 — Géométrie dans l'espace
  // ═══════════════════════════════════════════════════════════════
  {
    id: "term-mathematiques-ch4",
    titre: "Géométrie dans l'espace",
    emoji: "📐",
    nouveau: false,
    flashcardsData: [
      {
        q: "Quelles sont les règles de la perspective cavalière ?",
        r: "Les droites parallèles restent parallèles. Les milieux sont conservés. Les longueurs sur les fuyantes (en profondeur) sont réduites. Les angles ne sont pas conservés."
      },
      {
        q: "Comment montrer que deux vecteurs sont colinéaires dans l'espace ?",
        r: "u⃗ et v⃗ colinéaires ⟺ il existe k tel que v⃗ = k·u⃗. En coordonnées : les rapports x'/x = y'/y = z'/z sont égaux."
      },
      {
        q: "Quand trois vecteurs sont-ils coplanaires ?",
        r: "u⃗, v⃗, w⃗ coplanaires ⟺ il existe a, b tels que w⃗ = a·u⃗ + b·v⃗. En gros : w⃗ est combinaison linéaire de u⃗ et v⃗."
      },
      {
        q: "Quand deux droites de l'espace sont-elles parallèles ?",
        r: "Deux droites sont parallèles si leurs vecteurs directeurs sont colinéaires. Elles peuvent être confondues ou strictement parallèles."
      },
      {
        q: "Qu'est-ce qu'une représentation paramétrique de droite ?",
        r: "Pour A(x₀;y₀;z₀) et u⃗(a;b;c) : x = x₀+at, y = y₀+bt, z = z₀+ct, t ∈ ℝ. En gros : on « parcourt » la droite avec un paramètre t."
      },
      {
        q: "Quand une droite et un plan sont-ils parallèles ?",
        r: "Droite D et plan P parallèles ⟺ le vecteur directeur de D est combinaison linéaire de deux vecteurs du plan. Sinon D et P sont sécants."
      },
      {
        q: "Quand deux plans sont-ils parallèles ?",
        r: "Deux plans sont parallèles si deux vecteurs directeurs de l'un sont combinaisons linéaires de ceux de l'autre. En gros : mêmes directions."
      },
      {
        q: "Comment trouver l'intersection de deux plans ?",
        r: "Si deux plans ne sont pas parallèles, leur intersection est une droite. On résout le système des deux équations pour trouver la représentation paramétrique."
      },
      {
        q: "Comment montrer que 3 points sont alignés dans l'espace ?",
        r: "A, B, C alignés ⟺ AB⃗ et AC⃗ sont colinéaires. En gros : il existe k tel que AC⃗ = k · AB⃗."
      },
      {
        q: "Qu'est-ce qu'un repère de l'espace ?",
        r: "Un repère (O ; i⃗, j⃗, k⃗) est formé d'un point O et de 3 vecteurs non coplanaires. Tout point M a des coordonnées (x;y;z) uniques."
      }
    ],
    qcm: [
      {
        question: "En perspective cavalière, que conserve-t-on ?",
        options: [
          "Les angles",
          "Le parallélisme",
          "Les longueurs sur les fuyantes",
          "Les aires"
        ],
        correct: 1,
        explication: "En perspective cavalière, les droites parallèles restent parallèles. Les angles et les longueurs en profondeur sont déformés."
      },
      {
        question: "Trois vecteurs u⃗, v⃗, w⃗ sont coplanaires si :",
        options: [
          "w⃗ = u⃗ + v⃗ toujours",
          "w⃗ est combinaison linéaire de u⃗ et v⃗",
          "u⃗ · v⃗ = 0",
          "Les trois sont colinéaires"
        ],
        correct: 1,
        explication: "Coplanaires ⟺ ∃ a, b : w⃗ = a·u⃗ + b·v⃗. En gros : w⃗ peut s'écrire avec u⃗ et v⃗."
      },
      {
        question: "La représentation paramétrique d'une droite passant par A(1;2;3) de vecteur directeur u⃗(2;−1;4) est :",
        options: [
          "x=1+2t, y=2−t, z=3+4t",
          "x=2+t, y=−1+2t, z=4+3t",
          "x=1+t, y=2+t, z=3+t",
          "2x−y+4z=0"
        ],
        correct: 0,
        explication: "On part de A et on ajoute t fois le vecteur directeur : x = x₀+at, y = y₀+bt, z = z₀+ct."
      },
      {
        question: "Deux droites dans l'espace qui ne sont ni parallèles ni sécantes sont :",
        options: [
          "Confondues",
          "Perpendiculaires",
          "Non coplanaires",
          "Orthogonales"
        ],
        correct: 2,
        explication: "Dans l'espace, contrairement au plan, deux droites peuvent ne pas se croiser ET ne pas être parallèles : elles sont non coplanaires (ou « gauches »)."
      },
      {
        question: "Si D a pour vecteur directeur u⃗ colinéaire à un vecteur du plan P, alors :",
        options: [
          "D est perpendiculaire à P",
          "D est forcément dans P",
          "D est parallèle à P ou contenue dans P",
          "D et P sont sécants"
        ],
        correct: 2,
        explication: "Si le vecteur directeur de D est dans la direction du plan, D est parallèle à P (ou incluse dans P si elle a un point commun)."
      },
      {
        question: "L'intersection de deux plans non parallèles est :",
        options: [
          "Un point",
          "Une droite",
          "Un plan",
          "L'ensemble vide"
        ],
        correct: 1,
        explication: "Deux plans non parallèles se coupent toujours selon une droite dans l'espace."
      },
      {
        question: "Pour qu'un repère (O; i⃗, j⃗, k⃗) soit un repère de l'espace, il faut que :",
        options: [
          "i⃗, j⃗, k⃗ soient coplanaires",
          "i⃗, j⃗, k⃗ soient colinéaires",
          "i⃗, j⃗, k⃗ soient NON coplanaires",
          "i⃗, j⃗, k⃗ soient orthogonaux"
        ],
        correct: 2,
        explication: "Trois vecteurs non coplanaires forment une base de l'espace. Avec un point O, on obtient un repère."
      }
    ],
    fiche: {
      page1_intro: {
        titre: "Introduction",
        texte: "La géométrie dans l'espace étend les concepts du plan à trois dimensions. On travaille avec des points, droites et plans dans un espace à 3 coordonnées (x, y, z). La perspective cavalière permet de représenter l'espace sur une feuille. Les vecteurs permettent de décrire positions et directions. En gros : on apprend à raisonner en 3D avec des outils algébriques.",
        points_cles: [
          "Perspective cavalière : parallélisme conservé, pas les angles",
          "Vecteurs : colinéarité (droites), coplanarité (plans)",
          "Relations droites/plans : parallèles, sécants, inclus",
          "Représentation paramétrique d'une droite",
          "Repère de l'espace (O ; i⃗, j⃗, k⃗)"
        ]
      },
      page2_concepts: {
        titre: "Concepts clés",
        concepts: [
          {
            terme: "Perspective cavalière",
            definition: "Méthode de dessin en 3D sur une feuille. Les parallèles restent parallèles, les milieux sont conservés, mais les angles et les longueurs en profondeur sont déformés."
          },
          {
            terme: "Colinéarité",
            definition: "Deux vecteurs u⃗ et v⃗ sont colinéaires s'il existe k ∈ ℝ tel que v⃗ = k·u⃗. En gros : même direction."
          },
          {
            terme: "Coplanarité",
            definition: "Trois vecteurs u⃗, v⃗, w⃗ sont coplanaires si w⃗ = a·u⃗ + b·v⃗. En gros : les trois « tiennent » dans un même plan."
          },
          {
            terme: "Droites gauches",
            definition: "Deux droites non coplanaires : ni parallèles, ni sécantes. Spécifique à l'espace (n'existe pas dans le plan)."
          },
          {
            terme: "Représentation paramétrique",
            definition: "Écriture d'une droite avec un paramètre t : x = x₀+at, y = y₀+bt, z = z₀+ct. Le point (x₀,y₀,z₀) est sur la droite, (a,b,c) est le vecteur directeur."
          },
          {
            terme: "Repère de l'espace",
            definition: "Un point O et trois vecteurs i⃗, j⃗, k⃗ non coplanaires. Chaque point M a des coordonnées (x;y;z) uniques."
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
            nom: "Représentation paramétrique",
            formule: "x = x₀ + at, y = y₀ + bt, z = z₀ + ct (t ∈ ℝ)",
            explication: "Droite passant par A(x₀;y₀;z₀) de vecteur directeur u⃗(a;b;c)."
          },
          {
            nom: "Milieu de [AB]",
            formule: "M = ((xA+xB)/2 ; (yA+yB)/2 ; (zA+zB)/2)",
            explication: "Les coordonnées du milieu sont les moyennes des coordonnées."
          },
          {
            nom: "Vecteur AB⃗",
            formule: "AB⃗ = (xB−xA ; yB−yA ; zB−zA)",
            explication: "Coordonnées de B moins coordonnées de A."
          },
          {
            nom: "Colinéarité",
            formule: "u⃗ ∥ v⃗ ⟺ ∃k : v⃗ = k·u⃗",
            explication: "Rapports des coordonnées tous égaux (si non nulles)."
          },
          {
            nom: "Distance dans l'espace",
            formule: "AB = √((xB−xA)² + (yB−yA)² + (zB−zA)²)",
            explication: "Généralisation du théorème de Pythagore en 3D."
          }
        ]
      },
      page5_resume: {
        titre: "Résumé",
        resume: "La géométrie dans l'espace utilise des vecteurs pour décrire positions et directions. La colinéarité caractérise les droites, la coplanarité caractérise les plans. Deux droites peuvent être parallèles, sécantes ou gauches (spécifique à l'espace). Une droite est décrite par une représentation paramétrique. Le repère (O; i⃗, j⃗, k⃗) permet de calculer avec des coordonnées.",
        points_importants: [
          "Parallélisme conservé en perspective cavalière",
          "Colinéaire = même direction, coplanaire = même plan",
          "Droites gauches : ni parallèles ni sécantes (3D uniquement)",
          "Représentation paramétrique : un point + un vecteur directeur",
          "Toujours vérifier la non-coplanarité pour un repère"
        ],
        pieges_courants: [
          "Oublier que dans l'espace, deux droites non parallèles ne se coupent pas forcément",
          "Confondre vecteur directeur d'une droite et vecteur normal d'un plan",
          "Oublier t ∈ ℝ dans la représentation paramétrique",
          "Dessiner des angles droits en perspective cavalière (ils sont déformés !)",
          "Confondre « parallèle » et « inclus dans » pour droite/plan"
        ]
      }
    }
  },

  // ═══════════════════════════════════════════════════════════════
  // CHAPITRE 5 — Produit scalaire et applications
  // ═══════════════════════════════════════════════════════════════
  {
    id: "term-mathematiques-ch5",
    titre: "Produit scalaire et applications",
    emoji: "✖️",
    nouveau: false,
    flashcardsData: [
      {
        q: "Donne la formule du produit scalaire avec le cosinus.",
        r: "u⃗ · v⃗ = ‖u⃗‖ × ‖v⃗‖ × cos(u⃗, v⃗). En gros : on combine les normes et l'angle entre les vecteurs."
      },
      {
        q: "Donne la formule du produit scalaire en coordonnées.",
        r: "u⃗(x;y;z) · v⃗(x';y';z') = xx' + yy' + zz'. En gros : on multiplie coordonnée par coordonnée et on additionne."
      },
      {
        q: "Comment calculer la norme d'un vecteur dans l'espace ?",
        r: "‖u⃗‖ = √(x² + y² + z²). C'est la longueur du vecteur. En gros : Pythagore en 3D."
      },
      {
        q: "Quand deux vecteurs sont-ils orthogonaux ?",
        r: "u⃗ ⊥ v⃗ ⟺ u⃗ · v⃗ = 0. En gros : leur produit scalaire est nul."
      },
      {
        q: "Qu'est-ce qu'un vecteur normal à un plan ?",
        r: "Un vecteur n⃗ perpendiculaire à tous les vecteurs du plan. En gros : il « pointe » dans la direction orthogonale au plan."
      },
      {
        q: "Quelle est l'équation cartésienne d'un plan ?",
        r: "ax + by + cz + d = 0, où n⃗(a;b;c) est un vecteur normal au plan. En gros : les coefficients de x, y, z donnent le vecteur normal."
      },
      {
        q: "Comment montrer qu'une droite est orthogonale à un plan ?",
        r: "D ⊥ P ⟺ le vecteur directeur de D est colinéaire au vecteur normal de P. En gros : la droite est dans la direction « perpendiculaire »."
      },
      {
        q: "Formule de la distance d'un point à un plan ?",
        r: "d(M₀, P) = |ax₀ + by₀ + cz₀ + d| / √(a² + b² + c²), avec P : ax+by+cz+d=0."
      },
      {
        q: "Comment prouver que deux plans sont perpendiculaires ?",
        r: "Deux plans sont perpendiculaires si leurs vecteurs normaux sont orthogonaux : n⃗₁ · n⃗₂ = 0."
      },
      {
        q: "Formule du projeté orthogonal avec le produit scalaire ?",
        r: "Le projeté de u⃗ sur v⃗ est p = (u⃗ · v⃗ / ‖v⃗‖²) × v⃗. En gros : l'ombre de u⃗ sur la direction de v⃗."
      }
    ],
    qcm: [
      {
        question: "Le produit scalaire u⃗ · v⃗ en coordonnées vaut :",
        options: [
          "xx' − yy' − zz'",
          "xx' + yy' + zz'",
          "(x+x')(y+y')(z+z')",
          "x/x' + y/y' + z/z'"
        ],
        correct: 1,
        explication: "u⃗(x;y;z) · v⃗(x';y';z') = xx' + yy' + zz'. On multiplie et on additionne, coordonnée par coordonnée."
      },
      {
        question: "Si u⃗ · v⃗ = 0, alors :",
        options: [
          "u⃗ et v⃗ sont colinéaires",
          "u⃗ ou v⃗ est nul",
          "u⃗ et v⃗ sont orthogonaux",
          "u⃗ = v⃗"
        ],
        correct: 2,
        explication: "Produit scalaire nul ⟺ vecteurs orthogonaux (ou l'un des deux est le vecteur nul)."
      },
      {
        question: "L'équation d'un plan de vecteur normal n⃗(2;−3;1) passant par A(1;0;2) est :",
        options: [
          "2x − 3y + z − 4 = 0",
          "2x − 3y + z + 4 = 0",
          "x − 3y + 2z = 0",
          "2x + 3y − z − 4 = 0"
        ],
        correct: 0,
        explication: "2(x−1) − 3(y−0) + 1(z−2) = 0 ⟹ 2x − 3y + z − 4 = 0. On utilise n⃗ et le point A."
      },
      {
        question: "La distance d'un point M₀(1;2;3) au plan 2x + y − 2z + 1 = 0 vaut :",
        options: [
          "1/3",
          "1",
          "3",
          "2/3"
        ],
        correct: 0,
        explication: "d = |2(1)+1(2)−2(3)+1| / √(4+1+4) = |2+2−6+1| / 3 = 1/3."
      },
      {
        question: "Deux plans sont parallèles si et seulement si :",
        options: [
          "Leurs vecteurs normaux sont colinéaires",
          "Leurs vecteurs normaux sont orthogonaux",
          "Ils ont un point commun",
          "Leurs équations sont identiques"
        ],
        correct: 0,
        explication: "Plans parallèles ⟺ vecteurs normaux colinéaires (n⃗₁ = k·n⃗₂). Si en plus d₁ = d₂, ils sont confondus."
      },
      {
        question: "Une droite est orthogonale à un plan si :",
        options: [
          "Son vecteur directeur est dans le plan",
          "Son vecteur directeur est colinéaire au vecteur normal du plan",
          "Elle est parallèle au plan",
          "Elle passe par l'origine"
        ],
        correct: 1,
        explication: "D ⊥ P ⟺ u⃗_D est colinéaire à n⃗_P. Le vecteur directeur de la droite pointe dans la direction perpendiculaire au plan."
      },
      {
        question: "La norme de u⃗(3; −4; 0) vaut :",
        options: [
          "7",
          "5",
          "25",
          "1"
        ],
        correct: 1,
        explication: "‖u⃗‖ = √(9 + 16 + 0) = √25 = 5. C'est le théorème de Pythagore en 3D."
      }
    ],
    fiche: {
      page1_intro: {
        titre: "Introduction",
        texte: "Le produit scalaire est un outil puissant pour mesurer des angles, prouver des orthogonalités et calculer des distances dans l'espace. Il associe un nombre réel à deux vecteurs. Quand ce nombre vaut 0, les vecteurs sont perpendiculaires. Ce chapitre introduit aussi les équations de plans et la notion de vecteur normal. En gros : le produit scalaire est la « clé » de la géométrie dans l'espace.",
        points_cles: [
          "Produit scalaire : 4 expressions (cosinus, norme, coordonnées, projeté)",
          "Orthogonalité : u⃗ · v⃗ = 0",
          "Vecteur normal et équation cartésienne du plan",
          "Distance d'un point à un plan",
          "Plans parallèles et perpendiculaires"
        ]
      },
      page2_concepts: {
        titre: "Concepts clés",
        concepts: [
          {
            terme: "Produit scalaire",
            definition: "Opération qui à deux vecteurs associe un réel : u⃗ · v⃗ = ‖u⃗‖‖v⃗‖cos θ = xx'+yy'+zz'. En gros : ça mesure « à quel point les vecteurs vont dans la même direction »."
          },
          {
            terme: "Orthogonalité",
            definition: "Deux vecteurs sont orthogonaux si u⃗ · v⃗ = 0. En gros : ils sont perpendiculaires (angle de 90°)."
          },
          {
            terme: "Vecteur normal",
            definition: "Vecteur n⃗ perpendiculaire à un plan P. Il est orthogonal à tous les vecteurs contenus dans P."
          },
          {
            terme: "Équation cartésienne d'un plan",
            definition: "ax + by + cz + d = 0, où n⃗(a;b;c) est normal au plan. On trouve d en substituant un point du plan."
          },
          {
            terme: "Plans perpendiculaires",
            definition: "Deux plans sont perpendiculaires si leurs vecteurs normaux sont orthogonaux : n⃗₁ · n⃗₂ = 0."
          },
          {
            terme: "Projeté orthogonal",
            definition: "Le projeté de M sur un plan P est le point H de P le plus proche de M. MH est perpendiculaire à P."
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
            nom: "Produit scalaire (cosinus)",
            formule: "u⃗ · v⃗ = ‖u⃗‖ × ‖v⃗‖ × cos(u⃗, v⃗)",
            explication: "Expression avec les normes et l'angle. Utile pour trouver un angle."
          },
          {
            nom: "Produit scalaire (coordonnées)",
            formule: "u⃗ · v⃗ = xx' + yy' + zz'",
            explication: "Expression calculatoire la plus utilisée."
          },
          {
            nom: "Norme",
            formule: "‖u⃗‖ = √(x² + y² + z²)",
            explication: "Longueur du vecteur. On a aussi ‖u⃗‖² = u⃗ · u⃗."
          },
          {
            nom: "Équation du plan",
            formule: "ax + by + cz + d = 0, avec n⃗(a;b;c) normal",
            explication: "Les coefficients de x, y, z forment le vecteur normal."
          },
          {
            nom: "Distance point-plan",
            formule: "d(M₀, P) = |ax₀ + by₀ + cz₀ + d| / √(a² + b² + c²)",
            explication: "Formule directe. Attention aux valeurs absolues et à la racine."
          },
          {
            nom: "Angle entre deux vecteurs",
            formule: "cos θ = (u⃗ · v⃗) / (‖u⃗‖ × ‖v⃗‖)",
            explication: "On isole le cosinus à partir du produit scalaire."
          }
        ]
      },
      page5_resume: {
        titre: "Résumé",
        resume: "Le produit scalaire u⃗ · v⃗ = xx'+yy'+zz' permet de mesurer angles et distances dans l'espace. Quand il vaut 0, les vecteurs sont orthogonaux. Un plan est défini par un vecteur normal n⃗(a;b;c) et une équation ax+by+cz+d=0. La distance d'un point à un plan se calcule avec une formule directe.",
        points_importants: [
          "u⃗ · v⃗ = 0 ⟺ orthogonalité",
          "Équation du plan : les coefficients = vecteur normal",
          "Distance point-plan : formule avec valeur absolue",
          "Plans parallèles ⟺ normales colinéaires",
          "D ⊥ P ⟺ vecteur directeur colinéaire à la normale"
        ],
        pieges_courants: [
          "Oublier la valeur absolue dans la distance point-plan",
          "Confondre vecteur normal (perpendiculaire au plan) et vecteur directeur (dans le plan)",
          "Oublier de calculer d en substituant un point connu dans l'équation du plan",
          "Confondre plans parallèles (normales colinéaires) et perpendiculaires (normales orthogonales)",
          "Se tromper dans le signe de d lors du calcul"
        ]
      }
    }
  },

  // ═══════════════════════════════════════════════════════════════
  // CHAPITRE 6 — Fonction logarithme népérien
  // ═══════════════════════════════════════════════════════════════
  {
    id: "term-mathematiques-ch6",
    titre: "Fonction logarithme népérien",
    emoji: "📊",
    nouveau: false,
    flashcardsData: [
      {
        q: "Quelle est la définition de ln(x) ?",
        r: "ln(x) est l'unique réel y tel que eʸ = x. En gros : ln est la « fonction inverse » de l'exponentielle. Définie pour x > 0."
      },
      {
        q: "Que valent ln(1) et ln(e) ?",
        r: "ln(1) = 0 (car e⁰ = 1) et ln(e) = 1 (car e¹ = e)."
      },
      {
        q: "Formule de ln(ab) ?",
        r: "ln(ab) = ln(a) + ln(b), pour a > 0 et b > 0. En gros : un produit dans le ln devient une somme."
      },
      {
        q: "Formule de ln(a/b) ?",
        r: "ln(a/b) = ln(a) − ln(b), pour a > 0 et b > 0. En gros : un quotient dans le ln devient une différence."
      },
      {
        q: "Formule de ln(aⁿ) ?",
        r: "ln(aⁿ) = n × ln(a), pour a > 0. En gros : l'exposant « descend » devant le ln."
      },
      {
        q: "Quelle est la dérivée de ln(x) ?",
        r: "(ln x)' = 1/x, pour x > 0. En gros : la pente de ln diminue quand x augmente."
      },
      {
        q: "Que vaut lim(x→+∞) ln(x) ?",
        r: "lim(x→+∞) ln(x) = +∞. Mais ln croît très lentement (plus lentement que n'importe quelle puissance de x)."
      },
      {
        q: "Que vaut lim(x→0⁺) ln(x) ?",
        r: "lim(x→0⁺) ln(x) = −∞. En gros : quand x se rapproche de 0, ln plonge vers −∞."
      },
      {
        q: "Quelle est la limite de référence ln(x)/x quand x → +∞ ?",
        r: "lim(x→+∞) ln(x)/x = 0. En gros : ln croît beaucoup plus lentement que x. On dit que x « l'emporte » sur ln(x)."
      },
      {
        q: "Quel est le lien entre log₁₀ et ln ?",
        r: "log₁₀(x) = ln(x)/ln(10) ≈ ln(x)/2.303. En gros : on change de base en divisant par ln de la nouvelle base."
      }
    ],
    qcm: [
      {
        question: "ln(x) est défini pour :",
        options: [
          "x ∈ ℝ",
          "x > 0",
          "x ≥ 0",
          "x ≥ 1"
        ],
        correct: 1,
        explication: "Le logarithme népérien n'est défini que pour x strictement positif. ln(0) n'existe pas."
      },
      {
        question: "ln(e³) vaut :",
        options: [
          "3",
          "e³",
          "3e",
          "1/3"
        ],
        correct: 0,
        explication: "ln(eⁿ) = n, donc ln(e³) = 3. C'est la propriété fondamentale ln et exp sont réciproques."
      },
      {
        question: "ln(ab) = ?",
        options: [
          "ln(a) × ln(b)",
          "ln(a) + ln(b)",
          "ln(a) − ln(b)",
          "ln(a)/ln(b)"
        ],
        correct: 1,
        explication: "Propriété fondamentale : le logarithme transforme un produit en somme. ln(ab) = ln(a) + ln(b)."
      },
      {
        question: "La dérivée de ln(x) est :",
        options: [
          "1/x",
          "x",
          "eˣ",
          "1/x²"
        ],
        correct: 0,
        explication: "(ln x)' = 1/x pour x > 0. C'est une formule fondamentale à connaître par cœur."
      },
      {
        question: "lim(x→+∞) ln(x)/x = ?",
        options: [
          "+∞",
          "1",
          "0",
          "−∞"
        ],
        correct: 2,
        explication: "Croissance comparée : ln(x) croît beaucoup plus lentement que x. Le quotient tend vers 0."
      },
      {
        question: "lim(x→0⁺) ln(x) = ?",
        options: [
          "0",
          "+∞",
          "−∞",
          "1"
        ],
        correct: 2,
        explication: "Quand x → 0⁺, ln(x) → −∞. La courbe plonge vers le bas à gauche."
      },
      {
        question: "L'équation ln(x) = 3 a pour solution :",
        options: [
          "x = 3",
          "x = e³",
          "x = ln(3)",
          "x = 3e"
        ],
        correct: 1,
        explication: "ln(x) = 3 ⟺ x = e³. On « passe à l'exponentielle » des deux côtés. C'est la bijection réciproque."
      }
    ],
    fiche: {
      page1_intro: {
        titre: "Introduction",
        texte: "Le logarithme népérien (noté ln) est la fonction réciproque de l'exponentielle. Si eʸ = x, alors y = ln(x). Défini pour x > 0, il transforme les produits en sommes et les puissances en produits. C'est un outil essentiel pour résoudre des équations avec des exponentielles et pour les études de fonctions. En gros : ln « défait » ce que fait l'exponentielle.",
        points_cles: [
          "ln est la réciproque de exp : ln(eˣ) = x et e^(ln x) = x",
          "Domaine : ]0 ; +∞[",
          "ln transforme les produits en sommes",
          "Dérivée : (ln x)' = 1/x",
          "Croissances comparées : x l'emporte sur ln(x)"
        ]
      },
      page2_concepts: {
        titre: "Concepts clés",
        concepts: [
          {
            terme: "Logarithme népérien",
            definition: "Fonction ln : ]0;+∞[ → ℝ. Pour tout x > 0, ln(x) est l'unique y tel que eʸ = x. En gros : « à quelle puissance faut-il élever e pour obtenir x ? »"
          },
          {
            terme: "Fonction réciproque",
            definition: "ln et exp sont réciproques : ln(eˣ) = x pour tout x ∈ ℝ, et e^(ln x) = x pour tout x > 0."
          },
          {
            terme: "Propriétés algébriques de ln",
            definition: "ln(ab) = ln(a)+ln(b), ln(a/b) = ln(a)−ln(b), ln(aⁿ) = n·ln(a). En gros : les opérations « descendent d'un cran »."
          },
          {
            terme: "Croissance comparée",
            definition: "ln(x) croît moins vite que toute puissance de x. lim ln(x)/x = 0 quand x → +∞. En gros : ln est « plus faible » que x."
          },
          {
            terme: "Logarithme décimal",
            definition: "log₁₀(x) = ln(x)/ln(10). Utilisé en sciences (pH, décibels). log₁₀(10) = 1, log₁₀(100) = 2."
          },
          {
            terme: "Signe de ln(x)",
            definition: "ln(x) < 0 si 0 < x < 1, ln(1) = 0, ln(x) > 0 si x > 1. En gros : ln est négatif avant 1 et positif après."
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
            nom: "Définition",
            formule: "y = ln(x) ⟺ x = eʸ (x > 0)",
            explication: "Passage entre ln et exp. Fondamental pour résoudre des équations."
          },
          {
            nom: "Produit",
            formule: "ln(ab) = ln(a) + ln(b)",
            explication: "Le logarithme transforme un produit en somme."
          },
          {
            nom: "Quotient",
            formule: "ln(a/b) = ln(a) − ln(b)",
            explication: "Le logarithme transforme un quotient en différence."
          },
          {
            nom: "Puissance",
            formule: "ln(aⁿ) = n · ln(a)",
            explication: "L'exposant « descend » devant le logarithme."
          },
          {
            nom: "Dérivée de ln(x)",
            formule: "(ln x)' = 1/x, pour x > 0",
            explication: "Fondamental. La dérivée diminue quand x grandit."
          },
          {
            nom: "Dérivée de ln(u)",
            formule: "(ln u)' = u'/u, pour u > 0",
            explication: "Formule composée. Exemple : (ln(2x+1))' = 2/(2x+1)."
          },
          {
            nom: "Croissance comparée",
            formule: "lim(x→+∞) ln(x)/x = 0 et lim(x→0⁺) x·ln(x) = 0",
            explication: "ln est « dominé » par les puissances de x."
          },
          {
            nom: "Changement de base",
            formule: "log_b(x) = ln(x)/ln(b)",
            explication: "Pour passer de ln au logarithme en base b."
          }
        ]
      },
      page5_resume: {
        titre: "Résumé",
        resume: "ln est la réciproque de exp. Défini pour x > 0, il transforme produits en sommes et puissances en produits. Sa dérivée est 1/x. La courbe passe par (1;0), croît lentement, tend vers +∞ quand x → +∞ et vers −∞ quand x → 0⁺. Les croissances comparées montrent que ln est « plus faible » que toute puissance de x.",
        points_importants: [
          "ln(1) = 0, ln(e) = 1",
          "ln(ab) = ln(a)+ln(b), ln(aⁿ) = n·ln(a)",
          "(ln x)' = 1/x et (ln u)' = u'/u",
          "Croissances comparées : lim ln(x)/x = 0",
          "Résoudre ln(x) = a ⟺ x = eᵃ"
        ],
        pieges_courants: [
          "ln(a+b) ≠ ln(a) + ln(b) (la somme ne se factorise PAS)",
          "ln(0) n'existe pas ! Domaine = ]0;+∞[ uniquement",
          "Confondre ln(x²) = 2ln(x) (valable si x > 0) et ln(x²) = 2ln|x|",
          "Oublier que ln est négatif pour 0 < x < 1",
          "Mal appliquer les croissances comparées (retenir : x bat ln(x))"
        ]
      }
    }
  }
];
