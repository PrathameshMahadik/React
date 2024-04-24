import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import withAuth from "./withAuth";

const Protected = (props) => {
  return (
    <>
      {props.isAuthenticated === "true" ? <Outlet /> : <Navigate to="/login" />}
    </>
  );
};
export default withAuth(Protected);
