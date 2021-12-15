import { ThemeProvider } from "theme-ui";
import theme from "theme";
import { StickyProvider } from "contexts/app/app.provider";
import Layout from "components/layout";
import Banner from "layout/landing/banner";
import CtaThree from "layout/landing/cta-three";
import WorkFlow from "layout/landing/workflow";
import Services from "layout/landing/services";
import Head from "next/head";

export default function Home() {
  return (
    <ThemeProvider theme={theme}>
      <Head>
        <title>CircularForZero</title>
      </Head>
      <StickyProvider>
        <Layout>
          <Banner />
          <Services />
          <CtaThree />
          <WorkFlow />
        </Layout>
      </StickyProvider>
    </ThemeProvider>
  );
}
