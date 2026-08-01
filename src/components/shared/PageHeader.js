import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

export default function PageHeader({ eyebrow, title, description }) {
  return (
    <Box component="header" sx={{ mb: { xs: 4, md: 5 } }}>
      {eyebrow ? (
        <Typography
          variant="overline"
          component="p"
          sx={{ color: "primary.dark", mb: 1.25 }}
        >
          {eyebrow}
        </Typography>
      ) : null}
      <Typography variant="h1" component="h1" sx={{ mb: 1.75 }}>
        {title}
      </Typography>
      {description ? (
        <Typography
          variant="body1"
          component="p"
          sx={{
            color: "text.secondary",
            maxWidth: "42rem",
            fontWeight: 400,
          }}
        >
          {description}
        </Typography>
      ) : null}
    </Box>
  );
}
