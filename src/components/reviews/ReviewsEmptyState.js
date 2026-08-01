import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { brandRadii } from "@/theme/brandTokens";

/**
 * Intentional empty state when no approved testimonials are published yet.
 * Do not render empty decorative cards instead of this.
 */
export default function ReviewsEmptyState() {
  return (
    <Box
      role="status"
      aria-live="polite"
      sx={{
        mt: 2,
        p: { xs: 3, md: 4.5 },
        borderRadius: `${brandRadii.card}px`,
        bgcolor: "secondary.main",
        border: "1px solid",
        borderColor: "divider",
        maxWidth: "40rem",
        mx: { xs: "auto", md: 0 },
      }}
    >
      <Typography
        variant="body1"
        color="text.secondary"
        sx={{ fontSize: "1.05rem", lineHeight: 1.7 }}
      >
        Approved client testimonials will be added here as they become
        available. Until then, HNM invites prospective clients to start with a
        free consultation to discuss their needs directly.
      </Typography>
    </Box>
  );
}
