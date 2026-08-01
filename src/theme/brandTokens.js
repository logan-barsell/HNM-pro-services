/**
 * HNM brand color tokens.
 *
 * Sampled from a photograph of the client’s printed branding and treated as the
 * approved initial palette. Values may be refined if an original source file
 * becomes available.
 *
 * Accessibility notes:
 * - Body copy uses darkText on cream/white (high contrast).
 * - Contained primary buttons use darkGreen for WCAG AA contrast with white
 *   label text; primary green remains for accents, borders, and large chrome.
 * - Do not use cream as text on white.
 */

export const brandColors = {
  green: "#6C8977",
  darkGreen: "#557062",
  greenLight: "#8AA595",
  greenMuted: "#D7E2DB",
  cream: "#F0EFE5",
  warmCream: "#F4F1E8",
  darkText: "#26332D",
  mutedText: "#5A6B63",
  white: "#FFFFFF",
  border: "#D5D3C8",
  borderStrong: "#BFC4BB",
  focusRing: "#557062",
  /** Slightly deeper than darkGreen for pressed/hover button states */
  greenHover: "#465C51",
  /** Soft green wash for selected/hover surfaces on cream */
  greenSurface: "#E4EBE6",
};

export const semanticColors = {
  error: "#9B4A3C",
  warning: "#9A6B2F",
  info: "#4A6B7C",
  success: "#4F7A5A",
};

export const brandRadii = {
  button: 12,
  card: 20,
  media: 24,
  input: 10,
  chip: 8,
};
