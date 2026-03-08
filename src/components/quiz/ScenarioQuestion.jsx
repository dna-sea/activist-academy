import { motion, AnimatePresence } from 'framer-motion';
import AnswerButton from './AnswerButton';
import { getSlideInRight, getTransition } from '../../utils/accessibility';

export default function ScenarioQuestion({ question, questionNumber, totalQuestions, onAnswer, onGoBack, canGoBack }) {
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
          Question {questionNumber} of {totalQuestions}
        </div>

        <h3 className="text-xl md:text-2xl font-bold text-navy mb-6 leading-snug">
          {question.text}
        </h3>

        <div className="space-y-3">
          {question.choices.map((choice, idx) => (
            <AnswerButton
              key={idx}
              label={choice.text}
              index={idx}
              onClick={() => onAnswer(choice)}
            />
          ))}
        </div>
      </motion.div>
    </AnimatePresence>
  );
}
