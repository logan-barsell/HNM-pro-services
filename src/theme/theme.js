import { createTheme } from "@mui/material/styles";
import { brandColors, brandRadii, semanticColors } from "@/theme/brandTokens";
import { componentOverrides } from "@/theme/componentOverrides";
import { typography } from "@/theme/typography";

/**
 * HNM Professional Services brand theme (Phase 2).
 * Fonts are applied via CSS variables set on <html> by next/font.
 */
const theme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: brandColors.green,
      dark: brandColors.darkGreen,
      light: brandColors.greenLight,
      contrastText: brandColors.white,
    },
    secondary: {
      main: brandColors.warmCream,
      dark: "#E5E0D0",
      light: "#F8F6F0",
      contrastText: brandColors.darkText,
    },
    background: {
      default: brandColors.cream,
      paper: brandColors.white,
    },
    text: {
      primary: brandColors.darkText,
      secondary: brandColors.mutedText,
    },
    divider: brandColors.border,
    error: {
      main: semanticColors.error,
      contrastText: brandColors.white,
    },
    warning: {
      main: semanticColors.warning,
      contrastText: brandColors.white,
    },
    info: {
      main: semanticColors.info,
      contrastText: brandColors.white,
    },
    success: {
      main: semanticColors.success,
      contrastText: brandColors.white,
    },
    action: {
      hover: brandColors.greenSurface,
      selected: brandColors.greenMuted,
      disabledBackground: brandColors.greenMuted,
    },
  },
  typography,
  shape: {
    borderRadius: brandRadii.chip,
  },
  spacing: 8,
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 900,
      nav: 1100,
      lg: 1200,
      xl: 1536,
    },
  },
  components: componentOverrides,
});

// Custom tokens for sx callbacks without TypeScript module augmentation
theme.brand = brandColors;
theme.radii = brandRadii;

export default theme;
