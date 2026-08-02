import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Image from "next/image";
import { homeAboutPreview } from "@/content/home";
import MediaPlaceholder from "@/components/home/MediaPlaceholder";
import PrimaryCTA from "@/components/shared/PrimaryCTA";
import { brandRadii } from "@/theme/brandTokens";

export default function AboutPreview() {
  const { portraitSrc, portraitAlt, portraitPlaceholder } = homeAboutPreview;

  return (
    <Box
      component="section"
      aria-labelledby="about-preview-heading"
      sx={{ py: { xs: 7, md: 10 }, bgcolor: "background.default" }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={{ xs: 4, md: 6 }} sx={{ alignItems: "center" }}>
          <Grid size={{ xs: 12, md: 5 }}>
            {portraitSrc ? (
              <Box
                sx={{
                  position: "relative",
                  width: "100%",
                  maxWidth: { xs: 280, sm: 320, md: "100%" },
                  mx: { xs: "auto", md: 0 },
                  borderRadius: `${brandRadii.media}px`,
                  overflow: "hidden",
                  aspectRatio: "4 / 5",
                  bgcolor: "secondary.main",
                }}
              >
                <Image
                  src={portraitSrc}
                  alt={portraitAlt}
                  fill
                  sizes="(max-width: 600px) 280px, (max-width: 900px) 320px, 40vw"
                  style={{ objectFit: "cover" }}
                />
              </Box>
            ) : (
              <MediaPlaceholder
                label={portraitPlaceholder}
                minHeight={{ xs: 280, md: 360 }}
                ratio="4 / 5"
                sx={{
                  maxWidth: { xs: 280, sm: 320, md: "100%" },
                  mx: { xs: "auto", md: 0 },
                }}
              />
            )}
          </Grid>
          <Grid size={{ xs: 12, md: 7 }}>
            <Box sx={{ textAlign: { xs: "center", md: "left" } }}>
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
                sx={{
                  mb: 3.5,
                  maxWidth: "36rem",
                  mx: { xs: "auto", md: 0 },
                  fontSize: "1.05rem",
                }}
              >
                {homeAboutPreview.body}
              </Typography>
              <PrimaryCTA
                variant="outlined"
                label={homeAboutPreview.cta.label}
                href={homeAboutPreview.cta.href}
                sx={{ width: { xs: "100%", sm: "auto" } }}
              />
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
