import mongoose from "mongoose";
import env from "./env.js";
import logger from "../shared/logger/logger.js";

const connectDatabase = async () => {
  try {
    await mongoose.connect(env.mongodbUri);

    logger.info("MongoDB connected successfully.");
  } catch (error) {
    logger.error(error, "Database connection failed.");

    process.exit(1);
  }
};

export default connectDatabase;