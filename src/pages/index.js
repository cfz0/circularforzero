import Layout from "components/layout";
import Banner from "layout/banner";
import WhyUs from "layout/why-us";
import WorkFlow from "layout/workflow";
import Head from "next/head";
import theme from "theme";
import { ThemeProvider } from "theme-ui";
import HowWeWork from "layout/how-we-work";
import CMS from "api/cms";
// import { Dialog } from "@material-ui/core";
// import { useState } from "react";

export default function Home({ data }) {
  // const [dialogOpen, setDialogOpen] = useState(true);

  return (
    <ThemeProvider theme={theme}>
      <Head>
        <title>CircularForZero</title>
        <link rel="icon" href="/assets/logo.svg"></link>
      </Head>
      <Layout>
        {/* <Dialog open={dialogOpen}>
          <div className="px-10 py-5 flex flex-col items-center justify-center">
            <p className="text-2xl font-medium">
              The site is under development
            </p>
            <p>You can only explore the home page</p>

            <button
              className="bg-[#00897B] text-white px-5 py-1 font-bold rounded mt-5"
              onClick={() => setDialogOpen(false)}
            >
              Close
            </button>
          </div>
        </Dialog> */}
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
