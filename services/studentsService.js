import Student from "../models/Student.js";

// GET ALL
export const getAllStudents = async () => {
  return await Student.find();
};

// GET BY ID
export const getStudentById = async (id) => {
  return await Student.findById(id);
};

// CREATE
export const createStudent = async (data) => {
  const student = new Student(data);
  return await student.save();
};

// UPDATE
export const updateStudent = async (id, data) => {
  return await Student.findByIdAndUpdate(id, data, {
    new: true,
  });
};

// DELETE
export const deleteStudent = async (id) => {
  return await Student.findByIdAndDelete(id);
};
