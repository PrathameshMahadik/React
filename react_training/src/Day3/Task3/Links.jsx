/* 3.creat pages: Home and About.
Implement routing using React Router DOM.
Create navigation links to Routes between the Home and About pages.
Display appropriate content on each page.
Add a "404 Not Found" page for any invalid routes. */
import React from "react";
import About from "./About";
import Home from "./Home";
import Error from '../Components/Error';
import { BrowserRouter, Routes, Route } from "react-router-dom";

const Links = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};
export default Links;
