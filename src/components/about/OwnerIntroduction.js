import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Image from "next/image";
import { ownerIntroduction } from "@/content/about";
import MediaPlaceholder from "@/components/home/MediaPlaceholder";
import { brandRadii } from "@/theme/brandTokens";

export default function OwnerIntroduction() {
  const {
    ownerName,
    heading,
    paragraphs,
    trustQuote,
    portraitLabel,
    portraitAlt,
    portraitSrc,
  } = ownerIntroduction;

  return (
    <Box
      component="section"
      aria-labelledby="owner-introduction-heading"
      sx={{ py: { xs: 7, md: 10 }, bgcolor: "background.default" }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={{ xs: 4, md: 6 }} sx={{ alignItems: "center" }}>
          <Grid size={{ xs: 12, md: 5 }}>
            {portraitSrc ? (
              <Box
                sx={{
                  position: "relative",
                  borderRadius: `${brandRadii.media}px`,
                  overflow: "hidden",
                  aspectRatio: "4 / 5",
                  bgcolor: "secondary.main",
                }}
              >
                <Image
                  src={portraitSrc}
                  alt={portraitAlt}
                  fill
                  sizes="(max-width: 900px) 100vw, 40vw"
                  style={{ objectFit: "cover" }}
                />
              </Box>
            ) : (
              <MediaPlaceholder
                label={portraitLabel}
                aria-label={portraitAlt}
                minHeight={{ xs: 280, md: 420 }}
                ratio="4 / 5"
              />
            )}
          </Grid>

          <Grid size={{ xs: 12, md: 7 }}>
            {ownerName ? (
              <Typography
                variant="overline"
                component="p"
                sx={{ color: "primary.dark", mb: 1.25 }}
              >
                {ownerName}
              </Typography>
            ) : null}

            <Typography
              id="owner-introduction-heading"
              variant="h2"
              component="h2"
              sx={{ mb: 2.5 }}
            >
              {heading}
            </Typography>

            {paragraphs.map((paragraph) => (
              <Typography
                key={paragraph}
                variant="body1"
                color="text.secondary"
                sx={{ mb: 2, fontSize: "1.05rem", maxWidth: "40rem" }}
              >
                {paragraph}
              </Typography>
            ))}

            <Box
              component="blockquote"
              sx={{
                m: 0,
                mt: 3.5,
                p: { xs: 2.5, md: 3 },
                borderRadius: `${brandRadii.card}px`,
                bgcolor: "secondary.main",
                border: "1px solid",
                borderColor: "divider",
                borderLeft: "4px solid",
                borderLeftColor: "primary.dark",
              }}
            >
              <Typography
                variant="body1"
                sx={{
                  fontFamily: "var(--font-display), Georgia, serif",
                  fontSize: { xs: "1.2rem", md: "1.35rem" },
                  lineHeight: 1.45,
                  color: "text.primary",
                }}
              >
                “{trustQuote}”
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
