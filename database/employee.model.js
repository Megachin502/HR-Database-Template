// import mongoose from 'mongoose'

// const kittenSchema = new mongoose.Schema({
//   name: String,
// })

// //mongoose.model = {}
// const kitten = mongoose.models.Kitten || mongoose.model('Kitten', kittenSchema)

// export default kitten

import { Schema, model, models } from 'mongoose'

const employeeSchema = new Schema({
  name: { type: String, required: true },
  id: { type: String, required: true },
  department: { type: String, required: true },
  employmentStatus: { type: String, required: true },
  email: { type: String, required: true, unique: true },
})

const Employee = models.Employee || model('Employee', employeeSchema)
export default Employee
