import mongoose from "mongoose";

const mealListSchema = new mongoose.Schema({
  date: { type: String },
  allMeal: { type: Object },
});

const mealList = mongoose.model("meal-list", mealListSchema);
export default mealList;
