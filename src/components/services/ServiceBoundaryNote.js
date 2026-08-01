import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { brandRadii } from "@/theme/brandTokens";

/**
 * Visible service-boundary or expectation note.
 * Not conveyed by color alone — includes a text label.
 */
export default function ServiceBoundaryNote({
  children,
  title = "Please note",
}) {
  return (
    <Box
      role="note"
      sx={{
        mt: 3,
        p: { xs: 2, md: 2.5 },
        borderRadius: `${brandRadii.card}px`,
        bgcolor: "secondary.main",
        border: "1px solid",
        borderColor: "divider",
        borderLeft: "4px solid",
        borderLeftColor: "primary.dark",
      }}
    >
      <Typography
        variant="overline"
        component="p"
        sx={{ color: "primary.dark", mb: 1 }}
      >
        {title}
      </Typography>
      <Typography
        variant="body2"
        color="text.primary"
        sx={{ lineHeight: 1.65 }}
      >
        {children}
      </Typography>
    </Box>
  );
}
