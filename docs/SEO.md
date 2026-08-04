# Ongoing SEO

What launched with the initial SEO setup, and what to do next. SEO is continuous—this doc is the backlog after the strong baseline is live.

## Already in place (v1)

| Area | Where |
| --- | --- |
| Production `metadataBase` / canonicals | `src/content/business.js` (`siteUrl`), `src/utils/metadata.js` |
| Per-page titles & descriptions | `src/content/seo.js` |
| Open Graph + Twitter image | `/brand/HNM_OG.png` via layout + `createPageMetadata` |
| JSON-LD `ProfessionalService` + `WebSite` | `src/content/structuredData.js` → root layout |
| JSON-LD `BreadcrumbList` | Non-home `src/app/*/page.js` |
| Sitemap + robots | `src/app/sitemap.js`, `src/app/robots.js` |
| Favicons + web manifest | `public/brand/` |

**Do not invent** street address, hours, price range, credentials, or ratings in schema or copy. See [CONTENT_GUIDELINES.md](./CONTENT_GUIDELINES.md).

---

## Next: Google Search Console

- [ ] Create/verify a Search Console property for `https://hnmproservices.com` (Holly’s Google account preferred)
- [ ] Prefer **DNS TXT** verification at GoDaddy (keeps ownership with the domain) or HTML file upload to the web root via deploy
- [ ] If using meta-tag verification, add the token only after Holly provides it—do not invent a tag
- [ ] Submit `https://hnmproservices.com/sitemap.xml`
- [ ] Confirm apex is primary; `www` should already 301 to apex
- [ ] Spot-check Coverage / Page indexing after the first crawl
- [ ] Optional: set preferred domain / inspect key URLs (home, services, consultation)

---

## Next: Google Business Profile

Complements on-site SEO for local discovery. Coordinates with [GOOGLE_REVIEWS.md](./GOOGLE_REVIEWS.md).

- [ ] Confirm Holly’s GBP is claimed and accurate (name, phone, service areas, categories)
- [ ] Align website URL on GBP with `https://hnmproservices.com`
- [ ] Fill `placeId` (+ profile / leave-review URLs) in `src/content/googleReviews.config.js`
- [ ] Run / enable reviews sync so the site shows live Google reviews
- [ ] When `rating` / `userRatingCount` exist in `googleReviews.generated.json`, consider adding `AggregateRating` to JSON-LD (**only** from synced data—never hard-code)
- [ ] Keep GBP categories/services consistent with site copy (pet sitting, companion care, house sitting—nonmedical)

---

## Next: Content & URL growth

- [ ] Per-service landing pages (e.g. `/services/pet-sitting/`) if organic demand justifies them—requires routing + content + sitemap entries under static export
- [ ] Location-flavored pages only if truthful (East Valley cities already listed sitewide; avoid thin doorway pages)
- [ ] Short FAQ block on Services or Consultation (schema `FAQPage` only if the FAQs are visible on-page)
- [ ] Occasional blog / tips only if Holly will maintain it; empty blogs hurt more than they help
- [ ] Refresh meta descriptions when offers, regions, or CTAs change (`src/content/seo.js`)

---

## Next: Measurement (optional)

No analytics are required for launch. If added later:

- [ ] Choose a privacy-respecting tool (e.g. Plausible, Fathom, or GA4)
- [ ] Update [privacy.js](../src/content/privacy.js) before enabling (`analyticsEnabled`, cookies section, provider links)
- [ ] Avoid marketing pixels until privacy copy and consent needs are reviewed
- [ ] Track primary conversions: consultation submits, contact submits, click-to-call / mailto (as events if the tool supports them)

---

## Next: Technical hygiene (periodic)

- [ ] Re-test social previews after OG changes ([Facebook Sharing Debugger](https://developers.facebook.com/tools/debug/), LinkedIn inspector, etc.)
- [ ] Validate JSON-LD after schema changes ([Rich Results Test](https://search.google.com/test/rich-results))
- [ ] Confirm `sitemap.xml` and `robots.txt` on production after deploys
- [ ] Watch Core Web Vitals casually (hero video weight, image sizes)—static export keeps this simpler
- [ ] After Formspree (or other) goes live, no SEO change required unless new third-party scripts are added

---

## Suggested order

1. Search Console verify + sitemap submit  
2. GBP + reviews sync + Place ID  
3. AggregateRating in JSON-LD once ratings exist  
4. Measurement (if Holly wants it) + privacy update  
5. Extra landing pages / FAQ only with real content demand  

## Related docs

- [ARCHITECTURE.md](./ARCHITECTURE.md) — current SEO implementation notes  
- [GOOGLE_REVIEWS.md](./GOOGLE_REVIEWS.md) — reviews sync  
- [LAUNCH_CHECKLIST.md](./LAUNCH_CHECKLIST.md) — go-live hosting / forms  
- [CONTENT_GUIDELINES.md](./CONTENT_GUIDELINES.md) — copy safety  
