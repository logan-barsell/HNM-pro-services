import ClientValues from "@/components/reviews/ClientValues";
import ReviewInvitation from "@/components/reviews/ReviewInvitation";
import ReviewPlatforms from "@/components/reviews/ReviewPlatforms";
import ReviewsFinalCTA from "@/components/reviews/ReviewsFinalCTA";
import ReviewsHero from "@/components/reviews/ReviewsHero";
import TestimonialsSection from "@/components/reviews/TestimonialsSection";
import JsonLd from "@/components/seo/JsonLd";
import { routes } from "@/content/routes";
import { pageSeo } from "@/content/seo";
import { buildPageBreadcrumbs } from "@/content/structuredData";
import { createPageMetadata } from "@/utils/metadata";

export const metadata = createPageMetadata({
  title: pageSeo[routes.reviews].title,
  description: pageSeo[routes.reviews].description,
  path: routes.reviews,
});

export default function ReviewsPage() {
  return (
    <>
      <JsonLd
        data={buildPageBreadcrumbs(
          pageSeo[routes.reviews].title,
          routes.reviews,
        )}
      />
      <ReviewsHero />
      <TestimonialsSection />
      <ClientValues />
      <ReviewPlatforms />
      <ReviewInvitation />
      <ReviewsFinalCTA />
    </>
  );
}
