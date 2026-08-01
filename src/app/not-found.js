import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import { routes } from "@/content/routes";
import MainContainer from "@/components/shared/MainContainer";
import PrimaryCTA from "@/components/shared/PrimaryCTA";
import AppLink from "@/components/shared/AppLink";

export default function NotFoundPage() {
  return (
    <MainContainer>
      <Typography
        variant="h1"
        component="h1"
        sx={{ typography: { xs: "h3", md: "h2" }, mb: 2 }}
      >
        Page not found
      </Typography>
      <Typography
        variant="body1"
        color="text.secondary"
        sx={{ mb: 4, maxWidth: "40rem" }}
      >
        The page you requested is unavailable or may have moved. Use the links
        below to continue exploring HNM Professional Services.
      </Typography>

      <Stack direction={{ xs: "column", sm: "row" }} spacing={2} sx={{ mb: 3 }}>
        <AppLink href={routes.home} underline="hover" sx={{ fontWeight: 600 }}>
          Back to Home
        </AppLink>
        <AppLink
          href={routes.services}
          underline="hover"
          sx={{ fontWeight: 600 }}
        >
          View Services
        </AppLink>
      </Stack>

      <Box>
        <PrimaryCTA />
      </Box>
    </MainContainer>
  );
}
