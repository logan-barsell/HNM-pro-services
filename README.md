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

| Page | Route |
| --- | --- |
| Home | `/` |
| Services | `/services` |
| About | `/about` |
| Reviews | `/reviews` |
| Request a Free Consultation | `/consultation` |
| Contact | `/contact` |
| Privacy | `/privacy` |

## Planned Technology Stack

The following stack is planned; it is not installed in this repository yet:

- Next.js App Router
- React
- JavaScript
- Material UI
- Emotion
- Next.js static export
- Hosted form provider
- GitHub Actions
- Nginx static hosting

## Development Status

This repository is currently in the **preparation phase**. The Next.js application has not yet been scaffolded.

Planned phases:

1. Repository preparation
2. Application architecture and placeholder pages
3. Theme, logos, colors, fonts, and favicons
4. Page-by-page implementation
5. Content refinement and launch preparation

## Local Development

Setup commands will be added after the Next.js application is scaffolded in Phase 1.

## Deployment

Intended deployment flow:

1. Push to GitHub
2. GitHub Actions builds the static export
3. Exported files are deployed to the VPS
4. Nginx serves the static site

Deployment configuration will be added in a later phase.

## Documentation

Project documentation lives in `docs/`:

- [PROJECT_CONTEXT.md](docs/PROJECT_CONTEXT.md) — Business background, goals, audience, tone, and unknown client details
- [ARCHITECTURE.md](docs/ARCHITECTURE.md) — Intended technical architecture, routes, and static-export constraints
- [CONTENT_GUIDELINES.md](docs/CONTENT_GUIDELINES.md) — Voice, CTA language, and copy safety rules
- [ASSET_GUIDELINES.md](docs/ASSET_GUIDELINES.md) — Logo, image, video, naming, and alt-text standards
- [DECISIONS.md](docs/DECISIONS.md) — Architecture Decision Log (ADRs)

## Contributing and Development Expectations

Development should follow:

- Cursor project rules in `.cursor/rules/`
- Existing project architecture in `docs/ARCHITECTURE.md`
- Accessibility requirements
- Responsive design requirements
- Consistent Material UI theme usage (once the theme exists)
- Small, focused commits

Do not invent client facts. Use clearly marked placeholders for missing information.

## License

All rights reserved unless otherwise specified.
