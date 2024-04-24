/* Create an HOC named withAuth that restricts access to a specific 
component to authenticated users only. Implement this HOC on a sample 
component and demonstrate how it protects routes. */
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Login, Protected, About } from "../Components";

const Task14 = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route element={<Protected />}>
          <Route path="/about" element={<About />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Task14;
