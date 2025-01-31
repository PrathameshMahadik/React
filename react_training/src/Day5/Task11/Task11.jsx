/* Demonstrate how to handle errors in GraphQL queries and mutations. 
Create a React component that displays error messages when GraphQL requests 
fail and provides a way for users to retry the request. */
import React from "react";
import { useQuery } from "@apollo/client";
import { GET_COUNTRY } from "../GraphQl/Query";

const Task11 = () => {
  const { error, data, loading } = useQuery(GET_COUNTRY);

  if (loading) return "Loading...";
  if (error)
    return (
      <>
        <h2>GraphQL Error Handling</h2>
        <h2 className="error">{error.message}</h2>
      </>
    );

  return (
    <>
      <h2>GraphQl Error handling</h2>
      <div className="graphQlApi">
        {data.countries.slice(0, 12).map((countries) => {
          return (
            <div>
              <h2>{countries.name}</h2>
              <h3>{countries.phone}</h3>
              <h3>{countries.currency}</h3>
            </div>
          );
        })}
      </div>
    </>
  );
};
export default Task11;
