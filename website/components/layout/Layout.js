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
        <Grid size={{ xs: 12, sm: 6, md: 4, lg: 3 }}>
          <Box component="main">{children}</Box>
        </Grid>
        <Grid size={{ xs: 12 }}>
          <Footer />
        </Grid>
      </Grid>
    </>
  );
};

export default Layout;
