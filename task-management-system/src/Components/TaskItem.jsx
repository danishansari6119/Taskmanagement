function TaskItem({ title, description, priority, status }) {
  return (
    <div className={status === "Completed" ? "task completed" : "task"}>
      <h4>{title}</h4>

      <p>{description}</p>

      <p>
        <b>Priority:</b> {priority}
      </p>

      <p>
        <b>Status:</b> {status}
      </p>

      <div className="task-buttons">
        <button className="complete-btn">Mark Completed</button>
        <button className="delete-btn">Delete</button>
      </div>
    </div>
  );
}

export default TaskItem;
