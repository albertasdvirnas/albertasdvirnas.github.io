# albertasdvirnas.github.io

Personal research site, built with [Astro](https://astro.build) and deployed to GitHub Pages by
`.github/workflows/deploy.yml` on every push to `main`. The visual design follows the Claude Design
report *Empirical dynamic modelling: what the attractor can and cannot tell you* — Instrument Serif,
Source Serif 4, IBM Plex Mono, warm paper and a terracotta accent — defined once in
`src/styles/global.css`.

```sh
npm install
npm run dev      # http://localhost:4321, live reload; drafts are visible here
npm run build    # static site in dist/
```

## Where things live

| What | File |
| --- | --- |
| Publications, talks, projects, collaborations, outreach | `src/data/*.ts` |
| Name, nav, contact links | `src/data/site.ts` |
| Page templates | `src/pages/*.astro` |
| Research reviews | `src/content/reviews/*.mdx` |
| Hosted apps / demos | `public/apps/<name>/` + `src/data/apps.ts` |
| PDFs, images, CV | `public/` (served as-is) |

URLs keep the old `.html` form (`/publications.html`, …), so existing links still work.

## Adding a research review

Create `src/content/reviews/<slug>.mdx` (or `.md`). It is published at `/reviews/<slug>.html`
and appears on the reviews index, the front page and the sitemap.

```mdx
---
title: "Matrix profiles for ecologists"
dek: "One-paragraph standfirst shown under the title and on the index."
kicker: "Research review · time-series similarity search"
date: 2026-10-01
tags: [matrix profile, forecasting]
assisted: true     # adds the "compiled with Claude" byline
draft: false       # true = only visible in `npm run dev`
---
import { Takeaways, Takeaway, Section, Grid, Card, Split, BarFigure, Equations, Rows, Row, Problem, Sources, Callout } from '../../components/review';

<Takeaways>
  <Takeaway n={1}>First headline finding, with *markdown* allowed.</Takeaway>
</Takeaways>

<Section title="The premise" cols>

Plain markdown paragraphs, flowed in two columns.

</Section>
```

Plain Markdown works too: every `## Heading` gets an automatic § number. The components reproduce
the design's building blocks — see `empirical-dynamic-modelling.mdx` for every one of them in use:

- `Section` — numbered section; `variant="panel"` (shaded) or `"ruled"`; `cols` for two columns
- `Grid` / `Card` — responsive grid of titled blocks; `variant="cards"` draws hairline cells
- `Split` + `slot="aside"` — text with a side figure
- `BarFigure`, `Equations`, `Rows`/`Row`, `Problem`, `Callout`, `Sources`

Tip for Claude-drafted text: ask for output as an MDX file in this format, then drop it in the folder.

## Hosting other things under the site

- **Self-contained pages** (an HTML app, a notebook export, a Claude artifact you downloaded):
  put the folder in `public/apps/<name>/` with an `index.html`. It is served untouched at
  `/apps/<name>/`. Add an entry to `src/data/apps.ts` to list it on `/lab.html`.
- **Anything with its own repo**: enable GitHub Pages in that repo; it appears at
  `https://albertasdvirnas.github.io/<repo>/`. List it in `src/data/apps.ts` as well.
