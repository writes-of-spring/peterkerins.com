import React from "react";
import Link from "next/link";
import { Heading, Flex, Spacer, Stack } from "@chakra-ui/react";
import ActiveLink from "./ActiveLink";
interface Props {}

const Navigation = (props: Props) => {
  return (
    <Flex
      maxWidth="7xl"
      mx="auto"
      my={4}
      alignContent="center"
      alignItems="center"
    >
      <Heading fontSize={{ base: "xl", md: "2xl", lg: "4xl" }}>
        <Link href="/">
          <a className="nav-link">Peter Kerins</a>
        </Link>
      </Heading>
      <Spacer />
      <Stack direction="row">
        <ActiveLink href="/">
          <a>Home</a>
        </ActiveLink>
        <ActiveLink href="/about">
          <a>About</a>
        </ActiveLink>
        <ActiveLink href="/contact">
          <a>Contact</a>
        </ActiveLink>
      </Stack>
    </Flex>
  );
};

export { Navigation };
