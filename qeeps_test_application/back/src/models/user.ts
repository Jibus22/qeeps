import { Schema, Types, model } from "mongoose";

interface IUser {
  type: string;
  firstname: string;
  lastname: string;
  email: string;
  password: string;
  birthdate: string;
  address: string;
  income: number;
  job?: string;
  situation: string;
  guarantor?: Types.DocumentArray<Types.ObjectId>;
}

class MyUser implements Omit<IUser, "guarantor"> {
  type = "";
  firstname = "";
  lastname = "";
  email = "";
  password = "";
  birthdate = "";
  address = "";
  income = 0;
  job = "";
  situation = "";
  guarantor = "id";
}

const IUserKeys = Object.keys(new MyUser());

const userSchema = new Schema<IUser>({
  type: { type: String, required: true },
  firstname: { type: String, required: true },
  lastname: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true },
  birthdate: { type: String, required: true },
  address: { type: String, required: true },
  income: { type: Number, required: true },
  job: { type: String },
  situation: { type: String, required: true },
  guarantor: [{ type: Schema.Types.ObjectId }],
});

const User = model<IUser>("User", userSchema);

export { User, IUser, IUserKeys };
