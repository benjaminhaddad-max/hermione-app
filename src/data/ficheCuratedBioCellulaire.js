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
      {
        title: "🧬 Composition lipidique et asymétrie membranaire",
        content: `La membrane n'est pas uniforme : sa composition diffère entre le feuillet externe et le feuillet interne → c'est l'asymétrie membranaire.

• Feuillet externe : enrichi en phosphatidylcholine (PC) et sphingomyéline
• Feuillet interne : enrichi en phosphatidylsérine (PS) et phosphatidyléthanolamine (PE)

Pourquoi c'est important ?
→ La phosphatidylsérine (PS) est normalement cachée côté intracellulaire. Quand elle apparaît sur le feuillet externe, c'est un signal d'apoptose : les macrophages reconnaissent la PS exposée et phagocytent la cellule mourante.

Le cholestérol représente environ 20-25 % des lipides membranaires. Pense à lui comme un « thermostat » :
• À haute température → il rigidifie la membrane (réduit la fluidité)
• À basse température → il empêche la cristallisation (maintient la fluidité)

Les glycolipides (lipides + sucres) sont exclusivement sur le feuillet externe → ils forment le glycocalyx, une « forêt de sucres » impliquée dans la reconnaissance cellulaire et la protection.

Facteurs influençant la fluidité :
• Longueur des chaînes d'acides gras : chaînes longues → moins fluide
• Degré d'insaturation : doubles liaisons (coudes) → plus fluide
• Cholestérol : effet tampon (stabilisateur)
• Température : chaleur → plus fluide`
      },
      {
        title: "🔄 Endocytose et exocytose",
        content: `Les grosses molécules et particules ne peuvent pas traverser la membrane par simple diffusion. La cellule utilise des vésicules pour les faire entrer ou sortir.

ENDOCYTOSE (entrée) :
• Phagocytose (« manger la cellule ») : ingestion de grosses particules (bactéries, débris). C'est le travail des macrophages et neutrophiles.
• Pinocytose (« boire la cellule ») : ingestion de liquide extracellulaire et petites molécules dissoutes.
• Endocytose médiée par récepteur : ultra-spécifique ! Le ligand se fixe sur un récepteur, la membrane s'invagine et forme une vésicule recouverte de clathrine.

Exemple clé : le cholestérol LDL est capté par endocytose médiée par récepteur. Si les récepteurs au LDL sont déficients → hypercholestérolémie familiale → athérosclérose précoce.

EXOCYTOSE (sortie) :
• Les vésicules intracellulaires fusionnent avec la membrane plasmique → leur contenu est libéré à l'extérieur.
• Exemple : sécrétion d'insuline par les cellules β du pancréas, libération de neurotransmetteurs à la synapse.

Analogie : l'endocytose c'est « avaler un bonbon », l'exocytose c'est « cracher un noyau de cerise ».`
      },
      {
        title: "💊 Applications médicales : membranes et pharmacologie",
        content: `La membrane est une cible pharmacologique majeure. Comprendre ses propriétés est essentiel en médecine :

• Anesthésiques locaux (lidocaïne) : ils s'insèrent dans la bicouche lipidique et perturbent la fluidité → bloquent la propagation de l'influx nerveux → plus de douleur.

• Liposomes en thérapeutique : des « bulles » artificielles de bicouche lipidique utilisées pour encapsuler des médicaments et les délivrer aux cellules cibles.
→ Exemple : le vaccin ARNm (Pfizer, Moderna) utilise des nanoparticules lipidiques pour protéger l'ARNm et le faire entrer dans les cellules.

• Résistance aux antibiotiques : certaines bactéries modifient la composition lipidique de leur membrane pour empêcher les antibiotiques d'y pénétrer.

• Fibrose kystique (mucoviscidose) : mutation du canal CFTR (canal chlore) → le transport d'ions Cl⁻ est déficient → mucus épais dans les poumons.

• Les statines : médicaments anti-cholestérol. En réduisant la synthèse de cholestérol, elles modifient indirectement la composition membranaire.

Retiens : la membrane n'est pas juste un « sac » passif → c'est une structure active, dynamique, et une cible thérapeutique de premier plan.`
      },
      {
        title: "📐 Valeurs clés et formules à retenir",
        content: `Voici les chiffres et concepts incontournables pour les QCM :

• Épaisseur de la membrane : ~7-8 nm (70-80 Å)
• Modèle de la mosaïque fluide : Singer & Nicolson, 1972
• Pompe Na⁺/K⁺ ATPase : 3 Na⁺ sortent / 2 K⁺ entrent → transport actif primaire, électrogénique
• Cholestérol : ~20-25 % des lipides membranaires
• Diffusion simple : suit le gradient de concentration (ΔC), pas besoin de protéine
• Osmose : l'eau va du milieu hypotonique (peu concentré) vers le milieu hypertonique (très concentré)
• Equation de Nernst : E = (RT/zF) × ln([ion]ext/[ion]int) → permet de calculer le potentiel d'équilibre d'un ion
• Coefficient de partage (Kp) : plus une molécule est lipophile, plus Kp est élevé, plus elle traverse facilement la membrane

Rappel crucial :
→ Transport passif = dans le sens du gradient = pas d'ATP
→ Transport actif = contre le gradient = ATP nécessaire`
      },
      {
        title: "⚠️ Pièges classiques en QCM",
        content: `Les erreurs les plus fréquentes sur ce chapitre :

❌ PIÈGE 1 : « Le cholestérol rend toujours la membrane plus rigide »
→ FAUX ! Il a un effet tampon : il rigidifie à haute T° et fluidifie à basse T°.

❌ PIÈGE 2 : « L'osmose va du milieu hypertonique vers le milieu hypotonique »
→ FAUX ! C'est l'inverse : l'eau va du milieu hypotonique (dilué) vers le milieu hypertonique (concentré). L'eau va là où il y a plus de solutés.

❌ PIÈGE 3 : « Les protéines périphériques traversent la membrane »
→ FAUX ! Seules les protéines intégrales (transmembranaires) traversent. Les périphériques sont en surface.

❌ PIÈGE 4 : « La pompe Na⁺/K⁺ est un transport passif car elle utilise un gradient »
→ FAUX ! C'est un transport actif primaire qui consomme de l'ATP. Elle crée le gradient, elle ne le suit pas.

❌ PIÈGE 5 : « La phosphatidylsérine est sur le feuillet externe »
→ FAUX (en conditions normales) ! Elle est sur le feuillet interne. Son exposition externe est un signal d'apoptose.

❌ PIÈGE 6 : « La diffusion facilitée consomme de l'ATP »
→ FAUX ! C'est un transport passif, seulement facilité par une protéine. Pas d'énergie nécessaire.`
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
      {
        title: "📌 Hémidesmosomes et contacts focaux",
        content: `Les jonctions ne relient pas uniquement les cellules entre elles. Certaines ancrent les cellules à la matrice extracellulaire (MEC) :

• Hémidesmosomes : ancrent la cellule à la lame basale via des intégrines α6β4. Ils sont reliés aux filaments intermédiaires de kératine à l'intérieur de la cellule.
→ Analogie : ce sont des « pitons d'escalade » qui fixent la cellule au « mur » qu'est la lame basale.

• Contacts focaux (adhérences focales) : ancrent la cellule à la MEC via des intégrines. Reliés aux microfilaments d'actine → impliqués dans la migration cellulaire.
→ Les contacts focaux sont dynamiques : ils se forment à l'avant de la cellule et se détachent à l'arrière → la cellule « rampe ».

Différence clé :
• Hémidesmosomes → filaments intermédiaires → ancrage STABLE
• Contacts focaux → actine → ancrage DYNAMIQUE (migration)

Les intégrines sont les protéines transmembranaires clés dans les deux cas. Elles font le lien entre la MEC (fibronectine, laminine) et le cytosquelette intracellulaire.`
      },
      {
        title: "🕸️ La matrice extracellulaire (MEC)",
        content: `La MEC est le « ciment » qui entoure les cellules dans les tissus. Ce n'est pas juste un support passif : elle envoie des signaux et influence le comportement cellulaire.

Composition :
• Collagène : protéine la plus abondante du corps humain (~30 % des protéines totales). Fibres résistantes à la traction → os, tendons, peau.
• Élastine : fibres élastiques → poumons, artères, peau. Permet l'étirement et le retour à la forme initiale.
• Protéoglycanes : protéines + glycosaminoglycanes (GAG). Forment un gel hydraté qui résiste à la compression → cartilage.
• Glycoprotéines d'adhérence : fibronectine (lie les intégrines aux fibres de collagène), laminine (composant clé de la lame basale).

La lame basale est une fine couche de MEC qui soutient les épithéliums. Elle contient du collagène IV, de la laminine, et du nidogène.

Importance médicale :
→ Le scorbut (carence en vitamine C) → défaut de synthèse du collagène → fragilité des vaisseaux, déchaussement des dents.
→ Le syndrome de Marfan → mutation de la fibrilline (associée à l'élastine) → aorte fragile, risque de rupture.
→ L'invasion tumorale : les cellules cancéreuses sécrètent des métalloprotéases (MMP) qui dégradent la MEC pour envahir les tissus voisins.`
      },
      {
        title: "🏥 Pathologies des jonctions cellulaires",
        content: `Les maladies des jonctions sont un sujet classique en PASS. Voici les incontournables :

• Pemphigus : maladie auto-immune où des anticorps attaquent les cadhérines desmosomales (desmogléines) → perte de cohésion entre les cellules de l'épiderme → bulles cutanées douloureuses.
→ Signe de Nikolsky positif : la peau se décolle quand on la frotte.

• Épidermolyse bulleuse : mutations des protéines des hémidesmosomes (intégrines, collagène VII) → les cellules se détachent de la lame basale → bulles à la moindre friction.
→ On l'appelle parfois « maladie des enfants papillons » car la peau est aussi fragile qu'une aile de papillon.

• Maladie de Crohn et colite ulcéreuse : altération des jonctions serrées intestinales → perméabilité intestinale augmentée → les bactéries et toxines franchissent la barrière → inflammation chronique.

• Surdité héréditaire : mutations de la connexine 26 (Cx26) → jonctions communicantes déficientes dans la cochlée → la cause la plus fréquente de surdité congénitale non syndromique.

• Cancers : la perte des cadhérines E (E-cadhérine) est un marqueur de la transition épithélio-mésenchymateuse → les cellules tumorales perdent leur adhérence → elles migrent → métastases.`
      },
      {
        title: "🧭 Polarité cellulaire et jonctions",
        content: `Les cellules épithéliales sont polarisées : elles ont un « haut » (pôle apical) et un « bas » (pôle basal). Les jonctions cellulaires jouent un rôle crucial dans le maintien de cette polarité.

Organisation de haut en bas :
1. Jonctions serrées (les plus apicales) → « barrière » + maintien de la polarité
2. Jonctions adhérentes (juste en dessous) → adhérence via cadhérines + actine
3. Desmosomes → résistance mécanique via filaments intermédiaires
4. Jonctions communicantes → communication via connexons
5. Hémidesmosomes (au pôle basal) → ancrage à la lame basale

Pourquoi la polarité est-elle essentielle ?
→ Les protéines de transport sont distribuées différemment entre le pôle apical et le pôle basal.
→ Exemple dans l'intestin : les transporteurs de glucose SGLT1 (transport actif) sont au pôle apical, et les transporteurs GLUT2 (diffusion facilitée) sont au pôle basal. Le glucose entre activement par le haut et sort passivement par le bas → absorption intestinale vectorielle.

Si les jonctions serrées sont altérées → les protéines migrent librement entre les deux pôles → perte de polarité → dysfonctionnement du tissu.`
      },
      {
        title: "⚠️ Pièges classiques en QCM",
        content: `Les erreurs les plus fréquentes sur les jonctions cellulaires :

❌ PIÈGE 1 : « Les desmosomes sont reliés aux microfilaments d'actine »
→ FAUX ! Les desmosomes sont reliés aux filaments intermédiaires. Ce sont les jonctions adhérentes qui sont reliées à l'actine.

❌ PIÈGE 2 : « Les cadhérines fonctionnent sans calcium »
→ FAUX ! Les cadhérines sont Ca²⁺-dépendantes. Sans calcium, elles perdent leur conformation et ne peuvent plus assurer l'adhérence. C'est pour ça qu'on utilise l'EDTA (chélateur de Ca²⁺) pour dissocier les cellules en culture.

❌ PIÈGE 3 : « Les jonctions serrées sont les plus résistantes mécaniquement »
→ FAUX ! Les jonctions serrées assurent l'étanchéité, pas la résistance mécanique. Ce sont les desmosomes qui résistent le mieux aux forces de traction.

❌ PIÈGE 4 : « Un connexon = 6 connexons »
→ FAUX ! Un connexon = 6 connexines (protéines). Un canal complet = 2 connexons (un par cellule).

❌ PIÈGE 5 : « Les hémidesmosomes relient deux cellules entre elles »
→ FAUX ! Les hémidesmosomes relient une cellule à la matrice extracellulaire (lame basale), pas à une autre cellule.

❌ PIÈGE 6 : « Les intégrines sont des molécules intracellulaires »
→ FAUX ! Les intégrines sont des protéines transmembranaires. Elles font le lien entre la MEC (extérieur) et le cytosquelette (intérieur).`
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
      {
        title: "🏃 Dynamique de l'actine et motilité cellulaire",
        content: `L'actine est la protéine la plus abondante des cellules eucaryotes. Elle existe sous deux formes :
• Actine G (globulaire) : monomère libre dans le cytoplasme
• Actine F (filamenteuse) : polymère constitué de monomères d'actine G assemblés en double hélice

La polymérisation est polarisée :
→ Extrémité + (barbed end) : polymérisation rapide (ajout de monomères)
→ Extrémité − (pointed end) : dépolymérisation lente

Ce phénomène de « tapis roulant » (treadmilling) permet à la cellule de se déplacer :
1. L'actine polymérise à l'avant de la cellule → formation du lamellipode (voile de membrane poussé par l'actine)
2. Les filopodes (doigts d'actine) explorent l'environnement
3. Des contacts focaux s'établissent avec le substrat
4. L'actine se contracte à l'arrière grâce à la myosine II → la cellule avance

Protéines régulatrices clés :
• Profiline : favorise la polymérisation
• Cofiline : favorise la dépolymérisation
• Arp2/3 : crée des ramifications (branchements) du réseau d'actine
• Formines : allongent les filaments non branchés

Analogie : imagine un escalator qui monte (polymérisation au +) et descend (dépolymérisation au −) en même temps → le filament « avance » sans bouger dans son ensemble.`
      },
      {
        title: "🌊 Cils, flagelles et centrosome",
        content: `Les cils et flagelles sont des extensions cellulaires construites sur un squelette de microtubules :

Structure (axonème) : arrangement « 9+2 »
→ 9 doublets de microtubules périphériques + 2 microtubules centraux
→ La dynéine axonémale fait glisser les doublets les uns par rapport aux autres → mouvement de battement

Types de cils :
• Cils motiles : battent de façon coordonnée pour déplacer du liquide en surface
  → Exemple : les cils de l'épithélium bronchique poussent le mucus vers la gorge (escalator mucociliaire)
  → La dyskinésie ciliaire primitive (syndrome de Kartagener) : mutation de la dynéine → cils immobiles → infections respiratoires chroniques, situs inversus

• Cils primaires (non motiles) : 1 seul par cellule, structure « 9+0 » (pas de paire centrale)
  → Rôle sensoriel : antenne captant des signaux (voie Hedgehog, signaux mécaniques)
  → Polykystose rénale : cils primaires défectueux dans les reins → formation de kystes

• Flagelle : même structure 9+2 mais beaucoup plus long → propulsion du spermatozoïde

Le centrosome (2 centrioles + matériel péricentriolaire) est le centre organisateur des microtubules (MTOC). Il nucléé les microtubules à partir de γ-tubuline et joue un rôle clé dans la formation du fuseau mitotique.`
      },
      {
        title: "💪 Bases de la contraction musculaire",
        content: `La contraction musculaire est LE grand exemple d'application du cytosquelette en physiologie :

Le sarcomère est l'unité contractile du muscle strié :
• Filaments épais : myosine II (moteur moléculaire)
• Filaments fins : actine F + tropomyosine + troponine

Mécanisme de la contraction (modèle du glissement des filaments) :
1. Un influx nerveux arrive → libération d'acétylcholine → dépolarisation
2. Le Ca²⁺ est libéré du réticulum sarcoplasmique
3. Le Ca²⁺ se fixe sur la troponine C → changement de conformation
4. La tropomyosine se déplace → les sites de liaison sur l'actine sont exposés
5. La tête de myosine se fixe à l'actine → « coup de rame » grâce à l'hydrolyse d'ATP
6. Le filament d'actine glisse → le sarcomère se raccourcit → contraction

Bandes du sarcomère :
• Bande A : zone sombre (myosine ± actine) → sa longueur ne change PAS pendant la contraction
• Bande I : zone claire (actine seule) → raccourcit
• Bande H : zone centrale (myosine seule) → raccourcit
• Ligne Z : limite du sarcomère
• Ligne M : centre du sarcomère

Retiens : la rigidité cadavérique (rigor mortis) s'explique par l'absence d'ATP → les têtes de myosine restent fixées à l'actine → muscles bloqués en contraction.`
      },
      {
        title: "💊 Drogues anti-cytosquelette et applications anticancéreuses",
        content: `Le cytosquelette est une cible majeure en chimiothérapie anticancéreuse. Les cellules tumorales se divisent rapidement → elles sont vulnérables aux drogues qui bloquent le fuseau mitotique.

Drogues ciblant les MICROTUBULES :

• Taxol (paclitaxel) : extrait de l'if du Pacifique
  → STABILISE les microtubules (empêche la dépolymérisation)
  → Le fuseau mitotique se forme mais ne peut pas se défaire
  → La cellule reste bloquée en métaphase → apoptose
  → Utilisé contre les cancers du sein, ovaire, poumon

• Vincristine / Vinblastine : extraites de la pervenche de Madagascar
  → DÉSTABILISENT les microtubules (empêchent la polymérisation)
  → Le fuseau mitotique ne peut pas se former
  → Utilisées dans les leucémies, lymphomes

• Colchicine : extraite du colchique d'automne
  → Se lie à la tubuline libre → empêche la polymérisation
  → Utilisée en médecine contre la goutte et en cytogénétique pour bloquer les cellules en métaphase (caryotype)

Drogues ciblant l'ACTINE (utilisées en recherche) :
• Phalloïdine (toxine de l'amanite phalloïde) : stabilise les filaments d'actine
• Cytochalasine : empêche la polymérisation de l'actine
• Latrunculine : séquestre les monomères d'actine G

Moyen mnémotechnique : « Taxol TAXE les microtubules (les empêche de bouger), Vincristine les VINCE (les détruit) ».`
      },
      {
        title: "⚠️ Pièges classiques en QCM",
        content: `Les erreurs les plus fréquentes sur le cytosquelette :

❌ PIÈGE 1 : « Les filaments intermédiaires sont dynamiques comme l'actine et les microtubules »
→ FAUX ! Les filaments intermédiaires sont les PLUS STABLES des trois types. Ils ne présentent pas d'instabilité dynamique ni de treadmilling. Ils résistent aux détergents et au sel.

❌ PIÈGE 2 : « La kinésine transporte vers le noyau »
→ FAUX ! La kinésine va vers l'extrémité + (membrane) = antérograde. C'est la dynéine cytoplasmique qui va vers le − (noyau) = rétrograde.

❌ PIÈGE 3 : « Le taxol dépolymérise les microtubules »
→ FAUX ! Le taxol STABILISE les microtubules (empêche la dépolymérisation). C'est la vincristine qui empêche la polymérisation. Ils ont des effets OPPOSÉS mais le résultat est le même : blocage de la mitose.

❌ PIÈGE 4 : « Les microtubules sont constitués d'actine »
→ FAUX ! Les microtubules sont constitués de tubuline (α et β). L'actine forme les microfilaments.

❌ PIÈGE 5 : « Les cils ont une structure 9+0 »
→ ATTENTION ! Les cils MOTILES ont une structure 9+2 (avec la paire centrale). Ce sont les cils PRIMAIRES (sensoriels) qui ont une structure 9+0.

❌ PIÈGE 6 : « La bande A change de taille pendant la contraction »
→ FAUX ! La bande A (zone sombre contenant la myosine) garde une longueur constante. Ce sont les bandes I et H qui raccourcissent.`
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
      {
        title: "🔗 Cascade des protéines G en détail",
        content: `Les récepteurs couplés aux protéines G (RCPG) sont la plus grande famille de récepteurs membranaires. Comprendre leur fonctionnement est essentiel.

Structure du RCPG : protéine à 7 domaines transmembranaires (7TM). Face extracellulaire → fixation du ligand. Face intracellulaire → interaction avec la protéine G.

La protéine G est un hétérotrimère : 3 sous-unités α, β, γ
• Au repos : Gα est liée au GDP (inactive) et associée à βγ
• Activation :
  1. Le ligand se fixe sur le RCPG → changement de conformation
  2. Le récepteur active la protéine G : échange GDP → GTP sur Gα
  3. Gα-GTP se dissocie de βγ → les deux peuvent agir sur des effecteurs
  4. Gα possède une activité GTPase intrinsèque → elle hydrolyse le GTP en GDP → retour à l'état inactif

Types de protéines Gα :
• Gαs (stimulatrice) : active l'adénylate cyclase → ↑ AMPc
  → Exemple : récepteur β-adrénergique (adrénaline au cœur → ↑ fréquence cardiaque)
• Gαi (inhibitrice) : inhibe l'adénylate cyclase → ↓ AMPc
  → Exemple : récepteur muscarinique M2 (acétylcholine au cœur → ↓ fréquence)
• Gαq : active la phospholipase C → production d'IP3 et DAG

Toxines pathogènes :
→ Toxine cholérique : bloque l'activité GTPase de Gαs → Gαs reste active en permanence → AMPc ↑↑↑ → sécrétion massive d'eau et d'ions dans l'intestin → diarrhée mortelle
→ Toxine pertussique (coqueluche) : bloque Gαi → elle ne peut plus inhiber l'adénylate cyclase → AMPc ↑↑`
      },
      {
        title: "📬 Les seconds messagers : AMPc, IP3, Ca²⁺, DAG",
        content: `Les seconds messagers sont de petites molécules intracellulaires qui relaient et amplifient le signal du récepteur vers les effecteurs.

1. AMPc (AMP cyclique) :
• Synthétisé par l'adénylate cyclase (à partir d'ATP)
• Dégradé par les phosphodiestérases (PDE)
• Active la protéine kinase A (PKA) → phosphorylation de protéines cibles
→ Le café (caféine) inhibe les PDE → l'AMPc s'accumule → effet stimulant
→ Le Viagra (sildénafil) inhibe la PDE5 → accumulation de GMPc → vasodilatation

2. IP3 (inositol 1,4,5-trisphosphate) et DAG (diacylglycérol) :
• Produits par la phospholipase C (PLC) à partir du PIP2 membranaire
• IP3 → se lie à ses récepteurs sur le RE → libération de Ca²⁺ dans le cytoplasme
• DAG → reste dans la membrane → active la protéine kinase C (PKC)

3. Ca²⁺ (calcium) :
• Le Ca²⁺ est un second messager universel
• Concentration cytoplasmique au repos : ~100 nM (10 000 fois moins que dans le RE ou le milieu extracellulaire !)
• Le Ca²⁺ libéré se fixe sur la calmoduline → le complexe Ca²⁺-calmoduline active de nombreuses kinases (CaMK)
→ Exemple : dans le muscle, le Ca²⁺ se fixe sur la troponine C → contraction

Retiens cette chaîne :
Gαq → PLC → PIP2 → IP3 + DAG
IP3 → ↑Ca²⁺ cytoplasmique
DAG → PKC`
      },
      {
        title: "🧪 Les récepteurs à activité tyrosine kinase (RTK)",
        content: `Les RTK sont des récepteurs enzymatiques : leur domaine intracellulaire possède une activité tyrosine kinase (phosphoryle des tyrosines).

Exemples majeurs :
• Récepteur de l'insuline
• Récepteur de l'EGF (facteur de croissance épidermique)
• Récepteur du VEGF (facteur de croissance de l'endothélium vasculaire)
• Récepteur du PDGF (facteur de croissance plaquettaire)

Mécanisme d'activation :
1. Le ligand se fixe → dimérisation du récepteur (2 récepteurs s'associent)
2. Trans-autophosphorylation : chaque monomère phosphoryle l'autre sur ses tyrosines
3. Les tyrosines phosphorylées deviennent des sites d'ancrage pour des protéines à domaine SH2
4. Activation de voies de signalisation en aval :

Voie des MAP kinases (Ras-Raf-MEK-ERK) :
→ Ras (petite protéine G) → Raf (MAPKKK) → MEK (MAPKK) → ERK (MAPK)
→ ERK entre dans le noyau → active des facteurs de transcription → prolifération cellulaire

Voie PI3K/Akt :
→ PI3K → PIP3 → Akt → survie cellulaire, croissance

Importance en cancérologie :
→ Des mutations activatrices de Ras sont retrouvées dans ~30 % des cancers humains
→ Les thérapies ciblées visent spécifiquement les RTK mutés : imatinib (Glivec) contre BCR-ABL, trastuzumab (Herceptin) contre HER2 dans le cancer du sein`
      },
      {
        title: "🔇 Désensibilisation et terminaison du signal",
        content: `Une cellule ne peut pas rester stimulée indéfiniment. Des mécanismes de désensibilisation coupent le signal :

Pour les RCPG :
1. Phosphorylation du récepteur par les GRK (G protein-coupled Receptor Kinases) → le récepteur phosphorylé recrute la β-arrestine
2. La β-arrestine empêche la protéine G de se coupler au récepteur (découplage)
3. Le récepteur est internalisé par endocytose dans des vésicules à clathrine
4. Dans l'endosome : soit recyclé vers la membrane (resensibilisation), soit dégradé dans le lysosome (down-regulation)

Analogie : c'est comme un téléphone qu'on décroche (activation), puis qu'on met en mode avion (désensibilisation), puis qu'on range dans un tiroir (internalisation).

Autres mécanismes de terminaison :
• Hydrolyse du GTP par la sous-unité Gα → retour à l'état inactif
• Dégradation des seconds messagers : AMPc par les phosphodiestérases, IP3 par des phosphatases
• Déphosphorylation des protéines par des phosphatases (PP1, PP2A)
• Recaptage du Ca²⁺ par les pompes SERCA (dans le RE) et PMCA (vers l'extérieur)

Importance clinique :
→ L'asthme : les bronches deviennent désensibilisées aux agonistes β2 → nécessité d'augmenter les doses de ventoline
→ La tolérance aux opioïdes : désensibilisation progressive des récepteurs μ → il faut augmenter les doses pour le même effet antalgique`
      },
      {
        title: "⚠️ Pièges classiques en QCM",
        content: `Les erreurs les plus fréquentes sur la communication intercellulaire :

❌ PIÈGE 1 : « La protéine G est un récepteur »
→ FAUX ! La protéine G est un RELAIS intracellulaire. Le récepteur est le RCPG (7TM). La protéine G est activée PAR le récepteur.

❌ PIÈGE 2 : « L'AMPc est produit par la protéine G »
→ FAUX ! L'AMPc est produit par l'adénylate cyclase. La protéine Gαs active l'adénylate cyclase, qui elle produit l'AMPc à partir d'ATP.

❌ PIÈGE 3 : « La signalisation autocrine agit sur les cellules voisines »
→ FAUX ! Autocrine = la cellule agit sur ELLE-MÊME. C'est la signalisation paracrine qui agit sur les cellules voisines.

❌ PIÈGE 4 : « Les récepteurs nucléaires sont sur la membrane »
→ FAUX ! Les récepteurs nucléaires sont INTRACELLULAIRES (dans le cytoplasme ou le noyau). Leurs ligands (hormones stéroïdiennes, hormones thyroïdiennes, vitamine D) sont lipophiles et traversent la membrane.

❌ PIÈGE 5 : « La dimérisation des RTK se fait AVANT la fixation du ligand »
→ FAUX ! C'est la fixation du ligand qui INDUIT la dimérisation du récepteur (sauf exception comme le récepteur de l'insuline, déjà dimérique).

❌ PIÈGE 6 : « Le Ca²⁺ est un premier messager »
→ FAUX ! Le Ca²⁺ intracellulaire est un SECOND messager. Le premier messager est le ligand extracellulaire (hormone, neurotransmetteur).

❌ PIÈGE 7 : « La toxine cholérique inhibe la protéine Gs »
→ FAUX ! La toxine cholérique ACTIVE de façon permanente Gαs en bloquant son activité GTPase. C'est la toxine pertussique qui bloque Gi.`
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
      {
        title: "🚚 Le transport vésiculaire : COPI, COPII et clathrine",
        content: `Les protéines voyagent entre les compartiments du système endomembranaire dans des vésicules de transport. Chaque type de vésicule a son « manteau » protéique :

• Vésicules COPII : du RE vers le Golgi (transport antérograde)
  → Elles sélectionnent les protéines correctement repliées et les « emballent » pour le Golgi
  → Le RE de transition (ERGIC) est la zone de bourgeonnement

• Vésicules COPI : du Golgi vers le RE (transport rétrograde)
  → Elles « rapatrient » les protéines résidentes du RE qui se sont échappées vers le Golgi
  → Le signal KDEL (Lys-Asp-Glu-Leu) sur une protéine = « ramène-moi au RE ! »
  → Transport rétrograde aussi entre les citernes du Golgi

• Vésicules à clathrine : du Golgi vers les lysosomes, et de la membrane vers l'intérieur (endocytose)
  → La clathrine forme un treillis en « cage de football » autour de la vésicule
  → Les adaptines font le lien entre la clathrine et les récepteurs cargo
  → La dynamine (GTPase) « pince » et détache la vésicule de la membrane donneuse

Analogie postale :
→ COPII = le camion qui part de l'usine (RE) vers le centre de tri (Golgi)
→ COPI = le camion retour qui ramène les colis mal adressés
→ Clathrine = le livreur qui distribue les colis au bon destinataire

Les v-SNARE (sur la vésicule) et t-SNARE (sur la cible) assurent la reconnaissance et la fusion spécifique : chaque vésicule fusionne avec le BON compartiment grâce à ce système de « clé-serrure ».`
      },
      {
        title: "🍬 La glycosylation des protéines",
        content: `La glycosylation est l'ajout de chaînes de sucres (oligosaccharides) sur les protéines. C'est une modification post-traductionnelle majeure.

Deux types de glycosylation :

1. N-glycosylation (sur l'azote de l'asparagine, motif Asn-X-Ser/Thr) :
  → Commence dans le RE : un oligosaccharide précurseur de 14 sucres est transféré en bloc sur la protéine par l'oligosaccharyltransférase (OST)
  → Le précurseur est porté par le dolichol-phosphate (lipide de la membrane du RE)
  → Maturation dans le Golgi : élagage (retrait de sucres) puis ajout de nouveaux sucres

2. O-glycosylation (sur l'oxygène de la sérine ou thréonine) :
  → Se fait uniquement dans le Golgi
  → Ajout de sucres un par un (pas de précurseur en bloc)

Rôles de la glycosylation :
• Protection des protéines contre la protéolyse (les sucres « protègent » comme un bouclier)
• Repliement correct des protéines (calnexine et calréticuline dans le RE vérifient la glycosylation)
• Reconnaissance cellulaire : les groupes sanguins ABO sont déterminés par des sucres à la surface des globules rouges
• Adressage : le mannose-6-phosphate (M6P) est le signal d'adressage vers les lysosomes

Contrôle qualité dans le RE :
→ Si une protéine est mal repliée, le cycle calnexine/calréticuline tente de la corriger
→ Si elle reste mal repliée → ERAD (ER-Associated Degradation) : rétrotranslocation vers le cytoplasme → ubiquitination → dégradation par le protéasome`
      },
      {
        title: "📤 Exocytose constitutive vs régulée",
        content: `L'exocytose est la fusion de vésicules intracellulaires avec la membrane plasmique pour libérer leur contenu à l'extérieur.

Deux modes d'exocytose :

1. Exocytose constitutive (permanente) :
  → Se produit en continu, sans signal particulier
  → Libère des protéines de la MEC (collagène, fibronectine)
  → Renouvelle les lipides et protéines de la membrane plasmique
  → Présente dans TOUTES les cellules

2. Exocytose régulée (sur demande) :
  → Ne se produit qu'en réponse à un signal spécifique (souvent une élévation du Ca²⁺)
  → Les vésicules de sécrétion sont stockées en attendant le signal
  → Exemples :
    • Sécrétion d'insuline par les cellules β pancréatiques (signal : glucose → ↑Ca²⁺)
    • Libération de neurotransmetteurs à la synapse (signal : influx nerveux → ↑Ca²⁺)
    • Dégranulation des mastocytes (signal : allergène + IgE → ↑Ca²⁺ → libération d'histamine)

Le rôle du Ca²⁺ dans l'exocytose régulée :
→ Les synaptotagmines sont des « senseurs » de Ca²⁺ sur les vésicules
→ Quand le Ca²⁺ augmente, la synaptotagmine change de conformation → favorise la fusion vésicule-membrane via le complexe SNARE

Analogie : l'exocytose constitutive c'est un robinet qui coule en permanence ; l'exocytose régulée c'est un barrage qu'on ouvre à la demande.`
      },
      {
        title: "😰 Le stress du RE et la réponse UPR",
        content: `Quand trop de protéines mal repliées s'accumulent dans le RE, la cellule déclenche une réponse de stress appelée UPR (Unfolded Protein Response).

Causes du stress du RE :
• Surproduction de protéines (cellules sécrétrices très actives)
• Mutations génétiques affectant le repliement
• Manque de glucose (la glycosylation est perturbée)
• Hypoxie, infections virales, toxines

Les 3 voies de l'UPR :
1. IRE1 → épisse l'ARNm de XBP1 → facteur de transcription → ↑ production de chaperons
2. PERK → phosphoryle eIF2α → STOP de la traduction globale (pour réduire la charge du RE)
3. ATF6 → clivé dans le Golgi → facteur de transcription → ↑ chaperons, ↑ ERAD

Objectifs de l'UPR :
→ Réduire la quantité de protéines qui entrent dans le RE
→ Augmenter la capacité de repliement (plus de chaperons comme BiP/GRP78)
→ Augmenter la dégradation des protéines mal repliées (ERAD)

Si le stress est trop intense et prolongé → l'UPR bascule en mode « mort » :
→ Activation de CHOP (facteur pro-apoptotique) → apoptose

Applications médicales :
• Diabète de type 2 : les cellules β du pancréas sont soumises à un stress du RE chronique (surproduction d'insuline) → apoptose → perte de cellules β
• Maladies neurodégénératives : accumulation de protéines mal repliées (Alzheimer : Aβ, Parkinson : α-synucléine)
• Myélome multiple : les plasmocytes tumoraux produisent massivement des anticorps → stress du RE → cible thérapeutique (bortézomib inhibe le protéasome)`
      },
      {
        title: "⚠️ Pièges classiques en QCM",
        content: `Les erreurs les plus fréquentes sur le système endomembranaire :

❌ PIÈGE 1 : « COPII transporte du Golgi vers le RE »
→ FAUX ! COPII = RE → Golgi (antérograde). COPI = Golgi → RE (rétrograde). Moyen mnémotechnique : COPII a 2 « I » → va vers le Golg-II (c'est-à-dire vers le Golgi).

❌ PIÈGE 2 : « La N-glycosylation se fait entièrement dans le Golgi »
→ FAUX ! La N-glycosylation COMMENCE dans le RE (transfert du précurseur de 14 sucres) et se TERMINE dans le Golgi (maturation). Seule la O-glycosylation se fait exclusivement dans le Golgi.

❌ PIÈGE 3 : « Le signal d'adressage vers les lysosomes est KDEL »
→ FAUX ! KDEL est le signal de rétention/retour au RE. Le signal d'adressage vers les lysosomes est le mannose-6-phosphate (M6P).

❌ PIÈGE 4 : « Les lysosomes ont un pH basique »
→ FAUX ! Les lysosomes ont un pH ACIDE (~4,5-5), maintenu par des pompes à protons (H⁺-ATPase de type V).

❌ PIÈGE 5 : « Le RE lisse synthétise les protéines »
→ FAUX ! Le RE lisse synthétise les LIPIDES et participe à la détoxification. C'est le RE rugueux (avec ribosomes) qui synthétise les protéines.

❌ PIÈGE 6 : « L'exocytose régulée est présente dans toutes les cellules »
→ FAUX ! L'exocytose CONSTITUTIVE est présente dans toutes les cellules. L'exocytose RÉGULÉE est restreinte aux cellules sécrétrices spécialisées (neurones, cellules endocrines, mastocytes…).`
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
      {
        title: "⚙️ Les complexes de la chaîne respiratoire",
        content: `La chaîne respiratoire (ou chaîne de transport d'électrons) se compose de 5 complexes enchâssés dans la membrane interne mitochondriale :

Complexe I (NADH déshydrogénase) :
→ Accepte les électrons du NADH
→ Transfère les e⁻ à l'ubiquinone (CoQ)
→ Pompe 4 H⁺ vers l'espace intermembranaire

Complexe II (succinate déshydrogénase) :
→ Accepte les électrons du FADH₂ (via le succinate du cycle de Krebs)
→ Transfère les e⁻ à l'ubiquinone
→ Ne pompe PAS de H⁺ (c'est le seul !)

Complexe III (cytochrome bc1) :
→ Reçoit les e⁻ de l'ubiquinone
→ Transfère au cytochrome c
→ Pompe 4 H⁺

Complexe IV (cytochrome c oxydase) :
→ Transfère les e⁻ à l'O₂ (accepteur final)
→ Produit H₂O
→ Pompe 2 H⁺

Complexe V (ATP synthase) :
→ Ce n'est PAS un transporteur d'électrons
→ C'est un moteur rotatif moléculaire : les H⁺ passent à travers du canal → rotation de la sous-unité γ → synthèse d'ATP (chimiosmose)
→ Peter Mitchell a proposé la théorie chimiosmotique (Prix Nobel 1978)

Bilan : NADH → ~2,5 ATP ; FADH₂ → ~1,5 ATP
Les électrons passent de « haut en énergie » à « bas en énergie » → l'énergie libérée sert à pomper les H⁺.

Inhibiteurs classiques :
• Roténone → bloque le complexe I
• Antimycine A → bloque le complexe III
• Cyanure, CO → bloquent le complexe IV (mortels !)
• Oligomycine → bloque l'ATP synthase (complexe V)`
      },
      {
        title: "💀 Rôle de la mitochondrie dans l'apoptose",
        content: `La mitochondrie n'est pas qu'une usine à ATP : elle joue un rôle central dans la mort cellulaire programmée (apoptose), via la voie intrinsèque.

Le point de non-retour : la perméabilisation de la membrane externe mitochondriale (MOMP)

Mécanisme :
1. Un stress cellulaire (dommages à l'ADN, privation de facteurs de survie) active les protéines pro-apoptotiques Bax et Bak
2. Bax/Bak s'oligomérisent et forment des PORES dans la membrane externe mitochondriale
3. Le cytochrome c (normalement dans l'espace intermembranaire) s'échappe dans le cytoplasme
4. Le cytochrome c se lie à Apaf-1 → formation de l'apoptosome (structure en roue)
5. L'apoptosome recrute et active la caspase-9 (initiatrice)
6. La caspase-9 active les caspases effectrices (3, 6, 7) → démantèlement de la cellule

Autres facteurs libérés par la mitochondrie :
• Smac/DIABLO : neutralise les IAP (inhibiteurs d'apoptose) → lève le frein sur les caspases
• AIF (Apoptosis-Inducing Factor) : va au noyau → fragmentation de l'ADN (indépendant des caspases)
• Endonucléase G : fragmentation de l'ADN

Analogie : la mitochondrie est comme un garde du corps qui peut devenir un assassin. Tant que tout va bien, elle produit de l'énergie. Mais si la cellule est en danger irréparable, elle libère son « arme » (le cytochrome c) pour déclencher l'autodestruction.`
      },
      {
        title: "🧬 ADN mitochondrial et hérédité maternelle",
        content: `Les mitochondries possèdent leur propre génome : l'ADN mitochondrial (ADNmt).

Caractéristiques de l'ADNmt :
• Circulaire et double brin (comme les bactéries → argument de la théorie endosymbiotique)
• Petite taille : ~16 569 paires de bases (vs ~3,2 milliards pour l'ADN nucléaire)
• Code 37 gènes : 13 protéines de la chaîne respiratoire, 22 ARNt, 2 ARNr
• Pas d'histones → ADN « nu » → plus vulnérable aux mutations
• Pas d'introns → gènes compacts
• Code génétique légèrement différent du code universel (ex : UGA = tryptophane au lieu de STOP)
• Réplication indépendante du cycle cellulaire

Hérédité maternelle :
→ Les mitochondries du spermatozoïde sont dans le flagelle → éliminées après la fécondation
→ Seules les mitochondries de l'ovocyte sont transmises à l'embryon
→ L'ADNmt est donc exclusivement d'origine MATERNELLE

Conséquences :
• On peut retracer les lignées maternelles grâce à l'ADNmt (« Ève mitochondriale »)
• Les maladies mitochondriales à transmission maternelle : une mère atteinte transmet à TOUS ses enfants, mais seules les filles peuvent transmettre à la génération suivante

Notion d'hétéroplasmie :
→ Une cellule contient des centaines de mitochondries avec potentiellement un mélange d'ADNmt normal et muté
→ L'expression de la maladie dépend du % de mitochondries mutées (effet de seuil : souvent >60-80 % pour avoir des symptômes)`
      },
      {
        title: "🏥 Maladies mitochondriales",
        content: `Les maladies mitochondriales touchent principalement les organes à forte demande énergétique : cerveau, muscles, cœur, rétine.

Principales maladies :

• MELAS (Mitochondrial Encephalomyopathy, Lactic Acidosis, Stroke-like episodes) :
  → Mutation de l'ARNt de la leucine (A3243G)
  → Encéphalopathie, acidose lactique, pseudo-AVC, diabète
  → Transmission maternelle

• MERRF (Myoclonic Epilepsy with Ragged Red Fibers) :
  → Mutation de l'ARNt de la lysine
  → Épilepsie myoclonique, fibres rouges déchiquetées à la biopsie musculaire
  → Les « ragged red fibers » = accumulation de mitochondries anormales sous la membrane

• LHON (Neuropathie Optique Héréditaire de Leber) :
  → Mutations des gènes du complexe I
  → Perte brutale de la vision centrale chez l'adulte jeune
  → Touche surtout les hommes (pénétrance incomplète)

• Syndrome de Kearns-Sayre :
  → Grande délétion de l'ADNmt
  → Ophtalmoplégie externe progressive, rétinite pigmentaire, troubles cardiaques

Diagnostic :
→ Biopsie musculaire : coloration au Gomori modifié → fibres rouges déchiquetées
→ Acidose lactique (la chaîne respiratoire ne fonctionne pas → le pyruvate est transformé en lactate)
→ Séquençage de l'ADNmt

Point clé : les maladies mitochondriales sont hétérogènes car l'hétéroplasmie fait varier l'expression entre les individus et les tissus.`
      },
      {
        title: "⚠️ Pièges classiques en QCM",
        content: `Les erreurs les plus fréquentes sur mitochondries et peroxysomes :

❌ PIÈGE 1 : « La glycolyse a lieu dans la mitochondrie »
→ FAUX ! La glycolyse a lieu dans le CYTOPLASME. Seuls le cycle de Krebs (matrice) et la chaîne respiratoire (membrane interne) sont mitochondriaux.

❌ PIÈGE 2 : « Le complexe II pompe des protons »
→ FAUX ! Le complexe II (succinate déshydrogénase) est le SEUL complexe qui ne pompe pas de H⁺. C'est aussi le seul qui ne fait pas partie du complexe respiratoire codé par l'ADNmt (il est entièrement codé par l'ADN nucléaire).

❌ PIÈGE 3 : « L'ADN mitochondrial est transmis par le père »
→ FAUX ! Transmission exclusivement MATERNELLE. Les mitochondries paternelles sont éliminées après la fécondation.

❌ PIÈGE 4 : « Les peroxysomes ont leur propre ADN comme les mitochondries »
→ FAUX ! Les peroxysomes n'ont PAS d'ADN propre. Toutes leurs protéines sont codées par le génome nucléaire et importées via les peroxines (Pex).

❌ PIÈGE 5 : « Le cyanure bloque l'ATP synthase »
→ FAUX ! Le cyanure bloque le complexe IV (cytochrome c oxydase). C'est l'oligomycine qui bloque l'ATP synthase (complexe V).

❌ PIÈGE 6 : « 1 glucose produit exactement 38 ATP »
→ ATTENTION ! Le bilan classique de 36-38 ATP est approximatif. La valeur actuellement admise est plutôt ~30-32 ATP par glucose en tenant compte des coûts de transport. L'important est de connaître le principe, pas un chiffre exact.

❌ PIÈGE 7 : « La membrane externe mitochondriale est imperméable »
→ FAUX ! C'est la membrane INTERNE qui est imperméable (essentiel pour le gradient de H⁺). La membrane externe est perméable aux petites molécules grâce aux porines (VDAC).`
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
      {
        title: "🛡️ La famille Bcl-2 : régulateurs de l'apoptose",
        content: `La famille Bcl-2 est le « tribunal » qui décide si la cellule vit ou meurt. Elle contrôle la voie intrinsèque en régulant la perméabilité de la membrane externe mitochondriale.

3 sous-familles :

1. Anti-apoptotiques (protègent la cellule) :
  • Bcl-2, Bcl-xL, Mcl-1
  → Ils gardent Bax/Bak inactifs en les séquestrant
  → Analogie : les garde du corps qui empêchent les « assassins » d'agir

2. Pro-apoptotiques effecteurs (tueurs) :
  • Bax et Bak
  → Quand ils sont activés, ils s'oligomérisent et forment des pores dans la membrane externe mitochondriale → libération du cytochrome c → apoptose
  → Analogie : les « assassins » qui percent le coffre-fort (mitochondrie)

3. Pro-apoptotiques BH3-only (sentinelles) :
  • Bid, Bim, Bad, Noxa, Puma
  → Ils détectent les signaux de stress et neutralisent les anti-apoptotiques
  → Bid est clivé par la caspase-8 → tBid active Bax → pont entre voie extrinsèque et intrinsèque
  → Bad neutralise Bcl-2/Bcl-xL → libère Bax

L'équilibre anti-apoptotiques / pro-apoptotiques détermine le destin cellulaire :
→ Si Bcl-2 > Bax → la cellule survit
→ Si Bax > Bcl-2 → la cellule meurt

Applications thérapeutiques :
→ Le venetoclax est un médicament BH3-mimétique qui inhibe Bcl-2 → utilisé dans la leucémie lymphoïde chronique pour forcer les cellules cancéreuses à entrer en apoptose.`
      },
      {
        title: "🧬 p53, le gardien du génome",
        content: `p53 est la protéine la plus importante en oncologie. Surnommée « gardien du génome », elle surveille l'intégrité de l'ADN et décide de la réponse cellulaire en cas de dommages.

En conditions normales :
→ p53 est maintenue à un niveau très bas grâce à MDM2 (ubiquitine ligase) qui la marque pour dégradation par le protéasome
→ Demi-vie de p53 : seulement ~20 minutes

En cas de stress (dommages ADN, hypoxie, activation d'oncogènes) :
→ Des kinases (ATM, ATR, Chk1, Chk2) phosphorylent p53 → p53 se dissocie de MDM2 → elle s'accumule et s'active

3 réponses possibles de p53 :
1. Arrêt du cycle cellulaire : p53 active p21 → p21 inhibe les complexes cycline-CDK → la cellule s'arrête en G1 pour réparer son ADN
2. Réparation de l'ADN : p53 active les enzymes de réparation
3. Apoptose : si les dégâts sont irréparables, p53 active Bax, Puma, Noxa → apoptose

TP53 est muté dans ~50 % de TOUS les cancers humains :
→ Mutation faux-sens → p53 mutante perd sa fonction de suppression tumorale
→ Pire : la p53 mutante peut acquérir de nouvelles fonctions oncogènes (gain of function)

Syndrome de Li-Fraumeni :
→ Mutation germinale de TP53 (héritée)
→ Prédisposition à de multiples cancers dès l'enfance : sarcomes, cancers du sein, tumeurs cérébrales, leucémies
→ Risque de cancer au cours de la vie : >90 %

Analogie : p53 est le « directeur qualité » de l'usine cellulaire. S'il détecte un produit défectueux (ADN endommagé), il arrête la chaîne de production (cycle cellulaire). Si le défaut est irréparable, il détruit le produit (apoptose). Quand p53 est muté, le contrôle qualité disparaît → les produits défectueux s'accumulent → cancer.`
      },
      {
        title: "♻️ L'autophagie : recyclage cellulaire",
        content: `L'autophagie (« se manger soi-même ») est un processus de recyclage où la cellule dégrade ses propres composants dans des autophagosomes puis des autolysosomes.

Mécanisme de la macroautophagie :
1. Un phagophore (double membrane) se forme autour du matériel à dégrader (organite endommagé, agrégat protéique)
2. Le phagophore se referme → autophagosome (vésicule à double membrane)
3. L'autophagosome fusionne avec un lysosome → autolysosome
4. Les hydrolases acides du lysosome dégradent le contenu → les nutriments sont recyclés

Protéines clés :
• Beclin-1 : initie la formation du phagophore
• LC3 (MAP1LC3) : s'insère dans la membrane de l'autophagosome → marqueur d'autophagie en recherche
• ATG (Autophagy-related genes) : famille de ~30 gènes essentiels

Régulation :
→ mTOR (mammalian Target of Rapamycin) est le FREIN de l'autophagie
  • Quand la cellule a suffisamment de nutriments → mTOR est actif → autophagie inhibée
  • En situation de carence → mTOR est inhibé → autophagie activée
→ La rapamycine (immunosuppresseur) inhibe mTOR → active l'autophagie

Rôles de l'autophagie :
• Survie en cas de carence nutritionnelle (« la cellule mange ses réserves »)
• Contrôle qualité : élimination des mitochondries endommagées (mitophagie)
• Défense anti-infectieuse : dégradation de bactéries intracellulaires (xénophagie)
• Développement embryonnaire

Autophagie et pathologies :
→ Maladies neurodégénératives : autophagie déficiente → accumulation d'agrégats protéiques toxiques
→ Cancer : rôle ambivalent — suppressive au début (élimine les cellules endommagées) puis pro-tumorale (aide les cellules cancéreuses à survivre au stress)

Prix Nobel 2016 : Yoshinori Ohsumi, pour ses travaux sur l'autophagie.`
      },
      {
        title: "🔥 Nécroptose, pyroptose et ferroptose",
        content: `En plus de l'apoptose et de la nécrose classique, on a découvert des formes de mort cellulaire « hybrides » : programmées mais inflammatoires.

NÉCROPTOSE (nécrose programmée) :
→ Déclenchée quand la voie apoptotique est bloquée (ex : caspase-8 inhibée par un virus)
→ Voie : RIPK1 → RIPK3 → phosphorylation de MLKL → MLKL perfore la membrane plasmique → la cellule éclate → inflammation
→ C'est un mécanisme de « sécurité » : si l'apoptose est impossible, la cellule a un plan B
→ Rôle en défense antivirale : certains virus inhibent les caspases pour échapper à l'apoptose → la nécroptose prend le relais

PYROPTOSE (mort inflammatoire) :
→ Déclenchée par l'activation des inflammasomes (complexes multiprotéiques, surtout NLRP3)
→ Voie : signal de danger (DAMP/PAMP) → inflammasome → caspase-1 (inflammatoire, PAS effectrice)
→ Caspase-1 clive la gasdermine D → les fragments de gasdermine forment des pores dans la membrane → libération d'IL-1β et IL-18 → inflammation massive
→ Rôle clé dans l'immunité innée et les maladies auto-inflammatoires (goutte, maladie de Crohn)

FERROPTOSE :
→ Mort causée par la peroxydation lipidique incontrôlée (dépendante du fer)
→ L'accumulation de fer → réaction de Fenton → radicaux libres → oxydation des lipides membranaires → destruction de la membrane
→ Inhibée par la GPX4 (glutathion peroxydase) et le glutathion
→ Impliquée dans les dommages ischémiques et certains cancers

Résumé comparatif :
• Apoptose → propre, caspases 3/7/9, PAS d'inflammation
• Nécroptose → RIPK3/MLKL, inflammation, caspase-indépendante
• Pyroptose → caspase-1, gasdermines, inflammation +++
• Ferroptose → fer + peroxydation lipidique, pas de caspases`
      },
      {
        title: "🎗️ Cancer et résistance à l'apoptose",
        content: `L'une des caractéristiques fondamentales du cancer (hallmarks of cancer, Hanahan & Weinberg) est la résistance à la mort cellulaire.

Comment les cellules cancéreuses échappent-elles à l'apoptose ?

1. Surexpression des anti-apoptotiques :
  → Bcl-2 est surexprimé dans de nombreux cancers, notamment le lymphome folliculaire (translocation t(14;18) → gène BCL2 sous contrôle du promoteur des immunoglobulines → production massive de Bcl-2)

2. Mutation de p53 :
  → TP53 muté → plus de surveillance de l'ADN → les cellules avec des mutations s'accumulent → progression tumorale

3. Surexpression des IAP (Inhibitors of Apoptosis Proteins) :
  → XIAP, survivine → bloquent directement les caspases effectrices

4. Perte des récepteurs de mort :
  → Certaines tumeurs perdent l'expression de Fas → insensibles aux signaux de mort extrinsèques

5. Activation constitutive de voies de survie :
  → PI3K/Akt → phosphoryle Bad → Bad séquestré → Bcl-2/Bcl-xL libres → survie
  → NF-κB → active la transcription de gènes anti-apoptotiques

Stratégies thérapeutiques ciblant l'apoptose :
• BH3-mimétiques (venetoclax) : miment les protéines BH3-only → neutralisent Bcl-2 → réactivent l'apoptose
• Inhibiteurs de XIAP (smac-mimétiques) : lèvent l'inhibition des caspases
• Thérapie génique p53 : réintroduire une copie fonctionnelle de TP53 dans les tumeurs
• TRAIL recombinant : active la voie extrinsèque via les récepteurs de mort DR4/DR5 spécifiquement sur les cellules tumorales

Retiens : le cancer n'est pas qu'une prolifération excessive, c'est aussi (et surtout) un défaut de mort cellulaire.`
      },
      {
        title: "⚠️ Pièges classiques en QCM",
        content: `Les erreurs les plus fréquentes sur l'apoptose et la mort cellulaire :

❌ PIÈGE 1 : « L'apoptose déclenche une réaction inflammatoire »
→ FAUX ! L'apoptose est une mort « propre » SANS inflammation. C'est la NÉCROSE (et la pyroptose, nécroptose) qui déclenche l'inflammation.

❌ PIÈGE 2 : « Les caspases sont des kinases »
→ FAUX ! Les caspases sont des PROTÉASES à cystéine qui coupent après un résidu aspartate (d'où leur nom : Cysteine-ASPartate proteASE). Les kinases phosphorylent, les caspases clivent.

❌ PIÈGE 3 : « Le cytochrome c est libéré par la membrane interne mitochondriale »
→ FAUX ! Le cytochrome c se trouve dans l'espace INTERMEMBRANAIRE. Il est libéré quand la membrane EXTERNE est perméabilisée par Bax/Bak.

❌ PIÈGE 4 : « Bcl-2 est pro-apoptotique »
→ FAUX ! Bcl-2 est ANTI-apoptotique (il protège la cellule). Les pro-apoptotiques sont Bax, Bak, et les BH3-only (Bid, Bim, Bad, Puma, Noxa).

❌ PIÈGE 5 : « La voie extrinsèque passe par la mitochondrie »
→ ATTENTION ! La voie extrinsèque passe directement par les caspases (8 → 3), SANS la mitochondrie. Cependant, il existe un pont via Bid (clivé en tBid par la caspase-8) qui active Bax → amplification mitochondriale. Ce pont existe mais la voie extrinsèque directe ne nécessite PAS la mitochondrie.

❌ PIÈGE 6 : « p53 est un oncogène »
→ FAUX ! p53 est un SUPPRESSEUR DE TUMEURS. C'est sa mutation (perte de fonction) qui favorise le cancer. Les oncogènes sont des gènes qui, quand ils sont ACTIVÉS, favorisent le cancer (ex : Ras, Myc).

❌ PIÈGE 7 : « L'autophagie est une forme de mort cellulaire »
→ ATTENTION ! L'autophagie est principalement un mécanisme de SURVIE (recyclage en cas de carence). La « mort autophagique » existe mais est controversée et rare. Ne confonds pas autophagie et apoptose.`
      },
    ],
  },
};

export default FICHE_CURATED_BIOCELL;
