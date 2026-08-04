import Box from "@mui/material/Box";
import { business } from "@/content/business";
import { brandAssets } from "@/content/assets";
import { defaultSeo } from "@/content/seo";
import { buildSiteGraph } from "@/content/structuredData";
import SiteFooter from "@/components/layout/SiteFooter";
import SiteHeader from "@/components/layout/SiteHeader";
import SiteHeaderOffset from "@/components/layout/SiteHeaderOffset";
import ScrollReveal from "@/components/motion/ScrollReveal";
import ThemeRegistry from "@/components/providers/ThemeRegistry";
import JsonLd from "@/components/seo/JsonLd";
import SkipLink from "@/components/shared/SkipLink";
import { fontVariableClassName } from "@/theme/fonts";
import { absoluteUrl, defaultOgImage } from "@/utils/metadata";
import "./globals.css";

export const metadata = {
  metadataBase: new URL(business.siteUrl),
  title: {
    default: defaultSeo.title,
    template: defaultSeo.titleTemplate,
  },
  description: defaultSeo.description,
  applicationName: defaultSeo.applicationName,
  openGraph: {
    type: "website",
    locale: "en_US",
    url: absoluteUrl("/"),
    siteName: business.name,
    title: business.name,
    description: business.description,
    images: [defaultOgImage],
  },
  twitter: {
    card: "summary_large_image",
    title: business.name,
    description: business.description,
    images: [brandAssets.ogImage],
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: [
      { url: "/brand/favicon.ico" },
      {
        url: "/brand/favicon-32x32.png",
        sizes: "32x32",
        type: "image/png",
      },
      {
        url: "/brand/favicon-16x16.png",
        sizes: "16x16",
        type: "image/png",
      },
    ],
    apple: [
      {
        url: "/brand/apple-touch-icon.png",
        sizes: "180x180",
        type: "image/png",
      },
    ],
  },
  manifest: "/brand/site.webmanifest",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={fontVariableClassName}>
      <body>
        <JsonLd data={buildSiteGraph()} />
        <ThemeRegistry>
          <SkipLink />
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              minHeight: "100vh",
              bgcolor: "background.default",
            }}
          >
            <SiteHeader />
            <SiteHeaderOffset />
            <Box
              component="main"
              id="main-content"
              tabIndex={-1}
              sx={{ flex: 1 }}
            >
              {children}
              <ScrollReveal />
            </Box>
            <SiteFooter />
          </Box>
        </ThemeRegistry>
      </body>
    </html>
  );
}
