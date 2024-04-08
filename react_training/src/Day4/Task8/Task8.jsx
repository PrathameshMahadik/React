/* 8.Create a temperature converter component with two input fields: one for Celsius and one for Fahrenheit. 
Implement controlled components for both inputs. 
When the user enters a value in one input, the other input should update with the converted temperature. */
import React, { useState } from "react";
const Task8 = () => {
  const [celsius, setCelsius] = useState("");
  const [fahrenheit, setFahrenheit] = useState("");

  const handleCelsiusChange = (e) => {
    const value = e.target.value;
    setCelsius(value);
    setFahrenheit(((parseFloat(value) * 9) / 5 + 32).toFixed(2));
  };

  const handleFahrenheitChange = (e) => {
    const value = e.target.value;
    setFahrenheit(value);
    setCelsius((((parseFloat(value) - 32) * 5) / 9).toFixed(2));
  };

  return (
    <div>
        <h1>Task-8</h1>
      <h2>Temperature Converter</h2>
      <div>
        <label>Celsius:</label>
        <input
          type="number"
          value={celsius}
          onChange={handleCelsiusChange}
          placeholder="Enter temperature in Celsius"
        />
      </div>
      <div>
        <label>Fahrenheit:</label>
        <input
          type="number"
          value={fahrenheit}
          onChange={handleFahrenheitChange}
          placeholder="Enter temperature in Fahrenheit"
        />
      </div>
    </div>
  );
}

export default Task8;
