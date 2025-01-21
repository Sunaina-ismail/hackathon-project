'use client';
import React, { createContext, useContext, useState, useEffect, ReactNode } from "react";

interface CartItem {
  id: string;
  name: string;
  price: number;
  quantity: number;
  color: string;
  imageUrl: string;
  inventory: number; 
}

interface CartContextType {
  cartItems: CartItem[];
  addToCart: (item: CartItem) => void;
  removeFromCart: (id: string) => void;
  clearCart: () => void;
  updateQuantity: (id: string, quantity: number) => void; // Method to update quantity
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) throw new Error("useCart must be used within a CartProvider");
  return context;
};

export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  useEffect(() => {
    const storedCart = localStorage.getItem("cart");
    if (storedCart) {
      setCartItems(JSON.parse(storedCart));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cartItems));
  }, [cartItems]);

  const addToCart = (item: CartItem) => {
    setCartItems((prev) => {
      const existingItem = prev.find((cartItem) => cartItem.id === item.id);

      if (existingItem) {
        const newQuantity = existingItem.quantity + item.quantity;
        if (newQuantity <= item.inventory) {
          return prev.map((cartItem) =>
            cartItem.id === item.id
              ? { ...cartItem, quantity: newQuantity }
              : cartItem
          );
        } else {
          alert(`Limited stock! Only ${item.inventory} items available.`);
          return prev;
        }
      }

      if (item.quantity <= item.inventory) {
        return [...prev, item];
      } else {
        alert(`Limited stock! Only ${item.inventory} items available.`);
        return prev;
      }
    });
  };

  const updateQuantity = (id: string, quantity: number) => {
    setCartItems((prev) => {
      const item = prev.find((cartItem) => cartItem.id === id);
      if (item) {
        if (quantity <= item.inventory) {
          return prev.map((cartItem) =>
            cartItem.id === id ? { ...cartItem, quantity } : cartItem
          );
        } else {
          alert(`Limited stock! Only ${item.inventory} items available.`);
          return prev;
        }
      }
      return prev;
    });
  };

  const removeFromCart = (id: string) => {
    setCartItems((prev) => prev.filter((item) => item.id !== id));
  };

  const clearCart = () => {
    setCartItems([]);
  };

  return (
    <CartContext.Provider
      value={{ cartItems, addToCart, removeFromCart, clearCart, updateQuantity }}
    >
      {children}
    </CartContext.Provider>
  );
};
