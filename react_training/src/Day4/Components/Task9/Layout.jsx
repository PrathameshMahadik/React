import React, { useState } from "react";
import { AppBar, Toolbar, IconButton, Typography } from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';
import Sidebar from "./Sidebar";

const Layout = ({ children }) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <div>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            edge="start"
            color="inherit"
            aria-label="menu"
            onClick={toggleSidebar}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6">Day4 Task-9</Typography>
        </Toolbar>
      </AppBar>
      <Sidebar open={sidebarOpen} onClose={toggleSidebar} />
      <div style={{ marginLeft: sidebarOpen ? 240 : 0, padding: "20px" }}>
        {children}
      </div>
    </div>
  );
};

export default Layout;
