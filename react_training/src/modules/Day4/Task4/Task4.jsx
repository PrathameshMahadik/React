import React, { useState } from "react";
import '../../../css/Task41.css'

const Task4 = () => {
  const [password, setPassword] = useState("");
  const [checkPassword, setCheckPassword] = useState("");
  return (
    <div className="mainDiv">
      <h1>Task-4</h1>
      <label htmlFor="password">
        Enter Password :{" "}
        <input
          type="password"
          name="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </label>
      <label htmlFor="password">
        Validate Password :{" "}
        <input
          type="password"
          name="confirmPassword"
          value={checkPassword}
          onChange={(e) => setCheckPassword(e.target.value)}
        />
      </label>
      <button type="submit" disabled={!(password === checkPassword)}>
        Submit
      </button>
    </div>
  );
};

export default Task4;
