import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { homeReviewsPreview } from "@/content/home";
import { getHomeReviews } from "@/content/reviewsData";
import { reviewsAttribution } from "@/content/reviews";
import TestimonialCard from "@/components/reviews/TestimonialCard";
import PrimaryCTA from "@/components/shared/PrimaryCTA";

export default function ReviewsPreview() {
  const reviews = getHomeReviews();
  const hasReviews = reviews.length > 0;

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
          {hasReviews
            ? homeReviewsPreview.supporting
            : homeReviewsPreview.emptyNote}
        </Typography>

        {hasReviews ? (
          <Grid container spacing={3} sx={{ mb: 2 }}>
            {reviews.map((item) => (
              <Grid key={item.id} size={{ xs: 12, md: 4 }}>
                <TestimonialCard {...item} tone="onGreen" />
              </Grid>
            ))}
          </Grid>
        ) : null}

        {hasReviews ? (
          <Typography
            variant="caption"
            sx={{
              display: "block",
              mb: 4,
              color: "rgba(255,255,255,0.7)",
              textAlign: { xs: "center", md: "left" },
            }}
          >
            {reviewsAttribution}
          </Typography>
        ) : (
          <Box sx={{ mb: 4 }} />
        )}

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
