import { routes } from "@/content/routes";
import { pageSeo } from "@/content/seo";
import {
  getGoogleBusinessProfileUrl,
  getGoogleLeaveReviewUrl,
  getReviewsPageTestimonials,
  hasSyncedGoogleReviews,
} from "@/content/reviewsData";
import { hasValidExternalUrl } from "@/utils/urls";

/**
 * Reviews page content.
 * Voice: first person (Holly). Google reviews sync via npm run sync:reviews
 * when Place ID is available; until then on-site placeholders may display
 * (never labeled as Google reviews).
 */

export { hasValidExternalUrl, hasSyncedGoogleReviews };

export const reviewsHero = {
  eyebrow: "Client Reviews",
  heading: "Trust is built one visit at a time.",
  supporting:
    "I care about doing right by the people, pets, and homes I’m invited into. Here’s a look at the kind of care families can expect when we work together.",
  primaryCta: {
    label: "Request a Free Consultation",
    href: routes.consultation,
  },
  secondaryCta: {
    label: "Explore Services",
    href: routes.services,
  },
};

/** Synced Google reviews when available; otherwise on-site placeholders. */
export const testimonials = getReviewsPageTestimonials();

export const clientsValue = {
  title: "What You Can Expect From Me",
  supporting:
    "These are the standards I hold myself to in every service relationship. They’re commitments to the work—not claims about any single review.",
  items: [
    {
      id: "communication",
      title: "Dependable communication",
      description:
        "You should know what to expect, how updates will be shared, and how to reach me with questions.",
    },
    {
      id: "respect",
      title: "Respect for routines and preferences",
      description:
        "Each household has its own rhythms. I aim to honor those preferences and boundaries.",
    },
    {
      id: "compassion",
      title: "Compassionate, personal attention",
      description:
        "Support should feel warm, patient, and attentive to the person, pet, or home involved.",
    },
    {
      id: "expectations",
      title: "Clear expectations before service begins",
      description:
        "Responsibilities and boundaries are discussed during the consultation and confirmed before work starts.",
    },
    {
      id: "updates",
      title: "Thoughtful updates when agreed",
      description:
        "When updates are part of our plan, they should be clear, timely, and useful.",
    },
  ],
};

export const reviewPlatforms = {
  title: "Find HNM on Google",
  supporting:
    "Visit the HNM Professional Services profile on Google, or leave a review if we’ve worked together.",
  pendingNote:
    "Google profile links will appear here once the Business Profile URLs are configured.",
  google: {
    label: "View HNM on Google",
    clickNote: "Click to view my Google Business Profile",
    unavailableLabel: "Google profile coming soon",
    get url() {
      return getGoogleBusinessProfileUrl();
    },
  },
};

export const reviewSubmission = {
  title: "Already worked with me?",
  body: "If we’ve worked together, a Google review helps other families know what to expect. Thank you for taking a moment to share your experience.",
  pendingBody:
    "Once the Google leave-a-review link is configured, past clients will be able to share feedback directly from this page.",
  ctaLabel: "Leave a Google Review",
  /** Site path Holly can share with clients (scrolls to this section). */
  sharePath: routes.leaveReview,
  get leaveReviewUrl() {
    return getGoogleLeaveReviewUrl();
  },
};

export const reviewsFinalCta = {
  title: "Ready to discuss the support you need?",
  body: "Every new client begins with a conversation. Share a little about your needs, location, and timing, and I’ll follow up to talk through next steps.",
  primaryCta: {
    label: "Request a Free Consultation",
    href: routes.consultation,
  },
  secondaryCta: {
    label: "Explore Services",
    href: routes.services,
  },
};

export const reviewsSeoDescription = pageSeo[routes.reviews].description;

/** Shown only when displayed testimonials come from Google Places sync. */
export const reviewsAttribution =
  "Reviews are sourced from Google and updated automatically. Google and the Google logo are trademarks of Google LLC.";
