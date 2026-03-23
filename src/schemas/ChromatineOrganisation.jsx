export default function ChromatineOrganisation() {
  return (
    <svg viewBox="0 0 380 520" xmlns="http://www.w3.org/2000/svg" style={{ width: "100%", height: "auto" }} shapeRendering="geometricPrecision">
      <rect width="380" height="520" rx="12" fill="#1a1a2e" />

      <text x="190" y="28" textAnchor="middle" fontSize="13" fontWeight="800" fill="#E5C97A" fontFamily="sans-serif">Organisation de la chromatine</text>
      <text x="190" y="44" textAnchor="middle" fontSize="9" fill="#aaa" fontFamily="sans-serif">De la double hélice au chromosome</text>

      {/* 1. Double hélice */}
      <g transform="translate(30, 58)">
        <circle cx="0" cy="12" r="14" fill="#5B4FD9" opacity="0.2" />
        <text x="0" y="16" textAnchor="middle" fontSize="11" fontWeight="800" fill="#E5C97A">1</text>
        <text x="22" y="10" fontSize="9.5" fontWeight="700" fill="#fff">Double hélice d'ADN</text>
        <text x="22" y="22" fontSize="8" fill="#aaa">2 brins enroulés, diamètre ≈ 2 nm</text>
        <g transform="translate(220, -6)">
          <path d="M0,0 Q15,-8 30,0 Q45,8 60,0 Q75,-8 90,0" fill="none" stroke="#5B4FD9" strokeWidth="2.5" />
          <path d="M0,6 Q15,14 30,6 Q45,-2 60,6 Q75,14 90,6" fill="none" stroke="#E5C97A" strokeWidth="2.5" />
          {[0,15,30,45,60,75].map(x => <line key={x} x1={x+5} y1="1" x2={x+10} y2="5" stroke="#fff" strokeWidth="0.8" opacity="0.4" />)}
        </g>
        <text x="330" y="20" textAnchor="end" fontSize="8" fill="#888">2 nm</text>
      </g>

      <line x1="44" y1="88" x2="44" y2="105" stroke="#E5C97A" strokeWidth="1.5" strokeDasharray="3,2" markerEnd="url(#arrowGold)" />

      {/* 2. Nucléosomes */}
      <g transform="translate(30, 110)">
        <circle cx="0" cy="12" r="14" fill="#5B4FD9" opacity="0.2" />
        <text x="0" y="16" textAnchor="middle" fontSize="11" fontWeight="800" fill="#E5C97A">2</text>
        <text x="22" y="10" fontSize="9.5" fontWeight="700" fill="#fff">Nucléosomes</text>
        <text x="22" y="22" fontSize="8" fill="#aaa">ADN enroulé autour de 8 histones</text>
        <g transform="translate(200, -8)">
          {[0,35,70,105].map(x => (
            <g key={x}>
              <circle cx={x+14} cy="14" r="11" fill="#C9A84C" opacity="0.35" stroke="#C9A84C" strokeWidth="1" />
              <path d={`M${x} 3 Q${x+14} -6 ${x+28} 3`} fill="none" stroke="#5B4FD9" strokeWidth="1.8" />
              <path d={`M${x} 25 Q${x+14} 34 ${x+28} 25`} fill="none" stroke="#5B4FD9" strokeWidth="1.8" />
            </g>
          ))}
        </g>
        <text x="350" y="22" textAnchor="end" fontSize="8" fill="#888">11 nm</text>
      </g>

      <line x1="44" y1="140" x2="44" y2="157" stroke="#E5C97A" strokeWidth="1.5" strokeDasharray="3,2" />

      {/* 3. Chromatosome */}
      <g transform="translate(30, 162)">
        <circle cx="0" cy="12" r="14" fill="#5B4FD9" opacity="0.2" />
        <text x="0" y="16" textAnchor="middle" fontSize="11" fontWeight="800" fill="#E5C97A">3</text>
        <text x="22" y="10" fontSize="9.5" fontWeight="700" fill="#fff">Chromatosome</text>
        <text x="22" y="22" fontSize="8" fill="#aaa">Nucléosome + histone H1 de liaison</text>
        <g transform="translate(220, -4)">
          <circle cx="30" cy="14" r="16" fill="#C9A84C" opacity="0.3" stroke="#C9A84C" strokeWidth="1.5" />
          <circle cx="30" cy="14" r="8" fill="#2ecc71" opacity="0.5" />
          <text x="30" y="17" textAnchor="middle" fontSize="6" fontWeight="700" fill="#fff">H1</text>
          <path d="M10 0 Q30 -10 50 0" fill="none" stroke="#5B4FD9" strokeWidth="1.8" />
          <path d="M10 28 Q30 38 50 28" fill="none" stroke="#5B4FD9" strokeWidth="1.8" />
        </g>
      </g>

      <line x1="44" y1="192" x2="44" y2="209" stroke="#E5C97A" strokeWidth="1.5" strokeDasharray="3,2" />

      {/* 4. Fibre de 30 nm */}
      <g transform="translate(30, 214)">
        <circle cx="0" cy="12" r="14" fill="#5B4FD9" opacity="0.2" />
        <text x="0" y="16" textAnchor="middle" fontSize="11" fontWeight="800" fill="#E5C97A">4</text>
        <text x="22" y="10" fontSize="9.5" fontWeight="700" fill="#fff">Fibre de 30 nm</text>
        <text x="22" y="22" fontSize="8" fill="#aaa">Les nucléosomes s'empilent en solénoïde</text>
        <g transform="translate(220, -2)">
          <rect x="10" y="0" width="80" height="26" rx="13" fill="#C9A84C" opacity="0.2" stroke="#C9A84C" strokeWidth="1.5" />
          {[20,35,50,65,80].map(x => <circle key={x} cx={x} cy="13" r="7" fill="#C9A84C" opacity="0.4" />)}
        </g>
        <text x="350" y="22" textAnchor="end" fontSize="8" fill="#888">30 nm</text>
      </g>

      <line x1="44" y1="244" x2="44" y2="261" stroke="#E5C97A" strokeWidth="1.5" strokeDasharray="3,2" />

      {/* 5. Boucles de 300 nm */}
      <g transform="translate(30, 266)">
        <circle cx="0" cy="12" r="14" fill="#5B4FD9" opacity="0.2" />
        <text x="0" y="16" textAnchor="middle" fontSize="11" fontWeight="800" fill="#E5C97A">5</text>
        <text x="22" y="10" fontSize="9.5" fontWeight="700" fill="#fff">Boucles de 300 nm</text>
        <text x="22" y="22" fontSize="8" fill="#aaa">La fibre forme des boucles sur un squelette</text>
        <g transform="translate(220, -6)">
          <path d="M10,20 Q30,-5 50,20 Q70,-5 90,20" fill="none" stroke="#C9A84C" strokeWidth="3" />
          <path d="M10,20 L10,30 M50,20 L50,30 M90,20 L90,30" stroke="#5B4FD9" strokeWidth="2" />
        </g>
        <text x="350" y="22" textAnchor="end" fontSize="8" fill="#888">300 nm</text>
      </g>

      <line x1="44" y1="296" x2="44" y2="313" stroke="#E5C97A" strokeWidth="1.5" strokeDasharray="3,2" />

      {/* 6. Fibre de 700 nm */}
      <g transform="translate(30, 318)">
        <circle cx="0" cy="12" r="14" fill="#5B4FD9" opacity="0.2" />
        <text x="0" y="16" textAnchor="middle" fontSize="11" fontWeight="800" fill="#E5C97A">6</text>
        <text x="22" y="10" fontSize="9.5" fontWeight="700" fill="#fff">Fibre de 700 nm</text>
        <text x="22" y="22" fontSize="8" fill="#aaa">Condensation des boucles</text>
        <g transform="translate(220, -4)">
          <rect x="10" y="2" width="90" height="22" rx="11" fill="none" stroke="#C9A84C" strokeWidth="2" />
          <path d="M20,13 Q35,2 50,13 Q65,24 80,13" fill="none" stroke="#E5C97A" strokeWidth="2.5" />
        </g>
        <text x="350" y="22" textAnchor="end" fontSize="8" fill="#888">700 nm</text>
      </g>

      <line x1="44" y1="348" x2="44" y2="365" stroke="#E5C97A" strokeWidth="1.5" strokeDasharray="3,2" />

      {/* 7. Chromatide */}
      <g transform="translate(30, 370)">
        <circle cx="0" cy="12" r="14" fill="#5B4FD9" opacity="0.2" />
        <text x="0" y="16" textAnchor="middle" fontSize="11" fontWeight="800" fill="#E5C97A">7</text>
        <text x="22" y="10" fontSize="9.5" fontWeight="700" fill="#fff">Chromatide</text>
        <text x="22" y="22" fontSize="8" fill="#aaa">Un bras du chromosome</text>
        <g transform="translate(240, -4)">
          <rect x="0" y="0" width="18" height="28" rx="6" fill="#5B4FD9" opacity="0.5" stroke="#5B4FD9" strokeWidth="1.5" />
        </g>
        <text x="350" y="22" textAnchor="end" fontSize="8" fill="#888">1 400 nm</text>
      </g>

      <line x1="44" y1="400" x2="44" y2="417" stroke="#E5C97A" strokeWidth="1.5" strokeDasharray="3,2" />

      {/* 8. Chromosome */}
      <g transform="translate(30, 422)">
        <circle cx="0" cy="18" r="14" fill="#5B4FD9" opacity="0.2" />
        <text x="0" y="22" textAnchor="middle" fontSize="11" fontWeight="800" fill="#E5C97A">8</text>
        <text x="22" y="14" fontSize="9.5" fontWeight="700" fill="#fff">Chromosome métaphasique</text>
        <text x="22" y="26" fontSize="8" fill="#aaa">2 chromatides sœurs liées au centromère</text>
        <g transform="translate(230, 0)">
          <path d="M10,0 Q15,18 10,36 L18,36 Q13,18 18,0 Z" fill="#5B4FD9" opacity="0.6" stroke="#E5C97A" strokeWidth="1" />
          <path d="M22,0 Q27,18 22,36 L30,36 Q25,18 30,0 Z" fill="#5B4FD9" opacity="0.6" stroke="#E5C97A" strokeWidth="1" />
          <line x1="10" y1="18" x2="30" y2="18" stroke="#E5C97A" strokeWidth="1.5" />
          <text x="20" y="50" textAnchor="middle" fontSize="7" fill="#888">centromère</text>
        </g>
      </g>

      {/* Flèche recap à droite */}
      <g transform="translate(360, 65)">
        <line x1="0" y1="0" x2="0" y2="400" stroke="#E5C97A" strokeWidth="1" opacity="0.3" />
        <text x="-4" y="-4" textAnchor="end" fontSize="7" fill="#888">2 nm</text>
        <text x="-4" y="400" textAnchor="end" fontSize="7" fill="#888">1 400 nm</text>
        <polygon points="0,400 -4,390 4,390" fill="#E5C97A" opacity="0.5" />
      </g>

      <text x="190" y="505" textAnchor="middle" fontSize="8" fill="#666" fontFamily="sans-serif">Source : polycopiés Diploma Santé — Hermione Médecine</text>
    </svg>
  );
}
