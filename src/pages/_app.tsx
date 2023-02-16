import "../styles/globals.scss";
import type { AppProps } from "next/app";
import TagManager from "react-gtm-module";
import { useEffect } from "react";

function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    TagManager.initialize({ gtmId: "GTM-TRQDDQ9" });
  }, []);
  return <Component {...pageProps} />;
}

export default MyApp;
