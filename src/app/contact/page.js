import ContactDetails from "@/components/contact/ContactDetails";
import ContactFinalCTA from "@/components/contact/ContactFinalCTA";
import ContactHero from "@/components/contact/ContactHero";
import GeneralContactForm from "@/components/contact/GeneralContactForm";
import ResponseProcess from "@/components/contact/ResponseProcess";
import JsonLd from "@/components/seo/JsonLd";
import { routes } from "@/content/routes";
import { pageSeo } from "@/content/seo";
import { buildPageBreadcrumbs } from "@/content/structuredData";
import { createPageMetadata } from "@/utils/metadata";

export const metadata = createPageMetadata({
  title: pageSeo[routes.contact].title,
  description: pageSeo[routes.contact].description,
  path: routes.contact,
});

export default function ContactPage() {
  return (
    <>
      <JsonLd
        data={buildPageBreadcrumbs(
          pageSeo[routes.contact].title,
          routes.contact,
        )}
      />
      <ContactHero />
      <ContactDetails />
      <GeneralContactForm />
      <ResponseProcess />
      <ContactFinalCTA />
    </>
  );
}
