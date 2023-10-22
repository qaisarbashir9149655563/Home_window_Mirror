// routes/userRoutes.ts
import express from "express";
import { Router } from "express";
import { userDetail, getUserDetail } from "./controller/userDetail.Controller";

const router: Router = express.Router();

router.get("/user/getall", getUserDetail);
// Create a new user
router.post("/user", userDetail);

export default router;
