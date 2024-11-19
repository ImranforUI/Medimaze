import React, { useState } from "react";
import Login from "./components/Login";
import AdminPanel from "./components/AdminPanel";

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return isLoggedIn ? (
    <AdminPanel onLogout={setIsLoggedIn} />
  ) : (
    <Login onLogin={setIsLoggedIn} />
  );
};

export default App;
