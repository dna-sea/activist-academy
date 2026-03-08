# The Activist Academy: Discovery Engine
## Implementation Specification for Claude Code

---

## Project Overview

Build an interactive web application that implements the Activist Academy's **Discovery Engine** — a gamified personality diagnostic that helps users discover their activist archetype. The app guides users through a series of fun, scenario-based quizzes that assess their motivations, core stats, skills, and strategic orientations, then generates a personalized **Activist Character Sheet** that reveals their primary and secondary archetype, maps them to one of four houses, and provides a recommended learning path through the Activist Academy curriculum.

The experience should feel like a cross between a compelling BuzzFeed quiz and the 16 Personalities website — fun, shareable, and genuinely insightful. It should NOT feel like an intake assessment, a corporate HR evaluation, or an academic test.

---

## Core Design Principles

1. **Gamified Entry, Rigorous Core:** The quiz provides an inviting, low-barrier entry point with genuine psychological and strategic grounding underneath. Fun on the surface, substantive beneath.

2. **Strengths-Based Approach:** The system affirms what participants bring. Language throughout should celebrate capabilities, not diagnose deficiencies. No stat is "bad." No archetype is lesser.

3. **Shareability is Recruitment:** Every completed character sheet is a recruitment tool. The archetype reveal should be visually compelling enough that participants want to share it on social media. Design for screenshots and sharing.

4. **Agnostic on Orientation:** The system takes no position on whether inside or outside strategy is "better," or whether righteousness or relationship is the "correct" posture. Movements need people everywhere on both spectrums.

5. **Dual-Audience Design:** The tone and language must resonate with both young adults (18–25) entering activism for the first time AND mid-career professionals pivoting to advocacy work. Avoid being too youthful/memey or too corporate/academic.

6. **Sequential Revelation:** The character sheet builds layer by layer — motivation first, then stats, then skills, then orientation, then archetype. Each layer should feel like peeling back another dimension of self-knowledge. The archetype reveal at the end should feel *earned*, not random.

---

## Visual Design & Style Guide

### Overall Aesthetic
- **Mood:** Bold, empowering, slightly fantastical — like a modern RPG character creator meets a political movement poster
- **NOT:** Corporate, clinical, pastel, or overly cute
- **Color palette:**
  - Primary: Deep navy (#1B2A4A) — authority, depth
  - Accent: Teal (#2A7F8E) — energy, clarity
  - Highlight: Gold (#D4A843) — achievement, warmth
  - Background: Warm off-white (#F5F1EB) — approachable, not sterile
  - Text: Dark charcoal (#2D2D2D) — readable, not harsh
  - Each house gets a signature color:
    - House of Vision: Deep purple (#6B3FA0)
    - House of Connection: Forest green (#2D8659)
    - House of Action: Burnt orange (#C4652A)
    - House of Infrastructure: Steel blue (#3A6B8C)

### Typography
- Headlines: Bold, slightly condensed sans-serif (like Inter, Outfit, or similar)
- Body: Clean, readable sans-serif
- Character sheet elements: Monospace or display fonts for stat numbers to evoke RPG character sheets

### UI Elements
- **Progress bar:** Visible throughout, showing which phase the user is in (Motivation → Stats → Skills → Orientation → Archetype Reveal)
- **Question cards:** Each question should appear on its own card with generous whitespace
- **Answer choices:** Large, tappable buttons — not radio buttons or checkboxes. Use full-sentence answer options
- **Transitions:** Smooth, satisfying transitions between questions and between phases. Each phase transition should have a brief "phase complete" animation/screen
- **Stat visualization:** Use radar charts, bar charts, or RPG-style stat displays to show core stats
- **Spectrum visualization:** Inside/Outside and Righteousness/Relationship spectrums should display as visual slider-style continuums, not binary categories

### Gamification Elements
- Show stat changes as users answer questions ("+1 Strategic Thinking" animations)
- Phase completion celebrations (brief, not obnoxious)
- The archetype reveal should be dramatic — house color wash, archetype name, illustration placeholder, and narrative description
- Character sheet should look like an actual character sheet — bordered, sectioned, with stat blocks and portrait area

### Mobile-First Design
- The entire experience must work beautifully on mobile — this is where most people will take the quiz
- Large touch targets (minimum 44px)
- Single-column layout for questions
- Swipeable where appropriate

---

## Application Architecture

### Tech Stack
- **React** single-page application
- **Tailwind CSS** for styling
- **Framer Motion** or CSS animations for transitions
- **No backend required** — all scoring logic runs client-side
- **LocalStorage** for saving progress (optional — session-based is also fine)
- Output should be a single deployable React app

### Flow Structure

```
Landing Page → Motivation Profile (6 questions) → Core Stats Assessment (30 questions)
→ Skills Inventory (10 questions) → Strategic Orientation (8 questions)
→ Processing/Calculation → Archetype Reveal → Full Character Sheet
```

### State Management
Track the following throughout the quiz:

```javascript
{
  // Motivation Profile
  motivations: {
    justice: 0,        // Justice orientation
    community: 0,      // Community connection
    policy: 0,         // Policy change
    service: 0,        // Direct service
    disruption: 0,     // Systemic disruption
    narrative: 0       // Narrative transformation
  },

  // Core Stats (each 0-10 scale)
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
    inspire: 0
  },

  // Skills Inventory (self-assessed 1-5)
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
    projectManagement: 0
  },

  // Strategic Orientation Spectrums (-5 to +5)
  orientation: {
    insideOutside: 0,    // -5 = strongly inside, +5 = strongly outside
    righteousnessRelationship: 0  // -5 = strongly relationship, +5 = strongly righteousness
  },

  // Calculated Results
  primaryArchetype: null,
  secondaryArchetype: null,
  house: null
}
```

---

## Phase 1: Motivation Profile

### Purpose
Establish what drives this person — the "why" that anchors everything else. This is the emotional foundation of the character sheet.

### Design Notes
- These should feel reflective and values-oriented, not analytical
- Use scenario-based questions that reveal motivation through choice, not self-report
- Show a brief intro screen before this phase: "First, let's understand what calls you to this work..."

### Questions

**M1. You witness an injustice happening in your community. What's your first instinct?**
- A) Analyze the systemic root causes and think about how to dismantle the structures that allowed this to happen → justice +2, disruption +1
- B) Reach out to the people affected and ask how you can support them right now → service +2, community +1
- C) Start thinking about what policy or law could prevent this from happening again → policy +2, justice +1
- D) Find the people who are already organizing around this and figure out how to amplify their voices → community +2, narrative +1
- E) Draft a powerful message or story that could make others understand what happened and why it matters → narrative +2, justice +1
- F) Show up immediately to disrupt the situation and put your body between the harm and the people being hurt → disruption +2, service +1

**M2. You're at a community meeting and the conversation turns to strategy. Which contribution feels most natural to you?**
- A) "Here's the policy change we need to push for, and here's who has the power to make it happen." → policy +2, justice +1
- B) "Before we strategize, we need to hear from the people most affected — their experience should guide us." → community +2, service +1
- C) "The whole system is designed to produce this outcome. We need to be thinking about transformation, not just reform." → disruption +2, justice +1
- D) "Let me tell you a story about someone this affected — that's how we get people to care." → narrative +2, community +1
- E) "What are the immediate needs? Who's hurting right now, and what can we do today?" → service +2, community +1
- F) "Let me map out the legislative calendar and identify our pressure points for the next six months." → policy +2, disruption +1

**M3. Imagine you've been given unlimited resources for one year. What do you build?**
- A) A legal and policy institute that writes model legislation and trains advocates to pass it in every state → policy +2, justice +1
- B) A community center where people can access direct support, connect with each other, and heal together → service +2, community +1
- C) A media operation that tells the stories the mainstream press ignores and shifts public consciousness → narrative +2, disruption +1
- D) A grassroots network that connects and empowers communities across the country to organize locally → community +2, service +1
- E) A think tank that researches and publishes the deep structural analysis needed to reimagine systems entirely → justice +2, disruption +1
- F) A training program that equips the next generation of disruptors with the tools to challenge power directly → disruption +2, narrative +1

**M4. When you think about "success" in social justice work, what does it look like?**
- A) A landmark court decision or law that enshrines protections and creates enforceable rights → policy +2, justice +1
- B) A community that is thriving, connected, and taking care of its own — regardless of what the government does → community +2, service +1
- C) A fundamental shift in how people think about an issue — the culture has moved, and there's no going back → narrative +2, disruption +1
- D) Every person in crisis has someone to call, somewhere to go, and a community that won't let them fall → service +2, community +1
- E) The systems that produce injustice have been dismantled and replaced with something genuinely equitable → justice +2, disruption +1
- F) The people most affected are now the ones in positions of power, making the decisions → disruption +2, policy +1

**M5. You're burned out and questioning whether the work matters. What pulls you back in?**
- A) Remembering that people are counting on you — there are individuals who need help right now → service +2, community +1
- B) Reading or hearing a story that reminds you why this fight is worth it → narrative +2, justice +1
- C) A strategic opening — a political window or policy opportunity that can't be wasted → policy +2, disruption +1
- D) Your community — the people you organize with, who remind you that you're not alone → community +2, service +1
- E) Rage — the injustice is still happening, and someone has to fight it → justice +2, disruption +1
- F) The belief that another world is possible, and that this moment is part of getting there → disruption +2, narrative +1

**M6. Which of these statements resonates most deeply with you?**
- A) "The arc of the moral universe is long, but it bends toward justice — and I want to be part of bending it." → justice +2, narrative +1
- B) "Real change happens in relationships — one conversation, one connection, one community at a time." → community +2, service +1
- C) "Policy is where the rubber meets the road. If it's not in law, it's just a suggestion." → policy +2, justice +1
- D) "I believe in showing up for people — not in the abstract, but in the specific, messy, human reality of their lives." → service +2, community +1
- E) "You can't reform a system that's working exactly as designed. We need something fundamentally different." → disruption +2, justice +1
- F) "Stories change the world. When people see themselves in a different story, they become different people." → narrative +2, community +1

---

## Phase 2: Core Stats Assessment

### Purpose
Measure the participant's starting levels across ten core attributes. These are not judgments — they're an honest snapshot that identifies strengths and growth areas.

### Design Notes
- 3 questions per stat = 30 questions total
- Each question presents a scenario with 5 response options scored 1–5
- Display as a Likert-style selection (but styled as buttons, not radio buttons)
- Show "+1 [Stat Name]" animations as users answer
- After every 10 questions, show a brief progress celebration

### Questions

#### CONFLICT (3 questions)

**C1. A powerful ally in your coalition says something publicly that you believe is harmful to your community. Do you:**
1. Stay quiet to preserve the alliance — we need them → 1 pt
2. Raise it privately and hope they course-correct → 2 pts
3. Raise it privately, and if they don't change, raise it publicly → 3 pts
4. Call it out publicly — harm is harm regardless of who does it → 4 pts
5. Call it out publicly and accept that the alliance may end — the principle is more important → 5 pts

**C2. You're leading a campaign and your strategy is working, but it's generating intense personal backlash. People in your own community are calling you out on social media. How do you respond?**
1. Reconsider the strategy — if this many people are upset, maybe I'm wrong → 1 pt
2. Pause and listen, try to understand the criticism before deciding → 2 pts
3. Continue but invest more time explaining the reasoning publicly → 3 pts
4. Continue — effective strategy often generates backlash and that's part of the process → 4 pts
5. Lean into it — the backlash proves we're hitting a nerve, and that means it's working → 5 pts

**C3. Your organization is asked to take a public position on an issue where your stance will put you in direct opposition to a major funder. How do you feel about this?**
1. Anxious — losing funding could end our work entirely → 1 pt
2. Cautious — I'd want to find a way to take the position without antagonizing the funder → 2 pts
3. Conflicted but resolute — I'd take the position but work to mitigate the financial fallout → 3 pts
4. Clear — we take the right position and figure out the money later → 4 pts
5. Energized — this is exactly the kind of fight that defines what we stand for → 5 pts

#### EMPATHY & LISTENING (3 questions)

**E1. A community member comes to you in crisis. They're not asking for solutions — they're just trying to be heard. What comes naturally?**
1. I immediately start thinking about how to fix their situation → 1 pt
2. I listen for a bit, then gently steer toward actionable steps → 2 pts
3. I listen fully first, then ask what they need from me → 3 pts
4. I focus entirely on being present — solutions can wait → 4 pts
5. I can hold their pain with them without needing to fix anything; being witnessed is itself healing → 5 pts

**E2. You're trying to win over a group of people who currently oppose your cause. What's your approach?**
1. Make the strongest logical argument for why they should change their position → 1 pt
2. Share data and evidence that challenges their assumptions → 2 pts
3. Try to understand what they care about, then find common ground → 3 pts
4. Listen deeply to their fears and concerns before saying anything about your position → 4 pts
5. Spend time in their world first — understand their lived experience before trying to change their mind → 5 pts

**E3. A fellow activist is struggling and clearly burning out. They insist they're fine. How do you respond?**
1. Take them at their word — they know themselves best → 1 pt
2. Check in once, then respect their answer → 2 pts
3. Keep checking in regularly, even if they keep saying they're fine → 3 pts
4. Name what I'm observing directly and lovingly, even if they push back → 4 pts
5. Create ongoing space for them to land when they're ready — adjust workloads, offer care without being asked → 5 pts

#### STRATEGIC THINKING (3 questions)

**S1. Your coalition wins a significant legislative victory. What's your first thought?**
1. Celebrate — we did it! → 1 pt
2. Celebrate, then think about what's next → 2 pts
3. Celebrate while already considering how to protect this win from rollback → 3 pts
4. Analyze what worked and what didn't so we can replicate the strategy → 4 pts
5. Map how this victory changes the power dynamics for the next three fights we need to have → 5 pts

**S2. You're given a complex problem with no obvious solution. How do you approach it?**
1. Ask others who have more experience what they would do → 1 pt
2. Research how similar problems have been solved before → 2 pts
3. Break it down into smaller components and tackle each one → 3 pts
4. Map all the stakeholders, their interests, and where leverage exists → 4 pts
5. Zoom out to the systemic level — what are the structural conditions producing this problem, and where are the intervention points? → 5 pts

**S3. Two partner organizations want your coalition to pursue contradictory strategies. How do you think about the decision?**
1. Go with whichever partner has more resources or influence → 1 pt
2. Seek compromise — find a middle path → 2 pts
3. Evaluate which strategy is more likely to succeed based on available evidence → 3 pts
4. Analyze both strategies against our long-term theory of change, not just immediate outcomes → 4 pts
5. Consider both strategies as potentially complementary — how could we sequence them, or run them in parallel with different coalition members leading each? → 5 pts

#### ADAPTABILITY (3 questions)

**A1. You've spent six months developing a campaign strategy. The week before launch, the political landscape shifts dramatically and your strategy is no longer viable. How do you react?**
1. Devastated — six months of work, gone → 1 pt
2. Frustrated, but I start looking for ways to salvage what we can → 2 pts
3. Disappointed, but I pivot to redesigning the strategy for the new landscape → 3 pts
4. Already scanning the new landscape for opportunities that didn't exist before → 4 pts
5. Energized by the change — the best strategies are born from chaos and I work well under pressure → 5 pts

**A2. Your organization has a chance to achieve a significant win, but it requires partnering with someone whose values don't fully align with yours. What do you do?**
1. Refuse — our values are non-negotiable → 1 pt
2. Hesitate — I'd need to think carefully about whether this compromises our integrity → 2 pts
3. Evaluate the specific terms — what exactly would we have to compromise, and is the win worth it? → 3 pts
4. Proceed strategically — I can work with imperfect allies if the outcome serves our community → 4 pts
5. Welcome it — movements are built by people who can operate in grey areas and find alignment where others see only difference → 5 pts

**A3. A tactic you've always relied on stops working. The political environment has changed and your tried-and-true approach is getting no results. How do you respond?**
1. Keep trying — it worked before and it'll work again if we just do it better → 1 pt
2. Double down with more resources and effort → 2 pts
3. Start researching what other organizations are doing that's working → 3 pts
4. Experiment with multiple new approaches simultaneously to find what sticks → 4 pts
5. Treat this as an opportunity to innovate — constraints breed creativity → 5 pts

#### CREATIVE PROBLEM SOLVING (3 questions)

**CP1. A community group needs to raise awareness about an issue, but they have almost no budget. What approach do you gravitate toward?**
1. Apply for grants to fund a traditional awareness campaign → 1 pt
2. Organize volunteers for a door-to-door canvass effort → 2 pts
3. Create a compelling social media campaign using free tools and organic reach → 3 pts
4. Design a creative guerrilla action or public art installation that generates earned media → 4 pts
5. Invent something entirely new — a game, an event format, a viral concept that nobody has tried before → 5 pts

**CP2. Your legislative target has stopped responding to all conventional advocacy approaches — calls, letters, testimony, rallies. Nothing is getting through. What do you do?**
1. Keep up the pressure with more of the same — persistence wins → 1 pt
2. Escalate within the same framework — bigger rally, more calls → 2 pts
3. Change the messenger — find an unexpected voice they can't ignore → 3 pts
4. Change the game entirely — find a different pressure point, a different target, or a different strategy that makes the original target irrelevant → 4 pts
5. Design something they've never seen before — an approach so creative it can't be ignored because nobody knows what to do with it → 5 pts

**CP3. Two seemingly incompatible demands are being made by different parts of your coalition. The conventional wisdom says you can't have both. How do you respond?**
1. Choose the demand that has the most support → 1 pt
2. Negotiate a compromise between the two positions → 2 pts
3. Dig deeper to understand if there's an underlying shared interest beneath both demands → 3 pts
4. Reframe the problem — maybe the incompatibility is an artifact of how we're thinking about it, not a real constraint → 4 pts
5. Propose a third option nobody has considered that addresses both demands in a new way → 5 pts

#### GROUP INTELLIGENCE (3 questions)

**GI1. You're in a coalition meeting where two factions are in heated disagreement. The tension is rising and people are starting to take sides. What do you do?**
1. Pick the side I agree with and argue for it → 1 pt
2. Stay quiet and hope the facilitator manages it → 2 pts
3. Acknowledge both perspectives and try to identify common ground → 3 pts
4. Reframe the disagreement to show how both positions serve the coalition's shared mission → 4 pts
5. Hold the tension without trying to resolve it immediately — sometimes groups need to sit in disagreement before they can find a path through → 5 pts

**GI2. You're working with a group of people from very different backgrounds, political orientations, and communication styles. How do you approach the work?**
1. Advocate for my approach and hope the strongest ideas win → 1 pt
2. Try to establish common ground early so we have something to build on → 2 pts
3. Actively learn each person's communication style and adapt how I engage with each one → 3 pts
4. Create space for each perspective to be heard, then help the group synthesize a shared platform → 4 pts
5. Serve as a translator between different groups, helping each understand the others' frameworks and values → 5 pts

**GI3. A new person joins your organization and their working style is very different from the group's established culture. There's friction. How do you respond?**
1. Expect them to adapt to how we do things here → 1 pt
2. Give them time — they'll figure it out → 2 pts
3. Have a direct conversation about expectations while also being curious about what they bring → 3 pts
4. Help the group see what the new person's different style adds, while also helping the new person understand the group's culture → 4 pts
5. Use this as an opportunity for the whole group to examine its culture — maybe the friction reveals something we need to evolve → 5 pts

#### NUMBERS & OPERATIONS (3 questions)

**NO1. Your organization is planning a major campaign. The first thing you want to know is:**
1. What's the story we're telling? → 1 pt
2. Who are our allies and opponents? → 2 pts
3. What's our timeline and what are the key milestones? → 3 pts
4. What's the budget, and what resources do we need to make this work? → 4 pts
5. Show me the full operational plan — budget, staffing, logistics, timeline, and contingencies → 5 pts

**NO2. You learn that your organization is running a significant budget deficit. What's your first move?**
1. Trust that the leadership will figure it out — that's not really my area → 1 pt
2. Ask questions about what's causing the deficit → 2 pts
3. Look at the financials myself and identify where the gaps are → 3 pts
4. Develop a plan with multiple revenue scenarios and expense reduction options → 4 pts
5. Build a comprehensive financial recovery plan with diversified revenue streams, cash flow projections, and operational restructuring → 5 pts

**NO3. Someone proposes an ambitious new program. It sounds inspiring but there are no details on cost or implementation. How do you respond?**
1. Love it — let's figure out the details later, the vision is what matters → 1 pt
2. Supportive but cautious — I'd want to know more before committing → 2 pts
3. Ask for a rough budget estimate and timeline before moving forward → 3 pts
4. Offer to help build out the operational plan, including budget, staffing, and resource needs → 4 pts
5. Develop a full feasibility analysis with multiple implementation scenarios, cost-benefit projections, and resource mapping → 5 pts

#### LEADERSHIP (3 questions)

**L1. A group you're part of is stuck — there's no clear direction and people are losing momentum. What do you do?**
1. Wait for someone else to step up — I don't want to overstep → 1 pt
2. Suggest the group take a break and come back with fresh eyes → 2 pts
3. Offer a suggestion for a path forward and see if others agree → 3 pts
4. Summarize what I've heard, propose a direction, and ask the group to commit or counter-propose → 4 pts
5. Step in decisively — name the problem, propose the solution, assign roles, and get us moving → 5 pts

**L2. You're mentoring a newer activist who has great instincts but keeps making avoidable strategic mistakes. How do you approach it?**
1. Let them learn from their mistakes — experience is the best teacher → 1 pt
2. Offer advice when they ask for it → 2 pts
3. Proactively share lessons from my own experience, including my own mistakes → 3 pts
4. Create structured opportunities for them to practice and get feedback in lower-stakes situations → 4 pts
5. Invest deeply — meet regularly, set goals together, challenge them to grow, and hold them accountable → 5 pts

**L3. The group has been debating for an hour and can't reach consensus. There's a deadline approaching. What do you do?**
1. Push for more discussion — consensus matters more than deadlines → 1 pt
2. Propose a vote to settle it → 2 pts
3. Summarize the key areas of agreement and disagreement, then ask if we can move forward on what we agree on → 3 pts
4. Name the tradeoffs clearly, make a recommendation, and ask the group to decide now → 4 pts
5. Make the call — take responsibility for the decision, explain my reasoning, and commit to revisiting it after the deadline → 5 pts

#### COMMUNICATION (3 questions)

**CO1. You need to persuade a skeptical audience to support your cause. What's your instinct?**
1. Present the facts and evidence — the data speaks for itself → 1 pt
2. Make a logical, well-structured argument → 2 pts
3. Combine evidence with a personal story that puts a human face on the issue → 3 pts
4. Listen to what they care about first, then frame the issue in terms that connect to their existing values → 4 pts
5. Build a relationship with the audience before trying to persuade them — trust comes before arguments → 5 pts

**CO2. A journalist calls and wants a quote about a controversial situation involving your organization. You have five minutes. What do you do?**
1. Decline to comment until I can consult with the team → 1 pt
2. Give a safe, carefully worded response that doesn't make waves → 2 pts
3. Deliver a clear, prepared-sounding message that advances our position → 3 pts
4. Use the opportunity to reframe the narrative — answer the question I wish they'd asked → 4 pts
5. Treat it as a strategic communication moment — consider the audience, the news cycle, and our long-term narrative goals before crafting a response that serves all three → 5 pts

**CO3. You're connecting two people who don't know each other but whose work is deeply complementary. How do you approach it?**
1. Send a basic introduction email → 1 pt
2. Explain to each person why they should meet the other → 2 pts
3. Frame the introduction around a specific shared interest or potential collaboration → 3 pts
4. Set up the connection so both parties see immediate value, and follow up to make sure it sticks → 4 pts
5. Proactively build a network of these connections — I'm always mapping who should know who and making it happen → 5 pts

#### INSPIRE (3 questions)

**I1. The team is exhausted, morale is low, and the work ahead is daunting. What do you do?**
1. Acknowledge the difficulty and give people space to rest → 1 pt
2. Remind the team of past victories to boost morale → 2 pts
3. Reconnect everyone to the mission — remind them why this matters → 3 pts
4. Share a vision of what success looks like and make people feel it, not just understand it → 4 pts
5. Transform the energy in the room — help people feel that this difficulty is exactly the moment where movements are made, and they are the ones making it → 5 pts

**I2. You're recruiting volunteers for a demanding, unglamorous task that's essential to the campaign. How do you motivate people to sign up?**
1. Explain that it needs to be done and ask who can help → 1 pt
2. Emphasize the importance of the task to the overall campaign → 2 pts
3. Connect the task to a larger narrative — this boring work is what makes the exciting wins possible → 3 pts
4. Make people feel that their specific contribution matters — personalize the ask → 4 pts
5. Make the task itself feel meaningful and even exciting — transform drudgery into purpose through how you frame it, how you organize it, and how you celebrate it → 5 pts

**I3. A major setback threatens to derail your entire campaign. The team is demoralized. What's your move?**
1. Be honest about the setback and suggest regrouping → 1 pt
2. Acknowledge the blow but remind people that setbacks are part of the process → 2 pts
3. Reframe the setback as a learning moment and pivot the strategy → 3 pts
4. Help people see that this setback is not the end of the story — it's the middle, and the middle is always the hardest part → 4 pts
5. Turn the setback into fuel — use it as the catalyst for a bolder, more creative approach that wouldn't have existed without this failure → 5 pts

---

## Phase 3: Skills Inventory

### Purpose
Assess existing competencies across practical skill areas. This is an honest self-assessment, not a test.

### Design Notes
- Present as a self-rating scale with clear anchors
- Each skill shows: skill name, brief description, and a 1–5 scale with labeled anchors
- Make it clear that lower scores are fine — this is about identifying where to start, not about judgment
- Display in a card format with friendly language

### Questions

For each skill, the user rates themselves 1–5 with these anchors:
- 1 = "Completely new to me"
- 2 = "I've dabbled but wouldn't call it a skill yet"
- 3 = "I have some experience and basic competence"
- 4 = "I'm confident in this area and do it regularly"
- 5 = "I could teach this to others"

**SK1. Community Organizing** — Bringing people together around shared goals, building relational power, running meetings, developing volunteer leaders

**SK2. Fundraising & Development** — Writing grants, cultivating donors, running fundraising campaigns, managing budgets

**SK3. Public Speaking & Testimony** — Speaking to audiences, giving testimony at hearings, presenting at meetings, addressing the media

**SK4. Writing & Content Creation** — Writing persuasive content, op-eds, reports, social media posts, emails, press releases

**SK5. Legal & Policy Knowledge** — Understanding legislation, legal frameworks, regulatory processes, constitutional principles

**SK6. Data & Research** — Analyzing data, conducting research, building evidence-based arguments, using data to tell stories

**SK7. Event Planning & Logistics** — Organizing events, managing logistics, coordinating volunteers, handling operations

**SK8. Digital & Social Media** — Running social media campaigns, creating digital content, using online organizing tools

**SK9. Counseling & Support** — Providing emotional support, crisis intervention, peer counseling, trauma-informed care

**SK10. Project Management** — Managing timelines, coordinating teams, tracking deliverables, budget management

---

## Phase 4: Strategic Orientation Spectrums

### Purpose
Determine where participants sit on two fundamental strategic spectrums. These are orientations to understand, not skills to develop.

### Design Notes
- Present scenarios that create genuine strategic tension — no obviously "right" answer
- Each answer shifts the participant along the spectrum
- Show the spectrum visually updating after each answer
- Include a brief intro: "These questions don't have right or wrong answers. They reveal your natural strategic orientation — and movements need people everywhere on these spectrums."

### Inside/Outside Spectrum Questions

**IO1. A piece of harmful legislation is moving through committee. You have limited time and resources. Where do you focus?**
- A) Schedule meetings with committee members to negotiate amendments that reduce harm → inside +2
- B) Work with legislative staff behind the scenes to insert protective language → inside +1
- C) Organize impacted community members to testify at public hearings → balanced (0)
- D) Launch a public pressure campaign targeting committee members in their districts → outside +1
- E) Organize direct actions at committee members' offices to make the political cost of supporting the bill visible → outside +2

**IO2. Your community has been fighting for a policy change for years. A sympathetic elected official offers to champion it, but wants you to moderate some of your demands to make the bill "passable." What do you do?**
- A) Accept the compromise — getting something passed is better than getting nothing → inside +2
- B) Negotiate further but ultimately work within their framework → inside +1
- C) Maintain your full demands publicly while signaling willingness to negotiate privately → balanced (0)
- D) Reject the compromise and escalate public pressure to move the official toward your full position → outside +1
- E) Use the official's offer as evidence that the system is designed to absorb and neutralize real change, and organize independently → outside +2

**IO3. You're advising a new activist on how to approach a local issue. Which advice feels most right to you?**
- A) "Build relationships with the decision-makers first. Change happens when you have a seat at the table." → inside +2
- B) "Learn how the system works — legislative calendars, regulatory processes, budget cycles. That's where the openings are." → inside +1
- C) "Do both — work the inside game and the outside game simultaneously." → balanced (0)
- D) "Build your base first. You need people power before you need access to power." → outside +1
- E) "Don't ask permission. Create the change you want to see and force the system to respond." → outside +2

**IO4. A major victory is possible, but only through a strategy that requires working closely with an institution you fundamentally distrust. What's your instinct?**
- A) Engage strategically — you can work within systems you distrust if the outcome serves your community → inside +2
- B) Engage cautiously, with clear boundaries and an exit plan → inside +1
- C) It depends entirely on the specific situation and the stakes → balanced (0)
- D) Build alternative power outside the institution that eventually makes its cooperation unnecessary → outside +1
- E) Refuse to legitimize the institution — working within it only strengthens it → outside +2

### Righteousness/Relationship Spectrum Questions

**RR1. An organization that has historically been hostile to your community makes a public gesture of support. Their track record is bad, but they seem to be evolving. What's your response?**
- A) Engage fully — people and organizations can change, and we should meet them where they are → relationship +2
- B) Engage cautiously — accept the gesture while keeping expectations measured → relationship +1
- C) Acknowledge the gesture publicly but wait for sustained action before investing in the relationship → balanced (0)
- D) Express skepticism publicly — one gesture doesn't undo years of harm, and our community deserves more than performative allyship → righteousness +1
- E) Reject it outright — some track records are disqualifying and accepting the gesture only gives cover for past harm → righteousness +2

**RR2. You're negotiating with a political opponent who holds significant power over an issue your community cares about. They're willing to give you 60% of what you want, but only if you publicly endorse them on an unrelated issue. What do you do?**
- A) Take the deal — 60% helps real people now, and the endorsement costs us less than gaining nothing → relationship +2
- B) Counter-negotiate to reduce the endorsement requirement, but be willing to make some concession → relationship +1
- C) It depends on what the unrelated issue is and who is hurt by the endorsement → balanced (0)
- D) Reject the deal — tying our integrity to their political interests sets a dangerous precedent → righteousness +1
- E) Reject and publicize — expose the transactional nature of the offer to show how power operates → righteousness +2

**RR3. A prominent figure in your movement is accused of behavior that contradicts your movement's values. The evidence is credible. The person is also one of your most effective organizers. How do you respond?**
- A) Prioritize keeping them engaged while addressing the behavior privately — losing them hurts the movement → relationship +2
- B) Address it seriously but with an eye toward accountability AND their continued growth → relationship +1
- C) Follow whatever accountability process the organization has established, regardless of who they are → balanced (0)
- D) Hold them to account publicly — our values mean nothing if they don't apply to our own leaders → righteousness +1
- E) Zero tolerance — if our movement can't model the world we want to create, we have no moral authority to demand change from others → righteousness +2

**RR4. Your coalition includes organizations whose positions on other issues deeply conflict with your values. They're reliable partners on your core issue. What do you do?**
- A) Maintain the coalition — single-issue alliances are how change gets made, and we don't need to agree on everything → relationship +2
- B) Maintain it but create clear boundaries about which issues are part of the coalition and which are not → relationship +1
- C) Evaluate case by case — some value conflicts are tolerable, others aren't → balanced (0)
- D) Begin distancing — being associated with organizations whose values fundamentally conflict with ours undermines our credibility → righteousness +1
- E) Exit — if our coalition partners are causing harm in other arenas, our partnership legitimizes that harm → righteousness +2

---

## Scoring & Archetype Mapping Algorithm

### Step 1: Calculate Motivation Profile
Sum scores across all 6 motivation dimensions. The top 2 motivations become the participant's **Motivation Profile** (e.g., "Justice + Community" or "Narrative + Disruption").

### Step 2: Calculate Core Stats
For each of the 10 stats, sum the 3 question scores. This produces a score of 3–15 per stat. Normalize to a 1–10 display scale:

```javascript
displayScore = Math.round(((rawScore - 3) / 12) * 9) + 1
```

### Step 3: Record Skills Inventory
Store the raw 1–5 self-assessments. These inform the learning path but not the archetype.

### Step 4: Calculate Orientation Spectrums
Sum the Inside/Outside scores (range: -8 to +8). Sum the Righteousness/Relationship scores (range: -8 to +8). Normalize to a -5 to +5 display scale.

### Step 5: Determine Archetype

Each archetype has a scoring profile. Calculate a match score for each archetype by comparing the participant's stats and orientations to the archetype's signature:

```javascript
const archetypes = {
  // HOUSE OF VISION
  visionary: {
    house: "vision",
    name: "The Visionary",
    statWeights: { inspire: 3, communication: 3, strategicThinking: 2, conflict: 1, empathyListening: 1 },
    orientationWeight: { insideOutside: 0, righteousnessRelationship: 1 },  // slight righteousness lean
    motivationBonus: ["justice", "disruption", "narrative"],
    description: "You see the future and articulate the destination. You speak in possibilities others haven't imagined. You generate the moral and imaginative horizon that pulls movements forward.",
    exemplar: "Martin Luther King Jr. — dream rhetoric + moral imagination; fused prophetic vision with narrative power to redefine the American conscience.",
    secondExemplar: "Harvey Milk — hope as a political weapon; built unlikely coalitions in San Francisco by making people believe in a future that didn't yet exist.",
    learningPath: {
      startWith: ["Foundations of Power", "Communications & Narrative Strategy"],
      buildInto: ["Tactical Innovation & Earned Media", "Political Education & Group Learning"],
      supplement: ["Organizing & Base-Building", "Resource & Capacity Development"]
    }
  },
  strategist: {
    house: "vision",
    name: "The Strategist",
    statWeights: { strategicThinking: 3, adaptability: 3, conflict: 2, numbersOperations: 1, leadership: 1 },
    orientationWeight: { insideOutside: 0, righteousnessRelationship: -1 },  // slight relationship lean
    motivationBonus: ["policy", "disruption", "justice"],
    description: "You map power, sequence moves, and think three steps ahead. You design campaigns that connect today's action to next year's victory. You are the chess player of the movement.",
    exemplar: "Bayard Rustin — orchestrated the March on Washington; master tactician who sequenced mass action with legislative strategy while building organizational infrastructure.",
    secondExemplar: "Ruth Bader Ginsburg — built the legal architecture of gender equality through decades of strategic litigation; sequenced cases to construct precedent incrementally.",
    learningPath: {
      startWith: ["Power & Resource Mapping", "Electoral & Campaign Strategy"],
      buildInto: ["Legislative & Policy Strategy", "Legal & Constitutional Frameworks"],
      supplement: ["Communications & Narrative Strategy", "Healing & Sustainability"]
    }
  },
  analyst: {
    house: "vision",
    name: "The Analyst",
    statWeights: { strategicThinking: 3, communication: 2, numbersOperations: 2, empathyListening: 1, creativeProblemSolving: 2 },
    orientationWeight: { insideOutside: 0, righteousnessRelationship: 0 },
    motivationBonus: ["justice", "policy", "narrative"],
    description: "You research, framework, and diagnose. You produce the intellectual infrastructure movements build on. You turn lived experience into theory and theory into tools.",
    exemplar: "Kimberlé Crenshaw — developed intersectionality as an analytical framework; produced intellectual infrastructure that transformed how movements understand overlapping systems of oppression.",
    secondExemplar: "Angela Davis — articulated a radical vision linking racial justice, feminism, and anti-capitalism; produced intellectual frameworks for abolition that continue to shape movements.",
    learningPath: {
      startWith: ["Foundations of Power", "Political Education & Group Learning"],
      buildInto: ["Legal & Constitutional Frameworks", "Communications & Narrative Strategy"],
      supplement: ["Organizing & Base-Building", "Power & Resource Mapping"]
    }
  },
  // HOUSE OF CONNECTION
  bridgeBuilder: {
    house: "connection",
    name: "The Bridge-Builder",
    statWeights: { groupIntelligence: 3, empathyListening: 3, communication: 2, adaptability: 1, leadership: 1 },
    orientationWeight: { insideOutside: -1, righteousnessRelationship: -1 },  // inside + relationship lean
    motivationBonus: ["community", "policy", "service"],
    description: "You create unlikely alliances. You move fluently between communities, sectors, and political cultures. You translate across difference and build coalitions that hold.",
    exemplar: "Dolores Huerta — co-founded the UFW; moved between farmworker communities, labor unions, and political coalitions while building relational base power.",
    secondExemplar: "Eleanor Roosevelt — navigated the inside game at the highest levels of power; co-authored the Universal Declaration of Human Rights while building coalitions across nations.",
    learningPath: {
      startWith: ["Organizing & Base-Building", "Power & Resource Mapping"],
      buildInto: ["Electoral & Campaign Strategy", "Legislative & Policy Strategy"],
      supplement: ["Communications & Narrative Strategy", "Healing & Sustainability"]
    }
  },
  healer: {
    house: "connection",
    name: "The Healer",
    statWeights: { empathyListening: 3, groupIntelligence: 2, leadership: 2, inspire: 1, adaptability: 2 },
    orientationWeight: { insideOutside: 0, righteousnessRelationship: -1 },  // slight relationship lean
    motivationBonus: ["service", "community", "narrative"],
    description: "You center care, restoration, and sustainability. You hold space for grief, trauma, and renewal. You are the one who keeps movements human when the work tries to break people.",
    exemplar: "adrienne maree brown — emergent strategy and pleasure activism; reframed movement sustainability around fractal organizing, somatics, and the imagination of liberatory futures.",
    secondExemplar: "Audre Lorde — redefined self-care as political warfare; her writing on the erotic as power and the uses of anger remain foundational to movement sustainability.",
    learningPath: {
      startWith: ["Healing & Sustainability", "Direct Service Supports & Mutual Aid"],
      buildInto: ["Arts & Cultural Events", "Political Education & Group Learning"],
      supplement: ["Organizing & Base-Building", "Communications & Narrative Strategy"]
    }
  },
  diplomat: {
    house: "connection",
    name: "The Diplomat",
    statWeights: { groupIntelligence: 3, adaptability: 3, communication: 2, strategicThinking: 1, numbersOperations: 1 },
    orientationWeight: { insideOutside: -2, righteousnessRelationship: -2 },  // strongly inside + relationship
    motivationBonus: ["policy", "community", "service"],
    description: "You work the inside game. You maintain relationships with systems of power, negotiate concessions, and secure incremental gains. You stay at the table because the table is where deals are made.",
    exemplar: "Bryan Stevenson — Equal Justice Initiative's inside strategy combined with the narrative power of 'Just Mercy'; works within legal systems while using story to shift public understanding.",
    secondExemplar: "Thurgood Marshall — decades of strategic litigation culminating in Brown v. Board; built legal infrastructure through patient insider strategy and institutional relationship.",
    learningPath: {
      startWith: ["Legislative & Policy Strategy", "Legal & Constitutional Frameworks"],
      buildInto: ["Electoral & Campaign Strategy", "Power & Resource Mapping"],
      supplement: ["Communications & Narrative Strategy", "Organizing & Base-Building"]
    }
  },
  // HOUSE OF ACTION
  organizer: {
    house: "action",
    name: "The Organizer",
    statWeights: { leadership: 3, groupIntelligence: 3, inspire: 2, empathyListening: 1, communication: 1 },
    orientationWeight: { insideOutside: 0, righteousnessRelationship: 0 },
    motivationBonus: ["community", "service", "disruption"],
    description: "You build the base. You go door to door, develop leaders, and construct the relational infrastructure that turns individuals into collective power. You are the engine of every movement.",
    exemplar: "Ella Baker — built SNCC's grassroots infrastructure; theorized participatory democracy and group-centered leadership as an alternative to charismatic models.",
    secondExemplar: "Stacey Abrams — built voter infrastructure across Georgia at operational scale; combined relational organizing with data-driven systems and fundraising capacity.",
    learningPath: {
      startWith: ["Organizing & Base-Building", "Electoral & Campaign Strategy"],
      buildInto: ["Direct Service Supports & Mutual Aid", "Power & Resource Mapping"],
      supplement: ["Resource & Capacity Development", "Communications & Narrative Strategy"]
    }
  },
  agitator: {
    house: "action",
    name: "The Agitator",
    statWeights: { conflict: 3, inspire: 3, creativeProblemSolving: 2, communication: 1, adaptability: 1 },
    orientationWeight: { insideOutside: 2, righteousnessRelationship: 2 },  // strongly outside + righteousness
    motivationBonus: ["disruption", "justice", "narrative"],
    description: "You raise the heat. You are willing to be disliked, to force uncomfortable confrontations, to create the crisis that makes the status quo untenable. You name what others won't.",
    exemplar: "Larry Kramer — ACT UP's rage and confrontation combined with 'The Normal Heart'; fused direct action with narrative to force the AIDS crisis into public consciousness.",
    secondExemplar: "Marsha P. Johnson — Stonewall confrontation combined with tireless community care for homeless LGBTQ youth; embodied both righteous disruption and direct mutual aid.",
    learningPath: {
      startWith: ["Tactical Innovation & Earned Media", "Communications & Narrative Strategy"],
      buildInto: ["Foundations of Power", "Organizing & Base-Building"],
      supplement: ["Healing & Sustainability", "Power & Resource Mapping"]
    }
  },
  storyteller: {
    house: "action",
    name: "The Storyteller",
    statWeights: { communication: 3, inspire: 3, empathyListening: 2, creativeProblemSolving: 1, conflict: 1 },
    orientationWeight: { insideOutside: 0, righteousnessRelationship: 0 },
    motivationBonus: ["narrative", "justice", "community"],
    description: "You transform lived experience into narrative power. You make the invisible visible, and change what people feel before trying to change what they think.",
    exemplar: "James Baldwin — narrative transformation of the American racial imagination; used essay, novel, and public testimony to make the invisible architecture of racism visible.",
    secondExemplar: "Fannie Lou Hamer — testimony at the 1964 Democratic National Convention transformed national consciousness; combined personal narrative power with unflinching confrontation.",
    learningPath: {
      startWith: ["Communications & Narrative Strategy", "Tactical Innovation & Earned Media"],
      buildInto: ["Arts & Cultural Events", "Foundations of Power"],
      supplement: ["Organizing & Base-Building", "Healing & Sustainability"]
    }
  },
  // HOUSE OF INFRASTRUCTURE
  architect: {
    house: "infrastructure",
    name: "The Architect",
    statWeights: { strategicThinking: 3, numbersOperations: 3, leadership: 2, communication: 1, conflict: 1 },
    orientationWeight: { insideOutside: -2, righteousnessRelationship: 0 },  // strongly inside
    motivationBonus: ["policy", "justice", "disruption"],
    description: "You build the policies, legal frameworks, and institutions that outlast any single campaign. You think in decades. You design systems that encode justice into structure.",
    exemplar: "Pauli Murray — legal theorist whose work on race and sex discrimination laid the intellectual and constitutional groundwork used by Thurgood Marshall and Ruth Bader Ginsburg alike.",
    secondExemplar: "Evan Wolfson — designed the decades-long legal and political strategy that led to marriage equality; an architect of both constitutional argument and movement infrastructure.",
    learningPath: {
      startWith: ["Legal & Constitutional Frameworks", "Legislative & Policy Strategy"],
      buildInto: ["Resource & Capacity Development", "Power & Resource Mapping"],
      supplement: ["Electoral & Campaign Strategy", "Organizing & Base-Building"]
    }
  },
  operator: {
    house: "infrastructure",
    name: "The Operator",
    statWeights: { numbersOperations: 3, leadership: 3, adaptability: 2, strategicThinking: 1, groupIntelligence: 1 },
    orientationWeight: { insideOutside: 0, righteousnessRelationship: 0 },
    motivationBonus: ["policy", "community", "service"],
    description: "You run the machine. You fundraise, budget, manage logistics, and build the operational capacity without which no strategy survives contact with reality.",
    exemplar: "Fred Ross Sr. — trained Cesar Chavez and Dolores Huerta; built the Community Service Organization through methodical door-to-door organizing and operational systems that scaled movement capacity.",
    secondExemplar: "Stacey Abrams (Operator dimension) — built the fundraising, data, and operational infrastructure that powered Fair Fight Action and Georgia's voter registration revolution.",
    learningPath: {
      startWith: ["Resource & Capacity Development", "Electoral & Campaign Strategy"],
      buildInto: ["Power & Resource Mapping", "Organizing & Base-Building"],
      supplement: ["Legislative & Policy Strategy", "Healing & Sustainability"]
    }
  },
  guardian: {
    house: "infrastructure",
    name: "The Guardian",
    statWeights: { empathyListening: 3, leadership: 3, adaptability: 2, groupIntelligence: 1, conflict: 1 },
    orientationWeight: { insideOutside: 0, righteousnessRelationship: 1 },  // slight righteousness lean
    motivationBonus: ["service", "community", "justice"],
    description: "You provide direct support and mutual aid to community members in crisis. You build peer-to-peer, non-hierarchical systems of care and protection. You are the front line of solidarity.",
    exemplar: "Huey P. Newton — Black Panther Party's free breakfast programs, health clinics, and community defense; built mutual aid infrastructure rooted in a radical vision of community self-determination.",
    secondExemplar: "Sylvia Rivera — co-founded STAR (Street Transvestite Action Revolutionaries); ran a shelter for homeless trans youth from her own apartment while fighting for community survival.",
    learningPath: {
      startWith: ["Direct Service Supports & Mutual Aid", "Healing & Sustainability"],
      buildInto: ["Organizing & Base-Building", "Arts & Cultural Events"],
      supplement: ["Resource & Capacity Development", "Communications & Narrative Strategy"]
    }
  }
};
```

### Match Score Calculation

```javascript
function calculateArchetypeScores(participantData) {
  const scores = {};

  for (const [key, archetype] of Object.entries(archetypes)) {
    let score = 0;

    // Stat match (weighted)
    for (const [stat, weight] of Object.entries(archetype.statWeights)) {
      score += participantData.stats[stat] * weight;
    }

    // Orientation match
    if (archetype.orientationWeight.insideOutside !== 0) {
      const ioMatch = 1 - Math.abs(participantData.orientation.insideOutside - archetype.orientationWeight.insideOutside * 2.5) / 10;
      score += ioMatch * 5;
    }
    if (archetype.orientationWeight.righteousnessRelationship !== 0) {
      const rrMatch = 1 - Math.abs(participantData.orientation.righteousnessRelationship - archetype.orientationWeight.righteousnessRelationship * 2.5) / 10;
      score += rrMatch * 5;
    }

    // Motivation bonus
    const topMotivations = getTopMotivations(participantData.motivations, 2);
    for (const mot of archetype.motivationBonus) {
      if (topMotivations.includes(mot)) score += 5;
    }

    scores[key] = score;
  }

  // Sort and return top 2
  const sorted = Object.entries(scores).sort((a, b) => b[1] - a[1]);
  return {
    primary: archetypes[sorted[0][0]],
    secondary: archetypes[sorted[1][0]]
  };
}
```

### Determining the Secondary Archetype
The secondary archetype is the second-highest scoring archetype, with one rule: if the top two archetypes are in the same house, check if the third-place archetype in a different house scores within 85% of the second-place score. If so, use the different-house archetype as the secondary to provide more dimensional contrast.

---

## Results Page: The Character Sheet

### Layout (Design for both screen view and screenshot/sharing)

```
┌─────────────────────────────────────────────────┐
│  [House Color Banner]                           │
│  HOUSE OF [HOUSE NAME]                          │
│  ─────────────────────────────                  │
│  [ARCHETYPE NAME]         [Portrait Placeholder]│
│  "Archetype tagline description"                │
│                                                 │
│  Secondary: The [Secondary Archetype]           │
├─────────────────────────────────────────────────┤
│  YOUR CORE STATS              [Radar Chart]     │
│  Conflict: ████████░░ 8                         │
│  Empathy:  ██████░░░░ 6                         │
│  Strategy: █████████░ 9                         │
│  ... (all 10 stats)                             │
├─────────────────────────────────────────────────┤
│  MOTIVATION PROFILE                             │
│  Primary: Justice | Secondary: Disruption       │
├─────────────────────────────────────────────────┤
│  STRATEGIC ORIENTATION                          │
│  Inside ◄──────●──────► Outside                 │
│  Relationship ◄────────●► Righteousness         │
├─────────────────────────────────────────────────┤
│  HISTORICAL EXEMPLAR                            │
│  [Exemplar name and description]                │
├─────────────────────────────────────────────────┤
│  YOUR LEARNING PATH                             │
│  Start With: [2 schools]                        │
│  Build Into: [2 schools]                        │
│  Supplement: [2 schools]                        │
├─────────────────────────────────────────────────┤
│  [Share Button] [Save as Image] [Take Again]    │
└─────────────────────────────────────────────────┘
```

### Archetype Reveal Sequence
1. Screen fades to house color
2. House name appears with tagline
3. Archetype name reveals with a dramatic animation
4. Brief (2–3 sentence) narrative description fades in
5. "See Your Full Character Sheet" button appears
6. Clicking reveals the full character sheet with all details

### Sharing Features
- **Share to social media:** Generate a shareable card image with the participant's house, archetype name, and a brief description
- **Copy link:** Unique URL that displays the character sheet (if backend is available) or a shareable summary
- **Save as image:** Download the character sheet as a PNG

---

## House & Archetype Reference Data

### Houses

| House | Name | Tagline | Color | Function |
|-------|------|---------|-------|----------|
| Vision | House of Vision | Those who see the destination and chart the course | #6B3FA0 | Direction, analysis, moral clarity |
| Connection | House of Connection | Those who build and sustain relationships across difference | #2D8659 | Relationships, coalition, care |
| Action | House of Action | Those who mobilize energy and create momentum | #C4652A | Mobilization, energy, confrontation |
| Infrastructure | House of Infrastructure | Those who build the systems that outlast any single campaign | #3A6B8C | Systems, sustainability, operations |

### All 12 Archetypes Summary

| Archetype | House | Core Description |
|-----------|-------|------------------|
| The Visionary | Vision | Sees the future and articulates the destination |
| The Strategist | Vision | Maps power, sequences moves, thinks three steps ahead |
| The Analyst | Vision | Researches, frameworks, and produces intellectual infrastructure |
| The Bridge-Builder | Connection | Creates unlikely alliances and translates across difference |
| The Healer | Connection | Centers care, restoration, and sustainability |
| The Diplomat | Connection | Works the inside game and maintains relationships with power |
| The Organizer | Action | Builds the base and develops collective power |
| The Agitator | Action | Raises the heat and forces uncomfortable confrontations |
| The Storyteller | Action | Transforms lived experience into narrative power |
| The Architect | Infrastructure | Builds policies, legal frameworks, and institutions |
| The Operator | Infrastructure | Manages fundraising, budgets, logistics, and operations |
| The Guardian | Infrastructure | Provides direct support and mutual aid in crisis |

---

## Curriculum: The Thirteen Schools

The recommended learning path references these schools, organized across three sections:

### Section I: Forming
1. **Foundations of Power** — How systems of power operate; movement history; theories of change
2. **Organizing & Base-Building** — Group dynamics, mission/vision/values, relational organizing
3. **Power & Resource Mapping** — Issue identification, micro/mezzo/macro strategy, coalition mapping
4. **Resource & Capacity Development** — Fundraising, grants, budgeting, operational planning

### Section II: Tactics
5. **Legislative & Policy Strategy** — Legislative process, lobbying, regulatory navigation
6. **Communications & Narrative Strategy** — Media strategy, storytelling, framing, crisis comms
7. **Legal & Constitutional Frameworks** — Civil rights law, constitutional analysis, legal strategy
8. **Electoral & Campaign Strategy** — Candidate and ballot campaigns, voter contact, field operations
9. **Tactical Innovation & Earned Media** — Social media campaigns, creative tactics, earned media

### Section III: Sustaining Momentum
10. **Healing & Sustainability** — Burnout prevention, trauma-informed organizing, restorative justice
11. **Direct Service Supports & Mutual Aid** — Peer-to-peer support, community security, solidarity
12. **Political Education & Group Learning** — Study groups, ongoing group dynamics, collective analysis
13. **Arts & Cultural Events** — Creative expression, cultural programming, art as resistance

---

## Implementation Notes

### Accessibility
- All color choices must meet WCAG AA contrast ratios
- All interactive elements must be keyboard-navigable
- Screen reader support for all quiz elements
- Animations should respect `prefers-reduced-motion`

### Performance
- Questions should load instantly — no waiting between questions
- The calculation/archetype reveal can include a brief (2–3 second) "calculating" animation for dramatic effect
- Total quiz completion time target: 12–18 minutes

### Analytics (if implementing)
- Track completion rate per phase
- Track drop-off points
- Track sharing rate
- Track archetype distribution across users

### Future Enhancements (do not implement now, but design for extensibility)
- Progression tracking as users complete Academy modules
- "Level up" stat animations when curriculum milestones are hit
- Cohort comparison (how your stats compare to your cohort)
- Archetype compatibility (how different archetypes work together in teams)
