import { Box, Heading } from "@chakra-ui/react";
import React from "react";

interface Props {}

const FormSuccess = (props: Props) => {
  return (
    <Box>
      <Heading>Submission received! Thank you</Heading>
    </Box>
  );
};

export default FormSuccess;
