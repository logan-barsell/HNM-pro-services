import PointBandSection from "@/components/shared/PointBandSection";
import { originStory } from "@/content/about";

export default function OriginStory() {
  return (
    <PointBandSection
      headingId="origin-story-heading"
      title={originStory.title}
      supporting={originStory.introduction}
      items={originStory.topics}
      itemSize={{ xs: 12, sm: 6, md: 6 }}
    />
  );
}
