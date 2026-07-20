import React, { useState } from "react";
import { useCart } from "../context/CartContext";
import { Link } from "react-router-dom";
import { Package, MapPin } from "lucide-react";
import ConfirmOrder from "./ConfirmOrder";
import Cart from "./Cart";

const Checkout = () => {
  const { cartTotal, clearCart, cart } = useCart();

  const [address, setAddress] = useState({
    name: "",
    address: "",
    city: "",
    zip: "",
  });

  const [isConfirmed, setIsConfirmed] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setAddress((prev) => ({ ...prev, [name]: value }));
  };

  const handleSumbit = (e) => {
    e.preventDefault();
    clearCart();
    setIsConfirmed(true);
  };

  const handleNext = () => {
    <ConfirmOrder />;
  };

  if (isConfirmed) return <ConfirmOrder address={address} />;

  return (
    <>
      <div className="container mx-auto px-4 md:px-8 pt-8">
        <h1 className="text-5xl font-extrabold mb-10 tracking-tight">
          Address
        </h1>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          <div className="lg:col-span-2 bg-gray-900 rounded-2xl shadow-2xl border border-gray-800 p-8">
            <h3 className="text-3xl font-bold flex gap-3 border-b border-gray-700 pb-4  items-center text-orange-400 mb-6 ">
              <MapPin className="h-7 w-7" />
              <span>Enter Address :</span>
            </h3>

            <form className="space-y-6" onSubmit={handleSumbit}>
              {Object.keys(address).map((key) => (
                <div key={key}>
                  <label htmlFor={key} className="block text-sm font-semibold">
                    {key === "zip" ? "Pin Code" : key}
                  </label>
                  <input
                    type={key === "zip" ? "number" : "text"}
                    id={key}
                    name={key}
                    value={address[key]}
                    onChange={handleChange}
                    required
                    className="mt-1 block w-full px-5 py-3 border border-gray-700 rounded-xl shadow-inner text-white bg-gray-800 placeholder-gray-500"
                  />
                </div>
              ))}
              <div className="pt-6">
                <button
                  type="submit"
                  className="flex gap-3 items-center mx-auto text-white w-full py-3 bg-orange-500 rounded-full font-bold shadow-lg shadow-orange-800/50 cursor-pointer hover:bg-orange-600 transition duration-300 justify-center hover:ring-orange-700 hover:ring-4"
                >
                  <span> save & Place Order </span>
                </button>
              </div>
            </form>
          </div>
          <div className="lg:col-span-1 overflow-hidden p-8 bg-gray-900 rounded-2xl shadow-2xl border-1-4 sticky top-20 h-fit border border-gray-800">
            <h3 className="text-3xl font-bold mb-5 border-b border-gray-700 pb-3 flex items-center space-x-2">
              <Package className="w-6 h-6 text-orange-400" />
              <span>Order Summury</span>
            </h3>

            <div className="space-y-4 text-gray-400">
              {cart.map((item) => (
                <div
                  key={item.id}
                  className="flex justify-between text-base border-b border-gray-400 pb-2"
                >
                  <span>{item.name}</span>
                  <span>{item.price * item.quantity}</span>
                </div>
              ))}

              <div className="space-y-4 text-gray-400">
                <div className="flex justify-between text-xl ">
                  <span>Total Price : </span>
                  <span className="font-semibold">₹ {cartTotal}</span>
                </div>
                <div className="flex justify-between text-xl ">
                  <span>Shipping (Express) : </span>
                  <span className="font-semibold text-green-500">Free</span>
                </div>
                <div className="flex justify-between pt-6 border-t border-gray-700 ">
                  <span className="text-2xl font-extrabold">
                    Estimated Total :
                  </span>
                  <span className="text-2xl font-semibold text-orange-500">
                    ₹ {cartTotal}
                  </span>
                </div>
              </div>

              <p className="text-xs text-gray-500 text-center mt-4">
                All transactions are encrypted and secure.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Checkout;
