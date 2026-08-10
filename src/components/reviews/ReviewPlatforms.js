import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
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

  const cardSx = {
    maxWidth: { xs: "100%", sm: 420 },
    width: "100%",
    mx: "auto",
    p: 3,
    borderRadius: `${brandRadii.card}px`,
    bgcolor: "secondary.main",
    border: "1px solid",
    borderColor: "divider",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    textAlign: "center",
    gap: 1.5,
    textDecoration: "none",
    color: "inherit",
    ...(hasUrl
      ? {
          cursor: "pointer",
          transition:
            "transform 0.2s ease, box-shadow 0.2s ease, border-color 0.2s ease",
          "&:hover": {
            transform: "translateY(-3px)",
            boxShadow: "0 10px 24px rgba(0, 0, 0, 0.08)",
            borderColor: "primary.dark",
          },
          "&:focus-visible": {
            outline: "2px solid",
            outlineColor: "primary.dark",
            outlineOffset: 3,
          },
          "@media (prefers-reduced-motion: reduce)": {
            transition: "none",
            "&:hover": {
              transform: "none",
            },
          },
        }
      : {}),
  };

  return (
    <Box
      component="section"
      aria-labelledby="review-platforms-heading"
      sx={{
        pt: { xs: 7, md: 10 },
        pb: { xs: 2, md: 3 },
        bgcolor: "background.default",
      }}
    >
      <Container maxWidth="lg">
        <Typography
          id="review-platforms-heading"
          variant="h2"
          component="h2"
          sx={{ mb: 1.5, textAlign: "center" }}
        >
          {reviewPlatforms.title}
        </Typography>
        <Typography
          variant="body1"
          color="text.secondary"
          sx={{
            mb: 4,
            maxWidth: "40rem",
            mx: "auto",
            textAlign: "center",
          }}
        >
          {hasUrl
            ? reviewPlatforms.supporting
            : reviewPlatforms.pendingNote}
        </Typography>

        {hasUrl ? (
          <Box
            component="a"
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`${reviewPlatforms.google.clickNote} (opens in a new tab)`}
            sx={cardSx}
          >
            <Box sx={{ display: "flex", alignItems: "center", gap: 1.5 }}>
              <GoogleMark />
              <Typography variant="h3" component="h3" sx={{ typography: "h6" }}>
                Google
              </Typography>
            </Box>
            <Typography
              variant="caption"
              sx={{ fontWeight: 400, color: "primary.dark" }}
            >
              {reviewPlatforms.google.clickNote}
            </Typography>
          </Box>
        ) : (
          <Box sx={cardSx}>
            <Box sx={{ display: "flex", alignItems: "center", gap: 1.5 }}>
              <GoogleMark />
              <Typography variant="h3" component="h3" sx={{ typography: "h6" }}>
                Google
              </Typography>
            </Box>
            <Typography variant="body2" color="text.secondary" component="p">
              {reviewPlatforms.google.unavailableLabel}
            </Typography>
          </Box>
        )}
      </Container>
    </Box>
  );
}
