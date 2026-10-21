# efamelody.github.io

Personal portfolio and blog for **Nur Izfarwiza** — a software engineer and
computer science graduate from the University of Sheffield.

The site is a statically exported Next.js app. It showcases selected work
(client and product builds), research and university projects, work
experience, campus involvement, and a blog.

## Stack

| Concern            | Choice                                            |
| ------------------ | ------------------------------------------------- |
| Framework          | Next.js 14 (App Router, `output: "export"`)        |
| UI                 | React 18, TypeScript (strict)                      |
| Styling            | Tailwind CSS 3.4 with a custom pink scale          |
| Animation          | Framer Motion                                     |
| Content            | Markdown via `react-markdown` + `remark-gfm`        |
| Icons              | lucide-react                                      |
| Fonts              | Montserrat (headings) / Lato (body), via `next/font` |

## Local development

```bash
pnpm install
pnpm dev
```

Open <http://localhost:3000>.

## Build

```bash
pnpm build
```

Static export writes the deployable site to `out/`.

Type check without emitting:

```bash
node node_modules/typescript/bin/tsc --noEmit
```

## Repository structure

```
src/
  app/
    layout.tsx          # Root layout, font variables, metadata
    page.tsx            # Home page: section order
    globals.css         # Design tokens (CSS variables) + base styles
    blog/
      page.tsx          # Blog index
      [slug]/page.tsx   # Blog post
  components/           # UI components (Navbar, Hero, PortfolioGrid, ...)
  data/
    portfolio.ts        # All project and experience content
  hooks/
    useSmoothScroll.ts  # Anchor scrolling for in-page navigation
  lib/
    assets.ts           # Public asset path helpers
  types/
    index.ts            # Project, Experience, SocialLink types
public/
  img/portfolio/        # Project screenshots
  img/experience/       # Campus involvement photos
  assets/files/         # Dissertation and report PDFs
```

## Content model

All portfolio content lives in `src/data/portfolio.ts` as a typed
`Project[]`. Each project carries:

- `slug` — stable identifier used in the browser tab and deep links.
- `track` — `work` (selected work) or `research` (research and exploration);
  drives the grouping and filter pills on the home page.
- `status` — `live`, `beta`, `in-development`, `prototype`, or `archived`;
  rendered as a semantic badge.
- `screenshot` / `img` — image used for the card and modal hero. A missing
  file degrades to a "Screenshot pending" placeholder rather than a broken
  image.
- `content` — the case study, written in Markdown with a consistent
  structure: the problem, what it does, how it's built, engineering
  decisions, and where it stands today.

To add a project, append an entry to `projects` and drop its screenshot into
`public/img/portfolio/`.

## Deployment

GitHub Actions (`.github/workflows/deploy.yml`) builds the site and publishes
the `out/` directory to GitHub Pages on every push to `main`.

## Legacy

`_site/` contains the output of the previous Jekyll-based version of this
site. It is not part of the build and is not deployed.
