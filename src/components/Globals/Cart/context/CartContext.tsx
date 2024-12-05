"use client";

import { createContext, useState, useEffect, ReactNode } from "react";

export interface CartItem {
  id: string;
  product_id: string;
  name: string;
  price: string;
  quantity: number;
  image: string;
}

interface CartContextType {
  cart: CartItem[];
  addToCart: (
    id: string,
    productId: string,
    productName: string,
    productPrice: string,
    quantity: number,
    productImage: string
  ) => void;
  removeFromCart: (productId: string) => void;
  clearCart: () => void;
  setCart: React.Dispatch<React.SetStateAction<CartItem[]>>;
}

export const CartContext = createContext<CartContextType | undefined>(
  undefined
);

interface CartProviderProps {
  children: ReactNode;
}

export const CartProvider = ({ children }: CartProviderProps) => {
  // Initialize cart state from localStorage, if available
  const [cart, setCart] = useState<CartItem[]>(() => {
    if (typeof window !== "undefined") {
      const storedCart = localStorage.getItem("cart");
      return storedCart ? JSON.parse(storedCart) : [];
    }
    return [];
  });

  // Function to clear the cart
  const clearCart = () => {
    setCart([]);
    if (typeof window !== "undefined") {
      localStorage.removeItem("cart");
    }
  };

  // Function to save the cart in localStorage
  const saveCartToLocalStorage = (cart: CartItem[]) => {
    if (typeof window !== "undefined") {
      localStorage.setItem("cart", JSON.stringify(cart));
    }
  };

  const addToCart = (
    id: string,
    productId: string,
    productName: string,
    productPrice: string,
    quantity: number,
    productImage: string
  ) => {
    setCart((prevCart) => {
      const itemIndex = prevCart.findIndex((item) => item.id === id);
      let updatedCart;
      if (itemIndex !== -1) {
        updatedCart = [...prevCart];
        updatedCart[itemIndex] = {
          ...updatedCart[itemIndex],
          quantity: updatedCart[itemIndex].quantity + quantity,
        };
      } else {
        updatedCart = [
          ...prevCart,
          {
            id: id,
            product_id: productId,
            name: productName,
            price: productPrice,
            quantity,
            image: productImage,
          },
        ];
      }

      // Save the updated cart to localStorage
      saveCartToLocalStorage(updatedCart);

      return updatedCart;
    });
  };

  // Function to remove an item from the cart
  const removeFromCart = (productId: string) => {
    setCart((prevCart) => {
      const updatedCart = prevCart.filter((item) => item.id !== productId);

      // Save the updated cart to localStorage
      saveCartToLocalStorage(updatedCart);

      return updatedCart;
    });
  };

  // Effect to load the cart from localStorage when the component mounts
  useEffect(() => {
    if (typeof window !== "undefined") {
      const storedCart = localStorage.getItem("cart");
      if (storedCart) {
        setCart(JSON.parse(storedCart));
      }
    }
  }, []);

  return (
    <CartContext.Provider
      value={{ cart, addToCart, removeFromCart, clearCart, setCart }}
    >
      {children}
    </CartContext.Provider>
  );
};
