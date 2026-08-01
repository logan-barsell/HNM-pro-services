import AlternativeContact from "@/components/consultation/AlternativeContact";
import ConsultationForm from "@/components/consultation/ConsultationForm";
import ConsultationHero from "@/components/consultation/ConsultationHero";
import ConsultationProcess from "@/components/consultation/ConsultationProcess";
import { consultationSeoDescription } from "@/content/consultation";
import { routes } from "@/content/routes";
import { createPageMetadata } from "@/utils/metadata";

export const metadata = createPageMetadata({
  title: "Request a Free Consultation",
  description: consultationSeoDescription,
  path: routes.consultation,
});

export default function ConsultationPage() {
  return (
    <>
      <ConsultationHero />
      <ConsultationProcess />
      <ConsultationForm />
      <AlternativeContact />
    </>
  );
}
