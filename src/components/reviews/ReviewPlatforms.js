import OpenInNewIcon from "@mui/icons-material/OpenInNew";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Link from "@mui/material/Link";
import Typography from "@mui/material/Typography";
import { hasValidExternalUrl, reviewPlatforms } from "@/content/reviews";
import GoogleMark from "@/components/reviews/GoogleMark";
import { brandRadii } from "@/theme/brandTokens";

export default function ReviewPlatforms() {
  const url =
    typeof reviewPlatforms.google.url === "string"
      ? reviewPlatforms.google.url.trim()
      : "";
  const hasUrl = hasValidExternalUrl(url);

  return (
    <Box
      component="section"
      aria-labelledby="review-platforms-heading"
      sx={{ py: { xs: 7, md: 10 }, bgcolor: "background.default" }}
    >
      <Container maxWidth="lg">
        <Typography
          id="review-platforms-heading"
          variant="h2"
          component="h2"
          sx={{ mb: 1.5 }}
        >
          {reviewPlatforms.title}
        </Typography>
        <Typography
          variant="body1"
          color="text.secondary"
          sx={{ mb: 4, maxWidth: "40rem" }}
        >
          {hasUrl
            ? reviewPlatforms.supporting
            : reviewPlatforms.pendingNote}
        </Typography>

        <Box
          sx={{
            maxWidth: { xs: "100%", sm: 420 },
            p: 3,
            borderRadius: `${brandRadii.card}px`,
            bgcolor: "secondary.main",
            border: "1px solid",
            borderColor: "divider",
            display: "flex",
            flexDirection: "column",
            gap: 1.5,
          }}
        >
          <Box sx={{ display: "flex", alignItems: "center", gap: 1.5 }}>
            <GoogleMark />
            <Typography variant="h3" component="h3" sx={{ typography: "h6" }}>
              Google
            </Typography>
          </Box>

          {hasUrl ? (
            <Link
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              underline="hover"
              aria-label={`${reviewPlatforms.google.label} (opens in a new tab)`}
              sx={{
                display: "inline-flex",
                alignItems: "center",
                gap: 0.75,
                fontWeight: 600,
                color: "primary.dark",
                width: "fit-content",
                minHeight: 44,
              }}
            >
              {reviewPlatforms.google.label}
              <OpenInNewIcon fontSize="small" aria-hidden />
            </Link>
          ) : (
            <Typography variant="body2" color="text.secondary" component="p">
              {reviewPlatforms.google.unavailableLabel}
            </Typography>
          )}
        </Box>
      </Container>
    </Box>
  );
}
