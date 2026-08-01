import ClientValues from "@/components/reviews/ClientValues";
import ReviewInvitation from "@/components/reviews/ReviewInvitation";
import ReviewPlatforms from "@/components/reviews/ReviewPlatforms";
import ReviewsFinalCTA from "@/components/reviews/ReviewsFinalCTA";
import ReviewsHero from "@/components/reviews/ReviewsHero";
import TestimonialsSection from "@/components/reviews/TestimonialsSection";
import { reviewsSeoDescription } from "@/content/reviews";
import { routes } from "@/content/routes";
import { createPageMetadata } from "@/utils/metadata";

export const metadata = createPageMetadata({
  title: "Reviews",
  description: reviewsSeoDescription,
  path: routes.reviews,
});

export default function ReviewsPage() {
  return (
    <>
      <ReviewsHero />
      <TestimonialsSection />
      <ClientValues />
      <ReviewPlatforms />
      <ReviewInvitation />
      <ReviewsFinalCTA />
    </>
  );
}
