# Google Reviews Setup

Status notes and next steps for the Google reviews integration on the HNM marketing site.

## Current status (launch path)

- `businessProfileUrl` and `leaveReviewUrl` are configured in `src/content/googleReviews.config.js`
- **Place ID is not available yet** (service-area / Places API cannot resolve the listing). Sync stays disabled until a real `ChIJ…` Place ID appears.
- Until sync works, Home + Reviews show **on-site placeholder testimonials** from `src/content/placeholderReviews.js`
- Placeholders are **not** labeled as Google reviews (no Google platform line, no “View on Google”, no Google attribution footer)
- “Find HNM on Google” and “Leave a Google Review” still use the real profile / leave-review links
- Shareable client link (scrolls to the leave-review CTA): `/reviews/#leave-a-review`  
  Full URL once live: `https://hnmproservices.com/reviews/#leave-a-review`  
  (Holly can also share the direct Google `g.page` leave-review URL for the shortest path.)

When Places sync starts returning reviews, placeholders are replaced automatically and Google labeling returns only for synced items.

## What’s already built

- Google only (Yelp removed from the reviews platforms UI)
- Sync script: `npm run sync:reviews` → writes `src/content/googleReviews.generated.json`
- Weekly GitHub Action: `.github/workflows/sync-google-reviews.yml` (Mondays 14:00 UTC + manual `workflow_dispatch`)
- Filters: rating ≥ 4 · home max 3 · reviews page max 6  
  (Google Places API returns at most **5** reviews per Place Details response)
- Home and Reviews page render synced reviews in the site’s own cards (or placeholders when sync is empty)
- “View on Google” link on a card when a review `sourceUrl` exists (synced only)
- “Find HNM on Google” section with a Google mark
- “Leave a Google Review” CTA (appears when a leave-review URL is available)
- Privacy copy notes that reviews are synced into static content (no live browser widget)
- **Only secret:** `GOOGLE_PLACES_API_KEY`  
  Place ID and public profile / leave-review URLs live in code config (not env)

Hands-off updates mean: **weekly sync commits the generated JSON → your existing deploy-on-push pipeline** republishes to Nginx. This is not a live fetch on every page view (fits static export + DigitalOcean).

## Config

Edit `src/content/googleReviews.config.js`:

| Field | Required? | Purpose |
| --- | --- | --- |
| `placeId` | Yes (for sync) | Google Place ID (e.g. `ChIJ...`) — still pending |
| `businessProfileUrl` | Optional | Public Maps / Business Profile share link — configured |
| `leaveReviewUrl` | Optional | Direct write-a-review link — configured |

## When Place ID becomes available

### 1. Google Cloud

1. Enable **Places API (New)** on the Cloud project (and legacy **Places API** if using CID/debug tools).
2. Create an API key restricted to Places API (New) [+ Places API if needed].
3. Put the key in `.env.local`:

   ```bash
   GOOGLE_PLACES_API_KEY=your_key_here
   ```

4. Add the same value as GitHub Actions secret `GOOGLE_PLACES_API_KEY`.

### 2. Business Profile / Holly

1. Paste the **Place ID** into `googleReviews.config.js` when Text Search returns **HNM Professional Services**.
2. Profile / leave-review URLs are already set.

### 3. First sync

```bash
npm run sync:reviews
```

Confirm `src/content/googleReviews.generated.json` contains reviews, then check Home and `/reviews`. Synced Google reviews replace placeholders automatically.

Without a key or Place ID, the script soft-skips (exit 0) and leaves the generated file unchanged.

### 4. Automation

1. Confirm the weekly Action can push to the default branch (repo permissions / Actions settings).
2. Existing deploy-on-push should redeploy after the sync commit.
3. Or run **Sync Google Reviews** manually from the Actions tab anytime.

### 5. Sanity checks

- Empty states show only when both sync and placeholders are empty.
- Leave-a-review button appears once a leave URL is set (config or synced URI).
- Google attribution line appears under review grids **only** when synced Google reviews are showing.

## Handy paths

| Piece | Path |
| --- | --- |
| Config | `src/content/googleReviews.config.js` |
| Placeholders | `src/content/placeholderReviews.js` |
| Generated data | `src/content/googleReviews.generated.json` |
| Sync script | `scripts/sync-google-reviews.mjs` |
| Data helpers | `src/content/reviewsData.js` |
| Reviews copy / platforms | `src/content/reviews.js` |
| Weekly CI | `.github/workflows/sync-google-reviews.yml` |
| Env example | `.env.example` |
