import { business } from "@/content/business";
import { routes } from "@/content/routes";

export const defaultSeo = {
  title: business.name,
  titleTemplate: `%s | ${business.name}`,
  description: business.description,
  applicationName: business.name,
};

/**
 * Per-route titles and meta descriptions.
 * Titles that use the layout template omit the brand suffix (added as `| HNM…`).
 * Keep titles ~≤60 chars and descriptions ~150–160 chars where practical.
 */
export const pageSeo = {
  [routes.home]: {
    title:
      "HNM Professional Services | Care for People, Pets & Homes",
    description:
      "Holly offers pet sitting for small dogs and cats, small-dog walking, nonmedical senior companionship, and house sitting across Arizona’s East Valley.",
    absoluteTitle: true,
  },
  [routes.services]: {
    title: "Pet Sitting, Senior Care & House Sitting",
    description:
      "Explore care for small dogs and cats, nonmedical companion care for seniors, and house sitting or home checks with Holly in Arizona’s East Valley.",
  },
  [routes.about]: {
    title: "About Holly Abbott",
    description:
      "Meet Holly Abbott of HNM Professional Services—personal, dependable support for seniors, pets, and homes across Arizona’s East Valley. Supporting People, Cherishing Pets.",
  },
  [routes.gallery]: {
    title: "Photo Gallery",
    description:
      "Browse photos from HNM Professional Services—a look at Holly’s local care for people, pets, and homes across Arizona’s East Valley.",
  },
  [routes.reviews]: {
    title: "Client Reviews & Testimonials",
    description:
      "Read client reviews of Holly’s care for small dogs and cats, senior companionship, and house-sitting services across Arizona’s East Valley.",
  },
  [routes.consultation]: {
    title: "Request a Free Consultation",
    description:
      "Request a free consultation to discuss care for small dogs and cats, nonmedical senior companionship, house sitting, or home checks in the East Valley.",
  },
  [routes.contact]: {
    title: "Contact Holly",
    description:
      "Contact HNM Professional Services in the East Valley—call or email Holly, or send a message for general questions and existing-client needs. New services start with a free consultation.",
  },
  [routes.privacy]: {
    title: "Privacy Notice",
    description:
      "How HNM Professional Services collects, uses, and protects information from the Contact and Consultation forms, and which providers help operate hnmproservices.com.",
  },
};
