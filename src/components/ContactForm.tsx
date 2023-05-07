import React from "react";
import { redirect } from "next/navigation";
import nodemailer from "nodemailer";

interface Props {}

const contact = async (form: FormData) => {
  "use server";

  let transporter = nodemailer.createTransport({
    service: "FastMail",
    auth: {
      user: "hello@peterkerins.com",
      pass: process.env.FASTMAIL,
    },
  });

  const name = form.get("name");
  const email = form.get("email");
  const message = form.get("message");

  const emailBody = `
    Name: ${name}\r\n
    Email: ${email}\r\n
    Message: ${message}
  `;
  const data = {
    to: "hello@peterkerins.com",
    from: "hello@peterkerins.com",
    subject: `New message from ${name}`,
    text: emailBody,
    html: emailBody.replace(/\r\n/g, "<br />"),
  };

  try {
    let mail = await transporter.sendMail(data);
    if (mail) {
      redirect("/");
    }
  } catch (error) {
    console.error(error);
  }
};

export const ContactForm = (props: Props) => {
  return (
    <div className="mx-auto max-w-lg lg:max-w-none">
      <form action={contact} className="grid grid-cols-1 gap-y-6">
        <div>
          <label htmlFor="full-name" className="sr-only">
            Full name
          </label>
          <input
            name="name"
            type="text"
            id="full-name"
            required
            autoComplete="name"
            className="block w-full rounded-md border-gray-300 py-3 px-4 placeholder-gray-500 shadow-sm focus:border-brand focus:ring-brand"
            placeholder="Full name"
          />
        </div>
        <div>
          <label htmlFor="email" className="sr-only">
            Email
          </label>
          <input
            name="email"
            required
            id="email"
            type="email"
            autoComplete="email"
            className="block w-full rounded-md border-gray-300 py-3 px-4 placeholder-gray-500 shadow-sm focus:border-brand focus:ring-brand"
            placeholder="Email"
            aria-describedby="email-error"
          />
        </div>

        <div>
          <label htmlFor="message" className="sr-only">
            Message
          </label>
          <textarea
            name="required"
            id="message"
            rows={4}
            aria-invalid={true}
            className="block w-full rounded-md border-gray-300 py-3 px-4 placeholder-gray-500 shadow-sm focus:border-brand focus:ring-brand"
            placeholder="Message"
            defaultValue={""}
          />
        </div>
        <div>
          <button
            type="submit"
            className="inline-flex justify-center rounded-md border border-transparent bg-brand py-3 px-6 text-base font-medium text-white shadow-sm hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-brand focus:ring-offset-2"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};
