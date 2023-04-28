import mongoose from "mongoose";

const bazarListSchema = new mongoose.Schema({
  date: { type: String },
  name: { type: String },
  amount: { type: String },
  given_amount: { type: String },
  return_amount: { type: String },
});

const bazarList = mongoose.model("bazar-list", bazarListSchema);
export default bazarList;
