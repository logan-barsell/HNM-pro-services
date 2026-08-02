import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import { servicesFinalCta } from "@/content/servicesPage";
import PrimaryCTA from "@/components/shared/PrimaryCTA";

export default function ServicesFinalCTA() {
  return (
    <Box
      component="section"
      aria-labelledby="services-final-cta-heading"
      sx={{
        py: { xs: 8, md: 11 },
        bgcolor: "background.default",
      }}
    >
      <Container maxWidth="md" sx={{ textAlign: "center" }}>
        <Typography
          id="services-final-cta-heading"
          variant="h2"
          component="h2"
          sx={{
            mb: 2.5,
            fontSize: {
              xs: "clamp(1.9rem, 1.5rem + 2vw, 2.6rem)",
              md: "clamp(2.3rem, 1.9rem + 1.2vw, 3rem)",
            },
          }}
        >
          {servicesFinalCta.title}
        </Typography>
        <Typography
          variant="body1"
          color="text.secondary"
          sx={{
            mb: 4,
            maxWidth: "34rem",
            mx: "auto",
            fontSize: { xs: "1.05rem", md: "1.125rem" },
          }}
        >
          {servicesFinalCta.body}
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
            label={servicesFinalCta.primaryCta.label}
            href={servicesFinalCta.primaryCta.href}
            sx={{ width: { xs: "100%", sm: "auto" } }}
          />
          <PrimaryCTA
            variant="outlined"
            label={servicesFinalCta.secondaryCta.label}
            href={servicesFinalCta.secondaryCta.href}
            sx={{ width: { xs: "100%", sm: "auto" } }}
          />
        </Stack>
      </Container>
    </Box>
  );
}
