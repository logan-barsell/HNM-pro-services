import ServiceDetailSection from "@/components/services/ServiceDetailSection";
import ServiceRegions from "@/components/services/ServiceRegions";
import ServicesFinalCTA from "@/components/services/ServicesFinalCTA";
import ServicesHero from "@/components/services/ServicesHero";
import JsonLd from "@/components/seo/JsonLd";
import { serviceDetails } from "@/content/servicesPage";
import { routes } from "@/content/routes";
import { pageSeo } from "@/content/seo";
import { buildPageBreadcrumbs } from "@/content/structuredData";
import { createPageMetadata } from "@/utils/metadata";

export const metadata = createPageMetadata({
  title: pageSeo[routes.services].title,
  description: pageSeo[routes.services].description,
  path: routes.services,
});

export default function ServicesPage() {
  return (
    <>
      <JsonLd
        data={buildPageBreadcrumbs(
          pageSeo[routes.services].title,
          routes.services,
        )}
      />
      <ServicesHero />
      {serviceDetails.map((service, index) => (
        <ServiceDetailSection
          key={service.id}
          {...service}
          tone={index % 2 === 0 ? "cream" : "green"}
        />
      ))}
      <ServiceRegions />
      <ServicesFinalCTA />
    </>
  );
}
