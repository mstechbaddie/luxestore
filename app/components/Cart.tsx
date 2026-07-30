"use client";

import { useContext } from "react";
import Image from "next/image";
import { CartContext } from "../context/CartContext";

export default function Cart() {
  const cartContext = useContext(CartContext);

  if (!cartContext) return null;

  const { cart } = cartContext;

  const total = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <div className="fixed top-0 right-0 h-screen w-96 bg-white shadow-2xl p-6 overflow-y-auto">
      <h2 className="text-2xl font-bold mb-6">
        Shopping Cart
      </h2>

      {cart.length === 0 ? (
        <p className="text-gray-500">
          Your cart is empty.
        </p>
      ) : (
        <>
          <div className="space-y-6">
            {cart.map((item) => (
              <div
                key={item.id}
                className="flex gap-4 border-b pb-4"
              >
                <div className="relative w-20 h-20">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-contain"
                  />
                </div>

                <div className="flex-1">
                  <h3 className="font-semibold text-sm">
                    {item.title}
                  </h3>

                  <p className="text-purple-700 font-bold mt-1">
                    ${item.price.toFixed(2)}
                  </p>

                  <p className="text-sm mt-1">
                    Quantity: {item.quantity}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 border-t pt-6">
            <h3 className="text-xl font-bold">
              Total: ${total.toFixed(2)}
            </h3>

            <button className="mt-5 w-full bg-purple-700 text-white py-3 rounded-xl hover:bg-purple-800">
              Checkout
            </button>
          </div>
        </>
      )}
    </div>
  );
}