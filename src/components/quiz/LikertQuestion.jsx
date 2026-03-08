import { useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { getSlideInRight, getTransition } from '../../utils/accessibility';

const LABELS = ['A', 'B', 'C', 'D', 'E'];

// Deterministic shuffle seeded by question ID — stable across re-renders
function shuffleChoices(choices, seed) {
  const shuffled = [...choices];
  let hash = 0;
  for (let i = 0; i < seed.length; i++) {
    hash = ((hash << 5) - hash) + seed.charCodeAt(i);
    hash |= 0;
  }
  for (let i = shuffled.length - 1; i > 0; i--) {
    hash = ((hash << 5) - hash + i) | 0;
    const j = Math.abs(hash) % (i + 1);
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
}

export default function LikertQuestion({ question, questionNumber, totalQuestions, onAnswer, onGoBack, canGoBack }) {
  if (!question) return null;

  const shuffledChoices = useMemo(
    () => shuffleChoices(question.choices, question.id),
    [question.id, question.choices]
  );

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={question.id}
        {...getSlideInRight()}
        transition={getTransition(0.3)}
        className="py-4"
      >
        {canGoBack && (
          <button
            onClick={onGoBack}
            className="flex items-center gap-1 text-sm text-charcoal/50 hover:text-charcoal/80
                       transition-colors cursor-pointer mb-2"
          >
            &larr; Back
          </button>
        )}
        <div className="mb-2 text-sm text-charcoal/50 font-medium">
          Question {questionNumber} of {totalQuestions}
        </div>

        <h3 className="text-lg md:text-xl font-bold text-navy mb-6 leading-snug">
          {question.text}
        </h3>

        <div className="space-y-3">
          {shuffledChoices.map((choice, idx) => (
            <motion.button
              key={choice.points}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={getTransition(0.3, { delay: idx * 0.05 })}
              whileHover={{ scale: 1.01 }}
              whileTap={{ scale: 0.99 }}
              onClick={() => onAnswer(question.stat, choice.points)}
              className="w-full text-left p-4 rounded-xl border-2 border-charcoal/10
                         hover:border-teal/40 bg-white/60 transition-colors cursor-pointer
                         min-h-11 flex items-start gap-3"
            >
              <span className="flex-shrink-0 w-8 h-8 rounded-full bg-teal/10 text-teal font-bold text-sm
                               flex items-center justify-center">
                {LABELS[idx]}
              </span>
              <span className="text-charcoal leading-relaxed text-[15px] md:text-base">
                {choice.text}
              </span>
            </motion.button>
          ))}
        </div>
      </motion.div>
    </AnimatePresence>
  );
}
