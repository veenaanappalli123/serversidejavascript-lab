import express from "express"
import cors from "cors"
import studentRoutes from "./routes/students.js"

const app = express()
const port = 3000

app.use(cors())
app.use(express.json())

// use routes
app.use("/api", studentRoutes)

// root route
app.get("/", (req, res) => {
  res.json({ msg: "API is running" })
})

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`)
})
