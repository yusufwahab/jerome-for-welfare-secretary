import { useRef } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Container } from "../shared/Container";
import { RevealOnScroll } from "../shared/RevealOnScroll";
import { achievements } from "../../data/achievements";
import { useReducedMotion } from "../../hooks/useReducedMotion";

const FEATURED_IDS = ["award-2024", "award-2025", "weightless-collection", "classence", "energy-club"];
const featured = achievements.filter((a) => FEATURED_IDS.includes(a.id));

export function AchievementsStrip() {
  const trackRef = useRef(null);
  const reducedMotion = useReducedMotion();

  return (
    <section className="py-24">
      <Container className="mb-8 flex items-end justify-between">
        <RevealOnScroll>
          <p className="text-xs font-medium uppercase tracking-wider text-accent">Recognition & Work</p>
          <h2 className="mt-3 font-display text-3xl text-ink md:text-4xl">Proof, not promises.</h2>
        </RevealOnScroll>
      </Container>

      <div className="overflow-hidden pl-6 md:pl-16">
        <motion.div
          ref={trackRef}
          className="no-scrollbar flex gap-5 overflow-x-auto pb-4 pr-6 md:pr-16"
          drag={reducedMotion ? false : "x"}
          dragConstraints={trackRef}
          dragElastic={0.1}
        >
          {featured.map((item) => (
            <Link
              to="/achievements"
              key={item.id}
              className="group w-64 shrink-0 select-none sm:w-72"
              draggable={false}
            >
              <div className="aspect-[3/4] overflow-hidden">
                <img
                  src={item.image}
                  alt={item.alt}
                  draggable={false}
                  className="h-full w-full object-cover transition-transform duration-[400ms] ease-out group-hover:scale-[1.04]"
                />
              </div>
              <p className="mt-3 font-display text-lg text-ink">{item.title}</p>
              <p className="text-sm text-ink/60">{item.caption}</p>
            </Link>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
