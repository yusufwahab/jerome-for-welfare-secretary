import { Link } from "react-router-dom";
import { Camera, Briefcase, MessageCircle } from "lucide-react";

// lucide-react dropped brand/social-logo icons (trademark reasons), so these
// are generic stand-ins — swap for real brand SVGs if desired.

const LINKS = [
  { to: "/about", label: "The Story" },
  { to: "/platform", label: "The Agenda" },
  { to: "/achievements", label: "Achievements" },
  { to: "/mastermind", label: "Mastermind Network" },
  { to: "/pledge-wall", label: "Pledge Wall" },
  { to: "/contact", label: "Contact" },
];

const SOCIALS = [
  {
    href: "https://www.instagram.com/thejeromejoseph?igsh=MXNwbG90dTlkaGtkeQ%3D%3D&utm_source=qr",
    label: "Instagram",
    Icon: Camera,
  },
  { href: "https://www.linkedin.com/in/thejeromejoseph", label: "LinkedIn", Icon: Briefcase },
  { href: "https://chat.whatsapp.com/FP09Vera8878fCpEttfw5b?mode=gi_t", label: "WhatsApp", Icon: MessageCircle },
];

export function Footer() {
  return (
    <footer className="border-t border-line bg-paper">
      <div className="mx-auto max-w-[1200px] px-6 py-16 md:px-16">
        <div className="grid gap-12 md:grid-cols-3">
          <div>
            <p className="font-display text-xl text-ink">OJJ</p>
            <p className="mt-3 max-w-xs text-sm text-ink/70">
              “There is no reward for suffering — let me hold your hands.”
            </p>
            <p className="mt-1 text-sm font-medium text-accent">Welfare, taken seriously.</p>
          </div>

          <div>
            <p className="text-xs font-medium uppercase tracking-wider text-ink/50">Quick Links</p>
            <ul className="mt-4 grid grid-cols-2 gap-x-4 gap-y-2">
              {LINKS.map((link) => (
                <li key={link.to}>
                  <Link to={link.to} className="text-sm text-ink/70 transition-colors hover:text-accent">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-xs font-medium uppercase tracking-wider text-ink/50">Connect</p>
            <div className="mt-4 flex gap-4">
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
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-2 border-t border-line pt-6 text-xs text-ink/50 md:flex-row md:items-center md:justify-between">
          <p>Paid for by supporters of Ofuowoicho Jerome Joseph — NAMMES Welfare Secretary campaign.</p>
          <p>&copy; {new Date().getFullYear()} Ofuowoicho Jerome Joseph. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
