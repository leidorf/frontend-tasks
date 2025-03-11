import AboutComponent from "@/components/AboutComponent";
import Layout from "@/components/layout/Layout";
import PageHead from "@/components/layout/PageHead";
import { Box, Divider, Link, List, ListItem, ListItemText, Typography } from "@mui/material";
import fsPromises from "fs/promises";
import path from "path";

export async function getStaticProps() {
  const filePath = path.join(process.cwd(), "lib/about.json");
  const jsonData = await fsPromises.readFile(filePath);
  const objectData = JSON.parse(jsonData);

  return {
    props: {
      data: objectData,
    },
  };
}

export default function About({ data }) {
  return (
    <>
      <Layout>
        <PageHead headTitle={"hakkımda"} />
        <Typography
          variant="h3"
          gutterBottom
          sx={{ color: "var(--secondaryText)" }}
        >
          hakkımda
        </Typography>
        <AboutComponent data={data} />
      </Layout>
    </>
  );
}
