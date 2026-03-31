import express from "express"
import * as controller from "../controllers/studentsController.js"

const router = express.Router()

router.get("/students", controller.getStudents)
router.get("/students/:id", controller.getStudent)
router.post("/students", controller.createStudent)
router.put("/students/:id", controller.updateStudent)
router.delete("/students/:id", controller.deleteStudent)

export default router
