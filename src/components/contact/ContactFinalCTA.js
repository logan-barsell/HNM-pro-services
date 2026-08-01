import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import { contactFinalCta } from "@/content/contact";
import PrimaryCTA from "@/components/shared/PrimaryCTA";

export default function ContactFinalCTA() {
  return (
    <Box
      component="section"
      aria-labelledby="contact-final-cta-heading"
      sx={{
        py: { xs: 8, md: 11 },
        bgcolor: "primary.dark",
        color: "common.white",
      }}
    >
      <Container maxWidth="md" sx={{ textAlign: "center" }}>
        <Typography
          id="contact-final-cta-heading"
          variant="h2"
          component="h2"
          sx={{
            mb: 2.5,
            color: "common.white",
            fontSize: {
              xs: "clamp(1.9rem, 1.5rem + 2vw, 2.6rem)",
              md: "clamp(2.3rem, 1.9rem + 1.2vw, 3rem)",
            },
          }}
        >
          {contactFinalCta.title}
        </Typography>
        <Typography
          variant="body1"
          sx={{
            mb: 4,
            color: "rgba(255,255,255,0.9)",
            maxWidth: "34rem",
            mx: "auto",
            fontSize: { xs: "1.05rem", md: "1.125rem" },
          }}
        >
          {contactFinalCta.body}
        </Typography>
        <Stack
          direction={{ xs: "column", sm: "row" }}
          spacing={1.5}
          sx={{
            justifyContent: "center",
            alignItems: { xs: "stretch", sm: "center" },
          }}
        >
          <PrimaryCTA
            label={contactFinalCta.primaryCta.label}
            href={contactFinalCta.primaryCta.href}
            fullWidth
            sx={{
              width: { xs: "100%", sm: "auto" },
              bgcolor: "common.white",
              color: "primary.dark",
              px: { sm: 4 },
              "&:hover": {
                bgcolor: "background.default",
                color: "primary.dark",
              },
            }}
          />
          <PrimaryCTA
            variant="outlined"
            label={contactFinalCta.secondaryCta.label}
            href={contactFinalCta.secondaryCta.href}
            fullWidth
            sx={{
              width: { xs: "100%", sm: "auto" },
              borderColor: "rgba(255,255,255,0.7)",
              color: "common.white",
              "&:hover": {
                borderColor: "common.white",
                bgcolor: "rgba(255,255,255,0.1)",
              },
            }}
          />
        </Stack>
      </Container>
    </Box>
  );
}
