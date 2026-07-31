import { Product } from "../types/product";
import { products } from "../data/products";

export async function getProducts(): Promise<Product[]> {
  return products;
}