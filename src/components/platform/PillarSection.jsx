import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import clsx from "clsx";
import { Container } from "../shared/Container";
import { RevealOnScroll } from "../shared/RevealOnScroll";
import { useReducedMotion } from "../../hooks/useReducedMotion";

export function PillarSection({ pillar, reversed }) {
  const ref = useRef(null);
  const reducedMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const numeralY = useTransform(scrollYProgress, [0, 1], reducedMotion ? [0, 0] : ["-4%", "10%"]);

  return (
    <section ref={ref} className="relative overflow-hidden border-t border-line py-20 md:py-28">
      <motion.p
        aria-hidden="true"
        style={{ y: numeralY }}
        className={clsx(
          "pointer-events-none absolute -top-10 select-none font-display text-[30vw] font-semibold leading-none text-ink/[0.04] md:text-[22vw]",
          reversed ? "-right-6" : "-left-6"
        )}
      >
        {pillar.number}
      </motion.p>

      <Container
        className={clsx(
          "relative grid items-center gap-10 lg:grid-cols-2 lg:gap-16",
          reversed && "lg:[&>*:first-child]:order-2"
        )}
      >
        <RevealOnScroll y={32} className="overflow-hidden">
          <img
            src={pillar.image}
            alt={pillar.alt}
            className="aspect-[4/3] w-full object-cover transition-transform duration-[400ms] ease-out hover:scale-[1.04]"
          />
          <p className="mt-3 text-sm italic text-ink/50">{pillar.imageNote}</p>
        </RevealOnScroll>

        <RevealOnScroll y={32} delay={100}>
          <span className="font-display text-sm text-accent-soft">{pillar.number}</span>
          <h2 className="mt-2 font-display text-3xl text-ink md:text-4xl">{pillar.title}</h2>
          <p className="mt-2 text-lg text-ink/70">{pillar.line}</p>
          <p className="mt-4 max-w-md text-ink/70">{pillar.detail}</p>
        </RevealOnScroll>
      </Container>
    </section>
  );
}
