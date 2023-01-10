import { ContactForm } from "Components/ContactForm";
import Section from "Components/Section";
import { Services } from "Components/Services";
import React from "react";
import Banner from "../Components/Banner";
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
