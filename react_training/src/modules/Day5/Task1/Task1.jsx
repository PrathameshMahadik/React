/* 1.Create a React component that fetches data from a public API (e.g., JSONPlaceholder) 
and displays it on the page. Use the fetch function to make the request. */
import React, { useEffect, useState } from "react";
import "../../../css/Day5.css";
import { FAKESTORE } from "../../../constants/url";
import CircularProgress from "@mui/material/CircularProgress/CircularProgress";
import { Data } from "../../../components";

const Task1 = () => {
  const [data, setData] = useState([]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      fetch(FAKESTORE)
        .then((data) => {
          if (!data.ok) {
            throw Error("Could not fetch the data for that resource");
          } else {
            data.json().then((resp) => {
              setData(resp);
              setLoading(false);
            });
          }
        })
        .catch((error) => {
          setError(error.message);
          setLoading(false);
        });
    }, 3000);
  });
  if (loading) {
    return (
      <div className="spinner">
        <CircularProgress />
      </div>
    );
  }
  if (error) {
    return (
      <>
        <h2>Error Handling!</h2>
        <div className="error">
          <h2>{error}</h2>
        </div>
      </>
    );
  }

  return <Data data={data} />;
};

export default Task1;
