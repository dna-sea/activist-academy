import { PHASES, QUESTION_COUNTS } from '../../utils/constants';
import { useQuiz } from '../../context/QuizContext';

export default function ProgressBar() {
  const { currentPhase, currentQuestionIndex } = useQuiz();
  const phaseKeys = ['motivation', 'stats', 'skills', 'orientation'];

  const totalAnswered = phaseKeys.slice(0, currentPhase).reduce(
    (sum, key) => sum + QUESTION_COUNTS[key], 0
  ) + currentQuestionIndex;
  const totalQuestions = 54;
  const overallPercent = (totalAnswered / totalQuestions) * 100;

  return (
    <div className="w-full px-4 py-3 bg-white/80 backdrop-blur-sm border-b border-charcoal/10 sticky top-0 z-50">
      <div className="max-w-3xl mx-auto">
        {/* Phase indicators */}
        <div className="flex items-center justify-between mb-2" role="list" aria-label="Quiz phases">
          {PHASES.map((phase, idx) => {
            const status = idx < currentPhase ? 'completed' : idx === currentPhase ? 'current' : 'upcoming';
            return (
              <div
                key={phase.id}
                className="flex items-center gap-1.5 text-xs font-medium"
                role="listitem"
                aria-label={`${phase.name}: ${status}`}
              >
                <div
                  className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold transition-colors ${
                    idx < currentPhase
                      ? 'bg-teal text-white'
                      : idx === currentPhase
                      ? 'bg-navy text-white'
                      : 'bg-charcoal/10 text-charcoal/40'
                  }`}
                  aria-hidden="true"
                >
                  {idx < currentPhase ? '✓' : idx + 1}
                </div>
                <span
                  className={`hidden sm:inline transition-colors ${
                    idx <= currentPhase ? 'text-charcoal' : 'text-charcoal/40'
                  }`}
                >
                  {phase.name}
                </span>
              </div>
            );
          })}
        </div>

        {/* Progress bar */}
        <div
          className="h-2 bg-charcoal/10 rounded-full overflow-hidden"
          role="progressbar"
          aria-valuenow={Math.round(overallPercent)}
          aria-valuemin={0}
          aria-valuemax={100}
          aria-label={`Quiz progress: ${totalAnswered} of ${totalQuestions} questions answered`}
        >
          <div
            className="h-full bg-gradient-to-r from-teal to-gold rounded-full transition-all duration-500 ease-out"
            style={{ width: `${overallPercent}%` }}
          />
        </div>
      </div>
    </div>
  );
}
