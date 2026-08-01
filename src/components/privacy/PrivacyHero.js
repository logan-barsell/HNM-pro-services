import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import { privacyHero } from "@/content/privacy";
import AppLink from "@/components/shared/AppLink";
import {
  pageHeroPaddingTopSx,
  siteHeaderPullSx,
} from "@/theme/layout";

export default function PrivacyHero() {
  return (
    <Box
      component="section"
      aria-labelledby="privacy-hero-heading"
      sx={{
        ...siteHeaderPullSx,
        ...pageHeroPaddingTopSx,
        pb: { xs: 7, md: 9 },
        bgcolor: "primary.dark",
        color: "common.white",
      }}
    >
      <Container maxWidth="md">
        <Box sx={{ maxWidth: "42rem" }}>
          <Typography
            variant="overline"
            component="p"
            sx={{ color: "rgba(255,255,255,0.85)", mb: 1.5 }}
          >
            {privacyHero.eyebrow}
          </Typography>
          <Typography
            id="privacy-hero-heading"
            variant="h1"
            component="h1"
            sx={{ mb: 2.5, color: "common.white" }}
          >
            {privacyHero.heading}
          </Typography>
          <Typography
            variant="body1"
            sx={{
              mb: 2.5,
              color: "rgba(255,255,255,0.9)",
              fontSize: { xs: "1.05rem", md: "1.125rem" },
            }}
          >
            {privacyHero.supporting}
          </Typography>
          <AppLink
            href={privacyHero.contactHref}
            underline="hover"
            sx={{ fontWeight: 600, color: "common.white" }}
          >
            {privacyHero.contactLinkLabel}
          </AppLink>
        </Box>
      </Container>
    </Box>
  );
}
