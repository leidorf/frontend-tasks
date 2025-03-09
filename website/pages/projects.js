import Layout from "@/components/layout/Layout";
import PageHead from "@/components/layout/PageHead";
import { Box, Link, List, ListItem, Typography } from "@mui/material";
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
        <PageHead headTitle={"Projeler"}></PageHead>
        <Typography>PROJELER</Typography>
        <Box>
          <List>
            {data.projects.map((project) => (
              <ListItem
                component="div"
                sx={{ display: "flex", justifyContent: "space-between" }}
              >
                <Link
                  href={project.link}
                  target="_blank"
                  sx={{pr:10}}
                >
                  {project.title}
                </Link>
                <Typography>{project.description}</Typography>
              </ListItem>
            ))}
          </List>
        </Box>
      </Layout>
    </>
  );
}
