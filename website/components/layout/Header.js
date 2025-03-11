import { GitHub } from "@mui/icons-material";
import { Typography, Box, List, ListItem, IconButton } from "@mui/material";

const Header = () => {
  return (
    <>
      <Box
        sx={{
          mb: 3,
          p: 2,
          paddingX: 5,
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          borderBottom: "#9C27B0 1px solid",
          borderRadius: "1.5rem",
        }}
      >
        <Typography
          variant="h5"
          component="a"
          href="/"
          sx={{
            textWrap: "nowrap",
            "&:hover": {
              color: "var(--secondaryText)",
            },
          }}
        >
          ✮ leidorf
        </Typography>
        <Box sx={{ display: { xs: "none", md: "flex" } }}>
          <List sx={{ display: "flex" }}>
            <ListItem
              component="a"
              href="/projects"
              sx={{ "&:hover": { color: "var(--secondaryText)" } }}
            >
              projeler
            </ListItem>
            <ListItem
              component="a"
              href="/about"
              sx={{ "&:hover": { color: "var(--secondaryText)" } }}
            >
              hakkımda
            </ListItem>
            <ListItem
              component="a"
              href="/contact"
              sx={{ "&:hover": { color: "var(--secondaryText)" } }}
            >
              iletişim
            </ListItem>
          </List>
        </Box>
        <IconButton
          href="https://github.com/leidorf"
          target="_blank"
        >
          <GitHub color="secondary" />
        </IconButton>
      </Box>
    </>
  );
};

export default Header;
