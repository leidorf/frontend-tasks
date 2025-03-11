import Layout from "@/components/layout/Layout";
import PageHead from "@/components/layout/PageHead";
import ProjectsComponent from "@/components/ProjectsComponent";
import { Typography } from "@mui/material";
import fsPromises from "fs/promises";
import path from "path";

export async function getStaticProps() {
  const filePath = path.join(process.cwd(), "lib/projects.json");
  const jsonData = await fsPromises.readFile(filePath);
  const objectData = JSON.parse(jsonData);

  return {
    props: {
      data: objectData,
    },
  };
}

export default function Projects({ data }) {
  return (
    <>
      <Layout>
        <PageHead headTitle={"projeler"} />
        <Typography
          variant="h3"
          color="var(--secondaryText)"
          gutterBottom
        >
          projeler
        </Typography>
        <ProjectsComponent data={data} />
      </Layout>
    </>
  );
}
