"use client";

import { useContext, useEffect, useState } from "react";
import { CartContext, CartItem } from "../Globals/Cart/context/CartContext";
import { useCart } from "../Globals/Cart/useCart";
import Image from "next/image";
import Link from "next/link";
import { Button } from "../ui/button";
import ChevronLeft from "../icons/ChevronLeft";
import CrossIcon from "../icons/Cross";

export default function Kurv() {
  const cartContext = useContext(CartContext);
  // Add a guard clause to handle the case where the context is undefined
  if (!cartContext) {
    throw new Error("CartContext must be used within a CartProvider");
  }

  const { cart, clearCart, setCart } = cartContext;
  const { removeFromCart } = useCart();
  const [clientCart, setClientCart] = useState<CartItem[]>([]);

  useEffect(() => {
    setClientCart(cart);
  }, [cart]);

  const handleRemoveFromCart = (productId: string) => {
    removeFromCart(productId);
  };

  const handleQuantityChange = (productId: string, newQuantity: number) => {
    setCart((prevCart) => {
      const updatedCart = prevCart.map((item) =>
        item.id === productId ? { ...item, quantity: newQuantity } : item
      );
      localStorage.setItem("cart", JSON.stringify(updatedCart));
      return updatedCart;
    });
  };

  const handleCheckout = async () => {
    const cartItems = cart.map((item) => ({
      product_id: item.id,
      quantity: item.quantity,
    }));

    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_WORDPRESS_API_URL}/wp-json/custom-api/v1/checkout`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ items: cartItems }),
        }
      );

      const data = await response.json();

      if (response.ok) {
        console.log("Order created successfully:", data);
        clearCart(); // Clears the cart after successful checkout
        // Optionally navigate to a success page, e.g., router.push('/success')
      } else {
        console.log("Failed to create order:", data);
        console.error("Failed to create order:", data);
      }
    } catch (error) {
      console.log("Error during checkout:", error);
      console.error("Error during checkout:", error);
    }
  };

  return (
    <div className="mt-[200px] max-w-[1440px] mx-auto px-4 sm:px-6 md:px-8 min-h-[100vh]">
      <Link
        className="group flex gap-2 items-center text-[16px] hover:text-PrimaryGreen"
        href="/produkter"
      >
        <ChevronLeft />
        Tilbage til produkter
      </Link>
      <div className="flex items-center gap-4 mb-[30px] mt-[40px]">
        <h1 className="text-[32px] font-semibold">Din kurv</h1>
        <p className="text-[20px] font-light">( {clientCart?.length} varer )</p>
      </div>
      <div className="flex justify-between gap-10">
        <div className="w-[60%] ">
          <div className="flex justify-between border-t border-b border-[#C7C7C7] py-[25px]">
            <div className="w-[165px]"></div>
            <p className="w-[250px] text-[14px] font-semibold">Produkter</p>
            <p className="w-[100px] text-[14px] font-semibold">Pris</p>
            <p className="w-[100px] text-[14px] font-semibold">Antal</p>
            <p className="w-[100px] text-[14px] font-semibold">Subtotal</p>
          </div>
          {clientCart.map((item) => (
            <div
              key={item.id}
              className="flex justify-between items-center border-b border-[#C7C7C7] py-[30px]"
            >
              <div className="w-[165px] flex gap-[30px] items-center">
                <div
                  className="cursor-pointer"
                  onClick={() => handleRemoveFromCart(item.id)}
                >
                  <CrossIcon />
                </div>
                <Image
                  src={item?.image}
                  alt={item.name}
                  width={130}
                  height={130}
                  className="object-cover w-[130px] h-[130px]"
                />
              </div>
              <p className="w-[250px] text-[16px] font-semibold">{item.name}</p>
              <p className="w-[100px] text-[14px]">{item.price}</p>
              <div className="w-[100px]">
                <input
                  type="number"
                  value={item.quantity}
                  onChange={(e) =>
                    handleQuantityChange(item.id, parseInt(e.target.value))
                  }
                  className="w-[57px] h-[36px] text-[14px] border border-[#C7C7C7] text-center"
                />
              </div>
              <p className="w-[100px] text-[14px] font-semibold">
                {isNaN(item.quantity * parseFloat(item.price))
                  ? 0
                  : item.quantity * parseFloat(item.price) + " DKK"}
              </p>
            </div>
          ))}
        </div>
        <div className="w-[40%] bg-gray-100 px-[37px] py-[25px]">
          <p className="text-[24px] font-semibold mb-[35px]">Samlet beløb</p>
          <div className="flex justify-between border-b border-[#C7C7C7] pb-[15px]">
            <p>Subtotal</p>
            <p>*Total pris*</p>
          </div>
          <p className="mt-[15px]">Forsendelse</p>
          <div className="flex justify-between mb-[20px]">
            <p className="text-[#767676] w-[40%]">
              Forsendelse vil blive opdateret i kassen
            </p>
            <div>
              <div className="flex items-center justify-end">
                <p>GLS - privat adresse</p>
                <input
                  type="radio"
                  placeholder="Forsendelse"
                  className="w-[20px] h-[20px] border-[#C7C7C7] ml-4"
                />
              </div>
              <div className="flex items-center justify-end">
                <p>GLS - udleveringssted</p>
                <input
                  type="radio"
                  placeholder="Forsendelse"
                  className="w-[20px] h-[20px] border-[#C7C7C7] ml-4"
                />
              </div>
            </div>
          </div>
          <div className="flex justify-between border-t border-[#C7C7C7] pt-[15px] font-semibold mb-[55px]">
            <p>Total</p>
            <p>*Total pris*</p>
          </div>
          <Button size="lg">Videre til kassen</Button>
        </div>
      </div>
      {/* <button onClick={handleCheckout}>Place Order</button> */}
    </div>
  );
}
