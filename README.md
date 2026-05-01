# Lucid Aesthetics

A polished med spa website built as a portfolio demo — showcasing a complete digital system for a service business. The full-stack build includes transactional email, booking integration, SEO, and a performance-optimized frontend.

> **This is a demo build.** No real business, no real appointments. Built by [Jakwoun Reid](https://jakwoun.me) to demonstrate capability for med spa and wellness clients.

---

## Tech Stack

- **Framework**: Next.js 16 (App Router) + TypeScript
- **Styling**: Tailwind CSS v4 + shadcn/ui
- **Animations**: Framer Motion
- **Email**: Resend (newsletter + intake form)
- **Booking**: Calendly inline embed (lazy-loaded, `/book` only)
- **Icons**: Lucide React
- **Images**: `next/image` with Unsplash
- **Fonts**: Cormorant Garamond (display) + Inter (body) via `next/font`
- **Deploy**: Vercel + Cloudflare DNS

---

## Getting Started

```bash
npm install
cp .env.example .env.local   # then fill in your values
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

---

## Environment Variables

| Variable | Description |
|---|---|
| `RESEND_API_KEY` | From [resend.com/api-keys](https://resend.com/api-keys) |
| `CONTACT_EMAIL` | Where intake form submissions are sent |
| `NEXT_PUBLIC_CALENDLY_URL` | Your Calendly scheduling URL |

---

## Pages

| Route | Description |
|---|---|
| `/` | Home — hero, services preview, about teaser, testimonials, newsletter |
| `/services` | Full service menu with pricing, duration, and booking CTAs |
| `/about` | Founder story, philosophy, team |
| `/book` | Calendly inline embed |
| `/contact` | Address, hours, intake form, map embed |

---

## Deployment

```bash
vercel --prod
```

Environment variables should be added via `vercel env add` or the Vercel dashboard. The `RESEND_API_KEY` and `CONTACT_EMAIL` variables should be set for **Production** and **Preview** environments.

---

## Demo Build

This project was built by **Jakwoun Reid** as a portfolio piece demonstrating the ability to design and build complete digital systems for service businesses.

- Portfolio: [jakwoun.me](https://jakwoun.me)
- Inquiries: contact via portfolio site
