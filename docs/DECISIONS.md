# Architecture Decision Log

Record of significant technical decisions for the HNM Professional Services website.

Entry format:

- **Decision ID**
- **Date**
- **Status**
- **Context**
- **Decision**
- **Rationale**
- **Consequences**

---

## ADR-001: Use React through Next.js

- **Date:** 2026-07-31
- **Status:** Accepted
- **Context:** The marketing site needs multiple pages, shared layout, and page-level metadata while remaining simple to host.
- **Decision:** Build the site with React through Next.js.
- **Rationale:** The developer prefers React; multi-page routing and metadata are needed; static generation fits a marketing site.
- **Consequences:** The team will follow Next.js conventions and App Router patterns. Non-React approaches are out of scope.

---

## ADR-002: Use Next.js App Router

- **Date:** 2026-07-31
- **Status:** Accepted
- **Context:** Next.js supports both the Pages Router and the App Router. A modern, maintainable routing model is preferred.
- **Decision:** Use the Next.js App Router.
- **Rationale:** File-based routing, shared layouts, route metadata, static generation support, and alignment with modern Next.js architecture.
- **Consequences:** Route files live under the App Router structure. Pages Router patterns should not be introduced.

---

## ADR-003: Use Static Export

- **Date:** 2026-07-31
- **Status:** Accepted
- **Context:** No custom backend is planned. Production hosting will use Nginx on a VPS.
- **Decision:** Use Next.js static export (`output: "export"`), with build output in `out/`.
- **Rationale:** No custom backend is required; the site can be hosted through Nginx; each route can be generated at build time; production infrastructure stays simple.
- **Consequences:** Features requiring a runtime Node server are unavailable, including Server Actions, runtime API routes, middleware-dependent behavior, runtime auth, database-backed pages, and dynamic routes that cannot be known at build time. Form handling must use a hosted third-party provider.

---

## ADR-004: Use JavaScript Instead of TypeScript

- **Date:** 2026-07-31
- **Status:** Accepted
- **Context:** The project could be implemented in TypeScript or JavaScript.
- **Decision:** Use JavaScript only. Do not add TypeScript configuration or convert source files to TypeScript.
- **Rationale:** This project is intentionally JavaScript-only; the developer has chosen to avoid TypeScript for this implementation; the app is small and focused.
- **Consequences:** Type safety relies on careful code review and clear naming. JSDoc may be used selectively when it materially improves clarity, but it should not add unnecessary ceremony.

---

## ADR-005: Use Material UI and Emotion

- **Date:** 2026-07-31
- **Status:** Accepted
- **Context:** The site needs a consistent, responsive component system without building a full design system from scratch.
- **Decision:** Use Material UI with Emotion for styling.
- **Rationale:** Existing developer familiarity; consistent responsive components; customizable theme; mature component ecosystem.
- **Consequences:** The shared MUI theme is the source of visual tokens once created. Competing UI systems (Tailwind, Bootstrap, styled-components, etc.) should not be introduced. The final design must **not** look like a default Material UI dashboard—it should feel warm, editorial, and appropriate for a local service business.

---

## ADR-006: Do Not Add Automated Testing in Version One

- **Date:** 2026-07-31
- **Status:** Accepted
- **Context:** Automated test tooling adds setup and maintenance cost for an initially small static marketing site.
- **Decision:** Do not add automated testing infrastructure in version one.
- **Rationale:** The site is small and static; automated test infrastructure is not necessary for the initial scope; manual validation and build verification will be used.
- **Consequences:** Quality relies on manual review, accessibility checks, and successful production builds. Testing can be added later if the project grows. Do not add tests unless explicitly requested.

---

## ADR-007: Use a Hosted Form Provider

- **Date:** 2026-07-31
- **Status:** Accepted
- **Context:** Consultation and contact forms are required, but no application backend is planned.
- **Decision:** Submit forms to a hosted third-party form provider.
- **Rationale:** No backend is planned; the site still requires reliable consultation and contact submissions; provider selection is deferred until implementation.
- **Consequences:** Form UX and validation must work within static export constraints. Provider choice, spam protection, and success/error flows will be decided during implementation. Do not invent a provider in documentation or code before selection.

---

## ADR-008: Use Node.js 24 LTS

- **Date:** 2026-07-31
- **Status:** Accepted
- **Context:** Local and CI Node versions should be aligned for a modern Next.js project.
- **Decision:** Pin the major Node version to **24** via `.nvmrc` (Active LTS as of this decision).
- **Rationale:** Node 24 is the Active LTS line appropriate for a modern Next.js project. Pinning a major (not an arbitrary patch) allows deliberate upgrades later.
- **Consequences:** Developers should use Node 24 via nvm or equivalent. Revisit this ADR during dependency upgrades, especially when Next.js or tooling require a newer LTS major.

---

## ADR-009: Enable Trailing Slashes for Static Hosting

- **Date:** 2026-07-31
- **Status:** Accepted
- **Context:** Production hosting will use Nginx serving statically exported HTML directories.
- **Decision:** Set `trailingSlash: true` in `next.config.mjs`.
- **Rationale:** Trailing slashes map cleanly to `index.html` inside route directories in the `out/` export and simplify static Nginx configuration.
- **Consequences:** Canonical URLs and sitemap entries should include trailing slashes for non-root paths. Internal `Link` usage relies on Next.js to normalize paths.

---

## ADR-010: Disable Next.js Image Optimization for Export

- **Date:** 2026-07-31
- **Status:** Accepted
- **Context:** Static export cannot use the Next.js Image Optimization Server.
- **Decision:** Set `images.unoptimized: true` so `next/image` remains usable without a runtime image server.
- **Rationale:** Keeps the option to use the Next.js image component while remaining fully exportable to Nginx.
- **Consequences:** Images are served as static assets. Optimize and resize media ahead of time (especially in Phase 2 asset work).

---

## ADR-011: Use Official MUI App Router Integration (v16 entry)

- **Date:** 2026-07-31
- **Status:** Accepted
- **Context:** Emotion styles must be collected correctly with the Next.js App Router.
- **Decision:** Use `@mui/material-nextjs` with `AppRouterCacheProvider` from `@mui/material-nextjs/v16-appRouter`, wrapped in `ThemeRegistry`.
- **Rationale:** Official integration avoids a hand-rolled Emotion cache and matches Next.js 16.
- **Consequences:** Theme and cache setup stay centralized. Do not introduce a competing styling system.

---

## ADR-012: Client Wrappers for Next.js Link + MUI

- **Date:** 2026-07-31
- **Status:** Accepted
- **Context:** Passing `next/link` as a MUI `component` prop from a Server Component to a Client Component can fail under the React Server Components boundary.
- **Decision:** Compose Next.js `Link` with MUI inside small Client Components (`AppLink`, `PrimaryCTA`, header/nav).
- **Rationale:** Keeps page files as Server Components while preserving typed navigation and MUI styling.
- **Consequences:** Avoid passing function components across the RSC → client boundary; import `Link` inside client wrappers instead.

---

## ADR-013: Force-Static Sitemap and Robots Routes

- **Date:** 2026-07-31
- **Status:** Accepted
- **Context:** Next.js 16 static export requires metadata routes to opt into static generation explicitly.
- **Decision:** Export `dynamic = "force-static"` from `src/app/sitemap.js` and `src/app/robots.js`.
- **Rationale:** Required for `/sitemap.xml` and `/robots.txt` to build under `output: "export"`.
- **Consequences:** Sitemap and robots content are fixed at build time from centralized business/route constants.

---

## ADR-014: Load Brand Fonts with `next/font/google`

- **Date:** 2026-07-31
- **Status:** Accepted
- **Context:** The approved brand uses Cormorant Garamond (display) and Montserrat (body/UI). Fonts must work with static export without runtime CSS imports.
- **Decision:** Load both families through `next/font/google` in `src/theme/fonts.js`, expose `--font-display` and `--font-body`, and apply the variable class names on `<html>`.
- **Rationale:** Next.js self-hosts font files at build time, avoiding layout shift and external runtime font requests.
- **Consequences:** Only the selected weights are bundled. Do not add `@import` Google Fonts CSS. Theme typography must reference the CSS variables.

---

## ADR-015: Adopt Printed-Brand Color Palette

- **Date:** 2026-07-31
- **Status:** Accepted
- **Context:** Client printed branding samples provide green and cream values for the public site.
- **Decision:** Use `#6C8977`, `#557062`, `#F0EFE5`, `#F4F1E8`, `#26332D`, and `#FFFFFF` as the approved initial palette in `brandTokens.js`, with derived light/muted/border variants for UI states.
- **Rationale:** Aligns the digital theme with existing print materials while remaining warm and professional for a care-services brand.
- **Consequences:** Colors may be refined if an original source file becomes available. Accessibility adjustments may darken interactive fills without abandoning the palette.

---

## ADR-016: Prefer Accessible Dark Green for Contained Buttons

- **Date:** 2026-07-31
- **Status:** Accepted
- **Context:** White text on primary green `#6C8977` is marginal for WCAG AA normal-text contrast.
- **Decision:** Keep `primary.main` as `#6C8977` for brand accents; style contained primary buttons with dark green `#557062` and a deeper hover `#465C51`.
- **Rationale:** Accessibility takes priority for interactive controls while preserving the approved green in the palette.
- **Consequences:** Documented in architecture and asset docs. Large green surfaces used for chrome should prefer dark green when carrying white text.

---

## ADR-017: Operational Privacy Notice Without Premature Legal Claims

- **Date:** 2026-07-31
- **Status:** Accepted
- **Context:** The site needs a public Privacy page before launch, but form/hosting/email providers, analytics, and legal applicability are not finalized.
- **Decision:** Ship an operational Privacy Notice at `/privacy` that documents only known data practices (Contact and Consultation forms, no analytics/ads in the current codebase). Keep provider names, privacy URLs, and `lastUpdated` empty until approved. Do not claim CCPA/GDPR/HIPAA/COPPA compliance or add cookie banners unless practices require them.
- **Rationale:** Honest, plain-language notice protects visitors better than boilerplate policies that invent trackers and legal rights.
- **Consequences:** Update `src/content/privacy.js` when providers or analytics change. Consider professional legal review before public launch, including California privacy-law applicability.
