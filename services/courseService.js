import Course from "../models/courseModel.js";

// CREATE
export const createCourse = async (data) => {
  return await Course.create(data);
};

// GET ALL
export const getAllCourses = async () => {
  return await Course.find();
};

// GET ONE
export const getCourseById = async (id) => {
  return await Course.findById(id);
};

// UPDATE
export const updateCourse = async (id, data) => {
  return await Course.findByIdAndUpdate(id, data, { new: true });
};

// DELETE
export const deleteCourse = async (id) => {
  return await Course.findByIdAndDelete(id);
};
