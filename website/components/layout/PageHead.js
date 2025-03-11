import Head from "next/head";

const PageHead = ({ headTitle }) => {
  return (
    <>
      <Head>
        <title>{headTitle ? headTitle : "leidorf"}</title>
      </Head>
    </>
  );
};

export default PageHead;
