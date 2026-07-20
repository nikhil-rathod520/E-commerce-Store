import React from "react";
import { useCart } from "../context/CartContext";
import { Link } from "react-router-dom";
import { ShoppingCart, ChevronLeft, Zap } from "lucide-react";
import CartItem from "../components/CartItem";

const Cart = () => {
  const { cart, cartTotal } = useCart();
  return (
    <>
      <div className="container mx-auto px-4 md:px-8 pt-8">
        <div className="flex items-center mb-10">
          <Link to={"/"}>
            <button className="flex items-center text-gray-400 hover:text-orange-400 transition duration-150 mb-12 font-semibold cursor-pointer">
              <ChevronLeft className="h-5 w-5" />
              <span>Back to All Products</span>
            </button>
          </Link>
        </div>
        <h2 className="text-4xl font-extrabold mb-10 tracking-tight top-20 h-fit border-gray-400">
          Shopping Cart ({useCart().cartCount})
        </h2>
        {cart.length === 0 && (
          <h1 className="text-red-600 font-semibold text-2xl top-0">
            Your Cart is empty
          </h1>
        )}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          <div className="lg:col-span-2 space-y-4">
            {cart.map((item) => (
              <CartItem key={item.id} item={item} />
            ))}
          </div>
          <div className="lg:col-span-1 p-8 bg-gray-900 rounded-2xl shadow-2xl border-1-4 sticky top-20 h-fit border border-gray-800">
            <h3 className="text-3xl font-bold mb-5 border-b border-gray-700 pb-3 flex items-center space-x-2">
              <div className="flex justify-between">
                <span className="w-6 h-6 text-orange-400">₹ </span>
                <span>Total Order</span>
              </div>
            </h3>
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
              <Link
                to={"/checkout"}
                className="flex gap-3 items-center mx-auto text-white w-full py-3 bg-orange-500 rounded-full font-bold shadow-lg shadow-orange-800/50 cursor-pointer hover:bg-orange-600 transition duration-300 justify-center hover:ring-orange-700 hover:ring-4"
              >
                <Zap className="w-7 h-7" />
                <span>Proceed securely</span>
              </Link>
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

export default Cart;
