import React, { createContext, useEffect, useState } from "react";
import NavBar from "./NavBar";
import Card from "./Card";
import axios from "axios";
import Cart from "./Cart";



function Home() {
  const [products, setProducts] = useState([]);

  

  useEffect(() => {
    axios
      .get("http://localhost:3000/product")
      .then((response) => {
        setProducts(response.data);
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  return (
    <>

          <NavBar />
          <div className="px-4 md:px-8 flex justify-evenly flex-wrap gap-3">
            {products.map((product) => (
              <Card key={product.id} product={product} />
            ))}
          </div>
          
    </>
  );
}

export default Home;
