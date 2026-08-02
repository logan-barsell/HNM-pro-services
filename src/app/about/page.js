import AboutFinalCTA from "@/components/about/AboutFinalCTA";
import AboutHero from "@/components/about/AboutHero";
import MissionSection from "@/components/about/MissionSection";
import OriginStory from "@/components/about/OriginStory";
import OwnerIntroduction from "@/components/about/OwnerIntroduction";
import QualificationsSection from "@/components/about/QualificationsSection";
import ValuesSection from "@/components/about/ValuesSection";
import { routes } from "@/content/routes";
import { createPageMetadata } from "@/utils/metadata";

export const metadata = createPageMetadata({
  title: "About",
  description:
    "Learn about the values, approach, and personal service behind HNM Professional Services.",
  path: routes.about,
});

export default function AboutPage() {
  return (
    <>
      <AboutHero />
      <OwnerIntroduction />
      <OriginStory />
      <ValuesSection />
      <QualificationsSection />
      <MissionSection />
      <AboutFinalCTA />
    </>
  );
}
