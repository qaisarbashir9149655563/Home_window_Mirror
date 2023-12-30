// routes/userRoutes.ts
import express from "express";
import { Router } from "express";
import {
  createUserDetail,
  getUserDetail,
  deleteUserDetail,
} from "./controller/userDetail.Controller";
import {
  LoginUser,
  Protected,
  RegisterUser,
  verifyToken,
} from "./controller/register.Controller";
import { SendSMSandEmail } from "./controller/sendSMSandEmail.Controller";
import { verify } from "crypto";
const router: Router = express.Router();

router.get("/user/getall", getUserDetail);
// Create a new user
router.post("/user/create", createUserDetail);
router.post("/sendMail", SendSMSandEmail);
router.delete("/user/delete/:id", deleteUserDetail);

// register user and login user

router.post("/register", RegisterUser);
router.post("/login", LoginUser);
router.get("/protected", verifyToken, Protected);
export default router;
