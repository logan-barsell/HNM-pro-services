import { business, services as baseServices } from "@/content/business";
import { brandAssets } from "@/content/assets";
import { routes } from "@/content/routes";

/**
 * Home-page copy and section data.
 * Keep client unknowns as placeholders; do not invent reviews, regions, or media.
 */

export const homeHero = {
  eyebrow: business.tagline,
  heading:
    "Compassionate, dependable assistance for seniors, pets, homes, and the people who care about them.",
  supporting:
    "HNM Professional Services offers warm, personal support for everyday care needs—so you can feel confident that what matters most is in good hands.",
  primaryCta: {
    label: "Request a Free Consultation",
    href: routes.consultation,
  },
  secondaryCta: {
    label: "Explore Services",
    href: routes.services,
  },
  videoSrc: brandAssets.heroVideo,
  posterSrc: null,
  mediaPlaceholder:
    "Hero lifestyle video and poster image will be added here when media assets are ready.",
};

export const homeIntro = {
  title: "A personal approach to everyday care",
  body: "Whether you need a trusted companion for a loved one, reliable care for your pets, or peace of mind while you are away from home, HNM Professional Services is here to help with clear communication and thoughtful support.",
  imageSrc: brandAssets.homeSupporting1,
  imageAlt:
    "Supportive care scene representing HNM Professional Services",
  imagePlaceholder:
    "Supporting photo will be added when client imagery is available.",
};

export const homeServices = baseServices.map((service) => ({
  ...service,
  href: routes.services,
  learnMoreLabel: "Learn More",
}));

export const homeMission = {
  lines: ["Supporting People,", "Cherishing Pets."],
  body: "We believe care should feel personal, calm, and dependable—rooted in respect for the people, pets, and homes we serve.",
};

export const homeTrustPoints = [
  {
    id: "compassionate",
    title: "Compassionate Care",
    description: "Thoughtful support delivered with patience, kindness, and respect.",
  },
  {
    id: "communication",
    title: "Dependable Communication",
    description: "Clear updates and responsive conversation so you always know what to expect.",
  },
  {
    id: "flexible",
    title: "Flexible Scheduling",
    description: "Care planned around real life, with practical availability whenever possible.",
  },
  {
    id: "trusted",
    title: "Trusted Support",
    description: "A steady, professional presence you can count on when you need help.",
  },
  {
    id: "personal",
    title: "Personal Service",
    description: "Attention that feels human and local—not corporate or impersonal.",
  },
  {
    id: "local",
    title: "Local Business",
    description: "A small service dedicated to the community we serve.",
  },
];

export const homeAboutPreview = {
  title: "About HNM",
  body: "[CLIENT BIO REQUIRED] A short introduction to the person behind HNM Professional Services will appear here once approved biography content is provided.",
  portraitSrc: brandAssets.ownerPortrait,
  portraitAlt: "Owner of HNM Professional Services",
  portraitPlaceholder: "Owner portrait will be added when photography is available.",
  cta: { label: "Read More", href: routes.about },
};

export const homeReviewsPreview = {
  title: "What Clients Are Saying",
  note: "Approved client testimonials will be added before launch. The cards below are layout placeholders only.",
  placeholders: [
    {
      id: "review-1",
      quote: "[APPROVED TESTIMONIAL]",
      attribution: "Client name pending approval",
    },
    {
      id: "review-2",
      quote: "[APPROVED TESTIMONIAL]",
      attribution: "Client name pending approval",
    },
    {
      id: "review-3",
      quote: "[APPROVED TESTIMONIAL]",
      attribution: "Client name pending approval",
    },
  ],
  cta: { label: "View All Reviews", href: routes.reviews },
};

export const homeServiceArea = {
  title: "Where We Serve",
  body: `HNM Professional Services provides local support within ${business.serviceRegion}. Final coverage details will be confirmed with the client before launch.`,
  mapPlaceholder: "Service-area map or illustration will be added when available. Do not invent city lists.",
};

export const homeFinalCta = {
  title: "Ready to talk through your needs?",
  body: "Request a free consultation to share what kind of support you are looking for. Submitting a request starts a conversation—it does not confirm a booking.",
  cta: {
    label: "Request a Free Consultation",
    href: routes.consultation,
  },
};
