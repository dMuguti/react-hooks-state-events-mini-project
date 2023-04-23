import React from "react";

function Task({ task, onDelete }) {
  if (!task) {
    return null; // return early if task is not defined
  }

  return (
    <div className="task">
      <div className="label">{task.category && task.category}</div>
      <div className="text">{task.text && task.text}</div>
      <button className="delete" onClick={() => onDelete(task.id)}>
        X
      </button>
    </div>
  );
}

export default Task;
