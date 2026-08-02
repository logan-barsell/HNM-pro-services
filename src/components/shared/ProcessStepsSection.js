import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";

/**
 * Numbered process steps section (centered, no card chrome).
 *
 * @param {object} props
 * @param {string} props.headingId
 * @param {string} props.title
 * @param {string} [props.supporting]
 * @param {{ number: string, title: string, description: string }[]} props.steps
 * @param {"cream" | "green"} [props.tone]
 * @param {object} [props.itemSize]
 */
export default function ProcessStepsSection({
  headingId,
  title,
  supporting,
  steps = [],
  tone = "cream",
  itemSize = { xs: 12, md: 4 },
}) {
  const isGreen = tone === "green";

  return (
    <Box
      component="section"
      aria-labelledby={headingId}
      sx={{
        py: { xs: 7, md: 10 },
        bgcolor: isGreen ? "primary.dark" : "background.default",
        color: isGreen ? "common.white" : "inherit",
      }}
    >
      <Container maxWidth="lg">
        <Typography
          id={headingId}
          variant="h2"
          component="h2"
          sx={{
            mb: 1.5,
            color: isGreen ? "common.white" : "inherit",
            textAlign: { xs: "center", md: "left" },
          }}
        >
          {title}
        </Typography>
        {supporting ? (
          <Typography
            variant="body1"
            sx={{
              mb: { xs: 4, md: 5 },
              maxWidth: "40rem",
              color: isGreen ? "rgba(255,255,255,0.9)" : "text.secondary",
              textAlign: { xs: "center", md: "left" },
              mx: { xs: "auto", md: 0 },
            }}
          >
            {supporting}
          </Typography>
        ) : null}

        <Grid container spacing={2.5}>
          {steps.map((step) => (
            <Grid key={step.number} size={itemSize}>
              <Box
                sx={{
                  height: "100%",
                  p: 3,
                  textAlign: "center",
                }}
              >
                <Typography
                  component="p"
                  aria-hidden
                  sx={{
                    fontFamily: "var(--font-display), Georgia, serif",
                    fontWeight: 600,
                    fontSize: "2rem",
                    color: isGreen ? "common.white" : "primary.dark",
                    lineHeight: 1,
                    mb: 1.5,
                  }}
                >
                  {step.number}
                </Typography>
                <Typography
                  variant="h3"
                  component="h3"
                  sx={{
                    typography: "h6",
                    mb: 1,
                    color: isGreen ? "common.white" : "inherit",
                  }}
                >
                  {step.title}
                </Typography>
                <Typography
                  variant="body2"
                  sx={{
                    color: isGreen
                      ? "rgba(255,255,255,0.85)"
                      : "text.secondary",
                  }}
                >
                  {step.description}
                </Typography>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}
