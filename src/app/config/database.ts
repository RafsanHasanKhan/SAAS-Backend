import mongoose from "mongoose"
import config from "./index"


const connectDB = async () => {
  try {
    await mongoose.connect(config.database_url as string);
    console.log('Database connected successfully');
  } catch (error) {
    console.error('Database connection failed: ', error);
    process.exit(1);
  }
}

export default connectDB;