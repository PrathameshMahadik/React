import React, { useState } from "react";

const Task4 = () => {
  const [password, setPassword] = useState("");
  const [checkPassword, setCheckPassword] = useState("");
  return (
    <div>
      <label htmlFor="password">
        Enter Password :{" "}
        <input
          type="password"
          name=""
          id=""
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </label>
      <label htmlFor="password">
        Validate Password :{" "}
        <input
          type="password"
          name=""
          id=""
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
