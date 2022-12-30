import { useState } from 'react'

export default function Home({ employees }) {
  //Departments
  const departments = [
    'Human Resources',
    'Sales',
    'Customer Service',
    'Accounting',
  ]

  //Employment Status
  const employmentStatuses = [
    'Full-time',
    'Part-time',
    'Contract',
    'Apprenticeship',
  ]

  //Create document for database
  const createEmployee = async () => {
    const randomNum = Math.floor(Math.random() * 1000)
    const res = await fetch('/api/createEmployee', {
      method: 'POST',
      headers: {
        Content_Type: 'application/json',
      },
      body: JSON.stringify({
        name: name,
        id: id,
        department: department,
        employmentStatus: employmentStatus,
        email: email,
      }),
    })
    const data = await res.json()
    console.log(data)
  }

  //Form Variables
  const [name, setName] = useState('')
  const [id, setID] = useState('')
  const [department, setDepartment] = useState()
  const [employmentStatus, setEmploymentStatus] = useState()
  const [email, setEmail] = useState('')

  return (
    <>
      <h1 className="text-center">Submission Form</h1>
      <form className="container w-50">
        <div className="row">
          {/*Name*/}
          <div className="col-lg">
            <label htmlFor="inputName" className="form-label">
              Name
            </label>
            <input
              type="text"
              className="form-control mt-2"
              name="name"
              id="inputName"
              placeholder="Enter name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            ></input>
          </div>
          {/*ID*/}
          <div className="col-lg">
            <label htmlFor="inputID" className="form-label">
              ID
            </label>
            <input
              type="text"
              className="form-control mt-2"
              name="ID"
              id="inputID"
              value={id}
              onChange={(e) => setID(e.target.value)}
              placeholder="Enter ID"
              required
            ></input>
          </div>
        </div>
        <div className="row pt-3">
          {/*Department*/}
          <div className="col-lg">
            <label className="form-label">Department </label>
            <select
              required
              value={department}
              onChange={(e) => setDepartment(e.target.value)}
              className="form-control"
            >
              <option disabled value="" selected>
                {' '}
                -- select an option --{' '}
              </option>
              {departments.map((department) => (
                <option key={department} value={department}>
                  {department}
                </option>
              ))}
            </select>
          </div>
          {/*Employment Status*/}
          <div className="col-lg">
            <label className="form-label">Employment Status </label>
            <select
              required
              value={employmentStatus}
              onChange={(e) => setEmploymentStatus(e.target.value)}
              className="form-control"
            >
              <option disabled value="" selected>
                {' '}
                -- select an option --{' '}
              </option>
              {employmentStatuses.map((employmentStatus) => (
                <option key={employmentStatus} value={employmentStatus}>
                  {employmentStatus}
                </option>
              ))}
            </select>
          </div>
        </div>
        <div className="row pt-3">
          {/*Email*/}
          <div className="col-lg">
            <div className="form-group">
              <label htmlFor="InputEmail1" className="required pb-2">
                Email
              </label>
              <input
                type="email"
                className="form-control"
                id="InputEmail1"
                name="email"
                placeholder="Enter email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              ></input>
            </div>
          </div>
          {/*File Upload*/}
          {/* <div className="col-lg">
            <div className="form-group">
              <label htmlFor="InputEmail1" className="required pb-2">
                File Upload
              </label>
              <input type="file" name="file" multiple />
            </div>
          </div> */}
        </div>
        <div className="row pt-5">
          <div className="col text-center">
            <button
              type="submit"
              className="btn btn-secondary"
              onClick={createEmployee}
            >
              Submit
            </button>
          </div>
        </div>
      </form>
    </>
  )
}
