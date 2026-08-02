import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Link from "@mui/material/Link";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import { business } from "@/content/business";
import { footerNavigation } from "@/content/navigation";
import AppLink from "@/components/shared/AppLink";
import BrandWordmark from "@/components/shared/BrandWordmark";
import PrimaryCTA from "@/components/shared/PrimaryCTA";
import {
  isApprovedContactValue,
  toMailtoHref,
  toTelHref,
} from "@/utils/contactValues";

export default function SiteFooter() {
  const year = new Date().getFullYear();
  const telHref = toTelHref(business.phone);
  const mailHref = toMailtoHref(business.email);
  const phoneApproved = isApprovedContactValue(business.phone);
  const emailApproved = isApprovedContactValue(business.email);

  return (
    <Box
      component="footer"
      sx={{
        mt: "auto",
        bgcolor: "primary.dark",
        color: "common.white",
        py: { xs: 5, md: 6 },
        borderRadius: 0,
      }}
    >
      <Container maxWidth="lg">
        <Stack spacing={3.5}>
          <Box>
            <BrandWordmark invert />
            <Typography
              variant="body2"
              sx={{
                mt: 1.5,
                color: "rgba(255,255,255,0.88)",
                fontWeight: 500,
                letterSpacing: "0.02em",
                maxWidth: "36rem",
              }}
            >
              {business.tagline}
            </Typography>
          </Box>

          <Box
            component="nav"
            aria-label="Footer"
            sx={{
              display: "flex",
              flexWrap: "wrap",
              alignItems: "center",
              gap: { xs: 1.5, sm: 2 },
              columnGap: { sm: 3 },
            }}
          >
            {footerNavigation.map((item) => (
              <AppLink
                key={`${item.label}-${item.href}`}
                href={item.href}
                underline="hover"
                sx={{
                  color: "rgba(255,255,255,0.9)",
                  fontWeight: 500,
                  "&:hover": {
                    color: "common.white",
                  },
                }}
              >
                {item.label}
              </AppLink>
            ))}
          </Box>

          <Box>
            <PrimaryCTA
              sx={{
                width: { xs: "100%", sm: "auto" },
                bgcolor: "common.white",
                color: "primary.dark",
                "&:hover": {
                  bgcolor: "background.default",
                  color: "primary.dark",
                },
              }}
            />
          </Box>

          <Stack spacing={0.5}>
            <Typography
              variant="body2"
              sx={{ color: "rgba(255,255,255,0.82)" }}
            >
              Phone:{" "}
              {phoneApproved && telHref ? (
                <Link
                  href={telHref}
                  underline="hover"
                  sx={{ color: "inherit" }}
                >
                  {business.phone}
                </Link>
              ) : (
                business.phone
              )}
            </Typography>
            <Typography
              variant="body2"
              sx={{ color: "rgba(255,255,255,0.82)" }}
            >
              Email:{" "}
              {emailApproved && mailHref ? (
                <Link
                  href={mailHref}
                  underline="hover"
                  sx={{ color: "inherit" }}
                >
                  {business.email}
                </Link>
              ) : (
                business.email
              )}
            </Typography>
            <Typography
              variant="body2"
              sx={{ color: "rgba(255,255,255,0.82)" }}
            >
              Service region: {business.serviceRegion}
            </Typography>
          </Stack>

          <Typography
            variant="body2"
            sx={{
              color: "rgba(255,255,255,0.7)",
              borderTop: "1px solid rgba(255,255,255,0.18)",
              pt: 2.5,
            }}
          >
            © {year} {business.name}. All rights reserved unless otherwise
            specified.
          </Typography>
        </Stack>
      </Container>
    </Box>
  );
}
