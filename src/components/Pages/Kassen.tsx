"use client";

import { useContext, useEffect, useState } from "react";
import { CartContext, CartItem } from "../Globals/Cart/context/CartContext";
import { useCart } from "../Globals/Cart/useCart";
import Link from "next/link";
import { Button } from "../ui/button";
import ChevronLeft from "../icons/ChevronLeft";
import { InputCheckout } from "../ui/inputCheckout";

export default function Kassen() {
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
    <div className="mt-[120px] xl:mt-[200px] max-w-[1440px] mx-auto px-4 sm:px-6 md:px-8 min-h-[100vh]">
      <Link
        className="group flex gap-2 items-center text-[16px] hover:text-PrimaryGreen"
        href="/kurv"
      >
        <ChevronLeft />
        Rediger din indkøbskurv
      </Link>
      <div className="flex items-center gap-4 mb-[30px] mt-[40px]">
        <h1 className="text-[24px] xl:text-[32px] font-semibold">
          Faktureringsoplysninger
        </h1>
      </div>
      <div className="flex flex-col xl:flex-row justify-between gap-10">
        <div className="w-full xl:w-[60%] ">
          <div className="flex justify-between w-full gap-[30px]">
            <InputCheckout
              title="Fornavn"
              type="text"
              placeholder="Fornavn"
              className="w-full mb-[20px]"
            />
            <InputCheckout
              title="Efternavn"
              type="text"
              placeholder="Efternavn"
              className="w-full mb-[20px]"
            />
          </div>
          <InputCheckout
            title="Land / Region"
            type="text"
            placeholder="Land"
            className="mb-[25px]"
          />
          <InputCheckout
            title="Adresse"
            type="text"
            placeholder="Adresse"
            className="mb-[25px]"
          />
          <div className="flex justify-between w-full gap-[30px] mb-[25px]">
            <InputCheckout
              title="Postnummer"
              type="text"
              placeholder="Postnummer"
            />
            <InputCheckout title="By" type="text" placeholder="By" />
          </div>
          <div className="flex justify-between w-full gap-[30px] mb-[25px]">
            <InputCheckout title="Email" type="email" placeholder="Email" />
            <InputCheckout
              title="Telefonnummer"
              type="text"
              placeholder="Telefonnummer"
            />
          </div>
          <div className="flex flex-col">
            <label className="text-[14px] font-semibold">
              Eventuelle bemærkninger til ordren
            </label>
            <textarea className="w-full h-[85px] border border-gray-200 bg-transparent px-3 py-1 text-base shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-neutral-950 placeholder:text-neutral-500 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-neutral-950 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm dark:border-neutral-800 dark:file:text-neutral-50 dark:placeholder:text-neutral-400 dark:focus-visible:ring-neutral-300" />
          </div>
        </div>
        <div className="w-full xl:w-[40%] bg-gray-100 px-[37px] py-[25px]">
          <p className="text-[24px] font-semibold mb-[35px]">Din ordre</p>
          <p className="text-[20px] font-light uppercase">
            ( {clientCart?.length} varer i kurven )
          </p>
          {clientCart.map((item) => (
            <div
              key={item.id}
              className="flex justify-between items-center border-b border-[#C7C7C7] py-[30px]"
            >
              <div>
                <p className="font-semibold text-[18px]">{item?.name}</p>
                <p>Antal: {item?.quantity}</p>
              </div>
              <div>
                <p>{item?.price}</p>
                <p>inkl. moms</p>
              </div>
            </div>
          ))}

          <p className="mt-[15px]">Forsendelse</p>
          <div className="flex flex-col md:flex-row justify-between mb-[20px]">
            <p className="text-[#767676] md:w-[40%] mb-[20px] md:mb-0">
              Forsendelse vil blive opdateret i kassen
            </p>
            <div>
              <div className="flex items-center justify-between md:justify-end">
                <p>GLS - privat adresse</p>
                <input
                  type="radio"
                  name="shipping"
                  placeholder="Forsendelse"
                  className="w-[18px] h-[18px] border-[#C7C7C7] ml-4 checked:bg-black"
                />
              </div>
              <div className="flex items-center justify-between md:justify-end">
                <p>GLS - udleveringssted</p>
                <input
                  type="radio"
                  name="shipping"
                  placeholder="Forsendelse"
                  className="w-[18px] h-[18px] border-[#C7C7C7] ml-4 checked:bg-black"
                />
              </div>
            </div>
          </div>
          <div className="flex justify-between border-t border-[#C7C7C7] pt-[15px] font-semibold mb-[55px]">
            <p>Total</p>
            <p>*Total pris*</p>
          </div>
          <Button size="lg">Gå til betaling</Button>
        </div>
      </div>
      {/* <button onClick={handleCheckout}>Place Order</button> */}
    </div>
  );
}
