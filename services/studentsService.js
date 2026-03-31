import fs from "fs"

const students = JSON.parse(
  fs.readFileSync("./students.json", "utf-8")
)

export const getAllStudents = () => {
  return students
}

export const getStudentById = (id) => {
  return students.find(s => s.id === id)
}

export const createStudent = (newStudent) => {
  newStudent.id = Date.now()
  students.push(newStudent)
  return newStudent
}

export const updateStudent = (id, data) => {
  const index = students.findIndex(s => s.id === id)
  if (index === -1) return null

  students[index] = { ...students[index], ...data }
  return students[index]
}

export const deleteStudent = (id) => {
  const index = students.findIndex(s => s.id === id)
  if (index === -1) return null

  students.splice(index, 1)
  return true
}
