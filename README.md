# Portfolio Site

A personal portfolio site for Alex Chen, a full-stack designer and developer. Built with TanStack Start (React), Tailwind CSS v4, and deployed on Netlify.

## Tech Stack

- **Framework:** TanStack Start (React 19, SSR)
- **Routing:** TanStack Router (file-based)
- **Styling:** Tailwind CSS v4 + custom CSS (dark theme design system)
- **Content:** Content Collections (Markdown-based)
- **Image Optimization:** Netlify Image CDN (`/.netlify/images`)
- **Forms:** Netlify Forms
- **Deployment:** Netlify (with edge functions via `@netlify/vite-plugin-tanstack-start`)
- **Icons:** Lucide React
- **Typography:** DM Serif Display (headlines) + Inter (body) via Google Fonts

## Running Locally

```bash
npm install
npm run dev
```

The dev server runs on port 3000. Use the Netlify CLI for full feature parity (forms, image CDN, etc.):

```bash
netlify dev --port 8889
```

## Key Features

- **Image Gallery** — Masonry layout with lightbox, images served via Netlify Image CDN from Unsplash
- **Projects Showcase** — Featured bento-style cards + secondary grid
- **About Page** — Bio, skill bars, career timeline with photo
- **Contact Page** — Netlify Form + social links grid
- **Dark editorial design** — Electric violet accent (`#8b5cf6`) on near-black (`#09090b`)
