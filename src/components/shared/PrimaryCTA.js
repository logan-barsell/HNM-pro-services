"use client";

import Button from "@mui/material/Button";
import NextLink from "next/link";
import { consultationCta } from "@/content/navigation";

export default function PrimaryCTA({
  label = consultationCta.label,
  href = consultationCta.href,
  variant = "contained",
  size = "large",
  fullWidth = false,
  ...props
}) {
  return (
    <Button
      component={NextLink}
      href={href}
      variant={variant}
      color="primary"
      size={size}
      fullWidth={fullWidth}
      {...props}
    >
      {label}
    </Button>
  );
}
