import expressHandler from "express-async-handler";
import MealList from "../models/mealList.js";

// console.log(getUser);
const getMealList = expressHandler(async (req, res) => {
  let { page, limit } = req.query;
  const skip = page > 0 ? (page - 1) * 31 : 0;

  const allMealList = await MealList.find().skip(skip).limit(limit);

  if (!allMealList) {
    res.status(404).json({ message: "Meal List not found" });
  }
  res.status(200).json(allMealList);
});

const postMealList = expressHandler(async (req, res) => {
  const currentDate = new Date();
  const day = currentDate.getDate();
  const month = currentDate.getMonth() + 1;
  const year = currentDate.getFullYear();

  const newMeal = await MealList.insertMany({
    date: `${day}/${month}/${year}`,
    allMeal: req.body,
  });
  // console.log(req.body);
  if (!newMeal) {
    res.status(500).json({ message: "New meal not added" });
  }
  res.status(200).json(newMeal);

  
});

const getOneMealList = expressHandler(async (req, res) => {
  const oneMealList = await MealList.findById(req.params.id);

  if (!oneMealList) {
    res.status(500).json({ message: "Meal list not found" });
  }
  res.status(200).json(oneMealList);
});

const updateOneMealList = expressHandler(async (req, res) => {
  const currentDate = new Date();
  const day = currentDate.getDate();
  const month = currentDate.getMonth() + 1;
  const year = currentDate.getFullYear();
  const updateMealList = await MealList.findByIdAndUpdate(
    req.params.id,
    {
      date: `${day}/${month}/${year}`,
      allMeal: req.body,
    },
    {
      new: true,
    }
  );

  if (!updateMealList) {
    res.status(500).json({ message: "Meal list not found" });
  } else {
    res.status(200).json(updateMealList);
  }
});

const deleteOneMealList = expressHandler(async (req, res) => {
  const oneMealListDelete = await MealList.findByIdAndDelete(req.params.id);

  if (!oneMealListDelete) {
    res.status(500).json({ message: "Meal list not found" });
  }
  res.status(200).json(oneMealListDelete);
});

export {
  postMealList,
  getMealList,
  getOneMealList,
  updateOneMealList,
  deleteOneMealList,
};
