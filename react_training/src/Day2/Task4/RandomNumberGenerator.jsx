/* 4.Create a functional component called RandomNumberGenerator.
Use the useState hook to manage a state variable named randomNumber, initialized to a random number between 1 and 100.
Render the current value of randomNumber.
Add a button that generates a new random number and updates the state when clicked. */
import { useState } from "react";

export default function RandomNumberGenerator() {
  const [number, setNumber] = useState(0);
  function randmGenerator() {
    let num = Math.floor(Math.random() * 100);
    console.log(num);
    setNumber(num);
  }
  return (
    <div>
      <div>{number}</div>
      <div>
        <button onClick={randmGenerator}>Click Here</button>
      </div>
    </div>
  );
}
