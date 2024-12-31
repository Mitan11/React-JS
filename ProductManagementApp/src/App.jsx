import React from "react";
import Navbar from "./components/Navbar";
import ProductItem from "./components/ProductItem";
import ProductList from "./components/ProductList";
import { Route, Routes } from "react-router";
import ProductForm from "./components/ProductForm";
import EditProductForm from "./components/EditProductForm";

function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<ProductList />} />
        <Route path="/add-product" element={<ProductForm />} />
        <Route path="/edit-product/:id" element={<EditProductForm />} />
      </Routes>
    </>
  );
}

export default App;
