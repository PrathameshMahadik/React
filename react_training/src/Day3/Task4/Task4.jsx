/* 4.Enhance the previous application by adding protected routes that require authentication.
Create a login page with a form that accepts a username and password.
Implement authentication logic (e.g., hardcode a username and password for now).
Secure the About page so that it can only be accessed by authenticated users.
Redirect unauthenticated users to the login page.
Display a message on the Home page welcoming the authenticated user. */
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { renderRoutes, routes } from "../Router/Task4";
import { PrivateRoutes } from "../Components";

const Links4 = () => {
  return (
    <div>
      <Router>
        <Routes>
          <Route element={<PrivateRoutes />}>{renderRoutes(routes)}</Route>
        </Routes>
      </Router>
    </div>
  );
};

export default Links4;
