# vasanimit9.github.io

Personal portfolio and blog site for Mit Vasani, built with [Astro](https://astro.build) and deployed to GitHub Pages.

## Tech Stack

- **[Astro](https://astro.build)** — Static site generator
- **[React](https://react.dev)** — Component library (via `@astrojs/react`)
- **[Tailwind CSS v4](https://tailwindcss.com)** — Styling
- **[MDX](https://mdxjs.com)** — Blog content authoring
- **[shadcn/ui](https://ui.shadcn.com)** + **[Radix UI](https://www.radix-ui.com)** — UI components
- **[Shiki](https://shiki.style)** — Syntax highlighting (GitHub dark/light themes)
- **[Bun](https://bun.sh)** — Package manager and runtime
- **[Playwright](https://playwright.dev)** — E2E and screenshot testing
- **TypeScript** — Type safety throughout

## Pages

| Route | Description |
|---|---|
| `/` | Home — intro and links |
| `/blog` | Blog posts written in MDX |
| `/experience` | Work history and projects |
| `/reading` | Reading list with status tracking |

## Getting Started

Install dependencies and start the dev server:

```bash
bun install
bun run dev
```

Open [http://localhost:4321](http://localhost:4321) to view the site.

## Available Scripts

| Command | Description |
|---|---|
| `bun run dev` | Start local dev server |
| `bun run build` | Build static output to `dist/` |
| `bun run preview` | Preview the production build locally |
| `bun run test` | Run Playwright E2E tests |

## Project Structure

```
.
├── src/
│   ├── pages/          # Route pages (index, blog, experience, reading)
│   ├── components/     # Astro/React components
│   ├── content/blog/   # MDX blog posts
│   ├── layouts/        # Page layout templates
│   ├── lib/            # Content loaders and helpers
│   ├── types/          # TypeScript type definitions
│   └── styles/         # Global CSS
├── content/
│   ├── experience.json # Work history
│   ├── projects.json   # Project list
│   └── reading.json    # Reading list
└── .github/workflows/  # GitHub Actions deploy pipeline
```

## Deployment

The site is automatically built and deployed to GitHub Pages on every push to `main` via GitHub Actions using Bun.
