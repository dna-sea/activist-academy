import { useState, useCallback, useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { QuizProvider, useQuiz } from './context/QuizContext';
import { SCREENS, QUESTION_COUNTS } from './utils/constants';
import { getTransition } from './utils/accessibility';
import LandingPage from './components/landing/LandingPage';
import QuizShell from './components/layout/QuizShell';
import PhaseTransition from './components/layout/PhaseTransition';
import ScenarioQuestion from './components/quiz/ScenarioQuestion';
import LikertQuestion from './components/quiz/LikertQuestion';
import SelfRatingCard from './components/quiz/SelfRatingCard';
import { motivationQuestions } from './data/motivationQuestions';
import { statQuestions } from './data/statQuestions';
import { skillQuestions } from './data/skillQuestions';
import { orientationQuestions } from './data/orientationQuestions';
import ProcessingScreen from './components/results/ProcessingScreen';
import ArchetypeReveal from './components/results/ArchetypeReveal';
import CharacterSheet from './components/results/CharacterSheet';
import AllArchetypesPage from './components/pages/AllArchetypesPage';
import HouseDetailPage from './components/pages/HouseDetailPage';
import ArchetypeProfilePage from './components/pages/ArchetypeProfilePage';
import HouseProfilePage from './components/pages/HouseProfilePage';
import ErrorBoundary from './components/layout/ErrorBoundary';

function QuizApp() {
  const quiz = useQuiz();
  const [answering, setAnswering] = useState(false);

  const guardDoubleClick = (fn) => {
    return (...args) => {
      if (answering) return;
      setAnswering(true);
      fn(...args);
      setTimeout(() => setAnswering(false), 350);
    };
  };

  const handleMotivationAnswer = useCallback((choice) => {
    quiz.answerMotivation(choice.effects);
  }, [quiz.answerMotivation]);

  const handleStatAnswer = useCallback((stat, points) => {
    quiz.answerStat(stat, points);
  }, [quiz.answerStat]);

  const handleSkillAnswer = useCallback((skill, rating) => {
    quiz.answerSkill(skill, rating);
  }, [quiz.answerSkill]);

  const handleOrientationAnswer = useCallback((choice) => {
    quiz.answerOrientation(
      orientationQuestions[quiz.currentQuestionIndex]?.spectrum,
      choice.shift
    );
  }, [quiz.answerOrientation, quiz.currentQuestionIndex]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [quiz.currentScreen]);

  const renderQuizPhase = () => {
    const backProps = { onGoBack: quiz.goBack, canGoBack: quiz.canGoBack };
    switch (quiz.currentPhase) {
      case 0:
        return (
          <ScenarioQuestion
            question={motivationQuestions[quiz.currentQuestionIndex]}
            questionNumber={quiz.currentQuestionIndex + 1}
            totalQuestions={QUESTION_COUNTS.motivation}
            onAnswer={guardDoubleClick(handleMotivationAnswer)}
            {...backProps}
          />
        );
      case 1:
        return (
          <LikertQuestion
            question={statQuestions[quiz.currentQuestionIndex]}
            questionNumber={quiz.currentQuestionIndex + 1}
            totalQuestions={QUESTION_COUNTS.stats}
            onAnswer={guardDoubleClick(handleStatAnswer)}
            {...backProps}
          />
        );
      case 2:
        return (
          <SelfRatingCard
            question={skillQuestions[quiz.currentQuestionIndex]}
            questionNumber={quiz.currentQuestionIndex + 1}
            totalQuestions={QUESTION_COUNTS.skills}
            onAnswer={guardDoubleClick(handleSkillAnswer)}
            {...backProps}
          />
        );
      case 3:
        return (
          <ScenarioQuestion
            question={orientationQuestions[quiz.currentQuestionIndex]}
            questionNumber={quiz.currentQuestionIndex + 1}
            totalQuestions={QUESTION_COUNTS.orientation}
            onAnswer={guardDoubleClick(handleOrientationAnswer)}
            {...backProps}
          />
        );
      default:
        return null;
    }
  };

  return (
    <>
      <AnimatePresence mode="wait">
        {quiz.currentScreen === SCREENS.LANDING && (
          <motion.div key="landing" exit={{ opacity: 0 }} transition={getTransition(0.3)}>
            <LandingPage />
          </motion.div>
        )}

        {quiz.currentScreen === SCREENS.PHASE_INTRO && (
          <motion.div key={`intro-${quiz.currentPhase}`} exit={{ opacity: 0 }} transition={getTransition(0.3)}>
            <QuizShell>
              <PhaseTransition />
            </QuizShell>
          </motion.div>
        )}

        {quiz.currentScreen === SCREENS.QUIZ && (
          <motion.div key={`quiz-${quiz.currentPhase}`} exit={{ opacity: 0 }} transition={getTransition(0.3)}>
            <QuizShell>
              {renderQuizPhase()}
            </QuizShell>
          </motion.div>
        )}

        {quiz.currentScreen === SCREENS.PROCESSING && (
          <motion.div key="processing" exit={{ opacity: 0 }} transition={getTransition(0.3)}>
            <ProcessingScreen />
          </motion.div>
        )}

        {quiz.currentScreen === SCREENS.REVEAL && (
          <motion.div key="reveal" exit={{ opacity: 0 }} transition={getTransition(0.3)}>
            <ArchetypeReveal />
          </motion.div>
        )}

        {quiz.currentScreen === SCREENS.CHARACTER_SHEET && (
          <motion.div key="sheet" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={getTransition(0.5)}>
            <CharacterSheet />
          </motion.div>
        )}

        {quiz.currentScreen === SCREENS.ALL_ARCHETYPES && (
          <motion.div key="all-archetypes" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={getTransition(0.3)}>
            <AllArchetypesPage />
          </motion.div>
        )}

        {quiz.currentScreen === SCREENS.HOUSE_DETAIL && (
          <motion.div key="house-detail" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={getTransition(0.3)}>
            <HouseDetailPage />
          </motion.div>
        )}

        {quiz.currentScreen === SCREENS.ARCHETYPE_PROFILE && (
          <motion.div key="archetype-profile" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={getTransition(0.3)}>
            <ArchetypeProfilePage />
          </motion.div>
        )}

        {quiz.currentScreen === SCREENS.HOUSE_PROFILE && (
          <motion.div key="house-profile" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={getTransition(0.3)}>
            <HouseProfilePage />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

export default function App() {
  return (
    <ErrorBoundary>
      <QuizProvider>
        <QuizApp />
      </QuizProvider>
    </ErrorBoundary>
  );
}
