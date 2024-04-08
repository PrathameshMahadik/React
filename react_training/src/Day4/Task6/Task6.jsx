import React, { useState } from "react";

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
      <div>
        <input
          type="text"
          value={taskInput}
          onChange={handleInputChange}
          placeholder="Add new task"
        />
        <button onClick={handleAddTask}>Add Task</button>
      </div>
      <ul>
        {tasks.map((task, index) => (
          <li key={index}>{task}</li>
        ))}
      </ul>
    </div>
  );
};

export default Task6;
