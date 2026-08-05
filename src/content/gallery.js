import { brandAssets } from "@/content/assets";
import { routes } from "@/content/routes";
import { pageSeo } from "@/content/seo";

/**
 * Gallery page copy and image list.
 * Add new photos to `galleryItems` (and brandAssets) as they arrive.
 */

export const GALLERY_PAGE_SIZE = 9;

export const galleryHero = {
  eyebrow: "Gallery",
  heading: "A glimpse of the care I provide.",
  supporting:
    "Photos from around the work I do with people, pets, and homes. More will be added as we grow.",
  primaryCta: {
    label: "Request a Free Consultation",
    href: routes.consultation,
  },
  secondaryCta: {
    label: "About Holly",
    href: routes.about,
  },
};

export const gallerySection = {
  title: "Photos",
  supporting:
    "A simple look at HNM Professional Services in everyday moments.",
  emptyMessage: "Photos will appear here as they become available.",
  paginationLabel: "Gallery pages",
};

/**
 * Keep alts honest and non-invented. Refine when Holly provides captions.
 */
export const galleryItems = [
  {
    id: "gallery-1",
    src: brandAssets.gallery1,
    alt: "Photo from HNM Professional Services",
  },
  {
    id: "gallery-2",
    src: brandAssets.gallery2,
    alt: "Photo from HNM Professional Services",
  },
  {
    id: "gallery-3",
    src: brandAssets.gallery3,
    alt: "Photo from HNM Professional Services",
  },
];

export const galleryFinalCta = {
  title: "Ready to talk about the support you need?",
  body: "Request a free consultation and I’ll follow up to learn about your situation, timing, and expectations.",
  primaryCta: {
    label: "Request a Free Consultation",
    href: routes.consultation,
  },
  secondaryCta: {
    label: "Contact Holly",
    href: routes.contact,
  },
};

export const gallerySeoDescription = pageSeo[routes.gallery].description;
