export const motivationQuestions = [
  {
    id: 'M1',
    text: "You witness an injustice happening in your community. What's your first instinct?",
    choices: [
      { text: "Analyze the systemic root causes and think about how to dismantle the structures that allowed this to happen", effects: { justice: 2, disruption: 1 } },
      { text: "Reach out to the people affected and ask how you can support them right now", effects: { service: 2, community: 1 } },
      { text: "Start thinking about what policy or law could prevent this from happening again", effects: { policy: 2, justice: 1 } },
      { text: "Find the people who are already organizing around this and figure out how to amplify their voices", effects: { community: 2, narrative: 1 } },
      { text: "Draft a powerful message or story that could make others understand what happened and why it matters", effects: { narrative: 2, justice: 1 } },
      { text: "Show up immediately to disrupt the situation and put your body between the harm and the people being hurt", effects: { disruption: 2, service: 1 } },
    ],
  },
  {
    id: 'M2',
    text: "You're at a community meeting and the conversation turns to strategy. Which contribution feels most natural to you?",
    choices: [
      { text: "\"Here's the policy change we need to push for, and here's who has the power to make it happen.\"", effects: { policy: 2, justice: 1 } },
      { text: "\"Before we strategize, we need to hear from the people most affected \u2014 their experience should guide us.\"", effects: { community: 2, service: 1 } },
      { text: "\"The whole system is designed to produce this outcome. We need to be thinking about transformation, not just reform.\"", effects: { disruption: 2, justice: 1 } },
      { text: "\"Let me tell you a story about someone this affected \u2014 that's how we get people to care.\"", effects: { narrative: 2, community: 1 } },
      { text: "\"What are the immediate needs? Who's hurting right now, and what can we do today?\"", effects: { service: 2, community: 1 } },
      { text: "\"Let me map out the legislative calendar and identify our pressure points for the next six months.\"", effects: { policy: 2, disruption: 1 } },
    ],
  },
  {
    id: 'M3',
    text: "Imagine you've been given unlimited resources for one year. What do you build?",
    choices: [
      { text: "A legal and policy institute that writes model legislation and trains advocates to pass it in every state", effects: { policy: 2, justice: 1 } },
      { text: "A community center where people can access direct support, connect with each other, and heal together", effects: { service: 2, community: 1 } },
      { text: "A media operation that tells the stories the mainstream press ignores and shifts public consciousness", effects: { narrative: 2, disruption: 1 } },
      { text: "A grassroots network that connects and empowers communities across the country to organize locally", effects: { community: 2, service: 1 } },
      { text: "A think tank that researches and publishes the deep structural analysis needed to reimagine systems entirely", effects: { justice: 2, disruption: 1 } },
      { text: "A training program that equips the next generation of disruptors with the tools to challenge power directly", effects: { disruption: 2, narrative: 1 } },
    ],
  },
  {
    id: 'M4',
    text: "When you think about \"success\" in social justice work, what does it look like?",
    choices: [
      { text: "A landmark court decision or law that enshrines protections and creates enforceable rights", effects: { policy: 2, justice: 1 } },
      { text: "A community that is thriving, connected, and taking care of its own \u2014 regardless of what the government does", effects: { community: 2, service: 1 } },
      { text: "A fundamental shift in how people think about an issue \u2014 the culture has moved, and there's no going back", effects: { narrative: 2, disruption: 1 } },
      { text: "Every person in crisis has someone to call, somewhere to go, and a community that won't let them fall", effects: { service: 2, community: 1 } },
      { text: "The systems that produce injustice have been dismantled and replaced with something genuinely equitable", effects: { justice: 2, disruption: 1 } },
      { text: "The people most affected are now the ones in positions of power, making the decisions", effects: { disruption: 2, policy: 1 } },
    ],
  },
  {
    id: 'M5',
    text: "You're burned out and questioning whether the work matters. What pulls you back in?",
    choices: [
      { text: "Remembering that people are counting on you \u2014 there are individuals who need help right now", effects: { service: 2, community: 1 } },
      { text: "Reading or hearing a story that reminds you why this fight is worth it", effects: { narrative: 2, justice: 1 } },
      { text: "A strategic opening \u2014 a political window or policy opportunity that can't be wasted", effects: { policy: 2, disruption: 1 } },
      { text: "Your community \u2014 the people you organize with, who remind you that you're not alone", effects: { community: 2, service: 1 } },
      { text: "Rage \u2014 the injustice is still happening, and someone has to fight it", effects: { justice: 2, disruption: 1 } },
      { text: "The belief that another world is possible, and that this moment is part of getting there", effects: { disruption: 2, narrative: 1 } },
    ],
  },
  {
    id: 'M6',
    text: "Which of these statements resonates most deeply with you?",
    choices: [
      { text: "\"The arc of the moral universe is long, but it bends toward justice \u2014 and I want to be part of bending it.\"", effects: { justice: 2, narrative: 1 } },
      { text: "\"Real change happens in relationships \u2014 one conversation, one connection, one community at a time.\"", effects: { community: 2, service: 1 } },
      { text: "\"Policy is where the rubber meets the road. If it's not in law, it's just a suggestion.\"", effects: { policy: 2, justice: 1 } },
      { text: "\"I believe in showing up for people \u2014 not in the abstract, but in the specific, messy, human reality of their lives.\"", effects: { service: 2, community: 1 } },
      { text: "\"You can't reform a system that's working exactly as designed. We need something fundamentally different.\"", effects: { disruption: 2, justice: 1 } },
      { text: "\"Stories change the world. When people see themselves in a different story, they become different people.\"", effects: { narrative: 2, community: 1 } },
    ],
  },
];
