import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import {
  alternativeContact,
  consultationBusiness,
} from "@/content/consultation";
import AppLink from "@/components/shared/AppLink";
import PrimaryCTA from "@/components/shared/PrimaryCTA";
import { brandRadii } from "@/theme/brandTokens";
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
      sx={{ py: { xs: 7, md: 10 }, bgcolor: "background.default" }}
    >
      <Container maxWidth="md">
        <Typography
          id="alternative-contact-heading"
          variant="h2"
          component="h2"
          sx={{ mb: 1.5 }}
        >
          {alternativeContact.title}
        </Typography>
        <Typography
          variant="body1"
          color="text.secondary"
          sx={{ mb: 3.5, maxWidth: "40rem" }}
        >
          {alternativeContact.supporting}
        </Typography>

        <Box
          sx={{
            p: { xs: 2.5, md: 3 },
            borderRadius: `${brandRadii.card}px`,
            bgcolor: "secondary.main",
            border: "1px solid",
            borderColor: "divider",
          }}
        >
          <Stack spacing={2}>
            {phoneApproved && telHref ? (
              <Button
                component="a"
                href={telHref}
                variant="outlined"
                color="primary"
                aria-label={`${alternativeContact.callLabel} at ${consultationBusiness.phone}`}
                sx={{
                  alignSelf: { xs: "stretch", sm: "flex-start" },
                  minHeight: 44,
                }}
              >
                {alternativeContact.callLabel}
              </Button>
            ) : (
              <Typography variant="body2" color="text.secondary">
                {alternativeContact.phoneUnavailable}
              </Typography>
            )}

            {emailApproved && mailHref ? (
              <Button
                component="a"
                href={mailHref}
                variant="outlined"
                color="primary"
                aria-label={`${alternativeContact.emailLabel} at ${consultationBusiness.email}`}
                sx={{
                  alignSelf: { xs: "stretch", sm: "flex-start" },
                  minHeight: 44,
                }}
              >
                {alternativeContact.emailLabel}
              </Button>
            ) : (
              <Typography variant="body2" color="text.secondary">
                {alternativeContact.emailUnavailable}
              </Typography>
            )}

            <PrimaryCTA
              variant="outlined"
              label={alternativeContact.contactPageLabel}
              href={alternativeContact.contactHref}
              sx={{
                alignSelf: { xs: "stretch", sm: "flex-start" },
                minHeight: 44,
              }}
            />
          </Stack>
        </Box>

        <Typography variant="body2" color="text.secondary" sx={{ mt: 2.5 }}>
          Or visit the{" "}
          <AppLink
            href={alternativeContact.contactHref}
            underline="hover"
            sx={{ fontWeight: 600, color: "primary.dark" }}
          >
            Contact page
          </AppLink>{" "}
          for general inquiries.
        </Typography>
      </Container>
    </Box>
  );
}
