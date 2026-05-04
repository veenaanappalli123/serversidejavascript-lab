import express from "express";
import cors from "cors";
import dotenv from "dotenv";

import connectDB from "./config/db.js";

import studentRouter from "./routes/students.js";
import authRoutes from "./routes/auth.js";

import logger from "./middleware/logger.js";
import errorHandler from "./middleware/errorHandler.js";

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

//  Connect MongoDB
connectDB();

//  Global Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(logger);

//  Static Files (MULTER IMAGES)
app.use("/uploads", express.static("public/uploads"));

//  Routes
app.use("/api/students", studentRouter);
app.use("/api/auth", authRoutes);

// Root
app.get("/", (req, res) => {
  res.send("API is running...");
});

//  ERROR HANDLER MUST BE LAST
app.use(errorHandler);

// Start server
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
