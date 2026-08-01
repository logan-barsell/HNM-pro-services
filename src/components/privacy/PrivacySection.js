import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

/**
 * Reusable privacy policy section with stable anchor id.
 */
export default function PrivacySection({ id, title, children }) {
  return (
    <Box
      component="section"
      id={id}
      aria-labelledby={`${id}-heading`}
      sx={{
        py: { xs: 4, md: 5 },
        borderBottom: "1px solid",
        borderColor: "divider",
        scrollMarginTop: { xs: 6, md: 8 },
        "&:last-of-type": { borderBottom: "none" },
      }}
    >
      <Typography
        id={`${id}-heading`}
        variant="h2"
        component="h2"
        sx={{
          mb: 2,
          fontSize: {
            xs: "clamp(1.45rem, 1.25rem + 1vw, 1.85rem)",
            md: "clamp(1.65rem, 1.45rem + 0.6vw, 2rem)",
          },
        }}
      >
        {title}
      </Typography>
      <Box
        sx={{
          maxWidth: "42rem",
          "& p": { mb: 1.75 },
          "& p:last-child": { mb: 0 },
        }}
      >
        {children}
      </Box>
    </Box>
  );
}
