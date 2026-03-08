import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HOUSE_COLORS } from '../../utils/constants';
import { getTransition } from '../../utils/accessibility';
import ArchetypeIcon from '../icons/ArchetypeIcon';

export default function ArchetypeCard({ archetype, isUserArchetype, expanded: forceExpanded }) {
  const [expanded, setExpanded] = useState(forceExpanded || false);
  const houseColor = HOUSE_COLORS[archetype.house];

  return (
    <motion.div
      layout
      className={`rounded-2xl border-2 overflow-hidden transition-colors ${
        isUserArchetype ? 'border-gold shadow-md' : 'border-charcoal/10'
      }`}
    >
      <button
        onClick={() => setExpanded(!expanded)}
        className="w-full text-left p-4 flex items-center gap-4 cursor-pointer hover:bg-charcoal/[0.02] transition-colors"
      >
        <div
          className="w-12 h-12 rounded-xl flex-shrink-0 flex items-center justify-center overflow-hidden p-0.5"
          style={{ backgroundColor: `${houseColor}20` }}
        >
          <ArchetypeIcon archetype={archetype.key} size={44} />
        </div>

        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2">
            <h3 className="font-bold text-navy text-lg">{archetype.name}</h3>
            {isUserArchetype && (
              <span className="text-xs font-semibold px-2 py-0.5 rounded-full bg-gold/20 text-gold">
                You
              </span>
            )}
          </div>
          <p className="text-xs font-medium uppercase tracking-wider" style={{ color: houseColor }}>
            House of {archetype.house.charAt(0).toUpperCase() + archetype.house.slice(1)}
          </p>
        </div>

        <span className="text-charcoal/40 text-lg flex-shrink-0">
          {expanded ? '\u25B2' : '\u25BC'}
        </span>
      </button>

      <AnimatePresence>
        {expanded && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={getTransition(0.25)}
            className="overflow-hidden"
          >
            <div className="px-4 pb-4 space-y-3">
              <p className="text-sm text-charcoal/80 leading-relaxed">
                {archetype.description}
              </p>

              <div className="space-y-1.5">
                <h4 className="text-xs font-semibold uppercase tracking-wider text-charcoal/50">
                  Historical Exemplars
                </h4>
                {[
                  { name: archetype.exemplarName, text: archetype.exemplar, image: archetype.exemplarImage, opacity: 'text-charcoal/70' },
                  { name: archetype.secondExemplarName, text: archetype.secondExemplar, image: archetype.secondExemplarImage, opacity: 'text-charcoal/60' },
                ].map((ex) => (
                  <div key={ex.name} className="flex gap-2.5 bg-warm-white/50 p-2.5 rounded-lg">
                    {ex.image && (
                      <img
                        src={`/images/exemplars/${ex.image}`}
                        alt={ex.name}
                        className="w-10 h-10 rounded-full object-cover flex-shrink-0 mt-0.5"
                      />
                    )}
                    <p className={`text-xs ${ex.opacity} leading-relaxed`}>
                      {ex.text}
                    </p>
                  </div>
                ))}
              </div>

              <div className="space-y-1.5">
                <h4 className="text-xs font-semibold uppercase tracking-wider text-charcoal/50">
                  Volunteer Roles
                </h4>
                <div className="space-y-1">
                  {archetype.volunteerRoles.map((role) => (
                    <div key={role} className="flex items-center gap-2 bg-warm-white/50 p-2 rounded-lg">
                      <span
                        className="w-1.5 h-1.5 rounded-full flex-shrink-0"
                        style={{ backgroundColor: houseColor }}
                      />
                      <span className="text-xs text-charcoal/70">{role}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="space-y-1.5">
                <h4 className="text-xs font-semibold uppercase tracking-wider text-charcoal/50">
                  Learning Path
                </h4>
                <div className="text-xs text-charcoal/70 space-y-1">
                  <p><span className="font-semibold">Start with:</span> {archetype.learningPath.startWith.join(', ')}</p>
                  <p><span className="font-semibold">Build into:</span> {archetype.learningPath.buildInto.join(', ')}</p>
                  <p><span className="font-semibold">Supplement:</span> {archetype.learningPath.supplement.join(', ')}</p>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
