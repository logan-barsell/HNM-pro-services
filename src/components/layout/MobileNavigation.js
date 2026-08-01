"use client";

import CloseIcon from "@mui/icons-material/Close";
import MenuIcon from "@mui/icons-material/Menu";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import Typography from "@mui/material/Typography";
import NextLink from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { primaryNavigation } from "@/content/navigation";
import PrimaryCTA from "@/components/shared/PrimaryCTA";

function isActivePath(pathname, href) {
  if (href === "/") {
    return pathname === "/";
  }
  return pathname === href || pathname.startsWith(`${href}/`);
}

export default function MobileNavigation({ tone = "default" }) {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const onDark = tone === "onDark";

  const closeMenu = () => setOpen(false);

  return (
    <Box sx={{ display: { xs: "flex", md: "none" }, alignItems: "center" }}>
      <IconButton
        edge="end"
        aria-label="Open navigation menu"
        aria-controls="mobile-navigation-drawer"
        aria-expanded={open ? "true" : "false"}
        onClick={() => setOpen(true)}
        sx={{
          color: onDark ? "common.white" : "primary.dark",
          "&:hover": {
            bgcolor: onDark ? "rgba(255,255,255,0.12)" : "action.hover",
          },
        }}
      >
        <MenuIcon />
      </IconButton>

      <Drawer
        id="mobile-navigation-drawer"
        anchor="right"
        open={open}
        onClose={closeMenu}
        ModalProps={{ keepMounted: true }}
        slotProps={{
          paper: {
            sx: {
              width: "min(100%, 320px)",
              px: 1,
            },
            "aria-label": "Mobile navigation",
          },
        }}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            px: 1.5,
            py: 1.5,
          }}
        >
          <Typography
            component="span"
            sx={{ fontWeight: 600, color: "text.primary" }}
          >
            Menu
          </Typography>
          <IconButton aria-label="Close navigation menu" onClick={closeMenu}>
            <CloseIcon />
          </IconButton>
        </Box>
        <Divider />
        <List component="nav" aria-label="Primary mobile" sx={{ px: 0.5 }}>
          {primaryNavigation.map((item) => {
            const active = isActivePath(pathname, item.href);

            return (
              <ListItem key={item.href} disablePadding sx={{ mb: 0.5 }}>
                <ListItemButton
                  component={NextLink}
                  href={item.href}
                  onClick={closeMenu}
                  selected={active}
                  aria-current={active ? "page" : undefined}
                >
                  <ListItemText
                    primary={item.label}
                    slotProps={{
                      primary: { sx: { fontWeight: active ? 700 : 600 } },
                    }}
                  />
                </ListItemButton>
              </ListItem>
            );
          })}
        </List>
        <Box sx={{ px: 1.5, pt: 1, pb: 3 }}>
          <PrimaryCTA fullWidth onClick={closeMenu} />
        </Box>
      </Drawer>
    </Box>
  );
}
