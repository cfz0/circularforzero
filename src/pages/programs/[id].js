import CMS from "api/cms";
import Layout from "components/layout";
import Head from "next/head";
import React from "react";
import { Link } from "react-scroll";
import theme from "theme";
import { Container, ThemeProvider } from "theme-ui";

const Program = ({ data }) => {
  const tabs = [
    {
      label: "Description",
      to: "description",
    },
    {
      label: "Objectives",
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
              {data.data.attributes.name}
            </h1>
            <p className="max-w-full lg:max-w-[500px] text-center text-white mt-5">
              {/* {attributes.description} */}
              {data.data.attributes.short_description}
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
                <div className="mt-10 md:mr-10 max-w-[700px] text-center lg:text-left">
                  <h1 className="text-3xl font-medium">
                    {data.data.attributes.name}
                  </h1>
                  <p
                    className="mt-2"
                    dangerouslySetInnerHTML={{
                      __html: data.data.attributes.long_description,
                    }}
                  >
                    {/* {} */}
                  </p>

                  <a
                    href={data.data.attributes.join_link}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <button className="bg-[#00897B] text-white mt-2 px-5 py-1 rounded font-medium lg:mb-0 mb-5">
                      Join Program
                    </button>
                  </a>
                </div>

                <div className="max-w-[500px] h-[250px] bg-[#c6c6c6] w-full">
                  <img
                    className="object-cover w-full h-full"
                    src={data.data?.attributes?.project_image_link}
                    alt="img"
                  />
                </div>
              </div>

              <div className="mt-20 flex flex-col items-center">
                <h1 className="text-3xl font-medium mb-5">Objectives</h1>
                <div className="w-full mt-5">
                  <ol>
                    {data.data.attributes.how_it_works.map((txt, i) => (
                      <li key={txt.id}>
                        {i + 1}. {txt.text}
                      </li>
                    ))}
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
