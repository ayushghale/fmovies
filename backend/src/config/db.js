import mongoose from "mongoose";
import dotenv from "dotenv";

// export default async function db() {
//   try {
//     await mongoose.connect(`mongodb://127.0.0.1:27017/tutorial_space`);
//     console.log(`Connected to DB`);
//   } catch (e) {
//     console.log("Failed to connect DB");
//   }
// }

// Load environment variables from .env
dotenv.config(); 

// Build the connection string
const dbConnectionURL = `${process.env.DB_CONNECTION}://${process.env.DB_HOST}:${process.env.DB_PORT}/${process.env.DB_DATABASE}`;

export default async function connectToDatabase() {
  try {
    await mongoose.connect(dbConnectionURL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log(`Connected to DB`);
  } catch (e) {
    console.error("Failed to connect to DB:", e);
  }
}
