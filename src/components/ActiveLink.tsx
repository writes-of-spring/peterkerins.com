"use client";
import NextLink from "next/link";
import { usePathname } from "next/navigation";

interface Props {
  href: string;
  label: string;
}

function ActiveLink({ href, label }: Props) {
  const pathName = usePathname();
  const isActive = pathName === href;
  return (
    <NextLink
      href={href}
      className={`text-lg md:text-xl hover:text-brand hover:underline focus:text-brand ${
        isActive ? "text-brand" : "text-inherit"
      }`}
    >
      {label}
    </NextLink>
  );
}

export default ActiveLink;
