import styles from "./MovingBusScene.module.css";

const G = {
  body: "mbs-body",
  bodyShade: "mbs-body-shade",
  glass: "mbs-glass",
  windshield: "mbs-windshield",
  stripe: "mbs-stripe",
  headlamp: "mbs-headlamp",
  wheelGrad: "mbs-wheel",
} as const;

const routeStops = [
  { label: "Home pickup", left: "16%", delay: "0s" },
  { label: "Clinic visit", left: "48%", delay: "0.45s" },
  { label: "Center dropoff", left: "78%", delay: "0.9s" },
] as const;

export default function MovingBusScene() {
  return (
    <div className="rounded-[1.75rem] border border-slate-200/90 bg-white p-4 shadow-[0_22px_46px_-26px_rgba(7,61,122,0.42)] md:p-6">
      <div className="mb-5 grid gap-3 sm:grid-cols-3">
        {routeStops.map((stop, index) => (
          <article
            key={stop.label}
            className="rounded-xl border border-slate-200 bg-slate-50/80 px-3.5 py-3 text-center shadow-sm"
          >
            <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[var(--brand-gold)]">
              Stop {index + 1}
            </p>
            <p className="mt-1 text-sm font-semibold text-slate-800">{stop.label}</p>
          </article>
        ))}
      </div>

      <div className={styles.scene} aria-hidden>
        <div className={styles.route} />

        {routeStops.map((stop) => (
          <div
            key={stop.label}
            className={styles.stop}
            style={{ left: stop.left, ["--delay" as string]: stop.delay }}
          >
            <span className={styles.stopPin} />
            <span className={styles.stopLabel}>{stop.label}</span>
          </div>
        ))}

        <div className={styles.cityBand} />

        <div className={styles.carWrap}>
          <div className={styles.carShadow} />
          <div className={styles.car}>

            {/*
              ── CAR SVG ──
              viewBox: 280 wide × 100 tall
              Car sits in ~y 28–92, wheels at y=85 r=14
              Front faces RIGHT (direction of travel)
            */}
            <svg
              className={styles.carSvg}
              viewBox="0 0 280 100"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden
            >
              <defs>
                {/* Main body gradient — white top, light blue-grey bottom */}
                <linearGradient id={G.body} x1="140" y1="28" x2="140" y2="82" gradientUnits="userSpaceOnUse">
                  <stop offset="0" stopColor="#ffffff" />
                  <stop offset="0.5" stopColor="#eef3fb" />
                  <stop offset="1" stopColor="#d8e6f4" />
                </linearGradient>

                {/* Underbody shade */}
                <linearGradient id={G.bodyShade} x1="140" y1="70" x2="140" y2="86" gradientUnits="userSpaceOnUse">
                  <stop offset="0" stopColor="#c5d8ee" />
                  <stop offset="1" stopColor="#9ab8d8" />
                </linearGradient>

                {/* Side windows */}
                <linearGradient id={G.glass} x1="80" y1="34" x2="80" y2="60" gradientUnits="userSpaceOnUse">
                  <stop offset="0" stopColor="#d4ecff" />
                  <stop offset="0.6" stopColor="#a8d4f0" />
                  <stop offset="1" stopColor="#88bde4" />
                </linearGradient>

                {/* Windshield */}
                <linearGradient id={G.windshield} x1="210" y1="34" x2="230" y2="60" gradientUnits="userSpaceOnUse">
                  <stop offset="0" stopColor="#cce5ff" stopOpacity="0.9" />
                  <stop offset="1" stopColor="#8bbfde" stopOpacity="0.85" />
                </linearGradient>

                {/* Brand stripe */}
                <linearGradient id={G.stripe} x1="10" y1="0" x2="270" y2="0" gradientUnits="userSpaceOnUse">
                  <stop offset="0" stopColor="#073d7a" />
                  <stop offset="0.55" stopColor="#0a4a8f" />
                  <stop offset="1" stopColor="#d5664b" />
                </linearGradient>

                {/* Headlamp glow */}
                <radialGradient id={G.headlamp} cx="50%" cy="50%" r="50%">
                  <stop offset="0" stopColor="#fff9c0" />
                  <stop offset="0.6" stopColor="#ffe97a" />
                  <stop offset="1" stopColor="#f5c842" stopOpacity="0.6" />
                </radialGradient>

                {/* Wheel */}
                <radialGradient id={G.wheelGrad} cx="50%" cy="50%" r="50%">
                  <stop offset="0" stopColor="#8aa0b8" />
                  <stop offset="0.55" stopColor="#3a4f6a" />
                  <stop offset="1" stopColor="#1a2d45" />
                </radialGradient>
              </defs>

              {/*
                ── BODY ──
                Sedan shape:
                - Flat floor from x=18 to x=262 at y=82
                - Rear bumper curves up from x=18
                - Front bumper slopes at x=262
                - Roofline: rear pillar ~x=80, peak ~x=130, front pillar ~x=200
              */}

              {/* ── Underbody / sill ── */}
              <path
                d={`
                  M 42 82
                  L 228 82
                  C 242 82 255 78 262 72
                  L 264 68
                  L 264 76
                  C 260 82 252 86 242 86
                  L 228 86
                  C 220 90 206 94 192 92
                  C 180 90 174 86 168 86
                  L 112 86
                  C 104 90 90 94 76 92
                  C 64 90 58 86 52 86
                  L 42 86
                  C 30 86 18 82 16 76
                  L 16 68
                  L 18 72
                  C 24 78 34 82 42 82
                  Z
                `}
                fill={`url(#${G.bodyShade})`}
              />

              {/* ── Main body shell ── */}
              <path
                d={`
                  M 18 72
                  L 18 58
                  C 20 52 26 46 34 42
                  L 56 32
                  C 64 28 76 28 86 30
                  L 90 30

                  L 90 30
                  C 96 28 100 28 108 28
                  L 180 28
                  C 192 28 200 30 206 34

                  L 228 44
                  C 244 50 256 58 262 68
                  L 264 72

                  L 228 72
                  C 220 78 208 82 194 82
                  C 180 82 170 76 166 72
                  L 114 72
                  C 108 78 96 82 82 82
                  C 68 82 58 76 54 72
                  L 18 72
                  Z
                `}
                fill={`url(#${G.body})`}
                stroke="#073d7a"
                strokeWidth="1.8"
                strokeLinejoin="round"
              />

              {/* ── Roof ── */}
              <path
                d={`
                  M 86 30
                  C 90 28 96 26 106 26
                  L 180 26
                  C 192 26 200 28 206 34
                  L 86 34
                  Z
                `}
                fill="white"
                stroke="#073d7a"
                strokeWidth="1.2"
                strokeLinejoin="round"
              />

              {/* ── Rear window (left of center) ── */}
              <path
                d={`
                  M 56 32
                  C 60 30 68 28 80 30
                  L 86 30
                  L 86 58
                  L 56 58
                  C 50 58 46 54 46 50
                  L 46 42
                  C 46 38 50 34 56 32
                  Z
                `}
                fill={`url(#${G.glass})`}
                stroke="rgba(7,61,122,0.35)"
                strokeWidth="1.2"
              />

              {/* ── Front door window ── */}
              <path
                d={`
                  M 90 30
                  L 162 30
                  L 162 58
                  L 90 58
                  Z
                `}
                fill={`url(#${G.glass})`}
                stroke="rgba(7,61,122,0.35)"
                strokeWidth="1.2"
                rx="2"
              />

              {/* ── Windshield ── */}
              <path
                d={`
                  M 166 32
                  C 178 30 192 30 204 34
                  L 224 44
                  C 234 49 242 56 246 64
                  L 166 64
                  Z
                `}
                fill={`url(#${G.windshield})`}
                stroke="rgba(7,61,122,0.3)"
                strokeWidth="1.2"
              />

              {/* ── Door line (vertical) ── */}
              <line
                x1="88" y1="30" x2="88" y2="72"
                stroke="#073d7a"
                strokeWidth="1.2"
                strokeOpacity="0.4"
              />
              <line
                x1="164" y1="30" x2="164" y2="72"
                stroke="#073d7a"
                strokeWidth="1.2"
                strokeOpacity="0.4"
              />

              {/* ── Door handle (rear) ── */}
              <rect
                x="108" y="53" width="16" height="4" rx="2"
                fill="white"
                stroke="rgba(7,61,122,0.45)"
                strokeWidth="1"
              />

              {/* ── Door handle (front) ── */}
              <rect
                x="136" y="53" width="16" height="4" rx="2"
                fill="white"
                stroke="rgba(7,61,122,0.45)"
                strokeWidth="1"
              />

              {/* ── Brand stripe ── */}
              <path
                d="M 20 66 C 100 60 180 60 262 66"
                stroke={`url(#${G.stripe})`}
                strokeWidth="3"
                strokeLinecap="round"
              />

              {/* ── Rear tail light ── */}
              <rect
                x="18" y="56" width="8" height="12" rx="2"
                fill="#e03030"
                stroke="rgba(100,0,0,0.3)"
                strokeWidth="0.8"
              />
              <rect
                x="18" y="62" width="8" height="6" rx="1.5"
                fill="#ff6b6b"
                opacity="0.7"
              />

              {/* ── Front headlamp ── */}
              <ellipse cx="257" cy="60" rx="5" ry="7" fill={`url(#${G.headlamp})`} />
              <ellipse cx="257" cy="60" rx="5" ry="7"
                stroke="rgba(200,160,0,0.5)" strokeWidth="0.8" fill="none"
              />

              {/* ── Front bumper detail ── */}
              <path
                d="M 254 72 C 258 70 264 70 266 72"
                stroke="#073d7a"
                strokeWidth="2"
                strokeLinecap="round"
                opacity="0.5"
              />

              {/* ── Side mirror ── */}
              <path
                d="M 204 38 L 214 36 L 216 40 L 204 42 Z"
                fill="#d8e6f4"
                stroke="#073d7a"
                strokeWidth="1"
              />

              {/* ── Wheels ── cut-outs for arch clearance ── */}
              {/* Rear wheel arch */}
              <circle cx="76" cy="82" r="18" fill="white" stroke="#073d7a" strokeWidth="1.8" />
              {/* Front wheel arch */}
              <circle cx="194" cy="82" r="18" fill="white" stroke="#073d7a" strokeWidth="1.8" />

              {/* Rear tyre */}
              <circle cx="76" cy="82" r="16" fill="#1a2d45" />
              <circle cx="76" cy="82" r="10" fill={`url(#${G.wheelGrad})`} />
              {/* Rim spokes */}
              {[0, 60, 120, 180, 240, 300].map((deg) => (
                <line
                  key={deg}
                  x1={76 + 4 * Math.cos((deg * Math.PI) / 180)}
                  y1={82 + 4 * Math.sin((deg * Math.PI) / 180)}
                  x2={76 + 9 * Math.cos((deg * Math.PI) / 180)}
                  y2={82 + 9 * Math.sin((deg * Math.PI) / 180)}
                  stroke="#8aa0b8"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                />
              ))}
              <circle cx="76" cy="82" r="3" fill="#c0cfe0" />

              {/* Front tyre */}
              <circle cx="194" cy="82" r="16" fill="#1a2d45" />
              <circle cx="194" cy="82" r="10" fill={`url(#${G.wheelGrad})`} />
              {[0, 60, 120, 180, 240, 300].map((deg) => (
                <line
                  key={deg}
                  x1={194 + 4 * Math.cos((deg * Math.PI) / 180)}
                  y1={82 + 4 * Math.sin((deg * Math.PI) / 180)}
                  x2={194 + 9 * Math.cos((deg * Math.PI) / 180)}
                  y2={82 + 9 * Math.sin((deg * Math.PI) / 180)}
                  stroke="#8aa0b8"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                />
              ))}
              <circle cx="194" cy="82" r="3" fill="#c0cfe0" />

              {/* ── Hubcap highlight ── */}
              <circle cx="76" cy="82" r="16" fill="none" stroke="rgba(255,255,255,0.08)" strokeWidth="1" />
              <circle cx="194" cy="82" r="16" fill="none" stroke="rgba(255,255,255,0.08)" strokeWidth="1" />
            </svg>

            <span className={styles.carText}>Hayat Ride</span>
          </div>
        </div>

        <div className={styles.road}>
          <div className={styles.lane} />
        </div>
      </div>
    </div>
  );
}