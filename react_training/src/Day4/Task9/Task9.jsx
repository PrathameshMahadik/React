import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Layout, Info, Profile } from "../Components/Task9/Task9";

const Task9 = () => {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/Info" element={<Info />} />
          <Route path="/Profile" element={<Profile />} />
        </Routes>
      </Layout>
    </Router>
  );
};
export default Task9;
