"use client";

import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import NextLink from "next/link";
import { brandRadii } from "@/theme/brandTokens";
import { getLastRowOffset } from "@/utils/gridLayout";

/**
 * Icon-card section band.
 * - tone="green": green background + cream cards (Featured Services)
 * - tone="cream": cream background + open cards with green icons (Values and Approach)
 *
 * Pass `href` + `ctaLabel` on an item to make that card a link with a text CTA.
 */
export default function IconCardSection({
  headingId,
  title,
  supporting,
  items = [],
  itemSize = { xs: 12, sm: 6, md: 4 },
  tone = "green",
}) {
  const isGreen = tone === "green";
  const itemCount = items.length;

  return (
    <Box
      component="section"
      aria-labelledby={headingId}
      sx={{
        py: { xs: 7, md: 10 },
        bgcolor: isGreen ? "primary.dark" : "background.default",
        color: isGreen ? "common.white" : "inherit",
      }}
    >
      <Container maxWidth="lg">
        <Typography
          id={headingId}
          variant="h2"
          component="h2"
          sx={{
            mb: 1.5,
            color: isGreen ? "common.white" : "inherit",
            textAlign: { xs: "center", md: "left" },
          }}
        >
          {title}
        </Typography>
        {supporting ? (
          <Typography
            variant="body1"
            sx={{
              mb: { xs: 4, md: 5 },
              maxWidth: "40rem",
              color: isGreen ? "rgba(255,255,255,0.9)" : "text.secondary",
              textAlign: { xs: "center", md: "left" },
              mx: { xs: "auto", md: 0 },
            }}
          >
            {supporting}
          </Typography>
        ) : null}

        <Grid container spacing={3}>
          {items.map((item, index) => {
            const Icon = item.icon;
            const isLink = Boolean(item.href);

            return (
              <Grid
                key={item.id}
                size={itemSize}
                offset={getLastRowOffset(index, itemCount, itemSize)}
              >                <Box
                  {...(isLink
                    ? {
                        component: NextLink,
                        href: item.href,
                        "aria-label": item.ctaLabel
                          ? `${item.title}. ${item.ctaLabel}`
                          : item.title,
                      }
                    : {})}
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    textAlign: "center",
                    height: "100%",
                    p: { xs: 3, md: 3.5 },
                    borderRadius: `${brandRadii.card}px`,
                    bgcolor: isGreen ? "background.default" : "transparent",
                    border: isGreen ? "1px solid" : "none",
                    borderColor: isGreen
                      ? "rgba(255,255,255,0.2)"
                      : "transparent",
                    textDecoration: "none",
                    color: "text.primary",
                    ...(isLink
                      ? {
                          transition:
                            "transform 0.2s ease, box-shadow 0.2s ease, border-color 0.2s ease",
                          "&:hover": {
                            transform: "translateY(-4px)",
                            boxShadow: isGreen
                              ? "0 12px 28px rgba(0, 0, 0, 0.18)"
                              : "none",
                            borderColor: isGreen
                              ? "common.white"
                              : "transparent",
                          },
                          "&:focus-visible": {
                            outline: "2px solid",
                            outlineColor: "primary.dark",
                            outlineOffset: 3,
                          },
                          "@media (prefers-reduced-motion: reduce)": {
                            transition: "none",
                            "&:hover": {
                              transform: "none",
                            },
                          },
                        }
                      : {}),
                  }}
                >
                  <Box
                    aria-hidden
                    sx={{
                      width: 64,
                      height: 64,
                      mb: 2.5,
                      borderRadius: `${brandRadii.media}px`,
                      bgcolor: isGreen ? "primary.dark" : "transparent",
                      color: isGreen ? "common.white" : "primary.dark",
                      display: "grid",
                      placeItems: "center",
                    }}
                  >
                    <Icon sx={{ fontSize: 30 }} />
                  </Box>

                  <Typography
                    variant="h3"
                    component="h3"
                    sx={{
                      typography: "h5",
                      mb: 1.25,
                      color: isGreen ? "inherit" : "primary.dark",
                    }}
                  >
                    {item.title}
                  </Typography>
                  <Typography
                    variant="body2"
                    color="text.secondary"
                    sx={{
                      flexGrow: 1,
                      mb: isLink && item.ctaLabel ? 3 : 0,
                    }}
                  >
                    {item.description}
                  </Typography>

                  {isLink && item.ctaLabel ? (
                    <Button
                      component="span"
                      variant="text"
                      color="primary"
                      sx={{
                        alignSelf: "center",
                        px: 0,
                        minWidth: 0,
                      }}
                    >
                      {item.ctaLabel}
                    </Button>
                  ) : null}
                </Box>
              </Grid>
            );
          })}
        </Grid>
      </Container>
    </Box>
  );
}
