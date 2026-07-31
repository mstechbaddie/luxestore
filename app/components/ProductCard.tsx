"use client";

import { useContext } from "react";
import Image from "next/image";
import Link from "next/link";
import { Product } from "../types/product";
import { CartContext } from "../context/CartContext";

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  const cartContext = useContext(CartContext);

  if (!cartContext) {
    throw new Error("CartContext not found");
  }

  const { addToCart } = cartContext;

  return (
  <div className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition duration-300 flex flex-col h-full">

    <div className="flex-1">

  <Link href={`/products/${product.id}`}>
    <div className="relative h-56 cursor-pointer">
      <Image
        src={product.image}
        alt={product.title}
        fill
        sizes="(max-width: 768px) 100vw, 25vw"
        className="object-contain"
      />
    </div>

    <h3 className="mt-6 h-16 font-semibold text-lg line-clamp-2 hover:text-purple-700">
      {product.title}
    </h3>
  </Link>

      <p className="mt-3 text-purple-700 text-2xl font-bold">
        ${product.price.toFixed(2)}
      </p>

    </div>

    <button
      onClick={() => addToCart(product)}
      className="mt-6 w-full bg-purple-700 text-white py-3 rounded-xl hover:bg-purple-800 transition"
    >
      Add to Cart
    </button>

  </div>
);
}