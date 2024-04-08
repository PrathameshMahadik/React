/*5.Construct a select dropdown menu with multiple options. Control the selected option using state. 
When an option is selected, display a message showing the selected value.*/
import React, { useState } from "react";

const Task5 = () => {
  const [selectedOption, setSelectedOption] = useState("");
  const handleChange = (e) => {
    setSelectedOption(e.target.value);
  };
  return (
    <div>
      <h1>Task-5</h1>
      <select value={selectedOption} onChange={handleChange}>
        <option value="">Select an option</option>
        <option value="option1">Option 1</option>
        <option value="option2">Option 2</option>
        <option value="option3">Option 3</option>
      </select>
      {selectedOption && <p>You selected: {selectedOption}</p>}
    </div>
  );
};
export default Task5;
