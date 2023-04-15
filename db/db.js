import mongoose from "mongoose";
const mongoDB_URL = `mongodb+srv://Amar_Basha:6p8IzICIKu0RiXLs@cluster0.viq6r.mongodb.net/user`;
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
