import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";

/**
 * Green section band with a heading, optional supporting copy,
 * and a grid of divider + title + description points.
 *
 * @param {object} props
 * @param {string} props.headingId
 * @param {string} props.title
 * @param {string} [props.supporting]
 * @param {{ id?: string, title: string, description: string }[]} props.items
 * @param {object} [props.itemSize] MUI Grid size breakpoints
 */
export default function PointBandSection({
  headingId,
  title,
  supporting,
  items = [],
  itemSize = { xs: 12, sm: 6, md: 4 },
}) {
  return (
    <Box
      component="section"
      aria-labelledby={headingId}
      sx={{
        py: { xs: 7, md: 10 },
        bgcolor: "primary.dark",
        color: "common.white",
      }}
    >
      <Container maxWidth="lg">
        <Typography
          id={headingId}
          variant="h2"
          component="h2"
          sx={{
            mb: 1.5,
            color: "common.white",
            textAlign: { xs: "center", md: "left" },
          }}
        >
          {title}
        </Typography>
        {supporting ? (
          <Typography
            variant="body1"
            sx={{
              mb: { xs: 4, md: 5 },
              maxWidth: "40rem",
              color: "rgba(255,255,255,0.9)",
              textAlign: { xs: "center", md: "left" },
              mx: { xs: "auto", md: 0 },
            }}
          >
            {supporting}
          </Typography>
        ) : null}

        <Grid container spacing={{ xs: 6.5, md: 8 }}>
          {items.map((item) => (
            <Grid key={item.id || item.title} size={itemSize}>
              <Box
                sx={{
                  height: "100%",
                  textAlign: { xs: "center", sm: "left" },
                }}
              >
                <Box
                  aria-hidden
                  sx={{
                    width: 36,
                    height: 3,
                    mb: 2,
                    mx: { xs: "auto", sm: 0 },
                    borderRadius: 1,
                    bgcolor: "common.white",
                  }}
                />
                <Typography
                  variant="h3"
                  component="h3"
                  sx={{ typography: "h5", mb: 1, color: "common.white" }}
                >
                  {item.title}
                </Typography>
                <Typography
                  variant="body2"
                  sx={{ color: "rgba(255,255,255,0.85)" }}
                >
                  {item.description}
                </Typography>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}
