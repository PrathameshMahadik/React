import { useContext } from "react";
import { products } from "../MockData/products";
import { CartContext } from "./CartProvider";

const ProductList = () => {
  const { addToCart } = useContext(CartContext);
  return (
    <div>
      <h2>Products</h2>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            {product.name} - ${product.price}
            <button onClick={() => addToCart(product)}>Add to Cart</button>
          </li>
        ))}
      </ul>
    </div>
  );
};
export default ProductList;
