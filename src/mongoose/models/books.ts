import { Schema, model } from "mongoose";

interface IBooks {
  name: string;
  description: string;
  quantity: number;
}

const booksSchema = new Schema<IBooks>({
  name: { type: String, required: true },
  description: { type: String, required: true },
  quantity: { type: Number, required: true, default: 1 },
});

export default model("Books", booksSchema);
