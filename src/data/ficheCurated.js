/**
 * Hand-picked images & enriched course text for each biochimie chapter.
 * ONLY simple, visual, illustrative images for a Terminale student.
 * No formulas, no dense charts, no English, no poly pages.
 */

const FICHE_CURATED = {
  "Structure et diversité du génome": {
    images: [
      { file: "acides-nucleiques-et-structure-des-genomes-illus-31.webp", caption: "Caryotype humain : les 46 chromosomes rangés par paires (22 paires d'autosomes + XX ou XY)." },
    ],
    intro: `Imagine un truc de ouf. Chaque cellule de ton corps a un « mode d'emploi » de 3 milliards de lettres. Ce mode d'emploi, c'est ton génome (c'est-à-dire tout ton ADN mis bout à bout). Chez l'Homme, il est rangé sur 46 chromosomes (23 paires). Le tout tient dans le noyau de chaque cellule.

Mais attention, surprise. Moins de 10% de ce mode d'emploi sert à fabriquer des protéines. Le reste ? Des zones de réglage, des répétitions, et des bouts dont on ne comprend pas encore le rôle. C'est un peu comme un livre où la plupart des pages seraient des notes en marge.`,
    sections: [
      {
        title: "🧬 Comment est organisé le génome ?",
        content: `L'ADN (la molécule qui porte tes gènes) ne flotte pas en vrac dans le noyau. Il est super-enroulé autour de petites protéines. Ces protéines s'appellent les histones (des sortes de bobines). L'ADN enroulé sur les histones forme des « nucléosomes » (des perles sur un collier).

Tout cet ensemble — ADN + histones — ça s'appelle la chromatine (la matière du noyau). Pense à un câble de chargeur d'iPhone bien enroulé autour d'un clip. C'est compact et organisé.

Quand la cellule doit se diviser, la chromatine se condense encore plus. Ça donne les fameux chromosomes qu'on voit au microscope.

En gros : l'ADN s'enroule sur des bobines (histones) pour tenir dans le noyau.

À retenir :
• 46 chromosomes = 22 paires d'autosomes (chromosomes non sexuels) + 2 chromosomes sexuels (XX ou XY)
• 1 chromosome = 1 très longue molécule d'ADN compactée
• On a environ 25 000 gènes répartis sur 3 milliards de paires de bases (les "lettres" de l'ADN)`
      },
      {
        title: "📊 Les chiffres qui comptent",
        content: `• 3 milliards de paires de bases dans le génome humain. C'est comme un texte de 3 milliards de lettres.
• ~25 000 gènes (c'est bien moins que ce qu'on croyait au départ !)
• Moins de 2% du génome sert à coder des protéines. Le reste, on l'appelle parfois « ADN non codant ».
• 45% du génome = des séquences répétitives. Ce sont des transposons (des morceaux d'ADN qui se copient-collent un peu partout).
• 99,9% du génome est identique entre toi et n'importe quel autre humain. La différence tient à seulement 0,1%.

En gros : on a un génome énorme, mais seule une toute petite partie fabrique des protéines.`
      },
      {
        title: "🔑 Ce qu'il faut absolument retenir",
        content: `Le génome, c'est TOUTE l'info héréditaire d'un organisme. Chez nous, c'est un texte géant de 3 milliards de lettres. Ces lettres, ce sont A, T, C et G — les 4 bases de l'ADN. Le tout est réparti sur 46 chromosomes. La majorité ne code pas pour des protéines. C'est un des grands mystères de la biologie actuelle.

Vocabulaire clé à connaître :
• Locus (c'est l'adresse d'un gène sur un chromosome — sa position exacte)
• Allèles (ce sont les différentes versions d'un même gène — comme les coloris d'un même modèle de basket)
• Nucléosome (c'est l'ADN enroulé autour d'une bobine d'histones)
• Transposons (ce sont des éléments mobiles du génome, des sortes de « gènes sauteurs » qui se déplacent)

En gros : le génome = un livre de 3 milliards de lettres, et on essaie encore de comprendre la majorité des pages.`
      },
      {
        title: "🧩 Séquences codantes vs non codantes",
        content: `Moins de 2% du génome code pour des protéines. Alors, le reste sert à quoi ?

• Séquences codantes : ce sont les exons (les parties utiles des gènes). Elles portent la recette pour fabriquer les protéines. On en a environ 25 000 chez l'Homme.
• Séquences régulatrices : les promoteurs, enhancers, silencers. Elles contrôlent QUAND et OÙ un gène est activé. C'est le « tableau de bord » du génome. Un peu comme la télécommande de ta TV.
• Séquences répétitives (~45% du génome) : ce sont des transposons (éléments mobiles, parfois appelés « gènes sauteurs »). Il y a aussi les séquences satellites (des motifs qui se répètent en boucle, situés aux centromères et télomères).
• Introns : ce sont des portions non codantes DANS les gènes. Elles sont découpées et jetées lors de l'épissage (le montage de l'ARN).
• Pseudogènes : ce sont des anciens gènes qui ne marchent plus. Des « fossiles moléculaires », en quelque sorte.

Imagine ça comme Netflix. Les exons, ce sont les films. Les introns, ce sont les pubs. Les séquences régulatrices, c'est l'algorithme qui choisit ce que tu regardes. Et les pseudogènes, ce sont les vieux films retirés du catalogue.

En gros : les gènes utiles = une petite fraction. Le reste régule, se répète, ou reste mystérieux.`
      },
      {
        title: "🎛️ Régulation de l'expression des gènes",
        content: `Toutes tes cellules contiennent le même ADN. Mais un neurone (cellule du cerveau) ne ressemble pas à une cellule musculaire. Pourquoi ? Parce que chaque cellule n'allume qu'une partie de ses gènes. C'est ça, la régulation.

Les différents niveaux de régulation :
• Chromatine : si l'ADN est enroulé très serré, c'est de l'hétérochromatine (le gène est éteint, inaccessible). Si l'ADN est relâché, c'est de l'euchromatine (le gène est allumé, accessible). C'est comme un livre fermé à clé vs un livre ouvert sur la table.
• Modifications des histones : l'acétylation (ajout d'un petit groupe chimique) ouvre la chromatine → ça active le gène. La méthylation peut activer ou réprimer, ça dépend du contexte.
• Méthylation de l'ADN : on colle des groupes méthyle (–CH₃) sur certaines bases de l'ADN (les cytosines des îlots CpG). Ça éteint le gène.
• Facteurs de transcription (des protéines spéciales) : ils se fixent sur les promoteurs ou enhancers pour allumer ou éteindre la copie du gène.
• ARN non codants (miARN, lncARN) : des petits ARN qui régulent après la copie du gène.

Pense à un orchestre. L'ADN, c'est la partition. Elle est la même pour tous les musiciens. Mais le chef d'orchestre (la régulation) décide qui joue et quand.

En gros : même ADN partout, mais chaque cellule n'allume que les gènes dont elle a besoin.`
      },
      {
        title: "🔬 Mutations et polymorphismes",
        content: `Une mutation, c'est un changement dans la séquence d'ADN. C'est comme une faute de frappe dans un texte. Toutes les mutations ne sont pas mauvaises !

Types de mutations :
• Substitution : une lettre est remplacée par une autre (ex : A → G).
  → Faux-sens : ça change un acide aminé dans la protéine. Ça peut être grave ou sans conséquence.
  → Non-sens : ça crée un signal « stop » trop tôt. La protéine est coupée. C'est souvent grave.
  → Silencieuse : l'acide aminé ne change pas. Grâce à la redondance du code génétique (plusieurs codons pour un même acide aminé), pas de dégâts.
• Insertion/Délétion : on ajoute ou on enlève des lettres. Si c'est pas un multiple de 3, ça décale tout le message. On appelle ça un frameshift (décalage du cadre de lecture).
• Expansion de triplets : un motif de 3 lettres se répète trop de fois. Ça donne des maladies comme Huntington ou le X fragile.

Polymorphismes (SNP) :
• Ce sont des variations « normales » entre les gens. Ça touche 0,1% du génome.
• Un SNP (Single Nucleotide Polymorphism) = changement d'une seule lettre. Présent chez plus d'1% de la population.
• C'est utile en pharmacogénomique (la science qui explique pourquoi certains patients répondent différemment aux médicaments).

Attention piège QCM : une mutation, c'est pas forcément une maladie. Un SNP, c'est une variation fréquente, pas un danger.

En gros : mutation = faute de frappe dans l'ADN. Parfois grave, parfois sans conséquence.`
      },
      {
        title: "🏥 Applications médicales",
        content: `La connaissance du génome a changé la médecine du tout au tout :

• Tests génétiques : on peut dépister des maladies héréditaires. Exemples : la mucoviscidose, la drépanocytose. On fait aussi du diagnostic prénatal et des tests de prédisposition (BRCA1/2 pour le cancer du sein).
• Thérapie génique : on remplace ou on corrige un gène défectueux. C'est comme changer une pièce cassée dans un moteur. Exemples : le Zolgensma pour l'amyotrophie spinale, le Luxturna pour certaines cécités héréditaires.
• CRISPR-Cas9 : ce sont des « ciseaux moléculaires ». Ils coupent l'ADN pile au bon endroit pour corriger une mutation. C'est la grosse révolution en cours.
• Médecine personnalisée : on adapte le traitement au profil génétique de chaque patient. Ça s'appelle la pharmacogénomique.
• Empreinte génétique : on identifie les gens grâce aux séquences répétitives de leur ADN (les STR). C'est ce qu'on utilise en police scientifique.

Le séquençage du génome humain (le projet a été fini en 2003, coût : 3 milliards de dollars) coûte aujourd'hui moins de 1 000 €. C'est devenu accessible à vitesse grand V. C'est comme si le premier GPS avait coûté un milliard et qu'aujourd'hui il était gratuit sur ton téléphone.

En gros : grâce au génome, on peut dépister, corriger et personnaliser les traitements.`
      },
      {
        title: "⚠️ Pièges classiques en QCM",
        content: `Attention, voici les erreurs qu'on voit tout le temps sur ce chapitre :

• PIÈGE 1 : « Le génome humain contient 100 000 gènes » → FAUX. C'est ~25 000 gènes. Le chiffre de 100 000, c'était une vieille estimation.
• PIÈGE 2 : « La majorité du génome code pour des protéines » → FAUX. Moins de 2% du génome code pour des protéines. Le reste, c'est de l'ADN non codant.
• PIÈGE 3 : « Deux humains ont des génomes très différents » → FAUX. On est 99,9% identiques. La différence, c'est juste 0,1%.
• PIÈGE 4 : Confondre chromatine et chromosome. La chromatine (ADN + histones) c'est la forme « relax » en interphase. Le chromosome, c'est la chromatine super-condensée, qu'on voit en métaphase (au moment de la division).
• PIÈGE 5 : « Les transposons n'ont aucun rôle » → FAUX. Ils participent à l'évolution du génome et à la diversité génétique. C'est pas juste du remplissage.
• PIÈGE 6 : Confondre locus et allèle. Le locus (l'adresse) = la position physique sur le chromosome. L'allèle (la version) = la variante d'un gène à cette adresse. C'est comme l'adresse de ta maison (locus) vs la couleur de ta porte (allèle).

Astuce mémo : « 3-25-2-46 » = 3 milliards de bases, 25 000 gènes, 2% codant, 46 chromosomes. Apprends ce numéro par cœur, comme un code de carte bleue.

En gros : retiens les bons chiffres et ne confonds pas chromatine/chromosome, locus/allèle.`
      },
    ],
  },

  "Structure des acides nucléiques": {
    images: [
      { file: "acides-nucleiques-et-structure-des-genomes-illus-01.webp", caption: "La double hélice d'ADN : deux brins enroulés l'un autour de l'autre, reliés par les paires de bases." },
    ],
    intro: `L'ADN et l'ARN sont les deux types d'acides nucléiques (les molécules qui stockent et transmettent l'info génétique). L'ADN, c'est ta clé USB permanente. L'ARN, c'est la copie de travail temporaire — comme un brouillon qu'on utilise puis qu'on jette.

Leur structure est super élégante. L'ADN, c'est deux brins enroulés en double hélice. L'ARN, c'est un seul brin. Comprendre comment elles sont construites, c'est comprendre la base de toute la biologie.`,
    sections: [
      {
        title: "🧱 Les briques de base : les nucléotides",
        content: `Chaque acide nucléique est une chaîne de nucléotides (ce sont les briques de base de l'ADN et de l'ARN). Un nucléotide, c'est 3 éléments collés ensemble :
• Un sucre : le désoxyribose (un sucre à 5 carbones) pour l'ADN, le ribose pour l'ARN
• Un groupement phosphate (un petit groupe chimique avec du phosphore)
• Une base azotée (la partie qui porte l'information) : A, T, C, G pour l'ADN ; A, U, C, G pour l'ARN

Les bases s'apparient toujours de la même façon. C'est comme des pièces de puzzle :
→ A va avec T (dans l'ADN) ou A va avec U (dans l'ARN)
→ C va avec G
C'est la règle de complémentarité de Chargaff. C'est grâce à cette règle que l'ADN peut se copier fidèlement.

En gros : un nucléotide = sucre + phosphate + base. Les bases se mettent toujours en couple : A-T et C-G.`
      },
      {
        title: "🌀 La double hélice",
        content: `En 1953, Watson et Crick ont découvert la double hélice d'ADN. C'est une des structures les plus célèbres de la science. Deux brins antiparallèles (qui vont en sens opposé) s'enroulent l'un autour de l'autre. Ils sont reliés par des liaisons hydrogène (des petites liaisons faibles) entre les bases complémentaires.

Imagine un escalier en colimaçon. Les barreaux, ce sont les paires de bases (A-T ou C-G). La rampe, c'est le squelette sucre-phosphate.

Points clés :
• Les deux brins vont en sens opposé : un va de 5'→3', l'autre de 3'→5'. C'est ce qu'on appelle « antiparallèle ».
• Les bases sont à l'intérieur (les barreaux). Le squelette sucre-phosphate est à l'extérieur (la rampe).
• La double hélice fait un tour complet tous les 10 nucléotides (~3,4 nm, un nanomètre c'est un milliardième de mètre).

En gros : l'ADN ressemble à un escalier en colimaçon avec les bases au milieu.`
      },
      {
        title: "🔑 ADN vs ARN — les différences clés",
        content: `ADN : deux brins (double hélice), sucre = désoxyribose, bases = A-T-C-G, molécule stable, reste dans le noyau.
ARN : un seul brin, sucre = ribose, bases = A-U-C-G, molécule éphémère, sort du noyau.

C'est comme comparer un disque dur (ADN, stockage permanent) et une clé USB jetable (ARN, copie temporaire).

L'ARN existe sous plusieurs formes, chacune avec un job précis :
• ARNm (messager) : c'est la copie d'un gène, le plan de construction envoyé aux usines à protéines
• ARNt (transfert) : c'est le livreur qui apporte les acides aminés
• ARNr (ribosomal) : c'est la structure du ribosome (la machine qui fabrique les protéines)

En gros : ADN = archive, ARN = copie de travail. L'ADN a du T, l'ARN a du U.`
      },
      {
        title: "🌡️ Dénaturation et renaturation",
        content: `La double hélice d'ADN peut être « ouverte » (dénaturée). Ça arrive quand on chauffe ou quand on change le pH. Les liaisons hydrogène entre les bases se cassent. Les deux brins se séparent. C'est comme ouvrir une fermeture éclair avec la chaleur.

Points clés :
• La température de fusion (Tm), c'est la température où 50% de l'ADN est ouvert. C'est une valeur précise pour chaque ADN.
• Plus l'ADN est riche en paires G≡C (3 liaisons H, plus solides), plus le Tm est élevé. L'ADN est alors plus dur à ouvrir.
• Les paires A=T (2 liaisons H, plus faibles) se séparent plus facilement.
• L'hyperchromicité : quand l'ADN s'ouvre, il absorbe plus de lumière UV à 260 nm. C'est comme ça qu'on mesure la dénaturation en labo.

Renaturation (ou hybridation) : si on refroidit doucement, les brins complémentaires se remettent ensemble. La fermeture éclair se referme. Ce principe est à la base de plein de techniques (PCR, Southern blot, FISH).

Imagine une fermeture éclair. La chaleur l'ouvre (dénaturation). Le froid la referme (renaturation).

En gros : chaleur = ADN s'ouvre. Refroidissement = ADN se referme.`
      },
      {
        title: "🔬 Techniques fondamentales : PCR et séquençage",
        content: `Grâce à la structure des acides nucléiques, on a inventé des techniques de dingue :

PCR (Polymerase Chain Reaction, réaction en chaîne par polymérase) :
• Ça sert à faire des millions de copies d'un bout d'ADN en quelques heures. C'est comme un photocopieur surpuissant.
• Le principe : on fait des cycles. D'abord on chauffe à 95°C pour ouvrir l'ADN (dénaturation). Puis on refroidit à 50-65°C pour coller les amorces (hybridation). Enfin, la Taq polymérase copie à 72°C (élongation).
• La Taq polymérase vient d'une bactérie (Thermus aquaticus) qui vit dans les sources chaudes. Elle résiste à la chaleur. C'est un peu l'Usain Bolt des enzymes.
• On utilise la PCR pour le diagnostic infectieux (COVID, VIH), la médecine légale et les tests de paternité.

Séquençage (lire la séquence de l'ADN lettre par lettre) :
• Méthode de Sanger : on utilise des ddNTP (des nucléotides modifiés, didésoxyribonucléotides) qui bloquent la copie. Ça permet de « lire » la séquence base par base.
• Séquençage nouvelle génération (NGS) : on fait des millions de lectures en parallèle. On peut séquencer un génome entier en quelques jours.

La PCR a été inventée par Kary Mullis (Prix Nobel 1993). C'est sans doute LA technique la plus importante de la biologie moléculaire moderne.

En gros : la PCR = photocopieur à ADN. Le séquençage = lecteur de l'ADN lettre par lettre.`
      },
      {
        title: "🧪 Modifications des nucléotides",
        content: `Les nucléotides ne servent pas qu'à construire l'ADN et l'ARN. Ils ont plein d'autres jobs dans la cellule. C'est un peu comme les Lego : la même brique peut faire un château, un avion ou une voiture.

Nucléotides modifiés importants :
• ATP (adénosine triphosphate) : c'est la « monnaie énergétique » de la cellule. Chaque fois que la cellule a besoin d'énergie, elle « casse » un ATP. C'est un peu comme payer avec une pièce de monnaie.
• GTP : une source d'énergie pour fabriquer les protéines et pour la signalisation (via les protéines G, des interrupteurs cellulaires).
• AMPc (AMP cyclique) : c'est un « second messager » (un signal à l'intérieur de la cellule). Il est fabriqué par l'adénylate cyclase (une enzyme).
• NAD⁺/NADH et FAD/FADH₂ : ce sont des coenzymes d'oxydoréduction (des assistants chimiques qui transportent des électrons). Super importants pour produire de l'énergie.
• S-adénosylméthionine (SAM) : c'est un donneur de groupes méthyle (–CH₃). Il sert à la méthylation de l'ADN et des protéines.

Modifications des bases dans l'ADN :
• Méthylation des cytosines (5-méthylcytosine) → ça sert à la régulation épigénétique (contrôler les gènes sans changer la séquence).
• Bases modifiées dans l'ARNt : inosine, pseudouridine, dihydrouridine → ça stabilise la structure et permet un appariement « wobble » (un appariement un peu souple).

Attention piège QCM : l'ATP est un nucléotide ! C'est de l'adénosine + 3 groupes phosphate. Il faut pas l'oublier.

En gros : les nucléotides font bien plus que l'ADN. L'ATP = la pile de la cellule. Le NAD⁺ = un transporteur d'énergie.`
      },
      {
        title: "🏥 Applications médicales",
        content: `La structure des acides nucléiques est au cœur de plein de stratégies de traitement :

• Antiviraux analogues nucléosidiques (des médicaments qui imitent les nucléotides naturels mais qui bloquent la copie du virus) :
  → Aciclovir (contre l'herpès), Zidovudine/AZT (contre le VIH), Remdesivir (contre le COVID-19), Sofosbuvir (contre l'hépatite C).
  → Le principe : ces faux nucléotides s'insèrent dans l'ADN ou l'ARN du virus. Et ça bloque la copie. C'est comme mettre une fausse pièce dans une machine à sous : ça la bloque.

• Thérapie antisens : on fabrique des petits bouts d'ARN complémentaires de l'ARNm cible. Ça empêche la protéine pathologique d'être fabriquée.
• ARN interférents (siRNA) : ils détruisent un ARNm cible de façon très précise. Exemple : le Patisiran pour l'amylose héréditaire (une maladie rare).
• Vaccins à ARNm : on injecte un ARNm synthétique. Les cellules du patient le lisent et fabriquent un antigène (un bout de virus). Le système immunitaire apprend à le combattre. C'est le principe des vaccins COVID de Pfizer et Moderna.

En gros : comprendre la chimie des nucléotides, c'est comprendre comment marchent plein de médicaments et vaccins.`
      },
      {
        title: "📝 Synthèse et pièges QCM",
        content: `Résumé express :
• Nucléotide = base + sucre + phosphate
• ADN : sucre = désoxyribose, deux brins, A-T (2 liaisons H), G-C (3 liaisons H)
• ARN : sucre = ribose, un seul brin (sauf exceptions), A-U, G-C
• Les nucléotides sont reliés par des liaisons phosphodiester (dans le sens 5'→3')
• La Tm (température de fusion) dépend du contenu en G+C

Pièges classiques :
• PIÈGE 1 : « Les brins d'ADN sont parallèles » → FAUX. Ils sont antiparallèles (un va en 5'→3', l'autre en 3'→5'). C'est comme deux voitures sur une route, chacune dans un sens.
• PIÈGE 2 : « L'ARN est toujours simple brin » → FAUX. L'ARNt a des zones en double brin (structure en trèfle). Et certains virus ont un ARN double brin.
• PIÈGE 3 : Confondre nucléotide et nucléoside. Nucléoside = base + sucre (SANS phosphate). Nucléotide = nucléoside + phosphate(s). C'est comme une pizza : nucléoside = pâte + garniture. Nucléotide = pâte + garniture + sauce (le phosphate).
• PIÈGE 4 : « A=T dans l'ARN » → FAUX. L'ARN n'a pas de thymine (T). Il a de l'uracile (U). Donc l'appariement c'est A=U.
• PIÈGE 5 : La règle de Chargaff (%A = %T, %G = %C) marche SEULEMENT pour l'ADN double brin. Pas pour l'ARN.

Astuce : « PUR-ines = A et G (2 cycles), PYR-imidines = C, T, U (1 cycle) ». « Pur comme l'or » → 2 anneaux, c'est précieux.

En gros : retiens la différence ADN/ARN, nucléotide/nucléoside, et la règle A-T / C-G.`
      },
    ],
  },

  "La réplication de l'ADN": {
    images: [
      { file: "replication-illus-04.webp", caption: "Réplication : la double hélice se sépare et chaque brin sert de modèle pour fabriquer un nouveau brin (en rouge)." },
      { file: "replication-illus-18.webp", caption: "Les télomères raccourcissent à chaque division cellulaire → vieillissement de la cellule." },
    ],
    intro: `Avant chaque division cellulaire, la cellule doit copier tout son ADN. Ce processus s'appelle la réplication (la photocopie de l'ADN). C'est d'une précision incroyable. Sur 3 milliards de lettres copiées, il n'y a en moyenne qu'une erreur pour un milliard de nucléotides ! C'est comme recopier tout le contenu de Wikipédia à la main en faisant une seule faute.

Comprendre la réplication, c'est comprendre comment la vie se transmet de cellule en cellule.`,
    sections: [
      {
        title: "🔱 La fourche de réplication",
        content: `La réplication commence par l'ouverture de la double hélice. Ça se passe au niveau d'une « origine de réplication » (un point de départ). Ça crée une fourche en forme de Y où les deux brins se séparent. C'est comme ouvrir une fermeture éclair à partir du milieu.

Plusieurs enzymes (des machines moléculaires) bossent ensemble :
• L'hélicase : elle déroule la double hélice. C'est l'ouvreur de fermeture éclair.
• La primase : elle fabrique une petite amorce d'ARN. C'est le stylo qui trace le premier trait pour guider la copie.
• L'ADN polymérase III : elle copie chaque brin en ajoutant les nucléotides complémentaires. C'est la photocopieuse.
• L'ADN ligase : elle recolle les morceaux. C'est la colle.

Point important : l'ADN polymérase ne peut lire que dans UN SEUL sens (3'→5'). Du coup, un brin est copié en continu (c'est le brin directeur). L'autre est copié par petits morceaux en sens inverse. Ces morceaux s'appellent les fragments d'Okazaki. Et ça donne le brin retardé.

En gros : l'hélicase ouvre, la primase amorce, la polymérase copie, la ligase recolle.`
      },
      {
        title: "✅ Correction d'erreurs",
        content: `L'ADN polymérase a une fonction de « relecture » intégrée. Si elle place le mauvais nucléotide, elle le détecte, fait marche arrière et le corrige. C'est comme le correcteur automatique de ton téléphone, mais en bien plus fiable.

Il existe aussi d'autres systèmes de réparation. La réparation des mésappariements (quand les bases sont mal associées), l'excision de base (quand une base est abîmée), etc. Tout ça sert à garder le génome en bon état.

C'est un peu comme avoir un correcteur automatique, un relecteur humain ET un chef de relecture. Trois couches de sécurité pour pas faire de fautes.

En gros : la cellule a plusieurs systèmes de correction pour éviter les erreurs de copie.`
      },
      {
        title: "⏳ Le problème des télomères",
        content: `À chaque réplication, les extrémités des chromosomes raccourcissent un peu. Ces extrémités s'appellent les télomères (ce sont des séquences répétitives qui protègent le bout du chromosome). Le problème, c'est que l'ADN polymérase ne peut pas copier le tout dernier morceau.

C'est comme un lacet de chaussure. Le bout en plastique (l'aglet), c'est le télomère. À chaque copie, le bout se raccourcit un peu. Après environ 50 divisions, les télomères sont trop courts. La cellule arrête de se diviser. C'est lié au vieillissement cellulaire.

Exception : la télomérase (une enzyme spéciale) peut rallonger les télomères. Elle est active dans les cellules souches et — problème — dans les cellules cancéreuses aussi.

En gros : les télomères raccourcissent à chaque copie = la cellule vieillit. La télomérase peut les rallonger.`
      },
      {
        title: "🎯 Les origines de réplication",
        content: `La réplication ne démarre pas n'importe où. Elle commence à des sites précis. On les appelle les origines de réplication (ori).

Chez les procaryotes (les bactéries, des organismes simples sans noyau) :
• Une seule origine de réplication (oriC chez E. coli)
• La réplication part dans les deux sens : deux fourches vont en sens opposé
• Le chromosome circulaire est copié en ~40 minutes

Chez les eucaryotes (les organismes avec un noyau, comme nous) :
• Des milliers d'origines de réplication par chromosome. Sinon, ça prendrait des semaines pour tout copier !
• Les origines s'allument par « grappes », selon un programme précis
• Chaque ori ne peut être utilisé qu'UNE SEULE FOIS par cycle cellulaire. C'est le mécanisme de licence (via le complexe pré-RC et les protéines MCM).

Imagine un long manuscrit à photocopier. Les bactéries n'ont qu'une seule photocopieuse au milieu. Les eucaryotes placent des centaines de photocopieuses le long du texte. C'est beaucoup plus rapide !

Chiffre clé : le génome humain a ~30 000 à 50 000 origines de réplication.

En gros : les bactéries = 1 point de départ. Les humains = des milliers de points de départ pour aller plus vite.`
      },
      {
        title: "🔧 Les mécanismes de réparation de l'ADN",
        content: `Malgré la précision de la copie, des erreurs et des dommages arrivent tous les jours. Les UV du soleil, les radicaux libres (des molécules agressives), les erreurs de copie… La cellule a tout un arsenal de réparation. C'est comme une équipe de maintenance qui bosse 24h/24.

• Relecture (proofreading) : l'ADN polymérase vérifie chaque nucléotide ajouté. Si c'est le mauvais, elle le vire grâce à son activité exonucléase 3'→5' (une fonction « gomme »). Taux d'erreur après relecture : ~1 pour 10⁷ (10 millions).
• Réparation des mésappariements (MMR — MisMatch Repair) : ça corrige les erreurs qui ont échappé à la relecture. Protéines clés : MutS (détecte l'erreur), MutL (recrute l'équipe), MutH (coupe le brin fautif).
• Réparation par excision de base (BER) : une glycosylase (une enzyme spécialisée) repère et enlève la base abîmée. Ça crée un trou (site AP). Puis APE1 + polymérase + ligase rebouchent le trou.
• Réparation par excision de nucléotides (NER) : on enlève un bout de ~25-30 nucléotides autour de la zone abîmée. C'est essentiel pour réparer les dimères de thymine (des T qui se collent à cause des UV).
• Réparation des cassures double brin : deux options. La recombinaison homologue (précise et fiable). Ou la jonction d'extrémités non homologues (NHEJ, rapide mais elle fait des petites erreurs).

Maladies liées à des défauts de réparation :
• Xeroderma pigmentosum (défaut NER) → les patients ne supportent pas le soleil, cancers cutanés fréquents
• Syndrome de Lynch (défaut MMR) → risque élevé de cancer colorectal
• Mutations BRCA1/BRCA2 (défaut de recombinaison homologue) → cancers du sein et de l'ovaire

En gros : la cellule a 5 systèmes de réparation. Quand ils sont défaillants, ça donne des maladies graves.`
      },
      {
        title: "🔄 Différences procaryotes vs eucaryotes",
        content: `La réplication suit le même principe de base partout. Mais il y a des différences importantes entre les procaryotes (bactéries) et les eucaryotes (nous).

Procaryotes (les bactéries, des cellules simples) :
• 1 seule origine de réplication
• L'ADN polymérase III fait le boulot principal
• Vitesse : ~1 000 nucléotides par seconde. C'est rapide !
• Pas de problème de télomères (le chromosome est circulaire, pas de bout)
• La réplication est directement liée à la division cellulaire

Eucaryotes (les cellules avec un noyau, comme les nôtres) :
• Des milliers d'origines de réplication
• L'ADN polymérase δ (brin retardé) et ε (brin directeur) font le boulot principal
• Vitesse : ~50 nucléotides par seconde (c'est plus lent, mais les multiples origines compensent)
• Problème des télomères → il faut la télomérase
• La réplication n'a lieu qu'en phase S du cycle cellulaire (un moment précis)
• Il faut aussi refaire la chromatine (remettre des histones sur le nouvel ADN)

Point important : chez les eucaryotes, les histones parentales (les anciennes bobines) sont réparties au hasard sur les deux brins filles. De nouvelles histones sont fabriquées pour compléter.

En gros : même principe de base, mais les eucaryotes c'est plus complexe (plus d'origines, plus d'enzymes, problème des télomères).`
      },
      {
        title: "🏥 Applications médicales : cancer et vieillissement",
        content: `La réplication est au cœur de deux grandes questions médicales :

Cancer :
• Les cellules cancéreuses se répliquent de façon incontrôlée. C'est la cible n°1 des traitements.
• Médicaments anticancéreux qui ciblent la réplication : les antimétabolites (5-FU, méthotrexate), les agents alkylants (cisplatine), les inhibiteurs de topoisomérases (irinotécan, étoposide).
• Les inhibiteurs de PARP (olaparib) exploitent les défauts de réparation dans les cancers avec mutations BRCA. C'est le principe de « létalité synthétique » (on bloque le dernier système de secours de la cellule cancéreuse).
• La télomérase est réactivée dans ~90% des cancers. C'est une cible thérapeutique prometteuse.

Vieillissement :
• Le raccourcissement des télomères fonctionne comme une horloge biologique. C'est la limite de Hayflick (~50 divisions maximum).
• Le stress oxydatif (les radicaux libres) accélère les dégâts sur l'ADN et le raccourcissement des télomères. C'est un peu la rouille de la cellule.
• Les syndromes de vieillissement prématuré (progéria, syndrome de Werner) sont liés à des défauts de réplication ou de réparation.

En gros : le cancer = réplication qui s'emballe. Le vieillissement = télomères qui raccourcissent.`
      },
      {
        title: "⚠️ Pièges classiques en QCM",
        content: `• PIÈGE 1 : « L'ADN polymérase lit dans le sens 5'→3' » → FAUX. Elle lit le brin matrice (le modèle) en 3'→5' et fabrique le nouveau brin en 5'→3'. C'est l'inverse de ce qu'on croit souvent.
• PIÈGE 2 : « L'ADN polymérase peut démarrer toute seule » → FAUX. Elle a TOUJOURS besoin d'une amorce (un petit bout d'ARN fabriqué par la primase). Pas d'amorce = pas de copie.
• PIÈGE 3 : « La réplication est conservative » → FAUX. Elle est semi-conservative. Chaque molécule fille a un brin ancien et un brin nouveau. C'est prouvé par l'expérience de Meselson et Stahl (1958).
• PIÈGE 4 : Confondre brin directeur et brin retardé. Brin directeur = copie en continu (même sens que la fourche). Brin retardé = copie par petits morceaux (fragments d'Okazaki, en sens inverse).
• PIÈGE 5 : « Les fragments d'Okazaki n'existent que chez les procaryotes » → FAUX. Ils existent aussi chez les eucaryotes ! Mais ils sont plus courts chez les eucaryotes (~100-200 nucléotides) que chez les procaryotes (~1 000-2 000 nucléotides).
• PIÈGE 6 : Oublier les topoisomérases. Elles relâchent les super-enroulements (les tensions) en avant de la fourche de réplication. Sans elles, l'ADN se nouerait.

Astuce pour retenir les enzymes : « HPP-LL » = Hélicase (ouvre) → Primase (amorce) → Polymérase (copie) → Ligase (recolle) → Les topoisomérases (Libèrent les tensions).

En gros : l'ADN polymérase lit en 3'→5', elle a besoin d'une amorce, et la réplication est semi-conservative.`
      },
    ],
  },

  "La transcription": {
    images: [
      { file: "transcription-et-traduction-illus-06.webp", caption: "La transcription en action : l'ARN polymérase glisse le long de l'ADN et fabrique un brin d'ARN." },
    ],
    intro: `La transcription, c'est la première étape pour lire un gène. L'ADN est « recopié » en ARN messager (ARNm). C'est comme faire une photocopie d'une page du grand livre (l'ADN) pour l'envoyer à l'usine à protéines (les ribosomes).

Ce processus est ultra-réglé. La cellule ne copie que les gènes dont elle a besoin, au bon moment. C'est du sur-mesure.`,
    sections: [
      {
        title: "📝 Comment ça marche ?",
        content: `L'ARN polymérase II (la photocopieuse des gènes) se fixe sur le promoteur du gène. Le promoteur, c'est une séquence signal en amont du gène, comme un panneau « démarrer ici ». L'enzyme ouvre la double hélice localement et « lit » un brin d'ADN pour fabriquer un ARN complémentaire.

Les étapes :
1. Initiation : les facteurs de transcription (des protéines d'aide) + l'ARN pol II se mettent en place sur le promoteur. C'est le montage de la machine.
2. Élongation : l'ARN polymérase avance le long de l'ADN et allonge l'ARN messager, nucléotide par nucléotide. C'est la copie en cours.
3. Terminaison : un signal de fin est atteint, l'ARN se détache. C'est la fin de la photocopie.

L'ARN produit est un « pré-ARNm ». Il n'est pas encore utilisable. Il doit encore passer par l'étape de maturation (comme un brouillon avant la version finale).

En gros : l'ARN polymérase se pose sur le gène, le copie en ARN, puis s'arrête au signal stop.`
      },
      {
        title: "✂️ La maturation de l'ARN",
        content: `Le pré-ARNm (le brouillon) n'est pas prêt à être utilisé. Il passe par 3 modifications essentielles :

• Ajout de la coiffe en 5' : on colle un petit capuchon au début de l'ARN. Ça le protège et aide au lancement de la traduction. C'est comme mettre un bouchon sur une bouteille.
• Ajout de la queue poly-A en 3' : on ajoute une longue suite de A (adénines) à la fin. Ça protège contre la dégradation. C'est comme un film plastique de protection.
• Épissage : les introns (les parties inutiles, les « pubs ») sont découpés et jetés. Seuls les exons (les parties utiles, les « films ») restent. Le tout est recollé.

L'épissage alternatif permet à un même gène de produire PLUSIEURS protéines différentes. C'est un mécanisme clé de la diversité. C'est comme un menu au restaurant : avec les mêmes ingrédients, on fait des plats différents en choisissant les combinaisons.

En gros : coiffe + queue poly-A + épissage = l'ARN brouillon devient un ARN propre et prêt à l'emploi.`
      },
      {
        title: "🔑 Le dogme central",
        content: `ADN → ARN → Protéine : c'est le dogme central de la biologie moléculaire. C'est la règle du jeu.

La transcription (ADN → ARN) a lieu dans le noyau. L'ARNm mature (le propre) sort ensuite par les pores nucléaires (les portes du noyau) pour être traduit dans le cytoplasme (l'espace en dehors du noyau).

La régulation de la transcription, c'est le principal moyen pour la cellule de contrôler quelles protéines elle fabrique. C'est un peu le chef qui décide quelles recettes on prépare en cuisine.

En gros : ADN → ARN → Protéine. La transcription se fait dans le noyau, la traduction dans le cytoplasme.`
      },
      {
        title: "🔬 Les ARN polymérases eucaryotes",
        content: `Chez les eucaryotes (les organismes avec un noyau, comme nous), il n'y a pas UNE mais TROIS ARN polymérases. Chacune a sa spécialité :

• ARN polymérase I (Pol I) : elle fabrique les ARN ribosomiques (ARNr 28S, 18S, 5.8S) dans le nucléole (une zone du noyau). C'est la plus active (~80% de la transcription totale). Elle est la « bête de somme ».
• ARN polymérase II (Pol II) : elle fabrique les ARN messagers (ARNm) et la plupart des petits ARN nucléaires (snRNA). C'est ELLE qui est au cœur du cours. C'est la « star ».
• ARN polymérase III (Pol III) : elle fabrique les ARN de transfert (ARNt), l'ARNr 5S et d'autres petits ARN. C'est la « touche-à-tout ».

Chez les procaryotes (les bactéries) : une SEULE ARN polymérase (avec un facteur sigma σ pour reconnaître le promoteur). Plus simple !

Comment les distinguer en QCM ?
→ L'α-amanitine (la toxine mortelle de l'amanite phalloïde, un champignon vénéneux) inhibe la Pol II à faible dose, la Pol III à forte dose. La Pol I y résiste.
→ C'est un critère de classement classique en QCM !

Astuce : « I = ribosomes, II = messagers, III = transfert » → 1-2-3 = r-m-t.

En gros : 3 ARN polymérases chez nous. La Pol II copie les ARNm, c'est la plus importante pour le cours.`
      },
      {
        title: "🎛️ Régulation de la transcription",
        content: `La cellule ne copie pas tous ses gènes tout le temps. La régulation de la transcription, c'est le contrôle le plus important de l'expression des gènes. C'est le cerveau de l'opération.

Éléments régulateurs en cis (directement sur l'ADN, comme des panneaux sur la route) :
• Promoteur : c'est la zone en amont du gène où la machine de transcription se pose. Il contient souvent une boîte TATA (~-25) et un élément Inr. C'est la piste d'atterrissage.
• Enhancers (activateurs) : des séquences qui boostent la transcription. Elles peuvent être à des milliers de bases du gène ! Elles fonctionnent par « boucle » de l'ADN (l'ADN se plie pour les rapprocher du gène).
• Silencers (répresseurs) : des séquences qui freinent la transcription.
• Insulateurs : des « barrières » qui empêchent un enhancer d'activer le mauvais gène.

Facteurs régulateurs en trans (des protéines qui se déplacent, comme des coursiers) :
• Facteurs généraux de transcription (TFIIA, B, D, E, F, H) : ils sont nécessaires pour que la Pol II se mette en position correctement. C'est l'équipe de montage.
• TFIID contient TBP (TATA-Binding Protein) qui reconnaît la boîte TATA. C'est le GPS qui trouve le promoteur.
• Activateurs : des facteurs de transcription qui stimulent un gène précis (ex : p53, NF-κB).
• Répresseurs : des facteurs qui bloquent la transcription.
• Médiateur : un gros complexe de protéines qui fait le lien entre les activateurs et la Pol II. C'est le standard téléphonique.

Le promoteur, c'est l'adresse du gène. Les enhancers, ce sont des « boosters ». Les facteurs de transcription, ce sont les « livreurs » qui activent la machine.

En gros : plein de protéines et de séquences ADN travaillent ensemble pour décider quel gène est copié et quand.`
      },
      {
        title: "🧬 Épigénétique et transcription",
        content: `L'épigénétique (du grec « epi » = au-dessus), c'est l'ensemble des modifications qui changent l'expression des gènes SANS modifier la séquence d'ADN. Ce sont des « post-it » collés sur l'ADN ou sur les histones. Le texte ne change pas, mais les post-it disent quelles pages lire ou ignorer.

Les principaux mécanismes épigénétiques :
• Méthylation de l'ADN : on colle des groupes méthyle (–CH₃) sur les cytosines des dinucléotides CpG. Ça éteint le gène. Les îlots CpG (des zones riches en CG) sont souvent dans les promoteurs.
• Modifications des histones :
  → Acétylation (par les HAT, des enzymes qui ajoutent un groupe acétyle) → ça ouvre la chromatine → le gène s'active
  → Désacétylation (par les HDAC, des enzymes qui enlèvent le groupe acétyle) → ça ferme la chromatine → le gène est éteint
  → Méthylation des histones → ça peut activer OU éteindre le gène, ça dépend de quel acide aminé est ciblé
• Remodelage de la chromatine : des complexes SWI/SNF (des machines moléculaires) déplacent les nucléosomes pour rendre l'ADN accessible.

Pourquoi c'est important en médecine :
• L'épigénétique explique pourquoi de vrais jumeaux (même ADN) peuvent avoir des maladies différentes. Même partition, mais les post-it sont différents.
• Certains cancers ont une hyperméthylation de gènes suppresseurs de tumeurs. Le gène protecteur est « éteint » alors qu'il devrait protéger la cellule. C'est comme désactiver l'alarme incendie.
• Médicaments épigénétiques : les inhibiteurs de HDAC (vorinostat), les agents déméthylants (azacitidine). On les utilise en oncologie (traitement du cancer).

En gros : l'épigénétique, c'est des post-it sur l'ADN. Ça change ce qui est lu sans changer le texte.`
      },
      {
        title: "🏥 Applications médicales",
        content: `La transcription est une cible thérapeutique majeure. Si on bloque la copie des gènes, on bloque la cellule.

• Antibiotiques qui ciblent la transcription des bactéries :
  → Rifampicine : elle bloque l'ARN polymérase bactérienne. C'est le traitement de la tuberculose. Elle ne touche pas nos ARN polymérases eucaryotes. Ouf !
  → Actinomycine D : elle se glisse dans l'ADN et bloque l'ARN polymérase. On l'utilise comme anticancéreux.

• Toxines :
  → α-amanitine : c'est la toxine mortelle de l'amanite phalloïde (un champignon). Elle bloque la Pol II eucaryote. Ça détruit le foie et c'est souvent fatal.

• Thérapies qui ciblent la maturation de l'ARN :
  → Nusinersen (Spinraza) : c'est un oligonucléotide antisens (un petit brin artificiel) qui modifie l'épissage du gène SMN2 pour traiter l'amyotrophie spinale.
  → L'épissage alternatif anormal est impliqué dans plein de cancers.

• Diagnostic :
  → RT-PCR : on fait une transcription inverse (ARN → ADNc, c'est-à-dire on refait de l'ADN à partir de l'ARN) puis une PCR. Ça permet de mesurer l'expression d'un gène ou de détecter un virus à ARN (comme pour le test COVID).
  → Puces à ADN (microarrays) : elles analysent l'expression de milliers de gènes en même temps. C'est comme un tableau de bord géant.

En gros : on peut bloquer la transcription pour soigner (antibiotiques, anticancéreux) ou la mesurer pour diagnostiquer (RT-PCR).`
      },
      {
        title: "⚠️ Pièges classiques en QCM",
        content: `• PIÈGE 1 : « L'ARN polymérase a besoin d'une amorce » → FAUX. Contrairement à l'ADN polymérase, l'ARN polymérase peut démarrer toute seule (de novo, sans amorce). C'est une différence clé !
• PIÈGE 2 : « Le brin matrice et le brin codant, c'est le même brin » → FAUX. Le brin matrice (3'→5') est LU par l'ARN polymérase. Le brin codant (non-matrice, 5'→3') a la même séquence que l'ARN produit (avec T au lieu de U).
• PIÈGE 3 : « L'ARNm est directement utilisable après la transcription chez les eucaryotes » → FAUX. Il passe par la maturation (coiffe 5', queue poly-A, épissage) avant d'être exporté du noyau.
• PIÈGE 4 : Confondre introns et exons. Introns = INtervening sequences (retirés, jetés). Exons = EXprimés (gardés, utiles). Astuce : « les Introns sont IN (jetés INside la poubelle) ».
• PIÈGE 5 : « Chez les bactéries, l'ARNm subit un épissage » → FAUX. Pas d'introns dans la plupart des gènes bactériens, donc pas d'épissage. En plus, la traduction commence AVANT que la transcription soit finie (couplage transcription-traduction).
• PIÈGE 6 : « La Pol I fabrique les ARNm » → FAUX. C'est la Pol II qui fait les ARNm. La Pol I fait les ARNr.

Astuce : en QCM, si on parle d'α-amanitine et d'inhibition, pense Pol II (dose faible) puis Pol III (dose élevée). La Pol I résiste.

En gros : l'ARN polymérase n'a PAS besoin d'amorce. Le brin matrice ≠ le brin codant. L'ARNm eucaryote doit mûrir avant d'être utilisé.`
      },
    ],
  },

  "La traduction": {
    images: [],
    intro: `La traduction, c'est le passage du langage des nucléotides (l'ARN) au langage des acides aminés (les protéines). Les ribosomes (les usines à protéines) « lisent » l'ARN messager trois lettres par trois lettres. Chaque groupe de 3 lettres s'appelle un codon. Et chaque codon correspond à un acide aminé.

C'est la dernière étape du dogme central : ADN → ARN → Protéine. C'est l'étape où on passe du plan à la construction.`,
    sections: [
      {
        title: "📖 Le code génétique",
        content: `Le code génétique, c'est la table de correspondance entre les codons (des triplets de nucléotides, des groupes de 3 lettres) et les acides aminés (les briques des protéines).

Caractéristiques essentielles :
• 64 codons possibles pour seulement 20 acides aminés. Ça veut dire que le code est redondant (ou « dégénéré »). Plusieurs codons peuvent donner le même acide aminé.
• AUG = codon d'initiation. C'est le signal « START ». Il code pour la méthionine (un acide aminé).
• UAA, UAG, UGA = codons stop. C'est le signal « FIN ». Pas d'acide aminé pour eux.
• Le code est universel. Il est quasi identique chez tous les êtres vivants. De la bactérie à l'humain.

Un codon = 3 lettres = 1 acide aminé. Simple et élégant. C'est un peu comme un code Morse universel pour la vie.

En gros : 3 lettres d'ARN = 1 acide aminé. AUG = on démarre. UAA/UAG/UGA = on s'arrête.`
      },
      {
        title: "🔧 La machinerie de traduction",
        content: `Trois acteurs principaux travaillent ensemble :

• Le ribosome : c'est la « machine » qui assemble les protéines. Il a 2 sous-unités (une grosse et une petite). Il glisse le long de l'ARNm. C'est un peu la chaîne de montage dans une usine.
• L'ARNt (ARN de transfert) : c'est le « livreur ». Chaque ARNt porte un acide aminé spécifique et un anticodon (un triplet de lettres complémentaire du codon de l'ARNm). C'est le livreur Uber Eats qui apporte le bon plat.
• L'ARNm (ARN messager) : c'est le « plan de construction ». Il porte la séquence de codons.

Le ribosome lit l'ARNm codon par codon. Il accueille le bon ARNt (celui dont l'anticodon matche avec le codon). Puis il forme la liaison peptidique entre les acides aminés. C'est comme enfiler des perles sur un collier.

En gros : le ribosome lit le plan (ARNm), le livreur (ARNt) apporte les pièces (acides aminés), et la chaîne s'allonge.`
      },
      {
        title: "⚙️ Les 3 étapes de la traduction",
        content: `1. Initiation : le ribosome se monte sur le codon AUG (le signal start) de l'ARNm. C'est la mise en route.
2. Élongation : les ARNt apportent les acides aminés un par un. La chaîne protéique s'allonge. C'est la production.
3. Terminaison : le ribosome rencontre un codon stop (UAA, UAG ou UGA). La protéine est libérée. C'est la livraison.

Petit bonus : plusieurs ribosomes peuvent traduire le MÊME ARNm en même temps. Ça s'appelle un polyribosome (ou polysome). C'est comme plusieurs imprimantes branchées sur le même fichier. Ça permet de produire plein de copies de la même protéine très vite.

En gros : initiation (on monte la machine) → élongation (on fabrique) → terminaison (on libère le produit).`
      },
      {
        title: "🔧 Modifications post-traductionnelles",
        content: `La protéine qui sort du ribosome n'est souvent pas prête à bosser. Elle doit passer par des modifications post-traductionnelles (MPT). C'est comme un meuble IKEA qui sort de la boîte : il faut encore le monter, le peindre et le vérifier.

• Clivage du peptide signal : les protéines destinées à être sécrétées (exportées) ont un « ticket de sortie » au début. Ce peptide signal est coupé une fois que la protéine est entrée dans le réticulum endoplasmique (RE, une usine de finition).
• Glycosylation : on colle des sucres sur la protéine. Ça donne des glycoprotéines. C'est essentiel pour la reconnaissance cellulaire, le repliement et la stabilité.
  → N-glycosylation (sur un acide aminé appelé Asn) : dans le RE
  → O-glycosylation (sur Ser ou Thr) : dans le Golgi (un autre atelier de la cellule)
• Phosphorylation : on colle un groupe phosphate (par des kinases, des enzymes spécialisées) sur Ser, Thr ou Tyr. Ça active ou désactive la protéine. C'est LE mécanisme de régulation le plus fréquent ! C'est comme un interrupteur on/off.
• Acétylation, méthylation, ubiquitination : des modifications des histones et régulation de la dégradation des protéines.
• Formation de ponts disulfure : dans le RE, deux acides aminés cystéines se lient entre eux. Ça stabilise la forme 3D de la protéine. C'est comme des agrafes.
• Ajout d'ancre GPI : ça accroche la protéine à la membrane de la cellule. Comme un crochet mural.

La traduction fabrique le « brut » de la protéine. Les MPT, c'est la « finition » — peinture, assemblage, contrôle qualité.

En gros : la protéine brute doit être modifiée (sucres, phosphates, coupures) pour devenir fonctionnelle.`
      },
      {
        title: "🎛️ Régulation de la traduction",
        content: `La cellule contrôle pas seulement QUELS ARNm sont copiés. Elle contrôle aussi lesquels sont traduits et à quelle vitesse. C'est un double niveau de contrôle.

Niveaux de régulation :
• Durée de vie de l'ARNm : la queue poly-A est raccourcie petit à petit. Quand elle est trop courte, l'ARNm est détruit. Certaines séquences dans le 3'UTR (une zone en bout d'ARNm) accélèrent cette destruction. C'est comme une date de péremption.
• Séquences régulatrices en 5'UTR : des structures spéciales (comme les IRES) peuvent aider ou bloquer le démarrage de la traduction. C'est un feu vert ou rouge.
• Facteurs d'initiation : la phosphorylation (ajout d'un phosphate) d'eIF2α bloque globalement la traduction en cas de stress (manque d'acides aminés, infection virale). C'est le frein d'urgence.
• miARN (microARN) : ce sont des petits ARN (~22 nucléotides) qui se collent sur le 3'UTR de l'ARNm cible. Ça détruit l'ARNm ou bloque sa traduction. Un seul miARN peut réguler des centaines de gènes. C'est un chef d'orchestre discret.
• Régulation par le fer : la traduction de la ferritine (une protéine qui stocke le fer) est contrôlée par les protéines IRP qui se fixent sur un élément IRE en 5'UTR de l'ARNm.

La régulation au niveau de la traduction permet une réponse rapide. Pas besoin de refaire des ARNm. On agit directement sur ceux qui sont déjà là.

En gros : la cellule peut accélérer, ralentir ou bloquer la traduction selon ses besoins.`
      },
      {
        title: "💊 Antibiotiques ciblant la traduction",
        content: `Les ribosomes des bactéries (procaryotes, 70S = 30S + 50S) sont différents de nos ribosomes (eucaryotes, 80S = 40S + 60S). Cette différence est exploitée par plein d'antibiotiques. On cible les ribosomes bactériens sans toucher les nôtres. Malin !

Antibiotiques ciblant la sous-unité 30S (la petite sous-unité bactérienne) :
• Tétracyclines : elles empêchent l'ARNt chargé (aminoacylé) de se poser sur le site A du ribosome. Le livreur ne peut plus livrer.
• Aminoglycosides (gentamicine, streptomycine) : ils provoquent des erreurs de lecture du code. Le ribosome lit n'importe quoi. Ça donne des protéines aberrantes.

Antibiotiques ciblant la sous-unité 50S (la grosse sous-unité bactérienne) :
• Macrolides (érythromycine, azithromycine) : ils bloquent le déplacement du ribosome (la translocation). Le ribosome est coincé.
• Chloramphénicol : il bloque la peptidyl-transférase (l'enzyme qui forme la liaison entre les acides aminés). Pas de liaison = pas de protéine.
• Lincosamides (clindamycine) : ils bloquent l'élongation.

Autres :
• Puromycine : elle ressemble à un ARNt chargé. Elle s'incorpore dans la chaîne protéique et provoque sa libération prématurée. Le problème : ça marche sur les ribosomes bactériens ET eucaryotes (c'est toxique pour nous). On l'utilise seulement en recherche.
• Cycloheximide : il bloque spécifiquement les ribosomes eucaryotes (80S). Utilisé en recherche uniquement.

Attention piège QCM : le chloramphénicol bloque aussi la traduction mitochondriale ! Les mitochondries (nos centrales énergétiques) ont des ribosomes 70S, comme les bactéries. D'où la toxicité hématologique (sur le sang).

En gros : les antibiotiques exploitent la différence entre ribosomes bactériens (70S) et humains (80S).`
      },
      {
        title: "🧬 Mutations et maladies liées à la traduction",
        content: `Les erreurs dans la traduction peuvent avoir des conséquences graves. Une petite faute peut tout changer.

Mutations qui touchent le code génétique :
• Mutation faux-sens : un acide aminé est changé par un autre. Ça peut être bénin ou grave. Exemple : la drépanocytose. Un seul changement (Glu → Val en position 6 de la β-globine, mutation E6V). Un seul acide aminé sur des centaines. Et ça change tout.
• Mutation non-sens : un codon stop apparaît trop tôt. La protéine est coupée, tronquée, souvent inutile. Exemple : la dystrophie musculaire de Duchenne.
• Mutation frameshift (décalage du cadre de lecture) : une insertion ou délétion qui décale tout le message en aval. La protéine est complètement modifiée après le point de mutation.

Maladies liées aux ribosomes (ribosomopathies) :
• Anémie de Diamond-Blackfan : mutation dans les protéines ribosomiques. Les globules rouges ne se forment pas bien.
• Syndrome de Shwachman-Diamond : problème d'assemblage des ribosomes.

Maladies liées aux ARNt :
• Certaines maladies mitochondriales (MELAS, MERRF) viennent de mutations dans les ARNt mitochondriaux. La traduction dans les mitochondries ne marche plus bien.

La drépanocytose montre bien qu'UN SEUL changement de nucléotide (A→T) qui modifie UN SEUL acide aminé peut causer une maladie grave qui touche des millions de personnes. C'est la preuve que chaque lettre compte.

En gros : une seule erreur dans le code peut donner une protéine défectueuse et causer une maladie grave.`
      },
      {
        title: "⚠️ Pièges classiques en QCM",
        content: `• PIÈGE 1 : « Le code génétique est ambigu » → FAUX. Il est dégénéré (= redondant : plusieurs codons pour un même acide aminé) mais PAS ambigu (un codon donne TOUJOURS le même acide aminé). Dégénéré ≠ ambigu.
• PIÈGE 2 : « AUG code seulement pour la méthionine d'initiation » → FAUX. AUG code pour la méthionine en initiation ET en élongation. C'est le contexte (séquence de Kozak chez les eucaryotes, Shine-Dalgarno chez les bactéries) qui dit si c'est un AUG de départ.
• PIÈGE 3 : « Les codons stop sont traduits en acides aminés » → FAUX. Les codons stop (UAA, UAG, UGA) sont reconnus par des facteurs de libération (RF), PAS par des ARNt. Pas d'acide aminé pour eux.
• PIÈGE 4 : Confondre codon et anticodon. Le codon est sur l'ARNm (5'→3'). L'anticodon est sur l'ARNt (3'→5'). Ils sont complémentaires et antiparallèles. C'est comme une clé (anticodon) dans une serrure (codon).
• PIÈGE 5 : « Le ribosome a 2 sites » → INCOMPLET. Le ribosome a 3 sites : A (aminoacyl = entrée de l'ARNt), P (peptidyl = fabrication de la liaison), E (exit = sortie de l'ARNt vide). A-P-E, comme un mot de passe.
• PIÈGE 6 : « La traduction a lieu dans le noyau » → FAUX. La traduction a lieu dans le cytoplasme (ribosomes libres ou sur le RE rugueux). Chez les bactéries, elle peut commencer avant la fin de la transcription.

Astuce pour les codons stop : « U Ai Assez » → UAA, UAG, UGA.

En gros : code dégénéré ≠ ambigu. 3 sites ribosomiques (A, P, E). La traduction = cytoplasme, pas le noyau.`
      },
    ],
  },

  "Les protéines": {
    images: [],
    intro: `Les protéines, ce sont les « ouvrières » de la cellule. Enzymes, hormones, anticorps, transporteurs, récepteurs… tout ça, ce sont des protéines. Elles sont fabriquées à partir de seulement 20 acides aminés différents. Mais leur variété est quasi infinie. C'est comme avec 26 lettres, on peut écrire tous les livres du monde.

Comprendre les protéines, c'est comprendre comment la vie fonctionne au niveau des molécules.`,
    sections: [
      {
        title: "🏗️ Les 4 niveaux de structure",
        content: `Une protéine se replie en 4 niveaux. C'est comme construire un immeuble :

• Structure primaire : c'est la séquence d'acides aminés. Comme les lettres d'un mot. C'est l'ordre dans lequel ils sont alignés.
• Structure secondaire : ce sont des motifs locaux qui se forment. L'hélice alpha (une spirale, comme un escalier en colimaçon) et le feuillet bêta (un zigzag plissé, comme un éventail).
• Structure tertiaire : c'est la forme 3D globale de la protéine. Tout se replie dans l'espace. Stabilisée par des liaisons faibles et des ponts disulfure (des « agrafes » chimiques).
• Structure quaternaire : c'est l'assemblage de plusieurs chaînes protéiques ensemble. Comme des Lego qui s'emboîtent pour former une construction plus grande.

Chaque niveau dépend du précédent. C'est la séquence (la primaire) qui détermine tout le repliement.

Astuce : « Séquence → Spirales → Spatial → Société » pour retenir les 4 niveaux.

En gros : séquence → forme locale → forme 3D → assemblage. C'est la séquence qui décide de tout.`
      },
      {
        title: "🌀 Le repliement : de la chaîne à la forme 3D",
        content: `Après sa fabrication par le ribosome, la chaîne d'acides aminés se replie toute seule en quelques secondes. Elle adopte sa forme fonctionnelle (la forme qui lui permet de bosser). C'est le repliement protéique.

Le moteur principal : les acides aminés hydrophobes (ceux qui « fuient » l'eau, comme l'huile) se regroupent au cœur de la protéine. Ça force toute la structure à se replier vers l'intérieur. C'est comme quand tu mets de l'huile dans l'eau : l'huile se regroupe en gouttelette.

Si le repliement rate, la protéine est mal formée. Elle ne marche pas. Des protéines « chaperonnes » (des assistantes moléculaires) aident au bon repliement. Quand le système échoue, ça peut causer des maladies graves. Alzheimer et Parkinson, par exemple, sont liées à des protéines mal repliées qui s'accumulent.

En gros : la protéine se replie toute seule grâce à l'effet hydrophobe. Si ça rate = maladie possible.`
      },
      {
        title: "🔑 Pourquoi la forme = la fonction",
        content: `La forme 3D d'une protéine détermine sa fonction. Pas de bonne forme = pas de bon boulot.

Un anticorps a une forme en Y pour attraper les pathogènes (les intrus). Une enzyme a une « poche » (le site actif) parfaitement adaptée à son substrat (la molécule qu'elle transforme). C'est le modèle clé-serrure.

Si la forme change, la protéine perd sa fonction. C'est la dénaturation. Ça arrive avec la chaleur, les pH extrêmes, etc. C'est pour ça qu'un œuf cuit ne peut pas redevenir cru. Les protéines de l'œuf ont perdu leur forme originale de façon irréversible. C'est cuit, au sens propre !

En gros : la forme 3D = la fonction. Change la forme = plus de fonction.`
      },
      {
        title: "🦠 Maladies du repliement protéique",
        content: `Quand les protéines se replient mal, les conséquences sont souvent dramatiques :

Maladies à protéines mal repliées (protéinopathies) :
• Alzheimer : des plaques de peptide β-amyloïde (un bout de protéine qui s'agrège) et des enchevêtrements de protéine Tau hyperphosphorylée (une protéine pleine de phosphates qui forme des nœuds) s'accumulent dans le cerveau.
• Parkinson : la protéine α-synucléine s'agrège en « corps de Lewy » dans les neurones dopaminergiques (les neurones qui fabriquent la dopamine).
• Maladies à prions : la protéine PrPc (la forme normale) est convertie en PrPSc (la forme mal repliée, riche en feuillets β). La forme pathologique est « contagieuse ». Elle impose sa mauvaise forme aux protéines normales. C'est un effet domino.
  → Exemples : maladie de Creutzfeldt-Jakob, encéphalopathie spongiforme bovine (la « vache folle »).
• Mucoviscidose : la mutation ΔF508 du canal CFTR (un canal qui fait passer le chlore) donne une protéine mal repliée. Elle est retenue dans le RE et détruite. Pas de canal chlore à la membrane = problème.
• Drépanocytose : la mutation E6V de l'hémoglobine (la protéine qui transporte l'oxygène) fait que les molécules HbS s'empilent quand il y a peu d'oxygène. Les globules rouges se déforment en « faucille ».

Le système de contrôle qualité de la cellule :
• Protéines chaperonnes (Hsp70, Hsp60/chaperonines) : elles aident au bon repliement. Ce sont les « coachs » de la cellule.
• Système ubiquitine-protéasome : les protéines irrécupérables sont marquées par l'ubiquitine (une étiquette « à jeter ») et broyées par le protéasome (le « broyeur » cellulaire).
• Autophagie : les gros agrégats de protéines sont détruits par les lysosomes (les « poubelles » de la cellule).

Les inhibiteurs du protéasome (bortézomib) sont utilisés en chimiothérapie. En bloquant le broyeur, on crée un stress toxique dans les cellules cancéreuses. Elles s'étouffent sous leurs propres déchets.

En gros : protéine mal repliée = maladie. La cellule a un système de contrôle qualité, mais il n'est pas infaillible.`
      },
      {
        title: "📐 Cinétique enzymatique : les bases",
        content: `Les enzymes sont des protéines catalytiques (elles accélèrent les réactions chimiques). Comprendre leur vitesse de travail, c'est essentiel en biochimie PASS.

Modèle de Michaelis-Menten :
• Équation : V = (Vmax × [S]) / (Km + [S])
Traduction : la vitesse V de la réaction dépend de la concentration de substrat [S]. Plus il y a de substrat, plus ça va vite, jusqu'à un plafond (Vmax).
• Vmax : c'est la vitesse maximale. Toutes les enzymes sont occupées. Plus de place.
• Km (constante de Michaelis) : c'est la concentration de substrat pour laquelle on atteint la moitié de Vmax (V = Vmax/2).
  → Km faible = l'enzyme « attrape » bien son substrat (haute affinité). C'est un aimant puissant.
  → Km élevé = l'enzyme attrape mal son substrat (faible affinité). C'est un aimant faible.

Représentation de Lineweaver-Burk (double inverse) :
• 1/V = (Km/Vmax) × (1/[S]) + 1/Vmax
Traduction : on inverse tout pour obtenir une droite. C'est plus facile pour lire les valeurs sur un graphique.
• Ordonnée à l'origine = 1/Vmax
• Pente = Km/Vmax

Types d'inhibition :
• Compétitive : l'inhibiteur se met dans le site actif à la place du substrat. C'est comme quelqu'un qui prend ta place assise. Le Km apparent augmente, mais Vmax ne change pas (avec assez de substrat, on peut « chasser » l'inhibiteur).
• Non compétitive : l'inhibiteur se fixe ailleurs (un site allostérique) et change la forme de l'enzyme. Le Km ne change pas, mais Vmax diminue.
• Incompétitive : l'inhibiteur se fixe sur le complexe enzyme-substrat. Le Km ET Vmax diminuent tous les deux.

Astuce QCM : dessine toujours le graphique de Lineweaver-Burk. La compétitive change la pente mais pas l'ordonnée. La non-compétitive change l'ordonnée mais pas l'abscisse.

En gros : V = (Vmax × [S]) / (Km + [S]). Km = affinité. Vmax = vitesse max. 3 types d'inhibition à connaître.`
      },
      {
        title: "🔬 Techniques d'étude des protéines",
        content: `Plein de techniques permettent d'étudier les protéines en labo :

Séparation par taille :
• Électrophorèse SDS-PAGE : le SDS (un détergent) dénature les protéines et leur donne une charge négative uniforme. Ensuite elles migrent dans un gel selon leur masse. Les petites vont plus vite. C'est comme une course : les plus légères courent plus vite.
• Western Blot : après le SDS-PAGE, les protéines sont transférées sur une membrane. On les détecte avec un anticorps spécifique. Ça permet d'identifier UNE protéine précise dans un mélange.

Séparation par charge :
• Électrophorèse sur gel natif : les protéines ne sont PAS dénaturées. Elles migrent selon leur charge ET leur forme.
• Isoélectrofocalisation (IEF) : ça sépare les protéines selon leur point isoélectrique (pI, le pH où la charge nette est nulle).

Chromatographies (des techniques de tri) :
• Échangeuse d'ions : sépare selon la charge.
• Exclusion de taille (gel-filtration) : sépare selon la taille. Les grosses sortent en premier. C'est contre-intuitif !
• Affinité : on utilise un « appât » (ligand) fixé sur la colonne pour « pêcher » une protéine précise. Exemple : colonne Ni-NTA pour les protéines His-tag (marquées avec de l'histidine).

Analyse structurale :
• Cristallographie aux rayons X : donne la structure 3D avec une résolution atomique.
• Cryo-microscopie électronique (cryo-EM) : une révolution récente. Prix Nobel 2017.
• Spectroscopie de masse : donne la masse exacte et la séquence de la protéine.

En QCM, retiens que le SDS-PAGE sépare par MASSE SEULE. Le SDS annule les charges naturelles.

En gros : SDS-PAGE = tri par taille. Western Blot = détection spécifique. Chromatographie d'affinité = pêche à la ligne.`
      },
      {
        title: "🌡️ Dénaturation des protéines",
        content: `La dénaturation, c'est la perte de la structure 3D d'une protéine (les structures secondaire, tertiaire, quaternaire se défont). La séquence primaire (l'ordre des acides aminés) reste intacte. C'est comme défaire un origami : la feuille est toujours là, mais la forme est perdue.

Agents dénaturants (ce qui casse la forme) :
• Chaleur : l'agitation thermique casse les liaisons faibles. La plupart des protéines se dénaturent entre 40 et 80°C.
• pH extrême : ça modifie les charges sur la protéine. Les liaisons ioniques et hydrogène se cassent.
• Détergents (SDS) : ils perturbent les interactions hydrophobes (celles entre les parties « huileuses »).
• Urée et guanidinium : ils cassent les liaisons hydrogène.
• Agents réducteurs (β-mercaptoéthanol, DTT) : ils coupent les ponts disulfure (les « agrafes »).

Dénaturation réversible vs irréversible :
• Réversible : si on revient doucement aux conditions normales, certaines petites protéines (ex : RNase A) peuvent se replier à nouveau. C'est l'expérience d'Anfinsen (Prix Nobel 1972). Ça prouve que la séquence seule détermine la structure.
• Irréversible : si les protéines se collent entre elles (agrégation), c'est foutu. Comme un blanc d'œuf cuit. Impossible de revenir en arrière.

Points clés pour les QCM :
• La dénaturation NE casse PAS les liaisons peptidiques. La structure primaire est conservée.
• Le SDS dénature ET charge négativement. C'est la base du SDS-PAGE.
• La fièvre (>41°C) peut dénaturer certaines enzymes. C'est un danger vital.

En gros : dénaturation = la protéine perd sa forme 3D mais garde sa séquence. Parfois réversible, parfois pas.`
      },
      {
        title: "⚠️ Pièges classiques en QCM",
        content: `• PIÈGE 1 : « La structure primaire suffit pour la fonction » → FAUX. C'est la structure 3D (tertiaire/quaternaire) qui détermine la fonction. La séquence détermine le repliement, qui détermine la fonction. C'est une cascade.
• PIÈGE 2 : « Tous les acides aminés sont chiraux (ont un carbone asymétrique) » → FAUX. La glycine (R = H) n'a pas de carbone asymétrique. Pas de chiralité. C'est l'exception.
• PIÈGE 3 : Confondre structure tertiaire et quaternaire. Tertiaire = la forme 3D d'UNE seule chaîne. Quaternaire = l'assemblage de PLUSIEURS chaînes (sous-unités). L'hémoglobine (α₂β₂, 4 chaînes) a une structure quaternaire. La myoglobine (1 seule chaîne) n'en a pas.
• PIÈGE 4 : « Les ponts disulfure stabilisent la structure secondaire » → FAUX. Ils stabilisent la structure tertiaire (et parfois quaternaire). La structure secondaire est stabilisée par des liaisons hydrogène entre les groupements NH et CO du squelette peptidique.
• PIÈGE 5 : « Km est une mesure directe de l'affinité » → ATTENTION. Km ≈ Kd (constante de dissociation) seulement si k₂ << k₋₁. En pratique, on l'utilise comme indicateur d'affinité, mais c'est pas strictement exact. Ça reste une approximation.
• PIÈGE 6 : « Un inhibiteur compétitif diminue Vmax » → FAUX. Il augmente le Km apparent (il faut plus de substrat pour atteindre la moitié de Vmax) mais Vmax ne change pas. Avec assez de substrat, on peut toujours saturer l'enzyme.

Pour retenir les 4 niveaux : « Séquence → Spirales → Spatial → Société ».

En gros : tertiaire ≠ quaternaire. Km ≈ affinité mais approximation. Compétitif = change Km, pas Vmax.`
      },
    ],
  },

  "Métabolisme énergétique": {
    images: [],
    intro: `Les enzymes sont les catalyseurs du vivant (des accélérateurs de réactions chimiques). Sans elles, les réactions biochimiques seraient des millions de fois trop lentes. La vie serait impossible. Chaque enzyme accélère une réaction précise en abaissant la barrière d'énergie nécessaire. C'est comme creuser un tunnel dans une montagne au lieu de passer par-dessus.

Le métabolisme énergétique, c'est l'ensemble des réactions qui permettent de produire et utiliser l'énergie cellulaire. Cette énergie, c'est principalement de l'ATP.`,
    sections: [
      {
        title: "⚡ L'ATP : la monnaie énergétique",
        content: `L'ATP (adénosine triphosphate, une molécule avec 3 groupes phosphate) est LA molécule d'énergie universelle du vivant. Quand l'ATP perd un phosphate (ATP → ADP), il libère de l'énergie. La cellule utilise cette énergie pour :
• Contracter les muscles
• Transporter des molécules à travers les membranes
• Fabriquer de nouvelles molécules
• Transmettre des signaux

C'est comme une pile rechargeable universelle. Tout fonctionne avec.

Chaque jour, ton corps recycle environ 40 kg d'ATP ! L'ATP est constamment fabriqué (à partir du glucose, des lipides…) et consommé. C'est un cycle permanent, comme recharger et utiliser son téléphone en boucle.

En gros : l'ATP = la pile de la cellule. On en recycle 40 kg par jour.`
      },
      {
        title: "🔬 Comment fonctionnent les enzymes ?",
        content: `Une enzyme, ça marche en 3 étapes simples :
1. Elle reconnaît son substrat (la molécule qu'elle doit transformer) grâce à son site actif (une « poche » 3D). C'est le modèle clé-serrure.
2. Elle abaisse l'énergie d'activation (la barrière d'énergie) de la réaction. C'est comme creuser un tunnel au lieu d'escalader la montagne.
3. Elle libère le produit et elle est prête à recommencer. L'enzyme n'est pas consommée.

La vitesse d'une réaction enzymatique suit la courbe de Michaelis-Menten. Elle augmente avec la concentration de substrat, puis atteint un plateau (Vmax) quand toutes les enzymes sont occupées. C'est comme un resto : plus de clients → plus de plats servis, jusqu'à ce que la cuisine soit pleine.

Deux paramètres clés :
• Vmax = vitesse maximale (quand toutes les enzymes bossent à fond)
• Km = concentration de substrat à laquelle on atteint la moitié de Vmax (c'est une mesure de l'affinité de l'enzyme pour son substrat)

En gros : l'enzyme reconnaît, accélère, libère. Vmax = vitesse max. Km = affinité.`
      },
      {
        title: "🎛️ Régulation des enzymes",
        content: `La cellule peut accélérer ou freiner ses réactions en réglant ses enzymes. C'est un peu comme le thermostat d'un chauffage.

• Inhibiteur compétitif : il se fixe sur le site actif à la place du substrat. C'est un usurpateur qui vole la place.
• Inhibiteur non-compétitif : il se fixe ailleurs sur l'enzyme et change sa forme. L'enzyme marche moins bien. C'est comme tordre une clé : elle ne tourne plus bien dans la serrure.
• Régulation allostérique : des molécules se fixent sur un site spécial (site allostérique) et activent ou inhibent l'enzyme en changeant sa forme. C'est un interrupteur discret.
• Modification covalente : la phosphorylation (ajout d'un groupe phosphate) active ou désactive l'enzyme. C'est un interrupteur on/off.

C'est grâce à cette régulation fine que la cellule adapte son métabolisme en temps réel. Pas besoin de fabriquer de nouvelles enzymes : on ajuste celles qui sont déjà là.

En gros : compétitif = vole la place. Non-compétitif = déforme l'enzyme. Phosphorylation = on/off.`
      },
      {
        title: "🔥 La glycolyse en détail",
        content: `La glycolyse (la « casse du glucose ») est la première voie de dégradation du glucose. Elle a lieu dans le CYTOPLASME de toutes les cellules. Pas besoin d'oxygène !

Bilan global : Glucose (6 carbones) → 2 Pyruvates (3 carbones chacun)
→ Production nette : 2 ATP + 2 NADH (un coenzyme qui transporte de l'énergie)

Les 10 réactions se divisent en 2 phases :

Phase d'investissement (réactions 1-5) :
• Le glucose est phosphorylé deux fois. Ça consomme 2 ATP. On investit de l'énergie.
• Enzymes clés : l'hexokinase (réaction 1) et la phosphofructokinase-1/PFK-1 (réaction 3).
• La PFK-1 = l'enzyme limitante (le goulot d'étranglement) de la glycolyse. C'est le point de contrôle majeur.

Phase de rendement (réactions 6-10) :
• Chaque triose phosphate (×2) produit 2 ATP et 1 NADH.
• Enzyme clé : la pyruvate kinase (réaction 10).

Régulation de la glycolyse :
• PFK-1 est activée par : AMP (signal « je manque d'énergie »), fructose-2,6-bisphosphate/F2,6BP (un activateur puissant).
• PFK-1 est inhibée par : ATP (signal « j'ai assez d'énergie »), citrate.
• L'insuline (hormone du « repas ») stimule la glycolyse. Le glucagon (hormone du « jeûne ») l'inhibe.

Piège QCM : la glycolyse produit 2 ATP net (4 produits - 2 investis). Pas 4 !

En gros : glucose → 2 pyruvates + 2 ATP + 2 NADH. La PFK-1 est l'enzyme clé. Pas besoin d'O₂.`
      },
      {
        title: "🔄 Le cycle de Krebs (cycle de l'acide citrique)",
        content: `Le cycle de Krebs a lieu dans la MATRICE MITOCHONDRIALE (l'intérieur de la mitochondrie, la centrale énergétique de la cellule). Il finit l'oxydation du glucose en transformant l'acétyl-CoA en CO₂.

Étape préalable : le pyruvate (qui vient de la glycolyse dans le cytoplasme) entre dans la mitochondrie. Il est converti en acétyl-CoA par la pyruvate déshydrogénase (PDH) :
→ Pyruvate + CoA + NAD⁺ → Acétyl-CoA + CO₂ + NADH
Traduction : le pyruvate perd un carbone (qui part en CO₂), donne de l'énergie (NADH), et ce qui reste se lie au CoA.

Le cycle en résumé (par tour) :
• L'acétyl-CoA (2 carbones) fusionne avec l'oxaloacétate (4 carbones) pour donner du citrate (6 carbones).
• Puis 8 réactions successives régénèrent l'oxaloacétate. C'est un cycle : ça tourne en boucle.

Bilan d'UN tour de cycle :
• 3 NADH + 1 FADH₂ + 1 GTP (≈ 1 ATP) + 2 CO₂
• Comme 1 glucose donne 2 acétyl-CoA, il faut multiplier par 2 !

Enzymes régulatrices :
• Citrate synthase, isocitrate déshydrogénase, α-cétoglutarate déshydrogénase
• Activées par : ADP, NAD⁺ (signaux « j'ai besoin d'énergie »)
• Inhibées par : ATP, NADH, citrate (signaux « j'ai assez d'énergie »)

Le cycle de Krebs, c'est comme un moulin à énergie. L'acétyl-CoA est le « grain » qui entre. Les coenzymes réduits (NADH, FADH₂) sont la « farine » qui alimentera la chaîne respiratoire.

En gros : le cycle de Krebs = oxydation complète dans la mitochondrie. Produit du NADH et FADH₂ qui serviront à fabriquer plein d'ATP.`
      },
      {
        title: "⚡ La phosphorylation oxydative",
        content: `C'est la voie qui produit le PLUS d'ATP. Elle a lieu dans la MEMBRANE INTERNE de la mitochondrie.

La chaîne respiratoire (4 complexes, comme 4 machines en série) :
• Complexe I (NADH déshydrogénase) : le NADH donne ses électrons. Ça pompe 4 H⁺ (protons) de l'autre côté de la membrane.
• Complexe II (succinate déshydrogénase) : le FADH₂ donne ses électrons. Attention : il ne pompe PAS de H⁺. C'est le complexe « faible ».
• Complexe III (cytochrome bc1) : transfère les électrons au cytochrome c. Ça pompe 4 H⁺.
• Complexe IV (cytochrome c oxydase) : transfère les électrons à l'O₂ → ça donne de l'H₂O (de l'eau). Ça pompe 2 H⁺.

Le gradient de protons (la force motrice) :
• Les complexes I, III et IV pompent des H⁺ de la matrice vers l'espace intermembranaire.
• Ça crée un gradient électrochimique (comme un barrage qui retient l'eau). C'est la force protomotrice.
• L'ATP synthase (complexe V) utilise ce gradient. Les H⁺ redescendent à travers elle comme de l'eau dans une turbine. Ça fabrique de l'ATP (ADP + Pi → ATP).

Bilan énergétique complet pour 1 glucose :
• 1 NADH ≈ 2,5 ATP
• 1 FADH₂ ≈ 1,5 ATP
• Total théorique : ~30-32 ATP par glucose (et non 36-38, selon les calculs récents)

Accepteur final des électrons : l'O₂. C'est pour ça qu'on respire ! Sans O₂, la chaîne s'arrête. Plus d'ATP. La cellule meurt.

Le cyanure est mortel car il bloque le complexe IV. Les électrons ne passent plus. Plus d'ATP. C'est comme couper le courant d'une usine entière.

En gros : NADH et FADH₂ donnent des électrons → la chaîne pompe des H⁺ → l'ATP synthase fabrique de l'ATP. L'O₂ est l'accepteur final.`
      },
      {
        title: "🧪 La fermentation : plan B sans oxygène",
        content: `Quand l'O₂ manque, la cellule utilise la fermentation. Le but : régénérer le NAD⁺ (la forme « vide » du transporteur) pour que la glycolyse continue à tourner. C'est la seule source d'ATP en anaérobie (sans oxygène).

Fermentation lactique :
• Pyruvate + NADH → Lactate + NAD⁺
• Enzyme : lactate déshydrogénase (LDH)
• Où ? Dans les muscles en effort intense, les globules rouges (ils n'ont pas de mitochondries !), certaines bactéries (celles du yaourt).
• Conséquence : le lactate s'accumule. Ça donne la fatigue musculaire et l'acidose (le sang devient trop acide).

Fermentation alcoolique :
• Pyruvate → Acétaldéhyde + CO₂ → Éthanol + NAD⁺
• Chez les levures. C'est la base de la boulangerie (le CO₂ fait lever la pâte) et de la production d'alcool (bière, vin).

Bilan comparatif :
• Glycolyse seule (sans O₂) : 2 ATP par glucose → très peu efficace
• Oxydation complète (avec O₂) : ~30-32 ATP par glucose → 15 fois plus efficace !

Les cellules préfèrent donc la respiration aérobie. La fermentation, c'est un « mode dégradé ». Un plan de secours.

Cas particulier — effet Warburg :
• Les cellules cancéreuses utilisent massivement la glycolyse, même quand il y a de l'O₂ (la « glycolyse aérobie »). C'est bizarre mais c'est comme ça.
• C'est la base du PET-scan : les tumeurs captent plus de glucose marqué (¹⁸F-FDG). On les voit briller à l'imagerie.

En gros : fermentation = mode secours sans O₂. 2 ATP vs 30-32 ATP avec O₂. Les cellules cancéreuses adorent la glycolyse.`
      },
      {
        title: "🏥 Applications médicales et pièges QCM",
        content: `Applications cliniques du métabolisme énergétique :

• Diabète : c'est un défaut de régulation de la glycémie (le taux de sucre dans le sang). L'hyperglycémie chronique (trop de sucre en permanence) abîme les organes. Le type 1 = plus d'insuline (la clé qui ouvre la porte des cellules au glucose). Le type 2 = les cellules ne répondent plus à l'insuline (insulinorésistance).
• Acidose lactique : trop de lactate dans le sang. Ça arrive en cas de choc, d'insuffisance hépatique (le foie ne gère plus), ou de surdosage de metformine.
• Maladies mitochondriales : des défauts génétiques dans les complexes de la chaîne respiratoire. Ça donne des myopathies (maladies musculaires), des encéphalopathies (maladies du cerveau). Exemple : MELAS.
• Poisons métaboliques : le cyanure (bloque le complexe IV), le monoxyde de carbone (bloque l'hémoglobine ET le complexe IV), la roténone (bloque le complexe I), l'antimycine A (bloque le complexe III).

Pièges classiques en QCM :
• PIÈGE 1 : « La glycolyse nécessite de l'oxygène » → FAUX. La glycolyse est anaérobie (pas besoin d'O₂).
• PIÈGE 2 : « Le cycle de Krebs a lieu dans le cytoplasme » → FAUX. Il a lieu dans la matrice mitochondriale.
• PIÈGE 3 : « Le FADH₂ produit autant d'ATP que le NADH » → FAUX. Le NADH ≈ 2,5 ATP. Le FADH₂ ≈ 1,5 ATP. C'est parce que le FADH₂ entre au complexe II, qui ne pompe pas de H⁺.
• PIÈGE 4 : Confondre PFK-1 (l'enzyme de la glycolyse) et PFK-2 (l'enzyme qui fabrique le F2,6BP, l'activateur de PFK-1). Deux noms proches, deux jobs différents.
• PIÈGE 5 : « Les globules rouges font la phosphorylation oxydative » → FAUX. Ils n'ont pas de mitochondries ! Ils vivent uniquement de la glycolyse.

Chiffre clé à retenir : 30-32 ATP par glucose en conditions aérobies.

En gros : glycolyse = cytoplasme, sans O₂. Krebs = mitochondrie. NADH > FADH₂ en terme d'ATP produit.`
      },
    ],
  },

  "Les glucides": {
    images: [],
    intro: `Les glucides (qu'on appelle aussi les « sucres » dans la vie de tous les jours) sont des molécules essentielles. Ils fournissent l'énergie rapide (le glucose, c'est le carburant express de tes cellules). Ils servent aussi de réserve énergétique (le glycogène). Et ils entrent dans la composition de structures biologiques fondamentales (l'ADN contient un sucre, la paroi des cellules végétales aussi).

Tout part d'une formule simple : Cn(H₂O)n. C'est pour ça qu'on les appelle « hydrates de carbone ».
Traduction : des carbones (C) avec de l'eau (H₂O) accrochée dessus.`,
    sections: [
      {
        title: "🍬 Classification des glucides",
        content: `On classe les glucides par taille. Du plus petit au plus gros :

• Monosaccharides (ou oses — les briques de base) : glucose, fructose, galactose (6 carbones chacun), ribose (5 carbones). Ce sont les sucres simples. Le glucose, c'est le carburant n°1 de tes cellules.
• Disaccharides (ou diholosides — 2 oses collés ensemble) : saccharose (glucose + fructose, c'est le sucre de table), lactose (glucose + galactose, c'est le sucre du lait), maltose (glucose + glucose, c'est le sucre du malt).
• Polysaccharides (ou polyholosides — des chaînes de milliers d'oses) : amidon et glycogène (réserve d'énergie, comme un garde-manger), cellulose (structure des plantes, comme la charpente d'une maison).

La liaison entre deux oses s'appelle une liaison osidique (ou glycosidique). C'est la colle qui tient les briques ensemble.

En gros : oses = briques simples. Disaccharides = 2 briques. Polysaccharides = des milliers de briques.`
      },
      {
        title: "🔄 Formes linéaire et cyclique",
        content: `En solution (dans l'eau), les monosaccharides comme le glucose ne restent pas en chaîne ouverte. Ils se referment sur eux-mêmes pour former un cycle. Un cycle à 6 atomes s'appelle un pyranose. Un cycle à 5 atomes s'appelle un furanose.

Le glucose cyclique existe sous deux formes : α-glucose et β-glucose. La différence ? La position du groupement OH sur le carbone 1. En haut ou en bas. Ça paraît rien du tout. Mais ça change TOUT.

L'amidon (avec des liaisons α) est digestible. Tu le manges, tu le digères. La cellulose (avec des liaisons β) ne l'est PAS. Tu manges de la salade, mais tu ne digères pas la cellulose. C'est la même brique (le glucose), mais l'orientation de la liaison change tout. C'est comme tourner une clé dans le bon sens ou le mauvais sens.

En gros : le glucose se cyclise en solution. La position α ou β change les propriétés du polymère.`
      },
      {
        title: "🔑 Ce qu'il faut retenir",
        content: `• Le glucose est le carburant principal des cellules. C'est l'essence de ton corps.
• Le glycogène = la réserve de glucose chez les animaux. Stocké dans le foie et les muscles. C'est le garde-manger à accès rapide.
• L'amidon = la réserve de glucose chez les plantes. C'est dans les patates, le riz, le pain.
• La cellulose = la structure des parois végétales. C'est le « squelette » des plantes.
• Le ribose entre dans la composition de l'ARN. Le désoxyribose dans l'ADN. Pas de sucre = pas d'acides nucléiques.
• Les glycoprotéines (protéines + sucres collés dessus) jouent un rôle clé dans la reconnaissance cellulaire. C'est comme les badges d'identification sur les cellules.

En gros : glucose = carburant. Glycogène = réserve animale. Amidon = réserve végétale. Cellulose = structure végétale.`
      },
      {
        title: "🔀 Stéréochimie des sucres",
        content: `La stéréochimie (l'arrangement des atomes dans l'espace), c'est fondamental pour les glucides. Une même formule brute peut donner des molécules très différentes !

Notions clés :
• Carbone asymétrique (C*) : c'est un carbone lié à 4 groupements différents. Le glucose (6 carbones) possède 4 C*. Ça donne 2⁴ = 16 stéréoisomères possibles (16 arrangements différents).
• Configuration D et L : on regarde la position du OH sur l'avant-dernier carbone dans la projection de Fischer (un dessin standardisé).
  → OH à droite = série D (la plus fréquente dans le vivant)
  → OH à gauche = série L
• Énantiomères : ce sont des images miroir l'un de l'autre. Comme ta main droite et ta main gauche. D-glucose et L-glucose sont énantiomères.
• Épimères : ils ne diffèrent que par la position d'UN SEUL carbone asymétrique. C'est presque pareil, mais pas tout à fait.
  → Glucose et galactose sont épimères en C4.
  → Glucose et mannose sont épimères en C2.
• Anomères α et β : quand le sucre se cyclise, un nouveau C* apparaît (le carbone anomérique = C1 pour les aldoses). OH en dessous du plan = α. OH au-dessus = β.
• Mutarotation : en solution, les formes α et β s'échangent en passant par la forme ouverte. Ça s'équilibre tout seul.

La différence α/β a des conséquences énormes. L'amidon (liaisons α-1,4) est digestible. La cellulose (liaisons β-1,4) ne l'est pas !

Piège QCM : D-glucose ≠ dextrogyre. La notation D/L, c'est une convention de structure (position du OH). Ce n'est PAS le pouvoir rotatoire (+/-).

En gros : la stéréochimie des sucres, c'est l'arrangement 3D des atomes. Ça change tout, même si la formule brute est la même.`
      },
      {
        title: "🔗 Les liaisons osidiques",
        content: `La liaison osidique (ou glycosidique) unit deux oses entre eux. C'est une réaction de condensation (on perd une molécule d'eau pour former la liaison). Comme deux Lego qui s'emboîtent en perdant un petit bout de plastique.

Types de liaisons :
• α(1→4) : liaison entre le C1 (en position α) d'un ose et le C4 du suivant. Ça donne des chaînes linéaires.
  Exemples : maltose, amylose (un composant de l'amidon).
• α(1→6) : ça crée des ramifications (des branches).
  Exemples : les points de branchement du glycogène et de l'amylopectine.
• β(1→4) : liaison entre le C1 (en position β) d'un ose et le C4 du suivant.
  Exemples : cellulose, lactose (galactose β1→4 glucose).
• β(1→2) : exemple : saccharose (glucose α1↔β2 fructose). C'est une liaison particulière. Elle engage les DEUX carbones anomériques. Ça veut dire qu'il n'y a plus de « bout libre ». Conséquence : pas de pouvoir réducteur.

Pouvoir réducteur (la capacité à réduire d'autres molécules) :
• Un ose est réducteur s'il a un carbone anomérique libre (une fonction aldéhyde ou cétone en équilibre).
• Le saccharose n'est PAS réducteur. Les deux anomériques sont engagés dans la liaison. Pas de bout libre.
• Le maltose et le lactose SONT réducteurs. Un anomérique reste libre.

Piège QCM classique : « Le saccharose est un sucre réducteur » → FAUX ! C'est LE contre-exemple à connaître. C'est le chouchou des QCM.

En gros : α(1→4) = linéaire. α(1→6) = branche. Le saccharose n'est PAS réducteur (les deux bouts sont pris).`
      },
      {
        title: "🧬 Glycoprotéines et glycolipides",
        content: `Les sucres ne sont pas que des sources d'énergie. Attachés à des protéines ou des lipides, ils jouent des rôles biologiques essentiels. C'est comme des étiquettes collées sur les cellules.

Glycoprotéines (protéines + chaînes de sucres) :
• N-glycosylation : le sucre est lié à l'azote d'une asparagine (Asn) dans la séquence Asn-X-Ser/Thr (X ≠ Pro). Ça commence dans le RE (réticulum endoplasmique), et ça continue dans le Golgi (un autre atelier de la cellule).
• O-glycosylation : le sucre est lié à l'oxygène d'une sérine ou thréonine. Ça a lieu dans le Golgi.
• Rôles : aider au repliement des protéines, les stabiliser, la reconnaissance cellulaire, la protection contre la destruction. C'est une couche protectrice et un badge d'identité.
• Exemples : les anticorps (IgG), les mucines (protègent les muqueuses, comme le gel dans le nez), les récepteurs membranaires.

Glycolipides (lipides + chaînes de sucres) :
• Cérébrosides : sphingosine + acide gras + 1 sucre (galactose dans le cerveau).
• Gangliosides : sphingosine + acide gras + chaîne de sucres contenant de l'acide sialique (NANA). Reconnus par des toxines et des virus.
• Rôles : composants de la membrane de la cellule. C'est la décoration de surface.

Groupes sanguins ABO — un exemple concret :
• Les groupes sanguins sont déterminés par les sucres ajoutés sur l'antigène H des globules rouges :
  → Groupe A : on ajoute un N-acétylgalactosamine
  → Groupe B : on ajoute un galactose
  → Groupe O : pas d'ajout (l'antigène H reste seul)
  → Groupe AB : on ajoute les deux
La différence entre les groupes sanguins tient à UN SEUL sucre en bout de chaîne ! C'est dingue.

En gros : les sucres sur les protéines et lipides = badges d'identité cellulaire. Les groupes sanguins = juste 1 sucre de différence.`
      },
      {
        title: "🏥 Glucides et diabète",
        content: `Le métabolisme des glucides est au cœur du diabète. C'est la maladie métabolique la plus fréquente au monde.

Régulation normale de la glycémie (le taux de sucre dans le sang) :
• Après un repas : la glycémie monte. Le pancréas sécrète de l'insuline (l'hormone qui dit « stockez le sucre ! »). Les cellules captent le glucose. La glycolyse et la glycogénogenèse (fabrication du glycogène) sont activées. La glycémie redescend.
• À jeun : la glycémie baisse. Le pancréas sécrète du glucagon (l'hormone qui dit « libérez le sucre ! »). La glycogénolyse (destruction du glycogène) et la néoglucogenèse (fabrication de glucose à partir d'autres molécules) sont activées. La glycémie remonte.
• Valeur normale de la glycémie à jeun : 0,7-1,1 g/L (3,9-6,1 mmol/L).

Diabète de type 1 :
• Le système immunitaire détruit les cellules β du pancréas (celles qui fabriquent l'insuline). Plus d'insuline.
• Traitement : injection d'insuline.

Diabète de type 2 :
• Les cellules ne répondent plus bien à l'insuline (insulinorésistance). Les cellules β s'épuisent. La glycémie grimpe.
• Facteurs de risque : obésité, sédentarité, prédisposition génétique. C'est une maladie du mode de vie moderne.
• Traitement : régime, exercice, antidiabétiques oraux (la metformine en 1re ligne), puis insuline si ça ne suffit pas.

Complications du diabète :
• Glycation non enzymatique : le glucose en excès se colle sur les protéines. C'est comme du caramel qui englue les rouages. L'HbA1c (hémoglobine glyquée) reflète la glycémie des 3 derniers mois.
• Microangiopathie (atteinte des petits vaisseaux : rétinopathie, néphropathie), macroangiopathie (athérosclérose), neuropathie (atteinte des nerfs).

L'HbA1c est LE marqueur de suivi du diabète en pratique clinique. C'est le « bulletin trimestriel » du diabétique.

En gros : insuline = « stocke le sucre ». Glucagon = « libère le sucre ». Diabète = ce système est cassé.`
      },
      {
        title: "⚠️ Pièges classiques en QCM",
        content: `• PIÈGE 1 : « Le fructose est un aldose » → FAUX. Le fructose est un cétose (fonction cétone en C2). Le glucose est un aldose (fonction aldéhyde en C1). Aldo = aldéhyde. Céto = cétone.
• PIÈGE 2 : « Le glycogène et l'amidon ont la même structure » → FAUX. Le glycogène est BEAUCOUP plus ramifié que l'amylopectine (branchement tous les 8-12 résidus vs tous les 20-25). Plus de branches = mobilisation plus rapide du glucose.
• PIÈGE 3 : « Tous les disaccharides sont réducteurs » → FAUX. Le saccharose ne l'est pas. Sa liaison α1↔β2 engage les deux anomériques. C'est l'exception classique.
• PIÈGE 4 : « D-glucose = glucose dextrogyre » → ATTENTION. D fait référence à la configuration (position du OH en Fischer). Ça n'a rien à voir avec le pouvoir rotatoire (+/-). Le D-glucose est bien dextrogyre (+), mais c'est une coïncidence, pas une règle.
• PIÈGE 5 : « La cellulose est digérée par l'amylase » → FAUX. L'amylase coupe les liaisons α(1→4). La cellulose a des liaisons β(1→4). Il faudrait une cellulase. Et on n'en a pas chez l'Homme.
• PIÈGE 6 : Confondre glycogénolyse (destruction du glycogène) et glycolyse (destruction du glucose). Deux noms proches. Deux voies différentes. La glycogénolyse libère du glucose à partir du glycogène. La glycolyse dégrade le glucose.

Astuce : « Aldo = Aldéhyde en C1, Céto = Cétone en C2 ».

En gros : saccharose = non réducteur. D ≠ dextrogyre. Amylase ≠ cellulase. Glycogénolyse ≠ glycolyse.`
      },
    ],
  },

  "Les lipides": {
    images: [
      { file: "glucides-et-lipides-illus-33.webp", caption: "La membrane cellulaire : bicouche de phospholipides avec cholestérol et protéines (tout en français)." },
    ],
    intro: `Les lipides, ce sont les molécules « grasses » du vivant. Ils sont insolubles dans l'eau (comme l'huile dans une vinaigrette) mais solubles dans les solvants organiques. Loin d'être juste de la graisse inutile, ils jouent des rôles absolument essentiels : construire les membranes cellulaires, signaler des messages, isoler du froid, et stocker de l'énergie concentrée.`,
    sections: [
      {
        title: "📋 Les grandes familles de lipides",
        content: `• Acides gras : ce sont des chaînes de carbones avec un groupe acide (-COOH) au bout. Saturés (pas de double liaison, droits, solides comme le beurre) ou insaturés (avec des doubles liaisons, avec des coudes, liquides comme l'huile d'olive).
• Triglycérides : 3 acides gras + glycérol (un petit alcool). C'est la forme de stockage de l'énergie dans le tissu adipeux (la graisse). Ton garde-manger longue durée.
• Phospholipides : 2 acides gras + glycérol + phosphate + tête polaire (qui aime l'eau). C'est le composant principal des membranes cellulaires. La brique de base du mur de la cellule.
• Stéroïdes : ce sont des molécules à 4 cycles carbonés. Le cholestérol est le plus connu. Il est le précurseur (le point de départ) des hormones stéroïdiennes (cortisol, testostérone, œstrogènes) et de la vitamine D.

En gros : acides gras = les chaînes. Triglycérides = stockage. Phospholipides = membranes. Stéroïdes = cholestérol et hormones.`
      },
      {
        title: "🧱 La membrane cellulaire",
        content: `La membrane de la cellule est une bicouche de phospholipides (deux couches dos-à-dos). Les têtes hydrophiles (qui aiment l'eau) sont vers l'extérieur. Les queues hydrophobes (qui fuient l'eau) sont vers l'intérieur. C'est comme un sandwich : le pain (têtes) à l'extérieur, la garniture (queues grasses) à l'intérieur.

C'est le modèle de la « mosaïque fluide ». Les phospholipides bougent librement dans la membrane. Comme des barques sur un lac. Le cholestérol s'intercale entre eux pour rigidifier ou fluidifier la membrane selon la température. C'est le thermostat de la membrane.

Des protéines membranaires sont enchâssées dans cette bicouche. Ce sont les transporteurs, récepteurs, canaux ioniques… C'est comme des fenêtres et des portes dans un mur.

En gros : la membrane = bicouche de phospholipides. Fluide comme un lac. Avec des protéines dedans.`
      },
      {
        title: "🔑 Glucides vs Lipides : le duo énergétique",
        content: `Les glucides fournissent une énergie rapide. Le glucose donne de l'ATP en quelques secondes. Mais les glucides stockent peu d'énergie.
Les lipides fournissent une énergie lente mais très concentrée : 1g de lipide = 9 kcal vs 4 kcal pour 1g de glucide. C'est plus du double !

C'est comme comparer de l'allume-feu (glucose, ça flambe vite) et une bûche (lipides, ça brûle longtemps).

Le corps utilise d'abord le glucose (l'énergie rapide). Puis il puise dans les réserves de glycogène (le garde-manger rapide). Et enfin, il mobilise les graisses pour les efforts prolongés. C'est pour ça que les marathoniens « brûlent » du gras.

En gros : glucides = énergie rapide, peu de stock. Lipides = énergie lente, beaucoup de stock.`
      },
      {
        title: "🧪 Acides gras : types et nomenclature",
        content: `Les acides gras sont les briques élémentaires des lipides. Ce sont de longues chaînes de carbones avec un groupe carboxylique (-COOH) au bout.

Classification :
• Saturés : aucune double liaison C=C. La chaîne est toute droite. Ils sont solides à température ambiante.
  Exemples : acide palmitique (C16:0), acide stéarique (C18:0). Dans le beurre, la viande.
• Monoinsaturés : 1 double liaison. Ça crée un coude dans la chaîne (en configuration cis).
  Exemple : acide oléique (C18:1 Δ9, oméga-9). Dans l'huile d'olive.
• Polyinsaturés : 2 doubles liaisons ou plus. Plusieurs coudes.
  Exemples : acide linoléique (C18:2, oméga-6), acide α-linolénique (C18:3, oméga-3).

Nomenclature (comment les nommer) :
• Cn:x = n carbones, x doubles liaisons.
• Δ = position de la double liaison depuis le bout carboxyle (le bout acide).
• Oméga (ω ou n-) = position depuis le bout méthyle (le bout opposé).
  → Oméga-3 : dernière double liaison sur le 3e carbone depuis la fin.
  → Oméga-6 : dernière double liaison sur le 6e carbone depuis la fin.

Acides gras essentiels (on ne peut pas les fabriquer, il faut les manger) :
• Acide linoléique (oméga-6) — précurseur de l'acide arachidonique
• Acide α-linolénique (oméga-3) — précurseur de l'EPA et du DHA

Configuration cis vs trans : les acides gras naturels sont en cis (avec un coude). Les acides gras trans (issus de l'industrie, par hydrogénation) sont droits comme les saturés. Et ils augmentent le risque cardiovasculaire. C'est pour ça que les « acides gras trans » sont les méchants de la nutrition.

En gros : saturé = droit = solide. Insaturé = coude = liquide. Oméga-3 et 6 = essentiels = à manger.`
      },
      {
        title: "🔬 Eicosanoïdes : les messagers lipidiques",
        content: `Les eicosanoïdes (du grec eicosa = 20) sont des dérivés des acides gras polyinsaturés à 20 carbones. Principalement l'acide arachidonique (un oméga-6). Ce sont de puissants messagers locaux.

La cascade de l'acide arachidonique :
• La phospholipase A2 (PLA2) libère l'acide arachidonique des phospholipides de la membrane. C'est le point de départ.
• Voie des cyclooxygénases (COX) → ça produit :
  → Prostaglandines (PGE2, PGI2) : douleur, fièvre, inflammation, protection de l'estomac, vasodilatation (ouverture des vaisseaux).
  → Thromboxanes (TXA2) : agrégation des plaquettes (ça forme des caillots), vasoconstriction (fermeture des vaisseaux).
• Voie des lipoxygénases (LOX) → ça produit :
  → Leucotriènes (LTB4, LTC4) : bronchoconstriction (serrage des bronches), inflammation, chimiotactisme des leucocytes (attirer les globules blancs).

Applications pharmacologiques majeures :
• Aspirine (un AINS, anti-inflammatoire non stéroïdien) : elle inhibe COX-1 et COX-2 de façon IRRÉVERSIBLE (elle acétyle l'enzyme). C'est un anti-inflammatoire, antipyrétique (contre la fièvre), et antiagrégant plaquettaire (empêche les caillots) à faible dose.
• Ibuprofène, naproxène : des inhibiteurs RÉVERSIBLES de COX. Anti-inflammatoires courants.
• Corticoïdes : ils inhibent la PLA2 (via la lipocortine). Ça bloque TOUTE la cascade en amont. C'est l'artillerie lourde.
• Montélukast : antagoniste des récepteurs des leucotriènes. Utilisé pour l'asthme.

Piège QCM : l'aspirine inhibe COX de façon IRRÉVERSIBLE (par acétylation). Les autres AINS sont réversibles. C'est la différence clé.

En gros : acide arachidonique → prostaglandines (douleur, fièvre) et leucotriènes (bronches). L'aspirine bloque ça de façon irréversible.`
      },
      {
        title: "🚚 Lipoprotéines : le transport des lipides",
        content: `Les lipides sont insolubles dans l'eau. Ils ont besoin de « taxis » pour circuler dans le sang. Ces taxis, ce sont les lipoprotéines.

Structure d'une lipoprotéine :
• Cœur hydrophobe (qui fuit l'eau) : triglycérides + esters de cholestérol
• Surface amphiphile (un côté eau, un côté gras) : phospholipides + cholestérol libre + apolipoprotéines (des protéines d'adressage, les « GPS »)

Les grandes classes (par densité croissante, comme des couches dans un verre) :
• Chylomicrons : transportent les lipides alimentaires (ce que tu manges) de l'intestin vers les tissus. Très riches en triglycérides (TG). Apo B-48.
• VLDL (Very Low Density) : transportent les TG fabriqués par le foie vers les tissus. Apo B-100.
• LDL (Low Density) : transportent le cholestérol vers les tissus. Apo B-100. → C'est le « mauvais cholestérol » (il s'accumule dans les artères).
• HDL (High Density) : ramènent le cholestérol des tissus vers le foie (transport inverse). Apo A-I. → C'est le « bon cholestérol » (il nettoie les artères).

Valeurs normales à connaître :
• Cholestérol total : < 2 g/L (5,2 mmol/L)
• LDL-cholestérol : < 1,6 g/L (objectifs plus bas si le patient est à risque)
• HDL-cholestérol : > 0,4 g/L chez l'homme, > 0,5 g/L chez la femme
• Triglycérides : < 1,5 g/L

Astuce : LDL = « Lousy » (mauvais, ça bouche). HDL = « Healthy » (bon, ça nettoie).

En gros : les lipoprotéines = taxis pour lipides. LDL = mauvais (bouche les artères). HDL = bon (nettoie les artères).`
      },
      {
        title: "🫀 Athérosclérose : quand les lipides bouchent les artères",
        content: `L'athérosclérose, c'est quand les lipides s'accumulent dans la paroi des artères et les bouchent. C'est la première cause de mortalité dans les pays développés.

Mécanisme simplifié (étape par étape) :
1. L'endothélium (la paroi interne de l'artère) est abîmé. Par le tabac, l'hypertension, le diabète.
2. Les LDL s'infiltrent dans la paroi et s'oxydent (elles « rouillent »).
3. Les LDL oxydées sont mangées par les macrophages (les « éboueurs » du système immunitaire). Ils se gonflent de cholestérol et deviennent des cellules spumeuses (des cellules pleines de gras, comme des éponges).
4. Ça s'accumule peu à peu. Ça forme la plaque d'athérome (stries lipidiques → plaque fibreuse → plaque compliquée).
5. Si la plaque se rompt → thrombose (caillot) → infarctus du myocarde (crise cardiaque) ou AVC.

Facteurs de risque :
• LDL élevé, HDL bas, tabac, hypertension, diabète, obésité, sédentarité, antécédents familiaux.

Traitements hypolipémiants (qui baissent les lipides) :
• Statines (atorvastatine, rosuvastatine) : elles inhibent l'HMG-CoA réductase. C'est l'enzyme clé de la fabrication du cholestérol. Ça baisse le LDL de 30-50%.
• Ézétimibe : bloque l'absorption du cholestérol dans l'intestin.
• Fibrates : baissent les triglycérides. Ils activent PPARα (un récepteur nucléaire).
• Inhibiteurs de PCSK9 (évolocumab) : augmentent le nombre de récepteurs LDL sur les cellules. Ça capte plus de LDL du sang. Grosse baisse du LDL.

Les statines sont parmi les médicaments les plus prescrits au monde. Leur cible, l'HMG-CoA réductase, c'est l'enzyme limitante (le goulot d'étranglement) de la synthèse du cholestérol.

En gros : LDL oxydé → plaque dans l'artère → crise cardiaque ou AVC. Les statines baissent le cholestérol.`
      },
      {
        title: "⚠️ Pièges classiques en QCM",
        content: `• PIÈGE 1 : « Les acides gras insaturés sont solides à température ambiante » → FAUX. C'est l'inverse. Les insaturés (huiles) sont liquides. Les saturés (beurre) sont solides. Les doubles liaisons cis créent des coudes qui empêchent les chaînes de s'empiler. Ça baisse le point de fusion.
• PIÈGE 2 : « Le cholestérol est un lipide à éviter » → FAUX. Le cholestérol est essentiel. Il entre dans les membranes, il sert à fabriquer les hormones stéroïdiennes (cortisol, testostérone, œstrogènes), la vitamine D et les acides biliaires (pour digérer les graisses). C'est l'EXCÈS qui pose problème.
• PIÈGE 3 : Confondre phospholipides et triglycérides. Phospholipide = 2 AG + glycérol + phosphate + tête polaire (amphiphile → membranes). Triglycéride = 3 AG + glycérol (hydrophobe → stockage). 2 queues + tête polaire = membrane. 3 queues = graisse.
• PIÈGE 4 : « Les sphingolipides contiennent du glycérol » → FAUX. Leur squelette, c'est la sphingosine (un aminoalcool à longue chaîne), pas le glycérol. Exemples : sphingomyéline, cérébrosides, gangliosides.
• PIÈGE 5 : « Les HDL transportent le cholestérol vers les tissus » → FAUX. C'est l'inverse. Les HDL font le transport INVERSE du cholestérol (des tissus vers le foie pour élimination). HDL = nettoyeur.
• PIÈGE 6 : « L'aspirine inhibe réversiblement les COX » → FAUX. L'aspirine acétyle la sérine du site actif de COX de façon IRRÉVERSIBLE. Les autres AINS sont réversibles.

Astuce pour les lipoprotéines (taille décroissante, densité croissante) : « Ce Vilain LDL Harcèle » → Chylomicrons > VLDL > LDL > HDL.

En gros : insaturé = liquide. Cholestérol = essentiel (mais l'excès est dangereux). HDL = bon. Aspirine = irréversible sur COX.`
      },
    ],
  },

  "Introduction à la biochimie": {
    images: [],
    intro: `La biochimie, c'est la chimie du vivant. Elle étudie les molécules qui composent les êtres vivants. Et les réactions chimiques qui les animent. C'est le pont entre la chimie et la biologie.

En PASS/LAS, la biochimie est une matière incontournable. Ce chapitre d'introduction pose les bases. Quelles sont les grandes familles de molécules du vivant ? Comment s'organisent les réactions métaboliques ? C'est la fondation sur laquelle tout le reste est construit.`,
    sections: [
      {
        title: "🧩 Les 4 grandes familles de biomolécules",
        content: `Tout le vivant est construit à partir de 4 types de molécules. C'est comme les 4 ingrédients de base d'une cuisine :

• Protéines : les « ouvrières » de la cellule. Enzymes (qui accélèrent les réactions), hormones (qui envoient des messages), anticorps (qui défendent), structures (qui soutiennent). Elles sont faites d'acides aminés (les briques).
• Acides nucléiques : ils stockent l'info génétique (ADN, ta clé USB) et la transmettent (ARN, ta copie de travail). Ils sont faits de nucléotides (les briques).
• Glucides : ils fournissent l'énergie rapide (glucose, le carburant express) et les structures (cellulose, le squelette des plantes). Ils sont faits d'oses (des sucres simples).
• Lipides : ils forment les membranes (phospholipides), stockent l'énergie longue durée (graisses), et servent à la signalisation (hormones stéroïdiennes). Ils sont insolubles dans l'eau.

Chaque famille a ses « briques » élémentaires (les monomères) qui s'assemblent en grandes molécules (les polymères). C'est comme des Lego : une brique seule c'est un monomère, la construction finale c'est un polymère.

En gros : 4 familles = protéines, acides nucléiques, glucides, lipides. Tout le vivant est fait avec ça.`
      },
      {
        title: "⚡ Le métabolisme : construire et détruire",
        content: `Le métabolisme, c'est l'ensemble de toutes les réactions chimiques de la cellule. C'est la cuisine moléculaire qui tourne 24h/24. Il se divise en deux voies :

• Catabolisme : ça détruit les grosses molécules en petites. Ça libère de l'énergie. C'est comme brûler du bois pour se chauffer. Exemple : dégradation du glucose → ATP.
• Anabolisme : ça construit des grosses molécules à partir de petites. Ça consomme de l'énergie. C'est comme utiliser des briques pour construire un mur. Exemple : synthèse de protéines à partir d'acides aminés.

Ces réactions sont organisées en « voies métaboliques ». C'est des chaînes de réactions. Le produit de l'une est le substrat (la matière première) de la suivante. Chaque étape est accélérée par une enzyme spécifique. C'est une chaîne de montage, comme dans une usine.

En gros : catabolisme = casser pour récupérer de l'énergie. Anabolisme = construire en dépensant de l'énergie.`
      },
      {
        title: "🔑 Pourquoi la biochimie est essentielle en médecine",
        content: `Comprendre la biochimie, c'est comprendre :
• Comment le corps produit son énergie (le glucose → ATP, c'est le carburant)
• Comment les médicaments agissent au niveau des molécules (l'aspirine bloque une enzyme, les antibiotiques bloquent les ribosomes bactériens)
• Pourquoi certaines mutations causent des maladies métaboliques (un gène cassé → une enzyme manquante → une voie bloquée)
• Comment marchent les tests diagnostiques (la glycémie mesure le glucose dans le sang, le bilan lipidique mesure le cholestérol et les triglycérides)

La biochimie, c'est la base de la pharmacologie (l'étude des médicaments), de la nutrition, et de la compréhension des maladies métaboliques (diabète, obésité, maladies génétiques). Sans biochimie, un médecin ne comprend pas ce qu'il prescrit.

En gros : la biochimie explique le fonctionnement du corps au niveau moléculaire. C'est indispensable pour comprendre les maladies et les traitements.`
      },
      {
        title: "💧 L'eau : le solvant de la vie",
        content: `L'eau représente 60 à 70% de la masse de ton corps. Ses propriétés sont uniques. Elles sont à la base de toute la biochimie.

Propriétés essentielles :
• Molécule polaire : l'oxygène attire plus les électrons que l'hydrogène. Ça crée un moment dipolaire (un côté + et un côté -). Ça permet à l'eau de dissoudre les molécules polaires et ioniques (les sels, le sucre).
• Liaisons hydrogène : chaque molécule d'eau peut former jusqu'à 4 liaisons H avec ses voisines. C'est comme se tenir par les mains. Conséquences :
  → Haute capacité calorifique (l'eau tamponne les variations de température. C'est pour ça que ton corps reste à 37°C)
  → Haute chaleur de vaporisation (la transpiration refroidit efficacement. L'eau qui s'évapore emporte de la chaleur)
  → Haute tension de surface (les molécules d'eau se collent entre elles en surface. C'est pour ça qu'un insecte peut marcher sur l'eau)
  → Densité max à 4°C (la glace flotte. Ça protège les lacs en hiver)

L'effet hydrophobe :
• Les molécules non polaires (les graisses, les lipides) ne peuvent pas interagir avec l'eau. Elles se regroupent entre elles pour minimiser le contact. C'est le moteur du repliement des protéines et de la formation des membranes.
• C'est comme une goutte d'huile dans l'eau. Elle forme spontanément une sphère.

Eau liée vs eau libre :
• Eau liée : fixée aux protéines et aux ions par des liaisons H. C'est la couche d'hydratation.
• Eau libre : circule librement. Participe aux réactions biochimiques.

L'eau n'est pas un solvant « passif ». Elle participe activement aux réactions (hydrolyse = casser avec de l'eau, condensation = coller en libérant de l'eau). Sa structure influence la forme de toutes les biomolécules.

En gros : l'eau = 60-70% de ton corps. Polaire, liaisons H, effet hydrophobe. Pas juste un solvant passif.`
      },
      {
        title: "🤝 Les liaisons faibles en biochimie",
        content: `En biochimie, ce sont les liaisons FAIBLES (non covalentes) qui déterminent la forme et la fonction des biomolécules. Elles sont faibles individuellement. Mais collectivement, elles sont puissantes. C'est comme les fils d'une toile d'araignée : un fil seul est fragile, mais la toile entière est solide.

Les 4 types de liaisons faibles :
• Liaisons hydrogène : entre un H lié à un atome qui attire les électrons (O, N) et un autre atome du même type. Énergie : 4-20 kJ/mol.
  → Exemples : appariement des bases dans l'ADN (A=T : 2 liaisons H, G≡C : 3 liaisons H), structure secondaire des protéines.
• Interactions ioniques (électrostatiques) : entre des charges opposées (ex : -COO⁻ et -NH₃⁺). Énergie : 20-40 kJ/mol. Le + attire le -.
  → Stabilisent les structures tertiaire et quaternaire des protéines.
• Interactions de Van der Waals : des attractions faibles entre tous les atomes quand ils sont très proches. Énergie : 2-4 kJ/mol. Faibles une par une, mais très nombreuses. Au total, ça compte beaucoup.
• Interactions hydrophobes : les parties non polaires (huileuses) de la molécule se regroupent pour fuir l'eau. C'est pas vraiment une « liaison ». C'est un effet entropique (lié au désordre). Mais c'est le moteur principal du repliement des protéines.

Comparaison avec les liaisons covalentes :
• Liaison covalente : 200-400 kJ/mol. C'est du costaud. Structure primaire, liaisons peptidiques, liaisons osidiques.
• Liaisons faibles : 2-40 kJ/mol. C'est souple. Structures secondaire, tertiaire, quaternaire, interactions enzyme-substrat, reconnaissance antigène-anticorps.

Point clé : c'est la SOMME de plein de liaisons faibles qui assure la stabilité des structures biologiques. Tout en gardant de la flexibilité et de la réversibilité. C'est essentiel pour la régulation.

En gros : les liaisons faibles = faibles seules, mais puissantes ensemble. Elles déterminent la forme 3D des molécules.`
      },
      {
        title: "⚗️ pH et systèmes tampons",
        content: `Le pH est fondamental en biochimie. Il influence la charge et la forme de toutes les biomolécules.

Rappels :
• pH = -log[H⁺].
Traduction : le pH mesure l'acidité. Plus il y a de H⁺ (protons), plus le pH est bas (acide).
• À 25°C : pH 7 = neutre, pH < 7 = acide, pH > 7 = basique.
• pH sanguin normal : 7,35-7,45 (légèrement basique). Une petite variation est dangereuse :
  → pH < 7,35 = acidose (le sang est trop acide). pH < 6,8 = mort.
  → pH > 7,45 = alcalose (le sang est trop basique). pH > 7,8 = mort.

Équation de Henderson-Hasselbalch :
• pH = pKa + log([A⁻]/[AH])
Traduction : le pH dépend du rapport entre la forme basique [A⁻] (qui a perdu son H⁺) et la forme acide [AH] (qui a gardé son H⁺). Le pKa, c'est le pH pour lequel les deux formes sont en quantité égale.
• Au pKa : [A⁻] = [AH] → pouvoir tampon maximal (la solution résiste le mieux aux changements de pH).
• Un tampon est efficace dans la zone pKa ± 1.

Les systèmes tampons du corps (ceux qui maintiennent le pH stable) :
• Tampon bicarbonate (le plus important dans le sang) :
  CO₂ + H₂O ⇌ H₂CO₃ ⇌ H⁺ + HCO₃⁻
  pKa ≈ 6,1. Malgré un pKa loin de 7,4, il est efficace parce que le CO₂ est éliminé par les poumons (système ouvert). C'est comme une fenêtre ouverte qui évacue en permanence.
• Tampon phosphate : H₂PO₄⁻/HPO₄²⁻ (pKa = 6,8). Important dans les cellules et les urines.
• Tampon protéines : les groupements ionisables des acides aminés (l'histidine notamment, pKa ≈ 6,0) tamponnent le pH à l'intérieur des cellules. L'hémoglobine est un tampon majeur dans le sang.

En QCM, retiens l'équation de Henderson-Hasselbalch et les 3 systèmes tampons principaux. La régulation du pH, c'est un sujet qu'on retrouve partout (biochimie, physiologie, pharmacologie).

En gros : le pH sanguin = 7,35-7,45. Les tampons (bicarbonate, phosphate, protéines) empêchent le pH de bouger. Henderson-Hasselbalch = la formule magique.`
      },
      {
        title: "🔥 Bases de thermodynamique biochimique",
        content: `La thermodynamique, ça permet de savoir si une réaction va se faire spontanément ou pas.

Concepts clés :
• Enthalpie libre de Gibbs (ΔG) : ça détermine si la réaction est spontanée.
  → ΔG < 0 : réaction exergonique (spontanée, libère de l'énergie). C'est une balle qui roule en descente. Exemple : la glycolyse.
  → ΔG > 0 : réaction endergonique (non spontanée, il faut fournir de l'énergie). C'est une balle qui doit monter une côte. Exemple : la synthèse protéique.
  → ΔG = 0 : équilibre. La balle est sur du plat.
• ΔG° (standard) vs ΔG (réel) : le ΔG réel dépend aussi des concentrations réelles des réactifs et produits.
  → ΔG = ΔG° + RT ln(Q) où Q = rapport des concentrations.
  Traduction : le ΔG réel c'est le ΔG standard ajusté par ce qui se passe vraiment dans la cellule.
• ΔG°' : c'est le ΔG° dans les conditions biochimiques standard (pH 7, 25°C, 1 atm).

Le couplage énergétique :
• Une réaction endergonique (qui ne se fait pas toute seule) peut avoir lieu si elle est couplée à une réaction exergonique (qui libère de l'énergie).
• L'hydrolyse de l'ATP (ATP → ADP + Pi) est la réaction de couplage la plus fréquente :
  ΔG°' ≈ -30,5 kJ/mol
  Traduction : quand l'ATP perd un phosphate, ça libère 30,5 kJ d'énergie. C'est cette énergie qui sert à « payer » les réactions qui ne se feraient pas toutes seules.
• Exemple : la phosphorylation du glucose (ΔG°' = +13,8 kJ/mol, ça ne se fait pas tout seul) est couplée à l'hydrolyse de l'ATP. Réaction globale : ΔG°' = -16,7 kJ/mol → spontanée ! L'ATP a « payé » la note.

Rôle des enzymes :
• Les enzymes NE changent PAS le ΔG de la réaction. Elles ne changent pas la thermodynamique.
• Elles abaissent l'énergie d'activation (Ea). La réaction est plus RAPIDE, mais pas plus spontanée. C'est creuser un tunnel dans la montagne : la destination est la même, mais on y arrive plus vite.

Piège QCM majeur : « Les enzymes rendent les réactions spontanées » → FAUX. Si ΔG > 0, la réaction ne sera jamais spontanée, même avec une enzyme. L'enzyme accélère les réactions qui sont DÉJÀ favorables.

En gros : ΔG < 0 = ça se fait tout seul. ΔG > 0 = il faut de l'énergie (l'ATP). Les enzymes accélèrent, mais ne changent pas le ΔG.`
      },
      {
        title: "⚠️ Pièges classiques en QCM",
        content: `• PIÈGE 1 : « L'eau est un solvant universel » → FAUX. L'eau ne dissout pas les molécules non polaires (lipides, huiles). Elle dissout les molécules polaires et ioniques (sels, sucres).
• PIÈGE 2 : « Le pH est de 7 dans le corps humain » → FAUX. Le pH sanguin est de 7,35-7,45. Et le pH varie selon les endroits : estomac (pH 1-2, très acide), urine (pH 5-7), intestin (pH 8, plutôt basique).
• PIÈGE 3 : « Une enzyme change le ΔG de la réaction » → FAUX. Elle abaisse l'énergie d'activation (c'est de la cinétique), pas le ΔG (c'est de la thermodynamique). La position d'équilibre n'est pas modifiée.
• PIÈGE 4 : « Les liaisons hydrogène sont des liaisons covalentes » → FAUX. Ce sont des liaisons faibles (~10-20 kJ/mol vs ~350 kJ/mol pour une covalente). Elles se forment et se cassent facilement.
• PIÈGE 5 : Confondre catabolisme et anabolisme. Catabolisme = dégradation (exergonique, produit de l'ATP). C'est casser. Anabolisme = synthèse (endergonique, consomme de l'ATP). C'est construire.
• PIÈGE 6 : « L'ATP est riche en énergie parce qu'elle a des liaisons phosphoanhydride fortes » → FAUX. C'est l'inverse. Les liaisons phosphoanhydride de l'ATP sont des liaisons à HAUTE ÉNERGIE D'HYDROLYSE (instables → libèrent beaucoup d'énergie quand elles sont rompues). C'est PARCE QU'elles sont instables que la rupture libère de l'énergie.

Vue d'ensemble : la biochimie repose sur 3 piliers — l'eau (le milieu), les liaisons faibles (les interactions), et la thermodynamique (le moteur). Maîtrise ces bases et le reste suivra.

En gros : l'eau ne dissout pas tout. pH sanguin = 7,4. Les enzymes accélèrent mais ne changent pas le ΔG. L'ATP libère de l'énergie parce que ses liaisons phosphate sont instables.`
      },
    ],
  },
};

export default FICHE_CURATED;
