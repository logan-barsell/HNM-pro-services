import OpenInNewIcon from "@mui/icons-material/OpenInNew";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import { reviewSubmission } from "@/content/reviews";
import { hasValidExternalUrl } from "@/utils/urls";
import { brandRadii } from "@/theme/brandTokens";

/**
 * Past-client invitation to leave a Google review.
 * CTA activates when leaveReviewUrl (config or synced writeAReviewUri) is set.
 */
export default function ReviewInvitation() {
  const leaveUrl =
    typeof reviewSubmission.leaveReviewUrl === "string"
      ? reviewSubmission.leaveReviewUrl.trim()
      : "";
  const hasLeaveUrl = hasValidExternalUrl(leaveUrl);

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
            sx={{ maxWidth: "36rem", mx: "auto", fontSize: "1.05rem", mb: 3 }}
          >
            {hasLeaveUrl
              ? reviewSubmission.body
              : reviewSubmission.pendingBody}
          </Typography>

          {hasLeaveUrl ? (
            <Button
              component="a"
              href={leaveUrl}
              target="_blank"
              rel="noopener noreferrer"
              variant="contained"
              color="primary"
              size="large"
              endIcon={<OpenInNewIcon />}
              sx={{ minHeight: 48 }}
            >
              {reviewSubmission.ctaLabel}
            </Button>
          ) : null}
        </Box>
      </Container>
    </Box>
  );
}
