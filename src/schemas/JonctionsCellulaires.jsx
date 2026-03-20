export default function JonctionsCellulaires() {
  return (
    <svg
      viewBox="0 0 360 240"
      xmlns="http://www.w3.org/2000/svg"
      style={{ width: "100%", height: "auto" }}
      shapeRendering="geometricPrecision"
    >
      <rect x="8" y="8" width="344" height="224" rx="14" fill="#ffffff" stroke="#e7e9ef" />

      <rect x="56" y="28" width="88" height="176" rx="14" fill="#f1ecff" stroke="#8f75e7" strokeWidth="2" />
      <rect x="216" y="28" width="88" height="176" rx="14" fill="#eaf9f0" stroke="#2ecc71" strokeWidth="2" />
      <text x="100" y="44" textAnchor="middle" fontSize="10" fontWeight="700" fill="#6e54c9">Cellule A</text>
      <text x="260" y="44" textAnchor="middle" fontSize="10" fontWeight="700" fill="#239b56">Cellule B</text>

      <line x1="144" y1="64" x2="216" y2="64" stroke="#C9A84C" strokeWidth="4" />
      <rect x="162" y="54" width="36" height="20" rx="7" fill="#C9A84C" />
      <text x="180" y="68" textAnchor="middle" fontSize="8.5" fontWeight="700" fill="#fff">Occludines</text>
      <text x="180" y="48" textAnchor="middle" fontSize="8.5" fill="#7a8192">Jonction serree</text>

      <line x1="144" y1="110" x2="216" y2="110" stroke="#5B4FD9" strokeWidth="4" />
      <circle cx="158" cy="110" r="8" fill="#7c6ae8" />
      <circle cx="202" cy="110" r="8" fill="#7c6ae8" />
      <rect x="166" y="100" width="28" height="20" rx="7" fill="#5B4FD9" />
      <text x="180" y="114" textAnchor="middle" fontSize="8.5" fontWeight="700" fill="#fff">Conn.</text>
      <text x="180" y="94" textAnchor="middle" fontSize="8.5" fill="#7a8192">Gap junction</text>

      <line x1="144" y1="156" x2="216" y2="156" stroke="#e74c3c" strokeWidth="4" />
      <rect x="160" y="146" width="40" height="20" rx="7" fill="#e74c3c" />
      <text x="180" y="160" textAnchor="middle" fontSize="8.5" fontWeight="700" fill="#fff">Desmosome</text>
      <text x="180" y="140" textAnchor="middle" fontSize="8.5" fill="#7a8192">Ancrage mecanique</text>

      <line x1="112" y1="196" x2="248" y2="196" stroke="#3498db" strokeWidth="2.5" />
      <circle cx="112" cy="196" r="4.5" fill="#3498db" />
      <circle cx="248" cy="196" r="4.5" fill="#3498db" />
      <text x="180" y="210" textAnchor="middle" fontSize="8.5" fill="#2874a6">Integrines vers matrice extracellulaire</text>
    </svg>
  );
}
