import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { brandRadii } from "@/theme/brandTokens";

export default function PlaceholderSection({
  title,
  description,
  plannedItems,
  children,
  component = "section",
}) {
  return (
    <Box
      component={component}
      sx={{
        mb: { xs: 3, md: 4 },
        p: { xs: 2.5, md: 3.5 },
        border: "1px solid",
        borderColor: "divider",
        borderRadius: `${brandRadii.card}px`,
        bgcolor: "background.paper",
      }}
    >
      <Typography variant="h3" component="h2" sx={{ mb: 1.5 }}>
        {title}
      </Typography>
      {description ? (
        <Typography
          variant="body1"
          sx={{
            color: "text.secondary",
            mb: plannedItems?.length || children ? 2 : 0,
          }}
        >
          {description}
        </Typography>
      ) : null}
      {plannedItems?.length ? (
        <Box component="ul" sx={{ m: 0, pl: 2.5 }}>
          {plannedItems.map((item) => (
            <Typography
              key={item}
              component="li"
              variant="body2"
              color="text.secondary"
              sx={{ mb: 0.5 }}
            >
              {item}
            </Typography>
          ))}
        </Box>
      ) : null}
      {children}
    </Box>
  );
}
