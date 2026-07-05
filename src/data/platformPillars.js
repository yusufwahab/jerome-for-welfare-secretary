import hospitalityRole from "../assets/hospitality-role.jpg";
import csWeek2024 from "../assets/customer-service-week-2024.jpg";
import researchTeam from "../assets/research-team.jpg";
import classence from "../assets/classence.jpg";
import { pillars } from "./pillars";

// Pairs each manifesto pillar with one of Jerome's own photos and a short
// note on why that experience grounds the pillar (kept honest — these are
// his real photos, reused thematically rather than staged to literally
// depict the concept).
const IMAGES = {
  accessibility: {
    image: hospitalityRole,
    alt: "Jerome in a reception/dining setting during his hospitality leadership role",
    imageNote: "Three years making service easy to reach, for thousands of guests.",
  },
  responsiveness: {
    image: csWeek2024,
    alt: "Jerome working with teammates on laptops during the 234 AI Hackathon build phase",
    imageNote: "Recognized for how fast — and how well — he responded to people.",
  },
  transparency: {
    image: researchTeam,
    alt: "The Classence logo",
    imageNote: "Research demands showing your work — welfare should too.",
  },
  practical: {
    image: classence,
    alt: "The Classence logo",
    imageNote: "Running real operations, where support has to actually land.",
  },
};

export const platformPillars = pillars.map((pillar) => ({
  ...pillar,
  ...IMAGES[pillar.key],
}));
