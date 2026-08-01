import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { homeAboutPreview } from "@/content/home";
import MediaPlaceholder from "@/components/home/MediaPlaceholder";
import PrimaryCTA from "@/components/shared/PrimaryCTA";

export default function AboutPreview() {
  return (
    <Box
      component="section"
      aria-labelledby="about-preview-heading"
      sx={{ py: { xs: 7, md: 10 }, bgcolor: "background.default" }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={{ xs: 4, md: 6 }} sx={{ alignItems: "center" }}>
          <Grid size={{ xs: 12, md: 5 }}>
            <MediaPlaceholder
              label={homeAboutPreview.portraitPlaceholder}
              minHeight={{ xs: 280, md: 360 }}
              ratio="4 / 5"
            />
          </Grid>
          <Grid size={{ xs: 12, md: 7 }}>
            <Typography
              id="about-preview-heading"
              variant="h2"
              component="h2"
              sx={{ mb: 2.5 }}
            >
              {homeAboutPreview.title}
            </Typography>
            <Typography
              variant="body1"
              color="text.secondary"
              sx={{ mb: 3.5, maxWidth: "36rem", fontSize: "1.05rem" }}
            >
              {homeAboutPreview.body}
            </Typography>
            <PrimaryCTA
              variant="outlined"
              label={homeAboutPreview.cta.label}
              href={homeAboutPreview.cta.href}
              sx={{ width: { xs: "100%", sm: "auto" } }}
            />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
