import mongoose from "mongoose";

const studentSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  major: { type: String, required: true },
  gpa: { type: Number, required: true },

  image: {
    type: String, // store filename
  },
}, {
  timestamps: true,
});

const Student = mongoose.model("Student", studentSchema);

export default Student;
