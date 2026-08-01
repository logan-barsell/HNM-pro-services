import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { brandRadii } from "@/theme/brandTokens";

/**
 * Renders a single approved testimonial.
 * Do not pass invented ratings, names, or quotes.
 */
export default function TestimonialCard({
  quote,
  attribution,
  serviceCategory,
  platform,
  date,
  sourceUrl,
  rating,
}) {
  return (
    <Box
      component="blockquote"
      cite={sourceUrl || undefined}
      sx={{
        m: 0,
        height: "100%",
        display: "flex",
        flexDirection: "column",
        p: { xs: 3, md: 3.5 },
        borderRadius: `${brandRadii.card}px`,
        bgcolor: "secondary.main",
        border: "1px solid",
        borderColor: "divider",
        boxShadow: "none",
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
      </Box>
    </Box>
  );
}
