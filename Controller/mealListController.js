import expressHandler from "express-async-handler";
import MealList from "../models/mealList.js";


const getMealList = expressHandler(async (req, res) => {
  const allMealList = await MealList.find();

  if (!allMealList) {
      res.status(404).json({ "message": "Meal List not found" });
  }
  res.status(200).json({ allMealList });
});

const postMealList = expressHandler(async (req, res) => {
    const currentDate = new Date();
    const day = currentDate.getDate();
    const month = currentDate.getMonth() + 1; // Months are zero-indexed
    const year = currentDate.getFullYear();


    const newMeal = await MealList.insertMany({
    date: `${day}/${month}/${year}`,
    member_1: req.body.member_1,
    member_2: req.body.member_2,
    member_3: req.body.member_3,
    member_4: req.body.member_4,
    member_5: req.body.member_5,
    member_6: req.body.member_6,
    member_7: req.body.member_7,
    member_8: req.body.member_8,
    member_9: req.body.member_9,
    member_10: req.body.member_10,
    
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
    const month = currentDate.getMonth() + 1; // Months are zero-indexed
    const year = currentDate.getFullYear();
    const updateMealList = await MealList.findByIdAndUpdate(
      req.params.id,
      {
        date: `${day}/${month}/${year}`,
        member_1: req.body.member_1,
        member_2: req.body.member_2,
        member_3: req.body.member_3,
        member_4: req.body.member_4,
        member_5: req.body.member_5,
        member_6: req.body.member_6,
        member_7: req.body.member_7,
        member_8: req.body.member_8,
        member_9: req.body.member_9,
        member_10: req.body.member_10,
      },
      {
        new: true,
      }
    );

  if (!updateMealList) {
    res.status(500).json({ message: "Meal list not found" });
  }
  res.status(200).json(updateMealList);
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
