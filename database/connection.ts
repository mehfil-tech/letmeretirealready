// db.ts
import dotenv from 'dotenv';
import mongoose from "mongoose";
import migrate from './migration';

dotenv.config();

const dbUrl = process.env.MONGODB_URI || 'mongodb://localhost:27017/sample';

// Here actual connection with mongodb is happening
const connectDB = async () => {
  try {
    await mongoose.connect(dbUrl, {});
    console.log("Connected to MongoDB");
    migrate();
    return true;
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
    return false;
  }
};

export default connectDB;
