import React from "react";
import {
  Box,
  Button,
  FormControl,
  FormHelperText,
  FormLabel,
  Input,
  Textarea,
} from "@chakra-ui/react";
interface Props {}

export const ContactForm = (props: Props) => {
  return (
    <Box>
      <form
        name="contact"
        method="POST"
        action="/form-success"
        data-netlify="true"
      >
        <input type="hidden" name="form-name" value="contact" />
        <FormControl id="name">
          <FormLabel>Name</FormLabel>
          <Input name="name" required />
        </FormControl>
        <FormControl id="email">
          <FormLabel>Email address</FormLabel>
          <Input type="email" name="email" required />
        </FormControl>
        <FormControl id="message">
          <FormLabel>Message</FormLabel>
          <Textarea
            name="message"
            required
            placeholder="What's on your mind?"
          />
        </FormControl>
        <Button mt={4} bgColor="brand" color="white" type="submit">
          Submit
        </Button>
      </form>
    </Box>
  );
};
