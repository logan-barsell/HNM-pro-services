import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { serviceProcess } from "@/content/servicesPage";
import { brandRadii } from "@/theme/brandTokens";

export default function ServiceProcess() {
  return (
    <Box
      component="section"
      aria-labelledby="service-process-heading"
      sx={{ py: { xs: 7, md: 10 }, bgcolor: "background.default" }}
    >
      <Container maxWidth="lg">
        <Typography
          id="service-process-heading"
          variant="h2"
          component="h2"
          sx={{ mb: 1.5, textAlign: { xs: "center", md: "left" } }}
        >
          {serviceProcess.title}
        </Typography>
        <Typography
          variant="body1"
          color="text.secondary"
          sx={{
            mb: { xs: 4, md: 5 },
            maxWidth: "42rem",
            textAlign: { xs: "center", md: "left" },
            mx: { xs: "auto", md: 0 },
          }}
        >
          {serviceProcess.supporting}
        </Typography>

        <Grid container spacing={2.5}>
          {serviceProcess.steps.map((step) => (
            <Grid key={step.number} size={{ xs: 12, sm: 6, md: 3 }}>
              <Box
                sx={{
                  height: "100%",
                  p: 3,
                  borderRadius: `${brandRadii.card}px`,
                  bgcolor: "secondary.main",
                  border: "1px solid",
                  borderColor: "divider",
                }}
              >
                <Typography
                  component="p"
                  aria-hidden
                  sx={{
                    fontFamily: "var(--font-display), Georgia, serif",
                    fontWeight: 600,
                    fontSize: "2rem",
                    color: "primary.dark",
                    lineHeight: 1,
                    mb: 1.5,
                  }}
                >
                  {step.number}
                </Typography>
                <Typography
                  variant="h3"
                  component="h3"
                  sx={{ typography: "h6", mb: 1 }}
                >
                  {step.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
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
