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
      "HNM Professional Services offers compassionate, dependable support for seniors, pets, and homes. Request a free consultation to discuss the care you need.",
    absoluteTitle: true,
  },
  [routes.services]: {
    title: "Services",
    description:
      "Explore pet sitting, dog walking, nonmedical senior companionship, and house-sitting services from HNM Professional Services.",
  },
  [routes.about]: {
    title: "About",
    description:
      "Learn about the values, approach, and personal service behind HNM Professional Services.",
  },
  [routes.reviews]: {
    title: "Reviews",
    description:
      "Learn about the values and client-focused approach behind HNM Professional Services. Approved testimonials and review links will be added as they become available.",
  },
  [routes.consultation]: {
    title: "Request a Free Consultation",
    description:
      "Request a free consultation with HNM Professional Services to discuss pet care, nonmedical senior companionship, house sitting, or home-check needs.",
  },
  [routes.contact]: {
    title: "Contact",
    description:
      "Contact HNM Professional Services with general questions, service-area inquiries, or existing-client needs, or request a free consultation for a new service.",
  },
  [routes.privacy]: {
    title: "Privacy Notice",
    description:
      "Learn how HNM Professional Services collects, uses, and protects information submitted through its website and contact forms.",
  },
};
