import express from 'express';
import {
  getUser,
  postUser,
  getOneUser,
  updateUser,
  deleteUser,
} from "../Controller/addUserController.js";

const addUserRouter = express.Router();

addUserRouter.route("/").get(getUser).post(postUser);

addUserRouter.route("/:id").get(getOneUser).put(updateUser).delete(deleteUser);

export { addUserRouter };
