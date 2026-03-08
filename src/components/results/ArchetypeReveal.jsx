import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useQuiz } from '../../context/QuizContext';
import { getTransition } from '../../utils/accessibility';
import ArchetypeIcon from '../icons/ArchetypeIcon';

export default function ArchetypeReveal() {
  const { results, showCharacterSheet } = useQuiz();
  const [revealStep, setRevealStep] = useState(0);

  useEffect(() => {
    const timings = [800, 1600, 2400, 3200];
    const timers = timings.map((delay, idx) =>
      setTimeout(() => setRevealStep(idx + 1), delay)
    );
    return () => timers.forEach(clearTimeout);
  }, []);

  if (!results) return null;

  const { house, primaryArchetype } = results;

  return (
    <div
      className="min-h-screen flex flex-col items-center justify-center px-6 transition-colors duration-1000"
      style={{ backgroundColor: revealStep >= 1 ? house.color : '#1B2A4A' }}
    >
      <div className="text-center max-w-lg">
        {/* Step 1: House name */}
        <AnimatePresence>
          {revealStep >= 1 && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={getTransition(0.6)}
            >
              <p className="text-white/70 text-sm uppercase tracking-[0.3em] mb-2 font-semibold">
                You belong to
              </p>
              <p className="text-2xl md:text-3xl font-bold text-white mb-1">
                {house.name}
              </p>
              <p className="text-white/60 text-sm italic mb-8">
                {house.tagline}
              </p>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Step 2: Archetype icon */}
        <AnimatePresence>
          {revealStep >= 2 && (
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={getTransition(0.5, { type: 'spring', damping: 15 })}
              className="mb-6"
            >
              <div className="w-32 h-32 mx-auto rounded-2xl bg-white/20 backdrop-blur-sm flex items-center justify-center overflow-hidden p-2">
                <ArchetypeIcon archetype={primaryArchetype.key} size={112} />
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Step 3: Archetype name */}
        <AnimatePresence>
          {revealStep >= 3 && (
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={getTransition(0.6, { type: 'spring', damping: 12 })}
            >
              <h1 className="text-4xl md:text-6xl font-black text-white mb-4 tracking-tight">
                {primaryArchetype.name}
              </h1>
              <p className="text-white/80 text-lg leading-relaxed mb-8 max-w-md mx-auto">
                {primaryArchetype.description}
              </p>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Step 4: CTA */}
        <AnimatePresence>
          {revealStep >= 4 && (
            <motion.button
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={getTransition(0.5)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              onClick={showCharacterSheet}
              className="bg-white text-charcoal font-bold text-lg px-8 py-4 rounded-xl
                         hover:bg-white/90 transition-colors cursor-pointer shadow-lg min-h-11
                         focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2"
            >
              See Your Full Character Sheet
            </motion.button>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
