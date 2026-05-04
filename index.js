import express from "express";
import cors from "cors";
import dotenv from "dotenv";

import connectDB from "./config/db.js";

import studentRouter from "./routes/students.js";
import courseRouter from "./routes/courseRoute.js";

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

// DB
connectDB();

// middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use(express.static("public"));

// routes
app.use("/api/students", studentRouter);
app.use("/api/courses", courseRouter);

// server
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
