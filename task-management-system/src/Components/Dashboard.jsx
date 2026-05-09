import TaskForm from "./TaskForm";
import TaskList from "./TaskList";

function Dashboard({ setPage }) {
  return (
    <div className="dashboard">
      <div className="top-bar">
        <h2>Task Management System</h2>
        <button onClick={() => setPage("login")}>Logout</button>
      </div>

      <TaskForm />

      <TaskList />
    </div>
  );
}

export default Dashboard;
