import { useQuiz } from '../../context/QuizContext';
import { archetypes } from '../../data/archetypes';
import { houses } from '../../data/houses';
import { HOUSE_COLORS } from '../../utils/constants';

const ICON_FILES = {
  visionary: 'visionary', strategist: 'strategist', analyst: 'analyst',
  bridgeBuilder: 'bridge-builder', healer: 'healer', diplomat: 'diplomat',
  organizer: 'organizer', agitator: 'agitator', storyteller: 'storyteller',
  architect: 'architect', operator: 'operator', guardian: 'guardian',
};

export default function ArchetypeProfilePage() {
  const { selectedArchetypeKey, goBackFromProfile, showHouseProfile, startQuiz } = useQuiz();
  const archetype = archetypes[selectedArchetypeKey];

  if (!archetype) return null;

  const house = houses[archetype.house];
  const color = HOUSE_COLORS[archetype.house];
  const iconFile = ICON_FILES[selectedArchetypeKey] || selectedArchetypeKey;

  const exemplars = [
    { name: archetype.exemplarName, desc: archetype.exemplar, img: archetype.exemplarImage },
    { name: archetype.secondExemplarName, desc: archetype.secondExemplar, img: archetype.secondExemplarImage },
    archetype.thirdExemplarName
      ? { name: archetype.thirdExemplarName, desc: archetype.thirdExemplar, img: archetype.thirdExemplarImage }
      : null,
  ].filter(Boolean);

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

      {/* Hero banner with house color */}
      <div
        className="px-6 py-10 md:py-14 text-center"
        style={{ background: `linear-gradient(135deg, ${color}, ${color}CC)` }}
      >
        <p
          className="text-sm font-bold uppercase tracking-widest mb-2"
          style={{ color: 'rgba(255,255,255,0.7)' }}
        >
          {house.name}
        </p>

        <div className="flex items-center justify-center gap-4 md:gap-6 mb-4">
          <h1 className="text-3xl md:text-5xl font-black text-white leading-tight">
            {archetype.name}
          </h1>
          <img
            src={`/icons/${iconFile}.png`}
            alt={archetype.name}
            className="w-20 h-20 md:w-28 md:h-28 rounded-xl object-cover flex-shrink-0"
            draggable={false}
          />
        </div>

        <button
          onClick={() => showHouseProfile(archetype.house)}
          className="inline-block text-white/70 hover:text-white text-sm underline transition-colors cursor-pointer"
        >
          Learn more about {house.name} &rarr;
        </button>
      </div>

      {/* Content */}
      <div className="max-w-2xl mx-auto px-6 py-10 space-y-10">

        {/* Description */}
        <section>
          <p className="text-charcoal/80 text-base md:text-lg leading-relaxed">
            {archetype.description}
          </p>
        </section>

        {/* Historical Exemplars */}
        <section>
          <h2 className="text-xl font-bold text-charcoal mb-4 flex items-center gap-2">
            <span style={{ color }}>&#9670;</span> Historical Exemplars
          </h2>
          <div className="space-y-4">
            {exemplars.map((ex) => (
              <div key={ex.name} className="flex items-start gap-4">
                {ex.img ? (
                  <img
                    src={`/images/exemplars/${ex.img}`}
                    alt={ex.name}
                    className="w-14 h-14 rounded-full object-cover flex-shrink-0 border-2"
                    style={{ borderColor: color }}
                  />
                ) : (
                  <div
                    className="w-14 h-14 rounded-full flex-shrink-0 flex items-center justify-center text-white font-bold text-lg"
                    style={{ backgroundColor: color + '30' }}
                  >
                    {ex.name.charAt(0)}
                  </div>
                )}
                <div>
                  <h3 className="font-bold text-charcoal">{ex.name}</h3>
                  <p className="text-charcoal/60 text-sm leading-relaxed">{ex.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Growth Edge */}
        <section>
          <h2 className="text-xl font-bold text-charcoal mb-4 flex items-center gap-2">
            <span style={{ color }}>&#9670;</span> Growth Edges &amp; Shadow Sides
          </h2>
          <p className="text-charcoal/70 text-sm md:text-base leading-relaxed">
            {archetype.growthEdge}
          </p>
        </section>

        {/* Volunteer Roles */}
        {archetype.volunteerRoles && (
          <section>
            <h2 className="text-xl font-bold text-charcoal mb-4 flex items-center gap-2">
              <span style={{ color }}>&#9670;</span> Volunteer Roles You Might Suit
            </h2>
            <ul className="space-y-2">
              {archetype.volunteerRoles.map((role) => (
                <li key={role} className="flex items-center gap-3">
                  <span
                    className="w-2 h-2 rounded-full flex-shrink-0"
                    style={{ backgroundColor: color }}
                  />
                  <span className="text-charcoal/70 text-sm md:text-base">{role}</span>
                </li>
              ))}
            </ul>
          </section>
        )}

        {/* Learning Path */}
        {archetype.learningPath && (
          <section>
            <h2 className="text-xl font-bold text-charcoal mb-4 flex items-center gap-2">
              <span style={{ color }}>&#9670;</span> Recommended Learning Path
            </h2>
            <div className="space-y-3">
              {[
                { label: 'START WITH', items: archetype.learningPath.startWith },
                { label: 'BUILD INTO', items: archetype.learningPath.buildInto },
                { label: 'SUPPLEMENT', items: archetype.learningPath.supplement },
              ].map((tier) => (
                <div key={tier.label}>
                  <p className="text-xs font-bold text-charcoal/40 uppercase tracking-wider mb-1">
                    {tier.label}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {tier.items.map((item) => (
                      <span
                        key={item}
                        className="text-xs px-3 py-1.5 rounded-full text-white font-medium"
                        style={{ backgroundColor: color }}
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* CTA */}
        <section className="text-center pt-6 pb-4">
          <p className="text-charcoal/50 text-sm mb-4">
            Want to find out if this is your archetype?
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
