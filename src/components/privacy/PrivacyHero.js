import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import { privacyHero } from "@/content/privacy";
import PrimaryCTA from "@/components/shared/PrimaryCTA";
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
      <Container maxWidth="lg">
        <Box sx={{ maxWidth: "46rem" }}>
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
              mb: 4,
              color: "rgba(255,255,255,0.9)",
              fontSize: { xs: "1.05rem", md: "1.125rem" },
            }}
          >
            {privacyHero.supporting}
          </Typography>
          <Stack
            direction={{ xs: "column", sm: "row" }}
            spacing={1.5}
            sx={{ alignItems: { xs: "stretch", sm: "center" } }}
          >
            <PrimaryCTA
              label={privacyHero.primaryCta.label}
              href={privacyHero.primaryCta.href}
              sx={{
                width: { xs: "100%", sm: "auto" },
                bgcolor: "common.white",
                color: "primary.dark",
                "&:hover": {
                  bgcolor: "background.default",
                  color: "primary.dark",
                },
              }}
            />
            <PrimaryCTA
              variant="outlined"
              label={privacyHero.secondaryCta.label}
              href={privacyHero.secondaryCta.href}
              sx={{
                width: { xs: "100%", sm: "auto" },
                borderColor: "rgba(255,255,255,0.7)",
                color: "common.white",
                "&:hover": {
                  borderColor: "common.white",
                  bgcolor: "rgba(255,255,255,0.1)",
                },
              }}
            />
          </Stack>
        </Box>
      </Container>
    </Box>
  );
}
