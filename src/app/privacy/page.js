import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import PrivacyBody from "@/components/privacy/PrivacyBody";
import PrivacyHero from "@/components/privacy/PrivacyHero";
import PrivacySummary from "@/components/privacy/PrivacySummary";
import PrivacyTableOfContents from "@/components/privacy/PrivacyTableOfContents";
import { privacySeoDescription } from "@/content/privacy";
import { routes } from "@/content/routes";
import { createPageMetadata } from "@/utils/metadata";

export const metadata = createPageMetadata({
  title: "Privacy Notice",
  description: privacySeoDescription,
  path: routes.privacy,
});

export default function PrivacyPage() {
  return (
    <>
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
    </>
  );
}
