import {
  FaFemale,
  FaMale,
  FaGem,
  FaLaptop,
} from "react-icons/fa";

const categories = [
  {
    name: "Women's Fashion",
    icon: <FaFemale className="text-5xl text-purple-600" />,
  },
  {
    name: "Men's Fashion",
    icon: <FaMale className="text-5xl text-purple-600" />,
  },
  {
    name: "Jewelry",
    icon: <FaGem className="text-5xl text-purple-600" />,
  },
  {
    name: "Electronics",
    icon: <FaLaptop className="text-5xl text-purple-600" />,
  },
];

export default function Categories() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-8">

        <h2 className="text-4xl font-bold text-center text-gray-900">
          Shop by Category
        </h2>

        <p className="text-center text-gray-500 mt-4 mb-12">
          Explore our curated collections.
        </p>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {categories.map((category) => (
            <div
              key={category.name}
              className="bg-purple-50 rounded-2xl p-8 text-center shadow hover:shadow-lg hover:-translate-y-2 transition-all duration-300 cursor-pointer"
            >
              <div className="flex justify-center">
                {category.icon}
              </div>

              <h3 className="mt-6 text-lg font-semibold text-gray-800">
                {category.name}
              </h3>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}