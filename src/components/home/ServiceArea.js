import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { homeServiceArea } from "@/content/home";
import MediaPlaceholder from "@/components/home/MediaPlaceholder";

export default function ServiceArea() {
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
            <MediaPlaceholder
              label={homeServiceArea.mapPlaceholder}
              minHeight={{ xs: 220, md: 300 }}
            />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
