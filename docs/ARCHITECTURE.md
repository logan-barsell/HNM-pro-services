# Architecture

This document describes the **intended** architecture. The application has not been scaffolded yet.

## Architecture Summary

The site will be a statically exported Next.js application using the App Router.

The production site will not require a persistent Node.js server or custom application backend. Pages are generated at build time and served as static files.

## Planned Routes

| Route | Purpose |
| --- | --- |
| `/` | Home — introduce the business, services overview, and primary CTA |
| `/services` | Detail Pet Sitting & Dog Walking, Companion Care for Seniors, and House Sitting & Home Checks |
| `/about` | Business story, values, and owner/operator context (client-approved biography) |
| `/reviews` | Client reviews and testimonials |
| `/consultation` | Request a free consultation form |
| `/contact` | Phone, email, and contact guidance |
| `/privacy` | Privacy policy and related disclosures |

## Planned Framework Decisions

- Next.js App Router
- JavaScript only (no TypeScript)
- Static export (`output: "export"`)
- React Server Components by default where compatible
- Client Components only where browser interactivity is required
- Material UI and Emotion for interface styling
- Hosted third-party form handling
- Nginx serving generated static files

See [DECISIONS.md](./DECISIONS.md) for the Architecture Decision Log.

## Static Export Constraints

Future implementation must remain compatible with static export. Avoid features that require a runtime Node.js server, including:

- Runtime server rendering
- Server Actions
- Runtime API routes
- Middleware-dependent functionality
- Runtime-only authentication
- Database-dependent pages
- Dynamic routes that cannot be determined at build time

If a feature needs a server at request time, it is out of scope unless explicitly re-approved and the architecture is revised.

## Component Organization

Intended high-level organization (to be created in later phases):

- **App routes** — route segments and page files under the App Router
- **Layout components** — shared shell (header, footer, navigation)
- **Shared components** — reusable UI used across pages
- **Page-specific components** — components that belong to a single route
- **Content/data modules** — copy, service summaries, and structured content
- **Theme** — Material UI theme tokens (colors, typography, spacing)
- **Utilities** — small shared helpers

Do not over-engineer the project. Prefer colocated, focused modules over deep abstraction layers.

## Rendering Guidelines

- Prefer Server Components by default
- Add `"use client"` only when required (browser state, effects, event handlers, or interactive MUI behavior that needs the client)
- Keep client component boundaries small
- Avoid making an entire page a Client Component merely to support one interactive element
- Keep static content close to the relevant page or in focused content modules

## Forms

Forms will eventually submit to a hosted form provider.

Form provider selection is intentionally deferred. Implementation should leave a clear integration point without inventing a provider choice.

## Media

Intended handling:

- **Hero background video** — muted, looping, compressed, with a poster/fallback image; respect reduced-motion preferences
- **Poster/fallback image** — always available when video cannot play or should not autoplay
- **Logo files** — SVG preferred; PNG fallback as needed
- **Responsive photos** — appropriately sized sources; WebP or AVIF where practical
- **SVG logo usage** — prefer SVG where the client provides it

See [ASSET_GUIDELINES.md](./ASSET_GUIDELINES.md) for naming, alt text, and quality standards.

## Deployment

Planned flow:

1. Next.js static build
2. Output generated into `out/`
3. GitHub Actions deploys the export
4. Files land on the VPS
5. Nginx serves the static site

The actual GitHub Actions workflow and Nginx configuration will be created in a later phase.
