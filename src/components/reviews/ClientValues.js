import PointBandSection from "@/components/shared/PointBandSection";
import { clientsValue } from "@/content/reviews";

export default function ClientValues() {
  return (
    <PointBandSection
      headingId="clients-value-heading"
      title={clientsValue.title}
      supporting={clientsValue.supporting}
      items={clientsValue.items}
    />
  );
}
