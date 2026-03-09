import { archetypes } from '../../data/archetypes';
import { houses } from '../../data/houses';
import ArchetypeIcon from '../icons/ArchetypeIcon';

const RELATIONSHIP_TYPES = [
  {
    key: 'bestFriend',
    label: 'Movement Best Friend',
    emoji: '\uD83E\uDD1D',
    tagline: 'Your natural collaborator',
  },
  {
    key: 'unlikelyAlly',
    label: 'Unlikely Allies',
    emoji: '\uD83C\uDF09',
    tagline: 'An unexpected partnership',
  },
  {
    key: 'intentionalPartner',
    label: 'Intentional Partner',
    emoji: '\u26A1',
    tagline: 'Opposites who need each other',
  },
];

export default function MovementRelationships({ primaryArchetype, houseColor }) {
  const relationships = primaryArchetype?.relationships;
  if (!relationships) return null;

  return (
    <div className="space-y-3">
      <p className="text-xs text-charcoal/50 italic leading-relaxed">
        Movements need people across all four houses. Here are the archetypes
        you should seek out — and the partnerships that will stretch you.
      </p>

      {RELATIONSHIP_TYPES.map(({ key, label, emoji, tagline }) => {
        const rel = relationships[key];
        if (!rel) return null;

        const relArchetype = archetypes[rel.archetypeKey];
        if (!relArchetype) return null;

        const relHouse = houses[relArchetype.house];
        const relColor = relHouse?.color || '#6B3FA0';

        return (
          <div
            key={key}
            className="bg-warm-white/50 rounded-lg p-3"
          >
            <div className="flex items-start gap-3">
              {/* Archetype mini icon */}
              <div
                className="w-10 h-10 rounded-lg flex-shrink-0 flex items-center justify-center overflow-hidden"
                style={{ backgroundColor: `${relColor}20` }}
              >
                <ArchetypeIcon archetype={relArchetype.key} size={36} />
              </div>

              <div className="flex-1 min-w-0">
                {/* Relationship label + archetype name */}
                <div className="flex items-center gap-2 flex-wrap">
                  <span className="text-xs" aria-hidden="true">{emoji}</span>
                  <span className="text-xs font-bold uppercase tracking-wide text-charcoal/50">
                    {label}
                  </span>
                </div>
                <p className="text-sm font-bold text-charcoal mt-0.5">
                  {relArchetype.name}
                  <span
                    className="text-xs font-normal ml-1.5 opacity-60"
                    style={{ color: relColor }}
                  >
                    {relHouse?.name}
                  </span>
                </p>

                {/* Relationship description */}
                <p className="text-xs text-charcoal/60 leading-relaxed mt-1">
                  {rel.description}
                </p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
