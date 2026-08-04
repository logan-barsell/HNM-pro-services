import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Image from "next/image";
import { homeServiceArea } from "@/content/home";
import MediaPlaceholder from "@/components/home/MediaPlaceholder";
import { brandRadii } from "@/theme/brandTokens";

export default function ServiceArea() {
  const { mapSrc, mapAlt, mapPlaceholder } = homeServiceArea;

  return (
    <Box
      component="section"
      aria-labelledby="service-area-heading"
      sx={{ py: { xs: 7, md: 10 }, bgcolor: "background.default" }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={{ xs: 4, md: 6 }} sx={{ alignItems: "center" }}>
          <Grid size={{ xs: 12, md: 6 }}>
            <Typography
              id="service-area-heading"
              variant="h2"
              component="h2"
              sx={{ mb: 2.5 }}
            >
              {homeServiceArea.title}
            </Typography>
            <Typography
              variant="body1"
              color="text.secondary"
              sx={{ maxWidth: "36rem", fontSize: "1.05rem" }}
            >
              {homeServiceArea.body}
            </Typography>
          </Grid>
          <Grid size={{ xs: 12, md: 6 }}>
            {mapSrc ? (
              <Box
                sx={{
                  position: "relative",
                  borderRadius: `${brandRadii.media}px`,
                  overflow: "hidden",
                  minHeight: { xs: 220, md: 300 },
                  aspectRatio: "4 / 3",
                  bgcolor: "secondary.main",
                }}
              >
                <Image
                  src={mapSrc}
                  alt={mapAlt}
                  fill
                  sizes="(max-width: 900px) 100vw, 50vw"
                  style={{ objectFit: "contain" }}
                />
              </Box>
            ) : (
              <MediaPlaceholder
                label={mapPlaceholder || "Service-area map"}
                minHeight={{ xs: 220, md: 300 }}
              />
            )}
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
