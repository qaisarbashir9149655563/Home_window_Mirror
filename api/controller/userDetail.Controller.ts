import { Request, Response } from "express";
import UserDetail from "../database/modal/user-detail-modal";

export const createUserDetail = async (req: Request, res: Response) => {
  try {
    const userDetails: any = req.body.body;
    const user = new UserDetail(userDetails);
    const saveUser = await user.save();
    res.status(200).json({ saveUser });
  } catch (error) {
    console.log(error);
  }
};

export const getUserDetail = async (req: Request, res: Response) => {
  try {
    const user = await UserDetail.find().exec();
    res.status(200).json({ user });
  } catch (error) {
    console.log(error);
  }
};
export const deleteUserDetail = async (req: Request, res: Response) => {
  try {
    const user = await UserDetail.findByIdAndDelete(req.params.id).exec();
    res.status(200).json({ user });
  } catch (error) {
    console.log(error);
  }
};
