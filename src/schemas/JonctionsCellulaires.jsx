export default function JonctionsCellulaires() {
  return (
    <svg viewBox="0 0 360 240" xmlns="http://www.w3.org/2000/svg" style={{ width: "100%", height: "auto" }}>
      <rect x="40" y="24" width="122" height="190" rx="18" fill="rgba(91,79,217,0.14)" stroke="#5B4FD9" strokeWidth="2" />
      <rect x="198" y="24" width="122" height="190" rx="18" fill="rgba(46,204,113,0.14)" stroke="#2ecc71" strokeWidth="2" />
      <text x="101" y="42" textAnchor="middle" fontSize="10" fontWeight="700" fill="#5B4FD9">Cellule A</text>
      <text x="259" y="42" textAnchor="middle" fontSize="10" fontWeight="700" fill="#2ecc71">Cellule B</text>

      <rect x="162" y="56" width="36" height="20" rx="8" fill="#C9A84C" />
      <text x="180" y="69" textAnchor="middle" fontSize="8" fontWeight="700" fill="#fff">Occludines</text>
      <line x1="140" y1="66" x2="162" y2="66" stroke="#C9A84C" strokeWidth="2" />
      <line x1="198" y1="66" x2="220" y2="66" stroke="#C9A84C" strokeWidth="2" />
      <text x="180" y="52" textAnchor="middle" fontSize="8" fill="#7a8192">Jonction serree</text>

      <rect x="156" y="100" width="48" height="22" rx="9" fill="#5B4FD9" />
      <circle cx="148" cy="111" r="8" fill="#7c6ae8" />
      <circle cx="212" cy="111" r="8" fill="#7c6ae8" />
      <line x1="130" y1="111" x2="140" y2="111" stroke="#7c6ae8" strokeWidth="2" />
      <line x1="220" y1="111" x2="230" y2="111" stroke="#7c6ae8" strokeWidth="2" />
      <text x="180" y="115" textAnchor="middle" fontSize="8" fontWeight="700" fill="#fff">Connexons</text>
      <text x="180" y="93" textAnchor="middle" fontSize="8" fill="#7a8192">Gap junction</text>

      <rect x="158" y="146" width="44" height="24" rx="9" fill="#e74c3c" />
      <line x1="138" y1="158" x2="158" y2="158" stroke="#e74c3c" strokeWidth="2" />
      <line x1="202" y1="158" x2="222" y2="158" stroke="#e74c3c" strokeWidth="2" />
      <text x="180" y="161" textAnchor="middle" fontSize="8" fontWeight="700" fill="#fff">Desmosome</text>
      <text x="180" y="140" textAnchor="middle" fontSize="8" fill="#7a8192">Ancrage mecanique</text>

      <path d="M120 192 Q180 176 240 192" fill="none" stroke="#3498db" strokeWidth="2.3" />
      <circle cx="122" cy="192" r="4.5" fill="#3498db" />
      <circle cx="238" cy="192" r="4.5" fill="#3498db" />
      <text x="180" y="206" textAnchor="middle" fontSize="8" fill="#3498db">Integrines - matrice extracellulaire</text>

      <text x="180" y="225" textAnchor="middle" fontSize="8" fill="#8a9bb0">
        Polarite - communication - adhesion
      </text>
    </svg>
  );
}
