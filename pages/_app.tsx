import type { AppProps } from "next/app";
import {
  Box,
  ChakraProvider,
  extendTheme,
  ThemeExtension,
} from "@chakra-ui/react";
import { Navigation } from "../Components/Navigation";
import React from "react";
const theme = extendTheme({
  colors: {
    brand: "#339999",
  },
});
import Head from "next/head";
function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <Head>
        <title>Peter Kerins | Web Development</title>
        <meta name="theme-color" content="#339999" />
      </Head>
      <Box as="main" maxW="5xl" mx="auto" px="4" mb="4">
        <Navigation />
        <Component {...pageProps} />
      </Box>
    </ChakraProvider>
  );
}
export default MyApp;
