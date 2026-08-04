"use client";

import Box from "@mui/material/Box";

/**
 * Mount-time fade-up for hero copy and similar above-the-fold accents.
 * Honors prefers-reduced-motion.
 */
export default function FadeIn({ children, delayMs = 0, sx, ...props }) {
  return (
    <Box
      sx={{
        animation: `hnmFadeInUp 0.55s ease ${delayMs}ms both`,
        "@media (prefers-reduced-motion: reduce)": {
          animation: "none",
        },
        ...sx,
      }}
      {...props}
    >
      {children}
    </Box>
  );
}
