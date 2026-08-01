import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { testimonials } from "@/content/reviews";
import ReviewsEmptyState from "@/components/reviews/ReviewsEmptyState";
import TestimonialCard from "@/components/reviews/TestimonialCard";

export default function TestimonialsSection() {
  const hasTestimonials = testimonials.length > 0;

  return (
    <Box
      component="section"
      aria-labelledby="featured-testimonials-heading"
      sx={{ py: { xs: 7, md: 10 }, bgcolor: "background.default" }}
    >
      <Container maxWidth="lg">
        <Typography
          id="featured-testimonials-heading"
          variant="h2"
          component="h2"
          sx={{ mb: 1.5, textAlign: { xs: "center", md: "left" } }}
        >
          What clients are saying
        </Typography>

        {hasTestimonials ? (
          <Grid container spacing={3} sx={{ mt: 1 }}>
            {testimonials.map((item) => (
              <Grid key={item.id} size={{ xs: 12, md: 6, lg: 4 }}>
                <TestimonialCard {...item} />
              </Grid>
            ))}
          </Grid>
        ) : (
          <ReviewsEmptyState />
        )}
      </Container>
    </Box>
  );
}
