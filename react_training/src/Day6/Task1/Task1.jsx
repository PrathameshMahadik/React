/* Create a React application that has multiple pages represented as components. 
Implement lazy loading for these components using React's lazy and Suspense features. 
When a user navigates to a particular page, the component should be loaded lazily, 
improving the application's initial loading time. */
import React, { Suspense, lazy } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

const Home = lazy(() => import("../Components/Home"));

const Task1 = () => {
  return (
    <Router>
      <Suspense
        fallback={
          <div>
            <strong>Loading...</strong>
          </div>
        }
      >
        <Routes>
          <Route path="/" element={<Home comment="This is Home Page...." />} />
          <Route
            path="/about"
            element={<Home comment="This is About Page...." />}
          />
        </Routes>
      </Suspense>
    </Router>
  );
};
export default Task1;
