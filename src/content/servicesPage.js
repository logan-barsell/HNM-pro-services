import { business } from "@/content/business";
import { brandAssets } from "@/content/assets";
import { routes } from "@/content/routes";

/**
 * Services page copy.
 * Voice: first person (Holly). Boundaries remain explicit and nonmedical.
 */

export const servicesHero = {
  eyebrow: "Services",
  heading: "Support shaped around your household.",
  supporting:
    "I offer pet care, nonmedical senior companionship, and house sitting—always starting with a free consultation so we can talk through expectations, scheduling, and details together.",
  primaryCta: {
    label: "Request a Free Consultation",
    href: routes.consultation,
  },
  secondaryCta: {
    label: "Get in Touch",
    href: routes.contact,
  },
};

export const serviceDetails = [
  {
    id: "pet-sitting",
    eyebrow: "Pets",
    title: "Pet Sitting & Dog Walking",
    description:
      "When you can’t be there, I can help keep your pets comfortable with walks, visits, feeding, and the little routines that matter. We’ll review everything together before care begins.",
    bulletsTitle: "What we can talk about",
    bullets: [
      "Scheduled dog walks",
      "In-home pet visits",
      "Feeding and fresh water",
      "Basic routine support",
      "Companionship and playtime",
      "Updates for you while you’re away",
      "Care for small or boutique pets, subject to consultation",
    ],
    goodFitTitle: "A good fit if…",
    goodFit:
      "You’re looking for attentive, personal pet care while you’re away, at work, or otherwise unavailable—and you’d rather review routines and expectations together before service begins.",
    expectationNote:
      "We’ll discuss and confirm services during the consultation. Availability, visit frequency, and any special requests are reviewed before care begins.",
    ctaLabel: "Discuss Pet Care Needs",
    ctaHref: routes.consultation,
    imageLabel: "Pet-care service image",
    imageAlt: "Pet sitting and dog walking care",
    imageSrc: brandAssets.petCare,
    mediaFirst: false,
  },
  {
    id: "companion-care",
    eyebrow: "Seniors",
    title: "Companion Care for Seniors",
    description:
      "I offer warm, nonmedical companionship—conversation, company, and practical everyday support so seniors (and families) feel a little less alone.",
    bulletsTitle: "What we can talk about",
    bullets: [
      "Friendly conversation and companionship",
      "Spending quality time together",
      "Accompaniment during simple activities or errands, if approved",
      "Light organizational support",
      "Check-in visits",
      "Help maintaining familiar routines",
      "Communication with family members, where agreed",
      "Companionship shaped around individual preferences",
    ],
    goodFitTitle: "A good fit if…",
    goodFit:
      "You’re looking for warm, respectful companionship and practical everyday support—without medical, nursing, or emergency-care services.",
    boundaryNote:
      "I do not provide medical care, nursing services, emergency response, or services that require a licensed healthcare professional. We’ll talk through service boundaries during the consultation.",
    expectationNote:
      "Each companion-care arrangement is shaped around the individual’s preferences and the support I can offer within nonmedical service boundaries.",
    ctaLabel: "Discuss Companion Care",
    ctaHref: routes.consultation,
    imageLabel: "Senior companionship service image",
    imageAlt: "Nonmedical senior companion care",
    imageSrc: brandAssets.seniorCare,
    mediaFirst: true,
  },
  {
    id: "house-sitting",
    eyebrow: "Homes",
    title: "House Sitting & Home Checks",
    description:
      "If you’re traveling or away, I can check in on your home—mail, plants, lights, a quick look around—and keep you updated so you can rest a little easier.",
    bulletsTitle: "What we can talk about",
    bullets: [
      "Scheduled home visits",
      "Checking doors and visible areas",
      "Bringing in mail or packages",
      "Watering plants",
      "Adjusting lights or blinds",
      "Basic visual checks for obvious concerns",
      "Coordinating pet-care tasks when included in the agreed service",
      "Providing updates after visits",
    ],
    goodFitTitle: "A good fit if…",
    goodFit:
      "You want a dependable presence and basic home monitoring while you’re away, with responsibilities confirmed before service begins.",
    expectationNote:
      "We’ll confirm exact responsibilities before service begins. House sitting and home checks are not security, maintenance, or emergency-response services.",
    ctaLabel: "Discuss Home-Care Needs",
    ctaHref: routes.consultation,
    imageLabel: "House-sitting service image",
    imageAlt: "House sitting and home checks",
    imageSrc: brandAssets.homeCare,
    mediaFirst: false,
  },
];

export const serviceRegions = {
  title: "Serving Clients in the Local Community.",
  body: `I serve clients in ${business.serviceRegion}. Availability may depend on location, scheduling, and the type of service requested.`,
  followUp:
    "Not sure whether your location is covered? Send a consultation request or get in touch—I’m happy to check.",
  primaryCta: {
    label: "Check Availability",
    href: routes.consultation,
  },
  secondaryCta: {
    label: "Get in Touch",
    href: routes.contact,
  },
  mapSrc: brandAssets.serviceAreaMap,
  mapAlt:
    "Illustrated map of the HNM service area covering Scottsdale, Phoenix, Tempe, Chandler, Mesa, and Gilbert, Arizona",
};

export const servicesFinalCta = {
  title: "Let’s talk about the support you need.",
  body: "Every household is different. Start with a free consultation so we can discuss your needs, location, schedule, and next steps.",
  primaryCta: {
    label: "Request a Free Consultation",
    href: routes.consultation,
  },
  secondaryCta: {
    label: "Get in Touch",
    href: routes.contact,
  },
};
