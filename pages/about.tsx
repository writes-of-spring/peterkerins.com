import React from "react";
import Image from "next/image";
import profilePic from "../public/me.jpg";
import Seo from "Components/Seo";
interface Props {}

const About = (props: Props) => {
  return (
    <>
      <Seo title="About" />
      {/* <article className="container mx-auto flex flex-wrap-reverse gap-8 items-center pb-8">
        <div className="flex-grow basis-96 gap-8 items-center">
          <h2 className="mb-4 text-3xl font-semibold">
            <s>Cork</s> Kilkenny based web developer.
          </h2>
          <p>
            Graduated from MSc Interactive Media in 2015. Since then I spent a
            few years working in Munich for a Werbeagentur as a developer.
            During my time there I worked for a variety of clients in a wide
            range of fields. Since my return to Cork I have been working as a
            freelance developer and creative consultant, collaborating with
            artists, collectives, and marketing agencies. In Munich I fell in
            love with good design. It gives me joy to take inspiration from:
            architecture, print, art, music, fashion, and everyday life to
            create beautiful and accessible web products for those I work with.
          </p>

          <p>
            If you&apos;re in need of my services, feel free to contact me for a
            consultation.
          </p>
        </div>
        <div className="flex-grow basis-96 rounded-lg overflow-hidden">
          <Image
            className="absolute inset-0 h-full w-full object-cover"
            priority
            src={profilePic}
            placeholder="blur"
            alt="Peter Kerins"
          />
        </div>
      </article> */}
      <div className="lg:relative">
        <div className="mx-auto w-full max-w-7xl pt-16 pb-20 text-center lg:py-48 lg:text-left">
          <div className="pr-6 sm:pr-8 lg:w-1/2 xl:pr-16">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl md:text-6xl lg:text-5xl xl:text-6xl">
              <span className="block xl:inline">Peter Kerins</span>{" "}
              <span className="block text-brand xl:inline">Web Developer</span>
            </h1>
            <p className="mx-auto mt-3 max-w-md text-lg text-gray-500 sm:text-xl md:mt-5 md:max-w-3xl">
              Graduated from MSc Interactive Media in 2015. Since then I spent a
              few years working in Munich for a Werbeagentur as a developer.
              During my time there I worked for a variety of clients in a wide
              range of fields. Since my return to Cork I have been working as a
              freelance developer and creative consultant, collaborating with
              artists, collectives, and marketing agencies. In Munich I fell in
              love with good design. It gives me joy to take inspiration from:
              architecture, print, art, music, fashion, and everyday life to
              create beautiful and accessible web products for those I work
              with.
            </p>
            <p className="mx-auto mt-3 max-w-md text-lg text-gray-500 sm:text-xl md:mt-5 md:max-w-3xl">
              If you&apos;re in need of my services, feel free to contact me for
              a consultation.
            </p>
          </div>
        </div>
        <div className="relative h-80 w-full sm:h-96 md:h-96 lg:absolute lg:inset-y-0 lg:right-0 lg:h-full lg:w-1/2">
          <Image
            className="absolute inset-0 h-full w-full object-cover "
            priority
            src={profilePic}
            placeholder="blur"
            alt="Peter Kerins"
          />
        </div>
      </div>
    </>
  );
};
export default About;
