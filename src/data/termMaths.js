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
        texte: "Le raisonnement par récurrence permet de prouver qu'une propriété est vraie pour tous les entiers. Ce chapitre aborde aussi les limites de suites, c'est-à-dire vers quelle valeur une suite se dirige quand n grandit.",
        sections: [
          {
            titre: "Le principe de la récurrence",
            contenu: `Le raisonnement par récurrence sert à démontrer qu'une propriété P(n) est vraie pour tout entier n ≥ n₀.\n\nC'est comme une file de dominos alignés. On pousse le premier domino : c'est l'initialisation. Ensuite, on prouve que chaque domino fait tomber le suivant : c'est l'hérédité. Si les deux conditions sont remplies, tous les dominos tombent.\n\nConcrètement, on procède en 3 étapes obligatoires :\n\n1. Initialisation : on vérifie que P(n₀) est vraie au rang de départ.\n2. Hérédité : on suppose P(n) vraie (hypothèse de récurrence), et on montre que P(n+1) est vraie.\n3. Conclusion : on écrit que P(n) est vraie pour tout n ≥ n₀ d'après le principe de récurrence.\n\nEn gros : on vérifie un cas de départ, puis on montre que ça se propage de rang en rang.\n\nAttention : les trois étapes sont obligatoires. Oublier l'initialisation ou la conclusion coûte des points au bac.`
          },
          {
            titre: "Pourquoi l'initialisation est indispensable",
            contenu: `Sans initialisation, la récurrence est invalide. C'est comme une file de dominos où personne ne pousse le premier : aucun ne tombe.\n\nUn contre-exemple classique le montre bien. On veut prouver que « 6ⁿ + 1 est multiple de 5 ». L'hérédité fonctionne parfaitement. Pourtant, 6¹ + 1 = 7, et 7 n'est pas multiple de 5.\n\nEn gros : l'hérédité peut être correcte, mais la propriété est fausse si le premier cas ne marche pas.\n\nTraduction : l'initialisation, c'est le fondement de toute la preuve. Sans elle, l'hérédité tourne dans le vide.\n\nC'est comme un escalier : si la première marche n'existe pas, tu ne peux pas monter. L'hérédité te dit comment passer d'une marche à la suivante, mais encore faut-il pouvoir poser le pied sur la première.`
          },
          {
            titre: "Exemples classiques de récurrence",
            contenu: `Voici les formules classiques démontrées par récurrence au bac :\n\n• Somme des entiers : 1 + 2 + … + n = n(n+1)/2.\nTraduction : c'est comme additionner les numéros de marches d'un escalier.\n\n• Somme des carrés : 1² + 2² + … + n² = n(n+1)(2n+1)/6.\nC'est une formule incontournable du programme.\n\n• Somme des cubes : 1³ + 2³ + … + n³ = [n(n+1)/2]².\nTraduction : le carré de la somme des entiers. Résultat élégant.\n\n• Inégalité de Bernoulli : pour a > 0 et n ≥ 1, (1+a)ⁿ ≥ 1 + na.\nEn gros : (1+a)ⁿ grandit plus vite que 1 + na.\n\n• Suites géométriques : ∑(k=0 à n) qᵏ = (1 − qⁿ⁺¹)/(1 − q) pour q ≠ 1.\n\nChaque preuve suit le même schéma : initialisation, hérédité, conclusion.`
          },
          {
            titre: "Limites de suites : les opérations",
            contenu: `La limite d'une suite décrit la valeur vers laquelle ses termes se dirigent quand n → +∞.\n\nLes opérations sur les limites suivent des règles précises :\n\n• Somme : lim(uₙ + vₙ) = lim(uₙ) + lim(vₙ).\n• Produit : lim(uₙ × vₙ) = lim(uₙ) × lim(vₙ).\n• Quotient : lim(uₙ / vₙ) = lim(uₙ) / lim(vₙ), si lim(vₙ) ≠ 0.\n\nMais attention aux formes indéterminées (FI) : +∞ − ∞, 0 × ∞, ∞/∞, 0/0.\n\nEn gros : dans ces cas, le calcul « hésite ». Il faut transformer l'expression.\n\nTraduction : factoriser, simplifier ou encadrer pour lever l'indétermination. C'est comme dénouer un nœud : on ne peut pas tirer directement, il faut trouver le bon bout.\n\nLes limites de référence à connaître :\n• Si |q| < 1 : lim qⁿ = 0.\n• Si q > 1 : lim qⁿ = +∞.\n• Si q = 1 : lim qⁿ = 1.`
          },
          {
            titre: "Théorèmes de comparaison et encadrement",
            contenu: `Quand le calcul direct de la limite ne suffit pas, on utilise des théorèmes de comparaison.\n\n• Comparaison directe : si uₙ ≥ vₙ pour tout n et lim(vₙ) = +∞, alors lim(uₙ) = +∞.\nEn gros : plus grand qu'une suite qui explose → elle explose aussi.\n\n• Théorème des gendarmes (encadrement) : si vₙ ≤ uₙ ≤ wₙ et lim(vₙ) = lim(wₙ) = ℓ, alors lim(uₙ) = ℓ.\nC'est comme être coincé entre deux voitures de police qui vont au même endroit. La suite du milieu est forcée de suivre.\n\nTraduction : on « coince » la suite entre deux suites dont on connaît la limite.\n\nEn gros : si le plancher et le plafond convergent vers le même point, ce qui est entre les deux converge aussi.\n\nCe théorème est très utile pour les suites difficiles à calculer directement. On cherche un encadrement simple, et on conclut.`
          },
          {
            titre: "Convergence monotone bornée",
            contenu: `Le théorème de convergence monotone est un outil fondamental.\n\n• Suite croissante ET majorée → convergente.\nC'est comme monter un escalier avec un plafond : on finit par se stabiliser.\n\n• Suite décroissante ET minorée → convergente.\nC'est comme descendre avec un plancher : on ne peut pas aller plus bas.\n\nAttention : ce théorème ne donne PAS la valeur de la limite. Il dit juste qu'elle existe.\n\nEn gros : pour trouver la limite, on utilise d'autres méthodes (point fixe, par exemple).\n\nTraduction : si uₙ₊₁ = f(uₙ) et la suite converge vers ℓ, alors ℓ = f(ℓ). On résout cette équation pour trouver la limite.\n\nPiège classique : « majorée » ne veut pas dire « convergente » toute seule. Il faut aussi la monotonie. De même, « croissante » ne suffit pas. Il faut aussi le majorant.`
          }
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
        texte: "La dérivation mesure la vitesse de variation d'une fonction. Ce chapitre approfondit les dérivées composées et introduit la convexité, qui décrit la courbure d'une courbe.",
        sections: [
          {
            titre: "Le nombre dérivé et la tangente",
            contenu: `Le nombre dérivé f'(a) mesure la pente de la courbe au point d'abscisse a.\n\nSa définition exacte est : f'(a) = lim(h→0) [f(a+h) − f(a)] / h.\n\nC'est comme mesurer la vitesse d'une voiture à un instant précis. Le compteur affiche une valeur instantanée. C'est exactement ce que fait f'(a) : la « vitesse » de f en x = a.\n\nL'équation de la tangente à la courbe en x = a est :\ny = f'(a)(x − a) + f(a)\n\nTraduction : c'est la droite qui « colle » à la courbe en un seul point. Le coefficient directeur est f'(a), et elle passe par le point (a, f(a)).\n\nEn gros : f'(a) te donne la pente, et la formule de la tangente te donne la droite entière.\n\nLa tangente est un outil puissant. Elle sert à approcher localement la courbe par une droite. C'est la meilleure approximation linéaire de f au voisinage de a.`
          },
          {
            titre: "Sens de variation et extrema",
            contenu: `Le signe de la dérivée donne le sens de variation de la fonction.\n\n• f'(x) > 0 sur un intervalle → f est strictement croissante.\n• f'(x) < 0 sur un intervalle → f est strictement décroissante.\n• f'(x) = 0 en un point a → candidat pour un extremum.\n\nC'est comme la pente d'une route. Si la pente est positive, tu montes. Si elle est négative, tu descends. Au sommet, la pente vaut zéro.\n\nAttention : f'(a) = 0 ne suffit pas pour conclure. Il faut vérifier que f' change de signe autour de a.\n\n• Si f' passe de + à − en a : maximum local.\n• Si f' passe de − à + en a : minimum local.\n• Si f' ne change pas de signe : pas d'extremum (point d'inflexion horizontal).\n\nEn gros : on construit le tableau de variations pour résumer tout ça. C'est la « carte d'identité » du comportement de f.`
          },
          {
            titre: "La dérivée composée (v∘u)'",
            contenu: `Quand on enchaîne deux fonctions, on obtient une fonction composée : (v∘u)(x) = v(u(x)).\n\nC'est comme une chaîne de production. D'abord la machine u transforme x, puis la machine v transforme le résultat.\n\nLa formule de la dérivée composée est :\n(v∘u)'(x) = u'(x) × v'(u(x))\n\nTraduction : on dérive « l'intérieur » (u') et on multiplie par la dérivée de « l'extérieur » évaluée en u(x).\n\nVoici les cas les plus fréquents au bac :\n\n• (eᵘ)' = u' × eᵘ. Exemple : (e²ˣ)' = 2e²ˣ.\n• (ln u)' = u'/u. Exemple : (ln(3x+1))' = 3/(3x+1).\n• (uⁿ)' = n × u' × uⁿ⁻¹. Exemple : ((2x+1)³)' = 6(2x+1)².\n• (√u)' = u'/(2√u). Exemple : (√(x+1))' = 1/(2√(x+1)).\n• (1/u)' = −u'/u². Exemple : (1/(x+1))' = −1/(x+1)².\n\nEn gros : ne JAMAIS oublier de dériver « ce qu'il y a dedans ». C'est l'erreur la plus fréquente au bac.`
          },
          {
            titre: "Convexité et concavité",
            contenu: `La dérivée seconde f'' (la dérivée de f') renseigne sur la courbure de la courbe.\n\n• f''(x) ≥ 0 sur un intervalle → f est convexe. La courbe « sourit » (forme ∪).\nC'est comme un bol posé à l'endroit. La courbe est en dessous de ses cordes (sécantes).\n\n• f''(x) ≤ 0 sur un intervalle → f est concave. La courbe « fait la tête » (forme ∩).\nC'est comme un chapeau retourné. La courbe est au-dessus de ses cordes.\n\nEn gros : f' dit « ça monte ou ça descend ? ». f'' dit « ça courbe vers le haut ou vers le bas ? ».\n\nTraduction : si f est convexe, la pente f' est croissante. La courbe accélère de plus en plus.\n\nSi f est concave, la pente f' est décroissante. La courbe freine de plus en plus.\n\nLa convexité a aussi une interprétation géométrique. Pour une fonction convexe, la tangente est toujours SOUS la courbe. Pour une concave, la tangente est toujours AU-DESSUS.`
          },
          {
            titre: "Le point d'inflexion",
            contenu: `Un point d'inflexion est un point où la courbe change de courbure.\n\nElle passe de convexe à concave, ou de concave à convexe. C'est le moment où la courbe « bascule ».\n\nLes conditions pour un point d'inflexion en x = a sont :\n\n1. f''(a) = 0.\n2. f'' change de signe en a.\n\nAttention : f''(a) = 0 seul ne suffit PAS. Il faut absolument que f'' change de signe.\n\nC'est comme un virage en voiture. Tu tournais à gauche, et maintenant tu tournes à droite. Le point d'inflexion, c'est le moment exact où tu es entre les deux.\n\nEn gros : au point d'inflexion, la tangente traverse la courbe. C'est le seul endroit où ça arrive.\n\nTraduction : sur le tableau de signes de f'', le point d'inflexion correspond au changement de signe. Si f'' passe de + à − ou de − à +, il y a inflexion.`
          },
          {
            titre: "Tableau récapitulatif des dérivées",
            contenu: `Voici les dérivées usuelles à connaître par cœur :\n\n• (xⁿ)' = nxⁿ⁻¹. Exemple : (x³)' = 3x².\n• (eˣ)' = eˣ. L'exponentielle se reproduit à l'identique.\n• (ln x)' = 1/x. Attention : défini pour x > 0.\n• (√x)' = 1/(2√x). Cas particulier de xⁿ avec n = 1/2.\n• (1/x)' = −1/x². Cas particulier de xⁿ avec n = −1.\n\nPour les composées, on multiplie par u' :\n\n• (eᵘ)' = u' × eᵘ.\n• (ln u)' = u'/u.\n• (uⁿ)' = n × u' × uⁿ⁻¹.\n\nEn gros : la composée, c'est la dérivée « classique » multipliée par u'. C'est le facteur qu'on oublie le plus souvent.\n\nTraduction : quand tu dérives « quelque chose de compliqué à l'intérieur », n'oublie jamais la dérivée de l'intérieur devant.`
          }
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
        texte: "Les probabilités modélisent le hasard de manière rigoureuse. Ce chapitre introduit les variables aléatoires, les probabilités conditionnelles et la loi binomiale.",
        sections: [
          {
            titre: "Expérience aléatoire et univers",
            contenu: `Une expérience aléatoire est une expérience dont on ne peut pas prévoir le résultat à l'avance.\n\nL'ensemble de tous les résultats possibles s'appelle l'univers, noté Ω. Par exemple, pour un lancer de dé, Ω = {1, 2, 3, 4, 5, 6}.\n\nUn événement est un sous-ensemble de Ω. Par exemple, « obtenir un nombre pair » = {2, 4, 6}.\n\nÀ chaque événement, on associe un nombre entre 0 et 1 :\n\n• 0 = événement impossible (ne se produira jamais).\n• 1 = événement certain (se produira toujours).\n• Entre 0 et 1 = plus ou moins probable.\n\nC'est comme donner une note de « chance » à chaque résultat. Plus la note est haute, plus c'est probable.\n\nEn gros : la probabilité mesure à quel point un événement est susceptible de se réaliser.`
          },
          {
            titre: "Variable aléatoire, espérance et variance",
            contenu: `Une variable aléatoire X est une fonction qui associe un nombre à chaque résultat de l'expérience.\n\nC'est comme mettre une étiquette numérique sur chaque issue. Par exemple, X = gain au jeu.\n\nL'espérance E(X) est la moyenne pondérée des valeurs de X par leurs probabilités :\nE(X) = ∑ xᵢ × P(X = xᵢ)\n\nTraduction : c'est ce qu'on obtiendrait « en moyenne » si on répétait l'expérience un très grand nombre de fois.\n\nLa variance V(X) mesure la dispersion autour de l'espérance :\nV(X) = E(X²) − [E(X)]²\n\nC'est comme comparer des notes groupées (V petit) à des notes très étalées (V grand). Plus V est grand, plus les résultats sont éparpillés.\n\nL'écart-type σ(X) = √V(X) est dans la même unité que X.\n\nEn gros : E(X) dit « où est le centre ? ». V(X) dit « à quel point c'est dispersé autour du centre ? ».`
          },
          {
            titre: "Probabilité conditionnelle",
            contenu: `La probabilité conditionnelle répond à la question : « quelle est la chance de B sachant que A s'est produit ? ».\n\nLa formule est : P_A(B) = P(A ∩ B) / P(A)\n\nAttention : P(A) doit être strictement positif. Sinon la formule n'a pas de sens.\n\nC'est comme se demander : « sachant qu'il pleut, quelle chance d'avoir froid ? ». Le fait de savoir qu'il pleut modifie la probabilité.\n\nSur un arbre pondéré, les probabilités conditionnelles se lisent directement sur les branches.\n\nTraduction : la première branche donne P(A), la deuxième branche donne P_A(B), et le produit des deux donne P(A ∩ B).\n\nEn gros : P_A(B) ≠ P(B) en général. Le fait de savoir A change la donne. C'est toute la différence entre « la chance de B » et « la chance de B sachant A ».`
          },
          {
            titre: "Formule des probabilités totales et indépendance",
            contenu: `La formule des probabilités totales permet de calculer P(B) en découpant selon les cas.\n\nSi A₁, A₂, …, Aₙ forment une partition de Ω (ils couvrent tout et ne se chevauchent pas) :\nP(B) = ∑ P(Aᵢ) × P_Aᵢ(B)\n\nC'est comme calculer une note globale en additionnant les contributions de chaque matière.\n\nTraduction : on passe en revue tous les cas possibles et on additionne. C'est très utile avec les arbres pondérés.\n\nDeux événements A et B sont indépendants si :\nP(A ∩ B) = P(A) × P(B)\n\nEn gros : savoir que A s'est produit ne change rien pour B. Les deux événements « ne se parlent pas ».\n\nC'est comme tirer deux cartes avec remise. Le premier tirage n'influence pas le second.\n\nAttention : indépendance ≠ incompatibilité. Deux événements incompatibles (P(A ∩ B) = 0) ne sont JAMAIS indépendants (sauf si l'un est impossible).`
          },
          {
            titre: "Loi binomiale B(n, p)",
            contenu: `La loi binomiale modélise le nombre de succès dans un schéma de Bernoulli.\n\nUn schéma de Bernoulli, c'est :\n• n épreuves identiques et indépendantes.\n• Chaque épreuve a exactement 2 issues : succès (probabilité p) ou échec (probabilité 1−p).\n\nC'est comme lancer n fois une pièce truquée et compter le nombre de « pile ».\n\nSi X = nombre de succès, alors X suit la loi B(n, p) :\nP(X = k) = C(n,k) × pᵏ × (1−p)ⁿ⁻ᵏ\n\nOù C(n,k) = n! / (k!(n−k)!) est le coefficient binomial.\n\nTraduction : C(n,k) choisit les places des succès, pᵏ compte les succès, (1−p)ⁿ⁻ᵏ compte les échecs.\n\nFormules directes :\n• E(X) = np (en moyenne np succès sur n épreuves).\n• V(X) = np(1−p).\n\nEn gros : la loi binomiale est LE modèle pour « combien de succès sur n essais ? ».`
          },
          {
            titre: "Le problème du seuil",
            contenu: `Un problème de seuil consiste à trouver le plus petit n tel qu'une probabilité dépasse (ou reste sous) un seuil donné.\n\nExemple typique : « Combien de lancers faut-il pour que la probabilité d'avoir au moins un succès dépasse 0.99 ? ».\n\nLa méthode repose souvent sur les logarithmes.\n\n1. Écrire l'inégalité avec la probabilité.\n2. Utiliser les propriétés de ln pour isoler n.\n3. Arrondir à l'entier supérieur.\n\nExemple : P(X ≥ 1) = 1 − (1−p)ⁿ ≥ 0.99.\nDonc (1−p)ⁿ ≤ 0.01.\nDonc n × ln(1−p) ≤ ln(0.01).\nDonc n ≥ ln(0.01) / ln(1−p).\n\nAttention : ln(1−p) est négatif, donc l'inégalité change de sens quand on divise.\n\nEn gros : le problème de seuil demande de « résoudre à l'envers ». On connaît le résultat voulu et on cherche n.\n\nTraduction : c'est un classique du bac. La méthode est toujours la même : poser l'inégalité, passer au ln, isoler n.`
          }
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
        texte: "La géométrie dans l'espace étend les concepts du plan à trois dimensions. On y travaille avec des coordonnées, des vecteurs, des droites et des plans en 3D.",
        sections: [
          {
            titre: "La perspective cavalière",
            contenu: `La perspective cavalière est une méthode de dessin. Elle permet de représenter l'espace 3D sur une feuille 2D.\n\nC'est comme dessiner une boîte vue de côté. On garde certaines propriétés, mais pas toutes.\n\nCe qui est CONSERVÉ :\n• Le parallélisme : les droites parallèles restent parallèles.\n• Les milieux : le milieu d'un segment reste au milieu.\n\nCe qui est DÉFORMÉ :\n• Les angles : un angle droit n'apparaît pas forcément droit.\n• Les longueurs en profondeur (fuyantes) : elles sont réduites.\n\nEn gros : on peut faire confiance au parallélisme, mais pas aux angles ni aux longueurs.\n\nTraduction : quand tu dessines un cube en perspective cavalière, les arêtes parallèles restent parallèles. Mais les arêtes en profondeur sont plus courtes que les autres.\n\nC'est le premier outil du chapitre. Il sert à visualiser les problèmes avant de calculer.`
          },
          {
            titre: "Vecteurs, colinéarité et coplanarité",
            contenu: `Les vecteurs dans l'espace ont trois coordonnées : u⃗(x ; y ; z). C'est comme une flèche avec une direction et une longueur dans un espace 3D.\n\nDeux vecteurs u⃗ et v⃗ sont colinéaires s'il existe un réel k tel que v⃗ = k·u⃗.\n\nEn coordonnées : les rapports x'/x = y'/y = z'/z sont tous égaux.\n\nTraduction : colinéaires = même direction. C'est comme deux routes qui vont exactement dans le même sens.\n\nTrois vecteurs u⃗, v⃗, w⃗ sont coplanaires si w⃗ = a·u⃗ + b·v⃗.\n\nC'est comme trois flèches qui tiennent toutes sur une même feuille de papier. w⃗ est une combinaison linéaire de u⃗ et v⃗.\n\nEn gros : colinéarité = caractérise les droites. Coplanarité = caractérise les plans.\n\nPour qu'un repère existe, il faut trois vecteurs NON coplanaires. Sinon, on reste coincé dans un plan.`
          },
          {
            titre: "Positions relatives des droites et plans",
            contenu: `Dans l'espace, les positions relatives sont plus riches que dans le plan.\n\nDeux droites peuvent être :\n• Parallèles : vecteurs directeurs colinéaires (même direction).\n• Sécantes : elles se croisent en un point.\n• Gauches : ni parallèles, ni sécantes.\n\nLes droites gauches sont une NOUVEAUTÉ de l'espace. Ça n'existe pas dans le plan. C'est comme une route au sol et un câble électrique au-dessus : ils ne se touchent jamais et ne vont pas dans la même direction.\n\nUne droite et un plan peuvent être :\n• Parallèles : le vecteur directeur de la droite est combinaison linéaire des vecteurs du plan.\n• Sécants : ils se croisent en un point.\n• La droite est incluse dans le plan.\n\nDeux plans peuvent être :\n• Parallèles : mêmes directions.\n• Sécants : ils se coupent selon une droite.\n\nEn gros : dans l'espace, tout est plus complexe. On a plus de cas à considérer qu'en 2D.`
          },
          {
            titre: "Le repère de l'espace et les coordonnées",
            contenu: `Un repère de l'espace est formé d'un point O (l'origine) et de trois vecteurs i⃗, j⃗, k⃗ non coplanaires.\n\nChaque point M de l'espace a des coordonnées uniques (x ; y ; z) :\nOM⃗ = x·i⃗ + y·j⃗ + z·k⃗\n\nC'est comme un GPS qui utilise latitude, longitude et altitude. Trois nombres suffisent pour localiser n'importe quel point.\n\nLe vecteur AB⃗ se calcule par :\nAB⃗ = (xB − xA ; yB − yA ; zB − zA)\n\nTraduction : coordonnées d'arrivée moins coordonnées de départ.\n\nLa distance entre A et B :\nAB = √((xB−xA)² + (yB−yA)² + (zB−zA)²)\n\nEn gros : c'est le théorème de Pythagore généralisé en 3D.\n\nLe milieu de [AB] :\nM = ((xA+xB)/2 ; (yA+yB)/2 ; (zA+zB)/2)\n\nTraduction : on fait la moyenne de chaque coordonnée. C'est comme couper un segment en deux parts égales.`
          },
          {
            titre: "Représentation paramétrique d'une droite",
            contenu: `Une droite dans l'espace se décrit par une représentation paramétrique.\n\nPour une droite passant par A(x₀ ; y₀ ; z₀) de vecteur directeur u⃗(a ; b ; c) :\n\nx = x₀ + at\ny = y₀ + bt\nz = z₀ + ct\navec t ∈ ℝ\n\nC'est comme avancer le long d'un rail, pas à pas. Chaque valeur de t donne un point différent sur la droite.\n\nTraduction : quand t = 0, on est en A. Quand t = 1, on a avancé d'un vecteur u⃗. Quand t = −1, on est « derrière » A.\n\nEn gros : le paramètre t parcourt toute la droite. C'est un « curseur » qui se déplace le long de la droite.\n\nPour vérifier si un point M appartient à la droite, on vérifie s'il existe un t qui satisfait les trois équations en même temps.\n\nPour trouver l'intersection de deux droites, on résout le système formé par leurs deux représentations paramétriques.`
          },
          {
            titre: "Représentation paramétrique d'un plan",
            contenu: `Un plan se décrit aussi par une représentation paramétrique, mais avec DEUX paramètres.\n\nPour un plan passant par A(x₀ ; y₀ ; z₀) de vecteurs directeurs u⃗(a ; b ; c) et v⃗(a' ; b' ; c') :\n\nx = x₀ + at + a's\ny = y₀ + bt + b's\nz = z₀ + ct + c's\navec t, s ∈ ℝ\n\nC'est comme se déplacer sur un terrain plat. Le paramètre t te fait avancer dans une direction, le paramètre s dans une autre.\n\nTraduction : avec t et s, tu peux atteindre n'importe quel point du plan. Un seul paramètre donne une droite, deux paramètres donnent un plan.\n\nPour trouver l'intersection de deux plans non parallèles, on résout le système de leurs équations. Le résultat est une droite.\n\nC'est comme deux murs d'une pièce qui se rejoignent sur une arête. L'arête est la droite d'intersection.\n\nEn gros : la géométrie dans l'espace, c'est traduire des problèmes géométriques en systèmes d'équations. Les vecteurs et les coordonnées sont les outils de traduction.`
          }
        ]
      },
      page2_concepts: {
        titre: "Concepts clés",
        concepts: [
          {
            terme: "Perspective cavalière",
            definition: "Méthode de dessin qui représente l'espace 3D sur une feuille 2D. Les droites parallèles restent parallèles, les milieux sont conservés. C'est comme dessiner une boîte vue de côté. En gros : les angles et les longueurs en profondeur sont déformés, mais le parallélisme reste intact."
          },
          {
            terme: "Colinéarité",
            definition: "Deux vecteurs u⃗ et v⃗ sont colinéaires s'il existe k ∈ ℝ tel que v⃗ = k·u⃗. C'est comme deux flèches pointant dans la même direction (ou direction opposée). En gros : même direction = colinéaires."
          },
          {
            terme: "Coplanarité",
            definition: "Trois vecteurs u⃗, v⃗, w⃗ sont coplanaires si w⃗ = a·u⃗ + b·v⃗. C'est comme trois flèches qui tiennent toutes dans une même feuille de papier. En gros : w⃗ est une combinaison linéaire de u⃗ et v⃗."
          },
          {
            terme: "Droites gauches",
            definition: "Deux droites qui ne sont ni parallèles, ni sécantes. Elles ne se croisent jamais et ne vont pas dans la même direction. C'est comme une route au sol et un câble électrique au-dessus : ils ne se touchent jamais. En gros : ça n'existe qu'en 3D."
          },
          {
            terme: "Représentation paramétrique d'une droite",
            definition: "Écriture d'une droite avec un paramètre t : x = x₀+at, y = y₀+bt, z = z₀+ct. Le point A(x₀,y₀,z₀) est sur la droite, u⃗(a,b,c) est le vecteur directeur. C'est comme avancer le long d'un rail, pas à pas. En gros : on « parcourt » la droite en faisant varier t."
          },
          {
            terme: "Repère de l'espace",
            definition: "Un point O (l'origine) et trois vecteurs i⃗, j⃗, k⃗ non coplanaires. Chaque point M a des coordonnées (x;y;z) uniques. C'est comme un système GPS avec trois axes perpendiculaires."
          },
          {
            terme: "Points alignés dans l'espace",
            definition: "Trois points A, B, C sont alignés si AB⃗ et AC⃗ sont colinéaires. C'est comme vérifier que trois villes sont sur la même route. En gros : il existe k tel que AC⃗ = k · AB⃗."
          },
          {
            terme: "Intersection de deux plans",
            definition: "Deux plans non parallèles se coupent selon une droite. On résout le système de leurs deux équations pour trouver cette droite. C'est comme deux murs d'une pièce qui se rejoignent sur une arête."
          },
          {
            terme: "Plan défini par trois points",
            definition: "Trois points non alignés A, B, C définissent un unique plan. Les vecteurs directeurs du plan sont AB⃗ et AC⃗. En gros : comme une feuille de papier posée sur trois punaises."
          },
          {
            terme: "Droite et plan sécants",
            definition: "Une droite et un plan sont sécants s'ils ont exactement un point d'intersection. Le vecteur directeur de la droite n'est pas combinaison des vecteurs du plan. En gros : la droite « perce » le plan."
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
            explication: "Droite passant par A(x₀;y₀;z₀) de vecteur directeur u⃗(a;b;c). Chaque valeur de t donne un point de la droite."
          },
          {
            nom: "Milieu de [AB]",
            formule: "M = ((xA+xB)/2 ; (yA+yB)/2 ; (zA+zB)/2)",
            explication: "Les coordonnées du milieu sont les moyennes des coordonnées de A et B. C'est comme couper un segment en deux parts égales."
          },
          {
            nom: "Vecteur AB⃗",
            formule: "AB⃗ = (xB−xA ; yB−yA ; zB−zA)",
            explication: "Coordonnées de B moins coordonnées de A. En gros : c'est le « déplacement » de A vers B."
          },
          {
            nom: "Colinéarité (test)",
            formule: "u⃗ ∥ v⃗ ⟺ ∃k : v⃗ = k·u⃗",
            explication: "On vérifie que les rapports des coordonnées sont tous égaux (quand les coordonnées sont non nulles)."
          },
          {
            nom: "Distance dans l'espace",
            formule: "AB = √((xB−xA)² + (yB−yA)² + (zB−zA)²)",
            explication: "Généralisation du théorème de Pythagore en 3D. C'est comme mesurer la longueur d'un fil tendu entre deux points."
          },
          {
            nom: "Combinaison linéaire (coplanarité)",
            formule: "w⃗ = a·u⃗ + b·v⃗ ⟺ u⃗, v⃗, w⃗ coplanaires",
            explication: "On cherche des coefficients a et b tels que w⃗ s'exprime avec u⃗ et v⃗. Si c'est possible, les trois vecteurs sont dans le même plan."
          },
          {
            nom: "Condition de non-coplanarité",
            formule: "i⃗, j⃗, k⃗ non coplanaires ⟺ forment une base de l'espace",
            explication: "Trois vecteurs non coplanaires permettent d'exprimer tout vecteur de l'espace comme combinaison. C'est la condition pour un repère."
          },
          {
            nom: "Centre de gravité d'un triangle",
            formule: "G = ((xA+xB+xC)/3 ; (yA+yB+yC)/3 ; (zA+zB+zC)/3)",
            explication: "Le centre de gravité (isobarycentre) est la moyenne des coordonnées des trois sommets."
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
        texte: "Le produit scalaire associe un nombre réel à deux vecteurs. C'est l'outil central pour mesurer des angles, prouver des orthogonalités et écrire des équations de plans.",
        sections: [
          {
            titre: "Le produit scalaire : définition et formules",
            contenu: `Le produit scalaire de deux vecteurs u⃗ et v⃗ donne un NOMBRE (pas un vecteur).\n\nIl existe plusieurs façons de le calculer :\n\n• Avec le cosinus : u⃗ · v⃗ = ‖u⃗‖ × ‖v⃗‖ × cos(u⃗, v⃗).\nTraduction : on combine les longueurs des vecteurs et l'angle entre eux.\n\n• En coordonnées : u⃗(x;y;z) · v⃗(x';y';z') = xx' + yy' + zz'.\nTraduction : on multiplie coordonnée par coordonnée et on additionne.\n\n• Avec la norme : u⃗ · v⃗ = ½(‖u⃗+v⃗‖² − ‖u⃗‖² − ‖v⃗‖²).\n\nC'est comme mesurer « à quel point deux flèches pointent dans la même direction ». Si le résultat est positif, elles vont « plutôt ensemble ». Si c'est négatif, elles s'opposent. Si c'est zéro, elles sont perpendiculaires.\n\nEn gros : le produit scalaire est la « clé universelle » de la géométrie dans l'espace. Il permet de tout calculer : angles, distances, orthogonalités.`
          },
          {
            titre: "Orthogonalité de vecteurs, droites et plans",
            contenu: `Deux vecteurs sont orthogonaux (perpendiculaires) quand leur produit scalaire vaut zéro :\nu⃗ ⊥ v⃗ ⟺ u⃗ · v⃗ = 0\n\nC'est comme vérifier si deux rues se croisent à angle droit. On calcule le produit scalaire : s'il vaut zéro, c'est perpendiculaire.\n\nPour les droites : deux droites sont orthogonales si leurs vecteurs directeurs sont orthogonaux.\n\nAttention : dans l'espace, deux droites orthogonales ne se croisent pas forcément. Elles peuvent être orthogonales ET gauches.\n\nPour une droite et un plan : D est orthogonale à P si le vecteur directeur de D est colinéaire au vecteur normal de P.\n\nC'est comme un poteau vertical planté dans le sol. Le poteau est perpendiculaire au sol.\n\nTraduction : D ⊥ P ⟺ u⃗_D = k × n⃗_P.\n\nPour deux plans : ils sont perpendiculaires si leurs vecteurs normaux sont orthogonaux.\nn⃗₁ · n⃗₂ = 0 ⟹ les plans sont perpendiculaires.\n\nEn gros : tout se ramène au produit scalaire. Perpendiculaire = produit scalaire nul.`
          },
          {
            titre: "Le vecteur normal à un plan",
            contenu: `Un vecteur normal n⃗ est un vecteur perpendiculaire à TOUS les vecteurs contenus dans un plan.\n\nC'est comme un piquet planté verticalement sur le sol. Le piquet pointe dans la direction orthogonale au sol.\n\nLe vecteur normal est la clé pour écrire l'équation d'un plan. Si on connaît n⃗ et un point du plan, on peut écrire l'équation.\n\nComment trouver un vecteur normal ?\n\n• Il est donné dans l'énoncé.\n• On le déduit de l'équation cartésienne (les coefficients de x, y, z).\n• On le calcule à partir de deux vecteurs du plan (produit vectoriel, hors programme mais utile à savoir).\n\nEn gros : le vecteur normal « résume » la direction du plan. Deux plans ont la même direction si et seulement si leurs vecteurs normaux sont colinéaires.\n\nTraduction : connaître le vecteur normal, c'est connaître l'orientation du plan dans l'espace.`
          },
          {
            titre: "Équation cartésienne d'un plan",
            contenu: `L'équation cartésienne d'un plan est de la forme :\nax + by + cz + d = 0\n\nOù n⃗(a ; b ; c) est le vecteur normal au plan.\n\nTraduction : les coefficients devant x, y et z donnent directement les coordonnées du vecteur normal.\n\nPour trouver d, on substitue un point connu du plan dans l'équation.\n\nExemple : plan de vecteur normal n⃗(2 ; −3 ; 1) passant par A(1 ; 0 ; 2).\n2(x−1) − 3(y−0) + 1(z−2) = 0\n2x − 3y + z − 4 = 0\n\nDeux plans sont parallèles ⟺ leurs vecteurs normaux sont colinéaires.\nC'est comme deux étages d'un immeuble : mêmes directions, mais décalés.\n\nDeux plans sont sécants ⟺ leurs normales ne sont PAS colinéaires.\nLeur intersection est une droite.\n\nEn gros : l'équation cartésienne est l'outil le plus pratique pour travailler avec les plans. On lit le vecteur normal, on calcule les intersections, on vérifie le parallélisme.`
          },
          {
            titre: "Distance d'un point à un plan",
            contenu: `La distance d'un point M₀(x₀ ; y₀ ; z₀) au plan P : ax + by + cz + d = 0 se calcule par :\n\nd(M₀, P) = |ax₀ + by₀ + cz₀ + d| / √(a² + b² + c²)\n\nTraduction : on remplace x, y, z par les coordonnées du point dans l'équation du plan. On prend la valeur absolue. On divise par la norme du vecteur normal.\n\nC'est comme mesurer la hauteur d'un oiseau au-dessus du sol. La formule donne la distance la plus courte entre le point et le plan.\n\nExemple : distance de M₀(1 ; 2 ; 3) au plan 2x + y − 2z + 1 = 0.\nd = |2(1) + 1(2) − 2(3) + 1| / √(4 + 1 + 4)\nd = |2 + 2 − 6 + 1| / 3 = 1/3\n\nAttention : ne PAS oublier la valeur absolue au numérateur. C'est l'erreur la plus fréquente.\n\nEn gros : cette formule est un classique du bac. Elle est rapide et directe, mais il faut être soigneux avec les calculs.`
          },
          {
            titre: "Le projeté orthogonal",
            contenu: `Le projeté orthogonal de M sur un plan P est le point H de P le plus proche de M.\n\nLe segment [MH] est perpendiculaire au plan. Sa longueur est la distance de M à P.\n\nC'est comme l'ombre d'un point sous un soleil vertical. L'ombre tombe au pied de la perpendiculaire.\n\nPour trouver H concrètement :\n\n1. Écrire la droite (MH) passant par M de vecteur directeur n⃗ (le vecteur normal au plan).\n2. Écrire la représentation paramétrique de cette droite.\n3. Substituer dans l'équation du plan pour trouver t.\n4. Calculer les coordonnées de H.\n\nTraduction : on « descend » depuis M perpendiculairement au plan. Le point d'arrivée est H.\n\nLe projeté orthogonal d'un vecteur u⃗ sur v⃗ est :\nproj = (u⃗ · v⃗ / ‖v⃗‖²) × v⃗\n\nEn gros : c'est la « composante » de u⃗ dans la direction de v⃗. C'est comme décomposer une force en ses composantes.`
          }
        ]
      },
      page2_concepts: {
        titre: "Concepts clés",
        concepts: [
          {
            terme: "Produit scalaire",
            definition: "Opération qui à deux vecteurs associe un nombre réel : u⃗ · v⃗ = ‖u⃗‖‖v⃗‖cos θ = xx'+yy'+zz'. C'est comme mesurer à quel point deux flèches vont dans la même direction. En gros : si le résultat est positif, elles vont « plutôt ensemble » ; si c'est négatif, elles s'opposent."
          },
          {
            terme: "Orthogonalité",
            definition: "Deux vecteurs sont orthogonaux (perpendiculaires) si u⃗ · v⃗ = 0. C'est comme deux rues qui se croisent à angle droit. En gros : produit scalaire nul = angle de 90°."
          },
          {
            terme: "Norme d'un vecteur",
            definition: "La norme ‖u⃗‖ = √(x² + y² + z²) mesure la longueur du vecteur. On a ‖u⃗‖² = u⃗ · u⃗. C'est comme mesurer la longueur d'une flèche avec une règle. En gros : c'est le théorème de Pythagore en 3D."
          },
          {
            terme: "Vecteur normal à un plan",
            definition: "Vecteur n⃗ perpendiculaire à tous les vecteurs contenus dans un plan P. C'est comme un piquet planté verticalement sur le sol : il est perpendiculaire au sol. En gros : il « pointe » dans la direction orthogonale au plan."
          },
          {
            terme: "Équation cartésienne d'un plan",
            definition: "ax + by + cz + d = 0, où n⃗(a;b;c) est le vecteur normal au plan. On trouve d en substituant un point connu du plan. En gros : les coefficients devant x, y, z donnent directement le vecteur normal."
          },
          {
            terme: "Plans parallèles",
            definition: "Deux plans sont parallèles si leurs vecteurs normaux sont colinéaires (même direction). C'est comme deux étages d'un immeuble : ils ne se coupent jamais. En gros : normales colinéaires = plans parallèles."
          },
          {
            terme: "Plans perpendiculaires",
            definition: "Deux plans sont perpendiculaires si leurs vecteurs normaux sont orthogonaux : n⃗₁ · n⃗₂ = 0. C'est comme un mur et le sol : ils se coupent à angle droit."
          },
          {
            terme: "Projeté orthogonal",
            definition: "Le projeté de M sur un plan P est le point H de P le plus proche de M. Le segment MH est perpendiculaire à P. C'est comme l'ombre d'un point sous un soleil vertical. En gros : c'est le point « au pied de la perpendiculaire »."
          },
          {
            terme: "Droite orthogonale à un plan",
            definition: "Une droite D est orthogonale à un plan P si son vecteur directeur est colinéaire au vecteur normal du plan. C'est comme un poteau vertical sur un sol horizontal. En gros : la droite « perce » le plan à angle droit."
          },
          {
            terme: "Angle entre deux vecteurs",
            definition: "L'angle θ entre u⃗ et v⃗ se calcule avec cos θ = (u⃗ · v⃗)/(‖u⃗‖ × ‖v⃗‖). On obtient θ entre 0° et 180°. En gros : on utilise le produit scalaire pour retrouver l'angle."
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
            explication: "Expression avec les normes et l'angle entre les vecteurs. Utile quand on cherche un angle."
          },
          {
            nom: "Produit scalaire (coordonnées)",
            formule: "u⃗ · v⃗ = xx' + yy' + zz'",
            explication: "Expression calculatoire la plus utilisée. On multiplie coordonnée par coordonnée et on additionne."
          },
          {
            nom: "Norme d'un vecteur",
            formule: "‖u⃗‖ = √(x² + y² + z²)",
            explication: "Longueur du vecteur dans l'espace. On a ‖u⃗‖² = u⃗ · u⃗. C'est Pythagore en 3D."
          },
          {
            nom: "Équation du plan",
            formule: "ax + by + cz + d = 0, avec n⃗(a;b;c) normal",
            explication: "Les coefficients de x, y, z forment le vecteur normal. On trouve d en substituant un point du plan."
          },
          {
            nom: "Distance point-plan",
            formule: "d(M₀, P) = |ax₀ + by₀ + cz₀ + d| / √(a² + b² + c²)",
            explication: "Formule directe pour la distance du point M₀ au plan P. Attention à la valeur absolue au numérateur."
          },
          {
            nom: "Angle entre deux vecteurs",
            formule: "cos θ = (u⃗ · v⃗) / (‖u⃗‖ × ‖v⃗‖)",
            explication: "On isole le cosinus à partir du produit scalaire. Puis on utilise arccos pour trouver l'angle θ."
          },
          {
            nom: "Projeté orthogonal d'un vecteur",
            formule: "proj = (u⃗ · v⃗ / ‖v⃗‖²) × v⃗",
            explication: "Projette u⃗ sur la direction de v⃗. C'est comme « l'ombre » de u⃗ sur v⃗."
          },
          {
            nom: "Condition de perpendicularité droite/plan",
            formule: "D ⊥ P ⟺ u⃗_D = k · n⃗_P (vecteurs colinéaires)",
            explication: "Le vecteur directeur de la droite doit être colinéaire au vecteur normal du plan."
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
        texte: "Le logarithme népérien (ln) est la fonction réciproque de l'exponentielle. C'est un outil essentiel pour résoudre des équations exponentielles et simplifier des calculs.",
        sections: [
          {
            titre: "Rappels sur l'exponentielle",
            contenu: `Avant d'aborder le logarithme, rappelons l'exponentielle.\n\nLa fonction exponentielle exp(x) = eˣ est définie sur ℝ tout entier. Elle est toujours strictement positive : eˣ > 0 pour tout x.\n\nPropriétés fondamentales :\n• e⁰ = 1.\n• e¹ = e ≈ 2.718.\n• eᵃ⁺ᵇ = eᵃ × eᵇ.\n• eᵃ⁻ᵇ = eᵃ / eᵇ.\n• (eᵃ)ⁿ = eⁿᵃ.\n\nC'est comme une machine qui transforme des additions en multiplications.\n\nTraduction : quand on additionne les exposants, on multiplie les résultats. Et quand on soustrait les exposants, on divise.\n\nLe logarithme népérien est la fonction qui « défait » l'exponentielle. C'est comme la touche « annuler » d'un traitement de texte.\n\nEn gros : exp et ln sont comme une clé et une serrure. L'une défait ce que l'autre fait.`
          },
          {
            titre: "Définition du logarithme népérien",
            contenu: `Le logarithme népérien, noté ln, est défini pour x > 0 uniquement.\n\nDéfinition : ln(x) est l'unique nombre y tel que eʸ = x.\n\nTraduction : « À quelle puissance faut-il élever e pour obtenir x ? ».\n\nLes deux relations fondamentales :\n• ln(eˣ) = x pour tout x ∈ ℝ.\n• e^(ln x) = x pour tout x > 0.\n\nValeurs de référence à connaître par cœur :\n• ln(1) = 0, car e⁰ = 1.\n• ln(e) = 1, car e¹ = e.\n\nAttention : ln(0) n'existe PAS. Et ln d'un nombre négatif n'existe pas non plus.\n\nC'est comme un traducteur entre le « langage exponentiel » et le « langage normal ». Si eˣ = 7, alors x = ln(7).\n\nEn gros : ln est une bijection de ]0 ; +∞[ vers ℝ. Elle est strictement croissante, continue, et passe par le point (1 ; 0).`
          },
          {
            titre: "Propriétés algébriques de ln",
            contenu: `Le logarithme transforme les opérations « complexes » en opérations « simples ».\n\n• Produit → Somme : ln(ab) = ln(a) + ln(b).\nC'est comme un convertisseur : multiplier dedans = additionner dehors.\n\n• Quotient → Différence : ln(a/b) = ln(a) − ln(b).\nTraduction : diviser dedans = soustraire dehors.\n\n• Puissance → Produit : ln(aⁿ) = n × ln(a).\nTraduction : l'exposant « descend » devant le ln.\n\n• Inverse : ln(1/a) = −ln(a).\n\nAttention au piège CLASSIQUE : ln(a + b) ≠ ln(a) + ln(b) !\n\nLa propriété ne marche QUE pour les produits, pas pour les sommes. C'est l'erreur la plus fréquente au bac.\n\nEn gros : ln simplifie les calculs. Il « descend d'un cran » la complexité des opérations. Multiplication → addition. Puissance → multiplication.\n\nSigne de ln(x) :\n• Si 0 < x < 1 : ln(x) < 0.\n• Si x = 1 : ln(x) = 0.\n• Si x > 1 : ln(x) > 0.`
          },
          {
            titre: "Dérivée de ln et variations",
            contenu: `La dérivée de ln(x) est :\n(ln x)' = 1/x, pour x > 0.\n\nEn gros : la pente de la courbe de ln diminue quand x augmente. ln monte de moins en moins vite.\n\nComme 1/x > 0 pour tout x > 0, la fonction ln est strictement croissante sur ]0 ; +∞[.\n\nTraduction : si a < b (avec a, b > 0), alors ln(a) < ln(b). L'ordre est conservé.\n\nPour les fonctions composées :\n(ln u)' = u'/u, pour u > 0.\n\nExemple : (ln(3x + 1))' = 3/(3x + 1).\n\nC'est la même logique que la dérivée composée : on dérive l'intérieur (u' = 3) et on divise par l'intérieur (u = 3x + 1).\n\nApplication inverse : ln(x) est une primitive de 1/x sur ]0 ; +∞[.\nTraduction : ∫(1/x)dx = ln(x) + C.\n\nEn gros : la dérivée de ln est simple, mais il ne faut pas oublier la condition x > 0 (ou u > 0 pour les composées).`
          },
          {
            titre: "Limites et croissances comparées",
            contenu: `Les limites de référence du logarithme sont :\n\n• lim(x→+∞) ln(x) = +∞.\nTraduction : ln monte indéfiniment, mais très lentement.\n\n• lim(x→0⁺) ln(x) = −∞.\nTraduction : quand x se rapproche de 0, ln plonge vers −∞.\n\nLes croissances comparées sont des limites fondamentales :\n\n• lim(x→+∞) ln(x)/x = 0.\nEn gros : x grandit beaucoup plus vite que ln(x). C'est comme une tortue (ln) face à un lièvre (x). Le lièvre gagne toujours.\n\n• lim(x→0⁺) x × ln(x) = 0.\nEn gros : près de 0, x « l'emporte » sur ln(x) malgré la divergence de ln.\n\n• lim(x→+∞) ln(x)/xⁿ = 0 pour tout n > 0.\nTraduction : n'importe quelle puissance de x bat ln(x) à l'infini.\n\nCes limites sont à connaître par cœur. Elles servent à lever des formes indéterminées du type 0 × (−∞) ou ∞/∞.`
          },
          {
            titre: "Logarithme décimal et équations avec ln",
            contenu: `Le logarithme décimal (noté log₁₀ ou log) est lié à ln par la formule :\nlog₁₀(x) = ln(x) / ln(10) ≈ ln(x) / 2.303\n\nTraduction : on change de « base ». Au lieu de e, on utilise 10.\n\n• log₁₀(10) = 1.\n• log₁₀(100) = 2.\n• log₁₀(1000) = 3.\n\nC'est utilisé en sciences : pH en chimie, décibels en acoustique, échelle de Richter en sismologie.\n\nPour résoudre une équation avec ln :\n• ln(x) = a ⟺ x = eᵃ. On « passe à l'exponentielle ».\n• eˣ = b ⟺ x = ln(b) (si b > 0). On « passe au ln ».\n\nPour les inéquations : ln est strictement croissante, donc :\n• ln(a) < ln(b) ⟺ a < b (pour a, b > 0).\n\nEn gros : ln conserve l'ordre. On peut « enlever » le ln sans changer le sens de l'inégalité.\n\nTraduction : pour « défaire » un ln, on applique exp. Pour « défaire » une exp, on applique ln. C'est la règle d'or.`
          }
        ]
      },
      page2_concepts: {
        titre: "Concepts clés",
        concepts: [
          {
            terme: "Logarithme népérien",
            definition: "Fonction ln : ]0;+∞[ → ℝ. Pour tout x > 0, ln(x) est l'unique y tel que eʸ = x. C'est comme se demander : « à quelle puissance faut-il élever e pour obtenir x ? ». En gros : ln(x) = y signifie eʸ = x."
          },
          {
            terme: "Fonction réciproque",
            definition: "ln et exp sont réciproques : ln(eˣ) = x pour tout x ∈ ℝ, et e^(ln x) = x pour tout x > 0. C'est comme une clé et une serrure : l'une « défait » l'autre. En gros : elles s'annulent mutuellement."
          },
          {
            terme: "Propriétés algébriques de ln",
            definition: "ln(ab) = ln(a)+ln(b), ln(a/b) = ln(a)−ln(b), ln(aⁿ) = n·ln(a). C'est comme un convertisseur : les multiplications deviennent des additions. En gros : les opérations « descendent d'un cran » de complexité."
          },
          {
            terme: "Signe de ln(x)",
            definition: "ln(x) < 0 quand 0 < x < 1 (avant 1). ln(1) = 0 (point de référence). ln(x) > 0 quand x > 1 (après 1). C'est comme une balance : avant 1, ln pèse négatif ; après 1, il pèse positif."
          },
          {
            terme: "Croissance comparée",
            definition: "ln(x) croît moins vite que toute puissance de x : lim ln(x)/x = 0 quand x → +∞. C'est comme une tortue (ln) face à un lièvre (x). En gros : ln est toujours « dominé » par x à l'infini."
          },
          {
            terme: "Limites de ln",
            definition: "lim(x→+∞) ln(x) = +∞ (croissance lente mais infinie). lim(x→0⁺) ln(x) = −∞ (plongée vers −∞ près de 0). C'est comme un ascenseur très lent qui monte sans fin, mais qui plonge quand x → 0."
          },
          {
            terme: "Équation ln(x) = a",
            definition: "La solution est x = eᵃ. On « passe à l'exponentielle » des deux côtés. C'est comme traduire une phrase d'une langue à l'autre. En gros : pour « défaire » un ln, on applique exp."
          },
          {
            terme: "Inéquation avec ln",
            definition: "ln est strictement croissante, donc ln(a) < ln(b) ⟺ a < b (pour a, b > 0). En gros : l'ordre est conservé. On peut « enlever » le ln en gardant le sens de l'inégalité."
          },
          {
            terme: "Logarithme décimal",
            definition: "log₁₀(x) = ln(x)/ln(10) ≈ ln(x)/2.303. Utilisé en sciences : pH, décibels, échelle de Richter. log₁₀(10) = 1, log₁₀(100) = 2. En gros : on change la « base » du logarithme."
          },
          {
            terme: "Primitive de 1/x",
            definition: "La fonction ln(x) est une primitive de 1/x sur ]0;+∞[. C'est le lien entre dérivation et intégration pour ln. En gros : ∫(1/x)dx = ln(x) + C."
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
            explication: "Passage entre ln et exp. C'est la traduction fondamentale. En gros : ln et exp sont comme deux langues, cette formule permet de passer de l'une à l'autre."
          },
          {
            nom: "Produit",
            formule: "ln(ab) = ln(a) + ln(b)",
            explication: "Le logarithme transforme un produit en somme. Attention : valable uniquement si a > 0 et b > 0."
          },
          {
            nom: "Quotient",
            formule: "ln(a/b) = ln(a) − ln(b)",
            explication: "Le logarithme transforme un quotient en différence. En gros : diviser « dedans » = soustraire « dehors »."
          },
          {
            nom: "Puissance",
            formule: "ln(aⁿ) = n · ln(a)",
            explication: "L'exposant « descend » devant le logarithme. C'est comme sortir un facteur d'une parenthèse."
          },
          {
            nom: "Dérivée de ln(x)",
            formule: "(ln x)' = 1/x, pour x > 0",
            explication: "Formule fondamentale. La pente de la courbe de ln diminue quand x augmente. En gros : ln monte de moins en moins vite."
          },
          {
            nom: "Dérivée de ln(u)",
            formule: "(ln u)' = u'/u, pour u > 0",
            explication: "Formule composée : on dérive l'intérieur (u') et on divise par l'intérieur (u). Exemple : (ln(2x+1))' = 2/(2x+1)."
          },
          {
            nom: "Croissance comparée (en +∞)",
            formule: "lim(x→+∞) ln(x)/x = 0",
            explication: "ln est « dominé » par x à l'infini. En gros : x grandit beaucoup plus vite que ln(x)."
          },
          {
            nom: "Croissance comparée (en 0⁺)",
            formule: "lim(x→0⁺) x·ln(x) = 0",
            explication: "Près de 0, x « l'emporte » sur ln(x) malgré la divergence de ln. En gros : le produit tend vers 0."
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
