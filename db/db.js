import mongoose from "mongoose";
import mongoDB_URL from "../dbConfig.js";
// import MONGODB_URL from "../config.js"

const connectDB = async () => {
  try {
    const client = await mongoose.connect(mongoDB_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    console.log("MongoDB connected!");
  } catch (err) {
    console.error(err.message);
    process.exit(1);
  }
};

export default connectDB;
