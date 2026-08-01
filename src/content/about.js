import { business } from "@/content/business";
import { routes } from "@/content/routes";

/**
 * About page copy.
 * Biography, qualifications, and portrait remain placeholders until client-approved.
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
  portraitAlt:
    "Portrait of the owner of HNM Professional Services, coming soon",
  // Set to "/brand/owner-portrait.webp" only when the file exists.
  portraitSrc: null,
};

export const originStory = {
  title: "Why HNM Professional Services was created",
  introduction:
    "HNM was created to provide local clients with dependable, personal support across the areas that matter most: people, pets, and home.",
  pendingTopics: [
    {
      title: "What inspired the business",
      body: "Approved details about what inspired HNM Professional Services will be shared here.",
    },
    {
      title: "The needs observed",
      body: "Approved notes about the client needs that shaped this work will appear here.",
    },
    {
      title: "Why these services belong together",
      body: "Approved explanation of how pet care, companion care, and home support fit under one personal service will be added here.",
    },
    {
      title: "What clients should feel",
      body: "Approved wording about the experience the owner hopes clients feel when working with HNM will be published here.",
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

export const clientExpectations = {
  title: "What clients can expect",
  supporting:
    "Beginning with a consultation helps everyone understand the service, timing, and boundaries before any work begins. Submitting a request does not guarantee acceptance or availability.",
  items: [
    {
      number: "1",
      title: "A thoughtful initial conversation",
      description:
        "Every new client begins with a free consultation to discuss the service, timing, location, routines, and expectations.",
    },
    {
      number: "2",
      title: "Clear service expectations",
      description:
        "Responsibilities and boundaries are confirmed before service begins.",
    },
    {
      number: "3",
      title: "Respectful, dependable communication",
      description: "Clients should know how and when updates will be provided.",
    },
    {
      number: "4",
      title: "Support shaped around the agreed needs",
      description:
        "Services are shaped around the agreed needs rather than treated as a generic package.",
    },
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
