interface Props {}
import { ContactForm } from "Components/ContactForm";
import Seo from "Components/Seo";
import * as React from "react";

const Contact = (props: Props) => {
  return (
    <>
      <Seo title="Contact" />
      <div className="container mx-auto mt-24 max-w-7xl">
        <div className="grid md:grid-cols-2 w-full gap-8 md:gap-2">
          <div className="max-w-md mx-auto md:mx-0">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl  lg:text-5xl xl:text-6xl">
              Contact Me
            </h1>
            <p className="text-xl text-gray-600 mt-3">
              If you&apos;re in need of web development, web design or branding
              services, send me an email at hello@peterkerins.com. I&apos;m sure
              we can come up with a plan that&apos;s just right for you.
            </p>
          </div>
          <div className="">
            <ContactForm />
          </div>
        </div>
      </div>
    </>
  );
};
export default Contact;
