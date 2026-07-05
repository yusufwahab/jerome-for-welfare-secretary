import { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Container } from "../shared/Container";
import { RevealStagger, RevealItem } from "../shared/RevealOnScroll";
import { pillars } from "../../data/pillars";

export function AgendaTeaser() {
  const [openKey, setOpenKey] = useState(null);

  return (
    <section className="py-24">
      <Container>
        <RevealItem className="max-w-xl">
          <p className="text-xs font-medium uppercase tracking-wider text-accent">The Agenda</p>
          <h2 className="mt-3 font-display text-3xl text-ink md:text-4xl">
            Four pillars, one job: take welfare seriously.
          </h2>
        </RevealItem>

        <RevealStagger className="mt-10 grid gap-4 sm:grid-cols-2">
          {pillars.map((pillar) => {
            const isOpen = openKey === pillar.key;
            return (
              <RevealItem key={pillar.key}>
                <button
                  type="button"
                  className="w-full border border-line p-6 text-left transition-colors duration-300 hover:border-accent-soft"
                  onMouseEnter={() => setOpenKey(pillar.key)}
                  onMouseLeave={() => setOpenKey((k) => (k === pillar.key ? null : k))}
                  onClick={() => setOpenKey((k) => (k === pillar.key ? null : pillar.key))}
                  aria-expanded={isOpen}
                >
                  <span className="font-display text-sm text-accent-soft">{pillar.number}</span>
                  <h3 className="mt-2 font-display text-xl text-ink">{pillar.title}</h3>
                  <p className="mt-1 text-sm text-ink/60">{pillar.line}</p>
                  <motion.div
                    initial={false}
                    animate={{ height: isOpen ? "auto" : 0, opacity: isOpen ? 1 : 0 }}
                    transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                    className="overflow-hidden"
                  >
                    <p className="mt-3 text-sm text-ink/70">{pillar.detail}</p>
                  </motion.div>
                </button>
              </RevealItem>
            );
          })}
        </RevealStagger>

        <RevealItem className="mt-8">
          <Link to="/platform" className="group inline-flex items-center gap-2 text-sm font-medium text-ink">
            <span className="border-b border-transparent pb-0.5 transition-colors duration-400 group-hover:border-accent-soft">
              Read the full agenda
            </span>
            <ArrowRight size={16} className="transition-transform duration-400 group-hover:translate-x-1" />
          </Link>
        </RevealItem>
      </Container>
    </section>
  );
}
