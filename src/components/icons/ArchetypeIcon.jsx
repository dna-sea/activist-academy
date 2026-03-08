import { HOUSE_COLORS } from '../../utils/constants';

// Each archetype gets a unique character SVG with distinct personality traits
const ARCHETYPE_ICONS = {
  // HOUSE OF VISION (purple #6B3FA0)
  visionary: ({ color }) => (
    <svg viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Head */}
      <circle cx="60" cy="42" r="22" fill={color} opacity="0.15" />
      <circle cx="60" cy="42" r="20" fill="#FFF5E6" stroke={color} strokeWidth="2" />
      {/* Eyes looking up */}
      <ellipse cx="52" cy="39" rx="3.5" ry="4" fill={color} />
      <ellipse cx="68" cy="39" rx="3.5" ry="4" fill={color} />
      <circle cx="53" cy="37.5" r="1.2" fill="white" />
      <circle cx="69" cy="37.5" r="1.2" fill="white" />
      {/* Slight smile */}
      <path d="M54 49 Q60 53 66 49" stroke={color} strokeWidth="1.8" strokeLinecap="round" fill="none" />
      {/* Stars around head (visionary sees the future) */}
      <path d="M88 28 l2 4 4 1 -3 3 0.5 4.5 -3.5-2 -3.5 2 0.5-4.5 -3-3 4-1z" fill={color} opacity="0.7" />
      <path d="M30 32 l1.5 3 3 0.7 -2 2 0.4 3.3 -2.9-1.5 -2.9 1.5 0.4-3.3 -2-2 3-0.7z" fill={color} opacity="0.5" />
      <path d="M78 14 l1 2.5 2.5 0.5 -2 1.5 0.3 2.5 -1.8-1 -1.8 1 0.3-2.5 -2-1.5 2.5-0.5z" fill={color} opacity="0.4" />
      {/* Body - flowing cape */}
      <path d="M40 62 Q42 58 60 58 Q78 58 80 62 L84 100 Q60 108 36 100z" fill={color} opacity="0.85" />
      {/* Cape flowing detail */}
      <path d="M36 100 Q30 85 32 70 L40 62" fill={color} opacity="0.6" />
      <path d="M84 100 Q90 85 88 70 L80 62" fill={color} opacity="0.6" />
      {/* Inner shirt */}
      <path d="M48 62 Q50 58 60 58 Q70 58 72 62 L74 90 Q60 95 46 90z" fill="white" opacity="0.3" />
      {/* Collar detail */}
      <path d="M50 62 L56 68 L60 62 L64 68 L70 62" stroke="white" strokeWidth="1.5" fill="none" opacity="0.6" />
    </svg>
  ),

  strategist: ({ color }) => (
    <svg viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Head */}
      <circle cx="60" cy="42" r="20" fill="#FFF5E6" stroke={color} strokeWidth="2" />
      {/* Glasses (strategist = analytical) */}
      <circle cx="51" cy="40" r="6" stroke={color} strokeWidth="1.8" fill="none" />
      <circle cx="69" cy="40" r="6" stroke={color} strokeWidth="1.8" fill="none" />
      <line x1="57" y1="40" x2="63" y2="40" stroke={color} strokeWidth="1.8" />
      <line x1="45" y1="40" x2="40" y2="38" stroke={color} strokeWidth="1.5" />
      <line x1="75" y1="40" x2="80" y2="38" stroke={color} strokeWidth="1.5" />
      {/* Eyes behind glasses */}
      <circle cx="51" cy="40" r="2" fill={color} />
      <circle cx="69" cy="40" r="2" fill={color} />
      {/* Slight knowing smile */}
      <path d="M54 50 Q60 52 66 50" stroke={color} strokeWidth="1.5" strokeLinecap="round" fill="none" />
      {/* Chess piece floating above (strategist) */}
      <path d="M92 20 Q92 14 88 14 L88 10 Q92 10 92 6 Q92 10 96 10 L96 14 Q92 14 92 20z" fill={color} opacity="0.5" />
      {/* Body - structured blazer */}
      <path d="M40 62 Q42 58 60 58 Q78 58 80 62 L82 100 Q60 106 38 100z" fill={color} opacity="0.85" />
      {/* Blazer lapels */}
      <path d="M52 62 L56 78 L60 62" fill="white" opacity="0.25" />
      <path d="M68 62 L64 78 L60 62" fill="white" opacity="0.25" />
      {/* Button */}
      <circle cx="60" cy="80" r="2" fill="white" opacity="0.4" />
    </svg>
  ),

  analyst: ({ color }) => (
    <svg viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Head */}
      <circle cx="60" cy="42" r="20" fill="#FFF5E6" stroke={color} strokeWidth="2" />
      {/* Eyes - focused, thinking */}
      <ellipse cx="52" cy="40" rx="3" ry="2.5" fill={color} />
      <ellipse cx="68" cy="40" rx="3" ry="2.5" fill={color} />
      <circle cx="53" cy="39.5" r="1" fill="white" />
      <circle cx="69" cy="39.5" r="1" fill="white" />
      {/* Thoughtful mouth */}
      <path d="M55 49 L65 49" stroke={color} strokeWidth="1.5" strokeLinecap="round" />
      {/* Hair pushed to one side (intellectual look) */}
      <path d="M42 32 Q40 22 55 20 Q70 18 80 28 Q78 22 60 20 Q42 20 40 30z" fill={color} opacity="0.35" />
      {/* Book/document icon floating */}
      <rect x="82" y="16" width="14" height="18" rx="1.5" fill={color} opacity="0.4" />
      <line x1="85" y1="21" x2="93" y2="21" stroke="white" strokeWidth="1" opacity="0.6" />
      <line x1="85" y1="25" x2="93" y2="25" stroke="white" strokeWidth="1" opacity="0.6" />
      <line x1="85" y1="29" x2="90" y2="29" stroke="white" strokeWidth="1" opacity="0.6" />
      {/* Body - turtleneck (intellectual) */}
      <path d="M40 62 Q42 58 60 58 Q78 58 80 62 L82 100 Q60 106 38 100z" fill={color} opacity="0.85" />
      {/* Turtleneck fold */}
      <path d="M48 62 Q60 66 72 62" stroke="white" strokeWidth="1.2" fill="none" opacity="0.3" />
      <path d="M50 65 Q60 68 70 65" stroke="white" strokeWidth="1" fill="none" opacity="0.2" />
    </svg>
  ),

  // HOUSE OF CONNECTION (green #2D8659)
  bridgeBuilder: ({ color }) => (
    <svg viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Head */}
      <circle cx="60" cy="42" r="20" fill="#FFF5E6" stroke={color} strokeWidth="2" />
      {/* Warm, open eyes */}
      <ellipse cx="52" cy="40" rx="3.5" ry="3" fill={color} />
      <ellipse cx="68" cy="40" rx="3.5" ry="3" fill={color} />
      <circle cx="53.2" cy="39" r="1.2" fill="white" />
      <circle cx="69.2" cy="39" r="1.2" fill="white" />
      {/* Big welcoming smile */}
      <path d="M50 48 Q60 56 70 48" stroke={color} strokeWidth="2" strokeLinecap="round" fill="none" />
      {/* Open arms gesture - hands reaching out */}
      <path d="M38 72 Q28 68 22 62" stroke={color} strokeWidth="3" strokeLinecap="round" fill="none" opacity="0.7" />
      <path d="M82 72 Q92 68 98 62" stroke={color} strokeWidth="3" strokeLinecap="round" fill="none" opacity="0.7" />
      {/* Small people silhouettes on each side (bridge-building) */}
      <circle cx="18" cy="56" r="4" fill={color} opacity="0.3" />
      <circle cx="102" cy="56" r="4" fill={color} opacity="0.3" />
      {/* Body */}
      <path d="M40 62 Q42 58 60 58 Q78 58 80 62 L82 100 Q60 106 38 100z" fill={color} opacity="0.85" />
      {/* Hands */}
      <circle cx="20" cy="60" r="3" fill="#FFF5E6" stroke={color} strokeWidth="1.5" />
      <circle cx="100" cy="60" r="3" fill="#FFF5E6" stroke={color} strokeWidth="1.5" />
      {/* Heart on chest */}
      <path d="M56 76 Q56 72 60 72 Q64 72 64 76 Q64 82 60 86 Q56 82 56 76z" fill="white" opacity="0.3" />
    </svg>
  ),

  healer: ({ color }) => (
    <svg viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Soft glow behind head */}
      <circle cx="60" cy="42" r="28" fill={color} opacity="0.08" />
      {/* Head */}
      <circle cx="60" cy="42" r="20" fill="#FFF5E6" stroke={color} strokeWidth="2" />
      {/* Gentle, caring eyes */}
      <path d="M48 39 Q52 36 56 39" stroke={color} strokeWidth="2" strokeLinecap="round" fill="none" />
      <path d="M64 39 Q68 36 72 39" stroke={color} strokeWidth="2" strokeLinecap="round" fill="none" />
      {/* Warm, gentle smile */}
      <path d="M52 48 Q60 54 68 48" stroke={color} strokeWidth="1.8" strokeLinecap="round" fill="none" />
      {/* Healing hands - cupping gesture */}
      <path d="M30 80 Q26 72 32 66 Q36 72 30 80z" fill="#FFF5E6" stroke={color} strokeWidth="1.5" />
      <path d="M90 80 Q94 72 88 66 Q84 72 90 80z" fill="#FFF5E6" stroke={color} strokeWidth="1.5" />
      {/* Healing sparkles */}
      <circle cx="30" cy="70" r="1.5" fill={color} opacity="0.5" />
      <circle cx="90" cy="70" r="1.5" fill={color} opacity="0.5" />
      <circle cx="26" cy="76" r="1" fill={color} opacity="0.3" />
      <circle cx="94" cy="76" r="1" fill={color} opacity="0.3" />
      {/* Body - soft, flowing */}
      <path d="M40 62 Q42 58 60 58 Q78 58 80 62 L84 100 Q60 108 36 100z" fill={color} opacity="0.75" />
      {/* Plant/growth symbol on chest */}
      <path d="M60 70 L60 85" stroke="white" strokeWidth="1.5" opacity="0.4" />
      <path d="M54 78 Q60 72 66 78" stroke="white" strokeWidth="1.5" fill="none" opacity="0.4" />
      <path d="M56 84 Q60 78 64 84" stroke="white" strokeWidth="1.2" fill="none" opacity="0.3" />
    </svg>
  ),

  diplomat: ({ color }) => (
    <svg viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Head */}
      <circle cx="60" cy="42" r="20" fill="#FFF5E6" stroke={color} strokeWidth="2" />
      {/* Composed, confident eyes */}
      <ellipse cx="52" cy="40" rx="3" ry="3" fill={color} />
      <ellipse cx="68" cy="40" rx="3" ry="3" fill={color} />
      <circle cx="53" cy="39" r="1" fill="white" />
      <circle cx="69" cy="39" r="1" fill="white" />
      {/* Diplomatic smile - confident */}
      <path d="M53 49 Q60 52 67 49" stroke={color} strokeWidth="1.8" strokeLinecap="round" fill="none" />
      {/* Handshake icon */}
      <path d="M84 22 Q88 18 92 22 L90 26 Q88 24 86 26z" fill={color} opacity="0.4" />
      <path d="M88 22 Q92 18 96 22 L94 26 Q92 24 90 26z" fill={color} opacity="0.3" />
      {/* Body - formal suit */}
      <path d="M40 62 Q42 58 60 58 Q78 58 80 62 L82 100 Q60 106 38 100z" fill={color} opacity="0.85" />
      {/* Tie */}
      <path d="M58 62 L56 70 L60 88 L64 70 L62 62z" fill="white" opacity="0.3" />
      {/* Suit lapels */}
      <path d="M46 62 L54 75" stroke="white" strokeWidth="1.2" opacity="0.25" />
      <path d="M74 62 L66 75" stroke="white" strokeWidth="1.2" opacity="0.25" />
    </svg>
  ),

  // HOUSE OF ACTION (orange #C4652A)
  organizer: ({ color }) => (
    <svg viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Head */}
      <circle cx="60" cy="42" r="20" fill="#FFF5E6" stroke={color} strokeWidth="2" />
      {/* Determined, energetic eyes */}
      <ellipse cx="52" cy="39" rx="3.5" ry="3.5" fill={color} />
      <ellipse cx="68" cy="39" rx="3.5" ry="3.5" fill={color} />
      <circle cx="53" cy="38" r="1.3" fill="white" />
      <circle cx="69" cy="38" r="1.3" fill="white" />
      {/* Encouraging smile */}
      <path d="M50 48 Q60 55 70 48" stroke={color} strokeWidth="2" strokeLinecap="round" fill="none" />
      {/* Raised fist (organizing power) */}
      <path d="M88 15 L88 30 Q88 34 84 34 L84 18 Q84 14 88 15z" fill={color} opacity="0.5" />
      <rect x="83" y="18" width="6" height="3" rx="1" fill={color} opacity="0.4" />
      <rect x="83" y="22" width="6" height="3" rx="1" fill={color} opacity="0.4" />
      <rect x="83" y="26" width="6" height="3" rx="1" fill={color} opacity="0.4" />
      {/* Body - work shirt rolled sleeves */}
      <path d="M40 62 Q42 58 60 58 Q78 58 80 62 L82 100 Q60 106 38 100z" fill={color} opacity="0.85" />
      {/* Rolled up sleeves */}
      <path d="M38 68 Q36 62 40 62" stroke="white" strokeWidth="1.5" fill="none" opacity="0.3" />
      <path d="M82 68 Q84 62 80 62" stroke="white" strokeWidth="1.5" fill="none" opacity="0.3" />
      {/* Clipboard detail */}
      <rect x="52" y="72" width="16" height="20" rx="2" fill="white" opacity="0.2" />
      <line x1="55" y1="77" x2="65" y2="77" stroke="white" strokeWidth="1" opacity="0.3" />
      <line x1="55" y1="81" x2="65" y2="81" stroke="white" strokeWidth="1" opacity="0.3" />
      <line x1="55" y1="85" x2="62" y2="85" stroke="white" strokeWidth="1" opacity="0.3" />
    </svg>
  ),

  agitator: ({ color }) => (
    <svg viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Energy lines radiating */}
      <line x1="60" y1="8" x2="60" y2="16" stroke={color} strokeWidth="2" opacity="0.3" />
      <line x1="85" y1="18" x2="80" y2="24" stroke={color} strokeWidth="2" opacity="0.3" />
      <line x1="35" y1="18" x2="40" y2="24" stroke={color} strokeWidth="2" opacity="0.3" />
      {/* Head */}
      <circle cx="60" cy="42" r="20" fill="#FFF5E6" stroke={color} strokeWidth="2.5" />
      {/* Intense, passionate eyes */}
      <ellipse cx="52" cy="39" rx="4" ry="3.5" fill={color} />
      <ellipse cx="68" cy="39" rx="4" ry="3.5" fill={color} />
      <circle cx="53" cy="38" r="1.5" fill="white" />
      <circle cx="69" cy="38" r="1.5" fill="white" />
      {/* Bold eyebrows */}
      <path d="M46 34 L56 33" stroke={color} strokeWidth="2.5" strokeLinecap="round" />
      <path d="M64 33 L74 34" stroke={color} strokeWidth="2.5" strokeLinecap="round" />
      {/* Open mouth - shouting/chanting */}
      <ellipse cx="60" cy="50" rx="5" ry="4" fill={color} opacity="0.8" />
      <ellipse cx="60" cy="50" rx="4" ry="3" fill="#FFF5E6" opacity="0.3" />
      {/* Megaphone icon */}
      <path d="M90 26 L100 20 L100 36 L90 30z" fill={color} opacity="0.5" />
      <rect x="86" y="26" width="5" height="4" rx="1" fill={color} opacity="0.5" />
      {/* Body - bold, dynamic */}
      <path d="M38 62 Q42 56 60 58 Q78 56 82 62 L84 100 Q60 108 36 100z" fill={color} opacity="0.9" />
      {/* Bold X or power symbol on chest */}
      <line x1="52" y1="72" x2="68" y2="88" stroke="white" strokeWidth="2.5" opacity="0.3" />
      <line x1="68" y1="72" x2="52" y2="88" stroke="white" strokeWidth="2.5" opacity="0.3" />
    </svg>
  ),

  storyteller: ({ color }) => (
    <svg viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Head */}
      <circle cx="60" cy="42" r="20" fill="#FFF5E6" stroke={color} strokeWidth="2" />
      {/* Expressive, animated eyes */}
      <ellipse cx="52" cy="39" rx="3.5" ry="4" fill={color} />
      <ellipse cx="68" cy="39" rx="3.5" ry="4" fill={color} />
      <circle cx="53.5" cy="38" r="1.5" fill="white" />
      <circle cx="69.5" cy="38" r="1.5" fill="white" />
      {/* Storytelling mouth - mid-speech */}
      <ellipse cx="60" cy="50" rx="6" ry="3" fill={color} opacity="0.6" />
      {/* Speech/story bubbles */}
      <ellipse cx="88" cy="24" rx="10" ry="7" fill={color} stroke={color} strokeWidth="1" opacity="0.25" />
      <circle cx="80" cy="34" r="2" fill={color} opacity="0.2" />
      <circle cx="76" cy="38" r="1.2" fill={color} opacity="0.15" />
      {/* Gestural hand */}
      <path d="M32 70 Q26 62 30 58 L34 64 Q36 60 38 64z" fill="#FFF5E6" stroke={color} strokeWidth="1" />
      {/* Body */}
      <path d="M40 62 Q42 58 60 58 Q78 58 80 62 L82 100 Q60 106 38 100z" fill={color} opacity="0.85" />
      {/* Scarf/expressive accessory */}
      <path d="M46 60 Q60 68 74 60" stroke="white" strokeWidth="2" fill="none" opacity="0.3" />
      <path d="M42 64 Q44 78 40 88" stroke="white" strokeWidth="2" fill="none" opacity="0.2" />
    </svg>
  ),

  // HOUSE OF INFRASTRUCTURE (steel blue #3A6B8C)
  architect: ({ color }) => (
    <svg viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Head */}
      <circle cx="60" cy="42" r="20" fill="#FFF5E6" stroke={color} strokeWidth="2" />
      {/* Precise, focused eyes */}
      <rect x="48" y="37" width="8" height="5" rx="2.5" fill={color} />
      <rect x="64" y="37" width="8" height="5" rx="2.5" fill={color} />
      <circle cx="53" cy="39" r="1.2" fill="white" />
      <circle cx="69" cy="39" r="1.2" fill="white" />
      {/* Slight focused mouth */}
      <path d="M55 49 Q60 51 65 49" stroke={color} strokeWidth="1.5" strokeLinecap="round" fill="none" />
      {/* Blueprint/grid icon */}
      <rect x="82" y="14" width="16" height="16" rx="1" fill={color} stroke={color} strokeWidth="1" opacity="0.3" />
      <line x1="82" y1="22" x2="98" y2="22" stroke={color} strokeWidth="0.8" opacity="0.3" />
      <line x1="90" y1="14" x2="90" y2="30" stroke={color} strokeWidth="0.8" opacity="0.3" />
      {/* Hard hat suggestion on top */}
      <path d="M42 30 Q42 22 60 20 Q78 22 78 30" stroke={color} strokeWidth="2" fill={color} opacity="0.2" />
      {/* Body - structured, professional */}
      <path d="M40 62 Q42 58 60 58 Q78 58 80 62 L82 100 Q60 106 38 100z" fill={color} opacity="0.85" />
      {/* Ruler/tool in pocket */}
      <rect x="66" y="68" width="3" height="24" rx="1" fill="white" opacity="0.25" />
      {/* Structured pocket lines */}
      <rect x="48" y="78" width="12" height="10" rx="1" stroke="white" strokeWidth="1" fill="none" opacity="0.2" />
    </svg>
  ),

  operator: ({ color }) => (
    <svg viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Head */}
      <circle cx="60" cy="42" r="20" fill="#FFF5E6" stroke={color} strokeWidth="2" />
      {/* Alert, efficient eyes */}
      <ellipse cx="52" cy="40" rx="3" ry="3" fill={color} />
      <ellipse cx="68" cy="40" rx="3" ry="3" fill={color} />
      <circle cx="53" cy="39" r="1" fill="white" />
      <circle cx="69" cy="39" r="1" fill="white" />
      {/* Competent smile */}
      <path d="M54 49 Q60 52 66 49" stroke={color} strokeWidth="1.8" strokeLinecap="round" fill="none" />
      {/* Headset (operations) */}
      <path d="M38 40 Q38 24 60 24 Q82 24 82 40" stroke={color} strokeWidth="2.5" fill="none" opacity="0.5" />
      <rect x="34" y="36" width="6" height="10" rx="3" fill={color} opacity="0.5" />
      <rect x="80" y="36" width="6" height="10" rx="3" fill={color} opacity="0.5" />
      {/* Mic */}
      <line x1="37" y1="46" x2="44" y2="52" stroke={color} strokeWidth="1.5" opacity="0.4" />
      <circle cx="45" cy="53" r="2" fill={color} opacity="0.4" />
      {/* Body */}
      <path d="M40 62 Q42 58 60 58 Q78 58 80 62 L82 100 Q60 106 38 100z" fill={color} opacity="0.85" />
      {/* Gear icon on chest */}
      <circle cx="60" cy="80" r="8" stroke="white" strokeWidth="1.5" fill="none" opacity="0.25" />
      <circle cx="60" cy="80" r="3" stroke="white" strokeWidth="1.5" fill="none" opacity="0.25" />
      {/* Gear teeth */}
      <line x1="60" y1="71" x2="60" y2="74" stroke="white" strokeWidth="2" opacity="0.2" />
      <line x1="60" y1="86" x2="60" y2="89" stroke="white" strokeWidth="2" opacity="0.2" />
      <line x1="51" y1="80" x2="54" y2="80" stroke="white" strokeWidth="2" opacity="0.2" />
      <line x1="66" y1="80" x2="69" y2="80" stroke="white" strokeWidth="2" opacity="0.2" />
    </svg>
  ),

  guardian: ({ color }) => (
    <svg viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Protective circle glow */}
      <circle cx="60" cy="55" r="50" fill={color} opacity="0.05" />
      {/* Head */}
      <circle cx="60" cy="42" r="20" fill="#FFF5E6" stroke={color} strokeWidth="2" />
      {/* Warm, watchful eyes */}
      <ellipse cx="52" cy="40" rx="3.5" ry="3" fill={color} />
      <ellipse cx="68" cy="40" rx="3.5" ry="3" fill={color} />
      <circle cx="53" cy="39" r="1.2" fill="white" />
      <circle cx="69" cy="39" r="1.2" fill="white" />
      {/* Firm, kind mouth */}
      <path d="M53 49 Q60 53 67 49" stroke={color} strokeWidth="1.8" strokeLinecap="round" fill="none" />
      {/* Shield icon */}
      <path d="M86 14 L96 18 L96 28 Q96 34 86 38 Q76 34 76 28 L76 18z" fill={color} opacity="0.35" stroke={color} strokeWidth="1" />
      <path d="M86 20 L86 32" stroke="white" strokeWidth="1.2" opacity="0.4" />
      <path d="M80 24 L92 24" stroke="white" strokeWidth="1.2" opacity="0.4" />
      {/* Body - sturdy, protective */}
      <path d="M36 62 Q40 56 60 58 Q80 56 84 62 L86 100 Q60 108 34 100z" fill={color} opacity="0.85" />
      {/* Arms crossed/protective stance */}
      <path d="M36 72 Q32 68 36 62" stroke="white" strokeWidth="1.5" fill="none" opacity="0.2" />
      <path d="M84 72 Q88 68 84 62" stroke="white" strokeWidth="1.5" fill="none" opacity="0.2" />
      {/* Heart shield on chest */}
      <path d="M55 74 L65 78 L65 86 Q65 92 60 95 Q55 92 55 86z" fill="white" opacity="0.2" />
    </svg>
  ),
};

// Map archetype keys to their house for color lookup
const ARCHETYPE_HOUSES = {
  visionary: 'vision', strategist: 'vision', analyst: 'vision',
  bridgeBuilder: 'connection', healer: 'connection', diplomat: 'connection',
  organizer: 'action', agitator: 'action', storyteller: 'action',
  architect: 'infrastructure', operator: 'infrastructure', guardian: 'infrastructure',
};

export default function ArchetypeIcon({ archetype, size = 120, className = '' }) {
  const archetypeKey = typeof archetype === 'string'
    ? archetype
    : archetype?.key || archetype?.name?.toLowerCase().replace(/^the /, '').replace(/-/g, '');

  // Normalize key: "bridge-builder" -> "bridgeBuilder"
  const normalizedKey = archetypeKey?.replace(/-([a-z])/g, (_, c) => c.toUpperCase());

  const IconComponent = ARCHETYPE_ICONS[normalizedKey];
  const house = ARCHETYPE_HOUSES[normalizedKey];
  const color = HOUSE_COLORS[house] || '#6B3FA0';

  if (!IconComponent) {
    return (
      <div
        className={`flex items-center justify-center rounded-full bg-white/20 ${className}`}
        style={{ width: size, height: size }}
        role="img"
        aria-label="Archetype icon"
      >
        <span aria-hidden="true" className="text-4xl">⚡</span>
      </div>
    );
  }

  return (
    <div
      className={`${className}`}
      style={{ width: size, height: size }}
      role="img"
      aria-label={`${normalizedKey} archetype icon`}
    >
      <IconComponent color={color} />
    </div>
  );
}
