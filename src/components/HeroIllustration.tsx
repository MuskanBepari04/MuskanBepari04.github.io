/**
 * Decorative illustration: an editor, an incoming webhook event, a database node,
 * and an auth check, connected by flowing data lines.
 */
export function HeroIllustration({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 520 440" fill="none" className={className} aria-hidden="true" focusable="false">
      <defs>
        <radialGradient id="hero-glow" cx="50%" cy="50%" r="50%">
          <stop offset="0" stopColor="#8b5cf6" stopOpacity="0.45" />
          <stop offset="0.6" stopColor="#7c3aed" stopOpacity="0.08" />
          <stop offset="1" stopColor="#7c3aed" stopOpacity="0" />
        </radialGradient>
        <linearGradient id="hero-panel" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#ffffff" stopOpacity="0.09" />
          <stop offset="1" stopColor="#ffffff" stopOpacity="0.02" />
        </linearGradient>
        <linearGradient id="hero-panel-solid" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#1d1a2c" />
          <stop offset="1" stopColor="#13111d" />
        </linearGradient>
        <linearGradient id="hero-border" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#c4b5fd" stopOpacity="0.45" />
          <stop offset="0.5" stopColor="#ffffff" stopOpacity="0.08" />
          <stop offset="1" stopColor="#8b5cf6" stopOpacity="0.3" />
        </linearGradient>
        <linearGradient id="hero-accent" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0" stopColor="#c4b5fd" />
          <stop offset="1" stopColor="#8b5cf6" />
        </linearGradient>
        <linearGradient id="hero-area" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#8b5cf6" stopOpacity="0.35" />
          <stop offset="1" stopColor="#8b5cf6" stopOpacity="0" />
        </linearGradient>
        <pattern id="hero-dots" width="18" height="18" patternUnits="userSpaceOnUse">
          <circle cx="1.5" cy="1.5" r="1.1" fill="#ffffff" fillOpacity="0.07" />
        </pattern>
        <radialGradient id="hero-fade" cx="50%" cy="50%" r="55%">
          <stop offset="0.3" stopColor="#fff" />
          <stop offset="1" stopColor="#fff" stopOpacity="0" />
        </radialGradient>
        <mask id="hero-dots-mask">
          <rect width="520" height="440" fill="url(#hero-fade)" />
        </mask>
      </defs>

      {/* Backdrop */}
      <rect width="520" height="440" fill="url(#hero-dots)" mask="url(#hero-dots-mask)" />
      <circle cx="260" cy="220" r="210" fill="url(#hero-glow)" />
      <ellipse cx="260" cy="220" rx="230" ry="150" stroke="#ffffff" strokeOpacity="0.06" strokeDasharray="2 8" />
      <ellipse cx="260" cy="220" rx="170" ry="110" stroke="#a78bfa" strokeOpacity="0.1" />

      {/* Connectors */}
      <g stroke="#a78bfa" strokeOpacity="0.55" strokeWidth="1.5" strokeLinecap="round">
        <path className="anim-dash" d="M352 150 C 372 150, 368 112, 392 112" />
        <path className="anim-dash" d="M250 282 C 250 310, 270 300, 296 300" />
        <path className="anim-dash" d="M186 352 C 230 352, 250 336, 296 330" />
      </g>
      <g fill="#c4b5fd">
        <circle cx="352" cy="150" r="3" />
        <circle cx="392" cy="112" r="3" />
        <circle cx="250" cy="282" r="3" />
        <circle cx="296" cy="300" r="3" />
        <circle cx="296" cy="330" r="3" />
      </g>

      {/* Editor window */}
      <g>
        <rect x="64" y="86" width="288" height="196" rx="18" fill="url(#hero-panel-solid)" />
        <rect x="64.5" y="86.5" width="287" height="195" rx="17.5" stroke="url(#hero-border)" />
        <path d="M64 120h288" stroke="#ffffff" strokeOpacity="0.06" />
        <circle cx="86" cy="103" r="4.5" fill="#ffffff" fillOpacity="0.14" />
        <circle cx="101" cy="103" r="4.5" fill="#ffffff" fillOpacity="0.14" />
        <circle cx="116" cy="103" r="4.5" fill="#a78bfa" fillOpacity="0.7" />
        <text x="136" y="107" className="font-mono" fontSize="10" fill="#a1a1aa">
          api/payments.js
        </text>

        <g fill="#52525b" fillOpacity="0.55">
          <text x="80" y="146" className="font-mono" fontSize="9">1</text>
          <text x="80" y="164" className="font-mono" fontSize="9">2</text>
          <text x="80" y="182" className="font-mono" fontSize="9">3</text>
          <text x="80" y="200" className="font-mono" fontSize="9">4</text>
          <text x="80" y="218" className="font-mono" fontSize="9">5</text>
          <text x="80" y="236" className="font-mono" fontSize="9">6</text>
          <text x="80" y="254" className="font-mono" fontSize="9">7</text>
        </g>

        <rect x="98" y="139" width="40" height="7" rx="3.5" fill="#a78bfa" />
        <rect x="144" y="139" width="76" height="7" rx="3.5" fill="#ffffff" fillOpacity="0.16" />
        <rect x="226" y="139" width="30" height="7" rx="3.5" fill="#f0abfc" fillOpacity="0.75" />

        <rect x="112" y="157" width="52" height="7" rx="3.5" fill="#f0abfc" fillOpacity="0.75" />
        <rect x="170" y="157" width="104" height="7" rx="3.5" fill="#ffffff" fillOpacity="0.16" />

        <rect x="112" y="175" width="28" height="7" rx="3.5" fill="#818cf8" />
        <rect x="146" y="175" width="64" height="7" rx="3.5" fill="#c4b5fd" fillOpacity="0.8" />

        <rect x="126" y="193" width="120" height="7" rx="3.5" fill="#ffffff" fillOpacity="0.16" />
        <rect x="252" y="193" width="40" height="7" rx="3.5" fill="#818cf8" fillOpacity="0.8" />

        <rect x="126" y="211" width="46" height="7" rx="3.5" fill="#a78bfa" />
        <rect x="178" y="211" width="58" height="7" rx="3.5" fill="#ffffff" fillOpacity="0.16" />
        <rect className="anim-pulse" x="242" y="208" width="2" height="13" rx="1" fill="#c4b5fd" />

        <rect x="112" y="229" width="22" height="7" rx="3.5" fill="#ffffff" fillOpacity="0.16" />
        <rect x="98" y="247" width="14" height="7" rx="3.5" fill="#ffffff" fillOpacity="0.16" />
      </g>

      {/* Database node */}
      <g className="anim-float">
        <rect x="392" y="62" width="104" height="100" rx="18" fill="url(#hero-panel-solid)" />
        <rect x="392.5" y="62.5" width="103" height="99" rx="17.5" stroke="url(#hero-border)" />
        <g stroke="url(#hero-accent)" strokeWidth="2">
          <ellipse cx="444" cy="88" rx="20" ry="6.5" />
          <path d="M424 88v26c0 3.6 9 6.5 20 6.5s20-2.9 20-6.5V88" />
          <path d="M424 101c0 3.6 9 6.5 20 6.5s20-2.9 20-6.5" />
        </g>
        <text x="444" y="146" textAnchor="middle" className="font-mono" fontSize="9" fill="#a1a1aa">
          users · orders
        </text>
      </g>

      {/* Webhook event card */}
      <g className="anim-float-delayed">
        <rect x="296" y="248" width="196" height="128" rx="18" fill="url(#hero-panel-solid)" />
        <rect x="296.5" y="248.5" width="195" height="127" rx="17.5" stroke="url(#hero-border)" />
        <rect x="312" y="264" width="42" height="18" rx="9" fill="#8b5cf6" fillOpacity="0.22" />
        <text x="333" y="276.5" textAnchor="middle" className="font-mono" fontSize="9" fontWeight="500" fill="#ddd6fe">
          POST
        </text>
        <text x="362" y="277" className="font-mono" fontSize="10" fill="#e4e4e7">
          /webhooks/payment
        </text>
        <circle className="anim-pulse" cx="317" cy="300" r="3.5" fill="#a78bfa" />
        <text x="327" y="303.5" className="font-mono" fontSize="9" fill="#a1a1aa">
          event received · verified
        </text>
        <path d="M312 356 L336 344 L356 349 L378 332 L400 338 L424 322 L448 328 L476 314 V362 H312 Z" fill="url(#hero-area)" />
        <path
          d="M312 356 L336 344 L356 349 L378 332 L400 338 L424 322 L448 328 L476 314"
          stroke="url(#hero-accent)"
          strokeWidth="1.75"
          strokeLinejoin="round"
          strokeLinecap="round"
        />
      </g>

      {/* Auth chip */}
      <g>
        <rect x="34" y="324" width="152" height="56" rx="16" fill="url(#hero-panel-solid)" />
        <rect x="34.5" y="324.5" width="151" height="55" rx="15.5" stroke="url(#hero-border)" />
        <rect x="48" y="338" width="28" height="28" rx="9" fill="#8b5cf6" fillOpacity="0.18" />
        <g stroke="#c4b5fd" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
          <rect x="55" y="350" width="14" height="10" rx="2" />
          <path d="M58 350v-3a4 4 0 0 1 8 0v3" />
        </g>
        <text x="86" y="349" className="font-mono" fontSize="9" fill="#a1a1aa">
          auth
        </text>
        <text x="86" y="363" className="font-mono" fontSize="10" fill="#e4e4e7">
          token verified
        </text>
      </g>

      {/* Sparkles */}
      <g fill="#c4b5fd">
        <path className="anim-pulse" d="M42 70l2.4 6.6L51 79l-6.6 2.4L42 88l-2.4-6.6L33 79l6.6-2.4z" />
        <path d="M486 214l1.6 4.4 4.4 1.6-4.4 1.6-1.6 4.4-1.6-4.4-4.4-1.6 4.4-1.6z" fillOpacity="0.6" />
        <circle cx="228" cy="40" r="2" fillOpacity="0.5" />
        <circle cx="30" cy="232" r="1.6" fillOpacity="0.4" />
      </g>
    </svg>
  )
}
