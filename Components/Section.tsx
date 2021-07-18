import { Box, Heading } from "@chakra-ui/react";
import React from "react";

interface Props {
  title: string;
  children: React.ReactNode;
}

const Section = ({ title, children }: Props) => {
  return (
    <Box as="section" marginBlock={8}>
      <Heading as="h3" size="2xl" mb={8}>
        {title}
      </Heading>
      {children}
    </Box>
  );
};

export default Section;
