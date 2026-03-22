import { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { useQuiz } from '../../context/QuizContext';
import { useAuth } from '../../context/AuthContext';
import { isSupabaseConfigured } from '../../lib/supabase';
import { saveProfile } from '../../lib/profiles';
import { MOTIVATION_LABELS } from '../../utils/constants';
import { getTransition } from '../../utils/accessibility';
import RadarChart from './RadarChart';
import StatBar from './StatBar';
import SpectrumSlider from './SpectrumSlider';
import LearningPath from './LearningPath';
import MovementRelationships from './MovementRelationships';
import ShareControls from './ShareControls';
import BrandingFooter from './BrandingFooter';
import ArchetypeIcon from '../icons/ArchetypeIcon';
import AuthModal from '../auth/AuthModal';

export default function CharacterSheet() {
  const { results, showHouseDetail, showAllArchetypes } = useQuiz();
  const { user } = useAuth();
  const sheetRef = useRef(null);
  const [saved, setSaved] = useState(false);
  const [saving, setSaving] = useState(false);
  const [showAuth, setShowAuth] = useState(false);

  if (!results) return null;

  const { primaryArchetype, secondaryArchetype, house, displayStats, topMotivations, displayOrientation } = results;

  return (
    <div className="min-h-screen bg-warm-white py-8 px-4">
      <div className="max-w-2xl mx-auto">
        {/* Character Sheet (exportable area) */}
        <div ref={sheetRef} className="bg-white rounded-3xl overflow-hidden shadow-xl border border-charcoal/10">
          {/* House Banner */}
          <div
            className="px-6 py-8 text-center"
            style={{ backgroundColor: house.color }}
          >
            <p className="text-white/70 text-xs uppercase tracking-[0.3em] mb-1 font-semibold">
              {house.name}
            </p>

            <div className="flex items-center justify-center gap-6 mb-4">
              <div>
                <h1 className="text-3xl md:text-4xl font-black text-white tracking-tight">
                  {primaryArchetype.name}
                </h1>
                <p className="text-white/60 text-sm mt-1">
                  Secondary: {secondaryArchetype.name}
                </p>
              </div>

              <div className="w-20 h-20 rounded-xl bg-white/20 flex-shrink-0 flex items-center justify-center overflow-hidden p-1">
                <ArchetypeIcon archetype={primaryArchetype.key} size={72} />
              </div>
            </div>

            <p className="text-white/80 text-sm leading-relaxed max-w-lg mx-auto">
              {primaryArchetype.description}
            </p>
          </div>

          <div className="p-6 space-y-8">
            {/* Core Stats */}
            <section>
              <h2 className="text-lg font-bold text-navy mb-4 flex items-center gap-2">
                <span className="text-teal">&#x25C6;</span> Core Stats
              </h2>
              <RadarChart stats={displayStats} color={house.color} />
              <div className="space-y-2 mt-4">
                {Object.entries(displayStats).map(([stat, value]) => (
                  <StatBar key={stat} stat={stat} value={value} color={house.color} />
                ))}
              </div>
            </section>

            {/* Motivation Profile */}
            <section>
              <h2 className="text-lg font-bold text-navy mb-3 flex items-center gap-2">
                <span className="text-gold">&#x25C6;</span> Motivation Profile
              </h2>
              <div className="flex gap-3">
                {topMotivations.map((mot, idx) => (
                  <span
                    key={mot}
                    className={`px-4 py-2 rounded-lg text-sm font-semibold ${
                      idx === 0
                        ? 'text-white'
                        : 'bg-charcoal/10 text-charcoal'
                    }`}
                    style={idx === 0 ? { backgroundColor: house.color } : {}}
                  >
                    {idx === 0 ? 'Primary: ' : 'Secondary: '}{MOTIVATION_LABELS[mot] || mot}
                  </span>
                ))}
              </div>
            </section>

            {/* Strategic Orientation */}
            <section>
              <h2 className="text-lg font-bold text-navy mb-3 flex items-center gap-2">
                <span className="text-teal">&#x25C6;</span> Strategic Orientation
              </h2>
              <SpectrumSlider
                value={displayOrientation.insideOutside}
                leftLabel="Inside"
                rightLabel="Outside"
                color={house.color}
              />
              <SpectrumSlider
                value={displayOrientation.righteousnessRelationship}
                leftLabel="Relationship"
                rightLabel="Righteousness"
                color={house.color}
              />
            </section>

            {/* Movement Relationships */}
            <section>
              <h2 className="text-lg font-bold text-navy mb-3 flex items-center gap-2">
                <span className="text-gold">&#x25C6;</span> Your Movement Relationships
              </h2>
              <MovementRelationships
                primaryArchetype={primaryArchetype}
                houseColor={house.color}
              />
            </section>

            {/* Historical Exemplars */}
            <section>
              <h2 className="text-lg font-bold text-navy mb-3 flex items-center gap-2">
                <span className="text-gold">&#x25C6;</span> Historical Exemplars
              </h2>
              <div className="space-y-3">
                {[
                  { name: primaryArchetype.exemplarName, text: primaryArchetype.exemplar, image: primaryArchetype.exemplarImage, opacity: 'text-charcoal/80' },
                  { name: primaryArchetype.secondExemplarName, text: primaryArchetype.secondExemplar, image: primaryArchetype.secondExemplarImage, opacity: 'text-charcoal/60' },
                  ...(primaryArchetype.thirdExemplarName ? [{
                    name: primaryArchetype.thirdExemplarName, text: primaryArchetype.thirdExemplar, image: primaryArchetype.thirdExemplarImage, opacity: 'text-charcoal/50'
                  }] : []),
                ].map((ex) => (
                  <div key={ex.name} className="flex gap-3 bg-warm-white/50 p-3 rounded-lg">
                    {ex.image && (
                      <img
                        src={`/images/exemplars/${ex.image}`}
                        alt={ex.name}
                        className="w-12 h-12 rounded-full object-cover flex-shrink-0 mt-0.5"
                      />
                    )}
                    <p className={`text-sm ${ex.opacity} leading-relaxed`}>
                      {ex.text}
                    </p>
                  </div>
                ))}
              </div>
            </section>

            {/* Volunteer Roles */}
            <section>
              <h2 className="text-lg font-bold text-navy mb-3 flex items-center gap-2">
                <span className="text-gold">&#x25C6;</span> Volunteer Roles You Might Be Suited For
              </h2>
              <div className="space-y-2">
                {primaryArchetype.volunteerRoles.map((role) => (
                  <div
                    key={role}
                    className="flex items-center gap-3 bg-warm-white/50 p-3 rounded-lg"
                  >
                    <span
                      className="w-2 h-2 rounded-full flex-shrink-0"
                      style={{ backgroundColor: house.color }}
                    />
                    <span className="text-sm text-charcoal/80">{role}</span>
                  </div>
                ))}
              </div>
            </section>

            {/* Growth Edge */}
            {primaryArchetype.growthEdge && (
              <section>
                <h2 className="text-lg font-bold text-navy mb-3 flex items-center gap-2">
                  <span className="text-teal">&#x25C6;</span> Your Growth Edge
                </h2>
                <div className="bg-warm-white/50 rounded-lg p-4 border-l-3"
                  style={{ borderLeftColor: house.color }}
                >
                  <p className="text-sm text-charcoal/70 leading-relaxed">
                    {primaryArchetype.growthEdge}
                  </p>
                </div>
              </section>
            )}

            {/* Learning Path */}
            <section>
              <h2 className="text-lg font-bold text-navy mb-3 flex items-center gap-2">
                <span className="text-teal">&#x25C6;</span> Your Learning Path
              </h2>
              <LearningPath learningPath={primaryArchetype.learningPath} />
            </section>
          </div>

          {/* Branding Footer (inside exportable area — captured by PNG/PDF export) */}
          <BrandingFooter />
        </div>

        {/* Explore Links (outside exportable area) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={getTransition(0.5, { delay: 0.3 })}
          className="mt-6 flex flex-wrap gap-3 justify-center"
        >
          <button
            onClick={() => showHouseDetail(house.id)}
            className="text-sm font-semibold px-5 py-2.5 rounded-xl border-2 transition-colors cursor-pointer
                       hover:opacity-80 text-white"
            style={{ backgroundColor: house.color, borderColor: house.color }}
          >
            Learn More About Your House
          </button>
          <button
            onClick={showAllArchetypes}
            className="text-sm font-semibold text-charcoal px-5 py-2.5 rounded-xl
                       border-2 border-charcoal/20 hover:border-charcoal/40 transition-colors cursor-pointer"
          >
            Explore All Archetypes
          </button>
        </motion.div>

        {/* Share Controls (outside exportable area) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={getTransition(0.5, { delay: 0.5 })}
          className="mt-6"
        >
          <ShareControls sheetRef={sheetRef} />

          {/* Save to account prompt */}
          {isSupabaseConfigured() && !saved && (
            <div className="mt-4 p-4 bg-navy/5 border border-navy/10 rounded-xl text-center">
              {user ? (
                <>
                  <p className="text-charcoal/60 text-sm mb-3">
                    Save your results to your account so you can return to them anytime.
                  </p>
                  <button
                    onClick={async () => {
                      setSaving(true);
                      const { error } = await saveProfile(user.id, results);
                      setSaving(false);
                      if (!error) setSaved(true);
                    }}
                    disabled={saving}
                    className="bg-teal text-white font-semibold text-sm px-6 py-2.5 rounded-xl
                               hover:bg-teal/90 transition-colors cursor-pointer disabled:opacity-50"
                  >
                    {saving ? 'Saving...' : 'Save to My Account'}
                  </button>
                </>
              ) : (
                <>
                  <p className="text-charcoal/60 text-sm mb-3">
                    Create an account to save your results and return to them anytime.
                  </p>
                  <button
                    onClick={() => setShowAuth(true)}
                    className="bg-teal text-white font-semibold text-sm px-6 py-2.5 rounded-xl
                               hover:bg-teal/90 transition-colors cursor-pointer"
                  >
                    Sign Up to Save
                  </button>
                </>
              )}
            </div>
          )}

          {saved && (
            <div className="mt-4 p-3 bg-teal/10 border border-teal/20 rounded-xl text-center">
              <p className="text-teal font-semibold text-sm">
                Results saved to your account
              </p>
            </div>
          )}
        </motion.div>
      </div>

      {/* Auth Modal */}
      <AuthModal open={showAuth} onClose={() => setShowAuth(false)} />
    </div>
  );
}
