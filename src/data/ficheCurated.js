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
    intro: `Imagine que chacune de tes cellules contient un véritable « livre d'instructions » de 3 milliards de lettres. Ce livre, c'est ton génome — l'ensemble de ton ADN. Chez l'Homme, il est réparti sur 46 chromosomes (23 paires), rangés dans le noyau de chaque cellule.

Mais attention : seule une toute petite partie de ce livre (moins de 10%) code réellement pour des protéines. Le reste ? Des séquences régulatrices, des répétitions, et des zones dont on comprend encore mal le rôle.`,
    sections: [
      {
        title: "🧬 Comment est organisé le génome ?",
        content: `L'ADN ne flotte pas en vrac dans le noyau : il est super-enroulé autour de protéines appelées histones, formant des « nucléosomes » (comme du fil enroulé sur des bobines). Cet ensemble ADN + histones s'appelle la chromatine.

Quand la cellule doit se diviser, la chromatine se condense encore plus pour former les chromosomes qu'on voit au microscope.

À retenir :
• 46 chromosomes = 22 paires d'autosomes + 2 chromosomes sexuels (XX ou XY)
• 1 chromosome = 1 très longue molécule d'ADN compactée
• Environ 25 000 gènes sur 3 milliards de paires de bases`
      },
      {
        title: "📊 Les chiffres qui comptent",
        content: `• 3 milliards de paires de bases dans le génome humain
• ~25 000 gènes (bien moins que ce qu'on pensait !)
• Moins de 2% du génome code pour des protéines
• 45% du génome = séquences répétitives (transposons)
• 99,9% du génome est identique entre deux humains — la différence tient à 0,1% !`
      },
      {
        title: "🔑 Ce qu'il faut absolument retenir",
        content: `Le génome, c'est TOUTE l'information héréditaire d'un organisme. Chez nous, c'est un texte géant de 3 milliards de lettres (A, T, C, G), réparti sur 46 chromosomes. La majorité ne code pas pour des protéines — c'est un des grands mystères de la biologie moderne.

Vocabulaire clé : locus (position sur un chromosome), allèles (variantes d'un gène), nucléosome (ADN + histones), transposons (éléments mobiles du génome).`
      },
    ],
  },

  "Structure des acides nucléiques": {
    images: [
      { file: "acides-nucleiques-et-structure-des-genomes-illus-01.webp", caption: "La double hélice d'ADN : deux brins enroulés l'un autour de l'autre, reliés par les paires de bases." },
    ],
    intro: `L'ADN et l'ARN sont les deux types d'acides nucléiques. Ce sont les molécules qui stockent et transmettent l'information génétique. L'ADN est ta « clé USB » permanente, l'ARN est la « copie de travail » temporaire.

Leur structure est élégante : deux brins enroulés en double hélice pour l'ADN, un seul brin pour l'ARN. Comprendre leur architecture, c'est comprendre le fondement de toute la biologie.`,
    sections: [
      {
        title: "🧱 Les briques de base : les nucléotides",
        content: `Chaque acide nucléique est une chaîne de nucléotides. Un nucléotide = 3 éléments :
• Un sucre (désoxyribose pour l'ADN, ribose pour l'ARN)
• Un groupement phosphate
• Une base azotée (A, T, C, G pour l'ADN ; A, U, C, G pour l'ARN)

Les bases s'apparient toujours de la même façon :
→ A avec T (ADN) ou A avec U (ARN)
→ C avec G
C'est la règle de complémentarité de Chargaff, et c'est ce qui permet à l'ADN de se copier fidèlement.`
      },
      {
        title: "🌀 La double hélice",
        content: `Découverte en 1953 par Watson et Crick, la double hélice d'ADN est une des structures les plus iconiques de la science. Deux brins antiparallèles s'enroulent l'un autour de l'autre, reliés par des liaisons hydrogène entre les bases complémentaires.

Points essentiels :
• Les deux brins vont en sens opposé (5'→3' et 3'→5')
• Les bases sont à l'intérieur, le squelette sucre-phosphate à l'extérieur
• La double hélice fait un tour complet tous les 10 nucléotides (~3,4 nm)`
      },
      {
        title: "🔑 ADN vs ARN — les différences clés",
        content: `ADN : double brin, désoxyribose, bases A-T-C-G, stable, dans le noyau
ARN : simple brin, ribose, bases A-U-C-G, éphémère, sort du noyau

L'ARN existe sous plusieurs formes : ARNm (messager, copie d'un gène), ARNt (transfert, apporte les acides aminés), ARNr (ribosomal, structure du ribosome). Chacun a un rôle précis dans la fabrication des protéines.`
      },
    ],
  },

  "La réplication de l'ADN": {
    images: [
      { file: "replication-illus-04.webp", caption: "Réplication : la double hélice se sépare et chaque brin sert de modèle pour fabriquer un nouveau brin (en rouge)." },
      { file: "replication-illus-18.webp", caption: "Les télomères raccourcissent à chaque division cellulaire → vieillissement de la cellule." },
    ],
    intro: `Avant chaque division cellulaire, la cellule doit copier l'intégralité de son ADN. Ce processus s'appelle la réplication. C'est un mécanisme d'une précision incroyable : sur 3 milliards de lettres copiées, il n'y a en moyenne qu'une erreur pour un milliard de nucléotides !

Comprendre la réplication, c'est comprendre comment la vie se perpétue.`,
    sections: [
      {
        title: "🔱 La fourche de réplication",
        content: `La réplication commence par l'ouverture de la double hélice au niveau d'une « origine de réplication ». Ça crée une fourche en forme de Y où les deux brins se séparent.

Plusieurs enzymes interviennent :
• L'hélicase déroule la double hélice
• La primase fabrique une petite amorce d'ARN
• L'ADN polymérase III copie chaque brin en ajoutant les nucléotides complémentaires
• L'ADN ligase recolle les morceaux

Important : l'ADN polymérase ne peut lire que dans un sens (3'→5'), donc un brin est copié en continu (brin directeur) et l'autre par petits morceaux (fragments d'Okazaki sur le brin retardé).`
      },
      {
        title: "✅ Correction d'erreurs",
        content: `L'ADN polymérase a une fonction de « relecture » : si elle place le mauvais nucléotide, elle le détecte, revient en arrière et le corrige. C'est comme un correcteur automatique intégré.

D'autres systèmes de réparation existent aussi (réparation des mésappariements, excision de base, etc.) pour maintenir l'intégrité du génome.`
      },
      {
        title: "⏳ Le problème des télomères",
        content: `À chaque réplication, les extrémités des chromosomes (télomères) raccourcissent un peu car l'ADN polymérase ne peut pas copier le tout dernier bout.

C'est comme une mèche qui brûle : après ~50 divisions, les télomères sont trop courts et la cellule arrête de se diviser. C'est lié au vieillissement cellulaire.

Exception : la télomérase (active dans les cellules souches et les cellules cancéreuses) peut rallonger les télomères.`
      },
    ],
  },

  "La transcription": {
    images: [
      { file: "transcription-et-traduction-illus-06.webp", caption: "La transcription en action : l'ARN polymérase glisse le long de l'ADN et fabrique un brin d'ARN." },
    ],
    intro: `La transcription est la première étape de l'expression d'un gène : l'ADN est « recopié » en ARN messager. C'est comme faire une photocopie d'une page du grand livre (ADN) pour l'envoyer aux usines à protéines (ribosomes).

Ce processus est ultra-régulé : la cellule ne transcrit que les gènes dont elle a besoin, au bon moment.`,
    sections: [
      {
        title: "📝 Comment ça marche ?",
        content: `L'ARN polymérase II se fixe sur le promoteur du gène (une séquence signal en amont). Elle ouvre la double hélice localement et « lit » un brin d'ADN pour fabriquer un ARN complémentaire.

Les étapes :
1. Initiation : les facteurs de transcription + ARN pol II se placent sur le promoteur
2. Élongation : l'ARN polymérase avance et allonge l'ARN messager
3. Terminaison : signal de fin, l'ARN se détache

L'ARN produit est un « pré-ARNm » qui subira encore des modifications avant d'être utilisable.`
      },
      {
        title: "✂️ La maturation de l'ARN",
        content: `Le pré-ARNm n'est pas directement utilisable. Il subit 3 modifications essentielles :

• Ajout de la coiffe en 5' : protège l'ARN et aide au démarrage de la traduction
• Ajout de la queue poly-A en 3' : protège contre la dégradation
• Épissage : les introns (parties non codantes) sont découpés et retirés ; seuls les exons (parties codantes) restent

L'épissage alternatif permet à un même gène de produire plusieurs protéines différentes — c'est un mécanisme clé de la diversité protéique.`
      },
      {
        title: "🔑 Le dogme central",
        content: `ADN → ARN → Protéine : c'est le dogme central de la biologie moléculaire.

La transcription (ADN→ARN) a lieu dans le noyau. L'ARNm mature sort ensuite par les pores nucléaires pour être traduit dans le cytoplasme. La régulation de la transcription est le principal moyen pour la cellule de contrôler quelles protéines elle fabrique.`
      },
    ],
  },

  "La traduction": {
    images: [],
    intro: `La traduction, c'est le passage du langage des nucléotides (ARN) au langage des acides aminés (protéines). Les ribosomes « lisent » l'ARN messager trois lettres par trois lettres (codons) et assemblent la protéine correspondante.

C'est la dernière étape du dogme central : ADN → ARN → Protéine.`,
    sections: [
      {
        title: "📖 Le code génétique",
        content: `Le code génétique est la table de correspondance entre les codons (triplets de nucléotides) et les acides aminés.

Caractéristiques essentielles :
• 64 codons possibles pour 20 acides aminés → le code est redondant (dégénéré)
• AUG = codon d'initiation (code pour la méthionine)
• UAA, UAG, UGA = codons stop
• Le code est universel (quasi identique chez tous les êtres vivants)

Un codon = 3 lettres = 1 acide aminé. Simple et élégant.`
      },
      {
        title: "🔧 La machinerie de traduction",
        content: `Trois acteurs principaux :
• Le ribosome : la « machine » qui assemble les protéines. Il possède 2 sous-unités et glisse le long de l'ARNm.
• L'ARNt (transfert) : le « livreur ». Chaque ARNt porte un acide aminé spécifique et un anticodon qui s'apparie avec le codon de l'ARNm.
• L'ARNm : le « plan de construction »

Le ribosome lit l'ARNm codon par codon, accueille le bon ARNt, et forme la liaison peptidique entre les acides aminés.`
      },
      {
        title: "⚙️ Les 3 étapes de la traduction",
        content: `1. Initiation : le ribosome s'assemble sur le codon AUG (start) de l'ARNm
2. Élongation : les ARNt apportent les acides aminés un par un, la chaîne protéique s'allonge
3. Terminaison : le ribosome rencontre un codon stop → la protéine est libérée

Plusieurs ribosomes peuvent traduire le même ARNm simultanément (polyribosome), ce qui permet de produire beaucoup de copies de la même protéine très rapidement.`
      },
    ],
  },

  "Les protéines": {
    images: [],
    intro: `Les protéines sont les molécules « ouvrières » de la cellule. Enzymes, hormones, anticorps, transporteurs, récepteurs… tout est protéine. Elles sont fabriquées à partir de seulement 20 acides aminés différents, mais leur variété est quasi infinie.

Comprendre les protéines, c'est comprendre comment la vie fonctionne au niveau moléculaire.`,
    sections: [
      {
        title: "🏗️ Les 4 niveaux de structure",
        content: `Une protéine se replie en 4 niveaux :

• Structure primaire : la séquence d'acides aminés (comme une phrase)
• Structure secondaire : des motifs locaux — hélice alpha (spirale) et feuillet bêta (zigzag plissé)
• Structure tertiaire : la forme 3D globale de la protéine, stabilisée par des liaisons faibles et des ponts disulfure
• Structure quaternaire : l'assemblage de plusieurs chaînes protéiques ensemble

Chaque niveau dépend du précédent : c'est la séquence qui détermine tout le repliement.`
      },
      {
        title: "🌀 Le repliement : de la chaîne à la forme 3D",
        content: `Après sa fabrication, la chaîne d'acides aminés se replie spontanément en quelques secondes pour adopter sa forme fonctionnelle. C'est le repliement protéique.

Le moteur principal : les acides aminés hydrophobes « fuient » l'eau et se regroupent au cœur de la protéine, forçant toute la structure à se replier.

Si le repliement échoue, la protéine est mal formée et ne fonctionne pas. Des protéines « chaperonnes » aident au repliement correct. Quand le système échoue, ça peut causer des maladies graves (Alzheimer, Parkinson — liées à des protéines mal repliées).`
      },
      {
        title: "🔑 Pourquoi la forme = la fonction",
        content: `La forme 3D d'une protéine détermine sa fonction. Un anticorps a une forme en Y pour attraper les pathogènes. Une enzyme a une « poche » (site actif) parfaitement adaptée à son substrat, comme une clé dans une serrure.

Si la forme change (dénaturation par la chaleur, le pH, etc.), la protéine perd sa fonction. C'est pour ça qu'un œuf cuit ne peut pas redevenir cru : les protéines ont perdu leur forme originale de façon irréversible.`
      },
    ],
  },

  "Métabolisme énergétique": {
    images: [],
    intro: `Les enzymes sont les catalyseurs du vivant. Sans elles, les réactions biochimiques seraient des millions de fois trop lentes pour entretenir la vie. Chaque enzyme accélère une réaction précise en abaissant la barrière d'énergie nécessaire.

Le métabolisme énergétique, c'est l'ensemble des réactions qui permettent de produire et utiliser l'énergie cellulaire, principalement sous forme d'ATP.`,
    sections: [
      {
        title: "⚡ L'ATP : la monnaie énergétique",
        content: `L'ATP (adénosine triphosphate) est LA molécule d'énergie universelle du vivant. Quand l'ATP perd un phosphate (ATP → ADP), il libère de l'énergie que la cellule utilise pour :
• Contracter les muscles
• Transporter des molécules
• Fabriquer de nouvelles molécules
• Transmettre des signaux

Chaque jour, ton corps recycle environ 40 kg d'ATP ! L'ATP est constamment fabriqué (à partir du glucose, des lipides…) et consommé.`
      },
      {
        title: "🔬 Comment fonctionnent les enzymes ?",
        content: `Une enzyme :
1. Reconnaît son substrat grâce à son site actif (modèle clé-serrure)
2. Abaisse l'énergie d'activation de la réaction
3. Libère le produit et est prête à recommencer

La vitesse d'une réaction enzymatique suit la courbe de Michaelis-Menten : elle augmente avec la concentration de substrat, puis atteint un plateau (Vmax) quand toutes les enzymes sont saturées.

Deux paramètres clés :
• Vmax = vitesse maximale
• Km = concentration de substrat à laquelle on atteint la moitié de Vmax (mesure l'affinité)`
      },
      {
        title: "🎛️ Régulation des enzymes",
        content: `La cellule peut accélérer ou freiner ses réactions en régulant ses enzymes :

• Inhibiteur compétitif : se fixe sur le site actif à la place du substrat
• Inhibiteur non-compétitif : se fixe ailleurs et change la forme de l'enzyme
• Régulation allostérique : des molécules activent ou inhibent l'enzyme en changeant sa conformation
• Modification covalente : phosphorylation (ajout d'un phosphate) pour activer ou désactiver

C'est grâce à cette régulation fine que la cellule adapte son métabolisme en temps réel.`
      },
    ],
  },

  "Les glucides": {
    images: [],
    intro: `Les glucides (ou « sucres ») sont des molécules essentielles au vivant. Ils fournissent l'énergie rapide (glucose), servent de réserve énergétique (glycogène), et entrent dans la composition de structures biologiques fondamentales (ADN, paroi cellulaire).

Tout part d'une formule simple : Cn(H₂O)n — d'où le nom « hydrates de carbone ».`,
    sections: [
      {
        title: "🍬 Classification des glucides",
        content: `On classe les glucides par taille :

• Monosaccharides (oses) : les briques de base — glucose, fructose, galactose (6 carbones), ribose (5 carbones)
• Disaccharides (diholosides) : 2 oses liés — saccharose (glucose+fructose), lactose (glucose+galactose), maltose (glucose+glucose)
• Polysaccharides (polyholosides) : des chaînes de milliers d'oses — amidon et glycogène (réserve d'énergie), cellulose (structure des plantes)

La liaison entre deux oses s'appelle liaison osidique (ou glycosidique).`
      },
      {
        title: "🔄 Formes linéaire et cyclique",
        content: `En solution, les monosaccharides comme le glucose ne restent pas en chaîne ouverte : ils se cyclisent spontanément pour former un cycle à 6 atomes (pyranose) ou 5 atomes (furanose).

Le glucose cyclique existe sous deux formes : α-glucose et β-glucose, selon la position du groupement OH sur le carbone 1. Cette différence paraît anodine, mais elle change tout : l'amidon (α) est digestible, la cellulose (β) ne l'est pas !`
      },
      {
        title: "🔑 Ce qu'il faut retenir",
        content: `• Le glucose est le carburant principal des cellules
• Le glycogène = réserve de glucose chez les animaux (stocké dans le foie et les muscles)
• L'amidon = réserve de glucose chez les plantes
• La cellulose = structure des parois végétales
• Le ribose entre dans la composition de l'ARN, le désoxyribose dans l'ADN
• Les glycoprotéines (protéines + sucres) jouent un rôle clé dans la reconnaissance cellulaire`
      },
    ],
  },

  "Les lipides": {
    images: [
      { file: "glucides-et-lipides-illus-33.webp", caption: "La membrane cellulaire : bicouche de phospholipides avec cholestérol et protéines (tout en français)." },
    ],
    intro: `Les lipides sont les molécules « grasses » du vivant. Ils sont insolubles dans l'eau mais solubles dans les solvants organiques. Loin d'être de simples réserves de graisse, ils jouent des rôles absolument essentiels : constitution des membranes cellulaires, signalisation, isolation thermique, et réserve d'énergie concentrée.`,
    sections: [
      {
        title: "📋 Les grandes familles de lipides",
        content: `• Acides gras : chaînes carbonées avec un groupe acide. Saturés (pas de double liaison, solides) ou insaturés (double liaison, liquides)
• Triglycérides : 3 acides gras + glycérol. C'est la forme de stockage de l'énergie dans le tissu adipeux
• Phospholipides : 2 acides gras + glycérol + phosphate + tête polaire. Composant principal des membranes cellulaires
• Stéroïdes : molécules à 4 cycles carbonés. Le cholestérol est le plus connu → précurseur des hormones stéroïdiennes et de la vitamine D`
      },
      {
        title: "🧱 La membrane cellulaire",
        content: `La membrane plasmique est une bicouche de phospholipides : les têtes hydrophiles (aimant l'eau) sont vers l'extérieur, les queues hydrophobes (fuyant l'eau) sont vers l'intérieur.

C'est le modèle de la « mosaïque fluide » : les phospholipides bougent librement dans la membrane, comme des barques sur un lac. Le cholestérol s'intercale pour rigidifier ou fluidifier la membrane selon la température.

Des protéines membranaires sont enchâssées dans cette bicouche : transporteurs, récepteurs, canaux ioniques…`
      },
      {
        title: "🔑 Glucides vs Lipides : le duo énergétique",
        content: `Les glucides fournissent une énergie rapide (glucose → ATP en quelques secondes) mais stockent peu.
Les lipides fournissent une énergie lente mais très concentrée : 1g de lipide = 9 kcal vs 4 kcal pour 1g de glucide.

Le corps utilise d'abord le glucose, puis puise dans les réserves de glycogène, et enfin mobilise les graisses pour les efforts prolongés.`
      },
    ],
  },

  "Introduction à la biochimie": {
    images: [],
    intro: `La biochimie, c'est la chimie du vivant. Elle étudie les molécules qui constituent les êtres vivants et les réactions chimiques qui les animent. C'est le pont entre la chimie et la biologie.

En PASS/LAS, la biochimie est une matière incontournable. Ce chapitre d'introduction pose les bases : quelles sont les grandes familles de molécules du vivant, et comment s'organisent les réactions métaboliques ?`,
    sections: [
      {
        title: "🧩 Les 4 grandes familles de biomolécules",
        content: `Tout le vivant est construit à partir de 4 types de molécules :

• Protéines : les « ouvrières » — enzymes, hormones, anticorps, structure. Constituées d'acides aminés.
• Acides nucléiques : stockent l'information génétique (ADN) et la transmettent (ARN). Constitués de nucléotides.
• Glucides : fournissent l'énergie (glucose) et les structures (cellulose). Constitués d'oses.
• Lipides : membranes, énergie de réserve, signalisation. Insolubles dans l'eau.

Chaque famille a ses « briques » élémentaires (monomères) qui s'assemblent en grandes molécules (polymères).`
      },
      {
        title: "⚡ Le métabolisme : construire et détruire",
        content: `Le métabolisme, c'est l'ensemble des réactions chimiques de la cellule. Il se divise en deux voies :

• Catabolisme : dégrade les grosses molécules en petites, libère de l'énergie (ex: dégradation du glucose → ATP)
• Anabolisme : construit des grosses molécules à partir de petites, consomme de l'énergie (ex: synthèse de protéines)

Ces réactions sont organisées en « voies métaboliques » : des chaînes de réactions où le produit de l'une est le substrat de la suivante, chaque étape étant catalysée par une enzyme spécifique.`
      },
      {
        title: "🔑 Pourquoi la biochimie est essentielle en médecine",
        content: `Comprendre la biochimie, c'est comprendre :
• Comment le corps produit son énergie
• Comment les médicaments agissent au niveau moléculaire
• Pourquoi certaines mutations causent des maladies métaboliques
• Comment fonctionnent les tests diagnostiques (glycémie, bilan lipidique…)

La biochimie est la base de la pharmacologie, de la nutrition, et de la compréhension des maladies métaboliques (diabète, obésité, maladies génétiques).`
      },
    ],
  },
};

export default FICHE_CURATED;
