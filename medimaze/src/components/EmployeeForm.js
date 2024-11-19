import React, { useState } from "react";

const EmployeeForm = ({ onSubmit, employee, onCancel }) => {
  const [form, setForm] = useState(
    employee || { name: "", email: "", mobile: "", designation: "" }
  );

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(form);
  };

  return (
    <form className="mb-3" onSubmit={handleSubmit}>
      <div className="mb-3">
        <label>Name</label>
        <input
          type="text"
          className="form-control"
          name="name"
          value={form.name}
          onChange={handleChange}
          required
        />
      </div>
      <div className="mb-3">
        <label>Email</label>
        <input
          type="email"
          className="form-control"
          name="email"
          value={form.email}
          onChange={handleChange}
          required
        />
      </div>
      <div className="mb-3">
        <label>Mobile</label>
        <input
          type="text"
          className="form-control"
          name="mobile"
          value={form.mobile}
          onChange={handleChange}
          required
        />
      </div>
      <div className="mb-3">
        <label>Designation</label>
        <input
          type="text"
          className="form-control"
          name="designation"
          value={form.designation}
          onChange={handleChange}
          required
        />
      </div>
      <button type="submit" className="btn btn-success me-2">
        Save
      </button>
      <button type="button" className="btn btn-secondary" onClick={onCancel}>
        Cancel
      </button>
    </form>
  );
};

export default EmployeeForm;
