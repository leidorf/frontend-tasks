import Layout from "@/components/layout/Layout";
import PageHead from "@/components/layout/PageHead";
import { Box, Link, List, ListItem, ListItemText, Typography } from "@mui/material";
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
        <PageHead headTitle={"Hakkımda"}></PageHead>
        <Typography>HAKKIMDA</Typography>
        <Typography>
          Selamlar ben Güray Dağ, Manisa Celal Bayar Üniversitesi'nde yazılım mühendisliği son sınıf öğrencisiyim. Üniversite
          eğitimim boyunca yazılım mühendisliğinin çeşitli alt dallarında projelerde bulundum ve geliştirdim. Bu alt dalları
          denedikten sonra kendimi en yakın olarak web geliştirme ve siber güvenliğe yakın hissettim. 2023 yılında tesadüfen
          Siber Vatan programıyla karşılaştım, siber güvenlik ve yazılım sektöründe ufkumu açtı diyebilirim. Üniversite hayatım
          boyunca edindiğim bilgileri ve eğitimleri altta bulabilirsiniz.
        </Typography>
        <Box>
          <List>
            <Typography>Deneyim</Typography>
            {data.experiences.map((experience) => (
              <ListItem component="div">
                <ListItemText
                  primary={experience.title}
                  secondary={experience.description}
                />
              </ListItem>
            ))}
          </List>
          <List>
            <Typography>Yetenekler</Typography>
            {data.skills.map((skill) => (
              <ListItem component="p">{skill.title}</ListItem>
            ))}
          </List>
          <List>
            <Typography>Sertifikalar</Typography>
            {data.certificates.map((certificate) => (
              <ListItem
                component="a"
                href={certificate.link}
                target="_blank"
              >
                {certificate.title}
              </ListItem>
            ))}
          </List>
        </Box>
      </Layout>
    </>
  );
}
