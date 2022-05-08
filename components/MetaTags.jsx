import Head from "next/head";

const MetaTags = ({ title = "GitHub clone", desc }) => {
  return (
    <Head>
      <title>{title}</title>
      <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
      <meta name="title" content={title} />
      <meta name="description" content={desc} />
    </Head>
  );
};

export default MetaTags;
