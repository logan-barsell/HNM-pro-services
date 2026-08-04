"use client";

import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import NextLink from "next/link";
import { useEffect, useRef } from "react";
import { homeHero } from "@/content/home";
import FadeIn from "@/components/shared/FadeIn";
import PrimaryCTA from "@/components/shared/PrimaryCTA";
import {
  homeHeroPaddingTopSx,
  siteHeaderPullSx,
} from "@/theme/layout";

function prefersReducedMotion() {
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

export default function Hero() {
  const hasVideo = Boolean(homeHero.videoSrc);
  const videoRef = useRef(null);

  useEffect(() => {
    if (!hasVideo) {
      return undefined;
    }

    const video = videoRef.current;
    if (!video) {
      return undefined;
    }

    let resumeTimer = 0;

    const tryPlay = () => {
      if (prefersReducedMotion()) {
        return;
      }

      window.clearTimeout(resumeTimer);
      // Defer until after Chrome restores the media pipeline from a freeze.
      resumeTimer = window.setTimeout(() => {
        const attempt = video.play();
        if (attempt?.catch) {
          attempt.catch(() => {
            // Buffer may have been discarded after leaving the app.
            video.load();
            video.play().catch(() => {
              // Autoplay may still be blocked; poster remains visible.
            });
          });
        }
      }, 150);
    };

    const onVisibilityChange = () => {
      if (document.visibilityState === "visible") {
        tryPlay();
      }
    };

    // Mobile browsers pause/freeze media when the tab or app is backgrounded.
    document.addEventListener("visibilitychange", onVisibilityChange);
    document.addEventListener("resume", tryPlay);
    window.addEventListener("pageshow", tryPlay);
    window.addEventListener("focus", tryPlay);

    return () => {
      window.clearTimeout(resumeTimer);
      document.removeEventListener("visibilitychange", onVisibilityChange);
      document.removeEventListener("resume", tryPlay);
      window.removeEventListener("pageshow", tryPlay);
      window.removeEventListener("focus", tryPlay);
    };
  }, [hasVideo]);

  return (
    <Box
      component="section"
      aria-label="Introduction"
      sx={{
        ...siteHeaderPullSx,
        position: "relative",
        minHeight: { xs: "92vh", md: "100vh" },
        display: "flex",
        alignItems: "center",
        overflow: "hidden",
        bgcolor: "primary.dark",
      }}
    >
      <Box
        aria-hidden
        sx={{
          position: "absolute",
          inset: 0,
          background: (theme) =>
            `linear-gradient(145deg, ${theme.palette.primary.dark} 0%, ${theme.palette.primary.main} 48%, ${theme.palette.primary.dark} 100%)`,
        }}
      />

      {hasVideo ? (
        <Box
          ref={videoRef}
          component="video"
          autoPlay
          muted
          loop
          playsInline
          poster={homeHero.posterSrc || undefined}
          sx={{
            position: "absolute",
            inset: 0,
            width: "100%",
            height: "100%",
            objectFit: "cover",
            "@media (prefers-reduced-motion: reduce)": {
              display: "none",
            },
          }}
        >
          <source src={homeHero.videoSrc} type="video/mp4" />
        </Box>
      ) : null}

      <Box
        aria-hidden
        sx={{
          position: "absolute",
          inset: 0,
          bgcolor: "rgba(38, 51, 45, 0.55)",
        }}
      />

      {!hasVideo ? (
        <Typography
          variant="caption"
          sx={{
            position: "absolute",
            right: 16,
            bottom: 16,
            zIndex: 1,
            color: "rgba(255,255,255,0.72)",
            maxWidth: "16rem",
            textAlign: "right",
            display: { xs: "none", sm: "block" },
          }}
        >
          {homeHero.mediaPlaceholder}
        </Typography>
      ) : null}

      <Container
        maxWidth="lg"
        sx={{
          position: "relative",
          zIndex: 1,
          py: { xs: 12, md: 14 },
          ...homeHeroPaddingTopSx,
        }}
      >
        <FadeIn>
          <Box
            sx={{
              maxWidth: { xs: "100%", md: "38rem" },
              textAlign: { xs: "center", md: "left" },
              mx: { xs: "auto", md: 0 },
            }}
          >
            <Typography
              variant="overline"
              component="p"
              sx={{
                color: "rgba(255,255,255,0.88)",
                mb: 2,
                letterSpacing: "0.14em",
              }}
            >
              {homeHero.eyebrow}
            </Typography>

            <Typography
              variant="h1"
              component="h1"
              sx={{
                color: "common.white",
                mb: 2.5,
                fontSize: {
                  xs: "clamp(1.85rem, 1.4rem + 2.2vw, 2.6rem)",
                  md: "clamp(2.4rem, 1.8rem + 1.6vw, 3.35rem)",
                },
                textWrap: "balance",
              }}
            >
              {homeHero.heading}
            </Typography>

            <Typography
              variant="body1"
              sx={{
                color: "rgba(255,255,255,0.9)",
                mb: 4,
                fontSize: { xs: "1.05rem", md: "1.125rem" },
                lineHeight: 1.7,
              }}
            >
              {homeHero.supporting}
            </Typography>

            <Stack
              direction={{ xs: "column", sm: "row" }}
              spacing={1.5}
              sx={{
                justifyContent: { xs: "center", md: "flex-start" },
                alignItems: { xs: "stretch", sm: "center" },
              }}
            >
              <PrimaryCTA
                label={homeHero.primaryCta.label}
                href={homeHero.primaryCta.href}
                fullWidth
                sx={{
                  width: { xs: "100%", sm: "auto" },
                  bgcolor: "common.white",
                  color: "primary.dark",
                  "&:hover": {
                    bgcolor: "background.default",
                    color: "primary.dark",
                  },
                }}
              />
              <Button
                component={NextLink}
                href={homeHero.secondaryCta.href}
                variant="outlined"
                size="large"
                fullWidth
                sx={{
                  width: { xs: "100%", sm: "auto" },
                  borderColor: "rgba(255,255,255,0.7)",
                  color: "common.white",
                  "&:hover": {
                    borderColor: "common.white",
                    bgcolor: "rgba(255,255,255,0.1)",
                  },
                }}
              >
                {homeHero.secondaryCta.label}
              </Button>
            </Stack>
          </Box>
        </FadeIn>
      </Container>
    </Box>
  );
}
