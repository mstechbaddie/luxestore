"use client";

import { useContext } from "react";
import { Product } from "../types/product";
import { SearchContext } from "../context/SearchContext";
import ProductCard from "./ProductCard";

interface ProductGridProps {
  products: Product[];
}

export default function ProductGrid({
  products,
}: ProductGridProps) {
  const searchContext = useContext(SearchContext);

  if (!searchContext) {
    throw new Error("SearchContext not found");
  }

  const { search } = searchContext;

  const filteredProducts = products.filter((product) =>
    product.title.toLowerCase().includes(search.toLowerCase())
  );
console.log("Products received:", products);
console.log("Search value:", search);
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
      {filteredProducts.map((product) => (
        <ProductCard
          key={product.id}
          product={product}
        />
      ))}
    </div>
  );
}