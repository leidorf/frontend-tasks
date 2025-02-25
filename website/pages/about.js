import Layout from "@/components/layout/Layout";
import PageHead from "@/components/layout/PageHead";
import { getStaticProps } from "@/functions/getAbout";
import { Box, List, ListItem, Typography } from "@mui/material";

export default function About() {
  const data = getStaticProps();
  const exp = data.experiences ? data.experiences : "";
  const skills = data.skills ? data.skills : "";
  const certificates = data.certificates ? data.certificates : "";
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
            {skills.map((skill) => (
              <ListItem>{skill.title}</ListItem>
            ))}
          </List>
        </Box>
      </Layout>
    </>
  );
}
