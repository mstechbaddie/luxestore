import { getProducts } from "../services/api";
import ProductCard from "./ProductCard";

export default async function FeaturedProducts() {
  const products = await getProducts();

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-8">
        <h2 className="text-4xl font-bold text-center text-gray-900">
          Featured Products
        </h2>

        <p className="text-center text-gray-500 mt-4 mb-12">
          Discover our latest arrivals.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.slice(0, 8).map((product) => (
            <ProductCard
              key={product.id}
              product={product}
            />
          ))}
        </div>
      </div>
    </section>
  );
}