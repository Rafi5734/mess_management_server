import express from "express";
import http from "http";
import { Server } from "socket.io";
import "dotenv/config";
import cookieParser from "cookie-parser";
import connectDB from "./db/db.js";
import { addUserRouter } from "./Routes/addUserRoutes.js";
import { mealListRouter } from "./Routes/mealListRoutes.js";
import cors from "cors";
import { bazarListRouter } from "./Routes/bazarListRoute.js";
import { depositListRouter } from "./Routes/depositListRoute.js";
// import { router } from "./Routes/uploadImageRoute.js";
const app = express();
const server = http.createServer(app);

const io = new Server(server, {
  cors: {
    origin: "http://localhost:3003",
    method: ["GET", "POST"],
  },
});

io.on("connection", (socket) => {
  console.log("A user connected");

  // Send data to the client
  socket.emit("message", "Hello from the server!");

  // Receive data from the client
  socket.on("message", (data) => {
    console.log("Received data:", data);

    // Send data back to the client
    socket.emit("message", "Data received by the server");
  });

  socket.on("disconnect", () => {
    console.log("A user disconnected");
  });
});

// export default io;
// dotenv.config();
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

server.listen(PORT, function () {
  console.log("listen on port " + PORT);
});


