"use client";

import { FaShoppingCart, FaSearch, FaUser } from "react-icons/fa";

export default function Navbar() {
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
          <li>
            <a href="#" className="hover:text-purple-700 transition">
              Home
            </a>
          </li>

          <li>
            <a href="#" className="hover:text-purple-700 transition">
              Shop
            </a>
          </li>

          <li>
            <a href="#" className="hover:text-purple-700 transition">
              Categories
            </a>
          </li>

          <li>
            <a href="#" className="hover:text-purple-700 transition">
              Contact
            </a>
          </li>
        </ul>

        {/* Icons */}
        <div className="flex items-center gap-6 text-xl text-gray-700">

          <button className="hover:text-purple-700">
            <FaSearch />
          </button>

          <button className="hover:text-purple-700 relative">
            <FaShoppingCart />

            <span className="absolute -top-2 -right-3 bg-purple-600 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
              0
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