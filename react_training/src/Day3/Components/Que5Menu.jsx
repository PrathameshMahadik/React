/* 5.Extend the application to include nested routes for a more complex user interface.
Create a new section of your application (e.g., a Dashboard) with multiple sub-pages (e.g., Dashboard, Profile, Settings).
Implement nested routing within this section using nested routes.
Add navigation links to switch between the sub-pages within the Dashboard section.
Customize the content displayed on each sub-page. */
import React from "react";
import { Link } from "react-router-dom";
const Que5Mneu = () => {
  return (
    <div>
      <Link to="settings">Settings</Link>
      <Link to="profile"> Profile </Link>
    </div>
  );
};
export default Que5Mneu;
