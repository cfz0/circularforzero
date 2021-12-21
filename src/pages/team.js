/** @jsxImportSource theme-ui */

import Layout from "components/layout";
import Head from "next/head";
import theme from "theme";
import { Container, ThemeProvider } from "theme-ui";
import Fade from "react-reveal/Fade";

const TeamPage = () => {
  return (
    <ThemeProvider theme={theme}>
      <Head>
        <title>CircularForZero</title>
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
            Meet our team
          </h1>
          <p className="max-w-full lg:max-w-[500px] text-center text-white mt-5">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
            imperdiet arcu ut blandit euismod. Praesent pellentesque, nunc in
            lobortis lacinia, nulla nulla dignissim{" "}
          </p>
        </div>

        <div className="overflow-x-hidden">
          <Container sx={styles.container}>
            <div className="mt-32">
              <div className="flex flex-wrap justify-center ml-10 mt-5">
                {Array(25)
                  .fill(1)
                  .map((_, i) => (
                    <Fade key={i} bottom>
                      <div className="mr-10 mb-10 hover:shadow-xl px-5 transition duration-200 cursor-pointer rounded-lg hover:border-[#ECECEC] border border-[white] py-5">
                        <div className="bg-[#c6c6c6] h-[300px] w-[240px]"></div>
                        <h1 className="mt-2 font-semibold text-2xl ">
                          Victoria Ailill
                        </h1>

                        <div className="flex justify-between">
                          <p className="opacity-70">Board of director</p>
                          <p className="text-primary font-semibold">CEO</p>
                        </div>
                      </div>
                    </Fade>
                  ))}
              </div>
            </div>
          </Container>
        </div>
      </Layout>
    </ThemeProvider>
  );
};

export default TeamPage;

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
