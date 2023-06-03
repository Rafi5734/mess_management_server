import expressHandler from "express-async-handler";
import MealList from "../models/mealList.js";


const getMealList = expressHandler(async (req, res) => {
  const allMealList = await MealList.find();

  if (!allMealList) {
    res.status(404).json({ message: "Meal List not found" });
  } else {
    res.status(200).json(allMealList);
  }
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

const deleteManyData = expressHandler(async (req, res) => {
  try {
    const filters = req.body;

    // console.log(filters);
    const result = await MealList.deleteMany({ $or: filters });

    if (result.deletedCount > 0) {
      res
        .status(200)
        .json({ message: "Previous month data deleted successfully." });
    } else {
      res.status(404).json({ message: "No data found for deletion." });
    }
  } catch (error) {
    console.error("Error deleting previous month data:", error);
    res.status(500).json({
      message: "An error occurred while deleting previous month data.",
    });
  }
});

export {
  postMealList,
  getMealList,
  getOneMealList,
  updateOneMealList,
  deleteOneMealList,
  deleteManyData,
};
