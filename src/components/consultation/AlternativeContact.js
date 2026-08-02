import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import PhoneOutlinedIcon from "@mui/icons-material/PhoneOutlined";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import {
  alternativeContact,
  consultationBusiness,
} from "@/content/consultation";
import AppLink from "@/components/shared/AppLink";
import ContactValueLink from "@/components/shared/ContactValueLink";
import {
  isApprovedContactValue,
  toMailtoHref,
  toTelHref,
} from "@/utils/contactValues";

export default function AlternativeContact() {
  const phoneApproved = isApprovedContactValue(consultationBusiness.phone);
  const emailApproved = isApprovedContactValue(consultationBusiness.email);
  const telHref = toTelHref(consultationBusiness.phone);
  const mailHref = toMailtoHref(consultationBusiness.email);

  return (
    <Box
      component="section"
      aria-labelledby="alternative-contact-heading"
      sx={{
        py: { xs: 7, md: 10 },
        bgcolor: "primary.dark",
        color: "common.white",
      }}
    >
      <Container maxWidth="md">
        <Typography
          id="alternative-contact-heading"
          variant="h2"
          component="h2"
          sx={{ mb: 1.5, color: "common.white" }}
        >
          {alternativeContact.title}
        </Typography>
        <Typography
          variant="body1"
          sx={{
            mb: 3.5,
            maxWidth: "40rem",
            color: "rgba(255,255,255,0.9)",
          }}
        >
          {alternativeContact.supporting}
        </Typography>

        <Stack spacing={2} sx={{ alignItems: "flex-start" }}>
          {phoneApproved && telHref ? (
            <ContactValueLink
              href={telHref}
              icon={PhoneOutlinedIcon}
              label={alternativeContact.callLabel}
              value={consultationBusiness.phone}
              tone="green"
            />
          ) : (
            <Typography variant="body2" sx={{ color: "rgba(255,255,255,0.75)" }}>
              {alternativeContact.phoneUnavailable}
            </Typography>
          )}

          {emailApproved && mailHref ? (
            <ContactValueLink
              href={mailHref}
              icon={EmailOutlinedIcon}
              label={alternativeContact.emailLabel}
              value={consultationBusiness.email}
              tone="green"
            />
          ) : (
            <Typography variant="body2" sx={{ color: "rgba(255,255,255,0.75)" }}>
              {alternativeContact.emailUnavailable}
            </Typography>
          )}
        </Stack>

        <Typography
          variant="body2"
          sx={{ mt: 3.5, color: "rgba(255,255,255,0.85)" }}
        >
          Or visit the{" "}
          <AppLink
            href={alternativeContact.contactHref}
            underline="hover"
            sx={{ fontWeight: 600, color: "common.white" }}
          >
            Contact page
          </AppLink>{" "}
          for general inquiries.
        </Typography>
      </Container>
    </Box>
  );
}
