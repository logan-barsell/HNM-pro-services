import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import Image from "next/image";
import { serviceRegions } from "@/content/servicesPage";
import MediaPlaceholder from "@/components/home/MediaPlaceholder";
import PrimaryCTA from "@/components/shared/PrimaryCTA";
import { brandRadii } from "@/theme/brandTokens";

export default function ServiceRegions() {
  const { mapSrc, mapAlt, mapLabel } = serviceRegions;

  return (
    <Box
      component="section"
      aria-labelledby="service-regions-heading"
      sx={{
        py: { xs: 7, md: 10 },
        bgcolor: "primary.dark",
        color: "common.white",
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={{ xs: 4, md: 6 }} sx={{ alignItems: "center" }}>
          <Grid size={{ xs: 12, md: 6 }}>
            <Typography
              id="service-regions-heading"
              variant="h2"
              component="h2"
              sx={{ mb: 2.5, color: "common.white" }}
            >
              {serviceRegions.title}
            </Typography>
            <Typography
              variant="body1"
              sx={{
                mb: 2,
                fontSize: "1.05rem",
                maxWidth: "36rem",
                color: "rgba(255,255,255,0.9)",
              }}
            >
              {serviceRegions.body}
            </Typography>
            <Typography
              variant="body1"
              sx={{ mb: 3.5, maxWidth: "36rem", color: "rgba(255,255,255,0.9)" }}
            >
              {serviceRegions.followUp}
            </Typography>
            <Stack
              direction={{ xs: "column", sm: "row" }}
              spacing={1.5}
              sx={{ alignItems: { xs: "stretch", sm: "center" } }}
            >
              <PrimaryCTA
                label={serviceRegions.primaryCta.label}
                href={serviceRegions.primaryCta.href}
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
                label={serviceRegions.secondaryCta.label}
                href={serviceRegions.secondaryCta.href}
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
          </Grid>
          <Grid size={{ xs: 12, md: 6 }}>
            {mapSrc ? (
              <Box
                sx={{
                  position: "relative",
                  borderRadius: `${brandRadii.media}px`,
                  overflow: "hidden",
                  width: "100%",
                  aspectRatio: "3 / 2",
                  bgcolor: "transparent",
                }}
              >
                <Image
                  src={mapSrc}
                  alt={mapAlt}
                  fill
                  sizes="(max-width: 900px) 100vw, 50vw"
                  style={{ objectFit: "cover" }}
                />
              </Box>
            ) : (
              <MediaPlaceholder
                label={mapLabel || "Service area map"}
                aria-label={mapAlt}
                minHeight={{ xs: 220, md: 320 }}
                sx={{ bgcolor: "background.default" }}
              />
            )}
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
