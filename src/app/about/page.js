import AboutFinalCTA from "@/components/about/AboutFinalCTA";
import AboutHero from "@/components/about/AboutHero";
import MissionSection from "@/components/about/MissionSection";
import OriginStory from "@/components/about/OriginStory";
import OwnerIntroduction from "@/components/about/OwnerIntroduction";
import ValuesSection from "@/components/about/ValuesSection";
import { routes } from "@/content/routes";
import { pageSeo } from "@/content/seo";
import { createPageMetadata } from "@/utils/metadata";

export const metadata = createPageMetadata({
  title: pageSeo[routes.about].title,
  description: pageSeo[routes.about].description,
  path: routes.about,
});

export default function AboutPage() {
  return (
    <>
      <AboutHero />
      <OwnerIntroduction />
      <OriginStory />
      <ValuesSection />
      <MissionSection />
      <AboutFinalCTA />
    </>
  );
}
