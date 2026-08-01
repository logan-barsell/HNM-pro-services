"use client";

import Box from "@mui/material/Box";
import Link from "@mui/material/Link";

export default function SkipLink() {
  return (
    <Box
      component={Link}
      href="#main-content"
      underline="none"
      sx={{
        position: "absolute",
        left: 16,
        top: 16,
        zIndex: 1400,
        px: 2,
        py: 1,
        borderRadius: 1,
        bgcolor: "primary.dark",
        color: "common.white",
        fontWeight: 600,
        fontSize: "0.9rem",
        boxShadow: "0 4px 16px rgba(38, 51, 45, 0.18)",
        transform: "translateY(-220%)",
        transition: "transform 0.15s ease",
        "@media (prefers-reduced-motion: reduce)": {
          transition: "none",
        },
        "&:focus": {
          transform: "translateY(0)",
          outline: "2px solid",
          outlineColor: "common.white",
          outlineOffset: 2,
        },
      }}
    >
      Skip to main content
    </Box>
  );
}
