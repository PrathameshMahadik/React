import { useContext } from "react";
import { CartContext } from "./Shopping";

const ShoppingCart = () => {
  const { cartItems, removeFromCart, getTotalPrice } = useContext(CartContext);

  return (
    <div>
      <h2>Shopping Cart</h2>
      <ul>
        {cartItems.map((item) => (
          <li key={item.id}>
            {item.name} - ${item.price}
            <button onClick={() => removeFromCart(item.id)}>Remove</button>
          </li>
        ))}
      </ul>
      <p>Total Price: ${getTotalPrice()}</p>
    </div>
  );
};
export default ShoppingCart;
