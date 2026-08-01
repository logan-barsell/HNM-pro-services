import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { brandRadii } from "@/theme/brandTokens";

export default function MediaPlaceholder({
  label,
  minHeight = { xs: 200, md: 280 },
  ratio,
  sx,
  ...props
}) {
  return (
    <Box
      role="img"
      aria-label={label}
      sx={{
        minHeight,
        aspectRatio: ratio,
        borderRadius: `${brandRadii.media}px`,
        bgcolor: "secondary.main",
        border: "1px dashed",
        borderColor: "divider",
        display: "grid",
        placeItems: "center",
        px: 3,
        textAlign: "center",
        ...sx,
      }}
      {...props}
    >
      <Typography variant="body2" color="text.secondary" sx={{ maxWidth: "28rem" }}>
        {label}
      </Typography>
    </Box>
  );
}
