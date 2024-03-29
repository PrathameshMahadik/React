/* 5.Create a functional component called CounterWithStep.
Use the useState hook to manage a state variable named count initialized to 0.
Render the current value of count in a <p> element.
Add two buttons, one for incrementing the count and another for decrementing it.
Add an input field where the user can specify a step value.
Update the count using the specified step value when the buttons are clicked. */
import React, { useState } from "react";

export default function CounterWithStep() {
  const [count, setCount] = useState(0);
  const [step, setStep] = useState(1);
  function handleStepChange(e) {
    setStep(e.target.value);
  }
  return (
    <div>
      <p>{count}</p>
      <p>
        <label>Enter Step:</label>
        <input
          type="number"
          id="age"
          value={step}
          onChange={handleStepChange}
        />
      </p>
      <div>
        <button onClick={() => setCount(count + parseInt(step))}>
          Increment
        </button>
        <button onClick={() => setCount(count - parseInt(step))}>
          Decrement
        </button>
      </div>
    </div>
  );
}
