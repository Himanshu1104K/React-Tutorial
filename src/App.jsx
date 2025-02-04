import "./App.css";
import { useState } from "react";
import { Task } from "./Task";

function App() {
  const [todoList, setTodoList] = useState([]);
  const [inpTask, setInpTask] = useState("");

  const handleChange = (e) => {
    setInpTask(e.target.value);
  };

  const addTask = () => {
    if (inpTask.trim() === "") {
      alert("Please enter a task");
      return;
    }
    const task = {
      id: todoList.length === 0 ? 1 : todoList[todoList.length - 1].id + 1,
      task: inpTask,
      completed: false,
    };
    setTodoList([...todoList, task]);
  };

  const deleteTask = (id) => {
    setTodoList(todoList.filter((task) => task.id !== id));
  };

  const toGreen = (id) => {
    setTodoList(
      todoList.map((task) => {
        if (task.id === id) {
          return { ...task, completed: true };
        } else {
          return task;
        }
      })
    );
  };

  return (
    <div className="App">
      <div className="addTask">
        <input
          type="text"
          className="inpTask"
          placeholder="Add a new task..."
          onChange={handleChange}
        />
        <button onClick={addTask}>Add Task</button>
      </div>
      <div className="list">
        {todoList.map((task) => {
          return (
            <Task
              deleteTask={deleteTask}
              taskname={task.task}
              id={task.id}
              toGreen={toGreen}
              isDone={task.completed}
            />
          );
        })}
      </div>
    </div>
  );
}

export default App;
