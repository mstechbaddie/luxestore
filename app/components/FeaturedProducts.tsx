import { getProducts } from "../services/api";
import ProductGrid from "./ProductGrid";

export default async function FeaturedProducts() {
  const products = await getProducts();

  console.log("Products:", products);

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-8">
        <h2 className="text-4xl font-bold text-center text-gray-900">
          Featured Products
        </h2>

        <p className="text-center text-gray-500 mt-4 mb-12">
          Discover our latest arrivals.
        </p>

        <p className="text-center text-red-500 mb-6">
          Number of products: {products.length}
        </p>

        <ProductGrid products={products.slice(0, 8)} />
      </div>
    </section>
  );
}