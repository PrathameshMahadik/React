/* 3.creat pages: Home and About.
Implement routing using React Router DOM.
Create navigation links to Routes between the Home and About pages.
Display appropriate content on each page.
Add a "404 Not Found" page for any invalid routes. */
import React from "react";
import { AboutTask3, Home3, Error } from "../Components";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const Task3 = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home3 />} />
          <Route path="/about" element={<AboutTask3 />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};
export default Task3;
