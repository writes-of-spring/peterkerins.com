import React from "react";
import { useForm } from "react-hook-form";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
interface Props {}

export const ContactForm = (props: Props) => {
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
        toast.success("Message received", {
          position: "bottom-right",
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
        reset();
      })
      .catch(function (error) {
        toast.error("Something went wrong, let's try that again", {
          position: "bottom-right",
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
      });
  }
  return (
    <>
      <div className="mx-auto max-w-lg lg:max-w-none">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="grid grid-cols-1 gap-y-6"
        >
          <div>
            <label htmlFor="full-name" className="sr-only">
              Full name
            </label>
            <input
              {...register("name", {
                required: "Please enter your name",
              })}
              type="text"
              id="full-name"
              autoComplete="name"
              className="block w-full rounded-md border-gray-300 py-3 px-4 placeholder-gray-500 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
              placeholder="Full name"
            />
            {errors.name && (
              <p className="mt-2 text-sm text-red-600" id="name-error">
                {errors.name.message}
              </p>
            )}
          </div>
          <div>
            <label htmlFor="email" className="sr-only">
              Email
            </label>
            <input
              {...register("email", {
                required: "Please enter your email",
              })}
              id="email"
              type="email"
              autoComplete="email"
              className="block w-full rounded-md border-gray-300 py-3 px-4 placeholder-gray-500 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
              placeholder="Email"
              aria-describedby="email-error"
            />
            {errors.email && (
              <p className="mt-2 text-sm text-red-600" id="email-error">
                {errors.email.message}
              </p>
            )}
          </div>

          <div>
            <label htmlFor="message" className="sr-only">
              Message
            </label>
            <textarea
              {...register("message", {
                required: "Please enter a message",
              })}
              id="message"
              rows={4}
              aria-invalid={true}
              className="block w-full rounded-md border-gray-300 py-3 px-4 placeholder-gray-500 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
              placeholder="Message"
              defaultValue={""}
            />
            {errors.message && (
              <p className="mt-2 text-sm text-red-600" id="message-error">
                {errors.message.message}
              </p>
            )}
          </div>
          <div>
            <button
              type="submit"
              className="inline-flex justify-center rounded-md border border-transparent bg-brand py-3 px-6 text-base font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
      <ToastContainer />
    </>
  );
};
