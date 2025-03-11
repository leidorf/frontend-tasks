import { Typography, List, Box, ListItem } from "@mui/material";

const Footer = () => {
  return (
    <>
      <Box
        sx={{
          mt: 3,
          p: 2,
          paddingX: 5,
          borderTop: "#9C27B0 1px solid",
          borderRadius: "1.5rem",
          display: "flex",
          flexDirection: { xs: "column", md: "unset" },
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Box sx={{ display: "block", textAlign: "center", mb: { xs: "1.5rem", md: 0 } }}>
          <Typography
          variant="body2"
            component="a"
            href="/"
            sx={{ display: "block", textWrap: "nowrap", "&:hover": { color: "var(--secondaryText)" } }}
          >
            ✮ leidorf
          </Typography>
          <Typography
          variant="body2"
            component="a"
            href="https://www.gnu.org/licenses/copyleft.tr.html"
            target="_blank"
            sx={{ display: "block","&:hover": { color: "var(--secondaryText)" } }}
          >
            copyleft
          </Typography>
        </Box>
        <Box>
          <List sx={{ display: "flex", fontSize: "0.8rem" }}>
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
      </Box>
    </>
  );
};

export default Footer;
