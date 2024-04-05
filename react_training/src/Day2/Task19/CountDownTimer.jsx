import React from "react";
import useTimer from "./useTimer";

const CountDownTimer = () => {
  const { time, Start, Pause, isActive, Reset } = useTimer(10);

  return (
    <>
      <h1>CountDownTimer Custom Hook</h1>
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
};
export default CountDownTimer;
