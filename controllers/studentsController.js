export const createStudent = async (req, res, next) => {
  try {
    const data = req.body;

    if (req.file) {
      data.image = req.file.filename;
    }

    const newStudent = await studentService.createStudent(data);

    res.status(201).json(newStudent);
  } catch (error) {
    res.status(400);
    next(error);
  }
};
