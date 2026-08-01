import { brandColors } from "@/theme/brandTokens";

const displayFamily = `var(--font-display), "Cormorant Garamond", Georgia, serif`;
const bodyFamily = `var(--font-body), Montserrat, system-ui, sans-serif`;

/**
 * Responsive typography hierarchy for the HNM brand.
 * Display headings: Cormorant Garamond. UI and body: Montserrat.
 */
export const typography = {
  fontFamily: bodyFamily,
  fontSize: 16,
  htmlFontSize: 16,
  h1: {
    fontFamily: displayFamily,
    fontWeight: 600,
    fontSize: "clamp(2.25rem, 1.7rem + 2.2vw, 3.25rem)",
    lineHeight: 1.15,
    letterSpacing: "-0.01em",
    color: brandColors.darkText,
  },
  h2: {
    fontFamily: displayFamily,
    fontWeight: 600,
    fontSize: "clamp(1.75rem, 1.45rem + 1.2vw, 2.5rem)",
    lineHeight: 1.2,
    letterSpacing: "-0.01em",
    color: brandColors.darkText,
  },
  h3: {
    fontFamily: displayFamily,
    fontWeight: 600,
    fontSize: "clamp(1.4rem, 1.25rem + 0.7vw, 1.85rem)",
    lineHeight: 1.25,
    color: brandColors.darkText,
  },
  h4: {
    fontFamily: bodyFamily,
    fontWeight: 600,
    fontSize: "1.25rem",
    lineHeight: 1.35,
    color: brandColors.darkText,
  },
  h5: {
    fontFamily: bodyFamily,
    fontWeight: 600,
    fontSize: "1.1rem",
    lineHeight: 1.4,
    color: brandColors.darkText,
  },
  h6: {
    fontFamily: bodyFamily,
    fontWeight: 600,
    fontSize: "1rem",
    lineHeight: 1.4,
    color: brandColors.darkText,
  },
  subtitle1: {
    fontFamily: bodyFamily,
    fontWeight: 500,
    fontSize: "1.05rem",
    lineHeight: 1.5,
  },
  subtitle2: {
    fontFamily: bodyFamily,
    fontWeight: 600,
    fontSize: "0.95rem",
    lineHeight: 1.45,
  },
  body1: {
    fontFamily: bodyFamily,
    fontWeight: 400,
    fontSize: "1rem",
    lineHeight: 1.7,
  },
  body2: {
    fontFamily: bodyFamily,
    fontWeight: 400,
    fontSize: "0.925rem",
    lineHeight: 1.65,
  },
  button: {
    fontFamily: bodyFamily,
    fontWeight: 600,
    fontSize: "0.95rem",
    lineHeight: 1.4,
    textTransform: "none",
    letterSpacing: "0.01em",
  },
  caption: {
    fontFamily: bodyFamily,
    fontWeight: 500,
    fontSize: "0.8rem",
    lineHeight: 1.5,
  },
  overline: {
    fontFamily: bodyFamily,
    fontWeight: 600,
    fontSize: "0.75rem",
    lineHeight: 1.5,
    letterSpacing: "0.12em",
    textTransform: "uppercase",
  },
};
