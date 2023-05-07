import NextLink from "next/link";
import ActiveLink from "./ActiveLink";
interface Props {}

const Navigation = (props: Props) => {
  return (
    <nav className="mx-auto container my-4 flex content-center items-baseline max-w-7xl">
      <h1 className="font-semibold text-3xl md:text-4xl lg:text-5xl">
        <NextLink href={"/"} className="hover:no-underline hover:text-brand">
          Peter Kerins
        </NextLink>
      </h1>
      <div className="flex-grow" />
      <div className="flex space-x-4">
        <ActiveLink href="/" label="Home" />
        <ActiveLink label="About" href="/about" />
        <ActiveLink label="Contact" href="/contact" />
      </div>
    </nav>
  );
};

export { Navigation };
