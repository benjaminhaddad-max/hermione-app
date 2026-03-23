/**
 * Hand-picked images & enriched course text for each biologie cellulaire chapter.
 * ONLY simple, visual, illustrative images for a Terminale student.
 */

const FICHE_CURATED_BIOCELL = {
  "Propriétés et fonctions des membranes": {
    images: [
      { file: "membrane-plasmique-illus-05.webp", caption: "La membrane cellulaire en 3D : bicouche de lipides (rouge) avec protéines (vert) enchâssées." },
      { file: "membrane-plasmique-illus-06.webp", caption: "Bicouche lipidique : les têtes hydrophiles (boules) vers l'eau, les queues hydrophobes (zigzag) à l'intérieur." },
    ],
    intro: `La membrane plasmique est la frontière de chaque cellule. Fine (seulement 7 nm d'épaisseur !), elle sépare l'intérieur de la cellule du milieu extérieur tout en contrôlant ce qui entre et sort.

Sans membrane, pas de cellule. C'est le premier élément que tu dois comprendre en biologie cellulaire.`,
    sections: [
      {
        title: "🧱 Structure : la bicouche lipidique",
        content: `La membrane est constituée d'une double couche de phospholipides :
• Les têtes hydrophiles (qui aiment l'eau) sont orientées vers l'extérieur et l'intérieur de la cellule
• Les queues hydrophobes (qui fuient l'eau) se font face au centre de la membrane

C'est le modèle de la « mosaïque fluide » de Singer et Nicolson (1972) : les lipides bougent librement dans le plan de la membrane, comme des barques sur un lac.

Le cholestérol s'intercale entre les phospholipides pour réguler la fluidité : il rigidifie quand il fait chaud, et empêche la solidification quand il fait froid.`
      },
      {
        title: "🚪 Les protéines membranaires",
        content: `Des protéines sont enchâssées dans la bicouche lipidique. Elles assurent des fonctions essentielles :

• Protéines intégrales (transmembranaires) : traversent toute la membrane → canaux, transporteurs, récepteurs
• Protéines périphériques : fixées en surface → enzymes, éléments de structure

Les protéines membranaires permettent :
→ Le transport de molécules (canaux ioniques, pompes)
→ La réception de signaux (récepteurs hormonaux)
→ L'adhésion entre cellules
→ La catalyse de réactions enzymatiques`
      },
      {
        title: "🔑 Les transports membranaires",
        content: `La membrane est sélectivement perméable : elle laisse passer certaines molécules, pas d'autres.

• Transport passif (sans énergie) :
  → Diffusion simple : petites molécules non chargées (O₂, CO₂)
  → Diffusion facilitée : via des protéines canal ou transporteur
  → Osmose : diffusion de l'eau

• Transport actif (avec énergie ATP) :
  → Pompe Na⁺/K⁺ : 3 Na⁺ sortent, 2 K⁺ entrent → maintient le potentiel de membrane
  → Transports couplés : une molécule « profite » du gradient d'une autre

Le gradient électrochimique est la force motrice de nombreux transports.`
      },
    ],
  },

  "Les jonctions cellulaires": {
    images: [
      { file: "jonctions-cellulaires-illus-09.webp", caption: "Le connexon : canal entre deux cellules, constitué de 6 sous-unités. Il s'ouvre et se ferme selon le pH et le calcium." },
    ],
    intro: `Les cellules ne vivent pas isolées : elles communiquent et s'accrochent entre elles grâce aux jonctions cellulaires. Ces structures permettent aux cellules de former des tissus solides et coordonnés.

Il existe 3 grands types de jonctions, chacun avec un rôle bien précis.`,
    sections: [
      {
        title: "🔒 Les jonctions serrées (tight junctions)",
        content: `Situées au pôle apical des cellules épithéliales, elles forment une barrière étanche entre les cellules.

Rôles :
• Empêchent le passage de molécules entre les cellules (fonction de « barrière »)
• Maintiennent la polarité de la cellule (pôle apical ≠ pôle basal)

Protéines clés : occludines, claudines, ZO-1

Exemple concret : dans l'intestin, les jonctions serrées empêchent les bactéries de passer entre les cellules épithéliales pour envahir l'organisme.`
      },
      {
        title: "🤝 Les jonctions d'ancrage",
        content: `Elles « soudent » mécaniquement les cellules entre elles ou à la matrice extracellulaire.

Deux types principaux :
• Jonctions adhérentes : relient les filaments d'actine des cellules voisines via les cadhérines
• Desmosomes : relient les filaments intermédiaires → ultra-résistants aux forces mécaniques

Les cadhérines sont les protéines clés : elles nécessitent du calcium (Ca²⁺) pour fonctionner → d'où leur nom « Ca-adhérine ».

Exemple : la peau est un tissu très résistant grâce aux desmosomes qui soudent les cellules entre elles.`
      },
      {
        title: "📡 Les jonctions communicantes (gap junctions)",
        content: `Ce sont des canaux qui relient directement le cytoplasme de deux cellules voisines, permettant l'échange de petites molécules et d'ions.

Structure : un connexon = 6 connexines formant un canal. Deux connexons (un par cellule) s'alignent pour créer le canal complet.

Régulation : le canal se ferme quand le calcium intracellulaire augmente ou quand le pH baisse.

Rôle essentiel : synchroniser l'activité des cellules. Par exemple, dans le cœur, les gap junctions permettent aux cellules musculaires de se contracter de façon coordonnée.`
      },
    ],
  },

  "Le Cytosquelette": {
    images: [
      { file: "cytosquelette-illus-05.webp", caption: "Transport sur un microtubule : la kinésine avance vers le + (vers la membrane), la dynéine vers le − (vers le noyau)." },
    ],
    intro: `Le cytosquelette est le squelette interne de la cellule. Contrairement aux os, il est dynamique : il se monte et se démonte en permanence pour s'adapter aux besoins de la cellule.

Il assure 3 fonctions essentielles : la forme de la cellule, le mouvement, et le transport intracellulaire.`,
    sections: [
      {
        title: "🧵 Les 3 types de filaments",
        content: `Le cytosquelette est constitué de 3 types de filaments, du plus fin au plus gros :

• Microfilaments d'actine (7 nm) : les plus fins. Rôle dans la contraction, le mouvement cellulaire, la division.
• Filaments intermédiaires (10 nm) : les plus résistants. Rôle de charpente mécanique (kératine dans la peau, vimentine, neurofilaments).
• Microtubules (25 nm) : les plus gros. Tubes creux de tubuline. Rôle dans le transport intracellulaire, la division cellulaire (fuseau mitotique), et les cils/flagelles.

Chaque type a sa protéine constitutive et ses fonctions propres.`
      },
      {
        title: "🚂 Le transport sur les microtubules",
        content: `Les microtubules sont les « rails » de la cellule. Deux moteurs moléculaires se déplacent dessus :

• Kinésine : transporte les vésicules vers l'extrémité + (vers la membrane) → transport antérograde
• Dynéine : transporte vers l'extrémité − (vers le noyau) → transport rétrograde

Ces moteurs utilisent l'ATP comme carburant et avancent « pas à pas » le long du microtubule, portant leur cargaison (vésicules, organites, mitochondries…).

C'est grâce à ce système que les neurotransmetteurs voyagent du corps cellulaire du neurone jusqu'à la synapse, parfois sur plus d'un mètre !`
      },
      {
        title: "🔑 Rôle dans la division cellulaire",
        content: `Pendant la mitose, les microtubules forment le fuseau mitotique qui sépare les chromosomes :

1. Les centrosomes migrent aux deux pôles de la cellule
2. Les microtubules s'allongent et s'attachent aux chromosomes (via les kinétochores)
3. La dépolymérisation des microtubules tire les chromosomes vers les pôles

Des drogues anticancéreuses (taxol, vincristine) bloquent la dynamique des microtubules → la cellule ne peut plus se diviser → mort de la cellule tumorale.`
      },
    ],
  },

  "Communication intercellulaire": {
    images: [
      { file: "communication-cellulaire-partie-1-illus-10.webp", caption: "Récepteur membranaire avec ses sous-unités (α, β, γ) : le ligand se fixe et ouvre un canal ionique." },
    ],
    intro: `Les cellules de ton corps ne travaillent pas seules : elles communiquent en permanence. Un signal est émis par une cellule, voyage jusqu'à sa cible, et déclenche une réponse. C'est la signalisation cellulaire.

C'est grâce à ce système que ton cœur bat, que tes muscles se contractent, et que ton système immunitaire combat les infections.`,
    sections: [
      {
        title: "📨 Les types de signalisation",
        content: `Selon la distance entre l'émetteur et le récepteur :

• Endocrine : le signal (hormone) voyage dans le sang sur de longues distances (ex : insuline du pancréas → muscles)
• Paracrine : le signal agit sur les cellules voisines (ex : facteurs de croissance)
• Autocrine : la cellule se signale elle-même
• Synaptique : communication ultra-rapide entre neurones via les neurotransmetteurs
• Contact direct : les cellules se touchent et communiquent via des protéines de surface

Le messager chimique (ligand) est la molécule qui transporte le signal : hormone, neurotransmetteur, facteur de croissance…`
      },
      {
        title: "🎯 Les récepteurs",
        content: `Pour « entendre » un signal, la cellule cible possède des récepteurs spécifiques. Comme une clé dans une serrure, chaque ligand se fixe sur SON récepteur.

3 grandes familles de récepteurs membranaires :
• Récepteurs couplés aux protéines G (RCPG) : les plus nombreux (~800 chez l'Homme). Activent une protéine G → cascade intracellulaire
• Récepteurs à activité enzymatique : le récepteur est lui-même une enzyme (ex : récepteur de l'insuline = tyrosine kinase)
• Récepteurs-canaux : la fixation du ligand ouvre un canal ionique (ex : récepteur nicotinique de l'acétylcholine)

Certains récepteurs sont intracellulaires (récepteurs nucléaires) : le ligand traverse la membrane et agit directement sur les gènes (ex : hormones stéroïdiennes).`
      },
      {
        title: "⚡ La transduction du signal",
        content: `La transduction, c'est la conversion du signal extérieur en réponse intérieure. Une cascade d'événements moléculaires amplifie le signal :

1. Le ligand se fixe sur le récepteur (signal)
2. Activation de protéines relais (protéines G, kinases…)
3. Production de seconds messagers (AMPc, Ca²⁺, IP3…)
4. Activation de protéines effectrices (enzymes, facteurs de transcription…)
5. Réponse cellulaire : contraction, sécrétion, division, apoptose…

Un seul ligand peut activer des milliers de molécules en cascade → amplification considérable du signal.`
      },
    ],
  },

  "Systèmes endomembranaires": {
    images: [
      { file: "syst-me-endomembranaire-illus-12.webp", caption: "Le réticulum endoplasmique : le RE rugueux (ribosomes) fabrique les protéines, le RE lisse synthétise les lipides." },
      { file: "syst-me-endomembranaire-illus-05.webp", caption: "Vue d'ensemble : RE rugueux, RE lisse, appareil de Golgi et noyau forment un réseau connecté." },
    ],
    intro: `À l'intérieur de la cellule eucaryote, un réseau de membranes internes forme le système endomembranaire. C'est une véritable usine de fabrication, de tri et d'expédition des protéines et des lipides.

Les principaux acteurs : le réticulum endoplasmique (RE), l'appareil de Golgi, les lysosomes, et les vésicules de transport.`,
    sections: [
      {
        title: "🏭 Le réticulum endoplasmique (RE)",
        content: `Le RE est un réseau de membranes qui s'étend du noyau vers la périphérie de la cellule. Il existe sous deux formes :

• RE rugueux (REG) : couvert de ribosomes → fabrique les protéines destinées à être sécrétées, insérées dans la membrane, ou envoyées aux lysosomes
• RE lisse (REL) : sans ribosomes → synthèse des lipides, détoxification des médicaments et drogues, stockage du calcium

Le RE rugueux est très développé dans les cellules qui sécrètent beaucoup de protéines (cellules du pancréas, plasmocytes).
Le RE lisse est abondant dans les cellules du foie (détoxification) et les cellules musculaires (stockage Ca²⁺).`
      },
      {
        title: "📦 L'appareil de Golgi",
        content: `L'appareil de Golgi est la « station de tri et d'emballage » de la cellule. Il reçoit les protéines du RE et les modifie, les trie et les expédie vers leur destination :

Structure : empilement de saccules (citernes) avec une face cis (côté RE, entrée) et une face trans (côté membrane, sortie).

Fonctions :
• Modification des protéines : glycosylation (ajout de sucres), phosphorylation
• Tri : étiquetage des protéines pour leur bonne destination
• Emballage : formation de vésicules de transport

Les protéines reçoivent une « étiquette postale » moléculaire qui détermine si elles iront vers la membrane, les lysosomes, ou seront sécrétées.`
      },
      {
        title: "🗑️ Les lysosomes",
        content: `Les lysosomes sont les « poubelles recyclables » de la cellule. Ce sont des vésicules remplies d'enzymes digestives (hydrolases acides) qui dégradent :

• Les molécules absorbées de l'extérieur (bactéries, débris) → hétérophagie
• Les organites usés de la cellule → autophagie

Le pH à l'intérieur du lysosome est très acide (~4,5) grâce à des pompes à protons. Si le lysosome se rompt, les enzymes ne fonctionnent pas au pH neutre du cytoplasme → mécanisme de sécurité.

Maladies lysosomales : quand une enzyme du lysosome est déficiente, les substrats s'accumulent → maladies de surcharge (Gaucher, Tay-Sachs…).`
      },
    ],
  },

  "Mitochondries et peroxysomes": {
    images: [
      { file: "mitochondries-et-peroxysomes-illus-03.webp", caption: "Structure d'une mitochondrie : double membrane, crêtes internes, matrice contenant son propre ADN." },
      { file: "mitochondries-et-peroxysomes-illus-12.webp", caption: "La chaîne respiratoire : les complexes I à V produisent l'ATP à partir du NADH, dans la membrane interne." },
    ],
    intro: `Les mitochondries sont les « centrales énergétiques » de la cellule. Elles produisent l'essentiel de l'ATP (la monnaie énergétique) grâce à la respiration cellulaire. Les peroxysomes, eux, sont des organites de détoxification.

Fait fascinant : les mitochondries possèdent leur propre ADN et se divisent de façon autonome — elles descendent probablement d'anciennes bactéries captées par nos ancêtres cellulaires il y a 2 milliards d'années !`,
    sections: [
      {
        title: "⚡ La mitochondrie : structure",
        content: `La mitochondrie possède une double membrane :

• Membrane externe : perméable aux petites molécules (porines)
• Membrane interne : imperméable, forme des replis (crêtes) → c'est là que se trouve la chaîne respiratoire
• Espace intermembranaire : entre les deux membranes → accumulation de protons H⁺
• Matrice : contient l'ADN mitochondrial, les ribosomes, et les enzymes du cycle de Krebs

Les crêtes augmentent la surface de la membrane interne → plus de place pour les complexes de la chaîne respiratoire → plus d'ATP produit.`
      },
      {
        title: "🔋 La production d'ATP",
        content: `La respiration cellulaire se déroule en 3 étapes :

1. Glycolyse (dans le cytoplasme) : glucose → 2 pyruvates + 2 ATP
2. Cycle de Krebs (dans la matrice) : le pyruvate est dégradé → CO₂ + NADH + FADH₂
3. Chaîne respiratoire (membrane interne) : NADH et FADH₂ → transfert d'électrons → gradient de H⁺ → ATP synthase produit ~34 ATP

Bilan total : 1 glucose → ~36 ATP (contre seulement 2 ATP par la glycolyse seule). La mitochondrie multiplie le rendement par 18 !`
      },
      {
        title: "🧹 Les peroxysomes",
        content: `Les peroxysomes sont des vésicules à simple membrane spécialisées dans :

• La β-oxydation des acides gras à très longue chaîne (les mitochondries gèrent les chaînes plus courtes)
• La détoxification : transformation du peroxyde d'hydrogène (H₂O₂, toxique) en eau grâce à la catalase
• La synthèse de certains lipides (plasmalogènes)

Contrairement aux mitochondries, les peroxysomes n'ont pas d'ADN propre. Toutes leurs protéines sont importées depuis le cytoplasme.

Maladie liée : le syndrome de Zellweger = absence de peroxysomes fonctionnels → accumulation d'acides gras toxiques.`
      },
    ],
  },

  "Apoptose et mort cellulaire": {
    images: [
      { file: "apoptose-illus-08.webp", caption: "Nécrose vs Apoptose : la nécrose est un gonflement incontrôlé, l'apoptose est une mort propre et programmée." },
    ],
    intro: `Toutes les cellules de ton corps sont programmées pour mourir un jour. L'apoptose (mort cellulaire programmée) est un processus actif, contrôlé, essentiel au bon fonctionnement de l'organisme.

Chaque jour, environ 50 à 70 milliards de cellules meurent par apoptose dans ton corps — et c'est parfaitement normal !`,
    sections: [
      {
        title: "💀 Nécrose vs Apoptose",
        content: `Il existe deux façons de mourir pour une cellule :

NÉCROSE (mort accidentelle) :
• Causée par un traumatisme, une infection, un manque d'oxygène
• La cellule gonfle puis éclate → le contenu se répand
• Déclenche une réaction inflammatoire (rougeur, douleur)

APOPTOSE (mort programmée) :
• La cellule « décide » de mourir (signal interne ou externe)
• La cellule se condense, son ADN se fragmente proprement
• Elle se découpe en petits « corps apoptotiques »
• Les macrophages les phagocytent → pas d'inflammation

L'apoptose est propre, la nécrose est sale.`
      },
      {
        title: "⚙️ Les mécanismes de l'apoptose",
        content: `Deux voies principales déclenchent l'apoptose :

Voie extrinsèque (signal de l'extérieur) :
• Un ligand de mort (FasL, TNF) se fixe sur un récepteur de mort (Fas, TNFR)
• Activation des caspases initiatrices (caspase-8)
• Activation des caspases effectrices (caspase-3) → destruction ordonnée

Voie intrinsèque (signal de l'intérieur) :
• Stress cellulaire (dommages ADN, manque de facteurs de survie)
• La mitochondrie libère le cytochrome c
• Formation de l'apoptosome → activation de la caspase-9 → caspase-3

Les caspases sont les « bourreaux » : ce sont des protéases qui découpent les protéines cellulaires de façon méthodique.`
      },
      {
        title: "🔑 Pourquoi l'apoptose est essentielle",
        content: `L'apoptose est indispensable pour :

• Le développement embryonnaire : séparation des doigts (les membranes entre les doigts disparaissent par apoptose)
• Le système immunitaire : élimination des lymphocytes auto-réactifs (qui attaqueraient nos propres cellules)
• L'homéostasie : équilibre entre cellules qui naissent et cellules qui meurent
• La défense antitumorale : une cellule anormale déclenche son apoptose pour protéger l'organisme

Quand l'apoptose dysfonctionne :
• Trop d'apoptose → maladies neurodégénératives (Alzheimer, Parkinson)
• Pas assez d'apoptose → cancer (les cellules tumorales résistent à la mort)`
      },
    ],
  },
};

export default FICHE_CURATED_BIOCELL;
