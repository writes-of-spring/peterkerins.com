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
function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <Box as="main" maxW="5xl" mx="auto" px="4" mb="4">
        <Navigation />
        <Component {...pageProps} />
      </Box>
    </ChakraProvider>
  );
}
export default MyApp;
