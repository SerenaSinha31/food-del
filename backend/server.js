// import express  from "express"
// import cors from 'cors'
// import { connectDB } from "./config/db.js"
// import userRouter from "./routes/userRoute.js"
// import foodRouter from "./routes/foodRoute.js"
// import 'dotenv/config'
// import cartRouter from "./routes/cartRoute.js"
// import orderRouter from "./routes/orderRoute.js"

// // app config
// const app = express()
// const port = process.env.PORT || 4000;


// // middlewares
// app.use(express.json())
// //app.use(cors())

// app.use(cors());

// // db connection
// connectDB()

// // api endpoints
// app.use("/api/user", userRouter)
// app.use("/api/food", foodRouter)
// app.use("/images",express.static('uploads'))
// app.use("/api/cart", cartRouter)
// app.use("/api/order",orderRouter)

// app.get("/", (req, res) => {
//     res.send("API Working")
//   });

// app.listen(port, () => console.log(`Server started on http://localhost:${port}`))


import express from "express";
import cors from "cors";
import { connectDB } from "./config/db.js";
import userRouter from "./routes/userRoute.js";
import foodRouter from "./routes/foodRoute.js";
import "dotenv/config";
import cartRouter from "./routes/cartRoute.js";
import orderRouter from "./routes/orderRoute.js";

// app config
const app = express();

// middlewares
app.use(express.json());
// app.use(cors());
const corsOptions = {
  origin: "https://food-del-peach.vercel.app", // 👈 your frontend domain
  methods: "GET,POST,PUT,DELETE",
  credentials: true
};

app.use(cors(corsOptions));

// db connection
connectDB();

// api endpoints
app.use("/api/user", userRouter);
app.use("/api/food", foodRouter);
app.use("/images", express.static("uploads"));
app.use("/api/cart", cartRouter);
app.use("/api/order", orderRouter);

// test route
app.get("/", (req, res) => {
  res.send("API Working");
});

// ✅ DO NOT USE app.listen() on Vercel
// ❌ app.listen(port, () => console.log(...))

// ✅ Instead, export a handler function for serverless
export default app;
