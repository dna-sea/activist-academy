import { motion } from 'framer-motion';
import { useQuiz } from '../../context/QuizContext';
import { archetypes } from '../../data/archetypes';
import { houses } from '../../data/houses';
import { getTransition } from '../../utils/accessibility';
import ArchetypeCard from './ArchetypeCard';

const HOUSE_ORDER = ['vision', 'connection', 'action', 'infrastructure'];

export default function AllArchetypesPage() {
  const { backToCharacterSheet, showHouseDetail, results } = useQuiz();

  const userArchetypeKeys = results
    ? [results.primaryArchetype.key, results.secondaryArchetype.key]
    : [];

  const archetypesByHouse = HOUSE_ORDER.map((houseId) => ({
    house: houses[houseId],
    archetypes: Object.values(archetypes).filter((a) => a.house === houseId),
  }));

  return (
    <div className="min-h-screen bg-warm-white py-8 px-4">
      <div className="max-w-2xl mx-auto">
        <button
          onClick={backToCharacterSheet}
          className="flex items-center gap-1 text-sm text-charcoal/50 hover:text-charcoal/80
                     transition-colors cursor-pointer mb-6"
        >
          &larr; Back to Character Sheet
        </button>

        <motion.h1
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={getTransition(0.4)}
          className="text-3xl md:text-4xl font-black text-navy mb-2"
        >
          All Archetypes
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={getTransition(0.4, { delay: 0.1 })}
          className="text-charcoal/60 mb-8"
        >
          Explore all 12 activist archetypes across four houses.
        </motion.p>

        <div className="space-y-8">
          {archetypesByHouse.map(({ house, archetypes: houseArchetypes }, groupIdx) => (
            <motion.section
              key={house.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={getTransition(0.4, { delay: groupIdx * 0.1 })}
            >
              <button
                onClick={() => showHouseDetail(house.id)}
                className="w-full text-left mb-3 p-4 rounded-xl cursor-pointer
                           hover:opacity-90 transition-opacity"
                style={{ backgroundColor: house.color }}
              >
                <h2 className="text-xl font-bold text-white">{house.name}</h2>
                <p className="text-white/70 text-sm">{house.tagline}</p>
              </button>

              <div className="space-y-2">
                {houseArchetypes.map((archetype) => (
                  <ArchetypeCard
                    key={archetype.key}
                    archetype={archetype}
                    isUserArchetype={userArchetypeKeys.includes(archetype.key)}
                  />
                ))}
              </div>
            </motion.section>
          ))}
        </div>
      </div>
    </div>
  );
}
