"use client";
import { useEffect, useState } from "react";
import { useCart } from "./useCart";

const Cart = () => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const { cart } = useCart();
  const { removeFromCart } = useCart();
  const [totalQuantity, setTotalQuantity] = useState(0);

  useEffect(() => {
    // Calculate the total quantity of all items in the cart
    const total = cart.reduce((total, item) => total + item.quantity, 0);
    setTotalQuantity(total);
  }, [cart]);
  const handleRemoveFromCart = (productId: string) => {
    removeFromCart(productId);
  };

  return (
    <div className="relative" onClick={() => setIsCartOpen(!isCartOpen)}>
      <h2 className="cursor-pointer">{totalQuantity}</h2>
      {isCartOpen && (
        <div className="absolute bg-white p-4 shadow-lg mx-auto left-1/2 transform -translate-x-1/2">
          {cart.map((item) => (
            <div key={item.id} className="flex justify-between gap-[20px]">
              <h3>{item.name}</h3>
              <p>{item.price}</p>
              <p>{item.quantity}</p>
              <p
                className="cursor-pointer"
                onClick={() => handleRemoveFromCart(item.id)}
              >
                X
              </p>
            </div>
          ))}
          <p>Gå til betaling</p>
        </div>
      )}
    </div>
  );
};

export default Cart;
