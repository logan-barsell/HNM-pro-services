import { brandColors, brandRadii, semanticColors } from "@/theme/brandTokens";

/**
 * Shared surface styles for forms sitting on primary green sections.
 * Transparent shell, white type/borders/controls — no cream card fill.
 */
export const onGreenFormSx = {
  p: { xs: 2.5, md: 3.5 },
  border: "1px solid",
  borderColor: "rgba(255, 255, 255, 0.55)",
  borderRadius: `${brandRadii.card}px`,
  bgcolor: "transparent",
  color: "common.white",

  "& .MuiInputLabel-root": {
    color: "rgba(255, 255, 255, 0.82)",
    "&.Mui-focused": {
      color: brandColors.white,
    },
    "&.MuiFormLabel-filled, &.MuiInputLabel-shrink": {
      color: "rgba(255, 255, 255, 0.9)",
    },
    "&.Mui-error": {
      color: "#F3B8AB",
    },
  },

  "& .MuiOutlinedInput-root": {
    backgroundColor: "transparent",
    color: brandColors.white,
    "& .MuiOutlinedInput-notchedOutline": {
      borderColor: "rgba(255, 255, 255, 0.55)",
    },
    "&:hover .MuiOutlinedInput-notchedOutline": {
      borderColor: "rgba(255, 255, 255, 0.85)",
    },
    "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
      borderColor: brandColors.white,
      borderWidth: 1,
    },
    "&.Mui-error .MuiOutlinedInput-notchedOutline": {
      borderColor: "#F3B8AB",
    },
    "&.Mui-disabled": {
      color: "rgba(255, 255, 255, 0.55)",
      "& .MuiOutlinedInput-notchedOutline": {
        borderColor: "rgba(255, 255, 255, 0.28)",
      },
    },
  },

  "& .MuiOutlinedInput-input": {
    color: brandColors.white,
    WebkitTextFillColor: brandColors.white,
    "&::placeholder": {
      color: "rgba(255, 255, 255, 0.5)",
      opacity: 1,
    },
    "&.Mui-disabled": {
      WebkitTextFillColor: "rgba(255, 255, 255, 0.45)",
    },
    "&:-webkit-autofill, &:-webkit-autofill:hover, &:-webkit-autofill:focus": {
      WebkitTextFillColor: brandColors.white,
      caretColor: brandColors.white,
      boxShadow: `0 0 0 1000px ${brandColors.darkGreen} inset`,
      transition: "background-color 99999s ease-out 0s",
    },
  },

  "& .MuiSelect-icon": {
    color: "rgba(255, 255, 255, 0.8)",
  },

  "& .MuiFormHelperText-root": {
    color: "rgba(255, 255, 255, 0.72)",
    "&.Mui-error": {
      color: "#F3B8AB",
    },
  },

  "& .MuiFormLabel-root:not(.MuiInputLabel-root)": {
    color: "rgba(255, 255, 255, 0.92)",
    "&.Mui-focused": {
      color: brandColors.white,
    },
    "&.Mui-error": {
      color: "#F3B8AB",
    },
  },

  "& .MuiCheckbox-root, & .MuiRadio-root": {
    color: "rgba(255, 255, 255, 0.7)",
    "&.Mui-checked": {
      color: brandColors.white,
    },
    "&.Mui-disabled": {
      color: "rgba(255, 255, 255, 0.35)",
    },
  },

  "& .MuiFormControlLabel-label": {
    color: brandColors.white,
  },

  "& .MuiTypography-root": {
    color: "inherit",
  },

  "& a": {
    color: brandColors.white,
  },
};

export const onGreenSubmitButtonSx = {
  alignSelf: { xs: "stretch", sm: "flex-start" },
  minHeight: 48,
  width: { xs: "100%", sm: "auto" },
  bgcolor: brandColors.white,
  color: brandColors.darkGreen,
  border: "1px solid",
  borderColor: brandColors.white,
  "&:hover": {
    bgcolor: "rgba(255, 255, 255, 0.88)",
    borderColor: brandColors.white,
  },
  "&:disabled": {
    bgcolor: "rgba(255, 255, 255, 0.35)",
    color: "rgba(38, 51, 45, 0.55)",
    borderColor: "transparent",
  },
  "&.Mui-focusVisible": {
    outline: `2px solid ${brandColors.white}`,
    outlineOffset: 3,
  },
};

/** Soft brand-green wash for cream-section inputs (~20% opacity). */
const creamInputFill = "rgba(108, 137, 119, 0.1)";

/**
 * Cream-section form: transparent shell, soft green inputs, dark type.
 */
export const onCreamFormSx = {
  p: { xs: 2.5, md: 3.5 },
  border: "1px solid",
  borderColor: brandColors.borderStrong,
  borderRadius: `${brandRadii.card}px`,
  bgcolor: "transparent",
  color: "text.primary",

  "& .MuiInputLabel-root": {
    color: brandColors.mutedText,
    "&.Mui-focused": {
      color: brandColors.darkGreen,
    },
    "&.MuiFormLabel-filled, &.MuiInputLabel-shrink": {
      color: brandColors.mutedText,
    },
    "&.Mui-focused.MuiInputLabel-shrink": {
      color: brandColors.darkGreen,
    },
    "&.Mui-error": {
      color: semanticColors.error,
    },
  },

  "& .MuiOutlinedInput-root": {
    backgroundColor: creamInputFill,
    color: brandColors.darkText,
    "& .MuiOutlinedInput-notchedOutline": {
      borderColor: brandColors.borderStrong,
    },
    "&:hover .MuiOutlinedInput-notchedOutline": {
      borderColor: brandColors.darkGreen,
    },
    "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
      borderColor: brandColors.darkGreen,
      borderWidth: 1,
    },
    "&.Mui-error .MuiOutlinedInput-notchedOutline": {
      borderColor: semanticColors.error,
    },
    "&.Mui-disabled": {
      backgroundColor: "rgba(108, 137, 119, 0.1)",
      "& .MuiOutlinedInput-notchedOutline": {
        borderColor: brandColors.border,
      },
    },
  },

  "& .MuiOutlinedInput-input": {
    color: brandColors.darkText,
    WebkitTextFillColor: brandColors.darkText,
    "&:-webkit-autofill, &:-webkit-autofill:hover, &:-webkit-autofill:focus": {
      WebkitTextFillColor: brandColors.darkText,
      caretColor: brandColors.darkText,
      boxShadow: `0 0 0 1000px ${creamInputFill} inset`,
      transition: "background-color 99999s ease-out 0s",
    },
  },

  "& .MuiSelect-icon": {
    color: brandColors.mutedText,
  },

  "& a": {
    color: brandColors.darkGreen,
    fontWeight: 600,
  },
};

export const onCreamSubmitButtonSx = {
  alignSelf: { xs: "stretch", sm: "flex-start" },
  minHeight: 48,
  width: { xs: "100%", sm: "auto" },
};
