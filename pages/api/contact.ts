import type { NextApiRequest, NextApiResponse } from "next";
import nodemailer from "nodemailer";

let transporter = nodemailer.createTransport({
  service: "FastMail",
  auth: {
    user: "hello@peterkerins.com",
    pass: process.env.FASTMAIL,
  },
});

const contact = async (req: NextApiRequest, res: NextApiResponse) => {
  const body = JSON.parse(req.body);

  const message = `
    Name: ${body.name}\r\n
    Email: ${body.email}\r\n
    Message: ${body.message}
  `;
  console.log(message);
  const data = {
    to: "hello@peterkerins.com",
    from: "hello@peterkerins.com",
    subject: `New message from ${body.name}`,
    text: message,
    html: message.replace(/\r\n/g, "<br />"),
  };

  try {
    let mail = await transporter.sendMail(data);
    if (mail) {
      res.status(200).json({ success: true });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json(error);
  }
};

export default contact;
