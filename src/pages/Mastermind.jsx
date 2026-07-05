import { Container } from "../components/shared/Container";
import { RevealOnScroll } from "../components/shared/RevealOnScroll";
import { PullQuote } from "../components/shared/PullQuote";
import { StackedBeliefs } from "../components/mastermind/StackedBeliefs";
import { JoinForm } from "../components/mastermind/JoinForm";

export function Mastermind() {
  return (
    <>
      <section className="pt-40 pb-24">
        <Container className="max-w-3xl">
          <RevealOnScroll>
            <p className="text-xs font-medium uppercase tracking-wider text-accent">A Movement, Not a Footnote</p>
            <h1 className="mt-4 font-display text-5xl leading-[1.05] text-ink md:text-7xl">
              The Mastermind Network
            </h1>
          </RevealOnScroll>

          <RevealOnScroll delay={150} className="mt-12">
            <PullQuote size="lg">
              I was one of those students who had to figure everything out
              alone — the hard way, the slow way, over and over again.
            </PullQuote>
          </RevealOnScroll>

          <RevealOnScroll delay={250}>
            <p className="mt-8 max-w-xl text-lg text-ink/70">
              So he built the community he once needed: a space where
              students trade the guidance that usually only travels by luck —
              who to ask, where the help actually lives, how to get unstuck
              without burning a year finding out the hard way.
            </p>
          </RevealOnScroll>
        </Container>
      </section>

      <section className="pb-24">
        <Container className="max-w-xl">
          <RevealOnScroll>
            <p className="text-xs font-medium uppercase tracking-wider text-accent">What It Is</p>
          </RevealOnScroll>
        </Container>
        <StackedBeliefs />
      </section>

      <JoinForm />
    </>
  );
}
