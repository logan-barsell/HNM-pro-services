import Box from "@mui/material/Box";
import Link from "@mui/material/Link";
import Typography from "@mui/material/Typography";
import { brandRadii } from "@/theme/brandTokens";
import { hasValidExternalUrl } from "@/utils/urls";

/**
 * Renders a single Google review / testimonial in site UI.
 */
export default function TestimonialCard({
  quote,
  attribution,
  serviceCategory,
  platform,
  date,
  sourceUrl,
  rating,
  tone = "cream",
}) {
  const onGreen = tone === "onGreen";
  const hasSource = hasValidExternalUrl(sourceUrl);

  return (
    <Box
      component="blockquote"
      cite={hasSource ? sourceUrl : undefined}
      sx={{
        m: 0,
        height: "100%",
        display: "flex",
        flexDirection: "column",
        p: { xs: 3, md: 3.5 },
        borderRadius: `${brandRadii.card}px`,
        bgcolor: onGreen ? "background.default" : "secondary.main",
        border: "1px solid",
        borderColor: onGreen ? "rgba(255,255,255,0.18)" : "divider",
        boxShadow: "none",
        color: "text.primary",
      }}
    >
      <Typography
        aria-hidden
        component="span"
        sx={{
          fontFamily: "var(--font-display), Georgia, serif",
          fontSize: "2rem",
          lineHeight: 1,
          color: "primary.dark",
          mb: 1.5,
          opacity: 0.7,
        }}
      >
        “
      </Typography>

      <Typography
        variant="body1"
        sx={{
          mb: 2.5,
          flexGrow: 1,
          fontSize: "1.05rem",
          lineHeight: 1.7,
          color: "text.primary",
        }}
      >
        {quote}
      </Typography>

      {typeof rating === "number" ? (
        <Typography
          variant="body2"
          sx={{ mb: 1, color: "primary.dark", fontWeight: 600 }}
        >
          Rated {rating} out of 5
        </Typography>
      ) : null}

      <Box component="footer">
        {attribution ? (
          <Typography variant="subtitle2" sx={{ color: "text.primary" }}>
            — {attribution}
          </Typography>
        ) : null}
        {(serviceCategory || platform || date) && (
          <Typography
            variant="caption"
            color="text.secondary"
            sx={{ mt: 0.5, display: "block" }}
          >
            {[serviceCategory, platform, date].filter(Boolean).join(" · ")}
          </Typography>
        )}
        {hasSource ? (
          <Link
            href={sourceUrl}
            target="_blank"
            rel="noopener noreferrer"
            underline="hover"
            sx={{
              mt: 1,
              display: "inline-block",
              fontWeight: 600,
              fontSize: "0.85rem",
              color: "primary.dark",
            }}
          >
            View on Google
          </Link>
        ) : null}
      </Box>
    </Box>
  );
}
