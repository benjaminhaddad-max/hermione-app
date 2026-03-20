import { MATIERES } from "../../data/content";

export default function FlashcardsListPage({ storage, onSelectMatiere }) {
  const anticipation = MATIERES.filter(m => m.categorie === "anticipation");
  const terminale = MATIERES.filter(m => m.categorie === "terminale");

  const renderGrid = (list) => (
    <div className="matiere-grid">
      {list.map(m => {
        const totalCards = m.cours.reduce((a, c) => a + (c.flashcardsData?.length || 0), 0);
        const mastered = m.cours.reduce((a, c) => a + (storage?.flashcards_progress?.[c.id]?.mastered_count || 0), 0);
        const pct = totalCards > 0 ? Math.round(mastered / totalCards * 100) : 0;
        return (
          <button key={m.id} className="matiere-tile" style={{ background: m.color }} onClick={() => onSelectMatiere(m)}>
            <span className="matiere-emoji">{m.emoji}</span>
            <span className="matiere-nom">{m.nom}</span>
            <span className="matiere-nb">{totalCards} cartes</span>
            {pct > 0 && <span className="matiere-pct">{pct}% maîtrisé</span>}
          </button>
        );
      })}
    </div>
  );

  return (
    <div className="page">
      <div className="page-header">
        <div>
          <h1 className="page-title">Flashcards</h1>
          <p className="page-sub">Révise par répétition espacée</p>
        </div>
      </div>

      <p className="section-title">Anticipation Programme PASS/LAS</p>
      {renderGrid(anticipation)}

      <p className="section-title" style={{ marginTop: 24 }}>Notions de Terminale utiles pour PASS/LAS</p>
      {renderGrid(terminale)}
    </div>
  );
}
