/* Develop an HOC named withDataFetching that fetches data from an API 
and passes it as props to a component. Use this HOC to retrieve and display data in a component. */
import React from "react";
import { withDataFetching, Data } from "../Components";

const Task16 = ({ data }) => {
  return (
    <>
      <h2>HOC API</h2>
      <Data data={data} />
    </>
  );
};
export default withDataFetching(Task16);
