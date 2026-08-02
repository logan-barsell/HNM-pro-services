import ServiceDetailSection from "@/components/services/ServiceDetailSection";
import ServiceRegions from "@/components/services/ServiceRegions";
import ServicesFinalCTA from "@/components/services/ServicesFinalCTA";
import ServicesHero from "@/components/services/ServicesHero";
import { serviceDetails } from "@/content/servicesPage";
import { routes } from "@/content/routes";
import { createPageMetadata } from "@/utils/metadata";

export const metadata = createPageMetadata({
  title: "Services",
  description:
    "Explore pet sitting, dog walking, nonmedical senior companionship, and house-sitting services from HNM Professional Services.",
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
