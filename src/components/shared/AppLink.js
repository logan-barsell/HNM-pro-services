"use client";

import Link from "@mui/material/Link";
import NextLink from "next/link";

/**
 * Client wrapper so Next.js Link can be composed with MUI from Server Components.
 */
export default function AppLink({ href, children, ...props }) {
  return (
    <Link component={NextLink} href={href} {...props}>
      {children}
    </Link>
  );
}
