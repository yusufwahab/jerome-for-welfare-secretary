import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Container } from "../shared/Container";
import { RevealOnScroll } from "../shared/RevealOnScroll";
import { getPledgeCount } from "../../utils/pledges";

export function PledgeWallTeaser() {
  const [count, setCount] = useState(null);

  useEffect(() => {
    setCount(getPledgeCount());
  }, []);

  return (
    <section className="bg-accent-soft py-28 text-ink">
      <Container className="text-center">
        <RevealOnScroll>
          <h2 className="font-display text-4xl font-semibold md:text-5xl">Are you in?</h2>
          <p className="mx-auto mt-4 max-w-md text-ink/70">
            Take the two-minute quiz, find out what kind of student you are,
            and add your name to the wall.
          </p>
        </RevealOnScroll>

        <RevealOnScroll delay={100} className="mt-8">
          <Link
            to="/pledge-wall"
            className="inline-flex min-h-11 items-center rounded-full bg-ink px-8 py-3.5 text-sm font-medium text-paper transition-colors hover:bg-accent"
          >
            Take the Pledge
          </Link>
        </RevealOnScroll>

        <RevealOnScroll delay={200} className="mt-6">
          <p className="font-tabular text-sm text-ink/70">
            {count !== null ? `${count.toLocaleString("en-US")} students and counting` : " "}
          </p>
        </RevealOnScroll>
      </Container>
    </section>
  );
}
