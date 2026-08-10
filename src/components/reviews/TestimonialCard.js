import StarRoundedIcon from "@mui/icons-material/StarRounded";
import Box from "@mui/material/Box";
import Link from "@mui/material/Link";
import Typography from "@mui/material/Typography";
import { brandRadii } from "@/theme/brandTokens";
import { hasValidExternalUrl } from "@/utils/urls";

/**
 * Renders a single review / testimonial in site UI.
 * "View on Google" only appears when sourceUrl is present (synced Google reviews).
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
        variant="body1"
        sx={{
          mb: 2.5,
          flexGrow: 1,
          fontSize: "1.05rem",
          lineHeight: 1.7,
          color: "text.primary",
        }}
      >
        <Box
          component="span"
          aria-hidden
          sx={{
            fontFamily: "var(--font-display), Georgia, serif",
            fontSize: "1.75rem",
            lineHeight: 0,
            color: "primary.dark",
            opacity: 0.7,
            mr: 0.25,
          }}
        >
          “
        </Box>
        {quote}
        <Box
          component="span"
          aria-hidden
          sx={{
            fontFamily: "var(--font-display), Georgia, serif",
            fontSize: "1.75rem",
            lineHeight: 0,
            color: "primary.dark",
            opacity: 0.7,
            ml: 0.25,
          }}
        >
          ”
        </Box>
      </Typography>

      {typeof rating === "number" ? (
        <Box
          sx={{
            display: "inline-flex",
            alignItems: "center",
            gap: 0.5,
            mb: 1,
            color: "primary.dark",
          }}
          aria-label={`Rated ${rating} out of 5`}
        >
          <Typography
            variant="body2"
            component="span"
            sx={{ fontWeight: 600, color: "inherit", lineHeight: 1 }}
          >
            {rating}
          </Typography>
          <StarRoundedIcon sx={{ fontSize: 18 }} aria-hidden />
        </Box>
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
