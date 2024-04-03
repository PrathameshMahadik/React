import React from "react";
import useTimer from "./useTimer";

function CountDownTimer() {
  const { time, setTime, Start, Pause, isActive, Reset } = useTimer(10);

  return (
    <>
      <p>Timer: {time} seconds</p>
      <button onClick={Start} disabled={isActive}>
        Start
      </button>
      <button onClick={Pause} disabled={!isActive}>
        Pause
      </button>
      <button onClick={Reset}>Reset</button>
    </>
  );
}
export default CountDownTimer;
