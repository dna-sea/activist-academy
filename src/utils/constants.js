export const SCREENS = {
  LANDING: 'landing',
  PHASE_INTRO: 'phase_intro',
  QUIZ: 'quiz',
  PROCESSING: 'processing',
  REVEAL: 'reveal',
  CHARACTER_SHEET: 'character_sheet',
  ALL_ARCHETYPES: 'all_archetypes',
  HOUSE_DETAIL: 'house_detail',
};

export const SITE_URL = 'https://activist-academy.vercel.app';

export const PHASES = [
  {
    id: 'motivation',
    name: 'Motivation Profile',
    description: "First, let's understand what calls you to this work...",
    icon: '🔥',
  },
  {
    id: 'stats',
    name: 'Core Stats Assessment',
    description: "Now let's measure your starting attributes across ten core dimensions...",
    icon: '📊',
  },
  {
    id: 'skills',
    name: 'Skills Inventory',
    description: "Time to honestly assess your existing competencies. No judgments — just a snapshot of where you're starting from...",
    icon: '🛠',
  },
  {
    id: 'orientation',
    name: 'Strategic Orientation',
    description: "These questions reveal your natural strategic posture. There are no right or wrong answers — movements need people everywhere on these spectrums.",
    icon: '🧭',
  },
];

export const QUESTION_COUNTS = {
  motivation: 6,
  stats: 30,
  skills: 10,
  orientation: 8,
};

export const TOTAL_QUESTIONS = 54;

export const HOUSE_COLORS = {
  vision: '#6B3FA0',
  connection: '#2D8659',
  action: '#C4652A',
  infrastructure: '#3A6B8C',
};

export const STAT_LABELS = {
  conflict: 'Conflict',
  empathyListening: 'Empathy & Listening',
  strategicThinking: 'Strategic Thinking',
  adaptability: 'Adaptability',
  creativeProblemSolving: 'Creative Problem Solving',
  groupIntelligence: 'Group Intelligence',
  numbersOperations: 'Numbers & Operations',
  leadership: 'Leadership',
  communication: 'Communication',
  inspire: 'Inspire',
};

export const MOTIVATION_LABELS = {
  justice: 'Justice',
  community: 'Community',
  policy: 'Policy',
  service: 'Service',
  disruption: 'Disruption',
  narrative: 'Narrative',
};

export const SKILL_LABELS = {
  organizing: 'Community Organizing',
  fundraising: 'Fundraising & Development',
  publicSpeaking: 'Public Speaking & Testimony',
  writing: 'Writing & Content Creation',
  legalKnowledge: 'Legal & Policy Knowledge',
  dataAnalysis: 'Data & Research',
  eventPlanning: 'Event Planning & Logistics',
  socialMedia: 'Digital & Social Media',
  counseling: 'Counseling & Support',
  projectManagement: 'Project Management',
};
