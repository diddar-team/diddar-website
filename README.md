# Diddar — website

Marketing site and waitlist for **Diddar**, a practical, mentor-led tech bootcamp.
Visitors browse the tracks and add their name to a waitlist that records the
track and skill level they want, so cohorts and trainers are planned around real
demand.

## Stack

- **Next.js 16** (App Router, Turbopack) · **React 19**
- **Tailwind CSS v4** for styling, driven by design tokens in `theme/theme.css`
- **Mantine v9** for interactive components (drawer, form inputs, accordion, notifications)
- **next/font** — Fraunces (display), DM Sans (body), Caveat (accents)
- Light theme by default; dark is opt-in and persisted (Mantine color scheme)

## Getting started

```bash
pnpm install
pnpm dev          # http://localhost:3000
```

```bash
pnpm build        # production build (also type-checks)
pnpm lint         # eslint
```

## Project layout

```
app/
  page.tsx                 home page (composes components/home/*)
  waitlist/page.tsx        the waitlist form page
  api/waitlist/route.ts    validates + forwards submissions to a Google Sheet
  api/pricing/route.ts     returns the (simulated) pricing config
  layout.tsx               fonts, metadata, providers
components/
  home/*                   home page sections
  ui/*                     shared primitives (Section, Button, Carousel, CardGrid…)
  waitlist/*               the waitlist form
  pricing/*                the scholarship / pricing breakdown
lib/
  site.ts                  APP_NAME, tagline, contact email, site URL
  tracks.ts                the learning tracks + levels
  pricing.ts               PRICING_CONFIG + math (registration / training fee)
  waitlist.ts              zod schema + shared options
theme/
  theme.css                design tokens (colour, type scale, radii) — light + dark
  mantine-theme.ts         bridges Mantine to the token set
docs/
  waitlist-google-sheet.md one-time setup for the waitlist Google Sheet
```

## Configuration

Everything user-facing is centralised so a rebrand or content change is a
one-line edit:

- **App name / tagline / contact email / URL** → `lib/site.ts`
- **Learning tracks, levels, cohort length** → `lib/tracks.ts`
- **Fees and the early-reserver scholarship** → `lib/pricing.ts` (`PRICING_CONFIG`)
- **Colour, typography, spacing tokens** → `theme/theme.css`

### Environment variables

Copy `.env.example` to `.env.local`:

| Variable | Purpose |
| --- | --- |
| `NEXT_PUBLIC_SITE_URL` | Canonical site URL used in metadata |
| `WAITLIST_WEBHOOK_URL` | Google Apps Script web-app URL that appends waitlist rows to a Sheet. If unset, submissions are logged to the server console instead. See `docs/waitlist-google-sheet.md`. |

## Waitlist flow

Branded form → `POST /api/waitlist` (zod validation, honeypot, light rate limit)
→ Google Apps Script web app → Google Sheet (`Waitlist` and `Newsletter` tabs).
Follow `docs/waitlist-google-sheet.md` to wire up the Sheet.

## Branches

- `main` — production
- `dev` — active development
