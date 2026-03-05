export default function CelluleEucaryote() {
  return (
    <svg viewBox="0 0 320 260" xmlns="http://www.w3.org/2000/svg" style={{ width: "100%", height: "auto" }}>
      {/* Membrane plasmique */}
      <ellipse cx="160" cy="130" rx="150" ry="115" fill="rgba(201,168,76,0.06)" stroke="#C9A84C" strokeWidth="2.5" strokeDasharray="6 3" />
      {/* Cytoplasme label */}
      <text x="40" y="200" fontSize="9" fill="#8a9bb0">Cytoplasme</text>
      {/* Noyau */}
      <ellipse cx="155" cy="125" rx="52" ry="42" fill="rgba(108,78,245,0.18)" stroke="#9B7FE8" strokeWidth="2" />
      <ellipse cx="155" cy="125" rx="40" ry="30" fill="rgba(108,78,245,0.1)" stroke="#9B7FE8" strokeWidth="1" strokeDasharray="3 2" />
      <text x="155" y="121" textAnchor="middle" fontSize="9" fontWeight="700" fill="#C9A84C">Noyau</text>
      <text x="155" y="133" textAnchor="middle" fontSize="8" fill="#9B7FE8">ADN / chromatine</text>
      {/* Mitochondrie */}
      <ellipse cx="68" cy="90" rx="28" ry="16" fill="rgba(46,204,113,0.18)" stroke="#2ecc71" strokeWidth="1.5" />
      <path d="M68 79 Q55 90 68 101" fill="none" stroke="#2ecc71" strokeWidth="1" />
      <path d="M70 79 Q83 90 70 101" fill="none" stroke="#2ecc71" strokeWidth="1" />
      <text x="68" y="87" textAnchor="middle" fontSize="8" fill="#2ecc71">Mito-</text>
      <text x="68" y="97" textAnchor="middle" fontSize="8" fill="#2ecc71">chondrie</text>
      {/* Réticulum endoplasmique */}
      <path d="M215 100 Q240 110 235 130 Q230 150 245 155" fill="none" stroke="#E5C97A" strokeWidth="2" />
      <path d="M220 105 Q248 116 243 136 Q238 156 253 161" fill="none" stroke="#E5C97A" strokeWidth="1" strokeDasharray="3 2" />
      <text x="250" y="125" fontSize="8" fill="#E5C97A">RE</text>
      {/* Appareil de Golgi */}
      <path d="M85 160 Q120 153 130 163" fill="none" stroke="#FF9F43" strokeWidth="2.5" />
      <path d="M88 168 Q123 160 133 170" fill="none" stroke="#FF9F43" strokeWidth="2" />
      <path d="M91 176 Q126 168 136 178" fill="none" stroke="#FF9F43" strokeWidth="1.5" />
      <text x="98" y="192" fontSize="8" fill="#FF9F43">Golgi</text>
      {/* Lysosome */}
      <circle cx="200" cy="185" r="12" fill="rgba(224,90,43,0.2)" stroke="#e05a2b" strokeWidth="1.5" />
      <text x="200" y="189" textAnchor="middle" fontSize="8" fill="#e05a2b">Lys.</text>
      {/* Membrane label */}
      <text x="260" y="32" fontSize="9" fill="#C9A84C">Membrane</text>
      <text x="260" y="42" fontSize="9" fill="#C9A84C">plasmique</text>
      <line x1="270" y1="44" x2="255" y2="55" stroke="#C9A84C" strokeWidth="1" />
      {/* Légende */}
      <rect x="8" y="235" width="10" height="6" fill="rgba(201,168,76,0.3)" stroke="#C9A84C" strokeWidth="1" />
      <text x="22" y="242" fontSize="8" fill="#8a9bb0">Membrane</text>
      <rect x="80" y="235" width="10" height="6" fill="rgba(108,78,245,0.3)" stroke="#9B7FE8" strokeWidth="1" />
      <text x="94" y="242" fontSize="8" fill="#8a9bb0">Noyau</text>
      <rect x="145" y="235" width="10" height="6" fill="rgba(46,204,113,0.3)" stroke="#2ecc71" strokeWidth="1" />
      <text x="159" y="242" fontSize="8" fill="#8a9bb0">Mitochond.</text>
      <rect x="225" y="235" width="10" height="6" fill="rgba(255,159,67,0.3)" stroke="#FF9F43" strokeWidth="1" />
      <text x="239" y="242" fontSize="8" fill="#8a9bb0">Golgi</text>
    </svg>
  );
}
