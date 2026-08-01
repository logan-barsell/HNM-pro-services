import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { homeIntro } from "@/content/home";
import MediaPlaceholder from "@/components/home/MediaPlaceholder";

export default function BusinessIntro() {
  return (
    <Box
      component="section"
      aria-labelledby="business-intro-heading"
      sx={{ py: { xs: 7, md: 10 }, bgcolor: "background.default" }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={{ xs: 4, md: 6 }} sx={{ alignItems: "center" }}>
          <Grid size={{ xs: 12, md: 6 }}>
            <Typography
              id="business-intro-heading"
              variant="h2"
              component="h2"
              sx={{ mb: 2.5 }}
            >
              {homeIntro.title}
            </Typography>
            <Typography
              variant="body1"
              color="text.secondary"
              sx={{ maxWidth: "38rem", fontSize: "1.05rem" }}
            >
              {homeIntro.body}
            </Typography>
          </Grid>
          <Grid size={{ xs: 12, md: 6 }}>
            <MediaPlaceholder
              label={homeIntro.imagePlaceholder}
              minHeight={{ xs: 220, md: 320 }}
            />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
