import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useQuiz } from '../../context/QuizContext';
import { getTransition } from '../../utils/accessibility';
import { GJLAShieldIcon } from '../icons/GJLALogo';

/* ── Archetype character filenames (same order as archetypes.js) ── */
const ARCHETYPE_CHARACTERS = [
  { key: 'visionary', house: 'vision' },
  { key: 'strategist', house: 'vision' },
  { key: 'analyst', house: 'vision' },
  { key: 'bridge-builder', house: 'connection' },
  { key: 'healer', house: 'connection' },
  { key: 'diplomat', house: 'connection' },
  { key: 'organizer', house: 'action' },
  { key: 'agitator', house: 'action' },
  { key: 'storyteller', house: 'action' },
  { key: 'architect', house: 'infrastructure' },
  { key: 'operator', house: 'infrastructure' },
  { key: 'guardian', house: 'infrastructure' },
];

const HOUSES = [
  { name: 'Vision', color: '#6B3FA0', tagline: 'See the destination, chart the course', icon: 'house-vision.png' },
  { name: 'Connection', color: '#2D8659', tagline: 'Build relationships across difference', icon: 'house-connection.png' },
  { name: 'Action', color: '#C4652A', tagline: 'Mobilize energy, create momentum', icon: 'house-action.png' },
  { name: 'Infrastructure', color: '#3A6B8C', tagline: 'Build systems that outlast campaigns', icon: 'house-infrastructure.png' },
];

const PHASES = [
  { num: '1', title: 'Motivation Profile', desc: 'What calls you to this work?', questions: 6 },
  { num: '2', title: 'Core Stats', desc: 'Your strengths across 10 dimensions', questions: 30 },
  { num: '3', title: 'Skills Inventory', desc: 'Honest self-assessment of practical skills', questions: 10 },
  { num: '4', title: 'Strategic Orientation', desc: 'Inside or outside? Relationship or righteousness?', questions: 8 },
];

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};

function Section({ children, className = '' }) {
  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-60px' }}
      transition={getTransition(0.5)}
      variants={fadeUp}
      className={className}
    >
      {children}
    </motion.section>
  );
}

export default function LandingPage() {
  const { startQuiz } = useQuiz();
  const [showPrivacy, setShowPrivacy] = useState(false);

  return (
    <div className="min-h-screen bg-navy">
      {/* ── Hero: Geometric Background + 12 Character Banner ── */}
      <div className="relative overflow-hidden">
        {/* Background image */}
        <img
          src="/icons/landing/hero-bg.png"
          alt=""
          className="absolute inset-0 w-full h-full object-cover opacity-40"
          draggable={false}
        />
        {/* Gradient overlay for text readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-navy/80 via-navy/60 to-navy" />

        <div className="relative z-10 flex flex-col items-center justify-center px-6 pt-16 pb-6 md:pt-24 md:pb-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={getTransition(0.6)}
            className="max-w-2xl mx-auto"
          >
            <h1 className="text-4xl md:text-6xl font-black text-warm-white mb-3 leading-tight tracking-tight">
              The Activist Academy
            </h1>
            <p className="text-xl md:text-2xl text-teal font-semibold mb-4">
              Discovery Engine
            </p>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={getTransition(0.5, { delay: 0.4 })}
              className="text-lg md:text-xl text-warm-white/80 mb-8 leading-relaxed max-w-lg mx-auto"
            >
              Find out which of 12 activist archetypes matches your strengths,
              discover your house, and get a personalized learning path through
              the Activist Academy curriculum.
            </motion.p>
          </motion.div>
        </div>

        {/* 12 Character Strip */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={getTransition(0.7, { delay: 0.3 })}
          className="relative z-10 flex justify-center items-end gap-1 md:gap-2 px-4 pb-8 md:pb-12 overflow-x-auto"
        >
          {ARCHETYPE_CHARACTERS.map((char, i) => (
            <motion.img
              key={char.key}
              src={`/icons/${char.key}.png`}
              alt={char.key.replace(/-/g, ' ')}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={getTransition(0.4, { delay: 0.1 + i * 0.05 })}
              className="w-12 h-12 md:w-16 md:h-16 lg:w-20 lg:h-20 rounded-lg object-cover flex-shrink-0"
              draggable={false}
            />
          ))}
        </motion.div>
      </div>

      {/* ── What You'll Discover ── */}
      <div className="px-6 py-12 md:py-16">
        <Section className="max-w-2xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-warm-white text-center mb-8">
            What You'll Discover
          </h2>
          <div className="grid gap-4 md:grid-cols-3">
            {[
              {
                icon: 'discover-archetype.png',
                title: 'Your Archetype',
                desc: 'One of 12 distinct activist archetypes — from Visionary to Guardian — based on your unique combination of strengths, motivations, and strategic instincts.',
              },
              {
                icon: 'discover-house.png',
                title: 'Your House',
                desc: 'Four houses represent different movement functions: Vision, Connection, Action, and Infrastructure. Find where you belong.',
              },
              {
                icon: 'discover-path.png',
                title: 'Your Learning Path',
                desc: 'A personalized curriculum recommendation across 13 schools of activist education, tailored to build on what you already bring.',
              },
            ].map((item) => (
              <div
                key={item.title}
                className="bg-warm-white/5 border border-warm-white/10 rounded-2xl p-5 text-center flex flex-col items-center"
              >
                <img
                  src={`/icons/landing/${item.icon}`}
                  alt=""
                  className="w-14 h-14 md:w-16 md:h-16 rounded-xl object-cover mb-3"
                  draggable={false}
                />
                <h3 className="text-warm-white font-bold text-lg mb-2">{item.title}</h3>
                <p className="text-warm-white/60 text-sm md:text-base leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </Section>
      </div>

      {/* ── The Four Houses ── */}
      <div className="px-6 py-12 md:py-16 bg-warm-white/[0.03]">
        <Section className="max-w-2xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-warm-white text-center mb-3">
            The Four Houses
          </h2>
          <p className="text-warm-white/60 text-center text-sm md:text-base mb-8 max-w-md mx-auto">
            Every movement needs all four. Which one calls to you?
          </p>
          <div className="grid grid-cols-2 gap-3">
            {HOUSES.map((house) => (
              <div
                key={house.name}
                className="rounded-xl p-4 text-center border border-white/10 flex flex-col items-center"
                style={{ backgroundColor: house.color + '20' }}
              >
                <img
                  src={`/icons/landing/${house.icon}`}
                  alt=""
                  className="w-12 h-12 md:w-14 md:h-14 rounded-lg object-cover mb-2"
                  draggable={false}
                />
                <h3 className="font-bold text-warm-white text-sm md:text-base mb-1">
                  House of {house.name}
                </h3>
                <p className="text-warm-white/60 text-xs md:text-sm leading-relaxed">{house.tagline}</p>
              </div>
            ))}
          </div>
        </Section>
      </div>

      {/* ── How It Works ── */}
      <div className="px-6 py-12 md:py-16">
        <Section className="max-w-2xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-warm-white text-center mb-8">
            How It Works
          </h2>
          <div className="space-y-4">
            {PHASES.map((phase) => (
              <div
                key={phase.num}
                className="flex items-start gap-4 bg-warm-white/5 border border-warm-white/10 rounded-xl p-4"
              >
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-teal/20 text-teal font-bold
                                flex items-center justify-center text-lg">
                  {phase.num}
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-warm-white font-bold text-sm md:text-base mb-0.5">{phase.title}</h3>
                  <p className="text-warm-white/60 text-xs md:text-sm leading-relaxed">{phase.desc}</p>
                </div>
                <span className="text-warm-white/30 text-xs md:text-sm flex-shrink-0 pt-0.5">
                  {phase.questions}q
                </span>
              </div>
            ))}
          </div>
        </Section>
      </div>

      {/* ── Strengths-Based Callout ── */}
      <div className="px-6 py-12 md:py-16 bg-warm-white/[0.03]">
        <Section className="max-w-xl mx-auto text-center">
          <img
            src="/icons/landing/lightbulb.png"
            alt=""
            className="w-14 h-14 md:w-16 md:h-16 rounded-xl object-cover mx-auto mb-4"
            draggable={false}
          />
          <h2 className="text-xl md:text-2xl font-bold text-warm-white mb-3">
            This Isn't a Test
          </h2>
          <p className="text-warm-white/70 text-sm md:text-base leading-relaxed mb-2">
            There are no right or wrong answers. Every archetype is powerful.
            Every house is essential. The Discovery Engine identifies your
            natural strengths and maps them to where you can make the
            greatest impact.
          </p>
          <p className="text-warm-white/50 text-xs md:text-sm">
            Scenario-based questions reveal your instincts through choice, not self-report.
          </p>
        </Section>
      </div>

      {/* ── Before You Begin ── */}
      <div className="px-6 py-12 md:py-16">
        <Section className="max-w-xl mx-auto text-center">
          <img
            src="/icons/landing/shield-lock.png"
            alt=""
            className="w-14 h-14 md:w-16 md:h-16 rounded-xl object-cover mx-auto mb-4"
            draggable={false}
          />
          <h2 className="text-xl md:text-2xl font-bold text-warm-white mb-3">
            Before You Begin
          </h2>
          <p className="text-warm-white/70 text-sm md:text-base leading-relaxed mb-3">
            Your privacy is our priority. This quiz runs entirely in your
            browser — no data is collected, stored, or sent to any server. That
            also means there's no way to save your progress and return later, so
            set aside 20–30 minutes to complete it in one sitting.
          </p>
          <p className="text-warm-white/70 text-sm md:text-base leading-relaxed">
            When you reach your results,{' '}
            <span className="font-semibold text-warm-white">
              download your Character Sheet as a PDF or image
            </span>
            . Once you close or refresh the page, your results are gone for good.
          </p>
        </Section>
      </div>

      {/* ── Bottom CTA ── */}
      <div className="px-6 py-16 md:py-20 text-center">
        <Section className="max-w-lg mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-warm-white mb-4">
            Ready to find your archetype?
          </h2>
          <p className="text-warm-white/60 text-sm md:text-base mb-8">
            ~20–30 minutes. Completely free. Shareable character sheet at the end.
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            onClick={startQuiz}
            className="bg-gold text-navy font-bold text-lg px-10 py-4 rounded-xl
                       hover:bg-gold/90 transition-colors cursor-pointer
                       shadow-lg shadow-gold/25 min-h-11
                       focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2 focus-visible:ring-offset-navy"
          >
            Begin Your Discovery
          </motion.button>
        </Section>
      </div>

      {/* ── Footer ── */}
      <div className="px-6 pb-8 text-center space-y-3">
        <div className="flex flex-col items-center gap-2">
          <GJLAShieldIcon size={24} variant="white" />
          <p
            className="text-warm-white/40 font-bold"
            style={{ fontFamily: 'Georgia, "Times New Roman", serif', fontSize: 12 }}
          >
            Gender Justice League Action
          </p>
          <p
            className="uppercase"
            style={{ fontSize: 8, letterSpacing: '0.2em', color: 'rgba(232, 160, 32, 0.3)' }}
          >
            Dignity &middot; Rights &middot; Power
          </p>
        </div>
        <p className="text-warm-white/30 text-xs md:text-sm">
          &copy; 2026 Gender Justice League Action. All rights reserved.
        </p>
        <button
          onClick={() => setShowPrivacy(true)}
          className="text-warm-white/30 text-xs md:text-sm underline hover:text-warm-white/50 transition-colors cursor-pointer"
        >
          Privacy Policy
        </button>
      </div>

      {/* ── Privacy Policy Modal ── */}
      <AnimatePresence>
        {showPrivacy && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={getTransition(0.2)}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60"
            onClick={() => setShowPrivacy(false)}
          >
            <motion.div
              initial={{ opacity: 0, y: 20, scale: 0.97 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 20, scale: 0.97 }}
              transition={getTransition(0.25)}
              onClick={(e) => e.stopPropagation()}
              className="bg-navy border border-warm-white/10 rounded-2xl max-w-lg w-full max-h-[80vh] overflow-y-auto p-6 md:p-8"
            >
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-bold text-warm-white">Privacy Policy</h2>
                <button
                  onClick={() => setShowPrivacy(false)}
                  className="text-warm-white/50 hover:text-warm-white transition-colors text-2xl leading-none cursor-pointer"
                  aria-label="Close privacy policy"
                >
                  &times;
                </button>
              </div>

              <div className="space-y-4 text-warm-white/70 text-sm leading-relaxed">
                <p>
                  <strong className="text-warm-white">Last updated:</strong> March 2026
                </p>

                <h3 className="text-warm-white font-semibold text-base">No Data Collection</h3>
                <p>
                  The Activist Academy Discovery Engine does not collect, store, or retain any
                  personal data. All quiz responses are processed entirely in your browser and
                  are never sent to any server.
                </p>

                <h3 className="text-warm-white font-semibold text-base">No Data Sales</h3>
                <p>
                  We do not sell, trade, rent, or otherwise share any user data with third
                  parties. Since we do not collect data, there is nothing to sell.
                </p>

                <h3 className="text-warm-white font-semibold text-base">No Tracking or Analytics</h3>
                <p>
                  This application does not use cookies, tracking pixels, analytics services,
                  or any other form of user tracking. Your experience is completely private.
                </p>

                <h3 className="text-warm-white font-semibold text-base">Local Processing Only</h3>
                <p>
                  Your quiz answers, scores, and archetype results are calculated entirely
                  on your device. When you close or refresh the page, all data is gone.
                  Nothing is stored in your browser's local storage or sent externally.
                </p>

                <h3 className="text-warm-white font-semibold text-base">Image Export</h3>
                <p>
                  If you choose to save or share your character sheet as an image, that image
                  is generated locally on your device. We have no access to it. Any sharing
                  you do is entirely at your discretion.
                </p>

                <h3 className="text-warm-white font-semibold text-base">Contact</h3>
                <p>
                  Questions about this policy? Reach out to Danni Askini at The Activist Academy.
                </p>
              </div>

              <button
                onClick={() => setShowPrivacy(false)}
                className="mt-6 w-full bg-warm-white/10 text-warm-white font-medium text-sm py-3 rounded-xl
                           hover:bg-warm-white/15 transition-colors cursor-pointer"
              >
                Close
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
