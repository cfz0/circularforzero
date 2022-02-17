import CMS from "api/cms";
import Layout from "components/layout";
import Head from "next/head";
import React from "react";
import { Link } from "react-scroll";
import theme from "theme";
import { Container, ThemeProvider } from "theme-ui";

const Program = () => {
  const tabs = [
    {
      label: "Description",
      to: "description",
    },
    {
      label: "How it works",
      to: "how-it-works",
    },
  ];

  return (
    <>
      <ThemeProvider theme={theme}>
        <Head>
          <title>Program</title>
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
              {/* {attributes.heading} */}
              Lorem Lispum
            </h1>
            <p className="max-w-full lg:max-w-[500px] text-center text-white mt-5">
              {/* {attributes.description} */}
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
              imperdiet arcu ut blandit euismod. Praesent pellentesque, nunc in
              lobortis lacinia, nulla nulla dignissim
            </p>
          </div>
          <div className="relative mb-20">
            <div
              className="pt-5 bg-white sticky top-0 z-999"
              style={{ boxShadow: "0px 0px 14px -3px rgba(0, 0, 0, 0.25)" }}
            >
              <Container sx={styles.container}>
                <div className="flex">
                  {tabs.map((tab, i) => (
                    <Link
                      to={tab.to}
                      key={i}
                      className="mr-10 pb-4  cursor-pointer"
                      activeClass="border-[#00897B] border-b-2"
                      smooth
                      spy
                    >
                      <p className="font-semibold">{tab.label}</p>
                    </Link>
                  ))}
                </div>
              </Container>
            </div>
            <Container sx={styles.container}>
              <div
                className="flex items-center justify-between lg:flex-row flex-col "
                id="description"
              >
                <div className="mt-10 mr-10 max-w-[700px] text-center lg:text-left">
                  <h1 className="text-3xl font-medium">Lorem Lispum</h1>
                  <p className="mt-2">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                    sit amet nunc efficitur dui molestie consequat eget eu ante.
                    Mauris at accumsan leo. Mauris nec aliquam purus, et
                    facilisis tortor. Sed arcu nisl, pellentesque at augue quis,
                    volutpat gravida tellus. Donec varius lorem nec lectus
                    efficitur ultrices. Etiam efficitur elit libero, sed feugiat
                    justo interdum id. Suspendisse vitae placerat risus. Donec
                    auctor justo fringilla, ultricies urna non, venenatis nisl.
                    Donec facilisis eleifend leo, a condimentum arcu tincidunt
                    sed. Praesent facilisis luctus efficitur. Pellentesque
                    suscipit dui quis ipsum consectetur convallis. Sed vitae
                    magna a sapien vulputate iaculis
                  </p>

                  <button className="bg-[#00897B] text-white mt-2 px-5 py-1 rounded font-medium lg:mb-0 mb-5">
                    Join Program
                  </button>
                </div>

                <div className="max-w-[500px] h-[250px] bg-[#c6c6c6] w-full" />
              </div>

              <div className="mt-20 flex flex-col items-center">
                <h1 className="text-3xl font-medium mb-5">How it works?</h1>
                <div className="w-full h-[250px] bg-[#c6c6c6] rounded"></div>
                <div className="w-full mt-5">
                  <ol>
                    <li>
                      1. Lorem ipsum dolor sit amet, consectetur adipiscing
                      elit. Sed sit amet nunc efficitur dui molestie
                    </li>
                    <li>
                      2. Sed arcu nisl, pellentesque at augue quis, volutpat
                      gravida tellus. Donec varius lorem nec lectus efficitur
                      ultrices.
                    </li>
                    <li>
                      3. Nullam sit amet blandit felis. Suspendisse dapibus quam
                      velit, a bibendum turpis consequat ac. Praesent vel
                      vulputate dui, in faucibus arcu. Maecenas
                    </li>
                  </ol>
                </div>
              </div>
            </Container>
          </div>
        </Layout>
      </ThemeProvider>
    </>
  );
};

export default Program;

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

export async function getStaticPaths() {
  const { data } = await CMS.get("/projects");

  // Get the paths we want to pre-render based on posts
  const paths = data.data.map((post) => ({
    params: { id: post.id.toString() },
  }));

  return { paths, fallback: "blocking" };
}

export async function getStaticProps({ params }) {
  const { data } = await CMS.get(`/projects/${params.id}`, {
    params: {
      "populate[how_it_works][populate]": "*",
    },
  });

  return {
    props: { data },
    revalidate: 60,
    // notFound: true,
  };
}
