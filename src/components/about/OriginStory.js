import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { originStory } from "@/content/about";
import { brandRadii } from "@/theme/brandTokens";

export default function OriginStory() {
  return (
    <Box
      component="section"
      aria-labelledby="origin-story-heading"
      sx={{
        py: { xs: 7, md: 10 },
        bgcolor: "primary.dark",
        color: "common.white",
      }}
    >
      <Container maxWidth="lg">
        <Box sx={{ maxWidth: "44rem", mb: { xs: 4, md: 5 } }}>
          <Typography
            id="origin-story-heading"
            variant="h2"
            component="h2"
            sx={{ mb: 2.5, color: "common.white" }}
          >
            {originStory.title}
          </Typography>
          <Typography
            variant="body1"
            sx={{ fontSize: "1.05rem", color: "rgba(255,255,255,0.9)" }}
          >
            {originStory.introduction}
          </Typography>
        </Box>

        <Grid container spacing={2.5}>
          {originStory.pendingTopics.map((topic) => (
            <Grid key={topic.title} size={{ xs: 12, md: 6 }}>
              <Box
                sx={{
                  height: "100%",
                  p: 3,
                  borderRadius: `${brandRadii.card}px`,
                  bgcolor: "background.default",
                  border: "1px solid",
                  borderColor: "rgba(255,255,255,0.18)",
                  color: "text.primary",
                }}
              >
                <Typography
                  variant="h3"
                  component="h3"
                  sx={{ typography: "h6", mb: 1.25 }}
                >
                  {topic.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {topic.body}
                </Typography>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}
