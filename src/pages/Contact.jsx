import { Camera, Briefcase, MessageCircle, FileDown } from "lucide-react";
import { Container } from "../components/shared/Container";
import { RevealOnScroll } from "../components/shared/RevealOnScroll";
import { ContactForm } from "../components/contact/ContactForm";

const CAMPAIGN_WHATSAPP_URL = "https://chat.whatsapp.com/FP09Vera8878fCpEttfw5b?mode=gi_t";

const SOCIALS = [
  {
    href: "https://www.instagram.com/thejeromejoseph?igsh=MXNwbG90dTlkaGtkeQ%3D%3D&utm_source=qr",
    label: "Instagram",
    Icon: Camera,
  },
  { href: "https://www.linkedin.com/in/thejeromejoseph", label: "LinkedIn", Icon: Briefcase },
  { href: CAMPAIGN_WHATSAPP_URL, label: "WhatsApp", Icon: MessageCircle },
];

export function Contact() {
  return (
    <section className="pt-36 pb-28">
      <Container className="grid gap-16 lg:grid-cols-2 lg:gap-24">
        <div>
          <RevealOnScroll>
            <p className="text-xs font-medium uppercase tracking-wider text-accent">Get Involved</p>
            <h1 className="mt-3 font-display text-4xl text-ink md:text-5xl">Let's talk.</h1>
            <p className="mt-4 max-w-md text-ink/70">
              Questions, ideas, or just want to help out with the campaign?
              Reach out directly.
            </p>
          </RevealOnScroll>

          <RevealOnScroll delay={50} className="mt-8">
            <a
              href={CAMPAIGN_WHATSAPP_URL}
              target="_blank"
              rel="noreferrer"
              className="inline-flex min-h-11 items-center gap-2 rounded-full bg-accent px-6 text-sm font-medium text-paper transition-colors hover:bg-ink"
            >
              <MessageCircle size={16} />
              Join the Campaign WhatsApp Group
            </a>
          </RevealOnScroll>

          <RevealOnScroll delay={100} className="mt-6 flex gap-4">
            {SOCIALS.map(({ href, label, Icon }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noreferrer"
                aria-label={label}
                className="grid h-11 w-11 place-items-center rounded-full border border-line text-ink/70 transition-colors hover:border-accent hover:text-accent"
              >
                <Icon size={18} />
              </a>
            ))}
          </RevealOnScroll>

          <RevealOnScroll delay={200} className="mt-10">
            <a
              href="/campaign-poster.pdf"
              download
              className="inline-flex min-h-11 items-center gap-2 rounded-full border border-line px-6 text-sm font-medium text-ink transition-colors hover:border-accent-soft"
            >
              <FileDown size={16} />
              Download Campaign Poster
            </a>
          </RevealOnScroll>

          <RevealOnScroll delay={300} className="mt-10 border-t border-line pt-6 text-xs text-ink/50">
            Paid for by supporters of Ofuowoicho Jerome Joseph — NAMMES Welfare
            Secretary campaign.
          </RevealOnScroll>
        </div>

        <RevealOnScroll delay={150}>
          <ContactForm />
        </RevealOnScroll>
      </Container>
    </section>
  );
}
