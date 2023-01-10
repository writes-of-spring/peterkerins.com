import NextLink from "next/link";
import { useRouter } from "next/router";

interface Props {
  href: string;
  label: string;
}

function ActiveLink({ href, label }: Props) {
  const router = useRouter();
  const isActive = router.asPath === href;
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
