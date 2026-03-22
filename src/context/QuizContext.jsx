import { createContext, useContext, useReducer } from 'react';
import { SCREENS, QUESTION_COUNTS } from '../utils/constants';

const QuizContext = createContext(null);

const initialState = {
  currentScreen: SCREENS.LANDING,
  currentPhase: 0,
  currentQuestionIndex: 0,

  motivations: {
    justice: 0,
    community: 0,
    policy: 0,
    service: 0,
    disruption: 0,
    narrative: 0,
  },

  stats: {
    conflict: 0,
    empathyListening: 0,
    strategicThinking: 0,
    adaptability: 0,
    creativeProblemSolving: 0,
    groupIntelligence: 0,
    numbersOperations: 0,
    leadership: 0,
    communication: 0,
    inspire: 0,
  },

  skills: {
    organizing: 0,
    fundraising: 0,
    publicSpeaking: 0,
    writing: 0,
    legalKnowledge: 0,
    dataAnalysis: 0,
    eventPlanning: 0,
    socialMedia: 0,
    counseling: 0,
    projectManagement: 0,
  },

  orientation: {
    insideOutside: 0,
    righteousnessRelationship: 0,
  },

  answers: [],
  results: null,
  selectedHouseId: null,
  selectedArchetypeKey: null,
  previousScreen: null,
};

const phaseKeys = ['motivation', 'stats', 'skills', 'orientation'];
const phaseCounts = [
  QUESTION_COUNTS.motivation,
  QUESTION_COUNTS.stats,
  QUESTION_COUNTS.skills,
  QUESTION_COUNTS.orientation,
];

function quizReducer(state, action) {
  switch (action.type) {
    case 'START_QUIZ':
      return {
        ...state,
        currentScreen: SCREENS.PHASE_INTRO,
        currentPhase: 0,
        currentQuestionIndex: 0,
      };

    case 'DISMISS_PHASE_INTRO':
      return {
        ...state,
        currentScreen: SCREENS.QUIZ,
      };

    case 'ANSWER_MOTIVATION': {
      const newMotivations = { ...state.motivations };
      for (const [key, value] of Object.entries(action.payload.effects)) {
        newMotivations[key] = (newMotivations[key] || 0) + value;
      }
      const newIndex = state.currentQuestionIndex + 1;
      const isPhaseComplete = newIndex >= phaseCounts[state.currentPhase];

      return {
        ...state,
        motivations: newMotivations,
        currentQuestionIndex: newIndex,
        answers: [...state.answers, { phase: 0, questionIndex: state.currentQuestionIndex, ...action.payload }],
        ...(isPhaseComplete ? {
          currentScreen: SCREENS.PHASE_INTRO,
          currentPhase: state.currentPhase + 1,
          currentQuestionIndex: 0,
        } : {}),
      };
    }

    case 'ANSWER_STAT': {
      const newStats = { ...state.stats };
      newStats[action.payload.stat] = (newStats[action.payload.stat] || 0) + action.payload.points;
      const newIndex = state.currentQuestionIndex + 1;
      const isPhaseComplete = newIndex >= phaseCounts[state.currentPhase];

      return {
        ...state,
        stats: newStats,
        currentQuestionIndex: newIndex,
        answers: [...state.answers, { phase: 1, questionIndex: state.currentQuestionIndex, ...action.payload }],
        ...(isPhaseComplete ? {
          currentScreen: SCREENS.PHASE_INTRO,
          currentPhase: state.currentPhase + 1,
          currentQuestionIndex: 0,
        } : {}),
      };
    }

    case 'ANSWER_SKILL': {
      const newSkills = { ...state.skills };
      newSkills[action.payload.skill] = action.payload.rating;
      const newIndex = state.currentQuestionIndex + 1;
      const isPhaseComplete = newIndex >= phaseCounts[state.currentPhase];

      return {
        ...state,
        skills: newSkills,
        currentQuestionIndex: newIndex,
        answers: [...state.answers, { phase: 2, questionIndex: state.currentQuestionIndex, ...action.payload }],
        ...(isPhaseComplete ? {
          currentScreen: SCREENS.PHASE_INTRO,
          currentPhase: state.currentPhase + 1,
          currentQuestionIndex: 0,
        } : {}),
      };
    }

    case 'ANSWER_ORIENTATION': {
      const newOrientation = { ...state.orientation };
      newOrientation[action.payload.spectrum] =
        (newOrientation[action.payload.spectrum] || 0) + action.payload.shift;
      const newIndex = state.currentQuestionIndex + 1;
      const isPhaseComplete = newIndex >= phaseCounts[state.currentPhase];

      return {
        ...state,
        orientation: newOrientation,
        currentQuestionIndex: newIndex,
        answers: [...state.answers, { phase: 3, questionIndex: state.currentQuestionIndex, ...action.payload }],
        ...(isPhaseComplete ? {
          currentScreen: SCREENS.PROCESSING,
        } : {}),
      };
    }

    case 'SET_RESULTS':
      return {
        ...state,
        results: action.payload,
        currentScreen: SCREENS.REVEAL,
      };

    case 'SHOW_CHARACTER_SHEET':
      return {
        ...state,
        currentScreen: SCREENS.CHARACTER_SHEET,
      };

    case 'GO_BACK': {
      if (state.answers.length === 0) return state;

      const newAnswers = [...state.answers];
      const lastAnswer = newAnswers.pop();
      const newState = { ...state, answers: newAnswers };

      // Reverse score changes based on phase
      switch (lastAnswer.phase) {
        case 0: {
          const newMotivations = { ...state.motivations };
          for (const [key, value] of Object.entries(lastAnswer.effects)) {
            newMotivations[key] = (newMotivations[key] || 0) - value;
          }
          newState.motivations = newMotivations;
          break;
        }
        case 1: {
          const newStats = { ...state.stats };
          newStats[lastAnswer.stat] = (newStats[lastAnswer.stat] || 0) - lastAnswer.points;
          newState.stats = newStats;
          break;
        }
        case 2: {
          const newSkills = { ...state.skills };
          newSkills[lastAnswer.skill] = 0;
          newState.skills = newSkills;
          break;
        }
        case 3: {
          const newOrientation = { ...state.orientation };
          newOrientation[lastAnswer.spectrum] = (newOrientation[lastAnswer.spectrum] || 0) - lastAnswer.shift;
          newState.orientation = newOrientation;
          break;
        }
      }

      newState.currentPhase = lastAnswer.phase;
      newState.currentQuestionIndex = lastAnswer.questionIndex;
      newState.currentScreen = SCREENS.QUIZ;
      return newState;
    }

    case 'SHOW_ALL_ARCHETYPES':
      return { ...state, currentScreen: SCREENS.ALL_ARCHETYPES };

    case 'SHOW_HOUSE_DETAIL':
      return { ...state, currentScreen: SCREENS.HOUSE_DETAIL, selectedHouseId: action.payload };

    case 'BACK_TO_CHARACTER_SHEET':
      return { ...state, currentScreen: SCREENS.CHARACTER_SHEET };

    case 'SHOW_ARCHETYPE_PROFILE':
      return {
        ...state,
        previousScreen: state.currentScreen,
        currentScreen: SCREENS.ARCHETYPE_PROFILE,
        selectedArchetypeKey: action.payload,
      };

    case 'SHOW_HOUSE_PROFILE':
      return {
        ...state,
        previousScreen: state.currentScreen,
        currentScreen: SCREENS.HOUSE_PROFILE,
        selectedHouseId: action.payload,
      };

    case 'BACK_TO_LANDING':
      return { ...state, currentScreen: SCREENS.LANDING };

    case 'GO_BACK_FROM_PROFILE':
      return {
        ...state,
        currentScreen: state.previousScreen || SCREENS.LANDING,
        previousScreen: null,
      };

    case 'SHOW_SAVED_PROFILE':
      return { ...state, currentScreen: SCREENS.SAVED_PROFILE };

    case 'LOAD_SAVED_RESULTS':
      return {
        ...state,
        results: action.payload,
        currentScreen: SCREENS.CHARACTER_SHEET,
      };

    case 'RESET_QUIZ':
      return { ...initialState };

    default:
      return state;
  }
}

export function QuizProvider({ children }) {
  const [state, dispatch] = useReducer(quizReducer, initialState);
  return (
    <QuizContext.Provider value={{ state, dispatch }}>
      {children}
    </QuizContext.Provider>
  );
}

export function useQuiz() {
  const context = useContext(QuizContext);
  if (!context) throw new Error('useQuiz must be used within a QuizProvider');
  const { state, dispatch } = context;

  return {
    ...state,
    canGoBack: state.answers.length > 0 && (state.currentScreen === SCREENS.QUIZ || state.currentScreen === SCREENS.PHASE_INTRO),
    startQuiz: () => dispatch({ type: 'START_QUIZ' }),
    dismissPhaseIntro: () => dispatch({ type: 'DISMISS_PHASE_INTRO' }),
    answerMotivation: (effects) => dispatch({ type: 'ANSWER_MOTIVATION', payload: { effects } }),
    answerStat: (stat, points) => dispatch({ type: 'ANSWER_STAT', payload: { stat, points } }),
    answerSkill: (skill, rating) => dispatch({ type: 'ANSWER_SKILL', payload: { skill, rating } }),
    answerOrientation: (spectrum, shift) => dispatch({ type: 'ANSWER_ORIENTATION', payload: { spectrum, shift } }),
    setResults: (results) => dispatch({ type: 'SET_RESULTS', payload: results }),
    showCharacterSheet: () => dispatch({ type: 'SHOW_CHARACTER_SHEET' }),
    resetQuiz: () => dispatch({ type: 'RESET_QUIZ' }),
    goBack: () => dispatch({ type: 'GO_BACK' }),
    showAllArchetypes: () => dispatch({ type: 'SHOW_ALL_ARCHETYPES' }),
    showHouseDetail: (houseId) => dispatch({ type: 'SHOW_HOUSE_DETAIL', payload: houseId }),
    backToCharacterSheet: () => dispatch({ type: 'BACK_TO_CHARACTER_SHEET' }),
    showArchetypeProfile: (key) => dispatch({ type: 'SHOW_ARCHETYPE_PROFILE', payload: key }),
    showHouseProfile: (houseId) => dispatch({ type: 'SHOW_HOUSE_PROFILE', payload: houseId }),
    backToLanding: () => dispatch({ type: 'BACK_TO_LANDING' }),
    goBackFromProfile: () => dispatch({ type: 'GO_BACK_FROM_PROFILE' }),
    showSavedProfile: () => dispatch({ type: 'SHOW_SAVED_PROFILE' }),
    loadSavedResults: (results) => dispatch({ type: 'LOAD_SAVED_RESULTS', payload: results }),
  };
}
