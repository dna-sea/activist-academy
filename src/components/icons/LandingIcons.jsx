/**
 * Landing page icon set for The Activist Academy.
 *
 * Style: geometric sigil icons — bold strokes, symbolic shapes,
 * consistent 24×24 viewBox, currentColor fill for easy theming.
 */

const defaults = { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 64 64', fill: 'none' };

// ─── House Icons ───────────────────────────────────────────

/** House of Vision — an eye with a compass-star iris */
export function VisionIcon({ size = 64, className = '' }) {
  return (
    <svg {...defaults} width={size} height={size} className={className}>
      {/* Outer eye shape */}
      <path
        d="M6 32C6 32 18 14 32 14C46 14 58 32 58 32C58 32 46 50 32 50C18 50 6 32 6 32Z"
        stroke="#6B3FA0" strokeWidth="2.5" strokeLinejoin="round"
      />
      {/* Iris circle */}
      <circle cx="32" cy="32" r="10" stroke="#6B3FA0" strokeWidth="2" />
      {/* Compass star in iris */}
      <path
        d="M32 22L34 29H41L35.5 33.5L37.5 41L32 37L26.5 41L28.5 33.5L23 29H30L32 22Z"
        fill="#6B3FA0" opacity="0.9"
      />
      {/* Radiating lines */}
      <line x1="32" y1="6" x2="32" y2="12" stroke="#6B3FA0" strokeWidth="1.5" strokeLinecap="round" opacity="0.5" />
      <line x1="32" y1="52" x2="32" y2="58" stroke="#6B3FA0" strokeWidth="1.5" strokeLinecap="round" opacity="0.5" />
      <line x1="6" y1="32" x2="10" y2="32" stroke="#6B3FA0" strokeWidth="1.5" strokeLinecap="round" opacity="0.5" />
      <line x1="54" y1="32" x2="58" y2="32" stroke="#6B3FA0" strokeWidth="1.5" strokeLinecap="round" opacity="0.5" />
    </svg>
  );
}

/** House of Connection — two figures reaching across a bridge arc */
export function ConnectionIcon({ size = 64, className = '' }) {
  return (
    <svg {...defaults} width={size} height={size} className={className}>
      {/* Bridge arc */}
      <path
        d="M8 44C8 44 20 20 32 20C44 20 56 44 56 44"
        stroke="#2D8659" strokeWidth="2.5" strokeLinecap="round" fill="none"
      />
      {/* Left figure */}
      <circle cx="16" cy="36" r="4" fill="#2D8659" opacity="0.8" />
      <path d="M12 44L16 40L20 44" stroke="#2D8659" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      {/* Right figure */}
      <circle cx="48" cy="36" r="4" fill="#2D8659" opacity="0.8" />
      <path d="M44 44L48 40L52 44" stroke="#2D8659" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      {/* Reaching hands — lines extending toward center */}
      <path d="M22 34L28 30" stroke="#2D8659" strokeWidth="2" strokeLinecap="round" />
      <path d="M42 34L36 30" stroke="#2D8659" strokeWidth="2" strokeLinecap="round" />
      {/* Connection spark */}
      <circle cx="32" cy="28" r="2" fill="#2D8659" />
      <circle cx="32" cy="28" r="5" stroke="#2D8659" strokeWidth="1" opacity="0.3" />
    </svg>
  );
}

/** House of Action — raised fist with energy bolts */
export function ActionIcon({ size = 64, className = '' }) {
  return (
    <svg {...defaults} width={size} height={size} className={className}>
      {/* Fist shape */}
      <path
        d="M24 38V18C24 16 26 14 28 14H36C38 14 40 16 40 18V28L42 26C43.5 24.5 46 25 46 27V34C46 42 40 50 32 50C24 50 20 44 20 38V34L24 38Z"
        stroke="#C4652A" strokeWidth="2.5" strokeLinejoin="round" fill="none"
      />
      {/* Finger lines */}
      <line x1="28" y1="18" x2="28" y2="28" stroke="#C4652A" strokeWidth="1.5" strokeLinecap="round" />
      <line x1="32" y1="16" x2="32" y2="28" stroke="#C4652A" strokeWidth="1.5" strokeLinecap="round" />
      <line x1="36" y1="18" x2="36" y2="28" stroke="#C4652A" strokeWidth="1.5" strokeLinecap="round" />
      {/* Energy bolts */}
      <path d="M14 20L18 24L14 28" stroke="#C4652A" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" opacity="0.6" />
      <path d="M50 20L46 24L50 28" stroke="#C4652A" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" opacity="0.6" />
      {/* Top energy */}
      <path d="M28 8L30 12L32 8L34 12L36 8" stroke="#C4652A" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" opacity="0.5" />
    </svg>
  );
}

/** House of Infrastructure — interlocking arch with gear teeth */
export function InfrastructureIcon({ size = 64, className = '' }) {
  return (
    <svg {...defaults} width={size} height={size} className={className}>
      {/* Main arch */}
      <path
        d="M12 52V32C12 20.954 20.954 12 32 12C43.046 12 52 20.954 52 32V52"
        stroke="#3A6B8C" strokeWidth="2.5" strokeLinecap="round" fill="none"
      />
      {/* Keystone */}
      <rect x="28" y="10" width="8" height="8" rx="1" stroke="#3A6B8C" strokeWidth="2" fill="none" />
      {/* Left pillar */}
      <rect x="10" y="40" width="8" height="14" rx="1" stroke="#3A6B8C" strokeWidth="2" fill="none" />
      {/* Right pillar */}
      <rect x="46" y="40" width="8" height="14" rx="1" stroke="#3A6B8C" strokeWidth="2" fill="none" />
      {/* Inner support arches */}
      <path d="M20 52V36C20 29.373 25.373 24 32 24C38.627 24 44 29.373 44 36V52"
        stroke="#3A6B8C" strokeWidth="1.5" strokeLinecap="round" fill="none" opacity="0.5" />
      {/* Gear teeth on keystone */}
      <line x1="30" y1="8" x2="30" y2="6" stroke="#3A6B8C" strokeWidth="1.5" strokeLinecap="round" opacity="0.6" />
      <line x1="34" y1="8" x2="34" y2="6" stroke="#3A6B8C" strokeWidth="1.5" strokeLinecap="round" opacity="0.6" />
      {/* Foundation line */}
      <line x1="6" y1="54" x2="58" y2="54" stroke="#3A6B8C" strokeWidth="2" strokeLinecap="round" opacity="0.4" />
    </svg>
  );
}

// ─── Discover Section Icons ────────────────────────────────

/** Your Archetype — a diamond-shaped character token with a figure silhouette */
export function ArchetypeIcon({ size = 64, className = '' }) {
  return (
    <svg {...defaults} width={size} height={size} className={className}>
      {/* Diamond frame */}
      <path
        d="M32 6L54 32L32 58L10 32L32 6Z"
        stroke="#D4A843" strokeWidth="2.5" strokeLinejoin="round" fill="none"
      />
      {/* Inner diamond */}
      <path
        d="M32 16L44 32L32 48L20 32L32 16Z"
        stroke="#D4A843" strokeWidth="1.5" strokeLinejoin="round" fill="none" opacity="0.4"
      />
      {/* Figure silhouette */}
      <circle cx="32" cy="26" r="4" fill="#D4A843" opacity="0.8" />
      <path
        d="M26 40C26 34 28 32 32 32C36 32 38 34 38 40"
        stroke="#D4A843" strokeWidth="2" strokeLinecap="round" fill="none"
      />
      {/* Crown accent */}
      <path d="M27 22L29 20L32 22L35 20L37 22" stroke="#D4A843" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" opacity="0.5" />
    </svg>
  );
}

/** Your House — a shield with four quadrants */
export function HouseIcon({ size = 64, className = '' }) {
  return (
    <svg {...defaults} width={size} height={size} className={className}>
      {/* Shield shape */}
      <path
        d="M32 8L52 16V36C52 46 42 54 32 58C22 54 12 46 12 36V16L32 8Z"
        stroke="#D4A843" strokeWidth="2.5" strokeLinejoin="round" fill="none"
      />
      {/* Quadrant dividers */}
      <line x1="32" y1="16" x2="32" y2="50" stroke="#D4A843" strokeWidth="1.5" opacity="0.4" />
      <line x1="16" y1="32" x2="48" y2="32" stroke="#D4A843" strokeWidth="1.5" opacity="0.4" />
      {/* Quadrant symbols — small dots representing the four houses */}
      <circle cx="24" cy="24" r="3" fill="#6B3FA0" opacity="0.7" />
      <circle cx="40" cy="24" r="3" fill="#2D8659" opacity="0.7" />
      <circle cx="24" cy="40" r="3" fill="#C4652A" opacity="0.7" />
      <circle cx="40" cy="40" r="3" fill="#3A6B8C" opacity="0.7" />
    </svg>
  );
}

/** Your Learning Path — an open book with a winding path rising from it */
export function LearningPathIcon({ size = 64, className = '' }) {
  return (
    <svg {...defaults} width={size} height={size} className={className}>
      {/* Open book */}
      <path d="M8 44L32 50L56 44" stroke="#D4A843" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
      <path d="M8 44V22L32 28V50" stroke="#D4A843" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none" />
      <path d="M56 44V22L32 28V50" stroke="#D4A843" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none" />
      {/* Winding path rising from book */}
      <path
        d="M32 28C32 28 38 24 36 20C34 16 28 16 28 12C28 8 34 6 36 8"
        stroke="#D4A843" strokeWidth="2" strokeLinecap="round" fill="none" opacity="0.7"
      />
      {/* Star at top of path */}
      <circle cx="37" cy="7" r="2" fill="#D4A843" opacity="0.8" />
      {/* Page lines */}
      <line x1="14" y1="30" x2="28" y2="34" stroke="#D4A843" strokeWidth="1" opacity="0.3" />
      <line x1="14" y1="34" x2="28" y2="38" stroke="#D4A843" strokeWidth="1" opacity="0.3" />
      <line x1="36" y1="34" x2="50" y2="30" stroke="#D4A843" strokeWidth="1" opacity="0.3" />
      <line x1="36" y1="38" x2="50" y2="34" stroke="#D4A843" strokeWidth="1" opacity="0.3" />
    </svg>
  );
}

// ─── Hero Icon ─────────────────────────────────────────────

/** Hero bolt — a lightning bolt inside a rounded square, the Discovery Engine mark */
export function DiscoveryBoltIcon({ size = 80, className = '' }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 80 80" fill="none" width={size} height={size} className={className}>
      {/* Rounded square background */}
      <rect x="4" y="4" width="72" height="72" rx="16" fill="#1B2A4A" stroke="#D4A843" strokeWidth="2" opacity="0.6" />
      {/* Lightning bolt */}
      <path
        d="M44 12L28 40H38L34 68L56 36H44L48 12Z"
        fill="url(#bolt-gradient)" stroke="#D4A843" strokeWidth="1.5" strokeLinejoin="round"
      />
      {/* Glow ring */}
      <circle cx="40" cy="40" r="28" stroke="#D4A843" strokeWidth="0.5" opacity="0.2" />
      <defs>
        <linearGradient id="bolt-gradient" x1="34" y1="12" x2="46" y2="68" gradientUnits="userSpaceOnUse">
          <stop stopColor="#D4A843" />
          <stop offset="1" stopColor="#2A7F8E" />
        </linearGradient>
      </defs>
    </svg>
  );
}
