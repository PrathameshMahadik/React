/* 8.set up a GraphQL client library like Apollo Client. 
Create a simple component that uses the client to fetch and display data from a GraphQL API. */
import React from "react";
import { useQuery, gql } from "@apollo/client";

const MyQuery = gql`
  query {
    countries {
      name
      phone
      currency
    }
  }
`;

const Task8 = () => {
  const { error, data, loading } = useQuery(MyQuery);

  if (loading) return "Loading...";
  if (error) return <h2 className="error">{error.message}</h2>;

  return (
    <>
      <h2>GraphQl Apollo Client</h2>
      <div>
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
export default Task8;
