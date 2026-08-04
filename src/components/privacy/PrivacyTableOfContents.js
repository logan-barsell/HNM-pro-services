import Box from "@mui/material/Box";
import Link from "@mui/material/Link";
import Typography from "@mui/material/Typography";
import { privacyToc } from "@/content/privacy";
import { brandRadii } from "@/theme/brandTokens";

/**
 * Static in-page anchors. No scrollspy or sticky behavior.
 */
export default function PrivacyTableOfContents() {
  return (
    <Box
      component="nav"
      aria-label="Privacy notice sections"
      sx={{
        mb: { xs: 3, md: 4 },
        maxWidth: "42rem",
        p: { xs: 2.5, md: 3 },
        borderRadius: `${brandRadii.card}px`,
        bgcolor: "secondary.main",
        border: "1px solid",
        borderColor: "divider",
      }}
    >
      <Typography
        variant="overline"
        component="p"
        sx={{ color: "primary.dark", mb: 1.5 }}
      >
        On this page
      </Typography>
      <Box
        component="ul"
        sx={{
          m: 0,
          pl: 2.5,
          display: "grid",
          gridTemplateColumns: { xs: "1fr", sm: "1fr 1fr" },
          columnGap: 3,
          rowGap: 0.85,
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
