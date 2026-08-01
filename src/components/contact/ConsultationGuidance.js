import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import { consultationGuidance } from "@/content/contact";
import PrimaryCTA from "@/components/shared/PrimaryCTA";
import { brandRadii } from "@/theme/brandTokens";

export default function ConsultationGuidance() {
  return (
    <Box
      component="section"
      aria-labelledby="consultation-guidance-heading"
      sx={{ py: { xs: 6, md: 8 }, bgcolor: "background.default" }}
    >
      <Container maxWidth="lg">
        <Box
          sx={{
            p: { xs: 3, md: 4 },
            borderRadius: `${brandRadii.card}px`,
            bgcolor: "secondary.main",
            border: "1px solid",
            borderColor: "divider",
            borderLeft: "4px solid",
            borderLeftColor: "primary.dark",
            maxWidth: "46rem",
          }}
        >
          <Typography
            id="consultation-guidance-heading"
            variant="h2"
            component="h2"
            sx={{
              mb: 1.5,
              fontSize: {
                xs: "clamp(1.6rem, 1.35rem + 1.2vw, 2rem)",
                md: "clamp(1.85rem, 1.6rem + 0.8vw, 2.25rem)",
              },
            }}
          >
            {consultationGuidance.title}
          </Typography>
          <Typography
            variant="body1"
            color="text.secondary"
            sx={{ mb: 3, maxWidth: "38rem" }}
          >
            {consultationGuidance.body}
          </Typography>
          <PrimaryCTA
            label={consultationGuidance.cta.label}
            href={consultationGuidance.cta.href}
            sx={{ width: { xs: "100%", sm: "auto" } }}
          />
        </Box>
      </Container>
    </Box>
  );
}
