/* 3.Create a component with controlled input field and a button. When the user enters a specific value into the input (e.g., "show"), 
a new component should be rendered below the input, displaying a message. 
Otherwise, nothing should be displayed.import React, { useState } from "react"; */
import { useState } from "react";

const Task3 = () => {
  const [inputValue, setInputValue] = useState("");
  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

  const renderMessage = () => {
    if (inputValue.toLowerCase() === "show") {
      return <div>This is the message you wanted to show.</div>;
    }
    return null;
  };

  return (
    <div>
        <h1>Task-3</h1>
      <input
        type="text"
        value={inputValue}
        onChange={handleChange}
        placeholder="Enter 'show' to display message"
      />
      {renderMessage()}
    </div>
  );
}

export default Task3;
