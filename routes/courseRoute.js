import express from "express";
import {
  createCourseHandler,
  getAllCoursesHandler,
  getCourseByIdHandler,
  updateCourseHandler,
  deleteCourseHandler,
} from "../controllers/courseController.js";

import { authCheck } from "../middleware/auth-middleware.js";

const router = express.Router();

//  ALL PROTECTED (MANDATORY)
router.post("/", authCheck, createCourseHandler);
router.get("/", authCheck, getAllCoursesHandler);
router.get("/:id", authCheck, getCourseByIdHandler);
router.put("/:id", authCheck, updateCourseHandler);
router.delete("/:id", authCheck, deleteCourseHandler);

export default router;
