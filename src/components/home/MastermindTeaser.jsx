import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Container } from "../shared/Container";
import { RevealOnScroll } from "../shared/RevealOnScroll";
import { PullQuote } from "../shared/PullQuote";

export function MastermindTeaser() {
  return (
    <section className="bg-ink py-28 text-paper">
      <Container className="max-w-3xl">
        <RevealOnScroll>
          <PullQuote size="lg" border="accent-soft" light>
            No one should have to figure everything out alone.
          </PullQuote>
        </RevealOnScroll>
        <RevealOnScroll delay={100} className="mt-8">
          <Link to="/mastermind" className="group inline-flex items-center gap-2 text-sm font-medium text-paper">
            <span className="border-b border-transparent pb-0.5 transition-colors duration-400 group-hover:border-accent-soft">
              Discover The Mastermind Network
            </span>
            <ArrowRight size={16} className="transition-transform duration-400 group-hover:translate-x-1" />
          </Link>
        </RevealOnScroll>
      </Container>
    </section>
  );
}
