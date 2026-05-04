import Student from "../models/Student.js";
import bcrypt from "bcrypt";

// CREATE student with hashed password
export const createStudent = async (data) => {
  const hashedPassword = await bcrypt.hash(data.password, 10);

  const student = new Student({
    ...data,
    password: hashedPassword,
  });

  return await student.save();
};

// LOGIN student
export const loginStudent = async (email, password) => {
  const student = await Student.findOne({ email });

  if (!student) {
    throw new Error("User not found");
  }

  const isMatch = await bcrypt.compare(password, student.password);

  if (!isMatch) {
    throw new Error("Invalid credentials");
  }

  return student;
};

// GET ALL
export const getAllStudents = async () => {
  return await Student.find().select("-password");
};

// GET ONE
export const getStudentById = async (id) => {
  return await Student.findById(id).select("-password");
};

// UPDATE
export const updateStudent = async (id, data) => {
  return await Student.findByIdAndUpdate(id, data, { new: true });
};

// DELETE
export const deleteStudent = async (id) => {
  return await Student.findByIdAndDelete(id);
};
