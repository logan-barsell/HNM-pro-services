"use client";

import Box from "@mui/material/Box";
import Fade from "@mui/material/Fade";
import IconButton from "@mui/material/IconButton";
import Modal from "@mui/material/Modal";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import NextLink from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { primaryNavigation } from "@/content/navigation";
import PrimaryCTA from "@/components/shared/PrimaryCTA";
import { navCollapseWidth, navMobileChromeSx } from "@/theme/layout";

function isActivePath(pathname, href) {
  if (href === "/") {
    return pathname === "/";
  }
  return pathname === href || pathname.startsWith(`${href}/`);
}

/**
 * Two thin lines that morph into an X when open.
 */
function MenuToggleIcon({ open }) {
  const lineSx = {
    position: "absolute",
    left: 0,
    width: "100%",
    height: 1.5,
    borderRadius: 1,
    bgcolor: "currentColor",
    transition: (theme) =>
      theme.transitions.create(["transform", "top"], {
        duration: theme.transitions.duration.shorter,
        easing: theme.transitions.easing.easeInOut,
      }),
    "@media (prefers-reduced-motion: reduce)": {
      transition: "none",
    },
  };

  return (
    <Box
      aria-hidden
      sx={{
        position: "relative",
        width: 22,
        height: 14,
      }}
    >
      <Box
        sx={{
          ...lineSx,
          top: open ? "50%" : 0,
          transform: open
            ? "translateY(-50%) rotate(45deg)"
            : "translateY(0) rotate(0deg)",
        }}
      />
      <Box
        sx={{
          ...lineSx,
          top: open ? "50%" : "100%",
          transform: open
            ? "translateY(-50%) rotate(-45deg)"
            : "translateY(-100%) rotate(0deg)",
        }}
      />
    </Box>
  );
}

export default function MobileNavigation({ tone = "default", onOpenChange }) {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const onDark = tone === "onDark";

  const setMenuOpen = (nextOpen) => {
    setOpen(nextOpen);
    onOpenChange?.(nextOpen);
  };

  const toggleMenu = () => setMenuOpen(!open);
  const closeMenu = () => setMenuOpen(false);

  useEffect(() => {
    const media = window.matchMedia(`(min-width: ${navCollapseWidth}px)`);
    const handleChange = (event) => {
      if (event.matches) {
        setOpen(false);
        onOpenChange?.(false);
      }
    };

    media.addEventListener("change", handleChange);
    return () => media.removeEventListener("change", handleChange);
  }, [onOpenChange]);

  useEffect(() => {
    if (!open) {
      return undefined;
    }

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [open]);

  return (
    <>
      <Box sx={navMobileChromeSx}>
        <IconButton
          edge="end"
          aria-label={open ? "Close navigation menu" : "Open navigation menu"}
          aria-controls="mobile-navigation-menu"
          aria-expanded={open ? "true" : "false"}
          onClick={toggleMenu}
          sx={{
            color: onDark ? "common.white" : "primary.dark",
            "&:hover": {
              bgcolor: onDark ? "rgba(255,255,255,0.12)" : "action.hover",
            },
          }}
        >
          <MenuToggleIcon open={open} />
        </IconButton>
      </Box>

      <Modal
        open={open}
        onClose={closeMenu}
        closeAfterTransition
        disableScrollLock
        hideBackdrop
        sx={{
          zIndex: (theme) => theme.zIndex.modal,
        }}
      >
        <Fade in={open} timeout={320}>
          <Box
            id="mobile-navigation-menu"
            role="dialog"
            aria-modal="true"
            aria-label="Site navigation"
            sx={{
              position: "absolute",
              inset: 0,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              bgcolor: (theme) =>
                `color-mix(in srgb, ${theme.palette.background.default} 65%, transparent)`,
              backdropFilter: "blur(20px) saturate(1.15)",
              WebkitBackdropFilter: "blur(20px) saturate(1.15)",
              outline: "none",
              px: 3,
            }}
          >
            <Stack
              component="nav"
              aria-label="Primary mobile"
              spacing={{ xs: 2.5, sm: 3 }}
              sx={{ alignItems: "center", width: "100%" }}
            >
              {primaryNavigation.map((item) => {
                const active = isActivePath(pathname, item.href);

                return (
                  <Typography
                    key={item.href}
                    component={NextLink}
                    href={item.href}
                    onClick={closeMenu}
                    aria-current={active ? "page" : undefined}
                    sx={{
                      fontFamily: "var(--font-display), Georgia, serif",
                      fontWeight: active ? 600 : 500,
                      fontSize: {
                        xs: "1.85rem",
                        sm: "2.25rem",
                      },
                      lineHeight: 1.2,
                      color: active ? "primary.dark" : "text.primary",
                      textDecoration: "none",
                      textAlign: "center",
                      transition: (theme) =>
                        theme.transitions.create("color", {
                          duration: theme.transitions.duration.shorter,
                        }),
                      "&:hover": {
                        color: "primary.dark",
                      },
                    }}
                  >
                    {item.label}
                  </Typography>
                );
              })}
            </Stack>

            <Box sx={{ mt: { xs: 5, sm: 6 }, width: "min(100%, 20rem)" }}>
              <PrimaryCTA fullWidth onClick={closeMenu} />
            </Box>
          </Box>
        </Fade>
      </Modal>
    </>
  );
}
