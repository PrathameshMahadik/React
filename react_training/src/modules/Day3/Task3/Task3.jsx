/* 3.creat pages: Home and About.
Implement routing using React Router DOM.
Create navigation links to Routes between the Home and About pages.
Display appropriate content on each page.
Add a "404 Not Found" page for any invalid routes. */
import React from "react";
import { BrowserRouter, Routes } from "react-router-dom";
import { routes, renderRoutes } from "../../../Router/Task3";

const Task3 = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          {renderRoutes(routes)}
        </Routes>
      </BrowserRouter>
    </div>
  );
};
export default Task3;
