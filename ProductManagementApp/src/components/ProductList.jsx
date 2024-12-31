import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../redux/actions/productActions";
import ProductItem from "./ProductItem"; 
import { Link } from "react-router";

const ProductList = ({ onEdit, onDelete }) => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products);

  const [sortedProducts, setSortedProducts] = useState(products);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");


  useEffect(() => {
    const loadProducts = async () => {
      await dispatch(fetchProducts());
    };
    loadProducts();
  }, [dispatch]);

  useEffect(() => {
    setSortedProducts(products);
  }, [products]);

  const handleSort = (order) => {
    const sorted = [...sortedProducts].sort((a, b) => {
      if (order === "lowToHigh") {
        return a.price - b.price;
      } else if (order === "highToLow") {
        return b.price - a.price;
      }
      return 0;
    });
    setSortedProducts(sorted);
  };

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleCategoryChange = (event) => {
    setSelectedCategory(event.target.value);
  };

  const filteredProducts = sortedProducts.filter((product) => {
    const matchesSearch = product.name
      .toLowerCase()
      .includes(searchTerm.toLowerCase());
    const matchesCategory =
      selectedCategory === "" || product.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <>
      <div className="container py-5">
        <div className="card">
          <div className="card-header d-flex justify-content-between align-items-center">
            <h3 className="card-title">Product List</h3>
            <Link to="/add-product" className="btn btn-success ml-auto">
              Add New Product
            </Link>
          </div>

          <div className="card-body">
            <div className="d-flex mb-3 justify-content-evenly">
              <input
                type="text"
                className="form-control w-25"
                placeholder="Search by title"
                value={searchTerm}
                onChange={handleSearch}
              />
              <select
                className="form-control  w-25"
                value={selectedCategory}
                onChange={handleCategoryChange}
              >
                <option value="">All Categories</option>
                {products
                  .map((product) => product.category) 
                  .filter((value, index, self) => self.indexOf(value) === index)
                  .map((category, index) => (
                    <option value={category} key={index}>
                      {category}
                    </option>
                  ))}
              </select>

              <select
                className="form-control w-25"
                onChange={(e) => handleSort(e.target.value)}
              >
                <option value="">Sort by Price</option>
                <option value="lowToHigh">Price: Low to High</option>
                <option value="highToLow">Price: High to Low</option>
              </select>
            </div>
            <div className="table-responsive">
              <table className="table table-striped table-bordered">
                <thead className="thead-dark">
                  <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Category</th>
                    <th>Description</th>
                    <th>Price</th>
                    <th>Quantity</th>
                    <th>Image</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredProducts.length === 0 ? (
                    <tr>
                      <td colSpan="8">No products found.</td>
                    </tr>
                  ) : (
                    filteredProducts.map((product) => (
                      <ProductItem
                        key={product.id}
                        product={product}
                        onEdit={onEdit}
                        onDelete={onDelete}
                      />
                    ))
                  )}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductList;
