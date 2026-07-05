// Shared across the Home agenda teaser, /platform, and the pledge-wall quiz result screen.
export const pillars = [
  {
    key: "accessibility",
    number: "01",
    title: "Accessibility",
    line: "Welfare shouldn't be a scavenger hunt.",
    detail:
      "Clear signage, a known point of contact, and processes that don't require insider knowledge to navigate.",
    resultTitle: "The Access-Seeker",
    resultCopy:
      "You want doors to be easy to find, not hidden behind bureaucracy. Accessibility is the pillar built for you — making sure every student knows exactly where help lives.",
  },
  {
    key: "responsiveness",
    number: "02",
    title: "Responsiveness",
    line: "A concern raised deserves a reply, fast.",
    detail:
      "Real turnaround times on complaints and requests, with someone accountable for answering — not a message that disappears into a void.",
    resultTitle: "The Quick Responder",
    resultCopy:
      "You don't ask for much — just a reply that actually shows up on time. Responsiveness is the pillar that speaks to you, turning “we'll get back to you” into something you can count on.",
  },
  {
    key: "transparency",
    number: "03",
    title: "Transparency",
    line: "Show your work — students can handle the truth.",
    detail:
      "Open updates on decisions and spending, plain-language explanations, and no guessing games about what's actually happening.",
    resultTitle: "The Truth-Seeker",
    resultCopy:
      "You care less about promises and more about knowing what's really going on. Transparency is the pillar built for you — open updates and plain answers, no guessing games.",
  },
  {
    key: "practical",
    number: "04",
    title: "Practical Support",
    line: "Welfare measured in what changes, not what's announced.",
    detail:
      "Tangible help — materials, guidance, small emergencies covered — the kind of support you can point to, not just hear about.",
    resultTitle: "The Ground-Level Realist",
    resultCopy:
      "You've heard enough good intentions — you want to see support land. Practical Support is the pillar built for you, measured in what actually changes for students.",
  },
];

export function getPillar(key) {
  return pillars.find((p) => p.key === key);
}
