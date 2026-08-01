import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import Typography from "@mui/material/Typography";
import MediaPlaceholder from "@/components/home/MediaPlaceholder";
import ServiceBoundaryNote from "@/components/services/ServiceBoundaryNote";
import PrimaryCTA from "@/components/shared/PrimaryCTA";
import { brandRadii } from "@/theme/brandTokens";

export default function ServiceDetailSection({
  id,
  eyebrow,
  title,
  description,
  bulletsTitle,
  bullets = [],
  goodFitTitle,
  goodFit,
  boundaryNote,
  expectationNote,
  ctaLabel,
  ctaHref,
  imageLabel,
  imageAlt,
  mediaFirst = false,
  tone = "cream",
}) {
  const isGreen = tone === "green";
  const headingId = `${id}-heading`;

  const media = (
    <MediaPlaceholder
      label={imageLabel}
      aria-label={imageAlt || imageLabel}
      minHeight={{ xs: 240, md: 420 }}
      ratio="4 / 5"
      sx={{
        bgcolor: isGreen ? "background.default" : "secondary.main",
      }}
    />
  );

  const content = (
    <Box>
      {eyebrow ? (
        <Typography
          variant="overline"
          component="p"
          sx={{
            color: isGreen ? "rgba(255,255,255,0.85)" : "primary.dark",
            mb: 1.25,
          }}
        >
          {eyebrow}
        </Typography>
      ) : null}

      <Typography
        id={headingId}
        variant="h2"
        component="h2"
        sx={{ mb: 2, color: isGreen ? "common.white" : "inherit" }}
      >
        {title}
      </Typography>

      <Typography
        variant="body1"
        sx={{
          mb: 3,
          fontSize: "1.05rem",
          maxWidth: "40rem",
          color: isGreen ? "rgba(255,255,255,0.9)" : "text.secondary",
        }}
      >
        {description}
      </Typography>

      {bullets.length ? (
        <Box sx={{ mb: 3 }}>
          <Typography
            variant="h3"
            component="h3"
            sx={{
              typography: "h6",
              mb: 1.25,
              color: isGreen ? "common.white" : "inherit",
            }}
          >
            {bulletsTitle}
          </Typography>
          <List dense disablePadding sx={{ listStyleType: "disc", pl: 2.75 }}>
            {bullets.map((item) => (
              <ListItem
                key={item}
                disableGutters
                sx={{
                  display: "list-item",
                  py: 0.35,
                  color: isGreen ? "rgba(255,255,255,0.9)" : "inherit",
                }}
              >
                <ListItemText
                  primary={item}
                  slotProps={{
                    primary: {
                      variant: "body2",
                      sx: {
                        color: isGreen
                          ? "rgba(255,255,255,0.9)"
                          : "text.secondary",
                      },
                    },
                  }}
                />
              </ListItem>
            ))}
          </List>
        </Box>
      ) : null}

      {goodFit ? (
        <Box
          sx={{
            mb: 2,
            p: 2.5,
            borderRadius: `${brandRadii.card}px`,
            bgcolor: "background.default",
            border: "1px solid",
            borderColor: isGreen ? "rgba(255,255,255,0.18)" : "divider",
            color: "text.primary",
          }}
        >
          <Typography
            variant="h3"
            component="h3"
            sx={{ typography: "h6", mb: 1 }}
          >
            {goodFitTitle}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {goodFit}
          </Typography>
        </Box>
      ) : null}

      {boundaryNote ? (
        <ServiceBoundaryNote title="Service boundaries">
          {boundaryNote}
        </ServiceBoundaryNote>
      ) : null}

      {expectationNote ? (
        <ServiceBoundaryNote title="What to expect">
          {expectationNote}
        </ServiceBoundaryNote>
      ) : null}

      <Box sx={{ mt: 3.5 }}>
        <PrimaryCTA
          label={ctaLabel}
          href={ctaHref}
          sx={{
            width: { xs: "100%", sm: "auto" },
            ...(isGreen
              ? {
                  bgcolor: "common.white",
                  color: "primary.dark",
                  "&:hover": {
                    bgcolor: "background.default",
                    color: "primary.dark",
                  },
                }
              : {}),
          }}
        />
      </Box>
    </Box>
  );

  return (
    <Box
      component="section"
      id={id}
      aria-labelledby={headingId}
      sx={{
        py: { xs: 7, md: 10 },
        bgcolor: isGreen ? "primary.dark" : "background.default",
        color: isGreen ? "common.white" : "inherit",
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={{ xs: 4, md: 6 }} sx={{ alignItems: "center" }}>
          <Grid
            size={{ xs: 12, md: 5 }}
            sx={{
              order: { xs: 1, md: mediaFirst ? 1 : 2 },
            }}
          >
            {media}
          </Grid>
          <Grid
            size={{ xs: 12, md: 7 }}
            sx={{
              order: { xs: 2, md: mediaFirst ? 2 : 1 },
            }}
          >
            {content}
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
