import { motion } from 'framer-motion';
import { getTransition } from '../../utils/accessibility';

export default function AnswerButton({ label, onClick, index, variant = 'default' }) {
  const letters = 'ABCDEF';

  return (
    <motion.button
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={getTransition(0.3, { delay: index * 0.05 })}
      whileHover={{ scale: 1.01, backgroundColor: 'rgba(42, 127, 142, 0.08)' }}
      whileTap={{ scale: 0.99 }}
      onClick={onClick}
      className={`w-full text-left p-4 md:p-5 rounded-xl border-2 transition-colors cursor-pointer
        min-h-11 flex items-start gap-3
        ${variant === 'likert'
          ? 'border-charcoal/15 hover:border-teal/50 bg-white'
          : 'border-charcoal/10 hover:border-teal/40 bg-white/60'
        }`}
    >
      {variant !== 'likert' && (
        <span className="flex-shrink-0 w-8 h-8 rounded-lg bg-navy/10 text-navy font-bold text-sm
                         flex items-center justify-center mt-0.5">
          {letters[index]}
        </span>
      )}
      <span className="text-charcoal leading-relaxed text-[15px] md:text-base">
        {label}
      </span>
    </motion.button>
  );
}
