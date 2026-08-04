/**
 * Public Google Business / Places config for HNM reviews.
 * Fill placeId + URLs when available. Only GOOGLE_PLACES_API_KEY stays secret.
 *
 * Place ID: Google Maps → business → Share → copy link, or Places API Place ID finder.
 * leaveReviewUrl: Google Business “Get more reviews” / write-a-review link.
 * businessProfileUrl: public Maps / Business Profile share link.
 */
export const googleReviewsConfig = {
  /** Google Place ID (e.g. ChIJ...). Not secret — safe to commit once known. */
  placeId: "",
  /** Public profile / Maps URL for “Find us on Google”. */
  businessProfileUrl: "",
  /**
   * Direct “Write a review” URL for the leave-a-review CTA.
   * Optional if sync can fill writeAReviewUri from Places API.
   */
  leaveReviewUrl: "",
  minRating: 4,
  homeLimit: 3,
  /** Places API returns at most 5 reviews; keep ≤5 in practice. */
  reviewsPageLimit: 6,
};
