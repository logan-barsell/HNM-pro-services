import ServiceDetailSection from "@/components/services/ServiceDetailSection";
import ServiceRegions from "@/components/services/ServiceRegions";
import ServicesFinalCTA from "@/components/services/ServicesFinalCTA";
import ServicesHero from "@/components/services/ServicesHero";
import { serviceDetails } from "@/content/servicesPage";
import { routes } from "@/content/routes";
import { pageSeo } from "@/content/seo";
import { createPageMetadata } from "@/utils/metadata";

export const metadata = createPageMetadata({
  title: pageSeo[routes.services].title,
  description: pageSeo[routes.services].description,
  path: routes.services,
});

export default function ServicesPage() {
  return (
    <>
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
