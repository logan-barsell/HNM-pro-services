import AlternativeContact from "@/components/consultation/AlternativeContact";
import ConsultationForm from "@/components/consultation/ConsultationForm";
import ConsultationHero from "@/components/consultation/ConsultationHero";
import ConsultationProcess from "@/components/consultation/ConsultationProcess";
import JsonLd from "@/components/seo/JsonLd";
import { routes } from "@/content/routes";
import { pageSeo } from "@/content/seo";
import { buildPageBreadcrumbs } from "@/content/structuredData";
import { createPageMetadata } from "@/utils/metadata";

export const metadata = createPageMetadata({
  title: pageSeo[routes.consultation].title,
  description: pageSeo[routes.consultation].description,
  path: routes.consultation,
});

export default function ConsultationPage() {
  return (
    <>
      <JsonLd
        data={buildPageBreadcrumbs(
          pageSeo[routes.consultation].title,
          routes.consultation,
        )}
      />
      <ConsultationHero />
      <ConsultationForm />
      <ConsultationProcess />
      <AlternativeContact />
    </>
  );
}
