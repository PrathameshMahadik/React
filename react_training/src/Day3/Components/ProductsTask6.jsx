/*Create a list of items (e.g., products, articles) in your application.
Implement dynamic routing to display details for each item when clicked.
Create a route parameter that represents the item's ID in the URL (e.g., "/products/:id").
Fetch item details based on the route parameter and display them on the detail page.
Add a "Go Back" button on the detail page to return to the list.*/
import React from "react";
import { Link } from "react-router-dom";

function Products(props) {
  return (
    <>
      <br />
      <div>Total Products are:</div>
      <br />
      {props.products.map((item, index) => (
        <div key={index}>
          <span style={{ margin: "10px" }}>{item.name}</span>
          <span style={{ margin: "10px" }}>{item.price}</span>
          <Link to={`/products/${item.id}`}>
            <button>Get Details</button>
          </Link>
          <br />
          <br />
        </div>
      ))}
    </>
  );
}

export default Products;
