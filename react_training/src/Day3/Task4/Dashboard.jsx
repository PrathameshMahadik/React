import React from "react";
import Que5Mneu from "./Que5Menu";
import { Outlet } from "react-router-dom";
const Dashboard = () => {
  return (
    <div>
      <Que5Mneu />
      <Outlet />
    </div>
  );
};

export default Dashboard;
