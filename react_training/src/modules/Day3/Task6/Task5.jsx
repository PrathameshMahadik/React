/* 6.Create a list of items (e.g., products, articles) in your application.
Implement dynamic routing to display details for each item when clicked.
Create a route parameter that represents the item's ID in the URL (e.g., "/products/:id").
Fetch item details based on the route parameter and display them on the detail page.
Add a "Go Back" button on the detail page to return to the list. */
import React from "react";
import { BrowserRouter, Routes } from "react-router-dom";
import { routes, renderRoutes } from "../../../Router/Task5";

const Links = () => {
  return (
    <>
      <div>Ques6</div>
      <BrowserRouter>
        <Routes>{renderRoutes(routes)}</Routes>
      </BrowserRouter>
    </>
  );
};
export default Links;
