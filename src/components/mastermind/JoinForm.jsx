import { useState } from "react";
import { MessageCircle } from "lucide-react";
import { Container } from "../shared/Container";
import { RevealOnScroll } from "../shared/RevealOnScroll";

const WHATSAPP_GROUP_URL = "https://chat.whatsapp.com/H6ltkV2tvof0y2WV0s8aT1?mode=gi_t";

// NOTE FOR PRODUCTION: the email capture below is visual-only — submitting
// does not send the email anywhere. To actually collect sign-ups, wire the
// <form> to a real service (Formspree endpoint, Google Form embed, or a
// lightweight backend). Flagging rather than silently pretending this is
// live. The WhatsApp button above it is a real, working invite link.
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
            The fastest way in is the WhatsApp group — join now and start
            connecting with other members straight away.
          </p>

          <a
            href={WHATSAPP_GROUP_URL}
            target="_blank"
            rel="noreferrer"
            className="mt-8 inline-flex min-h-11 items-center gap-2 rounded-full bg-accent px-8 text-sm font-medium text-paper transition-colors hover:bg-ink"
          >
            <MessageCircle size={18} />
            Join the Mastermind WhatsApp Group
          </a>
        </RevealOnScroll>

        <RevealOnScroll delay={100} className="mt-14 border-t border-line pt-10">
          <p className="text-sm text-ink/60">Prefer email updates instead?</p>

          {submitted ? (
            <p className="mt-6 font-display text-lg text-accent">
              You're on the list. Thank you for being early.
            </p>
          ) : (
            <form onSubmit={handleSubmit} className="mt-4 flex flex-col gap-3 sm:flex-row sm:justify-center">
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
                className="min-h-11 rounded-full border border-line px-6 text-sm font-medium text-ink transition-colors hover:border-accent-soft"
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
