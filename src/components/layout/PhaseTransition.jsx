import { motion } from 'framer-motion';
import { PHASES } from '../../utils/constants';
import { useQuiz } from '../../context/QuizContext';
import { getTransition } from '../../utils/accessibility';

export default function PhaseTransition() {
  const { currentPhase, dismissPhaseIntro, goBack, canGoBack } = useQuiz();
  const phase = PHASES[currentPhase];

  if (!phase) return null;

  return (
    <div className="min-h-[80vh] flex flex-col items-center justify-center px-6 text-center">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={getTransition(0.5)}
        className="max-w-lg mx-auto"
      >
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={getTransition(0.4, { delay: 0.2 })}
          className="text-5xl mb-6"
        >
          {phase.icon}
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={getTransition(0.4, { delay: 0.3 })}
          className="text-teal font-semibold text-sm uppercase tracking-wider mb-2"
        >
          Phase {currentPhase + 1} of 4
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={getTransition(0.4, { delay: 0.4 })}
          className="text-3xl md:text-4xl font-bold text-navy mb-4"
        >
          {phase.name}
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={getTransition(0.4, { delay: 0.5 })}
          className="text-charcoal/70 text-lg mb-10 leading-relaxed"
        >
          {phase.description}
        </motion.p>

        <div className="flex items-center justify-center gap-4">
          {canGoBack && (
            <motion.button
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={getTransition(0.4, { delay: 0.7 })}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              onClick={goBack}
              className="border-2 border-charcoal/20 text-charcoal font-semibold text-lg px-8 py-4 rounded-xl
                         hover:border-charcoal/40 transition-colors cursor-pointer min-h-11"
            >
              &larr; Back
            </motion.button>
          )}
          <motion.button
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={getTransition(0.4, { delay: 0.7 })}
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
            onClick={dismissPhaseIntro}
            className="bg-navy text-warm-white font-semibold text-lg px-8 py-4 rounded-xl
                       hover:bg-navy/90 transition-colors cursor-pointer min-h-11"
          >
            Let's Go
          </motion.button>
        </div>
      </motion.div>
    </div>
  );
}
