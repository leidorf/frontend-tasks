import { Grid2 } from "@mui/material";
import Header from "./Header";
import Footer from "./Footer";
import PageHead from "./PageHead";

const Layout = ({ children }) => {
  return (
    <>
      <Grid2
        container
        justifyContent={"center"}
        sx={{ minHeight: "100vh" }}
      >
        <Grid2
          item
          xs={12}
          sm={6}
          md={4}
          lg={3}
        >
          <PageHead />
          <Header />
          <main>{children}</main>
          <Footer />
        </Grid2>
      </Grid2>
    </>
  );
};

export default Layout;
