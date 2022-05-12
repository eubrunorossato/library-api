import { Schema, model } from "mongoose";

interface IReserve {
  bookId: Schema.Types.ObjectId;
  userName: string;
  takeDate: Date;
  devolutionDate: Date;
}

const reserveSchema = new Schema<IReserve>({
  bookId: { type: Schema.Types.ObjectId, required: true },
  userName: { type: String, required: true },
  takeDate: { type: Date, required: true },
  devolutionDate: { type: Date, required: true },
});

export default model("Reserves", reserveSchema);
