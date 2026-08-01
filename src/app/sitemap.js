import { publicRoutes } from "@/content/routes";
import { absoluteUrl } from "@/utils/metadata";

export const dynamic = "force-static";

/**
 * Static sitemap for all public marketing routes.
 * lastModified is omitted to avoid fabricating freshness on every build.
 */
export default function sitemap() {
  return publicRoutes.map((path) => ({
    url: absoluteUrl(path),
    changeFrequency: "monthly",
    priority: path === "/" ? 1 : 0.7,
  }));
}
