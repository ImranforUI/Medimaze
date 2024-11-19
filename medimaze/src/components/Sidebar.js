import React from "react";

const Sidebar = () => {
  return (
    <aside className="bg-light p-3" style={{ width: "200px" }}>
      <ul className="list-unstyled">
        <li>Dashboard</li>
        <li>Settings</li>
        <li>Reports</li>
      </ul>
    </aside>
  );
};

export default Sidebar;
