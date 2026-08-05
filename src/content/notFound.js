import { routes } from "@/content/routes";

/**
 * 404 page copy.
 * Voice: first person (Holly). Keep it short, warm, and navigational.
 */

export const notFoundHero = {
  eyebrow: "404 — Page Not Found",
  heading: "This page isn’t available.",
  supporting:
    "The link may be out of date, or the page may have moved. Everything else is still here—let’s get you back on track.",
  primaryCta: {
    label: "Back to Home",
    href: routes.home,
  },
  secondaryCta: {
    label: "Request a Free Consultation",
    href: routes.consultation,
  },
};

export const notFoundDestinations = {
  title: "Where would you like to go?",
  supporting: "A few places that may have what you were looking for.",
  items: [
    {
      id: "services",
      title: "Services",
      description:
        "Pet sitting and dog walking, companion care for seniors, and house sitting or home checks.",
      href: routes.services,
      ctaLabel: "Explore Services",
    },
    {
      id: "about",
      title: "About",
      description:
        "Meet Holly and learn how HNM Professional Services approaches every visit.",
      href: routes.about,
      ctaLabel: "About Holly",
    },
    {
      id: "gallery",
      title: "Gallery",
      description:
        "A look at the people, pets, and homes behind the work I do.",
      href: routes.gallery,
      ctaLabel: "View Gallery",
    },
    {
      id: "contact",
      title: "Contact",
      description:
        "General questions or existing-client needs—call, email, or send a message.",
      href: routes.contact,
      ctaLabel: "Contact HNM",
    },
  ],
};
