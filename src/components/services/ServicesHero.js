import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import { servicesHero } from "@/content/servicesPage";
import PrimaryCTA from "@/components/shared/PrimaryCTA";
import {
  pageHeroPaddingTopSx,
  siteHeaderPullSx,
} from "@/theme/layout";

export default function ServicesHero() {
  return (
    <Box
      component="section"
      aria-labelledby="services-hero-heading"
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
            {servicesHero.eyebrow}
          </Typography>
          <Typography
            id="services-hero-heading"
            variant="h1"
            component="h1"
            sx={{ mb: 2.5, color: "common.white" }}
          >
            {servicesHero.heading}
          </Typography>
          <Typography
            variant="body1"
            sx={{
              mb: 4,
              color: "rgba(255,255,255,0.9)",
              fontSize: { xs: "1.05rem", md: "1.125rem" },
            }}
          >
            {servicesHero.supporting}
          </Typography>
          <Stack
            direction={{ xs: "column", sm: "row" }}
            spacing={1.5}
            sx={{ alignItems: { xs: "stretch", sm: "center" } }}
          >
            <PrimaryCTA
              label={servicesHero.primaryCta.label}
              href={servicesHero.primaryCta.href}
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
              label={servicesHero.secondaryCta.label}
              href={servicesHero.secondaryCta.href}
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
