import express from "express";
import {
  postMealList,
  getMealList,
  getOneMealList,
  updateOneMealList,
  deleteOneMealList,
  deleteManyData,
} from "../Controller/mealListController.js";

const mealListRouter = express.Router();

mealListRouter.route("/").post(postMealList).get(getMealList);
mealListRouter.route("/delete_previous").delete(deleteManyData);
mealListRouter
  .route("/:id")
  .get(getOneMealList)
  .put(updateOneMealList)
  .delete(deleteOneMealList);

// mealListRouter.route("/:id").get(getOneUser).put(updateUser).delete(deleteUser);

export { mealListRouter };
