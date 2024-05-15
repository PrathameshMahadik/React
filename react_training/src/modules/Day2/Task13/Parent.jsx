import React, { useState, useCallback } from 'react';
import Child from './Child';

const Parent = () => {
  const [count, setCount] = useState(0);
  const incrementCount = useCallback(() => {
    setCount(prevCount => prevCount + 1);
  }, []);
  const resetCount = () => {
    setCount(0);
  };
  return (
    <div>
      <h1>Parent Component</h1>
      <p>Count: {count}</p>
      <button onClick={incrementCount}>Increment</button>
      <Child count={count} resetCount={resetCount} />
    </div>
  );
};
export default Parent;
