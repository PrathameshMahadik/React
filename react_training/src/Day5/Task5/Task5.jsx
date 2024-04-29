/* 5.Create a React component that fetches data from a public API (e.g., JSONPlaceholder)
using Axios and displays it on the page. */
import React, { useState, useEffect } from "react";
import axios from "axios";
import { FAKESTORE } from "../url";
import { Data } from "../Components/index";

const Task5 = () => {
  const [data, setData] = useState([]);
  const [error, setError] = useState("");
  useEffect(() => {
    axios
      .get(FAKESTORE)
      .then((resp) => {
        setData(resp.data);
      })
      .catch((error) => setError(error.message));
  }, []);
  if (error) {
    return (
      <>
        <h2>Axios Error Handling!</h2>
        <div className="error">
          <h2>{error}</h2>
        </div>
      </>
    );
  }
  return (
    <>
      <h2>Axios API</h2>
      <Data data={data} />
    </>
  );
};
export default Task5;
