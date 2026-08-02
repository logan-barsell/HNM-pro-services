"use client";

import Box from "@mui/material/Box";
import Link from "@mui/material/Link";
import NextLink from "next/link";
import { usePathname } from "next/navigation";
import { primaryNavigation } from "@/content/navigation";

function isActivePath(pathname, href) {
  if (href === "/") {
    return pathname === "/";
  }
  return pathname === href || pathname.startsWith(`${href}/`);
}

export default function DesktopNavigation({ tone = "default" }) {
  const pathname = usePathname();
  const onDark = tone === "onDark";

  return (
    <Box
      component="nav"
      aria-label="Primary"
      sx={{
        display: "flex",
        alignItems: "center",
        gap: 0.25,
      }}
    >
      {primaryNavigation.map((item) => {
        const active = isActivePath(pathname, item.href);

        return (
          <Link
            key={item.href}
            component={NextLink}
            href={item.href}
            underline="none"
            aria-current={active ? "page" : undefined}
            sx={{
              px: 1.5,
              py: 1,
              borderRadius: 1,
              boxShadow: "none",
              fontWeight: 600,
              fontSize: "0.9rem",
              color: onDark
                ? "rgba(255,255,255,0.9)"
                : active
                  ? "primary.dark"
                  : "text.primary",
              bgcolor: active
                ? onDark
                  ? "rgba(255,255,255,0.12)"
                  : "action.hover"
                : "transparent",
              "&:hover": {
                bgcolor: onDark ? "rgba(255,255,255,0.12)" : "action.hover",
                color: onDark ? "common.white" : "primary.dark",
              },
            }}
          >
            {item.label}
          </Link>
        );
      })}
    </Box>
  );
}
