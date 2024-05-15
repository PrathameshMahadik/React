/* Create a React component named Counter that displays a number and two buttons,
 one for incrementing the number and another for decrementing it. 
 Write tests using React Testing Library to ensure that the component behaves as expected. */
import React, { useState } from "react";

const Task3 = () => {
  const [count, setCount] = useState(0);
  return (
    <>
      <h2>Counter: {count}</h2>
      <div className="counter">
        <button onClick={() => setCount(count + 1)}>Increment</button>
        <button onClick={() => setCount(count - 1)}>Decrement</button>
      </div>
    </>
  );
};
export default Task3;
