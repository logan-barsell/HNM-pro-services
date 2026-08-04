import { business, services as baseServices } from "@/content/business";
import { brandAssets } from "@/content/assets";
import { routes } from "@/content/routes";

/**
 * Home-page copy and section data.
 * Voice: first person (Holly). Do not invent reviews or unfinished media.
 */

export const homeHero = {
  eyebrow: business.tagline,
  heading:
    "Compassionate, dependable assistance for seniors, pets, homes, and the people who care about them.",
  supporting:
    "Hi—I’m Holly. Through HNM Professional Services, I offer warm, personal support for everyday care in the East Valley. Let’s talk about what you need.",
  primaryCta: {
    label: "Request a Free Consultation",
    href: routes.consultation,
  },
  secondaryCta: {
    label: "Explore Services",
    href: routes.services,
  },
  videoSrc: brandAssets.heroVideo,
  posterSrc: brandAssets.heroPoster,
  mediaPlaceholder:
    "Hero lifestyle video and poster image will be added here when media assets are ready.",
};

export const homeIntro = {
  title: "A personal approach to everyday care.",
  body: "Whether you need company for a loved one, reliable care for your pets, or someone to look after your home while you’re away, I’m here to help—with clear communication and support that fits your household.",
  imageSrc: brandAssets.homeSupporting1,
  imageAlt: "A calm, supportive care moment at home",
  imagePlaceholder:
    "Supporting photo will be added when client imagery is available.",
};

export const homeServices = baseServices.map((service) => ({
  ...service,
  href: `${routes.services}#${service.id}`,
  learnMoreLabel: "Learn More",
}));

export const homeMission = {
  lines: ["Supporting People,", "Cherishing Pets."],
  body: "I believe care should feel personal, calm, and dependable—rooted in respect for the people, pets, and homes I’m trusted with.",
};

export const homeTrustPoints = [
  {
    id: "compassionate",
    title: "Compassionate Care",
    description:
      "Thoughtful support delivered with patience, kindness, and respect.",
  },
  {
    id: "communication",
    title: "Dependable Communication",
    description:
      "Clear updates and responsive conversation so you always know what to expect.",
  },
  {
    id: "flexible",
    title: "Flexible Scheduling",
    description:
      "Care planned around real life, with practical availability whenever possible.",
  },
  {
    id: "trusted",
    title: "Trusted Support",
    description:
      "A steady presence you can count on when you need an extra hand.",
  },
  {
    id: "personal",
    title: "Personal Service",
    description:
      "You work directly with me—attention that feels human and local, not corporate.",
  },
  {
    id: "local",
    title: "Local Business",
    description:
      "A small East Valley service dedicated to the community I serve.",
  },
];

export const homeAboutPreview = {
  title: "About Holly",
  body: "I’m Holly Abbott, the person behind HNM Professional Services. I started this work to offer the kind of support I’d want for my own family—steady, kind, and easy to talk to.",
  portraitSrc: brandAssets.ownerPortrait,
  portraitAlt: "Holly Abbott, owner of HNM Professional Services",
  portraitPlaceholder:
    "Owner portrait will be added when photography is available.",
  cta: { label: "Read More", href: routes.about },
};

export const homeReviewsPreview = {
  title: "What Clients Are Saying",
  supporting: "Recent Google reviews from families I’ve worked with.",
  emptyNote:
    "Google reviews will appear here once the Business Profile sync is connected.",
  cta: { label: "View All Reviews", href: routes.reviews },
};

export const homeServiceArea = {
  title: "Where I Serve",
  body: `I provide local support in ${business.serviceRegion}. Availability may depend on location, scheduling, and the type of help you need—if you’re nearby and not sure, just ask.`,
  mapSrc: brandAssets.serviceAreaMap,
  mapAlt:
    "Illustrated map of the HNM service areaa covering Scottsdale, Phoenix, Tempe, Chandler, Mesa, and Gilbert, Arizona",
};

export const homeFinalCta = {
  title: "Ready to talk it through?",
  body: "Tell me a little about what you need. A free consultation starts the conversation—it doesn’t lock in a booking.",
  cta: {
    label: "Request a Free Consultation",
    href: routes.consultation,
  },
};
