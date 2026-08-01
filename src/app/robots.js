import { business } from "@/content/business";
import { absoluteUrl } from "@/utils/metadata";

export const dynamic = "force-static";

/**
 * Allows public crawling for the marketing site.
 * Review crawler behavior before deploying a public staging domain
 * that still uses placeholder content or example.com as metadataBase.
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
