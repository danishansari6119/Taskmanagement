import { useState } from "react";
import Login from "./components/Login";
import Signup from "./components/Signup";
import Dashboard from "./components/Dashboard";

function App() {
  const [page, setPage] = useState("login");

  return (
    <div className="app">
      {page === "login" && <Login setPage={setPage} />}
      {page === "signup" && <Signup setPage={setPage} />}
      {page === "dashboard" && <Dashboard setPage={setPage} />}
    </div>
  );
}

export default App;
