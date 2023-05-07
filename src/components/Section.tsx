import React from "react";

interface Props {
  title: string;
  children: React.ReactNode;
}

const Section = ({ title, children }: Props) => {
  return (
    <section className="my-8">
      <h3 className="mb-8 text-3xl sm:text-4xl lg:text-6xl font-bold text-gray-700">
        {title}
      </h3>
      {children}
    </section>
  );
};

export default Section;
