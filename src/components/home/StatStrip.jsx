import { Container } from "../shared/Container";
import { RevealStagger, RevealItem } from "../shared/RevealOnScroll";
import { CountUp } from "../shared/CountUp";

const STATS = [
  { target: 4000, suffix: "+", label: "Interactions handled" },
  { target: 63, suffix: "%", label: "YoY growth contributed" },
  { target: 3, suffix: "+ yrs", label: "Operations leadership" },
  { target: 2, suffix: "", label: "Customer Service Awards" },
];

export function StatStrip() {
  return (
    <section className="bg-ink py-16 text-paper">
      <Container>
        <RevealStagger className="grid grid-cols-2 gap-8 md:grid-cols-4 md:gap-6">
          {STATS.map((stat) => (
            <RevealItem key={stat.label} className="text-center md:text-left">
              <p className="font-display font-tabular text-4xl font-semibold text-accent-soft sm:text-5xl">
                <CountUp target={stat.target} suffix={stat.suffix} />
              </p>
              <p className="mt-2 text-xs uppercase tracking-wider text-paper/60">{stat.label}</p>
            </RevealItem>
          ))}
        </RevealStagger>
      </Container>
    </section>
  );
}
