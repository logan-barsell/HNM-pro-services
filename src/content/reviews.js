import { routes } from "@/content/routes";

/**
 * Reviews page content.
 * Do not invent testimonials, ratings, names, or platform profile URLs.
 */

export const reviewsHero = {
  eyebrow: "Client Reviews",
  heading: "Trust is built through every experience.",
  supporting:
    "HNM Professional Services is committed to providing thoughtful, dependable support for people, pets, and homes. Approved client feedback will be shared here to help prospective clients understand what working with HNM is like.",
  primaryCta: {
    label: "Request a Free Consultation",
    href: routes.consultation,
  },
  secondaryCta: {
    label: "Explore Services",
    href: routes.services,
  },
};

/**
 * Approved testimonials only. Keep this array empty until real reviews are approved.
 * Do not add sample/demo reviews to the production path.
 *
 * Example shape when available:
 * {
 *   id: "t1",
 *   quote: "...",
 *   attribution: "Approved name or initials",
 *   serviceCategory: "Pet Sitting & Dog Walking",
 *   platform: "Google",
 *   date: "2026-01",
 *   sourceUrl: "https://...",
 *   rating: 5, // only when verified and approved
 * }
 */
export const testimonials = [];

export const clientsValue = {
  title: "What HNM aims to provide",
  supporting:
    "These principles guide how HNM approaches every service relationship. They are commitments to the work—not claims that every client has already left a public review.",
  items: [
    {
      id: "communication",
      title: "Dependable communication",
      description:
        "Clients should know what to expect, how updates will be shared, and who to contact with questions.",
    },
    {
      id: "respect",
      title: "Respect for routines and preferences",
      description:
        "Each household has its own rhythms. HNM aims to honor those preferences and boundaries.",
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
        "When updates are part of the agreed plan, they should be clear, timely, and useful.",
    },
  ],
};

export const reviewPlatforms = {
  title: "Find HNM on review platforms",
  temporaryNote:
    "Google and Yelp profile links will be added once the business listings are finalized.",
  google: {
    label: "Read more reviews on Google",
    unavailableLabel: "Google reviews coming soon",
    // Set only to the full business-profile URL when approved.
    url: "",
  },
  yelp: {
    label: "View HNM on Yelp",
    unavailableLabel: "Yelp profile coming soon",
    // Set only to the full business-profile URL when approved.
    url: "",
  },
};

/**
 * Empty strings and whitespace are not valid links.
 * Only http(s) profile URLs should render as anchors.
 */
export function hasValidExternalUrl(url) {
  if (typeof url !== "string") {
    return false;
  }

  const trimmed = url.trim();
  if (!trimmed) {
    return false;
  }

  try {
    const parsed = new URL(trimmed);
    return parsed.protocol === "http:" || parsed.protocol === "https:";
  } catch {
    return false;
  }
}

export const reviewSubmission = {
  title: "Already worked with HNM?",
  body: "Feedback helps small local businesses grow and gives future clients a clearer idea of what to expect. Once the official review profiles are available, clients will be able to share their experience through the appropriate platform.",
};

export const reviewsFinalCta = {
  title: "Ready to discuss the support you need?",
  body: "Every new client begins with a conversation. Share a little about your needs, location, and timing, and HNM will follow up to discuss the next steps.",
  primaryCta: {
    label: "Request a Free Consultation",
    href: routes.consultation,
  },
  secondaryCta: {
    label: "Explore Services",
    href: routes.services,
  },
};

/** Temporary meta description while no public testimonials are published. */
export const reviewsSeoDescription =
  "Learn about the values and client-focused approach behind HNM Professional Services. Approved testimonials and review links will be added as they become available.";
