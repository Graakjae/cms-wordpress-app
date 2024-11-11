"use client";
// src/context/CartContext.tsx

import { createContext, useState, useEffect, ReactNode } from "react";

export interface CartItem {
  id: string;
  name: string;
  price: string;
  quantity: number;
}

interface CartContextType {
  cart: CartItem[];
  addToCart: (
    productId: string,
    productName: string,
    productPrice: string,
    quantity: number
  ) => void;
  removeFromCart: (productId: string) => void;
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

  // Function to save the cart in localStorage
  const saveCartToLocalStorage = (cart: CartItem[]) => {
    if (typeof window !== "undefined") {
      localStorage.setItem("cart", JSON.stringify(cart));
    }
  };

  // Function to add items to the cart
  const addToCart = (
    productId: string,
    productName: string,
    productPrice: string,
    quantity: number
  ) => {
    setCart((prevCart) => {
      const itemIndex = prevCart.findIndex((item) => item.id === productId);
      let updatedCart;
      if (itemIndex !== -1) {
        // Update quantity if item exists in cart
        updatedCart = [...prevCart];
        updatedCart[itemIndex] = {
          ...updatedCart[itemIndex],
          quantity: updatedCart[itemIndex].quantity + quantity,
        };
      } else {
        // Add new item to cart
        updatedCart = [
          ...prevCart,
          { id: productId, name: productName, price: productPrice, quantity },
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
    <CartContext.Provider value={{ cart, addToCart, removeFromCart }}>
      {children}
    </CartContext.Provider>
  );
};
