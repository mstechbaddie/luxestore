import Image from "next/image";
export default function Hero() {
  return (
    <section className="bg-gradient-to-r from-purple-50 to-white">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 items-center px-8 py-32">

        {/* Left */}
        <div>
          <p className="text-purple-600 font-semibold text-lg">
            New Collection 2026
          </p>

          <h1 className="text-5xl md:text-7xl font-extrabold text-gray-900 mt-4 leading-tight">
            Elevate Your
            <span className="text-purple-700"> Style</span>
          </h1>

          <p className="mt-6 text-gray-600 text-lg leading-8 max-w-lg">
            Discover premium fashion for men and women.
            Shop the latest trends with comfort, quality,
            and elegance.
          </p>

          <div className="mt-10 flex gap-4">
            <button className="bg-purple-700 text-white px-8 py-4 rounded-full hover:bg-purple-800 transition">
              Shop Now
            </button>

            <button className="border-2 border-purple-700 text-purple-700 px-8 py-4 rounded-full hover:bg-purple-700 hover:text-white transition">
              Explore
            </button>
          </div>
        </div>

        {/* Right */}
        <div className="flex justify-center mt-12 md:mt-0">
  <div className="relative w-[380px] h-[520px]">
    <Image
      src="/images/hero.png"
      alt="Fashion Model"
      fill
      priority
      sizes="(max-width: 768px) 100vw, 380px"
      className="object-contain rounded-3xl shadow-2xl"
    />
  </div>
</div>

      </div>
    </section>
  );
}