/* 6.Create a functional component called Clock.
Use the useState hook to manage a state variable named time initialized to the current time.
Use the useEffect hook to update the time state every second to display the current time.
Render the current time in a <p> element.
When the component unmounts, clear the interval to stop updating the time. */
import { useState, useEffect } from "react";
const Clock = () => {
  const [time, setTime] = useState(new Date().toLocaleTimeString());
  useEffect(() => {
    setInterval(() => {
      setTime(new Date().toLocaleTimeString());
    }, 1000);
  }, []);
  return (
    <div>
      <h1>Clock</h1>
      <h2>Time is - {time}.</h2>
    </div>
  );
}
export default Clock;
