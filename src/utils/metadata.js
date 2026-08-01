import { business } from "@/content/business";

/**
 * Build absolute URLs for metadata, sitemap, and robots.
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
    },
    twitter: {
      card: "summary",
      title,
      description,
    },
  };
}
