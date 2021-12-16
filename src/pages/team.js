/** @jsxImportSource theme-ui */

import Layout from "components/layout";
import Head from "next/head";
import React, { useState } from "react";
import theme from "theme";
import { Container, ThemeProvider } from "theme-ui";
import Fade from "react-reveal/Fade";

const TeamPage = () => {
  const tabs = [
    {
      label: "All",
      id: "all",
    },
    {
      label: "Board Of Directors",
      id: "directors",
    },
    {
      label: "Board Of Advisors",
      id: "advisors",
    },
    {
      label: "Members",
      id: "members",
    },
  ];

  const [tabActive, setTabActive] = useState("all");
  return (
    <ThemeProvider theme={theme}>
      <Head>
        <title>CircularForZero</title>
      </Head>

      <Layout>
        <div className="overflow-x-hidden">
          <Container sx={styles.container}>
            <div className="mt-32">
              <h1 className="text-3xl font-semibold ml-5">Meet our Team</h1>

              <div className="flex mt-5 mb-5 ml-5 items-center min-w-screen max-w-screen w-screen overflow-auto pb-5">
                {tabs.map((tab, i) => (
                  <div
                    key={i}
                    className={`mr-5 border rounded-full px-7 text-center border-[#C6C6C6] py-1 text-sm font-bold hover:bg-primary cursor-pointer transition duration-500 hover:text-white hover:border-primary ${
                      tabActive === tab.id &&
                      "bg-primary text-white border-primary"
                    } 
                  ${
                    (tab.id === "advisors" || tab.id === "directors") &&
                    "min-w-[200px]"
                  }
                  `}
                    onClick={() => setTabActive(tab.id)}
                  >
                    <p>{tab.label}</p>
                  </div>
                ))}
              </div>

              <div className="flex flex-wrap mt-5">
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
