"use client";

import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import { consultationSuccess } from "@/content/consultation";
import PrimaryCTA from "@/components/shared/PrimaryCTA";
import { brandRadii } from "@/theme/brandTokens";

export default function ConsultationSuccess({ headingRef }) {
  return (
    <Box
      role="status"
      aria-live="polite"
      sx={{
        p: { xs: 3, md: 4 },
        borderRadius: `${brandRadii.card}px`,
        bgcolor: "background.default",
        border: "1px solid",
        borderColor: "rgba(255,255,255,0.18)",
        textAlign: "center",
        color: "text.primary",
      }}
    >
      <Typography
        ref={headingRef}
        id="consultation-success-heading"
        variant="h2"
        component="h2"
        tabIndex={-1}
        sx={{
          mb: 2,
          outline: "none",
          fontSize: {
            xs: "clamp(1.7rem, 1.4rem + 1.5vw, 2.2rem)",
            md: "clamp(2rem, 1.7rem + 1vw, 2.5rem)",
          },
        }}
      >
        {consultationSuccess.title}
      </Typography>
      <Typography
        variant="body1"
        color="text.secondary"
        sx={{ mb: 2, maxWidth: "34rem", mx: "auto" }}
      >
        {consultationSuccess.message}
      </Typography>
      <Typography
        variant="body2"
        color="text.secondary"
        sx={{ mb: 4, maxWidth: "32rem", mx: "auto" }}
      >
        {consultationSuccess.disclaimer}
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
          label={consultationSuccess.primaryCta.label}
          href={consultationSuccess.primaryCta.href}
          sx={{ width: { xs: "100%", sm: "auto" } }}
        />
        <PrimaryCTA
          variant="outlined"
          label={consultationSuccess.secondaryCta.label}
          href={consultationSuccess.secondaryCta.href}
          sx={{ width: { xs: "100%", sm: "auto" } }}
        />
      </Stack>
    </Box>
  );
}
