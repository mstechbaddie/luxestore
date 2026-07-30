import Image from "next/image";
import { Product } from "../types/product";

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <div className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition duration-300">
      <div className="relative h-56">
        <Image
          src={product.image}
          alt={product.title}
          fill
          sizes="(max-width:768px) 100vw, 300px"
          className="object-contain"
        />
      </div>

      <h3 className="mt-6 font-semibold text-lg line-clamp-2">
        {product.title}
      </h3>

      <p className="mt-3 text-purple-700 text-2xl font-bold">
        ${product.price}
      </p>

      <button className="mt-6 w-full bg-purple-700 text-white py-3 rounded-xl hover:bg-purple-800 transition">
        Add to Cart
      </button>
    </div>
  );
}