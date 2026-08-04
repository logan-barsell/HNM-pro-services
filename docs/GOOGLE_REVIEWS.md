# Google Reviews Setup

Status notes and next steps for the Google-only reviews sync on the HNM marketing site.

## What’s already built

- Google only (Yelp removed from the reviews platforms UI)
- Sync script: `npm run sync:reviews` → writes `src/content/googleReviews.generated.json`
- Weekly GitHub Action: `.github/workflows/sync-google-reviews.yml` (Mondays 14:00 UTC + manual `workflow_dispatch`)
- Filters: rating ≥ 4 · home max 3 · reviews page max 6  
  (Google Places API returns at most **5** reviews per Place Details response)
- Home and Reviews page render synced reviews in the site’s own cards
- “View on Google” link on a card when a review `sourceUrl` exists
- “Find HNM on Google” section with a Google mark
- “Leave a Google Review” CTA (appears when a leave-review URL is available)
- Privacy copy notes that reviews are synced into static content (no live browser widget)
- **Only secret:** `GOOGLE_PLACES_API_KEY`  
  Place ID and public profile / leave-review URLs live in code config (not env)

Hands-off updates mean: **weekly sync commits the generated JSON → your existing deploy-on-push pipeline** republishes to Nginx. This is not a live fetch on every page view (fits static export + DigitalOcean).

## Config to fill later

Edit `src/content/googleReviews.config.js`:

| Field | Required? | Purpose |
| --- | --- | --- |
| `placeId` | Yes (for sync) | Google Place ID (e.g. `ChIJ...`) |
| `businessProfileUrl` | Optional | Public Maps / Business Profile share link |
| `leaveReviewUrl` | Optional | Direct write-a-review link; sync may also populate `writeAReviewUri` from the API |

## When you pick this back up

### 1. Google Cloud

1. Enable **Places API (New)** on the Cloud project.
2. Create an API key restricted to that API.
3. Put the key in `.env.local`:

   ```bash
   GOOGLE_PLACES_API_KEY=your_key_here
   ```

4. Add the same value as GitHub Actions secret `GOOGLE_PLACES_API_KEY`.

### 2. Business Profile / Holly

1. Get the **Place ID** and paste it into `googleReviews.config.js`.
2. Optionally paste **profile URL** and **leave-a-review URL** into the same config.
3. Or rely on sync for `writeAReviewUri` once Place ID + API key work.

### 3. First sync

```bash
npm run sync:reviews
```

Confirm `src/content/googleReviews.generated.json` contains reviews, then check Home and `/reviews`.

Without a key or Place ID, the script soft-skips (exit 0) and leaves the generated file unchanged.

### 4. Automation

1. Confirm the weekly Action can push to the default branch (repo permissions / Actions settings).
2. Existing deploy-on-push should redeploy after the sync commit.
3. Or run **Sync Google Reviews** manually from the Actions tab anytime.

### 5. Sanity checks

- Empty states show until sync has real reviews.
- Leave-a-review button appears once a leave URL is set (config or synced URI).
- Attribution line appears under review grids when reviews are present.

## Handy paths

| Piece | Path |
| --- | --- |
| Config | `src/content/googleReviews.config.js` |
| Generated data | `src/content/googleReviews.generated.json` |
| Sync script | `scripts/sync-google-reviews.mjs` |
| Data helpers | `src/content/reviewsData.js` |
| Reviews copy / platforms | `src/content/reviews.js` |
| Weekly CI | `.github/workflows/sync-google-reviews.yml` |
| Env example | `.env.example` |
