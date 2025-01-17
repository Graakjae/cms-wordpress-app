"use client";
import { useEffect, useState } from "react";
import { useCart } from "./useCart";
import ShoppingBagIcon from "@/components/icons/ShoppingBagIcon";
import Link from "next/link";
import { TransitionLink } from "@/utils/TransitionLink";

interface CartProps {
  pathName?: string;
}

const Cart: React.FC<CartProps> = ({ pathName }) => {
  const { cart } = useCart();
  const [totalQuantity, setTotalQuantity] = useState(0);

  useEffect(() => {
    const total = cart.reduce((total, item) => total + item.quantity, 0);
    setTotalQuantity(total);
  }, [cart]);

  return (
    <TransitionLink
      href="/kurv"
      className="relative pr-[7px] pt-[7px] mt-[-7px] z-[1]"
    >
      <ShoppingBagIcon pathName={pathName || ""} />
      <div className="absolute right-0 top-0">
        <div className="bg-PrimaryBeige w-[19px] h-[19px] rounded-full flex justify-center items-center ">
          <p className="cursor-pointer">
            {isNaN(totalQuantity) ? 0 : totalQuantity}
          </p>
        </div>
      </div>
    </TransitionLink>
  );
};

export default Cart;
