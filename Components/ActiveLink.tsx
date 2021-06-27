import { useRouter } from "next/router";
import NextLink, { LinkProps } from "next/link";

import React, { Children } from "react";

interface Props extends LinkProps {
  children: React.ReactElement;
}

const ActiveLink = ({ children, ...props }: Props) => {
  const { pathname } = useRouter();
  let className = "nav-link";
  if (pathname === props.href) {
    className = `${className} active-link`;
  }
  return (
    <NextLink {...props}>
      {React.cloneElement(children, { className })}
    </NextLink>
  );
};

export default ActiveLink;
