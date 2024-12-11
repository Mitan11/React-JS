import React, { createContext, useState } from "react";
import Home from "./components/Home";
import { Route, Routes } from "react-router";
import Cart from "./components/Cart";
import axios from "axios";

export const cartcontext = createContext();
export const addtocartcontext = createContext();

function App() {
  const [cartCount, setCartCount] = useState(0);

  const addtocart = (id) => {
    setCartCount((prevCount) => prevCount + 1);
    axios
      .get(`http://localhost:3000/product/${id}`)
      .then((response) => {
        const product = response.data;
        const cartdata = JSON.parse(localStorage.getItem("cartProduct")) || [];
        cartdata.push({ ...product, quantity: 1 });
        localStorage.setItem("cartProduct", JSON.stringify(cartdata));

        console.log("Product added to cart:", product);
        console.log("Updated cart:", cartdata);
      })
      .catch((error) => console.error("Error fetching data:", error));
  };

  return (
    <>
      <cartcontext.Provider value={[cartCount,setCartCount]}>
        <addtocartcontext.Provider value={addtocart}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/cart" element={<Cart />} />
          </Routes>
        </addtocartcontext.Provider>
      </cartcontext.Provider>
    </>
  );
}

export default App;
