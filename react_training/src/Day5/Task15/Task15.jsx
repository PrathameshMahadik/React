/* Build an HOC called withLogger that logs the events of a component 
(e.g., mounting, unmounting, updating). Apply this HOC to a component and display the logs in the browser console. */
import React from "react";
import { withLogger } from "../Components/index";

const Task15 = ({ increment, count }) => {
  return (
    <>
      <h1>Task 15</h1>
      <h2>HOC Mounting, Unmounting, Update</h2>
      <div className="withLogger">
        <button onClick={increment}>
          <strong> {count}</strong> Increment
        </button>
      </div>
    </>
  );
};

export default withLogger(Task15);
