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
    "Pet sitting for small dogs and cats, small-dog walking, nonmedical senior companionship, and house sitting from Holly at HNM Professional Services across the East Valley.",
  shortDescription:
    "Personal support for seniors, pets, and homes across the East Valley.",
  siteUrl: "https://hnmproservices.com",
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
      "Walks for small dogs, plus visits and everyday care for small dogs and cats while you’re away.",
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
