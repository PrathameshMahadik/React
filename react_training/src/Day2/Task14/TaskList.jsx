/* create a component that displays a list of tasks.
Each task has a "Complete" button.
Implement a feature where clicking the "Complete" button marks the task as completed.
Use the useCallback hook to create dynamic callback functions for each task.
Ensure that clicking the "Complete" button for one task doesn't trigger unnecessary re-renders for other tasks. */

import React, { useCallback, useState } from "react";

function TaskList({ tasks }) {
  const [newArr, setNewArr] = useState(tasks);
  const handleClick = useCallback((index) => {
    setNewArr(
      newArr.filter((item, id) => {
        if (index === id) {
          item.isCompleted = !item.isCompleted;
        }
        return item;
      })
    );
  }, []);

  return (
    <>
    <h1>Task List</h1>
    <ul>
      {newArr?.map((task, index) => (
        <li key={task.name}>
          {task.name}
          <button onClick={() => handleClick(index)}>
            {task.isCompleted ? "Completed" : "Incomplete"}
          </button>
        </li>
      ))}
    </ul>
    </>
  );
}

export default TaskList;
