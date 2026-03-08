import { motion, AnimatePresence } from 'framer-motion';
import { getSlideInRight, getTransition } from '../../utils/accessibility';

const ANCHORS = {
  1: "Completely new to me",
  2: "I've dabbled but wouldn't call it a skill yet",
  3: "I have some experience and basic competence",
  4: "I'm confident in this area and do it regularly",
  5: "I could teach this to others",
};

export default function SelfRatingCard({ question, questionNumber, totalQuestions, onAnswer, onGoBack, canGoBack }) {
  if (!question) return null;

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
          Skill {questionNumber} of {totalQuestions}
        </div>

        <div className="bg-white rounded-2xl border-2 border-charcoal/10 p-6 md:p-8">
          <h3 className="text-xl md:text-2xl font-bold text-navy mb-2">
            {question.name}
          </h3>
          <p className="text-charcoal/60 text-sm mb-6 leading-relaxed">
            {question.description}
          </p>

          <div className="space-y-3">
            {[1, 2, 3, 4, 5].map((rating) => (
              <motion.button
                key={rating}
                initial={{ opacity: 0, x: 15 }}
                animate={{ opacity: 1, x: 0 }}
                transition={getTransition(0.25, { delay: rating * 0.05 })}
                whileHover={{ scale: 1.01 }}
                whileTap={{ scale: 0.99 }}
                onClick={() => onAnswer(question.skill, rating)}
                className="w-full text-left p-4 rounded-xl border-2 border-charcoal/10
                           hover:border-teal/40 bg-warm-white/50 transition-colors cursor-pointer
                           min-h-11 flex items-center gap-3"
              >
                <span className="flex-shrink-0 w-10 h-10 rounded-xl bg-navy/10 text-navy font-bold
                                 flex items-center justify-center text-lg">
                  {rating}
                </span>
                <span className="text-charcoal/80 text-sm md:text-base">
                  {ANCHORS[rating]}
                </span>
              </motion.button>
            ))}
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}
