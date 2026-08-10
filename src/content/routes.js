export const routes = {
  home: "/",
  services: "/services",
  about: "/about",
  gallery: "/gallery",
  reviews: "/reviews",
  /** Shareable deep link to the leave-a-review CTA on the Reviews page. */
  leaveReview: "/reviews/#leave-a-review",
  consultation: "/consultation",
  contact: "/contact",
  privacy: "/privacy",
};

export const publicRoutes = [
  routes.home,
  routes.services,
  routes.about,
  routes.gallery,
  routes.reviews,
  routes.consultation,
  routes.contact,
  routes.privacy,
];
