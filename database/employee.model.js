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
