"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getUserDetail = exports.userDetail = void 0;
const user_detail_modal_1 = __importDefault(require("../database/modal/user-detail-modal"));
const userDetail = async (req, res) => {
    try {
        const userDetails = req.body;
        const user = new user_detail_modal_1.default(userDetails);
        const saveUser = await user.save();
        res.status(200).json({ saveUser });
    }
    catch (error) {
        console.log(error);
    }
};
exports.userDetail = userDetail;
const getUserDetail = async (req, res) => {
    try {
        const user = await user_detail_modal_1.default.find().exec();
        res.status(200).json({ user });
    }
    catch (error) {
        console.log(error);
    }
};
exports.getUserDetail = getUserDetail;
