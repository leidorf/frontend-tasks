import { GitHub } from "@mui/icons-material";
import { Typography, Box, List, ListItem, Button, IconButton } from "@mui/material";
import { useState } from "react";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <>
      <Box
        sx={{
          mb: 3,
          p: 2,
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          borderBottom: "#52207b 1px solid",
        }}
      >
        <Typography
          component="a"
          href="/"
          sx={{
            fontSize: "1.25rem",
            "&:hover": { textDecorationLine: "underline", textDecorationColor: "#c09edb" },
          }}
        >
          leidorf
        </Typography>
        <Box sx={{}}>
          <List sx={{ display: "flex" }}>
            <ListItem
              component="a"
              href="/projects"
            >
              projeler
            </ListItem>
            <ListItem
              component="a"
              href="/about"
            >
              hakkımda
            </ListItem>
            <ListItem
              component="a"
              href="/contact"
            >
              iletişim
            </ListItem>
          </List>
        </Box>
        <IconButton
          href="https://github.com/leidorf"
          target="_blank"
        >
          <GitHub sx={{ filter: "invert(1)" }} />
        </IconButton>
      </Box>
    </>
  );
};

export default Header;
