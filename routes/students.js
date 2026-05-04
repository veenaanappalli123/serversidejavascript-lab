import express from "express";
import {
  createStudentHandler,
  loginStudentHandler,
  getAllStudentsHandler,
  getStudentByIdHandler,
  updateStudentHandler,
  deleteStudentHandler,
} from "../controllers/studentsController.js";

const router = express.Router();

// PUBLIC
router.post("/", createStudentHandler);
router.post("/login", loginStudentHandler);

// (we will protect later)
router.get("/", getAllStudentsHandler);
router.get("/:id", getStudentByIdHandler);
router.put("/:id", updateStudentHandler);
router.delete("/:id", deleteStudentHandler);

export default router;
