import ContactForm from "@/components/ContactForm";
import Layout from "@/components/layout/Layout";
import PageHead from "@/components/layout/PageHead";
import { Typography } from "@mui/material";

export default function Contact() {
  return (
    <>
      <Layout>
        <PageHead headTitle={"İletişim"} />{" "}
        <Typography
          variant="h3"
          gutterBottom
          sx={{ color: "var(--secondaryText)" }}
        >
          iletişim
        </Typography>
        <ContactForm />
      </Layout>
    </>
  );
}
