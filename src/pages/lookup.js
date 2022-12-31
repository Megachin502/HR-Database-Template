import connectMongo from '../../database/connection'
import Employee from '../../database/employee.model'
import { useState } from 'react'

//Fetch documents from mongoDB
export const getServerSideProps = async () => {
  try {
    console.log('Connecting to Mongo')
    await connectMongo()
    console.log('Connected to Mongo')
    console.log('Fetching Document')
    const employees = await Employee.find()
    console.log('Fetched Document')
    return {
      props: {
        employees: JSON.parse(JSON.stringify(employees.reverse())),
      },
    }
  } catch (error) {
    console.log(error)
    return {
      notFound: true,
    }
  }
}

//
export default function Lookup({ employees }) {
  //Search
  const [search, setSearch] = useState('')
  const employ = employees.filter(
    (e) =>
      e.name.toLowerCase().includes(search.toLocaleLowerCase()) ||
      e.id.toLowerCase().includes(search.toLowerCase()) ||
      e.department.toLowerCase().includes(search.toLowerCase()) ||
      e.employmentStatus.toLowerCase().includes(search.toLowerCase()) ||
      e.email.toLowerCase().includes(search.toLowerCase()),
  )

  return (
    <div className="container">
      {/*search*/}
      <input
        type="text"
        className="w-100"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      ></input>
      {/*Display table*/}
      <table className="table">
        <thead className="thead-light">
          <tr>
            <th>Name</th>
            <th>ID</th>
            <th>Department</th>
            <th>Employee Status</th>
            <th>Email</th>
            <th>Files</th>
          </tr>
        </thead>
        <tbody>
          {employ.map((employee) => (
            <tr key={employee._id}>
              <td>{employee.name}</td>
              <td>{employee.id}</td>
              <td>{employee.department}</td>
              <td>{employee.employmentStatus}</td>
              <td>{employee.email}</td>
              <td>
                <a href={employee.fileURL}>{employee.fileName}</a>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
