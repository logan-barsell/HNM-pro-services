import Link from "@mui/material/Link";
import Typography from "@mui/material/Typography";

/**
 * Icon + value contact link (tel/mailto).
 * Clickable only on the icon/text content, not full row width.
 *
 * @param {"green" | "cream"} [tone]
 */
export default function ContactValueLink({
  href,
  icon: Icon,
  label,
  value,
  tone = "cream",
}) {
  const isGreen = tone === "green";

  return (
    <Link
      href={href}
      underline="hover"
      aria-label={`${label} at ${value}`}
      sx={{
        display: "inline-flex",
        alignItems: "center",
        gap: 1.5,
        width: "fit-content",
        maxWidth: "100%",
        color: isGreen ? "common.white" : "primary.dark",
        textDecorationColor: isGreen
          ? "rgba(255,255,255,0.45)"
          : "rgba(85, 112, 98, 0.35)",
        minHeight: 44,
        "&:hover": {
          color: isGreen ? "common.white" : "primary.dark",
        },
      }}
    >
      <Icon aria-hidden sx={{ fontSize: 26 }} />
      <Typography
        component="span"
        variant="body1"
        sx={{ fontWeight: 300, color: "inherit" }}
      >
        {value}
      </Typography>
    </Link>
  );
}
