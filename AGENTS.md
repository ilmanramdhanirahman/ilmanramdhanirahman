# AGENTS.md — Portfolio Site Architecture

## Project Overview

Personal portfolio for Ilman Ramdhani Rahman. TanStack Start (SSR React) on Netlify. All pages are dark-themed with a consistent editorial design system.

## Directory Structure

```
src/
├── routes/
│   ├── __root.tsx        # Root layout — imports Nav + Footer, wraps all pages
│   ├── index.tsx         # Home page: hero, what-I-do cards, CTA banner
│   ├── about.tsx         # About: bio, skill bars, career timeline
│   ├── gallery.tsx       # Photography gallery: masonry grid + lightbox
│   ├── projects.tsx      # Work showcase: featured bento + grid
│   ├── contact.tsx       # Contact form (Netlify Forms) + social links
│   ├── resume.tsx        # Resume (not in nav, legacy)
│   └── blog/             # Blog routes (legacy, not in nav)
├── components/
│   ├── Nav.tsx           # Fixed top navbar with mobile menu
│   ├── Footer.tsx        # Footer with nav links + social icons
│   └── ui/               # shadcn-style primitives (Badge, Card, etc.)
├── lib/utils.ts          # cn() utility
└── styles.css            # Global styles, design tokens, Tailwind v4 config

content/                  # Markdown content via Content Collections
├── projects/             # (no longer used by projects.tsx — data is inline)
├── jobs/                 # Used by resume.tsx
├── education/            # Used by resume.tsx
└── blog/                 # Used by blog routes

public/
├── headshot-on-white.jpg # Profile photo (used on About page via Image CDN)
├── contact.html          # Netlify Forms detection HTML (must match form fields)
└── favicon.ico

netlify.toml              # Build config + remote_images allowlist for Unsplash
content-collections.ts    # Schema definitions for all markdown collections
```

## Design System

- **Background:** `#09090b` (zinc-950)
- **Card surface:** `#18181b` (zinc-900)
- **Border:** `#27272a` (zinc-800)
- **Accent:** `#8b5cf6` (violet-500)
- **Amber highlight:** `#f59e0b`
- **Text primary:** `#fafafa`, secondary: `#a1a1aa`, muted: `#71717a`
- **Headline font:** DM Serif Display (Google Fonts, loaded in `styles.css`)
- **Body font:** Inter (Google Fonts)

All inline styles are intentional (design-system values applied directly without Tailwind utilities for precision). Tailwind is used for layout utilities (`masonry-grid`, `card-hover`), animation classes, and base resets.

## Image Optimization

All images go through Netlify Image CDN via `/.netlify/images?url=...&w=...`. The `netlify.toml` allowlists `images.unsplash.com` for the gallery page. The About page photo uses a local file (`/headshot-on-white.jpg`) encoded with `encodeURIComponent`.

Gallery images are from Unsplash — if Unsplash IDs change or images 404, update the `photos` array in `src/routes/gallery.tsx`.

## Netlify Forms

The contact form in `contact.tsx` posts to `/contact.html` for Netlify Forms detection. `public/contact.html` must contain a hidden form that mirrors all field names (`name`, `email`, `subject`, `message`, `bot-field`).

## Adding New Pages

1. Create `src/routes/<name>.tsx` with `createFileRoute('/<name>')`
2. Add to `links` array in `src/components/Nav.tsx`
3. Add to footer nav in `src/components/Footer.tsx`

## Content Collections

Projects page data is now **inline** in `projects.tsx` (not from Content Collections) for richer typed data. The `content/projects/` markdown files are unused. `resume.tsx` still uses Content Collections for jobs/education.

## Key Decisions

- **Inline styles over Tailwind** for design-critical values — avoids purge issues with dynamic colors and keeps the design token values explicit and co-located with components.
- **No database** — portfolio content is static; no Netlify Database needed.
- **Gallery uses remote Unsplash images** — configured in `netlify.toml` `[images] remote_images`.
- **`shellComponent`** used in root route (vs `component`) — the original template pattern that gives access to full document shell including `<html>`, `<head>`, `<body>`.
