import { useState } from "react";
import { Container } from "../shared/Container";
import { RevealOnScroll } from "../shared/RevealOnScroll";

// NOTE FOR PRODUCTION: this form is visual-only — submitting does not send
// the email anywhere. To actually collect sign-ups, wire the <form> below to
// a real service (Formspree endpoint, Google Form embed, or a lightweight
// backend). Flagging rather than silently pretending this is live.
export function JoinForm() {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!/^\S+@\S+\.\S+$/.test(email)) {
      setError("Enter a valid email address.");
      return;
    }
    setError("");
    setSubmitted(true);
  };

  return (
    <section className="border-t border-line py-24">
      <Container className="max-w-xl text-center">
        <RevealOnScroll>
          <p className="text-xs font-medium uppercase tracking-wider text-accent">Join the Network</p>
          <h2 className="mt-3 font-display text-3xl text-ink md:text-4xl">
            Be there when it launches.
          </h2>
          <p className="mt-4 text-ink/70">
            Leave your email and you'll be the first to know when The
            Mastermind Network opens for members.
          </p>

          {submitted ? (
            <p className="mt-8 font-display text-lg text-accent">
              You're on the list. Thank you for being early.
            </p>
          ) : (
            <form onSubmit={handleSubmit} className="mt-8 flex flex-col gap-3 sm:flex-row sm:justify-center">
              <label htmlFor="join-email" className="sr-only">
                Email address
              </label>
              <input
                id="join-email"
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@example.com"
                className="min-h-11 flex-1 border border-line bg-paper px-4 text-ink placeholder:text-ink/40 focus:border-accent"
              />
              <button
                type="submit"
                className="min-h-11 rounded-full bg-accent px-6 text-sm font-medium text-paper transition-colors hover:bg-ink"
              >
                Notify Me
              </button>
            </form>
          )}
          {error && <p className="mt-3 text-sm text-accent">{error}</p>}
        </RevealOnScroll>
      </Container>
    </section>
  );
}
