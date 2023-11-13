import { Request, Response } from "express";
import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 587,
  secure: false,
  debug: true,
  auth: {
    // TODO: replace `user` and `pass` values from <https://forwardemail.net>
    user: "kaiserbashirahanger06@gmail.com",
    pass: "nqkt rqcv vfoq awus",
  },
});
export const SendSMSandEmail = async (req: Request, res: Response) => {
  try {
    const { email, name, phoneNumber, address } = req.body.body;
    const mailOption = {
      from: "kaiserbashirahanger06@gmail.com",
      to: email,
      subject: `Hello ${name} Thanks to connect with us`,
      text: "We will connect with you very soon. if you have any query please contact us on 9149655563",
    };
    transporter.sendMail(mailOption, (err, data) => {
      if (err) {
        console.log(err, "while sending email");
      } else {
        console.log("Email sent successfully");
      }
    });
    res.send("Email sent successfully");
  } catch (err) {
    res.send(err);
  }
};
