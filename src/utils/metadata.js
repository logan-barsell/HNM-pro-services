import { business } from "@/content/business";
import { brandAssets } from "@/content/assets";

/**
 * Build absolute URLs for metadata, sitemap, robots, and JSON-LD.
 * Honors next.config trailingSlash for non-root HTML paths.
 * Leaves file-like paths (for example sitemap.xml) without a trailing slash.
 */
export function absoluteUrl(path = "/") {
  const base = business.siteUrl.replace(/\/$/, "");
  if (!path || path === "/") {
    return `${base}/`;
  }
  const normalized = path.startsWith("/") ? path : `/${path}`;
  if (/\.[a-z0-9]+$/i.test(normalized)) {
    return `${base}${normalized}`;
  }
  const withSlash = normalized.endsWith("/") ? normalized : `${normalized}/`;
  return `${base}${withSlash}`;
}

export const defaultOgImage = {
  url: brandAssets.ogImage,
  width: 1200,
  height: 630,
  alt: `${business.name} — ${business.tagline}`,
};

/** Absolute URL for a path under public/ (e.g. brand assets). */
export function absoluteAssetUrl(path) {
  return absoluteUrl(path);
}

export function createPageMetadata({
  title,
  description,
  path,
  absoluteTitle = false,
}) {
  const url = absoluteUrl(path);

  return {
    title: absoluteTitle ? { absolute: title } : title,
    description,
    alternates: {
      canonical: url,
    },
    openGraph: {
      title,
      description,
      url,
      siteName: business.name,
      type: "website",
      locale: "en_US",
      images: [defaultOgImage],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [brandAssets.ogImage],
    },
  };
}
