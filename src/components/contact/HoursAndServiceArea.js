import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import {
  contactBusiness,
  contactInfo,
  hoursAndServiceArea,
} from "@/content/contact";
import AppLink from "@/components/shared/AppLink";
import { brandRadii } from "@/theme/brandTokens";
import { isApprovedContactValue } from "@/utils/contactValues";

export default function HoursAndServiceArea() {
  const hoursApproved = isApprovedContactValue(contactBusiness.businessHours);
  const regionApproved = isApprovedContactValue(contactBusiness.serviceRegion);

  return (
    <Box
      component="section"
      aria-labelledby="hours-service-area-heading"
      sx={{
        py: { xs: 7, md: 10 },
        bgcolor: "primary.dark",
        color: "common.white",
      }}
    >
      <Container maxWidth="lg">
        <Typography
          id="hours-service-area-heading"
          variant="h2"
          component="h2"
          sx={{ mb: 1.5, color: "common.white" }}
        >
          {hoursAndServiceArea.title}
        </Typography>
        <Typography
          variant="body1"
          sx={{ mb: 4, maxWidth: "42rem", color: "rgba(255,255,255,0.9)" }}
        >
          {hoursAndServiceArea.body}
        </Typography>

        <Grid container spacing={2.5} sx={{ mb: 3 }}>
          <Grid size={{ xs: 12, md: 6 }}>
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
                {contactInfo.hours.label}
              </Typography>
              <Typography
                variant="body2"
                color={hoursApproved ? "text.primary" : "text.secondary"}
              >
                {hoursApproved
                  ? contactBusiness.businessHours
                  : contactInfo.hours.unavailable}
              </Typography>
            </Box>
          </Grid>
          <Grid size={{ xs: 12, md: 6 }}>
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
                {contactInfo.region.label}
              </Typography>
              <Typography
                variant="body2"
                color={regionApproved ? "text.primary" : "text.secondary"}
                sx={{ mb: 1.5 }}
              >
                {regionApproved
                  ? contactBusiness.serviceRegion
                  : contactInfo.region.unavailable}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {hoursAndServiceArea.availabilityNote}
              </Typography>
            </Box>
          </Grid>
        </Grid>

        <Typography variant="body2" sx={{ color: "rgba(255,255,255,0.9)" }}>
          {hoursAndServiceArea.unsureLead}{" "}
          <AppLink
            href="#contact-details-heading"
            underline="hover"
            sx={{ fontWeight: 600, color: "common.white" }}
          >
            Contact HNM
          </AppLink>{" "}
          or{" "}
          <AppLink
            href={hoursAndServiceArea.consultationHref}
            underline="hover"
            sx={{ fontWeight: 600, color: "common.white" }}
          >
            request a consultation
          </AppLink>
          .
        </Typography>
      </Container>
    </Box>
  );
}
