import { motion } from 'framer-motion';
import { useQuiz } from '../../context/QuizContext';
import { archetypes } from '../../data/archetypes';
import { houses } from '../../data/houses';
import { getTransition } from '../../utils/accessibility';
import ArchetypeCard from './ArchetypeCard';

export default function HouseDetailPage() {
  const { selectedHouseId, backToCharacterSheet, showAllArchetypes, results } = useQuiz();
  const house = houses[selectedHouseId];

  if (!house) return null;

  const userArchetypeKeys = results
    ? [results.primaryArchetype.key, results.secondaryArchetype.key]
    : [];

  const houseArchetypes = Object.values(archetypes).filter((a) => a.house === selectedHouseId);

  return (
    <div className="min-h-screen bg-warm-white py-8 px-4">
      <div className="max-w-2xl mx-auto">
        <div className="flex gap-4 mb-6">
          <button
            onClick={backToCharacterSheet}
            className="flex items-center gap-1 text-sm text-charcoal/50 hover:text-charcoal/80
                       transition-colors cursor-pointer"
          >
            &larr; Character Sheet
          </button>
          <button
            onClick={showAllArchetypes}
            className="flex items-center gap-1 text-sm text-charcoal/50 hover:text-charcoal/80
                       transition-colors cursor-pointer"
          >
            &larr; All Archetypes
          </button>
        </div>

        {/* House Banner */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={getTransition(0.4)}
          className="rounded-2xl p-6 md:p-8 mb-6 text-center"
          style={{ backgroundColor: house.color }}
        >
          <h1 className="text-3xl md:text-4xl font-black text-white mb-2">
            {house.name}
          </h1>
          <p className="text-white/80 text-lg mb-2">{house.tagline}</p>
          <p className="text-white/60 text-sm">{house.function}</p>
        </motion.div>

        {/* Archetypes */}
        <div className="space-y-3">
          {houseArchetypes.map((archetype, idx) => (
            <motion.div
              key={archetype.key}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={getTransition(0.3, { delay: 0.2 + idx * 0.1 })}
            >
              <ArchetypeCard
                archetype={archetype}
                isUserArchetype={userArchetypeKeys.includes(archetype.key)}
                expanded
              />
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
