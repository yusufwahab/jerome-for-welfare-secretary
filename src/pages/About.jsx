import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Container } from "../components/shared/Container";
import { RevealOnScroll } from "../components/shared/RevealOnScroll";
import { PullQuote } from "../components/shared/PullQuote";
import { TimelineNav } from "../components/shared/Timeline";
import { ParallaxImage } from "../components/shared/ParallaxImage";
import { timeline } from "../data/timeline";

export function About() {
  const [activeId, setActiveId] = useState(timeline[0].id);
  const sectionRefs = useRef({});

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveId(entry.target.dataset.chapterId);
        });
      },
      { rootMargin: "-35% 0px -55% 0px", threshold: 0 }
    );

    Object.values(sectionRefs.current).forEach((el) => el && observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const scrollToChapter = (id) => {
    sectionRefs.current[id]?.scrollIntoView({ behavior: "smooth", block: "center" });
  };

  return (
    <>
      <section className="pt-36 pb-16">
        <Container className="max-w-[680px]">
          <p className="text-xs font-medium uppercase tracking-wider text-accent">The Story</p>
          <h1 className="mt-3 font-display text-4xl text-ink md:text-5xl">
            He didn't choose welfare from a distance.
          </h1>
          <p className="mt-5 text-lg text-ink/70">
            Jerome connects technical thinking, creative expression and
            strategic leadership — building at the intersection of
            engineering, governance, entrepreneurship, fashion and community.
            Here's how he got here.
          </p>
        </Container>
      </section>

      <section className="pb-28">
        <Container className="grid gap-12 lg:grid-cols-[220px_1fr] lg:gap-16">
          <aside className="hidden lg:block">
            <div className="sticky top-32">
              <TimelineNav items={timeline} activeId={activeId} onSelect={scrollToChapter} />
            </div>
          </aside>

          <div className="flex flex-col gap-24">
            {timeline.map((chapter) => (
              <article
                key={chapter.id}
                ref={(el) => {
                  sectionRefs.current[chapter.id] = el;
                }}
                data-chapter-id={chapter.id}
                className="scroll-mt-32"
              >
                <div className="max-w-[680px]">
                  <RevealOnScroll>
                    <p className="font-tabular text-xs uppercase tracking-wider text-accent lg:hidden">
                      {chapter.year}
                    </p>
                    <h2 className="mt-2 font-display text-2xl text-ink md:text-3xl">{chapter.role}</h2>
                    <p className="mt-4 text-ink/70">{chapter.body}</p>

                    {chapter.pullNumbers && (
                      <div className="mt-6 flex gap-10">
                        {chapter.pullNumbers.map((n) => (
                          <div key={n.label}>
                            <p className="font-display font-tabular text-3xl text-accent">{n.value}</p>
                            <p className="text-xs uppercase tracking-wider text-ink/50">{n.label}</p>
                          </div>
                        ))}
                      </div>
                    )}
                  </RevealOnScroll>
                </div>

                {chapter.image && (
                  <RevealOnScroll className="mt-8">
                    <ParallaxImage
                      src={chapter.image}
                      alt={chapter.alt}
                      className="aspect-[3/2] w-full"
                    />
                  </RevealOnScroll>
                )}
              </article>
            ))}

            <RevealOnScroll className="max-w-[680px]">
              <PullQuote size="lg">
                There is no reward for suffering — let me hold your hands.
              </PullQuote>
            </RevealOnScroll>

            <RevealOnScroll>
              <Link to="/platform" className="group inline-flex items-center gap-2 text-lg font-medium text-ink">
                <span className="font-display border-b border-transparent pb-0.5 transition-colors duration-400 group-hover:border-accent-soft">
                  This is why I'm running
                </span>
                <ArrowRight size={18} className="transition-transform duration-400 group-hover:translate-x-1" />
              </Link>
            </RevealOnScroll>
          </div>
        </Container>
      </section>
    </>
  );
}
