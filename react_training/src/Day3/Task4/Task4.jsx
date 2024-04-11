/* 4.Enhance the previous application by adding protected routes that require authentication.
Create a login page with a form that accepts a username and password.
Implement authentication logic (e.g., hardcode a username and password for now).
Secure the About page so that it can only be accessed by authenticated users.
Redirect unauthenticated users to the login page.
Display a message on the Home page welcoming the authenticated user. */
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import {
  Home4,
  AboutTask4,
  Login4,
  PrivateRoutes,
  Dashboard4,
  Setting,
  Profile,
} from "../Components";
const Links4 = () => {
  return (
    <div>
      <Router>
        <Routes>
          <Route element={<PrivateRoutes />}>
            <Route path="/home" element={<Home4 />} />
            <Route path="/about" element={<AboutTask4 />} />
            <Route path="/dashboard" element={<Dashboard4 />}>
              <Route path="profile" element={<Profile />} />
              <Route path="settings" element={<Setting />} />
            </Route>
          </Route>
          <Route path="/" element={<Login4 />} />
        </Routes>
      </Router>
    </div>
  );
};

export default Links4;
