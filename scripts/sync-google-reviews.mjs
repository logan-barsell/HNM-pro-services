#!/usr/bin/env node
/**
 * Fetch Google Place Details reviews and write googleReviews.generated.json.
 *
 * Requires:
 *   GOOGLE_PLACES_API_KEY  (secret — env / GitHub Actions secret)
 *   placeId in src/content/googleReviews.config.js
 *
 * Usage:
 *   npm run sync:reviews
 *
 * Soft-skips (exit 0) when key or placeId is missing so local/CI stays green
 * before credentials are configured.
 */

import { readFileSync, writeFileSync, existsSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = join(__dirname, "..");
const generatedPath = join(
  root,
  "src/content/googleReviews.generated.json",
);
const configPath = join(root, "src/content/googleReviews.config.js");

function loadEnvFiles() {
  for (const name of [".env.local", ".env"]) {
    const filePath = join(root, name);
    if (!existsSync(filePath)) {
      continue;
    }
    const text = readFileSync(filePath, "utf8");
    for (const line of text.split("\n")) {
      const trimmed = line.trim();
      if (!trimmed || trimmed.startsWith("#")) {
        continue;
      }
      const eq = trimmed.indexOf("=");
      if (eq === -1) {
        continue;
      }
      const key = trimmed.slice(0, eq).trim();
      let value = trimmed.slice(eq + 1).trim();
      if (
        (value.startsWith('"') && value.endsWith('"')) ||
        (value.startsWith("'") && value.endsWith("'"))
      ) {
        value = value.slice(1, -1);
      }
      if (process.env[key] === undefined) {
        process.env[key] = value;
      }
    }
  }
}

function slugId(input, index) {
  const base = String(input || `review-${index}`)
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "")
    .slice(0, 48);
  return base || `review-${index}`;
}

function formatDate(publishTime) {
  if (!publishTime) {
    return null;
  }
  const date = new Date(publishTime);
  if (Number.isNaN(date.getTime())) {
    return null;
  }
  return date.toISOString().slice(0, 7);
}

async function main() {
  loadEnvFiles();

  const apiKey = process.env.GOOGLE_PLACES_API_KEY?.trim();
  const configModule = await import(pathToFileURL(configPath).href);
  const config = configModule.googleReviewsConfig;
  const placeId = typeof config.placeId === "string" ? config.placeId.trim() : "";

  if (!apiKey || !placeId) {
    console.warn(
      "[sync:reviews] Skipping sync — set GOOGLE_PLACES_API_KEY and googleReviewsConfig.placeId.",
    );
    process.exit(0);
  }

  const fieldMask = [
    "id",
    "displayName",
    "rating",
    "userRatingCount",
    "googleMapsUri",
    "googleMapsLinks",
    "reviews",
  ].join(",");

  const url = `https://places.googleapis.com/v1/places/${encodeURIComponent(placeId)}`;
  const response = await fetch(url, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      "X-Goog-Api-Key": apiKey,
      "X-Goog-FieldMask": fieldMask,
    },
  });

  if (!response.ok) {
    const body = await response.text();
    console.error(
      `[sync:reviews] Places API error ${response.status}: ${body.slice(0, 500)}`,
    );
    process.exit(1);
  }

  const place = await response.json();
  const rawReviews = Array.isArray(place.reviews) ? place.reviews : [];

  const reviews = rawReviews
    .map((review, index) => {
      const quote =
        review?.text?.text?.trim() ||
        review?.originalText?.text?.trim() ||
        "";
      const rating =
        typeof review?.rating === "number" ? review.rating : null;
      const attribution =
        review?.authorAttribution?.displayName?.trim() || "Google user";
      const sourceUrl =
        review?.googleMapsUri?.trim() ||
        review?.authorAttribution?.uri?.trim() ||
        null;

      return {
        id: slugId(
          `${attribution}-${review?.publishTime || index}`,
          index,
        ),
        quote,
        attribution,
        platform: "Google",
        date: formatDate(review?.publishTime),
        relativeTime: review?.relativePublishTimeDescription || null,
        sourceUrl,
        rating,
      };
    })
    .filter((review) => review.quote.length > 0);

  const payload = {
    syncedAt: new Date().toISOString(),
    source: "google-places",
    placeId,
    displayName: place?.displayName?.text || null,
    rating: typeof place.rating === "number" ? place.rating : null,
    userRatingCount:
      typeof place.userRatingCount === "number"
        ? place.userRatingCount
        : null,
    googleMapsUri: place.googleMapsUri || null,
    writeAReviewUri: place.googleMapsLinks?.writeAReviewUri || null,
    reviewsUri: place.googleMapsLinks?.reviewsUri || null,
    reviews,
  };

  writeFileSync(generatedPath, `${JSON.stringify(payload, null, 2)}\n`, "utf8");
  console.log(
    `[sync:reviews] Wrote ${reviews.length} review(s) to src/content/googleReviews.generated.json`,
  );
}

main().catch((error) => {
  console.error("[sync:reviews] Unexpected failure:", error);
  process.exit(1);
});
