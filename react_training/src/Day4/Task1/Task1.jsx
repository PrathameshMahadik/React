/* 1.Create a React component with an input field. 
Implement it as a controlled component where the input value is controlled by the component's state. 
When the user types into the input field, the component's state should update accordingly. */
import React, { useState } from "react";

const Task1 = () => {
  const [inputValue, setInputValue] = useState("");
  return (
    <div>
      <h1>Task1</h1>
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        placeholder="Type Here..."
      />
      <p>Input value: {inputValue}</p>
    </div>
  );
};

export default Task1;
