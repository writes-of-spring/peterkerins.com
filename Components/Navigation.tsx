import React from "react";
import NextLink from "next/link";
import { Heading, Flex, Spacer, Stack, Link } from "@chakra-ui/react";
import ActiveLink from "./ActiveLink";
interface Props {}

const Navigation = (props: Props) => {
  return (
    <Flex
      maxWidth="5xl"
      mx="auto"
      my={4}
      alignContent="center"
      alignItems="center"
    >
      <Heading fontSize={{ base: "xl", md: "2xl", lg: "4xl" }}>
        <NextLink href={"/"} passHref>
          <Link _hover={{ textDecoration: "none" }}>Peter Kerins</Link>
        </NextLink>
      </Heading>
      <Spacer />
      <Stack direction="row" spacing="4">
        <ActiveLink href="/" label="Home" />
        <ActiveLink label="About" href="/about" />
        <ActiveLink label="Contact" href="/contact" />
      </Stack>
    </Flex>
  );
};

export { Navigation };
