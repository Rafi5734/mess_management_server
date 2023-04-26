import mongoose from "mongoose";

const depositListSchema = new mongoose.Schema({
  date: { type: String },
  name: { type: String },
  deposit_amount: { type: Number },
  extra_amount: { type: Number },
  get_amount: { type: Number },
});

const depositList = mongoose.model("deposit-list", depositListSchema);
export default depositList;
