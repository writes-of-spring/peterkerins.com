"use server";
import { redirect } from "next/navigation";
import nodemailer from "nodemailer";

let transporter = nodemailer.createTransport({
  service: "FastMail",
  auth: {
    user: "hello@peterkerins.com",
    pass: process.env.FASTMAIL,
  },
});

export const contact = async (form: FormData) => {
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
    // let mail = await transporter.sendMail(data);
    console.log(data);
    if (data) {
      redirect("/");
    }
  } catch (error) {
    console.error(error);
  }
};
