/* 6.Create a list of items (e.g., products, articles) in your application.
Implement dynamic routing to display details for each item when clicked.
Create a route parameter that represents the item's ID in the URL (e.g., "/products/:id").
Fetch item details based on the route parameter and display them on the detail page.
Add a "Go Back" button on the detail page to return to the list. */
import React from "react";
import { Route, BrowserRouter, Routes } from "react-router-dom";
import { products } from "../Components/products";
import { ProductsTask6, ProductsDetails6 } from "../Components";

const Links = () => {
  return (
    <>
      <div>Ques6</div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<ProductsTask6 products={products} />}></Route>
          <Route
            path="/products/:id"
            element={<ProductsDetails6 products={products} />}
          ></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}
export default Links;
