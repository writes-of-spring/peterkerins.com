import React from "react";
import { Box, Heading } from "@chakra-ui/react";

const Banner = () => {
  return (
    <Box
      height="60vh"
      width="100vw"
      position="relative"
      left="50%"
      right="50%"
      marginInline="-50vw"
      bgColor="brand"
      mt="-1"
      mb="1"
    >
      <Box maxW="5xl" margin="0 auto" height="100%" display="flex" alignItems="center" p="4" color="white">
        <Heading>
          <s>Cork</s> Kilkenny Based Web Developer, specialising in: web development, ecommerce, graphic design,
          branding &amp; logo design, and the JAMstack
        </Heading>
      </Box>
    </Box>
  );
};

export default Banner;
