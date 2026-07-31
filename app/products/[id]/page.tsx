import { products } from "../../data/products";
import Image from "next/image";
import { notFound } from "next/navigation";

interface ProductPageProps {
  params: Promise<{
    id: string;
  }>;
}

export default async function ProductPage({
  params,
}: ProductPageProps) {
  const { id } = await params;

  const product = products.find(
    (item) => item.id === Number(id)
  );

  if (!product) {
    notFound();
  }

  return (
    <main className="max-w-6xl mx-auto px-8 py-20">
      <div className="grid md:grid-cols-2 gap-12">
        <div className="relative h-[500px]">
          <Image
  src={product.image}
  alt={product.title}
  fill
  priority
  sizes="(max-width: 768px) 100vw, 50vw"
  className="object-contain"
/>
        </div>

        <div>
          <h1 className="text-4xl font-bold">
            {product.title}
          </h1>

          <p className="mt-4 text-gray-500">
            {product.category}
          </p>

          <p className="mt-6 text-3xl font-bold text-purple-700">
            ${product.price.toFixed(2)}
          </p>

          <p className="mt-8 text-gray-700 leading-8">
            {product.description}
          </p>
        </div>
      </div>
    </main>
  );
}