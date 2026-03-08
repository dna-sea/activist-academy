/**
 * GJLA (Gender Justice League Action) brand logo components.
 *
 * These use the official GJLA brand colors from the Style Guide v1.0:
 *   Navy: #1B2A4A | Gold: #E8A020 | Teal (programs): #1D7A6E
 *
 * The Triple Chevron Shield is the GJLA icon mark — a pentagon/shield
 * containing three forward-facing chevrons at progressive opacities
 * (30% → 60% → 100%) representing emergence, mobilization,
 * and decisive action.
 */

// ─── GJLA Triple Chevron Shield Icon ─────────────────────

/**
 * The standalone GJLA icon mark.
 * Use for small-format applications: branding footers, favicons, attribution.
 */
export function GJLAShieldIcon({ size = 40, variant = 'navy', className = '' }) {
  const shieldFill = variant === 'white' ? '#FFFFFF' : '#1B2A4A';

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 120 120"
      width={size}
      height={size}
      fill="none"
      className={className}
    >
      <path
        d="M30 28 L90 28 L90 70 L60 94 L30 70 Z"
        fill={shieldFill}
        stroke="#E8A020"
        strokeWidth="2.5"
        strokeLinejoin="round"
      />
      {/* Chevron 1 — Emergence (30% opacity) */}
      <path
        d="M42 45 L54 57 L42 69"
        stroke="#E8A020"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
        opacity="0.3"
      />
      {/* Chevron 2 — Mobilization (60% opacity) */}
      <path
        d="M54 45 L66 57 L54 69"
        stroke="#E8A020"
        strokeWidth="3.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
        opacity="0.6"
      />
      {/* Chevron 3 — Decisive Action (100% opacity) */}
      <path
        d="M66 45 L78 57 L66 69"
        stroke="#E8A020"
        strokeWidth="4"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
    </svg>
  );
}

// ─── The Activist Academy Program Logo ───────────────────

/**
 * Full program logo lockup for The Activist Academy.
 *
 * Horizontal layout: GJLA shield on the left, text stack on the right.
 * Uses Teal (#1D7A6E) as the program accent color per GJLA brand guidelines.
 * Georgia (serif) for the program name, system sans-serif for the descriptor.
 */
export function ActivistAcademyLogo({ height = 48, variant = 'light', className = '' }) {
  const isLight = variant === 'light';
  const shieldVariant = isLight ? 'navy' : 'white';
  const programColor = '#1D7A6E';           // GJLA teal — program accent
  const descriptorColor = isLight ? '#2D2D2D' : 'rgba(255,255,255,0.7)';
  const descriptorOpacity = isLight ? 0.55 : 0.7;

  // Scale factor: base design is 48px tall
  const scale = height / 48;

  return (
    <div
      className={`inline-flex items-center ${className}`}
      style={{ gap: 10 * scale }}
    >
      <GJLAShieldIcon size={32 * scale} variant={shieldVariant} />
      <div style={{ lineHeight: 1.3 }}>
        <div
          style={{
            fontFamily: 'Georgia, "Times New Roman", serif',
            fontWeight: 700,
            fontSize: 14 * scale,
            color: programColor,
            letterSpacing: '0.02em',
          }}
        >
          The Activist Academy
        </div>
        <div
          style={{
            fontFamily: 'Calibri, "Segoe UI", system-ui, sans-serif',
            fontSize: 9.5 * scale,
            color: descriptorColor,
            opacity: descriptorOpacity,
            marginTop: 1 * scale,
          }}
        >
          A program of Gender Justice League Action
        </div>
      </div>
    </div>
  );
}
