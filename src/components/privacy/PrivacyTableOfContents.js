import Box from "@mui/material/Box";
import Link from "@mui/material/Link";
import Typography from "@mui/material/Typography";
import { privacyToc } from "@/content/privacy";

/**
 * Static in-page anchors. No scrollspy or sticky behavior.
 */
export default function PrivacyTableOfContents() {
  return (
    <Box
      component="nav"
      aria-label="Privacy notice sections"
      sx={{ mb: { xs: 3, md: 4 }, maxWidth: "42rem" }}
    >
      <Typography
        variant="overline"
        component="p"
        sx={{ color: "primary.dark", mb: 1.25 }}
      >
        On this page
      </Typography>
      <Box
        component="ul"
        sx={{
          m: 0,
          pl: 2.5,
          display: "flex",
          flexDirection: "column",
          gap: 0.75,
        }}
      >
        {privacyToc.map((item) => (
          <Box component="li" key={item.id}>
            <Link
              href={`#${item.id}`}
              underline="hover"
              sx={{ fontWeight: 600, color: "primary.dark" }}
            >
              {item.label}
            </Link>
          </Box>
        ))}
      </Box>
    </Box>
  );
}
