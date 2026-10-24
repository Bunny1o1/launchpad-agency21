# Vinod Yadav — Conversational AI Growth Expert

Personal consulting website built with **Next.js 14 (App Router)**, **Tailwind CSS**, and **Framer Motion**.

## Tech Stack

- **Framework:** Next.js 14 (App Router)
- **Styling:** Tailwind CSS with custom warm dark design system
- **Animations:** Framer Motion
- **Fonts:** Inter + JetBrains Mono (Google Fonts via `next/font`)
- **Icons:** Lucide React
- **Deployment:** Vercel

## Pages

| Route | Description |
|---|---|
| `/` | Homepage with hero, proof numbers, client types, case study teaser |
| `/services` | Service offerings and pricing |
| `/case-studies` | Enterprise case studies |
| `/readiness-score` | WhatsApp Readiness Score lead magnet quiz |
| `/blog` | Thought leadership — LinkedIn & Substack |
| `/about` | Bio, timeline, social links |
| `/book` | Calendly booking embed |

## Newsletter

New *Revenue After The Sale* issues on Substack are mirrored to `/blog` by a scheduled GitHub Action. It is off by default. See [docs/newsletter-sync.md](docs/newsletter-sync.md) for how to switch it on, run it once or turn it off.

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

## Deployment

Deploy to Vercel with one click. Update `embed_domain` in `/src/app/book/page.tsx` to your production domain.

## Contact

- **Email:** yuvinod@gmail.com
- **LinkedIn:** [linkedin.com/in/yuvinod](https://www.linkedin.com/in/yuvinod/)
- **Substack:** [vinod820.substack.com](https://vinod820.substack.com/)
