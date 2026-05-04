import express from "express";
import {
  createStudentHandler,
  loginStudentHandler,
  getAllStudentsHandler,
  getStudentByIdHandler,
  updateStudentHandler,
  deleteStudentHandler,
} from "../controllers/studentsController.js";

import { authCheck } from "../middleware/auth-middleware.js";

const router = express.Router();

// PUBLIC ROUTES
router.post("/", createStudentHandler);
router.post("/login", loginStudentHandler);

//  PROTECTED ROUTES
router.get("/", authCheck, getAllStudentsHandler);
router.get("/:id", authCheck, getStudentByIdHandler);
router.put("/:id", authCheck, updateStudentHandler);
router.delete("/:id", authCheck, deleteStudentHandler);

export default router;
