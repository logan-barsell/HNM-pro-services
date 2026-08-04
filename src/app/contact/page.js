import ContactDetails from "@/components/contact/ContactDetails";
import ContactFinalCTA from "@/components/contact/ContactFinalCTA";
import ContactHero from "@/components/contact/ContactHero";
import GeneralContactForm from "@/components/contact/GeneralContactForm";
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
      <ResponseProcess />
      <ContactFinalCTA />
    </>
  );
}
