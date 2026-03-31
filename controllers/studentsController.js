import * as service from "../services/studentsService.js"

// GET all
export const getStudents = (req, res) => {
  const data = service.getAllStudents()
  res.status(200).json(data)
}

// GET by id
export const getStudent = (req, res) => {
  const id = parseInt(req.params.id)
  const student = service.getStudentById(id)

  if (!student) {
    return res.status(404).json({ error: "Student not found" })
  }

  res.json(student)
}

// POST
export const createStudent = (req, res) => {
  const newStudent = req.body

  if (!newStudent.name || !newStudent.email) {
    return res.status(400).json({ error: "Missing fields" })
  }

  const created = service.createStudent(newStudent)
  res.status(201).json(created)
}

// PUT
export const updateStudent = (req, res) => {
  const id = parseInt(req.params.id)
  const updated = service.updateStudent(id, req.body)

  if (!updated) {
    return res.status(404).json({ error: "Student not found" })
  }

  res.json(updated)
}

// DELETE
export const deleteStudent = (req, res) => {
  const id = parseInt(req.params.id)
  const deleted = service.deleteStudent(id)

  if (!deleted) {
    return res.status(404).json({ error: "Student not found" })
  }

  res.json({ message: "Deleted successfully" })
}
