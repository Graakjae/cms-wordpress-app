import { useCart } from "./useCart";

const Cart = () => {
  const { cart } = useCart();
  // Calculate the total quantity of all items in the cart
  const totalQuantity = cart.reduce((total, item) => total + item.quantity, 0);
  return (
    <div>
      <h2>{totalQuantity}</h2>
    </div>
  );
};

export default Cart;
