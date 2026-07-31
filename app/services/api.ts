import { Product } from "../types/product";

export async function getProducts(): Promise<Product[]> {
  const res = await fetch("https://fakestoreapi.com/products");

  console.log("Status:", res.status);

  const data = await res.json();

  console.log("Data:", data);

  return data;
}