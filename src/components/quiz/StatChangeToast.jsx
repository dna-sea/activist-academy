import { motion, AnimatePresence } from 'framer-motion';
import { STAT_LABELS } from '../../utils/constants';

export default function StatChangeToast({ stat, points, show }) {
  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ opacity: 0, y: 10, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.5 }}
          className="fixed bottom-8 left-1/2 -translate-x-1/2 z-50
                     bg-navy text-gold font-bold text-lg px-6 py-3 rounded-xl shadow-lg"
          role="status"
          aria-live="polite"
        >
          +{points} {STAT_LABELS[stat] || stat}
        </motion.div>
      )}
    </AnimatePresence>
  );
}
