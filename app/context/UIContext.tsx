"use client";

import {
  createContext,
  useState,
  ReactNode,
} from "react";

interface UIContextType {
  cartOpen: boolean;
  openCart: () => void;
  closeCart: () => void;
}

export const UIContext =
  createContext<UIContextType | null>(null);

export default function UIProvider({
  children,
}: {
  children: ReactNode;
}) {
  const [cartOpen, setCartOpen] = useState(false);

  return (
    <UIContext.Provider
      value={{
        cartOpen,
        openCart: () => setCartOpen(true),
        closeCart: () => setCartOpen(false),
      }}
    >
      {children}
    </UIContext.Provider>
  );
}