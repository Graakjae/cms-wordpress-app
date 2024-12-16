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
  if (!cartContext) {
    throw new Error("CartContext must be used within a CartProvider");
  }

  const { cart, setCart } = cartContext;
  const { removeFromCart } = useCart();
  const [clientCart, setClientCart] = useState<CartItem[]>([]);
  const [isRemoving, setIsRemoving] = useState(false);

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

  return (
    <div className="mt-[120px] xl:mt-[200px] max-w-[1440px] mx-auto px-4 sm:px-6 md:px-8 min-h-[100vh]">
      <Link
        className="group flex gap-2 items-center text-[16px] hover:text-PrimaryGreen"
        href="/produkter"
      >
        <ChevronLeft />
        Tilbage til produkter
      </Link>
      <div className="flex items-center gap-4 mb-[30px] mt-[40px]">
        <h1 className="text-[24px] xl:text-[32px] font-semibold">Din kurv</h1>
        <p className="text-[20px] font-light">( {clientCart?.length} varer )</p>
      </div>
      <div className="flex flex-col xl:flex-row justify-between gap-10">
        <div className="w-full xl:w-[60%] ">
          <div className="flex justify-between border-t border-b border-[#C7C7C7] py-[25px]">
            <div className="w-[35px] xl:w-[165px]"></div>
            <p className="w-[110px] xl:w-[250px] text-[14px] font-semibold">
              Produkter
            </p>
            <p className="w-[60px] xl:w-[100px] text-[14px] font-semibold">
              Pris
            </p>
            <p className="w-[60px] xl:w-[100px] text-[14px] font-semibold">
              Antal
            </p>
            <p className="w-[60px] xl:w-[100px] text-[14px] font-semibold">
              Subtotal
            </p>
          </div>
          {clientCart.map((item) => (
            <div
              key={item.id}
              className="flex justify-between items-center border-b border-[#C7C7C7] py-[30px]"
            >
              <div className="w-[35px] xl:w-[165px] flex gap-[30px] items-center">
                <div>
                  {isRemoving && (
                    <div className="absolute  bg-white shadow-md z-10 rounded-[20px] p-2 mb-[10px] translate-y-[-22px] translate-x-[14px] ">
                      <p> Er du sikker på du vil fjerne denne vare?</p>
                      <div className="flex gap-4 justify-center">
                        <p
                          className="cursor-pointer"
                          onClick={() => handleRemoveFromCart(item.id)}
                        >
                          Ja
                        </p>
                        <p
                          className="cursor-pointer"
                          onClick={() => setIsRemoving(false)}
                        >
                          Nej
                        </p>
                      </div>
                    </div>
                  )}
                  <div
                    className="cursor-pointer"
                    onClick={() => setIsRemoving(!isRemoving)}
                  >
                    <CrossIcon />
                  </div>
                </div>
                <Image
                  src={item?.image}
                  alt={item.name}
                  width={130}
                  height={130}
                  className="hidden xl:block object-cover w-[130px] h-[130px]"
                />
              </div>
              <div className="flex flex-col justify-center">
                <p className="w-[110px] xl:w-[250px] text-[16px] font-semibold">
                  {item.name}
                </p>
                <Image
                  src={item?.image}
                  alt={item.name}
                  width={100}
                  height={100}
                  className="xl:hidden object-cover w-[100px] h-[100px]"
                />
              </div>
              <p className="w-[60px] xl:w-[100px] text-[14px]">{item.price}</p>
              <div className="w-[60px] xl:w-[100px]">
                <input
                  type="number"
                  value={item.quantity}
                  onChange={(e) => {
                    const value = Math.max(1, parseInt(e.target.value));
                    handleQuantityChange(item.id, value);
                  }}
                  className="w-[57px] h-[36px] text-[14px] border border-[#C7C7C7] text-center"
                />
              </div>
              <p className="w-[60px] xl:w-[100px] text-[14px] font-semibold">
                {isNaN(item.quantity * parseFloat(item.price))
                  ? 0
                  : item.quantity * parseFloat(item.price) + " DKK"}
              </p>
            </div>
          ))}
        </div>
        <div className="w-full xl:w-[40%] bg-gray-100 px-[37px] py-[25px]">
          <p className="text-[24px] font-semibold mb-[35px]">Samlet beløb</p>
          <div className="flex justify-between border-b border-[#C7C7C7] pb-[15px]">
            <p>Subtotal</p>
            <p>*Total pris*</p>
          </div>
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
          <Link href="/kassen">
            <Button size="lg">Videre til kassen</Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
