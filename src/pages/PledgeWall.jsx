import { useEffect, useState } from "react";
import { Container } from "../components/shared/Container";
import { RevealOnScroll } from "../components/shared/RevealOnScroll";
import { Quiz } from "../components/pledgewall/Quiz";
import { PledgeForm } from "../components/pledgewall/PledgeForm";
import { PledgeWallMarquee } from "../components/pledgewall/PledgeWallMarquee";
import { getPledges, getPledgeCount } from "../utils/pledges";

export function PledgeWall() {
  const [pledges, setPledges] = useState([]);
  const [count, setCount] = useState(0);

  const refresh = () => {
    setPledges(getPledges());
    setCount(getPledgeCount());
  };

  useEffect(() => {
    refresh();
  }, []);

  return (
    <>
      <section className="pt-36 pb-20">
        <Container className="max-w-2xl text-center">
          <p className="text-xs font-medium uppercase tracking-wider text-accent">What Kind of Student Are You?</p>
          <h1 className="mt-3 font-display text-4xl text-ink md:text-5xl">Take the Pledge.</h1>
          <p className="mt-4 text-ink/70">
            Answer five quick questions to find your pillar, then add your
            name to the wall.
          </p>
        </Container>

        <Container className="mt-14">
          <Quiz />
        </Container>
      </section>

      <section className="border-t border-line bg-ink py-20 text-paper">
        <Container className="max-w-xl text-center">
          <RevealOnScroll>
            <p className="text-xs font-medium uppercase tracking-wider text-accent-soft">The Pledge Wall</p>
            <h2 className="mt-3 font-display text-3xl md:text-4xl">
              {count.toLocaleString("en-US")} students and counting
            </h2>
          </RevealOnScroll>

          <RevealOnScroll delay={100} className="mt-10 border border-line bg-paper p-6 text-left md:p-8">
            <PledgeForm onAdded={refresh} />
          </RevealOnScroll>
        </Container>

        <div className="mt-16">
          <PledgeWallMarquee pledges={pledges} />
        </div>
      </section>
    </>
  );
}
