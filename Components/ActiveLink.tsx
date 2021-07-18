import { useRouter } from "next/router";
import NextLink, { LinkProps } from "next/link";

import React, { Children } from "react";
import { Link } from "@chakra-ui/react";

interface Props {
  href: string;
  label: string;
}

function ActiveLink({ href, label }: Props) {
  const router = useRouter();
  const isActive = router.asPath === href;
  return (
    <NextLink href={href} passHref>
      <Link
        fontSize={["lg", "xl"]}
        _hover={{ color: "brand" }}
        _focus={{ color: "brand" }}
        color={isActive ? "brand" : "inherit"}
      >
        {label}
      </Link>
    </NextLink>
  );
}

export default ActiveLink;
