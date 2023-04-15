import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  userName: { type: String },
  email: { type: String },
  phone: { type: String },
  category: { type: String },
  status: { type: String },
  working_place: { type: String },
  password: { type: String },
});

const User = mongoose.model("add-user", userSchema);
export default User;
