/**
 * Site header metrics.
 * Keep in sync with SiteHeader Toolbar minHeight / vertical padding.
 */
export const siteHeaderHeights = {
  xs: 68,
  md: 80,
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
