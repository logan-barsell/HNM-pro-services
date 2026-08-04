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
      "a:focus-visible, button:focus-visible, [tabindex]:focus-visible, .MuiButtonBase-root:focus-visible":
        {
          outline: `2px solid ${brandColors.focusRing}`,
          outlineOffset: "2px",
        },
      /*
       * Outlined inputs use the notched fieldset for focus — a rectangular
       * outline would cut through the floating label (no notch gap).
       */
      ".MuiOutlinedInput-root.Mui-focused, .MuiOutlinedInput-root:focus-within":
        {
          outline: "none",
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
        fontFamily: typography.fontFamily,
        fontWeight: 600,
        fontSize: "0.925rem",
        lineHeight: 1.4,
        color: brandColors.darkText,
        "&.Mui-focused": {
          color: brandColors.darkGreen,
        },
      },
    },
  },
  MuiInputLabel: {
    styleOverrides: {
      root: {
        fontFamily: typography.fontFamily,
        fontWeight: 500,
        fontSize: "1rem",
        lineHeight: "1.25em",
        color: brandColors.mutedText,
        "&.Mui-focused": {
          color: brandColors.darkGreen,
        },
        "&.Mui-error": {
          color: semanticColors.error,
        },
      },
      outlined: {
        // Vertically centers the idle label in a 56px outlined field
        transform: "translate(14px, 16px) scale(1)",
        "&.MuiInputLabel-shrink": {
          transform: "translate(14px, -9px) scale(0.75)",
        },
      },
    },
  },
  MuiOutlinedInput: {
    styleOverrides: {
      root: {
        borderRadius: brandRadii.input,
        backgroundColor: brandColors.white,
        minHeight: 56,
        "&:hover .MuiOutlinedInput-notchedOutline": {
          borderColor: brandColors.borderStrong,
        },
        "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
          borderColor: brandColors.darkGreen,
          borderWidth: 2,
        },
        "&.MuiInputBase-multiline": {
          minHeight: "unset",
          padding: 0,
        },
      },
      notchedOutline: {
        borderColor: brandColors.border,
      },
      input: {
        fontFamily: typography.fontFamily,
        fontSize: "1rem",
        lineHeight: 1.5,
        padding: "16.5px 14px",
        height: "auto",
        boxSizing: "border-box",
      },
      inputMultiline: {
        padding: "16.5px 14px",
      },
      inputSizeSmall: {
        padding: "10px 12px",
      },
    },
  },
  MuiSelect: {
    styleOverrides: {
      select: {
        minHeight: "1.5em",
        display: "flex",
        alignItems: "center",
      },
    },
  },
  MuiTextField: {
    defaultProps: {
      variant: "outlined",
      fullWidth: true,
      size: "medium",
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
