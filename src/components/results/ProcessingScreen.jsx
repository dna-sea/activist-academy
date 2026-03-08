import { useEffect, useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { useQuiz } from '../../context/QuizContext';
import { computeResults } from '../../scoring/calculateArchetype';
import { getTransition, prefersReducedMotion } from '../../utils/accessibility';

const PROCESSING_STEPS = [
  'Analyzing your motivation profile...',
  'Mapping your core attributes...',
  'Calibrating strategic orientation...',
  'Matching your archetype...',
  'Building your character sheet...',
];

export default function ProcessingScreen() {
  const quiz = useQuiz();
  const [step, setStep] = useState(0);
  const hasComputed = useRef(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setStep((prev) => {
        if (prev >= PROCESSING_STEPS.length - 1) {
          clearInterval(interval);
          return prev;
        }
        return prev + 1;
      });
    }, 500);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (step >= PROCESSING_STEPS.length - 1 && !hasComputed.current) {
      hasComputed.current = true;
      const results = computeResults(quiz);
      const timer = setTimeout(() => quiz.setResults(results), 600);
      return () => clearTimeout(timer);
    }
  }, [step, quiz]);

  const reducedMotion = prefersReducedMotion();

  return (
    <div className="min-h-screen bg-navy flex flex-col items-center justify-center px-6">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={getTransition(0.5)}
        className="text-center max-w-md"
      >
        {/* Spinning icon */}
        <motion.div
          animate={reducedMotion ? {} : { rotate: 360 }}
          transition={reducedMotion ? {} : { duration: 2, repeat: Infinity, ease: 'linear' }}
          className="w-16 h-16 mx-auto mb-8 border-4 border-teal/30 border-t-gold rounded-full"
        />

        <h2 className="text-2xl font-bold text-warm-white mb-6">
          Calculating Your Archetype
        </h2>

        <div className="space-y-3" aria-live="polite">
          {PROCESSING_STEPS.map((text, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: -20 }}
              animate={idx <= step ? { opacity: 1, x: 0 } : {}}
              transition={getTransition(0.3)}
              className={`text-sm flex items-center gap-2 ${
                idx <= step ? 'text-warm-white' : 'text-warm-white/20'
              }`}
            >
              <span className={idx < step ? 'text-gold' : idx === step ? 'text-teal' : ''}>
                {idx < step ? '✓' : idx === step ? '...' : '○'}
              </span>
              {text}
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}
