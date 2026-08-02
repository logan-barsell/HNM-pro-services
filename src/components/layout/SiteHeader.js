"use client";

import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Link from "@mui/material/Link";
import Toolbar from "@mui/material/Toolbar";
import NextLink from "next/link";
import { useState, useSyncExternalStore } from "react";
import { routes } from "@/content/routes";
import DesktopNavigation from "@/components/layout/DesktopNavigation";
import MobileNavigation from "@/components/layout/MobileNavigation";
import BrandWordmark from "@/components/shared/BrandWordmark";
import PrimaryCTA from "@/components/shared/PrimaryCTA";
import { navDesktopChromeSx, siteHeaderHeights } from "@/theme/layout";

const SCROLL_THRESHOLD = 24;

function subscribeToScroll(onStoreChange) {
  window.addEventListener("scroll", onStoreChange, { passive: true });
  return () => window.removeEventListener("scroll", onStoreChange);
}

function getScrollY() {
  return window.scrollY;
}

function getServerScrollY() {
  return 0;
}

export default function SiteHeader() {
  const scrollY = useSyncExternalStore(
    subscribeToScroll,
    getScrollY,
    getServerScrollY,
  );
  const [mobileNavOpen, setMobileNavOpen] = useState(false);

  const transparent = scrollY <= SCROLL_THRESHOLD && !mobileNavOpen;
  const tone = transparent ? "onDark" : "default";

  return (
    <AppBar
      position="fixed"
      color="inherit"
      elevation={0}
      square
      component="header"
      sx={{
        left: 0,
        right: 0,
        width: "100%",
        borderRadius: 0,
        bgcolor: transparent
          ? "transparent"
          : mobileNavOpen
            ? (theme) =>
                `color-mix(in srgb, ${theme.palette.background.default} 52%, transparent)`
            : "background.default",
        borderBottom: "1px solid",
        borderColor: transparent ? "transparent" : "divider",
        color: transparent ? "common.white" : "text.primary",
        boxShadow: "none",
        backgroundImage: "none",
        ...(mobileNavOpen
          ? {
              backdropFilter: "blur(20px) saturate(1.15)",
              WebkitBackdropFilter: "blur(20px) saturate(1.15)",
            }
          : {}),
        zIndex: (theme) =>
          mobileNavOpen ? theme.zIndex.modal + 1 : theme.zIndex.appBar,
        transition: (theme) =>
          theme.transitions.create(
            ["background-color", "border-color", "color"],
            {
              duration: theme.transitions.duration.shorter,
            },
          ),
        "@media (prefers-reduced-motion: reduce)": {
          transition: "none",
        },
      }}
    >
      <Toolbar
        disableGutters
        sx={{
          minHeight: {
            xs: siteHeaderHeights.xs,
            md: siteHeaderHeights.md,
          },
          gap: 2,
          justifyContent: "space-between",
          py: 1,
          px: { xs: 2, sm: 3, lg: 4 },
          width: "100%",
          maxWidth: "100%",
        }}
      >
        <Link
          component={NextLink}
          href={routes.home}
          underline="none"
          aria-label="HNM Professional Services home"
          sx={{
            maxWidth: { xs: "70%", sm: "none" },
            flexShrink: 1,
          }}
        >
          <BrandWordmark compact invert={transparent} />
        </Link>

        <Box sx={{ display: "flex", alignItems: "center", gap: 0.5 }}>
          <Box sx={navDesktopChromeSx}>
            <DesktopNavigation tone={tone} />
            <PrimaryCTA
              size="medium"
              sx={
                transparent
                  ? {
                      bgcolor: "common.white",
                      color: "primary.dark",
                      "&:hover": {
                        bgcolor: "background.default",
                        color: "primary.dark",
                      },
                    }
                  : undefined
              }
            />
          </Box>
          <MobileNavigation tone={tone} onOpenChange={setMobileNavOpen} />
        </Box>
      </Toolbar>
    </AppBar>
  );
}
