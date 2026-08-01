import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import { homeMission } from "@/content/home";

export default function Mission() {
  return (
    <Box
      component="section"
      aria-labelledby="mission-heading"
      sx={{
        py: { xs: 8, md: 12 },
        bgcolor: "background.default",
      }}
    >
      <Container maxWidth="md" sx={{ textAlign: "center" }}>
        <Typography
          id="mission-heading"
          variant="h2"
          component="h2"
          sx={{
            mb: 3,
            fontSize: {
              xs: "clamp(2rem, 1.5rem + 2.5vw, 2.75rem)",
              md: "clamp(2.5rem, 2rem + 1.5vw, 3.5rem)",
            },
            lineHeight: 1.15,
          }}
        >
          {homeMission.lines.map((line) => (
            <Box key={line} component="span" sx={{ display: "block" }}>
              {line}
            </Box>
          ))}
        </Typography>
        <Typography
          variant="body1"
          color="text.secondary"
          sx={{
            maxWidth: "36rem",
            mx: "auto",
            fontSize: { xs: "1.05rem", md: "1.125rem" },
          }}
        >
          {homeMission.body}
        </Typography>
      </Container>
    </Box>
  );
}
