export default function DancingCat({ isDancing, speed, onToggle }) {
  const cls = `cat ${isDancing ? 'dancing' : 'paused'}`
  return (
    <div className="cat-stage" style={{ '--speed': 1 / speed }}>
      <button
        type="button"
        className={cls}
        onClick={onToggle}
        aria-label={isDancing ? '고양이 춤 멈추기' : '고양이 춤추기'}
      >
        <svg viewBox="0 0 200 260" role="img" aria-hidden="true">
          <g className="tail">
            <path d="M140 220 Q195 210 185 150" stroke="#f4a340" strokeWidth="14" strokeLinecap="round" fill="none" />
          </g>
          <g className="arm arm-left">
            <rect x="38" y="140" width="18" height="60" rx="9" fill="#f4a340" />
          </g>
          <g className="arm arm-right">
            <rect x="144" y="140" width="18" height="60" rx="9" fill="#f4a340" />
          </g>
          <ellipse cx="100" cy="195" rx="48" ry="46" fill="#f4a340" />
          <ellipse cx="100" cy="205" rx="28" ry="30" fill="#ffe4b5" />
          <rect x="68" y="230" width="22" height="22" rx="10" fill="#e8922a" />
          <rect x="110" y="230" width="22" height="22" rx="10" fill="#e8922a" />
          <g className="head">
            <path d="M42 70 L50 14 L84 48Z M158 70 L150 14 L116 48Z" fill="#f4a340" />
            <path d="M54 56 L56 30 L72 46Z M146 56 L144 30 L128 46Z" fill="#f9b8b8" />
            <ellipse cx="100" cy="86" rx="62" ry="54" fill="#f4a340" />
            <path d="M88 40 L88 56 M100 36 L100 54 M112 40 L112 56" stroke="#d9801c" strokeWidth="4" strokeLinecap="round" />
            <g className="eyes">
              <ellipse cx="78" cy="84" rx="9" ry="12" fill="#222" />
              <ellipse cx="122" cy="84" rx="9" ry="12" fill="#222" />
              <circle cx="81" cy="79" r="3" fill="#fff" />
              <circle cx="125" cy="79" r="3" fill="#fff" />
            </g>
            <path d="M93 104 L107 104 L100 112Z" fill="#e66" />
            <path d="M100 112 Q90 126 78 116 M100 112 Q110 126 122 116" stroke="#222" strokeWidth="3" fill="none" strokeLinecap="round" />
            <path d="M60 104 L30 98 M60 112 L30 116 M140 104 L170 98 M140 112 L170 116" stroke="#222" strokeWidth="2" strokeLinecap="round" />
            <ellipse cx="62" cy="104" rx="8" ry="5" fill="#f9b8b8" opacity="0.7" />
            <ellipse cx="138" cy="104" rx="8" ry="5" fill="#f9b8b8" opacity="0.7" />
          </g>
        </svg>
      </button>
      <div className="shadow" />
    </div>
  )
}
