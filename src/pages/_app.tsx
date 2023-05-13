import "../styles/globals.scss";
import type { AppProps } from "next/app";
import TagManager from "react-gtm-module";
import { useEffect } from "react";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";

function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    TagManager.initialize({ gtmId: "GTM-TRQDDQ9" });
  }, []);
  return (
    <>
      <Header />
      <Component {...pageProps} />
      <Footer />
    </>
  );
}

export default MyApp;
