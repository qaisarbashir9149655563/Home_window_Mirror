"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getUserDetail = exports.userDetail = void 0;
const userDetailRepo_1 = require("../database/repository/userDetailRepo");
const user_detail_modal_1 = __importDefault(require("../database/modal/user-detail-modal"));
const userDetail = async (req, res) => {
    // post the data into the userDetail collection
    try {
        const userDetails = req.body;
        console.log(req.body, "req.body");
        const user = await (0, userDetailRepo_1.createUser)(userDetails);
        console.log(user);
        res.status(200).json({ user });
    }
    catch (error) {
        console.log(error);
    }
};
exports.userDetail = userDetail;
const getUserDetail = async (req, res) => {
    try {
        const user = await user_detail_modal_1.default.find().exec();
        res.status(200).json(user);
    }
    catch (error) {
        console.log(error);
    }
};
exports.getUserDetail = getUserDetail;
