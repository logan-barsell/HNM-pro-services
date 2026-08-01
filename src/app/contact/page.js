import ContactDetails from "@/components/contact/ContactDetails";
import ContactFinalCTA from "@/components/contact/ContactFinalCTA";
import ContactHero from "@/components/contact/ContactHero";
import ConsultationGuidance from "@/components/contact/ConsultationGuidance";
import GeneralContactForm from "@/components/contact/GeneralContactForm";
import HoursAndServiceArea from "@/components/contact/HoursAndServiceArea";
import ResponseProcess from "@/components/contact/ResponseProcess";
import { contactSeoDescription } from "@/content/contact";
import { routes } from "@/content/routes";
import { createPageMetadata } from "@/utils/metadata";

export const metadata = createPageMetadata({
  title: "Contact",
  description: contactSeoDescription,
  path: routes.contact,
});

export default function ContactPage() {
  return (
    <>
      <ContactHero />
      <ContactDetails />
      <GeneralContactForm />
      <ConsultationGuidance />
      <HoursAndServiceArea />
      <ResponseProcess />
      <ContactFinalCTA />
    </>
  );
}
