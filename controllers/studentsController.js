import jwt from "jsonwebtoken";
import {
  createStudent,
  loginStudent,
  getAllStudents,
  getStudentById,
  updateStudent,
  deleteStudent,
} from "../services/studentsService.js";

// CREATE
export const createStudentHandler = async (req, res) => {
  try {
    const student = await createStudent(req.body);
    res.status(201).json(student);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// LOGIN
export const loginStudentHandler = async (req, res) => {
  try {
    const { email, password } = req.body;

    const student = await loginStudent(email, password);

    const token = jwt.sign(
      { userId: student._id },
      process.env.JWT_SECRET,
      { expiresIn: "1h" }
    );

    res.json({
      token,
      userId: student._id,
    });
  } catch (err) {
    res.status(401).json({ error: err.message });
  }
};

// GET ALL
export const getAllStudentsHandler = async (req, res) => {
  try {
    const students = await getAllStudents();
    res.json(students);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// GET ONE
export const getStudentByIdHandler = async (req, res) => {
  try {
    const student = await getStudentById(req.params.id);
    res.json(student);
  } catch (err) {
    res.status(404).json({ error: err.message });
  }
};

// UPDATE
export const updateStudentHandler = async (req, res) => {
  try {
    const student = await updateStudent(req.params.id, req.body);
    res.json(student);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// DELETE
export const deleteStudentHandler = async (req, res) => {
  try {
    await deleteStudent(req.params.id);
    res.json({ message: "Deleted successfully" });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};
