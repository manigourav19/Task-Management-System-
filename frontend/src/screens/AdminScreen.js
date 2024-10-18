import React, { useEffect, useState } from "react";

function AdminScreen() {
  // Fetching Detailes From Backend
  const [EmployeeDetails, setGetEmployeeDetails] = useState([
    {
      tasktitle: [],
      _id: "",
      fullName: "",
      email: "",
      department: "",
      city: "",
      taskdeadline: "",
    },
  ]);

  useEffect(() => {
    fetch("/employee")
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
      })
      .then((jsonRes) => setGetEmployeeDetails(jsonRes));
  });

  return (
    <div className="adminScreen" >
      <table className="table">
        <thead>
          <tr>
            <th scope="col">Sl no</th>
            <th scope="col">Employee Id</th>
            <th scope="col">Full Name</th>
            <th scope="col">Email-id</th>
            <th scope="col">Department</th>
            <th scope="col">City</th>
            <th scope="col">Assigned Task</th>
            <th scope="col">Deadline</th>
          </tr>
        </thead>
        {EmployeeDetails.map((employee, index) => (
          <tbody>
            <tr>
              <th style={{ paddingLeft: "20px" }} scope="row">
                {index + 1}
              </th>
              <td>{employee._id}</td>
              <td>{employee.fullName}</td>
              <td>{employee.email}</td>
              <td>{employee.department}</td>
              <td>{employee.city}</td>
              <td>{employee.tasktitle + " "}</td>
              <td>{employee.taskdeadline}</td>
            </tr>
          </tbody>
        ))}
      </table>
      <div style={{height:"290px"}}></div>
    </div>
  );
}

export default AdminScreen;
