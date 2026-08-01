import Box from "@mui/material/Box";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Typography from "@mui/material/Typography";
import { privacySummary } from "@/content/privacy";
import { brandRadii } from "@/theme/brandTokens";

export default function PrivacySummary() {
  return (
    <Box
      component="section"
      aria-labelledby="privacy-summary-heading"
      sx={{
        mb: { xs: 2, md: 3 },
        p: { xs: 2.5, md: 3.5 },
        borderRadius: `${brandRadii.card}px`,
        bgcolor: "secondary.main",
        border: "1px solid",
        borderColor: "divider",
        borderLeft: "4px solid",
        borderLeftColor: "primary.dark",
        maxWidth: "42rem",
      }}
    >
      <Typography
        id="privacy-summary-heading"
        variant="h2"
        component="h2"
        sx={{
          mb: 1.75,
          fontSize: {
            xs: "clamp(1.45rem, 1.25rem + 1vw, 1.85rem)",
            md: "clamp(1.65rem, 1.45rem + 0.6vw, 2rem)",
          },
        }}
      >
        {privacySummary.title}
      </Typography>
      <Typography variant="body1" color="text.secondary" sx={{ mb: 2 }}>
        {privacySummary.body}
      </Typography>
      <List dense disablePadding sx={{ listStyleType: "disc", pl: 2.75 }}>
        {privacySummary.bullets.map((item) => (
          <ListItem
            key={item}
            disableGutters
            sx={{ display: "list-item", py: 0.35 }}
          >
            <Typography variant="body2" color="text.primary">
              {item}
            </Typography>
          </ListItem>
        ))}
      </List>
    </Box>
  );
}
