import generated from "@/content/googleReviews.generated.json";
import { googleReviewsConfig } from "@/content/googleReviews.config";
import { hasValidExternalUrl } from "@/utils/urls";

/**
 * Normalize + filter synced Google reviews for site surfaces.
 */

function asReviews(data) {
  return Array.isArray(data?.reviews) ? data.reviews : [];
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
    .map((review) => ({
      id: review.id,
      quote: review.quote.trim(),
      attribution: review.attribution || "Google user",
      platform: review.platform || "Google",
      date: review.date || review.relativeTime || null,
      sourceUrl: review.sourceUrl || null,
      rating: review.rating,
    }));

  if (typeof limit === "number" && limit >= 0) {
    return filtered.slice(0, limit);
  }

  return filtered;
}

export function getHomeReviews() {
  return getFilteredGoogleReviews({ limit: googleReviewsConfig.homeLimit });
}

export function getReviewsPageTestimonials() {
  return getFilteredGoogleReviews({
    limit: googleReviewsConfig.reviewsPageLimit,
  });
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
