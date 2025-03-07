import { Typography, Box, List, ListItem } from "@mui/material";
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
          border: "purple 3px solid",
        }}
      >
        <Typography
          component="a"
          href="/"
        >
          leidorf
        </Typography>
        <Box sx={{}} >
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
      </Box>
    </>
  );
};

export default Header;
