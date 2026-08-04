import { business } from "@/content/business";
import { brandAssets } from "@/content/assets";
import { routes } from "@/content/routes";

/**
 * About page copy.
 * Voice: first person (Holly). Biography is a working draft for client review.
 */

export const aboutHero = {
  eyebrow: "About Holly",
  heading: "Personal support starts with trust.",
  supporting:
    "HNM Professional Services is how I show up for families who need an extra hand with a loved one, a pet, or a home—with clear communication and care you can count on.",
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
  ownerName: business.ownerName,
  heading: "Nice to meet you",
  paragraphs: [
    "I’m Holly Abbott, the owner of HNM Professional Services. I work one-on-one with families across the East Valley who need dependable help that still feels personal.",
    "When you reach out, you’re talking with me—not a call center or a rotating staff. We’ll take time to understand your routines, preferences, and what good care looks like in your home.",
  ],
  trustQuote:
    "You’re not just hiring a service. You’re choosing someone you can trust with a loved one, a pet, or your home.",
  portraitLabel: "Holly’s portrait",
  portraitAlt: "Holly Abbott, owner of HNM Professional Services",
  portraitSrc: brandAssets.ownerPortrait,
};

export const originStory = {
  title: "Why I Started HNM",
  introduction:
    "I created HNM to offer local families dependable, personal support where it matters most—people, pets, and home.",
  topics: [
    {
      id: "inspired",
      title: "What Inspired Me",
      description:
        "I wanted to offer care that feels personal and steady—support families can trust when they need an extra hand with a loved one, a pet, or a home.",
    },
    {
      id: "needs",
      title: "The Need I Kept Seeing",
      description:
        "Many households need reliable help that doesn’t feel corporate or impersonal: companionship for seniors, attentive pet care, and peace of mind while away from home.",
    },
    {
      id: "together",
      title: "Why These Services Belong Together",
      description:
        "People, pets, and homes are connected in everyday life. Offering companion care, pet sitting, and house sitting under one thoughtful service makes it easier to get support that fits the whole household.",
    },
    {
      id: "feel",
      title: "How I Want You to Feel",
      description:
        "I want you to feel informed, respected, and confident—knowing expectations are clear, communication is dependable, and your person, pet, or home is in caring hands.",
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
      "You should know what to expect and feel confident that agreed responsibilities will be handled carefully.",
  },
  {
    id: "respect",
    title: "Respect",
    description:
      "I respect your home, routines, preferences, privacy, and boundaries.",
  },
  {
    id: "communication",
    title: "Clear Communication",
    description:
      "Questions, updates, expectations, and concerns should be shared clearly and promptly.",
  },
  {
    id: "personalized",
    title: "Personalized Support",
    description:
      "We discuss your needs individually—never as a one-size-fits-all package.",
  },
];

export const aboutMission = {
  tagline: business.tagline,
  body: "My mission is simple: dependable, thoughtful support that helps you feel more confident about the care of your loved ones, pets, and home.",
};

export const aboutFinalCta = {
  title: "Let’s begin with a conversation.",
  body: "Share a little about the support you need, and I’ll follow up to talk through your situation, location, timing, and next steps.",
  primaryCta: {
    label: "Request a Free Consultation",
    href: routes.consultation,
  },
  secondaryCta: {
    label: "Explore Services",
    href: routes.services,
  },
};
