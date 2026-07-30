import { Product } from "../types/product";

export async function getProducts(): Promise<Product[]> {
  const res = await fetch("https://fakestoreapi.com/products", {
    cache: "no-store",
  });

  if (!res.ok) {
    console.error("Failed to fetch products:", res.status);

    // Return an empty array instead of crashing the build
    return [];
  }

  return res.json();
}