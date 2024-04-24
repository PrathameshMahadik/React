/*5.Construct a select dropdown menu with multiple options. Control the selected option using state. 
When an option is selected, display a message showing the selected value.*/
import React, { useState } from "react";
import { options } from "../mockData/Task5";

const Task5 = () => {
  const [selectedOption, setSelectedOption] = useState("");
  const handleChange = (e) => {
    setSelectedOption(e.target.value);
  };
  return (
    <div>
      <h1>Task-5</h1>
      <select value={selectedOption} onChange={handleChange}>
        {options.map((option, index) => (
          <option key={index} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
      {selectedOption && <p>You selected: {selectedOption}</p>}
    </div>
  );
};
export default Task5;
