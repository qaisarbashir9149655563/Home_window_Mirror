"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// routes/userRoutes.ts
const express_1 = __importDefault(require("express"));
const userDetail_Controller_1 = require("./controller/userDetail.Controller");
const router = express_1.default.Router();
router.get("/user/getall", userDetail_Controller_1.getUserDetail);
// Create a new user
router.post("/user", userDetail_Controller_1.userDetail);
exports.default = router;
