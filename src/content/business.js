/**
 * Centralized business values for the marketing site.
 * Replace placeholder fields with client-approved details before launch.
 * Use `isApprovedContactValue` / `toTelHref` / `toMailtoHref` from
 * `@/utils/contactValues` before rendering clickable contact links.
 */
export const business = {
  name: "HNM Professional Services",
  ownerFirstName: "Holly",
  ownerName: "Holly Abbott",
  tagline: "Supporting People, Cherishing Pets.",
  description:
    "Personal support for seniors, pets, and homes across the East Valley—thoughtful, dependable care from someone you can talk to.",
  shortDescription:
    "Personal support for seniors, pets, and homes across the East Valley.",
  // Replace with the production domain before launch.
  siteUrl: "https://www.example.com",
  phone: "(623) 225-0228",
  email: "holly@hnmproservices.com",
  serviceRegion:
    "Scottsdale, Phoenix, Tempe, Chandler, Mesa, and Gilbert, Arizona",
};

export const services = [
  {
    id: "pet-sitting",
    name: "Pet Sitting & Dog Walking",
    summary:
      "Walks, visits, and everyday pet care so your pets stay comfortable while you’re away.",
  },
  {
    id: "companion-care",
    name: "Companion Care for Seniors",
    summary:
      "Friendly, nonmedical companionship and everyday support for seniors.",
  },
  {
    id: "house-sitting",
    name: "House Sitting & Home Checks",
    summary:
      "Home checks and house sitting so you can travel with a little more peace of mind.",
  },
];
