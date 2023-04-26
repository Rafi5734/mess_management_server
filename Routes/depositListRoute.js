import express from "express";
import {
  deleteOneDepositList,
  getDepositList,
  getOneDepositList,
  postDepositList,
  updateOneDepositList,
} from "../Controller/depositListController.js";

const depositListRouter = express.Router();

depositListRouter.route("/").post(postDepositList).get(getDepositList);

depositListRouter
  .route("/:id")
  .get(getOneDepositList)
  .put(updateOneDepositList)
  .delete(deleteOneDepositList);

export { depositListRouter };
