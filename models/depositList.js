import mongoose from "mongoose";

const depositListSchema = new mongoose.Schema({
  date: { type: String },
  name: { type: String },
  deposit_amount: { type: String },
  extra_amount: { type: String },
  get_amount: { type: String },
});

const depositList = mongoose.model("deposit-list", depositListSchema);
export default depositList;
