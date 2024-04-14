/* 1.Create a React component that fetches data from a public API (e.g., JSONPlaceholder) 
and displays it on the page. Use the fetch function to make the request. */
import React, { useEffect, useState } from "react";
import "../CSS_Files/index.css";
import CircularProgress from "@mui/material/CircularProgress";

const Task1 = () => {
  const [data, setData] = useState([]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      fetch("https://fakestoreapi.com/products")
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

  return (
    <div>
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
    </div>
  );
};

export default Task1;
