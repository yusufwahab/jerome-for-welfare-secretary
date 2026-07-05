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
    alt: "Professional portrait of Ofuowoicho Jerome Joseph",
    imageNote: "Three years making service easy to reach, for thousands of guests.",
  },
  responsiveness: {
    image: csWeek2024,
    alt: "Recognition ceremony during Customer Service Week 2024",
    imageNote: "Recognized for how fast — and how well — he responded to people.",
  },
  transparency: {
    image: researchTeam,
    alt: "Jerome with the Raw Materials Diplomacy research team",
    imageNote: "Research demands showing your work — welfare should too.",
  },
  practical: {
    image: classence,
    alt: "Jerome at work as Business Lead for Classence",
    imageNote: "Running real operations, where support has to actually land.",
  },
};

export const platformPillars = pillars.map((pillar) => ({
  ...pillar,
  ...IMAGES[pillar.key],
}));
