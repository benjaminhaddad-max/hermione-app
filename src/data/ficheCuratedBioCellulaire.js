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
    intro: `La membrane plasmique, c'est la "coque" de chaque cellule. Elle est super fine : seulement 7 nm d'épaisseur. C'est comme le film plastique autour d'un sandwich. Elle sépare l'intérieur de la cellule du monde extérieur. Et elle contrôle tout ce qui entre et sort.

Sans membrane, pas de cellule. C'est vraiment la base de la biologie cellulaire.`,
    sections: [
      {
        title: "🧱 Structure : la bicouche lipidique",
        content: `La membrane est faite d'une double couche de phospholipides (des graisses spéciales).
• Les têtes hydrophiles (= qui aiment l'eau) regardent vers l'extérieur et l'intérieur de la cellule.
• Les queues hydrophobes (= qui fuient l'eau) se font face au milieu de la membrane.

C'est le modèle de la « mosaïque fluide ». Singer et Nicolson l'ont proposé en 1972. Les lipides bougent librement dans la membrane. Imagine des barques qui flottent sur un lac. Elles bougent, mais restent sur le lac.

Le cholestérol (une molécule grasse) se glisse entre les phospholipides. Il joue le rôle de thermostat. Quand il fait chaud, il rigidifie la membrane. Quand il fait froid, il empêche la membrane de devenir solide. C'est comme un régulateur de température sur un radiateur.

En gros : la membrane c'est deux couches de graisse avec du cholestérol qui règle la souplesse.`
      },
      {
        title: "🚪 Les protéines membranaires",
        content: `Des protéines (des grosses molécules qui font le boulot) sont plantées dans la membrane. Elles font plein de jobs différents :

• Protéines intégrales (= transmembranaires, qui traversent toute la membrane) : ça fait des canaux, des transporteurs, des récepteurs (comme des antennes).
• Protéines périphériques (= fixées juste en surface) : ça fait des enzymes (des outils chimiques), des éléments de structure.

Voilà ce que ces protéines permettent :
→ Le transport de molécules. Pense aux portes d'un immeuble.
→ La réception de signaux. Comme capter un SMS sur ton téléphone.
→ L'adhésion entre cellules. Comme du velcro entre deux tissus.
→ Des réactions chimiques (catalyse enzymatique). Comme une machine à transformer des ingrédients.

En gros : les protéines dans la membrane, c'est les portes, les antennes et les outils de la cellule.`
      },
      {
        title: "🔑 Les transports membranaires",
        content: `La membrane est sélectivement perméable. Ça veut dire qu'elle choisit ce qui passe. C'est comme un videur en boîte de nuit : certains entrent, d'autres non.

• Transport passif (= sans énergie, ça se fait tout seul) :
  → Diffusion simple : les petites molécules non chargées passent directement. Par exemple O₂ et CO₂. C'est comme un parfum qui se répand dans une pièce.
  → Diffusion facilitée : une protéine (canal ou transporteur) aide la molécule à passer. Comme une porte automatique qui s'ouvre pour toi.
  → Osmose (= diffusion de l'eau) : l'eau bouge toute seule à travers la membrane.

• Transport actif (= avec de l'énergie ATP, la "pile" de la cellule) :
  → Pompe Na⁺/K⁺ : elle sort 3 sodium (Na⁺) et fait entrer 2 potassium (K⁺). Ça maintient le potentiel de membrane (la différence de charge). C'est comme une pompe de piscine qui pousse l'eau d'un côté.
  → Transports couplés : une molécule profite du mouvement d'une autre. Comme prendre l'ascenseur avec quelqu'un qui a le badge.

Le gradient électrochimique (= la différence de concentration et de charge) est le moteur de beaucoup de transports.

En gros : certaines choses passent toutes seules, d'autres ont besoin d'énergie pour traverser.`
      },
      {
        title: "🧬 Composition lipidique et asymétrie membranaire",
        content: `La membrane n'est pas pareille des deux côtés. Le feuillet externe et le feuillet interne n'ont pas la même composition. On appelle ça l'asymétrie membranaire (= les deux faces sont différentes).

• Feuillet externe : riche en phosphatidylcholine (PC) et sphingomyéline.
• Feuillet interne : riche en phosphatidylsérine (PS) et phosphatidyléthanolamine (PE).

Pourquoi on s'en soucie ?
→ La phosphatidylsérine (PS) est normalement cachée côté intérieur. Quand elle se montre à l'extérieur, c'est un signal de mort (apoptose). Les macrophages (= cellules poubelles) voient la PS exposée. Ils se disent « cette cellule doit être mangée ». Et ils la phagocytent (= l'avalent).

Le cholestérol représente environ 20-25 % des graisses de la membrane. Pense à lui comme un thermostat :
• Quand il fait chaud → il rigidifie la membrane. Il réduit la fluidité.
• Quand il fait froid → il empêche la membrane de cristalliser. Il garde la souplesse.

Les glycolipides (= lipides + sucres) sont uniquement sur le feuillet externe. Ils forment le glycocalyx (= une « forêt de sucres »). Ce manteau sert à la reconnaissance entre cellules. Il protège aussi la cellule. C'est comme un badge d'identité collé à l'extérieur.

Ce qui change la fluidité (= la souplesse) de la membrane :
• Longueur des chaînes d'acides gras : chaînes longues → moins souple.
• Degré d'insaturation (= doubles liaisons qui font des coudes) : plus de coudes → plus souple.
• Cholestérol : effet tampon. Il stabilise.
• Température : plus chaud → plus souple.

En gros : les deux faces de la membrane ne sont pas identiques, et la souplesse dépend des graisses et du cholestérol.`
      },
      {
        title: "🔄 Endocytose et exocytose",
        content: `Les grosses molécules ne peuvent pas passer à travers la membrane. C'est trop gros pour les portes. Du coup, la cellule utilise des vésicules (= des petites bulles de membrane) pour les faire entrer ou sortir.

ENDOCYTOSE (= faire entrer) :
• Phagocytose (= « manger la cellule ») : la cellule avale de grosses particules. Des bactéries, des débris. C'est le boulot des macrophages et des neutrophiles (les « éboueurs » du corps).
• Pinocytose (= « boire la cellule ») : la cellule avale du liquide et des petites molécules dissoutes. Comme boire à la paille.
• Endocytose médiée par récepteur : ultra-précis. Le ligand (= la molécule signal) se fixe sur son récepteur (= l'antenne). La membrane se creuse et forme une bulle recouverte de clathrine (une protéine en forme de cage de foot).

Un exemple super important : le cholestérol LDL (= le « mauvais » cholestérol) est capté par endocytose médiée par récepteur. Si les récepteurs au LDL marchent mal → le cholestérol s'accumule dans le sang → hypercholestérolémie familiale → les artères se bouchent (athérosclérose) très tôt.

EXOCYTOSE (= faire sortir) :
• Les vésicules intérieures fusionnent avec la membrane. Leur contenu est lâché à l'extérieur. C'est comme ouvrir un colis par la fenêtre.
• Exemples : les cellules β du pancréas sécrètent l'insuline. Les neurones libèrent des neurotransmetteurs (= messagers chimiques) à la synapse.

Analogie : l'endocytose c'est avaler un bonbon. L'exocytose c'est cracher un noyau de cerise.

En gros : pour les gros trucs, la cellule emballe dans des bulles pour faire entrer ou sortir.`
      },
      {
        title: "💊 Applications médicales : membranes et pharmacologie",
        content: `La membrane est une cible majeure pour les médicaments. Comprendre comment elle marche, c'est essentiel en médecine.

• Anesthésiques locaux (comme la lidocaïne) : ils se glissent dans la membrane. Ça perturbe la fluidité. Du coup, le signal de douleur ne passe plus. C'est comme couper le câble du téléphone pour ne plus recevoir d'appels.

• Liposomes (= « bulles » artificielles de membrane) : on met un médicament dedans. La bulle le protège et le transporte jusqu'aux bonnes cellules.
→ Le vaccin ARNm (Pfizer, Moderna) utilise ce principe. Des nanoparticules lipidiques (= des mini-bulles de graisse) protègent l'ARNm et le font entrer dans tes cellules. C'est comme envoyer un message dans une bouteille.

• Résistance aux antibiotiques : certaines bactéries changent la composition de leur membrane. Du coup, les antibiotiques ne peuvent plus y entrer. C'est comme changer la serrure de ta porte.

• Fibrose kystique (= mucoviscidose) : le canal CFTR (un canal pour le chlore, Cl⁻) est muté. Le transport d'ions Cl⁻ ne marche plus. Résultat : un mucus super épais bouche les poumons.

• Les statines : ce sont des médicaments anti-cholestérol. Elles réduisent la fabrication de cholestérol. Ça modifie aussi la composition de la membrane.

Retiens : la membrane n'est pas juste un sac passif. C'est une structure active et dynamique. Et c'est une cible importante pour les traitements.

En gros : plein de médicaments agissent sur la membrane, du vaccin ARNm aux antidouleurs.`
      },
      {
        title: "📐 Valeurs clés et formules à retenir",
        content: `Voilà les chiffres et concepts à connaître par cœur pour les QCM :

• Épaisseur de la membrane : ~7-8 nm (soit 70-80 Å). C'est 10 000 fois plus fin qu'un cheveu.
• Modèle de la mosaïque fluide : Singer & Nicolson, 1972. Retiens ce nom et cette date.
• Pompe Na⁺/K⁺ ATPase : 3 Na⁺ sortent, 2 K⁺ entrent. C'est un transport actif primaire. Il est électrogénique (= il crée une différence de charge).
• Cholestérol : ~20-25 % des lipides de la membrane. Environ un quart, c'est beaucoup.
• Diffusion simple : ça suit le gradient de concentration (ΔC). Pas besoin de protéine. Comme une balle qui roule en descente.
• Osmose : l'eau va du milieu hypotonique (= peu concentré, beaucoup d'eau) vers le milieu hypertonique (= très concentré, peu d'eau). L'eau va là où il y a plus de solutés (= substances dissoutes).
• Équation de Nernst : E = (RT/zF) × ln([ion]ext/[ion]int). Ça sert à calculer le potentiel d'équilibre d'un ion. Retiens la formule, pas besoin de la comprendre en détail pour l'instant.
• Coefficient de partage (Kp) : plus une molécule est lipophile (= qui aime le gras), plus Kp est élevé. Plus elle traverse facilement la membrane.

Rappel super important :
→ Transport passif = dans le sens du gradient = pas d'ATP. Ça descend tout seul.
→ Transport actif = contre le gradient = ATP nécessaire. Ça monte, faut pousser.

En gros : apprends ces chiffres par cœur, ils tombent tout le temps en QCM.`
      },
      {
        title: "⚠️ Pièges classiques en QCM",
        content: `Voilà les erreurs que tout le monde fait sur ce chapitre. Lis bien pour ne pas tomber dedans :

❌ PIÈGE 1 : « Le cholestérol rend toujours la membrane plus rigide »
→ FAUX ! Il a un effet tampon. Quand il fait chaud, il rigidifie. Quand il fait froid, il fluidifie. C'est un régulateur, pas un durcisseur.

❌ PIÈGE 2 : « L'osmose va du milieu hypertonique vers le milieu hypotonique »
→ FAUX ! C'est l'inverse. L'eau va du milieu hypotonique (= dilué, beaucoup d'eau) vers le milieu hypertonique (= concentré, peu d'eau). L'eau va là où il y a plus de solutés. Pense à ça : l'eau veut « diluer » ce qui est trop concentré.

❌ PIÈGE 3 : « Les protéines périphériques traversent la membrane »
→ FAUX ! Seules les protéines intégrales (= transmembranaires) traversent de part en part. Les périphériques sont juste collées en surface. Comme un post-it sur une porte.

❌ PIÈGE 4 : « La pompe Na⁺/K⁺ est un transport passif car elle utilise un gradient »
→ FAUX ! C'est un transport actif primaire. Elle CONSOMME de l'ATP. Elle crée le gradient. Elle ne le suit pas. C'est elle qui fait le boulot.

❌ PIÈGE 5 : « La phosphatidylsérine est sur le feuillet externe »
→ FAUX (en temps normal) ! Elle est sur le feuillet interne. Quand elle se retrouve à l'extérieur, c'est un signal de mort (apoptose). C'est comme un drapeau blanc.

❌ PIÈGE 6 : « La diffusion facilitée consomme de l'ATP »
→ FAUX ! C'est un transport passif. Il est juste aidé par une protéine. Pas besoin d'énergie. Comme glisser sur un toboggan avec une rampe.`
      },
    ],
  },

  "Les jonctions cellulaires": {
    images: [
      { file: "jonctions-cellulaires-illus-09.webp", caption: "Le connexon : canal entre deux cellules, constitué de 6 sous-unités. Il s'ouvre et se ferme selon le pH et le calcium." },
    ],
    intro: `Les cellules ne vivent pas toutes seules. Elles communiquent et s'accrochent entre elles. Ce sont les jonctions cellulaires qui permettent ça. C'est grâce à ces jonctions que les cellules forment des tissus solides et bien organisés. Imagine des briques dans un mur : chaque jonction c'est du ciment entre les briques.

Il y a 3 grands types de jonctions. Chacun a un rôle bien précis.`,
    sections: [
      {
        title: "🔒 Les jonctions serrées (tight junctions)",
        content: `Les jonctions serrées se trouvent tout en haut des cellules épithéliales (= les cellules qui tapissent les surfaces). On dit au pôle apical (= le « toit » de la cellule). Elles forment une barrière étanche entre les cellules.

À quoi ça sert :
• Elles empêchent les molécules de passer entre les cellules. C'est une fonction de « barrière ». Comme du joint de silicone entre les carreaux de ta douche.
• Elles maintiennent la polarité (= le haut et le bas) de la cellule. Le pôle apical reste différent du pôle basal.

Les protéines clés : occludines, claudines, ZO-1. Retiens ces noms.

Exemple concret : dans l'intestin, les jonctions serrées empêchent les bactéries de se faufiler entre les cellules. Sinon, elles envahiraient ton corps. C'est comme les joints étanches d'un sous-marin.

En gros : les jonctions serrées, c'est le joint silicone qui empêche tout de passer entre les cellules.`
      },
      {
        title: "🤝 Les jonctions d'ancrage",
        content: `Ces jonctions « soudent » les cellules entre elles. Ou alors elles les fixent au sol (la matrice extracellulaire). Elles donnent de la solidité mécanique. C'est comme les vis et boulons qui tiennent un meuble IKEA.

Deux types principaux :
• Jonctions adhérentes : elles relient les filaments d'actine (= les câbles souples du squelette cellulaire) des cellules voisines. Elles utilisent les cadhérines (des protéines d'accroche).
• Desmosomes : ils relient les filaments intermédiaires (= les câbles résistants du squelette). Ils sont ultra-costauds face aux forces mécaniques. Comme des rivets sur une coque de bateau.

Les cadhérines ont besoin de calcium (Ca²⁺) pour fonctionner. D'où leur nom : Ca-adhérine. Sans calcium, ça ne colle plus. C'est comme de la colle qui a besoin de chaleur pour prendre.

Exemple : la peau est super résistante. Pourquoi ? Grâce aux desmosomes qui soudent les cellules entre elles. C'est comme du scotch double-face ultra-fort.

En gros : les jonctions d'ancrage, c'est les boulons et la colle forte qui tiennent les cellules ensemble.`
      },
      {
        title: "📡 Les jonctions communicantes (gap junctions)",
        content: `Ce sont des canaux directs entre deux cellules voisines. Ils relient les cytoplasmes (= l'intérieur) de chaque cellule. Ça permet d'échanger des petites molécules et des ions. C'est comme un tunnel entre deux maisons.

La structure : un connexon = 6 connexines (des protéines) qui forment un canal. Deux connexons (un par cellule) s'alignent. Ça donne un canal complet entre les deux cellules.

La régulation : le canal se ferme quand le calcium intracellulaire augmente. Il se ferme aussi quand le pH baisse (= quand c'est trop acide). C'est un système de sécurité.

Le rôle essentiel : synchroniser les cellules. Par exemple, dans le cœur, les gap junctions permettent à toutes les cellules musculaires de se contracter en même temps. Sans ça, le cœur battrait n'importe comment. C'est comme un groupe WhatsApp où tout le monde reçoit le message en même temps.

En gros : les gap junctions, c'est des tunnels de communication directe entre cellules voisines.`
      },
      {
        title: "📌 Hémidesmosomes et contacts focaux",
        content: `Les jonctions ne relient pas que les cellules entre elles. Certaines fixent les cellules au « sol ». Ce sol, c'est la matrice extracellulaire (= le ciment entre les cellules, la MEC).

• Hémidesmosomes : ils fixent la cellule à la lame basale (= le tapis sous les cellules). Ils utilisent des intégrines α6β4 (des protéines d'ancrage). À l'intérieur, ils sont reliés aux filaments intermédiaires de kératine. C'est comme des pitons d'escalade qui fixent la cellule au mur.

• Contacts focaux (= adhérences focales) : ils fixent aussi la cellule à la MEC, via des intégrines. Mais à l'intérieur, ils sont reliés aux microfilaments d'actine. Et surtout, ils servent à la migration cellulaire (= le déplacement).
→ Les contacts focaux sont dynamiques. Ils se forment à l'avant de la cellule. Ils se détachent à l'arrière. Du coup, la cellule « rampe ». C'est comme un chenille de tank qui avance.

La différence clé :
• Hémidesmosomes → filaments intermédiaires → ancrage STABLE. Ça ne bouge pas.
• Contacts focaux → actine → ancrage DYNAMIQUE. Pour bouger et migrer.

Les intégrines sont les protéines transmembranaires clés dans les deux cas. Elles font le lien entre l'extérieur (fibronectine, laminine) et l'intérieur (le cytosquelette). C'est la poignée de porte qui relie le dehors et le dedans.

En gros : les hémidesmosomes fixent la cellule au sol (stable), les contacts focaux la font ramper (dynamique).`
      },
      {
        title: "🕸️ La matrice extracellulaire (MEC)",
        content: `La MEC, c'est le « ciment » qui entoure les cellules dans les tissus. Mais c'est pas juste un support passif. Elle envoie des signaux. Elle influence comment les cellules se comportent. C'est comme le terrain sur lequel tu construis une maison : il change tout.

Composition :
• Collagène : la protéine la plus abondante du corps humain. Environ 30 % des protéines totales. Ce sont des fibres ultra-résistantes à la traction. On en trouve dans les os, les tendons, la peau. C'est comme des câbles en acier.
• Élastine : des fibres élastiques. Comme un élastique, ça s'étire et ça revient. On en trouve dans les poumons, les artères, la peau.
• Protéoglycanes (= protéines + glycosaminoglycanes, les GAG) : ils forment un gel qui retient l'eau. Ce gel résiste à la compression (= l'écrasement). C'est le truc qui amortit dans le cartilage. Comme le gel dans des semelles de chaussures de sport.
• Glycoprotéines d'adhérence : la fibronectine (elle lie les intégrines au collagène). La laminine (elle est dans la lame basale). Ce sont les agrafes qui tiennent tout ensemble.

La lame basale est une fine couche de MEC sous les cellules épithéliales. Elle contient du collagène IV, de la laminine, et du nidogène. C'est le « tapis » sur lequel les cellules sont posées.

En médecine, c'est super important :
→ Le scorbut (= carence en vitamine C) → le collagène est mal fabriqué → les vaisseaux deviennent fragiles → les dents se déchaussent. Les pirates en souffraient.
→ Le syndrome de Marfan → mutation de la fibrilline (une protéine liée à l'élastine) → l'aorte est fragile → risque de rupture. C'est dangereux.
→ L'invasion tumorale : les cellules cancéreuses fabriquent des métalloprotéases (MMP, des « ciseaux moléculaires »). Elles découpent la MEC pour envahir les tissus voisins. C'est comme un prisonnier qui creuse un tunnel.

En gros : la MEC c'est le ciment, les câbles et le gel qui entourent et soutiennent les cellules.`
      },
      {
        title: "🏥 Pathologies des jonctions cellulaires",
        content: `Les maladies des jonctions tombent souvent en PASS. Voilà celles qu'il faut absolument connaître :

• Pemphigus : c'est une maladie auto-immune. Le corps fabrique des anticorps contre ses propres cadhérines desmosomales (= les desmogléines). Les cellules de la peau ne tiennent plus ensemble. Résultat : des bulles cutanées douloureuses. C'est comme décoller le papier peint d'un mur.
→ Signe de Nikolsky positif : la peau se décolle quand on la frotte. Retiens ce nom.

• Épidermolyse bulleuse : des mutations touchent les protéines des hémidesmosomes (intégrines, collagène VII). Les cellules se détachent du sol (la lame basale). Résultat : des bulles au moindre frottement.
→ On l'appelle parfois « maladie des enfants papillons ». La peau est aussi fragile qu'une aile de papillon.

• Maladie de Crohn et colite ulcéreuse : les jonctions serrées de l'intestin sont abîmées. La barrière fuit. Les bactéries et toxines passent. Ça déclenche une inflammation chronique. C'est comme un barrage qui a des trous.

• Surdité héréditaire : des mutations de la connexine 26 (Cx26) touchent les gap junctions dans la cochlée (= l'organe de l'audition). C'est la cause la plus fréquente de surdité de naissance. Les cellules de l'oreille ne communiquent plus.

• Cancers : quand les cellules perdent la E-cadhérine (une colle entre cellules), c'est mauvais signe. C'est un marqueur de la transition épithélio-mésenchymateuse (= les cellules se détachent et deviennent mobiles). Elles migrent. Et ça donne des métastases (= le cancer se propage). C'est comme des briques qui se détachent du mur et roulent partout.

En gros : quand les jonctions lâchent, ça donne des bulles sur la peau, des fuites dans l'intestin, ou des cancers qui se propagent.`
      },
      {
        title: "🧭 Polarité cellulaire et jonctions",
        content: `Les cellules épithéliales (= celles qui tapissent les surfaces) sont polarisées. Elles ont un « haut » (pôle apical) et un « bas » (pôle basal). C'est comme une maison avec un toit et un sol. Les jonctions jouent un rôle crucial pour garder ce haut et ce bas bien distincts.

L'organisation de haut en bas :
1. Jonctions serrées (tout en haut) → font la barrière + gardent la polarité.
2. Jonctions adhérentes (juste en dessous) → collent les cellules via cadhérines + actine.
3. Desmosomes → donnent la résistance mécanique via filaments intermédiaires.
4. Jonctions communicantes → permettent la communication via connexons.
5. Hémidesmosomes (tout en bas) → fixent la cellule à la lame basale.

Pourquoi la polarité c'est essentiel ?
→ Les protéines de transport ne sont pas au même endroit en haut et en bas.
→ Exemple dans l'intestin : les transporteurs SGLT1 (transport actif du glucose) sont en haut (côté apical). Les transporteurs GLUT2 (diffusion facilitée) sont en bas (côté basal). Le glucose entre activement par le haut. Il sort passivement par le bas. Ça donne une absorption dans un seul sens (= vectorielle). C'est comme un escalator : tu montes d'un côté, tu descends de l'autre.

Si les jonctions serrées sont cassées → les protéines migrent n'importe où entre haut et bas → la polarité disparaît → le tissu ne fonctionne plus. C'est le bazar total.

En gros : les cellules ont un haut et un bas. Si les jonctions lâchent, elles perdent leur sens et le tissu déconne.`
      },
      {
        title: "⚠️ Pièges classiques en QCM",
        content: `Voilà les erreurs les plus courantes sur les jonctions cellulaires. Fais bien attention :

❌ PIÈGE 1 : « Les desmosomes sont reliés aux microfilaments d'actine »
→ FAUX ! Les desmosomes sont reliés aux filaments intermédiaires. Ce sont les jonctions adhérentes qui sont reliées à l'actine. Ne mélange pas les deux.

❌ PIÈGE 2 : « Les cadhérines fonctionnent sans calcium »
→ FAUX ! Les cadhérines ont BESOIN de calcium (Ca²⁺). Sans calcium, elles se déforment. Elles ne collent plus rien. C'est pour ça qu'on utilise l'EDTA (un piège à calcium) pour détacher les cellules en labo.

❌ PIÈGE 3 : « Les jonctions serrées sont les plus résistantes mécaniquement »
→ FAUX ! Les jonctions serrées font l'étanchéité. Pas la résistance. Ce sont les desmosomes qui résistent le mieux aux forces de traction. L'étanchéité et la solidité, c'est pas la même chose.

❌ PIÈGE 4 : « Un connexon = 6 connexons »
→ FAUX ! Un connexon = 6 connexines (des protéines). Un canal complet = 2 connexons (un par cellule). C'est comme un tunnel : il faut deux moitiés pour faire un tunnel entier.

❌ PIÈGE 5 : « Les hémidesmosomes relient deux cellules entre elles »
→ FAUX ! Les hémidesmosomes relient une cellule au sol (la matrice extracellulaire, la lame basale). Pas à une autre cellule. C'est un ancrage au sol, pas un pont.

❌ PIÈGE 6 : « Les intégrines sont des molécules intracellulaires »
→ FAUX ! Les intégrines sont des protéines transmembranaires (= elles traversent la membrane). Elles font le lien entre l'extérieur (la MEC) et l'intérieur (le cytosquelette). Elles sont à cheval entre les deux mondes.`
      },
    ],
  },

  "Le Cytosquelette": {
    images: [
      { file: "cytosquelette-illus-05.webp", caption: "Transport sur un microtubule : la kinésine avance vers le + (vers la membrane), la dynéine vers le − (vers le noyau)." },
    ],
    intro: `Le cytosquelette, c'est le squelette intérieur de la cellule. Mais contrairement à tes os, il est dynamique. Il se monte et se démonte tout le temps. Comme des Lego que tu assembles et démontes selon tes besoins.

Il fait 3 trucs essentiels : il donne sa forme à la cellule, il permet le mouvement, et il transporte des choses à l'intérieur.`,
    sections: [
      {
        title: "🧵 Les 3 types de filaments",
        content: `Le cytosquelette est fait de 3 types de filaments. Du plus fin au plus gros :

• Microfilaments d'actine (7 nm de diamètre) : les plus fins. Ils servent pour la contraction, le mouvement et la division cellulaire. C'est comme des fils de pêche très souples.
• Filaments intermédiaires (10 nm) : les plus résistants. Ils font la charpente mécanique. Comme des poutres dans une maison. On trouve la kératine dans la peau, la vimentine dans d'autres tissus, les neurofilaments dans les neurones.
• Microtubules (25 nm) : les plus gros. Ce sont des tubes creux faits de tubuline (une protéine). Ils servent au transport intracellulaire, à la division (le fuseau mitotique), et aux cils/flagelles. C'est comme des rails de train à l'intérieur de la cellule.

Chaque type a sa protéine de base et ses fonctions propres. Ne les mélange pas.

En gros : 3 types de câbles dans la cellule, du plus fin (actine) au plus gros (microtubule).`
      },
      {
        title: "🚂 Le transport sur les microtubules",
        content: `Les microtubules sont les « rails » de la cellule. Deux moteurs moléculaires (= des protéines qui marchent) se déplacent dessus :

• Kinésine : elle transporte des vésicules (= des petits colis) vers l'extrémité + (vers la membrane). C'est le transport antérograde (= vers l'avant). Pense à un livreur Amazon qui apporte un colis chez toi.
• Dynéine : elle transporte vers l'extrémité − (vers le noyau). C'est le transport rétrograde (= vers l'arrière). Pense au retour colis vers l'entrepôt.

Ces moteurs utilisent l'ATP (= la pile de la cellule) comme carburant. Ils avancent « pas à pas » le long du rail. Ils portent leur cargaison : des vésicules, des organites (= petits organes de la cellule), des mitochondries.

C'est grâce à ce système que les neurotransmetteurs (= les messagers du cerveau) voyagent du corps du neurone jusqu'à la synapse (= le point de connexion). Parfois sur plus d'un mètre ! C'est comme envoyer un colis d'un bout à l'autre d'une autoroute.

En gros : kinésine = livreur vers la membrane, dynéine = livreur vers le noyau. Ils marchent sur les rails (microtubules).`
      },
      {
        title: "🔑 Rôle dans la division cellulaire",
        content: `Pendant la mitose (= la division de la cellule en deux), les microtubules forment le fuseau mitotique. Ce fuseau sépare les chromosomes (= les paquets d'ADN). C'est comme deux grues qui tirent chacune de leur côté.

Le mécanisme en 3 étapes :
1. Les centrosomes (= les centres organisateurs) migrent aux deux extrémités de la cellule. C'est comme deux équipes qui se placent de chaque côté du terrain.
2. Les microtubules s'allongent et s'attachent aux chromosomes via les kinétochores (= des points d'accroche sur les chromosomes).
3. Les microtubules se raccourcissent (dépolymérisation). Ça tire les chromosomes vers les pôles. Chaque côté récupère une copie.

Des médicaments anticancéreux ciblent ce mécanisme. Le taxol et la vincristine bloquent les microtubules. La cellule ne peut plus se diviser. Elle meurt. C'est comme bloquer les grues : le chantier s'arrête.

En gros : pour se diviser, la cellule utilise des câbles (microtubules) qui tirent les chromosomes. Les anticancéreux bloquent ces câbles.`
      },
      {
        title: "🏃 Dynamique de l'actine et motilité cellulaire",
        content: `L'actine est la protéine la plus abondante dans les cellules eucaryotes (= les cellules avec un noyau). Elle existe sous deux formes :
• Actine G (= globulaire) : c'est le monomère libre (une bille seule dans le cytoplasme).
• Actine F (= filamenteuse) : c'est le polymère (plein de billes assemblées en double hélice, comme un collier de perles torsadé).

La polymérisation (= l'assemblage) est polarisée. Ça veut dire qu'il y a un sens :
→ Extrémité + (barbed end) : ça s'assemble vite ici. Les monomères s'ajoutent.
→ Extrémité − (pointed end) : ça se désassemble lentement ici.

Ce phénomène de « tapis roulant » (treadmilling) fait avancer la cellule :
1. L'actine polymérise à l'avant. Ça pousse la membrane et forme le lamellipode (= un voile de membrane, comme un pied plat).
2. Les filopodes (= des doigts d'actine) explorent l'environnement. Comme des antennes de fourmi.
3. Des contacts focaux s'établissent avec le sol (le substrat).
4. L'actine se contracte à l'arrière grâce à la myosine II (un moteur). La cellule avance. Comme une chenille de char.

Les protéines qui régulent tout ça :
• Profiline : elle aide l'assemblage. C'est un accélérateur.
• Cofiline : elle aide le désassemblage. C'est un frein.
• Arp2/3 : elle crée des branches dans le réseau d'actine. Comme des embranchements sur une route.
• Formines : elles allongent les filaments droits (non branchés).

Analogie : imagine un escalator qui monte d'un côté (assemblage au +) et descend de l'autre (désassemblage au −). Le filament « avance » sans bouger dans son ensemble.

En gros : l'actine s'assemble devant et se désassemble derrière, et ça fait avancer la cellule. Comme un tapis roulant.`
      },
      {
        title: "🌊 Cils, flagelles et centrosome",
        content: `Les cils et flagelles sont des extensions de la cellule. Ils sont construits sur un squelette de microtubules (des tubes creux). Ils permettent le mouvement.

La structure (axonème) : arrangement « 9+2 ».
→ 9 doublets de microtubules en cercle + 2 microtubules au centre.
→ La dynéine axonémale (un moteur protéique) fait glisser les doublets. Ça crée un mouvement de battement. Comme un essuie-glace.

Les types de cils :
• Cils motiles (= qui bougent) : ils battent de façon coordonnée. Ça pousse du liquide en surface.
  → Exemple : dans les bronches, les cils poussent le mucus vers la gorge. C'est l'escalator mucociliaire. C'est comme un tapis roulant qui évacue les saletés.
  → La dyskinésie ciliaire primitive (syndrome de Kartagener) : mutation de la dynéine → les cils ne bougent plus → infections respiratoires à répétition + situs inversus (les organes sont à l'envers).

• Cils primaires (= pas motiles, juste sensoriels) : il y en a un seul par cellule. Structure « 9+0 » (pas de paire centrale).
  → Rôle d'antenne : ils captent des signaux (voie Hedgehog, signaux mécaniques). C'est comme l'antenne de ta télé.
  → Polykystose rénale : les cils primaires des reins marchent mal → des kystes se forment.

• Flagelle : même structure 9+2 que les cils motiles. Mais beaucoup plus long. C'est la « queue » du spermatozoïde. Il sert de propulseur. Comme l'hélice d'un bateau.

Le centrosome (= 2 centrioles + du matériel autour) est le centre organisateur des microtubules (MTOC). Il lance la fabrication des microtubules à partir de γ-tubuline. Il joue un rôle clé dans le fuseau mitotique (la division).

En gros : les cils et flagelles bougent grâce aux microtubules. Les cils motiles = essuie-glaces. Le flagelle = hélice de bateau.`
      },
      {
        title: "💪 Bases de la contraction musculaire",
        content: `La contraction musculaire, c'est LE grand exemple du cytosquelette en action. Voilà comment ça marche.

Le sarcomère (= l'unité de contraction du muscle strié) :
• Filaments épais : faits de myosine II (un moteur moléculaire). C'est le bras qui tire.
• Filaments fins : faits d'actine F + tropomyosine + troponine. C'est le câble qui est tiré.

Le mécanisme de contraction (modèle du glissement des filaments) :
1. Un influx nerveux arrive. Ça libère de l'acétylcholine. La membrane se dépolarise. C'est le signal de départ.
2. Le Ca²⁺ (calcium) sort du réticulum sarcoplasmique (= le stock de calcium dans le muscle).
3. Le Ca²⁺ se fixe sur la troponine C. Ça change la forme de la protéine.
4. La tropomyosine se déplace. Les sites sur l'actine deviennent accessibles. C'est comme enlever un cache.
5. La tête de myosine se fixe à l'actine. Elle fait un « coup de rame » grâce à l'hydrolyse de l'ATP (= elle casse l'ATP pour avoir de l'énergie).
6. Le filament d'actine glisse. Le sarcomère raccourcit. Ça donne la contraction.

Les bandes du sarcomère (les zones qu'on voit au microscope) :
• Bande A : zone sombre (myosine avec ou sans actine). Sa longueur ne change PAS pendant la contraction. C'est le truc piège.
• Bande I : zone claire (actine seule). Elle raccourcit.
• Bande H : zone centrale (myosine seule). Elle raccourcit aussi.
• Ligne Z : la limite du sarcomère. C'est le bord.
• Ligne M : le centre du sarcomère.

Retiens : la rigidité cadavérique (rigor mortis) s'explique par le manque d'ATP. Sans ATP, les têtes de myosine restent accrochées à l'actine. Les muscles sont bloqués en contraction. Comme un verrou coincé.

En gros : le muscle se contracte parce que l'actine glisse le long de la myosine, grâce au calcium et à l'ATP.`
      },
      {
        title: "💊 Drogues anti-cytosquelette et applications anticancéreuses",
        content: `Le cytosquelette est une cible majeure en chimiothérapie (= traitement anticancéreux). Les cellules tumorales se divisent très vite. Elles sont donc vulnérables aux drogues qui bloquent le fuseau mitotique (= la machine de division). C'est comme saboter la photocopieuse d'un faussaire.

Drogues qui ciblent les MICROTUBULES :

• Taxol (paclitaxel) : extrait de l'if du Pacifique (un arbre).
  → Il STABILISE les microtubules. Il empêche le désassemblage.
  → Le fuseau se forme mais ne peut plus se défaire.
  → La cellule reste bloquée en métaphase (= milieu de division). Elle finit par mourir (apoptose).
  → On l'utilise contre les cancers du sein, de l'ovaire, du poumon.

• Vincristine / Vinblastine : extraites de la pervenche de Madagascar (une plante).
  → Elles DÉSTABILISENT les microtubules. Elles empêchent l'assemblage.
  → Le fuseau ne peut pas se former du tout.
  → On les utilise dans les leucémies et les lymphomes.

• Colchicine : extraite du colchique d'automne (une fleur).
  → Elle se colle à la tubuline libre. Elle bloque l'assemblage.
  → En médecine, on l'utilise contre la goutte. En labo, elle sert à bloquer les cellules en métaphase pour faire un caryotype (= photo des chromosomes).

Drogues qui ciblent l'ACTINE (surtout utilisées en recherche) :
• Phalloïdine (toxine du champignon amanite phalloïde) : elle stabilise l'actine.
• Cytochalasine : elle empêche l'assemblage de l'actine.
• Latrunculine : elle séquestre les billes d'actine G. Plus de billes libres = pas d'assemblage.

Moyen mnémotechnique : « Taxol TAXE les microtubules (les fige), Vincristine les VINCE (les détruit) ».

En gros : le taxol fige les microtubules, la vincristine les détruit. Les deux bloquent la division des cellules cancéreuses.`
      },
      {
        title: "⚠️ Pièges classiques en QCM",
        content: `Voilà les erreurs les plus courantes sur le cytosquelette. Lis bien :

❌ PIÈGE 1 : « Les filaments intermédiaires sont dynamiques comme l'actine et les microtubules »
→ FAUX ! Les filaments intermédiaires sont les PLUS STABLES des trois types. Ils ne se montent et démontent pas comme les autres. Ils résistent aux détergents et au sel. Ce sont des poutres fixes.

❌ PIÈGE 2 : « La kinésine transporte vers le noyau »
→ FAUX ! La kinésine va vers l'extrémité + (= vers la membrane). C'est le transport antérograde. C'est la dynéine cytoplasmique qui va vers le − (= vers le noyau). C'est le transport rétrograde. Retiens : Kinésine = vers la membrane.

❌ PIÈGE 3 : « Le taxol dépolymérise les microtubules »
→ FAUX ! Le taxol STABILISE les microtubules. Il empêche le désassemblage. C'est la vincristine qui empêche l'assemblage. Ils ont des effets OPPOSÉS. Mais le résultat est le même : la division est bloquée.

❌ PIÈGE 4 : « Les microtubules sont constitués d'actine »
→ FAUX ! Les microtubules sont faits de tubuline (α et β). L'actine, ça fait les microfilaments. Ne mélange pas les protéines.

❌ PIÈGE 5 : « Les cils ont une structure 9+0 »
→ ATTENTION ! Les cils MOTILES (qui bougent) ont une structure 9+2 (avec la paire centrale). Ce sont les cils PRIMAIRES (= sensoriels, qui ne bougent pas) qui ont une structure 9+0. La différence est importante.

❌ PIÈGE 6 : « La bande A change de taille pendant la contraction »
→ FAUX ! La bande A (= zone sombre avec la myosine) garde une longueur constante. Ce sont les bandes I et H qui raccourcissent. C'est un classique en QCM.`
      },
    ],
  },

  "Communication intercellulaire": {
    images: [
      { file: "communication-cellulaire-partie-1-illus-10.webp", caption: "Récepteur membranaire avec ses sous-unités (α, β, γ) : le ligand se fixe et ouvre un canal ionique." },
    ],
    intro: `Les cellules de ton corps ne bossent pas toutes seules. Elles se parlent en permanence. Une cellule envoie un signal. Le signal voyage. Une autre cellule le reçoit et réagit. C'est la signalisation cellulaire. C'est comme un réseau de téléphones entre toutes les cellules.

C'est grâce à ce système que ton cœur bat. Que tes muscles se contractent. Que ton système immunitaire combat les infections.`,
    sections: [
      {
        title: "📨 Les types de signalisation",
        content: `Ça dépend de la distance entre l'émetteur (= celui qui envoie) et le récepteur (= celui qui reçoit) :

• Endocrine : le signal (= une hormone) voyage dans le sang. Il va loin. Par exemple, l'insuline part du pancréas et arrive aux muscles. C'est comme envoyer un colis par La Poste.
• Paracrine : le signal agit sur les cellules juste à côté. Par exemple, les facteurs de croissance. C'est comme parler à son voisin par-dessus la haie.
• Autocrine : la cellule s'envoie un signal à elle-même. C'est comme se laisser un post-it sur le frigo.
• Synaptique : communication ultra-rapide entre neurones. Via les neurotransmetteurs (= messagers chimiques du cerveau). C'est comme un message instantané.
• Contact direct : les cellules se touchent et communiquent via des protéines de surface. C'est comme se serrer la main.

Le messager chimique (= le ligand) c'est la molécule qui porte le signal. Ça peut être une hormone, un neurotransmetteur, un facteur de croissance.

En gros : les cellules communiquent à courte ou longue distance, par différents types de messages chimiques.`
      },
      {
        title: "🎯 Les récepteurs",
        content: `Pour « entendre » un signal, la cellule cible a des récepteurs (= des antennes). C'est comme une clé et une serrure. Chaque ligand (= clé) se fixe sur SON récepteur (= serrure). Pas un autre.

3 grandes familles de récepteurs sur la membrane :
• Récepteurs couplés aux protéines G (RCPG) : les plus nombreux. Il y en a environ 800 chez l'Homme. Ils activent une protéine G à l'intérieur. Ça déclenche une cascade de réactions. C'est comme appuyer sur un interrupteur qui allume une chaîne de dominos.
• Récepteurs à activité enzymatique : le récepteur est lui-même une enzyme (= un outil chimique). Exemple : le récepteur de l'insuline est une tyrosine kinase.
• Récepteurs-canaux : quand le ligand se fixe, ça ouvre un canal ionique (= un trou pour les ions). Exemple : le récepteur nicotinique de l'acétylcholine. C'est comme ouvrir une vanne.

Certains récepteurs sont à l'intérieur de la cellule (= récepteurs nucléaires). Le ligand traverse la membrane. Il agit directement sur les gènes (= l'ADN). Exemple : les hormones stéroïdiennes (comme la testostérone, le cortisol). Elles sont lipophiles (= elles aiment le gras), donc elles passent la membrane facilement.

En gros : les récepteurs sont des antennes qui captent des signaux spécifiques. Chaque signal a son antenne.`
      },
      {
        title: "⚡ La transduction du signal",
        content: `La transduction, c'est la conversion du signal extérieur en réponse intérieure. Le message arrive de dehors. Il est transformé en action à l'intérieur. C'est comme recevoir une notification sur ton téléphone et agir en conséquence.

Ça marche en cascade. Chaque étape amplifie le signal :
1. Le ligand (= le messager) se fixe sur le récepteur. C'est le signal de départ.
2. Des protéines relais s'activent à l'intérieur. Ce sont les protéines G, les kinases, etc.
3. Des seconds messagers (= des petites molécules signal) sont produits. Comme l'AMPc, le Ca²⁺, l'IP3.
4. Des protéines effectrices (= celles qui agissent) s'activent. Des enzymes, des facteurs de transcription (= des interrupteurs de gènes).
5. La cellule répond : contraction, sécrétion (= libération de substances), division, ou apoptose (= mort programmée).

Un seul ligand peut activer des milliers de molécules en cascade. C'est une amplification énorme. C'est comme un seul domino qui en fait tomber 10 000. Un petit signal → une grosse réponse.

En gros : le signal de dehors est converti et amplifié à l'intérieur de la cellule, comme un mégaphone.`
      },
      {
        title: "🔗 Cascade des protéines G en détail",
        content: `Les récepteurs couplés aux protéines G (RCPG) sont la plus grande famille de récepteurs membranaires. C'est important de comprendre comment ils marchent.

La structure du RCPG : c'est une protéine avec 7 passages à travers la membrane (7TM). Le côté extérieur fixe le ligand. Le côté intérieur parle à la protéine G. C'est comme un interphone : un micro dehors, un haut-parleur dedans.

La protéine G est un hétérotrimère (= 3 sous-unités différentes) : α, β, γ.
• Au repos : la sous-unité Gα est liée au GDP (= inactive). Elle est collée à βγ. Tout le monde dort.
• Quand le signal arrive :
  1. Le ligand se fixe sur le RCPG. Le récepteur change de forme.
  2. Le récepteur active la protéine G. Le GDP est échangé contre du GTP sur Gα. C'est comme charger la pile.
  3. Gα-GTP se sépare de βγ. Les deux peuvent agir sur des cibles en aval.
  4. Gα a une activité GTPase (= elle casse le GTP en GDP toute seule). Ça la désactive. Retour au repos.

Les types de sous-unités Gα :
• Gαs (= stimulatrice) : elle active l'adénylate cyclase (une enzyme). Ça augmente l'AMPc (un second messager).
  → Exemple : le récepteur β-adrénergique. L'adrénaline se fixe dessus au niveau du cœur. Résultat : le cœur bat plus vite.
• Gαi (= inhibitrice) : elle inhibe l'adénylate cyclase. Ça baisse l'AMPc.
  → Exemple : le récepteur muscarinique M2. L'acétylcholine se fixe dessus au cœur. Résultat : le cœur ralentit.
• Gαq : elle active la phospholipase C (PLC). Ça produit de l'IP3 et du DAG (deux seconds messagers).

Les toxines qui plantent le système :
→ Toxine cholérique (= choléra) : elle bloque l'activité GTPase de Gαs. Du coup Gαs reste active tout le temps. L'AMPc monte en flèche. L'intestin sécrète plein d'eau et d'ions. Résultat : diarrhée mortelle. C'est comme un robinet bloqué ouvert.
→ Toxine pertussique (= coqueluche) : elle bloque Gαi. Gαi ne peut plus freiner l'adénylate cyclase. L'AMPc monte aussi.

En gros : les RCPG activent des protéines G qui déclenchent des cascades. Gαs accélère, Gαi freine, Gαq active une autre voie.`
      },
      {
        title: "📬 Les seconds messagers : AMPc, IP3, Ca²⁺, DAG",
        content: `Les seconds messagers sont des petites molécules qui relaient et amplifient le signal à l'intérieur de la cellule. Le premier messager c'est le ligand (dehors). Le second messager c'est le relais (dedans). C'est comme un message qui passe de main en main.

1. AMPc (AMP cyclique) :
• Fabriqué par l'adénylate cyclase (à partir d'ATP).
• Dégradé (= détruit) par les phosphodiestérases (PDE).
• Il active la protéine kinase A (PKA). La PKA ajoute des phosphates sur des protéines. Ça change leur comportement.
→ Le café (caféine) bloque les PDE. Du coup l'AMPc s'accumule. Ça donne l'effet stimulant. Ton café du matin empêche la dégradation d'un second messager.
→ Le Viagra (sildénafil) bloque la PDE5. Le GMPc (un cousin de l'AMPc) s'accumule. Ça dilate les vaisseaux sanguins.

2. IP3 (inositol 1,4,5-trisphosphate) et DAG (diacylglycérol) :
• Produits par la phospholipase C (PLC) à partir du PIP2 (un lipide de la membrane).
• IP3 → il va se fixer sur des récepteurs du RE (réticulum endoplasmique). Ça libère du Ca²⁺ dans le cytoplasme. C'est comme ouvrir les vannes d'un barrage.
• DAG → il reste dans la membrane. Il active la protéine kinase C (PKC).

3. Ca²⁺ (calcium) :
• Le Ca²⁺ est un second messager universel. Il fait tout, partout.
• Au repos, sa concentration dans le cytoplasme est ~100 nM. C'est 10 000 fois moins que dans le RE ou dehors. La cellule garde le calcium très bas au repos.
• Quand le Ca²⁺ est libéré, il se fixe sur la calmoduline (une protéine). Le complexe Ca²⁺-calmoduline active plein de kinases (CaMK). C'est un amplificateur de signal.
→ Dans le muscle : le Ca²⁺ se fixe sur la troponine C. Ça déclenche la contraction.

Retiens cette chaîne. Elle tombe tout le temps en QCM :
Gαq → PLC → PIP2 → IP3 + DAG
IP3 → le Ca²⁺ sort du RE dans le cytoplasme
DAG → active la PKC

En gros : les seconds messagers (AMPc, Ca²⁺, IP3, DAG) sont les relais internes qui amplifient le signal du récepteur.`
      },
      {
        title: "🧪 Les récepteurs à activité tyrosine kinase (RTK)",
        content: `Les RTK sont des récepteurs qui sont aussi des enzymes. Leur partie intracellulaire (= côté intérieur) a une activité tyrosine kinase. Ça veut dire qu'ils collent des phosphates sur des tyrosines (un acide aminé). C'est comme un tampon encreur qui marque les protéines.

Exemples importants de RTK :
• Récepteur de l'insuline.
• Récepteur de l'EGF (= facteur de croissance épidermique).
• Récepteur du VEGF (= facteur de croissance des vaisseaux).
• Récepteur du PDGF (= facteur de croissance des plaquettes).

Comment ça s'active :
1. Le ligand se fixe. Les deux récepteurs s'assemblent (= dimérisation). C'est comme joindre deux pièces de puzzle.
2. Trans-autophosphorylation : chaque moitié ajoute des phosphates sur l'autre moitié. Elles se marquent mutuellement.
3. Les tyrosines phosphorylées deviennent des points d'accroche. Des protéines avec un domaine SH2 (= une main qui attrape les phosphates) viennent s'y fixer.
4. Ça active des voies de signalisation en aval (= en dessous dans la cascade).

La voie des MAP kinases (Ras-Raf-MEK-ERK) :
→ Ras (une petite protéine G) → Raf (MAPKKK) → MEK (MAPKK) → ERK (MAPK).
→ ERK entre dans le noyau. Il active des facteurs de transcription (= des interrupteurs de gènes). Résultat : la cellule se multiplie. C'est comme appuyer sur le bouton « copier ».

La voie PI3K/Akt :
→ PI3K → PIP3 → Akt. Résultat : survie cellulaire et croissance. La cellule refuse de mourir.

Importance en cancérologie (= étude des cancers) :
→ Des mutations de Ras qui l'activent en permanence sont trouvées dans environ 30 % des cancers humains. Ras muté dit tout le temps « multiplie-toi ». C'est un accélérateur coincé.
→ Les thérapies ciblées visent les RTK mutés : imatinib (Glivec) contre BCR-ABL, trastuzumab (Herceptin) contre HER2 dans le cancer du sein. Ce sont des médicaments ultra-précis.

En gros : les RTK sont des récepteurs-enzymes qui activent la prolifération. Quand ils mutent, ça peut donner un cancer.`
      },
      {
        title: "🔇 Désensibilisation et terminaison du signal",
        content: `Une cellule ne peut pas rester excitée pour toujours. Il faut couper le signal à un moment. C'est la désensibilisation. C'est comme mettre ton téléphone en mode avion après trop de notifications.

Pour les RCPG, voilà comment ça se passe :
1. Les GRK (= des kinases spécialisées) ajoutent des phosphates sur le récepteur activé. Le récepteur phosphorylé recrute la β-arrestine.
2. La β-arrestine empêche la protéine G de se coupler au récepteur. C'est le découplage. Le signal est coupé.
3. Le récepteur est avalé par endocytose (= internalisé) dans des vésicules à clathrine. Il rentre dans la cellule.
4. Dans l'endosome (= la vésicule de tri) : soit il est recyclé vers la membrane (= resensibilisation). Soit il est détruit dans le lysosome (= down-regulation, on baisse le nombre de récepteurs).

Analogie : c'est comme un téléphone. Tu décroches (activation). Tu mets en mode avion (désensibilisation). Tu ranges le téléphone dans un tiroir (internalisation). Ou tu le jettes à la poubelle (dégradation).

D'autres façons de couper le signal :
• La sous-unité Gα casse son GTP en GDP. Elle redevient inactive. C'est automatique.
• Les seconds messagers sont détruits : l'AMPc par les phosphodiestérases, l'IP3 par des phosphatases (des enzymes qui enlèvent les phosphates).
• Les protéines phosphorylées sont déphosphorylées par des phosphatases (PP1, PP2A). On enlève les marques.
• Le Ca²⁺ est repompé par les pompes SERCA (vers le RE) et PMCA (vers l'extérieur). Le calcium redescend au repos.

En médecine, c'est important :
→ L'asthme : les bronches se désensibilisent aux agonistes β2. Il faut augmenter les doses de ventoline. Le téléphone ne répond plus aussi bien.
→ La tolérance aux opioïdes : les récepteurs μ se désensibilisent progressivement. Il faut augmenter les doses pour le même effet antidouleur.

En gros : après le signal, la cellule coupe la communication et range ses récepteurs. Sinon elle serait excitée en permanence.`
      },
      {
        title: "⚠️ Pièges classiques en QCM",
        content: `Voilà les erreurs les plus courantes sur la communication intercellulaire :

❌ PIÈGE 1 : « La protéine G est un récepteur »
→ FAUX ! La protéine G est un RELAIS intracellulaire (= à l'intérieur). Le récepteur c'est le RCPG (7TM, avec 7 passages transmembranaires). La protéine G est activée PAR le récepteur. Ce n'est pas la même chose.

❌ PIÈGE 2 : « L'AMPc est produit par la protéine G »
→ FAUX ! L'AMPc est fabriqué par l'adénylate cyclase (une enzyme). La protéine Gαs active l'adénylate cyclase. Et c'est l'adénylate cyclase qui fabrique l'AMPc à partir d'ATP. Gαs commande, l'adénylate cyclase exécute.

❌ PIÈGE 3 : « La signalisation autocrine agit sur les cellules voisines »
→ FAUX ! Autocrine = la cellule agit sur ELLE-MÊME. C'est la signalisation paracrine qui agit sur les voisines. Auto = soi-même. Para = à côté.

❌ PIÈGE 4 : « Les récepteurs nucléaires sont sur la membrane »
→ FAUX ! Les récepteurs nucléaires sont INTRACELLULAIRES. Ils sont dans le cytoplasme ou le noyau. Leurs ligands (hormones stéroïdiennes, hormones thyroïdiennes, vitamine D) sont lipophiles (= aiment le gras). Ils traversent la membrane sans problème.

❌ PIÈGE 5 : « La dimérisation des RTK se fait AVANT la fixation du ligand »
→ FAUX ! C'est la fixation du ligand qui PROVOQUE la dimérisation. D'abord le signal, ensuite l'assemblage. Exception : le récepteur de l'insuline est déjà assemblé (dimérique) avant le signal. Mais c'est l'exception, pas la règle.

❌ PIÈGE 6 : « Le Ca²⁺ est un premier messager »
→ FAUX ! Le Ca²⁺ intracellulaire est un SECOND messager. Le premier messager c'est le ligand extracellulaire (l'hormone, le neurotransmetteur). Premier = dehors. Second = dedans.

❌ PIÈGE 7 : « La toxine cholérique inhibe la protéine Gs »
→ FAUX ! La toxine cholérique ACTIVE Gαs de façon permanente. Elle bloque son activité GTPase. Gαs ne peut plus se désactiver. C'est la toxine pertussique (coqueluche) qui bloque Gi. Choléra = Gs bloquée active. Coqueluche = Gi bloquée inactive.`
      },
    ],
  },

  "Systèmes endomembranaires": {
    images: [
      { file: "syst-me-endomembranaire-illus-12.webp", caption: "Le réticulum endoplasmique : le RE rugueux (ribosomes) fabrique les protéines, le RE lisse synthétise les lipides." },
      { file: "syst-me-endomembranaire-illus-05.webp", caption: "Vue d'ensemble : RE rugueux, RE lisse, appareil de Golgi et noyau forment un réseau connecté." },
    ],
    intro: `À l'intérieur de la cellule eucaryote (= cellule avec un noyau), il y a tout un réseau de membranes internes. C'est le système endomembranaire. C'est une vraie usine. Elle fabrique des protéines et des lipides. Elle les trie. Elle les expédie au bon endroit. C'est comme Amazon : fabrication, emballage, tri, livraison.

Les acteurs principaux : le réticulum endoplasmique (RE), l'appareil de Golgi, les lysosomes, et les vésicules de transport.`,
    sections: [
      {
        title: "🏭 Le réticulum endoplasmique (RE)",
        content: `Le RE est un réseau de membranes qui part du noyau et s'étend vers les bords de la cellule. C'est comme un réseau de tunnels. Il existe en deux versions :

• RE rugueux (REG) : couvert de ribosomes (= les machines à fabriquer des protéines). Il fabrique les protéines qui seront sécrétées (= envoyées dehors), insérées dans la membrane, ou envoyées aux lysosomes (= les poubelles). C'est l'usine de production.
• RE lisse (REL) : sans ribosomes. Il fabrique les lipides (= les graisses). Il détoxifie les médicaments et les drogues. Il stocke le calcium. C'est le labo chimique et le coffre-fort à calcium.

Le RE rugueux est très développé dans les cellules qui fabriquent beaucoup de protéines. Par exemple : les cellules du pancréas (insuline). Les plasmocytes (anticorps).
Le RE lisse est très développé dans les cellules du foie (détoxification) et les cellules musculaires (stockage du calcium).

En gros : le RE rugueux fabrique les protéines, le RE lisse fabrique les graisses et détoxifie. Deux usines dans une cellule.`
      },
      {
        title: "📦 L'appareil de Golgi",
        content: `L'appareil de Golgi, c'est la « station de tri et d'emballage » de la cellule. Il reçoit les protéines du RE. Il les modifie. Il les trie. Il les envoie au bon endroit. C'est comme un centre de tri postal.

La structure : c'est un empilement de sacs plats (= saccules ou citernes). Il y a une face cis (= côté RE, l'entrée). Et une face trans (= côté membrane, la sortie). Les protéines entrent par le cis et sortent par le trans. C'est un sens unique.

Ce que fait le Golgi :
• Il modifie les protéines : glycosylation (= ajout de sucres), phosphorylation (= ajout de phosphates).
• Il trie : chaque protéine reçoit une « étiquette » moléculaire. Cette étiquette dit où elle doit aller.
• Il emballe : il forme des vésicules de transport (= des petits colis).

Les protéines reçoivent une « adresse postale » chimique. C'est elle qui détermine la destination finale : la membrane, les lysosomes, ou la sécrétion vers l'extérieur.

En gros : le Golgi c'est le centre de tri postal de la cellule. Il modifie, étiquette et expédie les protéines.`
      },
      {
        title: "🗑️ Les lysosomes",
        content: `Les lysosomes sont les « poubelles de recyclage » de la cellule. Ce sont des vésicules (= des petites bulles) remplies d'enzymes digestives. On les appelle hydrolases acides. Elles dégradent (= découpent) :

• Les molécules venues de l'extérieur (bactéries, débris). C'est l'hétérophagie (= manger l'autre).
• Les vieux organites (= les pièces usées) de la cellule. C'est l'autophagie (= se manger soi-même).

Le pH à l'intérieur du lysosome est très acide : environ 4,5. C'est grâce à des pompes à protons (= des pompes qui envoient des H⁺ dedans). C'est comme de l'acide gastrique mais en miniature.

Et si le lysosome se casse ? Pas de panique. Les enzymes ne fonctionnent pas au pH neutre du cytoplasme (= pH 7). Elles sont inactives dehors. C'est un mécanisme de sécurité.

Les maladies lysosomales : quand une enzyme du lysosome est absente ou déficiente, les déchets s'accumulent. Ça donne des maladies de surcharge. Comme Gaucher ou Tay-Sachs. C'est comme une poubelle qui ne se vide plus.

En gros : les lysosomes digèrent les déchets de la cellule dans un milieu super acide. Si ça marche pas, les déchets s'accumulent.`
      },
      {
        title: "🚚 Le transport vésiculaire : COPI, COPII et clathrine",
        content: `Les protéines voyagent entre les différents compartiments du système endomembranaire dans des vésicules (= des petites bulles de membrane). Chaque type de vésicule a son « manteau » (= un revêtement protéique). C'est comme des camions avec des logos différents.

• Vésicules COPII : du RE vers le Golgi. C'est le transport antérograde (= vers l'avant).
  → Elles sélectionnent les protéines bien repliées (= bien formées) et les « emballent » pour le Golgi.
  → Elles partent du RE de transition (ERGIC), la zone de bourgeonnement.
  → Pense à un camion qui part de l'usine vers le centre de tri.

• Vésicules COPI : du Golgi vers le RE. C'est le transport rétrograde (= retour en arrière).
  → Elles ramènent les protéines du RE qui se sont « échappées » vers le Golgi par erreur.
  → Le signal KDEL (= Lys-Asp-Glu-Leu, 4 acides aminés) sur une protéine veut dire : « ramène-moi au RE ! ». C'est comme une étiquette « retour à l'envoyeur ».
  → Elles font aussi du transport rétrograde entre les citernes du Golgi.

• Vésicules à clathrine : du Golgi vers les lysosomes, et de la membrane vers l'intérieur (endocytose).
  → La clathrine forme un treillis en « cage de football » autour de la vésicule. C'est beau au microscope.
  → Les adaptines font le lien entre la clathrine et les protéines cargo (= les marchandises).
  → La dynamine (une GTPase) « pince » et détache la vésicule. C'est comme couper le cordon.

Analogie postale :
→ COPII = le camion qui part de l'usine (RE) vers le centre de tri (Golgi).
→ COPI = le camion retour qui ramène les colis mal adressés.
→ Clathrine = le livreur qui distribue au bon destinataire.

Les v-SNARE (sur la vésicule) et t-SNARE (sur la cible) assurent la reconnaissance. C'est le système « clé-serrure ». Chaque vésicule fusionne avec le BON compartiment. Pas de livraison au mauvais endroit.

En gros : COPII = RE vers Golgi. COPI = Golgi vers RE. Clathrine = livraison finale. Chacun a son rôle.`
      },
      {
        title: "🍬 La glycosylation des protéines",
        content: `La glycosylation, c'est quand on ajoute des chaînes de sucres (= oligosaccharides) sur les protéines. C'est une modification post-traductionnelle (= après la fabrication de la protéine). C'est super important.

Deux types de glycosylation :

1. N-glycosylation (sur l'azote de l'asparagine, dans le motif Asn-X-Ser/Thr) :
  → Ça commence dans le RE. Un précurseur de 14 sucres est collé en bloc sur la protéine. C'est l'oligosaccharyltransférase (OST) qui fait le boulot.
  → Le précurseur est porté par le dolichol-phosphate (un lipide de la membrane du RE). C'est le transporteur.
  → La maturation se fait dans le Golgi : on enlève des sucres (élagage). Puis on en rajoute d'autres.

2. O-glycosylation (sur l'oxygène de la sérine ou de la thréonine) :
  → Ça se fait uniquement dans le Golgi. Pas dans le RE.
  → Les sucres sont ajoutés un par un. Pas de précurseur en bloc.

À quoi ça sert la glycosylation :
• Protection des protéines : les sucres forment un « bouclier ». Ça empêche les protéines d'être découpées (protéolyse).
• Bon repliement : dans le RE, la calnexine et la calréticuline vérifient que les sucres sont bien placés. Si oui, la protéine est bien repliée.
• Reconnaissance cellulaire : les groupes sanguins ABO sont déterminés par des sucres à la surface des globules rouges. Ton groupe sanguin, c'est une question de sucres.
• Adressage vers les lysosomes : le mannose-6-phosphate (M6P) c'est le « code postal » qui envoie les protéines vers les lysosomes.

Le contrôle qualité dans le RE :
→ Si une protéine est mal repliée, le cycle calnexine/calréticuline essaie de la corriger. C'est comme un contrôle qualité en usine.
→ Si elle reste mal repliée → ERAD (= dégradation associée au RE). La protéine est renvoyée dans le cytoplasme. Elle est marquée par de l'ubiquitine (= un autocollant « à jeter »). Le protéasome (= le broyeur) la détruit.

En gros : la glycosylation ajoute des sucres sur les protéines pour les protéger, les plier correctement et les adresser au bon endroit.`
      },
      {
        title: "📤 Exocytose constitutive vs régulée",
        content: `L'exocytose, c'est quand des vésicules intracellulaires fusionnent avec la membrane. Leur contenu est libéré à l'extérieur. C'est comme ouvrir un colis par la fenêtre et lancer le contenu dehors.

Deux modes d'exocytose :

1. Exocytose constitutive (= permanente, en continu) :
  → Ça se produit tout le temps. Pas besoin de signal particulier.
  → Ça libère des protéines de la MEC (collagène, fibronectine).
  → Ça renouvelle les lipides et protéines de la membrane.
  → Toutes les cellules le font. C'est la base.
  → Analogie : un robinet qui coule en permanence.

2. Exocytose régulée (= sur demande, seulement quand on le décide) :
  → Ça ne se produit qu'en réponse à un signal spécifique. Souvent une montée du Ca²⁺ (calcium).
  → Les vésicules de sécrétion sont stockées en attendant le signal. Prêtes à partir.
  → Exemples :
    • Sécrétion d'insuline par les cellules β du pancréas. Le signal : le glucose monte → le Ca²⁺ monte → l'insuline sort.
    • Libération de neurotransmetteurs à la synapse. Le signal : l'influx nerveux arrive → le Ca²⁺ monte → les neurotransmetteurs sont lâchés.
    • Dégranulation des mastocytes (= cellules de l'allergie). Le signal : allergène + IgE → le Ca²⁺ monte → l'histamine est libérée → ça gratte et ça gonfle.
  → Analogie : un barrage qu'on ouvre à la demande.

Le rôle du Ca²⁺ dans l'exocytose régulée :
→ Les synaptotagmines sont des « capteurs » de Ca²⁺ sur les vésicules. Quand le Ca²⁺ monte, la synaptotagmine change de forme. Ça favorise la fusion de la vésicule avec la membrane via le complexe SNARE.

En gros : l'exocytose constitutive c'est un robinet qui coule tout le temps. L'exocytose régulée c'est un barrage qu'on ouvre quand il y a du calcium.`
      },
      {
        title: "😰 Le stress du RE et la réponse UPR",
        content: `Quand trop de protéines mal repliées (= mal formées) s'accumulent dans le RE, la cellule panique. Elle déclenche une réponse de stress. C'est l'UPR (= Unfolded Protein Response, la réponse aux protéines non repliées). C'est comme quand ta boîte mail est pleine : le système plante.

Ce qui cause le stress du RE :
• Trop de protéines fabriquées d'un coup. Les cellules sécrétrices très actives sont à risque.
• Des mutations génétiques qui empêchent le repliement correct.
• Un manque de glucose. La glycosylation (= ajout de sucres) est perturbée.
• Un manque d'oxygène (hypoxie), des infections virales, des toxines.

Les 3 voies de l'UPR (3 alarmes différentes) :
1. IRE1 → elle épisse (= coupe et recolle) l'ARNm de XBP1 → ça donne un facteur de transcription → plus de chaperons (= des protéines qui aident au repliement).
2. PERK → elle phosphoryle eIF2α → STOP de la traduction globale. On arrête de fabriquer des protéines pour réduire la charge du RE. C'est comme fermer les entrées d'un métro bondé.
3. ATF6 → elle est clivée (= coupée) dans le Golgi → ça donne un facteur de transcription → plus de chaperons et plus d'ERAD (= dégradation des protéines mal faites).

Ce que l'UPR essaie de faire :
→ Réduire la quantité de protéines qui entrent dans le RE. Moins de travail.
→ Augmenter la capacité de repliement. Plus de chaperons comme BiP/GRP78. Plus d'ouvriers.
→ Augmenter la dégradation des protéines mal repliées (ERAD). Plus de poubelles.

Si le stress est trop intense et dure trop longtemps → l'UPR passe en mode « mort » :
→ Activation de CHOP (un facteur pro-apoptotique) → la cellule se suicide (apoptose).

En médecine, c'est super important :
• Diabète de type 2 : les cellules β du pancréas sont stressées en permanence (trop d'insuline à fabriquer). Elles finissent par mourir. Plus de cellules β = plus d'insuline = diabète.
• Maladies neurodégénératives : des protéines mal repliées s'accumulent. Alzheimer (protéine Aβ). Parkinson (α-synucléine). Le RE sature.
• Myélome multiple (un cancer du sang) : les plasmocytes tumoraux fabriquent trop d'anticorps. Le RE est surchargé. Du coup le bortézomib (un médicament qui bloque le protéasome) aggrave le stress et tue les cellules cancéreuses.

En gros : quand le RE est surchargé de protéines mal faites, la cellule essaie de se réparer. Si ça marche pas, elle se suicide.`
      },
      {
        title: "⚠️ Pièges classiques en QCM",
        content: `Voilà les erreurs les plus courantes sur le système endomembranaire :

❌ PIÈGE 1 : « COPII transporte du Golgi vers le RE »
→ FAUX ! COPII = RE → Golgi (vers l'avant). COPI = Golgi → RE (retour en arrière). Moyen mnémotechnique : COPII a 2 « I » → va vers le Golg-II. Facile.

❌ PIÈGE 2 : « La N-glycosylation se fait entièrement dans le Golgi »
→ FAUX ! La N-glycosylation COMMENCE dans le RE (transfert du précurseur de 14 sucres). Elle se TERMINE dans le Golgi (maturation). Seule la O-glycosylation se fait uniquement dans le Golgi.

❌ PIÈGE 3 : « Le signal d'adressage vers les lysosomes est KDEL »
→ FAUX ! KDEL c'est le signal de retour au RE. Le signal d'adressage vers les lysosomes c'est le mannose-6-phosphate (M6P). Ne confonds pas les deux.

❌ PIÈGE 4 : « Les lysosomes ont un pH basique »
→ FAUX ! Les lysosomes ont un pH ACIDE (~4,5-5). C'est maintenu par des pompes à protons (H⁺-ATPase de type V). Acide comme du vinaigre, pas basique comme du savon.

❌ PIÈGE 5 : « Le RE lisse synthétise les protéines »
→ FAUX ! Le RE lisse fabrique les LIPIDES et détoxifie. C'est le RE rugueux (= avec des ribosomes collés dessus) qui fabrique les protéines. Rugueux = protéines. Lisse = lipides.

❌ PIÈGE 6 : « L'exocytose régulée est présente dans toutes les cellules »
→ FAUX ! L'exocytose CONSTITUTIVE est dans toutes les cellules. L'exocytose RÉGULÉE est réservée aux cellules sécrétrices spécialisées (neurones, cellules endocrines, mastocytes). Pas tout le monde fait de l'exocytose sur commande.`
      },
    ],
  },

  "Mitochondries et peroxysomes": {
    images: [
      { file: "mitochondries-et-peroxysomes-illus-03.webp", caption: "Structure d'une mitochondrie : double membrane, crêtes internes, matrice contenant son propre ADN." },
      { file: "mitochondries-et-peroxysomes-illus-12.webp", caption: "La chaîne respiratoire : les complexes I à V produisent l'ATP à partir du NADH, dans la membrane interne." },
    ],
    intro: `Les mitochondries sont les « centrales électriques » de la cellule. Elles fabriquent la grande majorité de l'ATP (= la pile, la monnaie énergétique). C'est grâce à la respiration cellulaire. Les peroxysomes, eux, sont des organites (= petits organes) de détoxification.

Truc fascinant : les mitochondries ont leur propre ADN. Elles se divisent toutes seules. Elles descendent probablement de bactéries capturées par nos ancêtres il y a 2 milliards d'années. C'est la théorie endosymbiotique.`,
    sections: [
      {
        title: "⚡ La mitochondrie : structure",
        content: `La mitochondrie a une double membrane. C'est comme un sac dans un sac.

• Membrane externe : elle laisse passer les petites molécules grâce à des porines (= des trous). C'est assez perméable.
• Membrane interne : elle est imperméable (= rien ne passe sans autorisation). Elle forme des replis (= les crêtes). C'est là que se trouve la chaîne respiratoire (= la machine à ATP). C'est la zone VIP.
• Espace intermembranaire : l'espace entre les deux membranes. C'est là que les protons H⁺ s'accumulent. Comme l'eau derrière un barrage.
• Matrice : l'intérieur de la mitochondrie. On y trouve l'ADN mitochondrial, les ribosomes, et les enzymes du cycle de Krebs.

Les crêtes augmentent la surface de la membrane interne. Plus de surface = plus de place pour les complexes respiratoires = plus d'ATP fabriqué. C'est comme augmenter la surface de panneaux solaires sur un toit.

En gros : la mitochondrie a deux membranes. La membrane interne fait l'ATP grâce à ses replis (crêtes).`
      },
      {
        title: "🔋 La production d'ATP",
        content: `La respiration cellulaire se fait en 3 étapes. C'est comme une chaîne de montage à 3 postes :

1. Glycolyse (= casser le glucose) : ça se passe dans le cytoplasme (PAS dans la mitochondrie !). Un glucose donne 2 pyruvates + 2 ATP. C'est le premier poste. Pas besoin d'oxygène.
2. Cycle de Krebs (dans la matrice de la mitochondrie) : le pyruvate est dégradé. Ça produit du CO₂ + du NADH + du FADH₂ (= des transporteurs d'électrons chargés en énergie). C'est le deuxième poste.
3. Chaîne respiratoire (dans la membrane interne) : le NADH et le FADH₂ passent leurs électrons aux complexes. Ça crée un gradient de H⁺ (= une accumulation de protons). L'ATP synthase utilise ce gradient pour fabriquer ~34 ATP. C'est le troisième poste. C'est là que l'oxygène intervient.

Bilan total : 1 glucose → environ 36 ATP. Contre seulement 2 ATP par la glycolyse seule. La mitochondrie multiplie le rendement par 18 ! C'est comme comparer un vélo à une voiture de course.

En gros : le glucose est dégradé en 3 étapes. La mitochondrie produit 18 fois plus d'ATP que la glycolyse seule.`
      },
      {
        title: "🧹 Les peroxysomes",
        content: `Les peroxysomes sont des vésicules à simple membrane. Ils sont spécialisés dans le ménage chimique :

• La β-oxydation des acides gras à très longue chaîne. Les mitochondries gèrent les chaînes plus courtes. Les peroxysomes s'occupent des très grandes. C'est la répartition des tâches.
• La détoxification : ils transforment le peroxyde d'hydrogène (H₂O₂, un truc toxique = l'eau oxygénée) en eau grâce à la catalase (une enzyme). C'est comme neutraliser un poison.
• La synthèse de certains lipides spéciaux (les plasmalogènes).

Contrairement aux mitochondries, les peroxysomes n'ont PAS d'ADN propre. Toutes leurs protéines sont fabriquées dans le cytoplasme. Elles sont ensuite importées dans le peroxysome.

Maladie liée : le syndrome de Zellweger. Il n'y a pas de peroxysomes fonctionnels. Les acides gras toxiques s'accumulent. C'est comme une usine de recyclage en panne : les déchets s'empilent.

En gros : les peroxysomes détruisent les substances toxiques et gèrent les très longs acides gras. Pas d'ADN propre.`
      },
      {
        title: "⚙️ Les complexes de la chaîne respiratoire",
        content: `La chaîne respiratoire (= chaîne de transport d'électrons) est composée de 5 complexes. Ils sont plantés dans la membrane interne de la mitochondrie. C'est comme 5 machines sur une chaîne de montage.

Complexe I (NADH déshydrogénase) :
→ Il prend les électrons du NADH. C'est la première machine.
→ Il transfère les e⁻ (= électrons) à l'ubiquinone (CoQ, un transporteur mobile).
→ Il pompe 4 H⁺ vers l'espace intermembranaire. Ça remplit le barrage.

Complexe II (succinate déshydrogénase) :
→ Il prend les électrons du FADH₂ (via le succinate du cycle de Krebs).
→ Il transfère les e⁻ à l'ubiquinone.
→ Il ne pompe PAS de H⁺. C'est le seul qui ne pompe pas. Retiens ça.

Complexe III (cytochrome bc1) :
→ Il reçoit les e⁻ de l'ubiquinone.
→ Il les transfère au cytochrome c (un autre transporteur mobile).
→ Il pompe 4 H⁺.

Complexe IV (cytochrome c oxydase) :
→ Il transfère les e⁻ à l'O₂. L'oxygène est l'accepteur final. C'est pour ça qu'on respire.
→ Il produit de l'H₂O (de l'eau).
→ Il pompe 2 H⁺.

Complexe V (ATP synthase) :
→ Ce n'est PAS un transporteur d'électrons. C'est différent des 4 autres.
→ C'est un moteur rotatif moléculaire. Les H⁺ passent à travers. Ça fait tourner la sous-unité γ. Ça fabrique de l'ATP. C'est la chimiosmose. Peter Mitchell a proposé cette théorie. Prix Nobel 1978.

Bilan : NADH → environ 2,5 ATP. FADH₂ → environ 1,5 ATP.
Les électrons passent d'un niveau « haute énergie » à « basse énergie ». L'énergie libérée sert à pomper les H⁺. C'est comme une balle qui descend un escalier et fait tourner des moulins à chaque marche.

Les inhibiteurs (= les poisons de la chaîne) :
• Roténone → bloque le complexe I.
• Antimycine A → bloque le complexe III.
• Cyanure et CO → bloquent le complexe IV. C'est mortel.
• Oligomycine → bloque l'ATP synthase (complexe V).

En gros : 5 complexes dans la membrane interne. Ils passent des électrons et pompent des H⁺ pour fabriquer de l'ATP. C'est un barrage hydroélectrique miniature.`
      },
      {
        title: "💀 Rôle de la mitochondrie dans l'apoptose",
        content: `La mitochondrie ne fait pas que de l'ATP. Elle joue aussi un rôle central dans la mort programmée (= apoptose) de la cellule. C'est la voie intrinsèque (= signal de l'intérieur). La mitochondrie peut tuer la cellule.

Le point de non-retour : la perméabilisation de la membrane externe mitochondriale (MOMP). Quand ça se produit, c'est foutu.

Le mécanisme étape par étape :
1. Un stress cellulaire arrive (ADN endommagé, manque de facteurs de survie). C'est l'alerte.
2. Des protéines pro-apoptotiques (= pro-mort) Bax et Bak s'activent. Elles s'assemblent (s'oligomérisent) et forment des PORES dans la membrane externe. C'est comme percer des trous dans un coffre-fort.
3. Le cytochrome c (normalement enfermé dans l'espace intermembranaire) s'échappe dans le cytoplasme. Il sort par les trous.
4. Le cytochrome c se lie à Apaf-1. Ensemble, ils forment l'apoptosome (une structure en forme de roue).
5. L'apoptosome recrute et active la caspase-9 (= caspase initiatrice, le « chef bourreau »).
6. La caspase-9 active les caspases effectrices (3, 6, 7). Ce sont les « exécutants ». Ils démantèlent la cellule.

D'autres trucs sortent aussi de la mitochondrie :
• Smac/DIABLO : il neutralise les IAP (= les freins à l'apoptose). Ça libère les caspases. C'est comme enlever le cran de sûreté d'une arme.
• AIF (= Apoptosis-Inducing Factor) : il va dans le noyau. Il fragmente l'ADN. Et il marche sans les caspases.
• Endonucléase G : elle aussi fragmente l'ADN.

Analogie : la mitochondrie c'est un garde du corps qui peut devenir un assassin. Tout va bien → elle produit de l'énergie. Mais si la cellule est foutue → elle libère le cytochrome c. C'est l'autodestruction. Comme un bouton d'urgence.

En gros : quand la cellule est trop endommagée, la mitochondrie libère le cytochrome c et déclenche le suicide de la cellule.`
      },
      {
        title: "🧬 ADN mitochondrial et hérédité maternelle",
        content: `Les mitochondries ont leur propre génome : l'ADN mitochondrial (ADNmt). C'est un mini-génome à part.

Les caractéristiques de l'ADNmt :
• Il est circulaire et double brin. Comme l'ADN des bactéries. C'est un argument pour la théorie endosymbiotique (= les mitochondries viennent de bactéries).
• Il est petit : environ 16 569 paires de bases. Compare avec les 3,2 milliards du génome nucléaire. C'est comme comparer un texto à l'encyclopédie.
• Il code 37 gènes : 13 protéines de la chaîne respiratoire, 22 ARNt, 2 ARNr.
• Pas d'histones (= pas de protéines de protection autour). L'ADN est « nu ». Il est plus vulnérable aux mutations.
• Pas d'introns (= pas de zones inutiles). Les gènes sont compacts. Tout sert.
• Le code génétique est un peu différent du code universel. Par exemple : UGA = tryptophane au lieu de STOP.
• La réplication (= la copie) est indépendante du cycle de la cellule.

L'hérédité maternelle :
→ Les mitochondries du spermatozoïde sont dans le flagelle (= la queue). Elles sont éliminées après la fécondation. Jetées.
→ Seules les mitochondries de l'ovocyte (= l'ovule) sont transmises à l'embryon.
→ L'ADNmt vient donc exclusivement de la MÈRE. Toujours.

Conséquences :
• On peut retracer les lignées maternelles grâce à l'ADNmt. C'est comme ça qu'on a trouvé l'« Ève mitochondriale » (= notre ancêtre maternelle commune).
• Les maladies mitochondriales à transmission maternelle : une mère malade transmet à TOUS ses enfants. Mais seules les filles peuvent transmettre à la génération suivante. Les fils sont une impasse.

La notion d'hétéroplasmie :
→ Une cellule contient des centaines de mitochondries. Certaines ont de l'ADNmt normal. D'autres ont de l'ADNmt muté. C'est le mélange.
→ L'expression de la maladie dépend du pourcentage de mitochondries mutées. Il y a un effet de seuil : souvent il faut plus de 60-80 % de mutées pour avoir des symptômes. C'est comme une mauvaise connexion Wi-Fi : si 20 % du signal est mauvais, ça marche encore. Si 80 % est mauvais, ça plante.

En gros : l'ADNmt vient de ta mère. Il code pour des protéines de la chaîne respiratoire. Si trop de copies sont mutées, ça donne des maladies.`
      },
      {
        title: "🏥 Maladies mitochondriales",
        content: `Les maladies mitochondriales touchent surtout les organes qui consomment beaucoup d'énergie. Le cerveau. Les muscles. Le cœur. La rétine. C'est logique : pas d'ATP = pas d'énergie = panne. C'est comme une coupure de courant dans une maison pleine d'appareils électriques.

Les principales maladies :

• MELAS (Mitochondrial Encephalomyopathy, Lactic Acidosis, Stroke-like episodes) :
  → Mutation de l'ARNt de la leucine (A3243G).
  → Ça donne : encéphalopathie (= atteinte du cerveau), acidose lactique (= trop de lactate), pseudo-AVC (= comme des AVC mais pas exactement), diabète.
  → Transmission maternelle.

• MERRF (Myoclonic Epilepsy with Ragged Red Fibers) :
  → Mutation de l'ARNt de la lysine.
  → Ça donne : épilepsie myoclonique (= des secousses musculaires), et des fibres rouges déchiquetées à la biopsie musculaire.
  → Les « ragged red fibers » = des accumulations de mitochondries anormales sous la membrane des fibres musculaires. Ça se voit au microscope.

• LHON (= Neuropathie Optique Héréditaire de Leber) :
  → Mutations des gènes du complexe I.
  → Perte brutale de la vision centrale chez l'adulte jeune. Du jour au lendemain, tu vois flou au milieu.
  → Touche surtout les hommes. La pénétrance est incomplète (= tous les porteurs ne tombent pas malades).

• Syndrome de Kearns-Sayre :
  → Une grande délétion (= un gros morceau en moins) de l'ADNmt.
  → Ça donne : ophtalmoplégie externe progressive (= les yeux ne bougent plus bien), rétinite pigmentaire (= la rétine s'abîme), troubles cardiaques.

Comment on diagnostique :
→ Biopsie musculaire : coloration au Gomori modifié. On voit les fameuses fibres rouges déchiquetées.
→ Acidose lactique : la chaîne respiratoire ne marche pas. Du coup le pyruvate est transformé en lactate. Trop de lactate = acidose.
→ Séquençage de l'ADNmt : on lit l'ADN pour trouver la mutation.

Point clé : les maladies mitochondriales sont très variables. L'hétéroplasmie (= le mélange de mitochondries normales et mutées) fait que deux personnes avec la même mutation peuvent avoir des symptômes très différents. Chaque tissu et chaque individu est différent.

En gros : les maladies mitochondriales touchent le cerveau, les muscles et le cœur. Le diagnostic repose sur la biopsie musculaire et le séquençage de l'ADNmt.`
      },
      {
        title: "⚠️ Pièges classiques en QCM",
        content: `Voilà les erreurs les plus courantes sur les mitochondries et peroxysomes :

❌ PIÈGE 1 : « La glycolyse a lieu dans la mitochondrie »
→ FAUX ! La glycolyse se passe dans le CYTOPLASME. Pas dans la mitochondrie. Seuls le cycle de Krebs (matrice) et la chaîne respiratoire (membrane interne) sont dans la mitochondrie.

❌ PIÈGE 2 : « Le complexe II pompe des protons »
→ FAUX ! Le complexe II (succinate déshydrogénase) est le SEUL complexe qui ne pompe pas de H⁺. C'est aussi le seul dont toutes les protéines sont codées par l'ADN nucléaire (pas par l'ADNmt).

❌ PIÈGE 3 : « L'ADN mitochondrial est transmis par le père »
→ FAUX ! Transmission exclusivement MATERNELLE. Les mitochondries du spermatozoïde sont dans le flagelle. Elles sont détruites après la fécondation. L'ADNmt vient de maman. Point.

❌ PIÈGE 4 : « Les peroxysomes ont leur propre ADN comme les mitochondries »
→ FAUX ! Les peroxysomes n'ont PAS d'ADN propre. Toutes leurs protéines sont codées par le génome nucléaire. Elles sont importées via les peroxines (Pex). Ne confonds pas peroxysomes et mitochondries.

❌ PIÈGE 5 : « Le cyanure bloque l'ATP synthase »
→ FAUX ! Le cyanure bloque le complexe IV (cytochrome c oxydase). C'est l'oligomycine qui bloque l'ATP synthase (complexe V). Cyanure = complexe IV. Oligomycine = complexe V.

❌ PIÈGE 6 : « 1 glucose produit exactement 38 ATP »
→ ATTENTION ! Le bilan de 36-38 ATP est une approximation. La valeur actuelle est plutôt autour de 30-32 ATP quand on compte les coûts de transport. L'important c'est de comprendre le principe. Ne te bats pas pour un chiffre exact.

❌ PIÈGE 7 : « La membrane externe mitochondriale est imperméable »
→ FAUX ! C'est la membrane INTERNE qui est imperméable. C'est essentiel pour garder le gradient de H⁺. La membrane externe est perméable aux petites molécules grâce aux porines (VDAC). C'est l'inverse de ce qu'on croit souvent.`
      },
    ],
  },

  "Apoptose et mort cellulaire": {
    images: [
      { file: "apoptose-illus-08.webp", caption: "Nécrose vs Apoptose : la nécrose est un gonflement incontrôlé, l'apoptose est une mort propre et programmée." },
    ],
    intro: `Toutes les cellules de ton corps sont programmées pour mourir un jour. L'apoptose (= la mort cellulaire programmée) est un processus actif et contrôlé. C'est normal et c'est essentiel. C'est comme le recyclage : on jette l'ancien pour faire de la place au neuf.

Chaque jour, environ 50 à 70 milliards de cellules meurent par apoptose dans ton corps. Et c'est parfaitement normal.`,
    sections: [
      {
        title: "💀 Nécrose vs Apoptose",
        content: `Il y a deux façons de mourir pour une cellule. C'est très différent :

NÉCROSE (= mort accidentelle, pas prévue) :
• Causée par un traumatisme, une infection, un manque d'oxygène. Un accident.
• La cellule gonfle. Puis elle éclate. Le contenu se répand partout. C'est le bazar.
• Ça déclenche une réaction inflammatoire. Rougeur, douleur, gonflement.
• C'est comme une bombe qui explose dans une pièce. Dégâts partout.

APOPTOSE (= mort programmée, décidée) :
• La cellule « décide » de mourir. Suite à un signal interne ou externe.
• La cellule se condense (= elle rétrécit). Son ADN se fragmente proprement. En petits morceaux réguliers.
• Elle se découpe en petits « corps apoptotiques ». Comme des petits paquets bien emballés.
• Les macrophages (= les éboueurs du corps) les avalent. Pas d'inflammation.
• C'est comme un immeuble démoli proprement, étage par étage.

L'apoptose est propre. La nécrose est sale. C'est la différence fondamentale.

En gros : la nécrose c'est une explosion (sale, inflammatoire). L'apoptose c'est une démolition contrôlée (propre, sans dégâts).`
      },
      {
        title: "⚙️ Les mécanismes de l'apoptose",
        content: `Deux voies principales déclenchent l'apoptose. Deux chemins vers la même destination :

Voie extrinsèque (= signal de l'extérieur) :
• Un ligand de mort (FasL, TNF) se fixe sur un récepteur de mort (Fas, TNFR). C'est comme quelqu'un qui sonne à ta porte pour t'annoncer une mauvaise nouvelle.
• Ça active les caspases initiatrices (caspase-8). Le « chef bourreau » se met en route.
• Puis les caspases effectrices (caspase-3) s'activent. Les « exécutants » démantèlent la cellule.

Voie intrinsèque (= signal de l'intérieur) :
• Un stress cellulaire se produit. ADN abîmé, manque de facteurs de survie. La cellule voit que ça va mal.
• La mitochondrie libère le cytochrome c. C'est le signal de mort.
• Formation de l'apoptosome (= la roue de la mort). Activation de la caspase-9. Puis caspase-3.

Les caspases sont les « bourreaux ». Ce sont des protéases (= des ciseaux moléculaires). Elles découpent les protéines de la cellule de façon méthodique. C'est un démantèlement ordonné.

En gros : deux voies mènent à la mort. Soit un signal vient de dehors (extrinsèque). Soit ça vient de dedans (intrinsèque). Dans les deux cas, les caspases font le boulot.`
      },
      {
        title: "🔑 Pourquoi l'apoptose est essentielle",
        content: `L'apoptose est indispensable. Sans elle, ton corps ne fonctionnerait pas. Voilà pourquoi :

• Le développement embryonnaire : les doigts se séparent grâce à l'apoptose. Les membranes entre les doigts disparaissent. Sans apoptose, on aurait des mains palmées. Comme un canard.
• Le système immunitaire : les lymphocytes (= les soldats immunitaires) auto-réactifs (= ceux qui attaqueraient nos propres cellules) sont éliminés par apoptose. C'est le ménage pour éviter les maladies auto-immunes.
• L'homéostasie (= l'équilibre) : il faut un équilibre entre les cellules qui naissent et celles qui meurent. Comme un aquarium : si tu ajoutes des poissons sans en enlever, ça déborde.
• La défense antitumorale : une cellule anormale déclenche son apoptose pour protéger le reste. C'est un sacrifice pour le bien commun.

Quand l'apoptose ne marche plus :
• Trop d'apoptose → les cellules meurent trop. Ça donne des maladies neurodégénératives. Alzheimer. Parkinson. Les neurones meurent en masse.
• Pas assez d'apoptose → les cellules ne meurent pas assez. Ça donne le cancer. Les cellules anormales survivent et se multiplient.

En gros : l'apoptose sert à faire le ménage. Trop de ménage = maladies du cerveau. Pas assez = cancer.`
      },
      {
        title: "🛡️ La famille Bcl-2 : régulateurs de l'apoptose",
        content: `La famille Bcl-2 c'est le « tribunal » qui décide si la cellule vit ou meurt. Elle contrôle la voie intrinsèque. Elle régule ce qui passe à travers la membrane externe de la mitochondrie. C'est un rapport de force permanent.

3 sous-familles :

1. Anti-apoptotiques (= ils protègent la cellule, ils veulent qu'elle vive) :
  • Bcl-2, Bcl-xL, Mcl-1.
  → Ils gardent Bax et Bak inactifs. Ils les séquestrent. Ils les empêchent d'agir.
  → Analogie : ce sont les garde du corps qui immobilisent les « assassins ».

2. Pro-apoptotiques effecteurs (= les tueurs) :
  • Bax et Bak.
  → Quand ils sont activés, ils s'assemblent. Ils forment des pores (= des trous) dans la membrane externe mitochondriale. Le cytochrome c sort. La mort est en route.
  → Analogie : ce sont les « assassins » qui percent le coffre-fort (la mitochondrie).

3. Pro-apoptotiques BH3-only (= les sentinelles, les détecteurs de danger) :
  • Bid, Bim, Bad, Noxa, Puma.
  → Ils détectent les signaux de stress. Ils neutralisent les anti-apoptotiques.
  → Bid est clivé par la caspase-8. Ça donne tBid. tBid active Bax. C'est le pont entre la voie extrinsèque et intrinsèque.
  → Bad neutralise Bcl-2/Bcl-xL. Du coup Bax est libéré.

L'équilibre anti/pro détermine le destin de la cellule :
→ Si Bcl-2 > Bax → la cellule survit. Les gardiens gagnent.
→ Si Bax > Bcl-2 → la cellule meurt. Les tueurs gagnent.
C'est comme un vote : celui qui a la majorité l'emporte.

Application thérapeutique :
→ Le venetoclax est un médicament BH3-mimétique (= il imite les BH3-only). Il bloque Bcl-2. C'est utilisé dans la leucémie lymphoïde chronique. Ça force les cellules cancéreuses à mourir.

En gros : la famille Bcl-2 c'est un bras de fer entre protéines de survie et protéines de mort. Le plus fort gagne.`
      },
      {
        title: "🧬 p53, le gardien du génome",
        content: `p53 est LA protéine la plus importante en oncologie (= étude des cancers). On l'appelle « gardien du génome ». Elle surveille l'ADN. Si quelque chose ne va pas, elle décide de la suite. C'est le directeur qualité de la cellule.

En temps normal :
→ p53 est maintenue à un niveau très bas. La protéine MDM2 (une ubiquitine ligase) la marque pour destruction par le protéasome (= le broyeur). p53 est fabriquée puis détruite en boucle.
→ Sa demi-vie (= le temps pour que la moitié disparaisse) : seulement 20 minutes. Elle ne dure pas.

En cas de stress (ADN abîmé, manque d'oxygène, activation d'oncogènes) :
→ Des kinases (ATM, ATR, Chk1, Chk2) ajoutent des phosphates sur p53. p53 se détache de MDM2. Elle s'accumule. Elle s'active. Le directeur qualité arrive sur la chaîne de production.

3 réponses possibles de p53 :
1. Arrêt du cycle cellulaire : p53 active p21. p21 bloque les complexes cycline-CDK (= les moteurs de la division). La cellule s'arrête en G1. Elle prend le temps de réparer son ADN. C'est comme appuyer sur pause.
2. Réparation de l'ADN : p53 active les enzymes de réparation. On essaie de corriger les dégâts.
3. Apoptose : si les dégâts sont trop graves et irréparables, p53 active Bax, Puma, Noxa. La cellule se suicide. C'est le sacrifice.

TP53 (le gène de p53) est muté dans environ 50 % de TOUS les cancers humains :
→ Mutation faux-sens → p53 mutante perd sa fonction de protection. Le gardien est neutralisé.
→ Pire : p53 mutante peut acquérir de nouvelles fonctions oncogènes (= qui favorisent le cancer). Le gardien devient complice.

Le syndrome de Li-Fraumeni :
→ Mutation germinale de TP53 (= héritée des parents).
→ Prédisposition à plein de cancers dès l'enfance : sarcomes, cancers du sein, tumeurs du cerveau, leucémies.
→ Risque de cancer au cours de la vie : plus de 90 %. Presque certain.

Analogie : p53 c'est le directeur qualité de l'usine cellulaire. S'il détecte un produit défectueux (ADN abîmé), il arrête la chaîne (cycle cellulaire). Si c'est irréparable, il détruit le produit (apoptose). Quand p53 est muté, le contrôle qualité disparaît. Les produits défectueux s'accumulent. C'est le cancer.

En gros : p53 surveille l'ADN. Si c'est réparable, elle arrête et répare. Si c'est foutu, elle tue la cellule. Quand p53 est mutée, le cancer arrive.`
      },
      {
        title: "♻️ L'autophagie : recyclage cellulaire",
        content: `L'autophagie (= « se manger soi-même ») est un processus de recyclage. La cellule dégrade ses propres composants. C'est comme vider ton placard et recycler les vieux vêtements. Ça fait de la place et ça récupère des matériaux.

Le mécanisme de la macroautophagie :
1. Un phagophore (= une double membrane) se forme autour du matériel à dégrader. Un organite abîmé, un agrégat protéique (= un tas de protéines mal faites). C'est comme envelopper quelque chose dans du papier.
2. Le phagophore se referme. Ça donne un autophagosome (= une vésicule à double membrane). Le colis est fermé.
3. L'autophagosome fusionne avec un lysosome (= la poubelle acide). Ça donne un autolysosome.
4. Les hydrolases acides (= les enzymes digestives) du lysosome dégradent tout le contenu. Les nutriments sont recyclés. C'est comme un composteur.

Les protéines clés :
• Beclin-1 : elle lance la formation du phagophore. C'est le starter.
• LC3 (MAP1LC3) : elle s'insère dans la membrane de l'autophagosome. C'est un marqueur. Les chercheurs la cherchent pour détecter l'autophagie.
• ATG (= Autophagy-related genes) : environ 30 gènes essentiels pour l'autophagie.

La régulation :
→ mTOR (= mammalian Target of Rapamycin) est le FREIN de l'autophagie. C'est le chef qui dit « pas besoin de recycler ».
  • Quand la cellule a assez de nutriments → mTOR est actif → autophagie bloquée. Tout va bien, pas besoin de manger ses réserves.
  • Quand la cellule est en carence → mTOR est inhibé → autophagie activée. « On mange les réserves ! »
→ La rapamycine (un immunosuppresseur, un médicament) bloque mTOR → ça active l'autophagie.

À quoi sert l'autophagie :
• Survie en cas de carence nutritionnelle. La cellule mange ses réserves. Comme manger les restes du frigo quand tu ne peux pas faire les courses.
• Contrôle qualité : élimination des mitochondries abîmées. C'est la mitophagie.
• Défense anti-infectieuse : dégradation de bactéries intracellulaires. C'est la xénophagie. La cellule mange l'intrus.
• Développement embryonnaire.

Autophagie et maladies :
→ Maladies neurodégénératives : l'autophagie marche mal → les agrégats protéiques toxiques s'accumulent. Les neurones meurent.
→ Cancer : rôle ambivalent (= les deux faces de la médaille). Au début, l'autophagie est suppressive (= elle élimine les cellules endommagées). Puis elle devient pro-tumorale (= elle aide les cellules cancéreuses à survivre au stress).

Prix Nobel 2016 : Yoshinori Ohsumi, pour ses travaux sur l'autophagie. Retiens ce nom.

En gros : l'autophagie c'est le recyclage interne de la cellule. mTOR est le frein. Quand il y a carence, la cellule mange ses propres pièces.`
      },
      {
        title: "🔥 Nécroptose, pyroptose et ferroptose",
        content: `En plus de l'apoptose (propre) et de la nécrose classique (sale), on a découvert des morts cellulaires « hybrides ». Elles sont programmées (= décidées) mais inflammatoires (= elles font du bruit). C'est des plans B et C.

NÉCROPTOSE (= nécrose programmée) :
→ Déclenchée quand la voie apoptotique est bloquée. Par exemple, la caspase-8 est inhibée par un virus. L'apoptose ne marche plus. Alors la cellule active le plan B.
→ Mécanisme : RIPK1 → RIPK3 → phosphorylation de MLKL → MLKL perce la membrane → la cellule éclate → inflammation.
→ C'est un mécanisme de sécurité. Si l'apoptose est impossible, la cellule a quand même un moyen de mourir. Et de prévenir le système immunitaire.
→ Rôle en défense antivirale : certains virus bloquent les caspases pour échapper à l'apoptose. La nécroptose prend le relais. Le virus ne gagne pas si facilement.

PYROPTOSE (= mort inflammatoire) :
→ Déclenchée par l'activation des inflammasomes (= des complexes multiprotéiques). Surtout NLRP3.
→ Mécanisme : un signal de danger (DAMP/PAMP) → inflammasome → caspase-1 (attention : c'est une caspase inflammatoire, PAS une caspase effectrice d'apoptose).
→ La caspase-1 coupe la gasdermine D. Les morceaux de gasdermine forment des pores dans la membrane. L'IL-1β et l'IL-18 (= des cytokines inflammatoires) sont libérées. Ça déclenche une inflammation massive.
→ Rôle clé dans l'immunité innée. Aussi dans les maladies auto-inflammatoires (goutte, maladie de Crohn).

FERROPTOSE :
→ Mort causée par la peroxydation lipidique (= l'oxydation des graisses de la membrane) incontrôlée. Et c'est dépendant du fer.
→ Trop de fer → réaction de Fenton → radicaux libres → les lipides de la membrane sont oxydés → la membrane est détruite.
→ La GPX4 (glutathion peroxydase) et le glutathion (un antioxydant) protègent contre la ferroptose. Ce sont les pompiers.
→ Impliquée dans les dommages ischémiques (= manque de sang) et certains cancers.

Résumé comparatif (à apprendre par cœur) :
• Apoptose → propre, caspases 3/7/9, PAS d'inflammation. La mort douce.
• Nécroptose → RIPK3/MLKL, inflammation, SANS caspases. Le plan B.
• Pyroptose → caspase-1, gasdermines, inflammation massive. L'alarme incendie.
• Ferroptose → fer + peroxydation lipidique, pas de caspases. L'oxydation fatale.

En gros : il y a plusieurs façons de mourir pour une cellule. L'apoptose est propre. Les autres (nécroptose, pyroptose, ferroptose) sont programmées mais inflammatoires.`
      },
      {
        title: "🎗️ Cancer et résistance à l'apoptose",
        content: `L'une des caractéristiques fondamentales du cancer, c'est la résistance à la mort cellulaire. C'est un « hallmark of cancer » (Hanahan & Weinberg). Les cellules cancéreuses refusent de mourir. C'est ça le problème principal.

Comment les cellules cancéreuses échappent à l'apoptose :

1. Surexpression des anti-apoptotiques (= trop de protéines de survie) :
  → Bcl-2 est surexprimé dans plein de cancers. Surtout le lymphome folliculaire. Il y a une translocation t(14;18) → le gène BCL2 passe sous le contrôle du promoteur des immunoglobulines → production massive de Bcl-2. Les gardiens sont en surnombre.

2. Mutation de p53 :
  → TP53 muté → plus de surveillance de l'ADN → les cellules avec des mutations s'accumulent → le cancer progresse. Le directeur qualité est viré.

3. Surexpression des IAP (= Inhibitors of Apoptosis Proteins, les freins à l'apoptose) :
  → XIAP, survivine → ils bloquent directement les caspases effectrices. Pas de bourreau = pas de mort.

4. Perte des récepteurs de mort :
  → Certaines tumeurs n'expriment plus Fas (un récepteur de mort). Elles sont sourdes aux signaux de mort extérieurs. C'est comme débrancher le téléphone pour ne pas recevoir de mauvaises nouvelles.

5. Activation permanente de voies de survie :
  → PI3K/Akt → phosphoryle Bad → Bad est séquestré → Bcl-2/Bcl-xL sont libres → la cellule survit.
  → NF-κB → active la transcription de gènes anti-apoptotiques. C'est un signal de survie en boucle.

Les stratégies thérapeutiques qui ciblent l'apoptose :
• BH3-mimétiques (venetoclax) : ils imitent les protéines BH3-only → neutralisent Bcl-2 → forcent l'apoptose. C'est comme envoyer un faux garde du corps qui est en fait un assassin.
• Inhibiteurs de XIAP (smac-mimétiques) : ils lèvent le frein sur les caspases. Les bourreaux peuvent enfin agir.
• Thérapie génique p53 : on réintroduit une copie fonctionnelle de TP53 dans les tumeurs. On remet le directeur qualité en poste.
• TRAIL recombinant : il active la voie extrinsèque via les récepteurs de mort DR4/DR5 spécifiquement sur les cellules tumorales.

Retiens : le cancer c'est pas juste des cellules qui se multiplient trop. C'est surtout des cellules qui ne meurent pas assez. La résistance à l'apoptose est au cœur du problème.

En gros : les cellules cancéreuses esquivent la mort de plein de façons. Les nouveaux médicaments essaient de réactiver l'apoptose.`
      },
      {
        title: "⚠️ Pièges classiques en QCM",
        content: `Voilà les erreurs les plus courantes sur l'apoptose et la mort cellulaire :

❌ PIÈGE 1 : « L'apoptose déclenche une réaction inflammatoire »
→ FAUX ! L'apoptose est une mort « propre » SANS inflammation. C'est la NÉCROSE (et la pyroptose, la nécroptose) qui déclenche l'inflammation. Apoptose = propre = pas d'inflammation.

❌ PIÈGE 2 : « Les caspases sont des kinases »
→ FAUX ! Les caspases sont des PROTÉASES à cystéine. Elles coupent les protéines après un résidu aspartate. D'où leur nom : Cysteine-ASPartate proteASE. Les kinases phosphorylent (= ajoutent des phosphates). Les caspases clivent (= coupent). C'est pas le même métier.

❌ PIÈGE 3 : « Le cytochrome c est libéré par la membrane interne mitochondriale »
→ FAUX ! Le cytochrome c se trouve dans l'espace INTERMEMBRANAIRE. Il est libéré quand la membrane EXTERNE est perforée par Bax/Bak. C'est la membrane externe qui est trouée, pas l'interne.

❌ PIÈGE 4 : « Bcl-2 est pro-apoptotique »
→ FAUX ! Bcl-2 est ANTI-apoptotique. Il protège la cellule. Les pro-apoptotiques ce sont Bax, Bak, et les BH3-only (Bid, Bim, Bad, Puma, Noxa). Bcl-2 = survie. Bax = mort.

❌ PIÈGE 5 : « La voie extrinsèque passe par la mitochondrie »
→ ATTENTION ! La voie extrinsèque passe directement par les caspases (8 → 3). SANS la mitochondrie. MAIS il existe un pont via Bid. La caspase-8 coupe Bid en tBid. tBid active Bax → amplification mitochondriale. Ce pont existe. Mais la voie extrinsèque directe ne NÉCESSITE PAS la mitochondrie.

❌ PIÈGE 6 : « p53 est un oncogène »
→ FAUX ! p53 est un SUPPRESSEUR DE TUMEURS. C'est sa mutation (perte de fonction) qui favorise le cancer. Les oncogènes ce sont des gènes qui, quand ils sont ACTIVÉS, favorisent le cancer (Ras, Myc). p53 c'est l'inverse.

❌ PIÈGE 7 : « L'autophagie est une forme de mort cellulaire »
→ ATTENTION ! L'autophagie est principalement un mécanisme de SURVIE. C'est du recyclage en cas de carence. La « mort autophagique » existe mais elle est controversée et rare. Ne confonds pas autophagie et apoptose. Autophagie = survie. Apoptose = mort.`
      },
    ],
  },
};

export default FICHE_CURATED_BIOCELL;
