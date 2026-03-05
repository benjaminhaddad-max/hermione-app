export const MATIERES = [
  {
    id: "bio-cell", emoji: "🦠", nom: "Biologie cellulaire", niveau: "PASS/LAS", color: "#3D2C7A",
    cours: [
      {
        id: "bc1", titre: "Organisation de la cellule", emoji: "🔬", nouveau: false,
        flashcardsData: [
          { q: "Qu'est-ce que la cellule ?", r: "La plus petite unité fonctionnelle du vivant, capable d'autonomie et de reproduction." },
          { q: "Où est stockée l'info génétique dans une cellule eucaryote ?", r: "Dans le noyau, sous forme d'ADN." },
          { q: "Rôle de la MEC ?", r: "Adhérence, nutrition et soutien structural de la cellule." },
          { q: "Différence cellule procaryote / eucaryote ?", r: "Procaryote : pas de noyau membranaire. Eucaryote : noyau délimité par une enveloppe nucléaire." },
          { q: "Quels sont les organites membranaires ?", r: "Noyau, mitochondries, RE rugueux/lisse, appareil de Golgi, lysosomes, peroxysomes." },
        ],
        fiche: {
          page1_intro: {
            titre: "Introduction",
            texte: "La cellule est l'unité structurale et fonctionnelle de tout être vivant. Toutes les fonctions biologiques (respiration, reproduction, synthèse de protéines) se déroulent au niveau cellulaire. Il existe deux grands types : les cellules procaryotes (bactéries) et eucaryotes (animales, végétales, fongiques).",
            points_cles: [
              "Unité de base du vivant",
              "Eucaryote = noyau délimité par une membrane",
              "Procaryote = pas de noyau membranaire (bactéries)",
              "Toute cellule provient d'une cellule (loi de Virchow)",
            ]
          },
          page2_concepts: {
            titre: "Concepts clés",
            concepts: [
              { terme: "Cellule eucaryote", definition: "Cellule dotée d'un noyau délimité par une double membrane. Contient des organites membranaires spécialisés." },
              { terme: "MEC (Matrice extra-cellulaire)", definition: "Réseau de macromolécules (collagène, fibronectine) entourant les cellules. Assure soutien, adhérence et signalisation." },
              { terme: "Membrane plasmique", definition: "Bicouche lipidique (phospholipides + cholestérol) délimitant la cellule. Sélectivement perméable." },
              { terme: "Cytosol", definition: "Milieu intracellulaire aqueux contenant enzymes, ribosomes libres et métabolites." },
              { terme: "Cytosquelette", definition: "Réseau de filaments (actine, tubuline, filaments intermédiaires) donnant forme à la cellule et permettant ses mouvements." },
            ]
          },
          page3_schemas: {
            titre: "Schémas",
            schemas: [
              { id: "cellule-eucaryote", legende: "Structure générale d'une cellule eucaryote animale" },
            ]
          },
          page4_formules: {
            titre: "Données clés",
            formules: [],
            donnees: [
              { label: "Taille cellule eucaryote", valeur: "10–100 µm" },
              { label: "Taille cellule procaryote", valeur: "1–10 µm" },
              { label: "Épaisseur membrane plasmique", valeur: "~7–10 nm" },
              { label: "Proportion lipides / protéines (membrane)", valeur: "~50% / 50%" },
            ]
          },
          page5_resume: {
            titre: "Résumé",
            points: [
              "Cellule eucaryote : noyau + organites membranaires",
              "Membrane = bicouche phospholipidique sélectivement perméable",
              "MEC : soutien mécanique + signalisation intercellulaire",
              "Cytosquelette : actine, tubuline, filaments intermédiaires",
              "Toute cellule provient d'une cellule préexistante",
            ],
            mnemo: "NEMCG = Noyau, Enveloppe, Membrane, Cytosquelette, Golgi — les 5 incontournables de la cellule eucaryote."
          }
        },
        qcm: [
          {
            id: "qcm_bc1_1", question: "Quelle est la principale différence entre une cellule procaryote et eucaryote ?",
            options: [{ label: "A", texte: "La présence de mitochondries" }, { label: "B", texte: "La présence d'un noyau délimité par une membrane" }, { label: "C", texte: "La taille de la cellule" }, { label: "D", texte: "La présence d'ADN" }],
            reponse_correcte: "B", difficulte: "facile",
            explication: "La caractéristique fondamentale distinguant procaryotes et eucaryotes est la présence (eucaryotes) ou l'absence (procaryotes) d'un noyau délimité par une enveloppe nucléaire. Les deux types possèdent de l'ADN, et certaines bactéries peuvent être aussi grandes que certaines cellules eucaryotes."
          },
          {
            id: "qcm_bc1_2", question: "La membrane plasmique est principalement composée de :",
            options: [{ label: "A", texte: "Protéines uniquement" }, { label: "B", texte: "Polysaccharides et protéines" }, { label: "C", texte: "Une bicouche de phospholipides avec des protéines intercalées" }, { label: "D", texte: "Collagène et fibronectine" }],
            reponse_correcte: "C", difficulte: "facile",
            explication: "La membrane plasmique est constituée d'une bicouche phospholipidique (têtes hydrophiles vers l'extérieur, queues hydrophobes vers l'intérieur) dans laquelle sont insérées des protéines membranaires. Le modèle de la mosaïque fluide (Singer & Nicolson, 1972) décrit cette organisation."
          },
          {
            id: "qcm_bc1_3", question: "Quel organite est responsable de la modification et du tri des protéines ?",
            options: [{ label: "A", texte: "Le ribosome" }, { label: "B", texte: "Le lysosome" }, { label: "C", texte: "L'appareil de Golgi" }, { label: "D", texte: "Le peroxysome" }],
            reponse_correcte: "C", difficulte: "moyen",
            explication: "L'appareil de Golgi reçoit les protéines du réticulum endoplasmique rugueux, les modifie (glycosylation, phosphorylation), les trie et les adresse vers leur destination finale (membrane plasmique, lysosomes ou sécrétion extracellulaire). Les ribosomes synthétisent les protéines ; les lysosomes dégradent les déchets."
          },
          {
            id: "qcm_bc1_4", question: "Le cytosquelette est composé de :",
            options: [{ label: "A", texte: "Actine, tubuline et filaments intermédiaires" }, { label: "B", texte: "ADN, ARN et protéines" }, { label: "C", texte: "Collagène et élastine" }, { label: "D", texte: "Phospholipides et glycoprotéines" }],
            reponse_correcte: "A", difficulte: "moyen",
            explication: "Le cytosquelette comprend 3 types de filaments : les microfilaments d'actine (7 nm), les microtubules de tubuline (25 nm) et les filaments intermédiaires (~10 nm). Ils assurent la forme cellulaire, les mouvements et le transport intracellulaire."
          },
          {
            id: "qcm_bc1_5", question: "Quel composant de la MEC assure principalement la résistance à la traction ?",
            options: [{ label: "A", texte: "La fibronectine" }, { label: "B", texte: "Le collagène" }, { label: "C", texte: "L'acide hyaluronique" }, { label: "D", texte: "La laminine" }],
            reponse_correcte: "B", difficulte: "difficile",
            explication: "Le collagène est la protéine la plus abondante du corps humain et la principale protéine structurale de la MEC. Sa structure en triple hélice lui confère une très haute résistance à la traction. La fibronectine et la laminine assurent l'adhérence cellulaire, et l'acide hyaluronique est un protéoglycane hydrophile."
          },
        ]
      },
      {
        id: "bc2", titre: "Mitochondries et peroxysomes", emoji: "💥", nouveau: true,
        flashcardsData: [
          { q: "Rôle principal des mitochondries ?", r: "Production d'ATP par phosphorylation oxydative (respiration cellulaire)." },
          { q: "Enzyme clé des peroxysomes ?", r: "La catalase, qui dégrade H₂O₂ en H₂O et O₂." },
          { q: "Qu'est-ce que la phosphorylation oxydative ?", r: "Synthèse d'ATP couplée au transfert d'électrons sur la chaîne respiratoire mitochondriale." },
          { q: "Structure interne de la mitochondrie ?", r: "Matrice + crêtes mitochondriales (membrane interne repliée) + membrane externe." },
          { q: "Origine évolutive des mitochondries ?", r: "Théorie endosymbiotique : ancêtre bactérien intégré dans la cellule eucaryote." },
        ],
        fiche: {
          page1_intro: {
            titre: "Introduction",
            texte: "Les mitochondries sont les 'centrales énergétiques' de la cellule. Elles produisent la majorité de l'ATP cellulaire via la respiration aérobie. Les peroxysomes sont des organites impliqués dans la β-oxydation des acides gras et la détoxification des radicaux libres.",
            points_cles: [
              "Mitochondrie = ATP via phosphorylation oxydative",
              "Peroxysome = β-oxydation + détox (catalase)",
              "Mitochondrie possède son propre ADN circulaire",
              "Théorie endosymbiotique : origine bactérienne",
            ]
          },
          page2_concepts: {
            titre: "Concepts clés",
            concepts: [
              { terme: "Phosphorylation oxydative", definition: "Synthèse d'ATP au niveau de la membrane interne mitochondriale, couplée à la chaîne de transport d'électrons." },
              { terme: "Crêtes mitochondriales", definition: "Replis de la membrane interne augmentant la surface de contact pour la chaîne respiratoire." },
              { terme: "ATP synthase (complexe V)", definition: "Enzyme utilisant le gradient de protons (H⁺) pour synthétiser l'ATP à partir d'ADP + Pi." },
              { terme: "β-oxydation", definition: "Dégradation des acides gras en acétyl-CoA dans la matrice mitochondriale (et peroxysomale pour les très longues chaînes)." },
              { terme: "Catalase", definition: "Enzyme peroxysomale catalysant la décomposition du peroxyde d'hydrogène (H₂O₂) en eau et oxygène." },
            ]
          },
          page3_schemas: {
            titre: "Schémas",
            schemas: [
              { id: "mitochondrie", legende: "Structure interne de la mitochondrie" },
            ]
          },
          page4_formules: {
            titre: "Formules & données",
            formules: [
              { label: "Bilan global respiration", formule: "C₆H₁₂O₆ + 6O₂ → 6CO₂ + 6H₂O + ~30 ATP", unite: "" },
              { label: "Réaction catalase", formule: "2 H₂O₂ → 2 H₂O + O₂", unite: "" },
            ],
            donnees: [
              { label: "ATP produits par glucose (aérobie)", valeur: "~30 ATP" },
              { label: "ATP produits par glucose (anaérobie)", valeur: "2 ATP" },
              { label: "Nombre de mitochondries / cellule hépatique", valeur: "~1000–2000" },
            ]
          },
          page5_resume: {
            titre: "Résumé",
            points: [
              "Mitochondrie : double membrane, crêtes, matrice avec ADN propre",
              "Phosphorylation oxydative : ~30 ATP/glucose",
              "Chaîne respiratoire : complexes I → IV + ATP synthase",
              "Peroxysome : β-oxydation des acides gras + catalase",
              "H₂O₂ produit par β-oxydation → détoxifié par catalase",
            ],
            mnemo: "MCrêtes-ATP : Mitochondrie → Crêtes → ATP synthase → Énergie maximale"
          }
        },
        qcm: [
          {
            id: "qcm_bc2_1", question: "Où se déroule la phosphorylation oxydative ?",
            options: [{ label: "A", texte: "Dans la matrice mitochondriale" }, { label: "B", texte: "Sur la membrane interne mitochondriale" }, { label: "C", texte: "Dans le cytosol" }, { label: "D", texte: "Sur la membrane externe mitochondriale" }],
            reponse_correcte: "B", difficulte: "moyen",
            explication: "La chaîne de transport d'électrons et l'ATP synthase sont localisées sur la membrane interne mitochondriale (les crêtes). Le gradient de protons (H⁺) est créé entre l'espace inter-membranaire et la matrice, puis l'ATP synthase l'utilise pour produire l'ATP."
          },
          {
            id: "qcm_bc2_2", question: "Combien d'ATP sont produits approximativement lors de l'oxydation complète d'une molécule de glucose ?",
            options: [{ label: "A", texte: "2 ATP" }, { label: "B", texte: "8 ATP" }, { label: "C", texte: "30–32 ATP" }, { label: "D", texte: "100 ATP" }],
            reponse_correcte: "C", difficulte: "facile",
            explication: "La glycolyse produit 2 ATP net, le cycle de Krebs 2 ATP, et la phosphorylation oxydative ~26–28 ATP. Le total est d'environ 30–32 ATP par glucose. La fermentation (anaérobie) ne produit que 2 ATP, ce qui explique pourquoi les cellules préfèrent la respiration aérobie."
          },
          {
            id: "qcm_bc2_3", question: "Quelle enzyme peroxysomale détoxifie le peroxyde d'hydrogène ?",
            options: [{ label: "A", texte: "La lipase" }, { label: "B", texte: "La catalase" }, { label: "C", texte: "L'amylase" }, { label: "D", texte: "La kinase" }],
            reponse_correcte: "B", difficulte: "facile",
            explication: "La catalase est l'enzyme signature des peroxysomes. Elle catalyse la réaction 2H₂O₂ → 2H₂O + O₂. Ce mécanisme est essentiel car H₂O₂ est un puissant oxydant qui endommagerait l'ADN et les protéines s'il s'accumulait."
          },
          {
            id: "qcm_bc2_4", question: "La β-oxydation des acides gras à très longues chaînes se déroule dans :",
            options: [{ label: "A", texte: "Le cytosol" }, { label: "B", texte: "Le noyau" }, { label: "C", texte: "Le peroxysome (puis finalisée en mitochondrie)" }, { label: "D", texte: "L'appareil de Golgi" }],
            reponse_correcte: "C", difficulte: "difficile",
            explication: "Les acides gras à très longues chaînes (>22 carbones) doivent d'abord être raccourcis dans les peroxysomes avant d'être transférés dans la mitochondrie pour la β-oxydation finale. Les acides gras à chaînes plus courtes entrent directement dans la mitochondrie."
          },
          {
            id: "qcm_bc2_5", question: "Quelle théorie explique l'origine évolutive des mitochondries ?",
            options: [{ label: "A", texte: "La théorie de l'abiogenèse" }, { label: "B", texte: "La théorie endosymbiotique" }, { label: "C", texte: "La théorie cellulaire" }, { label: "D", texte: "La théorie de la panspermie" }],
            reponse_correcte: "B", difficulte: "moyen",
            explication: "La théorie endosymbiotique (Lynn Margulis) propose que les mitochondries sont d'anciennes α-protéobactéries englouties par une cellule ancestrale. Preuves : double membrane, ADN circulaire propre, ribosomes 70S (comme les bactéries), reproduction par fission binaire."
          },
        ]
      },
    ]
  },
  {
    id: "biochimie", emoji: "🧪", nom: "Biochimie", niveau: "PASS/LAS", color: "#1A4A6B",
    cours: [
      {
        id: "bch1", titre: "Les acides aminés", emoji: "⚗️", nouveau: false,
        flashcardsData: [
          { q: "Combien d'acides aminés protéinogènes ?", r: "20 acides aminés." },
          { q: "Combien sont essentiels chez l'adulte ?", r: "8 acides aminés essentiels (non synthétisables par l'organisme)." },
          { q: "Structure commune des acides aminés ?", r: "Carbone α central + groupement amine (-NH₂) + groupement carboxyle (-COOH) + chaîne latérale R." },
          { q: "Qu'est-ce qu'une liaison peptidique ?", r: "Liaison covalente entre le -COOH d'un AA et le -NH₂ du suivant, avec perte d'eau (condensation)." },
          { q: "Acides aminés soufrés ?", r: "Méthionine (essentiel) et Cystéine (non essentiel)." },
        ],
        fiche: {
          page1_intro: {
            titre: "Introduction",
            texte: "Les acides aminés (AA) sont les briques élémentaires des protéines. Il en existe 20 'protéinogènes', c'est-à-dire codés par le code génétique. Leur diversité de chaînes latérales (R) détermine les propriétés physico-chimiques des protéines.",
            points_cles: [
              "20 AA protéinogènes codés par l'ADN",
              "8 essentiels chez l'adulte (10 chez l'enfant)",
              "Structure : NH₂ – Cα – COOH + chaîne R",
              "Liaison peptidique : condensation entre -COOH et -NH₂",
            ]
          },
          page2_concepts: {
            titre: "Concepts clés",
            concepts: [
              { terme: "Acide aminé essentiel", definition: "AA que l'organisme ne peut pas synthétiser et qui doit être apporté par l'alimentation. 8 chez l'adulte : Val, Leu, Ile, Phe, Trp, Met, Thr, Lys." },
              { terme: "Zwitterion", definition: "Forme dipolaire d'un AA au pH physiologique : le groupement amine est protoné (-NH₃⁺) et le carboxyle est déprotoné (-COO⁻)." },
              { terme: "Point isoélectrique (pI)", definition: "pH auquel l'AA est électriquement neutre (forme zwitterion). Utile en électrophorèse." },
              { terme: "Liaison disulfure", definition: "Pont -S-S- entre deux cystéines oxydées. Stabilise la structure tertiaire/quaternaire des protéines." },
              { terme: "Polypeptide", definition: "Chaîne de plusieurs AA reliés par des liaisons peptidiques. >50 AA = protéine." },
            ]
          },
          page3_schemas: {
            titre: "Schémas",
            schemas: [
              { id: "structure-aa", legende: "Structure générale d'un acide aminé et formation d'une liaison peptidique" },
            ]
          },
          page4_formules: {
            titre: "Données clés",
            formules: [],
            donnees: [
              { label: "AA protéinogènes", valeur: "20" },
              { label: "AA essentiels adulte", valeur: "8" },
              { label: "AA essentiels enfant", valeur: "10 (+ Arg, His)" },
              { label: "Masse molaire moyenne d'un AA", valeur: "~110 Da" },
            ]
          },
          page5_resume: {
            titre: "Résumé",
            points: [
              "20 AA protéinogènes = unités de base des protéines",
              "8 essentiels adulte : Val, Leu, Ile, Phe, Trp, Met, Thr, Lys",
              "Structure commune : NH₂ – Cα(R) – COOH",
              "Au pH physiologique : forme zwitterion",
              "Liaison peptidique = réaction de condensation (- H₂O)",
            ],
            mnemo: "VILVTTMF = Valine, Isoleucine, Leucine, Valine, Thréonine, Tryptophane, Méthionine, Phénylalanine, Lysine → les 8 essentiels"
          }
        },
        qcm: [
          {
            id: "qcm_bch1_1", question: "Combien existe-t-il d'acides aminés protéinogènes ?",
            options: [{ label: "A", texte: "12" }, { label: "B", texte: "20" }, { label: "C", texte: "24" }, { label: "D", texte: "64" }],
            reponse_correcte: "B", difficulte: "facile",
            explication: "Il existe exactement 20 acides aminés protéinogènes, c'est-à-dire codés par les codons du code génétique. Les 64 codons possibles (4³) codent ces 20 AA + 3 codons stop, d'où la dégénérescence du code génétique (plusieurs codons pour un même AA)."
          },
          {
            id: "qcm_bch1_2", question: "Quelle est la définition d'un acide aminé essentiel ?",
            options: [{ label: "A", texte: "Un AA présent en grande quantité dans les protéines" }, { label: "B", texte: "Un AA indispensable à la vie cellulaire" }, { label: "C", texte: "Un AA que l'organisme ne peut pas synthétiser et doit apporter par l'alimentation" }, { label: "D", texte: "Un AA chargé positivement" }],
            reponse_correcte: "C", difficulte: "facile",
            explication: "Un AA essentiel est un AA que l'organisme humain est incapable de synthétiser en quantités suffisantes. Il doit donc être apporté par l'alimentation. Attention : 'essentiel' ne signifie pas 'présent en grandes quantités' ou 'chargé', mais uniquement 'indispensable via l'apport alimentaire'."
          },
          {
            id: "qcm_bch1_3", question: "La liaison peptidique est formée entre :",
            options: [{ label: "A", texte: "Deux groupements -NH₂" }, { label: "B", texte: "Le -COOH d'un AA et le -NH₂ du suivant" }, { label: "C", texte: "Deux chaînes latérales R" }, { label: "D", texte: "Le -NH₂ d'un AA et le -COOH du suivant" }],
            reponse_correcte: "B", difficulte: "moyen",
            explication: "La liaison peptidique est une liaison amide formée entre le groupement carboxyle (-COOH) d'un acide aminé et le groupement amine (-NH₂) du suivant, avec élimination d'une molécule d'eau (réaction de condensation). La chaîne résultante a une extrémité N-terminale (NH₂ libre) et une C-terminale (COOH libre)."
          },
          {
            id: "qcm_bch1_4", question: "Quelle forme adopte un acide aminé au pH physiologique (≈ 7,4) ?",
            options: [{ label: "A", texte: "Forme acide (-NH₂, -COOH)" }, { label: "B", texte: "Forme basique (-NH₂, -COO⁻)" }, { label: "C", texte: "Zwitterion (-NH₃⁺, -COO⁻)" }, { label: "D", texte: "Forme neutre non chargée" }],
            reponse_correcte: "C", difficulte: "moyen",
            explication: "Au pH physiologique (7,4), le groupement amine (-NH₂) est protoné (-NH₃⁺, car son pKa ≈ 9–10) et le groupement carboxyle (-COOH) est déprotoné (-COO⁻, car son pKa ≈ 2). L'AA porte donc une charge positive et une charge négative simultanément = zwitterion (dipôle)."
          },
          {
            id: "qcm_bch1_5", question: "Quels sont les deux acides aminés soufrés ?",
            options: [{ label: "A", texte: "Sérine et Thréonine" }, { label: "B", texte: "Méthionine et Cystéine" }, { label: "C", texte: "Tyrosine et Phénylalanine" }, { label: "D", texte: "Aspartate et Glutamate" }],
            reponse_correcte: "B", difficulte: "moyen",
            explication: "La Méthionine (Met, M) et la Cystéine (Cys, C) sont les deux seuls AA portant un atome de soufre dans leur chaîne latérale. La Méthionine est essentielle ; la Cystéine peut être synthétisée à partir de la Méthionine. Les ponts disulfure entre deux Cys stabilisent la structure 3D des protéines."
          },
        ]
      },
      {
        id: "bch2", titre: "Les enzymes", emoji: "🔑", nouveau: true,
        flashcardsData: [
          { q: "Rôle d'une enzyme ?", r: "Biocatalyseur qui abaisse l'énergie d'activation d'une réaction sans être consommé." },
          { q: "Que représente le Km ?", r: "La concentration en substrat pour laquelle V = Vmax/2. Mesure l'affinité enzyme-substrat (faible Km = forte affinité)." },
          { q: "Equation de Michaelis-Menten ?", r: "V = Vmax[S] / (Km + [S])" },
          { q: "Qu'est-ce qu'un inhibiteur compétitif ?", r: "Molécule structuralement proche du substrat qui se fixe sur le site actif et entre en compétition avec le substrat. Augmente le Km apparent, Vmax inchangé." },
          { q: "Différence inhibition compétitive vs non compétitive ?", r: "Compétitive : Km↑, Vmax identique. Non compétitive : Km identique, Vmax↓." },
        ],
        fiche: {
          page1_intro: {
            titre: "Introduction",
            texte: "Les enzymes sont des catalyseurs biologiques, quasi-exclusivement des protéines (sauf les ribozymes = ARN catalytiques). Elles accélèrent les réactions chimiques en abaissant l'énergie d'activation, sans être consommées. Leur activité est régulable (pH, température, inhibiteurs, activateurs).",
            points_cles: [
              "Biocatalyseurs protéiques (sauf ribozymes)",
              "Abaissent l'énergie d'activation",
              "Spécificité substrat-enzyme (clé-serrure ou ajustement induit)",
              "Cinétique décrite par l'équation de Michaelis-Menten",
            ]
          },
          page2_concepts: {
            titre: "Concepts clés",
            concepts: [
              { terme: "Site actif", definition: "Région de l'enzyme qui se lie au substrat et catalyse la réaction. Détermine la spécificité enzymatique." },
              { terme: "Km (constante de Michaelis)", definition: "Concentration en substrat pour laquelle V = Vmax/2. Inverse de l'affinité : faible Km = forte affinité." },
              { terme: "Vmax", definition: "Vitesse maximale de la réaction quand tous les sites actifs sont saturés par le substrat." },
              { terme: "Inhibiteur compétitif", definition: "Analogue du substrat qui occupe le site actif. Augmente le Km apparent mais n'affecte pas Vmax (surmontable par excès de substrat)." },
              { terme: "Inhibiteur non compétitif", definition: "Se fixe sur un site allostérique, modifie la conformation de l'enzyme. Réduit Vmax sans changer le Km." },
            ]
          },
          page3_schemas: {
            titre: "Schémas",
            schemas: [
              { id: "cinetique-enzyme", legende: "Courbe de Michaelis-Menten : V en fonction de [S]" },
            ]
          },
          page4_formules: {
            titre: "Formules",
            formules: [
              { label: "Michaelis-Menten", formule: "V = Vmax × [S] / (Km + [S])", unite: "" },
              { label: "Définition du Km", formule: "Km = (k₋₁ + k₂) / k₁", unite: "mol/L" },
            ],
            donnees: [
              { label: "Km typique d'une enzyme", valeur: "10⁻⁷ à 10⁻² mol/L" },
              { label: "Nombre de catalyses/seconde (kcat)", valeur: "1 à 10⁷ s⁻¹" },
            ]
          },
          page5_resume: {
            titre: "Résumé",
            points: [
              "Enzyme : abaisse Ea, non consommée, spécifique",
              "Km faible → forte affinité pour le substrat",
              "Vmax = vitesse à saturation totale",
              "Inhibition compétitive : Km↑, Vmax inchangé",
              "Inhibition non compétitive : Vmax↓, Km inchangé",
            ],
            mnemo: "KM bas = Enzyme Mordu par son substrat (forte affinité)"
          }
        },
        qcm: [
          {
            id: "qcm_bch2_1", question: "Que représente le Km dans la cinétique enzymatique ?",
            options: [{ label: "A", texte: "La vitesse maximale de la réaction" }, { label: "B", texte: "La concentration en substrat à laquelle V = Vmax/2" }, { label: "C", texte: "La concentration en enzyme" }, { label: "D", texte: "L'énergie d'activation de la réaction" }],
            reponse_correcte: "B", difficulte: "moyen",
            explication: "Le Km (constante de Michaelis) est la concentration en substrat [S] à laquelle la vitesse de la réaction est égale à la moitié de la vitesse maximale (Vmax/2). Un faible Km indique une forte affinité de l'enzyme pour son substrat (il lui faut peu de substrat pour être à demi-saturée)."
          },
          {
            id: "qcm_bch2_2", question: "Un inhibiteur compétitif provoque :",
            options: [{ label: "A", texte: "Une augmentation du Km et une diminution de Vmax" }, { label: "B", texte: "Une augmentation du Km apparent, Vmax inchangé" }, { label: "C", texte: "Une diminution du Km et de Vmax" }, { label: "D", texte: "Aucun changement sur Km ou Vmax" }],
            reponse_correcte: "B", difficulte: "difficile",
            explication: "L'inhibiteur compétitif entre en compétition avec le substrat pour le site actif. Avec excès d'inhibiteur, le Km apparent augmente (il faut plus de substrat pour déplacer l'inhibiteur). En revanche, si on ajoute suffisamment de substrat, la Vmax peut être atteinte → Vmax inchangée. Distinction clé à l'examen PASS."
          },
          {
            id: "qcm_bch2_3", question: "Quelle est la différence entre une enzyme allostérique et une enzyme michaelienne ?",
            options: [{ label: "A", texte: "L'enzyme allostérique n'a pas de site actif" }, { label: "B", texte: "L'enzyme allostérique suit une courbe sigmoïde et possède des sites de régulation distants du site actif" }, { label: "C", texte: "L'enzyme michaelienne est toujours inhibée" }, { label: "D", texte: "Il n'y a pas de différence fonctionnelle" }],
            reponse_correcte: "B", difficulte: "difficile",
            explication: "Les enzymes allostériques possèdent plusieurs sous-unités et des sites allostériques (distincts du site actif) où se fixent des effecteurs (activateurs ou inhibiteurs). Leur cinétique suit une courbe sigmoïde (coopérativité), contrairement à l'hyperbole de Michaelis-Menten. Ex : hémoglobine, ATCase."
          },
          {
            id: "qcm_bch2_4", question: "Les enzymes sont principalement des :",
            options: [{ label: "A", texte: "Polysaccharides" }, { label: "B", texte: "Lipides" }, { label: "C", texte: "Protéines (sauf les ribozymes)" }, { label: "D", texte: "Acides nucléiques uniquement" }],
            reponse_correcte: "C", difficulte: "facile",
            explication: "La quasi-totalité des enzymes biologiques sont des protéines. Cependant, certaines molécules d'ARN ont une activité catalytique : ce sont les ribozymes (ex : ARN ribosomique catalysant la liaison peptidique). Cette découverte (prix Nobel 1989) a remis en cause la vision 'protéine = enzyme'."
          },
          {
            id: "qcm_bch2_5", question: "L'énergie d'activation d'une réaction est :",
            options: [{ label: "A", texte: "Augmentée par une enzyme" }, { label: "B", texte: "Inchangée par une enzyme" }, { label: "C", texte: "Abaissée par une enzyme" }, { label: "D", texte: "Remplacée par de l'ATP" }],
            reponse_correcte: "C", difficulte: "facile",
            explication: "Le rôle fondamental d'une enzyme est d'abaisser l'énergie d'activation (Ea) de la réaction qu'elle catalyse. Elle ne modifie pas l'énergie libre de Gibbs (ΔG) ni le sens de la réaction — elle accélère seulement l'atteinte de l'équilibre. Elle n'est pas consommée dans la réaction."
          },
        ]
      },
    ]
  },
  {
    id: "physio", emoji: "💗", nom: "Physiologie", niveau: "PASS/LAS", color: "#6B1A2C",
    cours: [
      {
        id: "phy1", titre: "Le système cardiovasculaire", emoji: "❤️", nouveau: false,
        flashcardsData: [
          { q: "Formule du débit cardiaque ?", r: "DC = FC × VES (Fréquence cardiaque × Volume d'éjection systolique)." },
          { q: "Combien de cavités a le cœur ?", r: "4 cavités : 2 oreillettes (droite/gauche) et 2 ventricules (droit/gauche)." },
          { q: "Différence circulation pulmonaire / systémique ?", r: "Pulmonaire : cœur droit → poumons → cœur gauche (sang désoxygéné → oxygéné). Systémique : cœur gauche → corps → cœur droit." },
          { q: "Valeurs normales de la pression artérielle ?", r: "120/80 mmHg (systolique/diastolique). HTA si >140/90." },
          { q: "Qu'est-ce que la loi de Frank-Starling ?", r: "Plus le ventricule est rempli (précharge élevée), plus la contraction est forte. Le VES augmente avec l'étirement des fibres myocardiques." },
        ],
        fiche: {
          page1_intro: {
            titre: "Introduction",
            texte: "Le système cardiovasculaire est un circuit fermé assurant la distribution du sang oxygéné et des nutriments à tous les tissus. Il comprend le cœur (pompe), les artères (haute pression), les capillaires (échanges) et les veines (retour). Le cœur effectue ~100 000 battements par jour.",
            points_cles: [
              "Circuit fermé : cœur + vaisseaux",
              "Deux circulations : pulmonaire (petite) + systémique (grande)",
              "DC = FC × VES (~5 L/min au repos)",
              "Loi de Frank-Starling : précharge → force de contraction",
            ]
          },
          page2_concepts: {
            titre: "Concepts clés",
            concepts: [
              { terme: "Débit cardiaque (DC)", definition: "Volume de sang éjecté par le ventricule gauche par minute. DC = FC × VES. Normal : ~5 L/min au repos, jusqu'à 25 L/min à l'effort." },
              { terme: "Volume d'éjection systolique (VES)", definition: "Volume de sang éjecté par le ventricule à chaque systole. VES = VTD – VTS (~70 mL au repos)." },
              { terme: "Précharge", definition: "Volume de remplissage ventriculaire en fin de diastole (VTD). Dépend du retour veineux." },
              { terme: "Postcharge", definition: "Résistance contre laquelle le ventricule doit éjecter le sang. Dépend des résistances vasculaires périphériques (RVP)." },
              { terme: "Fraction d'éjection (FE)", definition: "FE = VES/VTD × 100. Normale ≥ 55%. Marqueur de la fonction systolique ventriculaire gauche." },
            ]
          },
          page3_schemas: {
            titre: "Schémas",
            schemas: [
              { id: "coeur-cavites", legende: "Les 4 cavités cardiaques et les circulations pulmonaire et systémique" },
            ]
          },
          page4_formules: {
            titre: "Formules clés",
            formules: [
              { label: "Débit cardiaque", formule: "DC = FC × VES", unite: "L/min" },
              { label: "Volume d'éjection systolique", formule: "VES = VTD − VTS", unite: "mL" },
              { label: "Fraction d'éjection", formule: "FE = (VES / VTD) × 100", unite: "%" },
              { label: "Pression artérielle moyenne", formule: "PAM = PAD + (PAS − PAD) / 3", unite: "mmHg" },
            ],
            donnees: [
              { label: "FC au repos", valeur: "60–80 bpm" },
              { label: "VES au repos", valeur: "~70 mL" },
              { label: "DC au repos", valeur: "~5 L/min" },
              { label: "PA normale", valeur: "120/80 mmHg" },
              { label: "FE normale", valeur: "≥ 55%" },
            ]
          },
          page5_resume: {
            titre: "Résumé",
            points: [
              "DC = FC × VES (~5 L/min repos, 25 L/min effort)",
              "Circulation pulmonaire : cœur droit → poumons → cœur gauche",
              "Circulation systémique : cœur gauche → corps → cœur droit",
              "Loi de Frank-Starling : ↑ précharge → ↑ VES",
              "HTA : PAS >140 ou PAD >90 mmHg",
            ],
            mnemo: "DC = FC × VES : 'Débit Cardiaque = Fréquence × Volume', comme le Débit d'une Fontaine = sa Fréquence × son Volume par jet"
          }
        },
        qcm: [
          {
            id: "qcm_phy1_1", question: "Un patient a une FC de 75 bpm et un VES de 80 mL. Quel est son débit cardiaque ?",
            options: [{ label: "A", texte: "4 L/min" }, { label: "B", texte: "6 L/min" }, { label: "C", texte: "7,5 L/min" }, { label: "D", texte: "9 L/min" }],
            reponse_correcte: "B", difficulte: "facile",
            explication: "DC = FC × VES = 75 × 80 mL = 6000 mL/min = 6 L/min. Application directe de la formule. Valeur normale au repos (4–8 L/min). À l'effort, le DC peut atteindre 20–25 L/min chez un sportif entraîné."
          },
          {
            id: "qcm_phy1_2", question: "La circulation pulmonaire transporte :",
            options: [{ label: "A", texte: "Du sang oxygéné du cœur droit vers les poumons" }, { label: "B", texte: "Du sang désoxygéné du cœur droit vers les poumons, qui revient oxygéné au cœur gauche" }, { label: "C", texte: "Du sang oxygéné du cœur gauche vers le corps" }, { label: "D", texte: "Du sang oxygéné entre les deux ventricules" }],
            reponse_correcte: "B", difficulte: "moyen",
            explication: "La petite circulation (pulmonaire) va du ventricule droit aux poumons via l'artère pulmonaire (sang désoxygéné), et revient au cœur gauche via les veines pulmonaires (sang oxygéné). C'est la seule artère du corps qui transporte du sang désoxygéné."
          },
          {
            id: "qcm_phy1_3", question: "La loi de Frank-Starling stipule que :",
            options: [{ label: "A", texte: "La FC augmente quand la précharge diminue" }, { label: "B", texte: "La force de contraction ventriculaire augmente avec l'étirement des fibres myocardiques" }, { label: "C", texte: "Le VES diminue quand la postcharge augmente" }, { label: "D", texte: "La PA augmente avec la FC" }],
            reponse_correcte: "B", difficulte: "moyen",
            explication: "La loi de Frank-Starling (ou loi du cœur) : plus le ventricule est rempli en diastole (précharge ↑ → VTD ↑), plus les fibres myocardiques sont étirées, plus la contraction systolique est puissante → VES ↑. C'est un mécanisme d'autoajustement du cœur à la volémie."
          },
          {
            id: "qcm_phy1_4", question: "La pression artérielle est définie par :",
            options: [{ label: "A", texte: "PA = DC × résistances vasculaires périphériques (RVP)" }, { label: "B", texte: "PA = FC × VES" }, { label: "C", texte: "PA = VES / FC" }, { label: "D", texte: "PA = DC / FC" }],
            reponse_correcte: "A", difficulte: "difficile",
            explication: "La pression artérielle est déterminée par le débit cardiaque (DC) et les résistances vasculaires périphériques (RVP) : PA = DC × RVP. C'est pourquoi l'HTA peut résulter d'un DC élevé OU de RVP élevées (vasoconstriction). Les antihypertenseurs agissent sur l'un ou l'autre de ces deux paramètres."
          },
          {
            id: "qcm_phy1_5", question: "Une fraction d'éjection (FE) à 35% indique :",
            options: [{ label: "A", texte: "Une fonction cardiaque normale" }, { label: "B", texte: "Une insuffisance cardiaque à FE altérée (ICFEa)" }, { label: "C", texte: "Une tachycardie" }, { label: "D", texte: "Une hypertension artérielle" }],
            reponse_correcte: "B", difficulte: "difficile",
            explication: "La FE normale est ≥ 55%. Une FE < 40% définit l'insuffisance cardiaque à fraction d'éjection altérée (ICFEa ou HFrEF en anglais). Entre 40–50% : zone grise (ICFEmr). La FE est mesurée par échocardiographie et est un des critères pronostiques majeurs de l'IC."
          },
        ]
      },
    ]
  },
  {
    id: "histologie", emoji: "🔭", nom: "Histologie", niveau: "PASS/LAS", color: "#1A6B4A",
    cours: [
      {
        id: "his1", titre: "Les tissus épithéliaux", emoji: "🧬", nouveau: false,
        flashcardsData: [
          { q: "Définition tissu épithélial ?", r: "Tissu formé de cellules jointives reposant sur une lame basale, sans vaisseaux sanguins (avasculaire)." },
          { q: "2 grandes fonctions des épithéliums ?", r: "Épithélium de revêtement (protection/échanges) et épithélium glandulaire (sécrétion)." },
          { q: "Qu'est-ce que la lame basale ?", r: "Couche extracellulaire séparant l'épithélium du tissu conjonctif sous-jacent. Composée de collagène IV et laminine." },
          { q: "Classification des épithéliums selon la forme ?", r: "Pavimenteux (aplatis), cubiques (isodiamétriques), prismatiques/cylindriques (hauts)." },
          { q: "Jonctions serrées (tight junctions) : rôle ?", r: "Étanchéité entre cellules épithéliales, contrôle du passage paracellulaire." },
        ],
        fiche: {
          page1_intro: {
            titre: "Introduction",
            texte: "Les tissus épithéliaux tapissent toutes les surfaces du corps (peau, muqueuses, tubes) et forment les glandes. Leur caractéristique principale est d'être formés de cellules jointives (peu de substance intercellulaire) reposant sur une lame basale. Ils sont avasculaires et se nourrissent par diffusion depuis le tissu conjonctif sous-jacent.",
            points_cles: [
              "Cellules jointives + lame basale",
              "Avasculaire (nutrition par diffusion)",
              "Épithélium de revêtement vs glandulaire",
              "Classification : couches × forme cellulaire",
            ]
          },
          page2_concepts: {
            titre: "Concepts clés",
            concepts: [
              { terme: "Lame basale", definition: "Structure extracellulaire séparant épithélium et tissu conjonctif. Composée de collagène IV, laminine, perlecan. Rôle : support, filtration, signalisation." },
              { terme: "Épithélium simple", definition: "Une seule couche de cellules. Ex : endothélium vasculaire, épithélium alvéolaire." },
              { terme: "Épithélium stratifié", definition: "Plusieurs couches de cellules. Ex : épiderme (stratifié pavimenteux kératinisé)." },
              { terme: "Jonctions serrées (zonula occludens)", definition: "Complexes protéiques (occludines, claudines) formant une ceinture étanche entre cellules. Limitent le passage paracellulaire." },
              { terme: "Épithélium glandulaire", definition: "Cellules spécialisées dans la sécrétion. Glandes exocrines (canal vers surface) vs endocrines (sécrétion dans le sang)." },
            ]
          },
          page3_schemas: {
            titre: "Schémas",
            schemas: [
              { id: "epithelia-types", legende: "Classification des épithéliums selon le nombre de couches et la forme cellulaire" },
            ]
          },
          page4_formules: {
            titre: "Classification à retenir",
            formules: [],
            donnees: [
              { label: "Épithélium simple pavimenteux", valeur: "Endothélium, mésothélium, alvéoles" },
              { label: "Épithélium simple cubique", valeur: "Tubules rénaux, petits canaux glandulaires" },
              { label: "Épithélium simple cylindrique", valeur: "Tube digestif (villosités), utérus" },
              { label: "Épithélium stratifié pavimenteux", valeur: "Épiderme (kératinisé), œsophage (non kératinisé)" },
              { label: "Épithélium pseudostratifié", valeur: "Voies respiratoires (avec cils)" },
            ]
          },
          page5_resume: {
            titre: "Résumé",
            points: [
              "Épithélium = cellules jointives + lame basale + avasculaire",
              "Simple (1 couche) vs stratifié (plusieurs couches)",
              "Pavimenteux / cubique / cylindrique (forme cellulaire)",
              "Jonctions serrées = étanchéité paracellulaire",
              "Glandes exocrines (canal) vs endocrines (sang)",
            ],
            mnemo: "SPC = Simple, Pseudostratifié, Stratifié — du plus simple au plus complexe"
          }
        },
        qcm: [
          {
            id: "qcm_his1_1", question: "Quelle est la caractéristique principale des tissus épithéliaux ?",
            options: [{ label: "A", texte: "Ils sont très vascularisés" }, { label: "B", texte: "Ils reposent sur une lame basale et sont avasculaires" }, { label: "C", texte: "Ils contiennent beaucoup de substance extracellulaire" }, { label: "D", texte: "Ils ne peuvent pas se régénérer" }],
            reponse_correcte: "B", difficulte: "facile",
            explication: "Les épithéliums sont des tissus avasculaires (sans vaisseaux sanguins directs) dont les cellules reposent obligatoirement sur une lame basale. La nutrition se fait par diffusion depuis le tissu conjonctif sous-jacent. Cette avascullarité explique leur lenteur de cicatrisation relative dans certains contextes."
          },
          {
            id: "qcm_his1_2", question: "L'épiderme est un exemple d'épithélium :",
            options: [{ label: "A", texte: "Simple pavimenteux" }, { label: "B", texte: "Stratifié pavimenteux kératinisé" }, { label: "C", texte: "Pseudostratifié cilié" }, { label: "D", texte: "Simple cubique" }],
            reponse_correcte: "B", difficulte: "moyen",
            explication: "L'épiderme est un épithélium stratifié pavimenteux kératinisé : plusieurs couches (stratifié), cellules aplaties en surface (pavimenteux), et kératinisé (la couche superficielle contient de la kératine qui le rend imperméable). L'œsophage est stratifié pavimenteux non kératinisé."
          },
          {
            id: "qcm_his1_3", question: "Les jonctions serrées (tight junctions) assurent :",
            options: [{ label: "A", texte: "La communication entre cellules adjacentes" }, { label: "B", texte: "L'adhérence mécanique entre cellules" }, { label: "C", texte: "L'étanchéité paracellulaire" }, { label: "D", texte: "Le transport actif de molécules" }],
            reponse_correcte: "C", difficulte: "moyen",
            explication: "Les jonctions serrées (occludentes ou tight junctions) forment une ceinture étanche au pôle apical des cellules épithéliales. Elles empêchent le passage de molécules entre les cellules (voie paracellulaire). Elles sont particulièrement importantes dans les épithéliums de l'intestin, du rein et de la barrière hémato-encéphalique."
          },
          {
            id: "qcm_his1_4", question: "Une glande endocrine se caractérise par :",
            options: [{ label: "A", texte: "La présence d'un canal excréteur" }, { label: "B", texte: "La sécrétion de substances directement dans le sang" }, { label: "C", texte: "La sécrétion de substances vers une surface épithéliale" }, { label: "D", texte: "L'absence de cellules sécrétrices" }],
            reponse_correcte: "B", difficulte: "facile",
            explication: "Les glandes endocrines sécrètent directement dans la circulation sanguine (hormone). Ex : thyroïde, surrénales, hypophyse. Les glandes exocrines possèdent un canal excréteur déversant la sécrétion vers une surface (peau, tube digestif). Ex : glandes sudoripares, pancréas exocrine."
          },
          {
            id: "qcm_his1_5", question: "Quel épithélium tapisse les voies respiratoires ?",
            options: [{ label: "A", texte: "Épithélium simple pavimenteux" }, { label: "B", texte: "Épithélium stratifié kératinisé" }, { label: "C", texte: "Épithélium pseudostratifié cylindrique cilié" }, { label: "D", texte: "Épithélium simple cubique" }],
            reponse_correcte: "C", difficulte: "moyen",
            explication: "Les voies respiratoires (trachée, bronches) sont tapissées d'un épithélium pseudostratifié cylindrique cilié avec des cellules caliciformes (sécrétion de mucus). Les cils battent pour remonter le mucus chargé de particules vers le pharynx (escalator mucociliaire). Perturbé dans la mucoviscidose."
          },
        ]
      },
    ]
  },
  {
    id: "lycee-svt", emoji: "🌿", nom: "SVT Lycée", niveau: "Lycée → PASS", color: "#1A5C1A",
    cours: [
      {
        id: "svt1", titre: "Génétique moléculaire", emoji: "🧬", nouveau: false,
        flashcardsData: [
          { q: "Structure de l'ADN ?", r: "Double hélice antiparallèle de nucléotides reliés par des liaisons hydrogène (A-T, G-C)." },
          { q: "Règle de Chargaff ?", r: "%A = %T et %G = %C dans un ADN double brin." },
          { q: "Étapes de la réplication ?", r: "Initiation → Élongation → Terminaison. ADN polymérase synthétise le nouveau brin (5'→3')." },
          { q: "ARNm → protéine : quel processus ?", r: "Traduction : les ribosomes lisent l'ARNm codon par codon et incorporent les acides aminés via les ARNt." },
          { q: "Qu'est-ce qu'une mutation ponctuelle ?", r: "Modification d'un seul nucléotide : substitution (faux sens, non-sens), insertion ou délétion (décalage du cadre de lecture)." },
        ],
        fiche: {
          page1_intro: {
            titre: "Introduction",
            texte: "La génétique moléculaire étudie les mécanismes de stockage, transmission et expression de l'information génétique. L'ADN est le support de cette information, transcrit en ARN puis traduit en protéines (dogme central de la biologie moléculaire).",
            points_cles: [
              "ADN → ARN (transcription) → Protéine (traduction)",
              "ADN : double hélice, antiparallèle, complémentaire",
              "Réplication semi-conservative",
              "Code génétique : 3 nucléotides = 1 codon = 1 AA",
            ]
          },
          page2_concepts: {
            titre: "Concepts clés",
            concepts: [
              { terme: "Réplication semi-conservative", definition: "Chaque nouveau brin d'ADN est associé à un brin parental. Résultat : 2 molécules d'ADN double brin identiques, chacune avec 1 brin ancien + 1 brin nouveau." },
              { terme: "Transcription", definition: "Synthèse d'un ARNm à partir de l'ADN matrice par l'ARN polymérase II (noyau). Le brin matrice est lu en 3'→5', l'ARNm est synthétisé en 5'→3'." },
              { terme: "Traduction", definition: "Décodage de l'ARNm en protéine par les ribosomes. Chaque codon (3 nucléotides) code un acide aminé spécifique." },
              { terme: "Mutation faux-sens", definition: "Substitution d'un nucléotide entraînant le remplacement d'un acide aminé par un autre. Peut être sans effet, délétère ou bénéfique." },
              { terme: "Mutation non-sens", definition: "Substitution créant un codon stop prématuré → protéine tronquée, généralement non fonctionnelle." },
            ]
          },
          page3_schemas: {
            titre: "Schémas",
            schemas: [
              { id: "dogme-central", legende: "Dogme central de la biologie moléculaire : ADN → ARN → Protéine" },
            ]
          },
          page4_formules: {
            titre: "Données clés",
            formules: [],
            donnees: [
              { label: "Paires de bases (génome humain)", valeur: "~3 × 10⁹ pb" },
              { label: "Nombre de gènes humains", valeur: "~20 000–25 000" },
              { label: "Codons possibles", valeur: "64 (4³)" },
              { label: "Codons stop", valeur: "3 (UAA, UAG, UGA)" },
              { label: "Codon initiateur", valeur: "AUG (Méthionine)" },
            ]
          },
          page5_resume: {
            titre: "Résumé",
            points: [
              "ADN double hélice : A-T (2 liaisons H), G-C (3 liaisons H)",
              "Réplication semi-conservative par ADN polymérase (5'→3')",
              "Transcription : ADN → ARNm (noyau, ARN pol II)",
              "Traduction : ARNm → protéine (ribosome, ARNt)",
              "Mutations : substitution, insertion, délétion",
            ],
            mnemo: "T-A-G-C : Toujours A avec T, G avec C (complémentarité des bases)"
          }
        },
        qcm: [
          {
            id: "qcm_svt1_1", question: "La réplication de l'ADN est dite 'semi-conservative' car :",
            options: [{ label: "A", texte: "Elle ne conserve qu'un demi-brin d'ADN" }, { label: "B", texte: "Chaque molécule fille contient un brin parental et un brin nouvellement synthétisé" }, { label: "C", texte: "Elle est réalisée deux fois par cycle cellulaire" }, { label: "D", texte: "Seule la moitié de l'ADN est répliquée" }],
            reponse_correcte: "B", difficulte: "facile",
            explication: "La réplication semi-conservative (démontrée par l'expérience de Meselson et Stahl, 1958) produit deux molécules d'ADN filles, chacune composée d'un brin parental (conservé) et d'un brin nouvellement synthétisé. 'Semi' = moitié ancienne, 'conservative' = le brin parental est intégralement conservé."
          },
          {
            id: "qcm_svt1_2", question: "Quel est le codon initiateur de la traduction ?",
            options: [{ label: "A", texte: "UAA" }, { label: "B", texte: "UGA" }, { label: "C", texte: "AUG" }, { label: "D", texte: "GGG" }],
            reponse_correcte: "C", difficulte: "facile",
            explication: "AUG est le codon initiateur universel. Il code la méthionine et marque le début de la traduction. Les trois codons stop sont UAA, UAG et UGA — ils n'ont pas d'ARNt correspondant et provoquent la dissociation du ribosome et la libération de la protéine."
          },
          {
            id: "qcm_svt1_3", question: "Une mutation par délétion d'un nucléotide provoque :",
            options: [{ label: "A", texte: "Le remplacement d'un acide aminé par un autre" }, { label: "B", texte: "Un décalage du cadre de lecture (frameshift)" }, { label: "C", texte: "L'apparition d'un codon stop prématuré uniquement" }, { label: "D", texte: "Aucun effet sur la protéine" }],
            reponse_correcte: "B", difficulte: "moyen",
            explication: "La délétion (ou insertion) d'un nombre de nucléotides non multiple de 3 provoque un décalage du cadre de lecture (frameshift). Tous les codons en aval de la mutation sont modifiés, entraînant généralement une protéine non fonctionnelle avec souvent un codon stop prématuré."
          },
          {
            id: "qcm_svt1_4", question: "Selon la règle de Chargaff, si %G = 30% dans un ADN double brin, alors %A = ?",
            options: [{ label: "A", texte: "30%" }, { label: "B", texte: "20%" }, { label: "C", texte: "40%" }, { label: "D", texte: "60%" }],
            reponse_correcte: "B", difficulte: "moyen",
            explication: "Règle de Chargaff : %A = %T et %G = %C. Si %G = 30%, alors %C = 30%. Total G+C = 60%. Comme %A + %T + %G + %C = 100%, alors %A + %T = 40%, soit %A = %T = 20%. Mémo : G+C et A+T sont complémentaires, et chaque paire est équilibrée."
          },
          {
            id: "qcm_svt1_5", question: "L'ARN polymérase synthétise l'ARNm dans le sens :",
            options: [{ label: "A", texte: "3' → 5'" }, { label: "B", texte: "5' → 3'" }, { label: "C", texte: "Dans les deux sens simultanément" }, { label: "D", texte: "Le sens dépend du gène" }],
            reponse_correcte: "B", difficulte: "moyen",
            explication: "Comme l'ADN polymérase, l'ARN polymérase synthétise toujours dans le sens 5'→3'. Elle lit le brin matrice d'ADN dans le sens 3'→5' et incorpore les ribonucléotides complémentaires. L'ARNm résultant est donc antiparallèle au brin matrice et de même séquence que le brin codant (sens)."
          },
        ]
      },
    ]
  },
  {
    id: "lycee-pc", emoji: "⚡", nom: "Physique-Chimie Lycée", niveau: "Lycée → PASS", color: "#4A1A6B",
    cours: [
      {
        id: "pc1", titre: "Acides-bases et pH", emoji: "🧫", nouveau: false,
        flashcardsData: [
          { q: "Définition acide selon Brønsted ?", r: "Espèce chimique capable de céder un proton H⁺." },
          { q: "Formule du pH ?", r: "pH = -log[H₃O⁺]" },
          { q: "pH du sang normal ?", r: "7,38 – 7,42. Acidose si pH < 7,38, alcalose si pH > 7,42." },
          { q: "Qu'est-ce qu'un tampon ?", r: "Système résistant aux variations de pH. Ex : couple HCO₃⁻/CO₂ dans le sang." },
          { q: "Ka et pKa : relation ?", r: "pKa = -log(Ka). Plus pKa est faible, plus l'acide est fort." },
        ],
        fiche: {
          page1_intro: {
            titre: "Introduction",
            texte: "L'équilibre acide-base est fondamental en physiologie. Le pH sanguin (7,40 ± 0,02) est maintenu par des systèmes tampons, la respiration et les reins. Les mécanismes de compensation permettent de corriger les acidoses et alcaloses.",
            points_cles: [
              "Acide (Brønsted) = donneur de H⁺",
              "pH = -log[H₃O⁺]",
              "pH sang normal : 7,38–7,42",
              "Tampon bicarbonate : HCO₃⁻/CO₂",
            ]
          },
          page2_concepts: {
            titre: "Concepts clés",
            concepts: [
              { terme: "Acide (Brønsted)", definition: "Espèce qui cède un proton (H⁺). Ex : HCl, H₂CO₃, NH₄⁺." },
              { terme: "Base (Brønsted)", definition: "Espèce qui capte un proton (H⁺). Ex : OH⁻, HCO₃⁻, NH₃." },
              { terme: "Couple acide-base conjugué", definition: "AH/A⁻ : l'acide AH cède H⁺ pour donner sa base conjuguée A⁻. Ex : H₂CO₃/HCO₃⁻." },
              { terme: "Tampon (buffer)", definition: "Mélange d'un acide faible et de sa base conjuguée résistant aux variations de pH. Efficace au pKa ± 1 unité de pH." },
              { terme: "Acidose / Alcalose", definition: "Acidose : pH < 7,38 (trop de H⁺). Alcalose : pH > 7,42 (trop peu de H⁺). Respiratoire ou métabolique selon l'origine." },
            ]
          },
          page3_schemas: {
            titre: "Schémas",
            schemas: [
              { id: "echelle-ph", legende: "Échelle de pH : de l'acidose à l'alcalose, avec les valeurs physiologiques" },
            ]
          },
          page4_formules: {
            titre: "Formules",
            formules: [
              { label: "pH", formule: "pH = −log[H₃O⁺]", unite: "" },
              { label: "Henderson-Hasselbalch", formule: "pH = pKa + log([A⁻] / [AH])", unite: "" },
              { label: "Produit ionique de l'eau", formule: "[H₃O⁺] × [OH⁻] = Ke = 10⁻¹⁴ à 25°C", unite: "" },
            ],
            donnees: [
              { label: "pH sang normal", valeur: "7,38–7,42" },
              { label: "pKa du couple HCO₃⁻/CO₂", valeur: "6,1" },
              { label: "pKa eau (pKe)", valeur: "14 à 25°C" },
              { label: "pH urine normale", valeur: "4,5–8,0" },
            ]
          },
          page5_resume: {
            titre: "Résumé",
            points: [
              "Acide = donneur H⁺ ; Base = accepteur H⁺ (Brønsted)",
              "pH = -log[H₃O⁺] : eau pure pH = 7 à 25°C",
              "pH sanguin normal : 7,38–7,42",
              "Henderson-Hasselbalch : pH = pKa + log([A⁻]/[AH])",
              "Tampon efficace autour de son pKa (± 1 unité)",
            ],
            mnemo: "pH = pKa + log(Base/Acide) — Henderson-Hasselbalch : le B avant le A, comme Base avant Acide"
          }
        },
        qcm: [
          {
            id: "qcm_pc1_1", question: "Selon la théorie de Brønsted-Lowry, un acide est :",
            options: [{ label: "A", texte: "Une espèce qui accepte un proton H⁺" }, { label: "B", texte: "Une espèce qui cède un proton H⁺" }, { label: "C", texte: "Une espèce qui cède des électrons" }, { label: "D", texte: "Une espèce qui produit des ions OH⁻" }],
            reponse_correcte: "B", difficulte: "facile",
            explication: "Selon Brønsted-Lowry : acide = donneur de proton H⁺, base = accepteur de proton H⁺. C'est la définition la plus utilisée en chimie organique et biochimie. La définition d'Arrhenius (acide = produit H⁺ dans l'eau) est plus restrictive. La définition de Lewis (acide = accepteur de doublet d'électrons) est plus générale."
          },
          {
            id: "qcm_pc1_2", question: "Quel est le pH d'une solution de HCl à 0,01 mol/L (acide fort, totalement dissocié) ?",
            options: [{ label: "A", texte: "1" }, { label: "B", texte: "2" }, { label: "C", texte: "7" }, { label: "D", texte: "12" }],
            reponse_correcte: "B", difficulte: "facile",
            explication: "HCl est un acide fort : HCl → H⁺ + Cl⁻. [H⁺] = 0,01 mol/L = 10⁻² mol/L. pH = -log(10⁻²) = 2. Application directe. Si [HCl] = 0,1 mol/L → pH = 1. Si [HCl] = 10⁻⁴ mol/L → pH = 4."
          },
          {
            id: "qcm_pc1_3", question: "Un patient a un pH sanguin de 7,25. On parle de :",
            options: [{ label: "A", texte: "Alcalose sévère" }, { label: "B", texte: "pH normal" }, { label: "C", texte: "Acidose" }, { label: "D", texte: "Alcalose légère" }],
            reponse_correcte: "C", difficulte: "facile",
            explication: "Le pH sanguin normal est 7,38–7,42. Un pH < 7,38 définit une acidose (excès de H⁺ ou déficit de HCO₃⁻). Un pH de 7,25 est une acidose sévère nécessitant une prise en charge urgente. L'alcalose correspond à pH > 7,42."
          },
          {
            id: "qcm_pc1_4", question: "La formule de Henderson-Hasselbalch est :",
            options: [{ label: "A", texte: "pH = pKa − log([A⁻]/[AH])" }, { label: "B", texte: "pH = pKa + log([AH]/[A⁻])" }, { label: "C", texte: "pH = pKa + log([A⁻]/[AH])" }, { label: "D", texte: "pH = Ka + log([A⁻]/[AH])" }],
            reponse_correcte: "C", difficulte: "moyen",
            explication: "Henderson-Hasselbalch : pH = pKa + log([A⁻]/[AH]) où A⁻ est la forme base et AH la forme acide. Application : système bicarbonate pH = 6,1 + log([HCO₃⁻]/[CO₂ dissous]). Normalement : log(24/1,2) = log(20) ≈ 1,3 → pH ≈ 7,4."
          },
          {
            id: "qcm_pc1_5", question: "Un tampon est le plus efficace :",
            options: [{ label: "A", texte: "Quand le pH est très acide" }, { label: "B", texte: "Quand le pH = pKa ± 1 unité" }, { label: "C", texte: "Quand la base conjuguée est absente" }, { label: "D", texte: "À pH = 7 uniquement" }],
            reponse_correcte: "B", difficulte: "moyen",
            explication: "Un tampon est efficace dans la zone pH = pKa ± 1 unité, car les concentrations de l'acide (AH) et de la base conjuguée (A⁻) sont du même ordre de grandeur. À pH = pKa, [AH] = [A⁻], le pouvoir tampon est maximal. Le tampon bicarbonate (pKa 6,1) tamponne bien entre pH 5,1 et 7,1, mais le système respiratoire étend son efficacité à pH 7,4."
          },
        ]
      },
    ]
  },
];
