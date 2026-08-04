import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import PhoneOutlinedIcon from "@mui/icons-material/PhoneOutlined";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import { contactBusiness, contactInfo } from "@/content/contact";
import ContactValueLink from "@/components/shared/ContactValueLink";
import { brandRadii } from "@/theme/brandTokens";
import {
  isApprovedContactValue,
  toMailtoHref,
  toTelHref,
} from "@/utils/contactValues";

export default function ContactDetails() {
  const phoneApproved = isApprovedContactValue(contactBusiness.phone);
  const emailApproved = isApprovedContactValue(contactBusiness.email);
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

        <Stack spacing={2} sx={{ alignItems: "flex-start", mb: 4 }}>
          {phoneApproved && telHref ? (
            <ContactValueLink
              href={telHref}
              icon={PhoneOutlinedIcon}
              label={contactInfo.phone.actionLabel}
              value={contactBusiness.phone}
              tone="cream"
            />
          ) : (
            <Typography variant="body2" color="text.secondary">
              {contactInfo.phone.unavailable}
            </Typography>
          )}

          {emailApproved && mailHref ? (
            <ContactValueLink
              href={mailHref}
              icon={EmailOutlinedIcon}
              label={contactInfo.email.actionLabel}
              value={contactBusiness.email}
              tone="cream"
            />
          ) : (
            <Typography variant="body2" color="text.secondary">
              {contactInfo.email.unavailable}
            </Typography>
          )}
        </Stack>

        <Box
          sx={{
            p: { xs: 2.5, md: 3 },
            maxWidth: "36rem",
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
            {contactInfo.region.label}
          </Typography>
          <Typography
            variant="body2"
            color={regionApproved ? "text.primary" : "text.secondary"}
          >
            {regionApproved
              ? contactBusiness.serviceRegion
              : contactInfo.region.unavailable}
          </Typography>
        </Box>
      </Container>
    </Box>
  );
}
