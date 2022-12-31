import connectMongo from '../../../database/connection'
import Employee from '../../../database/employee.model'

export default async function addEmployee(req, res) {
  try {
    console.log('Connecting to Mongo')
    await connectMongo()
    console.log('Connected to Mongo')
    console.log('Creating Document')
    const employee = await Employee.create(JSON.parse(req.body))
    console.log('Created Document')
    res.json({ employee })
  } catch (error) {
    console.log(error)
    res.json(error)
  }
}