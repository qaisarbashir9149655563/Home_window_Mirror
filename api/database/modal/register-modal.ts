// models/User.ts
import mongoose, { InferSchemaType, Model, Schema, model } from "mongoose";

const RegisterSchema: Schema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);
type IRegisterSchema = InferSchemaType<typeof RegisterSchema>;
const RegisterModal: Model<IRegisterSchema> = model<IRegisterSchema>(
  "registerschema",
  RegisterSchema
);

export default RegisterModal;
