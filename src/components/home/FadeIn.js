import Box from "@mui/material/Box";

/**
 * Subtle entrance fade via CSS. Honors prefers-reduced-motion.
 */
export default function FadeIn({ children, delayMs = 0, sx, ...props }) {
  return (
    <Box
      sx={{
        animation: `hnmFadeInUp 0.55s ease ${delayMs}ms both`,
        "@keyframes hnmFadeInUp": {
          from: {
            opacity: 0,
            transform: "translateY(12px)",
          },
          to: {
            opacity: 1,
            transform: "none",
          },
        },
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
