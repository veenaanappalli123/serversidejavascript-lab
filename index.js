import express from "express";
import cors from "cors";
import dotenv from "dotenv";

import connectDB from "./config/db.js";
import studentRouter from "./routes/students.js";
import logger from "./middleware/logger.js";

// load env
dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

// DB
connectDB();

// middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(logger); // 👈 OUR CUSTOM MIDDLEWARE

// routes
app.use("/api/students", studentRouter);

// test route
app.get("/", (req, res) => {
  res.send("API is running...");
});

// start
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
