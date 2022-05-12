import { Schema, model } from "mongoose";

interface IUser {
  name: string;
  email: string;
  photoUrl: string;
}

const userSchema = new Schema<IUser>({
  name: { type: String, required: true },
  email: { type: String, required: true },
  photoUrl: { type: String, required: true },
});

export default model("Users", userSchema);
