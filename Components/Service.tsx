import Image from "next/image";

import { Box, Text, Heading, Container } from "@chakra-ui/react";
import { Service as ServiceInterface } from "data/services";
import React from "react";

interface Props {
  service: ServiceInterface;
}

export const Service = ({ service }: Props) => {
  return (
    <Box
      justifyContent="center"
      display="flex"
      flexWrap="wrap-reverse"
      _even={{ flexDirection: "row-reverse" }}
      alignItems="center"
    >
      <Box className="service-information" flexBasis={400} flexGrow={1}>
        <Box maxW="xl">
          <Heading as="h3" size="lg">
            {service.title}
          </Heading>
          <Text>{service.description}</Text>
        </Box>
      </Box>
      <Box position="relative" flexBasis="400">
        <Image src={service.image} alt={service.imageAlt} priority placeholder="blur" />
      </Box>
    </Box>
  );
};
