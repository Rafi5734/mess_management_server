import express from "express";
import models from "./models/index.js";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import connectDB from "./db/db.js";
import { addUserRouter } from "./Routes/addUserRoutes.js";
import { mealListRouter } from "./Routes/mealListRoutes.js";
import cors from "cors";
import { bazarListRouter } from "./Routes/bazarListRoute.js";
import { depositListRouter } from "./Routes/depositListRoute.js";
// import { router } from "./Routes/uploadImageRoute.js";
const app = express();
dotenv.config();
const PORT = process.env.PORT || 8888;
app.use(cookieParser());
app.use(express.json());
app.use(express.static("public"));
app.use(cors());

// Connect to MongoDB
connectDB();

app.use("/add_user", addUserRouter);
app.use("/meal_list", mealListRouter);
app.use("/bazar_list", bazarListRouter);
app.use("/deposit_list", depositListRouter);

// app.use("/api/images", router);

// // Error handling middleware
// app.use((err, req, res, next) => {
//   console.error(err);
//   res.status(500).json({ error: "Internal server error" });
// });


app.listen(PORT, function () {
  console.log("listen on port " + PORT);
});
