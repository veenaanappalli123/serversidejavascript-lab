import {
  createCourse,
  getAllCourses,
  getCourseById,
  updateCourse,
  deleteCourse,
} from "../services/courseService.js";

// CREATE
export const createCourseHandler = async (req, res) => {
  try {
    const course = await createCourse(req.body);
    res.status(201).json(course);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// GET ALL
export const getAllCoursesHandler = async (req, res) => {
  try {
    const courses = await getAllCourses();
    res.json(courses);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// GET ONE
export const getCourseByIdHandler = async (req, res) => {
  try {
    const course = await getCourseById(req.params.id);

    if (!course) {
      return res.status(404).json({ error: "Course not found" });
    }

    res.json(course);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// UPDATE
export const updateCourseHandler = async (req, res) => {
  try {
    const course = await updateCourse(req.params.id, req.body);

    if (!course) {
      return res.status(404).json({ error: "Course not found" });
    }

    res.json(course);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// DELETE
export const deleteCourseHandler = async (req, res) => {
  try {
    const course = await deleteCourse(req.params.id);

    if (!course) {
      return res.status(404).json({ error: "Course not found" });
    }

    res.json({ message: "Course deleted successfully" });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};
