import express from "express";
import {
  getStudents,
  getStudent,
  createStudent,
  updateStudent,
  deleteStudent,
} from "../controllers/studentsController.js";

import auth from "../middleware/auth.js";
import upload from "../middleware/multer-config.js";

const router = express.Router();

//  PROTECTED ROUTES +  FILE UPLOAD
router.get("/", auth, getStudents);
router.get("/:id", auth, getStudent);
router.post("/", auth, upload.single("image"), createStudent);
router.put("/:id", auth, updateStudent);
router.delete("/:id", auth, deleteStudent);

export default router;
