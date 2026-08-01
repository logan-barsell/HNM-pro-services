import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import { reviewSubmission } from "@/content/reviews";
import { brandRadii } from "@/theme/brandTokens";

/**
 * Soft guidance for past clients only.
 * Leave-a-review buttons stay inactive until approved profile URLs exist.
 */
export default function ReviewInvitation() {
  return (
    <Box
      component="section"
      aria-labelledby="review-invitation-heading"
      sx={{ py: { xs: 7, md: 9 }, bgcolor: "background.default" }}
    >
      <Container maxWidth="md">
        <Box
          sx={{
            p: { xs: 3, md: 4 },
            borderRadius: `${brandRadii.card}px`,
            bgcolor: "secondary.main",
            border: "1px solid",
            borderColor: "divider",
            textAlign: "center",
          }}
        >
          <Typography
            id="review-invitation-heading"
            variant="h2"
            component="h2"
            sx={{ mb: 2, typography: { xs: "h4", md: "h3" } }}
          >
            {reviewSubmission.title}
          </Typography>
          <Typography
            variant="body1"
            color="text.secondary"
            sx={{ maxWidth: "36rem", mx: "auto", fontSize: "1.05rem" }}
          >
            {reviewSubmission.body}
          </Typography>
        </Box>
      </Container>
    </Box>
  );
}
