/* 6.Create a list of items (e.g., products, articles) in your application.
Implement dynamic routing to display details for each item when clicked.
Create a route parameter that represents the item's ID in the URL (e.g., "/products/:id").
Fetch item details based on the route parameter and display them on the detail page.
Add a "Go Back" button on the detail page to return to the list. */
import React from "react";
import { Route, BrowserRouter, Routes } from "react-router-dom";
import Products from "./Products";
import { products } from "./products";
import ProductsDetails from "./ProductsDetails";

const Links = () => {
  return (
    <>
      <div>Ques6</div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Products products={products} />}></Route>
          <Route
            path="/products/:id"
            element={<ProductsDetails products={products} />}
          ></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}
export default Links;
