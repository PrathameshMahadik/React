import React, { useState } from "react";
import useLocalStorage from "./useLocalStorage";

const Storage = () => {
  const [value, setValue, removeItem] = useLocalStorage(
    "Welcome",
    "useLocalStorage"
  );
  const [data, setData] = useState("");
  return (
    <div>
      <h1>useLocalStorage - Custom Hook</h1>
      <h1>{value}</h1>
      <label htmlFor="value">Change Value</label>
      <input type="text" onChange={(e) => setData(e.target.value)} />
      <button onClick={() => setValue(data)}>Set Value</button>
      <button onClick={() => removeItem(data)}>Delete Value</button>
    </div>
  );
};
export default Storage;
