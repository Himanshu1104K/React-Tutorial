import React from "react";

export function Task(props) {
  return (
    <div
      className="task"
      style={{ backgroundColor: props.isDone ? "Green" : "black" }}
    >
      <h1>{props.taskname}</h1>
      <button className="taskDelBut" onClick={() => props.toGreen(props.id)}>
        Complete
      </button>
      <button className="taskDelBut" onClick={() => props.deleteTask(props.id)}>
        X
      </button>
    </div>
  );
}
