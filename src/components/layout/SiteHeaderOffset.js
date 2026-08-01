import Box from "@mui/material/Box";
import { siteHeaderHeights } from "@/theme/layout";

/**
 * Reserves the same vertical space the sticky header used to occupy,
 * so fixed positioning does not collapse page spacing.
 */
export default function SiteHeaderOffset() {
  return (
    <Box
      aria-hidden
      sx={{
        height: { xs: siteHeaderHeights.xs, md: siteHeaderHeights.md },
        flexShrink: 0,
      }}
    />
  );
}
