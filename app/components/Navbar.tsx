"use client";

import { useContext, useState } from "react";
import { FaShoppingCart, FaSearch, FaUser } from "react-icons/fa";
import { CartContext } from "../context/CartContext";
import { UIContext } from "../context/UIContext";
import { SearchContext } from "../context/SearchContext";
export default function Navbar() {
  const cartContext = useContext(CartContext);
const uiContext = useContext(UIContext);

if (!uiContext) {
  throw new Error("UIContext not found");
}

const { openCart } = uiContext;
const searchContext = useContext(SearchContext);

if (!searchContext) {
  throw new Error("SearchContext not found");
}

const { search, setSearch } = searchContext;
  if (!cartContext) {
    throw new Error("CartContext not found");
  }

  const { cart } = cartContext;

  const totalItems = cart.reduce(
    (total, item) => total + item.quantity,
    0
  );

  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm">
      <nav className="max-w-7xl mx-auto flex items-center justify-between px-8 py-5">

        {/* Logo */}
        <div>
          <h1 className="text-3xl font-extrabold text-purple-700">
            LuxeStore
          </h1>
        </div>

        {/* Menu */}
        <ul className="hidden md:flex gap-10 text-gray-700 font-medium">
          <li><a href="#" className="hover:text-purple-700">Home</a></li>
          <li><a href="#" className="hover:text-purple-700">Shop</a></li>
          <li><a href="#" className="hover:text-purple-700">Categories</a></li>
          <li><a href="#" className="hover:text-purple-700">Contact</a></li>
        </ul>

        {/* Icons */}
        <div className="flex items-center gap-6 text-xl text-gray-700">

          <div className="hidden md:flex items-center border rounded-lg px-3 py-2 w-64">
  <FaSearch className="text-gray-500 mr-2" />

  <input
    type="text"
    placeholder="Search products..."
    value={search}
    onChange={(e) => setSearch(e.target.value)}
    className="outline-none w-full text-sm"
  />
</div>

          <button
  onClick={openCart}
  className="hover:text-purple-700 relative"
>
            <FaShoppingCart />

            <span className="absolute -top-2 -right-3 bg-purple-600 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
              {totalItems}
            </span>

          </button>

          <button className="hover:text-purple-700">
            <FaUser />
          </button>

        </div>

      </nav>
    </header>
  );
}