import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { consultationPrivacy } from "@/content/consultation";
import AppLink from "@/components/shared/AppLink";
import { brandRadii } from "@/theme/brandTokens";

export default function ConsultationPrivacyNotice() {
  return (
    <Box
      role="note"
      aria-labelledby="consultation-privacy-heading"
      sx={{
        mb: 3,
        p: { xs: 2.5, md: 3 },
        borderRadius: `${brandRadii.card}px`,
        bgcolor: "secondary.main",
        border: "1px solid",
        borderColor: "divider",
        borderLeft: "4px solid",
        borderLeftColor: "primary.dark",
      }}
    >
      <Typography
        id="consultation-privacy-heading"
        variant="h3"
        component="h3"
        sx={{ typography: "h6", mb: 1.25 }}
      >
        {consultationPrivacy.title}
      </Typography>
      <Typography
        variant="body2"
        color="text.primary"
        sx={{ mb: 1.5, lineHeight: 1.65 }}
      >
        {consultationPrivacy.body}
      </Typography>
      <Typography
        variant="body2"
        color="text.secondary"
        sx={{ lineHeight: 1.65 }}
      >
        {consultationPrivacy.statement}{" "}
        <AppLink
          href={consultationPrivacy.href}
          underline="hover"
          sx={{ fontWeight: 600, color: "primary.dark" }}
        >
          {consultationPrivacy.linkLabel}
        </AppLink>
        .
      </Typography>
    </Box>
  );
}
