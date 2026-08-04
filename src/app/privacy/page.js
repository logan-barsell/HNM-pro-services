import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import PrivacyBody from "@/components/privacy/PrivacyBody";
import PrivacyFinalCTA from "@/components/privacy/PrivacyFinalCTA";
import PrivacyHero from "@/components/privacy/PrivacyHero";
import PrivacySummary from "@/components/privacy/PrivacySummary";
import PrivacyTableOfContents from "@/components/privacy/PrivacyTableOfContents";
import JsonLd from "@/components/seo/JsonLd";
import { routes } from "@/content/routes";
import { pageSeo } from "@/content/seo";
import { buildPageBreadcrumbs } from "@/content/structuredData";
import { createPageMetadata } from "@/utils/metadata";

export const metadata = createPageMetadata({
  title: pageSeo[routes.privacy].title,
  description: pageSeo[routes.privacy].description,
  path: routes.privacy,
});

export default function PrivacyPage() {
  return (
    <>
      <JsonLd
        data={buildPageBreadcrumbs(
          pageSeo[routes.privacy].title,
          routes.privacy,
        )}
      />
      <PrivacyHero />
      <Box
        component="div"
        sx={{ py: { xs: 5, md: 8 }, bgcolor: "background.default" }}
      >
        <Container maxWidth="md">
          <PrivacySummary />
          <PrivacyTableOfContents />
          <PrivacyBody />
        </Container>
      </Box>
      <PrivacyFinalCTA />
    </>
  );
}
