import mongoose from "mongoose";

const studentSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  major: {
    type: String,
  },
  gpa: {
    type: Number,
  },
  image: {
    type: String,
  },
});

export default mongoose.model("Student", studentSchema);
