import Layout from "components/layout";
import Banner from "layout/landing/banner";
import CtaThree from "layout/landing/cta-three";
import WorkFlow from "layout/landing/workflow";
import Head from "next/head";
import theme from "theme";
import { ThemeProvider } from "theme-ui";
import HowWeWork from "layout/landing/how-we-work";

export default function Home() {
  return (
    <ThemeProvider theme={theme}>
      <Head>
        <title>CircularForZero</title>
      </Head>
      <Layout>
        <Banner />
        <HowWeWork />
        <CtaThree />
        <WorkFlow />
      </Layout>
    </ThemeProvider>
  );
}
