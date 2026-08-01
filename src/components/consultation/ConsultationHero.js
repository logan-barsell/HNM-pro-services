import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import { consultationHero } from "@/content/consultation";
import {
  pageHeroPaddingTopSx,
  siteHeaderPullSx,
} from "@/theme/layout";

export default function ConsultationHero() {
  return (
    <Box
      component="section"
      aria-labelledby="consultation-hero-heading"
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
            {consultationHero.eyebrow}
          </Typography>
          <Typography
            id="consultation-hero-heading"
            variant="h1"
            component="h1"
            sx={{ mb: 2.5, color: "common.white" }}
          >
            {consultationHero.heading}
          </Typography>
          <Typography
            variant="body1"
            sx={{
              mb: 2,
              color: "rgba(255,255,255,0.9)",
              fontSize: { xs: "1.05rem", md: "1.125rem" },
            }}
          >
            {consultationHero.supporting}
          </Typography>
          <Typography
            variant="body1"
            sx={{
              color: "rgba(255,255,255,0.9)",
              fontSize: { xs: "1.05rem", md: "1.125rem" },
            }}
          >
            {consultationHero.secondary}
          </Typography>
        </Box>
      </Container>
    </Box>
  );
}
