import { Box, Divider, Link, List, ListItem, ListItemText, Typography } from "@mui/material";

const AboutComponent = ({ data }) => {
  return (
    <>
      <Typography
        component="p"
        sx={{ marginY: "1.5rem", paddingX: "1rem", textAlign: "justify" }}
      >
        Selamlar ben Güray Dağ, Manisa Celal Bayar Üniversitesi'nde yazılım mühendisliği son sınıf öğrencisiyim. Üniversite
        eğitimim boyunca yazılım mühendisliğinin çeşitli alt dallarında projelerde bulundum ve geliştirdim. Bu alt dalları
        denedikten sonra kendimi en yakın olarak web geliştirme ve siber güvenliğe yakın hissettim. 2023 yılında tesadüfen Siber
        Vatan programıyla karşılaştım, siber güvenlik ve yazılım sektöründe ufkumu açtı diyebilirim. Üniversite hayatım boyunca
        edindiğim bilgileri ve eğitimleri altta bulabilirsiniz.
      </Typography>
      <Divider sx={{ borderColor: "white", mb: "1rem" }} />
      <Box>
        <List sx={{ mb: "0.5rem" }}>
          <Typography
            variant="h5"
            gutterBottom
            sx={{ color: "var(--secondaryText)" }}
          >
            deneyim
          </Typography>
          {data.experiences.map((experience, index) => (
            <ListItem
              key={index}
              component="div"
            >
              <ListItemText
                primary={experience.title}
                secondary={experience.description}
                slotProps={{
                  primary: { fontSize: "1.125rem", color: "var(--primaryText)" },
                  secondary: { color: "white", mt: "0.5rem" },
                }}
              />
            </ListItem>
          ))}
        </List>
        <Divider sx={{ borderColor: "white", mb: "1.5rem" }} />
        <Typography
          variant="h5"
          gutterBottom
          sx={{ color: "var(--secondaryText)" }}
        >
          yetenekler
        </Typography>
        <Box sx={{ display: "flex", flexWrap: "wrap", mb: "1rem" }}>
          {data.skills.map((skill, index) => (
            <Typography
              key={index}
              sx={{ width: "10rem", padding: "0.5rem" }}
            >
              {`>`} {skill.title}
            </Typography>
          ))}
        </Box>
        <Divider sx={{ borderColor: "white", mb: "1rem" }} />
        <List>
          <Typography
            variant="h5"
            gutterBottom
            sx={{ color: "var(--secondaryText)" }}
          >
            sertifikalar
          </Typography>
          {data.certificates.map((certificate, index) => (
            <ListItem key={index}>
              <Link
                href={certificate.link}
                target="_blank"
                sx={{
                  color: "var(--primaryText)",
                  textDecorationColor: "var(--primaryText)",
                  "&:hover": { color: "var(--secondaryText)" },
                }}
              >
                {certificate.title}
              </Link>
            </ListItem>
          ))}
        </List>
      </Box>
    </>
  );
};

export default AboutComponent;
