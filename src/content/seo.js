import { business } from "@/content/business";
import { routes } from "@/content/routes";

export const defaultSeo = {
  title: business.name,
  titleTemplate: `%s | ${business.name}`,
  description: business.description,
  applicationName: business.name,
};

export const pageSeo = {
  [routes.home]: {
    title:
      "HNM Professional Services | Compassionate Care for People, Pets & Homes",
    description:
      "Personal support from Holly at HNM Professional Services—dependable help for seniors, pets, and homes across the East Valley. Request a free consultation to talk through what you need.",
    absoluteTitle: true,
  },
  [routes.services]: {
    title: "Services",
    description:
      "Explore pet sitting, dog walking, nonmedical senior companionship, and house-sitting services with Holly at HNM Professional Services.",
  },
  [routes.about]: {
    title: "About",
    description:
      "Meet Holly Abbott, the person behind HNM Professional Services—personal, dependable support for people, pets, and homes.",
  },
  [routes.reviews]: {
    title: "Reviews",
    description:
      "Learn what you can expect from Holly at HNM Professional Services. Approved testimonials and review links will be added as they become available.",
  },
  [routes.consultation]: {
    title: "Request a Free Consultation",
    description:
      "Request a free consultation with Holly at HNM Professional Services to discuss pet care, nonmedical senior companionship, house sitting, or home-check needs.",
  },
  [routes.contact]: {
    title: "Contact",
    description:
      "Get in touch with Holly at HNM Professional Services for general questions, service-area inquiries, or existing-client needs—or request a free consultation for a new service.",
  },
  [routes.privacy]: {
    title: "Privacy Notice",
    description:
      "Learn how HNM Professional Services collects, uses, and protects information submitted through its website and contact forms.",
  },
};
