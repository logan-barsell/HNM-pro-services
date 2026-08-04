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
import { pageSeo } from "@/content/seo";
import { createPageMetadata } from "@/utils/metadata";

export const metadata = createPageMetadata({
  title: pageSeo[routes.home].title,
  description: pageSeo[routes.home].description,
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
