import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";
import { Container } from "../shared/Container";
import { useReducedMotion } from "../../hooks/useReducedMotion";
import portrait from "../../assets/portrait.jpg";

const HEADLINE_WORDS = ["Welfare,", "taken", "seriously."];

export function Hero() {
  const reducedMotion = useReducedMotion();
  const [revealed, setRevealed] = useState(reducedMotion);

  useEffect(() => {
    if (reducedMotion) return;
    const t = setTimeout(() => setRevealed(true), 1000);
    return () => clearTimeout(t);
  }, [reducedMotion]);

  return (
    <section className="relative flex min-h-screen items-center overflow-hidden pt-28 pb-16">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-10 top-1/2 -translate-y-1/2 select-none font-display text-[28vw] font-semibold leading-none text-ink/[0.04] xl:text-[22vw]"
      >
        OJJ
      </div>

      <Container className="relative grid items-center gap-12 lg:grid-cols-2 lg:gap-8">
        <div>
          <h1 className="font-display text-4xl font-semibold leading-[1.05] text-ink sm:text-5xl md:text-6xl">
            {HEADLINE_WORDS.map((word, i) => (
              <motion.span
                key={word}
                className="mr-3 inline-block"
                initial={reducedMotion ? false : { opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: i * 0.12, ease: [0.22, 1, 0.36, 1] }}
              >
                {word}
              </motion.span>
            ))}
          </h1>

          <motion.p
            className="mt-6 max-w-lg text-lg text-ink/70"
            initial={reducedMotion ? false : { opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
          >
            Ofuowoicho Jerome Joseph is running for NAMMES Welfare Secretary —
            bringing three years of hospitality leadership and a founder's eye
            for community to the job of looking out for students.
          </motion.p>

          <motion.div
            className="mt-8 flex flex-wrap items-center gap-4"
            initial={reducedMotion ? false : { opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.65, ease: [0.22, 1, 0.36, 1] }}
          >
            <Link
              to="/pledge-wall"
              className="inline-flex min-h-11 items-center rounded-full bg-accent px-6 py-3 text-sm font-medium text-paper transition-colors hover:bg-ink"
            >
              Take the Pledge
            </Link>
            <Link
              to="/platform"
              className="inline-flex min-h-11 items-center rounded-full border border-ink/30 px-6 py-3 text-sm font-medium text-ink transition-colors hover:border-ink"
            >
              Read the Agenda
            </Link>
          </motion.div>
        </div>

        <motion.div
          className="relative mx-auto aspect-[4/5] w-full max-w-sm overflow-hidden lg:max-w-none"
          initial={reducedMotion ? false : { opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
        >
          <img
            src={portrait}
            alt="Portrait of Ofuowoicho Jerome Joseph"
            className="h-full w-full object-cover transition-[filter] duration-[1200ms] ease-out"
            style={{ filter: revealed ? "grayscale(0) contrast(1)" : "grayscale(1) contrast(1.1) sepia(0.15)" }}
          />
        </motion.div>
      </Container>

      <div className="absolute inset-x-0 bottom-8 flex justify-center">
        <ArrowDown
          aria-hidden="true"
          size={22}
          className={reducedMotion ? "text-ink/40" : "animate-bob text-ink/40"}
        />
      </div>
    </section>
  );
}
