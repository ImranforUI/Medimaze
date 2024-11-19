import React from "react";

const Header = ({ onLogout }) => {
  return (
    <header className="bg-primary text-white d-flex justify-content-between align-items-center p-3">
      <h4>Medimaze</h4>
      <div>
        <span>Admin</span>
        <button
          className="btn btn-light btn-sm ms-3"
          onClick={() => onLogout(false)}
        >
          Logout
        </button>
      </div>
    </header>
  );
};

export default Header;

