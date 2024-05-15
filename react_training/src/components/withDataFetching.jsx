import React, { useState, useEffect } from "react";
import axios from "axios";
import { FAKESTORE } from "../constants/url";

const withDataFetching = (WrappedComponent) => {
  function NewComponent() {
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
          <h2>HOC Error Handling!</h2>
          <div className="error">
            <h2>{error}</h2>
          </div>
        </>
      );
    }

    return <WrappedComponent data={data} />;
  }

  return NewComponent;
};

export default withDataFetching;
