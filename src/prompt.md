# BUILD SPEC — "Vote Ofuowoicho" Campaign Website

**For: AI Coding Assistant (React + Vite + Tailwind CSS)**
**Candidate:** Ofuowoicho Jerome Joseph — running for **NAMMES Welfare Secretary** (Materials & Metallurgical Engineering, UNILAG)

---

## 0. PROJECT BRIEF (read this first)

Build a premium, editorial-feeling campaign website — not a generic "Bootstrap-with-a-button" site. Think: a mix of a personal portfolio, a political campaign microsite, and a magazine feature. Confident whitespace, restrained color, purposeful motion. **No decorative gradients, no icon soup, no filler noise** — every visual element must earn its place.

**Tagline to use throughout:** _"There is no reward for suffering — let me hold your hands."_
**Campaign line (secondary):** _"Welfare, taken seriously."_

---

## 1. TECH STACK & PACKAGES

```
npm create vite@latest . -- --template react
Tailwind css has been installed and configured
npm install framer-motion react-router-dom lucide-react clsx
npm install @studio-freight/lenis        # smooth scroll
npm install react-intersection-observer  # scroll-triggered reveals
npm install canvas-confetti              # micro-celebration moments
```

- **Framer Motion** — all animation (page transitions, reveals, hover, drag)
- **Lenis** — smooth inertial scrolling on desktop
- **react-router-dom** — multi-page routing
- **lucide-react** — the ONLY icon set, used sparingly (nav, socials, form states)
- **Unsplash API** — for supplementary/background imagery only (never for the candidate himself — all his personal/achievement photos are user-supplied and go in `/src/assets/`). Use `https://api.unsplash.com/photos/random?query=...&client_id=VITE_UNSPLASH_KEY`, cache results, always include a subtle photographer credit per Unsplash API guidelines.

---

## 2. DESIGN SYSTEM

**Color palette** (define as Tailwind theme extension, use CSS variables so it's swappable):

- `--ink` `#14171A` — near-black, primary text
- `--paper` `#FAF8F4` — warm off-white background (not pure white — feels premium)
- `--accent` `#8B2E2E` — deep oxblood/burgundy (metallurgy nod: think molten metal, iron oxide) — used ONLY for CTAs, active states, key numerals
- `--accent-soft` `#C9A15A` — muted brass/gold, used sparingly for underlines, dividers, hover accents
- `--line` `#DDD8CE` — hairline borders/dividers

No purple-blue SaaS gradients. No neon. This should feel like a serious, credible, warm human campaign — earth tones and metal tones (a subtle metallurgy motif: brass, iron, ink) tie back to his engineering discipline without being on-the-nose.

**Typography:**

- Display/headings: a serif with character (e.g. "Fraunces" or "Playfair Display") — gives gravitas
- Body/UI: a clean grotesk (e.g. "Inter" or "General Sans")
- Big numerals (stats like "4,000+ interactions") set in the serif, extra large, tabular-nums

**Motion principles (apply everywhere):**

- Reveal-on-scroll: elements fade up 24px + opacity 0→1, staggered by 80ms per child, triggered once via `react-intersection-observer`
- Hover on cards/links: no bouncy scale gimmicks — instead a slow (400ms ease) underline draw, subtle image zoom (scale 1→1.04), or accent-color bleed from one edge
- Page transitions: 300ms crossfade + 12px vertical slide via Framer Motion `AnimatePresence`
- Respect `prefers-reduced-motion` — disable non-essential motion for users who request it
- Custom cursor is optional/nice-to-have on desktop only (a small ring that grows over clickable elements) — skip on touch devices

**Layout:**

- Max content width 1200px, generous side padding (24px mobile, 64px+ desktop)
- 12-col grid on desktop, single column on mobile
- Breakpoints: mobile <640px, tablet 640–1024px, desktop >1024px — test every section at all three

---

## 3. SITE MAP

```
/                    Home (landing)
/about               The Story (bio, journey, Mastermind Network)
/platform            The Welfare Agenda (manifesto / what he'll do)
/achievements        Recognition & Work (awards, gallery, timeline)
/mastermind          The Mastermind Network (his community project — own page, it's a movement not a footnote)
/pledge-wall         Interactive: "What Kind of Student Are You?" quiz + live Pledge Wall (the engagement/game page)
/contact             Get Involved / Contact / Share
```

Persistent **Nav bar** (sticky, blurs background on scroll) with logo-mark (his initials "OJJ" in a simple wordmark, no clipart logo), links to all pages, and a persistent accent CTA button: **"Take the Pledge"** → routes to `/pledge-wall`.

**Footer** on every page: short tagline, quick links, social/contact, "Paid for by supporters of Ofuowoicho Jerome Joseph" campaign disclosure line, small print.

---

## 4. PAGE-BY-PAGE BREAKDOWN

### 4.1 `/` — HOME

**Section A — Hero**

- Full viewport height. Left: large serif headline "Welfare, taken seriously." with animated text reveal (words fade/slide in sequentially). Sub-line: shortened intro (see §6 Copy Bank). Two CTAs: primary "Take the Pledge" (accent fill), secondary "Read the Agenda" (outline).
- Right: his portrait (large, editorial crop, duotone-treated in ink/paper tones on load, animates to full color on scroll or after 1s — a nice reveal moment).
- Subtle background: faint large "NAMMES" or "OJJ" wordmark in ultra-light tone behind the portrait for depth, not noise.
- Scroll-cue arrow, gently bobbing (respect reduced-motion).

**Section B — Stat Strip**

- Horizontal band, accent-dark background, paper text. 4 big numerals counting up on scroll-into-view (use a simple custom `useCountUp` hook): `4,000+` interactions handled, `63%` YoY growth contributed, `3+ yrs` operations leadership, `2` Customer Service Awards. Numerals in serif, tabular, huge; labels small caps underneath.

**Section C — Who He Is (teaser)**

- Two-column: short paragraph (3-4 sentences, warm, human) + a photo (hospitality/work photo). "Read his full story →" link to `/about`.

**Section D — The Agenda (teaser)**

- Card grid (3–4 cards): Accessibility, Responsiveness, Transparency, Practical Support — each a short line, hover reveals a one-line elaboration (accordion-style height animation, not a modal). Link through to `/platform`.

**Section E — Achievements strip**

- Horizontally scrollable (drag-to-scroll, `overflow-x-auto` + Framer Motion `drag`) row of achievement photo cards (Customer Service Award 2024/2025, Weightless — 2nd place 234 Art Fair, Classence, Energy Club). Each card: image, title, one-line caption. Links to `/achievements`.

**Section F — Mastermind Network teaser**

- Full-width dark section, pull-quote style: his line about "no one should have to figure everything out alone." CTA "Discover The Mastermind Network →" to `/mastermind`.

**Section G — Pledge Wall teaser / CTA**

- Bright, high-contrast closing section. "Are you in?" — CTA into the interactive `/pledge-wall` page. Show a small live-updating counter of pledges made so far (state can be local/mocked or wired to a simple backend/localStorage — see §5).

**Section H — Footer** (as above).

---

### 4.2 `/about` — THE STORY

- Editorial long-form layout, narrow reading column (max ~680px) for text sections, breaking out to full-width for images.
- Chronological/thematic flow: Engineering student at UNILAG → hospitality leadership years (with the 4,000 interactions / 63% growth stats repeated as inline pull-numbers, not just the home strip) → Classence (Business Lead) → UNILAG Energy Club (Financial Analyst, volunteer) → Ceint Jerome (Creative Director) → Raw Materials Diplomacy research.
- Use a **vertical timeline** component on the left (sticky) with year/role markers that highlight as user scrolls past each section on the right (scrollspy pattern via IntersectionObserver).
- Pull-quote styling for his own words (from the "core belief" line) — large serif italic, accent-colored left border.
- Photo placements: one photo per major chapter (hospitality role, Classence, Energy Club, Ceint Jerome, research team). Each image: subtle parallax (moves slower than scroll, ~0.85x) for depth.
- End of page CTA: "This is why I'm running →" into `/platform`.

---

### 4.3 `/platform` — THE WELFARE AGENDA

- This is the manifesto page — needs to feel substantive, not just slogans.
- Hero: short intro paragraph on why welfare, framed by his own quote about experiencing the gaps himself.
- **Four pillar sections** (Accessibility, Responsiveness, Transparency, Practical Support) — each gets its own full-width block alternating image-left/text-right and image-right/text-left, with a large pillar number (01–04) in the background typography, and a 2-3 sentence explanation of concretely what it means for students.
- Each pillar reveals with a slide-and-fade as it enters viewport; the big background numeral has a slow parallax drift.
- Closing section: "Why me" — condensed skills-to-mandate mapping (Service → empathy, Coordination → responsiveness, Leadership → accountability), presented as a simple 3-item horizontal list with connecting hairline, not icons.
- CTA into `/pledge-wall`.

---

### 4.4 `/achievements` — RECOGNITION & WORK

- Masonry/grid gallery (CSS grid with varied row spans) of all achievement images: Customer Service Award 2024, Customer Service Award 2025, Customer Service Week 2024 recognition, Weightless collection (234 Art Fair, 2nd place), Classence role, Energy Club, Ceint Jerome creative work, Raw Materials Diplomacy research team photo.
- Click any tile → lightbox modal (Framer Motion `layoutId` shared-element transition so the image morphs smoothly from grid position to full-screen) with caption/context.
- Filter chips at top (All / Awards / Creative / Leadership / Research) — filtering animates grid reflow (Framer Motion `layout` prop handles this beautifully).
- Keep captions factual and short — let the images and short labels carry it, avoid over-writing.

---

### 4.5 `/mastermind` — THE MASTERMIND NETWORK

- Standalone identity for this initiative — different visual rhythm (slightly more "movement/manifesto" feeling: bigger type, more white space).
- Origin story block: the "I was one of those students" narrative, given real room to breathe (large pull-quote treatment).
- "What it is" — 3 short belief statements laid out as a simple animated stacked-card reveal (cards slide up one after another as user scrolls, each pinned briefly — a simple scroll-driven `position: sticky` stack, not a heavy scrollytelling library).
- Optional: an "Join the Network" mailing-list-style form (visual only unless you want to wire it to a real service like Formspree/Google Form embed — flag this to the user, don't fabricate a backend silently).

---

### 4.6 `/pledge-wall` — THE ENGAGEMENT PAGE (the "game")

This is the shareable, high-virality page — the thing students forward to each other. Two connected experiences on one page:

**Part 1 — "What Kind of Student Are You?" Quiz**

- 5 quick tap-to-answer questions (single choice, big touch-friendly buttons, one question visible at a time with progress bar at top). Example question themes: how they handle deadlines, whether they know where to find help on campus, how they'd want welfare issues communicated, etc.
- Animated transition between questions (slide left, Framer Motion).
- Result screen maps to one of the 4 pillars (Accessibility / Responsiveness / Transparency / Practical Support) as their "student type" — e.g. "You're an **Access-Seeker**" — with a short, warm 2-sentence description of what that means and which campaign pillar speaks most to them.
- Confetti burst (`canvas-confetti`, brand colors only — accent + brass, not rainbow) on reveal.
- Result card is shareable: "Download/Share your result" — generate a simple styled card (can be done by rendering the result in a fixed-size div and using `html-to-image` or similar to export as PNG) with his name/campaign branding, meant for students to post to WhatsApp/Instagram stories.

**Part 2 — Live Pledge Wall**

- Below the quiz: a form — name + optional short message ("Why does welfare matter to you?") — submitting adds their name to a scrolling animated wall of supporter names/messages (masonry of small cards, gently auto-scrolling marquee, pausing on hover).
- Store pledges in `localStorage` for a front-end-only build (be upfront with the user that this won't persist across devices/browsers — if they want a real shared wall, they need a lightweight backend like Supabase or Firebase, which should be flagged as a follow-up, not silently faked).
- Pledge counter ("214 students and counting") ticks up with each new submission.

---

### 4.7 `/contact` — GET INVOLVED

- Simple, clean. Contact form (name, email/WhatsApp, message) — visual + client-side validation; wire to Formspree or mailto as a placeholder, flag to the user that a real submission backend needs to be chosen.
- Social links (Instagram, LinkedIn, WhatsApp) — lucide icons, minimal.
- Campaign disclosure/footer info repeated.
- Optional: downloadable campaign poster/flyer (PDF) for students to print/share.

---

## 5. INTERACTIVITY / STATE NOTES

- No real backend is assumed by default — quiz results and pledge wall use component state + `localStorage` so the build works immediately.
- Clearly comment in code anywhere a "real" backend (form submissions, persistent shared pledge wall) would be needed for production, and note this to the user rather than silently mocking it as if live.
- All animations must degrade gracefully — nothing should be broken or invisible if JS/motion is disabled or reduced-motion is set.

---

## 6. COPY BANK (shortened bio — use across pages, don't dump the full original text anywhere)

Use this trimmed version as the base copy, adapting tone per section rather than reusing verbatim everywhere:

> Ofuowoicho Jerome Joseph is an engineer, researcher, designer and entrepreneur studying Metallurgical and Materials Engineering at the University of Lagos. He connects technical thinking, creative expression and strategic leadership — building at the intersection of engineering, governance, entrepreneurship, fashion and community.
>
> Over three years in high-performance hospitality operations, he managed customer engagement across four residential properties, two spas, a gym and a restaurant — handling 4,000+ interactions and contributing to a 63% year-on-year increase in engagement. He's twice won his organization's Customer Service Award (2024, 2025) and was recognized during Customer Service Week 2024.
>
> He's Business Lead at Classence, a volunteer Financial Analyst with the UNILAG Energy Club, and Creative Director of Ceint Jerome, where his debut collection "Weightless" placed 2nd at the 234 Art Fair. His recent research explored Raw Materials Diplomacy — how nations use strategic mineral resources to shape industrial and economic power.
>
> He founded The Mastermind Network to give students the guidance and community he once lacked — and he's running for NAMMES Welfare Secretary for the same reason: **"There is no reward for suffering — let me hold your hands and ease the burden of being a student."**

---

## 7. RESPONSIVE & ACCESSIBILITY CHECKLIST

- Test all sticky/scrollspy/parallax effects at mobile widths — disable parallax and drag-scroll interactions on touch if they hurt usability; simplify to plain stacked layouts.
- Tap targets ≥44px on mobile.
- Color contrast: verify accent-on-paper and paper-on-ink combos meet WCAG AA.
- All images have descriptive `alt` text (use real descriptions of the achievement/context, not filenames).
- Quiz and pledge form fully keyboard-navigable; focus states visible (accent outline, not default browser blue).
- `prefers-reduced-motion` media query disables parallax, autoplay marquee, and confetti (replace confetti with a simple static success state).

---

## 8. FOLDER STRUCTURE (suggested)

```
src/
  assets/            # candidate's own photos (achievements, portraits)
  components/
    layout/          # Navbar, Footer, PageTransition
    home/            # Hero, StatStrip, AgendaTeaser, AchievementsStrip, MastermindTeaser
    shared/          # RevealOnScroll, CountUp, PullQuote, Timeline, Lightbox
    pledgewall/       # Quiz, PledgeForm, PledgeWallMarquee, ResultCard
  pages/             # Home, About, Platform, Achievements, Mastermind, PledgeWall, Contact
  hooks/             # useCountUp, useLenis, useReducedMotion
  data/              # quizQuestions.js, achievements.js, timeline.js
  styles/            # tailwind.css, fonts
```

---

## 9. WHAT TO DO WITH THE USER'S ACTUAL IMAGES

The user has real photos for: Customer Service Award 2024 & 2025, Customer Service Week 2024, Weightless/234 Art Fair collection, Classence role, UNILAG Energy Club, Ceint Jerome creative work, Raw Materials Diplomacy research team, and personal/portrait shots. Build the components to accept these as named imports from `src/assets/` with clear placeholder filenames (e.g. `award-2024.jpg`, `weightless-collection.jpg`) so the user can drop their real files in directly without restructuring code. Do not fabricate stock photos to represent him or his specific achievements — Unsplash is for incidental background/texture imagery only (e.g. an abstract metal-texture background on the hero, if wanted).

---
