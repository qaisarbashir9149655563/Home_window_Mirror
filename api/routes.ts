// routes/userRoutes.ts
import express from "express";
import { Router } from "express";
import {
  createUserDetail,
  getUserDetail,
  deleteUserDetail,
} from "./controller/userDetail.Controller";
import { SendSMSandEmail } from "./controller/sendSMSandEmail.Controller";
const router: Router = express.Router();

router.get("/user/getall", getUserDetail);
// Create a new user
router.post("/user/create", createUserDetail);
router.post("/sendMail", SendSMSandEmail);
router.delete("/user/delete/:id", deleteUserDetail);
export default router;
