import { Cormorant_Garamond, Montserrat } from "next/font/google";

/**
 * Bundled via next/font for static export — no runtime Google Fonts CSS request.
 */
export const fontDisplay = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-display",
  display: "swap",
});

export const fontBody = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-body",
  display: "swap",
});

export const fontVariableClassName = `${fontDisplay.variable} ${fontBody.variable}`;
