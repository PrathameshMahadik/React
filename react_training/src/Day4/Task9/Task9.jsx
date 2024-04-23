import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Layout, Info } from "../Components/Task9/Task9";

const Task9 = () => {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/Info" element={<Info title="Info" content="This is the Info page" />} />
          <Route path="/Profile" element={<Info title="Profile" content="This is the Profile page"/>} />
        </Routes>
      </Layout>
    </Router>
  );
};
export default Task9;
