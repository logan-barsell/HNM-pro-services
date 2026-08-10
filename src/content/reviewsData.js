import generated from "@/content/googleReviews.generated.json";
import { googleReviewsConfig } from "@/content/googleReviews.config";
import { placeholderReviews } from "@/content/placeholderReviews";
import { hasValidExternalUrl } from "@/utils/urls";

/**
 * Normalize + filter synced Google reviews for site surfaces.
 * Falls back to non-Google placeholder testimonials when sync is empty.
 */

function asReviews(data) {
  return Array.isArray(data?.reviews) ? data.reviews : [];
}

function normalizeGoogleReview(review) {
  return {
    id: review.id,
    quote: review.quote.trim(),
    attribution: review.attribution || "Google user",
    platform: review.platform || "Google",
    date: review.date || review.relativeTime || null,
    sourceUrl: review.sourceUrl || null,
    rating: review.rating,
    origin: "google",
  };
}

function normalizePlaceholderReview(review) {
  return {
    id: review.id,
    quote: review.quote.trim(),
    attribution: review.attribution,
    serviceCategory: review.serviceCategory || null,
    platform: null,
    date: null,
    sourceUrl: null,
    rating: review.rating,
    origin: "site",
  };
}

export function getFilteredGoogleReviews({ limit } = {}) {
  const minRating = googleReviewsConfig.minRating ?? 4;
  const filtered = asReviews(generated)
    .filter(
      (review) =>
        typeof review?.quote === "string" &&
        review.quote.trim().length > 0 &&
        typeof review?.rating === "number" &&
        review.rating >= minRating,
    )
    .map(normalizeGoogleReview);

  if (typeof limit === "number" && limit >= 0) {
    return filtered.slice(0, limit);
  }

  return filtered;
}

function getPlaceholderReviews({ limit } = {}) {
  const items = placeholderReviews
    .filter(
      (review) =>
        typeof review?.quote === "string" && review.quote.trim().length > 0,
    )
    .map(normalizePlaceholderReview);

  if (typeof limit === "number" && limit >= 0) {
    return items.slice(0, limit);
  }

  return items;
}

/** Prefer synced Google reviews; otherwise show on-site placeholders. */
export function getDisplayReviews({ limit } = {}) {
  const google = getFilteredGoogleReviews({ limit });
  if (google.length > 0) {
    return google;
  }
  return getPlaceholderReviews({ limit });
}

export function getHomeReviews() {
  return getDisplayReviews({ limit: googleReviewsConfig.homeLimit });
}

export function getReviewsPageTestimonials() {
  return getDisplayReviews({
    limit: googleReviewsConfig.reviewsPageLimit,
  });
}

export function hasSyncedGoogleReviews() {
  return getFilteredGoogleReviews({ limit: 1 }).length > 0;
}

export function getGoogleLeaveReviewUrl() {
  const fromConfig = googleReviewsConfig.leaveReviewUrl?.trim();
  if (hasValidExternalUrl(fromConfig)) {
    return fromConfig.trim();
  }
  const fromSync = generated.writeAReviewUri?.trim();
  if (hasValidExternalUrl(fromSync)) {
    return fromSync;
  }
  return "";
}

export function getGoogleBusinessProfileUrl() {
  const fromConfig = googleReviewsConfig.businessProfileUrl?.trim();
  if (hasValidExternalUrl(fromConfig)) {
    return fromConfig.trim();
  }
  const fromSync =
    generated.reviewsUri?.trim() || generated.googleMapsUri?.trim();
  if (hasValidExternalUrl(fromSync)) {
    return fromSync;
  }
  return "";
}

export function getGoogleReviewsMeta() {
  return {
    syncedAt: generated.syncedAt,
    rating: generated.rating,
    userRatingCount: generated.userRatingCount,
    displayName: generated.displayName,
  };
}
