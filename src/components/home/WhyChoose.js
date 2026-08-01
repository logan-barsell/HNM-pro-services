import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { homeTrustPoints } from "@/content/home";
import { brandRadii } from "@/theme/brandTokens";

export default function WhyChoose() {
  return (
    <Box
      component="section"
      aria-labelledby="why-choose-heading"
      sx={{
        py: { xs: 7, md: 10 },
        bgcolor: "primary.dark",
        color: "common.white",
      }}
    >
      <Container maxWidth="lg">
        <Typography
          id="why-choose-heading"
          variant="h2"
          component="h2"
          sx={{
            mb: 1.5,
            color: "common.white",
            textAlign: { xs: "center", md: "left" },
          }}
        >
          Why choose HNM
        </Typography>
        <Typography
          variant="body1"
          sx={{
            mb: { xs: 4, md: 5 },
            maxWidth: "40rem",
            color: "rgba(255,255,255,0.9)",
            textAlign: { xs: "center", md: "left" },
            mx: { xs: "auto", md: 0 },
          }}
        >
          A calm, trustworthy approach shaped around clear communication and
          personal care.
        </Typography>

        <Grid container spacing={2.5}>
          {homeTrustPoints.map((point) => (
            <Grid key={point.id} size={{ xs: 12, sm: 6, md: 4 }}>
              <Box
                sx={{
                  height: "100%",
                  p: 3,
                  borderRadius: `${brandRadii.card}px`,
                  bgcolor: "background.default",
                  border: "1px solid",
                  borderColor: "rgba(255,255,255,0.18)",
                  color: "text.primary",
                }}
              >
                <Box
                  aria-hidden
                  sx={{
                    width: 36,
                    height: 3,
                    mb: 2,
                    borderRadius: 1,
                    bgcolor: "primary.dark",
                  }}
                />
                <Typography
                  variant="h3"
                  component="h3"
                  sx={{ typography: "h5", mb: 1 }}
                >
                  {point.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {point.description}
                </Typography>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}
