import NotFoundDestinations from "@/components/notFound/NotFoundDestinations";
import NotFoundHero from "@/components/notFound/NotFoundHero";

export const metadata = {
  title: "Page Not Found",
  description:
    "The page you requested is unavailable or may have moved. Find services, photos, and contact options for HNM Professional Services.",
  robots: {
    index: false,
    follow: true,
  },
};

export default function NotFoundPage() {
  return (
    <>
      <NotFoundHero />
      <NotFoundDestinations />
    </>
  );
}
