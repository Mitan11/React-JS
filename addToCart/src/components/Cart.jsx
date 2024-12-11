import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router";
import { cartcontext } from "../App";

function Cart() {
  const [cartItems, setCartItems] = useState([]);
  const [cartcount , setCartcount] = useContext(cartcontext);

  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem("cartProduct")) || [];
    setCartItems(storedCart);
  }, []);

  const handleRemoveItem = (id) => {
    const updatedCart = cartItems.filter((item) => item.id !== id);
    setCartItems(updatedCart);
    localStorage.setItem("cartProduct", JSON.stringify(updatedCart));
    setCartcount(cartcount - 1)
  };

  const handleIncreaseQuantity = (id) => {
    const updatedCart = cartItems.map((item) =>
      item.id === id ? { ...item, quantity: item.quantity + 1 } : item
    );
    setCartItems(updatedCart);
    localStorage.setItem("cartProduct", JSON.stringify(updatedCart));
  };

  const handleDecreaseQuantity = (id) => {
    const updatedCart = cartItems.map((item) =>
      item.id === id && item.quantity > 1
        ? { ...item, quantity: item.quantity - 1 }
        : item
    );
    setCartItems(updatedCart);
    localStorage.setItem("cartProduct", JSON.stringify(updatedCart));
  };

  const handleClearAll = () => {
    setCartItems([]);
    localStorage.removeItem("cartProduct");
    setCartcount(0)
  };

  const calculateTotal = () => {
    return cartItems.reduce(
      (total, item) => total + item.quantity * item.price,
      0
    );
  };

  return (
    <div className="bg-gray-50 min-h-screen p-6">
      <div className="container mx-auto">
        <h1 className="text-4xl font-extrabold text-gray-800 mb-6 text-center">
          Shopping Cart
        </h1>
        {cartItems.length > 0 ? (
          <div className="shadow-lg rounded-lg bg-white p-6">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-gray-100 text-gray-700 text-sm uppercase">
                  <th className="py-3 px-6 border-b">Product</th>
                  <th className="py-3 px-6 border-b text-center">Quantity</th>
                  <th className="py-3 px-6 border-b text-center">Price</th>
                  <th className="py-3 px-6 border-b text-center">Actions</th>
                </tr>
              </thead>
              <tbody>
                {cartItems.map((item) => (
                  <tr key={item.id} className="hover:bg-gray-50">
                    <td className="py-4 px-6 border-b">
                      <span className="font-medium text-gray-800">
                        {item.title}
                      </span>
                    </td>
                    <td className="py-4 px-6 border-b text-center">
                      <div className="flex items-center justify-center space-x-2">
                        <button
                          onClick={() => handleDecreaseQuantity(item.id)}
                          className="px-2 py-1 bg-gray-300 text-gray-700 rounded-md hover:bg-gray-400"
                        >
                          -
                        </button>
                        <span>{item.quantity}</span>
                        <button
                          onClick={() => handleIncreaseQuantity(item.id)}
                          className="px-2 py-1 bg-gray-300 text-gray-700 rounded-md hover:bg-gray-400"
                        >
                          +
                        </button>
                      </div>
                    </td>
                    <td className="py-4 px-6 border-b text-center text-green-500 font-bold">
                      ${item.price}
                    </td>
                    <td className="py-4 px-6 border-b text-center">
                      <button
                        onClick={() => handleRemoveItem(item.id)}
                        className="text-white bg-red-500 px-4 py-2 rounded-md hover:bg-red-600"
                      >
                        Remove
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            <div className="mt-6 flex justify-between items-center">
              <h2 className="text-2xl font-semibold text-gray-800">
                Total:{" "}
                <span className="text-green-500">${calculateTotal()}</span>
              </h2>
              <div className="flex space-x-4">
                <button
                  onClick={handleClearAll}
                  className="bg-gray-500 text-white px-6 py-3 rounded-md hover:bg-gray-600"
                >
                  Clear All
                </button>
                <button className="bg-blue-500 text-white px-6 py-3 rounded-md hover:bg-blue-600">
                  Proceed to Checkout
                </button>
              </div>
            </div>
          </div>
        ) : (
          <div className="text-center py-20 bg-white shadow-lg rounded-lg">
            <h2 className="text-2xl text-gray-700">Your cart is empty.</h2>
            <p className="text-gray-500 mt-2">
              Add items to your cart to see them here.
            </p>
            <Link to={"/"}>
              <button className="mt-4 px-6 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600">
                Shop Now
              </button>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}

export default Cart;
