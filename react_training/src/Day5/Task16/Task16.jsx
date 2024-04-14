/* Develop an HOC named withDataFetching that fetches data from an API 
and passes it as props to a component. Use this HOC to retrieve and display data in a component. */
import React from "react";
import withDataFetching from "../Components/withDataFetching";

const Task16 = ({ data }) => {
  return (
    <>
      <h2>HOC API</h2>
      <div className="grid">
        {data.slice(0, 20).map((post) => {
          const { id, title, body } = post;
          return (
            <div className="card" key={id}>
              <h2>{title.toUpperCase()}</h2>
              <p>{body.slice(0, 50).toUpperCase()}</p>
            </div>
          );
        })}
      </div>
    </>
  );
};
export default withDataFetching(Task16);
