import express from 'express';
import {
  getUser,
  postUser,
  getOneUser,
  updateUser,
  deleteUser,
  postAdmin,
} from "../Controller/addUserController.js";

const addUserRouter = express.Router();

addUserRouter.route("/").get(getUser).post(postUser);
addUserRouter.route("/admin").post(postAdmin);

addUserRouter.route("/:id").get(getOneUser).put(updateUser).delete(deleteUser);

export { addUserRouter };
