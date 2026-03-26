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
      {
        title: "🧩 Séquences codantes vs non codantes",
        content: `Moins de 2% du génome code pour des protéines. Alors que fait le reste ?

• Séquences codantes : ce sont les exons des gènes. Ils portent l'information pour fabriquer les protéines. Environ 25 000 gènes chez l'Homme.
• Séquences régulatrices : promoteurs, enhancers, silencers — elles contrôlent QUAND et OÙ un gène est exprimé. C'est le « tableau de bord » du génome.
• Séquences répétitives (~45% du génome) : transposons (éléments mobiles, parfois appelés « gènes sauteurs »), séquences satellites (répétitions en tandem aux centromères et télomères).
• Introns : portions non codantes à l'intérieur des gènes, éliminées lors de l'épissage.
• Pseudogènes : anciens gènes devenus non fonctionnels — des « fossiles moléculaires ».

→ Analogie : si le génome est un livre de 3 milliards de lettres, les gènes sont les 25 000 phrases utiles, le reste est de la ponctuation, des notes en marge, et beaucoup de pages blanches.`
      },
      {
        title: "🎛️ Régulation de l'expression des gènes",
        content: `Toutes tes cellules contiennent le même ADN, mais un neurone ne ressemble pas à une cellule musculaire. Pourquoi ? Parce que chaque cellule n'exprime qu'une partie de ses gènes.

Niveaux de régulation :
• Chromatine : l'ADN enroulé serré (hétérochromatine) est inaccessible → gènes éteints. L'ADN relâché (euchromatine) est accessible → gènes actifs.
• Modifications des histones : acétylation (ouvre la chromatine → activation), méthylation (peut activer ou réprimer selon le contexte).
• Méthylation de l'ADN : ajout de groupes méthyle sur les cytosines des îlots CpG → extinction du gène.
• Facteurs de transcription : protéines qui se fixent sur les promoteurs/enhancers pour activer ou réprimer la transcription.
• ARN non codants (miARN, lncARN) : régulateurs post-transcriptionnels.

→ Pense à l'expression génique comme un orchestre : l'ADN est la partition (identique pour tous les musiciens), mais le chef d'orchestre (la régulation) décide qui joue et quand.`
      },
      {
        title: "🔬 Mutations et polymorphismes",
        content: `Une mutation est un changement dans la séquence d'ADN. Toutes les mutations ne sont pas mauvaises !

Types de mutations :
• Substitution : une base remplacée par une autre (ex : A → G)
  → Faux-sens : change un acide aminé (peut être pathogène ou silencieux)
  → Non-sens : crée un codon stop prématuré → protéine tronquée
  → Silencieuse : ne change pas l'acide aminé (grâce à la redondance du code génétique)
• Insertion/Délétion : ajout ou perte de bases → décalage du cadre de lecture (frameshift) si pas multiple de 3
• Expansion de triplets : répétition anormale (ex : maladie de Huntington, syndrome de l'X fragile)

Polymorphismes (SNP) :
• Variations « normales » entre individus (0,1% du génome)
• Un SNP = changement d'une seule base, présent dans >1% de la population
• Utiles en pharmacogénomique : expliquer pourquoi certains patients répondent différemment aux médicaments

→ Piège QCM : une mutation n'est pas forcément pathologique. Un SNP est une variation fréquente, pas une « maladie ».`
      },
      {
        title: "🏥 Applications médicales",
        content: `La connaissance du génome a révolutionné la médecine :

• Tests génétiques : dépistage de maladies héréditaires (mucoviscidose, drépanocytose), diagnostic prénatal, tests de prédisposition (BRCA1/2 pour le cancer du sein).
• Thérapie génique : remplacer ou corriger un gène défectueux. Exemples : traitement de l'amyotrophie spinale (Zolgensma), de certaines cécités héréditaires (Luxturna).
• CRISPR-Cas9 : « ciseaux moléculaires » capables de couper l'ADN à un endroit précis pour corriger une mutation. Révolution en cours !
• Médecine personnalisée : adapter le traitement au profil génétique du patient (pharmacogénomique).
• Empreinte génétique : identification en médecine légale grâce aux séquences répétitives (STR).

→ Le séquençage du génome humain (projet achevé en 2003, coût : 3 milliards $) coûte aujourd'hui moins de 1 000 € — preuve que cette technologie se démocratise à vitesse grand V.`
      },
      {
        title: "⚠️ Pièges classiques en QCM",
        content: `Attention aux erreurs fréquentes sur ce chapitre :

• PIÈGE 1 : « Le génome humain contient 100 000 gènes » → FAUX. C'est ~25 000 gènes. Le chiffre de 100 000 était une estimation ancienne.
• PIÈGE 2 : « La majorité du génome code pour des protéines » → FAUX. Moins de 2% code pour des protéines.
• PIÈGE 3 : « Deux humains ont des génomes très différents » → FAUX. 99,9% identiques. La différence est de seulement 0,1%.
• PIÈGE 4 : Confondre chromatine et chromosome. La chromatine = ADN + histones (forme décondensée en interphase). Le chromosome = chromatine super-condensée (visible en métaphase).
• PIÈGE 5 : « Les transposons n'ont aucun rôle » → FAUX. Ils participent à l'évolution du génome et à la diversité génétique.
• PIÈGE 6 : Confondre locus et allèle. Le locus = position physique sur le chromosome. L'allèle = version d'un gène à ce locus.

→ Astuce mémo : « 3-25-2-46 » = 3 milliards de bases, 25 000 gènes, 2% codant, 46 chromosomes.`
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
      {
        title: "🌡️ Dénaturation et renaturation",
        content: `La double hélice d'ADN peut être « ouverte » (dénaturée) en chauffant ou en modifiant le pH. Les liaisons hydrogène entre les bases se rompent, les deux brins se séparent.

Points clés :
• La température de fusion (Tm) est la température à laquelle 50% de l'ADN est dénaturé.
• Plus l'ADN est riche en paires G≡C (3 liaisons H), plus le Tm est élevé → ADN plus stable.
• Les paires A=T (2 liaisons H) sont plus faciles à rompre.
• L'hyperchromicité : l'ADN dénaturé absorbe davantage les UV à 260 nm → c'est ainsi qu'on mesure la dénaturation.

Renaturation (ou hybridation) : si on refroidit lentement, les brins complémentaires se réapparient. Ce principe est à la base de nombreuses techniques (PCR, Southern blot, FISH).

→ Analogie : c'est comme une fermeture éclair. La chaleur l'ouvre (dénaturation), le refroidissement la referme (renaturation).`
      },
      {
        title: "🔬 Techniques fondamentales : PCR et séquençage",
        content: `La connaissance de la structure des acides nucléiques a permis de développer des techniques révolutionnaires :

PCR (Polymerase Chain Reaction) :
• Amplifie un fragment d'ADN spécifique des millions de fois en quelques heures.
• Principe : cycles de dénaturation (95°C) → hybridation des amorces (50-65°C) → élongation par la Taq polymérase (72°C).
• Utilise la Taq polymérase (de Thermus aquaticus, une bactérie thermophile) qui résiste à la chaleur.
• Applications : diagnostic infectieux (COVID, VIH), médecine légale, test de paternité.

Séquençage :
• Méthode de Sanger : utilise des ddNTP (didésoxyribonucléotides) qui bloquent l'élongation → permet de « lire » la séquence base par base.
• Séquençage nouvelle génération (NGS) : parallélise des millions de lectures → séquençage d'un génome entier en quelques jours.

→ La PCR a été inventée par Kary Mullis (Prix Nobel 1993). C'est probablement LA technique la plus importante de la biologie moléculaire moderne.`
      },
      {
        title: "🧪 Modifications des nucléotides",
        content: `Les nucléotides ne servent pas qu'à construire l'ADN et l'ARN. Ils ont de nombreux rôles dans la cellule :

Nucléotides modifiés importants :
• ATP (adénosine triphosphate) : monnaie énergétique universelle de la cellule.
• GTP : source d'énergie pour la synthèse protéique et la signalisation (protéines G).
• AMPc (AMP cyclique) : second messager intracellulaire majeur, produit par l'adénylate cyclase.
• NAD⁺/NADH et FAD/FADH₂ : coenzymes d'oxydoréduction, essentiels dans le métabolisme énergétique.
• S-adénosylméthionine (SAM) : donneur de groupes méthyle (méthylation de l'ADN, des protéines).

Modifications des bases dans l'ADN :
• Méthylation des cytosines (5-méthylcytosine) → régulation épigénétique.
• Bases modifiées dans l'ARNt : inosine, pseudouridine, dihydrouridine → stabilisent la structure et permettent un appariement « wobble ».

→ Piège QCM : l'ATP est un nucléotide ! C'est de l'adénosine + 3 phosphates. Ne pas l'oublier.`
      },
      {
        title: "🏥 Applications médicales",
        content: `La structure des acides nucléiques est au cœur de nombreuses stratégies thérapeutiques :

• Antiviraux analogues nucléosidiques : molécules qui ressemblent aux nucléotides naturels mais bloquent la réplication virale.
  → Aciclovir (herpès), Zidovudine/AZT (VIH), Remdesivir (COVID-19), Sofosbuvir (hépatite C).
  → Principe : ils s'incorporent dans l'ADN/ARN viral et provoquent l'arrêt de l'élongation.

• Thérapie antisens : oligonucléotides complémentaires d'un ARNm cible → bloquent la traduction d'une protéine pathologique.
• ARN interférents (siRNA) : dégradent spécifiquement un ARNm cible → ex : Patisiran pour l'amylose héréditaire.
• Vaccins à ARNm : utilisent un ARNm synthétique pour faire produire un antigène par les cellules du patient (ex : vaccins COVID Pfizer/Moderna).

→ Comprendre la chimie des nucléotides, c'est comprendre comment fonctionnent de nombreux médicaments de première ligne en infectiologie.`
      },
      {
        title: "📝 Synthèse et pièges QCM",
        content: `Résumé express :
• Nucléotide = base + sucre + phosphate
• ADN : désoxyribose, double brin, A-T (2 liaisons H), G-C (3 liaisons H)
• ARN : ribose, simple brin (sauf exceptions), A-U, G-C
• Liaisons phosphodiester entre les nucléotides (5'→3')
• La Tm dépend du contenu en G+C

Pièges classiques :
• PIÈGE 1 : « Les brins d'ADN sont parallèles » → FAUX. Ils sont antiparallèles (5'→3' et 3'→5').
• PIÈGE 2 : « L'ARN est toujours simple brin » → FAUX. L'ARNt a des régions double brin (structure en trèfle), et certains virus ont un ARN double brin.
• PIÈGE 3 : Confondre nucléotide et nucléoside. Nucléoside = base + sucre (SANS phosphate). Nucléotide = nucléoside + phosphate(s).
• PIÈGE 4 : « A=T dans l'ARN » → FAUX. L'ARN n'a pas de thymine mais de l'uracile. L'appariement est A=U.
• PIÈGE 5 : Oublier que la règle de Chargaff (%A = %T, %G = %C) ne s'applique qu'à l'ADN double brin, pas à l'ARN.

→ Mnémotechnique : « PUR-ines = A et G (2 cycles), PYR-imidines = C, T, U (1 cycle) ». « Pur comme l'or » → 2 anneaux.`
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
      {
        title: "🎯 Les origines de réplication",
        content: `La réplication ne démarre pas n'importe où sur l'ADN. Elle commence à des sites précis appelés origines de réplication (ori).

Chez les procaryotes :
• Une seule origine de réplication (oriC chez E. coli)
• La réplication est bidirectionnelle : deux fourches partent de l'ori en sens opposé
• Le chromosome circulaire est répliqué en ~40 minutes

Chez les eucaryotes :
• Des milliers d'origines de réplication par chromosome (sinon, il faudrait des semaines pour copier tout l'ADN !)
• Les origines s'activent en « grappes » selon un programme temporel précis
• Mécanisme de licence : chaque ori ne peut être utilisé qu'UNE SEULE FOIS par cycle cellulaire (grâce au complexe pré-RC et aux protéines MCM)

→ Analogie : imagine un long manuscrit à photocopier. Les procaryotes n'ont qu'une seule photocopieuse au milieu. Les eucaryotes placent des centaines de photocopieuses le long du texte → beaucoup plus rapide !

→ Chiffre clé : le génome humain possède ~30 000 à 50 000 origines de réplication.`
      },
      {
        title: "🔧 Les mécanismes de réparation de l'ADN",
        content: `Malgré la fidélité de la réplication, des erreurs et des dommages surviennent quotidiennement (UV, radicaux libres, erreurs de copie). La cellule dispose de tout un arsenal de réparation :

• Relecture (proofreading) : l'ADN polymérase vérifie chaque nucléotide ajouté grâce à son activité exonucléase 3'→5'. Taux d'erreur après relecture : ~1 pour 10⁷.
• Réparation des mésappariements (MMR — MisMatch Repair) : corrige les erreurs qui ont échappé à la relecture. Protéines clés : MutS (détecte), MutL (recrute), MutH (coupe).
• Réparation par excision de base (BER) : une glycosylase reconnaît et enlève la base endommagée → site AP → réparé par APE1 + polymérase + ligase.
• Réparation par excision de nucléotides (NER) : enlève un fragment de ~25-30 nucléotides autour de la lésion. Essentiel pour réparer les dimères de thymine (causés par les UV).
• Réparation des cassures double brin : recombinaison homologue (fidèle) ou jonction d'extrémités non homologues (NHEJ, rapide mais imprécise).

Maladies associées à des défauts de réparation :
• Xeroderma pigmentosum (défaut NER) → hypersensibilité aux UV, cancers cutanés
• Syndrome de Lynch (défaut MMR) → prédisposition au cancer colorectal
• Mutations BRCA1/BRCA2 (défaut de recombinaison homologue) → cancers du sein et de l'ovaire`
      },
      {
        title: "🔄 Différences procaryotes vs eucaryotes",
        content: `La réplication suit le même principe de base, mais diffère significativement entre procaryotes et eucaryotes :

Procaryotes :
• 1 seule origine de réplication
• ADN polymérase III = enzyme principale de réplication
• Vitesse : ~1 000 nucléotides/seconde
• Pas de problème de télomères (chromosome circulaire)
• Réplication couplée à la division cellulaire

Eucaryotes :
• Milliers d'origines de réplication
• ADN polymérase δ (brin retardé) et ε (brin directeur) = enzymes principales
• Vitesse : ~50 nucléotides/seconde (mais compensée par les multiples origines)
• Problème des télomères → télomérase
• Réplication uniquement en phase S du cycle cellulaire
• Nécessité de répliquer aussi la chromatine (assemblage de nouveaux nucléosomes)

→ Point important : chez les eucaryotes, les histones parentales sont réparties aléatoirement sur les deux brins filles, et de nouvelles histones sont synthétisées pour compléter.`
      },
      {
        title: "🏥 Applications médicales : cancer et vieillissement",
        content: `La réplication est au cœur de deux grandes problématiques médicales :

Cancer :
• Les cellules cancéreuses se répliquent de façon incontrôlée → cible thérapeutique majeure.
• Agents anticancéreux ciblant la réplication : antimétabolites (5-FU, méthotrexate), agents alkylants (cisplatine), inhibiteurs de topoisomérases (irinotécan, étoposide).
• Les inhibiteurs de PARP (olaparib) exploitent les défauts de réparation dans les cancers BRCA-mutés → « létalité synthétique ».
• La télomérase est réactivée dans ~90% des cancers → cible thérapeutique prometteuse.

Vieillissement :
• Raccourcissement des télomères = horloge biologique → limite de Hayflick (~50 divisions).
• Le stress oxydatif accélère les dommages à l'ADN et le raccourcissement télomérique.
• Syndromes de vieillissement prématuré (progéria, syndrome de Werner) liés à des défauts de réplication ou réparation.

→ La compréhension de la réplication a ouvert la voie aux thérapies ciblées en oncologie et aux recherches sur la longévité.`
      },
      {
        title: "⚠️ Pièges classiques en QCM",
        content: `• PIÈGE 1 : « L'ADN polymérase lit dans le sens 5'→3' » → FAUX. Elle lit le brin matrice en 3'→5' et synthétise le nouveau brin en 5'→3'.
• PIÈGE 2 : « L'ADN polymérase peut démarrer seule la synthèse » → FAUX. Elle a TOUJOURS besoin d'une amorce (primer d'ARN) fabriquée par la primase.
• PIÈGE 3 : « La réplication est conservative » → FAUX. Elle est semi-conservative (expérience de Meselson et Stahl, 1958) : chaque molécule fille contient un brin ancien et un brin nouveau.
• PIÈGE 4 : Confondre brin directeur et brin retardé. Brin directeur = synthèse continue (même sens que la fourche). Brin retardé = fragments d'Okazaki (sens opposé à la fourche).
• PIÈGE 5 : « Les fragments d'Okazaki existent chez les procaryotes et les eucaryotes » → VRAI ! Mais ils sont plus courts chez les eucaryotes (~100-200 nt) que chez les procaryotes (~1 000-2 000 nt).
• PIÈGE 6 : Oublier le rôle des topoisomérases : elles relâchent les super-enroulements en avant de la fourche de réplication.

→ Mnémotechnique pour les enzymes : « HPP-LL » = Hélicase (ouvre) → Primase (amorce) → Polymérase (copie) → Ligase (recolle) → Les topoisomérases (Libèrent les tensions).`
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
      {
        title: "🔬 Les ARN polymérases eucaryotes",
        content: `Chez les eucaryotes, il n'y a pas UNE mais TROIS ARN polymérases, chacune spécialisée :

• ARN polymérase I (Pol I) : transcrit les ARN ribosomiques (ARNr 28S, 18S, 5.8S) dans le nucléole. C'est la plus active (~80% de la transcription totale).
• ARN polymérase II (Pol II) : transcrit les ARN messagers (ARNm) et la plupart des petits ARN nucléaires (snRNA). C'est ELLE qui est au cœur du cours.
• ARN polymérase III (Pol III) : transcrit les ARN de transfert (ARNt), l'ARNr 5S et d'autres petits ARN.

Chez les procaryotes : une SEULE ARN polymérase (avec un facteur sigma σ pour la reconnaissance du promoteur).

Comment les distinguer en QCM ?
→ L'α-amanitine (toxine de l'amanite phalloïde) inhibe spécifiquement la Pol II à faible dose, et la Pol III à forte dose. La Pol I y est résistante.
→ C'est un critère de classification classique en QCM !

Mnémotechnique : « I = ribosomes, II = messagers, III = transfert » → 1-2-3 = r-m-t.`
      },
      {
        title: "🎛️ Régulation de la transcription",
        content: `La cellule ne transcrit pas tous ses gènes en permanence. La régulation transcriptionnelle est le niveau de contrôle le plus important de l'expression génique.

Éléments régulateurs en cis (sur l'ADN) :
• Promoteur : séquence en amont du gène où se fixe la machinerie de transcription. Contient souvent une boîte TATA (~-25) et un élément Inr.
• Enhancers (activateurs) : séquences qui augmentent la transcription, parfois situées à des milliers de paires de bases du gène. Fonctionnent par « boucle » de l'ADN.
• Silencers (répresseurs) : séquences qui diminuent la transcription.
• Insulateurs : séquences « barrières » qui empêchent un enhancer d'activer le mauvais gène.

Facteurs régulateurs en trans (protéines) :
• Facteurs généraux de transcription (TFIIA, B, D, E, F, H) : nécessaires pour que la Pol II se positionne correctement.
• TFIID contient TBP (TATA-Binding Protein) qui reconnaît la boîte TATA.
• Activateurs : facteurs de transcription spécifiques qui stimulent un gène donné (ex : p53, NF-κB).
• Répresseurs : facteurs qui empêchent la transcription.
• Médiateur : complexe multiprotéique qui fait le lien entre les activateurs et la Pol II.

→ Analogie : le promoteur est l'adresse du gène, les enhancers sont des « boosters », et les facteurs de transcription sont les « coursiers » qui activent la machine.`
      },
      {
        title: "🧬 Épigénétique et transcription",
        content: `L'épigénétique, c'est l'ensemble des modifications qui changent l'expression des gènes SANS modifier la séquence d'ADN. Ce sont des « étiquettes » ajoutées sur l'ADN ou les histones.

Les principaux mécanismes épigénétiques :
• Méthylation de l'ADN : ajout de –CH₃ sur les cytosines des dinucléotides CpG → extinction du gène (« gène éteint »). Les îlots CpG sont souvent situés dans les promoteurs.
• Modifications des histones :
  → Acétylation (par les HAT) → ouvre la chromatine → activation
  → Désacétylation (par les HDAC) → ferme la chromatine → répression
  → Méthylation des histones → activation OU répression selon le résidu ciblé
• Remodelage de la chromatine : des complexes SWI/SNF déplacent les nucléosomes pour rendre l'ADN accessible.

Importance médicale :
• L'épigénétique explique pourquoi de vrais jumeaux (même ADN) peuvent développer des maladies différentes.
• Certains cancers présentent une hyperméthylation de gènes suppresseurs de tumeurs → le gène est « éteint » alors qu'il devrait protéger la cellule.
• Médicaments épigénétiques : inhibiteurs de HDAC (vorinostat), agents déméthylants (azacitidine) utilisés en oncologie.

→ L'épigénétique, c'est comme les « post-it » sur le livre ADN : ils ne changent pas le texte, mais indiquent quelles pages lire ou ignorer.`
      },
      {
        title: "🏥 Applications médicales",
        content: `La transcription est une cible thérapeutique majeure :

• Antibiotiques ciblant la transcription procaryote :
  → Rifampicine : inhibe l'ARN polymérase bactérienne (traitement de la tuberculose). Ne touche pas les Pol eucaryotes → sélectivité !
  → Actinomycine D : s'intercale dans l'ADN et bloque la progression de l'ARN polymérase (utilisée comme anticancéreux).

• Toxines :
  → α-amanitine : toxine mortelle de l'amanite phalloïde, inhibe la Pol II eucaryote → insuffisance hépatique fatale.

• Thérapies ciblant la maturation de l'ARN :
  → Nusinersen (Spinraza) : oligonucléotide antisens qui modifie l'épissage du gène SMN2 pour traiter l'amyotrophie spinale.
  → L'épissage alternatif aberrant est impliqué dans de nombreux cancers.

• Diagnostic :
  → RT-PCR : transcription inverse (ARN → ADNc) suivie de PCR. Permet de quantifier l'expression d'un gène ou détecter un virus à ARN (test COVID).
  → Puces à ADN (microarrays) : analysent l'expression de milliers de gènes simultanément.`
      },
      {
        title: "⚠️ Pièges classiques en QCM",
        content: `• PIÈGE 1 : « L'ARN polymérase a besoin d'une amorce » → FAUX. Contrairement à l'ADN polymérase, l'ARN polymérase peut initier la synthèse de novo (sans amorce).
• PIÈGE 2 : « Le brin matrice et le brin codant sont le même brin » → FAUX. Le brin matrice (3'→5') est LU par l'ARN polymérase. Le brin codant (non-matrice, 5'→3') a la même séquence que l'ARN produit (avec T au lieu de U).
• PIÈGE 3 : « L'ARNm est directement utilisable après la transcription chez les eucaryotes » → FAUX. Il subit la maturation (coiffe 5', queue poly-A, épissage) avant d'être exporté.
• PIÈGE 4 : Confondre introns et exons. Introns = INtervening sequences (retirés). Exons = EXprimés (gardés). Mnémo : « les Introns sont IN (jetés IN à la poubelle) ».
• PIÈGE 5 : « Chez les procaryotes, l'ARNm subit un épissage » → FAUX. Pas d'introns dans la plupart des gènes procaryotes, donc pas d'épissage. De plus, la traduction commence avant même que la transcription soit finie (couplage transcription-traduction).
• PIÈGE 6 : « La Pol I transcrit les ARNm » → FAUX. C'est la Pol II.

→ Astuce : en QCM, si on vous parle d'α-amanitine et d'inhibition, pensez Pol II (dose faible) puis Pol III (dose élevée). La Pol I est résistante.`
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
      {
        title: "🔧 Modifications post-traductionnelles",
        content: `La protéine fraîchement traduite n'est souvent pas fonctionnelle telle quelle. Elle doit subir des modifications post-traductionnelles (MPT) :

• Clivage du peptide signal : les protéines destinées à la sécrétion possèdent un peptide signal N-terminal qui est coupé après l'entrée dans le réticulum endoplasmique.
• Glycosylation : ajout de sucres → glycoprotéines. Essentiel pour la reconnaissance cellulaire, le repliement et la stabilité.
  → N-glycosylation (sur Asn) : dans le RE
  → O-glycosylation (sur Ser/Thr) : dans le Golgi
• Phosphorylation : ajout d'un groupe phosphate (par des kinases) sur Ser, Thr ou Tyr → active ou inactive la protéine. C'est LE mécanisme de régulation le plus fréquent !
• Acétylation, méthylation, ubiquitination : modifications des histones et régulation de la dégradation protéique.
• Formation de ponts disulfure : dans le RE, stabilisent la structure tertiaire (entre deux cystéines).
• Ajout d'ancre GPI : ancrage de protéines à la membrane plasmique.

→ Analogie : la traduction fabrique le « brut » de la protéine, les MPT sont la « finition » — peinture, assemblage, contrôle qualité.`
      },
      {
        title: "🎛️ Régulation de la traduction",
        content: `La cellule contrôle non seulement QUELS ARNm sont transcrits, mais aussi lesquels sont traduits et à quelle vitesse :

Niveaux de régulation :
• Durée de vie de l'ARNm : la queue poly-A est progressivement raccourcie → quand elle est trop courte, l'ARNm est dégradé. Certains éléments dans le 3'UTR (comme les séquences ARE) accélèrent la dégradation.
• Séquences régulatrices en 5'UTR : structures secondaires (comme les IRES) peuvent faciliter ou bloquer l'initiation de la traduction.
• Facteurs d'initiation : la phosphorylation d'eIF2α bloque globalement la traduction en situation de stress (carence en acides aminés, infection virale).
• miARN (microARN) : petits ARN (~22 nt) qui se fixent sur le 3'UTR de l'ARNm cible → dégradation ou inhibition de la traduction. Un seul miARN peut réguler des centaines de gènes.
• Régulation par le fer : la traduction de la ferritine est contrôlée par les protéines IRP qui se fixent sur l'élément IRE en 5'UTR de l'ARNm.

→ La régulation traductionnelle permet une réponse rapide : pas besoin de transcrire de nouveaux ARNm, on agit directement sur ceux déjà présents.`
      },
      {
        title: "💊 Antibiotiques ciblant la traduction",
        content: `Les ribosomes procaryotes (70S = 30S + 50S) sont différents des ribosomes eucaryotes (80S = 40S + 60S). Cette différence est exploitée par de nombreux antibiotiques :

Ciblant la sous-unité 30S :
• Tétracyclines : empêchent la fixation de l'ARNt aminoacylé sur le site A du ribosome.
• Aminoglycosides (gentamicine, streptomycine) : provoquent des erreurs de lecture du code génétique → protéines aberrantes.

Ciblant la sous-unité 50S :
• Macrolides (érythromycine, azithromycine) : bloquent la translocation du ribosome.
• Chloramphénicol : inhibe la peptidyl-transférase (formation de la liaison peptidique).
• Lincosamides (clindamycine) : bloquent l'élongation.

Autres :
• Puromycine : ressemble à un ARNt aminoacylé → s'incorpore dans la chaîne peptidique et provoque sa libération prématurée. Fonctionne sur les ribosomes procaryotes ET eucaryotes (→ toxique pour l'homme, utilisée en recherche).
• Cycloheximide : inhibe spécifiquement les ribosomes eucaryotes (80S) → outil de recherche.

→ PIÈGE QCM : le chloramphénicol inhibe aussi la traduction mitochondriale (les mitochondries ont des ribosomes 70S, comme les bactéries !) → toxicité hématologique.`
      },
      {
        title: "🧬 Mutations et maladies liées à la traduction",
        content: `Les erreurs dans le processus de traduction peuvent avoir des conséquences graves :

Mutations affectant le code génétique :
• Mutation faux-sens : changement d'un acide aminé → peut être bénin ou pathogène. Ex : drépanocytose (Glu → Val en position 6 de la β-globine, mutation E6V).
• Mutation non-sens : apparition d'un codon stop prématuré → protéine tronquée, souvent non fonctionnelle. Ex : dystrophie musculaire de Duchenne.
• Mutation frameshift : insertion/délétion décalant le cadre de lecture → protéine complètement altérée en aval.

Maladies liées aux ribosomes (ribosomopathies) :
• Anémie de Diamond-Blackfan : mutation dans les protéines ribosomiques → défaut d'érythropoïèse.
• Syndrome de Shwachman-Diamond : défaut d'assemblage des ribosomes.

Maladies liées aux ARNt :
• Certaines maladies mitochondriales (ex : MELAS, MERRF) sont dues à des mutations dans les ARNt mitochondriaux → défaut de traduction dans les mitochondries.

→ La drépanocytose illustre parfaitement qu'un SEUL changement de nucléotide (A→T) modifiant un SEUL acide aminé peut causer une maladie grave affectant des millions de personnes.`
      },
      {
        title: "⚠️ Pièges classiques en QCM",
        content: `• PIÈGE 1 : « Le code génétique est ambigu » → FAUX. Il est dégénéré (= redondant : plusieurs codons pour un même AA) mais PAS ambigu (un codon = toujours le même AA).
• PIÈGE 2 : « AUG code uniquement pour la méthionine d'initiation » → FAUX. AUG code pour la méthionine à la fois en initiation ET en élongation. C'est le contexte (séquence de Kozak chez les eucaryotes, Shine-Dalgarno chez les procaryotes) qui détermine si c'est un AUG initiateur.
• PIÈGE 3 : « Les codons stop sont traduits en acides aminés » → FAUX. Les codons stop (UAA, UAG, UGA) sont reconnus par des facteurs de libération (RF), PAS par des ARNt.
• PIÈGE 4 : Confondre codon et anticodon. Le codon est sur l'ARNm (5'→3'). L'anticodon est sur l'ARNt (3'→5') et est complémentaire et antiparallèle au codon.
• PIÈGE 5 : « Le ribosome a 2 sites » → INCOMPLET. Le ribosome a 3 sites : A (aminoacyl = entrée de l'ARNt), P (peptidyl = liaison peptidique), E (exit = sortie de l'ARNt vide).
• PIÈGE 6 : « La traduction a lieu dans le noyau » → FAUX. La traduction a lieu dans le cytoplasme (ribosomes libres ou sur le RE rugueux). Chez les procaryotes, elle peut commencer avant la fin de la transcription.

→ Mnémotechnique pour les codons stop : « U Ai Assez » → UAA, UAG, UGA.`
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
      {
        title: "🦠 Maladies du repliement protéique",
        content: `Quand les protéines se replient mal, les conséquences peuvent être dramatiques :

Maladies à protéines mal repliées (protéinopathies) :
• Alzheimer : accumulation de plaques de peptide β-amyloïde et d'enchevêtrements de protéine Tau hyperphosphorylée dans le cerveau.
• Parkinson : agrégation de l'α-synucléine → corps de Lewy dans les neurones dopaminergiques.
• Maladies à prions : la protéine PrPc (normale) est convertie en PrPSc (mal repliée, riche en feuillets β). La forme pathologique est « contagieuse » — elle impose sa conformation aux protéines normales → effet domino.
  → Ex : maladie de Creutzfeldt-Jakob, encéphalopathie spongiforme bovine (« vache folle »).
• Mucoviscidose : mutation ΔF508 du canal CFTR → la protéine est mal repliée, retenue dans le RE et dégradée → pas de canal chlore fonctionnel à la membrane.
• Drépanocytose : la mutation E6V de l'hémoglobine → polymérisation de l'HbS en conditions désoxygénées → déformation des globules rouges en « faucille ».

Le système de contrôle qualité :
• Protéines chaperonnes (Hsp70, Hsp60/chaperonines) : aident au repliement correct.
• Système ubiquitine-protéasome : les protéines irréparables sont marquées par l'ubiquitine et dégradées par le protéasome (le « broyeur » cellulaire).
• Autophagie : dégradation des agrégats protéiques par les lysosomes.

→ Les inhibiteurs du protéasome (bortézomib) sont utilisés en chimiothérapie : en bloquant la dégradation des protéines, ils provoquent un stress toxique dans les cellules cancéreuses.`
      },
      {
        title: "📐 Cinétique enzymatique : les bases",
        content: `Les enzymes sont des protéines catalytiques. Comprendre leur cinétique est essentiel en biochimie PASS.

Modèle de Michaelis-Menten :
• Équation : V = (Vmax × [S]) / (Km + [S])
• Vmax : vitesse maximale, atteinte quand toutes les enzymes sont saturées en substrat.
• Km (constante de Michaelis) : concentration de substrat pour laquelle V = Vmax/2.
  → Km faible = haute affinité (l'enzyme « attrape » bien son substrat)
  → Km élevé = faible affinité

Représentation de Lineweaver-Burk (double inverse) :
• 1/V = (Km/Vmax) × (1/[S]) + 1/Vmax
• Donne une droite → plus facile pour déterminer Km et Vmax graphiquement.
• Ordonnée à l'origine = 1/Vmax
• Pente = Km/Vmax

Types d'inhibition :
• Compétitive : l'inhibiteur se fixe sur le site actif → Km apparent augmente, Vmax inchangée.
• Non compétitive : l'inhibiteur se fixe sur un site allostérique → Km inchangé, Vmax diminuée.
• Incompétitive : l'inhibiteur se fixe sur le complexe ES → Km ET Vmax diminuent.

→ Astuce pour les QCM : dessinez toujours le graphique de Lineweaver-Burk. La compétitive change la pente mais pas l'ordonnée, la non-compétitive change l'ordonnée mais pas l'abscisse.`
      },
      {
        title: "🔬 Techniques d'étude des protéines",
        content: `Plusieurs techniques sont incontournables en biochimie pour étudier les protéines :

Séparation par taille :
• Électrophorèse SDS-PAGE : le SDS dénature les protéines et leur donne une charge négative uniforme → elles migrent selon leur masse moléculaire dans un gel de polyacrylamide. Les petites migrent plus vite.
• Western Blot : après SDS-PAGE, les protéines sont transférées sur une membrane et détectées par un anticorps spécifique → identification d'une protéine précise.

Séparation par charge :
• Électrophorèse sur gel natif : les protéines ne sont pas dénaturées → migration selon charge ET forme.
• Isoélectrofocalisation (IEF) : sépare les protéines selon leur point isoélectrique (pI).

Chromatographies :
• Échangeuse d'ions : sépare selon la charge.
• Exclusion de taille (gel-filtration) : sépare selon la taille (les grosses sortent en premier).
• Affinité : utilise un ligand spécifique fixé sur la colonne pour « pêcher » une protéine cible (ex : colonne Ni-NTA pour les protéines His-tag).

Analyse structurale :
• Cristallographie aux rayons X : résolution atomique de la structure 3D.
• Cryo-microscopie électronique (cryo-EM) : révolution récente, Prix Nobel 2017.
• Spectroscopie de masse : détermine la masse exacte et la séquence.

→ En QCM, retenez que le SDS-PAGE sépare par MASSE SEULE (le SDS annule les charges naturelles).`
      },
      {
        title: "🌡️ Dénaturation des protéines",
        content: `La dénaturation est la perte de la structure tridimensionnelle (secondaire, tertiaire, quaternaire) d'une protéine. La séquence primaire reste intacte.

Agents dénaturants :
• Chaleur : agitation thermique → rupture des liaisons faibles. La plupart des protéines se dénaturent entre 40 et 80°C.
• pH extrême : modification des charges → rupture des liaisons ioniques et hydrogène.
• Détergents (SDS) : perturbent les interactions hydrophobes.
• Urée et guanidinium : rompent les liaisons hydrogène.
• Agents réducteurs (β-mercaptoéthanol, DTT) : rompent les ponts disulfure.

Dénaturation réversible vs irréversible :
• Réversible : si les conditions normales sont restaurées doucement, certaines petites protéines (ex : RNase A) peuvent se replier à nouveau → expérience d'Anfinsen (Prix Nobel 1972), prouvant que la séquence détermine la structure.
• Irréversible : si la dénaturation provoque des agrégations (ex : blanc d'œuf cuit), le retour est impossible.

Points clés en QCM :
• La dénaturation NE rompt PAS les liaisons peptidiques (structure primaire conservée).
• Le SDS dénature ET charge négativement les protéines → base du SDS-PAGE.
• La fièvre (>41°C) peut dénaturer certaines enzymes → danger vital.`
      },
      {
        title: "⚠️ Pièges classiques en QCM",
        content: `• PIÈGE 1 : « La structure primaire est suffisante pour la fonction » → FAUX. C'est la structure 3D (tertiaire/quaternaire) qui détermine la fonction. La séquence détermine le repliement, qui détermine la fonction.
• PIÈGE 2 : « Tous les acides aminés sont chiraux » → FAUX. La glycine (R = H) n'a pas de carbone asymétrique → pas de chiralité.
• PIÈGE 3 : Confondre structure tertiaire et quaternaire. Tertiaire = forme 3D d'UNE chaîne. Quaternaire = assemblage de PLUSIEURS chaînes (sous-unités). Ex : l'hémoglobine (α₂β₂) a une structure quaternaire, la myoglobine (1 chaîne) n'en a pas.
• PIÈGE 4 : « Les ponts disulfure stabilisent la structure secondaire » → FAUX. Les ponts disulfure stabilisent la structure tertiaire (et parfois quaternaire). La structure secondaire est stabilisée par des liaisons hydrogène entre les groupements NH et CO du squelette peptidique.
• PIÈGE 5 : « Km est une mesure directe de l'affinité » → ATTENTION. Km ≈ Kd (constante de dissociation) seulement si k₂ << k₋₁. En pratique, on l'utilise comme indicateur d'affinité, mais ce n'est pas strictement exact.
• PIÈGE 6 : « Un inhibiteur compétitif diminue Vmax » → FAUX. Il augmente le Km apparent mais ne change pas Vmax (on peut toujours saturer l'enzyme avec assez de substrat).

→ Pour retenir les 4 niveaux : « Séquence → Spirales → Spatial → Société ».`
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
      {
        title: "🔥 La glycolyse en détail",
        content: `La glycolyse est la première voie de dégradation du glucose. Elle a lieu dans le CYTOPLASME de toutes les cellules (pas besoin d'oxygène !).

Bilan global : Glucose (6C) → 2 Pyruvates (3C)
→ Production nette : 2 ATP + 2 NADH

Les 10 réactions se divisent en 2 phases :

Phase d'investissement (réactions 1-5) :
• Le glucose est phosphorylé deux fois (consomme 2 ATP)
• Enzymes clés : hexokinase (réaction 1) et phosphofructokinase-1/PFK-1 (réaction 3)
• PFK-1 = enzyme limitante de la glycolyse → point de contrôle majeur

Phase de rendement (réactions 6-10) :
• Chaque triose phosphate (×2) produit 2 ATP et 1 NADH
• Enzyme clé : pyruvate kinase (réaction 10)

Régulation de la glycolyse :
• PFK-1 est activée par : AMP, fructose-2,6-bisphosphate (F2,6BP)
• PFK-1 est inhibée par : ATP, citrate (quand la cellule a assez d'énergie)
• L'insuline stimule la glycolyse, le glucagon l'inhibe

→ Piège QCM : la glycolyse produit 2 ATP net (4 produits - 2 investis), pas 4 !`
      },
      {
        title: "🔄 Le cycle de Krebs (cycle de l'acide citrique)",
        content: `Le cycle de Krebs a lieu dans la MATRICE MITOCHONDRIALE. Il complète l'oxydation du glucose en transformant l'acétyl-CoA en CO₂.

Étape préalable : le pyruvate (du cytoplasme) entre dans la mitochondrie et est converti en acétyl-CoA par la pyruvate déshydrogénase (PDH) :
→ Pyruvate + CoA + NAD⁺ → Acétyl-CoA + CO₂ + NADH

Le cycle en résumé (par tour) :
• Acétyl-CoA (2C) + Oxaloacétate (4C) → Citrate (6C)
• Puis 8 réactions successives régénèrent l'oxaloacétate

Bilan d'UN tour de cycle :
• 3 NADH + 1 FADH₂ + 1 GTP (≈ 1 ATP) + 2 CO₂
• Comme 1 glucose donne 2 acétyl-CoA → multiplier par 2 !

Enzymes régulatrices :
• Citrate synthase, isocitrate déshydrogénase, α-cétoglutarate déshydrogénase
• Activées par : ADP, NAD⁺ (signaux de besoin énergétique)
• Inhibées par : ATP, NADH, citrate (signaux de suffisance)

→ Analogie : le cycle de Krebs est comme un « moulin à énergie ». L'acétyl-CoA est le « grain » qui entre, les coenzymes réduits (NADH, FADH₂) sont la « farine » qui alimentera la chaîne respiratoire.`
      },
      {
        title: "⚡ La phosphorylation oxydative",
        content: `C'est la voie qui produit le PLUS d'ATP — elle a lieu dans la MEMBRANE INTERNE MITOCHONDRIALE.

La chaîne respiratoire (4 complexes) :
• Complexe I (NADH déshydrogénase) : NADH → NAD⁺ + H⁺ + e⁻ (pompe 4 H⁺)
• Complexe II (succinate déshydrogénase) : FADH₂ → FAD + H⁺ + e⁻ (ne pompe PAS de H⁺)
• Complexe III (cytochrome bc1) : transfère les e⁻ au cytochrome c (pompe 4 H⁺)
• Complexe IV (cytochrome c oxydase) : transfère les e⁻ à l'O₂ → H₂O (pompe 2 H⁺)

Le gradient de protons :
• Les complexes I, III et IV pompent des H⁺ de la matrice vers l'espace intermembranaire.
• Cela crée un gradient électrochimique (force protomotrice).
• L'ATP synthase (complexe V) utilise ce gradient : les H⁺ redescendent à travers elle comme de l'eau dans un moulin → synthèse d'ATP (ADP + Pi → ATP).

Bilan énergétique complet (1 glucose) :
• 1 NADH ≈ 2,5 ATP
• 1 FADH₂ ≈ 1,5 ATP
• Total théorique : ~30-32 ATP par glucose (et non 36-38, selon les calculs révisés)

Accepteur final des électrons : l'O₂ → c'est pour ça qu'on respire ! Sans O₂, la chaîne s'arrête, pas d'ATP, la cellule meurt.

→ Le cyanure est mortel car il bloque le complexe IV → les électrons ne peuvent plus être transférés à l'O₂ → arrêt total de la production d'ATP.`
      },
      {
        title: "🧪 La fermentation : plan B sans oxygène",
        content: `Quand l'O₂ manque, la cellule utilise la fermentation pour régénérer le NAD⁺ et maintenir la glycolyse active (seule source d'ATP en anaérobie).

Fermentation lactique :
• Pyruvate + NADH → Lactate + NAD⁺
• Enzyme : lactate déshydrogénase (LDH)
• Où ? Muscles en effort intense, globules rouges (pas de mitochondries !), certaines bactéries (yaourt).
• Conséquence : accumulation d'acide lactique → fatigue musculaire, acidose.

Fermentation alcoolique :
• Pyruvate → Acétaldéhyde + CO₂ → Éthanol + NAD⁺
• Chez les levures → base de la boulangerie (CO₂ fait lever la pâte) et de la production d'alcool.

Bilan comparatif :
• Glycolyse seule (anaérobie) : 2 ATP/glucose → très peu efficace
• Oxydation complète (aérobie) : ~30-32 ATP/glucose → 15× plus efficace !

→ C'est pourquoi les cellules préfèrent la respiration aérobie. La fermentation est un « mode dégradé » de survie.

Cas particulier — effet Warburg :
• Les cellules cancéreuses utilisent massivement la glycolyse même en présence d'O₂ (« glycolyse aérobie »).
• Base du PET-scan : les tumeurs captent plus de glucose marqué (¹⁸F-FDG) → imagerie diagnostique.`
      },
      {
        title: "🏥 Applications médicales et pièges QCM",
        content: `Applications cliniques du métabolisme énergétique :

• Diabète : défaut de régulation de la glycémie → hyperglycémie chronique. Le diabète de type 1 = défaut d'insuline. Type 2 = insulinorésistance.
• Acidose lactique : accumulation de lactate (choc, insuffisance hépatique, metformine à forte dose).
• Maladies mitochondriales : défauts génétiques dans les complexes de la chaîne respiratoire → myopathies, encéphalopathies (ex : MELAS).
• Poisons métaboliques : cyanure (bloque complexe IV), monoxyde de carbone (bloque l'hémoglobine ET le complexe IV), roténone (bloque complexe I), antimycine A (bloque complexe III).

Pièges classiques en QCM :
• PIÈGE 1 : « La glycolyse nécessite de l'oxygène » → FAUX. Elle est anaérobie.
• PIÈGE 2 : « Le cycle de Krebs a lieu dans le cytoplasme » → FAUX. Matrice mitochondriale.
• PIÈGE 3 : « Le FADH₂ produit autant d'ATP que le NADH » → FAUX. NADH ≈ 2,5 ATP, FADH₂ ≈ 1,5 ATP (le FADH₂ entre au complexe II qui ne pompe pas de H⁺).
• PIÈGE 4 : Confondre PFK-1 (enzyme de la glycolyse) et PFK-2 (produit le F2,6BP qui active PFK-1).
• PIÈGE 5 : « Les globules rouges font la phosphorylation oxydative » → FAUX. Ils n'ont pas de mitochondries ! Ils dépendent exclusivement de la glycolyse.

→ Chiffre clé à retenir : 30-32 ATP par glucose en conditions aérobies.`
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
      {
        title: "🔀 Stéréochimie des sucres",
        content: `La stéréochimie est fondamentale pour comprendre les glucides. Un même formule brute peut donner des molécules très différentes !

Notions clés :
• Carbone asymétrique (C*) : un carbone lié à 4 groupements différents. Le glucose (6C) possède 4 C* → 2⁴ = 16 stéréoisomères possibles.
• Configuration D et L : déterminée par la position du OH sur l'avant-dernier carbone dans la projection de Fischer.
  → OH à droite = série D (la plus fréquente dans le vivant)
  → OH à gauche = série L
• Énantiomères : images miroir l'un de l'autre (D-glucose et L-glucose).
• Épimères : ne diffèrent que par la configuration d'UN SEUL carbone asymétrique.
  → Glucose et galactose sont épimères en C4.
  → Glucose et mannose sont épimères en C2.
• Anomères α et β : lors de la cyclisation, un nouveau C* apparaît (carbone anomérique = C1 pour les aldoses). OH en dessous du plan = α, OH au-dessus = β.
• Mutarotation : en solution, les formes α et β s'interconvertissent spontanément via la forme ouverte.

→ La différence α/β a des conséquences énormes : l'amidon (liaisons α-1,4) est digestible, la cellulose (liaisons β-1,4) ne l'est pas !

→ Piège QCM : D-glucose ≠ dextrogyre. La notation D/L est une convention structurale, pas un pouvoir rotatoire.`
      },
      {
        title: "🔗 Les liaisons osidiques",
        content: `La liaison osidique (glycosidique) unit deux oses entre eux par une réaction de condensation (perte d'une molécule d'eau).

Types de liaisons :
• α(1→4) : liaison entre le C1 (en α) d'un ose et le C4 du suivant → chaînes linéaires.
  Ex : maltose, amylose (composant de l'amidon).
• α(1→6) : crée des ramifications.
  Ex : points de branchement du glycogène et de l'amylopectine.
• β(1→4) : liaison entre le C1 (en β) d'un ose et le C4 du suivant.
  Ex : cellulose, lactose (galactose β1→4 glucose).
• β(1→2) : ex : saccharose (glucose α1↔β2 fructose) — liaison particulière car engage les deux carbones anomériques → pas de pouvoir réducteur.

Pouvoir réducteur :
• Un ose est réducteur s'il possède un carbone anomérique libre (fonction aldéhyde ou cétone libre en équilibre).
• Le saccharose n'est PAS réducteur (les deux anomériques sont engagés dans la liaison).
• Le maltose et le lactose SONT réducteurs (un anomérique reste libre).

→ Piège QCM classique : « Le saccharose est un sucre réducteur » → FAUX ! C'est LE contre-exemple à connaître.`
      },
      {
        title: "🧬 Glycoprotéines et glycolipides",
        content: `Les sucres ne sont pas que des sources d'énergie. Attachés à des protéines ou des lipides, ils jouent des rôles biologiques essentiels.

Glycoprotéines (protéines + chaînes glucidiques) :
• N-glycosylation : le sucre est lié à l'azote d'une asparagine (Asn) dans la séquence Asn-X-Ser/Thr (X ≠ Pro). Commence dans le RE, se poursuit dans le Golgi.
• O-glycosylation : le sucre est lié à l'oxygène d'une sérine ou thréonine. A lieu dans le Golgi.
• Rôles : repliement des protéines, stabilité, reconnaissance cellulaire, protection contre la protéolyse.
• Exemples : anticorps (IgG), mucines (protègent les muqueuses), récepteurs membranaires.

Glycolipides (lipides + chaînes glucidiques) :
• Cérébrosides : sphingosine + acide gras + 1 sucre (galactose dans le cerveau).
• Gangliosides : sphingosine + acide gras + chaîne oligosaccharidique contenant de l'acide sialique (NANA).
• Rôles : composants de la membrane plasmique, reconnus par des toxines et virus.

Groupes sanguins ABO :
• Déterminés par les sucres ajoutés sur l'antigène H des globules rouges :
  → Groupe A : N-acétylgalactosamine ajoutée
  → Groupe B : galactose ajouté
  → Groupe O : pas d'ajout (antigène H seul)
  → Groupe AB : les deux
→ La différence entre les groupes sanguins tient à UN SEUL sucre en bout de chaîne !`
      },
      {
        title: "🏥 Glucides et diabète",
        content: `Le métabolisme des glucides est au cœur du diabète, maladie métabolique la plus fréquente au monde.

Régulation normale de la glycémie :
• Après un repas : glycémie ↑ → le pancréas sécrète de l'insuline → stimule la captation du glucose par les cellules, la glycolyse et la glycogénogenèse → glycémie ↓.
• À jeun : glycémie ↓ → le pancréas sécrète du glucagon → stimule la glycogénolyse (dégradation du glycogène) et la néoglucogenèse (synthèse de glucose à partir de précurseurs non glucidiques) → glycémie ↑.
• Valeur normale de la glycémie à jeun : 0,7-1,1 g/L (3,9-6,1 mmol/L).

Diabète de type 1 :
• Destruction auto-immune des cellules β du pancréas → plus d'insuline.
• Traitement : injection d'insuline.

Diabète de type 2 :
• Insulinorésistance + épuisement progressif des cellules β → hyperglycémie chronique.
• Facteurs de risque : obésité, sédentarité, prédisposition génétique.
• Traitement : régime, exercice, antidiabétiques oraux (metformine = 1re ligne), puis insuline si nécessaire.

Complications du diabète :
• Glycation non enzymatique : le glucose en excès se fixe sur les protéines (ex : HbA1c = hémoglobine glyquée, reflet de la glycémie sur 3 mois).
• Microangiopathie (rétinopathie, néphropathie), macroangiopathie (athérosclérose), neuropathie.

→ L'HbA1c est LE marqueur de suivi du diabète en pratique clinique.`
      },
      {
        title: "⚠️ Pièges classiques en QCM",
        content: `• PIÈGE 1 : « Le fructose est un aldose » → FAUX. Le fructose est un cétose (fonction cétone en C2). Le glucose est un aldose (fonction aldéhyde en C1).
• PIÈGE 2 : « Le glycogène et l'amidon ont la même structure » → FAUX. Le glycogène est BEAUCOUP plus ramifié que l'amylopectine (branchement tous les 8-12 résidus vs tous les 20-25).
• PIÈGE 3 : « Tous les disaccharides sont réducteurs » → FAUX. Le saccharose ne l'est pas (liaison α1↔β2 engage les deux anomériques).
• PIÈGE 4 : « D-glucose = glucose dextrogyre » → ATTENTION. D fait référence à la configuration (position du OH sur l'avant-dernier C en Fischer), PAS au pouvoir rotatoire (+/-). Le D-glucose est bien dextrogyre (+), mais c'est une coïncidence, pas une règle.
• PIÈGE 5 : « La cellulose est digérée par l'amylase » → FAUX. L'amylase coupe les liaisons α(1→4). La cellulose a des liaisons β(1→4) → nécessite une cellulase (absente chez l'Homme).
• PIÈGE 6 : Confondre glycogénolyse (dégradation du glycogène) et glycolyse (dégradation du glucose). Ce sont deux voies différentes !

→ Mnémotechnique : « Aldo = Aldéhyde en C1, Céto = Cétone en C2 ».`
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
      {
        title: "🧪 Acides gras : types et nomenclature",
        content: `Les acides gras sont les briques élémentaires des lipides. Ce sont de longues chaînes carbonées avec un groupe carboxylique (-COOH) à une extrémité.

Classification :
• Saturés : aucune double liaison C=C → chaîne droite → solide à température ambiante.
  Ex : acide palmitique (C16:0), acide stéarique (C18:0). Présents dans le beurre, la viande.
• Monoinsaturés : 1 double liaison → coude dans la chaîne (configuration cis).
  Ex : acide oléique (C18:1 Δ9, oméga-9). Présent dans l'huile d'olive.
• Polyinsaturés : ≥2 doubles liaisons.
  Ex : acide linoléique (C18:2, oméga-6), acide α-linolénique (C18:3, oméga-3).

Nomenclature :
• Cn:x = n carbones, x doubles liaisons.
• Δ = position de la double liaison depuis le carboxyle.
• Oméga (ω ou n-) = position depuis le méthyle terminal.
  → Oméga-3 : dernière double liaison sur le 3e carbone depuis la fin.
  → Oméga-6 : dernière double liaison sur le 6e carbone depuis la fin.

Acides gras essentiels (non synthétisables par l'Homme) :
• Acide linoléique (oméga-6) — précurseur de l'acide arachidonique
• Acide α-linolénique (oméga-3) — précurseur de l'EPA et du DHA

→ Configuration cis vs trans : les AG naturels sont en cis (coude). Les AG trans (issus de l'hydrogénation industrielle) sont droits comme les saturés → risque cardiovasculaire accru.`
      },
      {
        title: "🔬 Eicosanoïdes : les messagers lipidiques",
        content: `Les eicosanoïdes sont des dérivés des acides gras polyinsaturés à 20 carbones (principalement l'acide arachidonique, oméga-6). Ce sont de puissants médiateurs locaux.

La cascade de l'acide arachidonique :
• Phospholipase A2 (PLA2) libère l'acide arachidonique des phospholipides membranaires.
• Voie des cyclooxygénases (COX) → produit :
  → Prostaglandines (PGE2, PGI2) : douleur, fièvre, inflammation, protection gastrique, vasodilatation.
  → Thromboxanes (TXA2) : agrégation plaquettaire, vasoconstriction.
• Voie des lipoxygénases (LOX) → produit :
  → Leucotriènes (LTB4, LTC4) : bronchoconstriction, inflammation, chimiotactisme des leucocytes.

Applications pharmacologiques majeures :
• Aspirine (AINS) : inhibe irréversiblement COX-1 et COX-2 → anti-inflammatoire, antipyrétique, antiagrégant plaquettaire (à faible dose).
• Ibuprofène, naproxène : inhibiteurs réversibles de COX → anti-inflammatoires.
• Corticoïdes : inhibent la PLA2 (via lipocortine) → bloquent toute la cascade en amont.
• Montélukast : antagoniste des récepteurs des leucotriènes → traitement de l'asthme.

→ Piège QCM : l'aspirine inhibe COX de façon IRRÉVERSIBLE (acétylation), contrairement aux autres AINS qui sont réversibles.`
      },
      {
        title: "🚚 Lipoprotéines : le transport des lipides",
        content: `Les lipides sont insolubles dans l'eau → ils ont besoin de transporteurs dans le sang : les lipoprotéines.

Structure d'une lipoprotéine :
• Cœur hydrophobe : triglycérides + esters de cholestérol
• Surface amphiphile : phospholipides + cholestérol libre + apolipoprotéines (apo)

Les grandes classes (par densité croissante) :
• Chylomicrons : transportent les lipides alimentaires de l'intestin vers les tissus. Très riches en TG. Apo B-48.
• VLDL (Very Low Density) : transportent les TG fabriqués par le foie vers les tissus. Apo B-100.
• LDL (Low Density) : transportent le cholestérol vers les tissus. Apo B-100. → « Mauvais cholestérol » (s'accumule dans les artères).
• HDL (High Density) : ramènent le cholestérol des tissus vers le foie (transport inverse). Apo A-I. → « Bon cholestérol ».

Valeurs normales (à connaître) :
• Cholestérol total : < 2 g/L (5,2 mmol/L)
• LDL-cholestérol : < 1,6 g/L (objectifs plus bas chez les patients à risque)
• HDL-cholestérol : > 0,4 g/L chez l'homme, > 0,5 g/L chez la femme
• Triglycérides : < 1,5 g/L

→ Moyen mnémotechnique : LDL = « Lousy » (mauvais), HDL = « Healthy » (bon).`
      },
      {
        title: "🫀 Athérosclérose : quand les lipides bouchent les artères",
        content: `L'athérosclérose est la maladie des artères liée à l'accumulation de lipides dans la paroi vasculaire. C'est la première cause de mortalité dans les pays développés.

Mécanisme simplifié :
1. Lésion de l'endothélium (tabac, HTA, diabète) → perméabilité accrue.
2. Les LDL s'infiltrent dans la paroi artérielle et s'oxydent.
3. Les LDL oxydées sont captées par les macrophages → formation de cellules spumeuses (remplies de cholestérol).
4. Accumulation progressive → formation de la plaque d'athérome (stries lipidiques → plaque fibreuse → plaque compliquée).
5. Rupture de plaque → thrombose → infarctus du myocarde ou AVC.

Facteurs de risque :
• LDL élevé, HDL bas, tabac, HTA, diabète, obésité, sédentarité, antécédents familiaux.

Traitements hypolipémiants :
• Statines (atorvastatine, rosuvastatine) : inhibent l'HMG-CoA réductase → enzyme clé de la synthèse du cholestérol. ↓ LDL de 30-50%.
• Ézétimibe : inhibe l'absorption intestinale du cholestérol.
• Fibrates : ↓ triglycérides, activent PPARα.
• Inhibiteurs de PCSK9 (évolocumab) : augmentent le nombre de récepteurs LDL → ↓↓ LDL.

→ Les statines sont parmi les médicaments les plus prescrits au monde. Leur cible, l'HMG-CoA réductase, est l'enzyme limitante de la synthèse du cholestérol.`
      },
      {
        title: "⚠️ Pièges classiques en QCM",
        content: `• PIÈGE 1 : « Les acides gras insaturés sont solides à température ambiante » → FAUX. C'est l'inverse. Les insaturés (huiles) sont liquides, les saturés (beurre) sont solides. Les doubles liaisons cis créent des coudes qui empêchent l'empilement → point de fusion plus bas.
• PIÈGE 2 : « Le cholestérol est un lipide à éviter » → FAUX. Le cholestérol est essentiel : composant des membranes, précurseur des hormones stéroïdiennes (cortisol, testostérone, œstrogènes), de la vitamine D et des acides biliaires. C'est l'EXCÈS qui pose problème.
• PIÈGE 3 : Confondre phospholipides et triglycérides. Phospholipide = 2 AG + glycérol + phosphate + tête polaire (amphiphile → membranes). Triglycéride = 3 AG + glycérol (hydrophobe → stockage).
• PIÈGE 4 : « Les sphingolipides contiennent du glycérol » → FAUX. Leur squelette est la sphingosine (aminoalcool à longue chaîne), pas le glycérol. Ex : sphingomyéline, cérébrosides, gangliosides.
• PIÈGE 5 : « Les HDL transportent le cholestérol vers les tissus » → FAUX. C'est l'inverse : les HDL assurent le transport INVERSE du cholestérol (des tissus vers le foie pour élimination).
• PIÈGE 6 : « L'aspirine inhibe réversiblement les COX » → FAUX. L'aspirine acétyle de façon IRRÉVERSIBLE la sérine du site actif de COX.

→ Mnémotechnique pour les lipoprotéines (taille décroissante, densité croissante) : « Ce Vilain LDL Harcèle » → Chylomicrons > VLDL > LDL > HDL.`
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
      {
        title: "💧 L'eau : le solvant de la vie",
        content: `L'eau représente 60-70% de la masse corporelle. Ses propriétés uniques sont à la base de toute la biochimie.

Propriétés essentielles :
• Molécule polaire : l'oxygène attire plus les électrons → moment dipolaire → capacité à dissoudre les molécules polaires et ioniques.
• Liaisons hydrogène : chaque molécule d'eau peut former jusqu'à 4 liaisons H avec ses voisines. Conséquences :
  → Haute capacité calorifique (tamponne les variations de température corporelle)
  → Haute chaleur de vaporisation (la transpiration refroidit efficacement)
  → Haute tension de surface (cohésion)
  → Densité max à 4°C (la glace flotte → protège les écosystèmes aquatiques)

L'effet hydrophobe :
• Les molécules non polaires (lipides) ne peuvent pas interagir avec l'eau → elles se regroupent entre elles pour minimiser le contact.
• C'est LE moteur du repliement protéique et de la formation des membranes lipidiques.
• Analogy : comme une goutte d'huile dans l'eau qui forme spontanément une sphère.

Eau liée vs eau libre :
• Eau liée : fixée aux protéines et aux ions par des liaisons H (couche d'hydratation).
• Eau libre : circule librement, participe aux réactions biochimiques.

→ L'eau n'est pas un solvant « passif » : elle participe activement aux réactions (hydrolyse, condensation) et sa structure influence la conformation de toutes les biomolécules.`
      },
      {
        title: "🤝 Les liaisons faibles en biochimie",
        content: `En biochimie, ce sont les liaisons FAIBLES (non covalentes) qui déterminent la forme et la fonction des biomolécules. Elles sont individuellement faibles mais collectivement puissantes.

Les 4 types de liaisons faibles :
• Liaisons hydrogène : entre un H lié à un atome électronégatif (O, N) et un autre atome électronégatif. Énergie : 4-20 kJ/mol.
  → Exemples : appariement des bases dans l'ADN (A=T : 2 liaisons H, G≡C : 3 liaisons H), structure secondaire des protéines.
• Interactions ioniques (électrostatiques) : entre charges opposées (ex : -COO⁻ et -NH₃⁺). Énergie : 20-40 kJ/mol.
  → Stabilisent les structures tertiaire et quaternaire des protéines.
• Interactions de Van der Waals : attractions faibles entre tous les atomes à courte distance. Énergie : 2-4 kJ/mol.
  → Faibles individuellement mais très nombreuses → contribution significative.
• Interactions hydrophobes : regroupement des résidus non polaires pour fuir l'eau. Ce n'est pas une vraie « liaison » mais un effet entropique.
  → Moteur principal du repliement protéique.

Comparaison avec les liaisons covalentes :
• Liaison covalente : 200-400 kJ/mol → structure primaire, liaisons peptidiques, liaisons osidiques.
• Liaisons faibles : 2-40 kJ/mol → structures secondaire, tertiaire, quaternaire, interactions enzyme-substrat, reconnaissance antigène-anticorps.

→ Point clé : c'est la SOMME de nombreuses liaisons faibles qui assure la stabilité des structures biologiques, tout en permettant leur flexibilité et leur réversibilité (essentiel pour la régulation).`
      },
      {
        title: "⚗️ pH et systèmes tampons",
        content: `Le pH est fondamental en biochimie car il influence la charge et la conformation de toutes les biomolécules.

Rappels :
• pH = -log[H⁺]. À 25°C : pH 7 = neutre, pH < 7 = acide, pH > 7 = basique.
• pH sanguin normal : 7,35-7,45 (légèrement basique). Une variation même minime est dangereuse :
  → pH < 7,35 = acidose → pH < 6,8 = mort
  → pH > 7,45 = alcalose → pH > 7,8 = mort

Équation de Henderson-Hasselbalch :
• pH = pKa + log([A⁻]/[AH])
• Au pKa : [A⁻] = [AH] → pouvoir tampon maximal.
• Un tampon est efficace dans la zone pKa ± 1.

Les systèmes tampons du corps :
• Tampon bicarbonate (le plus important dans le sang) :
  CO₂ + H₂O ⇌ H₂CO₃ ⇌ H⁺ + HCO₃⁻
  pKa ≈ 6,1. Malgré un pKa loin de 7,4, il est efficace car le CO₂ est éliminé par les poumons (système ouvert).
• Tampon phosphate : H₂PO₄⁻/HPO₄²⁻ (pKa = 6,8). Important dans les cellules et les urines.
• Tampon protéines : les groupements ionisables des acides aminés (histidine notamment, pKa ≈ 6,0) tamponnent le pH intracellulaire. L'hémoglobine est un tampon majeur dans le sang.

→ En QCM, retenez l'équation de Henderson-Hasselbalch et les 3 systèmes tampons principaux. La régulation du pH est un sujet transversal (biochimie, physiologie, pharmacologie).`
      },
      {
        title: "🔥 Bases de thermodynamique biochimique",
        content: `La thermodynamique permet de prédire si une réaction est spontanée ou non.

Concepts clés :
• Enthalpie libre de Gibbs (ΔG) : détermine la spontanéité d'une réaction.
  → ΔG < 0 : réaction exergonique (spontanée, libère de l'énergie). Ex : glycolyse.
  → ΔG > 0 : réaction endergonique (non spontanée, nécessite de l'énergie). Ex : synthèse protéique.
  → ΔG = 0 : équilibre.
• ΔG° (standard) vs ΔG (réel) : ΔG dépend aussi des concentrations réelles des réactifs et produits.
  → ΔG = ΔG° + RT ln(Q) où Q = rapport des concentrations.
• ΔG°' : conditions standard biochimiques (pH 7, 25°C, 1 atm).

Le couplage énergétique :
• Une réaction endergonique peut avoir lieu si elle est couplée à une réaction exergonique.
• L'hydrolyse de l'ATP est la réaction de couplage la plus fréquente :
  ATP → ADP + Pi, ΔG°' ≈ -30,5 kJ/mol
• Exemple : la phosphorylation du glucose (ΔG°' = +13,8 kJ/mol) est couplée à l'hydrolyse de l'ATP → réaction globale ΔG°' = -16,7 kJ/mol → spontanée !

Rôle des enzymes :
• Les enzymes NE changent PAS le ΔG de la réaction (elles ne changent pas la thermodynamique).
• Elles abaissent l'énergie d'activation (Ea) → la réaction est plus RAPIDE, pas plus spontanée.

→ Piège QCM majeur : « Les enzymes rendent les réactions spontanées » → FAUX. Si ΔG > 0, la réaction ne sera jamais spontanée, même avec une enzyme. L'enzyme accélère les réactions qui sont DÉJÀ thermodynamiquement favorables.`
      },
      {
        title: "⚠️ Pièges classiques en QCM",
        content: `• PIÈGE 1 : « L'eau est un solvant universel » → FAUX. L'eau ne dissout pas les molécules non polaires (lipides, solvants organiques). Elle dissout les molécules polaires et ioniques.
• PIÈGE 2 : « pH = 7 dans le corps humain » → FAUX. Le pH sanguin est de 7,35-7,45. Le pH varie selon les compartiments : estomac (pH 1-2), urine (pH 5-7), intestin (pH 8).
• PIÈGE 3 : « Une enzyme change le ΔG de la réaction » → FAUX. Elle abaisse l'énergie d'activation (cinétique), pas le ΔG (thermodynamique). La position d'équilibre n'est pas modifiée.
• PIÈGE 4 : « Les liaisons hydrogène sont des liaisons covalentes » → FAUX. Ce sont des liaisons faibles (~10-20 kJ/mol vs ~350 kJ/mol pour une covalente).
• PIÈGE 5 : Confondre catabolisme et anabolisme. Catabolisme = dégradation (exergonique, produit de l'ATP). Anabolisme = synthèse (endergonique, consomme de l'ATP).
• PIÈGE 6 : « L'ATP est une molécule riche en énergie parce qu'elle a des liaisons phosphoanhydride fortes » → FAUX. C'est l'inverse : les liaisons phosphoanhydride de l'ATP sont des liaisons à HAUTE ÉNERGIE D'HYDROLYSE (instables → libèrent beaucoup d'énergie quand elles sont rompues).

→ Vue d'ensemble : la biochimie repose sur 3 piliers — l'eau (le milieu), les liaisons faibles (les interactions), et la thermodynamique (le moteur). Maîtrisez ces bases et le reste suivra naturellement.`
      },
    ],
  },
};

export default FICHE_CURATED;
