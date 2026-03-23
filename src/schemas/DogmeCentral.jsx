export default function DogmeCentral() {
  return (
    <svg viewBox="0 0 380 220" xmlns="http://www.w3.org/2000/svg" style={{ width: "100%", height: "auto" }} shapeRendering="geometricPrecision">
      <rect width="380" height="220" rx="12" fill="#1a1a2e" />
      <text x="190" y="24" textAnchor="middle" fontSize="13" fontWeight="800" fill="#E5C97A">Le dogme central de la biologie moléculaire</text>

      {/* ADN box */}
      <g transform="translate(20, 55)">
        <rect x="0" y="0" width="90" height="60" rx="12" fill="rgba(91,79,217,0.2)" stroke="#5B4FD9" strokeWidth="2" />
        <text x="45" y="28" textAnchor="middle" fontSize="16" fontWeight="800" fill="#5B4FD9">ADN</text>
        <text x="45" y="44" textAnchor="middle" fontSize="8" fill="#aaa">double hélice</text>
        <text x="45" y="54" textAnchor="middle" fontSize="7" fill="#888">dans le noyau</text>
      </g>

      {/* Arrow: Transcription */}
      <g transform="translate(115, 72)">
        <line x1="0" y1="13" x2="40" y2="13" stroke="#2ecc71" strokeWidth="2.5" />
        <polygon points="40,13 34,8 34,18" fill="#2ecc71" />
        <text x="20" y="6" textAnchor="middle" fontSize="7.5" fontWeight="700" fill="#2ecc71">Transcription</text>
        <text x="20" y="32" textAnchor="middle" fontSize="6.5" fill="#888">ADN → ARN</text>
      </g>

      {/* ARN box */}
      <g transform="translate(160, 55)">
        <rect x="0" y="0" width="80" height="60" rx="12" fill="rgba(201,168,76,0.2)" stroke="#C9A84C" strokeWidth="2" />
        <text x="40" y="28" textAnchor="middle" fontSize="16" fontWeight="800" fill="#E5C97A">ARN</text>
        <text x="40" y="44" textAnchor="middle" fontSize="8" fill="#aaa">messager</text>
        <text x="40" y="54" textAnchor="middle" fontSize="7" fill="#888">sort du noyau</text>
      </g>

      {/* Arrow: Traduction */}
      <g transform="translate(245, 72)">
        <line x1="0" y1="13" x2="40" y2="13" stroke="#e67e22" strokeWidth="2.5" />
        <polygon points="40,13 34,8 34,18" fill="#e67e22" />
        <text x="20" y="6" textAnchor="middle" fontSize="7.5" fontWeight="700" fill="#e67e22">Traduction</text>
        <text x="20" y="32" textAnchor="middle" fontSize="6.5" fill="#888">ARN → Protéine</text>
      </g>

      {/* Protein box */}
      <g transform="translate(290, 55)">
        <rect x="0" y="0" width="80" height="60" rx="12" fill="rgba(231,76,60,0.15)" stroke="#e74c3c" strokeWidth="2" />
        <text x="40" y="24" textAnchor="middle" fontSize="13" fontWeight="800" fill="#e74c3c">Protéine</text>
        <text x="40" y="40" textAnchor="middle" fontSize="8" fill="#aaa">fonction</text>
        <text x="40" y="50" textAnchor="middle" fontSize="7" fill="#888">dans le cytoplasme</text>
      </g>

      {/* Replication arrow (loop on ADN) */}
      <g transform="translate(65, 40)">
        <path d="M0,15 Q0,-8 -20,-8 Q-35,-8 -35,8 Q-35,15 -20,15" fill="none" stroke="#5B4FD9" strokeWidth="1.5" />
        <polygon points="0,15 -6,12 -4,18" fill="#5B4FD9" />
        <text x="-22" y="-12" textAnchor="middle" fontSize="7" fontWeight="600" fill="#5B4FD9">Réplication</text>
      </g>

      {/* Bottom summary */}
      <g transform="translate(20, 140)">
        <rect x="0" y="0" width="340" height="65" rx="8" fill="rgba(255,255,255,0.04)" stroke="rgba(255,255,255,0.08)" />
        <text x="170" y="16" textAnchor="middle" fontSize="9" fontWeight="700" fill="#fff">Résumé des étapes</text>
        <text x="14" y="32" fontSize="8" fill="#ccc">1. Réplication : l'ADN se copie avant chaque division cellulaire</text>
        <text x="14" y="44" fontSize="8" fill="#ccc">2. Transcription : un gène est recopié en ARN messager (dans le noyau)</text>
        <text x="14" y="56" fontSize="8" fill="#ccc">3. Traduction : le ribosome lit l'ARNm et fabrique la protéine (dans le cytoplasme)</text>
      </g>
    </svg>
  );
}
