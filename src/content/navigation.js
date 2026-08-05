import { routes } from "@/content/routes";

export const primaryNavigation = [
  { label: "Home", href: routes.home },
  { label: "Services", href: routes.services },
  { label: "About", href: routes.about },
  { label: "Gallery", href: routes.gallery },
  { label: "Reviews", href: routes.reviews },
  { label: "Contact", href: routes.contact },
];

export const consultationCta = {
  label: "Request a Free Consultation",
  href: routes.consultation,
};

export const footerNavigation = [
  ...primaryNavigation,
  { label: "Privacy", href: routes.privacy },
];
