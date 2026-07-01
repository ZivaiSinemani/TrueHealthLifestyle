# True Health Lifestyle — Landing Page

Production-ready consultation-booking landing page for True Health Lifestyle, built with Next.js 14 (App Router), TypeScript, Tailwind CSS, and Framer Motion.

## Stack

- **Next.js 14** (App Router, static export-friendly)
- **TypeScript**
- **Tailwind CSS** — custom design tokens in `tailwind.config.ts`
- **Framer Motion** — scroll reveals, accordion, booking confirmation transition
- **Calendly** — embedded inline widget with a `calendly.event_scheduled` listener that shows a confirmation state and auto-redirects to the educational page

## Getting started

```bash
npm install
npm run dev
```

Visit `http://localhost:3000`.

## Project structure

```
app/
  layout.tsx        Root layout, fonts, metadata
  page.tsx           Assembles all sections
  globals.css        Base styles, focus states, reduced-motion support
  icon.png            Favicon (generated from logo)
components/
  Header.tsx
  Hero.tsx
  Agenda.tsx          "What We'll Cover"
  WhoFor.tsx          "Who This Conversation Is Designed For"
  WhyBook.tsx          Curiosity narrative + quote cards
  FAQ.tsx              Accordion
  Booking.tsx           Calendly embed + confirmation/redirect flow
  StillThinking.tsx      Closing CTA
  Footer.tsx
  ui/                  Button, Container, Eyebrow, ConversationField (signature ambient motif)
lib/
  content.ts            All page copy in one place — edit here, not in components
```

## Editing content

Every headline, body line, FAQ answer, and CTA lives in `lib/content.ts`. You should never need to touch a component file to change copy.

## Editing the booking flow

`components/Booking.tsx` controls what happens after someone books:

- `REDIRECT_DELAY_MS` — how long the confirmation state shows before auto-redirecting (currently 4 seconds).
- `site.educationalUrl` in `lib/content.ts` — the page visitors land on after booking (currently `https://zivaisinemani.webinarlive.cc/thl1`).
- `site.calendlyUrl` in `lib/content.ts` — the Calendly event link.

If Calendly's `event_scheduled` postMessage doesn't fire for some reason, the visitor can still click "Continue" manually — the flow never leaves them stuck.

## Deploying to Vercel

1. Push this project to a GitHub (or GitLab/Bitbucket) repo.
2. Go to [vercel.com/new](https://vercel.com/new) and import the repo. Vercel auto-detects Next.js — no config needed.
3. Deploy.
4. Add your custom domain under **Project → Settings → Domains**.

Alternatively, from the CLI:

```bash
npm i -g vercel
vercel
```

## Notes

- Fonts (`Inter`, `Sora`, `JetBrains Mono`) are loaded via `next/font/google` and self-hosted at build time — this requires network access during `npm run build` / `vercel build` (works automatically on Vercel and any machine with internet access).
- The design respects `prefers-reduced-motion` and has visible keyboard focus states throughout.
- No fake urgency, countdowns, or scarcity messaging is used anywhere on the page, per the brand brief.
