export const statQuestions = [
  // CONFLICT (3 questions)
  {
    id: 'C1', stat: 'conflict',
    text: "A powerful ally in your coalition says something publicly that you believe is harmful to your community. How do you respond?",
    choices: [
      { text: "Address it with them through a trusted intermediary who can deliver the message without rupturing the relationship", points: 1 },
      { text: "Raise it in private, framing it as a shared concern about how it affects the coalition's public image", points: 2 },
      { text: "Raise it privately first with a clear timeline — if they don't correct course publicly, you will", points: 3 },
      { text: "Name the harm publicly while affirming the value of the alliance — accountability and partnership can coexist", points: 4 },
      { text: "Call it out immediately and publicly — the community's trust in you depends on not letting harmful statements pass", points: 5 },
    ],
  },
  {
    id: 'C2', stat: 'conflict',
    text: "You're leading a campaign and your strategy is working, but it's generating intense personal backlash. People in your own community are calling you out on social media. How do you respond?",
    choices: [
      { text: "Engage the critics directly — meet with key voices, hear them out, and adapt the strategy where their critiques have merit", points: 1 },
      { text: "Bring the critics into the strategy process so they have ownership over the approach, not just objections to it", points: 2 },
      { text: "Hold course but increase transparency — publish the reasoning, open Q&A, show your work", points: 3 },
      { text: "Continue pushing forward — the backlash confirms the strategy is disrupting comfortable patterns", points: 4 },
      { text: "Amplify the backlash strategically — use it to demonstrate that the issue is generating the public conversation it deserves", points: 5 },
    ],
  },
  {
    id: 'C3', stat: 'conflict',
    text: "Your organization is asked to take a public position on an issue where your stance will put you in direct opposition to a major funder. What's your approach?",
    choices: [
      { text: "Negotiate behind the scenes — find a way to take the position publicly while privately preserving the funder relationship", points: 1 },
      { text: "Take the position but simultaneously launch an aggressive diversification strategy to replace the funding", points: 2 },
      { text: "Take the position clearly and transparently, letting the funder decide how they want to respond", points: 3 },
      { text: "Take the position and use the potential funding loss as a rallying point for grassroots fundraising", points: 4 },
      { text: "Take the position loudly — if a funder's money requires our silence, that's a dependency we need to break anyway", points: 5 },
    ],
  },
  // EMPATHY & LISTENING (3 questions)
  {
    id: 'E1', stat: 'empathyListening',
    text: "A community member comes to you in crisis. They're scared and overwhelmed. What comes naturally?",
    choices: [
      { text: "Get them connected to resources immediately — every minute matters when someone is in crisis", points: 1 },
      { text: "Quickly assess what they need most, then help them with the most urgent thing first", points: 2 },
      { text: "Listen to understand their full situation before deciding how best to help them right now", points: 3 },
      { text: "Create a safe space for them to process what's happening before moving toward solutions", points: 4 },
      { text: "Be fully present with them — sometimes the most powerful thing is simply witnessing someone's experience", points: 5 },
    ],
  },
  {
    id: 'E2', stat: 'empathyListening',
    text: "You're trying to win over a group of people who currently oppose your cause. What's your approach?",
    choices: [
      { text: "Lead with the strongest evidence and let the data challenge their assumptions directly — respect them enough to bring facts", points: 1 },
      { text: "Map their decision-making framework and craft an argument specifically designed to work within their logic", points: 2 },
      { text: "Find the overlap between what they care about and what you're proposing — build from shared ground outward", points: 3 },
      { text: "Invest time understanding their fears and concerns before making any case — people change when they feel understood", points: 4 },
      { text: "Spend genuine time in their community first — understand their daily reality before you ask them to understand yours", points: 5 },
    ],
  },
  {
    id: 'E3', stat: 'empathyListening',
    text: "A fellow activist is struggling and clearly burning out. They insist they're fine. How do you respond?",
    choices: [
      { text: "Respect their boundary and focus on making the overall workload more sustainable for everyone on the team", points: 1 },
      { text: "Check in once directly, name what you see, and make clear you're available whenever they're ready to talk", points: 2 },
      { text: "Quietly redistribute some of their workload and create more breathing room without making it a public conversation", points: 3 },
      { text: "Keep showing up consistently with small acts of care — check in regularly, bring coffee, share the load", points: 4 },
      { text: "Create a culture shift on the team where rest and honesty about capacity are normalized, not just for them but for everyone", points: 5 },
    ],
  },
  // STRATEGIC THINKING (3 questions)
  {
    id: 'S1', stat: 'strategicThinking',
    text: "Your coalition wins a significant legislative victory. What's your first thought?",
    choices: [
      { text: "Celebrate fully and use the win to energize the base — momentum is a resource and this is how you build it", points: 1 },
      { text: "Honor the win, then immediately turn to implementation — a law on paper means nothing without enforcement infrastructure", points: 2 },
      { text: "Analyze what made this campaign succeed so you can replicate the model for the next fight", points: 3 },
      { text: "Map how this victory shifts the political landscape and which new openings or threats it creates", points: 4 },
      { text: "Sequence the next three moves while the opposition is still recalibrating — victories create windows that close fast", points: 5 },
    ],
  },
  {
    id: 'S2', stat: 'strategicThinking',
    text: "You're given a complex problem with no obvious solution. How do you approach it?",
    choices: [
      { text: "Talk to the people most directly affected — they usually know more about the problem than anyone with a theory", points: 1 },
      { text: "Research what's been tried before in similar situations and identify what worked and what didn't", points: 2 },
      { text: "Break it into smaller pieces and start testing solutions on the most tractable component first", points: 3 },
      { text: "Map the full stakeholder landscape — who benefits from the current situation, who has leverage, where are the pressure points", points: 4 },
      { text: "Trace the problem to its structural roots — what systems and incentives produce this outcome, and where are the intervention points", points: 5 },
    ],
  },
  {
    id: 'S3', stat: 'strategicThinking',
    text: "Two partner organizations want your coalition to pursue contradictory strategies. How do you think about the decision?",
    choices: [
      { text: "Commit to the strategy that your base cares about most — your people's energy determines what's actually viable", points: 1 },
      { text: "Test both strategies on a small scale with willing partners before committing the full coalition to either one", points: 2 },
      { text: "Evaluate each strategy against the coalition's agreed theory of change and pick the one with stronger alignment", points: 3 },
      { text: "Look for ways to sequence the strategies — sometimes contradictory short-term tactics serve the same long-term goal", points: 4 },
      { text: "Reframe the choice by mapping second-order effects — which strategy changes the power dynamics in ways that make the next win easier", points: 5 },
    ],
  },
  // ADAPTABILITY (3 questions)
  {
    id: 'A1', stat: 'adaptability',
    text: "You've spent six months developing a campaign strategy. The week before launch, the political landscape shifts dramatically and your strategy is no longer viable. What do you do?",
    choices: [
      { text: "Push to launch the original strategy anyway — the fundamentals haven't changed and there's value in following through on commitments", points: 1 },
      { text: "Preserve the core goals but adjust the timeline — wait for a better moment rather than scrambling to redesign everything", points: 2 },
      { text: "Salvage the strongest elements and rebuild around them — not everything needs to be thrown out", points: 3 },
      { text: "Scrap the old plan and redesign from scratch for the new landscape — sunk cost shouldn't drive strategy", points: 4 },
      { text: "Treat the shift as an intelligence gift — the new landscape reveals things about the system you couldn't see before", points: 5 },
    ],
  },
  {
    id: 'A2', stat: 'adaptability',
    text: "Your organization has a chance to achieve a significant win, but it requires partnering with someone whose values don't fully align with yours. What do you do?",
    choices: [
      { text: "Decline — the cost of legitimizing their values outweighs the win, and there will be other paths to victory", points: 1 },
      { text: "Propose a narrow, time-limited partnership with explicit public boundaries about what you do and don't endorse", points: 2 },
      { text: "Evaluate whether the specific win changes material conditions for your community enough to justify the compromise", points: 3 },
      { text: "Engage strategically while actively building the independent power that makes this kind of partnership unnecessary next time", points: 4 },
      { text: "Welcome the complexity — real coalitions are messy, and learning to work across genuine difference is itself a movement skill", points: 5 },
    ],
  },
  {
    id: 'A3', stat: 'adaptability',
    text: "A tactic you've always relied on stops working. The political environment has changed and your tried-and-true approach is getting no results. How do you respond?",
    choices: [
      { text: "Recommit with better execution — sometimes tactics fail not because they're wrong but because they weren't done well enough", points: 1 },
      { text: "Study why it stopped working — understand the change before you react to it", points: 2 },
      { text: "Test three different approaches simultaneously and let the results tell you which direction to go", points: 3 },
      { text: "Look for tactics from completely different movements or sectors that could be adapted to your context", points: 4 },
      { text: "Use the failure as a provocation — publicly name that the old approach is dead and challenge your community to co-create the new one", points: 5 },
    ],
  },
  // CREATIVE PROBLEM SOLVING (3 questions)
  {
    id: 'CP1', stat: 'creativeProblemSolving',
    text: "A community group needs to raise awareness about an issue, but they have almost no budget. What approach do you gravitate toward?",
    choices: [
      { text: "Partner with an established organization that already has the infrastructure and audience you need", points: 1 },
      { text: "Deploy the most proven low-cost tactic for your context — door-knocking, phone banking, or community forums", points: 2 },
      { text: "Build a social media campaign designed around a specific, shareable moment that can travel organically", points: 3 },
      { text: "Create a public spectacle or creative action designed to force media coverage you couldn't afford to buy", points: 4 },
      { text: "Design something nobody has seen before — an experience, game, or format that makes people participants, not just audience", points: 5 },
    ],
  },
  {
    id: 'CP2', stat: 'creativeProblemSolving',
    text: "Your legislative target has stopped responding to all conventional advocacy approaches — calls, letters, testimony, rallies. Nothing is getting through. What do you do?",
    choices: [
      { text: "Shift to a new target who has leverage over your original target — find who they listen to and pressure that person instead", points: 1 },
      { text: "Build an overwhelming evidence case and deliver it through a channel they can't ignore — litigation, inspector general, public records", points: 2 },
      { text: "Change the messenger — find a constituent, donor, or peer they personally respect to carry your message", points: 3 },
      { text: "Change the arena entirely — move from legislative to regulatory, legal, electoral, or ballot initiative strategy", points: 4 },
      { text: "Invent a creative action so unexpected and public that it generates its own news cycle and forces a response", points: 5 },
    ],
  },
  {
    id: 'CP3', stat: 'creativeProblemSolving',
    text: "Two seemingly incompatible demands are being made by different parts of your coalition. The conventional wisdom says you can't have both. How do you respond?",
    choices: [
      { text: "Make the hard call — assess which demand is more achievable and more urgent, and commit fully to that one", points: 1 },
      { text: "Negotiate a concrete compromise that gives each side enough to stay in the fight", points: 2 },
      { text: "Investigate whether the incompatibility is real or whether it dissolves when you reframe the underlying shared interest", points: 3 },
      { text: "Sequence them — pursue one first with a binding commitment to pursue the other next", points: 4 },
      { text: "Design a completely new demand that addresses the deeper need behind both — something neither side has considered yet", points: 5 },
    ],
  },
  // GROUP INTELLIGENCE (3 questions)
  {
    id: 'GI1', stat: 'groupIntelligence',
    text: "You're in a coalition meeting where two factions are in heated disagreement. The tension is rising and people are starting to take sides. What do you do?",
    choices: [
      { text: "Trust your analysis and advocate clearly for the position you believe serves the group best", points: 1 },
      { text: "Share your perspective directly, then listen to see if others have information that changes your view", points: 2 },
      { text: "Acknowledge both sides and help the group find workable common ground they can act on", points: 3 },
      { text: "Help each faction see how the other's position might serve the coalition's larger shared mission", points: 4 },
      { text: "Let the group sit with the disagreement — sometimes the best path forward emerges without forcing resolution", points: 5 },
    ],
  },
  {
    id: 'GI2', stat: 'groupIntelligence',
    text: "You're working with a group of people from very different backgrounds, political orientations, and communication styles. How do you approach the work?",
    choices: [
      { text: "Lead with my strongest ideas and make a clear case — groups need someone willing to stake a position", points: 1 },
      { text: "Present my framework first, then genuinely incorporate what I learn from others' perspectives", points: 2 },
      { text: "Actively learn each person's communication style and adapt how I engage with every individual", points: 3 },
      { text: "Create intentional space for each perspective to be heard, then help the group synthesize a platform", points: 4 },
      { text: "Serve as a translator between the different groups, helping each understand the others' frameworks", points: 5 },
    ],
  },
  {
    id: 'GI3', stat: 'groupIntelligence',
    text: "A new person joins your organization and their working style is very different from the group's established culture. There's friction. How do you respond?",
    choices: [
      { text: "Expect the new person to observe our norms and adapt to how we do things in this organization", points: 1 },
      { text: "Give them plenty of time and space to settle in — they'll figure out our culture on their own", points: 2 },
      { text: "Have a direct conversation about mutual expectations while staying curious about what they bring", points: 3 },
      { text: "Bridge the gap — help the group see value in their different style while helping them learn ours", points: 4 },
      { text: "Use the friction as a chance for the whole group to examine and potentially evolve its culture", points: 5 },
    ],
  },
  // NUMBERS & OPERATIONS (3 questions)
  {
    id: 'NO1', stat: 'numbersOperations',
    text: "Your organization is planning a major campaign. The first thing you want to know is:",
    choices: [
      { text: "What's the story we're telling — what's the core narrative that will drive this campaign forward", points: 1 },
      { text: "Who are our allies and opponents — where does the landscape of support and opposition stand now", points: 2 },
      { text: "What's our timeline, and what are the key milestones we need to hit along the way forward", points: 3 },
      { text: "What's the budget, and what specific resources do we need to make this campaign actually work", points: 4 },
      { text: "Show me the full operational plan first — budget, staffing, logistics, timeline, and contingencies", points: 5 },
    ],
  },
  {
    id: 'NO2', stat: 'numbersOperations',
    text: "You learn that your organization is running a significant budget deficit. What's your first move?",
    choices: [
      { text: "Focus on what you do best and trust the operations team to handle the finances — your energy is better spent on the mission", points: 1 },
      { text: "Ask the key diagnostic questions — is this a revenue problem, a spending problem, or a timing problem — then let the experts solve it", points: 2 },
      { text: "Review the financials yourself to understand the full picture before forming an opinion on what should be done", points: 3 },
      { text: "Build multiple recovery scenarios with specific revenue targets and expense adjustments for each one", points: 4 },
      { text: "Take ownership of the financial recovery — model the cash flow, restructure the budget, and present a comprehensive recovery plan", points: 5 },
    ],
  },
  {
    id: 'NO3', stat: 'numbersOperations',
    text: "Someone proposes an ambitious new program. It sounds inspiring but there are no details on cost or implementation. How do you respond?",
    choices: [
      { text: "Champion the vision and start building momentum — the operational details will follow once people are excited enough to invest", points: 1 },
      { text: "Support the vision but ask for a quick feasibility check — a rough budget and timeline, nothing elaborate, before committing", points: 2 },
      { text: "Offer to help translate the vision into a concrete operational plan with budget, staffing, and milestone targets", points: 3 },
      { text: "Develop a phased rollout plan — start with a pilot that proves the concept before scaling, with clear metrics at each stage", points: 4 },
      { text: "Build a comprehensive feasibility analysis with cost-benefit projections, resource mapping, and multiple implementation scenarios", points: 5 },
    ],
  },
  // LEADERSHIP (3 questions)
  {
    id: 'L1', stat: 'leadership',
    text: "A group you're part of is stuck — there's no clear direction and people are losing momentum. What do you do?",
    choices: [
      { text: "Ask good questions — the group probably knows the answer but hasn't surfaced it yet, and your job is to help them find it", points: 1 },
      { text: "Suggest the group break into smaller conversations — sometimes the full-group format is the problem, not the people", points: 2 },
      { text: "Offer a specific proposal for what to do next and invite the group to modify it together", points: 3 },
      { text: "Synthesize what you've heard into a clear direction, present it confidently, and ask for commitment or counter-proposals", points: 4 },
      { text: "Take charge — name the problem, lay out the plan, assign roles, and set the next milestone with a deadline", points: 5 },
    ],
  },
  {
    id: 'L2', stat: 'leadership',
    text: "You're mentoring a newer activist who has great instincts but keeps making avoidable strategic mistakes. How do you approach it?",
    choices: [
      { text: "Create the conditions for them to learn — pair them with experienced people, give them graduated challenges, let the environment teach", points: 1 },
      { text: "Share your own failure stories openly — normalize mistakes and show that strategic errors are part of the learning process", points: 2 },
      { text: "Debrief with them after key moments — ask what they noticed, what they'd do differently, and offer your perspective when asked", points: 3 },
      { text: "Give direct, specific feedback in real time — name exactly what you see and suggest concrete alternatives", points: 4 },
      { text: "Build a structured development plan together — set goals, create practice opportunities, track growth, and hold weekly check-ins", points: 5 },
    ],
  },
  {
    id: 'L3', stat: 'leadership',
    text: "The group has been debating for an hour and can't reach consensus. There's a deadline approaching. What do you do?",
    choices: [
      { text: "Propose the group delegates the decision to whoever will be most affected by the outcome — center the right voices", points: 1 },
      { text: "Call for a structured vote — everyone gets a voice, the majority decides, and the minority commits to supporting the outcome", points: 2 },
      { text: "Name the three key points of agreement and propose moving forward on those while tabling the unresolved questions", points: 3 },
      { text: "Present your recommendation clearly with your reasoning, then ask the group for a yes/no decision within five minutes", points: 4 },
      { text: "Make the call — take personal responsibility for the decision, communicate it clearly, and commit to revisiting it after the deadline", points: 5 },
    ],
  },
  // COMMUNICATION (3 questions)
  {
    id: 'CO1', stat: 'communication',
    text: "You need to persuade a skeptical audience to support your cause. What's your instinct?",
    choices: [
      { text: "Present the facts and evidence clearly and thoroughly — the data should speak for itself here", points: 1 },
      { text: "Make a logical, well-structured argument that walks them through the reasoning step by step", points: 2 },
      { text: "Combine solid evidence with a personal story that puts a real human face on the issue", points: 3 },
      { text: "Listen to what they care about first, then frame the issue in terms that connect to their values", points: 4 },
      { text: "Build a genuine relationship with the audience before trying to persuade them of anything at all", points: 5 },
    ],
  },
  {
    id: 'CO2', stat: 'communication',
    text: "A journalist calls and wants a quote about a controversial situation involving your organization. You have five minutes. What do you do?",
    choices: [
      { text: "Decline to comment on the situation until I've had a chance to consult with the rest of the team", points: 1 },
      { text: "Give a safe, carefully worded response that stays on message and doesn't make any waves", points: 2 },
      { text: "Deliver a clear, confident message that directly advances our organization's position on the issue", points: 3 },
      { text: "Use the opportunity to reframe the narrative entirely — answer the question I wish they'd asked me", points: 4 },
      { text: "Treat it as a strategic moment — consider the audience, the news cycle, and our long-term goals", points: 5 },
    ],
  },
  {
    id: 'CO3', stat: 'communication',
    text: "You're connecting two people who don't know each other but whose work is deeply complementary. How do you approach it?",
    choices: [
      { text: "Send a basic introduction email to both of them and let them take it from there on their own", points: 1 },
      { text: "Explain to each person separately why they should take the time to meet the other one", points: 2 },
      { text: "Frame the introduction around a specific shared interest or a concrete potential collaboration", points: 3 },
      { text: "Set up the connection so both parties see immediate value, then follow up to make it stick", points: 4 },
      { text: "Proactively build a network of these connections — I'm always mapping who should know who", points: 5 },
    ],
  },
  // INSPIRE (3 questions)
  {
    id: 'I1', stat: 'inspire',
    text: "The team is exhausted, morale is low, and the work ahead is daunting. What do you do?",
    choices: [
      { text: "Reduce the workload — cut scope, extend timelines, cancel non-essential meetings, protect people's capacity", points: 1 },
      { text: "Acknowledge what's real — name the exhaustion honestly and ask the team what they need right now", points: 2 },
      { text: "Reconnect people to specific wins — show concrete evidence that the work is producing results", points: 3 },
      { text: "Tell the story of where we've been, where we are, and where we're going — give the struggle a narrative arc", points: 4 },
      { text: "Transform the energy — help people feel that this moment of difficulty is precisely when movements are forged", points: 5 },
    ],
  },
  {
    id: 'I2', stat: 'inspire',
    text: "You're recruiting volunteers for a demanding, unglamorous task that's essential to the campaign. How do you motivate people to sign up?",
    choices: [
      { text: "Be honest about what the work actually involves and let people self-select — the ones who show up genuinely want to be there", points: 1 },
      { text: "Pair the unglamorous work with social connection — make it a team activity where the relationships matter as much as the task", points: 2 },
      { text: "Connect the task explicitly to a specific, named outcome — show exactly how this work produces the result they care about", points: 3 },
      { text: "Make each person's individual contribution feel essential — personalize the ask so they know why you need them specifically", points: 4 },
      { text: "Reframe the task entirely — turn data entry into 'building the intelligence infrastructure,' turn phone calls into 'conversations that change the game'", points: 5 },
    ],
  },
  {
    id: 'I3', stat: 'inspire',
    text: "A major setback threatens to derail your entire campaign. The team is demoralized. What's your move?",
    choices: [
      { text: "Protect the team — triage immediately, cut what's not essential, and make sure nobody burns out trying to fix this alone", points: 1 },
      { text: "Be fully honest about the damage and facilitate a clear-eyed assessment of what's still possible from here", points: 2 },
      { text: "Extract every lesson from the failure and immediately pivot the strategy based on what you now know", points: 3 },
      { text: "Reframe the setback as a chapter in a longer story — help people see that movements are defined by how they respond to setbacks", points: 4 },
      { text: "Use the setback as a catalyst — channel the frustration into a bolder, more creative approach that wouldn't have existed before", points: 5 },
    ],
  },
];
