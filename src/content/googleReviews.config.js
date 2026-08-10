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
  businessProfileUrl:
    "https://www.google.com/maps/place/HNM+Professional+Services/@33.5611935,-111.9523555,10z/data=!3m1!4b1!4m6!3m5!1s0x4ba2bdb83a946fef:0x4c6f1cb9e6b352d8!8m2!3d33.5611935!4d-111.9523556!16s%2Fg%2F11ntp69qsn",
  /**
   * Direct “Write a review” URL for the leave-a-review CTA.
   * Optional if sync can fill writeAReviewUri from Places API.
   */
  leaveReviewUrl: "https://g.page/r/CdhSs-a5HG9MEBM/review",
  minRating: 4,
  homeLimit: 3,
  /** Places API returns at most 5 reviews; keep ≤5 in practice. */
  reviewsPageLimit: 6,
};
