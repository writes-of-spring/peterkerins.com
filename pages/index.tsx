import { ContactForm } from "components/ContactForm";
import Section from "components/Section";
import { Services } from "components/Services";
import React from "react";
import Banner from "components/Banner";
export default function Home() {
  return (
    <div>
      <Banner />
      <div className="container mx-auto w-full max-w-7xl px-4 sm:px-0">
        <Section title="Services">
          <Services />
        </Section>
        <Section title="Contact">
          <ContactForm />
        </Section>
      </div>
    </div>
  );
}
