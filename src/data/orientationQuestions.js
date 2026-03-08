export const orientationQuestions = [
  // INSIDE/OUTSIDE SPECTRUM (4 questions)
  {
    id: 'IO1', spectrum: 'insideOutside',
    text: "A piece of harmful legislation is moving through committee. You have limited time and resources. Where do you focus?",
    choices: [
      { text: "Schedule meetings with committee members to negotiate amendments that reduce harm", shift: -2 },
      { text: "Work with legislative staff behind the scenes to insert protective language", shift: -1 },
      { text: "Organize impacted community members to testify at public hearings", shift: 0 },
      { text: "Launch a public pressure campaign targeting committee members in their districts", shift: 1 },
      { text: "Organize direct actions at committee members' offices to make the political cost of supporting the bill visible", shift: 2 },
    ],
  },
  {
    id: 'IO2', spectrum: 'insideOutside',
    text: "Your community has been fighting for a policy change for years. A sympathetic elected official offers to champion it, but wants you to moderate some of your demands to make the bill \"passable.\" What do you do?",
    choices: [
      { text: "Accept the compromise \u2014 getting something passed is better than getting nothing", shift: -2 },
      { text: "Negotiate further but ultimately work within their framework", shift: -1 },
      { text: "Maintain your full demands publicly while signaling willingness to negotiate privately", shift: 0 },
      { text: "Reject the compromise and escalate public pressure to move the official toward your full position", shift: 1 },
      { text: "Use the official's offer as evidence that the system is designed to absorb and neutralize real change, and organize independently", shift: 2 },
    ],
  },
  {
    id: 'IO3', spectrum: 'insideOutside',
    text: "You're advising a new activist on how to approach a local issue. Which advice feels most right to you?",
    choices: [
      { text: "\"Build relationships with the decision-makers first. Change happens when you have a seat at the table.\"", shift: -2 },
      { text: "\"Learn how the system works \u2014 legislative calendars, regulatory processes, budget cycles. That's where the openings are.\"", shift: -1 },
      { text: "\"Do both \u2014 work the inside game and the outside game simultaneously.\"", shift: 0 },
      { text: "\"Build your base first. You need people power before you need access to power.\"", shift: 1 },
      { text: "\"Don't ask permission. Create the change you want to see and force the system to respond.\"", shift: 2 },
    ],
  },
  {
    id: 'IO4', spectrum: 'insideOutside',
    text: "A major victory is possible, but only through a strategy that requires working closely with an institution you fundamentally distrust. What's your instinct?",
    choices: [
      { text: "Engage strategically \u2014 you can work within systems you distrust if the outcome serves your community", shift: -2 },
      { text: "Engage cautiously, with clear boundaries and an exit plan", shift: -1 },
      { text: "It depends entirely on the specific situation and the stakes", shift: 0 },
      { text: "Build alternative power outside the institution that eventually makes its cooperation unnecessary", shift: 1 },
      { text: "Refuse to legitimize the institution \u2014 working within it only strengthens it", shift: 2 },
    ],
  },
  // RIGHTEOUSNESS/RELATIONSHIP SPECTRUM (4 questions)
  {
    id: 'RR1', spectrum: 'righteousnessRelationship',
    text: "A corporation that profited from environmental destruction in your community now wants to fund a cleanup initiative led by local residents. They're offering significant resources with no strings attached. What's your instinct?",
    choices: [
      { text: "Accept immediately \u2014 the community deserves these resources regardless of the source, and refusing them punishes the people who need help", shift: -2 },
      { text: "Accept with transparent public reporting \u2014 take the resources but make sure everyone knows where they came from", shift: -1 },
      { text: "Convene community members to decide collectively whether to accept or reject the funding", shift: 0 },
      { text: "Decline and organize community fundraising instead \u2014 accepting cleanup money from the polluter lets them buy absolution", shift: 1 },
      { text: "Decline publicly and use the offer as evidence in your ongoing campaign against the corporation \u2014 accountability comes before charity", shift: 2 },
    ],
  },
  {
    id: 'RR2', spectrum: 'righteousnessRelationship',
    text: "You're negotiating with a political opponent who holds significant power over an issue your community cares about. They're willing to give you 60% of what you want, but only if you publicly endorse them on an unrelated issue. What do you do?",
    choices: [
      { text: "Take the deal \u2014 60% helps real people now, and the endorsement costs us less than gaining nothing", shift: -2 },
      { text: "Counter-negotiate to reduce the endorsement requirement, but be willing to make some concession", shift: -1 },
      { text: "It depends on what the unrelated issue is and who is hurt by the endorsement", shift: 0 },
      { text: "Reject the deal \u2014 tying our integrity to their political interests sets a dangerous precedent", shift: 1 },
      { text: "Reject and publicize \u2014 expose the transactional nature of the offer to show how power operates", shift: 2 },
    ],
  },
  {
    id: 'RR3', spectrum: 'righteousnessRelationship',
    text: "A prominent figure in your movement is accused of behavior that contradicts your movement's values. The evidence is credible. The person is also one of your most effective organizers. How do you respond?",
    choices: [
      { text: "Prioritize keeping them engaged while addressing the behavior privately \u2014 losing them hurts the movement", shift: -2 },
      { text: "Address it seriously but with an eye toward accountability AND their continued growth", shift: -1 },
      { text: "Follow whatever accountability process the organization has established, regardless of who they are", shift: 0 },
      { text: "Hold them to account publicly \u2014 our values mean nothing if they don't apply to our own leaders", shift: 1 },
      { text: "Zero tolerance \u2014 if our movement can't model the world we want to create, we have no moral authority to demand change from others", shift: 2 },
    ],
  },
  {
    id: 'RR4', spectrum: 'righteousnessRelationship',
    text: "Your immigrant rights coalition includes an organization that recently endorsed a punitive criminal justice ballot measure that will disproportionately harm the same communities you're both trying to serve. What do you do?",
    choices: [
      { text: "Stay in the coalition \u2014 immigration is the priority right now, and splitting the coalition over a different issue weakens everyone", shift: -2 },
      { text: "Stay but issue a public statement opposing their criminal justice position \u2014 make it clear the coalition doesn't speak for all members on this", shift: -1 },
      { text: "Bring it to the full coalition for a conversation about shared values and whether this contradicts our mission", shift: 0 },
      { text: "Begin building a parallel coalition of organizations that share your values across issues \u2014 you need partners you can trust fully", shift: 1 },
      { text: "Leave the coalition publicly and explain why \u2014 movements that tolerate harm in one arena while fighting it in another lack moral authority", shift: 2 },
    ],
  },
];
