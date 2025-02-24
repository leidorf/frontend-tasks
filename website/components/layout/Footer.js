import { Typography, Link, Box } from "@mui/material";

const Footer = () => {
  return (
    <>
      <Box sx={{ mt: 3, p: 2, border: "white 1px solid" }}>
        <Typography>FOOTER</Typography>
        <Link href="/">Ana Sayfa</Link>
      </Box>
    </>
  );
};

export default Footer;
