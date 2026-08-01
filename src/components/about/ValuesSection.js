import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import ForumOutlinedIcon from "@mui/icons-material/ForumOutlined";
import HandshakeOutlinedIcon from "@mui/icons-material/HandshakeOutlined";
import ScheduleOutlinedIcon from "@mui/icons-material/ScheduleOutlined";
import VolunteerActivismOutlinedIcon from "@mui/icons-material/VolunteerActivismOutlined";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { aboutValues } from "@/content/about";
import { brandRadii } from "@/theme/brandTokens";

const iconsById = {
  compassion: FavoriteBorderOutlinedIcon,
  dependability: ScheduleOutlinedIcon,
  respect: HandshakeOutlinedIcon,
  communication: ForumOutlinedIcon,
  personalized: VolunteerActivismOutlinedIcon,
};

export default function ValuesSection() {
  return (
    <Box
      component="section"
      aria-labelledby="values-heading"
      sx={{ py: { xs: 7, md: 10 }, bgcolor: "background.default" }}
    >
      <Container maxWidth="lg">
        <Typography
          id="values-heading"
          variant="h2"
          component="h2"
          sx={{ mb: 1.5, textAlign: { xs: "center", md: "left" } }}
        >
          Values and approach
        </Typography>
        <Typography
          variant="body1"
          color="text.secondary"
          sx={{
            mb: { xs: 4, md: 5 },
            maxWidth: "40rem",
            textAlign: { xs: "center", md: "left" },
            mx: { xs: "auto", md: 0 },
          }}
        >
          These principles guide how HNM Professional Services shows up for
          clients, pets, and homes.
        </Typography>

        <Grid container spacing={2.5}>
          {aboutValues.map((value) => {
            const Icon = iconsById[value.id] || FavoriteBorderOutlinedIcon;

            return (
              <Grid key={value.id} size={{ xs: 12, sm: 6, md: 4 }}>
                <Box
                  sx={{
                    height: "100%",
                    p: 3,
                    borderRadius: `${brandRadii.card}px`,
                    bgcolor: "secondary.main",
                    border: "1px solid",
                    borderColor: "divider",
                  }}
                >
                  <Box
                    aria-hidden
                    sx={{
                      width: 48,
                      height: 48,
                      mb: 2,
                      borderRadius: `${brandRadii.chip}px`,
                      bgcolor: "primary.dark",
                      color: "common.white",
                      display: "grid",
                      placeItems: "center",
                    }}
                  >
                    <Icon fontSize="small" />
                  </Box>
                  <Typography
                    variant="h3"
                    component="h3"
                    sx={{ typography: "h6", mb: 1 }}
                  >
                    {value.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {value.description}
                  </Typography>
                </Box>
              </Grid>
            );
          })}
        </Grid>
      </Container>
    </Box>
  );
}
