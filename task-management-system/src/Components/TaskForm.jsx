function TaskForm() {
  return (
    <div className="task-form-box">
      <h3>Add New Task</h3>

      <input type="text" placeholder="Task title" />

      <select>
        <option>Low Priority</option>
        <option>Medium Priority</option>
        <option>High Priority</option>
      </select>

      <textarea placeholder="Task description"></textarea>

      <button onClick={() => alert("Task added ")}>Add Task</button>
    </div>
  );
}

export default TaskForm;
