import { publicRoutes, routes } from "@/content/routes";
import { absoluteUrl } from "@/utils/metadata";

export const dynamic = "force-static";

const routePriority = {
  [routes.home]: 1,
  [routes.consultation]: 0.9,
  [routes.services]: 0.8,
  [routes.contact]: 0.8,
  [routes.about]: 0.7,
  [routes.reviews]: 0.7,
  [routes.privacy]: 0.3,
};

/**
 * Static sitemap for all public marketing routes.
 * lastModified is omitted to avoid fabricating freshness on every build.
 */
export default function sitemap() {
  return publicRoutes.map((path) => ({
    url: absoluteUrl(path),
    changeFrequency: path === routes.privacy ? "yearly" : "monthly",
    priority: routePriority[path] ?? 0.7,
  }));
}
