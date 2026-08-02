import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { brandRadii } from "@/theme/brandTokens";

/**
 * Visible service-boundary or expectation note.
 * Not conveyed by color alone — includes a text label.
 *
 * @param {"default" | "disclaimer"} [variant]
 */
export default function ServiceBoundaryNote({
  children,
  title = "Please note",
  tone = "cream",
  variant = "default",
}) {
  const isGreen = tone === "green";
  const isDisclaimer = variant === "disclaimer";

  if (isDisclaimer) {
    return (
      <Box
        role="note"
        sx={{
          mt: 2,
          pt: 2,
          borderTop: "1px solid",
          borderColor: isGreen ? "rgba(255,255,255,0.2)" : "divider",
        }}
      >
        <Typography
          variant="caption"
          component="p"
          sx={{
            display: "block",
            fontWeight: 600,
            letterSpacing: "0.04em",
            textTransform: "uppercase",
            mb: 0.75,
            color: isGreen ? "rgba(255,255,255,0.7)" : "text.secondary",
          }}
        >
          {title}
        </Typography>
        <Typography
          variant="caption"
          component="p"
          sx={{
            display: "block",
            lineHeight: 1.6,
            color: isGreen ? "rgba(255,255,255,0.72)" : "text.secondary",
          }}
        >
          {children}
        </Typography>
      </Box>
    );
  }

  return (
    <Box
      role="note"
      sx={{
        mt: 3,
        p: { xs: 2, md: 2.5 },
        borderRadius: `${brandRadii.card}px`,
        bgcolor: isGreen ? "rgba(255,255,255,0.12)" : "secondary.main",
        border: "1px solid",
        borderColor: isGreen ? "rgba(255,255,255,0.22)" : "divider",
        borderLeft: "4px solid",
        borderLeftColor: isGreen ? "common.white" : "primary.dark",
      }}
    >
      <Typography
        variant="overline"
        component="p"
        sx={{
          color: isGreen ? "common.white" : "primary.dark",
          mb: 1,
        }}
      >
        {title}
      </Typography>
      <Typography
        variant="body2"
        sx={{
          lineHeight: 1.65,
          color: isGreen ? "rgba(255,255,255,0.9)" : "text.primary",
        }}
      >
        {children}
      </Typography>
    </Box>
  );
}
