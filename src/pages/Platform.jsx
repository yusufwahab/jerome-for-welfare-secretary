import { Link } from "react-router-dom";
import { Container } from "../components/shared/Container";
import { RevealOnScroll, RevealStagger, RevealItem } from "../components/shared/RevealOnScroll";
import { PullQuote } from "../components/shared/PullQuote";
import { PillarSection } from "../components/platform/PillarSection";
import { platformPillars } from "../data/platformPillars";

const MANDATE_MAP = [
  { skill: "Service", mandate: "Empathy" },
  { skill: "Coordination", mandate: "Responsiveness" },
  { skill: "Leadership", mandate: "Accountability" },
];

export function Platform() {
  return (
    <>
      <section className="pt-36 pb-16">
        <Container className="max-w-[680px]">
          <p className="text-xs font-medium uppercase tracking-wider text-accent">The Welfare Agenda</p>
          <h1 className="mt-3 font-display text-4xl text-ink md:text-5xl">
            A manifesto, not a slogan.
          </h1>
          <RevealOnScroll className="mt-8">
            <PullQuote>
              I've experienced the gaps myself — the confusion about who to
              ask, the wait for a reply that never quite comes. This agenda
              exists because I lived the problem before I decided to fix it.
            </PullQuote>
          </RevealOnScroll>
        </Container>
      </section>

      {platformPillars.map((pillar, i) => (
        <PillarSection key={pillar.key} pillar={pillar} reversed={i % 2 === 1} />
      ))}

      <section className="py-24">
        <Container>
          <RevealOnScroll className="max-w-xl">
            <p className="text-xs font-medium uppercase tracking-wider text-accent">Why Me</p>
            <h2 className="mt-3 font-display text-3xl text-ink md:text-4xl">
              What I've done maps directly to what the role needs.
            </h2>
          </RevealOnScroll>

          <RevealStagger className="mt-14 grid gap-0 divide-y divide-line md:grid-cols-3 md:divide-x md:divide-y-0">
            {MANDATE_MAP.map(({ skill, mandate }) => (
              <RevealItem key={skill} className="px-0 py-8 text-center md:px-8">
                <p className="font-display text-2xl text-ink">{skill}</p>
                <p className="mt-2 text-xs uppercase tracking-wider text-ink/40">becomes</p>
                <p className="mt-2 font-display text-2xl text-accent">{mandate}</p>
              </RevealItem>
            ))}
          </RevealStagger>

          <RevealOnScroll className="mt-14 text-center">
            <Link
              to="/pledge-wall"
              className="inline-flex min-h-11 items-center rounded-full bg-accent px-8 py-3.5 text-sm font-medium text-paper transition-colors hover:bg-ink"
            >
              Take the Pledge
            </Link>
          </RevealOnScroll>
        </Container>
      </section>
    </>
  );
}
