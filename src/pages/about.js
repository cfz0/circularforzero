/** @jsxImportSource theme-ui */

import Layout from "components/layout";
import Services from "layout/landing/services";
import WorkFlow from "layout/landing/workflow";
import Head from "next/head";
import React from "react";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";
import theme from "theme";
import { Container, ThemeProvider } from "theme-ui";

const About = () => {
  return (
    <ThemeProvider theme={theme}>
      <Head>
        <title>About</title>
      </Head>

      <Layout>
        <div className="bg-[#73E9B3] py-40 flex flex-col items-center px-5">
          <h1 className="sm:text-5xl text-4xl text-white font-semibold text-center">
            About Circular Economy
          </h1>
          <p className="max-w-full lg:max-w-[500px] text-center text-white mt-5">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
            imperdiet arcu ut blandit euismod. Praesent pellentesque, nunc in
            lobortis lacinia, nulla nulla dignissim{" "}
          </p>
        </div>

        <Container sx={styles.container}>
          <div className="flex justify-between items-center mt-20 mb-20">
            <div className="lg:mr-28 mr-10">
              <p className="text-primary font-bold uppercase">
                What is Circular Economy?
              </p>
              <h1 className="font-bold text-3xl mt-1 mb-2">
                Lorem Lispum dolor sit
              </h1>
              <p className="mt-3">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non
                odio rutrum, fringilla est quis, eleifend lectus. Morbi eu
                scelerisque nulla. Vestibulum sed aliquam urna. Aliquam eget
                mauris vitae tellus ultricies vestibulum ut sed ante. Mauris ut
                volutpat tellus. Quisque fringilla quis dui at auctor. Proin
                massa tortor, efficitur nec magna in, viverra scelerisque leo.
                Phasellus orci nibh, ornare non neque nec, pharetra ultricies
                nibh. Vitae tempus mi. Class aptent taciti sociosqu ad litora
                torquent per conubia nostra, per inceptos himenaeos. Nulla
                facilisi. Maecenas id efficitur purus. Duis fringilla quis nisi
                vel varius. Integer scelerisque nunc vel nulla congue feugiat in
                quis velit. Mauris non elit pulvinar, ullamcorper lorem in,
                volutpat erat. Proin eu elit sit amet dui pharetra pharetra at
                ac dolor. Nullam id ex suscipit, porttitor tortor eu, vulputate
                enim. Nam pulvinar lacus nec orci eleifend tincidunt. Morbi et
                purus eget quam viverra tempus.
              </p>

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

        <WorkFlow />
        <Services />
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
