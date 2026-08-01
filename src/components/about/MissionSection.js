import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import { aboutMission } from "@/content/about";

export default function MissionSection() {
  return (
    <Box
      component="section"
      aria-labelledby="about-mission-heading"
      sx={{
        py: { xs: 8, md: 12 },
        bgcolor: "primary.dark",
        color: "common.white",
      }}
    >
      <Container maxWidth="md" sx={{ textAlign: "center" }}>
        <Typography
          id="about-mission-heading"
          variant="h2"
          component="h2"
          sx={{
            mb: 3,
            color: "common.white",
            fontSize: {
              xs: "clamp(2rem, 1.5rem + 2.5vw, 2.75rem)",
              md: "clamp(2.5rem, 2rem + 1.5vw, 3.5rem)",
            },
            lineHeight: 1.15,
          }}
        >
          {aboutMission.tagline}
        </Typography>
        <Typography
          variant="body1"
          sx={{
            color: "rgba(255,255,255,0.9)",
            maxWidth: "36rem",
            mx: "auto",
            fontSize: { xs: "1.05rem", md: "1.125rem" },
          }}
        >
          {aboutMission.body}
        </Typography>
      </Container>
    </Box>
  );
}
