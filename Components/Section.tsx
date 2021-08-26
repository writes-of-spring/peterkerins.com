import { Box, BoxProps, Heading } from "@chakra-ui/react";
import React from "react";

interface Props extends BoxProps {
  title: string;
  children: React.ReactNode;
}

const Section = ({ title, children, ...boxProps }: Props) => {
  return (
    <Box as="section" mt="8" mb="8" {...boxProps}>
      <Heading as="h3" size="2xl" mb={8}>
        {title}
      </Heading>
      {children}
    </Box>
  );
};

export default Section;
