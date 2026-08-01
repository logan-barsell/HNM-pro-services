import AboutPreview from "@/components/home/AboutPreview";
import BusinessIntro from "@/components/home/BusinessIntro";
import FeaturedServices from "@/components/home/FeaturedServices";
import FinalCTA from "@/components/home/FinalCTA";
import Hero from "@/components/home/Hero";
import Mission from "@/components/home/Mission";
import ReviewsPreview from "@/components/home/ReviewsPreview";
import ServiceArea from "@/components/home/ServiceArea";
import WhyChoose from "@/components/home/WhyChoose";
import { routes } from "@/content/routes";
import { createPageMetadata } from "@/utils/metadata";

export const metadata = createPageMetadata({
  title:
    "HNM Professional Services | Compassionate Care for People, Pets & Homes",
  description:
    "HNM Professional Services offers compassionate, dependable support for seniors, pets, and homes. Request a free consultation to discuss the care you need.",
  path: routes.home,
  absoluteTitle: true,
});

export default function HomePage() {
  return (
    <>
      <Hero />
      <BusinessIntro />
      <FeaturedServices />
      <Mission />
      <WhyChoose />
      <AboutPreview />
      <ReviewsPreview />
      <ServiceArea />
      <FinalCTA />
    </>
  );
}
