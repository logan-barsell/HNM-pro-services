import { business } from "@/content/business";
import { routes } from "@/content/routes";

/**
 * Services page copy.
 * Final boundaries and specialty wording remain subject to client approval.
 */

export const servicesHero = {
  eyebrow: "Services",
  heading: "Dependable support for people, pets, and homes.",
  supporting:
    "HNM Professional Services offers thoughtful, personalized support designed around each client’s needs. Every new service relationship begins with a free consultation so expectations, scheduling, and care details can be discussed clearly.",
  primaryCta: {
    label: "Request a Free Consultation",
    href: routes.consultation,
  },
  secondaryCta: {
    label: "Contact HNM",
    href: routes.contact,
  },
};

export const serviceDetails = [
  {
    id: "pet-sitting",
    eyebrow: "Pets",
    title: "Pet Sitting & Dog Walking",
    description:
      "HNM provides dependable, personalized pet care intended to help pets remain comfortable, safe, and cared for while their owners are away or unavailable.",
    bulletsTitle: "Support that may be discussed",
    bullets: [
      "Scheduled dog walks",
      "In-home pet visits",
      "Feeding and fresh water",
      "Basic routine support",
      "Companionship and playtime",
      "Updates for the pet owner",
      "Care for small or boutique pets, subject to consultation",
    ],
    goodFitTitle: "Who it may be a good fit for",
    goodFit:
      "Pet owners who want attentive, personal care while they are away, at work, or otherwise unavailable—and who prefer to review routines and expectations together before service begins.",
    expectationNote:
      "Services are discussed and confirmed during the consultation. Availability, visit frequency, and any special requests are reviewed before care begins.",
    ctaLabel: "Discuss Pet Care Needs",
    ctaHref: routes.consultation,
    imageLabel: "Pet-care service image",
    imageAlt: "Future photograph representing pet sitting and dog walking care",
    mediaFirst: false,
  },
  {
    id: "companion-care",
    eyebrow: "Seniors",
    title: "Companion Care for Seniors",
    description:
      "HNM offers compassionate, nonmedical companionship intended to provide seniors with social connection, dependable presence, and practical everyday support.",
    bulletsTitle: "Support that may be discussed",
    bullets: [
      "Friendly conversation and companionship",
      "Spending quality time together",
      "Accompaniment during simple activities or errands, if approved",
      "Light organizational support",
      "Check-in visits",
      "Help maintaining familiar routines",
      "Communication with family members, where agreed",
      "General companionship based on the client’s individual needs",
    ],
    goodFitTitle: "Who it may be a good fit for",
    goodFit:
      "Seniors and families seeking warm, respectful companionship and practical everyday support—without medical, nursing, or emergency-care services.",
    boundaryNote:
      "HNM Professional Services does not provide medical care, nursing services, emergency response, or services that require a licensed healthcare professional. Final service boundaries will be discussed during the consultation.",
    expectationNote:
      "Each companion-care arrangement is shaped around the individual’s preferences and the support that can be offered within nonmedical service boundaries.",
    ctaLabel: "Discuss Companion Care",
    ctaHref: routes.consultation,
    imageLabel: "Senior companionship service image",
    imageAlt: "Future photograph representing nonmedical senior companion care",
    mediaFirst: true,
  },
  {
    id: "house-sitting",
    eyebrow: "Homes",
    title: "House Sitting & Home Checks",
    description:
      "HNM offers house-sitting and home-check services intended to give clients added peace of mind while they are traveling or temporarily away from home.",
    bulletsTitle: "Support that may be discussed",
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
    goodFitTitle: "Who it may be a good fit for",
    goodFit:
      "Homeowners and travelers who want a dependable presence and basic home monitoring while they are away, with responsibilities confirmed before service begins.",
    expectationNote:
      "Exact responsibilities are confirmed before service begins. House sitting and home checks are not security, maintenance, or emergency-response services.",
    ctaLabel: "Discuss Home-Care Needs",
    ctaHref: routes.consultation,
    imageLabel: "House-sitting service image",
    imageAlt: "Future photograph representing house sitting and home checks",
    mediaFirst: false,
  },
];

export const serviceRegions = {
  title: "Serving clients in the local community.",
  body: `HNM Professional Services serves clients within ${business.serviceRegion}. Availability may depend on location, scheduling, and the type of service requested.`,
  followUp:
    "Not sure whether your location is covered? Submit a consultation request or contact HNM to confirm availability.",
  primaryCta: {
    label: "Check Availability",
    href: routes.consultation,
  },
  secondaryCta: {
    label: "Contact HNM",
    href: routes.contact,
  },
  mapLabel: "Service area map",
  mapAlt: "Future map illustrating the approved local service area",
};

export const serviceProcess = {
  title: "How to get started",
  supporting:
    "Every new service relationship begins with a conversation. Submitting a consultation request does not guarantee acceptance or availability.",
  steps: [
    {
      number: "1",
      title: "Request a Free Consultation",
      description:
        "Share basic information about the service, location, timing, and the person, pet, or home involved.",
    },
    {
      number: "2",
      title: "Discuss Your Needs",
      description:
        "HNM will follow up to better understand expectations, routines, and availability.",
    },
    {
      number: "3",
      title: "Confirm the Service Plan",
      description:
        "The responsibilities, timing, communication preferences, and service boundaries are agreed upon before work begins.",
    },
    {
      number: "4",
      title: "Schedule Service",
      description: "Once details are confirmed, service dates can be arranged.",
    },
  ],
};

export const servicesFinalCta = {
  title: "Let’s talk about the support you need.",
  body: "Every client and situation is different. Start with a free consultation to discuss your needs, location, schedule, and next steps.",
  primaryCta: {
    label: "Request a Free Consultation",
    href: routes.consultation,
  },
  secondaryCta: {
    label: "Contact HNM",
    href: routes.contact,
  },
};
