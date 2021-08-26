interface Props {}
import { Box, Container, Heading, Text } from "@chakra-ui/react";
import { ContactForm } from "Components/ContactForm";
import * as React from "react";
const Contact = (props: Props) => {
  return (
    <Container>
      <Heading mb="2">Contact Me</Heading>
      <Text>
        If you&apos;re in need of web development, web design or branding
        services, send me an email at hello@peterkerins.com. I&apos;m sure we
        can come up with a plan that&apos;s just right for you.
      </Text>
      <Box mt="4">
        <ContactForm />
      </Box>
    </Container>
  );
};
export default Contact;
