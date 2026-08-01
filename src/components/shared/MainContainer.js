import Container from "@mui/material/Container";

export default function MainContainer({ children, sx, ...props }) {
  return (
    <Container
      component="div"
      maxWidth="lg"
      sx={{
        px: { xs: 2, sm: 3 },
        py: { xs: 4, md: 7 },
        ...sx,
      }}
      {...props}
    >
      {children}
    </Container>
  );
}
