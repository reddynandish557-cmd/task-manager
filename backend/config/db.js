import dontenv from "dotenv";
import mongoose from "mongoose";

const connect = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URL);
    console.log(`mongodb connected ${conn.connection.host}`);
  } catch (err) {
    console.log("mongodb connection err", err);
    process.exit(1);
  }
};

export default connect;
