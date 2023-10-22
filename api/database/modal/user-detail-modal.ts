// models/User.ts
import mongoose, { InferSchemaType, Model, Schema, model } from "mongoose";

const UserSchema: Schema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    phoneNumber: {
      type: String,
      required: true,
    },
    address: {
      type: String,
      required: true,
    },
  },
  { timestamps: false }
);
type IUser = InferSchemaType<typeof UserSchema>;
const UserDetail: Model<IUser> = model<IUser>("userschema", UserSchema);

export default UserDetail;
