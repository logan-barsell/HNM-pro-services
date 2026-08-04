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
      "Holly at HNM Professional Services offers pet sitting, dog walking, nonmedical senior companionship, and house sitting across Scottsdale, Phoenix, Tempe, Chandler, Mesa, and Gilbert. Request a free consultation.",
    absoluteTitle: true,
  },
  [routes.services]: {
    title: "Pet Sitting, Senior Care & House Sitting",
    description:
      "Explore pet sitting and dog walking, nonmedical companion care for seniors, and house sitting or home checks with Holly—serving the East Valley including Scottsdale, Phoenix, Tempe, Chandler, Mesa, and Gilbert.",
  },
  [routes.about]: {
    title: "About Holly Abbott",
    description:
      "Meet Holly Abbott of HNM Professional Services—personal, dependable support for seniors, pets, and homes across Arizona’s East Valley. Supporting People, Cherishing Pets.",
  },
  [routes.reviews]: {
    title: "Client Reviews & Testimonials",
    description:
      "Read Google reviews and client testimonials for HNM Professional Services. See what families say about Holly’s pet sitting, senior companionship, and house-sitting care in the East Valley.",
  },
  [routes.consultation]: {
    title: "Request a Free Consultation",
    description:
      "Request a free consultation with Holly at HNM Professional Services to discuss pet sitting, dog walking, nonmedical senior companionship, house sitting, or home checks in the East Valley.",
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
