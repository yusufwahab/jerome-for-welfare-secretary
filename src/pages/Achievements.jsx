import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import clsx from "clsx";
import { Container } from "../components/shared/Container";
import { RevealOnScroll } from "../components/shared/RevealOnScroll";
import { Lightbox } from "../components/shared/Lightbox";
import { CATEGORIES, achievements } from "../data/achievements";

const SPAN_CLASSES = {
  tall: "row-span-2",
  wide: "col-span-2",
  short: "row-span-1",
};

export function Achievements() {
  const [filter, setFilter] = useState("All");
  const [selected, setSelected] = useState(null);

  const filtered =
    filter === "All" ? achievements : achievements.filter((a) => a.category === filter);

  return (
    <>
      <section className="pt-36 pb-10">
        <Container className="max-w-[680px]">
          <p className="text-xs font-medium uppercase tracking-wider text-accent">Recognition & Work</p>
          <h1 className="mt-3 font-display text-4xl text-ink md:text-5xl">
            The record, in full.
          </h1>
        </Container>
      </section>

      <section className="pb-28">
        <Container>
          <RevealOnScroll className="mb-10 flex flex-wrap gap-3">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={clsx(
                  "min-h-11 rounded-full border px-5 text-sm font-medium transition-colors duration-300",
                  filter === cat
                    ? "border-accent bg-accent text-paper"
                    : "border-line text-ink/70 hover:border-accent-soft"
                )}
              >
                {cat}
              </button>
            ))}
          </RevealOnScroll>

          <motion.div
            layout
            className="grid auto-rows-[160px] grid-cols-2 gap-4 sm:auto-rows-[200px] md:grid-cols-4 md:auto-rows-[220px]"
          >
            <AnimatePresence>
              {filtered.map((item) => (
                <motion.button
                  layout
                  layoutId={`achievement-${item.id}`}
                  key={item.id}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.4 }}
                  onClick={() => setSelected(item)}
                  className={clsx(
                    "group relative overflow-hidden text-left",
                    SPAN_CLASSES[item.span]
                  )}
                >
                  <img
                    src={item.image}
                    alt={item.alt}
                    className="h-full w-full object-cover transition-transform duration-[400ms] ease-out group-hover:scale-[1.04]"
                  />
                  <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-ink/80 via-ink/0 to-transparent p-4 pt-10">
                    <p className="text-xs font-medium uppercase tracking-wider text-accent-soft">
                      {item.category}
                    </p>
                    <p className="font-display text-sm text-paper md:text-base">{item.title}</p>
                  </div>
                </motion.button>
              ))}
            </AnimatePresence>
          </motion.div>
        </Container>
      </section>

      <AnimatePresence>
        {selected && <Lightbox item={selected} onClose={() => setSelected(null)} />}
      </AnimatePresence>
    </>
  );
}
