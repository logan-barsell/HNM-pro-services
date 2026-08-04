/**
 * Site header metrics.
 * Keep in sync with SiteHeader Toolbar minHeight / vertical padding.
 */
export const siteHeaderHeights = {
  xs: 68,
  md: 80,
};

/**
 * Viewport width where desktop nav collapses to the mobile menu.
 * Mirrored in theme.breakpoints.values.nav.
 */
export const navCollapseWidth = 1100;

/** Fade duration; incoming chrome waits this long so the other can finish first. */
const NAV_FADE_MS = 220;

function navTransition(delayMs = 0) {
  const delay = `${delayMs}ms`;
  const duration = `${NAV_FADE_MS}ms`;
  const easing = "ease-in-out";
  return [
    `max-width ${duration} ${easing} ${delay}`,
    `opacity ${duration} ${easing} ${delay}`,
    `transform ${duration} ${easing} ${delay}`,
    `visibility ${duration} ${easing} ${delay}`,
  ].join(", ");
}

/**
 * Desktop links + header CTA.
 * Hides immediately when collapsing; fades in after the toggle when expanding.
 */
export const navDesktopChromeSx = {
  display: "flex",
  alignItems: "center",
  gap: 1.5,
  overflow: "hidden",
  whiteSpace: "nowrap",
  minWidth: { xs: 0, nav: "auto" },
  maxWidth: { xs: 0, nav: "48rem" },
  opacity: { xs: 0, nav: 1 },
  visibility: { xs: "hidden", nav: "visible" },
  transform: { xs: "translateX(10px)", nav: "none" },
  pointerEvents: { xs: "none", nav: "auto" },
  // Collapsing: fade out immediately
  transition: navTransition(0),
  // Expanding: wait for mobile toggle to fade out first
  [`@media (min-width: ${navCollapseWidth}px)`]: {
    transition: navTransition(NAV_FADE_MS),
  },
  "@media (prefers-reduced-motion: reduce)": {
    transition: "none",
  },
};

/**
 * Mobile menu button.
 * Hides immediately when expanding; fades in after nav items when collapsing.
 */
export const navMobileChromeSx = {
  display: "flex",
  alignItems: "center",
  overflow: "hidden",
  minWidth: { xs: 48, nav: 0 },
  maxWidth: { xs: 48, nav: 0 },
  opacity: { xs: 1, nav: 0 },
  visibility: { xs: "visible", nav: "hidden" },
  transform: { xs: "none", nav: "translateX(10px)" },
  pointerEvents: { xs: "auto", nav: "none" },
  // Collapsing into mobile: wait for desktop nav to fade out first
  transition: navTransition(NAV_FADE_MS),
  // Expanding to desktop: fade out immediately
  [`@media (min-width: ${navCollapseWidth}px)`]: {
    transition: navTransition(0),
  },
  "@media (prefers-reduced-motion: reduce)": {
    transition: "none",
  },
};

/** Negative margin so page heroes sit under the fixed header. */
export const siteHeaderPullSx = {
  mt: { xs: `-${siteHeaderHeights.xs}px`, md: `-${siteHeaderHeights.md}px` },
};

/**
 * Padding-top for branded page heroes that previously sat below a sticky header.
 * Restores: sticky header height + original pt ({ xs: 10, md: 12 } → 80px / 96px).
 */
export const pageHeroPaddingTopSx = {
  pt: {
    xs: `calc(${siteHeaderHeights.xs}px + 80px)`,
    md: `calc(${siteHeaderHeights.md}px + 96px)`,
  },
};

/**
 * Home hero already used larger padding for a fixed overlay header.
 * Keep those theme spacings; only pull under the layout spacer.
 */
export const homeHeroPaddingTopSx = {
  pt: { xs: 14, md: 16 },
};
