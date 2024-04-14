/* 5.Create a React component that fetches data from a public API (e.g., JSONPlaceholder)
using Axios and displays it on the page. */
import React, { useState, useEffect } from "react";
import axios from "axios";

const Task5 = () => {
  const [data, setData] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products")
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
      <section className="container">
        {data.map((x, index) => {
          return (
            <div className="card" key={`name_${index}`}>
              <div>
                <img
                  src={x.image}
                  alt="product_picture"
                  height={150}
                  width={150}
                />
              </div>
              <div className="info">
                <h4>{x.title}</h4>
                <p>PRICE : {x.price}</p>
              </div>
            </div>
          );
        })}
      </section>
    </>
  );
};
export default Task5;
