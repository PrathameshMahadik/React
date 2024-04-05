import React from "react";
import Que5Menu from "./Que5Menu";
import { Outlet } from "react-router-dom";
const Dashboard = () => {
  return (
    <div>
      <Que5Menu />
      <Outlet />
    </div>
  );
};

export default Dashboard;
