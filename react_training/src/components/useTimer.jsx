/* Build a custom hook named useTimer for creating countdown timers.
Create a useTimer hook that takes a countdown duration as a parameter.
Use setInterval to decrement the timer at regular intervals.
Return the current timer value and methods to start, pause, and reset the timer.
Develop a component that utilizes the useTimer hook to display and control a countdown. */
import { useState, useEffect } from "react";

const useTimer = (initialTime) => {
  const [time, setTime] = useState(initialTime);
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    let id;
    if (!isActive || time <= 0) {
      clearInterval(id);
    } else {
      id = setInterval(() => {
        setTime((prev) => prev - 1);
      }, 1000);
    }
    return () => clearInterval(id);
  }, [time, isActive]);
  const Start = () => {
    setIsActive(true);
  };
  const Pause = () => {
    setIsActive(false);
  };
  const Reset = () => {
    setTime(initialTime);
  };

  return { time, setTime, Start, Pause, isActive, Reset };
};
export default useTimer;
