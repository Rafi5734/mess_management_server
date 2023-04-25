import mongoose from "mongoose";

const bazarListSchema = new mongoose.Schema({
  date: { type: String },
  name: { type: String },
  amount: { type: Number },
  given_amount: { type: Number },
  return_amount: { type: Number },
});

const bazarList = mongoose.model("bazar-list", bazarListSchema);
export default bazarList;
