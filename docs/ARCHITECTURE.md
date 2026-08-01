# Architecture

This document describes the **current** Phase 1 architecture for the HNM Professional Services marketing site.

## Architecture Summary

The site is a statically exported Next.js App Router application.

The production site does not require a persistent Node.js server or custom application backend. Pages are generated at build time into `out/` and can be served by Nginx or any static web server.

## Source Structure

```text
src/
├── app/                    # App Router routes, layout, metadata routes
├── components/
│   ├── layout/             # Header, footer, navigation
│   ├── providers/          # MUI ThemeRegistry
│   └── shared/             # Reusable UI building blocks
├── content/                # Business, navigation, routes, SEO constants
├── theme/                  # Temporary MUI theme and overrides
└── utils/                  # Metadata helpers
```

## Routes

| Route           | Purpose                                                                                       |
| --------------- | --------------------------------------------------------------------------------------------- |
| `/`             | Home — introduce the business, services overview, and primary CTA                             |
| `/services`     | Detail Pet Sitting & Dog Walking, Companion Care for Seniors, and House Sitting & Home Checks |
| `/about`        | Business story, values, and owner/operator context (client-approved biography)                |
| `/reviews`      | Client reviews and testimonials                                                               |
| `/consultation` | Request a free consultation form                                                              |
| `/contact`      | Phone, email, and contact guidance                                                            |
| `/privacy`      | Privacy policy and related disclosures                                                        |

Additional App Router files:

- `src/app/not-found.js` — shared 404 page
- `src/app/sitemap.js` — static sitemap generation (`dynamic = "force-static"`)
- `src/app/robots.js` — robots.txt generation (`dynamic = "force-static"`)

## Framework Decisions

- Next.js App Router
- JavaScript only (no TypeScript)
- Static export (`output: "export"`)
- `trailingSlash: true` for simpler static Nginx path handling
- `images.unoptimized: true` so `next/image` works without a runtime optimizer
- React Server Components by default where compatible
- Client Components only where browser interactivity is required
- Material UI and Emotion for interface styling
- Hosted third-party form handling (deferred)
- Nginx serving generated static files (deployment deferred)

See [DECISIONS.md](./DECISIONS.md) for the Architecture Decision Log.

## MUI Integration

Material UI is integrated with the official App Router package:

- `@mui/material-nextjs/v16-appRouter` → `AppRouterCacheProvider`
- `src/components/providers/ThemeRegistry.js` wraps the app with the cache provider, `ThemeProvider`, and `CssBaseline`

### Theme organization (Phase 2)

```text
src/theme/
├── brandTokens.js          # Approved colors, radii, semantic status colors
├── fonts.js                # next/font/google (Cormorant Garamond, Montserrat)
├── typography.js           # Responsive type hierarchy
├── componentOverrides.js   # Shared MUI overrides
└── theme.js                # createTheme assembly + theme.brand / theme.radii
```

Fonts are loaded with `next/font/google` and exposed as CSS variables `--font-display` and `--font-body` on `<html>`. The MUI theme references those variables. Fonts are bundled at build time and work with static export (no runtime Google Fonts CSS).

### Approved brand colors

| Token         | Value     | Role                                         |
| ------------- | --------- | -------------------------------------------- |
| Primary green | `#6C8977` | Brand accent / `primary.main`                |
| Dark green    | `#557062` | Hover/active, footer, accessible button fill |
| Cream         | `#F0EFE5` | Page background                              |
| Warm cream    | `#F4F1E8` | Alternate surface / secondary                |
| Dark text     | `#26332D` | Body and headings                            |
| White         | `#FFFFFF` | Paper / cards                                |

Colors were approximated from a photograph of printed branding and may be refined if an original source file becomes available.

**Accessibility adjustment:** Contained primary buttons use dark green (`#557062`) for white label text so contrast meets WCAG AA. Primary green remains available for accents and large chrome.

### Typography roles

- **Cormorant Garamond** (500/600/700) — display headings (`h1`–`h3`), brand wordmark “HNM”
- **Montserrat** (400/500/600/700) — body, navigation, buttons, labels, eyebrows, footer

### Temporary wordmark

Until logo files exist, `BrandWordmark` renders “HNM” (serif) + “Professional Services” (sans). Do not approximate the heart-and-paw icon. Future paths are listed in `src/content/assets.js` and [ASSET_GUIDELINES.md](./ASSET_GUIDELINES.md).

The root `layout.js` remains a Server Component. Only the provider/registry and interactive chrome (header/mobile nav/CTA/link wrappers) are Client Components.

## Server vs Client Component Boundaries

**Server Components (default):**

- Route pages
- Root layout shell
- Footer content composition
- Most shared presentational sections (`PageHeader`, `PlaceholderSection`, `MainContainer`)

**Client Components:**

- `ThemeRegistry` — Emotion cache + theme provider
- `SiteHeader`, `DesktopNavigation`, `MobileNavigation` — pathname and drawer state
- `PrimaryCTA`, `AppLink`, `SkipLink`, `BrandWordmark` — navigation/CTA/wordmark helpers

## Static Export Configuration

Configured in `next.config.mjs`:

- `output: "export"` → production files in `out/`
- `trailingSlash: true`
- `images.unoptimized: true`

### Known static-export limitations

Avoid features that require a runtime Node.js server:

- Runtime server rendering
- Server Actions
- Runtime API routes
- Middleware-dependent functionality
- Runtime-only authentication
- Database-dependent pages
- Dynamic routes that cannot be determined at build time
- Next.js Image Optimization Server (use unoptimized images or pre-optimized assets)

## Placeholder Content Strategy

Phase 1 pages use shared placeholder components and centralized constants:

- Business values: `src/content/business.js`
- Routes: `src/content/routes.js`
- Navigation: `src/content/navigation.js`
- SEO copy: `src/content/seo.js`

Missing client facts use explicit placeholders such as `[CLIENT PHONE]`. Do not invent contact details, testimonials, credentials, or service regions.

## Forms

Consultation and contact forms submit to a hosted form provider when configured.

Provider selection is deferred. Form UI and client-side validation are implemented; endpoints are set via `NEXT_PUBLIC_CONTACT_FORM_ENDPOINT` and `NEXT_PUBLIC_CONSULTATION_FORM_ENDPOINT` (see `.env.example`). Submission stays inactive until valid HTTPS endpoints are provided.

## Privacy Notice

- Route: `/privacy` (linked in the site footer)
- Content: `src/content/privacy.js`
- Operational notice based on actual Contact and Consultation form fields
- No analytics or advertising cookies are enabled in the current codebase
- Form, hosting, and email provider names stay empty until finalized; provider privacy links render only when both a name and HTTPS URL exist
- `lastUpdated` remains empty until the notice is approved for launch
- Prelaunch: review California privacy-law applicability and consider legal review after providers and analytics decisions are final

## Media

Intended handling (still pending assets):

- Hero background video — muted, looping, compressed, with poster fallback; respect reduced motion
- Logo files — SVG preferred when available; PNG fallbacks documented under `public/brand/`
- Responsive photos — WebP or AVIF where practical
- Favicons and Open Graph image — deferred until files exist; do not reference missing URLs

Phase 2 established the brand theme. Pages still use placeholder media regions only. No autoplay video asset is included.

## Deployment

Planned flow:

1. `npm run build` generates `out/`
2. GitHub Actions deploys the export
3. Files land on the VPS
4. Nginx serves the static site

The actual GitHub Actions workflow and Nginx configuration will be created in a later phase.

## SEO Metadata

- Root defaults and title template in `src/app/layout.js`
- Per-route metadata via `createPageMetadata()` in `src/utils/metadata.js`
- Sitemap and robots generated from App Router metadata routes
- `metadataBase` currently uses the placeholder `business.siteUrl` (`https://www.example.com`) until the real domain is confirmed
- Icons and social images are intentionally omitted until `public/brand/` assets exist
