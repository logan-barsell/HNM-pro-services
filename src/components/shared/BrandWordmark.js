import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Image from "next/image";
import { brandAssets } from "@/content/assets";

/**
 * Brand mark + text wordmark for header/footer.
 * Logo file: public/brand/HNM_logo.png (heart + paw icon).
 */
export default function BrandWordmark({
  compact = false,
  invert = false,
  align = "left",
}) {
  const titleColor = invert ? "common.white" : "text.primary";
  const subtitleColor = invert ? "rgba(255,255,255,0.88)" : "primary.dark";
  const logoSize = compact ? 44 : 56;

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        gap: compact ? 1 : 1.25,
        justifyContent:
          align === "center"
            ? "center"
            : align === "right"
              ? "flex-end"
              : "flex-start",
      }}
    >
      <Box
        sx={{
          width: logoSize,
          height: logoSize,
          flexShrink: 0,
          borderRadius: 1.5,
          bgcolor: invert ? "background.default" : "transparent",
          display: "grid",
          placeItems: "center",
          overflow: "hidden",
          p: invert ? 0.5 : 0,
        }}
      >
        <Image
          src={brandAssets.logo}
          alt=""
          width={logoSize}
          height={logoSize}
          priority
          style={{
            width: "100%",
            height: "100%",
            objectFit: "contain",
            display: "block",
          }}
        />
      </Box>

      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          lineHeight: 1.1,
          minWidth: 0,
        }}
      >
        <Typography
          component="span"
          sx={{
            fontFamily: "var(--font-display), Georgia, serif",
            fontWeight: 600,
            fontSize: compact
              ? { xs: "1.2rem", sm: "1.35rem" }
              : { xs: "1.35rem", sm: "1.6rem" },
            letterSpacing: "0.02em",
            color: titleColor,
            lineHeight: 1,
          }}
        >
          HNM
        </Typography>
        <Typography
          component="span"
          sx={{
            fontFamily: "var(--font-body), Montserrat, sans-serif",
            fontWeight: 600,
            fontSize: compact
              ? { xs: "0.52rem", sm: "0.58rem" }
              : { xs: "0.58rem", sm: "0.66rem" },
            letterSpacing: "0.12em",
            textTransform: "uppercase",
            color: subtitleColor,
            mt: 0.35,
            lineHeight: 1.2,
          }}
        >
          Professional Services
        </Typography>
      </Box>
    </Box>
  );
}
