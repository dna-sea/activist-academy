import { HOUSE_COLORS } from '../../utils/constants';

// Map camelCase archetype keys to kebab-case PNG filenames in /public/icons/
const ICON_FILES = {
  visionary: 'visionary',
  strategist: 'strategist',
  analyst: 'analyst',
  bridgeBuilder: 'bridge-builder',
  healer: 'healer',
  diplomat: 'diplomat',
  organizer: 'organizer',
  agitator: 'agitator',
  storyteller: 'storyteller',
  architect: 'architect',
  operator: 'operator',
  guardian: 'guardian',
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

  const filename = ICON_FILES[normalizedKey];
  const house = ARCHETYPE_HOUSES[normalizedKey];
  const color = HOUSE_COLORS[house] || '#6B3FA0';

  if (!filename) {
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
      className={className}
      style={{ width: size, height: size }}
      role="img"
      aria-label={`${normalizedKey} archetype icon`}
    >
      <img
        src={`/icons/${filename}.png`}
        alt=""
        width={size}
        height={size}
        className="w-full h-full object-contain"
        draggable={false}
      />
    </div>
  );
}
