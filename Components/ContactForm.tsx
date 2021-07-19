import React from "react";
import {
  Box,
  Button,
  FormControl,
  FormHelperText,
  FormLabel,
  Input,
  Textarea,
  useToast,
} from "@chakra-ui/react";
import { useForm } from "react-hook-form";
interface Props {}

export const ContactForm = (props: Props) => {
  const toast = useToast();
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm({
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  function onSubmit(data: { name: string; email: string; message: string }) {
    fetch("/api/contact", {
      method: "post",
      body: JSON.stringify(data),
    })
      .then(function (response) {
        if (!response.ok) {
          throw Error(response.statusText);
        }
        return response;
      })
      .then(function (response) {
        toast({
          status: "success",
          title: "Message Received",
          position: "bottom",
        });
        reset();
      })
      .catch(function (error) {
        toast({
          status: "error",
          title: "Oh No!",
          description: "Something went wrong, let's try that again",
          position: "bottom",
        });
      });
  }
  return (
    <Box>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input type="hidden" name="form-name" value="contact" />
        <FormControl id="name" isInvalid={!!errors?.name}>
          <FormLabel>Name</FormLabel>
          <Input {...register("name", { required: "Name is requred" })} />
        </FormControl>
        <FormControl id="email" isInvalid={!!errors.email}>
          <FormLabel>Email address</FormLabel>
          <Input
            type="email"
            {...register("email", { required: "Email is required" })}
            required
          />
        </FormControl>
        <FormControl id="message" isInvalid={!!errors.message}>
          <FormLabel>Message</FormLabel>
          <Textarea
            {...register("message", { required: true })}
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
