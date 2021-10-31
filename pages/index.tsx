import { Box } from "@chakra-ui/react";
import { ContactForm } from "Components/ContactForm";
import Section from "Components/Section";
import { Services } from "Components/Services";
import React from "react";
import Banner from "../Components/Banner";
export default function Home() {
  return (
    <Box bg="non" fontSize="green">
      <Banner />
      <Section title="Services">
        <Services />
      </Section>
      <Section title="Contact">
        <ContactForm />
      </Section>
    </Box>
  );
}
