import React, { useState } from "react";
import Header from "./Header";
import Sidebar from "./Sidebar";
import Footer from "./Footer";
import EmployeeTable from "./EmployeeTable";
import EmployeeForm from "./EmployeeForm";

const AdminPanel = ({ onLogout }) => {
  const [employees, setEmployees] = useState([]);
  const [selectedEmployee, setSelectedEmployee] = useState(null);
  const [isFormVisible, setFormVisible] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  const handleAddEmployee = (employee) => {
    if (selectedEmployee) {
      setEmployees(
        employees.map((emp) =>
          emp.id === selectedEmployee.id ? { ...employee, id: emp.id } : emp
        )
      );
    } else {
      setEmployees([
        ...employees,
        { ...employee, id: new Date().getTime().toString() },
      ]);
    }
    setSelectedEmployee(null);
    setFormVisible(false);
  };

  const handleEditEmployee = (employee) => {
    setSelectedEmployee(employee);
    setFormVisible(true);
  };

  const handleDeleteEmployee = (id) => {
    if (window.confirm("Are you sure you want to delete this employee?")) {
      setEmployees(employees.filter((emp) => emp.id !== id));
    }
  };

  const filteredEmployees = employees.filter((employee) =>
    employee.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="d-flex flex-column vh-100">
      <Header onLogout={onLogout} />
      <div className="d-flex flex-grow-1">
        <Sidebar />
        <main className="flex-grow-1 p-3">
          <div className="d-flex justify-content-between mb-3">
            <input
              type="text"
              placeholder="Search..."
              className="form-control w-25"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <button
              className="btn btn-success"
              onClick={() => setFormVisible(true)}
            >
              Add Employee
            </button>
          </div>
          {isFormVisible && (
            <EmployeeForm
              onSubmit={handleAddEmployee}
              employee={selectedEmployee}
              onCancel={() => {
                setSelectedEmployee(null);
                setFormVisible(false);
              }}
            />
          )}
          <EmployeeTable
            employees={filteredEmployees}
            onEdit={handleEditEmployee}
            onDelete={handleDeleteEmployee}
          />
        </main>
      </div>
      <Footer />
    </div>
  );
};

export default AdminPanel;
