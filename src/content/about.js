import { business } from "@/content/business";
import { brandAssets } from "@/content/assets";
import { routes } from "@/content/routes";

/**
 * About page copy.
 * Biography and qualifications remain placeholders until client-approved.
 */

export const aboutHero = {
  eyebrow: "About HNM",
  heading: "Personal support begins with trust.",
  supporting:
    "HNM Professional Services is built around dependable communication, thoughtful care, and respect for the people, pets, and homes entrusted to its care.",
  primaryCta: {
    label: "Request a Free Consultation",
    href: routes.consultation,
  },
  secondaryCta: {
    label: "Explore Services",
    href: routes.services,
  },
};

export const ownerIntroduction = {
  ownerName: null, // Set when approved, e.g. "Jane Smith"
  heading: "Meet the person behind HNM",
  paragraphs: [
    "More about the owner of HNM Professional Services will be added here once the final biography is approved.",
    "Until then, this page introduces the values and approach that guide every service relationship—clear communication, respectful care, and support shaped around each client’s needs.",
  ],
  trustQuote:
    "Clients are not simply hiring a service. They are choosing someone they can trust with a loved one, pet, or home.",
  portraitLabel: "Owner portrait",
  portraitAlt: "Owner of HNM Professional Services",
  portraitSrc: brandAssets.ownerPortrait,
};

export const originStory = {
  title: "Why HNM Professional Services Was Created",
  introduction:
    "HNM was created to provide local clients with dependable, personal support across the areas that matter most: people, pets, and home.",
  topics: [
    {
      id: "inspired",
      title: "What Inspired the Business",
      description:
        "HNM grew from a desire to offer care that feels personal and steady—support families can trust when they need an extra hand with a loved one, a pet, or a home.",
    },
    {
      id: "needs",
      title: "The Needs Observed",
      description:
        "Many households need reliable help that does not feel corporate or impersonal: companionship for seniors, attentive pet care, and peace of mind while away from home.",
    },
    {
      id: "together",
      title: "Why These Services Belong Together",
      description:
        "People, pets, and homes are connected in everyday life. Offering companion care, pet sitting, and house sitting under one thoughtful service makes it easier to get support that fits the whole household.",
    },
    {
      id: "feel",
      title: "What Clients Should Feel",
      description:
        "Clients should feel informed, respected, and confident—knowing expectations are clear, communication is dependable, and their person, pet, or home is in caring hands.",
    },
  ],
};

export const aboutValues = [
  {
    id: "compassion",
    title: "Compassion",
    description:
      "Every person, pet, and household deserves patience, kindness, and thoughtful attention.",
  },
  {
    id: "dependability",
    title: "Dependability",
    description:
      "Clients should know what to expect and feel confident that agreed responsibilities will be handled carefully.",
  },
  {
    id: "respect",
    title: "Respect",
    description:
      "HNM respects each client’s home, routines, preferences, privacy, and boundaries.",
  },
  {
    id: "communication",
    title: "Clear Communication",
    description:
      "Questions, updates, expectations, and concerns should be communicated clearly and promptly.",
  },
  {
    id: "personalized",
    title: "Personalized Support",
    description:
      "Services are discussed individually rather than treated as one-size-fits-all packages.",
  },
];

export const qualifications = {
  title: "Experience and qualifications",
  temporaryCopy:
    "Final experience, training, and qualification details will be added after they are reviewed and approved for publication.",
  futureCategories: [
    "Relevant work or life experience",
    "Training or certifications",
    "Areas of familiarity",
    "Professional standards",
    "Insurance or background-check information, if applicable and confirmed",
  ],
};

export const aboutMission = {
  tagline: business.tagline,
  body: "The mission of HNM Professional Services is to provide dependable, thoughtful support that helps clients feel more confident about the care of their loved ones, pets, and homes.",
};

export const aboutFinalCta = {
  title: "Let’s begin with a conversation.",
  body: "Share a little about the support you need, and HNM will follow up to discuss your situation, location, timing, and next steps.",
  primaryCta: {
    label: "Request a Free Consultation",
    href: routes.consultation,
  },
  secondaryCta: {
    label: "Explore Services",
    href: routes.services,
  },
};
