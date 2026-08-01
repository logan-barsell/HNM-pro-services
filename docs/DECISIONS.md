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
