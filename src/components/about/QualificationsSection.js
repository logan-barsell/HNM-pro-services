import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import Typography from "@mui/material/Typography";
import { qualifications } from "@/content/about";
import { brandRadii } from "@/theme/brandTokens";

export default function QualificationsSection() {
  return (
    <Box
      component="section"
      aria-labelledby="qualifications-heading"
      sx={{
        py: { xs: 7, md: 10 },
        bgcolor: "primary.dark",
        color: "common.white",
      }}
    >
      <Container maxWidth="md">
        <Box
          sx={{
            p: { xs: 3, md: 4 },
            borderRadius: `${brandRadii.card}px`,
            bgcolor: "background.default",
            border: "1px solid",
            borderColor: "rgba(255,255,255,0.18)",
            color: "text.primary",
          }}
        >
          <Typography
            id="qualifications-heading"
            variant="h2"
            component="h2"
            sx={{ mb: 2 }}
          >
            {qualifications.title}
          </Typography>
          <Typography
            variant="body1"
            color="text.secondary"
            sx={{ mb: 3, fontSize: "1.05rem" }}
          >
            {qualifications.temporaryCopy}
          </Typography>

          <Typography
            variant="h3"
            component="h3"
            sx={{ typography: "h6", mb: 1.25 }}
          >
            Details to be confirmed for publication
          </Typography>
          <List dense disablePadding sx={{ listStyleType: "disc", pl: 2.75 }}>
            {qualifications.futureCategories.map((item) => (
              <ListItem
                key={item}
                disableGutters
                sx={{ display: "list-item", py: 0.35 }}
              >
                <ListItemText
                  primary={item}
                  slotProps={{
                    primary: {
                      variant: "body2",
                      color: "text.secondary",
                    },
                  }}
                />
              </ListItem>
            ))}
          </List>
        </Box>
      </Container>
    </Box>
  );
}
