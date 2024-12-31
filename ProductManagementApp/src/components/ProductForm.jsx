import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { createProduct } from "../redux/actions/productActions";
import { useNavigate } from "react-router";

const ProductForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    price: "",
    description: "",
    category: "",
    quantity: "",
    image: "",
  });

  const [error, setError] = useState({});
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    setError({});

    const newError = {};

    if (!formData.name) newError.name = "Product Name is required.";
    if (!formData.price || isNaN(formData.price) || formData.price <= 0)
      newError.price = "Price must be a valid positive number.";
    if (
      !formData.quantity ||
      isNaN(formData.quantity) ||
      formData.quantity <= 0
    )
      newError.quantity = "Quantity must be a valid positive number.";
    if (!formData.description)
      newError.description = "Description is required.";
    if (!formData.category) newError.category = "Category is required.";
    if (!formData.image) newError.image = "Image URL is required.";
    else {
      const imageUrlPattern = /^(https?|ftp):\/\/[^\s/$.?#].[^\s]*$/i;
      if (!imageUrlPattern.test(formData.image)) {
        newError.image = "Please enter a valid image URL.";
      }
    }

    if (Object.keys(newError).length > 0) {
      setError(newError);
      return;
    }

    dispatch(createProduct(formData));
    navigate("/");

    setFormData({
      name: "",
      price: "",
      description: "",
      category: "",
      quantity: "",
      image: "",
    });
  };

  return (
    <div className="container my-5">
      <div className="card">
        <div className="card-header text-center">
          <h2 className="mb-0">Add Product</h2>
        </div>
        <div className="card-body">
          <form onSubmit={handleSubmit}>
            {Object.keys(error).length > 0 && (
              <div className="alert alert-danger">
                {Object.values(error).map((err, idx) => (
                  <p key={idx}>{err}</p>
                ))}
              </div>
            )}

            <div className="mb-3">
              <label className="form-label">Product Name</label>
              <input
                type="text"
                placeholder="Enter product name"
                value={formData.name}
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
                className="form-control"
              />
              {error.name && (
                <small className="text-danger">{error.name}</small>
              )}
            </div>

            <div className="mb-3">
              <label className="form-label">Price</label>
              <input
                type="number"
                placeholder="Enter price"
                value={formData.price}
                onChange={(e) =>
                  setFormData({ ...formData, price: e.target.value })
                }
                className="form-control"
              />
              {error.price && (
                <small className="text-danger">{error.price}</small>
              )}
            </div>

            <div className="mb-3">
              <label className="form-label">Description</label>
              <textarea
                placeholder="Enter description"
                value={formData.description}
                onChange={(e) =>
                  setFormData({ ...formData, description: e.target.value })
                }
                className="form-control"
                rows="3"
              />
              {error.description && (
                <small className="text-danger">{error.description}</small>
              )}
            </div>

            <div className="mb-3">
              <label className="form-label">Category</label>
              <input
                type="text"
                placeholder="Enter category"
                value={formData.category}
                onChange={(e) =>
                  setFormData({ ...formData, category: e.target.value })
                }
                className="form-control"
              />
              {error.category && (
                <small className="text-danger">{error.category}</small>
              )}
            </div>

            <div className="mb-3">
              <label className="form-label">Quantity</label>
              <input
                type="number"
                placeholder="Enter quantity"
                value={formData.quantity}
                onChange={(e) =>
                  setFormData({ ...formData, quantity: e.target.value })
                }
                className="form-control"
              />
              {error.quantity && (
                <small className="text-danger">{error.quantity}</small>
              )}
            </div>

            <div className="mb-3">
              <label className="form-label">Image URL</label>
              <input
                type="url"
                placeholder="Enter image URL"
                value={formData.image}
                onChange={(e) =>
                  setFormData({ ...formData, image: e.target.value })
                }
                className="form-control"
              />
              {error.image && (
                <small className="text-danger">{error.image}</small>
              )}
            </div>

            <div className="text-center">
              <button type="submit" className="btn btn-success">
                Add Product
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ProductForm;
