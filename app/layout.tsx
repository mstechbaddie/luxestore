import type { Metadata } from "next";
import "./globals.css";
import UIProvider from "./context/UIContext";
import CartProvider from "./context/CartContext";
import SearchProvider from "./context/SearchContext";
export const metadata: Metadata = {
  title: "LuxeStore",
  description: "Modern Fashion Store",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
  <UIProvider>
    <CartProvider>
      <SearchProvider>
        {children}
      </SearchProvider>
    </CartProvider>
  </UIProvider>
</body>
    </html>
  );
}