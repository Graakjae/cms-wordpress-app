"use client";
import { useEffect, useState } from "react";
import { useCart } from "./useCart";
import ShoppingBagIcon from "@/components/icons/ShoppingBagIcon";
import Link from "next/link";

interface CartProps {
  pathName?: string;
}

const Cart: React.FC<CartProps> = ({ pathName }) => {
  const { cart } = useCart();
  const [totalQuantity, setTotalQuantity] = useState(0);

  useEffect(() => {
    // Calculate the total quantity of all items in the cart
    const total = cart.reduce((total, item) => total + item.quantity, 0);
    setTotalQuantity(total);
  }, [cart]);

  return (
    <Link href="/kurv" className="relative pr-[7px] pt-[7px] mt-[-7px]">
      <ShoppingBagIcon pathName={pathName || ""} />
      <div className="absolute right-0 top-0">
        <div className="bg-PrimaryBeige w-[19px] h-[19px] rounded-full flex justify-center items-center">
          <p className="cursor-pointer">{totalQuantity}</p>
        </div>
      </div>
    </Link>
  );
};

export default Cart;
