import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import { contactBusiness, contactInfo } from "@/content/contact";
import { brandRadii } from "@/theme/brandTokens";
import {
  isApprovedContactValue,
  toMailtoHref,
  toTelHref,
} from "@/utils/contactValues";

function DetailBlock({ label, children }) {
  return (
    <Box
      sx={{
        height: "100%",
        p: { xs: 2.5, md: 3 },
        borderRadius: `${brandRadii.card}px`,
        bgcolor: "secondary.main",
        border: "1px solid",
        borderColor: "divider",
      }}
    >
      <Typography
        variant="overline"
        component="h3"
        sx={{ color: "primary.dark", mb: 1, display: "block" }}
      >
        {label}
      </Typography>
      {children}
    </Box>
  );
}

export default function ContactDetails() {
  const phoneApproved = isApprovedContactValue(contactBusiness.phone);
  const emailApproved = isApprovedContactValue(contactBusiness.email);
  const hoursApproved = isApprovedContactValue(contactBusiness.businessHours);
  const regionApproved = isApprovedContactValue(contactBusiness.serviceRegion);
  const telHref = toTelHref(contactBusiness.phone);
  const mailHref = toMailtoHref(contactBusiness.email);

  return (
    <Box
      component="section"
      aria-labelledby="contact-details-heading"
      sx={{ py: { xs: 7, md: 10 }, bgcolor: "background.default" }}
    >
      <Container maxWidth="lg">
        <Typography
          id="contact-details-heading"
          variant="h2"
          component="h2"
          sx={{ mb: 1.5 }}
        >
          {contactInfo.title}
        </Typography>
        <Typography
          variant="body1"
          color="text.secondary"
          sx={{ mb: 4, maxWidth: "40rem" }}
        >
          {contactInfo.supporting}
        </Typography>

        <Grid container spacing={2.5}>
          <Grid size={{ xs: 12, sm: 6 }}>
            <DetailBlock label={contactInfo.phone.label}>
              {phoneApproved && telHref ? (
                <Stack spacing={1.25} sx={{ alignItems: "flex-start" }}>
                  <Typography variant="body1" sx={{ fontWeight: 600 }}>
                    {contactBusiness.phone}
                  </Typography>
                  <Button
                    component="a"
                    href={telHref}
                    variant="outlined"
                    color="primary"
                    aria-label={`${contactInfo.phone.actionLabel} at ${contactBusiness.phone}`}
                    sx={{ minHeight: 44 }}
                  >
                    {contactInfo.phone.actionLabel}
                  </Button>
                </Stack>
              ) : (
                <Typography variant="body2" color="text.secondary">
                  {contactInfo.phone.unavailable}
                </Typography>
              )}
            </DetailBlock>
          </Grid>

          <Grid size={{ xs: 12, sm: 6 }}>
            <DetailBlock label={contactInfo.email.label}>
              {emailApproved && mailHref ? (
                <Stack spacing={1.25} sx={{ alignItems: "flex-start" }}>
                  <Typography variant="body1" sx={{ fontWeight: 600 }}>
                    {contactBusiness.email}
                  </Typography>
                  <Button
                    component="a"
                    href={mailHref}
                    variant="outlined"
                    color="primary"
                    aria-label={`${contactInfo.email.actionLabel} at ${contactBusiness.email}`}
                    sx={{ minHeight: 44 }}
                  >
                    {contactInfo.email.actionLabel}
                  </Button>
                </Stack>
              ) : (
                <Typography variant="body2" color="text.secondary">
                  {contactInfo.email.unavailable}
                </Typography>
              )}
            </DetailBlock>
          </Grid>

          <Grid size={{ xs: 12, sm: 6 }}>
            <DetailBlock label={contactInfo.hours.label}>
              <Typography
                variant="body2"
                color={hoursApproved ? "text.primary" : "text.secondary"}
              >
                {hoursApproved
                  ? contactBusiness.businessHours
                  : contactInfo.hours.unavailable}
              </Typography>
            </DetailBlock>
          </Grid>

          <Grid size={{ xs: 12, sm: 6 }}>
            <DetailBlock label={contactInfo.region.label}>
              <Typography
                variant="body2"
                color={regionApproved ? "text.primary" : "text.secondary"}
              >
                {regionApproved
                  ? contactBusiness.serviceRegion
                  : contactInfo.region.unavailable}
              </Typography>
            </DetailBlock>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
