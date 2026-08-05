import GalleryFinalCTA from "@/components/gallery/GalleryFinalCTA";
import GalleryGrid from "@/components/gallery/GalleryGrid";
import GalleryHero from "@/components/gallery/GalleryHero";
import JsonLd from "@/components/seo/JsonLd";
import { routes } from "@/content/routes";
import { pageSeo } from "@/content/seo";
import { buildPageBreadcrumbs } from "@/content/structuredData";
import { createPageMetadata } from "@/utils/metadata";

export const metadata = createPageMetadata({
  title: pageSeo[routes.gallery].title,
  description: pageSeo[routes.gallery].description,
  path: routes.gallery,
});

export default function GalleryPage() {
  return (
    <>
      <JsonLd
        data={buildPageBreadcrumbs(
          pageSeo[routes.gallery].title,
          routes.gallery,
        )}
      />
      <GalleryHero />
      <GalleryGrid />
      <GalleryFinalCTA />
    </>
  );
}
