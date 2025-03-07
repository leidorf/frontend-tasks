import { Typography, List, Box, ListItem } from "@mui/material";

const Footer = () => {
  return (
    <>
      <Box
        sx={{ mt: 3, p: 2, border: "white 1px solid", display: "flex", justifyContent: "space-between", alignItems: "center" }}
      >
        <Box>
          <Typography
            component="a"
            href="/"
          >
            leidorf ✮
          </Typography>
          <Typography>copyleft</Typography>
        </Box>
        <Box>
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

export default Footer;
