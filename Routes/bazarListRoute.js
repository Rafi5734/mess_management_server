import express from "express";
import {
  deleteOneBazarList,
  getBazarList,
  getOneBazarList,
  postBazarList,
  updateOneBazarList,
} from "../Controller/bazarListController.js";

const bazarListRouter = express.Router();

bazarListRouter.route("/").post(postBazarList).get(getBazarList);
bazarListRouter
  .route("/:id")
  .get(getOneBazarList)
  .put(updateOneBazarList)
  .delete(deleteOneBazarList);

export { bazarListRouter };
