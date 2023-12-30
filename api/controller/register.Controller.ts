import express, { Request, Response, NextFunction } from "express";
import RegisterModal from "../database/modal/register-modal";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";

export const RegisterUser = async (req: Request, res: Response) => {
  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(req.body.password, salt);

  const user = new RegisterModal({
    username: req.body.username,
    email: req.body.email,
    password: hashedPassword,
  });

  try {
    const savedUser = await user.save();
    res.send({ user: savedUser });
  } catch (error) {
    res.status(400).send(error);
  }
};

export const LoginUser = async (req: Request, res: Response) => {
  const user = await RegisterModal.findOne({ email: req.body.email });
  if (!user) return res.status(400).send("Username not found");

  const validPassword = await bcrypt.compare(req.body.password, user.password);
  if (!validPassword) return res.status(400).send("Invalid password");

  const token = jwt.sign({ _id: user._id }, "WINDOWMIRROR");
  res.header("Authorization", token).send({ token, user });
};

export const verifyToken = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const token = req.header("Authorization");
  if (!token) return res.status(401).send("Access Denied");

  try {
    const verified = jwt.verify(token, "WINDOWMIRROR");
    req.body.verifyToken = verified;
    next();
  } catch (error) {
    res.status(400).send("Invalid Token");
    res.status(500).send("Server Error");
  }
};

export const Protected = (req: Request, res: Response) => {
  res.send({ protected: "protected" });
};
