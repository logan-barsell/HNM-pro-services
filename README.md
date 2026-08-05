# HNM Professional Services Website

This repository contains the public marketing website for **HNM Professional Services**.

**“Supporting People, Cherishing Pets.”**

## Project Purpose

The site is intended to:

- Establish a professional online presence
- Explain the company’s services
- Build trust with prospective clients
- Highlight reviews and testimonials
- Communicate service regions
- Encourage visitors to request a free consultation

## Planned Services

- Pet Sitting & Dog Walking
- Companion Care for Seniors
- House Sitting & Home Checks

Final service descriptions and boundaries will be refined with the client before launch.

## Planned Sitemap

| Page                        | Route           |
| --------------------------- | --------------- |
| Home                        | `/`             |
| Services                    | `/services`     |
| About                       | `/about`        |
| Gallery                     | `/gallery`      |
| Reviews                     | `/reviews`      |
| Request a Free Consultation | `/consultation` |
| Contact                     | `/contact`      |
| Privacy                     | `/privacy`      |

## Technology Stack

Current application stack:

- Next.js App Router (static export)
- React
- JavaScript
- Material UI
- Emotion
- Hosted form provider (deferred)
- GitHub Actions + Nginx static hosting (deployment deferred)

## Development Status

**Phase 3.7 (Privacy page) is complete.** Remaining work is content refinement, provider configuration, and launch preparation.

Planned phases:

1. Repository preparation — complete
2. Application architecture and placeholder pages — complete
3. Brand theme foundation — complete
4. Page-by-page implementation — Home, Services, About, Reviews, Contact, Consultation, and Privacy complete
5. Content refinement and launch preparation

## Local Development

Requires Node.js 24 (see `.nvmrc`).

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

### Other commands

```bash
npm run lint
npm run build
npm run sync:reviews
```

`npm run build` runs the production build and writes the static export to `out/`.

`npm run sync:reviews` pulls Google Place reviews into `src/content/googleReviews.generated.json` (requires `GOOGLE_PLACES_API_KEY` and a Place ID in `src/content/googleReviews.config.js`). A weekly GitHub Action runs the same sync and commits changes so deploys stay hands-off.

`npm start` is provided by Next.js scaffolding but is **not** used for production. This project uses static export; serve the `out/` directory with Nginx or any static file server.

## Deployment

Production flow:

1. Push to `main` (or run **Deploy to DigitalOcean** via `workflow_dispatch`)
2. GitHub Actions builds the static export (`out/`) with Node 24
3. `rsync` copies `out/` to the droplet web root
4. Nginx serves the static site

Workflow: [`.github/workflows/deploy.yml`](.github/workflows/deploy.yml). Required secrets are documented in that file. See [docs/LAUNCH_CHECKLIST.md](docs/LAUNCH_CHECKLIST.md) for domain, Nginx, and Formspree setup.

## Documentation

Project documentation lives in `docs/`:

- [PROJECT_CONTEXT.md](docs/PROJECT_CONTEXT.md) — Business background, goals, audience, tone, and unknown client details
- [ARCHITECTURE.md](docs/ARCHITECTURE.md) — Technical architecture, routes, MUI integration, and static-export constraints
- [CONTENT_GUIDELINES.md](docs/CONTENT_GUIDELINES.md) — Voice, CTA language, and copy safety rules
- [ASSET_GUIDELINES.md](docs/ASSET_GUIDELINES.md) — Logo, image, video, naming, and alt-text standards
- [GOOGLE_REVIEWS.md](docs/GOOGLE_REVIEWS.md) — Google reviews sync setup, secrets, and next steps
- [LAUNCH_CHECKLIST.md](docs/LAUNCH_CHECKLIST.md) — Domain, Nginx, GitHub Actions deploy, and Formspree launch checklist
- [SEO.md](docs/SEO.md) — Ongoing SEO backlog (Search Console, GBP, content growth)
- [DECISIONS.md](docs/DECISIONS.md) — Architecture Decision Log (ADRs)

## Contributing and Development Expectations

Development should follow:

- Cursor project rules in `.cursor/rules/`
- Existing project architecture in `docs/ARCHITECTURE.md`
- Accessibility requirements
- Responsive design requirements
- Consistent Material UI theme usage
- Small, focused commits

Do not invent client facts. Use clearly marked placeholders for missing information.

## License

All rights reserved unless otherwise specified.
