import { Typography, Link, Box } from "@mui/material";

const Header = () => {
  return (
    <>
      <Box
        fullwidth
        sx={{ mb: 3, p: 2, border: "purple 1px solid" }}
      >
        <Typography>HEADER</Typography>
        <Link href="/">Ana Sayfa</Link>
      </Box>
    </>
  );
};

export default Header;
