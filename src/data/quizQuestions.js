// The 4 pillar keys must match src/data/pillars.js
export const quizQuestions = [
  {
    id: "deadline",
    prompt: "A stressful deadline is coming up. What's your first move?",
    options: [
      { text: "Look for someone who's done it before to ask", pillar: "accessibility" },
      { text: "Message the department page and wait for a reply", pillar: "responsiveness" },
      { text: "Try to find the actual rules so I know what's expected", pillar: "transparency" },
      { text: "Just start working — I'll figure out resources as I go", pillar: "practical" },
    ],
  },
  {
    id: "findHelp",
    prompt: "Do you know where to find help on campus when something goes wrong?",
    options: [
      { text: "Not really — I never know who to ask", pillar: "accessibility" },
      { text: "I know who to ask, but they take forever to reply", pillar: "responsiveness" },
      { text: "I know who to ask, I just don't trust the process", pillar: "transparency" },
      { text: "I know where help is — I just need it to be easier to use", pillar: "practical" },
    ],
  },
  {
    id: "communication",
    prompt: "How would you want welfare issues communicated to you?",
    options: [
      { text: "Clear signage and simple guides, so I'm not hunting for info", pillar: "accessibility" },
      { text: "Fast, direct replies whenever I reach out", pillar: "responsiveness" },
      { text: "Open updates on what's actually being done", pillar: "transparency" },
      { text: "Less talk, more real support I can point to", pillar: "practical" },
    ],
  },
  {
    id: "frustration",
    prompt: "What frustrates you most about student welfare admin?",
    options: [
      { text: "Not knowing who's in charge of what", pillar: "accessibility" },
      { text: "Waiting days for a response that should take minutes", pillar: "responsiveness" },
      { text: "Decisions made with zero explanation", pillar: "transparency" },
      { text: "Good intentions with no real follow-through", pillar: "practical" },
    ],
  },
  {
    id: "fix",
    prompt: "If you could fix one thing about how welfare works right now, what would it be?",
    options: [
      { text: "Make it easier to reach the right person", pillar: "accessibility" },
      { text: "Make responses faster", pillar: "responsiveness" },
      { text: "Make the process clearer", pillar: "transparency" },
      { text: "Make support actually happen, not just get promised", pillar: "practical" },
    ],
  },
];
