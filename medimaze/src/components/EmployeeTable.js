import React from "react";

const EmployeeTable = ({ employees, onEdit, onDelete }) => {
  return (
    <table className="table table-bordered text-center p-5 table-striped rounded-circle">
      <thead className="table-dark text-white">
        <tr>
          <th>Name</th>
          <th>Email</th>
          <th>Mobile</th>
          <th>Designation</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {employees.length !== 0 ? (
          employees.map((employee) => (
            <tr key={employee.id}>
              <td>{employee.name}</td>
              <td>{employee.email}</td>
              <td>{employee.mobile}</td>
              <td>{employee.designation}</td>
              <td>
                <button
                  className="btn btn-primary btn-sm me-2"
                  onClick={() => onEdit(employee)}
                >
                  Edit
                </button>
                <button
                  className="btn btn-danger btn-sm"
                  onClick={() => onDelete(employee.id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))
        ) : (
          <tr>
            <td colSpan="5" className="text-danger font-bold">
              No records found! Please add one.
            </td>
          </tr>
        )}
      </tbody>
    </table>
  );
};

export default EmployeeTable;
