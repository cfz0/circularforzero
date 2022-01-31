/** @jsxImportSource theme-ui */

import CMS from "api/cms";
import Layout from "components/layout";
import Services from "layout/services";
import WorkFlow from "layout/workflow";
import Head from "next/head";
import React from "react";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";
import theme from "theme";
import { Container, ThemeProvider } from "theme-ui";

const About = ({ data }) => {
  const attributes = data.data.attributes;

  return (
    <ThemeProvider theme={theme}>
      <Head>
        <title>About</title>
        <link rel="icon" href="/assets/logo.svg"></link>
      </Head>

      <Layout>
        <div
          className="py-40 flex flex-col items-center px-5"
          style={{
            background:
              "linear-gradient(274.36deg, #00897B 2.99%, rgba(9, 129, 116, 0.44) 98.43%)",
          }}
        >
          <h1 className="sm:text-5xl text-4xl text-white font-semibold text-center">
            {attributes.heading}
          </h1>
          <p className="max-w-full lg:max-w-[500px] text-center text-white mt-5">
            {attributes.description}
          </p>
        </div>

        <Container sx={styles.container}>
          <div className="flex justify-between items-center mt-20 mb-20">
            <div className="lg:mr-28 mr-10">
              <p className="text-primary font-bold uppercase">
                {attributes.about.sub_heading}
              </p>
              <h1 className="font-bold text-3xl mt-1 mb-2">
                {attributes.about.heading}
              </h1>
              <p className="mt-3">{attributes.about.description}</p>

              <div className="flex items-center mt-5">
                <div className="mr-5 bg-white rounded-full p border shadow cursor-pointer">
                  <MdKeyboardArrowLeft size={32} />
                </div>

                <div className="bg-white rounded-full p border shadow cursor-pointer ">
                  <MdKeyboardArrowRight size={32} />
                </div>
              </div>
            </div>

            <img
              src="/assets/about-image-1.png"
              alt=""
              className="w-[450px] hidden lg:block"
            />
          </div>
        </Container>

        <WorkFlow data={attributes.our_approach} />
        <Services data={attributes.get_involved} />
      </Layout>
    </ThemeProvider>
  );
};

export default About;

const styles = {
  container: {
    maxWidth: "1430px",
    "@media(max-width:1440px)": {
      maxWidth: "1230px",
    },
    "@media screen and (max-width: 991px)": {
      justifyContent: "space-between",
    },
  },
};

export async function getStaticProps() {
  const { data } = await CMS.get("/about-page", {
    params: {
      "populate[0]": "about,get_involved,our_approach",
      "populate[1]": "get_involved.card,our_approach.our_approach",
      "populate[2]": "get_involved.card.icon",
    },
  });

  return {
    props: { data },
    revalidate: 60,
    // notFound: true,
  };
}
