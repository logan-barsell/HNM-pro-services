import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { homeReviewsPreview } from "@/content/home";
import { brandRadii } from "@/theme/brandTokens";
import PrimaryCTA from "@/components/shared/PrimaryCTA";

export default function ReviewsPreview() {
  return (
    <Box
      component="section"
      aria-labelledby="reviews-preview-heading"
      sx={{
        py: { xs: 7, md: 10 },
        bgcolor: "primary.dark",
        color: "common.white",
      }}
    >
      <Container maxWidth="lg">
        <Typography
          id="reviews-preview-heading"
          variant="h2"
          component="h2"
          sx={{
            mb: 1.5,
            color: "common.white",
            textAlign: { xs: "center", md: "left" },
          }}
        >
          {homeReviewsPreview.title}
        </Typography>
        <Typography
          variant="body2"
          sx={{
            mb: { xs: 4, md: 5 },
            maxWidth: "40rem",
            color: "rgba(255,255,255,0.9)",
            textAlign: { xs: "center", md: "left" },
            mx: { xs: "auto", md: 0 },
          }}
        >
          {homeReviewsPreview.note}
        </Typography>

        <Grid container spacing={3} sx={{ mb: 4 }}>
          {homeReviewsPreview.placeholders.map((item) => (
            <Grid key={item.id} size={{ xs: 12, md: 4 }}>
              <Box
                component="blockquote"
                sx={{
                  m: 0,
                  height: "100%",
                  p: 3,
                  borderRadius: `${brandRadii.card}px`,
                  bgcolor: "background.default",
                  border: "1px solid",
                  borderColor: "rgba(255,255,255,0.18)",
                  color: "text.primary",
                }}
              >
                <Typography
                  variant="body1"
                  sx={{
                    mb: 2.5,
                    fontFamily: "var(--font-display), Georgia, serif",
                    fontSize: "1.2rem",
                    lineHeight: 1.5,
                    color: "text.primary",
                  }}
                >
                  “{item.quote}”
                </Typography>
                <Typography
                  variant="body2"
                  color="text.secondary"
                  component="footer"
                >
                  — {item.attribution}
                </Typography>
              </Box>
            </Grid>
          ))}
        </Grid>

        <Box sx={{ textAlign: { xs: "center", md: "left" } }}>
          <PrimaryCTA
            variant="outlined"
            label={homeReviewsPreview.cta.label}
            href={homeReviewsPreview.cta.href}
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
        </Box>
      </Container>
    </Box>
  );
}
