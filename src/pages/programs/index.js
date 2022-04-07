import CMS from "api/cms";
import Layout from "components/layout";
import Head from "next/head";
import { useRouter } from "next/router";
import React from "react";
import theme from "theme";
import { Container, ThemeProvider } from "theme-ui";

const Programs = ({ data }) => {
  const router = useRouter();

  console.log(data);
  return (
    <>
      <ThemeProvider theme={theme}>
        <Head>
          <title>Programs</title>
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
              Our Projects
            </h1>
            <p className="max-w-full lg:max-w-[500px] text-center text-white mt-5">
              {/* {attributes.description} */}
              Our projects are focused on promotion of circular economy principles in industry and
              implementation of action plans by engaging key stakeholders from multiple industries
            </p>
          </div>

          <Container sx={styles.container}>
            <div className="my-10">
              <div className="grid md:grid-cols-2 gap-y-5 gap-x-5 grid-cols-1">
                {data.data.map((item, i) => (
                  <div
                    className="rounded border px-5 py-5 flex items-start flex-col sm:flex-row"
                    key={i}
                  >
                    <div className="min-w-[188px] w-full sm:w-auto rounded h-[236px] bg-[#c6c6c6]" />
                    <div className="sm:ml-5 ml-0 sm:mt-0 mt-5 text-center sm:text-left">
                      <h1 className="text-xl font-semibold">
                        {item?.attributes?.name}
                      </h1>
                      <p className="text-sm">
                        {item?.attributes?.short_description}
                      </p>

                      <button
                        onClick={() => router.push(`/programs/${item.id}`)}
                        className="cursor-pointer bg-[#00897B] text-white px-5 text-sm py-1 rounded mt-2 font-medium"
                      >
                        Know More
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </Container>
        </Layout>
      </ThemeProvider>
    </>
  );
};

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

export default Programs;

export async function getStaticProps() {
  const { data } = await CMS.get("/projects", {
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
