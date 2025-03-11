import { Box, Link, Typography } from "@mui/material";

const IndexComponent = () => {
  return (
    <>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          mb: "1.5rem",
        }}
      >
        <Box
          component="img"
          alt="logo"
          src="https://avatars.githubusercontent.com/u/93585259?v=4"
          sx={{
            width: { xs: "192px", md: "256px" },
            height: "auto",
            borderRadius: "0.5rem",
            mb: "0.5rem",
          }}
        />
        <Typography
          variant="h4"
          component="a"
          href="https://github.com/leidorf"
          target="_blank"
          sx={{ color: "var(--secondaryText)" }}
        >
          leidorf
        </Typography>
      </Box>
      <Typography sx={{ textAlign: "justify", whiteSpace: "pre-line" }}>
        Kavramsal olarak interneti, FOSS'u ve çoğu sanat formunu seviyorum. Yazılım dışında çeşit çeşit konularla ilgilensem de
        genel olarak bir şeyler üretmekten haz alıyorum. Bu konular bazen son derece fiziksel bazen son derece dijital
        olabiliyor. Kısaca ehemmiyetsiz şeylerle de uğraşıyorum. Ama ne lüzmu var hepsini sıralamaya? Alelade işler sonuçta.{" "}
        {"\n"}
        {"\n"}Zamanında geliştirdiğim, paylaşmaya değer gördüğüm yazılım projeleri için{" "}
        <Link
          href="/projects"
          sx={{
            textDecoration: "none",
            color: "var(--primaryText)",
            fontWeight: "bold",
            "&:hover": { color: "var(--secondaryText)" },
          }}
        >
          projeler
        </Link>{" "}
        sayfasına bakabilirsiniz. {"\n"}
        {"\n"}Kariyerime dair özet bilgiler için{" "}
        <Link
          href="/about"
          sx={{
            textDecoration: "none",
            color: "var(--primaryText)",
            fontWeight: "bold",
            "&:hover": { color: "var(--secondaryText)" },
          }}
        >
          hakkımda
        </Link>{" "}
        sayfasına göz atabilirsiniz. {"\n"}
        {"\n"}Eğer beni çok sevip iletişime geçmek istediyseniz sadece bunun için var olan{" "}
        <Link
          href="/contact"
          sx={{
            textDecoration: "none",
            color: "var(--primaryText)",
            fontWeight: "bold",
            "&:hover": { color: "var(--secondaryText)" },
          }}
        >
          iletişim
        </Link>{" "}
        sayfasına uğrayabilirsiniz.
      </Typography>
    </>
  );
};

export default IndexComponent;
