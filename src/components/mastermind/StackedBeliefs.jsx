import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useReducedMotion } from "../../hooks/useReducedMotion";

const BELIEFS = [
  {
    number: "01",
    title: "No one should have to figure it all out alone.",
    body: "The information that actually matters — which course rep to trust, how to appeal a grade, where the real deadlines are — travels by word of mouth. If you don't know the right person, you're on your own.",
  },
  {
    number: "02",
    title: "Guidance shouldn't depend on luck.",
    body: "Some students stumble into a senior who looks out for them. Most don't. A network makes that guidance available on purpose, not by accident.",
  },
  {
    number: "03",
    title: "A community is stronger than any single mentor.",
    body: "One person can only hold so many hands. A room full of people who've agreed to hold each other's is how you actually change outcomes at scale.",
  },
];

export function StackedBeliefs() {
  return (
    <div className="relative">
      {BELIEFS.map((belief, i) => (
        <BeliefCard key={belief.number} belief={belief} index={i} />
      ))}
    </div>
  );
}

function BeliefCard({ belief, index }) {
  const ref = useRef(null);
  const reducedMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const scale = useTransform(scrollYProgress, [0, 1], reducedMotion ? [1, 1] : [1, 0.94]);
  const opacity = useTransform(scrollYProgress, [0, 0.8, 1], reducedMotion ? [1, 1, 1] : [1, 1, 0.6]);

  return (
    <div ref={ref} className="flex min-h-[80vh] items-start justify-center py-6 md:min-h-[70vh]">
      <motion.div
        style={{ scale, opacity, top: `${6 + index * 2.5}rem` }}
        className="sticky mx-auto w-full max-w-2xl border border-line bg-paper p-10 md:p-14"
      >
        <span className="font-display text-sm text-accent-soft">{belief.number}</span>
        <h3 className="mt-4 font-display text-2xl leading-snug text-ink md:text-3xl">
          {belief.title}
        </h3>
        <p className="mt-4 text-ink/70">{belief.body}</p>
      </motion.div>
    </div>
  );
}
