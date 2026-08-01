import { brandColors, brandRadii, semanticColors } from "@/theme/brandTokens";
import { typography } from "@/theme/typography";

/**
 * Shared MUI component overrides for the public marketing site.
 * Keep overrides restrained so Phase 3 pages can still customize locally.
 */
export const componentOverrides = {
  MuiCssBaseline: {
    styleOverrides: {
      ":root": {
        colorScheme: "light",
      },
      body: {
        backgroundColor: brandColors.cream,
        color: brandColors.darkText,
      },
      "a:focus-visible, button:focus-visible, [tabindex]:focus-visible, .MuiButtonBase-root:focus-visible, .MuiInputBase-root.Mui-focused":
        {
          outline: `2px solid ${brandColors.focusRing}`,
          outlineOffset: "2px",
        },
      "::selection": {
        backgroundColor: brandColors.greenMuted,
        color: brandColors.darkText,
      },
    },
  },
  MuiTypography: {
    styleOverrides: {
      gutterBottom: {
        marginBottom: "0.65em",
      },
    },
  },
  MuiButton: {
    defaultProps: {
      disableElevation: true,
    },
    styleOverrides: {
      root: {
        borderRadius: brandRadii.button,
        paddingInline: 20,
        paddingBlock: 11,
        minHeight: 44,
      },
      sizeMedium: {
        paddingInline: 18,
        paddingBlock: 10,
      },
      sizeLarge: {
        paddingInline: 22,
        paddingBlock: 12,
        fontSize: "1rem",
      },
      containedPrimary: {
        // darkGreen for WCAG AA white-on-green contrast on button labels
        backgroundColor: brandColors.darkGreen,
        color: brandColors.white,
        "&:hover": {
          backgroundColor: brandColors.greenHover,
        },
        "&:disabled": {
          backgroundColor: brandColors.greenMuted,
          color: brandColors.mutedText,
        },
      },
      outlinedPrimary: {
        borderColor: brandColors.darkGreen,
        color: brandColors.darkGreen,
        backgroundColor: "transparent",
        "&:hover": {
          borderColor: brandColors.greenHover,
          backgroundColor: brandColors.greenSurface,
        },
      },
      textPrimary: {
        color: brandColors.darkGreen,
        "&:hover": {
          backgroundColor: brandColors.greenSurface,
        },
      },
    },
  },
  MuiContainer: {
    defaultProps: {
      maxWidth: "lg",
    },
  },
  MuiAppBar: {
    defaultProps: {
      elevation: 0,
      square: true,
    },
    styleOverrides: {
      root: {
        backgroundImage: "none",
        borderRadius: 0,
        boxShadow: "none",
      },
      colorInherit: {
        backgroundColor: brandColors.cream,
        color: brandColors.darkText,
      },
    },
  },
  MuiToolbar: {
    styleOverrides: {
      root: {
        minHeight: 72,
      },
    },
  },
  MuiLink: {
    defaultProps: {
      underline: "hover",
    },
    styleOverrides: {
      root: {
        color: brandColors.darkGreen,
      },
    },
  },
  MuiPaper: {
    defaultProps: {
      elevation: 0,
    },
    styleOverrides: {
      root: {
        backgroundImage: "none",
        borderRadius: brandRadii.card,
      },
      outlined: {
        borderColor: brandColors.border,
      },
    },
  },
  MuiCard: {
    defaultProps: {
      elevation: 0,
      variant: "outlined",
    },
    styleOverrides: {
      root: {
        borderRadius: brandRadii.card,
        borderColor: brandColors.border,
        backgroundColor: brandColors.white,
      },
    },
  },
  MuiDivider: {
    styleOverrides: {
      root: {
        borderColor: brandColors.border,
      },
    },
  },
  MuiDrawer: {
    styleOverrides: {
      paper: {
        backgroundColor: brandColors.warmCream,
        color: brandColors.darkText,
        backgroundImage: "none",
      },
    },
  },
  MuiIconButton: {
    styleOverrides: {
      root: {
        color: brandColors.darkGreen,
        borderRadius: brandRadii.chip,
        "&:hover": {
          backgroundColor: brandColors.greenSurface,
        },
      },
    },
  },
  MuiFormLabel: {
    styleOverrides: {
      root: {
        ...typography.body2,
        fontWeight: 600,
        color: brandColors.darkText,
        "&.Mui-focused": {
          color: brandColors.darkGreen,
        },
      },
    },
  },
  MuiOutlinedInput: {
    styleOverrides: {
      root: {
        borderRadius: brandRadii.input,
        backgroundColor: brandColors.white,
        "&:hover .MuiOutlinedInput-notchedOutline": {
          borderColor: brandColors.borderStrong,
        },
        "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
          borderColor: brandColors.darkGreen,
          borderWidth: 2,
        },
      },
      notchedOutline: {
        borderColor: brandColors.border,
      },
      input: {
        fontFamily: typography.fontFamily,
      },
    },
  },
  MuiTextField: {
    defaultProps: {
      variant: "outlined",
      fullWidth: true,
    },
  },
  MuiListItemButton: {
    styleOverrides: {
      root: {
        borderRadius: brandRadii.chip,
        "&.Mui-selected": {
          backgroundColor: brandColors.greenSurface,
          color: brandColors.darkGreen,
          fontWeight: 600,
          "&:hover": {
            backgroundColor: brandColors.greenMuted,
          },
        },
      },
    },
  },
};
