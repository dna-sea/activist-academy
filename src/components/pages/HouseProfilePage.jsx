import { useQuiz } from '../../context/QuizContext';
import { houses } from '../../data/houses';
import { archetypes } from '../../data/archetypes';

const ICON_FILES = {
  visionary: 'visionary', strategist: 'strategist', analyst: 'analyst',
  bridgeBuilder: 'bridge-builder', healer: 'healer', diplomat: 'diplomat',
  organizer: 'organizer', agitator: 'agitator', storyteller: 'storyteller',
  architect: 'architect', operator: 'operator', guardian: 'guardian',
};

export default function HouseProfilePage() {
  const { selectedHouseId, goBackFromProfile, showArchetypeProfile, startQuiz } = useQuiz();
  const house = houses[selectedHouseId];

  if (!house) return null;

  const houseArchetypes = (house.archetypes || []).map((key) => archetypes[key]).filter(Boolean);

  return (
    <div className="min-h-screen bg-warm-white">
      {/* Back button */}
      <div className="px-6 py-4">
        <button
          onClick={goBackFromProfile}
          className="text-charcoal/60 hover:text-charcoal transition-colors text-sm cursor-pointer"
        >
          &larr; Back
        </button>
      </div>

      {/* Hero banner */}
      <div
        className="px-6 py-12 md:py-16 text-center"
        style={{ background: `linear-gradient(135deg, ${house.color}, ${house.color}CC)` }}
      >
        <img
          src={`/icons/landing/house-${house.id}.png`}
          alt=""
          className="w-20 h-20 md:w-24 md:h-24 rounded-xl object-cover mx-auto mb-4"
          draggable={false}
        />
        <p
          className="text-xs font-bold uppercase tracking-widest mb-3"
          style={{ color: 'rgba(255,255,255,0.6)' }}
        >
          {house.function}
        </p>
        <h1 className="text-3xl md:text-5xl font-black text-white leading-tight mb-3">
          {house.name}
        </h1>
        <p className="text-white/80 text-lg md:text-xl max-w-lg mx-auto">
          {house.tagline}
        </p>
      </div>

      {/* Content */}
      <div className="max-w-2xl mx-auto px-6 py-10 space-y-10">

        {/* Description */}
        {house.description && (
          <section>
            <p className="text-charcoal/80 text-base md:text-lg leading-relaxed mb-4">
              {house.description}
            </p>
            {house.contextDescription && (
              <p className="text-charcoal/70 text-sm md:text-base leading-relaxed">
                {house.contextDescription}
              </p>
            )}
          </section>
        )}

        {/* Who They Are */}
        {house.whoTheyAre && (
          <section>
            <h2 className="text-xl font-bold text-charcoal mb-4 flex items-center gap-2">
              <span style={{ color: house.color }}>&#9670;</span> Is This Your House?
            </h2>
            <p className="text-charcoal/70 text-sm md:text-base leading-relaxed">
              {house.whoTheyAre}
            </p>
          </section>
        )}

        {/* The Three Archetypes */}
        <section>
          <h2 className="text-xl font-bold text-charcoal mb-6 flex items-center gap-2">
            <span style={{ color: house.color }}>&#9670;</span> The Three Archetypes
          </h2>
          <div className="grid gap-4 md:grid-cols-3">
            {houseArchetypes.map((arch) => {
              const iconFile = ICON_FILES[arch.key] || arch.key;
              return (
                <button
                  key={arch.key}
                  onClick={() => showArchetypeProfile(arch.key)}
                  className="bg-white border rounded-xl p-5 text-center hover:shadow-lg transition-shadow cursor-pointer flex flex-col items-center"
                  style={{ borderColor: house.color + '30' }}
                >
                  <img
                    src={`/icons/${iconFile}.png`}
                    alt={arch.name}
                    className="w-20 h-20 md:w-24 md:h-24 rounded-xl object-cover mb-3"
                    draggable={false}
                  />
                  <h3 className="font-bold text-charcoal text-base mb-2">{arch.name}</h3>
                  <p className="text-charcoal/60 text-xs leading-relaxed line-clamp-3">
                    {arch.description.split('.').slice(0, 2).join('.') + '.'}
                  </p>
                  <span
                    className="mt-3 text-xs font-medium"
                    style={{ color: house.color }}
                  >
                    View Profile &rarr;
                  </span>
                </button>
              );
            })}
          </div>
        </section>

        {/* Shadow Side */}
        {house.shadowSide && (
          <section>
            <h2 className="text-xl font-bold text-charcoal mb-4 flex items-center gap-2">
              <span style={{ color: house.color }}>&#9670;</span> Shadow Side
            </h2>
            <p className="text-charcoal/70 text-sm md:text-base leading-relaxed">
              {house.shadowSide}
            </p>
          </section>
        )}

        {/* CTA */}
        <section className="text-center pt-6 pb-4">
          <p className="text-charcoal/50 text-sm mb-4">
            Discover which archetype in {house.name} matches you best.
          </p>
          <button
            onClick={startQuiz}
            className="bg-gold text-navy font-bold text-lg px-8 py-3 rounded-xl
                       hover:bg-gold/90 transition-colors cursor-pointer
                       shadow-lg shadow-gold/25"
          >
            Begin Your Discovery
          </button>
        </section>
      </div>
    </div>
  );
}
