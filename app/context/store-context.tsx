"use client";

import React, { createContext, useContext, useEffect, useState, useMemo } from "react";
import { Product, INITIAL_PRODUCTS } from "../lib/products";

export type CartItem = {
  product: Product;
  quantity: number;
  selectedLength?: string;
};

type StoreContextType = {
  products: Product[];
  cart: CartItem[];
  addToCart: (product: Product, quantity?: number, selectedLength?: string) => void;
  removeFromCart: (productId: string, selectedLength?: string) => void;
  updateQuantity: (productId: string, quantity: number, selectedLength?: string) => void;
  clearCart: () => void;
  cartCount: number;
  cartSubtotal: number;
  isCartOpen: boolean;
  openCart: () => void;
  closeCart: () => void;
  toggleCart: () => void;
  toastMessage: string | null;
  dismissToast: () => void;
  quickViewProduct: Product | null;
  setQuickViewProduct: (product: Product | null) => void;
};

const StoreContext = createContext<StoreContextType | undefined>(undefined);

const CART_STORAGE_KEY = "derbroyal_cart_v1";

export function StoreProvider({ children }: { children: React.ReactNode }) {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [toastMessage, setToastMessage] = useState<string | null>(null);
  const [quickViewProduct, setQuickViewProduct] = useState<Product | null>(null);
  const [isHydrated, setIsHydrated] = useState(false);

  // Load the saved cart from localStorage after mount.
  useEffect(() => {
    try {
      const storedCart = localStorage.getItem(CART_STORAGE_KEY);
      if (storedCart) {
        const parsedCart: CartItem[] = JSON.parse(storedCart);
        if (Array.isArray(parsedCart)) {
          const currentCart = parsedCart.flatMap((item) => {
            const product = INITIAL_PRODUCTS.find(
              (currentProduct) => currentProduct.id === item.product?.id
            );
            return product ? [{ ...item, product }] : [];
          });
          setCart(currentCart);
        }
      }
    } catch (err) {
      console.warn("Storage sync error:", err);
    } finally {
      setIsHydrated(true);
    }
  }, []);

  // Save cart changes
  useEffect(() => {
    if (!isHydrated) return;
    try {
      localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(cart));
    } catch (err) {
      console.warn("Could not save cart:", err);
    }
  }, [cart, isHydrated]);

  const showToast = (message: string) => {
    setToastMessage(message);
    setTimeout(() => {
      setToastMessage((current) => (current === message ? null : current));
    }, 3800);
  };

  const dismissToast = () => setToastMessage(null);

  const addToCart = (product: Product, quantity = 1, selectedLength?: string) => {
    const lengthChoice = selectedLength || (product.lengths && product.lengths.length > 0 ? product.lengths[0] : undefined);
    
    setCart((prevCart) => {
      const existingIndex = prevCart.findIndex(
        (item) => item.product.id === product.id && item.selectedLength === lengthChoice
      );

      if (existingIndex > -1) {
        const updated = [...prevCart];
        updated[existingIndex] = {
          ...updated[existingIndex],
          quantity: updated[existingIndex].quantity + quantity,
        };
        return updated;
      } else {
        return [...prevCart, { product, quantity, selectedLength: lengthChoice }];
      }
    });

    showToast(`Added "${product.name}" to cart ✨`);
    setIsCartOpen(true);
  };

  const removeFromCart = (productId: string, selectedLength?: string) => {
    setCart((prevCart) =>
      prevCart.filter(
        (item) => !(item.product.id === productId && item.selectedLength === selectedLength)
      )
    );
  };

  const updateQuantity = (productId: string, quantity: number, selectedLength?: string) => {
    if (quantity <= 0) {
      removeFromCart(productId, selectedLength);
      return;
    }

    setCart((prevCart) =>
      prevCart.map((item) => {
        if (item.product.id === productId && item.selectedLength === selectedLength) {
          return { ...item, quantity };
        }
        return item;
      })
    );
  };

  const clearCart = () => {
    setCart([]);
  };

  const cartCount = useMemo(() => {
    return cart.reduce((total, item) => total + item.quantity, 0);
  }, [cart]);

  const cartSubtotal = useMemo(() => {
    return cart.reduce((total, item) => total + item.product.price * item.quantity, 0);
  }, [cart]);

  return (
    <StoreContext.Provider
      value={{
        products: INITIAL_PRODUCTS,
        cart,
        addToCart,
        removeFromCart,
        updateQuantity,
        clearCart,
        cartCount,
        cartSubtotal,
        isCartOpen,
        openCart: () => setIsCartOpen(true),
        closeCart: () => setIsCartOpen(false),
        toggleCart: () => setIsCartOpen((prev) => !prev),
        toastMessage,
        dismissToast,
        quickViewProduct,
        setQuickViewProduct,
      }}
    >
      {children}
    </StoreContext.Provider>
  );
}

export function useStore() {
  const context = useContext(StoreContext);
  if (!context) {
    throw new Error("useStore must be used within a StoreProvider");
  }
  return context;
}
