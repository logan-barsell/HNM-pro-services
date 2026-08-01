/**
 * Centralized business values for the marketing site.
 * Replace placeholder fields with client-approved details before launch.
 * Use `isApprovedContactValue` / `toTelHref` / `toMailtoHref` from
 * `@/utils/contactValues` before rendering clickable contact links.
 */
export const business = {
  name: "HNM Professional Services",
  tagline: "Supporting People, Cherishing Pets.",
  description:
    "HNM Professional Services provides compassionate local support for people, pets, and homes.",
  shortDescription: "Professional local support for people, pets, and homes.",
  // Replace with the production domain before launch.
  siteUrl: "https://www.example.com",
  // Replace with client-approved contact details before launch.
  // Empty string or [BRACKET] placeholders are not valid public contact links.
  phone: "[CLIENT PHONE]",
  email: "[CLIENT EMAIL]",
  serviceRegion: "[APPROVED SERVICE REGION]",
  businessHours: "[BUSINESS HOURS]",
};

export const services = [
  {
    id: "pet-sitting",
    name: "Pet Sitting & Dog Walking",
    summary:
      "In-home pet care and walking support. Final specialty positioning requires client approval.",
  },
  {
    id: "companion-care",
    name: "Companion Care for Seniors",
    summary:
      "Nonmedical companionship and everyday support. Does not include medical or nursing care.",
  },
  {
    id: "house-sitting",
    name: "House Sitting & Home Checks",
    summary:
      "Nontechnical home monitoring and care while clients are away. Final visit details require client approval.",
  },
];
