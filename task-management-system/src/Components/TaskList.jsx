import TaskItem from "./TaskItem";

function TaskList() {
  return (
    <div className="task-list">
      <h3>Your Tasks</h3>


      <TaskItem
        title="submit Assignment"
        description="upload assignment on time"
        priority="Medium"
        status="Completed"
      />

      
    </div>
  );
}

export default TaskList;
