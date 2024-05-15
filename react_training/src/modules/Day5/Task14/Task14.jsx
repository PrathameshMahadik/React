/* Create an HOC named withAuth that restricts access to a specific 
component to authenticated users only. Implement this HOC on a sample 
component and demonstrate how it protects routes. */
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Protected, About } from "../../../components";
import Login from "../../../components/LoginTask4";

const Task14 = () => {
  return (
    <>
      <h1>Task14</h1>
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route element={<Protected />}>
            <Route path="/about" element={<About />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default Task14;
