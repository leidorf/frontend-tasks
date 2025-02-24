import Head from "next/head";

const PageHead = ({ headTitle }) => {
  return (
    <>
      <Head>
        <title>{headTitle ? headTitle : "Yavuzlar Kişisel Web Sitesi"}</title>
      </Head>
    </>
  );
};

export default PageHead;
