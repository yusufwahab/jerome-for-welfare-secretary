import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Container } from "../shared/Container";
import { RevealOnScroll } from "../shared/RevealOnScroll";
import hospitalityRole from "../../assets/hospitality-role.jpg";

export function WhoHeIs() {
  return (
    <section className="py-24">
      <Container className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
        <RevealOnScroll className="overflow-hidden">
          <img
            src={hospitalityRole}
            alt="Jerome in a reception/dining setting during his hospitality leadership role"
            className="aspect-[3/2] w-full object-cover transition-transform duration-[400ms] ease-out hover:scale-[1.04]"
          />
        </RevealOnScroll>

        <RevealOnScroll delay={100}>
          <p className="text-xs font-medium uppercase tracking-wider text-accent">Who he is</p>
          <h2 className="mt-3 font-display text-3xl text-ink md:text-4xl">
            An engineer who has actually done the work of serving people.
          </h2>
          <p className="mt-5 text-ink/70">
            Jerome studies Metallurgical and Materials Engineering at UNILAG, but
            he's spent three years in high-performance hospitality operations —
            handling 4,000+ customer interactions and helping drive a 63%
            year-on-year rise in engagement. He knows what it takes to actually
            show up for people, day after day, not just talk about it.
          </p>
          <Link
            to="/about"
            className="group mt-6 inline-flex items-center gap-2 text-sm font-medium text-ink"
          >
            <span className="border-b border-transparent pb-0.5 transition-colors duration-400 group-hover:border-accent-soft">
              Read his full story
            </span>
            <ArrowRight size={16} className="transition-transform duration-400 group-hover:translate-x-1" />
          </Link>
        </RevealOnScroll>
      </Container>
    </section>
  );
}
