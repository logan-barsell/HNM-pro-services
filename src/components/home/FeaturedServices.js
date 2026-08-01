"use client";

import PetsOutlinedIcon from "@mui/icons-material/PetsOutlined";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import NextLink from "next/link";
import { homeServices } from "@/content/home";
import { brandRadii } from "@/theme/brandTokens";

const icons = {
  "pet-sitting": PetsOutlinedIcon,
  "companion-care": FavoriteBorderOutlinedIcon,
  "house-sitting": HomeOutlinedIcon,
};

export default function FeaturedServices() {
  return (
    <Box
      component="section"
      aria-labelledby="featured-services-heading"
      sx={{
        py: { xs: 7, md: 10 },
        bgcolor: "primary.dark",
        color: "common.white",
      }}
    >
      <Container maxWidth="lg">
        <Typography
          id="featured-services-heading"
          variant="h2"
          component="h2"
          sx={{
            mb: 1.5,
            color: "common.white",
            textAlign: { xs: "center", md: "left" },
          }}
        >
          Featured services
        </Typography>
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
          Thoughtful support for the people, pets, and homes that matter most.
        </Typography>

        <Grid container spacing={3}>
          {homeServices.map((service) => {
            const Icon = icons[service.id] || PetsOutlinedIcon;

            return (
              <Grid key={service.id} size={{ xs: 12, md: 4 }}>
                <Box
                  component={NextLink}
                  href={service.href}
                  aria-label={`${service.name}. ${service.learnMoreLabel}`}
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    height: "100%",
                    p: { xs: 3, md: 3.5 },
                    borderRadius: `${brandRadii.card}px`,
                    bgcolor: "background.default",
                    border: "1px solid",
                    borderColor: "rgba(255,255,255,0.2)",
                    textDecoration: "none",
                    color: "text.primary",
                    transition:
                      "transform 0.2s ease, box-shadow 0.2s ease, border-color 0.2s ease",
                    "&:hover": {
                      transform: "translateY(-4px)",
                      boxShadow: "0 12px 28px rgba(0, 0, 0, 0.18)",
                      borderColor: "common.white",
                    },
                    "&:focus-visible": {
                      outline: "2px solid",
                      outlineColor: "common.white",
                      outlineOffset: 3,
                    },
                    "@media (prefers-reduced-motion: reduce)": {
                      transition: "none",
                      "&:hover": {
                        transform: "none",
                      },
                    },
                  }}
                >
                  <Box
                    aria-hidden
                    sx={{
                      width: 64,
                      height: 64,
                      mb: 2.5,
                      borderRadius: `${brandRadii.media}px`,
                      bgcolor: "primary.dark",
                      color: "common.white",
                      display: "grid",
                      placeItems: "center",
                    }}
                  >
                    <Icon sx={{ fontSize: 30 }} />
                  </Box>

                  <Typography
                    variant="h3"
                    component="h3"
                    sx={{ typography: "h5", mb: 1.25 }}
                  >
                    {service.name}
                  </Typography>
                  <Typography
                    variant="body2"
                    color="text.secondary"
                    sx={{ mb: 3, flexGrow: 1 }}
                  >
                    {service.summary}
                  </Typography>
                  <Button
                    component="span"
                    variant="text"
                    color="primary"
                    sx={{ alignSelf: "flex-start", px: 0, minWidth: 0 }}
                  >
                    {service.learnMoreLabel}
                  </Button>
                </Box>
              </Grid>
            );
          })}
        </Grid>
      </Container>
    </Box>
  );
}
