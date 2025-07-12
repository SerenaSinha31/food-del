// import mongoose from "mongoose";
// import dotenv from "dotenv";
// dotenv.config();

// export const connectDB = async () => {
//     try {
//         await mongoose.connect(process.env.MONGO_URI);
//         console.log("DB Connected");
//     } catch (err) {
//         console.error("DB Connection Failed", err);
//     }
// };

import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

export const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("✅ MongoDB Connected");
  } catch (err) {
    console.error("❌ DB Connection Failed:", err);
    throw err; // ← 🔥 this is necessary to stop broken execution
  }
};
