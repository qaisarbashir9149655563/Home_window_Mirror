"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getUser = exports.createUser = void 0;
const user_detail_modal_1 = __importDefault(require("../modal/user-detail-modal"));
const createUser = async ({ userDetails }) => {
    const newUser = new user_detail_modal_1.default(userDetails);
    try {
        // console.log(newUser, "newUser");
        const saveUser = await newUser.save();
        console.log(saveUser, "saveUser");
        return saveUser;
    }
    catch (err) {
        console.log(err);
    }
};
exports.createUser = createUser;
const getUser = async () => {
    try {
        const user = await user_detail_modal_1.default.find().exec();
        return user;
    }
    catch (err) {
        console.log(err);
    }
};
exports.getUser = getUser;
