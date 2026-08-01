import OpenInNewIcon from "@mui/icons-material/OpenInNew";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Link from "@mui/material/Link";
import Typography from "@mui/material/Typography";
import { hasValidExternalUrl, reviewPlatforms } from "@/content/reviews";
import { brandRadii } from "@/theme/brandTokens";

function PlatformCard({ platformKey, platform }) {
  const url = typeof platform.url === "string" ? platform.url.trim() : "";
  const hasUrl = hasValidExternalUrl(url);

  return (
    <Box
      sx={{
        height: "100%",
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
      <Typography variant="h3" component="h3" sx={{ typography: "h6" }}>
        {platformKey === "google" ? "Google" : "Yelp"}
      </Typography>

      {hasUrl ? (
        <Link
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          underline="hover"
          aria-label={`${platform.label} (opens in a new tab)`}
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
          {platform.label}
          <OpenInNewIcon fontSize="small" aria-hidden />
        </Link>
      ) : (
        <Typography variant="body2" color="text.secondary" component="p">
          {platform.unavailableLabel}
        </Typography>
      )}
    </Box>
  );
}

export default function ReviewPlatforms() {
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
          {reviewPlatforms.temporaryNote}
        </Typography>

        <Grid container spacing={2.5}>
          <Grid size={{ xs: 12, sm: 6 }}>
            <PlatformCard
              platformKey="google"
              platform={reviewPlatforms.google}
            />
          </Grid>
          <Grid size={{ xs: 12, sm: 6 }}>
            <PlatformCard platformKey="yelp" platform={reviewPlatforms.yelp} />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
