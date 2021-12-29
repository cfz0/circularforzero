import Layout from "components/layout";
import Banner from "layout/banner";
import WhyUs from "layout/why-us";
import WorkFlow from "layout/workflow";
import Head from "next/head";
import theme from "theme";
import { ThemeProvider } from "theme-ui";
import HowWeWork from "layout/how-we-work";
import CMS from "api/cms";

export default function Home({ data }) {
  console.log(data);
  return (
    <ThemeProvider theme={theme}>
      <Head>
        <title>CircularForZero</title>
      </Head>
      <Layout>
        <Banner data={data.data.attributes.banner} />
        <HowWeWork data={data.data.attributes.how_it_works} />
        <WhyUs data={data.data.attributes.why_us} />
        <WorkFlow data={data.data.attributes.our_approach} />
      </Layout>
    </ThemeProvider>
  );
}

export async function getStaticProps() {
  const { data } = await CMS.get("/landing-page", {
    params: {
      "populate[banner][populate]": "*",
      "populate[how_it_works][populate]": "*",
      "populate[why_us][populate]": "*",
      "populate[our_approach][populate]": "*",
    },
  });

  return {
    props: { data },
    revalidate: 60,
  };
}
