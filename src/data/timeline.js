import hospitalityRole from "../assets/hospitality-role.jpg";
import classence from "../assets/classence.jpg";
import energyClub from "../assets/energy-club.jpg";
import ceintJerome from "../assets/ceint-jerome.jpg";
import researchTeam from "../assets/research-team.jpg";

export const timeline = [
  {
    id: "unilag",
    year: "2024 — Present",
    role: "Engineering Student, UNILAG",
    image: null,
    body: "Studying Metallurgical and Materials Engineering at the University of Lagos — the technical foundation underneath everything else he builds.",
  },
  {
    id: "hospitality",
    year: "2023 — Present",
    role: "Hospitality Leadership",
    image: hospitalityRole,
    alt: "Jerome in a reception/dining setting during his hospitality leadership role",
    body: "Three years managing customer engagement across four residential properties, two spas, a gym, and a restaurant — handling 4,000+ interactions and contributing to a 63% year-on-year increase in engagement. Twice won the organization's Customer Service Award (2024, 2025) and recognized during Customer Service Week 2024.",
    pullNumbers: [
      { value: "4,000+", label: "interactions handled" },
      { value: "63%", label: "YoY engagement growth" },
    ],
  },
  {
    id: "classence",
    year: "2023 — Present",
    role: "Business Lead, Classence",
    image: classence,
    alt: "Jerome at work as Business Lead for Classence",
    body: "Leading business strategy and day-to-day operations at Classence — translating ideas into structure that actually runs.",
  },
  {
    id: "energy-club",
    year: "2023 — Present",
    role: "Financial Analyst (Volunteer), UNILAG Energy Club",
    image: energyClub,
    alt: "Jerome holding the winner's cheque at the 234 AI Hackathon & Commerce Fusion 2026",
    body: "Volunteering his financial analysis skills to support the Energy Club's initiatives — governance and numbers in service of a student community.",
  },
  {
    id: "ceint-jerome",
    year: "2024 — Present",
    role: "Creative Director, Ceint Jerome",
    image: ceintJerome,
    alt: "Creative direction work under the Ceint Jerome label",
    body: "Directing the Ceint Jerome label, where his debut collection “Weightless” placed 2nd at the 234 Art Fair — proof that engineering discipline and creative expression aren't opposites.",
  },
  {
    id: "research",
    year: "2026",
    role: "Researcher, Raw Materials Diplomacy",
    image: researchTeam,
    alt: "Jerome with the Raw Materials Diplomacy research team",
    body: "Explored how nations use strategic mineral resources to shape industrial and economic power — research that sharpened how he thinks about leverage, resources, and fairness.",
  },
];
