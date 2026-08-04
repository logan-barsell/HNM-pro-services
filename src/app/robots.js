import { business } from "@/content/business";
import { absoluteUrl } from "@/utils/metadata";

export const dynamic = "force-static";

/**
 * Allows public crawling for the marketing site.
 */
export default function robots() {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: absoluteUrl("/sitemap.xml"),
    host: new URL(business.siteUrl).host,
  };
}
