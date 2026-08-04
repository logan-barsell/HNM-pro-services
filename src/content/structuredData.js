import { brandAssets } from "@/content/assets";
import { business, services } from "@/content/business";
import { routes } from "@/content/routes";
import { absoluteAssetUrl, absoluteUrl } from "@/utils/metadata";

/** Cities listed in business.serviceRegion (Arizona East Valley). */
export const serviceAreaCities = [
  "Scottsdale",
  "Phoenix",
  "Tempe",
  "Chandler",
  "Mesa",
  "Gilbert",
];

const BUSINESS_ID = `${absoluteUrl("/")}#business`;
const WEBSITE_ID = `${absoluteUrl("/")}#website`;

/**
 * Lean JSON-LD @graph: ProfessionalService + WebSite.
 * No street address, hours, price range, or aggregate ratings.
 */
export function buildSiteGraph() {
  const logoUrl = absoluteAssetUrl(brandAssets.logo);
  const imageUrl = absoluteAssetUrl(brandAssets.ogImage);

  const professionalService = {
    "@type": "ProfessionalService",
    "@id": BUSINESS_ID,
    name: business.name,
    alternateName: "HNM",
    description: business.description,
    url: absoluteUrl("/"),
    telephone: business.phone,
    email: business.email,
    image: imageUrl,
    logo: logoUrl,
    slogan: business.tagline,
    areaServed: serviceAreaCities.map((city) => ({
      "@type": "City",
      name: city,
      containedInPlace: {
        "@type": "State",
        name: "Arizona",
      },
    })),
    knowsAbout: services.map((service) => service.name),
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "HNM Professional Services",
      itemListElement: services.map((service) => ({
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: service.name,
          description: service.summary,
          provider: { "@id": BUSINESS_ID },
          areaServed: serviceAreaCities.map((city) => ({
            "@type": "City",
            name: city,
          })),
        },
      })),
    },
  };

  const website = {
    "@type": "WebSite",
    "@id": WEBSITE_ID,
    name: business.name,
    url: absoluteUrl("/"),
    description: business.description,
    publisher: { "@id": BUSINESS_ID },
    inLanguage: "en-US",
  };

  return {
    "@context": "https://schema.org",
    "@graph": [professionalService, website],
  };
}

/**
 * @param {{ name: string, path: string }[]} items - Ordered crumbs; last is current page.
 */
export function buildBreadcrumbList(items) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: absoluteUrl(item.path),
    })),
  };
}

/** Home → page breadcrumb for standard marketing routes. */
export function buildPageBreadcrumbs(pageName, pagePath) {
  return buildBreadcrumbList([
    { name: "Home", path: routes.home },
    { name: pageName, path: pagePath },
  ]);
}
