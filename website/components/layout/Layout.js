import Header from "./Header";
import Footer from "./Footer";
import PageHead from "./PageHead";
import Grid from "@mui/material/Grid2";
import { Box } from "@mui/material";

const Layout = ({ children }) => {
  return (
    <>
      <Grid
        container
        direction="column"
        alignItems="center"
      >
        <Grid size={{ xs: 12 }}>
          <PageHead />
          <Header />
        </Grid>
        <Grid size={{ xs: 12, sm: 8, md: 6, lg: 4 }}>
          <Box component="main" sx={{p:"1.5rem"}}>{children}</Box>
        </Grid>
        <Grid size={{ xs: 12 }}>
          <Footer />
        </Grid>
      </Grid>
    </>
  );
};

export default Layout;
