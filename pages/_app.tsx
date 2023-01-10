import type { AppProps } from "next/app";
import { Navigation } from "../Components/Navigation";
import React from "react";

import "../styles/globals.css";
import Head from "next/head";
import Footer from "Components/Footer";
function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Peter Kerins | Web Development</title>
        <meta name="theme-color" content="#339999" />
      </Head>
      <div className="px-4 sm:px-0">
        <Navigation />
      </div>
      <main className="sm:px-0">
        <Component {...pageProps} />
      </main>
      <Footer />
    </>
  );
}
export default MyApp;
