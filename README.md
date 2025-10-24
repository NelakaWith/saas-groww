This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

# saas-groww — Next.js + Tailwind demo (Figma → App conversion)

This repository is a small demo landing project that showcases building a modern, responsive Next.js application styled with Tailwind CSS. It also demonstrates a Figma-to-app conversion workflow: taking a Figma design and implementing it as reusable React components and styles.

Purpose

- Serve as a compact example of an App Router-based Next.js site using Tailwind CSS utilities and custom styles.
- Demonstrate practical Figma → App conversion patterns: design tokens (CSS variables), Tailwind theme mapping, reusable components (Button, Header, Logo), and layout patterns (responsive grids, horizontal scrollers).
- Provide a starting point for experimenting with visual effects (glassmorphism, backdrop-filter), accessible components, and small UI utilities.

Key ideas showcased

- Next.js App Router structure (server components + client components where appropriate).
- Tailwind CSS v3 utilities, extended theme colors mapped from design tokens.
- Component-first approach: small, focused components (buttons, icons, sections) that can be composed into pages.
- Responsive patterns: mobile-first breakpoints, horizontal scrolling with static edge gradients, and equal-height card layouts.
- Accessibility considerations: focus-visible outlines, semantic headings, and keyboard-friendly interactions.

Quick start

1. Install dependencies

```powershell
npm install
```

2. Run the dev server (Windows PowerShell)

```powershell
npm run dev
```

Open http://localhost:3000 in your browser.

Useful scripts

- `npm run dev` — development server
- `npm run build` — production build
- `npm run start` — run production build locally
- `npm run lint` — run ESLint

Tailwind / PostCSS notes

- Tailwind is configured in `tailwind.config.cjs` and reads content from the `src` folder.
- Custom design tokens are exposed as CSS variables in `src/styles/globals.css` and mapped into the Tailwind theme for utility use.
- PostCSS is configured in `postcss.config.mjs` with `tailwindcss` and `autoprefixer` plugins.

Figma → App tips used in this project

- Extract color tokens and map them to CSS variables. Use those variables in Tailwind theme for consistent utilities.
- Convert SVG icons to small React components that use `fill="currentColor"` so they can be styled via color utilities.
- Build small presentational components (Button, SectionTag, Logo) first, then compose them into section-level components (Hero, WhyUs, Partners).
- Reserve JS for interactive concerns only (e.g., client-only equalization or responsive behavior). Prefer CSS-first solutions for layout where practical.

Files of interest

- `src/app/layout.tsx` — global layout and top-level composition
- `src/styles/globals.css` — Tailwind directives, CSS variables, and custom utilities (glass, scroll-fade)
- `src/components/common` — shared components (Button, Header, Logo, SectionTag)
- `src/components/sections` — page sections (Hero, WhyUs, Partners, etc.)

Gotchas & troubleshooting

- Hydration mismatches: Ensure client-only code (hooks, window access) is wrapped with `"use client"` and not executed on the server. If you see hydration warnings, check for runtime-only values (Date.now, Math.random) or browser extensions injecting DOM differences.
- SVG icons: Prefer `currentColor` + inline components to avoid cross-origin or fill override issues.
- Horizontal scrollers: use `overflow-x-auto` with `no-scrollbar` utilities and place static overlays (fade gradients) on a non-scrolling parent so they don't move with content.

Next steps / ideas

- Convert all images to inline SVG components to make them theme-aware and reduce layout shifts.
- Add tests for key components (Jest + React Testing Library) and static type checks for components (migrate to `.tsx`).
- Create a small design tokens export script to keep Figma tokens in sync with `globals.css`.

License
GNU GENERAL PUBLIC LICENSE
