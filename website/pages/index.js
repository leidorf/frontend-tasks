import IndexComponent from "@/components/IndexComponent";
import Layout from "@/components/layout/Layout";
import PageHead from "@/components/layout/PageHead";

export default function Home() {
  return (
    <>
      <Layout>
        <PageHead headTitle={"ana sayfa"} />
        <IndexComponent />
      </Layout>
    </>
  );
}
