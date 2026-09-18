import { brandAssets } from "@/content/assets";
import { routes } from "@/content/routes";
import { pageSeo } from "@/content/seo";

/**
 * Gallery page copy and image list.
 * Add new photos to `galleryItems` (and brandAssets) as they arrive.
 * Web files live in public/gallery/; HEIC masters in public/gallery/_originals/.
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
 * Order is intentionally mixed so newer photos are spread through the grid.
 */
export const galleryItems = [
  {
    id: "gallery-3",
    src: brandAssets.gallery3,
    alt: "Photo from HNM Professional Services",
  },
  {
    id: "gallery-14",
    src: brandAssets.gallery14,
    alt: "A caregiver pushing someone in a wheelchair across a grassy field at sunset",
  },
  {
    id: "gallery-1",
    src: brandAssets.gallery1,
    alt: "Photo from HNM Professional Services",
  },
  {
    id: "gallery-8",
    src: brandAssets.gallery8,
    alt: "Photo from HNM Professional Services",
  },
  {
    id: "gallery-5",
    src: brandAssets.gallery5,
    alt: "Photo from HNM Professional Services",
  },
  {
    id: "gallery-15",
    src: brandAssets.gallery15,
    alt: "An older adult smiling while using a walker on a leaf-covered outdoor path",
  },
  {
    id: "gallery-2",
    src: brandAssets.gallery2,
    alt: "Photo from HNM Professional Services",
  },
  {
    id: "gallery-11",
    src: brandAssets.gallery11,
    alt: "Photo from HNM Professional Services",
  },
  {
    id: "gallery-6",
    src: brandAssets.gallery6,
    alt: "Photo from HNM Professional Services",
  },
  {
    id: "gallery-16",
    src: brandAssets.gallery16,
    alt: "An older couple walking together outdoors near a home, one using a walker",
  },
  {
    id: "gallery-4",
    src: brandAssets.gallery4,
    alt: "Photo from HNM Professional Services",
  },
  {
    id: "gallery-9",
    src: brandAssets.gallery9,
    alt: "Photo from HNM Professional Services",
  },
  {
    id: "gallery-12",
    src: brandAssets.gallery12,
    alt: "Photo from HNM Professional Services",
  },
  {
    id: "gallery-7",
    src: brandAssets.gallery7,
    alt: "Photo from HNM Professional Services",
  },
  {
    id: "gallery-10",
    src: brandAssets.gallery10,
    alt: "Photo from HNM Professional Services",
  },
  {
    id: "gallery-13",
    src: brandAssets.gallery13,
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
