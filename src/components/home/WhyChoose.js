import PointBandSection from "@/components/shared/PointBandSection";
import { homeTrustPoints } from "@/content/home";

export default function WhyChoose() {
  return (
    <PointBandSection
      headingId="why-choose-heading"
      title="Why Choose HNM"
      supporting="A calm, trustworthy approach shaped around clear communication and personal care."
      items={homeTrustPoints}
    />
  );
}
