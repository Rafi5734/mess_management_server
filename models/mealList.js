import mongoose from "mongoose";

const mealListSchema = new mongoose.Schema({
  date: {type: String},
  member_1: Number,
  member_2: Number,
  member_3: Number,
  member_4: Number,
  member_5: Number,
  member_6: Number,
  member_7: Number,
  member_8: Number,
  member_9: Number,
  member_10: Number,
  
});

const mealList = mongoose.model("meal-list", mealListSchema);
export default mealList;
