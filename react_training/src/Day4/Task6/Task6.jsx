import React, { useState } from "react";
import "../CSS/Task4.css";

const Task6 = () => {
  const [taskInput, setTaskInput] = useState("");
  const [tasks, setTasks] = useState([]);

  const handleInputChange = (e) => {
    setTaskInput(e.target.value);
  };

  const handleAddTask = () => {
    if (taskInput.trim() !== "") {
      setTasks([...tasks, taskInput]);
      setTaskInput("");
    }
  };
  return (
    <div>
      <h1>Task-6</h1>
      <h2>Todo List</h2>
      <div className="mainDiv">
        <div>
          <input
            type="text"
            value={taskInput}
            onChange={handleInputChange}
            placeholder="Add new task"
          />
        </div>
        <button onClick={handleAddTask}>Add Task</button>
        <ul>
          {tasks.map((task, index) => (
            <li key={index}>{task}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Task6;
