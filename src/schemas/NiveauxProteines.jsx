export default function NiveauxProteines() {
  return (
    <svg viewBox="0 0 380 360" xmlns="http://www.w3.org/2000/svg" style={{ width: "100%", height: "auto" }} shapeRendering="geometricPrecision">
      <rect width="380" height="360" rx="12" fill="#1a1a2e" />
      <text x="190" y="24" textAnchor="middle" fontSize="13" fontWeight="800" fill="#E5C97A">Les 4 niveaux de structure des protéines</text>

      {/* 1. Primaire */}
      <g transform="translate(20, 48)">
        <rect x="0" y="0" width="340" height="60" rx="10" fill="rgba(91,79,217,0.1)" stroke="#5B4FD9" strokeWidth="1.5" />
        <circle cx="20" cy="30" r="14" fill="#5B4FD9" opacity="0.3" />
        <text x="20" y="34" textAnchor="middle" fontSize="12" fontWeight="800" fill="#E5C97A">1</text>
        <text x="44" y="20" fontSize="10" fontWeight="700" fill="#5B4FD9">Structure primaire</text>
        <text x="44" y="34" fontSize="8.5" fill="#ccc">Séquence linéaire d'acides aminés</text>
        <text x="44" y="48" fontSize="7.5" fill="#888">Comme une phrase : chaque « mot » est un acide aminé</text>
        <g transform="translate(240, 12)">
          {["Met","Ala","Gly","Leu","Ser","Val"].map((aa, i) => (
            <g key={i}>
              <rect x={i * 16} y="0" width="14" height="16" rx="3" fill={["#e74c3c","#3498db","#2ecc71","#f39c12","#9b59b6","#e67e22"][i]} opacity="0.7" />
              <text x={i * 16 + 7} y="12" textAnchor="middle" fontSize="5" fontWeight="700" fill="#fff">{aa}</text>
            </g>
          ))}
          <line x1="0" y1="22" x2="94" y2="22" stroke="#888" strokeWidth="0.5" />
          <text x="47" y="30" textAnchor="middle" fontSize="6" fill="#888">→ liaison peptidique →</text>
        </g>
      </g>

      {/* 2. Secondaire */}
      <g transform="translate(20, 118)">
        <rect x="0" y="0" width="340" height="60" rx="10" fill="rgba(201,168,76,0.1)" stroke="#C9A84C" strokeWidth="1.5" />
        <circle cx="20" cy="30" r="14" fill="#C9A84C" opacity="0.3" />
        <text x="20" y="34" textAnchor="middle" fontSize="12" fontWeight="800" fill="#E5C97A">2</text>
        <text x="44" y="20" fontSize="10" fontWeight="700" fill="#E5C97A">Structure secondaire</text>
        <text x="44" y="34" fontSize="8.5" fill="#ccc">Motifs locaux : hélice α et feuillet β</text>
        <text x="44" y="48" fontSize="7.5" fill="#888">Stabilisés par des liaisons hydrogène</text>
        <g transform="translate(240, 8)">
          {/* Helix */}
          <path d="M0,20 Q8,10 16,20 Q24,30 32,20 Q40,10 48,20" fill="none" stroke="#C9A84C" strokeWidth="2.5" />
          <text x="24" y="42" textAnchor="middle" fontSize="6" fill="#888">hélice α</text>
          {/* Sheet */}
          <g transform="translate(60, 0)">
            <line x1="0" y1="10" x2="30" y2="10" stroke="#5B4FD9" strokeWidth="2" />
            <line x1="0" y1="20" x2="30" y2="20" stroke="#5B4FD9" strokeWidth="2" />
            <line x1="0" y1="30" x2="30" y2="30" stroke="#5B4FD9" strokeWidth="2" />
            <text x="15" y="42" textAnchor="middle" fontSize="6" fill="#888">feuillet β</text>
          </g>
        </g>
      </g>

      {/* 3. Tertiaire */}
      <g transform="translate(20, 188)">
        <rect x="0" y="0" width="340" height="60" rx="10" fill="rgba(46,204,113,0.1)" stroke="#2ecc71" strokeWidth="1.5" />
        <circle cx="20" cy="30" r="14" fill="#2ecc71" opacity="0.3" />
        <text x="20" y="34" textAnchor="middle" fontSize="12" fontWeight="800" fill="#E5C97A">3</text>
        <text x="44" y="20" fontSize="10" fontWeight="700" fill="#2ecc71">Structure tertiaire</text>
        <text x="44" y="34" fontSize="8.5" fill="#ccc">Forme 3D globale de la protéine</text>
        <text x="44" y="48" fontSize="7.5" fill="#888">Ponts disulfure, liaisons hydrophobes, ioniques</text>
        <g transform="translate(252, 6)">
          <ellipse cx="30" cy="24" rx="28" ry="22" fill="#2ecc71" opacity="0.15" stroke="#2ecc71" strokeWidth="1.5" />
          <path d="M12,14 Q20,8 30,12 Q40,16 46,10" fill="none" stroke="#E5C97A" strokeWidth="1.8" />
          <path d="M14,30 Q22,36 32,32 Q42,28 48,34" fill="none" stroke="#5B4FD9" strokeWidth="1.8" />
          <text x="30" y="50" textAnchor="middle" fontSize="6" fill="#888">forme 3D</text>
        </g>
      </g>

      {/* 4. Quaternaire */}
      <g transform="translate(20, 258)">
        <rect x="0" y="0" width="340" height="60" rx="10" fill="rgba(231,76,60,0.1)" stroke="#e74c3c" strokeWidth="1.5" />
        <circle cx="20" cy="30" r="14" fill="#e74c3c" opacity="0.3" />
        <text x="20" y="34" textAnchor="middle" fontSize="12" fontWeight="800" fill="#E5C97A">4</text>
        <text x="44" y="20" fontSize="10" fontWeight="700" fill="#e74c3c">Structure quaternaire</text>
        <text x="44" y="34" fontSize="8.5" fill="#ccc">Assemblage de plusieurs chaînes</text>
        <text x="44" y="48" fontSize="7.5" fill="#888">Ex: hémoglobine = 4 sous-unités (2α + 2β)</text>
        <g transform="translate(246, 6)">
          <ellipse cx="16" cy="14" rx="14" ry="12" fill="#e74c3c" opacity="0.2" stroke="#e74c3c" strokeWidth="1" />
          <ellipse cx="40" cy="14" rx="14" ry="12" fill="#5B4FD9" opacity="0.2" stroke="#5B4FD9" strokeWidth="1" />
          <ellipse cx="16" cy="34" rx="14" ry="12" fill="#5B4FD9" opacity="0.2" stroke="#5B4FD9" strokeWidth="1" />
          <ellipse cx="40" cy="34" rx="14" ry="12" fill="#e74c3c" opacity="0.2" stroke="#e74c3c" strokeWidth="1" />
          <text x="10" y="18" textAnchor="middle" fontSize="6" fontWeight="700" fill="#e74c3c">α</text>
          <text x="46" y="18" textAnchor="middle" fontSize="6" fontWeight="700" fill="#5B4FD9">β</text>
          <text x="10" y="38" textAnchor="middle" fontSize="6" fontWeight="700" fill="#5B4FD9">β</text>
          <text x="46" y="38" textAnchor="middle" fontSize="6" fontWeight="700" fill="#e74c3c">α</text>
        </g>
      </g>

      <text x="190" y="350" textAnchor="middle" fontSize="8" fill="#666">La séquence (1) détermine tout le repliement (2→3→4)</text>
    </svg>
  );
}
