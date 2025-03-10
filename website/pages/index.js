import Layout from "@/components/layout/Layout";
import PageHead from "@/components/layout/PageHead";
import { Link, List, ListItem, Typography } from "@mui/material";

export default function Home() {
  return (
    <>
      <Layout>
        <PageHead headTitle={"Ana Sayfa"} />
        <Typography>ANA Sayfa</Typography>
        <List>
          <ListItem>
            <Link href={"/projects"}>projelerim</Link>
          </ListItem>
          <ListItem>
            <Link href={"/about"}>hakkımda</Link>
          </ListItem>
          <ListItem>
            <Link href={"/contact"}>iletişim</Link>
          </ListItem>
        </List>
      </Layout>
    </>
  );
}
