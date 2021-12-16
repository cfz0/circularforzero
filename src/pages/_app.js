import "../styles/globals.css";
import "rc-drawer/assets/index.css";
import "typeface-dm-sans";
import NextNprogress from "nextjs-progressbar";
import { StickyProvider } from "contexts/app/app.provider";

function MyApp({ Component, pageProps }) {
  return (
    <StickyProvider>
      <NextNprogress
        color="#29D"
        startPosition={0.3}
        stopDelayMs={200}
        height={3}
        showOnShallow={true}
      />

      <Component {...pageProps} />
    </StickyProvider>
  );
}

export default MyApp;
